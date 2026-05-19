import { o as xr, B as vr, p as wr, D as yr, q as Et, r as Te, s as Nr, t as x, v as X, w as pe, u as se, T as Cr, x as Ir, y as kr, R as Sr, z as Ar, A as ae, E as Lr, G as bt, H as st, J as Me, K as De, L as Fr, M as Er, N as G, O as Dr, P as _r, Q as _e, S as gn, U as Or, V as Tr, W as V, X as pn, Y as R, Z as ve, _ as Pr, $ as Rr, a0 as zr, a1 as Br, a2 as $r, a3 as Ce, a4 as bn, a5 as Mr, a6 as be, a7 as We, a8 as Wr, a9 as xt, n as xn, aa as Ne, ab as jr, ac as vn, ad as ne, ae as Y, af as wn, ag as yn, ah as Vr, ai as Nn, aj as me, ak as ee, al as Ur, am as Gr, an as Hr, ao as Kr, ap as ge, aq as He, ar as qr, as as Yr, at as Zr, au as Jr, av as Ke, aw as Cn, ax as Xr, ay as Qr, az as ea, aA as je, aB as ta, aC as na, aD as ra, aE as aa, aF as la, aG as sa, aH as ia, aI as oa, aJ as ca, aK as da, aL as it, aM as ot, aN as In, aO as ua, aP as fa, aQ as kn, aR as ma, aS as ha, aT as qe, aU as vt, aV as Sn, aW as ga, aX as An, aY as pa, aZ as ba, a_ as xa, a$ as Ee, b0 as va, b1 as Pe, b2 as Dt, b3 as ct, b4 as wa, b5 as ya, a as Na, g as Ca, b6 as Ia, b7 as Ln, b8 as ka, b9 as Sa, F as Aa, ba as Fn, bb as La, bc as En, bd as Fa, be as _t, bf as Ea, bg as Da, bh as _a, bi as Oa, bj as Dn, bk as Ta, bl as Pa, bm as Ra, bn as za, bo as Ba, bp as _n, bq as Ot, br as $a, bs as Ma, bt as Tt, bu as ue, bv as On, bw as wt, bx as yt, by as Nt, bz as Tn, bA as Ct, bB as Pn, bC as Rn, bD as Wa, bE as ja, bF as Va, bG as Ua, bH as Ga, bI as Ha, bJ as Ka, bK as qa, bL as Ya, bM as Za, bN as Ja, bO as Pt, bP as Rt, bQ as zt, bR as Xa, bS as Qa, bT as el, bU as tl, bV as zn, bW as nl, bX as rl, bY as al } from "./useDataCollectionSource-N8L_ZsHp.js";
import { ch as Xc, cg as Qc, b$ as ed, ct as td, ca as nd, cb as rd, b_ as ad, cd as ld, c0 as sd, cF as id, cD as od, c1 as cd, ce as dd, cf as ud, cc as fd, c2 as md, cp as hd, cq as gd, cu as pd, cB as bd, cC as xd, c8 as vd, cE as wd, c9 as yd, c3 as Nd, cj as Cd, ci as Id, c4 as kd, c5 as Sd, c6 as Ad, cr as Ld, cG as Fd, bZ as Ed, cs as Dd, cw as _d, cx as Od, co as Td, cl as Pd, cn as Rd, ck as zd, c7 as Bd, cm as $d, cy as Md, cz as Wd, cv as jd, cA as Vd } from "./useDataCollectionSource-N8L_ZsHp.js";
import { jsx as t, jsxs as o, Fragment as q } from "react/jsx-runtime";
import ie, { forwardRef as H, useRef as z, useTransition as ll, useState as D, useLayoutEffect as Bn, useId as dt, useContext as Ye, createContext as It, useEffect as M, useCallback as U, useMemo as K, Fragment as sl, isValidElement as il, cloneElement as $n, Children as Mn } from "react";
import { C as ol, P as cl, g as Wn, c as dl, F as ut, f as ul, a as fl, u as ml, A as hl, B as gl, L as pl, b as bl, V as xl, d as vl, e as Bt, h as wl, i as yl } from "./index-BLZ00SRl.js";
import { l as Gd, m as Hd, j as Kd, n as qd, s as Yd, D as Zd, k as Jd, o as Xd, w as Qd, x as eu, N as tu, y as nu, p as ru, r as au, R as lu, q as su, v as iu, t as ou } from "./index-BLZ00SRl.js";
const Nl = xr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), jn = H(({ className: e, items: n }, r) => /* @__PURE__ */ t(vr, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(wr, {}),
  /* @__PURE__ */ t(yr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
jn.displayName = "CollapsedBreadcrumbItem";
const kt = 50, Cl = 120, Ve = 8;
function Il(e, n) {
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
    for (l -= kt; l < 0 && i > 1; )
      l += n[s], s++, i--;
  return Math.max(2, i);
}
function $t(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ve;
    default:
      return e[0] + kt + e[e.length - 1] + Ve;
  }
}
function kl(e, n) {
  return Cl * e + (n ? kt : 0) + Ve;
}
function Sl(e, n, r = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: kl(
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
      minWidth: $t(l)
    };
  const s = Il(e, l);
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
    minWidth: $t(l)
  };
}
function Al({ breadcrumbs: e, append: n }) {
  const r = z(null), a = z(null), [, l] = ll(), [s, i] = D(null), c = (s?.collapsedItems || []).length > 0;
  return Bn(() => {
    const d = r.current, f = a.current;
    if (!d || !f || f.children.length < e.length) return;
    const u = () => {
      const h = r.current?.clientWidth ?? null, b = Array.from(f.children);
      l(() => {
        const g = Sl(
          h,
          e,
          b
        );
        i(g);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(Et, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    Et,
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
        s && s.headItem && /* @__PURE__ */ o(Nr, { children: [
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
          c && /* @__PURE__ */ o(q, { children: [
            /* @__PURE__ */ t(
              jn,
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
          !c && /* @__PURE__ */ t(q, { children: s.tailItems.map((d, f) => /* @__PURE__ */ t(
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
const Ll = pe({
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
], Fl = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...l
}, s) => {
  const i = dt(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...b
  } = l;
  return /* @__PURE__ */ t(
    "div",
    {
      className: x(Ll({ size: n }), h),
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
            ...b.style
          },
          ...(({ style: g, ...v }) => v)(b),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Mt.map((g) => /* @__PURE__ */ t("clipPath", { id: `${i}-${g.id}`, children: /* @__PURE__ */ t("path", { d: g.path }) }, g.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: Mt.map((g) => /* @__PURE__ */ t(
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
}, Vn = H(Fl), Un = It(null), El = 15, Dl = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [l, s] = D(n), [i, c] = D(!1), [d, f] = D(!0), [u, m] = D(
    El
  ), h = z(null), b = (v) => {
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
    Un.Provider,
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
        setClearFunction: b
      },
      children: e
    }
  );
}, we = () => {
};
function Ze() {
  const e = Ye(Un);
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
const Gn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: l } = Ze(), s = se(), [i, c] = D(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(Cr, { children: /* @__PURE__ */ o(Ir, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(kr, { asChild: !0, children: /* @__PURE__ */ t(
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
          Sr,
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
              ae(),
              e
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ t(
              Ar,
              {
                className: x(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Vn,
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
    !l && /* @__PURE__ */ t(Lr, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, Wt = "one_sidebar_locked", Hn = It(void 0);
function Ie() {
  const e = Ye(Hn);
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
function _l({ children: e }) {
  const { currentPath: n } = bt(), [r, a] = D(!1), [l, s] = D(!1), i = r ? Me.xl : Me.md, c = st(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = D(() => {
    const I = localStorage.getItem(Wt);
    return I !== null ? !!I : !0;
  }), [u, m] = D(!1), [h, b] = D(
    null
  ), g = U(
    ({ isInvokedByUser: I } = {
      isInvokedByUser: !0
    }) => {
      s(I ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = U(
    (I) => {
      c || (I.clientX < 32 && m(!0), I.clientX > 280 && m(!1));
    },
    [c, m]
  ), y = K(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return M(() => {
    m(!1);
  }, [n]), M(() => {
    l && localStorage.setItem(Wt, d ? "1" : "");
  }, [d, l]), M(() => () => {
    b(y);
  }, [y]), /* @__PURE__ */ t(
    Hn.Provider,
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
const jt = X.create(G), Vt = {
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
  const [a, l] = D(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(De, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: x(
        "flex h-6 w-6 items-center justify-center rounded",
        ae()
      ),
      onClick: s,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        jt,
        {
          size: "sm",
          icon: Fr,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Vt,
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
        jt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Er,
          className: "outline-none",
          variants: Vt,
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
  const [m, h] = D("idle"), [b, g] = D(null), [v, ...y] = b ?? [], [I, O] = D(!1);
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
    Dr,
    {
      open: I,
      onOpenChange: async (T) => {
        O(T), T && b === null && P(), i(T);
      },
      children: [
        /* @__PURE__ */ t(_r, { asChild: !0, children: /* @__PURE__ */ t(
          _e,
          {
            variant: "outline",
            icon: gn,
            hideLabel: !0,
            label: n,
            pressed: I,
            append: f && /* @__PURE__ */ t(St, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Or, { children: /* @__PURE__ */ o(
          Tr,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(zl, { title: n, url: a, onClick: c }),
              m === "fetching" && /* @__PURE__ */ t(Ml, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && b !== null && b.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Bl, { ...l, buttonUrl: a }) }),
                m === "idle" && b !== null && b.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    Pl,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  b.length > 1 && /* @__PURE__ */ t(q, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((T, E) => /* @__PURE__ */ t(
                    Rl,
                    {
                      ...T,
                      onClick: d
                    },
                    E
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  $l,
                  {
                    ...s,
                    onClick: () => {
                      P();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ t(
                Wl,
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
}, Pl = ({
  title: e,
  href: n,
  mediaUrl: r,
  unread: a,
  updated: l,
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Pr,
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
              Rr,
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
}, Rl = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: l
}) => {
  const s = x("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(zr, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
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
        a && /* @__PURE__ */ t(St, { className: "mt-1.5" })
      ] })
    }
  ) });
}, zl = ({
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
          icon: pn,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), Kn = ({
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
] }) }), Bl = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  Kn,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(G, { icon: gn, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(ve, { href: r, children: /* @__PURE__ */ t(V, { label: n }) })
  }
), $l = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  Kn,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(G, { icon: Br, size: "lg" }),
    button: /* @__PURE__ */ t(V, { variant: "outline", label: r, onClick: a })
  }
), Ml = () => /* @__PURE__ */ t(
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
    className: x("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Wl = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [l, s] = D(e);
  M(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), a(), d && d();
  };
  return l && /* @__PURE__ */ o(q, { children: [
    /* @__PURE__ */ t($r, {}),
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
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        ol,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
            cl,
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
function Ut({
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
function rc({
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
  ], b = n && Object.keys(n).length !== 0, g = l && r.length > 0, v = !l && a.length > 0, y = !l && !!i?.isVisible, I = h[h.length - 1], O = "navigation" in window ? window.navigation : null, P = l && (O ? !!O.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(De, { children: !l && u !== "locked" && /* @__PURE__ */ t(
            X.div,
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
                  icon: bn
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
                  V,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Mr,
                    onClick: () => window.history.back()
                  }
                ) }),
                P || g ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in I ? /* @__PURE__ */ t(R, { className: "h-4 w-24" }) : I.label }) : /* @__PURE__ */ t(
                  Al,
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
          !l && b && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(be, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            We,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(We, { text: n.text, variant: n.variant }) }),
          !l && b && (s || v || y) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Ut,
                {
                  icon: Wr,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Ut,
                {
                  icon: xt,
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
              Tl,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            v && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((T, E) => /* @__PURE__ */ t(jl, { action: T }, E)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              xn,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ t(Gn, {})
          ] })
        ] })
      ]
    }
  );
}
function jl({ action: e }) {
  const n = z(null), [r, a] = D(!1);
  return "actions" in e ? /* @__PURE__ */ t(Ne, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    _e,
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
const Vl = () => {
  const e = se();
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
          _e,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: jr,
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
  const a = z(null);
  M(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, Gl = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: l
  } = Ze();
  return Ul({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(De, { children: n && /* @__PURE__ */ t(
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
}, Hl = ({ action: e, onClose: n }) => {
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
          children: e.isLoading ? /* @__PURE__ */ t(vn, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        _e,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, Kl = ({
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
  Dl,
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
), ql = () => {
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
  return e ? /* @__PURE__ */ o(Gl, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      _e,
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
        /* @__PURE__ */ t(Vn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      l?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(wn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        Hl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Vl, {}) })
  ] }) : null;
}, Yl = ne(
  Y("AiPromotionChat", ql)
), Zl = ne(
  Y("AiPromotionChatProvider", Kl)
), qn = pe({
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
}), Gt = {
  positive: Nn,
  warning: Vr,
  info: yn
}, Ht = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Jl = H(
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
        className: qn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: x(
                  "flex flex-row items-center gap-2",
                  Ht[s]
                ),
                children: [
                  Gt[s] && /* @__PURE__ */ t(G, { icon: Gt[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    me,
                    {
                      className: Ht[s] || "font-medium",
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
                className: x(
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
), Xl = ({
  compact: e,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: qn({ variant: n }),
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
), Yn = H(
  (e, n) => /* @__PURE__ */ t(Jl, { ref: n, ...e })
), Ql = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Xl, { compact: e, variant: n });
Yn.displayName = "F0Callout";
const ac = ee(
  ne(Yn),
  Ql
);
function es({
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
        ae("focus-visible:ring-inset")
      ),
      onClick: r,
      disabled: !r,
      "aria-label": `${e}${n ? " (selected)" : ""}`,
      "aria-pressed": r ? n : void 0,
      children: [
        /* @__PURE__ */ t(G, { icon: Ur, size: "md", color: "selected" }),
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
function ts({
  author: e,
  timestamp: n,
  onClick: r,
  isActive: a
}) {
  const { locale: l } = Gr(), s = Hr(l), i = Kr(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: x(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        ae("focus-visible:ring-inset")
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
function ns({
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
            es,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            ts,
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
const lc = ne(
  Y("F0VersionHistory", ns)
), Zn = H(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: l }, s) => {
    const i = ie.useRef(null);
    ie.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = qr({
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
                children: d ? l(d) : /* @__PURE__ */ t(q, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Zn.displayName = "VirtualList";
const ft = Y("VirtualList", Zn), Jn = ({
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
const rs = ({
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
  const m = e.name.split(" "), h = m[0] || "", b = m.slice(1).join(" "), g = (y) => {
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
            lastName: b,
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
          Cn,
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
            icon: Nn,
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
  showGroupIcon: b = !1,
  singleSelector: g = !1,
  disabled: v = !1,
  hiddenAvatar: y = !1
}) => {
  const [I, O] = D(!1);
  if (!e)
    return /* @__PURE__ */ t(
      rs,
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
  const P = (L) => {
    if (L.key === " ")
      L.preventDefault(), d(!n);
    else if (L.key === "Enter" && g)
      d(!n);
    else if (L.key === "Enter") {
      if (v) return;
      !l || s ? i(a) : l && c(a);
    } else L.key === "ArrowDown" ? Je(L.currentTarget, f) : L.key === "ArrowUp" && Xe(L.currentTarget, u);
  }, T = () => {
    if (I)
      d(!n), O(!1);
    else {
      if (v || g) return;
      l ? c(a) : i(a);
    }
  };
  if (!a.subItems?.length) return null;
  const E = l || s;
  return /* @__PURE__ */ o(q, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        V,
        {
          hideLabel: !0,
          icon: n ? Yr : Zr,
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
            b && /* @__PURE__ */ t(
              G,
              {
                icon: Jr,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                Jn,
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
              Cn,
              {
                checked: E,
                disabled: v,
                onClick: T,
                onKeyDown: P,
                indeterminate: s,
                onPointerDown: (L) => {
                  L.stopPropagation(), O(!1);
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
const Kt = ({
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
        V,
        {
          hideLabel: !0,
          label: e,
          onClick: () => n(),
          icon: Xr,
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
    Qr,
    {
      items: a,
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
  let b, g, v = d ? {
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
  return v || (v = y, y = void 0), m && u ? (b = /* @__PURE__ */ t(
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
  )) : m ? b = /* @__PURE__ */ t(
    Le,
    {
      primaryAction: e[0],
      secondaryActions: e.slice(1)
    }
  ) : u && (b = /* @__PURE__ */ t(Le, { primaryAction: v, secondaryActions: [] }), y && (g = /* @__PURE__ */ t(Le, { primaryAction: y, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    b,
    g
  ] }) });
}, ls = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: Nl, size: "md" }),
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
      icon: ea,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), nt = 384, rt = 36, ss = 37, qt = 1, Yt = 200, Zt = '[data-avatarname-navigator-element="true"]', is = ({
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
  onGroupChange: b,
  onToggleExpand: g,
  searchPlaceholder: v,
  selectAllLabel: y,
  clearLabel: I,
  notFoundTitle: O,
  notFoundSubtitle: P,
  className: T,
  actions: E,
  onCreate: L,
  onCreateLabel: W,
  singleSelector: F = !1,
  loading: p = !1,
  disabled: N = !1,
  hiddenAvatar: C = !1
}) => {
  const S = ie.useRef(null), j = K(
    () => e ? n.reduce(
      (_, Z) => _ + (Z.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), w = U(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: 0 });
    }, qt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Zt)
      )[0]?.focus();
    }, Yt);
  }, []), A = U(() => {
    setTimeout(() => {
      S.current?.scrollTo({ top: S.current?.scrollHeight });
    }, qt), setTimeout(() => {
      const _ = Array.from(
        document.querySelectorAll(Zt)
      );
      _[_.length - 1]?.focus();
    }, Yt);
  }, []), k = K(
    () => new Map(h.map((_) => [_.id, _])),
    [h]
  ), $ = U(
    (_) => {
      const Z = k.get(_.id);
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
    [e, k]
  ), re = U(
    (_) => {
      if (_.index === 0 && L)
        return /* @__PURE__ */ t(
          Kt,
          {
            label: W ?? "",
            onCreate: () => L?.(l),
            goToFirst: w,
            goToLast: A
          }
        );
      const Z = L ? _.index - 1 : _.index, Q = n[Z], { selected: J, partialSelected: de } = $(Q);
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
          showGroupIcon: os(r, a),
          singleSelector: F,
          goToFirst: w,
          goToLast: A,
          disabled: N,
          hiddenAvatar: C
        },
        Q.id
      );
    },
    [
      L,
      W,
      N,
      n,
      $,
      w,
      A,
      e,
      r,
      C,
      i,
      s,
      g,
      l,
      a,
      F
    ]
  ), le = K(() => e ? n.flatMap((_) => {
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
      if (_.index === 0 && L)
        return /* @__PURE__ */ t(
          Kt,
          {
            label: W ?? "",
            onCreate: () => L?.(l),
            goToFirst: w,
            goToLast: A
          }
        );
      const Z = L ? _.index - 1 : _.index, Q = le[Z].parent, J = le[Z].subItem;
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
            (br) => br.subId === Ae.subId
          )
        ), Oe = (te.subItems?.length ?? 0) === he.length, pr = !Oe && he.length > 0;
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
            selected: Oe,
            partialSelected: pr,
            showGroupIcon: r.find((Ae) => Ae.value === a)?.groupType === "team",
            singleSelector: F,
            goToFirst: w,
            goToLast: A,
            hideLine: Z === le.length - 1,
            disabled: N,
            hiddenAvatar: C
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
            (Oe) => Oe.subId === he.subId
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
          hiddenAvatar: C
        }
      );
    },
    [
      le,
      h,
      l,
      F,
      w,
      A,
      s,
      i,
      r,
      N,
      g,
      a,
      d,
      c,
      C,
      L,
      W
    ]
  ), [ke, tt] = K(() => {
    if (!n.length)
      return [!1, !1];
    let _ = 0, Z = 0;
    if (!e)
      _ = n.length, Z = n.reduce(
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
        _ += fe.length, Z += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const Q = _ > 0 && Z === _, J = Z > 0;
    return [Q, J];
  }, [n, k, e]), Se = le.length, mr = !F && (y || I), hr = E && E.length > 0, gr = !p && (!F && mr || hr);
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "flex w-full flex-col rounded-l-xl border-0",
        F || p ? "rounded-r-xl" : "",
        T
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: x(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              F || p ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                ls,
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
                  disabled: p,
                  onChange: b,
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
              gr ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              p && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(vn, {}) }),
              !p && !j && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: nt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: O }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: P })
                  ]
                }
              ),
              !p && (!!j || L) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                ft,
                {
                  height: nt,
                  itemCount: Se + (L ? 1 : 0),
                  itemSize: (_) => {
                    if (_ === 0 && L) return rt;
                    const Z = L ? _ - 1 : _;
                    return le[Z]?.parent === null ? ss : rt;
                  },
                  renderer: B,
                  ref: S
                }
              ) : /* @__PURE__ */ t(
                ft,
                {
                  height: nt,
                  itemCount: n.length + (L ? 1 : 0),
                  itemSize: rt,
                  renderer: re,
                  ref: S
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
            singleSelector: F,
            totalFilteredEntities: j,
            allVisibleSelected: ke,
            anyVisibleSelected: tt,
            selectAllLabel: y,
            clearLabel: I,
            disabled: N,
            actions: E
          }
        )
      ]
    }
  );
}, Re = (e, n) => e.find((r) => r.id === n), os = (e, n) => e.find((r) => r.value === n)?.groupType === "team", cs = ({
  entity: e,
  onRemove: n,
  disabled: r = !1,
  deactivated: a = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ t("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ t(
  ta,
  {
    className: x(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ t(
      na,
      {
        src: e.subAvatar,
        name: e.subName,
        size: "xs",
        type: "rounded",
        icon: a ? { icon: ra, color: "secondary" } : void 0
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
) }), ds = ({
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
      ft,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ t(
            cs,
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
          ) : /* @__PURE__ */ t(q, {});
        }
      }
    ) })
  ] });
}, us = 500, Jt = 520, Xt = 210, Qt = ({
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
  const b = (s ?? Jt) < us, g = !c && !i && !b, v = s ?? Jt, y = g ? v - Xt : v;
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
              is,
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
              width: Xt + "px"
            },
            children: /* @__PURE__ */ t(
              ds,
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
}, fs = ({
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
  maxLength: b,
  loading: g = !1,
  required: v = !1,
  readonly: y = !1,
  append: I,
  size: O = "sm",
  open: P
}) => {
  const T = K(
    () => r.some(
      (F) => F.subItems && F.subItems.length > 0
    ),
    [r]
  ), E = K(() => T ? r.flatMap(
    (F) => (F.subItems ?? []).map((p) => ({
      parent: F,
      subItem: p
    }))
  ) : r.map((F) => ({
    parent: null,
    subItem: {
      subId: F.id,
      subName: F.name,
      subAvatar: F.avatar,
      subDeactivated: F.deactivated
    }
  })), [T, r]), L = E.length === 0 ? void 0 : E.length === 1 ? E[0].subItem.subName : E.length + " " + n, W = E.length === 1 ? E[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    aa,
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
      maxLength: b,
      clearable: !1,
      value: L,
      disabled: a,
      loading: g,
      required: v,
      readonly: y,
      size: O,
      avatar: l || !W ? void 0 : {
        type: "person",
        firstName: W,
        lastName: "",
        src: E[0].subItem.subAvatar,
        deactivated: E[0].subItem.subDeactivated
      },
      append: I ?? /* @__PURE__ */ t(q, { children: /* @__PURE__ */ t(la, { open: P, disabled: a, size: O }) }),
      children: /* @__PURE__ */ t(
        "span",
        {
          role: "button",
          className: x(
            "my-auto flex items-center pr-1",
            e && "text-f1-foreground-secondary",
            L && "text-f1-foreground",
            E.length === 1 && !l || c && !L ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ t(
            me,
            {
              tag: "span",
              className: E.length === 1 && E[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: E.length === 0 ? e ?? "" : E.length === 1 ? E[0].subItem.subName : `${E.length} ${n}`
            }
          )
        }
      )
    }
  );
}, sc = (e) => {
  const [n, r] = D(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), a = (p) => {
    r(p), e.onOpenChange?.(p);
  };
  M(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = D(e.entities), [i, c] = D(""), [d, f] = sa("", 300), u = K(
    () => e.entities.some(
      (p) => p.subItems && p.subItems.length > 0
    ),
    [e.entities]
  ), m = Ye(ia), b = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function g(p) {
    if (e.singleSelector) {
      e.onSelect(p), r(!1);
      return;
    }
    const N = e.selectedEntities ?? [], C = l.find((k) => k.id === p.id);
    if (!C)
      return;
    const S = new Set(
      (C.subItems ?? []).map((k) => k.subId)
    ), j = /* @__PURE__ */ new Set([C.id]);
    l.forEach((k) => {
      k.id !== C.id && (k.subItems ?? []).some(
        (re) => S.has(re.subId)
      ) && j.add(k.id);
    });
    const w = [...N];
    function A(k) {
      const $ = w.findIndex((re) => re.id === k.id);
      $ >= 0 ? w[$] = k : w.push(k);
    }
    j.forEach((k) => {
      const $ = l.find((B) => B.id === k);
      if (!$) return;
      const re = $.subItems?.filter(
        (B) => S.has(B.subId)
      ) ?? [], le = w.findIndex((B) => B.id === k);
      if (le >= 0) {
        const B = w[le].subItems ?? [], ke = new Set(B.map((Se) => Se.subId)), tt = [
          ...B,
          ...re.filter((Se) => !ke.has(Se.subId))
        ];
        A({
          ...$,
          subItems: tt
        });
      } else
        A({
          ...$,
          subItems: re
        });
    }), e.onSelect(w);
  }
  function v(p, N) {
    if (e.singleSelector)
      e.onSelect({ ...p, subItems: [{ ...N }] }), r(!1);
    else {
      const C = e.selectedEntities ?? [], S = new Set(C.map((A) => A.id)), j = new Map(
        C.map((A) => [A.id, A.subItems ?? []])
      );
      S.add(p.id), e.entities.forEach((A) => {
        A.subItems?.some(
          ($) => $.subId === N.subId
        ) && S.add(A.id);
      });
      const w = [];
      e.entities.forEach((A) => {
        if (S.has(A.id)) {
          let $ = [...j.get(A.id) ?? []];
          A.subItems?.some(
            (B) => B.subId === N.subId
          ) && ($.some(
            (ke) => ke.subId === N.subId
          ) || $.push(N));
          const le = new Set(
            (A.subItems ?? []).map((B) => B.subId)
          );
          $ = $.filter(
            (B) => le.has(B.subId)
          ), w.push({
            ...A,
            subItems: $
          });
        }
      }), e.onSelect(w);
    }
  }
  function y(p) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let N = [];
    const C = e.selectedEntities ?? [];
    if (u) {
      const S = l.find(
        (w) => w.id === p.id
      );
      if (!S)
        return;
      const j = new Set(
        (S.subItems ?? []).map((w) => w.subId)
      );
      for (const w of C) {
        const A = (w.subItems ?? []).filter(
          (k) => !j.has(k.subId)
        );
        A.length > 0 && N.push({
          ...w,
          subItems: A
        });
      }
    } else
      N = (C ?? []).filter((S) => S.id !== p.id);
    e.onSelect(N);
  }
  function I(p, N) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const C = e.selectedEntities ?? [], S = N.subId, j = [];
    for (const w of C) {
      const A = w.subItems?.filter((k) => k.subId !== S) ?? [];
      A.length > 0 && j.push({
        ...w,
        subItems: A
      });
    }
    e.onSelect(j);
  }
  function O() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const p = e.selectedEntities ?? [];
    let N = [];
    if (u) {
      const C = new Set(
        l.flatMap(
          (S) => (S.subItems ?? []).map((j) => j.subId)
        )
      );
      for (const S of p) {
        const j = (S.subItems ?? []).filter(
          (w) => !C.has(w.subId)
        );
        j.length > 0 && N.push({
          ...S,
          subItems: j
        });
      }
    } else {
      const C = new Set(
        l.map((S) => S.id)
      );
      N = (p ?? []).filter((S) => !C.has(S.id));
    }
    e.onSelect(N);
  }
  function P() {
    const p = [...e.selectedEntities ?? []];
    l.forEach((N) => {
      const C = p.find((S) => S.id === N.id);
      if (!C)
        p.push({
          ...N,
          subItems: N.subItems || []
        });
      else {
        const S = Array.from(
          /* @__PURE__ */ new Set([
            ...C.subItems ?? [],
            ...N.subItems ?? []
          ])
        );
        C.subItems = S;
      }
    }), e.singleSelector || e.onSelect(p);
  }
  const T = (p) => {
    c(p), f(p);
  }, E = (p, N) => {
    e.onItemExpandedChange(p.id, N), s(
      l.map(
        (C) => C.id === p.id ? { ...C, expanded: !p.expanded } : C
      )
    );
  };
  M(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const N = e.entities.map((C) => {
        const S = ms(C, d), j = C.subItems?.map((w) => ({
          ...w,
          score: Ue(
            d,
            w.subSearchKeys ?? [w.subName]
          )
        })).filter((w) => w.score < 1 / 0).sort((w, A) => w.score - A.score);
        return {
          ...C,
          score: S,
          expanded: C.expanded ?? (j?.length ?? 0) > 0,
          subItems: j
        };
      }).filter((C) => C.score < 1 / 0).sort((C, S) => C.score - S.score);
      s(N);
    } else {
      const p = e.entities.map((N) => {
        const C = Ue(
          d,
          N.searchKeys ?? [N.name]
        );
        return { ...N, score: C };
      }).filter((N) => N.score < 1 / 0).sort((N, C) => N.score - C.score);
      s(p);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const L = z(null), [W, F] = D(0);
  return Bn(() => {
    const p = () => {
      L.current && F(L.current.offsetWidth);
    };
    return p(), window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, []), e.alwaysOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: L,
      className: x(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ t(
        Qt,
        {
          groupView: u,
          entities: l,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: g,
          onRemove: y,
          onSubItemRemove: I,
          onSubItemSelect: v,
          onClear: O,
          onSelectAll: P,
          selectedEntities: e.selectedEntities ?? [],
          search: i,
          onSearch: T,
          onToggleExpand: E,
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
  ) : /* @__PURE__ */ o(oa, { ...e, onOpenChange: a, open: n, children: [
    /* @__PURE__ */ t(
      ca,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ t(
          fs,
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
      da,
      {
        container: b,
        className: x(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ t(
          Qt,
          {
            groupView: u,
            entities: l,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: g,
            onRemove: y,
            onSubItemRemove: I,
            onSubItemSelect: v,
            onClear: O,
            onSelectAll: P,
            selectedEntities: e.selectedEntities ?? [],
            search: i,
            onSearch: T,
            onToggleExpand: E,
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
function mt(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function en(e) {
  return mt(e).split(/\s+/).filter((n) => n.length > 0);
}
function Ue(e = "", n) {
  const r = en(e);
  if (r.length === 0)
    return 1 / 0;
  for (const a of n) {
    const l = mt(a), s = en(a), i = mt(e);
    if (l.includes(i) || r.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function ms(e, n) {
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
const hs = ({
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
  }), u = Wn(n, {
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
        /* @__PURE__ */ t(ot, { icon: l ?? In }),
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
}, gs = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(R, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(R, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), At = Y(
  "ActivityItem",
  ee(hs, gs)
), Xn = ({
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
}) => /* @__PURE__ */ t(Xn, { title: e, children: n.map((l) => /* @__PURE__ */ t(
  At,
  {
    ...l,
    onClick: () => r(l.id),
    onVisible: a
  },
  l.id
)) }), bs = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Xn, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(At.Skeleton, {}, a)) }), $e = ee(ps, bs), xs = 3, vs = ["today", "yesterday", "lastWeek", "lastMonth"], ws = (e) => fa(e, ([n]) => {
  const r = vs.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), ht = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), ys = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = se(), i = dl(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = ua((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = ws(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ t(
        $e,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(ht, {})
    ] }, u)),
    n && new Array(xs).fill(null).map((u, m) => /* @__PURE__ */ t(At.Skeleton, {}, m))
  ] });
}, Ns = () => {
  const e = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ t($e.Skeleton, { title: e.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ t(ht, {}),
    /* @__PURE__ */ t(
      $e.Skeleton,
      {
        title: e.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ t(ht, {}),
    /* @__PURE__ */ t(
      $e.Skeleton,
      {
        title: e.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, ic = Y(
  "ActivityItemList",
  ee(ys, Ns)
), Cs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Is = {
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
  lastEmojiReaction: l,
  onReactionSelect: s,
  pickerRef: i
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: x(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : Is[ma(
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
                kn,
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
  const n = z(null), r = z(), a = U(() => {
    const s = n.current;
    if (!s) return;
    const i = ha.create(s, {
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
const As = ({
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
  const [m, h] = D(i), b = z(null);
  M(() => {
    h(i);
  }, [i]);
  const g = (T) => {
    h(T), c?.(T);
  }, v = qe(), { canvasRef: y, handleMouseEnter: I, handleMouseLeave: O } = Ss(v), P = vt({
    emoji: Cs[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ve,
    {
      href: e,
      onClick: l,
      className: x(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        ae()
      ),
      onMouseEnter: v ? void 0 : I,
      onMouseLeave: v ? void 0 : O,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: y,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          ks,
          {
            firstName: n,
            lastName: r,
            src: a,
            canReact: s,
            lastEmojiReaction: m,
            onReactionSelect: g,
            pickerRef: b
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
          /* @__PURE__ */ t("div", { className: "shrink-0", children: /* @__PURE__ */ t(ut, { date: u }) })
        ] })
      ]
    }
  );
}, Ls = () => /* @__PURE__ */ o(
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
), oc = ee(As, Ls), cc = ({
  title: e,
  subtitle: n,
  buttonLabel: r,
  onClick: a
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ t(Sn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground", children: e }),
      /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ t(V, { label: r, variant: "outline", onClick: a }) })
] });
function Fs({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: l
}) {
  const [s, i] = D(r), [c, d] = D(n), f = z(null), { fireEmojiConfetti: u } = ga(), m = (g, v) => {
    g.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(v), s || u(v, f);
  }, h = a?.map((g) => g.name).join(", ") || "", b = /* @__PURE__ */ t(
    An,
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
      "aria-label": pa(e),
      prepend: /* @__PURE__ */ t(vt, { emoji: e, size: "md" }),
      children: /* @__PURE__ */ t(
        ba,
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
  return h ? /* @__PURE__ */ t(be, { label: h, children: b }) : b;
}
function Es({ items: e, onInteraction: n, locale: r, action: a }) {
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
    /* @__PURE__ */ t(kn, { onSelect: n, locale: r }),
    e.map((l) => /* @__PURE__ */ t(
      Fs,
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
const Ds = Y("Reactions", Es), Qn = H(function({ content: n, collapsed: r, id: a, className: l, tabIndex: s }, i) {
  return /* @__PURE__ */ t(
    xa,
    {
      ref: i,
      id: a,
      content: n,
      tabIndex: s,
      className: x(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        l
      )
    }
  );
});
Qn.displayName = "BasePostDescription";
const _s = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(R, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(R, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), er = ee(
  Qn,
  _s
), tn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: x(
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
), gt = H(
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
          !m && /* @__PURE__ */ o(q, { children: [
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
                f && /* @__PURE__ */ o(q, { children: [
                  /* @__PURE__ */ t(ut, { date: f }),
                  /* @__PURE__ */ t(
                    G,
                    {
                      icon: pn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ t(ut, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ t(tn, { tags: c }),
              d && /* @__PURE__ */ t(tn, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), Os = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), tr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Os.has(r);
}, Ts = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let l = ul(a);
  const s = (i) => {
    i.stopPropagation();
  };
  return r && (l = `${l} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: tr(n) ? /* @__PURE__ */ t(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: /* @__PURE__ */ t("source", { src: n })
      }
    ) : /* @__PURE__ */ o(q, { children: [
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
      gt,
      {
        title: e,
        description: l,
        color: va.special.highlight,
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
), nr = ee(Ts, Ps), Rs = ({
  describedBy: e,
  controls: n,
  expanded: r,
  onClick: a
}) => {
  const l = se();
  return /* @__PURE__ */ t("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      className: x(
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
}, zs = ({
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
  actions: b,
  dropdownItems: g,
  noReactionsButton: v = !1,
  descriptionExpandable: y = !1
}) => {
  const I = dt(), O = dt(), P = z(null), [T, E] = D(null), [L, W] = D(!1), F = [f.views, f.comments].filter(Boolean).join(" · "), p = y && T?.id === e && T.description === s, N = !p, C = Wn(a), S = () => {
    i(e);
  }, j = (k) => {
    k.stopPropagation();
  }, w = n ? `${n.firstName} ${n.lastName}` : void 0, A = (k) => {
    k.preventDefault(), k.stopPropagation(), s && E({ id: e, description: s });
  };
  return M(() => {
    p && P.current?.focus();
  }, [p]), M(() => {
    y || E(null);
  }, [y]), M(() => {
    const k = P.current;
    if (!y || !k || p) {
      W(!1);
      return;
    }
    const $ = () => {
      W(
        k.scrollHeight > k.clientHeight
      );
    };
    if ($(), typeof ResizeObserver > "u") return;
    const re = new ResizeObserver($);
    return re.observe(k), () => re.disconnect();
  }, [y, p, s]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: S,
      id: `community-post-${e}`,
      children: [
        /* @__PURE__ */ t("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ t(
          Pe,
          {
            href: n.url || "#",
            title: w,
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
        ) : /* @__PURE__ */ t(ot, { icon: Dt }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(q, { children: [
                  /* @__PURE__ */ t(
                    Pe,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: w,
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
                      title: w,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: w
                    }
                  )
                ] }) : /* @__PURE__ */ t("div", { className: "block md:hidden", children: /* @__PURE__ */ t(ot, { icon: Dt, size: "sm" }) }),
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
                  b?.map((k) => /* @__PURE__ */ t(
                    V,
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
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: C }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: I,
                  className: x(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ o(q, { children: [
                /* @__PURE__ */ t(
                  er,
                  {
                    ref: P,
                    id: O,
                    content: s,
                    collapsed: N,
                    tabIndex: p ? -1 : void 0,
                    className: x(p && ae())
                  }
                ),
                y && L && !p && /* @__PURE__ */ t(
                  Rs,
                  {
                    describedBy: I,
                    controls: O,
                    expanded: p,
                    onClick: A
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ t("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: tr(c) ? /* @__PURE__ */ t(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: j,
              children: /* @__PURE__ */ t("source", { src: c })
            }
          ) : /* @__PURE__ */ o(q, { children: [
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
          d && /* @__PURE__ */ t("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ t(nr, { ...d }) }),
          /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: F }),
          !v && /* @__PURE__ */ t(
            Ds,
            {
              items: u?.items ?? [],
              onInteraction: u?.onInteraction,
              action: {
                label: h.label,
                onClick: h.onClick,
                icon: wa
              }
            }
          )
        ] })
      ]
    }
  );
}, Bs = ({
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
    /* @__PURE__ */ t("div", { className: "mt-3", children: /* @__PURE__ */ t(er.Skeleton, {}) }),
    n && !e && /* @__PURE__ */ t("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ t(R, { className: "h-full w-full rounded-2xs" }) }),
    e && /* @__PURE__ */ t("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ t(nr.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ t(R, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), dc = ee(
  zs,
  Bs
), rr = ie.forwardRef(({ person: e, onClick: n, ...r }, a) => {
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
                icon: yn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((s, i) => /* @__PURE__ */ o(q, { children: [
            /* @__PURE__ */ t(Ee, { ...s }, s.text),
            i < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
          ] })) }),
          "description" in r && r.description && /* @__PURE__ */ t("p", { className: "truncate text-f1-foreground-secondary", children: r.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in r && r.rightTag && /* @__PURE__ */ t(ya, { ...r.rightTag }),
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
}), $s = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(R, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(R, { className: "h-4" }),
    /* @__PURE__ */ t(R, { className: "h-4" })
  ] })
] });
rr.displayName = "OnePersonListItem";
const uc = ne(
  Y(
    "OnePersonListItem",
    ee(rr, $s)
  )
), Ms = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Ws({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(_l, { children: /* @__PURE__ */ t(
    js,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function js({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  const s = a?.enabled ? Na : l?.enabled ? Zl : sl, i = a?.enabled ? a : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Hs,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const fc = Y(
  "ApplicationFrame",
  Ws
), Vs = ({ contentId: e }) => {
  const n = se();
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
function Us(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function Gs(e, n) {
  const { sidebarState: r, toggleSidebar: a } = Ie(), l = z(e);
  M(() => {
    n && Us(
      e,
      l.current,
      r
    ) && a({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, r, a]);
}
function Hs({
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
    chatWidth: b,
    resizable: g
  } = Ca(), v = m === "fullscreen", y = m === "canvas", { open: I } = Ze(), O = g ? b : ka, P = z(v), T = v && !P.current, E = !v && P.current, [
    L,
    W
  ] = D(!1);
  M(() => {
    !v && P.current && W(!0), P.current = v;
  }, [v]);
  const F = v || L || E, p = K(() => T ? { duration: 0.15, ease: "easeOut" } : E ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [T, E]), N = st(
    `(max-width: ${Me.xl}px)`,
    { initializeWithValue: !0 }
  ), C = st(`(max-width: ${Me.md}px)`, {
    initializeWithValue: !0
  });
  return M(() => {
    d(u);
  }, [u, d]), M(() => {
    d(I);
  }, [I, d]), Gs(u, N), /* @__PURE__ */ t(
    Ia,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(Ln, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(De, { children: s === "unlocked" && /* @__PURE__ */ t(
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
                /* @__PURE__ */ t(Vs, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            X.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !C ? O : 0
              },
              transition: { paddingRight: Ms },
              children: [
                /* @__PURE__ */ t(
                  X.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: x(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      F ? "overflow-hidden" : "overflow-auto",
                      !u && !I && "xs:pr-1",
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
                      C ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: C ? void 0 : { right: O },
                    children: /* @__PURE__ */ t(Sa, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  X.div,
                  {
                    className: x(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      C ? "fixed inset-0 z-[30]" : x(
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
                      width: C || v ? "100%" : O
                    },
                    transition: p,
                    onAnimationComplete: () => {
                      L && W(!1);
                    },
                    children: /* @__PURE__ */ t(Aa, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Yl, {})
        ] }) })
      ] })
    }
  );
}
const Ks = pe({
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
function ar({
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
        /* @__PURE__ */ t("div", { className: Ks({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              V,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: bn,
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
                    fl,
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
            /* @__PURE__ */ t(xn, {}),
            /* @__PURE__ */ t(Gn, {})
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
ar.displayName = "DaytimePage";
const mc = ne(
  Y("DaytimePage", ar)
);
function qs(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: l, target: s }) => ({
    label: n,
    description: r,
    href: a,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Ys({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Ne, { items: qs(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: x(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            ae()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(G, { icon: Fn, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const hc = ne(
  Y("OmniButton", Ys)
);
function lr({ children: e, header: n, embedded: r = !1 }) {
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
lr.displayName = "Page";
const gc = ne(Y("Page", lr));
function Zs({
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
    nn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Js,
    {
      companies: e,
      selected: i,
      onChange: r,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        nn,
        {
          company: i,
          withNotification: l
        }
      )
    }
  ) });
}
const Js = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: l = []
}) => {
  const s = se(), [i, c] = D(!1), d = K(
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
            ae()
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
                children: /* @__PURE__ */ t(G, { icon: xt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, nn = ({
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
        La,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: En, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(me, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function pc({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: l,
  onDropdownClick: s,
  hasActivityUpdates: i
}) {
  const c = se();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ne, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: x(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          ae("focus-visible:ring-inset")
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
        V,
        {
          icon: In,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      i && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Fa, { type: "highlight", size: "sm", icon: En }) })
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
function Qs() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = Ie(), l = z(null);
  return M(() => {
    e === "hidden" && n === "locked" && l.current?.focus();
  }, [e, n]), /* @__PURE__ */ o(
    An,
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
        /* @__PURE__ */ t("div", { className: x("hidden", { flex: !a }), children: /* @__PURE__ */ t(Xs, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: x("hidden", { flex: a }), children: /* @__PURE__ */ t(G, { icon: Ce, size: "md" }) })
      ]
    }
  );
}
function bc({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: l,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Zs,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: s,
        withNotification: a,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ t(Qs, {})
  ] });
}
function ei() {
  const [e, n] = D(!1);
  return M(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const sr = It(void 0);
function ti({ children: e }) {
  const [n, r] = D(!1), [a, l] = D(null);
  return /* @__PURE__ */ t(
    sr.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: l },
      children: e
    }
  );
}
function Lt() {
  const e = Ye(sr);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const ni = ({
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
] }), ri = ({ item: e }) => {
  const { isActive: n } = bt(), { label: r, icon: a, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    ve,
    {
      ...l,
      className: x(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        ae("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(ni, { item: e, active: s })
    }
  );
}, ai = ({
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
  const f = se(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: b } = Lt(), { isActive: g } = bt(), v = g(e.href, { exact: e.exactMatch }), y = z(!1), [I, O] = D(!1), P = l === 0, T = l === s - 1, E = s === 1, L = K(() => {
    const S = [];
    return !E && !P && S.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Ea
    }), !E && !T && S.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Da
    }), S.length > 0 && S.push({ type: "separator" }), S.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: _a,
      critical: !0
    }), S;
  }, [E, P, T, f, i, l, a, e]), W = () => {
    m(!0), O(!1), b(e.href || null), y.current = !0;
  }, F = () => {
    m(!1), b(null), c(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, p = u && h === e.href, N = K(
    () => x(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      I && "bg-f1-background-secondary",
      p && "bg-f1-background-secondary"
    ),
    [v, I, p, d]
  ), C = K(() => /* @__PURE__ */ o(q, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(si, { tooltip: n, children: /* @__PURE__ */ o(
      ve,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: x(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          p && "pointer-events-none"
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
          ) : e.avatar ? /* @__PURE__ */ t(Oa, { size: "xs", avatar: e.avatar }) : null,
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
          I && "bg-f1-background-secondary opacity-100",
          p && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Ne,
          {
            open: I,
            onOpenChange: O,
            items: L,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: ct, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, I, p, L, n]);
  return d ? /* @__PURE__ */ t(
    Dn,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: W,
      onDragEnd: F,
      className: N,
      whileDrag: {
        scale: 1.05
      },
      children: C
    }
  ) : /* @__PURE__ */ t("div", { className: N, children: C });
}, ir = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = D(n), f = qe(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), a?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Pa, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: x(
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
            X.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                G,
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
    /* @__PURE__ */ t(Ra, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
  const { isDragging: i, setIsDragging: c } = Lt(), d = z(!1), f = Ta(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (g) => {
    !i && !d.current && a?.(e, g);
  }, b = /* @__PURE__ */ t(
    ir,
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
          children: e.items.map((g, v) => /* @__PURE__ */ t(ri, { item: g }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Dn,
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
      children: b
    }
  ) : b;
};
function xc({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: l
}) {
  const s = z(null), i = e.filter(
    (g) => g.isSortable === !1
  ), [c, d] = D(
    e.filter((g) => g.isSortable !== !1)
  ), [f, u] = D(0), m = U((g) => {
    d(g);
  }, []), h = U(
    (g) => {
      r?.(g);
    },
    [r]
  ), b = ei();
  return /* @__PURE__ */ t(ti, { children: /* @__PURE__ */ t(Ln, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    li,
    {
      disableDragging: b,
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
function li({
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
  const u = se(), { isDragging: m } = Lt(), h = e.some((w) => w.isRoot), b = e.filter((w) => !w.isRoot).length > 0, g = n.length > 0, v = z(null), [y, I] = D(i), O = i.length > 0;
  M(() => {
    JSON.stringify(i) !== JSON.stringify(y) && I(i);
  }, [i]);
  const P = (w) => {
    I(w);
  }, T = U(
    (w) => {
      const A = y.filter((k) => k.href !== w.href);
      I(A), c?.(A);
    },
    [y, c]
  ), E = U(
    (w, A) => {
      if (A < 0 || A >= y.length) return;
      const k = [...y], [$] = k.splice(w, 1);
      k.splice(A, 0, $), I(k), c?.(k);
    },
    [y, c]
  ), [L, W] = D(!1), F = z(null);
  M(() => {
    n.length > 0 && !L && (r([...n]), W(!0));
  }, [n, r, L]), M(() => {
    const w = () => {
      F.current !== null && window.clearTimeout(F.current), F.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", w), () => {
      window.removeEventListener("resize", w), F.current !== null && window.clearTimeout(F.current);
    };
  }, [a, n, d]);
  const p = "flex flex-col gap-0.5", N = K(
    () => y.reduce(
      (w, A, k) => (A.label in w || (w[A.label] = []), w[A.label].push(k), w),
      {}
    ),
    [y]
  ), C = K(
    () => O && y.map((w, A) => /* @__PURE__ */ t(
      ai,
      {
        isSortable: !f,
        tooltip: (N[w.label] ?? []).length > 1 ? w.tooltip : void 0,
        item: w,
        dragConstraints: v,
        onRemove: T,
        index: A,
        total: y.length,
        onMove: E,
        onReorderFinish: () => {
          c?.(y);
        }
      },
      `${w.href}-${w.label}`
    )),
    [
      O,
      y,
      N,
      T,
      E,
      c,
      f
    ]
  ), S = "flex flex-col gap-3", j = K(() => n.map((w) => /* @__PURE__ */ t(
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
        O && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(ir, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: p, children: C }) : /* @__PURE__ */ t(
          _t,
          {
            axis: "y",
            values: y,
            onReorder: P,
            className: p,
            children: C
          }
        ) }) }) }),
        b && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => !w.isRoot).map((w, A) => /* @__PURE__ */ t(
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
            children: f ? /* @__PURE__ */ t("div", { className: S, children: j }) : /* @__PURE__ */ t(
              _t,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: S,
                children: j
              }
            )
          }
        )
      ]
    }
  );
}
const si = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(be, { description: e, children: n }) : n;
function vc({
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
        ae()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: za, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Ba, { keys: r }) })
      ]
    }
  ) });
}
const rn = ({ position: e }) => /* @__PURE__ */ t(
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
function ii({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: l, isSmallScreen: s } = Ie(), i = qe(), [c, d] = it({ threshold: 1 }), [f, u] = it({ threshold: 1 }), m = se(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, b = () => r ? il(r) && a ? $n(
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
          /* @__PURE__ */ o(De, { children: [
            !d && /* @__PURE__ */ t(rn, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(rn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: b() })
      ]
    }
  );
}
const wc = ne(ii), oi = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, an = {
  approved: {
    icon: wn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ce,
    type: "critical",
    size: "sm"
  }
}, ci = {
  icon: Fn,
  type: "neutral",
  size: "sm"
}, di = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, ui = (e) => e in an ? an[e] : ci;
function ln(e) {
  return di[e ?? "neutral"] ?? 0;
}
const fi = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const l = se(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[r], c = K(() => a.map((d) => {
    const f = ui(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => ln(f.badge?.type) - ln(d.badge?.type)
  ), [a]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground", children: e }),
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(We, { text: i, variant: oi[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(_n, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, mi = ({ steps: e }) => {
  const r = se().approvals.history, a = e.findIndex((l) => l.status === "pending");
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
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((l, s) => /* @__PURE__ */ o(q, { children: [
        /* @__PURE__ */ t(
          fi,
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
}, yc = ne(
  Y("OneApprovalHistory", mi)
), hi = {
  records: [],
  type: "flat",
  groups: []
}, sn = (e, n) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : n ?? JSON.stringify(e), gi = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Ot]: n[Ot]
  })),
  groups: e.groups
}), pi = (e, n, r) => e.records.length === n.records.length && e.records.every(
  (a, l) => r(a, l) === r(n.records[l], l)
), bi = (e, n, r) => {
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
}, on = (e, n) => {
  const r = e.paginationInfo, a = n.paginationInfo;
  return r?.type === "pages" || a?.type === "pages" ? r?.type !== "pages" || a?.type !== "pages" || r.currentPage !== a.currentPage : !1;
}, ze = (e) => ({
  data: gi(e.data),
  paginationInfo: e.paginationInfo
});
function xi({
  dataState: e,
  dataStateVersion: n,
  effectiveSnapshotKey: r,
  resetSnapshotKey: a,
  idProvider: l
}) {
  const [s, i] = D(null), [c, d] = D(0), f = z(r), u = z(a), m = z(null), h = z(
    null
  ), b = z(
    null
  ), g = U(() => {
    b.current !== null && (clearTimeout(b.current), b.current = null);
  }, []), v = U(
    (W) => {
      g(), b.current = setTimeout(() => {
        b.current = null;
        const F = m.current;
        !F || F.key !== W || (F.canUseCurrentData = !0, d((p) => p + 1));
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
      if (s && (on(s, e) || e.data.records.length > s.data.records.length)) {
        h.current = null, i(ze(e));
        return;
      }
      (F.sawLoading || n > F.requestedAtVersion) && (h.current = null);
    }
    if (e.isLoading || e.isLoadingMore)
      return;
    const p = m.current?.key === r ? m.current : null;
    if (p) {
      const N = l ?? e.source.idProvider ?? sn, C = n > p.requestedAtVersion, S = s ? !pi(
        e.data,
        s.data,
        N
      ) : !0;
      if (!p.canUseCurrentData && !C && !S || !p.canUseCurrentData && C && !S)
        return;
      m.current = null, g(), i(ze(e));
      return;
    }
    i((N) => {
      if (!N)
        return e.data.records.length === 0 ? N : ze(e);
      const C = l ?? e.source.idProvider ?? sn, S = bi(
        N.data,
        e.data,
        C
      );
      return e.data.records.length <= N.data.records.length ? S === N.data ? N : {
        ...N,
        data: S
      } : S === N.data ? N : {
        ...N,
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
  const y = !!(h.current && s && e && !e.isLoading && !e.isLoadingMore && (on(s, e) || e.data.records.length > s.data.records.length)), I = e?.data ?? hi, O = y ? e?.data ?? I : s?.data ?? I, P = y ? e?.paginationInfo ?? null : s?.paginationInfo ?? e?.paginationInfo ?? null, T = U(() => {
    r == null || s == null || (h.current = {
      requestedAtVersion: n,
      sawLoading: !1
    });
  }, [n, r, s]), E = U(() => {
    m.current = null, h.current = null, g(), i(null);
  }, [g]), L = U(() => {
    h.current = null;
  }, []);
  return {
    navigationData: O,
    navigationPaginationInfo: P,
    startPendingNavigation: T,
    clearSnapshot: E,
    clearPendingNavigation: L
  };
}
const cn = () => {
}, dn = (e, n, r) => e.source.idProvider?.(n, r) ?? ("id" in n && (typeof n.id == "string" || typeof n.id == "number" || typeof n.id == "symbol") ? n.id : r ?? JSON.stringify(n)), vi = (e, n) => {
  const r = e.data.records.every(
    (l, s) => dn(e, l, s) === dn(n, l, s)
  ), a = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return r && a;
}, wi = (e, n) => e !== null && e.data === n.data && vi(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore;
function Nc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: r,
  idProvider: a,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = D(0), [u, m] = D(0), [h, b] = D(0), g = c === "manual" ? i : c === "session" ? d : null, [v, y] = D({
    state: null,
    version: 0
  }), I = v.state, O = v.version, P = U(
    (k) => {
      y(($) => k === null ? $.state === null ? $ : { state: null, version: $.version + 1 } : wi($.state, k) ? $ : { state: k, version: $.version + 1 });
    },
    []
  ), {
    navigationData: T,
    navigationPaginationInfo: E,
    startPendingNavigation: L,
    clearSnapshot: W,
    clearPendingNavigation: F
  } = xi({
    dataState: I,
    dataStateVersion: O,
    effectiveSnapshotKey: g,
    resetSnapshotKey: u,
    idProvider: a
  }), p = ml({
    dataSource: I?.source ?? {},
    data: T,
    paginationInfo: E,
    setPage: I?.setPage ?? cn,
    loadMore: I?.loadMore ?? cn,
    isLoading: !!(I?.isLoading || I?.isLoadingMore),
    idProvider: a,
    itemUrl: l ?? I?.source.itemUrl,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: r
  }), N = U(() => {
    p.hasNext && p.nextItem === null && !p.isNavigating && L(), p.goToNext();
  }, [p, L]), C = U(() => {
    p.hasPrevious && p.previousItem === null && !p.isNavigating && L(), p.goToPrevious();
  }, [p, L]), S = U(
    (k) => {
      F(), c === "session" && f(($) => $ + 1), p.setActiveItemId(k);
    },
    [F, c, p]
  ), j = U(() => {
    W(), c === "session" && f((k) => k + 1), b((k) => k + 1), p.setActiveItemId(null);
  }, [W, c, p]), w = U(() => {
    F(), m((k) => k + 1);
  }, [F]), A = K(() => !p.activeItem || p.activeIndex < 0 ? null : {
    activeItemId: p.activeItemId,
    activeItem: p.activeItem,
    activeItemUrl: p.activeItemUrl,
    currentIndex: p.absoluteIndex ?? p.activeIndex,
    totalCount: p.totalItems ?? p.loadedItemsCount,
    previousItem: p.previousItem,
    nextItem: p.nextItem,
    canGoPrevious: p.hasPrevious && !p.isNavigating,
    canGoNext: p.hasNext && !p.isNavigating,
    goToPrevious: C,
    goToNext: N,
    isNavigating: p.isNavigating,
    previousItemUrl: p.previousItemUrl,
    nextItemUrl: p.nextItemUrl
  }, [N, C, p]);
  return K(
    () => ({
      ...p,
      goToNext: N,
      goToPrevious: C,
      isReady: I !== null,
      controls: A,
      openItem: S,
      closeItem: j,
      resetSnapshot: w,
      [Ma]: P,
      [$a]: h
    }),
    [
      p,
      I,
      A,
      N,
      C,
      S,
      j,
      h,
      w,
      P
    ]
  );
}
const yi = (e) => e, Ni = (e) => String(e), Fe = (e, n) => e === n, Ci = ({
  routeId: e
}) => e ?? null, Cc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: r = yi,
  formatItemId: a = Ni,
  onRouteIdChange: l
}) => {
  const [s, i] = D(
    () => Ci({ routeId: n })
  ), c = z(null), d = z(void 0), f = z(null), u = z(null), m = z(null), h = z(
    e?.activeItemId ?? null
  ), b = z(e), g = z(
    Tt(e)
  ), v = z(/* @__PURE__ */ new Set());
  M(() => {
    const I = b.current !== e;
    b.current = e;
    const O = Tt(e), P = O !== void 0 && g.current !== O;
    g.current = O;
    const T = d.current !== (n ?? null);
    if (d.current = n ?? null, T && f.current !== n && (f.current = null), n == null) {
      c.current = null, u.current = null, f.current = null, v.current.clear(), i(null);
      const W = e?.activeItemId ?? null;
      W == null ? m.current = null : Fe(m.current, W) || (m.current = W, e?.closeItem());
      return;
    }
    const E = r(n);
    if (!e) {
      T && i(n);
      return;
    }
    if (v.current.has(n)) {
      if (!Fe(e.activeItemId ?? null, E)) {
        f.current = n;
        return;
      }
      v.current.clear(), f.current = null, c.current = n, u.current = null, i(n);
      return;
    }
    f.current !== n && (T && i(n), !(c.current === n && (!I || e.activeItemId != null || P)) && (m.current = null, c.current = n, u.current = Fe(
      e.activeItemId ?? null,
      E
    ) ? null : E, e.openItem(E)));
  }, [e, r, n]), M(() => {
    if (n == null) return;
    const I = e?.activeItemId ?? null;
    if (Fe(I, h.current)) return;
    if (h.current = I, I == null) {
      if (u.current != null) return;
      u.current = null, v.current.clear(), f.current = n, c.current = null, i(null), l?.(null, null);
      return;
    }
    const O = u.current;
    if (O != null) {
      Fe(I, O) && (u.current = null);
      return;
    }
    const P = a(I);
    P !== s && (v.current.add(P), i(P), l?.(P, I));
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
}, Ft = {
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
}, Ii = pe({
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
}), ki = ie.forwardRef(function({ className: n, gap: r, children: a, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: x("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: x(Ii({ gap: r, tileSize: l }), n),
      ref: i,
      ...s,
      children: a
    }
  ) });
}), Si = pe({
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
}), or = H(function({
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
  width: b,
  ...g
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: x(
        Si({
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
          width: b
        }),
        n
      ),
      ref: v,
      ...g
    }
  );
}), Ai = pe({
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
}), Li = ie.forwardRef(function({ className: n, gap: r, wrap: a, ...l }, s) {
  return /* @__PURE__ */ t(
    or,
    {
      className: x(Ai({ gap: r, wrap: a }), n),
      ref: s,
      ...l
    }
  );
}), Fi = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...Ft
    }
  },
  defaultVariants: {}
}), Ei = H(function({ className: n, gap: r, children: a, ...l }, s) {
  return /* @__PURE__ */ t(
    or,
    {
      className: x(Fi({ gap: r }), n),
      ref: s,
      ...l,
      children: a
    }
  );
}), Ic = ue(
  {
    name: "Stack",
    type: "layout"
  },
  Ei
), kc = ue(
  {
    name: "Split",
    type: "layout"
  },
  Li
), Sc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  ki
), Di = ({ children: e }) => {
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
}, _i = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Oi = H(function({ header: n, children: r, action: a, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = On();
  M(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const m = (b) => !!b && !(ie.isValidElement(b) && b.type === ie.Fragment && ie.Children.count(b.props.children) === 0), h = () => {
    n?.link?.onClick?.();
  };
  return /* @__PURE__ */ o(
    wt,
    {
      className: x(
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
                /* @__PURE__ */ t(_i, {}),
                /* @__PURE__ */ t(Tn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(be, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: Pn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(Ke, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(Rn, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(We, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                Wa,
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
            /* @__PURE__ */ t(Di, { children: /* @__PURE__ */ t(ja, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              V,
              {
                icon: f ? Va : Ua,
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
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((b, g) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: b.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!b.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: b.prefixUnit }),
              b.value,
              !!b.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: b.postfixUnit })
            ] })
          ] }, g)) }),
          ie.Children.toArray(r).filter(m).map((b, g) => /* @__PURE__ */ o(ie.Fragment, { children: [
            g > 0 && /* @__PURE__ */ t(Ga, { bare: !0 }),
            b
          ] }, g))
        ] }),
        a && /* @__PURE__ */ t(Ha, { children: /* @__PURE__ */ t(V, { variant: "neutral", size: "sm", ...a }) })
      ]
    }
  );
}), Ti = pe({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Pi = H(
  function({ header: n, height: r }, a) {
    return /* @__PURE__ */ o(
      wt,
      {
        className: x(
          "flex gap-4 border-f1-border-secondary",
          r === "full" && "h-full"
        ),
        ref: a,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ t(yt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ t(Nt, { children: n.title }) : /* @__PURE__ */ t(R, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(Tn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Ct,
            {
              "aria-hidden": !0,
              className: x(r !== "full" && Ti({ height: r })),
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
  Y("Widget", ee(Oi, Pi))
), ce = Object.assign(
  H(function({ chart: n, summaries: r, ...a }, l) {
    return /* @__PURE__ */ t(ye, { ref: l, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: ye.Skeleton
  }
), Ri = ee(
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
      ce,
      {
        ref: a,
        ...l,
        chart: /* @__PURE__ */ t(hl, { ...s, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), zi = Y(
  "AreaChartWidget",
  Ri
), Bi = H(function(n, r) {
  return /* @__PURE__ */ t(
    ce,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(gl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), $i = Y(
  "BarChartWidget",
  ee(Bi, ce.Skeleton)
), Mi = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(pl, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Wi = Y(
  "LineChartWidget",
  Mi
), ji = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(bl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Vi = Y(
  "PieChartWidget",
  ji
), Ui = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(ce, { ref: r, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Gi = Y(
  "SummariesWidget",
  Ui
), Hi = ee(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(
        ce,
        {
          ref: r,
          ...n,
          chart: /* @__PURE__ */ t(xl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ki = Y(
  "VerticalBarChartWidget",
  Hi
), Ac = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  zi
), Lc = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  $i
), Fc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Wi
), Ec = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Vi
), Dc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Ki
), _c = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Gi
), qi = (e, n) => /* @__PURE__ */ o(
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
), Yi = H(qi), Zi = (e, n) => /* @__PURE__ */ o(
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
), Ji = H(Zi), Xi = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Qi = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, eo = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, to = {
  "line-chart": "default",
  "bar-chart": "promote"
}, no = H(
  function({ title: n, content: r, buttonLabel: a, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Xi[i], f = Qi[i], u = eo[i], m = to[i];
    return /* @__PURE__ */ o(
      wt,
      {
        className: x(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(yt, { className: "-mt-0.5", children: /* @__PURE__ */ t(Nt, { children: n }) }),
          /* @__PURE__ */ o(Ct, { className: x("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: x(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Yi, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Ji, { className: "w-full" })
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
  Y("ChartWidgetEmptyState", no)
);
function ro(e, n) {
  const r = z(null), a = z(null), [l, s] = D({
    visibleItems: [],
    overflowItems: []
  });
  Ka({
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
      const b = u[h].getBoundingClientRect().height;
      m.push(b);
    }
    return m;
  }, []), d = U(
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
  ), f = U(() => {
    if (!r.current || e.length === 0) return;
    const u = r.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    s(h === 0 ? {
      visibleItems: [],
      overflowItems: e
    } : (b) => b.visibleItems.length === h && b.overflowItems.length === e.length - h ? b : {
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
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = ro(n, l);
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
const Tc = ({
  events: e,
  showAllItems: n,
  gap: r = 8,
  minSize: a = 184
}) => e.length ? n ? /* @__PURE__ */ t("div", { className: "flex flex-col", children: e.map((l) => /* @__PURE__ */ t(gt, { ...l }, l.title)) }) : /* @__PURE__ */ t(
  Qe,
  {
    items: e,
    gap: r,
    minSize: a,
    renderListItem: (l) => /* @__PURE__ */ t(gt, { ...l }, l.title)
  }
) : null, ao = ({ onClick: e, children: n }) => {
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
function Pc({
  label: e,
  count: n,
  icon: r,
  iconClassName: a,
  onClick: l
}) {
  return /* @__PURE__ */ t(ao, { onClick: l, children: /* @__PURE__ */ o(
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
const lo = H(
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
        "emoji" in l && l.emoji && /* @__PURE__ */ t("span", { className: x("flex", a), children: /* @__PURE__ */ t(vt, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, r);
  }
), Rc = H(
  function({ items: n }, r) {
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: a, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          lo,
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
), so = ({
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
function zc({
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
    so,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(qa, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(Ya, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          _n,
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
const io = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function un({
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
  return /* @__PURE__ */ o(io, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(Sn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
    ] })
  ] });
}
const oo = ({ onClick: e, className: n, children: r }) => e ? /* @__PURE__ */ t("a", { className: n, onClick: e, tabIndex: 0, children: r }) : /* @__PURE__ */ t("div", { className: n, tabIndex: -1, children: r });
function pt({
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
  return /* @__PURE__ */ o(oo, { onClick: (h) => {
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
      r && /* @__PURE__ */ t(Rn, { ...r }),
      a && /* @__PURE__ */ t(Ee, { ...a }),
      !!l && /* @__PURE__ */ t(Ke, { value: l })
    ] })
  ] });
}
function Bc({
  items: e,
  minSize: n = 184,
  onClickItem: r,
  showAllItems: a,
  onVisibleItemsChange: l
}) {
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(un, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    Qe,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(un, { ...s, onClick: r }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function $c({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((s) => /* @__PURE__ */ t(pt, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    Qe,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(pt, { ...s, onClick: a }),
      minSize: r
    }
  );
}
const co = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Mc = H(
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
              children: /* @__PURE__ */ t(G, { icon: Pn, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      l.map((i) => /* @__PURE__ */ t(co, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Wc({
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
      vl,
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
const cr = (e, n) => ((n ?? 0) < -1 * (e ?? 0) ? -1 * e : n) ?? 0, uo = ({
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
    const u = cr(
      r,
      a
    ), m = Math.abs(u), h = Math.floor(m / 60), b = Math.floor(m % 60), g = `${h.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${g}` : `${n.overtime} ${g}`;
  })(), f = xe[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, lt = "--:--", fo = (e, n) => {
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
}, mo = ({
  data: e = [],
  trackedMinutes: n,
  remainingMinutes: r = 0
}) => {
  const a = r < 0 && r < -1 * n, l = cr(
    n,
    r
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = a || (l ?? 0) < 0 ? void 0 : fo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, b = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - b) / s;
        return c -= b, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: b / s + v,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: b / s,
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
}, ho = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = a ? Bt(a) : lt, i = n === void 0 || n > 0 ? lt : l ? Bt(l.to) : lt, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function go({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = mo({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: l, secondaryLabel: s, time: i } = ho({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ t(wl, { width: 156, height: 156, children: /* @__PURE__ */ t(
      yl,
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
          Za,
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
function po({
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
        /* @__PURE__ */ t(G, { icon: Ja })
      ]
    }
  );
}
function jc({
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
  canShowBreakButton: b = !0,
  canSeeGraph: g = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: y,
  canShowProject: I = !0,
  projectSelectorElement: O,
  breakTypeName: P
}) {
  const { status: T, statusText: E, subtitle: L, statusColor: W } = uo({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), F = T === "clocked-out", p = m?.map((B) => ({
    value: B.id,
    label: B.duration ? `${B.name} · ${B.duration}` : B.name,
    description: B.description,
    tag: B.isPaid ? a.paid : a.unpaid
  })) ?? [], [N, C] = D(!1), S = () => {
    if (p.length > 1)
      N || C(!0);
    else {
      const B = p?.[0]?.value;
      u?.(B);
    }
  }, j = (B) => {
    h?.(B), C(!1), u?.(B);
  }, w = F && s.length && !c && i, A = s.find((B) => B.id === l), k = s.map((B) => ({
    value: B.id,
    label: B.name,
    icon: B.icon
  })), $ = T === "break", [re, le] = D(!1);
  return /* @__PURE__ */ t("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: E }),
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
          L && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: L })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          T === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            V,
            {
              onClick: d,
              label: a.clockIn,
              icon: Pt
            }
          ) }),
          T === "clocked-in" && /* @__PURE__ */ o(q, { children: [
            b && /* @__PURE__ */ t(q, { children: p.length > 1 && h ? /* @__PURE__ */ t(
              je,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: p,
                onChange: j,
                open: N,
                onOpenChange: C,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  V,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: Rt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ t(
              V,
              {
                onClick: S,
                label: a.break,
                variant: "neutral",
                icon: Rt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: zt
              }
            )
          ] }),
          T === "break" && /* @__PURE__ */ o(q, { children: [
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: zt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ t(
              V,
              {
                onClick: d,
                label: a.resume,
                icon: Pt
              }
            )
          ] })
        ] })
      ] }),
      g && /* @__PURE__ */ t(
        go,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: w ? /* @__PURE__ */ o(q, { children: [
      /* @__PURE__ */ t(
        je,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: l,
          options: k,
          onChange: y,
          open: re,
          onOpenChange: le,
          disabled: c,
          children: /* @__PURE__ */ t("div", { "aria-label": "Select location", children: /* @__PURE__ */ t(
            po,
            {
              text: A?.name,
              placeholder: a.selectLocation,
              icon: A?.icon
            }
          ) })
        }
      ),
      I && O
    ] }) : /* @__PURE__ */ o(q, { children: [
      i && A && /* @__PURE__ */ t(q, { children: /* @__PURE__ */ t(Ee, { text: A.name, icon: A.icon }) }),
      I && O,
      $ && P && /* @__PURE__ */ t(Ee, { text: P })
    ] }) })
  ] }) });
}
const bo = {
  done: el,
  "in-progress": Qa,
  todo: Xa
}, xo = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function vo({
  task: e,
  status: n,
  onClick: r,
  hideIcon: a = !1
}) {
  const l = () => {
    r?.(e);
  }, s = K(() => {
    if (!a)
      return bo[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    pt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: xo[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: tl
      } : void 0,
      count: e.counter,
      onClick: l
    }
  );
}
function Vc({
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
    ).map(({ id: u, text: m, badge: h, counter: b }) => ({
      id: u,
      text: m,
      badge: h,
      counter: b,
      status: f
    }))
  ), c = !i.length;
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, a).map((d) => /* @__PURE__ */ t(
    vo,
    {
      task: d,
      status: d.status,
      hideIcon: r,
      onClick: n
    },
    d.id
  )) });
}
var wo = Object.defineProperty, yo = Object.defineProperties, No = Object.getOwnPropertyDescriptors, Ge = Object.getOwnPropertySymbols, dr = Object.prototype.hasOwnProperty, ur = Object.prototype.propertyIsEnumerable, fn = (e, n, r) => n in e ? wo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, oe = (e, n) => {
  for (var r in n || (n = {})) dr.call(n, r) && fn(e, r, n[r]);
  if (Ge) for (var r of Ge(n)) ur.call(n, r) && fn(e, r, n[r]);
  return e;
}, et = (e, n) => yo(e, No(n)), Co = (e, n) => {
  var r = {};
  for (var a in e) dr.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && Ge) for (var a of Ge(e)) n.indexOf(a) < 0 && ur.call(e, a) && (r[a] = e[a]);
  return r;
}, Io = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, ko = ({ spotsList: e, usedSpot: n }) => e.some((r) => r !== n && n.left === r.left), So = ({ position: e, spot: n, stone: r }) => {
  if (e.left > n.left && n.right >= e.left && e.top + r.height > n.top) {
    if (n.bottom && n.bottom < e.top) return n;
    let a = oe({}, n);
    return a.right = e.left, a;
  }
  return null;
}, Ao = ({ position: e, stone: n, spot: r }) => {
  if (e.left + n.width > r.left && e.top >= r.top) {
    if (r.bottom && r.bottom < e.top || r.right < e.left) return r;
    let a = oe({}, r);
    return a.bottom = e.top, a;
  }
  return null;
}, Lo = ({ stone: e, position: n, spotsList: r, optimalSpot: a }) => {
  let l = oe({}, a);
  return l.left = n.left + e.width, Io(l) || ko({ usedSpot: l, spotsList: r }) ? null : l;
}, Fo = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((l, s, i) => {
  if (l === r) return Lo({ stone: a, position: n, optimalSpot: r, spotsList: i });
  let c = So({ position: n, spot: l, stone: a });
  return c || Ao({ position: n, stone: a, spot: l }) || l;
});
function Eo(e, n) {
  for (let r = 0, a = n.length; r < a; r++) {
    let l = n[r];
    if (e(l)) return l;
  }
  return null;
}
var Do = (e, n) => n.filter(e), _o = (e, n) => [...n].sort(e), Oo = (e, n) => e.top === n.top ? e.left < n.left ? -1 : 1 : e.top < n.top ? -1 : 1, To = (e) => _o(Oo, e), Po = ({ availableSpots: e, optimalSpot: n, containerSize: r, stone: a }) => {
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
}, Ro = (e, n) => {
  let r = e.right - e.left >= n.width;
  if (!e.bottom) return r;
  let a = e.bottom - e.top >= n.height;
  return r && a;
}, zo = ({ availableSpots: e, stone: n }) => Eo((r) => Ro(r, n), e);
function Bo({ stone: e, availableSpots: n, containerSize: r }) {
  let a = zo({ availableSpots: n, stone: e }), l = { left: a.left, top: a.top }, s = Po({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), i = [...n, s], c = Fo({ spots: i, position: l, optimalSpot: a, stone: e });
  return i = [...Do(Boolean, c)], i = To(i), { position: l, availableSpots: i };
}
var $o = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = Bo({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    a < d && (a = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: a };
}, Mo = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), Wo = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = D({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return M(() => {
    var u, m;
    let h = Mo(e.current), b = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (b === null) return;
    let g = $o({ stones: h, containerSize: b });
    f(et(oe({}, g), { stones: h }));
  }, [r, e, n, a, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, jo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Vo = ({ transition: e, transitionDuration: n }) => e ? { transition: jo(n)[e] } : null, Uo = (e) => e ? et(oe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Go = ({ style: e, position: n, transition: r, transitionDuration: a }) => oe(oe(et(oe({}, e), { position: "absolute" }), Uo(n)), Vo({ transition: r, transitionDuration: a }));
function Ho(e, n, r) {
  let a;
  return function(...l) {
    a && clearTimeout(a), a = setTimeout(function() {
      a = null, e.apply(null, l);
    }, n);
  };
}
var Ko = () => {
  let [e, n] = D(), r = z(Ho(n, 300));
  return M(() => {
    let a = () => {
      r.current(window.innerWidth);
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), e;
}, qo = (e) => {
  let [n, r] = D(null);
  return M(() => {
    let a = new ResizeObserver((l) => {
      for (let s of l) r(s.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, Yo = (e) => {
  var n = e, { children: r, style: a, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = Co(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = Ko(), m = qo(f), { positions: h, containerHeight: b } = Wo({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), g = oe({ minHeight: b ?? 0, position: "relative" }, a);
  return t("div", et(oe({ ref: f, style: g }, c), { children: Mn.map(r, (v, y) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let I = { style: Go({ style: v.props.style, position: h[y], transition: l, transitionDuration: s }), ref: (O) => d.current[y] = O };
    return $n(v, oe(oe({}, v.props), I));
  }) }));
};
const Zo = { sm: 340, md: 480, lg: 640 }, mn = H(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const l = Zo[r], [s, i] = D(), c = Mn.toArray(n), d = z(null);
    return M(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Yo, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Jo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Uc = ee(mn, () => /* @__PURE__ */ t(zn, { children: /* @__PURE__ */ t(mn, { children: Jo.map((e, n) => /* @__PURE__ */ t(ye.Skeleton, { height: e }, n)) }) })), hn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Gc = ee(
  H(function({ children: n }, r) {
    return /* @__PURE__ */ t(He, { ref: r, showBar: !1, children: /* @__PURE__ */ t(hn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(zn, { orientation: "horizontal", children: /* @__PURE__ */ o(hn, { children: [
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {}),
    /* @__PURE__ */ t(ye.Skeleton, {})
  ] }) })
);
function Xo({
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
    nl,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const Hc = ne(
  Y("WidgetEmptyState", Xo)
), fr = H(
  ({ title: e, children: n }, r) => (rl(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
fr.displayName = "WidgetSection";
const Kc = ne(
  Y("WidgetSection", fr)
), qc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const l = al(), s = window.location.pathname, i = K(() => n?.length ? n.includes(s) : r?.length ? !r.includes(s) : !0, [s, n, r]), c = K(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return i ? a : (l && console.error(c), null);
}, Yc = ne(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    He
  )
);
export {
  ic as ActivityItemList,
  Ns as ActivityItemListSkeleton,
  Yl as AiPromotionChat,
  Zl as AiPromotionChatProvider,
  fc as ApplicationFrame,
  Gd as AreaChart,
  Ac as AreaChartWidget,
  Sc as AutoGrid,
  Fa as Badge,
  Hd as BarChart,
  Lc as BarChartWidget,
  ys as BaseActivityItemList,
  Kd as BaseBanner,
  As as BaseCelebration,
  zs as BaseCommunityPost,
  Xc as BaseTabs,
  Qc as BreadcrumbSelect,
  Al as Breadcrumbs,
  gt as CalendarEvent,
  Tc as CalendarEventList,
  ed as CardSelectableContainer,
  ol as Carousel,
  qd as CategoryBarChart,
  Wc as CategoryBarSection,
  oc as Celebration,
  Ls as CelebrationSkeleton,
  Oc as ChartWidgetEmptyState,
  td as Chip,
  jc as ClockInControls,
  Yd as ComboChart,
  dc as CommunityPost,
  Bs as CommunityPostSkeleton,
  Zs as CompanySelector,
  Ke as Counter,
  Uc as Dashboard,
  mc as DaytimePage,
  nd as DetailsItem,
  rd as DetailsItemsList,
  Zd as Dialog,
  Ne as Dropdown,
  sc as EntitySelect,
  ad as F0ActionBar,
  Jd as F0AiBanner,
  Sn as F0AvatarModule,
  ac as F0Callout,
  ld as F0TableOfContent,
  lc as F0VersionHistory,
  sd as F1SearchBox,
  id as FILE_TYPES,
  od as FileItem,
  cc as HighlightBanner,
  Rc as IndicatorsList,
  cd as Input,
  dd as Item,
  ud as ItemSectionHeader,
  Xd as LineChart,
  Fc as LineChartWidget,
  xc as Menu,
  fd as MobileDropdown,
  Qd as NotesTextEditor,
  eu as NotesTextEditorPatchTargetNotFoundError,
  tu as NotesTextEditorSkeleton,
  nu as NotesTextEditorUnsupportedPatchTypeError,
  md as NumberInput,
  hc as OmniButton,
  yc as OneApprovalHistory,
  hd as OneCalendar,
  gd as OneCalendarInternal,
  pd as OneDataCollection,
  bd as OneDateNavigator,
  nl as OneEmptyState,
  xd as OnePagination,
  uc as OnePersonListItem,
  qc as OneRestrictComponent,
  gc as Page,
  rc as PageHeader,
  ru as PieChart,
  Ec as PieChartWidget,
  Di as PrivateBox,
  au as ProgressBarChart,
  lu as RadarChart,
  Ds as Reactions,
  vd as ResourceHeader,
  xa as RichTextDisplay,
  wd as RichTextEditor,
  Yc as ScrollArea,
  vc as SearchBar,
  yd as SectionHeader,
  je as Select,
  Ba as Shortcut,
  wc as Sidebar,
  pc as SidebarFooter,
  bc as SidebarHeader,
  vn as Spinner,
  kc as Split,
  Ic as Stack,
  _c as SummariesWidget,
  Nd as Switch,
  Cd as Tabs,
  Id as TabsSkeleton,
  Vc as TasksList,
  kd as Textarea,
  Sd as ToggleGroup,
  Ad as ToggleGroupItem,
  be as Tooltip,
  Mc as TwoColumnsList,
  su as VerticalBarChart,
  Dc as VerticalBarChartWidget,
  ft as VirtualList,
  Ld as WeekStartDay,
  Fd as Weekdays,
  ye as Widget,
  zc as WidgetAvatarsListItem,
  Hc as WidgetEmptyState,
  Pc as WidgetHighlightButton,
  Bc as WidgetInboxList,
  un as WidgetInboxListItem,
  Kc as WidgetSection,
  $c as WidgetSimpleList,
  pt as WidgetSimpleListItem,
  Gc as WidgetStrip,
  Ed as actionBarStatuses,
  Dd as chipVariants,
  _d as downloadAsCSV,
  Od as generateCSVContent,
  Td as getGranularityDefinition,
  Pd as getGranularityDefinitions,
  Rd as getGranularitySimpleDefinition,
  zd as granularityDefinitions,
  Bd as modules,
  iu as predefinedPresets,
  $d as rangeSeparator,
  ou as selectSizes,
  Ze as useAiPromotionChat,
  Md as useDataCollectionData,
  Nc as useDataCollectionItemNavigation,
  Cc as useDataCollectionItemNavigationRouteSync,
  Wd as useDataCollectionSource,
  jd as useExportAction,
  Vd as useInfiniteScrollPagination,
  Ie as useSidebar
};
