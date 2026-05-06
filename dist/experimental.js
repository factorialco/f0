import { a9 as pr, aa as br, ab as xr, ac as vr, ad as Ft, ae as Te, af as wr, O as x, W as X, P as pe, u as ie, ag as yr, ah as Nr, ai as Cr, aj as Ir, ak as kr, a5 as oe, al as Sr, am as pt, an as st, ao as Me, U as Ee, ap as Ar, aq as Lr, ar as G, as as Fr, at as _r, M as Oe, au as hn, av as Er, aw as Or, Q as j, ax as gn, a8 as R, ay as ve, az as Dr, aA as Tr, aB as Pr, aC as Rr, aD as zr, aE as Ce, aF as pn, aG as Br, aH as be, aI as We, aJ as $r, aK as bt, n as bn, aL as Ne, aM as Mr, aN as xn, a6 as ne, aO as q, R as vn, aP as wn, aQ as Wr, aR as yn, aS as me, a7 as ee, aT as jr, aU as Vr, aV as Ur, aW as Gr, X as ge, aX as He, aY as Hr, aZ as Kr, a_ as qr, a$ as Yr, b0 as Ke, b1 as Nn, b2 as Zr, b3 as Jr, b4 as Xr, b5 as je, b6 as Qr, b7 as ea, b8 as ta, b9 as na, ba as ra, bb as aa, bc as la, bd as sa, be as ia, bf as oa, bg as it, bh as ot, bi as Cn, bj as ca, bk as da, bl as In, bm as ua, bn as fa, T as qe, bo as xt, bp as kn, bq as ma, br as Sn, bs as ha, bt as ga, bu as pa, bv as _e, bw as ba, bx as Pe, by as _t, bz as ct, bA as xa, bB as va, a as wa, c as ya, bC as Na, bD as An, bE as Ca, bF as Ia, F as ka, bG as Ln, _ as Sa, bH as Fn, bI as Aa, bJ as Et, bK as La, bL as Fa, bM as _a, bN as Ea, bO as _n, bP as Oa, bQ as Da, bR as Ta, bS as Pa, bT as Ra, Y as En, bU as Ot, bV as za, bW as Ba, bX as Dt, bY as ue, bZ as On, b_ as vt, b$ as wt, c0 as yt, c1 as Dn, c2 as Nt, c3 as Tn, $ as Pn, c4 as $a, c5 as Ma, c6 as Wa, c7 as ja, c8 as Va, c9 as Ua, ca as Ga, cb as Ha, cc as Ka, cd as qa, ce as Ya, cf as Tt, cg as Pt, ch as Rt, ci as Za, cj as Ja, ck as Xa, cl as Qa, cm as Rn, cn as el, co as tl, cp as nl } from "./F0AiChat-CJmCKlSt.js";
import { cK as Jc, cJ as Xc, cs as Qc, cW as ed, cD as td, cE as nd, cr as rd, cG as ad, ct as ld, d6 as sd, d4 as id, cu as od, cH as cd, cI as dd, cF as ud, cv as fd, cS as md, cT as hd, cX as gd, d2 as pd, d3 as bd, cB as xd, d5 as vd, cC as wd, cw as yd, cM as Nd, cL as Cd, cx as Id, cy as kd, cz as Sd, cU as Ad, d7 as Ld, cq as Fd, cV as _d, cZ as Ed, c_ as Od, cR as Dd, cO as Td, cQ as Pd, cN as Rd, cA as zd, cP as Bd, c$ as $d, d0 as Md, cY as Wd, d1 as jd } from "./F0AiChat-CJmCKlSt.js";
import { jsx as t, jsxs as o, Fragment as Y } from "react/jsx-runtime";
import ae, { forwardRef as H, useRef as z, useTransition as rl, useState as E, useLayoutEffect as zn, useId as al, useContext as Ye, createContext as Ct, useEffect as M, useCallback as U, useMemo as K, Fragment as ll, isValidElement as sl, cloneElement as Bn, Children as $n } from "react";
import { C as il, P as ol, g as Mn, c as cl, F as dt, f as dl, a as ul, u as fl, A as ml, B as hl, L as gl, b as pl, V as bl, d as xl, e as zt, h as vl, i as wl } from "./index-B8I6Penp.js";
import { l as Ud, m as Gd, j as Hd, n as Kd, s as qd, D as Yd, k as Zd, o as Jd, w as Xd, x as Qd, N as eu, y as tu, p as nu, r as ru, R as au, q as lu, _ as su, v as iu, t as ou } from "./index-B8I6Penp.js";
const yl = pr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Wn = H(({ className: e, items: n }, r) => /* @__PURE__ */ t(br, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(xr, {}),
  /* @__PURE__ */ t(vr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Wn.displayName = "CollapsedBreadcrumbItem";
const It = 50, Nl = 120, Ve = 8;
function Cl(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let l = e - a - Ve, s = 0, i = 1;
  for (let c = r - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, s = c, i++;
  }
  if (i < r)
    for (l -= It; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function Bt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ve;
    default:
      return e[0] + It + e[e.length - 1] + Ve;
  }
}
function Il(e, n) {
  return Nl * e + (n ? It : 0) + Ve;
}
function kl(e, n, r = []) {
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
  const a = n.length <= 2, l = r.map((i) => i.clientWidth);
  if (a)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Bt(l)
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
    minWidth: Bt(l)
  };
}
function Sl({ breadcrumbs: e, append: n }) {
  const r = z(null), a = z(null), [, l] = rl(), [s, i] = E(null), c = (s?.collapsedItems || []).length > 0;
  return zn(() => {
    const d = r.current, f = a.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = r.current?.clientWidth ?? null, p = Array.from(f.children);
      l(() => {
        const g = kl(
          h,
          e,
          p
        );
        i(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(Ft, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    Ft,
    {
      ref: r,
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
            ref: a,
            children: e.map((d, f) => /* @__PURE__ */ t(
              Te,
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
        s && s.headItem && /* @__PURE__ */ o(wr, { children: [
          /* @__PURE__ */ t(
            Te,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          c && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              Wn,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((d, f) => /* @__PURE__ */ t(
              Te,
              {
                item: d,
                isLast: f === s.tailItems.length - 1,
                isFirst: !1,
                children: f === s.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ t(Y, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
            Te,
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
const Al = pe({
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
], Ll = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...l
}, s) => {
  const i = al(), {
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
      className: x(Al({ size: n }), h),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
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
          ...(({ style: g, ...v }) => v)(p),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              $t.map((g) => /* @__PURE__ */ t("clipPath", { id: `${i}-${g.id}`, children: /* @__PURE__ */ t("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: $t.map((g) => /* @__PURE__ */ t(
              X.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${g.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": a ? 8 : 1,
                  "--rotate": a ? "90deg" : "0deg",
                  opacity: a ? g.id === "left" ? 1 : 0 : 1,
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
                      background: r ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
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
}, jn = H(Ll), Vn = Ct(null), Fl = 15, _l = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [l, s] = E(n), [i, c] = E(!1), [d, f] = E(!0), [u, m] = E(
    Fl
  ), h = z(null), p = (v) => {
    h.current = v;
  }, g = () => {
    h.current && h.current();
  };
  return M(() => {
    s(n);
  }, [n]), M(() => {
    if (i && r?.(), !i) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [i, r]), /* @__PURE__ */ t(
    Vn.Provider,
    {
      value: {
        ...a,
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
}, we = () => {
};
function Ze() {
  const e = Ye(Vn);
  return e === null ? {
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
  } : e;
}
const Un = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: l } = Ze(), s = ie(), [i, c] = E(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(yr, { children: /* @__PURE__ */ o(Nr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Cr, { asChild: !0, children: /* @__PURE__ */ t(
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
        children: /* @__PURE__ */ t(
          Ir,
          {
            onCheckedChange: (d) => {
              a(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: x(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              oe(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              kr,
              {
                className: x(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  jn,
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
    !l && /* @__PURE__ */ t(Sr, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Mt = "one_sidebar_locked", Gn = Ct(void 0);
function Ie() {
  const e = Ye(Gn);
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
  const { currentPath: n } = pt(), [r, a] = E(!1), [l, s] = E(!1), i = r ? Me.xl : Me.md, c = st(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = E(() => {
    const N = localStorage.getItem(Mt);
    return N !== null ? !!N : !0;
  }), [u, m] = E(!1), [h, p] = E(
    null
  ), g = U(
    ({ isInvokedByUser: N } = {
      isInvokedByUser: !0
    }) => {
      s(N ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = U(
    (N) => {
      c || (N.clientX < 32 && m(!0), N.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return M(() => {
    m(!1);
  }, [n]), M(() => {
    l && localStorage.setItem(Mt, d ? "1" : "");
  }, [d, l]), M(() => () => {
    p(y);
  }, [y]), /* @__PURE__ */ t(
    Gn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: y,
        toggleSidebar: g,
        prevSidebarState: h,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const Wt = X.create(G), jt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Ol = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, l] = E(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ee, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: x(
        "flex h-6 w-6 items-center justify-center rounded",
        oe()
      ),
      onClick: s,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        Wt,
        {
          size: "sm",
          icon: Ar,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: jt,
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
        Wt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Lr,
          className: "outline-none",
          variants: jt,
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
}, Dl = ({
  currentModule: e,
  label: n,
  getUpdates: r,
  updatesPageUrl: a,
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
  const [m, h] = E("idle"), [p, g] = E(null), [v, ...y] = p ?? [], [N, D] = E(!1);
  M(() => {
    g(null), h("idle");
  }, [e]);
  const P = U(async () => {
    try {
      h("fetching");
      const T = await r();
      h("idle"), g(T);
    } catch {
      h("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    Fr,
    {
      open: N,
      onOpenChange: async (T) => {
        D(T), T && p === null && P(), i(T);
      },
      children: [
        /* @__PURE__ */ t(_r, { asChild: !0, children: /* @__PURE__ */ t(
          Oe,
          {
            variant: "outline",
            icon: hn,
            hideLabel: !0,
            label: n,
            pressed: N,
            append: f && /* @__PURE__ */ t(kt, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Er, { children: /* @__PURE__ */ o(
          Or,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Rl, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t($l, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && p !== null && p.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(zl, { ...l, buttonUrl: a }) }),
                m === "idle" && p !== null && p.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Tl,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  p.length > 1 && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((T, L) => /* @__PURE__ */ t(
                    Pl,
                    {
                      ...T,
                      onClick: d
                    },
                    L
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Bl,
                  {
                    ...s,
                    onClick: () => {
                      P();
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
                  onDropdownClose: () => D(!1)
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
  mediaUrl: r,
  unread: a,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Dr,
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
          className: x(i, "text-f1-foreground no-underline"),
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
              Tr,
              {
                fetchPriority: "high",
                src: r,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: l })
              ] }),
              a && /* @__PURE__ */ t(kt, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Pl = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: l
}) => {
  const s = x("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Pr, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
    ve,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: x(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
        ] }),
        a && /* @__PURE__ */ t(kt, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Rl = ({
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
        j,
        {
          variant: "outline",
          size: "sm",
          icon: gn,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), Hn = ({
  icon: e,
  button: n,
  title: r,
  description: a,
  iconWrapperClassName: l
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: x(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        l
      ),
      children: e
    }
  ),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: r }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
  ] }),
  n
] }) }), zl = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  Hn,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(G, { icon: hn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(ve, { href: r, children: /* @__PURE__ */ t(j, { label: n }) })
  }
), Bl = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  Hn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(G, { icon: Rr, size: "lg" }),
    button: /* @__PURE__ */ t(j, { variant: "outline", label: r, onClick: a })
  }
), $l = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ t(R, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(R, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(R, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(R, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(R, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), kt = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: x("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Ml = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [l, s] = E(e);
  M(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), a(), d && d();
  };
  return l && /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ t(zr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          j,
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
      /* @__PURE__ */ t(
        il,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
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
function Vt({
  icon: e,
  href: n,
  label: r,
  disabled: a
}) {
  const l = z(null);
  return /* @__PURE__ */ t(
    j,
    {
      href: n,
      title: r,
      "aria-label": r,
      disabled: a,
      ref: l,
      size: "sm",
      variant: "outline",
      label: r,
      icon: e,
      hideLabel: !0
    }
  );
}
function nc({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: l = !1,
  navigation: s,
  productUpdates: i,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = Ie(), h = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], p = n && Object.keys(n).length !== 0, g = l && r.length > 0, v = !l && a.length > 0, y = !l && !!i?.isVisible, N = h[h.length - 1], D = "navigation" in window ? window.navigation : null, P = l && (D ? !!D.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ee, { children: !l && u !== "locked" && /* @__PURE__ */ t(
            X.div,
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
                  icon: pn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: x(
                "flex flex-grow items-center gap-2",
                P && "justify-center"
              ),
              children: [
                l && P && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  j,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Br,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || g ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in N ? /* @__PURE__ */ t(R, { className: "h-4 w-24" }) : N.label }) : /* @__PURE__ */ t(
                  Sl,
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
          !l && p && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(be, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            We,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(We, { text: n.text, variant: n.variant }) }),
          !l && p && (s || v || y) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
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
                  icon: $r,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Vt,
                {
                  icon: bt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && v && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (y || v) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            y && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Dl,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            v && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((T, L) => /* @__PURE__ */ t(Wl, { action: T }, L)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              bn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Un, {})
          ] })
        ] })
      ]
    }
  );
}
function Wl({ action: e }) {
  const n = z(null), [r, a] = E(!1);
  return "actions" in e ? /* @__PURE__ */ t(Ne, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    Oe,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
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
    ve,
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
const jl = () => {
  const e = ie();
  return /* @__PURE__ */ o(
    X.div,
    {
      className: x(
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
            className: x(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          Oe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Mr,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Vl = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: r
}) => {
  const a = z(null);
  M(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, Ul = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: l
  } = Ze();
  return Vl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(Ee, { children: n && /* @__PURE__ */ t(
    X.div,
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
        X.div,
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
}, Gl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(xn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        Oe,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Hl = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
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
    title: r,
    description: a,
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
    title: r,
    description: a,
    benefits: l,
    actions: s,
    setOpen: i,
    onHide: c
  } = Ze(), d = () => {
    i(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(Ul, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      Oe,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ce,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(jn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(vn, { className: "h-5 w-5 flex-shrink-0" }),
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
}, ql = ne(
  q("AiPromotionChat", Kl)
), Yl = ne(
  q("AiPromotionChatProvider", Hl)
), Kn = pe({
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
  positive: yn,
  warning: Wr,
  info: wn
}, Gt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Zl = H(
  function({ title: n, onClose: r, children: a, actions: l = [], variant: s }, i) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: i,
        className: Kn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: x(
                  "flex flex-row items-center gap-2",
                  Gt[s]
                ),
                children: [
                  Ut[s] && /* @__PURE__ */ t(G, { icon: Ut[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    me,
                    {
                      className: Gt[s] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            r && /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                icon: Ce,
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
                className: x(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: a
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
), Jl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Kn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(R, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              e && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ t(R, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ t(R, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ t(R, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !e && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ t(R, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(R, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), qn = H(
  (e, n) => /* @__PURE__ */ t(Zl, { ref: n, ...e })
), Xl = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Jl, { compact: e, variant: n });
qn.displayName = "F0Callout";
const rc = ee(
  ne(qn),
  Xl
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
      className: x(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(G, { icon: jr, size: "md", color: "selected" }),
        /* @__PURE__ */ t(
          me,
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
  const { locale: l } = Vr(), s = Ur(l), i = Gr(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: x(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        oe("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${i} by ${c}${a ? " (selected)" : ""}`,
      "aria-pressed": r ? a : void 0,
      children: [
        /* @__PURE__ */ t(me, { lines: 1, className: "font-medium text-f1-foreground", children: i }),
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
          me,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: e
          }
        ),
        /* @__PURE__ */ t(He, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ t(
            Ql,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            es,
            {
              author: l.author,
              timestamp: l.timestamp,
              onClick: l.onClick,
              isActive: a === l.id
            },
            l.id
          ))
        ] }) })
      ]
    }
  );
}
const ac = ne(
  q("F0VersionHistory", ts)
), Yn = H(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: l }, s) => {
    const i = ae.useRef(null);
    ae.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = Hr({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        className: x("scrollbar-macos w-full overflow-auto", a),
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
                children: d ? l(d) : /* @__PURE__ */ t(Y, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Yn.displayName = "VirtualList";
const ut = q("VirtualList", Yn), Zn = ({
  text: e,
  search: n,
  searchKeys: r = [],
  semiBold: a = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: x("line-clamp-1", a ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (r.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: x("line-clamp-1", a ? "font-semibold" : ""), children: e });
  const l = new RegExp(`(${n})`, "gi"), s = e.split(l);
  return /* @__PURE__ */ t("span", { className: x("line-clamp-1", a ? "font-semibold" : ""), children: s.map(
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
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = a.indexOf(e);
  l >= 0 && l < a.length - 1 ? a[l + 1].focus() : a.length > 0 && n?.();
}
function Xe(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = a.indexOf(e);
  l > 0 ? a[l - 1].focus() : a.length > 0 && n?.();
}
const ns = ({
  entity: e,
  selected: n,
  onSelect: r,
  onRemove: a,
  marginLeft: l,
  search: s,
  goToFirst: i,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), h = m[0] || "", p = m.slice(1).join(" "), g = (y) => {
    y.preventDefault(), y.stopPropagation(), !f && (n ? a(e) : r(e));
  }, v = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else y.key === "ArrowDown" ? Je(y.currentTarget, i) : y.key === "ArrowUp" && Xe(y.currentTarget, c);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": e.name,
      className: x(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ t(
          ge,
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
            className: x(
              "flex flex-1 flex-row items-center gap-2 break-all",
              e.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              Zn,
              {
                text: e.name,
                search: s,
                searchKeys: e.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          Nn,
          {
            "data-avatarname-navigator-element": "true",
            checked: n,
            disabled: f,
            onClick: g,
            onKeyDown: v,
            className: x(
              "pointer-events-none ml-auto",
              d ? "opacity-0" : ""
            )
          }
        ),
        d && n && /* @__PURE__ */ t(
          G,
          {
            className: "text-f1-icon-selected",
            icon: yn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Be = ({
  groupView: e,
  expanded: n,
  search: r,
  entity: a,
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
  disabled: v = !1,
  hiddenAvatar: y = !1
}) => {
  const [N, D] = E(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ns,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: l,
        onSelect: i,
        onRemove: c,
        singleSelector: g,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: y
      }
    );
  const P = (k) => {
    if (k.key === " ")
      k.preventDefault(), d(!n);
    else if (k.key === "Enter" && g)
      d(!n);
    else if (k.key === "Enter") {
      if (v) return;
      !l || s ? i(a) : l && c(a);
    } else k.key === "ArrowDown" ? Je(k.currentTarget, f) : k.key === "ArrowUp" && Xe(k.currentTarget, u);
  }, T = () => {
    if (N)
      d(!n), D(!1);
    else {
      if (v || g) return;
      l ? c(a) : i(a);
    }
  };
  if (!a.subItems?.length) return null;
  const L = l || s;
  return /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        j,
        {
          hideLabel: !0,
          icon: n ? Kr : qr,
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
            D(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            p && /* @__PURE__ */ t(
              G,
              {
                icon: Yr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Zn,
                {
                  semiBold: !0,
                  text: a.name,
                  search: r,
                  searchKeys: a.searchKeys
                }
              ),
              /* @__PURE__ */ t(Ke, { value: a.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              Nn,
              {
                checked: L,
                disabled: v,
                onClick: T,
                onKeyDown: P,
                indeterminate: s,
                onPointerDown: (k) => {
                  k.stopPropagation(), D(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: x("ml-auto", g ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Be.displayName = "EntitySelectListItem";
const Ht = ({
  label: e,
  onCreate: n,
  goToFirst: r,
  goToLast: a
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Je(s.currentTarget, r) : s.key === "ArrowUp" && Xe(s.currentTarget, a);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": e,
    className: x(
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
          icon: Zr,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ t("span", { className: x("line-clamp-1"), children: e }) }) })
    ]
  }
) }), Le = ({ primaryAction: e, secondaryActions: n }) => {
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
  const r = [e, ...n ?? []], a = r.map((i) => ({
    label: i.label,
    value: i.label,
    icon: i.icon,
    critical: i.variant === "critical"
  })) || [], l = (i) => {
    const c = r.find((d) => d.label === i);
    c && !c.disabled && c.onClick?.();
  }, s = r.every((i) => i.disabled);
  return /* @__PURE__ */ t(
    Jr,
    {
      items: a,
      value: e.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, rs = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: r,
  disabled: a,
  allVisibleSelected: l,
  anyVisibleSelected: s,
  loading: i,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || r), m = e && e.length > 0;
  if (!(!i && (!c && u || m))) return null;
  let p, g, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: a || l
  } : void 0, y = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !s
  } : void 0;
  return v || (v = y, y = void 0), m && u ? (p = /* @__PURE__ */ t(
    Le,
    {
      primaryAction: v,
      secondaryActions: y ? [y] : []
    }
  ), g = /* @__PURE__ */ t(
    Le,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? p = /* @__PURE__ */ t(
    Le,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (p = /* @__PURE__ */ t(Le, { primaryAction: v, secondaryActions: [] }), y && (g = /* @__PURE__ */ t(Le, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    p,
    g
  ] }) });
}, as = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: yl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Je(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
      },
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: r,
      value: e,
      onChange: (c) => n(c.target.value)
    }
  ),
  e && /* @__PURE__ */ t(
    G,
    {
      icon: Xr,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), nt = 384, rt = 36, ls = 37, Kt = 1, qt = 200, Yt = '[data-avatarname-navigator-element="true"]', ss = ({
  groupView: e,
  entities: n,
  groups: r,
  selectedGroup: a,
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
  searchPlaceholder: v,
  selectAllLabel: y,
  clearLabel: N,
  notFoundTitle: D,
  notFoundSubtitle: P,
  className: T,
  actions: L,
  onCreate: k,
  onCreateLabel: W,
  singleSelector: F = !1,
  loading: b = !1,
  disabled: C = !1,
  hiddenAvatar: I = !1
}) => {
  const S = ae.useRef(null), V = K(
    () => e ? n.reduce(
      (_, Z) => _ + (Z.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), w = U(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: 0 });
    }, Kt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Yt)
      )[0]?.focus();
    }, qt);
  }, []), A = U(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: S.current?.scrollHeight });
    }, Kt), setTimeout(() => {
      const _ = Array.from(
        document.querySelectorAll(Yt)
      );
      _[_.length - 1]?.focus();
    }, qt);
  }, []), O = K(
    () => new Map(h.map((_) => [_.id, _])),
    [h]
  ), $ = U(
    (_) => {
      const Z = O.get(_.id);
      if (!e)
        return {
          selected: !!Z,
          partialSelected: !!Z
        };
      const Q = (_.subItems ?? []).filter(
        (te) => Z?.subItems?.some(
          (fe) => fe.subId === te.subId
        )
      ), J = (_.subItems?.length ?? 0) === Q.length, de = !J && Q.length > 0;
      return { selected: J, partialSelected: de };
    },
    [e, O]
  ), ce = U(
    (_) => {
      if (_.index === 0 && k)
        return /* @__PURE__ */ t(
          Ht,
          {
            label: W ?? "",
            onCreate: () => k?.(l),
            goToFirst: w,
            goToLast: A
          }
        );
      const Z = k ? _.index - 1 : _.index, Q = n[Z], { selected: J, partialSelected: de } = $(Q);
      return /* @__PURE__ */ t(
        Be,
        {
          expanded: Q.expanded ?? !1,
          onExpand: () => g(Q, !0),
          search: l,
          groupView: e,
          entity: Q,
          onSelect: s,
          onRemove: i,
          selected: J,
          partialSelected: de,
          showGroupIcon: is(r, a),
          singleSelector: F,
          goToFirst: w,
          goToLast: A,
          disabled: C,
          hiddenAvatar: I
        },
        Q.id
      );
    },
    [
      k,
      W,
      C,
      n,
      $,
      w,
      A,
      e,
      r,
      I,
      i,
      s,
      g,
      l,
      a,
      F
    ]
  ), re = K(() => e ? n.flatMap((_) => {
    const Z = Re(
      h ?? [],
      _.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: _.id,
          subName: _.name,
          subAvatar: _.avatar,
          expanded: _.expanded ?? Z?.expanded ?? !1,
          subItems: _.subItems,
          subSearchKeys: _.searchKeys
        }
      },
      ...(_.subItems ?? []).map((Q) => ({
        parent: {
          ..._,
          expanded: _.expanded ?? Z?.expanded ?? !1
        },
        subItem: Q
      }))
    ];
  }).filter(
    (_) => (!_.parent || _.parent.expanded) && (!!_.parent || !!_.subItem.subItems && _.subItem.subItems.length > 0)
  ) : n.map((_) => ({
    parent: null,
    subItem: {
      subId: _.id,
      subName: _.name,
      subAvatar: _.avatar,
      subSearchKeys: _.searchKeys
    }
  })), [e, n, h]), B = U(
    (_) => {
      if (_.index === 0 && k)
        return /* @__PURE__ */ t(
          Ht,
          {
            label: W ?? "",
            onCreate: () => k?.(l),
            goToFirst: w,
            goToLast: A
          }
        );
      const Z = k ? _.index - 1 : _.index, Q = re[Z].parent, J = re[Z].subItem;
      if (!Q) {
        const te = {
          id: J.subId,
          name: J.subName,
          avatar: J.subAvatar,
          subItems: J.subItems,
          expanded: J.expanded,
          searchKeys: J.subSearchKeys
        }, fe = Re(
          h,
          te.id
        ), he = (te?.subItems ?? []).filter(
          (Ae) => fe?.subItems?.some(
            (gr) => gr.subId === Ae.subId
          )
        ), De = (te.subItems?.length ?? 0) === he.length, hr = !De && he.length > 0;
        return /* @__PURE__ */ t(
          Be,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Ae) => g(te, Ae),
            search: l,
            entity: te,
            onSelect: s,
            onRemove: i,
            selected: De,
            partialSelected: hr,
            showGroupIcon: r.find((Ae) => Ae.value === a)?.groupType === "team",
            singleSelector: F,
            goToFirst: w,
            goToLast: A,
            hideLine: Z === re.length - 1,
            disabled: C,
            hiddenAvatar: I
          }
        );
      }
      let de = !!Re(h, J.subId);
      if (!de) {
        const te = Re(
          h,
          Q.id
        );
        de = !!(Q?.subItems ?? []).filter(
          (he) => te?.subItems?.some(
            (De) => De.subId === he.subId
          )
        ).find((he) => he.subId === J.subId);
      }
      return /* @__PURE__ */ t(
        Be,
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
            d(Q, J);
          },
          onRemove: () => c(Q, J),
          selected: !!de,
          partialSelected: !1,
          singleSelector: F,
          goToFirst: w,
          goToLast: A,
          isChild: !0,
          hiddenAvatar: I
        }
      );
    },
    [
      re,
      h,
      l,
      F,
      w,
      A,
      s,
      i,
      r,
      C,
      g,
      a,
      d,
      c,
      I,
      k,
      W
    ]
  ), [ke, tt] = K(() => {
    if (!n.length)
      return [!1, !1];
    let _ = 0, Z = 0;
    if (!e)
      _ = n.length, Z = n.reduce(
        (de, { id: te }) => de + (O.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...O.values()].flatMap(
          (te) => te.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((te) => {
        const fe = te.subItems ?? [];
        _ += fe.length, Z += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const Q = _ > 0 && Z === _, J = Z > 0;
    return [Q, J];
  }, [n, O, e]), Se = re.length, ur = !F && (y || N), fr = L && L.length > 0, mr = !b && (!F && ur || fr);
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "flex w-full flex-col rounded-l-xl border-0",
        F || b ? "rounded-r-xl" : "",
        T
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: x(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              F || b ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                as,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: w,
                  goToLast: A
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                je,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: b,
                  onChange: p,
                  options: r,
                  value: a,
                  className: x(
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
            className: x(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              mr ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              b && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(xn, {}) }),
              !b && !V && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: nt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: D }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: P })
                  ]
                }
              ),
              !b && (!!V || k) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                ut,
                {
                  height: nt,
                  itemCount: Se + (k ? 1 : 0),
                  itemSize: (_) => {
                    if (_ === 0 && k) return rt;
                    const Z = k ? _ - 1 : _;
                    return re[Z]?.parent === null ? ls : rt;
                  },
                  renderer: B,
                  ref: S
                }
              ) : /* @__PURE__ */ t(
                ut,
                {
                  height: nt,
                  itemCount: n.length + (k ? 1 : 0),
                  itemSize: rt,
                  renderer: ce,
                  ref: S
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          rs,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: F,
            totalFilteredEntities: V,
            allVisibleSelected: ke,
            anyVisibleSelected: tt,
            selectAllLabel: y,
            clearLabel: N,
            disabled: C,
            actions: L
          }
        )
      ]
    }
  );
}, Re = (e, n) => e.find((r) => r.id === n), is = (e, n) => e.find((r) => r.value === n)?.groupType === "team", os = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  Qr,
  {
    className: x(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      ea,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: a ? { icon: ta, color: "secondary" } : void 0
      }
    ),
    right: !r && /* @__PURE__ */ t(
      G,
      {
        icon: Ce,
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
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
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
    })), u = /* @__PURE__ */ new Set();
    return f.filter((m) => {
      const h = m.subItem.subId;
      return u.has(h) ? !1 : (u.add(h), !0);
    });
  }, [e, a]), d = c.length;
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
            os,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: s,
              hiddenAvatar: i,
              onRemove: () => u.parent ? n?.(u.parent, u.subItem) : r({
                id: u.subItem.subId,
                name: u.subItem.subName,
                avatar: u.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(Y, {});
        }
      }
    ) })
  ] });
}, ds = 500, Zt = 520, Jt = 210, Xt = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: r,
  selectedEntities: a,
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
  const p = (s ?? Zt) < ds, g = !c && !i && !p, v = s ?? Zt, y = g ? v - Jt : v;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: i && (!f || f.length === 0) ? "435px" : "473px",
        width: v
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
                onSubItemRemove: r,
                selectedEntities: a,
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
              width: Jt + "px"
            },
            children: /* @__PURE__ */ t(
              cs,
              {
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a ?? [],
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
  selectedEntities: r,
  disabled: a = !1,
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
  required: v = !1,
  readonly: y = !1,
  append: N,
  size: D = "sm",
  open: P
}) => {
  const T = K(
    () => r.some(
      (F) => F.subItems && F.subItems.length > 0
    ),
    [r]
  ), L = K(() => T ? r.flatMap(
    (F) => (F.subItems ?? []).map((b) => ({
      parent: F,
      subItem: b
    }))
  ) : r.map((F) => ({
    parent: null,
    subItem: {
      subId: F.id,
      subName: F.name,
      subAvatar: F.avatar,
      subDeactivated: F.deactivated
    }
  })), [T, r]), k = L.length === 0 ? void 0 : L.length === 1 ? L[0].subItem.subName : L.length + " " + n, W = L.length === 1 ? L[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    na,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !k ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: p,
      clearable: !1,
      value: k,
      disabled: a,
      loading: g,
      required: v,
      readonly: y,
      size: D,
      avatar: l || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: L[0].subItem.subAvatar,
        deactivated: L[0].subItem.subDeactivated
      },
      append: N ?? /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(ra, { open: P, disabled: a, size: D }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: x(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            k && "text-f1-foreground",
            L.length === 1 && !l || c && !k ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            me,
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
}, lc = (e) => {
  const [n, r] = E(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (b) => {
    r(b), e.onOpenChange?.(b);
  };
  M(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = E(e.entities), [i, c] = E(""), [d, f] = aa("", 300), u = K(
    () => e.entities.some(
      (b) => b.subItems && b.subItems.length > 0
    ),
    [e.entities]
  ), m = Ye(la), p = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function g(b) {
    if (e.singleSelector) {
      e.onSelect(b), r(!1);
      return;
    }
    const C = e.selectedEntities ?? [], I = l.find((O) => O.id === b.id);
    if (!I)
      return;
    const S = new Set(
      (I.subItems ?? []).map((O) => O.subId)
    ), V = /* @__PURE__ */ new Set([I.id]);
    l.forEach((O) => {
      O.id !== I.id && (O.subItems ?? []).some(
        (ce) => S.has(ce.subId)
      ) && V.add(O.id);
    });
    const w = [...C];
    function A(O) {
      const $ = w.findIndex((ce) => ce.id === O.id);
      $ >= 0 ? w[$] = O : w.push(O);
    }
    V.forEach((O) => {
      const $ = l.find((B) => B.id === O);
      if (!$) return;
      const ce = $.subItems?.filter(
        (B) => S.has(B.subId)
      ) ?? [], re = w.findIndex((B) => B.id === O);
      if (re >= 0) {
        const B = w[re].subItems ?? [], ke = new Set(B.map((Se) => Se.subId)), tt = [
          ...B,
          ...ce.filter((Se) => !ke.has(Se.subId))
        ];
        A({
          ...$,
          subItems: tt
        });
      } else
        A({
          ...$,
          subItems: ce
        });
    }), e.onSelect(w);
  }
  function v(b, C) {
    if (e.singleSelector)
      e.onSelect({ ...b, subItems: [{ ...C }] }), r(!1);
    else {
      const I = e.selectedEntities ?? [], S = new Set(I.map((A) => A.id)), V = new Map(
        I.map((A) => [A.id, A.subItems ?? []])
      );
      S.add(b.id), e.entities.forEach((A) => {
        A.subItems?.some(
          ($) => $.subId === C.subId
        ) && S.add(A.id);
      });
      const w = [];
      e.entities.forEach((A) => {
        if (S.has(A.id)) {
          let $ = [...V.get(A.id) ?? []];
          A.subItems?.some(
            (B) => B.subId === C.subId
          ) && ($.some(
            (ke) => ke.subId === C.subId
          ) || $.push(C));
          const re = new Set(
            (A.subItems ?? []).map((B) => B.subId)
          );
          $ = $.filter(
            (B) => re.has(B.subId)
          ), w.push({
            ...A,
            subItems: $
          });
        }
      }), e.onSelect(w);
    }
  }
  function y(b) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let C = [];
    const I = e.selectedEntities ?? [];
    if (u) {
      const S = l.find(
        (w) => w.id === b.id
      );
      if (!S)
        return;
      const V = new Set(
        (S.subItems ?? []).map((w) => w.subId)
      );
      for (const w of I) {
        const A = (w.subItems ?? []).filter(
          (O) => !V.has(O.subId)
        );
        A.length > 0 && C.push({
          ...w,
          subItems: A
        });
      }
    } else
      C = (I ?? []).filter((S) => S.id !== b.id);
    e.onSelect(C);
  }
  function N(b, C) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const I = e.selectedEntities ?? [], S = C.subId, V = [];
    for (const w of I) {
      const A = w.subItems?.filter((O) => O.subId !== S) ?? [];
      A.length > 0 && V.push({
        ...w,
        subItems: A
      });
    }
    e.onSelect(V);
  }
  function D() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const b = e.selectedEntities ?? [];
    let C = [];
    if (u) {
      const I = new Set(
        l.flatMap(
          (S) => (S.subItems ?? []).map((V) => V.subId)
        )
      );
      for (const S of b) {
        const V = (S.subItems ?? []).filter(
          (w) => !I.has(w.subId)
        );
        V.length > 0 && C.push({
          ...S,
          subItems: V
        });
      }
    } else {
      const I = new Set(
        l.map((S) => S.id)
      );
      C = (b ?? []).filter((S) => !I.has(S.id));
    }
    e.onSelect(C);
  }
  function P() {
    const b = [...e.selectedEntities ?? []];
    l.forEach((C) => {
      const I = b.find((S) => S.id === C.id);
      if (!I)
        b.push({
          ...C,
          subItems: C.subItems || []
        });
      else {
        const S = Array.from(
          /* @__PURE__ */ new Set([
            ...I.subItems ?? [],
            ...C.subItems ?? []
          ])
        );
        I.subItems = S;
      }
    }), e.singleSelector || e.onSelect(b);
  }
  const T = (b) => {
    c(b), f(b);
  }, L = (b, C) => {
    e.onItemExpandedChange(b.id, C), s(
      l.map(
        (I) => I.id === b.id ? { ...I, expanded: !b.expanded } : I
      )
    );
  };
  M(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const C = e.entities.map((I) => {
        const S = fs(I, d), V = I.subItems?.map((w) => ({
          ...w,
          score: Ue(
            d,
            w.subSearchKeys ?? [w.subName]
          )
        })).filter((w) => w.score < 1 / 0).sort((w, A) => w.score - A.score);
        return {
          ...I,
          score: S,
          expanded: I.expanded ?? (V?.length ?? 0) > 0,
          subItems: V
        };
      }).filter((I) => I.score < 1 / 0).sort((I, S) => I.score - S.score);
      s(C);
    } else {
      const b = e.entities.map((C) => {
        const I = Ue(
          d,
          C.searchKeys ?? [C.name]
        );
        return { ...C, score: I };
      }).filter((C) => C.score < 1 / 0).sort((C, I) => C.score - I.score);
      s(b);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const k = z(null), [W, F] = E(0);
  return zn(() => {
    const b = () => {
      k.current && F(k.current.offsetWidth);
    };
    return b(), window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: k,
      className: x(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Xt,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: g,
          onRemove: y,
          onSubItemRemove: N,
          onSubItemSelect: v,
          onClear: D,
          onSelectAll: P,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: T,
          onToggleExpand: L,
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
  ) : /* @__PURE__ */ o(sa, { ...e, onOpenChange: a, open: n, children: [
    /* @__PURE__ */ t(
      ia,
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
      oa,
      {
        container: p,
        className: x(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Xt,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: g,
            onRemove: y,
            onSubItemRemove: N,
            onSubItemSelect: v,
            onClear: D,
            onSelectAll: P,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: T,
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
function ft(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Qt(e) {
  return ft(e).split(/\s+/).filter((n) => n.length > 0);
}
function Ue(e = "", n) {
  const r = Qt(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const l = ft(a), s = Qt(a), i = ft(e);
    if (l.includes(i) || r.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function fs(e, n) {
  const r = Ue(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((l, s) => {
    const i = Ue(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(r, a);
}
const ms = ({
  id: e,
  createdAt: n,
  title: r,
  description: a,
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
  }), u = Mn(n, {
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
        /* @__PURE__ */ t(ot, { icon: l ?? Cn }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: i && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, hs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(R, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(R, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), St = q(
  "ActivityItem",
  ee(ms, hs)
), Jn = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), gs = ({
  title: e,
  items: n,
  onClickItem: r,
  onItemVisible: a
}) => /* @__PURE__ */ t(Jn, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  St,
  {
    ...l,
    onClick: () => r(l.id),
    onVisible: a
  },
  l.id
)) }), ps = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Jn, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(St.Skeleton, {}, a)) }), $e = ee(gs, ps), bs = 3, xs = ["today", "yesterday", "lastWeek", "lastMonth"], vs = (e) => da(e, ([n]) => {
  const r = xs.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), mt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ws = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = ie(), i = cl(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = ca((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = vs(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ae.Fragment, { children: [
      /* @__PURE__ */ t(
        $e,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(mt, {})
    ] }, u)),
    n && new Array(bs).fill(null).map((u, m) => /* @__PURE__ */ t(St.Skeleton, {}, m))
  ] });
}, ys = () => {
  const e = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t($e.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(mt, {}),
    /* @__PURE__ */ t(
      $e.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(mt, {}),
    /* @__PURE__ */ t(
      $e.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, sc = q(
  "ActivityItemList",
  ee(ws, ys)
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
  src: r,
  canReact: a,
  lastEmojiReaction: l,
  onReactionSelect: s,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : Cs[ua(
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
                ge,
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
              ref: i,
              className: x(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                In,
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
function ks(e) {
  const n = z(null), r = z(), a = U(() => {
    const s = n.current;
    if (!s) return;
    const i = fa.create(s, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    r.current = setInterval(() => {
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
  }, [e]), l = U(() => {
    clearInterval(r.current);
  }, []);
  return { canvasRef: n, handleMouseEnter: a, handleMouseLeave: l };
}
const Ss = ({
  link: e,
  firstName: n,
  lastName: r,
  src: a,
  onClick: l,
  canReact: s = !0,
  lastEmojiReaction: i,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = E(i), p = z(null);
  M(() => {
    h(i);
  }, [i]);
  const g = (T) => {
    h(T), c?.(T);
  }, v = qe(), { canvasRef: y, handleMouseEnter: N, handleMouseLeave: D } = ks(v), P = xt({
    emoji: Ns[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ve,
    {
      href: e,
      onClick: l,
      className: x(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        oe()
      ),
      onMouseEnter: v ? void 0 : N,
      onMouseLeave: v ? void 0 : D,
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
            lastName: r,
            src: a,
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
              r
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: P })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(dt, { date: u }) })
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
      /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(R, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(R, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(R, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), ic = ee(Ss, As), oc = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(kn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(j, { label: r, variant: "outline", onClick: a }) })
] });
function Ls({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: l
}) {
  const [s, i] = E(r), [c, d] = E(n), f = z(null), { fireEmojiConfetti: u } = ma(), m = (g, v) => {
    g.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(v), s || u(v, f);
  }, h = a?.map((g) => g.name).join(", ") || "", p = /* @__PURE__ */ t(
    Sn,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (g) => {
        m(g, e);
      },
      className: x(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ha(e),
      prepend: /* @__PURE__ */ t(xt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ga,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: x(
            "tabular-nums",
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(be, { label: h, children: p }) : p;
}
function Fs({ items: e, onInteraction: n, locale: r, action: a }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    a && /* @__PURE__ */ t(
      j,
      {
        label: a.label,
        icon: a.icon,
        onClick: a.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(In, { onSelect: n, locale: r }),
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
const _s = q("Reactions", Fs), Es = ({
  content: e,
  collapsed: n
}) => /* @__PURE__ */ t(
  pa,
  {
    content: e,
    className: x(
      "FactorialOneTextEditor",
      n && "line-clamp-5 break-words"
    )
  }
), Os = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(R, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(R, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), Xn = ee(
  Es,
  Os
), en = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: x(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((r) => {
      const a = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        _e,
        {
          icon: r.icon,
          text: r.label ?? (r.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${r.label}: ${r.description}`
        }
      ) });
      return r.label || r.description ? /* @__PURE__ */ t(
        be,
        {
          label: r.label,
          description: r.description,
          children: a
        },
        r.label ?? r.description
      ) : a;
    })
  }
), ht = H(
  function({
    label: n,
    title: r,
    subtitle: a,
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
          !m && /* @__PURE__ */ o(Y, { children: [
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
                  r,
                  !!a && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${a}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(Y, { children: [
                  /* @__PURE__ */ t(dt, { date: f }),
                  /* @__PURE__ */ t(
                    G,
                    {
                      icon: gn,
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
), Ds = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Qn = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Ds.has(r);
}, Ts = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let l = dl(a);
  const s = (i) => {
    i.stopPropagation();
  };
  return r && (l = `${l} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Qn(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(Y, { children: [
      /* @__PURE__ */ t(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ t(R, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ t(
      ht,
      {
        title: e,
        description: l,
        color: ba.special.highlight,
        isPending: !1,
        toDate: a,
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
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(R, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ t(R, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ t(R, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ t(R, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), er = ee(Ts, Ps), Rs = ({
  id: e,
  author: n,
  group: r,
  createdAt: a,
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
  noReactionsButton: v = !1
}) => {
  const y = [f.views, f.comments].filter(Boolean).join(" · "), N = !0, D = Mn(a), P = () => {
    i(e);
  }, T = (k) => {
    k.stopPropagation();
  }, L = n ? `${n.firstName} ${n.lastName}` : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: P,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Pe,
          {
            href: n.url || "#",
            title: L,
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
        ) : /* @__PURE__ */ t(ot, { icon: _t }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Y, { children: [
                  /* @__PURE__ */ t(
                    Pe,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: L,
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
                    Pe,
                    {
                      href: n.url,
                      title: L,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: L
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ot, { icon: _t, size: "sm" }) }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    className: x(
                      "text-f1-foreground-secondary",
                      !n && "capitalize"
                    ),
                    children: m
                  }
                ),
                /* @__PURE__ */ t(
                  Pe,
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
                  p?.map((k) => /* @__PURE__ */ t(
                    j,
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
                  g?.length && /* @__PURE__ */ t(
                    Ne,
                    {
                      items: g,
                      icon: ct,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Ne,
                  {
                    items: [
                      {
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...g ?? []
                    ],
                    icon: ct,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: D }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: x(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ t(Xn, { content: s, collapsed: N })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Qn(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: T,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ t(R, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(er, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: y }),
          !v && /* @__PURE__ */ t(
            _s,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: xa
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
  /* @__PURE__ */ t("div", { className: "hidden md:block", children: /* @__PURE__ */ t(R, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(R, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(R, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ t(R, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(Xn.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(R, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(er.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), cc = ee(
  Rs,
  zs
), tr = ae.forwardRef(({ person: e, onClick: n, ...r }, a) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: x(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        r.withPointerCursor && "cursor-pointer"
      ),
      onClick: l,
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
            r.info && /* @__PURE__ */ t(be, { label: r.info, children: /* @__PURE__ */ t(
              G,
              {
                icon: wn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((s, i) => /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(_e, { ...s }, s.text),
            i < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(va, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              j,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              j,
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
}), Bs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(R, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(R, { className: "h-4" }),
    /* @__PURE__ */ t(R, { className: "h-4" })
  ] })
] });
tr.displayName = "OnePersonListItem";
const dc = ne(
  q(
    "OnePersonListItem",
    ee(tr, Bs)
  )
), $s = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ms({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(El, { children: /* @__PURE__ */ t(
    Ws,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function Ws({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  const s = a?.enabled ? wa : l?.enabled ? Yl : ll, i = a?.enabled ? a : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Gs,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const uc = q(
  "ApplicationFrame",
  Ms
), js = ({ contentId: e }) => {
  const n = ie();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: oe(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Vs(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function Us(e, n) {
  const { sidebarState: r, toggleSidebar: a } = Ie(), l = z(e);
  M(() => {
    n && Vs(
      e,
      l.current,
      r
    ) && a({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, r, a]);
}
function Gs({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Ie(), f = qe(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: p,
    resizable: g
  } = ya(), v = m === "fullscreen", y = m === "canvas", { open: N } = Ze(), D = g ? p : Ca, P = z(v), T = v && !P.current, L = !v && P.current, [
    k,
    W
  ] = E(!1);
  M(() => {
    !v && P.current && W(!0), P.current = v;
  }, [v]);
  const F = v || k || L, b = K(() => T ? { duration: 0.15, ease: "easeOut" } : L ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [T, L]), C = st(
    `(max-width: ${Me.xl}px)`,
    { initializeWithValue: !0 }
  ), I = st(`(max-width: ${Me.md}px)`, {
    initializeWithValue: !0
  });
  return M(() => {
    d(u);
  }, [u, d]), M(() => {
    d(N);
  }, [N, d]), Us(u, C), /* @__PURE__ */ t(
    Na,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(An, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ee, { children: s === "unlocked" && /* @__PURE__ */ t(
            X.nav,
            {
              className: x(
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
              className: x(
                s !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (S) => {
                s === "hidden" ? S?.setAttribute("inert", "") : S?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(js, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            X.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !I ? D : 0
              },
              transition: { paddingRight: $s },
              children: [
                /* @__PURE__ */ t(
                  X.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: x(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      F ? "overflow-hidden" : "overflow-auto",
                      !u && !N && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      X.div,
                      {
                        className: x(
                          "flex max-w-full flex-1",
                          F ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && y && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: x(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      I ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: I ? void 0 : { right: D },
                    children: /* @__PURE__ */ t(Ia, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  X.div,
                  {
                    className: x(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      I ? "fixed inset-0 z-[30]" : x(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        F || y ? "z-20" : "z-0",
                        s === "hidden" && F ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: I || v ? "100%" : D
                    },
                    transition: b,
                    onAnimationComplete: () => {
                      k && W(!1);
                    },
                    children: /* @__PURE__ */ t(ka, {})
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
const Hs = pe({
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
function nr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Ie();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: Hs({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: pn,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ o(
              "div",
              {
                className: x(
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
                        className: x(
                          i ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: x(
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
            /* @__PURE__ */ t(bn, {}),
            /* @__PURE__ */ t(Un, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
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
nr.displayName = "DaytimePage";
const fc = ne(
  q("DaytimePage", nr)
);
function Ks(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: l, target: s }) => ({
    label: n,
    description: r,
    href: a,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function qs({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Ne, { items: Ks(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: x(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            oe()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(G, { icon: Ln, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const mc = ne(
  q("OmniButton", qs)
);
function rr({ children: e, header: n, embedded: r = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
rr.displayName = "Page";
const hc = ne(q("Page", rr));
function Ys({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = K(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(R, { className: "size-6" }),
    /* @__PURE__ */ t(R, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    tn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Zs,
    {
      companies: e,
      selected: i,
      onChange: r,
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
const Zs = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: l = []
}) => {
  const s = ie(), [i, c] = E(!1), d = K(
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
    r(u);
  };
  return /* @__PURE__ */ t(
    je,
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
          className: x(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            oe()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              X.div,
              {
                animate: { rotate: i ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(G, { icon: bt, size: "xs" })
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
    className: x(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        Sa,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: Fn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(me, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function gc({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ne, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: x(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          oe("focus-visible:ring-inset")
        ),
        onClick: s,
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
          /* @__PURE__ */ t(me, { children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    r && /* @__PURE__ */ t(be, { label: c.notifications, shortcut: a, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        j,
        {
          icon: Cn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Aa, { type: "highlight", size: "sm", icon: Fn }) })
    ] }) })
  ] });
}
function Js({ isExpanded: e }) {
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
            className: x(
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
            className: x(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Xs() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = Ie(), l = z(null);
  return M(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Sn,
    {
      variant: "ghost",
      size: "md",
      onClick: () => r(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: l,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ t("div", { className: x("hidden", { flex: !a }), children: /* @__PURE__ */ t(Js, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: x("hidden", { flex: a }), children: /* @__PURE__ */ t(G, { icon: Ce, size: "md" }) })
      ]
    }
  );
}
function pc({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Ys,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: s,
        withNotification: a,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(Xs, {})
  ] });
}
function Qs() {
  const [e, n] = E(!1);
  return M(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const ar = Ct(void 0);
function ei({ children: e }) {
  const [n, r] = E(!1), [a, l] = E(null);
  return /* @__PURE__ */ t(
    ar.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: l },
      children: e
    }
  );
}
function At() {
  const e = Ye(ar);
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
        className: x(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ t(Ke, { value: e.badge, size: "sm", type: "bold" })
] }), ni = ({ item: e }) => {
  const { isActive: n } = pt(), { label: r, icon: a, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    ve,
    {
      ...l,
      className: x(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        oe("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(ti, { item: e, active: s })
    }
  );
}, ri = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: l,
  total: s,
  onMove: i,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = ie(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: p } = At(), { isActive: g } = pt(), v = g(e.href, { exact: e.exactMatch }), y = z(!1), [N, D] = E(!1), P = l === 0, T = l === s - 1, L = s === 1, k = K(() => {
    const S = [];
    return !L && !P && S.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: La
    }), !L && !T && S.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Fa
    }), S.length > 0 && S.push({ type: "separator" }), S.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: _a,
      critical: !0
    }), S;
  }, [L, P, T, f, i, l, a, e]), W = () => {
    m(!0), D(!1), p(e.href || null), y.current = !0;
  }, F = () => {
    m(!1), p(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, b = u && h === e.href, C = K(
    () => x(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      N && "bg-f1-background-secondary",
      b && "bg-f1-background-secondary"
    ),
    [v, N, b, d]
  ), I = K(() => /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(li, { tooltip: n, children: /* @__PURE__ */ o(
      ve,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: x(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          b && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            G,
            {
              icon: e.icon,
              size: "md",
              className: x(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Ea, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            me,
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
        className: x(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          N && "bg-f1-background-secondary opacity-100",
          b && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Ne,
          {
            open: N,
            onOpenChange: D,
            items: k,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: ct, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, N, b, k, n]);
  return d ? /* @__PURE__ */ t(
    _n,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: F,
      className: C,
      whileDrag: {
        scale: 1.05
      },
      children: I
    }
  ) : /* @__PURE__ */ t("div", { className: C, children: I });
}, lr = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = E(n), f = qe(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), a?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Da, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: x(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          oe("focus-visible:ring-inset"),
          r && "hidden"
        ),
        onClick: u,
        tabIndex: 0,
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u();
        },
        children: [
          e,
          /* @__PURE__ */ t(
            X.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                G,
                {
                  icon: bt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(Ta, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: l })
      }
    ) })
  ] }) });
}, at = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = At(), d = z(!1), f = Oa(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (g) => {
    !i && !d.current && a?.(e, g);
  }, p = /* @__PURE__ */ t(
    lr,
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
          className: x(
            "flex flex-col gap-0.5",
            i && !d.current && "pointer-events-none"
          ),
          children: e.items.map((g, v) => /* @__PURE__ */ t(ni, { item: g }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    _n,
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
      children: p
    }
  ) : p;
};
function bc({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: l
}) {
  const s = z(null), i = e.filter(
    (g) => g.isSortable === !1
  ), [c, d] = E(
    e.filter((g) => g.isSortable !== !1)
  ), [f, u] = E(0), m = U((g) => {
    d(g);
  }, []), h = U(
    (g) => {
      r?.(g);
    },
    [r]
  ), p = Qs();
  return /* @__PURE__ */ t(ei, { children: /* @__PURE__ */ t(An, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    ai,
    {
      disableDragging: p,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: a,
      forceUpdate: () => u((g) => g + 1)
    },
    f
  ) }) });
}
function ai({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: l,
  onDragEnd: s,
  favorites: i = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = ie(), { isDragging: m } = At(), h = e.some((w) => w.isRoot), p = e.filter((w) => !w.isRoot).length > 0, g = n.length > 0, v = z(null), [y, N] = E(i), D = i.length > 0;
  M(() => {
    JSON.stringify(i) !== JSON.stringify(y) && N(i);
  }, [i]);
  const P = (w) => {
    N(w);
  }, T = U(
    (w) => {
      const A = y.filter((O) => O.href !== w.href);
      N(A), c?.(A);
    },
    [y, c]
  ), L = U(
    (w, A) => {
      if (A < 0 || A >= y.length) return;
      const O = [...y], [$] = O.splice(w, 1);
      O.splice(A, 0, $), N(O), c?.(O);
    },
    [y, c]
  ), [k, W] = E(!1), F = z(null);
  M(() => {
    n.length > 0 && !k && (r([...n]), W(!0));
  }, [n, r, k]), M(() => {
    const w = () => {
      F.current !== null && window.clearTimeout(F.current), F.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", w), () => {
      window.removeEventListener("resize", w), F.current !== null && window.clearTimeout(F.current);
    };
  }, [a, n, d]);
  const b = "flex flex-col gap-0.5", C = K(
    () => y.reduce(
      (w, A, O) => (A.label in w || (w[A.label] = []), w[A.label].push(O), w),
      {}
    ),
    [y]
  ), I = K(
    () => D && y.map((w, A) => /* @__PURE__ */ t(
      ri,
      {
        isSortable: !f,
        tooltip: (C[w.label] ?? []).length > 1 ? w.tooltip : void 0,
        item: w,
        dragConstraints: v,
        onRemove: T,
        index: A,
        total: y.length,
        onMove: L,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${w.href}-${w.label}`
    )),
    [
      D,
      y,
      C,
      T,
      L,
      c,
      f
    ]
  ), S = "flex flex-col gap-3", V = K(() => n.map((w) => /* @__PURE__ */ t(
    at,
    {
      category: w,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: l,
      onDragEnd: s,
      currentOrder: n
    },
    w.id
  )), [n, f, a, l, s]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => w.isRoot).map((w, A) => /* @__PURE__ */ t(
          at,
          {
            category: w,
            onCollapse: l
          },
          `fixed-${A}`
        )) }),
        D && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(lr, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: b, children: I }) : /* @__PURE__ */ t(
          Et,
          {
            axis: "y",
            values: y,
            onReorder: P,
            className: b,
            children: I
          }
        ) }) }) }),
        p && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => !w.isRoot).map((w, A) => /* @__PURE__ */ t(
          at,
          {
            category: w,
            onCollapse: l
          },
          `fixed-${A}`
        )) }),
        g && /* @__PURE__ */ t(
          "div",
          {
            className: x(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: S, children: V }) : /* @__PURE__ */ t(
              Et,
              {
                axis: "y",
                values: n,
                onReorder: r,
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
const li = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(be, { description: e, children: n }) : n;
function xc({
  onClick: e,
  placeholder: n,
  shortcut: r = ["cmd", "k"],
  ...a
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: x(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        oe()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: Pa, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Ra, { keys: r }) })
      ]
    }
  ) });
}
const nn = ({ position: e }) => /* @__PURE__ */ t(
  X.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: x(
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
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: l, isSmallScreen: s } = Ie(), i = qe(), [c, d] = it({ threshold: 1 }), [f, u] = it({ threshold: 1 }), m = ie(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, p = () => r ? sl(r) && a ? Bn(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ o(
    X.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: x(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : x(
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
          /* @__PURE__ */ o(He, { className: "h-full", children: [
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
          /* @__PURE__ */ o(Ee, { children: [
            !d && /* @__PURE__ */ t(nn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(nn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: p() })
      ]
    }
  );
}
const vc = ne(si), ii = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, rn = {
  approved: {
    icon: vn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ce,
    type: "critical",
    size: "sm"
  }
}, oi = {
  icon: Ln,
  type: "neutral",
  size: "sm"
}, ci = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, di = (e) => e in rn ? rn[e] : oi;
function an(e) {
  return ci[e ?? "neutral"] ?? 0;
}
const ui = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const l = ie(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[r], c = K(() => a.map((d) => {
    const f = di(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => an(f.badge?.type) - an(d.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(We, { text: i, variant: ii[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(En, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, fi = ({ steps: e }) => {
  const r = ie().approvals.history, a = e.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: r }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary", children: e.map((l, s) => /* @__PURE__ */ o(Y, { children: [
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
}, wc = ne(
  q("OneApprovalHistory", fi)
), mi = {
  records: [],
  type: "flat",
  groups: []
}, ln = (e, n) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : n ?? JSON.stringify(e), hi = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Ot]: n[Ot]
  })),
  groups: e.groups
}), gi = (e, n, r) => e.records.length === n.records.length && e.records.every(
  (a, l) => r(a, l) === r(n.records[l], l)
), pi = (e, n, r) => {
  const a = /* @__PURE__ */ new Map();
  let l = !1;
  n.records.forEach((i, c) => {
    a.set(r(i, c), i);
  });
  const s = e.records.map((i, c) => {
    const d = a.get(r(i, c));
    return !d || d === i ? i : (l = !0, d);
  });
  return l ? {
    ...e,
    records: s
  } : e;
}, sn = (e, n) => {
  const r = e.paginationInfo, a = n.paginationInfo;
  return r?.type === "pages" || a?.type === "pages" ? r?.type !== "pages" || a?.type !== "pages" || r.currentPage !== a.currentPage : !1;
}, ze = (e) => ({
  data: hi(e.data),
  paginationInfo: e.paginationInfo
});
function bi({
  dataState: e,
  dataStateVersion: n,
  effectiveSnapshotKey: r,
  resetSnapshotKey: a,
  idProvider: l
}) {
  const [s, i] = E(null), [c, d] = E(0), f = z(r), u = z(a), m = z(null), h = z(
    null
  ), p = z(
    null
  ), g = U(() => {
    p.current !== null && (clearTimeout(p.current), p.current = null);
  }, []), v = U(
    (W) => {
      g(), p.current = setTimeout(() => {
        p.current = null;
        const F = m.current;
        !F || F.key !== W || (F.canUseCurrentData = !0, d((b) => b + 1));
      }, 0);
    },
    [g]
  );
  M(() => g, [g]), M(() => {
    if (!e || r == null) {
      m.current = null, h.current = null, g(), i(null), f.current = r, u.current = a;
      return;
    }
    if (u.current !== a) {
      if (e.isLoading || e.isLoadingMore) return;
      u.current = a, m.current = null, h.current = null, g(), i(ze(e));
      return;
    }
    const W = f.current !== r;
    if (f.current = r, W) {
      m.current = {
        key: r,
        requestedAtVersion: n,
        canUseCurrentData: !1
      }, v(r);
      return;
    }
    const F = h.current;
    if (F) {
      if (e.isLoading || e.isLoadingMore) {
        F.sawLoading = !0;
        return;
      }
      if (s && (sn(s, e) || e.data.records.length > s.data.records.length)) {
        h.current = null, i(ze(e));
        return;
      }
      (F.sawLoading || n > F.requestedAtVersion) && (h.current = null);
    }
    if (e.isLoading || e.isLoadingMore)
      return;
    const b = m.current?.key === r ? m.current : null;
    if (b) {
      const C = l ?? e.source.idProvider ?? ln, I = n > b.requestedAtVersion, S = s ? !gi(
        e.data,
        s.data,
        C
      ) : !0;
      if (!b.canUseCurrentData && !I && !S || !b.canUseCurrentData && I && !S)
        return;
      m.current = null, g(), i(ze(e));
      return;
    }
    i((C) => {
      if (!C)
        return e.data.records.length === 0 ? C : ze(e);
      const I = l ?? e.source.idProvider ?? ln, S = pi(
        C.data,
        e.data,
        I
      );
      return e.data.records.length <= C.data.records.length ? S === C.data ? C : {
        ...C,
        data: S
      } : S === C.data ? C : {
        ...C,
        data: S
      };
    });
  }, [
    g,
    e,
    n,
    r,
    l,
    a,
    v,
    s,
    c
  ]);
  const y = !!(h.current && s && e && !e.isLoading && !e.isLoadingMore && (sn(s, e) || e.data.records.length > s.data.records.length)), N = e?.data ?? mi, D = y ? e?.data ?? N : s?.data ?? N, P = y ? e?.paginationInfo ?? null : s?.paginationInfo ?? e?.paginationInfo ?? null, T = U(() => {
    r == null || s == null || (h.current = {
      requestedAtVersion: n,
      sawLoading: !1
    });
  }, [n, r, s]), L = U(() => {
    m.current = null, h.current = null, g(), i(null);
  }, [g]), k = U(() => {
    h.current = null;
  }, []);
  return {
    navigationData: D,
    navigationPaginationInfo: P,
    startPendingNavigation: T,
    clearSnapshot: L,
    clearPendingNavigation: k
  };
}
const on = () => {
}, cn = (e, n, r) => e.source.idProvider?.(n, r) ?? ("id" in n && (typeof n.id == "string" || typeof n.id == "number" || typeof n.id == "symbol") ? n.id : r ?? JSON.stringify(n)), xi = (e, n) => {
  const r = e.data.records.every(
    (l, s) => cn(e, l, s) === cn(n, l, s)
  ), a = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return r && a;
}, vi = (e, n) => e !== null && e.data === n.data && xi(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore;
function yc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: r,
  idProvider: a,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = E(0), [u, m] = E(0), [h, p] = E(0), g = c === "manual" ? i : c === "session" ? d : null, [v, y] = E({
    state: null,
    version: 0
  }), N = v.state, D = v.version, P = U(
    (O) => {
      y(($) => O === null ? $.state === null ? $ : { state: null, version: $.version + 1 } : vi($.state, O) ? $ : { state: O, version: $.version + 1 });
    },
    []
  ), {
    navigationData: T,
    navigationPaginationInfo: L,
    startPendingNavigation: k,
    clearSnapshot: W,
    clearPendingNavigation: F
  } = bi({
    dataState: N,
    dataStateVersion: D,
    effectiveSnapshotKey: g,
    resetSnapshotKey: u,
    idProvider: a
  }), b = fl({
    dataSource: N?.source ?? {},
    data: T,
    paginationInfo: L,
    setPage: N?.setPage ?? on,
    loadMore: N?.loadMore ?? on,
    isLoading: !!(N?.isLoading || N?.isLoadingMore),
    idProvider: a,
    itemUrl: l ?? N?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: r
  }), C = U(() => {
    b.hasNext && b.nextItem === null && !b.isNavigating && k(), b.goToNext();
  }, [b, k]), I = U(() => {
    b.hasPrevious && b.previousItem === null && !b.isNavigating && k(), b.goToPrevious();
  }, [b, k]), S = U(
    (O) => {
      F(), c === "session" && f(($) => $ + 1), b.setActiveItemId(O);
    },
    [F, c, b]
  ), V = U(() => {
    W(), c === "session" && f((O) => O + 1), p((O) => O + 1), b.setActiveItemId(null);
  }, [W, c, b]), w = U(() => {
    F(), m((O) => O + 1);
  }, [F]), A = K(() => !b.activeItem || b.activeIndex < 0 ? null : {
    activeItemId: b.activeItemId,
    activeItem: b.activeItem,
    activeItemUrl: b.activeItemUrl,
    currentIndex: b.absoluteIndex ?? b.activeIndex,
    totalCount: b.totalItems ?? b.loadedItemsCount,
    previousItem: b.previousItem,
    nextItem: b.nextItem,
    canGoPrevious: b.hasPrevious && !b.isNavigating,
    canGoNext: b.hasNext && !b.isNavigating,
    goToPrevious: I,
    goToNext: C,
    isNavigating: b.isNavigating,
    previousItemUrl: b.previousItemUrl,
    nextItemUrl: b.nextItemUrl
  }, [C, I, b]);
  return K(
    () => ({
      ...b,
      goToNext: C,
      goToPrevious: I,
      isReady: N !== null,
      controls: A,
      openItem: S,
      closeItem: V,
      resetSnapshot: w,
      [Ba]: P,
      [za]: h
    }),
    [
      b,
      N,
      A,
      C,
      I,
      S,
      V,
      h,
      w,
      P
    ]
  );
}
const wi = (e) => e, yi = (e) => String(e), Fe = (e, n) => e === n, Ni = ({
  routeId: e
}) => e ?? null, Nc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: r = wi,
  formatItemId: a = yi,
  onRouteIdChange: l
}) => {
  const [s, i] = E(
    () => Ni({ routeId: n })
  ), c = z(null), d = z(void 0), f = z(null), u = z(null), m = z(null), h = z(
    e?.activeItemId ?? null
  ), p = z(e), g = z(
    Dt(e)
  ), v = z(/* @__PURE__ */ new Set());
  M(() => {
    const N = p.current !== e;
    p.current = e;
    const D = Dt(e), P = D !== void 0 && g.current !== D;
    g.current = D;
    const T = d.current !== (n ?? null);
    if (d.current = n ?? null, T && f.current !== n && (f.current = null), n == null) {
      c.current = null, u.current = null, f.current = null, v.current.clear(), i(null);
      const W = e?.activeItemId ?? null;
      W == null ? m.current = null : Fe(m.current, W) || (m.current = W, e?.closeItem());
      return;
    }
    const L = r(n);
    if (!e) {
      T && i(n);
      return;
    }
    if (v.current.has(n)) {
      if (!Fe(e.activeItemId ?? null, L)) {
        f.current = n;
        return;
      }
      v.current.clear(), f.current = null, c.current = n, u.current = null, i(n);
      return;
    }
    f.current !== n && (T && i(n), !(c.current === n && (!N || e.activeItemId != null || P)) && (m.current = null, c.current = n, u.current = Fe(
      e.activeItemId ?? null,
      L
    ) ? null : L, e.openItem(L)));
  }, [e, r, n]), M(() => {
    if (n == null) return;
    const N = e?.activeItemId ?? null;
    if (Fe(N, h.current)) return;
    if (h.current = N, N == null) {
      if (u.current != null) return;
      u.current = null, v.current.clear(), f.current = n, c.current = null, i(null), l?.(null, null);
      return;
    }
    const D = u.current;
    if (D != null) {
      Fe(N, D) && (u.current = null);
      return;
    }
    const P = a(N);
    P !== s && (v.current.add(P), i(P), l?.(P, N));
  }, [
    s,
    a,
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
}, Lt = {
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
}, Ci = pe({
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
}), Ii = ae.forwardRef(function({ className: n, gap: r, children: a, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: x("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: x(Ci({ gap: r, tileSize: l }), n),
      ref: i,
      ...s,
      children: a
    }
  ) });
}), ki = pe({
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
}), sr = H(function({
  className: n,
  grow: r,
  basis: a,
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
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: x(
        ki({
          paddingX: s,
          basis: a,
          paddingY: i,
          grow: r,
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
      ...g
    }
  );
}), Si = pe({
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
}), Ai = ae.forwardRef(function({ className: n, gap: r, wrap: a, ...l }, s) {
  return /* @__PURE__ */ t(
    sr,
    {
      className: x(Si({ gap: r, wrap: a }), n),
      ref: s,
      ...l
    }
  );
}), Li = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...Lt
    }
  },
  defaultVariants: {}
}), Fi = H(function({ className: n, gap: r, children: a, ...l }, s) {
  return /* @__PURE__ */ t(
    sr,
    {
      className: x(Li({ gap: r }), n),
      ref: s,
      ...l,
      children: a
    }
  );
}), Cc = ue(
  {
    name: "Stack",
    type: "layout"
  },
  Fi
), Ic = ue(
  {
    name: "Split",
    type: "layout"
  },
  Ai
), kc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ii
), _i = ({ children: e }) => {
  const { enabled: n } = On();
  return /* @__PURE__ */ t(
    "div",
    {
      className: x(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ t(
        X.div,
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
}, Ei = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Oi = H(function({ header: n, children: r, action: a, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = On();
  M(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (p) => !!p && !(ae.isValidElement(p) && p.type === ae.Fragment && ae.Children.count(p.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    vt,
    {
      className: x(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(yt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Ei, {}),
                /* @__PURE__ */ t(Dn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(be, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: Tn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Ke, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(Pn, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(We, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                $a,
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
            /* @__PURE__ */ t(_i, { children: /* @__PURE__ */ t(Ma, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              j,
              {
                icon: f ? Wa : ja,
                hideLabel: !0,
                label: "hide/show",
                variant: "outline",
                onClick: u,
                size: "sm"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ o(Nt, { className: "flex h-full flex-col gap-4", children: [
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((p, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: p.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!p.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.prefixUnit }),
              p.value,
              !!p.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: p.postfixUnit })
            ] })
          ] }, g)) }),
          ae.Children.toArray(r).filter(m).map((p, g) => /* @__PURE__ */ o(ae.Fragment, { children: [
            g > 0 && /* @__PURE__ */ t(Va, { bare: !0 }),
            p
          ] }, g))
        ] }),
        a && /* @__PURE__ */ t(Ua, { children: /* @__PURE__ */ t(j, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), Di = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Ti = H(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      vt,
      {
        className: x(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(yt, { children: n.title }) : /* @__PURE__ */ t(R, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Dn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Nt,
            {
              "aria-hidden": !0,
              className: x(r !== "full" && Di({ height: r })),
              children: [...Array(4)].map((l, s) => /* @__PURE__ */ t(
                R,
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
), ye = ne(
  q("Widget", ee(Oi, Ti))
), se = Object.assign(
  H(function({ chart: n, summaries: r, ...a }, l) {
    return /* @__PURE__ */ t(ye, { ref: l, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ye.Skeleton
  }
), Pi = ee(
  H(function({ canBeBlurred: n, ...r }, a) {
    const l = {
      ...r,
      header: {
        ...r.header,
        canBeBlurred: n
      }
    }, s = {
      ...r.chart,
      yAxis: r.chart.yAxis ? { ...r.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      se,
      {
        ref: a,
        ...l,
        chart: /* @__PURE__ */ t(ml, { ...s, canBeBlurred: n })
      }
    );
  }),
  se.Skeleton
), Ri = q(
  "AreaChartWidget",
  Pi
), zi = H(function(n, r) {
  return /* @__PURE__ */ t(
    se,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(hl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Bi = q(
  "BarChartWidget",
  ee(zi, se.Skeleton)
), $i = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        se,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(gl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  se.Skeleton
), Mi = q(
  "LineChartWidget",
  $i
), Wi = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        se,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(pl, { ...n.chart })
        }
      );
    }
  ),
  se.Skeleton
), ji = q(
  "PieChartWidget",
  Wi
), Vi = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(se, { ref: r, ...n, chart: null });
    }
  ),
  se.Skeleton
), Ui = q(
  "SummariesWidget",
  Vi
), Gi = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        se,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(bl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  se.Skeleton
), Hi = q(
  "VerticalBarChartWidget",
  Gi
), Sc = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Ri
), Ac = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Bi
), Lc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Mi
), Fc = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  ji
), _c = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Hi
), Ec = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Ui
), Ki = (e, n) => /* @__PURE__ */ o(
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
), qi = H(Ki), Yi = (e, n) => /* @__PURE__ */ o(
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
), Zi = H(Yi), Ji = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Xi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Qi = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, eo = {
  "line-chart": "default",
  "bar-chart": "promote"
}, to = H(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Ji[i], f = Xi[i], u = Qi[i], m = eo[i];
    return /* @__PURE__ */ o(
      vt,
      {
        className: x(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(wt, { className: "-mt-0.5", children: /* @__PURE__ */ t(yt, { children: n }) }),
          /* @__PURE__ */ o(Nt, { className: x("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: x(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(qi, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Zi, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: r }),
              a && /* @__PURE__ */ t(
                j,
                {
                  label: a,
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
), Oc = ne(
  q("ChartWidgetEmptyState", to)
);
function no(e, n) {
  const r = z(null), a = z(null), [l, s] = E({
    visibleItems: [],
    overflowItems: []
  });
  Ga({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const i = U(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = U(() => {
    if (!a.current) return [];
    const u = a.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const p = u[h].getBoundingClientRect().height;
      m.push(p);
    }
    return m;
  }, []), d = U(
    (u, m) => {
      let h = 0, p = 0;
      for (let g = 0; g < u.length; g++) {
        const v = p + u[g];
        if (v > m + 30) break;
        p = v, p = i(
          p,
          g,
          u.length
        ), h++;
      }
      return h;
    },
    [i]
  ), f = U(() => {
    if (!r.current || e.length === 0) return;
    const u = r.current.clientHeight, m = c(), h = d(
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
  return M(() => {
    f();
  }, [f]), {
    containerRef: r,
    measurementContainerRef: a,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const Qe = function({
  items: n,
  renderListItem: r,
  className: a,
  gap: l = 0,
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = no(n, l);
  return M(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: x("relative flex h-full flex-col", a),
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
            children: n.map((u, m) => /* @__PURE__ */ t("div", { "data-testid": "overflow-measurement-item", children: r(u, m, !1) }, `measure-${m}`))
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
Qe.displayName = "VerticalOverflowList";
const Dc = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((l) => /* @__PURE__ */ t(ht, { ...l }, l.title)) }) : /* @__PURE__ */ t(
  Qe,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (l) => /* @__PURE__ */ t(ht, { ...l }, l.title)
  }
) : null, ro = ({ onClick: e, children: n }) => {
  const r = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: x(
        r,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: r, tabIndex: 1, children: n });
};
function Tc({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: l
}) {
  return /* @__PURE__ */ t(ro, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
        l && "hover:border-f1-border-hover"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(G, { icon: r, size: "md", className: a })
        ] }),
        /* @__PURE__ */ t("p", { className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground", children: n })
      ]
    }
  ) });
}
const ao = H(
  function({ content: n, label: r, color: a, ...l }, s) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: s, children: [
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
        "icon" in l && l.icon && /* @__PURE__ */ t("span", { className: x("flex", a), children: /* @__PURE__ */ t(G, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ t("span", { className: x("flex", a), children: /* @__PURE__ */ t(xt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), Pc = H(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          ao,
          {
            label: a,
            content: l,
            color: s,
            ...i
          },
          `${a}-${l}`
        ))
      }
    );
  }
), lo = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: r,
  children: a
}) => {
  const l = x(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    r ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: l, onClick: e, children: a }) : /* @__PURE__ */ t("div", { className: l, children: a });
};
function Rc({
  id: e,
  title: n,
  subtitle: r,
  avatars: a,
  remainingCount: l,
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    lo,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Ha, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Ka, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          En,
          {
            avatars: a,
            remainingCount: l,
            size: "emoji" in c && c.emoji ? "md" : "sm",
            type: "person"
          }
        ) })
      ]
    }
  );
}
const so = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function dn({
  id: e,
  title: n,
  subtitle: r,
  onClick: a,
  module: l
}) {
  const s = x(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(so, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(kn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const io = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function gt({
  id: e,
  title: n,
  alert: r,
  rawTag: a,
  count: l,
  icon: s,
  rightIcon: i,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = x(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(io, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      s && /* @__PURE__ */ t(
        G,
        {
          icon: s,
          size: "md",
          className: x("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      i && /* @__PURE__ */ t(
        G,
        {
          icon: i,
          size: "md",
          className: x("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ t(Pn, { ...r }),
      a && /* @__PURE__ */ t(_e, { ...a }),
      !!l && /* @__PURE__ */ t(Ke, { value: l })
    ] })
  ] });
}
function zc({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: l
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(dn, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    Qe,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(dn, { ...s, onClick: r }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Bc({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((s) => /* @__PURE__ */ t(gt, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    Qe,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(gt, { ...s, onClick: a }),
      minSize: r
    }
  );
}
const oo = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), $c = H(
  function({ title: n, titleValue: r, titleTooltip: a, list: l }, s) {
    return /* @__PURE__ */ o("div", { ref: s, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          a && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            be,
            {
              label: a.label,
              description: a.description,
              children: /* @__PURE__ */ t(G, { icon: Tn, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      l.map((i) => /* @__PURE__ */ t(oo, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Mc({
  title: e,
  subtitle: n,
  data: r,
  helpText: a,
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
        data: r,
        legend: l,
        hideTooltip: s
      }
    ) }),
    !!a && /* @__PURE__ */ t("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: x(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: a
      }
    ) })
  ] });
}
const ir = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, co = ({
  data: e = [],
  labels: n,
  trackedMinutes: r,
  remainingMinutes: a,
  canSeeRemainingTime: l = !0
}) => {
  const i = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!l || a === void 0) return;
    const u = ir(
      r,
      a
    ), m = Math.abs(u), h = Math.floor(m / 60), p = Math.floor(m % 60), g = `${h.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${g}` : `${n.overtime} ${g}`;
  })(), f = xe[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, lt = "--:--", uo = (e, n) => {
  if (e && e > 0)
    return {
      value: e * 60 / n,
      color: xe.empty
    };
  if (!n)
    return {
      value: 1,
      color: xe.empty
    };
}, fo = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, l = ir(
    n,
    r
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = a || (l ?? 0) < 0 ? void 0 : uo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, p = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - p) / s;
        return c -= p, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: p / s + v,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: p / s,
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
    ...i ? [i] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: xe.empty
  }), f;
}, mo = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = a ? zt(a) : lt, i = n === void 0 || n > 0 ? lt : l ? zt(l.to) : lt, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function ho({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = fo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: l, secondaryLabel: s, time: i } = mo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(vl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      wl,
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
          qa,
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
function go({
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
        r && /* @__PURE__ */ t(G, { icon: r, className: "text-f1-icon" }),
        /* @__PURE__ */ t(
          "span",
          {
            className: x(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(G, { icon: Ya })
      ]
    }
  );
}
function Wc({
  trackedMinutes: e,
  remainingMinutes: n,
  data: r = [],
  labels: a,
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
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: N = !0,
  projectSelectorElement: D,
  breakTypeName: P
}) {
  const { status: T, statusText: L, subtitle: k, statusColor: W } = co({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), F = T === "clocked-out", b = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? a.paid : a.unpaid
  })) ?? [], [C, I] = E(!1), S = () => {
    if (b.length > 1)
      C || I(!0);
    else {
      const B = b?.[0]?.value;
      u?.(B);
    }
  }, V = (B) => {
    h?.(B), I(!1), u?.(B);
  }, w = F && s.length && !c && i, A = s.find((B) => B.id === l), O = s.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), $ = T === "break", [ce, re] = E(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: L }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                X.div,
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
          k && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: k })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          T === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            j,
            {
              onClick: d,
              label: a.clockIn,
              icon: Tt
            }
          ) }),
          T === "clocked-in" && /* @__PURE__ */ o(Y, { children: [
            p && /* @__PURE__ */ t(Y, { children: b.length > 1 && h ? /* @__PURE__ */ t(
              je,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: b,
                onChange: V,
                open: C,
                onOpenChange: I,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  j,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: Pt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              j,
              {
                onClick: S,
                label: a.break,
                variant: "neutral",
                icon: Pt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Rt
              }
            )
          ] }),
          T === "break" && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              j,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Rt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              j,
              {
                onClick: d,
                label: a.resume,
                icon: Tt
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ t(
        ho,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: w ? /* @__PURE__ */ o(Y, { children: [
      /* @__PURE__ */ t(
        je,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: l,
          options: O,
          onChange: y,
          open: ce,
          onOpenChange: re,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            go,
            {
              text: A?.name,
              placeholder: a.selectLocation,
              icon: A?.icon
            }
          ) })
        }
      ),
      N && D
    ] }) : /* @__PURE__ */ o(Y, { children: [
      i && A && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(_e, { text: A.name, icon: A.icon }) }),
      N && D,
      $ && P && /* @__PURE__ */ t(_e, { text: P })
    ] }) })
  ] }) });
}
const po = {
  done: Xa,
  "in-progress": Ja,
  todo: Za
}, bo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function xo({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const l = () => {
    r?.(e);
  }, s = K(() => {
    if (!a)
      return po[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    gt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: bo[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: Qa
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function jc({
  tasks: e,
  onClickTask: n,
  hideIcons: r = !1,
  maxTasksToShow: a = 5,
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
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, a).map((d) => /* @__PURE__ */ t(
    xo,
    {
      task: d,
      status: d.status,
      hideIcon: r,
      onClick: n
    },
    d.id
  )) });
}
var vo = Object.defineProperty, wo = Object.defineProperties, yo = Object.getOwnPropertyDescriptors, Ge = Object.getOwnPropertySymbols, or = Object.prototype.hasOwnProperty, cr = Object.prototype.propertyIsEnumerable, un = (e, n, r) => n in e ? vo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, le = (e, n) => {
  for (var r in n || (n = {})) or.call(n, r) && un(e, r, n[r]);
  if (Ge) for (var r of Ge(n)) cr.call(n, r) && un(e, r, n[r]);
  return e;
}, et = (e, n) => wo(e, yo(n)), No = (e, n) => {
  var r = {};
  for (var a in e) or.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && Ge) for (var a of Ge(e)) n.indexOf(a) < 0 && cr.call(e, a) && (r[a] = e[a]);
  return r;
}, Co = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, Io = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), ko = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = le({}, n);
    return a.right = e.left, a;
  }
  return null;
}, So = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = le({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, Ao = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let l = le({}, a);
  return l.left = n.left + e.width, Co(l) || Io({ usedSpot: l, spotsList: r }) ? null : l;
}, Lo = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((l, s, i) => {
  if (l === r) return Ao({ stone: a, position: n, optimalSpot: r, spotsList: i });
  let c = ko({ position: n, spot: l, stone: a });
  return c || So({ position: n, stone: a, spot: l }) || l;
});
function Fo(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let l = n[r];
    if (e(l)) return l;
  }
  return null;
}
var _o = (e, n) => n.filter(e), Eo = (e, n) => [...n].sort(e), Oo = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, Do = (e) => Eo(Oo, e), To = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
  let l = { right: r, top: n.top + a.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let s = 0, i = e.length; s < i; s += 1) {
    let c = e[s];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, Po = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, Ro = ({ availableSpots: e, stone: n }) => Fo((r) => Po(r, n), e);
function zo({ stone: e, availableSpots: n, containerSize: r }) {
  let a = Ro({ availableSpots: n, stone: e }), l = { left: a.left, top: a.top }, s = To({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), i = [...n, s], c = Lo({ spots: i, position: l, optimalSpot: a, stone: e });
  return i = [..._o(Boolean, c)], i = Do(i), { position: l, availableSpots: i };
}
var Bo = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = zo({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    a < d && (a = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: a };
}, $o = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), Mo = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = E({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return M(() => {
    var u, m;
    let h = $o(e.current), p = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (p === null) return;
    let g = Bo({ stones: h, containerSize: p });
    f(et(le({}, g), { stones: h }));
  }, [r, e, n, a, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, Wo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), jo = ({ transition: e, transitionDuration: n }) => e ? { transition: Wo(n)[e] } : null, Vo = (e) => e ? et(le({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Uo = ({ style: e, position: n, transition: r, transitionDuration: a }) => le(le(et(le({}, e), { position: "absolute" }), Vo(n)), jo({ transition: r, transitionDuration: a }));
function Go(e, n, r) {
  let a;
  return function(...l) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, l);
    }, n);
  };
}
var Ho = () => {
  let [e, n] = E(), r = z(Go(n, 300));
  return M(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, Ko = (e) => {
  let [n, r] = E(null);
  return M(() => {
    let a = new ResizeObserver((l) => {
      for (let s of l) r(s.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, qo = (e) => {
  var n = e, { children: r, style: a, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = No(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = Ho(), m = Ko(f), { positions: h, containerHeight: p } = Mo({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), g = le({ minHeight: p ?? 0, position: "relative" }, a);
  return t("div", et(le({ ref: f, style: g }, c), { children: $n.map(r, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let N = { style: Uo({ style: v.props.style, position: h[y], transition: l, transitionDuration: s }), ref: (D) => d.current[y] = D };
    return Bn(v, le(le({}, v.props), N));
  }) }));
};
const Yo = { sm: 340, md: 480, lg: 640 }, fn = H(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const l = Yo[r], [s, i] = E(), c = $n.toArray(n), d = z(null);
    return M(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(qo, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Zo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Vc = ee(fn, () => /* @__PURE__ */ t(Rn, { children: /* @__PURE__ */ t(fn, { children: Zo.map((e, n) => /* @__PURE__ */ t(ye.Skeleton, { height: e }, n)) }) })), mn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Uc = ee(
  H(function({ children: n }, r) {
    return /* @__PURE__ */ t(He, { ref: r, showBar: !1, children: /* @__PURE__ */ t(mn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(Rn, { orientation: "horizontal", children: /* @__PURE__ */ o(mn, { children: [
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {})
  ] }) })
);
function Jo({
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
    el,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const Gc = ne(
  q("WidgetEmptyState", Jo)
), dr = H(
  ({ title: e, children: n }, r) => (tl(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
dr.displayName = "WidgetSection";
const Hc = ne(
  q("WidgetSection", dr)
), Kc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const l = nl(), s = window.location.pathname, i = K(() => n?.length ? n.includes(s) : r?.length ? !r.includes(s) : !0, [s, n, r]), c = K(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return i ? a : (l && console.error(c), null);
}, qc = ne(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    He
  )
);
export {
  sc as ActivityItemList,
  ys as ActivityItemListSkeleton,
  ql as AiPromotionChat,
  Yl as AiPromotionChatProvider,
  uc as ApplicationFrame,
  Ud as AreaChart,
  Sc as AreaChartWidget,
  kc as AutoGrid,
  Aa as Badge,
  Gd as BarChart,
  Ac as BarChartWidget,
  ws as BaseActivityItemList,
  Hd as BaseBanner,
  Ss as BaseCelebration,
  Rs as BaseCommunityPost,
  Jc as BaseTabs,
  Xc as BreadcrumbSelect,
  Sl as Breadcrumbs,
  ht as CalendarEvent,
  Dc as CalendarEventList,
  Qc as CardSelectableContainer,
  il as Carousel,
  Kd as CategoryBarChart,
  Mc as CategoryBarSection,
  ic as Celebration,
  As as CelebrationSkeleton,
  Oc as ChartWidgetEmptyState,
  ed as Chip,
  Wc as ClockInControls,
  qd as ComboChart,
  cc as CommunityPost,
  zs as CommunityPostSkeleton,
  Ys as CompanySelector,
  Ke as Counter,
  Vc as Dashboard,
  fc as DaytimePage,
  td as DetailsItem,
  nd as DetailsItemsList,
  Yd as Dialog,
  Ne as Dropdown,
  lc as EntitySelect,
  rd as F0ActionBar,
  Zd as F0AiBanner,
  kn as F0AvatarModule,
  rc as F0Callout,
  ad as F0TableOfContent,
  ac as F0VersionHistory,
  ld as F1SearchBox,
  sd as FILE_TYPES,
  id as FileItem,
  oc as HighlightBanner,
  Pc as IndicatorsList,
  od as Input,
  cd as Item,
  dd as ItemSectionHeader,
  Jd as LineChart,
  Lc as LineChartWidget,
  bc as Menu,
  ud as MobileDropdown,
  Xd as NotesTextEditor,
  Qd as NotesTextEditorPatchTargetNotFoundError,
  eu as NotesTextEditorSkeleton,
  tu as NotesTextEditorUnsupportedPatchTypeError,
  fd as NumberInput,
  mc as OmniButton,
  wc as OneApprovalHistory,
  md as OneCalendar,
  hd as OneCalendarInternal,
  gd as OneDataCollection,
  pd as OneDateNavigator,
  el as OneEmptyState,
  bd as OnePagination,
  dc as OnePersonListItem,
  Kc as OneRestrictComponent,
  hc as Page,
  nc as PageHeader,
  nu as PieChart,
  Fc as PieChartWidget,
  _i as PrivateBox,
  ru as ProgressBarChart,
  au as RadarChart,
  _s as Reactions,
  xd as ResourceHeader,
  pa as RichTextDisplay,
  vd as RichTextEditor,
  qc as ScrollArea,
  xc as SearchBar,
  wd as SectionHeader,
  je as Select,
  Ra as Shortcut,
  vc as Sidebar,
  gc as SidebarFooter,
  pc as SidebarHeader,
  xn as Spinner,
  Ic as Split,
  Cc as Stack,
  Ec as SummariesWidget,
  yd as Switch,
  Nd as Tabs,
  Cd as TabsSkeleton,
  jc as TasksList,
  Id as Textarea,
  kd as ToggleGroup,
  Sd as ToggleGroupItem,
  be as Tooltip,
  $c as TwoColumnsList,
  lu as VerticalBarChart,
  _c as VerticalBarChartWidget,
  ut as VirtualList,
  Ad as WeekStartDay,
  Ld as Weekdays,
  ye as Widget,
  Rc as WidgetAvatarsListItem,
  Gc as WidgetEmptyState,
  Tc as WidgetHighlightButton,
  zc as WidgetInboxList,
  dn as WidgetInboxListItem,
  Hc as WidgetSection,
  Bc as WidgetSimpleList,
  gt as WidgetSimpleListItem,
  Uc as WidgetStrip,
  su as _RadarChart,
  Fd as actionBarStatuses,
  _d as chipVariants,
  Ed as downloadAsCSV,
  Od as generateCSVContent,
  Dd as getGranularityDefinition,
  Td as getGranularityDefinitions,
  Pd as getGranularitySimpleDefinition,
  Rd as granularityDefinitions,
  zd as modules,
  iu as predefinedPresets,
  Bd as rangeSeparator,
  ou as selectSizes,
  Ze as useAiPromotionChat,
  $d as useDataCollectionData,
  yc as useDataCollectionItemNavigation,
  Nc as useDataCollectionItemNavigationRouteSync,
  Md as useDataCollectionSource,
  Wd as useExportAction,
  jd as useInfiniteScrollPagination,
  Ie as useSidebar
};
