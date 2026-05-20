import { o as vr, B as wr, p as yr, D as Nr, q as Dt, r as Te, s as Cr, t as b, v as Q, w as pe, u as ie, T as Ir, x as kr, y as Sr, R as Ar, z as Lr, A as ae, E as Fr, G as xt, H as st, J as We, K as _e, L as Er, M as Dr, N as G, O as _r, P as Or, Q as Oe, S as pn, U as Pr, V as Tr, W as V, X as bn, Y as R, Z as ve, _ as Rr, $ as zr, a0 as Br, a1 as $r, a2 as Mr, a3 as Ce, a4 as xn, a5 as Wr, a6 as be, a7 as je, a8 as jr, a9 as vt, n as vn, aa as Ne, ab as Vr, ac as wn, ad as re, ae as Z, af as yn, ag as Nn, ah as Ur, ai as Cn, aj as me, ak as te, al as Gr, am as Hr, an as Kr, ao as qr, ap as ge, aq as Ke, ar as Yr, as as Zr, at as Jr, au as Xr, av as qe, aw as In, ax as Qr, ay as ea, az as ta, aA as Ve, aB as na, aC as ra, aD as aa, aE as la, aF as ia, aG as sa, aH as oa, aI as ca, aJ as da, aK as ua, aL as ot, aM as ct, aN as kn, aO as fa, aP as ma, aQ as Sn, aR as ha, aS as ga, aT as Ye, aU as wt, aV as An, aW as pa, aX as Ln, aY as ba, aZ as xa, a_ as va, a$ as De, b0 as wa, b1 as Re, b2 as _t, b3 as dt, b4 as ya, b5 as Na, a as Ca, g as Ia, b6 as ka, b7 as Fn, b8 as Sa, b9 as Aa, F as La, ba as En, bb as Fa, bc as Dn, bd as Ea, be as Ot, bf as Da, bg as _a, bh as Oa, bi as Pa, bj as _n, bk as Ta, bl as Ra, bm as za, bn as Ba, bo as $a, bp as On, bq as Pt, br as Ma, bs as Wa, bt as Tt, bu as ue, bv as Pn, bw as yt, bx as Nt, by as Ct, bz as Tn, bA as It, bB as Rn, bC as zn, bD as ja, bE as Va, bF as Ua, bG as Ga, bH as Ha, bI as Ka, bJ as qa, bK as Ya, bL as Za, bM as Ja, bN as Xa, bO as Rt, bP as zt, bQ as Bt, bR as Qa, bS as el, bT as tl, bU as nl, bV as Bn, bW as rl, bX as al, bY as ll } from "./useDataCollectionSource-N8L_ZsHp.js";
import { ch as nd, cg as rd, b$ as ad, ct as ld, ca as id, cb as sd, b_ as od, cd, c0 as dd, cF as ud, cD as fd, c1 as md, ce as hd, cf as gd, cc as pd, c2 as bd, cp as xd, cq as vd, cu as wd, cB as yd, cC as Nd, c8 as Cd, cE as Id, c9 as kd, c3 as Sd, cj as Ad, ci as Ld, c4 as Fd, c5 as Ed, c6 as Dd, cr as _d, cG as Od, bZ as Pd, cs as Td, cw as Rd, cx as zd, co as Bd, cl as $d, cn as Md, ck as Wd, c7 as jd, cm as Vd, cy as Ud, cz as Gd, cv as Hd, cA as Kd } from "./useDataCollectionSource-N8L_ZsHp.js";
import { jsx as t, jsxs as o, Fragment as Y } from "react/jsx-runtime";
import se, { forwardRef as H, useRef as z, useTransition as il, useState as D, useLayoutEffect as $n, useId as ut, useContext as Ie, createContext as Ze, useEffect as W, useCallback as U, useMemo as K, Fragment as sl, isValidElement as ol, cloneElement as Mn, Children as Wn } from "react";
import { C as cl, P as dl, g as jn, c as ul, F as ft, f as fl, a as ml, u as hl, A as gl, B as pl, L as bl, b as xl, V as vl, d as wl, e as $t, h as yl, i as Nl } from "./index-BLZ00SRl.js";
import { l as Yd, m as Zd, j as Jd, n as Xd, s as Qd, D as eu, k as tu, o as nu, w as ru, x as au, N as lu, y as iu, p as su, r as ou, R as cu, q as du, v as uu, t as fu } from "./index-BLZ00SRl.js";
const Cl = vr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Vn = H(({ className: e, items: n }, r) => /* @__PURE__ */ t(wr, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(yr, {}),
  /* @__PURE__ */ t(Nr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Vn.displayName = "CollapsedBreadcrumbItem";
const kt = 50, Il = 120, Ue = 8;
function kl(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let l = e - a - Ue, i = 0, s = 1;
  for (let c = r - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, i = c, s++;
  }
  if (s < r)
    for (l -= kt; l < 0 && s > 1; )
      l += n[i], i++, s--;
  return Math.max(2, s);
}
function Mt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ue;
    default:
      return e[0] + kt + e[e.length - 1] + Ue;
  }
}
function Sl(e, n) {
  return Il * e + (n ? kt : 0) + Ue;
}
function Al(e, n, r = []) {
  if (!e) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Sl(
        s,
        n.length > 2
      )
    };
  }
  const a = n.length <= 2, l = r.map((s) => s.clientWidth);
  if (a)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: Mt(l)
    };
  const i = kl(e, l);
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
    minWidth: Mt(l)
  };
}
function Ll({ breadcrumbs: e, append: n }) {
  const r = z(null), a = z(null), [, l] = il(), [i, s] = D(null), c = (i?.collapsedItems || []).length > 0;
  return $n(() => {
    const d = r.current, f = a.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = r.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const p = Al(
          h,
          e,
          g
        );
        s(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || i && !i.headItem ? /* @__PURE__ */ t(Dt, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    Dt,
    {
      ref: r,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: i?.minWidth
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
        i && i.headItem && /* @__PURE__ */ o(Cr, { children: [
          /* @__PURE__ */ t(
            Te,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${i.headItem.id}`
          ),
          c && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              Vn,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ t(
              Te,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ t(Y, { children: i.tailItems.map((d, f) => /* @__PURE__ */ t(
            Te,
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
    `breadcrumb-${e.at(-1)?.id ?? 0}`
  );
}
const Fl = pe({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Wt = [
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
], El = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...l
}, i) => {
  const s = ut(), {
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
      className: b(Fl({ size: n }), h),
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
          ref: i,
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
            ...g.style
          },
          ...(({ style: p, ...v }) => v)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Wt.map((p) => /* @__PURE__ */ t("clipPath", { id: `${s}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${s}-circle)`, children: Wt.map((p) => /* @__PURE__ */ t(
              Q.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${p.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": a ? 8 : 1,
                  "--rotate": a ? "90deg" : "0deg",
                  opacity: a ? p.id === "left" ? 1 : 0 : 1,
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
                      background: r ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
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
}, Un = H(El), Gn = Ze(null), Dl = 15, _l = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [l, i] = D(n), [s, c] = D(!1), [d, f] = D(!0), [u, m] = D(
    Dl
  ), h = z(null), g = (v) => {
    h.current = v;
  }, p = () => {
    h.current && h.current();
  };
  return W(() => {
    i(n);
  }, [n]), W(() => {
    if (s && r?.(), !s) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [s, r]), /* @__PURE__ */ t(
    Gn.Provider,
    {
      value: {
        ...a,
        enabled: l,
        setEnabled: i,
        open: s,
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
}, we = () => {
};
function Je() {
  const e = Ie(Gn);
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
const Hn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: l } = Je(), i = ie(), [s, c] = D(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(Ir, { children: /* @__PURE__ */ o(kr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Sr, { asChild: !0, children: /* @__PURE__ */ t(
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
          Ar,
          {
            onCheckedChange: (d) => {
              a(d);
            },
            checked: l,
            "aria-label": l ? i.ai.closeChat : i.ai.openChat,
            className: b(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              ae(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              Lr,
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
                    hover: s
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !l && /* @__PURE__ */ t(Fr, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, jt = "one_sidebar_locked", Kn = Ze(void 0);
function ke() {
  const e = Ie(Kn);
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
function Ol({ children: e }) {
  const { currentPath: n } = xt(), [r, a] = D(!1), [l, i] = D(!1), s = r ? We.xl : We.md, c = st(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = D(() => {
    const C = localStorage.getItem(jt);
    return C !== null ? !!C : !0;
  }), [u, m] = D(!1), [h, g] = D(
    null
  ), p = U(
    ({ isInvokedByUser: C } = {
      isInvokedByUser: !0
    }) => {
      i(C ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = U(
    (C) => {
      c || (C.clientX < 32 && m(!0), C.clientX > 280 && m(!1));
    },
    [c, m]
  ), N = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return W(() => {
    m(!1);
  }, [n]), W(() => {
    l && localStorage.setItem(jt, d ? "1" : "");
  }, [d, l]), W(() => () => {
    g(N);
  }, [N]), /* @__PURE__ */ t(
    Kn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: N,
        toggleSidebar: p,
        prevSidebarState: h,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: v, className: "h-screen w-screen", children: e })
    }
  );
}
const Vt = Q.create(G), Ut = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Pl = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, l] = D(!1), i = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(_e, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        ae()
      ),
      onClick: i,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        Vt,
        {
          size: "sm",
          icon: Er,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Ut,
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
        Vt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Dr,
          className: "outline-none",
          variants: Ut,
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
}, Tl = ({
  currentModule: e,
  label: n,
  getUpdates: r,
  updatesPageUrl: a,
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
  const [m, h] = D("idle"), [g, p] = D(null), [v, ...N] = g ?? [], [C, O] = D(!1);
  W(() => {
    p(null), h("idle");
  }, [e]);
  const T = U(async () => {
    try {
      h("fetching");
      const P = await r();
      h("idle"), p(P);
    } catch {
      h("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    _r,
    {
      open: C,
      onOpenChange: async (P) => {
        O(P), P && g === null && T(), s(P);
      },
      children: [
        /* @__PURE__ */ t(Or, { asChild: !0, children: /* @__PURE__ */ t(
          Oe,
          {
            variant: "outline",
            icon: pn,
            hideLabel: !0,
            label: n,
            pressed: C,
            append: f && /* @__PURE__ */ t(St, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Pr, { children: /* @__PURE__ */ o(
          Tr,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Bl, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Wl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t($l, { ...l, buttonUrl: a }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Rl,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: N.map((P, L) => /* @__PURE__ */ t(
                    zl,
                    {
                      ...P,
                      onClick: d
                    },
                    L
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Ml,
                  {
                    ...i,
                    onClick: () => {
                      T();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                jl,
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
}, Rl = ({
  title: e,
  href: n,
  mediaUrl: r,
  unread: a,
  updated: l,
  onClick: i
}) => {
  const s = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Rr,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        ve,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(s, "text-f1-foreground no-underline"),
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
              zr,
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
              a && /* @__PURE__ */ t(St, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, zl = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: l
}) => {
  const i = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Br, { asChild: !0, className: i, onClick: l, children: /* @__PURE__ */ t(
    ve,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        i,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ o("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
        ] }),
        a && /* @__PURE__ */ t(St, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Bl = ({
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
        V,
        {
          variant: "outline",
          size: "sm",
          icon: bn,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), qn = ({
  icon: e,
  button: n,
  title: r,
  description: a,
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
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: r }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
  ] }),
  n
] }) }), $l = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  qn,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(G, { icon: pn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(ve, { href: r, children: /* @__PURE__ */ t(V, { label: n }) })
  }
), Ml = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  qn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(G, { icon: $r, size: "lg" }),
    button: /* @__PURE__ */ t(V, { variant: "outline", label: r, onClick: a })
  }
), Wl = () => /* @__PURE__ */ t(
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
), St = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", e)
  }
), jl = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [l, i] = D(e);
  W(() => {
    i(e);
  }, [e]);
  const s = () => {
    i(!1), n && n();
  }, c = (d) => {
    i(!1), a(), d && d();
  };
  return l && /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ t(Mr, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          V,
          {
            variant: "ghost",
            icon: Ce,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        cl,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
            dl,
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
}, At = Ze(null), ac = At.Provider;
function lc() {
  return Ie(At);
}
function Gt({
  icon: e,
  href: n,
  label: r,
  disabled: a
}) {
  const l = z(null);
  return /* @__PURE__ */ t(
    V,
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
function ic({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: l = !1,
  navigation: i,
  productUpdates: s,
  favorites: c,
  oneSwitchTooltip: d,
  oneSwitchAutoOpen: f
}) {
  const { sidebarState: u, toggleSidebar: m } = ke(), h = Ie(At), g = i ?? h, p = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], v = n && Object.keys(n).length !== 0, N = l && r.length > 0, C = !l && a.length > 0, O = !l && !!s?.isVisible, T = p[p.length - 1], P = "navigation" in window ? window.navigation : null, L = l && (P ? !!P.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(_e, { children: !l && u !== "locked" && /* @__PURE__ */ t(
            Q.div,
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
                L && "justify-center"
              ),
              children: [
                l && L && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(
                  V,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Wr,
                    onClick: () => window.history.back()
                  }
                ) }),
                L || N ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in T ? /* @__PURE__ */ t(R, { className: "h-4 w-24" }) : T.label }) : /* @__PURE__ */ t(
                  Ll,
                  {
                    breadcrumbs: p,
                    append: c !== void 0 && /* @__PURE__ */ t(
                      Pl,
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
          !l && v && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(be, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            je,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(je, { text: n.text, variant: n.variant }) }),
          !l && v && (g || C || O) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          g && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            g.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              g.counter.current,
              "/",
              g.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Gt,
                {
                  icon: jr,
                  label: g.previous?.title || "Previous",
                  href: g.previous?.url || "",
                  disabled: !g.previous
                }
              ),
              /* @__PURE__ */ t(
                Gt,
                {
                  icon: vt,
                  label: g.next?.title || "Next",
                  href: g.next?.url || "",
                  disabled: !g.next
                }
              )
            ] })
          ] }),
          g && C && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (O || C) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Tl,
              {
                ...s,
                currentModule: e.name
              }
            ) }),
            C && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((F, $) => /* @__PURE__ */ t(Vl, { action: F }, $)) })
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
function Vl({ action: e }) {
  const n = z(null), [r, a] = D(!1);
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
    ve,
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
const Ul = () => {
  const e = ie();
  return /* @__PURE__ */ o(
    Q.div,
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
          Oe,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Vr,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Gl = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: r
}) => {
  const a = z(null);
  W(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
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
    autoClearMinutes: l
  } = Je();
  return Gl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(_e, { children: n && /* @__PURE__ */ t(
    Q.div,
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
        Q.div,
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
}, Kl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(wn, { size: "small" }) : e.label
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
}, ql = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
  benefits: l,
  actions: i,
  onShow: s,
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
    actions: i,
    onShow: s,
    onHide: c,
    children: d
  }
), Yl = () => {
  const {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: l,
    actions: i,
    setOpen: s,
    onHide: c
  } = Je(), d = () => {
    s(!1), c?.();
  };
  return e ? /* @__PURE__ */ o(Hl, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
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
        /* @__PURE__ */ t(Un, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(yn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ t(
        Kl,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Ul, {}) })
  ] }) : null;
}, Zl = re(
  Z("AiPromotionChat", Yl)
), Jl = re(
  Z("AiPromotionChatProvider", ql)
), Yn = pe({
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
  positive: Cn,
  warning: Ur,
  info: Nn
}, Kt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Xl = H(
  function({ title: n, onClose: r, children: a, actions: l = [], variant: i }, s) {
    if (l.length > 2)
      throw new Error(
        `F0Callout: Maximum of 2 actions allowed, but ${l.length} actions were provided.`
      );
    const c = l.length > 0;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: s,
        className: Yn({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Kt[i]
                ),
                children: [
                  Ht[i] && /* @__PURE__ */ t(G, { icon: Ht[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    me,
                    {
                      className: Kt[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            r && /* @__PURE__ */ t(
              V,
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
                className: b(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: a
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
), Ql = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: Yn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ t(R, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
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
), Zn = H(
  (e, n) => /* @__PURE__ */ t(Xl, { ref: n, ...e })
), ei = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Ql, { compact: e, variant: n });
Zn.displayName = "F0Callout";
const sc = te(
  re(Zn),
  ei
);
function ti({
  title: e,
  isActive: n = !1,
  onClick: r
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors",
        n && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        ae("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(G, { icon: Gr, size: "md", color: "selected" }),
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
function ni({
  author: e,
  timestamp: n,
  onClick: r,
  isActive: a
}) {
  const { locale: l } = Hr(), i = Kr(l), s = qr(n, "PPPp", { locale: i }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        ae("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `Version ${s} by ${c}${a ? " (selected)" : ""}`,
      "aria-pressed": r ? a : void 0,
      children: [
        /* @__PURE__ */ t(me, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
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
function ri({
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
        /* @__PURE__ */ t(Ke, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          r && /* @__PURE__ */ t(
            ti,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            ni,
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
const oc = re(
  Z("F0VersionHistory", ri)
), Jn = H(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: l }, i) => {
    const s = se.useRef(null);
    se.useImperativeHandle(
      i,
      () => s.current,
      []
    );
    const c = Yr({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: s,
        className: b("scrollbar-macos w-full overflow-auto", a),
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
Jn.displayName = "VirtualList";
const mt = Z("VirtualList", Jn), Xn = ({
  text: e,
  search: n,
  searchKeys: r = [],
  semiBold: a = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (r.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: e });
  const l = new RegExp(`(${n})`, "gi"), i = e.split(l);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: i.map(
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
function Xe(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = a.indexOf(e);
  l >= 0 && l < a.length - 1 ? a[l + 1].focus() : a.length > 0 && n?.();
}
function Qe(e, n) {
  const a = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = a.indexOf(e);
  l > 0 ? a[l - 1].focus() : a.length > 0 && n?.();
}
const ai = ({
  entity: e,
  selected: n,
  onSelect: r,
  onRemove: a,
  marginLeft: l,
  search: i,
  goToFirst: s,
  goToLast: c,
  singleSelector: d = !1,
  disabled: f = !1,
  hiddenAvatar: u = !1
}) => {
  const m = e.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), p = (N) => {
    N.preventDefault(), N.stopPropagation(), !f && (n ? a(e) : r(e));
  }, v = (N) => {
    if (N.key === "Enter" || N.key === " ") {
      if (N.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else N.key === "ArrowDown" ? Xe(N.currentTarget, s) : N.key === "ArrowUp" && Qe(N.currentTarget, c);
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
          ge,
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
              Xn,
              {
                text: e.name,
                search: i,
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
            onKeyDown: v,
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
}, $e = ({
  groupView: e,
  expanded: n,
  search: r,
  entity: a,
  selected: l,
  partialSelected: i,
  onSelect: s,
  onRemove: c,
  onExpand: d,
  goToFirst: f,
  goToLast: u,
  isChild: m = !1,
  hideLine: h = !1,
  showGroupIcon: g = !1,
  singleSelector: p = !1,
  disabled: v = !1,
  hiddenAvatar: N = !1
}) => {
  const [C, O] = D(!1);
  if (!e)
    return /* @__PURE__ */ t(
      ai,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: l,
        onSelect: s,
        onRemove: c,
        singleSelector: p,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: N
      }
    );
  const T = (F) => {
    if (F.key === " ")
      F.preventDefault(), d(!n);
    else if (F.key === "Enter" && p)
      d(!n);
    else if (F.key === "Enter") {
      if (v) return;
      !l || i ? s(a) : l && c(a);
    } else F.key === "ArrowDown" ? Xe(F.currentTarget, f) : F.key === "ArrowUp" && Qe(F.currentTarget, u);
  }, P = () => {
    if (C)
      d(!n), O(!1);
    else {
      if (v || p) return;
      l ? c(a) : s(a);
    }
  };
  if (!a.subItems?.length) return null;
  const L = l || i;
  return /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        V,
        {
          hideLabel: !0,
          icon: n ? Zr : Jr,
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
            O(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ t(
              G,
              {
                icon: Xr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Xn,
                {
                  semiBold: !0,
                  text: a.name,
                  search: r,
                  searchKeys: a.searchKeys
                }
              ),
              /* @__PURE__ */ t(qe, { value: a.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              In,
              {
                checked: L,
                disabled: v,
                onClick: P,
                onKeyDown: T,
                indeterminate: i,
                onPointerDown: (F) => {
                  F.stopPropagation(), O(!1);
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
$e.displayName = "EntitySelectListItem";
const qt = ({
  label: e,
  onCreate: n,
  goToFirst: r,
  goToLast: a
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? Xe(i.currentTarget, r) : i.key === "ArrowUp" && Qe(i.currentTarget, a);
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
          icon: Qr,
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
  const r = [e, ...n ?? []], a = r.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], l = (s) => {
    const c = r.find((d) => d.label === s);
    c && !c.disabled && c.onClick?.();
  }, i = r.every((s) => s.disabled);
  return /* @__PURE__ */ t(
    ea,
    {
      items: a,
      value: e.label,
      disabled: i,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, li = ({
  actions: e,
  selectAllLabel: n,
  clearLabel: r,
  disabled: a,
  allVisibleSelected: l,
  anyVisibleSelected: i,
  loading: s,
  singleSelector: c,
  onSelectAll: d,
  onClear: f
}) => {
  const u = !c && (n || r), m = e && e.length > 0;
  if (!(!s && (!c && u || m))) return null;
  let g, p, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: a || l
  } : void 0, N = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !i
  } : void 0;
  return v || (v = N, N = void 0), m && u ? (g = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: v,
      secondaryActions: N ? [N] : []
    }
  ), p = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ t(
    Fe,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ t(Fe, { primaryAction: v, secondaryActions: [] }), N && (p = /* @__PURE__ */ t(Fe, { primaryAction: N, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    p
  ] }) });
}, ii = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: l,
  goToLast: i
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: Cl, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, i)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: ta,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), rt = 384, at = 36, si = 37, Yt = 1, Zt = 200, Jt = '[data-avatarname-navigator-element="true"]', oi = ({
  groupView: e,
  entities: n,
  groups: r,
  selectedGroup: a,
  search: l,
  onSelect: i,
  onRemove: s,
  onSubItemRemove: c,
  onSubItemSelect: d,
  onClear: f,
  onSelectAll: u,
  onSearch: m,
  selectedEntities: h = [],
  onGroupChange: g,
  onToggleExpand: p,
  searchPlaceholder: v,
  selectAllLabel: N,
  clearLabel: C,
  notFoundTitle: O,
  notFoundSubtitle: T,
  className: P,
  actions: L,
  onCreate: F,
  onCreateLabel: $,
  singleSelector: E = !1,
  loading: w = !1,
  disabled: x = !1,
  hiddenAvatar: I = !1
}) => {
  const k = se.useRef(null), j = K(
    () => e ? n.reduce(
      (_, J) => _ + (J.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), y = U(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, Yt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Jt)
      )[0]?.focus();
    }, Zt);
  }, []), S = U(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, Yt), setTimeout(() => {
      const _ = Array.from(
        document.querySelectorAll(Jt)
      );
      _[_.length - 1]?.focus();
    }, Zt);
  }, []), A = K(
    () => new Map(h.map((_) => [_.id, _])),
    [h]
  ), B = U(
    (_) => {
      const J = A.get(_.id);
      if (!e)
        return {
          selected: !!J,
          partialSelected: !!J
        };
      const ee = (_.subItems ?? []).filter(
        (ne) => J?.subItems?.some(
          (fe) => fe.subId === ne.subId
        )
      ), X = (_.subItems?.length ?? 0) === ee.length, de = !X && ee.length > 0;
      return { selected: X, partialSelected: de };
    },
    [e, A]
  ), q = U(
    (_) => {
      if (_.index === 0 && F)
        return /* @__PURE__ */ t(
          qt,
          {
            label: $ ?? "",
            onCreate: () => F?.(l),
            goToFirst: y,
            goToLast: S
          }
        );
      const J = F ? _.index - 1 : _.index, ee = n[J], { selected: X, partialSelected: de } = B(ee);
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: ee.expanded ?? !1,
          onExpand: () => p(ee, !0),
          search: l,
          groupView: e,
          entity: ee,
          onSelect: i,
          onRemove: s,
          selected: X,
          partialSelected: de,
          showGroupIcon: ci(r, a),
          singleSelector: E,
          goToFirst: y,
          goToLast: S,
          disabled: x,
          hiddenAvatar: I
        },
        ee.id
      );
    },
    [
      F,
      $,
      x,
      n,
      B,
      y,
      S,
      e,
      r,
      I,
      s,
      i,
      p,
      l,
      a,
      E
    ]
  ), le = K(() => e ? n.flatMap((_) => {
    const J = ze(
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
          expanded: _.expanded ?? J?.expanded ?? !1,
          subItems: _.subItems,
          subSearchKeys: _.searchKeys
        }
      },
      ...(_.subItems ?? []).map((ee) => ({
        parent: {
          ..._,
          expanded: _.expanded ?? J?.expanded ?? !1
        },
        subItem: ee
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
  })), [e, n, h]), M = U(
    (_) => {
      if (_.index === 0 && F)
        return /* @__PURE__ */ t(
          qt,
          {
            label: $ ?? "",
            onCreate: () => F?.(l),
            goToFirst: y,
            goToLast: S
          }
        );
      const J = F ? _.index - 1 : _.index, ee = le[J].parent, X = le[J].subItem;
      if (!ee) {
        const ne = {
          id: X.subId,
          name: X.subName,
          avatar: X.subAvatar,
          subItems: X.subItems,
          expanded: X.expanded,
          searchKeys: X.subSearchKeys
        }, fe = ze(
          h,
          ne.id
        ), he = (ne?.subItems ?? []).filter(
          (Le) => fe?.subItems?.some(
            (xr) => xr.subId === Le.subId
          )
        ), Pe = (ne.subItems?.length ?? 0) === he.length, br = !Pe && he.length > 0;
        return /* @__PURE__ */ t(
          $e,
          {
            groupView: !0,
            expanded: ne.expanded ?? !1,
            onExpand: (Le) => p(ne, Le),
            search: l,
            entity: ne,
            onSelect: i,
            onRemove: s,
            selected: Pe,
            partialSelected: br,
            showGroupIcon: r.find((Le) => Le.value === a)?.groupType === "team",
            singleSelector: E,
            goToFirst: y,
            goToLast: S,
            hideLine: J === le.length - 1,
            disabled: x,
            hiddenAvatar: I
          }
        );
      }
      let de = !!ze(h, X.subId);
      if (!de) {
        const ne = ze(
          h,
          ee.id
        );
        de = !!(ee?.subItems ?? []).filter(
          (he) => ne?.subItems?.some(
            (Pe) => Pe.subId === he.subId
          )
        ).find((he) => he.subId === X.subId);
      }
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: X.subId,
            name: X.subName,
            avatar: X.subAvatar,
            searchKeys: X.subSearchKeys
          },
          onSelect: () => {
            d(ee, X);
          },
          onRemove: () => c(ee, X),
          selected: !!de,
          partialSelected: !1,
          singleSelector: E,
          goToFirst: y,
          goToLast: S,
          isChild: !0,
          hiddenAvatar: I
        }
      );
    },
    [
      le,
      h,
      l,
      E,
      y,
      S,
      i,
      s,
      r,
      x,
      p,
      a,
      d,
      c,
      I,
      F,
      $
    ]
  ), [Se, nt] = K(() => {
    if (!n.length)
      return [!1, !1];
    let _ = 0, J = 0;
    if (!e)
      _ = n.length, J = n.reduce(
        (de, { id: ne }) => de + (A.has(ne) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...A.values()].flatMap(
          (ne) => ne.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((ne) => {
        const fe = ne.subItems ?? [];
        _ += fe.length, J += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const ee = _ > 0 && J === _, X = J > 0;
    return [ee, X];
  }, [n, A, e]), Ae = le.length, hr = !E && (N || C), gr = L && L.length > 0, pr = !w && (!E && hr || gr);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        E || w ? "rounded-r-xl" : "",
        P
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              E || w ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                ii,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: y,
                  goToLast: S
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Ve,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: w,
                  onChange: g,
                  options: r,
                  value: a,
                  className: b(
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
            className: b(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              pr ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              w && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(wn, {}) }),
              !w && !j && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: rt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: T })
                  ]
                }
              ),
              !w && (!!j || F) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                mt,
                {
                  height: rt,
                  itemCount: Ae + (F ? 1 : 0),
                  itemSize: (_) => {
                    if (_ === 0 && F) return at;
                    const J = F ? _ - 1 : _;
                    return le[J]?.parent === null ? si : at;
                  },
                  renderer: M,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                mt,
                {
                  height: rt,
                  itemCount: n.length + (F ? 1 : 0),
                  itemSize: at,
                  renderer: q,
                  ref: k
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          li,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: E,
            totalFilteredEntities: j,
            allVisibleSelected: Se,
            anyVisibleSelected: nt,
            selectAllLabel: N,
            clearLabel: C,
            disabled: x,
            actions: L
          }
        )
      ]
    }
  );
}, ze = (e, n) => e.find((r) => r.id === n), ci = (e, n) => e.find((r) => r.value === n)?.groupType === "team", di = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  na,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      ra,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: a ? { icon: aa, color: "secondary" } : void 0
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
) }), ui = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: r,
  selectedEntities: a,
  selectedLabel: l,
  disabled: i = !1,
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
      mt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            di,
            {
              deactivated: u.subItem.subDeactivated,
              entity: u.subItem,
              disabled: i,
              hiddenAvatar: s,
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
}, fi = 500, Xt = 520, Qt = 210, en = ({
  groupView: e,
  onRemove: n,
  onSubItemRemove: r,
  selectedEntities: a,
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
  const g = (i ?? Xt) < fi, p = !c && !s && !g, v = i ?? Xt, N = p ? v - Qt : v;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: s && (!f || f.length === 0) ? "435px" : "473px",
        width: v
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: N + 1 + "px" },
            children: /* @__PURE__ */ t(
              oi,
              {
                ...h,
                groupView: e,
                onRemove: n,
                onSubItemRemove: r,
                selectedEntities: a,
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
        p && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Qt + "px"
            },
            children: /* @__PURE__ */ t(
              ui,
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
}, mi = ({
  placeholder: e,
  selected: n,
  selectedEntities: r,
  disabled: a = !1,
  hiddenAvatar: l = !1,
  label: i,
  labelIcon: s,
  icon: c,
  error: d,
  status: f,
  hint: u,
  onClickContent: m,
  hideLabel: h = !1,
  maxLength: g,
  loading: p = !1,
  required: v = !1,
  readonly: N = !1,
  append: C,
  size: O = "sm",
  open: T
}) => {
  const P = K(
    () => r.some(
      (E) => E.subItems && E.subItems.length > 0
    ),
    [r]
  ), L = K(() => P ? r.flatMap(
    (E) => (E.subItems ?? []).map((w) => ({
      parent: E,
      subItem: w
    }))
  ) : r.map((E) => ({
    parent: null,
    subItem: {
      subId: E.id,
      subName: E.name,
      subAvatar: E.avatar,
      subDeactivated: E.deactivated
    }
  })), [P, r]), F = L.length === 0 ? void 0 : L.length === 1 ? L[0].subItem.subName : L.length + " " + n, $ = L.length === 1 ? L[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    la,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !F ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: g,
      clearable: !1,
      value: F,
      disabled: a,
      loading: p,
      required: v,
      readonly: N,
      size: O,
      avatar: l || !$ ? void 0 : {
        type: "person",
        firstName: $,
        lastName: "",
        src: L[0].subItem.subAvatar,
        deactivated: L[0].subItem.subDeactivated
      },
      append: C ?? /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(ia, { open: T, disabled: a, size: O }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            F && "text-f1-foreground",
            L.length === 1 && !l || c && !F ? "pl-8" : "pl-2"
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
}, cc = (e) => {
  const [n, r] = D(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (w) => {
    r(w), e.onOpenChange?.(w);
  };
  W(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, i] = D(e.entities), [s, c] = D(""), [d, f] = sa("", 300), u = K(
    () => e.entities.some(
      (w) => w.subItems && w.subItems.length > 0
    ),
    [e.entities]
  ), m = Ie(oa), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function p(w) {
    if (e.singleSelector) {
      e.onSelect(w), r(!1);
      return;
    }
    const x = e.selectedEntities ?? [], I = l.find((A) => A.id === w.id);
    if (!I)
      return;
    const k = new Set(
      (I.subItems ?? []).map((A) => A.subId)
    ), j = /* @__PURE__ */ new Set([I.id]);
    l.forEach((A) => {
      A.id !== I.id && (A.subItems ?? []).some(
        (q) => k.has(q.subId)
      ) && j.add(A.id);
    });
    const y = [...x];
    function S(A) {
      const B = y.findIndex((q) => q.id === A.id);
      B >= 0 ? y[B] = A : y.push(A);
    }
    j.forEach((A) => {
      const B = l.find((M) => M.id === A);
      if (!B) return;
      const q = B.subItems?.filter(
        (M) => k.has(M.subId)
      ) ?? [], le = y.findIndex((M) => M.id === A);
      if (le >= 0) {
        const M = y[le].subItems ?? [], Se = new Set(M.map((Ae) => Ae.subId)), nt = [
          ...M,
          ...q.filter((Ae) => !Se.has(Ae.subId))
        ];
        S({
          ...B,
          subItems: nt
        });
      } else
        S({
          ...B,
          subItems: q
        });
    }), e.onSelect(y);
  }
  function v(w, x) {
    if (e.singleSelector)
      e.onSelect({ ...w, subItems: [{ ...x }] }), r(!1);
    else {
      const I = e.selectedEntities ?? [], k = new Set(I.map((S) => S.id)), j = new Map(
        I.map((S) => [S.id, S.subItems ?? []])
      );
      k.add(w.id), e.entities.forEach((S) => {
        S.subItems?.some(
          (B) => B.subId === x.subId
        ) && k.add(S.id);
      });
      const y = [];
      e.entities.forEach((S) => {
        if (k.has(S.id)) {
          let B = [...j.get(S.id) ?? []];
          S.subItems?.some(
            (M) => M.subId === x.subId
          ) && (B.some(
            (Se) => Se.subId === x.subId
          ) || B.push(x));
          const le = new Set(
            (S.subItems ?? []).map((M) => M.subId)
          );
          B = B.filter(
            (M) => le.has(M.subId)
          ), y.push({
            ...S,
            subItems: B
          });
        }
      }), e.onSelect(y);
    }
  }
  function N(w) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let x = [];
    const I = e.selectedEntities ?? [];
    if (u) {
      const k = l.find(
        (y) => y.id === w.id
      );
      if (!k)
        return;
      const j = new Set(
        (k.subItems ?? []).map((y) => y.subId)
      );
      for (const y of I) {
        const S = (y.subItems ?? []).filter(
          (A) => !j.has(A.subId)
        );
        S.length > 0 && x.push({
          ...y,
          subItems: S
        });
      }
    } else
      x = (I ?? []).filter((k) => k.id !== w.id);
    e.onSelect(x);
  }
  function C(w, x) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const I = e.selectedEntities ?? [], k = x.subId, j = [];
    for (const y of I) {
      const S = y.subItems?.filter((A) => A.subId !== k) ?? [];
      S.length > 0 && j.push({
        ...y,
        subItems: S
      });
    }
    e.onSelect(j);
  }
  function O() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const w = e.selectedEntities ?? [];
    let x = [];
    if (u) {
      const I = new Set(
        l.flatMap(
          (k) => (k.subItems ?? []).map((j) => j.subId)
        )
      );
      for (const k of w) {
        const j = (k.subItems ?? []).filter(
          (y) => !I.has(y.subId)
        );
        j.length > 0 && x.push({
          ...k,
          subItems: j
        });
      }
    } else {
      const I = new Set(
        l.map((k) => k.id)
      );
      x = (w ?? []).filter((k) => !I.has(k.id));
    }
    e.onSelect(x);
  }
  function T() {
    const w = [...e.selectedEntities ?? []];
    l.forEach((x) => {
      const I = w.find((k) => k.id === x.id);
      if (!I)
        w.push({
          ...x,
          subItems: x.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...I.subItems ?? [],
            ...x.subItems ?? []
          ])
        );
        I.subItems = k;
      }
    }), e.singleSelector || e.onSelect(w);
  }
  const P = (w) => {
    c(w), f(w);
  }, L = (w, x) => {
    e.onItemExpandedChange(w.id, x), i(
      l.map(
        (I) => I.id === w.id ? { ...I, expanded: !w.expanded } : I
      )
    );
  };
  W(() => {
    if (!d) {
      i(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const x = e.entities.map((I) => {
        const k = hi(I, d), j = I.subItems?.map((y) => ({
          ...y,
          score: Ge(
            d,
            y.subSearchKeys ?? [y.subName]
          )
        })).filter((y) => y.score < 1 / 0).sort((y, S) => y.score - S.score);
        return {
          ...I,
          score: k,
          expanded: I.expanded ?? (j?.length ?? 0) > 0,
          subItems: j
        };
      }).filter((I) => I.score < 1 / 0).sort((I, k) => I.score - k.score);
      i(x);
    } else {
      const w = e.entities.map((x) => {
        const I = Ge(
          d,
          x.searchKeys ?? [x.name]
        );
        return { ...x, score: I };
      }).filter((x) => x.score < 1 / 0).sort((x, I) => x.score - I.score);
      i(w);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    i
  ]);
  const F = z(null), [$, E] = D(0);
  return $n(() => {
    const w = () => {
      F.current && E(F.current.offsetWidth);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: F,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        en,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: p,
          onRemove: N,
          onSubItemRemove: C,
          onSubItemSelect: v,
          onClear: O,
          onSelectAll: T,
          selectedEntities: e.selectedEntities ?? [],
          search: s,
          onSearch: P,
          onToggleExpand: L,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? $ - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(ca, { ...e, onOpenChange: a, open: n, children: [
    /* @__PURE__ */ t(
      da,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          mi,
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
      ua,
      {
        container: g,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          en,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: p,
            onRemove: N,
            onSubItemRemove: C,
            onSubItemSelect: v,
            onClear: O,
            onSelectAll: T,
            selectedEntities: e.selectedEntities ?? [],
            search: s,
            onSearch: P,
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
function ht(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function tn(e) {
  return ht(e).split(/\s+/).filter((n) => n.length > 0);
}
function Ge(e = "", n) {
  const r = tn(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const l = ht(a), i = tn(a), s = ht(e);
    if (l.includes(s) || r.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function hi(e, n) {
  const r = Ge(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((l, i) => {
    const s = Ge(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(l, s);
  }, 1 / 0)), Math.min(r, a);
}
const gi = ({
  id: e,
  createdAt: n,
  title: r,
  description: a,
  icon: l,
  category: i,
  isUnread: s = !1,
  onClick: c,
  onVisible: d
}) => {
  const { ref: f } = ot({
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
        /* @__PURE__ */ t(ct, { icon: l ?? kn }),
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${i} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: s && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, pi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(R, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(R, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Lt = Z(
  "ActivityItem",
  te(gi, pi)
), Qn = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), bi = ({
  title: e,
  items: n,
  onClickItem: r,
  onItemVisible: a
}) => /* @__PURE__ */ t(Qn, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  Lt,
  {
    ...l,
    onClick: () => r(l.id),
    onVisible: a
  },
  l.id
)) }), xi = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Qn, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(Lt.Skeleton, {}, a)) }), Me = te(bi, xi), vi = 3, wi = ["today", "yesterday", "lastWeek", "lastMonth"], yi = (e) => ma(e, ([n]) => {
  const r = wi.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), gt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ni = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: l = 5
}) => {
  const i = ie(), s = ul(e, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = fa((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = yi(
    Object.entries(s).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(se.Fragment, { children: [
      /* @__PURE__ */ t(
        Me,
        {
          title: u in i.date.groups ? i.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(gt, {})
    ] }, u)),
    n && new Array(vi).fill(null).map((u, m) => /* @__PURE__ */ t(Lt.Skeleton, {}, m))
  ] });
}, Ci = () => {
  const e = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t(Me.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(gt, {}),
    /* @__PURE__ */ t(
      Me.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(gt, {}),
    /* @__PURE__ */ t(
      Me.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, dc = Z(
  "ActivityItemList",
  te(Ni, Ci)
), Ii = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, ki = {
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
function Si({
  firstName: e,
  lastName: n,
  src: r,
  canReact: a,
  lastEmojiReaction: l,
  onReactionSelect: i,
  pickerRef: s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : ki[ha(
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
              ref: s,
              className: b(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                Sn,
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
function Ai(e) {
  const n = z(null), r = z(), a = U(() => {
    const i = n.current;
    if (!i) return;
    const s = ga.create(i, {
      resize: !0,
      useWorker: !1
    }), c = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], d = 0.1;
    r.current = setInterval(() => {
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
const Li = ({
  link: e,
  firstName: n,
  lastName: r,
  src: a,
  onClick: l,
  canReact: i = !0,
  lastEmojiReaction: s,
  onReactionSelect: c,
  type: d,
  typeLabel: f,
  date: u
}) => {
  const [m, h] = D(s), g = z(null);
  W(() => {
    h(s);
  }, [s]);
  const p = (P) => {
    h(P), c?.(P);
  }, v = Ye(), { canvasRef: N, handleMouseEnter: C, handleMouseLeave: O } = Ai(v), T = wt({
    emoji: Ii[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ve,
    {
      href: e,
      onClick: l,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ae()
      ),
      onMouseEnter: v ? void 0 : C,
      onMouseLeave: v ? void 0 : O,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: N,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Si,
          {
            firstName: n,
            lastName: r,
            src: a,
            canReact: i,
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
              r
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ t("span", { className: "truncate", children: f }),
              /* @__PURE__ */ t("span", { className: "shrink-0 leading-none", children: T })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(ft, { date: u }) })
        ] })
      ]
    }
  );
}, Fi = () => /* @__PURE__ */ o(
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
), uc = te(Li, Fi), fc = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(An, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(V, { label: r, variant: "outline", onClick: a }) })
] });
function Ei({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: l
}) {
  const [i, s] = D(r), [c, d] = D(n), f = z(null), { fireEmojiConfetti: u } = pa(), m = (p, v) => {
    p.stopPropagation(), d(c + (i ? -1 : 1)), s(!i), l?.(v), i || u(v, f);
  }, h = a?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ t(
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
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ba(e),
      prepend: /* @__PURE__ */ t(wt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        xa,
        {
          value: c,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: b(
            "tabular-nums",
            i ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(be, { label: h, children: g }) : g;
}
function Di({ items: e, onInteraction: n, locale: r, action: a }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    a && /* @__PURE__ */ t(
      V,
      {
        label: a.label,
        icon: a.icon,
        onClick: a.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ t(Sn, { onSelect: n, locale: r }),
    e.map((l) => /* @__PURE__ */ t(
      Ei,
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
const _i = Z("Reactions", Di), er = H(function({ content: n, collapsed: r, id: a, className: l, tabIndex: i }, s) {
  return /* @__PURE__ */ t(
    va,
    {
      ref: s,
      id: a,
      content: n,
      tabIndex: i,
      className: b(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        l
      )
    }
  );
});
er.displayName = "BasePostDescription";
const Oi = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(R, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(R, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), tr = te(
  er,
  Oi
), nn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: e.map((r) => {
      const a = /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        De,
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
), pt = H(
  function({
    label: n,
    title: r,
    subtitle: a,
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
          !m && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `${i}`
                }
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
                style: {
                  background: `linear-gradient(to right, ${i}, transparent)`
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
                !!n && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-sm text-f1-foreground-secondary", children: n }),
                /* @__PURE__ */ o("p", { className: "line-clamp-3 font-medium text-f1-foreground", children: [
                  r,
                  !!a && /* @__PURE__ */ t("span", { className: "pl-1 font-normal text-f1-foreground-secondary", children: `· ${a}` })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: l })
              ] }),
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center", children: [
                f && /* @__PURE__ */ o(Y, { children: [
                  /* @__PURE__ */ t(ft, { date: f }),
                  /* @__PURE__ */ t(
                    G,
                    {
                      icon: bn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(ft, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(nn, { tags: c }),
              d && /* @__PURE__ */ t(nn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Pi = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), nr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Pi.has(r);
}, Ti = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let l = fl(a);
  const i = (s) => {
    s.stopPropagation();
  };
  return r && (l = `${l} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: nr(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
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
      pt,
      {
        title: e,
        description: l,
        color: wa.special.highlight,
        isPending: !1,
        toDate: a,
        noBackground: !0
      }
    )
  ] });
}, Ri = () => /* @__PURE__ */ o(
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
), rr = te(Ti, Ri), zi = ({
  describedBy: e,
  controls: n,
  expanded: r,
  onClick: a
}) => {
  const l = ie();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        ae()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": r,
      onClick: a,
      children: l.actions.seeMore
    }
  ) });
}, Bi = ({
  id: e,
  author: n,
  group: r,
  createdAt: a,
  title: l,
  description: i,
  onClick: s,
  mediaUrl: c,
  event: d,
  counters: f,
  reactions: u,
  inLabel: m,
  comment: h,
  actions: g,
  dropdownItems: p,
  noReactionsButton: v = !1,
  descriptionExpandable: N = !1
}) => {
  const C = ut(), O = ut(), T = z(null), [P, L] = D(null), [F, $] = D(!1), E = [f.views, f.comments].filter(Boolean).join(" · "), w = N && P?.id === e && P.description === i, x = !w, I = jn(a), k = () => {
    s(e);
  }, j = (A) => {
    A.stopPropagation();
  }, y = n ? `${n.firstName} ${n.lastName}` : void 0, S = (A) => {
    A.preventDefault(), A.stopPropagation(), i && L({ id: e, description: i });
  };
  return W(() => {
    w && T.current?.focus();
  }, [w]), W(() => {
    N || L(null);
  }, [N]), W(() => {
    const A = T.current;
    if (!N || !A || w) {
      $(!1);
      return;
    }
    const B = () => {
      $(
        A.scrollHeight > A.clientHeight
      );
    };
    if (B(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(B);
    return q.observe(A), () => q.disconnect();
  }, [N, w, i]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: k,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Re,
          {
            href: n.url || "#",
            title: y,
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
        ) : /* @__PURE__ */ t(ct, { icon: _t }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(Y, { children: [
                  /* @__PURE__ */ t(
                    Re,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: y,
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
                    Re,
                    {
                      href: n.url,
                      title: y,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: y
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ct, { icon: _t, size: "sm" }) }),
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
                  Re,
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
                  g?.map((A) => /* @__PURE__ */ t(
                    V,
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
                  p?.length && /* @__PURE__ */ t(
                    Ne,
                    {
                      items: p,
                      icon: dt,
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
                      ...p ?? []
                    ],
                    icon: dt,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: I }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: C,
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              i && /* @__PURE__ */ o(Y, { children: [
                /* @__PURE__ */ t(
                  tr,
                  {
                    ref: T,
                    id: O,
                    content: i,
                    collapsed: x,
                    tabIndex: w ? -1 : void 0,
                    className: b(w && ae())
                  }
                ),
                N && F && !w && /* @__PURE__ */ t(
                  zi,
                  {
                    describedBy: C,
                    controls: O,
                    expanded: w,
                    onClick: S
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: nr(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: j,
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
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(rr, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: E }),
          !v && /* @__PURE__ */ t(
            _i,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: ya
              }
            }
          )
        ] })
      ]
    }
  );
}, $i = ({
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
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(tr.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(R, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(rr.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), mc = te(
  Bi,
  $i
), ar = se.forwardRef(({ person: e, onClick: n, ...r }, a) => {
  const l = () => {
    n();
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: b(
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
                icon: Nn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((i, s) => /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(De, { ...i }, i.text),
            s < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(Na, { ...r.rightTag }),
          "actions" in r && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            r.actions?.primary && /* @__PURE__ */ t(
              V,
              {
                variant: "outline",
                onClick: r.actions.primary.onClick,
                label: r.actions.primary.label,
                icon: r.actions.primary.icon
              }
            ),
            r.actions?.secondary && /* @__PURE__ */ t(
              V,
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
}), Mi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(R, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(R, { className: "h-4" }),
    /* @__PURE__ */ t(R, { className: "h-4" })
  ] })
] });
ar.displayName = "OnePersonListItem";
const hc = re(
  Z(
    "OnePersonListItem",
    te(ar, Mi)
  )
), Wi = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function ji({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(Ol, { children: /* @__PURE__ */ t(
    Vi,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function Vi({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  const i = a?.enabled ? Ca : l?.enabled ? Jl : sl, s = a?.enabled ? a : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(i, { ...s, children: /* @__PURE__ */ t(
    Ki,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const gc = Z(
  "ApplicationFrame",
  ji
), Ui = ({ contentId: e }) => {
  const n = ie();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: ae(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Gi(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function Hi(e, n) {
  const { sidebarState: r, toggleSidebar: a } = ke(), l = z(e);
  W(() => {
    n && Gi(
      e,
      l.current,
      r
    ) && a({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, r, a]);
}
function Ki({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: l
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = ke(), f = Ye(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    chatWidth: g,
    resizable: p
  } = Ia(), v = m === "fullscreen", N = m === "canvas", { open: C } = Je(), O = p ? g : Sa, T = z(v), P = v && !T.current, L = !v && T.current, [
    F,
    $
  ] = D(!1);
  W(() => {
    !v && T.current && $(!0), T.current = v;
  }, [v]);
  const E = v || F || L, w = K(() => P ? { duration: 0.15, ease: "easeOut" } : L ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [P, L]), x = st(
    `(max-width: ${We.xl}px)`,
    { initializeWithValue: !0 }
  ), I = st(`(max-width: ${We.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(C);
  }, [C, d]), Hi(u, x), /* @__PURE__ */ t(
    ka,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(Fn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(_e, { children: i === "unlocked" && /* @__PURE__ */ t(
            Q.nav,
            {
              className: b(
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
              className: b(
                i !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                i === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (k) => {
                i === "hidden" ? k?.setAttribute("inert", "") : k?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Ui, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            Q.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !I ? O : 0
              },
              transition: { paddingRight: Wi },
              children: [
                /* @__PURE__ */ t(
                  Q.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      E ? "overflow-hidden" : "overflow-auto",
                      !u && !C && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ t(
                      Q.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          E ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && N && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      I ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: I ? void 0 : { right: O },
                    children: /* @__PURE__ */ t(Aa, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  Q.div,
                  {
                    className: b(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      I ? "fixed inset-0 z-[30]" : b(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        E || N ? "z-20" : "z-0",
                        i === "hidden" && E ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: I || v ? "100%" : O
                    },
                    transition: w,
                    onAnimationComplete: () => {
                      F && $(!1);
                    },
                    children: /* @__PURE__ */ t(La, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Zl, {})
        ] }) })
      ] })
    }
  );
}
const qi = pe({
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
function lr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: l, toggleSidebar: i, isSmallScreen: s } = ke();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: qi({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (s || l === "hidden") && /* @__PURE__ */ t(
              V,
              {
                variant: "ghost",
                onClick: () => i(),
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
                  s ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    ml,
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
                      size: s ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: b(
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
            /* @__PURE__ */ t(vn, {}),
            /* @__PURE__ */ t(Hn, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
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
lr.displayName = "DaytimePage";
const pc = re(
  Z("DaytimePage", lr)
);
function Yi(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: l, target: i }) => ({
    label: n,
    description: r,
    href: a,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Zi({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Ne, { items: Yi(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ae()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(G, { icon: En, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const bc = re(
  Z("OmniButton", Zi)
);
function ir({ children: e, header: n, embedded: r = !1 }) {
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
ir.displayName = "Page";
const xc = re(Z("Page", ir));
function Ji({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: l = !1,
  additionalOptions: i = []
}) {
  const s = K(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(R, { className: "size-6" }),
    /* @__PURE__ */ t(R, { className: "h-3 w-14" })
  ] }) : e.length + (i?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    rn,
    {
      company: s,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Xi,
    {
      companies: e,
      selected: s,
      onChange: r,
      additionalOptions: i,
      children: /* @__PURE__ */ t(
        rn,
        {
          company: s,
          withNotification: l
        }
      )
    }
  ) });
}
const Xi = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: l = []
}) => {
  const i = ie(), [s, c] = D(!1), d = K(
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
    Ve,
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
          className: b(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            ae()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              Q.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(G, { icon: vt, size: "xs" })
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
        Fa,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: Dn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(me, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function vc({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: l,
  onDropdownClick: i,
  hasActivityUpdates: s
}) {
  const c = ie();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ne, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ae("focus-visible:ring-inset")
        ),
        onClick: i,
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
        V,
        {
          icon: kn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Ea, { type: "highlight", size: "sm", icon: Dn }) })
    ] }) })
  ] });
}
function Qi({ isExpanded: e }) {
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
function es() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = ke(), l = z(null);
  return W(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    Ln,
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !a }), children: /* @__PURE__ */ t(Qi, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: a }), children: /* @__PURE__ */ t(G, { icon: Ce, size: "md" }) })
      ]
    }
  );
}
function wc({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: l,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Ji,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: i,
        withNotification: a,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(es, {})
  ] });
}
function ts() {
  const [e, n] = D(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const sr = Ze(void 0);
function ns({ children: e }) {
  const [n, r] = D(!1), [a, l] = D(null);
  return /* @__PURE__ */ t(
    sr.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: l },
      children: e
    }
  );
}
function Ft() {
  const e = Ie(sr);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const rs = ({
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
  e.badge && /* @__PURE__ */ t(qe, { value: e.badge, size: "sm", type: "bold" })
] }), as = ({ item: e }) => {
  const { isActive: n } = xt(), { label: r, icon: a, ...l } = e, i = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    ve,
    {
      ...l,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ae("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(rs, { item: e, active: i })
    }
  );
}, ls = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: l,
  total: i,
  onMove: s,
  onReorderFinish: c,
  isSortable: d = !0
}) => {
  const f = ie(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Ft(), { isActive: p } = xt(), v = p(e.href, { exact: e.exactMatch }), N = z(!1), [C, O] = D(!1), T = l === 0, P = l === i - 1, L = i === 1, F = K(() => {
    const k = [];
    return !L && !T && k.push({
      label: f.actions.moveUp,
      onClick: () => s?.(l, l - 1),
      icon: Da
    }), !L && !P && k.push({
      label: f.actions.moveDown,
      onClick: () => s?.(l, l + 1),
      icon: _a
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: Oa,
      critical: !0
    }), k;
  }, [L, T, P, f, s, l, a, e]), $ = () => {
    m(!0), O(!1), g(e.href || null), N.current = !0;
  }, E = () => {
    m(!1), g(null), c(), setTimeout(() => {
      N.current = !1;
    }, 0);
  }, w = u && h === e.href, x = K(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      C && "bg-f1-background-secondary",
      w && "bg-f1-background-secondary"
    ),
    [v, C, w, d]
  ), I = K(() => /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(ss, { tooltip: n, children: /* @__PURE__ */ o(
      ve,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          w && "pointer-events-none"
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
                v ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(Pa, { size: "xs", avatar: e.avatar }) : null,
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          C && "bg-f1-background-secondary opacity-100",
          w && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Ne,
          {
            open: C,
            onOpenChange: O,
            items: F,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: dt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, C, w, F, n]);
  return d ? /* @__PURE__ */ t(
    _n,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: $,
      onDragEnd: E,
      className: x,
      whileDrag: {
        scale: 1.05
      },
      children: I
    }
  ) : /* @__PURE__ */ t("div", { className: x, children: I });
}, or = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: l,
  isDragging: i,
  wasDragging: s
}) => {
  const [c, d] = D(n), f = Ye(), u = () => {
    if (i || s?.current) return;
    const m = !c;
    d(m), a?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Ra, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          ae("focus-visible:ring-inset"),
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
            Q.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                G,
                {
                  icon: vt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(za, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
}, lt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: l,
  currentOrder: i
}) => {
  const { isDragging: s, setIsDragging: c } = Ft(), d = z(!1), f = Ta(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, i && l?.(i);
    }, 0);
  }, h = (p) => {
    !s && !d.current && a?.(e, p);
  }, g = /* @__PURE__ */ t(
    or,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: h,
      isDragging: s,
      wasDragging: d,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: b(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: e.items.map((p, v) => /* @__PURE__ */ t(as, { item: p }, v))
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
      children: g
    }
  ) : g;
};
function yc({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: l
}) {
  const i = z(null), s = e.filter(
    (p) => p.isSortable === !1
  ), [c, d] = D(
    e.filter((p) => p.isSortable !== !1)
  ), [f, u] = D(0), m = U((p) => {
    d(p);
  }, []), h = U(
    (p) => {
      r?.(p);
    },
    [r]
  ), g = ts();
  return /* @__PURE__ */ t(ns, { children: /* @__PURE__ */ t(Fn, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    is,
    {
      disableDragging: g,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: a,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function is({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: l,
  onDragEnd: i,
  favorites: s = [],
  onFavoritesChange: c,
  forceUpdate: d,
  disableDragging: f = !1
}) {
  const u = ie(), { isDragging: m } = Ft(), h = e.some((y) => y.isRoot), g = e.filter((y) => !y.isRoot).length > 0, p = n.length > 0, v = z(null), [N, C] = D(s), O = s.length > 0;
  W(() => {
    JSON.stringify(s) !== JSON.stringify(N) && C(s);
  }, [s]);
  const T = (y) => {
    C(y);
  }, P = U(
    (y) => {
      const S = N.filter((A) => A.href !== y.href);
      C(S), c?.(S);
    },
    [N, c]
  ), L = U(
    (y, S) => {
      if (S < 0 || S >= N.length) return;
      const A = [...N], [B] = A.splice(y, 1);
      A.splice(S, 0, B), C(A), c?.(A);
    },
    [N, c]
  ), [F, $] = D(!1), E = z(null);
  W(() => {
    n.length > 0 && !F && (r([...n]), $(!0));
  }, [n, r, F]), W(() => {
    const y = () => {
      E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), E.current !== null && window.clearTimeout(E.current);
    };
  }, [a, n, d]);
  const w = "flex flex-col gap-0.5", x = K(
    () => N.reduce(
      (y, S, A) => (S.label in y || (y[S.label] = []), y[S.label].push(A), y),
      {}
    ),
    [N]
  ), I = K(
    () => O && N.map((y, S) => /* @__PURE__ */ t(
      ls,
      {
        isSortable: !f,
        tooltip: (x[y.label] ?? []).length > 1 ? y.tooltip : void 0,
        item: y,
        dragConstraints: v,
        onRemove: P,
        index: S,
        total: N.length,
        onMove: L,
        onReorderFinish: () => {
          c?.(N);
        }
      },
      `${y.href}-${y.label}`
    )),
    [
      O,
      N,
      x,
      P,
      L,
      c,
      f
    ]
  ), k = "flex flex-col gap-3", j = K(() => n.map((y) => /* @__PURE__ */ t(
    lt,
    {
      category: y,
      isSortable: !f,
      dragConstraints: a,
      onCollapse: l,
      onDragEnd: i,
      currentOrder: n
    },
    y.id
  )), [n, f, a, l, i]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => y.isRoot).map((y, S) => /* @__PURE__ */ t(
          lt,
          {
            category: y,
            onCollapse: l
          },
          `fixed-${S}`
        )) }),
        O && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(or, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: w, children: I }) : /* @__PURE__ */ t(
          Ot,
          {
            axis: "y",
            values: N,
            onReorder: T,
            className: w,
            children: I
          }
        ) }) }) }),
        g && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((y) => !y.isRoot).map((y, S) => /* @__PURE__ */ t(
          lt,
          {
            category: y,
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
            ref: a,
            children: f ? /* @__PURE__ */ t("div", { className: k, children: j }) : /* @__PURE__ */ t(
              Ot,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: k,
                children: j
              }
            )
          }
        )
      ]
    }
  );
}
const ss = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(be, { description: e, children: n }) : n;
function Nc({
  onClick: e,
  placeholder: n,
  shortcut: r = ["cmd", "k"],
  ...a
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: e,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        ae()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: Ba, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t($a, { keys: r }) })
      ]
    }
  ) });
}
const an = ({ position: e }) => /* @__PURE__ */ t(
  Q.div,
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
function os({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: l, isSmallScreen: i } = ke(), s = Ye(), [c, d] = ot({ threshold: 1 }), [f, u] = ot({ threshold: 1 }), m = ie(), h = {
    x: {
      ease: l !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : l !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, g = () => r ? ol(r) && a ? Mn(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ o(
    Q.aside,
    {
      initial: !1,
      "aria-label": m.navigation.sidebar.label,
      className: b(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        l === "locked" ? "h-full" : b(
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
          /* @__PURE__ */ o(_e, { children: [
            !d && /* @__PURE__ */ t(an, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(an, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const Cc = re(os), cs = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, ln = {
  approved: {
    icon: yn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ce,
    type: "critical",
    size: "sm"
  }
}, ds = {
  icon: En,
  type: "neutral",
  size: "sm"
}, us = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, fs = (e) => e in ln ? ln[e] : ds;
function sn(e) {
  return us[e ?? "neutral"] ?? 0;
}
const ms = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const l = ie(), i = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = l.approvals.statuses[r], c = K(() => a.map((d) => {
    const f = fs(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => sn(f.badge?.type) - sn(d.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ t(je, { text: s, variant: cs[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(On, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, hs = ({ steps: e }) => {
  const r = ie().approvals.history, a = e.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: r }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((l, i) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: i + 1 })
          }
        ),
        i !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((l, i) => /* @__PURE__ */ o(Y, { children: [
        /* @__PURE__ */ t(
          ms,
          {
            title: l.title,
            approvalsRequired: l.approvalsRequired,
            status: l.status,
            approvers: l.approvers
          },
          l.title
        ),
        i !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, Ic = re(
  Z("OneApprovalHistory", hs)
), gs = {
  records: [],
  type: "flat",
  groups: []
}, on = (e, n) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : n ?? JSON.stringify(e), ps = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Pt]: n[Pt]
  })),
  groups: e.groups
}), bs = (e, n, r) => e.records.length === n.records.length && e.records.every(
  (a, l) => r(a, l) === r(n.records[l], l)
), xs = (e, n, r) => {
  const a = /* @__PURE__ */ new Map();
  let l = !1;
  n.records.forEach((s, c) => {
    a.set(r(s, c), s);
  });
  const i = e.records.map((s, c) => {
    const d = a.get(r(s, c));
    return !d || d === s ? s : (l = !0, d);
  });
  return l ? {
    ...e,
    records: i
  } : e;
}, cn = (e, n) => {
  const r = e.paginationInfo, a = n.paginationInfo;
  return r?.type === "pages" || a?.type === "pages" ? r?.type !== "pages" || a?.type !== "pages" || r.currentPage !== a.currentPage : !1;
}, Be = (e) => ({
  data: ps(e.data),
  paginationInfo: e.paginationInfo
});
function vs({
  dataState: e,
  dataStateVersion: n,
  effectiveSnapshotKey: r,
  resetSnapshotKey: a,
  idProvider: l
}) {
  const [i, s] = D(null), [c, d] = D(0), f = z(r), u = z(a), m = z(null), h = z(
    null
  ), g = z(
    null
  ), p = U(() => {
    g.current !== null && (clearTimeout(g.current), g.current = null);
  }, []), v = U(
    ($) => {
      p(), g.current = setTimeout(() => {
        g.current = null;
        const E = m.current;
        !E || E.key !== $ || (E.canUseCurrentData = !0, d((w) => w + 1));
      }, 0);
    },
    [p]
  );
  W(() => p, [p]), W(() => {
    if (!e) {
      if (r != null && i != null)
        return;
      m.current = null, h.current = null, p(), s(null), f.current = r, u.current = a;
      return;
    }
    if (r == null) {
      m.current = null, h.current = null, p(), s(null), f.current = r, u.current = a;
      return;
    }
    if (u.current !== a) {
      if (e.isLoading || e.isLoadingMore) return;
      u.current = a, m.current = null, h.current = null, p(), s(Be(e));
      return;
    }
    const $ = f.current !== r;
    if (f.current = r, $) {
      m.current = {
        key: r,
        requestedAtVersion: n,
        canUseCurrentData: !1
      }, v(r);
      return;
    }
    const E = h.current;
    if (E) {
      if (e.isLoading || e.isLoadingMore) {
        E.sawLoading = !0;
        return;
      }
      if (i && (cn(i, e) || e.data.records.length > i.data.records.length)) {
        h.current = null, s(Be(e));
        return;
      }
      (E.sawLoading || n > E.requestedAtVersion) && (h.current = null);
    }
    if (e.isLoading || e.isLoadingMore)
      return;
    const w = m.current?.key === r ? m.current : null;
    if (w) {
      const x = l ?? e.source.idProvider ?? on, I = n > w.requestedAtVersion, k = i ? !bs(
        e.data,
        i.data,
        x
      ) : !0;
      if (!w.canUseCurrentData && !I && !k || !w.canUseCurrentData && I && !k)
        return;
      m.current = null, p(), s(Be(e));
      return;
    }
    s((x) => {
      if (!x)
        return e.data.records.length === 0 ? x : Be(e);
      const I = l ?? e.source.idProvider ?? on, k = xs(
        x.data,
        e.data,
        I
      );
      return e.data.records.length <= x.data.records.length ? k === x.data ? x : {
        ...x,
        data: k
      } : k === x.data ? x : {
        ...x,
        data: k
      };
    });
  }, [
    p,
    e,
    n,
    r,
    l,
    a,
    v,
    i,
    c
  ]);
  const N = !!(h.current && i && e && !e.isLoading && !e.isLoadingMore && (cn(i, e) || e.data.records.length > i.data.records.length)), C = e?.data ?? gs, O = N ? e?.data ?? C : i?.data ?? C, T = N ? e?.paginationInfo ?? null : i?.paginationInfo ?? e?.paginationInfo ?? null, P = U(() => {
    r == null || i == null || (h.current = {
      requestedAtVersion: n,
      sawLoading: !1
    });
  }, [n, r, i]), L = U(() => {
    m.current = null, h.current = null, p(), s(null);
  }, [p]), F = U(() => {
    h.current = null;
  }, []);
  return {
    navigationData: O,
    navigationPaginationInfo: T,
    hasSnapshot: i !== null,
    startPendingNavigation: P,
    clearSnapshot: L,
    clearPendingNavigation: F
  };
}
const dn = () => {
}, un = (e, n, r) => e.source.idProvider?.(n, r) ?? ("id" in n && (typeof n.id == "string" || typeof n.id == "number" || typeof n.id == "symbol") ? n.id : r ?? JSON.stringify(n)), ws = (e, n) => {
  const r = e.data.records.every(
    (l, i) => un(e, l, i) === un(n, l, i)
  ), a = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return r && a;
}, ys = (e, n) => e !== null && e.data === n.data && ws(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore;
function kc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: r,
  idProvider: a,
  itemUrl: l,
  snapshotMode: i,
  snapshotKey: s
} = {}) {
  const c = i ?? (s != null ? "manual" : "live"), [d, f] = D(0), [u, m] = D(0), [h, g] = D(0), p = c === "manual" ? s : c === "session" ? d : null, [v, N] = D({
    state: null,
    version: 0
  }), C = v.state, O = v.version, T = U(
    (B) => {
      N((q) => B === null ? q.state === null ? q : { state: null, version: q.version + 1 } : ys(q.state, B) ? q : { state: B, version: q.version + 1 });
    },
    []
  ), {
    navigationData: P,
    navigationPaginationInfo: L,
    hasSnapshot: F,
    startPendingNavigation: $,
    clearSnapshot: E,
    clearPendingNavigation: w
  } = vs({
    dataState: C,
    dataStateVersion: O,
    effectiveSnapshotKey: p,
    resetSnapshotKey: u,
    idProvider: a
  }), x = hl({
    dataSource: C?.source ?? {},
    data: P,
    paginationInfo: L,
    setPage: C?.setPage ?? dn,
    loadMore: C?.loadMore ?? dn,
    isLoading: !!(C?.isLoading || C?.isLoadingMore),
    idProvider: a,
    itemUrl: l ?? C?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: r
  }), I = U(() => {
    x.hasNext && x.nextItem === null && !x.isNavigating && $(), x.goToNext();
  }, [x, $]), k = U(() => {
    x.hasPrevious && x.previousItem === null && !x.isNavigating && $(), x.goToPrevious();
  }, [x, $]), j = U(
    (B) => {
      w(), c === "session" && f((q) => q + 1), x.setActiveItemId(B);
    },
    [w, c, x]
  ), y = U(() => {
    E(), c === "session" && f((B) => B + 1), g((B) => B + 1), x.setActiveItemId(null);
  }, [E, c, x]), S = U(() => {
    w(), m((B) => B + 1);
  }, [w]), A = K(() => !x.activeItem || x.activeIndex < 0 ? null : {
    activeItemId: x.activeItemId,
    activeItem: x.activeItem,
    activeItemUrl: x.activeItemUrl,
    currentIndex: x.absoluteIndex ?? x.activeIndex,
    totalCount: x.totalItems ?? x.loadedItemsCount,
    previousItem: x.previousItem,
    nextItem: x.nextItem,
    canGoPrevious: x.hasPrevious && !x.isNavigating,
    canGoNext: x.hasNext && !x.isNavigating,
    goToPrevious: k,
    goToNext: I,
    isNavigating: x.isNavigating,
    previousItemUrl: x.previousItemUrl,
    nextItemUrl: x.nextItemUrl
  }, [I, k, x]);
  return K(
    () => ({
      ...x,
      goToNext: I,
      goToPrevious: k,
      isReady: C !== null || F,
      controls: A,
      openItem: j,
      closeItem: y,
      resetSnapshot: S,
      [Wa]: T,
      [Ma]: h
    }),
    [
      x,
      C,
      F,
      A,
      I,
      k,
      j,
      y,
      h,
      S,
      T
    ]
  );
}
const Ns = (e) => e, Cs = (e) => String(e), Ee = (e, n) => e === n, Is = ({
  routeId: e
}) => e ?? null, Sc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: r = Ns,
  formatItemId: a = Cs,
  onRouteIdChange: l
}) => {
  const [i, s] = D(
    () => Is({ routeId: n })
  ), c = z(null), d = z(void 0), f = z(null), u = z(null), m = z(null), h = z(
    e?.activeItemId ?? null
  ), g = z(e), p = z(
    Tt(e)
  ), v = z(/* @__PURE__ */ new Set());
  W(() => {
    const C = g.current !== e;
    g.current = e;
    const O = Tt(e), T = O !== void 0 && p.current !== O;
    p.current = O;
    const P = d.current !== (n ?? null);
    if (d.current = n ?? null, P && f.current !== n && (f.current = null), n == null) {
      c.current = null, u.current = null, f.current = null, v.current.clear(), s(null);
      const $ = e?.activeItemId ?? null;
      $ == null ? m.current = null : Ee(m.current, $) || (m.current = $, e?.closeItem());
      return;
    }
    const L = r(n);
    if (!e) {
      P && s(n);
      return;
    }
    if (v.current.has(n)) {
      if (!Ee(e.activeItemId ?? null, L)) {
        f.current = n;
        return;
      }
      v.current.clear(), f.current = null, c.current = n, u.current = null, s(n);
      return;
    }
    f.current !== n && (P && s(n), !(c.current === n && (!C || e.activeItemId != null || T)) && (m.current = null, c.current = n, u.current = Ee(
      e.activeItemId ?? null,
      L
    ) ? null : L, e.openItem(L)));
  }, [e, r, n]), W(() => {
    if (n == null) return;
    const C = e?.activeItemId ?? null;
    if (Ee(C, h.current)) return;
    if (h.current = C, C == null) {
      if (u.current != null) return;
      u.current = null, v.current.clear(), f.current = n, c.current = null, s(null), l?.(null, null);
      return;
    }
    const O = u.current;
    if (O != null) {
      Ee(C, O) && (u.current = null);
      return;
    }
    const T = a(C);
    T !== i && (v.current.add(T), s(T), l?.(T, C));
  }, [
    i,
    a,
    e?.activeItemId,
    l,
    n
  ]);
  const N = n == null ? null : i;
  return {
    activeRouteId: N,
    activeItemId: N == null ? null : e?.activeItemId ?? null,
    controls: N == null ? null : e?.controls ?? null
  };
};
function Ac(e, n) {
  return K(() => {
    if (!e) return null;
    const { previousItem: r, nextItem: a, previousItemUrl: l, nextItemUrl: i } = e;
    return {
      previous: l !== null ? {
        url: l,
        title: (r !== null ? n?.getItemTitle?.(r) : void 0) ?? "Previous"
      } : void 0,
      next: i !== null ? {
        url: i,
        title: (a !== null ? n?.getItemTitle?.(a) : void 0) ?? "Next"
      } : void 0,
      counter: {
        current: e.currentIndex + 1,
        total: e.totalCount
      }
    };
  }, [e, n]);
}
const Et = {
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
}, ks = pe({
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
      ...Et
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Ss = se.forwardRef(function({ className: n, gap: r, children: a, tileSize: l, ...i }, s) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(ks({ gap: r, tileSize: l }), n),
      ref: s,
      ...i,
      children: a
    }
  ) });
}), As = pe({
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
}), cr = H(function({
  className: n,
  grow: r,
  basis: a,
  shrink: l,
  paddingX: i,
  paddingY: s,
  inline: c,
  overflow: d,
  maxWidth: f,
  justifyContent: u,
  alignItems: m,
  height: h,
  width: g,
  ...p
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        As({
          paddingX: i,
          basis: a,
          paddingY: s,
          grow: r,
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
      ref: v,
      ...p
    }
  );
}), Ls = pe({
  base: "flex-row",
  variants: {
    gap: {
      ...Et
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Fs = se.forwardRef(function({ className: n, gap: r, wrap: a, ...l }, i) {
  return /* @__PURE__ */ t(
    cr,
    {
      className: b(Ls({ gap: r, wrap: a }), n),
      ref: i,
      ...l
    }
  );
}), Es = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...Et
    }
  },
  defaultVariants: {}
}), Ds = H(function({ className: n, gap: r, children: a, ...l }, i) {
  return /* @__PURE__ */ t(
    cr,
    {
      className: b(Es({ gap: r }), n),
      ref: i,
      ...l,
      children: a
    }
  );
}), Lc = ue(
  {
    name: "Stack",
    type: "layout"
  },
  Ds
), Fc = ue(
  {
    name: "Split",
    type: "layout"
  },
  Fs
), Ec = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Ss
), _s = ({ children: e }) => {
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
}, Os = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Ps = H(function({ header: n, children: r, action: a, summaries: l, alert: i, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Pn();
  W(() => {
    if (i && s)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [i, s]);
  const m = (g) => !!g && !(se.isValidElement(g) && g.type === se.Fragment && se.Children.count(g.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    yt,
    {
      className: b(
        c ? "h-full" : "",
        "relative flex gap-3 border-f1-border-secondary"
      ),
      ref: d,
      children: [
        n && /* @__PURE__ */ t(Nt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ t(Ct, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Os, {}),
                /* @__PURE__ */ t(Tn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(be, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: Rn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ t(zn, { text: i, level: "critical" }),
              s && /* @__PURE__ */ t(je, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ t(
                ja,
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
            /* @__PURE__ */ t(_s, { children: /* @__PURE__ */ t(Va, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              V,
              {
                icon: f ? Ua : Ga,
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
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((g, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          se.Children.toArray(r).filter(m).map((g, p) => /* @__PURE__ */ o(se.Fragment, { children: [
            p > 0 && /* @__PURE__ */ t(Ha, { bare: !0 }),
            g
          ] }, p))
        ] }),
        a && /* @__PURE__ */ t(Ka, { children: /* @__PURE__ */ t(V, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), Ts = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Rs = H(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      yt,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(Nt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Ct, { children: n.title }) : /* @__PURE__ */ t(R, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Tn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            It,
            {
              "aria-hidden": !0,
              className: b(r !== "full" && Ts({ height: r })),
              children: [...Array(4)].map((l, i) => /* @__PURE__ */ t(
                R,
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
), ye = re(
  Z("Widget", te(Ps, Rs))
), ce = Object.assign(
  H(function({ chart: n, summaries: r, ...a }, l) {
    return /* @__PURE__ */ t(ye, { ref: l, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ye.Skeleton
  }
), zs = te(
  H(function({ canBeBlurred: n, ...r }, a) {
    const l = {
      ...r,
      header: {
        ...r.header,
        canBeBlurred: n
      }
    }, i = {
      ...r.chart,
      yAxis: r.chart.yAxis ? { ...r.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ t(
      ce,
      {
        ref: a,
        ...l,
        chart: /* @__PURE__ */ t(gl, { ...i, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), Bs = Z(
  "AreaChartWidget",
  zs
), $s = H(function(n, r) {
  return /* @__PURE__ */ t(
    ce,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(pl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Ms = Z(
  "BarChartWidget",
  te($s, ce.Skeleton)
), Ws = te(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(bl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), js = Z(
  "LineChartWidget",
  Ws
), Vs = te(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(xl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Us = Z(
  "PieChartWidget",
  Vs
), Gs = te(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(ce, { ref: r, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Hs = Z(
  "SummariesWidget",
  Gs
), Ks = te(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(vl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), qs = Z(
  "VerticalBarChartWidget",
  Ks
), Dc = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Bs
), _c = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Ms
), Oc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  js
), Pc = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Us
), Tc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  qs
), Rc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Hs
), Ys = (e, n) => /* @__PURE__ */ o(
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
), Zs = H(Ys), Js = (e, n) => /* @__PURE__ */ o(
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
), Xs = H(Js), Qs = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, eo = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, to = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, no = {
  "line-chart": "default",
  "bar-chart": "promote"
}, ro = H(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: l, buttonAction: i, type: s }, c) {
    const d = Qs[s], f = eo[s], u = to[s], m = no[s];
    return /* @__PURE__ */ o(
      yt,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Nt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Ct, { children: n }) }),
          /* @__PURE__ */ o(It, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Zs, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ t(Xs, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ t("p", { className: "flex w-3/4 text-xl font-semibold", children: r }),
              a && /* @__PURE__ */ t(
                V,
                {
                  label: a,
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
), zc = re(
  Z("ChartWidgetEmptyState", ro)
);
function ao(e, n) {
  const r = z(null), a = z(null), [l, i] = D({
    visibleItems: [],
    overflowItems: []
  });
  qa({
    ref: r,
    onResize: () => {
      f();
    }
  });
  const s = U(
    (u, m, h) => m < h - 1 ? u + n : u,
    [n]
  ), c = U(() => {
    if (!a.current) return [];
    const u = a.current.children, m = [];
    for (let h = 0; h < u.length; h++) {
      const g = u[h].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = U(
    (u, m) => {
      let h = 0, g = 0;
      for (let p = 0; p < u.length; p++) {
        const v = g + u[p];
        if (v > m + 30) break;
        g = v, g = s(
          g,
          p,
          u.length
        ), h++;
      }
      return h;
    },
    [s]
  ), f = U(() => {
    if (!r.current || e.length === 0) return;
    const u = r.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    i(h === 0 ? {
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
    containerRef: r,
    measurementContainerRef: a,
    visibleItems: l.visibleItems,
    overflowItems: l.overflowItems
  };
}
const et = function({
  items: n,
  renderListItem: r,
  className: a,
  gap: l = 0,
  minSize: i,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = ao(n, l);
  return W(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", a),
      style: {
        minHeight: `${i}px`
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
et.displayName = "VerticalOverflowList";
const Bc = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((l) => /* @__PURE__ */ t(pt, { ...l }, l.title)) }) : /* @__PURE__ */ t(
  et,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (l) => /* @__PURE__ */ t(pt, { ...l }, l.title)
  }
) : null, lo = ({ onClick: e, children: n }) => {
  const r = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return e ? /* @__PURE__ */ t(
    "a",
    {
      className: b(
        r,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: e,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ t("div", { className: r, tabIndex: 1, children: n });
};
function $c({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: l
}) {
  return /* @__PURE__ */ t(lo, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: b(
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
const io = H(
  function({ content: n, label: r, color: a, ...l }, i) {
    return /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", ref: i, children: [
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
        "icon" in l && l.icon && /* @__PURE__ */ t("span", { className: b("flex", a), children: /* @__PURE__ */ t(G, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ t("span", { className: b("flex", a), children: /* @__PURE__ */ t(wt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), Mc = H(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: l, color: i, ...s }) => /* @__PURE__ */ t(
          io,
          {
            label: a,
            content: l,
            color: i,
            ...s
          },
          `${a}-${l}`
        ))
      }
    );
  }
), so = ({
  onClick: e,
  withEmoji: n,
  withPointerCursor: r,
  children: a
}) => {
  const l = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    r ? "cursor-pointer" : "cursor-default",
    e ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return e ? /* @__PURE__ */ t("a", { className: l, onClick: e, children: a }) : /* @__PURE__ */ t("div", { className: l, children: a });
};
function Wc({
  id: e,
  title: n,
  subtitle: r,
  avatars: a,
  remainingCount: l,
  withPointerCursor: i = !1,
  onClick: s,
  ...c
}) {
  return /* @__PURE__ */ o(
    so,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: i,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Ya, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Za, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          On,
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
const oo = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function fn({
  id: e,
  title: n,
  subtitle: r,
  onClick: a,
  module: l
}) {
  const i = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(oo, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: i, children: [
    /* @__PURE__ */ t(An, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const co = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function bt({
  id: e,
  title: n,
  alert: r,
  rawTag: a,
  count: l,
  icon: i,
  rightIcon: s,
  iconClassName: c = "text-f1-icon-secondary",
  rightIconClassName: d = "text-f1-icon-secondary",
  onClick: f
}) {
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(co, { onClick: (h) => {
    h.preventDefault(), f?.(e);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ t(
        G,
        {
          icon: i,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ t("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ t(
        G,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ t(zn, { ...r }),
      a && /* @__PURE__ */ t(De, { ...a }),
      !!l && /* @__PURE__ */ t(qe, { value: l })
    ] })
  ] });
}
function jc({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: l
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((i) => /* @__PURE__ */ t(fn, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ t(fn, { ...i, onClick: r }, i.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Vc({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((i) => /* @__PURE__ */ t(bt, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ t(bt, { ...i, onClick: a }),
      minSize: r
    }
  );
}
const uo = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Uc = H(
  function({ title: n, titleValue: r, titleTooltip: a, list: l }, i) {
    return /* @__PURE__ */ o("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t("div", { children: n }),
          a && /* @__PURE__ */ t("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ t(
            be,
            {
              label: a.label,
              description: a.description,
              children: /* @__PURE__ */ t(G, { icon: Rn, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      l.map((s) => /* @__PURE__ */ t(uo, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function Gc({
  title: e,
  subtitle: n,
  data: r,
  helpText: a,
  legend: l = !1,
  hideTooltip: i = !1
}) {
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ o("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ t("span", { className: "text-3xl font-semibold", children: e }),
      /* @__PURE__ */ t("span", { className: "text-xl text-f1-foreground-secondary", children: n })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-2", children: /* @__PURE__ */ t(
      wl,
      {
        data: r,
        legend: l,
        hideTooltip: i
      }
    ) }),
    !!a && /* @__PURE__ */ t("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ t(
      "span",
      {
        className: b(
          "text-f1-foreground",
          l ? "text-sm" : "text-base"
        ),
        children: a
      }
    ) })
  ] });
}
const dr = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, fo = ({
  data: e = [],
  labels: n,
  trackedMinutes: r,
  remainingMinutes: a,
  canSeeRemainingTime: l = !0
}) => {
  const s = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[s], d = (() => {
    if (!l || a === void 0) return;
    const u = dr(
      r,
      a
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = xe[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, it = "--:--", mo = (e, n) => {
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
}, ho = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, l = dr(
    n,
    r
  ), i = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, s = a || (l ?? 0) < 0 ? void 0 : mo(
    l ?? 0,
    i
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - g) / i;
        return c -= g, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: g / i + v,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: g / i,
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
}, go = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), i = a ? $t(a) : it, s = n === void 0 || n > 0 ? it : l ? $t(l.to) : it, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function po({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = ho({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: l, secondaryLabel: i, time: s } = go({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(yl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      Nl,
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
          Ja,
          {
            fill: c.color,
            role: "presentation",
            "aria-label": `${c.value} minutes`
          },
          `cell-${d}`
        ))
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("span", { className: "text-3xl font-semibold tabular-nums text-f1-foreground", children: s }) }),
    /* @__PURE__ */ o("div", { className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary", children: [
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: l }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium opacity-60", children: i })
    ] })
  ] });
}
function bo({
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
            className: b(
              "font-medium",
              e ? "text-f1-foreground" : "text-f1-foreground-secondary"
            ),
            children: e ?? n
          }
        ),
        /* @__PURE__ */ t(G, { icon: Xa })
      ]
    }
  );
}
function Hc({
  trackedMinutes: e,
  remainingMinutes: n,
  data: r = [],
  labels: a,
  locationId: l,
  locations: i,
  canShowLocation: s = !0,
  locationSelectorDisabled: c = !1,
  onClockIn: d,
  onClockOut: f,
  onBreak: u,
  breakTypes: m,
  onChangeBreakTypeId: h,
  canShowBreakButton: g = !0,
  canSeeGraph: p = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: N,
  canShowProject: C = !0,
  projectSelectorElement: O,
  breakTypeName: T
}) {
  const { status: P, statusText: L, subtitle: F, statusColor: $ } = fo({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), E = P === "clocked-out", w = m?.map((M) => ({
    value: M.id,
    label: M.duration ? `${M.name} · ${M.duration}` : M.name,
    description: M.description,
    tag: M.isPaid ? a.paid : a.unpaid
  })) ?? [], [x, I] = D(!1), k = () => {
    if (w.length > 1)
      x || I(!0);
    else {
      const M = w?.[0]?.value;
      u?.(M);
    }
  }, j = (M) => {
    h?.(M), I(!1), u?.(M);
  }, y = E && i.length && !c && s, S = i.find((M) => M.id === l), A = i.map((M) => ({
    value: M.id,
    label: M.name,
    icon: M.icon
  })), B = P === "break", [q, le] = D(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: L }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ t(
                Q.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: $
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
                    backgroundColor: $
                  }
                }
              )
            ] })
          ] }),
          F && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: F })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          P === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            V,
            {
              onClick: d,
              label: a.clockIn,
              icon: Rt
            }
          ) }),
          P === "clocked-in" && /* @__PURE__ */ o(Y, { children: [
            g && /* @__PURE__ */ t(Y, { children: w.length > 1 && h ? /* @__PURE__ */ t(
              Ve,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: w,
                onChange: j,
                open: x,
                onOpenChange: I,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  V,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: zt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              V,
              {
                onClick: k,
                label: a.break,
                variant: "neutral",
                icon: zt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Bt
              }
            )
          ] }),
          P === "break" && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Bt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              V,
              {
                onClick: d,
                label: a.resume,
                icon: Rt
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ t(
        po,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: y ? /* @__PURE__ */ o(Y, { children: [
      /* @__PURE__ */ t(
        Ve,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: l,
          options: A,
          onChange: N,
          open: q,
          onOpenChange: le,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            bo,
            {
              text: S?.name,
              placeholder: a.selectLocation,
              icon: S?.icon
            }
          ) })
        }
      ),
      C && O
    ] }) : /* @__PURE__ */ o(Y, { children: [
      s && S && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(De, { text: S.name, icon: S.icon }) }),
      C && O,
      B && T && /* @__PURE__ */ t(De, { text: T })
    ] }) })
  ] }) });
}
const xo = {
  done: tl,
  "in-progress": el,
  todo: Qa
}, vo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function wo({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const l = () => {
    r?.(e);
  }, i = K(() => {
    if (!a)
      return xo[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    bt,
    {
      id: e.id,
      title: e.text,
      icon: i,
      iconClassName: vo[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: nl
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function Kc({
  tasks: e,
  onClickTask: n,
  hideIcons: r = !1,
  maxTasksToShow: a = 5,
  emptyMessage: l = "No tasks assigned"
}) {
  const s = [
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
  ), c = !s.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : s.slice(0, a).map((d) => /* @__PURE__ */ t(
    wo,
    {
      task: d,
      status: d.status,
      hideIcon: r,
      onClick: n
    },
    d.id
  )) });
}
var yo = Object.defineProperty, No = Object.defineProperties, Co = Object.getOwnPropertyDescriptors, He = Object.getOwnPropertySymbols, ur = Object.prototype.hasOwnProperty, fr = Object.prototype.propertyIsEnumerable, mn = (e, n, r) => n in e ? yo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, oe = (e, n) => {
  for (var r in n || (n = {})) ur.call(n, r) && mn(e, r, n[r]);
  if (He) for (var r of He(n)) fr.call(n, r) && mn(e, r, n[r]);
  return e;
}, tt = (e, n) => No(e, Co(n)), Io = (e, n) => {
  var r = {};
  for (var a in e) ur.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && He) for (var a of He(e)) n.indexOf(a) < 0 && fr.call(e, a) && (r[a] = e[a]);
  return r;
}, ko = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, So = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), Ao = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = oe({}, n);
    return a.right = e.left, a;
  }
  return null;
}, Lo = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = oe({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, Fo = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let l = oe({}, a);
  return l.left = n.left + e.width, ko(l) || So({ usedSpot: l, spotsList: r }) ? null : l;
}, Eo = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((l, i, s) => {
  if (l === r) return Fo({ stone: a, position: n, optimalSpot: r, spotsList: s });
  let c = Ao({ position: n, spot: l, stone: a });
  return c || Lo({ position: n, stone: a, spot: l }) || l;
});
function Do(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let l = n[r];
    if (e(l)) return l;
  }
  return null;
}
var _o = (e, n) => n.filter(e), Oo = (e, n) => [...n].sort(e), Po = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, To = (e) => Oo(Po, e), Ro = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
  let l = { right: r, top: n.top + a.height, left: n.left };
  n.bottom && (l.bottom = n.bottom);
  for (let i = 0, s = e.length; i < s; i += 1) {
    let c = e[i];
    if (l.left < c.left && l.top < c.top) {
      l.right = c.left;
      break;
    }
  }
  return l;
}, zo = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, Bo = ({ availableSpots: e, stone: n }) => Do((r) => zo(r, n), e);
function $o({ stone: e, availableSpots: n, containerSize: r }) {
  let a = Bo({ availableSpots: n, stone: e }), l = { left: a.left, top: a.top }, i = Ro({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), s = [...n, i], c = Eo({ spots: s, position: l, optimalSpot: a, stone: e });
  return s = [..._o(Boolean, c)], s = To(s), { position: l, availableSpots: s };
}
var Mo = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, l = [], i = [{ top: 0, left: 0, right: n }];
  for (let s of e) {
    let c = $o({ availableSpots: i, stone: s, containerSize: n }), d = c.position.top + s.height;
    a < d && (a = d), l.push(c.position), i = c.availableSpots;
  }
  return { availableSpots: i, positions: l, containerHeight: a };
}, Wo = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), jo = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: l }) => {
  let [{ positions: i, containerHeight: s, stones: c, availableSpots: d }, f] = D({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let h = Wo(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Mo({ stones: h, containerSize: g });
    f(tt(oe({}, p), { stones: h }));
  }, [r, e, n, a, l]), { positions: i, containerHeight: s, stones: c, availableSpots: d };
}, Vo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Uo = ({ transition: e, transitionDuration: n }) => e ? { transition: Vo(n)[e] } : null, Go = (e) => e ? tt(oe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Ho = ({ style: e, position: n, transition: r, transitionDuration: a }) => oe(oe(tt(oe({}, e), { position: "absolute" }), Go(n)), Uo({ transition: r, transitionDuration: a }));
function Ko(e, n, r) {
  let a;
  return function(...l) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, l);
    }, n);
  };
}
var qo = () => {
  let [e, n] = D(), r = z(Ko(n, 300));
  return W(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, Yo = (e) => {
  let [n, r] = D(null);
  return W(() => {
    let a = new ResizeObserver((l) => {
      for (let i of l) r(i.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, Zo = (e) => {
  var n = e, { children: r, style: a, transition: l = !1, transitionDuration: i = 500, transitionStep: s = 50 } = n, c = Io(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = qo(), m = Yo(f), { positions: h, containerHeight: g } = jo({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), p = oe({ minHeight: g ?? 0, position: "relative" }, a);
  return t("div", tt(oe({ ref: f, style: p }, c), { children: Wn.map(r, (v, N) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let C = { style: Ho({ style: v.props.style, position: h[N], transition: l, transitionDuration: i }), ref: (O) => d.current[N] = O };
    return Mn(v, oe(oe({}, v.props), C));
  }) }));
};
const Jo = { sm: 340, md: 480, lg: 640 }, hn = H(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const l = Jo[r], [i, s] = D(), c = Wn.toArray(n), d = z(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, l]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: i === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Zo, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Xo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], qc = te(hn, () => /* @__PURE__ */ t(Bn, { children: /* @__PURE__ */ t(hn, { children: Xo.map((e, n) => /* @__PURE__ */ t(ye.Skeleton, { height: e }, n)) }) })), gn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Yc = te(
  H(function({ children: n }, r) {
    return /* @__PURE__ */ t(Ke, { ref: r, showBar: !1, children: /* @__PURE__ */ t(gn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(Bn, { orientation: "horizontal", children: /* @__PURE__ */ o(gn, { children: [
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {})
  ] }) })
);
function Qo({
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
    rl,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const Zc = re(
  Z("WidgetEmptyState", Qo)
), mr = H(
  ({ title: e, children: n }, r) => (al(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
mr.displayName = "WidgetSection";
const Jc = re(
  Z("WidgetSection", mr)
), Xc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const l = ll(), i = window.location.pathname, s = K(() => n?.length ? n.includes(i) : r?.length ? !r.includes(i) : !0, [i, n, r]), c = K(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return s ? a : (l && console.error(c), null);
}, Qc = re(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ke
  )
);
export {
  dc as ActivityItemList,
  Ci as ActivityItemListSkeleton,
  Zl as AiPromotionChat,
  Jl as AiPromotionChatProvider,
  gc as ApplicationFrame,
  Yd as AreaChart,
  Dc as AreaChartWidget,
  Ec as AutoGrid,
  Ea as Badge,
  Zd as BarChart,
  _c as BarChartWidget,
  Ni as BaseActivityItemList,
  Jd as BaseBanner,
  Li as BaseCelebration,
  Bi as BaseCommunityPost,
  nd as BaseTabs,
  rd as BreadcrumbSelect,
  Ll as Breadcrumbs,
  pt as CalendarEvent,
  Bc as CalendarEventList,
  ad as CardSelectableContainer,
  cl as Carousel,
  Xd as CategoryBarChart,
  Gc as CategoryBarSection,
  uc as Celebration,
  Fi as CelebrationSkeleton,
  zc as ChartWidgetEmptyState,
  ld as Chip,
  Hc as ClockInControls,
  Qd as ComboChart,
  mc as CommunityPost,
  $i as CommunityPostSkeleton,
  Ji as CompanySelector,
  qe as Counter,
  qc as Dashboard,
  pc as DaytimePage,
  id as DetailsItem,
  sd as DetailsItemsList,
  eu as Dialog,
  Ne as Dropdown,
  cc as EntitySelect,
  od as F0ActionBar,
  tu as F0AiBanner,
  An as F0AvatarModule,
  sc as F0Callout,
  cd as F0TableOfContent,
  oc as F0VersionHistory,
  dd as F1SearchBox,
  ud as FILE_TYPES,
  fd as FileItem,
  fc as HighlightBanner,
  Mc as IndicatorsList,
  md as Input,
  hd as Item,
  gd as ItemSectionHeader,
  nu as LineChart,
  Oc as LineChartWidget,
  yc as Menu,
  pd as MobileDropdown,
  ru as NotesTextEditor,
  au as NotesTextEditorPatchTargetNotFoundError,
  lu as NotesTextEditorSkeleton,
  iu as NotesTextEditorUnsupportedPatchTypeError,
  bd as NumberInput,
  bc as OmniButton,
  Ic as OneApprovalHistory,
  xd as OneCalendar,
  vd as OneCalendarInternal,
  wd as OneDataCollection,
  yd as OneDateNavigator,
  rl as OneEmptyState,
  Nd as OnePagination,
  hc as OnePersonListItem,
  Xc as OneRestrictComponent,
  xc as Page,
  ic as PageHeader,
  At as PageHeaderNavigationContext,
  ac as PageHeaderNavigationProvider,
  su as PieChart,
  Pc as PieChartWidget,
  _s as PrivateBox,
  ou as ProgressBarChart,
  cu as RadarChart,
  _i as Reactions,
  Cd as ResourceHeader,
  va as RichTextDisplay,
  Id as RichTextEditor,
  Qc as ScrollArea,
  Nc as SearchBar,
  kd as SectionHeader,
  Ve as Select,
  $a as Shortcut,
  Cc as Sidebar,
  vc as SidebarFooter,
  wc as SidebarHeader,
  wn as Spinner,
  Fc as Split,
  Lc as Stack,
  Rc as SummariesWidget,
  Sd as Switch,
  Ad as Tabs,
  Ld as TabsSkeleton,
  Kc as TasksList,
  Fd as Textarea,
  Ed as ToggleGroup,
  Dd as ToggleGroupItem,
  be as Tooltip,
  Uc as TwoColumnsList,
  du as VerticalBarChart,
  Tc as VerticalBarChartWidget,
  mt as VirtualList,
  _d as WeekStartDay,
  Od as Weekdays,
  ye as Widget,
  Wc as WidgetAvatarsListItem,
  Zc as WidgetEmptyState,
  $c as WidgetHighlightButton,
  jc as WidgetInboxList,
  fn as WidgetInboxListItem,
  Jc as WidgetSection,
  Vc as WidgetSimpleList,
  bt as WidgetSimpleListItem,
  Yc as WidgetStrip,
  Pd as actionBarStatuses,
  Td as chipVariants,
  Rd as downloadAsCSV,
  zd as generateCSVContent,
  Bd as getGranularityDefinition,
  $d as getGranularityDefinitions,
  Md as getGranularitySimpleDefinition,
  Wd as granularityDefinitions,
  jd as modules,
  uu as predefinedPresets,
  Vd as rangeSeparator,
  fu as selectSizes,
  Je as useAiPromotionChat,
  Ud as useDataCollectionData,
  kc as useDataCollectionItemNavigation,
  Sc as useDataCollectionItemNavigationRouteSync,
  Gd as useDataCollectionSource,
  Hd as useExportAction,
  Kd as useInfiniteScrollPagination,
  Ac as useItemNavigationPageHeader,
  lc as usePageHeaderNavigation,
  ke as useSidebar
};
