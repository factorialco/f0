import { g as ma, B as ha, h as ga, i as pa, j as Et, k as Pe, l as ba, m as b, n as G, o as be, u as re, T as xa, p as va, q as ya, R as wa, r as Na, s as le, t as Ca, v as xt, w as st, x as $e, A as ke, y as ka, z as Ia, C as W, E as Sa, G as Fa, H as ge, J as on, K as Aa, L as La, M as V, N as cn, S as D, O as ye, Q as Ea, U as Oa, V as _a, W as Da, X as Pa, Y as Ie, Z as dn, _ as Ta, $ as xe, a0 as We, a1 as za, d as un, a2 as Ce, a3 as Ra, a4 as fn, a5 as ne, a6 as Y, a7 as mn, a8 as hn, a9 as Ba, aa as gn, ab as me, ac as ee, ad as $a, ae as Wa, af as Ma, ag as ja, ah as pe, ai as Ue, aj as Va, ak as Ha, al as Ua, am as Ga, an as Ge, ao as pn, ap as Ka, aq as qa, ar as Ya, as as Me, at as Za, au as bn, av as Xa, aw as Ja, ax as Qa, ay as er, az as tr, aA as nr, aB as ar, aC as rr, aD as ot, aE as xn, aF as ct, aG as vn, aH as lr, aI as ir, aJ as sr, aK as or, aL as cr, aM as Ke, aN as qe, aO as dt, aP as yn, aQ as dr, aR as vt, aS as ur, aT as fr, aU as mr, aV as _e, aW as hr, aX as gr, aY as Te, aZ as Ot, a_ as ut, a$ as pr, b0 as br, a as xr, b as vr, b1 as wn, b2 as yr, f as wr, F as Nr, b3 as Cr, b4 as Nn, b5 as kr, b6 as Cn, b7 as kn, b8 as Ir, b9 as Sr, ba as Fr, bb as Ar, bc as Lr, bd as Er, be as Or, bf as _r, bg as Dr, bh as In, bi as Pr, bj as ue, bk as yt, bl as wt, bm as Nt, bn as Sn, bo as Ct, bp as Fn, bq as An, br as Tr, bs as zr, bt as Rr, bu as Br, bv as $r, bw as Wr, bx as Mr, by as jr, bz as _t, bA as Vr, bB as Hr, bC as Dt, bD as Pt, bE as Tt, bF as Ur, bG as Gr, bH as Kr, bI as qr, bJ as Ln, bK as Yr, bL as Zr } from "./F0CanvasPanel-44Gm4epD.js";
import { bX as Vc, bW as Hc, c7 as Uc, bT as Gc, bU as Kc, bM as qc, bN as Yc, bO as Zc, c8 as Xc, bV as Jc, c3 as Qc, c4 as ed, bP as td, bZ as nd, bY as ad, bQ as rd, bR as ld, c5 as id, c9 as sd, c6 as od, c2 as cd, b$ as dd, c1 as ud, b_ as fd, bS as md, c0 as hd } from "./F0CanvasPanel-44Gm4epD.js";
import { jsx as e, jsxs as o, Fragment as K } from "react/jsx-runtime";
import se, { forwardRef as H, useRef as M, useTransition as Xr, useState as O, useLayoutEffect as En, useId as ft, useContext as Se, createContext as Ye, useEffect as $, useCallback as Q, useMemo as q, Fragment as Jr, isValidElement as Qr, cloneElement as On, Children as _n } from "react";
import { C as el, P as tl, a as Dn, M as nl, p as al, b as rl, R as zt, c as Pn, u as ll, r as il, d as sl, e as ol, f as cl, g as Tn, S as dl, A as ul, B as fl, L as ml, h as hl, V as gl, i as pl, j as bl, k as xl, O as vl } from "./readDataCollectionStorage-U2-EKmqB.js";
import { q as pd, s as bd, n as xd, H as vd, t as yd, z as wd, a8 as Nd, G as Cd, o as kd, Q as Id, F as Sd, Y as Fd, U as Ad, J as Ld, ae as Ed, K as Od, Z as _d, _ as Dd, v as Pd, aa as Td, ab as zd, a9 as Rd, ac as Bd, N as $d, $ as Wd, a5 as Md, a7 as jd, w as Vd, y as Hd, D as Ud, W as Gd, ad as Kd, X as qd, T as Yd, x as Zd, E as Xd, l as Jd, m as Qd, a1 as eu, a2 as tu, a6 as nu, I as au, a3 as ru, a0 as lu, a4 as iu } from "./readDataCollectionStorage-U2-EKmqB.js";
const yl = ma("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), zn = H(({ className: t, items: n }, a) => /* @__PURE__ */ e(ha, { ref: a, className: t, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ e(ga, {}),
  /* @__PURE__ */ e(pa, { items: n, children: /* @__PURE__ */ e("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
zn.displayName = "CollapsedBreadcrumbItem";
const kt = 50, wl = 120, je = 8;
function Nl(t, n) {
  const a = n.length;
  if (a <= 2) return a;
  const r = n[0];
  let l = t - r - je, i = 0, s = 1;
  for (let c = a - 1; c > 0; c--) {
    const d = n[c];
    if (l < d)
      break;
    l -= d, i = c, s++;
  }
  if (s < a)
    for (l -= kt; l < 0 && s > 1; )
      l += n[i], i++, s--;
  return Math.max(2, s);
}
function Rt(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + je;
    default:
      return t[0] + kt + t[t.length - 1] + je;
  }
}
function Cl(t, n) {
  return wl * t + (n ? kt : 0) + je;
}
function kl(t, n, a = []) {
  if (!t) {
    const s = Math.min(n.length, 2);
    return {
      visibleCount: s,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Cl(
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
      minWidth: Rt(l)
    };
  const i = Nl(t, l);
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
    minWidth: Rt(l)
  };
}
function Il({ breadcrumbs: t, append: n }) {
  const a = M(null), r = M(null), [, l] = Xr(), [i, s] = O(null), c = (i?.collapsedItems || []).length > 0;
  return En(() => {
    const d = a.current, f = r.current;
    if (!d || !f || f.children.length < t.length) return;
    const u = () => {
      const h = a.current?.clientWidth ?? null, g = Array.from(f.children);
      l(() => {
        const p = kl(
          h,
          t,
          g
        );
        s(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [t, n]), !t.length || i && !i.headItem ? /* @__PURE__ */ e(Et, { ref: a, className: "w-full" }) : /* @__PURE__ */ o(
    Et,
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
              Pe,
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
        i && i.headItem && /* @__PURE__ */ o(ba, { children: [
          /* @__PURE__ */ e(
            Pe,
            {
              isOnly: i.isOnly,
              isFirst: !0,
              item: i.headItem,
              isLast: !1
            },
            `first-item-${i.headItem.id}`
          ),
          c && /* @__PURE__ */ o(K, { children: [
            /* @__PURE__ */ e(
              zn,
              {
                items: i.collapsedItems
              },
              "collapsed-items"
            ),
            i.tailItems.map((d, f) => /* @__PURE__ */ e(
              Pe,
              {
                item: d,
                isLast: f === i.tailItems.length - 1,
                isFirst: !1,
                children: f === i.tailItems.length - 1 ? n : void 0
              },
              d.id
            ))
          ] }),
          !c && /* @__PURE__ */ e(K, { children: i.tailItems.map((d, f) => /* @__PURE__ */ e(
            Pe,
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
const Sl = be({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), Bt = [
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
  spin: t = !1,
  size: n = "md",
  background: a,
  hover: r = !1,
  ...l
}, i) => {
  const s = ft(), {
    onAnimationStart: c,
    onAnimationEnd: d,
    onDragStart: f,
    onDragEnd: u,
    onDrag: m,
    className: h,
    ...g
  } = l;
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(Sl({ size: n }), h),
      style: {
        background: "transparent",
        perspective: t ? "10px" : void 0,
        transformStyle: t ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ o(
        G.svg,
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
            ...g.style
          },
          ...(({ style: p, ...v }) => v)(g),
          children: [
            /* @__PURE__ */ o("defs", { children: [
              /* @__PURE__ */ e("clipPath", { id: `${s}-circle`, children: /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "16" }) }),
              Bt.map((p) => /* @__PURE__ */ e("clipPath", { id: `${s}-${p.id}`, children: /* @__PURE__ */ e("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ e("g", { clipPath: `url(#${s}-circle)`, children: Bt.map((p) => /* @__PURE__ */ e(
              G.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${s}-${p.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": r ? 8 : 1,
                  "--rotate": r ? "90deg" : "0deg",
                  opacity: r ? p.id === "left" ? 1 : 0 : 1,
                  filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: t ? p.delay : 0,
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
                    delay: t ? p.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: t ? `rotate3d(${p.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: p.transformOrigin,
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
              p.id
            )) })
          ]
        }
      )
    }
  );
}, Rn = H(Fl), Bn = Ye(null), Al = 15, Ll = ({ children: t, enabled: n, onShow: a, ...r }) => {
  const [l, i] = O(n), [s, c] = O(!1), [d, f] = O(!0), [u, m] = O(
    Al
  ), h = M(null), g = (v) => {
    h.current = v;
  }, p = () => {
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
    Bn.Provider,
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
        clear: p,
        setClearFunction: g
      },
      children: t
    }
  );
}, we = () => {
};
function Ze() {
  const t = Se(Bn);
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
const $n = ({
  className: t,
  disabled: n
}) => {
  const { enabled: a, setOpen: r, open: l } = Ze(), i = re(), [s, c] = O(!1);
  return a ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(xa, { children: /* @__PURE__ */ o(va, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(ya, { asChild: !0, children: /* @__PURE__ */ e(
      G.div,
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
          wa,
          {
            onCheckedChange: (d) => {
              r(d);
            },
            checked: l,
            "aria-label": l ? i.ai.closeChat : i.ai.openChat,
            className: b(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              le(),
              t
            ),
            disabled: n,
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: /* @__PURE__ */ e(
              Na,
              {
                className: b(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  Rn,
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
    !l && /* @__PURE__ */ e(Ca, { side: "left", className: "font-medium", children: i.ai.welcome })
  ] }) }) }) : null;
}, $t = "one_sidebar_locked", Wn = Ye(void 0);
function Fe() {
  const t = Se(Wn);
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
function El({ children: t }) {
  const { currentPath: n } = xt(), [a, r] = O(!1), [l, i] = O(!1), s = a ? $e.xl : $e.md, c = st(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [d, f] = O(() => {
    const k = localStorage.getItem($t);
    return k !== null ? !!k : !0;
  }), [u, m] = O(!1), [h, g] = O(
    null
  ), p = Q(
    ({ isInvokedByUser: k } = {
      isInvokedByUser: !0
    }) => {
      i(k ?? !0), c && m(!u), f(!d);
    },
    [c, u, d, f, m]
  ), v = Q(
    (k) => {
      c || (k.clientX < 32 && m(!0), k.clientX > 280 && m(!1));
    },
    [c, m]
  ), w = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
  return $(() => {
    m(!1);
  }, [n]), $(() => {
    l && localStorage.setItem($t, d ? "1" : "");
  }, [d, l]), $(() => () => {
    g(w);
  }, [w]), /* @__PURE__ */ e(
    Wn.Provider,
    {
      value: {
        isSmallScreen: c,
        isLastToggleInvokedByUser: l,
        sidebarState: w,
        toggleSidebar: p,
        prevSidebarState: h,
        setForceFloat: r
      },
      children: /* @__PURE__ */ e("div", { onPointerMove: v, className: "h-screen w-screen", children: t })
    }
  );
}
const Wt = G.create(W), Mt = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, Ol = ({
  isMarked: t,
  onChange: n,
  label: a
}) => {
  const [r, l] = O(!1), i = () => {
    l(!0), n(!t);
  };
  return /* @__PURE__ */ e(ke, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        le()
      ),
      onClick: i,
      "aria-label": a,
      children: t ? /* @__PURE__ */ e(
        Wt,
        {
          size: "sm",
          icon: ka,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Mt,
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
        Wt,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Ia,
          className: "outline-none",
          variants: Mt,
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
}, _l = ({
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
  const [m, h] = O("idle"), [g, p] = O(null), [v, ...w] = g ?? [], [k, P] = O(!1);
  $(() => {
    p(null), h("idle");
  }, [t]);
  const z = Q(async () => {
    try {
      h("fetching");
      const _ = await a();
      h("idle"), p(_);
    } catch {
      h("error");
    }
  }, [a]);
  return /* @__PURE__ */ o(
    Sa,
    {
      open: k,
      onOpenChange: async (_) => {
        P(_), _ && g === null && z(), s(_);
      },
      children: [
        /* @__PURE__ */ e(Fa, { asChild: !0, children: /* @__PURE__ */ e(
          ge,
          {
            variant: "outline",
            icon: on,
            hideLabel: !0,
            label: n,
            pressed: k,
            append: f && /* @__PURE__ */ e(It, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(Aa, { children: /* @__PURE__ */ o(
          La,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Tl, { title: n, url: r, onClick: c }),
              m === "fetching" && /* @__PURE__ */ e(Bl, {}),
              /* @__PURE__ */ o("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                m === "idle" && g !== null && g.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(zl, { ...l, buttonUrl: r }) }),
                m === "idle" && g !== null && g.length > 0 && /* @__PURE__ */ o("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Dl,
                    {
                      ...v,
                      onClick: d
                    }
                  ),
                  g.length > 1 && /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: w.map((_, E) => /* @__PURE__ */ e(
                    Pl,
                    {
                      ..._,
                      onClick: d
                    },
                    E
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  Rl,
                  {
                    ...i,
                    onClick: () => {
                      z();
                    }
                  }
                ) })
              ] }),
              m === "idle" && u && u.isVisible && /* @__PURE__ */ e(
                $l,
                {
                  isVisible: u.isVisible,
                  onClose: u.onClose,
                  crossSelling: u,
                  onDropdownClose: () => P(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Dl = ({
  title: t,
  href: n,
  mediaUrl: a,
  unread: r,
  updated: l,
  onClick: i
}) => {
  const s = "flex flex-col items-stretch w-full", c = a?.includes(".mp4");
  return /* @__PURE__ */ e(
    Ea,
    {
      onClick: i,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        ye,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(s, "text-f1-foreground no-underline"),
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
              Oa,
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
              r && /* @__PURE__ */ e(It, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Pl = ({
  title: t,
  href: n,
  updated: a,
  unread: r = !1,
  onClick: l
}) => {
  const i = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(_a, { asChild: !0, className: i, onClick: l, children: /* @__PURE__ */ e(
    ye,
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
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: a })
        ] }),
        r && /* @__PURE__ */ e(It, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Tl = ({
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
        V,
        {
          variant: "outline",
          size: "sm",
          icon: cn,
          label: t,
          hideLabel: !0,
          onClick: a
        }
      )
    ]
  }
), Mn = ({
  icon: t,
  button: n,
  title: a,
  description: r,
  iconWrapperClassName: l
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: b(
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
] }) }), zl = ({
  title: t,
  buttonText: n,
  buttonUrl: a,
  description: r
}) => /* @__PURE__ */ e(
  Mn,
  {
    title: t,
    description: r,
    icon: /* @__PURE__ */ e(W, { icon: on, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(ye, { href: a, children: /* @__PURE__ */ e(V, { label: n }) })
  }
), Rl = ({
  title: t,
  description: n,
  buttonText: a,
  onClick: r
}) => /* @__PURE__ */ e(
  Mn,
  {
    title: t,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(W, { icon: Da, size: "lg" }),
    button: /* @__PURE__ */ e(V, { variant: "outline", label: a, onClick: r })
  }
), Bl = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ o("div", { className: "p-2", children: [
      /* @__PURE__ */ e(D, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), It = ({ className: t = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", t)
  }
), $l = ({
  isVisible: t,
  onClose: n,
  crossSelling: a,
  onDropdownClose: r
}) => {
  const [l, i] = O(t);
  $(() => {
    i(t);
  }, [t]);
  const s = () => {
    i(!1), n && n();
  }, c = (d) => {
    i(!1), r(), d && d();
  };
  return l && /* @__PURE__ */ o(K, { children: [
    /* @__PURE__ */ e(Pa, {}),
    /* @__PURE__ */ o("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: a?.sectionTitle }),
        n && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          V,
          {
            variant: "ghost",
            icon: Ie,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        el,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: a?.products.map((d) => /* @__PURE__ */ e(
            tl,
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
}, St = Ye(null), Ko = St.Provider;
function qo() {
  return Se(St);
}
function Wl(t, n) {
  const a = n?.getItemTitle, r = t !== null, l = t?.previousItem ?? null, i = t?.nextItem ?? null, s = t?.previousItemUrl ?? null, c = t?.nextItemUrl ?? null, d = t?.absoluteIndex ?? null, f = t?.totalItems;
  return q(() => {
    if (!r) return null;
    const u = d !== null && f !== void 0 ? { current: d + 1, total: f } : void 0, m = s !== null ? {
      url: s,
      title: (l !== null ? a?.(l) : void 0) ?? "Previous"
    } : void 0, h = c !== null ? {
      url: c,
      title: (i !== null ? a?.(i) : void 0) ?? "Next"
    } : void 0;
    return !m && !h && !u ? null : { previous: m, next: h, counter: u };
  }, [
    r,
    l,
    i,
    s,
    c,
    d,
    f,
    a
  ]);
}
function Yo({
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
  const { sidebarState: u, toggleSidebar: m } = Fe(), h = Se(St), g = i ?? h ?? void 0, p = [
    {
      id: t.href,
      label: t.name,
      href: t.href,
      module: t.id
    },
    ...a
  ], v = n && Object.keys(n).length !== 0, w = l && a.length > 0, k = !l && r.length > 0, P = !l && !!s?.isVisible, z = p[p.length - 1], _ = "navigation" in window ? window.navigation : null, E = l && (_ ? !!_.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-page py-4",
        l ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(ke, { children: !l && u !== "locked" && /* @__PURE__ */ e(
            G.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                V,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => m(),
                  label: "Open main menu",
                  icon: dn
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: b(
                "flex flex-grow items-center gap-2",
                E && "justify-center"
              ),
              children: [
                l && E && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  V,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: Ta,
                    onClick: () => window.history.back()
                  }
                ) }),
                E || w ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in z ? /* @__PURE__ */ e(D, { className: "h-4 w-24" }) : z.label }) : /* @__PURE__ */ e(
                  Il,
                  {
                    breadcrumbs: p,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      Ol,
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
          !l && v && /* @__PURE__ */ e("div", { children: n.tooltip ? /* @__PURE__ */ e(xe, { label: n.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            We,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(We, { text: n.text, variant: n.variant }) }),
          !l && v && (g || k || P) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          g && /* @__PURE__ */ e(za, { ...g }),
          g && k && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (P || k) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            P && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              _l,
              {
                ...s,
                currentModule: t.name
              }
            ) }),
            k && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: r.map((A, j) => /* @__PURE__ */ e(Ml, { action: A }, j)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              un,
              {
                tooltip: d,
                autoOpen: f
              }
            ),
            /* @__PURE__ */ e($n, {})
          ] })
        ] })
      ]
    }
  );
}
function Ml({ action: t }) {
  const n = M(null), [a, r] = O(!1), l = t.variant ?? "outline";
  return "actions" in t ? /* @__PURE__ */ e(Ce, { items: t.actions, open: a, onOpenChange: r, children: /* @__PURE__ */ e(
    ge,
    {
      size: "md",
      variant: l,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: a
    }
  ) }) : "onClick" in t ? /* @__PURE__ */ e(
    ge,
    {
      size: "md",
      variant: l,
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: t.onClick
    }
  ) : /* @__PURE__ */ e(
    ye,
    {
      href: t.href,
      title: t.label,
      "aria-label": t.label,
      ref: n,
      children: /* @__PURE__ */ e(
        ge,
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
const jl = () => {
  const t = re();
  return /* @__PURE__ */ o(
    G.div,
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
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ e(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: t.ai.inputPlaceholder,
            className: b(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ e(
          ge,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: t.ai.sendMessage,
            icon: Ra,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Vl = ({
  autoClearMinutes: t,
  reset: n,
  isOpen: a
}) => {
  const r = M(null);
  $(() => (a ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, a, t]);
}, Hl = ({ children: t }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: a,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = Ze();
  return Vl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ e(ke, { children: n && /* @__PURE__ */ e(
    G.div,
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
        G.div,
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
}, Ul = ({ action: t, onClose: n }) => {
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
          children: t.isLoading ? /* @__PURE__ */ e(fn, { size: "small" }) : t.label
        }
      );
    case "internal":
      return /* @__PURE__ */ e(
        ge,
        {
          label: t.label || "",
          onClick: a,
          variant: t.buttonVariant,
          icon: t.icon
        }
      );
  }
}, Gl = ({
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
  Ll,
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
), Kl = () => {
  const {
    enabled: t,
    greeting: n,
    title: a,
    description: r,
    benefits: l,
    actions: i,
    setOpen: s,
    onHide: c
  } = Ze(), d = () => {
    s(!1), c?.();
  };
  return t ? /* @__PURE__ */ o(Hl, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      ge,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: Ie,
        onClick: d
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(Rn, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: a })
        ] })
      ] }),
      r && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: r }),
      l?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: l.map((f, u) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(mn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      i?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: i.map((f, u) => /* @__PURE__ */ e(
        Ul,
        {
          action: f,
          onClose: () => s(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(jl, {}) })
  ] }) : null;
}, ql = ne(
  Y("AiPromotionChat", Kl)
), Yl = ne(
  Y("AiPromotionChatProvider", Gl)
), jn = be({
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
}), jt = {
  positive: gn,
  warning: Ba,
  info: hn
}, Vt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Zl = H(
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
        className: jn({ variant: i }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Vt[i]
                ),
                children: [
                  jt[i] && /* @__PURE__ */ e(W, { icon: jt[i], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ e(
                    me,
                    {
                      className: Vt[i] || "font-medium",
                      children: n
                    }
                  )
                ]
              }
            ),
            a && /* @__PURE__ */ e(
              V,
              {
                variant: "ghost",
                icon: Ie,
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
                className: b(
                  "bg-f1-background px-4 py-3",
                  c ? "rounded-t-[13.25px]" : "rounded-[13.25px]"
                ),
                children: r
              }
            ),
            c && /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: l.map((d, f) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
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
  compact: t,
  variant: n = "ai"
}) => /* @__PURE__ */ o(
  "div",
  {
    className: jn({ variant: n }),
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: /* @__PURE__ */ e(D, { className: "h-5 w-32 rounded-md" }) }),
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-[1px]", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "rounded-t-[13.25px] bg-f1-background px-4 py-3",
              t && "rounded-[13.25px]"
            ),
            children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ e(D, { className: "h-4 w-full rounded-md" }),
              /* @__PURE__ */ e(D, { className: "h-4 w-3/4 rounded-md" }),
              /* @__PURE__ */ e(D, { className: "h-4 w-1/2 rounded-md" })
            ] })
          }
        ),
        !t && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3", children: [
          /* @__PURE__ */ e(D, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ e(D, { className: "h-8 w-28 rounded-md" })
        ] })
      ] })
    ]
  }
), Vn = H(
  (t, n) => /* @__PURE__ */ e(Zl, { ref: n, ...t })
), Jl = ({ compact: t, variant: n }) => /* @__PURE__ */ e(Xl, { compact: t, variant: n });
Vn.displayName = "F0Callout";
const Zo = ee(
  ne(Vn),
  Jl
);
function Ql({
  title: t,
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
        le("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `${t}${n ? " (selected)" : ""}`,
      "aria-pressed": a ? n : void 0,
      children: [
        /* @__PURE__ */ e(W, { icon: $a, size: "md", color: "selected" }),
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
function ei({
  author: t,
  timestamp: n,
  onClick: a,
  isActive: r
}) {
  const { locale: l } = Wa(), i = Ma(l), s = ja(n, "PPPp", { locale: i }), c = `${t.firstName} ${t.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        r && "bg-f1-background-tertiary",
        a && "cursor-pointer hover:bg-f1-background-hover",
        le("focus-visible:ring-inset")
      ),
      onClick: a,
      disabled: !a,
      "aria-label": `Version ${s} by ${c}${r ? " (selected)" : ""}`,
      "aria-pressed": a ? r : void 0,
      children: [
        /* @__PURE__ */ e(me, { lines: 1, className: "font-medium text-f1-foreground", children: s }),
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
function ti({
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
        /* @__PURE__ */ e(Ue, { className: "h-full flex-1", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
          a && /* @__PURE__ */ e(
            Ql,
            {
              title: a.title,
              onClick: a.onClick,
              isActive: r === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ e(
            ei,
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
const Xo = ne(
  Y("F0VersionHistory", ti)
), Hn = H(
  ({ height: t, itemCount: n, itemSize: a, className: r, renderer: l }, i) => {
    const s = se.useRef(null);
    se.useImperativeHandle(
      i,
      () => s.current,
      []
    );
    const c = Va({
      count: n,
      getScrollElement: () => s.current,
      estimateSize: typeof a == "number" ? () => a : a,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: b("scrollbar-macos w-full overflow-auto", r),
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
                children: d ? l(d) : /* @__PURE__ */ e(K, {})
              },
              d.key
            ))
          }
        )
      }
    );
  }
);
Hn.displayName = "VirtualList";
const mt = Y("VirtualList", Hn), Un = ({
  text: t,
  search: n,
  searchKeys: a = [],
  semiBold: r = !1
}) => {
  if (!n)
    return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: t });
  if (t.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (a.find(
      (s) => s.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = t.split(" ")[0];
    else
      return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: t });
  const l = new RegExp(`(${n})`, "gi"), i = t.split(l);
  return /* @__PURE__ */ e("span", { className: b("line-clamp-1", r ? "font-semibold" : ""), children: i.map(
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
function Xe(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l >= 0 && l < r.length - 1 ? r[l + 1].focus() : r.length > 0 && n?.();
}
function Je(t, n) {
  const r = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), l = r.indexOf(t);
  l > 0 ? r[l - 1].focus() : r.length > 0 && n?.();
}
const ni = ({
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
  const m = t.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), p = (w) => {
    w.preventDefault(), w.stopPropagation(), !f && (n ? r(t) : a(t));
  }, v = (w) => {
    if (w.key === "Enter" || w.key === " ") {
      if (w.preventDefault(), f) return;
      n ? n && r(t) : a(t);
    } else w.key === "ArrowDown" ? Xe(w.currentTarget, s) : w.key === "ArrowUp" && Je(w.currentTarget, c);
  };
  return /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ o(
    "label",
    {
      "aria-label": t.name,
      className: b(
        l,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        n && d ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !u && /* @__PURE__ */ e(
          pe,
          {
            src: t.avatar,
            firstName: h,
            lastName: g,
            size: "xs",
            deactivated: t.deactivated
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "flex flex-1 flex-row items-center gap-2 break-all",
              t.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ e(
              Un,
              {
                text: t.name,
                search: i,
                searchKeys: t.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ e(
          pn,
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
        d && n && /* @__PURE__ */ e(
          W,
          {
            className: "text-f1-icon-selected",
            icon: gn,
            size: "md"
          }
        )
      ]
    }
  ) });
}, Re = ({
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
  showGroupIcon: g = !1,
  singleSelector: p = !1,
  disabled: v = !1,
  hiddenAvatar: w = !1
}) => {
  const [k, P] = O(!1);
  if (!t)
    return /* @__PURE__ */ e(
      ni,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: r,
        search: a,
        selected: l,
        onSelect: s,
        onRemove: c,
        singleSelector: p,
        goToFirst: f,
        goToLast: u,
        disabled: v,
        hiddenAvatar: w
      }
    );
  const z = (A) => {
    if (A.key === " ")
      A.preventDefault(), d(!n);
    else if (A.key === "Enter" && p)
      d(!n);
    else if (A.key === "Enter") {
      if (v) return;
      !l || i ? s(r) : l && c(r);
    } else A.key === "ArrowDown" ? Xe(A.currentTarget, f) : A.key === "ArrowUp" && Je(A.currentTarget, u);
  }, _ = () => {
    if (k)
      d(!n), P(!1);
    else {
      if (v || p) return;
      l ? c(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const E = l || i;
  return /* @__PURE__ */ o(K, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ e(
        V,
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
            P(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            g && /* @__PURE__ */ e(
              W,
              {
                icon: Ga,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ e(
                Un,
                {
                  semiBold: !0,
                  text: r.name,
                  search: a,
                  searchKeys: r.searchKeys
                }
              ),
              /* @__PURE__ */ e(Ge, { value: r.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ e(
              pn,
              {
                checked: E,
                disabled: v,
                onClick: _,
                onKeyDown: z,
                indeterminate: i,
                onPointerDown: (A) => {
                  A.stopPropagation(), P(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: b("ml-auto", p ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !h && !n && /* @__PURE__ */ e("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
Re.displayName = "EntitySelectListItem";
const Ht = ({
  label: t,
  onCreate: n,
  goToFirst: a,
  goToLast: r
}) => /* @__PURE__ */ e("div", { className: "w-full pl-1 pr-1", onKeyDown: (i) => {
  i.key === "ArrowDown" || i.key === "Tab" ? Xe(i.currentTarget, a) : i.key === "ArrowUp" && Je(i.currentTarget, r);
}, children: /* @__PURE__ */ o(
  "label",
  {
    "aria-label": t,
    className: b(
      "flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer",
      "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
      "select-none"
    ),
    children: [
      /* @__PURE__ */ e(
        V,
        {
          hideLabel: !0,
          label: t,
          onClick: () => n(),
          icon: Ka,
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("div", { className: "flex flex-1 flex-row items-center gap-2 break-all", children: /* @__PURE__ */ e("span", { className: b("line-clamp-1"), children: t }) }) })
    ]
  }
) }), Oe = ({ primaryAction: t, secondaryActions: n }) => {
  if (!n || n.length === 0)
    return /* @__PURE__ */ e(
      V,
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
    qa,
    {
      items: r,
      value: t.label,
      disabled: i,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, ai = ({
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
  let g, p, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: r || l
  } : void 0, w = f ? {
    label: a || "",
    onClick: f,
    variant: "ghost",
    disabled: r || !i
  } : void 0;
  return v || (v = w, w = void 0), m && u ? (g = /* @__PURE__ */ e(
    Oe,
    {
      primaryAction: v,
      secondaryActions: w ? [w] : []
    }
  ), p = /* @__PURE__ */ e(
    Oe,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  )) : m ? g = /* @__PURE__ */ e(
    Oe,
    {
      primaryAction: t[0],
      secondaryActions: t.slice(1)
    }
  ) : u && (g = /* @__PURE__ */ e(Oe, { primaryAction: v, secondaryActions: [] }), w && (p = /* @__PURE__ */ e(Oe, { primaryAction: w, secondaryActions: [] }))), /* @__PURE__ */ e("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    p
  ] }) });
}, ri = ({
  search: t,
  onSearch: n,
  searchPlaceholder: a,
  disabled: r = !1,
  goToFirst: l,
  goToLast: i
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ e(W, { icon: yl, size: "md" }),
  /* @__PURE__ */ e(
    "input",
    {
      disabled: r,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Je(c.currentTarget, i)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
      icon: Ya,
      size: "md",
      onClick: () => n(""),
      className: "cursor-pointer text-f1-icon-secondary"
    }
  )
] }), nt = 384, at = 36, li = 37, Ut = 1, Gt = 200, Kt = '[data-avatarname-navigator-element="true"]', ii = ({
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
  onGroupChange: g,
  onToggleExpand: p,
  searchPlaceholder: v,
  selectAllLabel: w,
  clearLabel: k,
  notFoundTitle: P,
  notFoundSubtitle: z,
  className: _,
  actions: E,
  onCreate: A,
  onCreateLabel: j,
  singleSelector: T = !1,
  loading: y = !1,
  disabled: I = !1,
  hiddenAvatar: S = !1
}) => {
  const N = se.useRef(null), B = q(
    () => t ? n.reduce(
      (L, Z) => L + (Z.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, t]
  ), x = Q(() => {
    setTimeout(() => {
      N.current?.scrollTo({ top: 0 });
    }, Ut), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Kt)
      )[0]?.focus();
    }, Gt);
  }, []), C = Q(() => {
    setTimeout(() => {
      N.current?.scrollTo({ top: N.current?.scrollHeight });
    }, Ut), setTimeout(() => {
      const L = Array.from(
        document.querySelectorAll(Kt)
      );
      L[L.length - 1]?.focus();
    }, Gt);
  }, []), F = q(
    () => new Map(h.map((L) => [L.id, L])),
    [h]
  ), U = Q(
    (L) => {
      const Z = F.get(L.id);
      if (!t)
        return {
          selected: !!Z,
          partialSelected: !!Z
        };
      const J = (L.subItems ?? []).filter(
        (te) => Z?.subItems?.some(
          (fe) => fe.subId === te.subId
        )
      ), X = (L.subItems?.length ?? 0) === J.length, de = !X && J.length > 0;
      return { selected: X, partialSelected: de };
    },
    [t, F]
  ), ae = Q(
    (L) => {
      if (L.index === 0 && A)
        return /* @__PURE__ */ e(
          Ht,
          {
            label: j ?? "",
            onCreate: () => A?.(l),
            goToFirst: x,
            goToLast: C
          }
        );
      const Z = A ? L.index - 1 : L.index, J = n[Z], { selected: X, partialSelected: de } = U(J);
      return /* @__PURE__ */ e(
        Re,
        {
          expanded: J.expanded ?? !1,
          onExpand: () => p(J, !0),
          search: l,
          groupView: t,
          entity: J,
          onSelect: i,
          onRemove: s,
          selected: X,
          partialSelected: de,
          showGroupIcon: si(a, r),
          singleSelector: T,
          goToFirst: x,
          goToLast: C,
          disabled: I,
          hiddenAvatar: S
        },
        J.id
      );
    },
    [
      A,
      j,
      I,
      n,
      U,
      x,
      C,
      t,
      a,
      S,
      s,
      i,
      p,
      l,
      r,
      T
    ]
  ), ie = q(() => t ? n.flatMap((L) => {
    const Z = ze(
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
          expanded: L.expanded ?? Z?.expanded ?? !1,
          subItems: L.subItems,
          subSearchKeys: L.searchKeys
        }
      },
      ...(L.subItems ?? []).map((J) => ({
        parent: {
          ...L,
          expanded: L.expanded ?? Z?.expanded ?? !1
        },
        subItem: J
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
  })), [t, n, h]), R = Q(
    (L) => {
      if (L.index === 0 && A)
        return /* @__PURE__ */ e(
          Ht,
          {
            label: j ?? "",
            onCreate: () => A?.(l),
            goToFirst: x,
            goToLast: C
          }
        );
      const Z = A ? L.index - 1 : L.index, J = ie[Z].parent, X = ie[Z].subItem;
      if (!J) {
        const te = {
          id: X.subId,
          name: X.subName,
          avatar: X.subAvatar,
          subItems: X.subItems,
          expanded: X.expanded,
          searchKeys: X.subSearchKeys
        }, fe = ze(
          h,
          te.id
        ), he = (te?.subItems ?? []).filter(
          (Ee) => fe?.subItems?.some(
            (fa) => fa.subId === Ee.subId
          )
        ), De = (te.subItems?.length ?? 0) === he.length, ua = !De && he.length > 0;
        return /* @__PURE__ */ e(
          Re,
          {
            groupView: !0,
            expanded: te.expanded ?? !1,
            onExpand: (Ee) => p(te, Ee),
            search: l,
            entity: te,
            onSelect: i,
            onRemove: s,
            selected: De,
            partialSelected: ua,
            showGroupIcon: a.find((Ee) => Ee.value === r)?.groupType === "team",
            singleSelector: T,
            goToFirst: x,
            goToLast: C,
            hideLine: Z === ie.length - 1,
            disabled: I,
            hiddenAvatar: S
          }
        );
      }
      let de = !!ze(h, X.subId);
      if (!de) {
        const te = ze(
          h,
          J.id
        );
        de = !!(J?.subItems ?? []).filter(
          (he) => te?.subItems?.some(
            (De) => De.subId === he.subId
          )
        ).find((he) => he.subId === X.subId);
      }
      return /* @__PURE__ */ e(
        Re,
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
            d(J, X);
          },
          onRemove: () => c(J, X),
          selected: !!de,
          partialSelected: !1,
          singleSelector: T,
          goToFirst: x,
          goToLast: C,
          isChild: !0,
          hiddenAvatar: S
        }
      );
    },
    [
      ie,
      h,
      l,
      T,
      x,
      C,
      i,
      s,
      a,
      I,
      p,
      r,
      d,
      c,
      S,
      A,
      j
    ]
  ), [Ae, tt] = q(() => {
    if (!n.length)
      return [!1, !1];
    let L = 0, Z = 0;
    if (!t)
      L = n.length, Z = n.reduce(
        (de, { id: te }) => de + (F.has(te) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...F.values()].flatMap(
          (te) => te.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((te) => {
        const fe = te.subItems ?? [];
        L += fe.length, Z += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const J = L > 0 && Z === L, X = Z > 0;
    return [J, X];
  }, [n, F, t]), Le = ie.length, oa = !T && (w || k), ca = E && E.length > 0, da = !y && (!T && oa || ca);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        T || y ? "rounded-r-xl" : "",
        _
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              T || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                ri,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: x,
                  goToLast: C
                }
              ) }),
              a && a.length > 1 && /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
                Me,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
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
              da ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              y && /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ e(fn, {}) }),
              !y && !B && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: nt
                  },
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-lg font-medium", children: P }),
                    /* @__PURE__ */ e("span", { className: "text-center text-f1-foreground-secondary", children: z })
                  ]
                }
              ),
              !y && (!!B || A) && /* @__PURE__ */ e("div", { className: "h-full", children: t ? /* @__PURE__ */ e(
                mt,
                {
                  height: nt,
                  itemCount: Le + (A ? 1 : 0),
                  itemSize: (L) => {
                    if (L === 0 && A) return at;
                    const Z = A ? L - 1 : L;
                    return ie[Z]?.parent === null ? li : at;
                  },
                  renderer: R,
                  ref: N
                }
              ) : /* @__PURE__ */ e(
                mt,
                {
                  height: nt,
                  itemCount: n.length + (A ? 1 : 0),
                  itemSize: at,
                  renderer: ae,
                  ref: N
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          ai,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: T,
            totalFilteredEntities: B,
            allVisibleSelected: Ae,
            anyVisibleSelected: tt,
            selectAllLabel: w,
            clearLabel: k,
            disabled: I,
            actions: E
          }
        )
      ]
    }
  );
}, ze = (t, n) => t.find((a) => a.id === n), si = (t, n) => t.find((a) => a.value === n)?.groupType === "team", oi = ({
  entity: t,
  onRemove: n,
  disabled: a = !1,
  deactivated: r = !1,
  hiddenAvatar: l = !1
}) => /* @__PURE__ */ e("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ e(
  Za,
  {
    className: b(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      l ? "pl-2" : "pl-0"
    ),
    left: !l && /* @__PURE__ */ e(
      bn,
      {
        src: t.subAvatar,
        name: t.subName,
        size: "xs",
        type: "rounded",
        icon: r ? { icon: Xa, color: "secondary" } : void 0
      }
    ),
    right: !a && /* @__PURE__ */ e(
      W,
      {
        icon: Ie,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => n?.(t)
      }
    ),
    text: t.subName,
    deactivated: r
  }
) }), ci = ({
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
      mt,
      {
        height: 425,
        itemCount: d,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (f) => {
          const u = c[f.index];
          return u ? /* @__PURE__ */ e(
            oi,
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
          ) : /* @__PURE__ */ e(K, {});
        }
      }
    ) })
  ] });
}, di = 500, qt = 520, Yt = 210, Zt = ({
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
  const g = (i ?? qt) < di, p = !c && !s && !g, v = i ?? qt, w = p ? v - Yt : v;
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
            style: { width: w + 1 + "px" },
            children: /* @__PURE__ */ e(
              ii,
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
        p && /* @__PURE__ */ e(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Yt + "px"
            },
            children: /* @__PURE__ */ e(
              ci,
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
}, ui = ({
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
  maxLength: g,
  loading: p = !1,
  required: v = !1,
  readonly: w = !1,
  append: k,
  size: P = "sm",
  open: z
}) => {
  const _ = q(
    () => a.some(
      (T) => T.subItems && T.subItems.length > 0
    ),
    [a]
  ), E = q(() => _ ? a.flatMap(
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
  })), [_, a]), A = E.length === 0 ? void 0 : E.length === 1 ? E[0].subItem.subName : E.length + " " + n, j = E.length === 1 ? E[0].subItem.subName : void 0;
  return /* @__PURE__ */ e(
    Ja,
    {
      onClickContent: m,
      role: "combobox",
      label: i,
      labelIcon: s,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: c && !A ? c : void 0,
      error: d,
      status: f,
      hint: u,
      hideLabel: h,
      maxLength: g,
      clearable: !1,
      value: A,
      disabled: r,
      loading: p,
      required: v,
      readonly: w,
      size: P,
      avatar: l || !j ? void 0 : {
        type: "person",
        firstName: j,
        lastName: "",
        src: E[0].subItem.subAvatar,
        deactivated: E[0].subItem.subDeactivated
      },
      append: k ?? /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(Qa, { open: z, disabled: r, size: P }) }),
      children: /* @__PURE__ */ e(
        "span",
        {
          role: "button",
          className: b(
            "my-auto flex items-center pr-1",
            t && "text-f1-foreground-secondary",
            A && "text-f1-foreground",
            E.length === 1 && !l || c && !A ? "pl-8" : "pl-2"
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
}, Jo = (t) => {
  const [n, a] = O(
    (t.alwaysOpen || t.defaultOpen) ?? !1
  ), r = (y) => {
    a(y), t.onOpenChange?.(y);
  };
  $(() => {
    t.defaultOpen && n && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [l, i] = O(t.entities), [s, c] = O(""), [d, f] = er("", 300), u = q(
    () => t.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [t.entities]
  ), m = Se(tr), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function p(y) {
    if (t.singleSelector) {
      t.onSelect(y), a(!1);
      return;
    }
    const I = t.selectedEntities ?? [], S = l.find((F) => F.id === y.id);
    if (!S)
      return;
    const N = new Set(
      (S.subItems ?? []).map((F) => F.subId)
    ), B = /* @__PURE__ */ new Set([S.id]);
    l.forEach((F) => {
      F.id !== S.id && (F.subItems ?? []).some(
        (ae) => N.has(ae.subId)
      ) && B.add(F.id);
    });
    const x = [...I];
    function C(F) {
      const U = x.findIndex((ae) => ae.id === F.id);
      U >= 0 ? x[U] = F : x.push(F);
    }
    B.forEach((F) => {
      const U = l.find((R) => R.id === F);
      if (!U) return;
      const ae = U.subItems?.filter(
        (R) => N.has(R.subId)
      ) ?? [], ie = x.findIndex((R) => R.id === F);
      if (ie >= 0) {
        const R = x[ie].subItems ?? [], Ae = new Set(R.map((Le) => Le.subId)), tt = [
          ...R,
          ...ae.filter((Le) => !Ae.has(Le.subId))
        ];
        C({
          ...U,
          subItems: tt
        });
      } else
        C({
          ...U,
          subItems: ae
        });
    }), t.onSelect(x);
  }
  function v(y, I) {
    if (t.singleSelector)
      t.onSelect({ ...y, subItems: [{ ...I }] }), a(!1);
    else {
      const S = t.selectedEntities ?? [], N = new Set(S.map((C) => C.id)), B = new Map(
        S.map((C) => [C.id, C.subItems ?? []])
      );
      N.add(y.id), t.entities.forEach((C) => {
        C.subItems?.some(
          (U) => U.subId === I.subId
        ) && N.add(C.id);
      });
      const x = [];
      t.entities.forEach((C) => {
        if (N.has(C.id)) {
          let U = [...B.get(C.id) ?? []];
          C.subItems?.some(
            (R) => R.subId === I.subId
          ) && (U.some(
            (Ae) => Ae.subId === I.subId
          ) || U.push(I));
          const ie = new Set(
            (C.subItems ?? []).map((R) => R.subId)
          );
          U = U.filter(
            (R) => ie.has(R.subId)
          ), x.push({
            ...C,
            subItems: U
          });
        }
      }), t.onSelect(x);
    }
  }
  function w(y) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let I = [];
    const S = t.selectedEntities ?? [];
    if (u) {
      const N = l.find(
        (x) => x.id === y.id
      );
      if (!N)
        return;
      const B = new Set(
        (N.subItems ?? []).map((x) => x.subId)
      );
      for (const x of S) {
        const C = (x.subItems ?? []).filter(
          (F) => !B.has(F.subId)
        );
        C.length > 0 && I.push({
          ...x,
          subItems: C
        });
      }
    } else
      I = (S ?? []).filter((N) => N.id !== y.id);
    t.onSelect(I);
  }
  function k(y, I) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const S = t.selectedEntities ?? [], N = I.subId, B = [];
    for (const x of S) {
      const C = x.subItems?.filter((F) => F.subId !== N) ?? [];
      C.length > 0 && B.push({
        ...x,
        subItems: C
      });
    }
    t.onSelect(B);
  }
  function P() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const y = t.selectedEntities ?? [];
    let I = [];
    if (u) {
      const S = new Set(
        l.flatMap(
          (N) => (N.subItems ?? []).map((B) => B.subId)
        )
      );
      for (const N of y) {
        const B = (N.subItems ?? []).filter(
          (x) => !S.has(x.subId)
        );
        B.length > 0 && I.push({
          ...N,
          subItems: B
        });
      }
    } else {
      const S = new Set(
        l.map((N) => N.id)
      );
      I = (y ?? []).filter((N) => !S.has(N.id));
    }
    t.onSelect(I);
  }
  function z() {
    const y = [...t.selectedEntities ?? []];
    l.forEach((I) => {
      const S = y.find((N) => N.id === I.id);
      if (!S)
        y.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const N = Array.from(
          /* @__PURE__ */ new Set([
            ...S.subItems ?? [],
            ...I.subItems ?? []
          ])
        );
        S.subItems = N;
      }
    }), t.singleSelector || t.onSelect(y);
  }
  const _ = (y) => {
    c(y), f(y);
  }, E = (y, I) => {
    t.onItemExpandedChange(y.id, I), i(
      l.map(
        (S) => S.id === y.id ? { ...S, expanded: !y.expanded } : S
      )
    );
  };
  $(() => {
    if (!d) {
      i(t.entities);
      return;
    }
    if (u && !t.applySearchToGroup) {
      const I = t.entities.map((S) => {
        const N = fi(S, d), B = S.subItems?.map((x) => ({
          ...x,
          score: Ve(
            d,
            x.subSearchKeys ?? [x.subName]
          )
        })).filter((x) => x.score < 1 / 0).sort((x, C) => x.score - C.score);
        return {
          ...S,
          score: N,
          expanded: S.expanded ?? (B?.length ?? 0) > 0,
          subItems: B
        };
      }).filter((S) => S.score < 1 / 0).sort((S, N) => S.score - N.score);
      i(I);
    } else {
      const y = t.entities.map((I) => {
        const S = Ve(
          d,
          I.searchKeys ?? [I.name]
        );
        return { ...I, score: S };
      }).filter((I) => I.score < 1 / 0).sort((I, S) => I.score - S.score);
      i(y);
    }
  }, [
    d,
    t.entities,
    t.applySearchToGroup,
    u,
    i
  ]);
  const A = M(null), [j, T] = O(0);
  return En(() => {
    const y = () => {
      A.current && T(A.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), t.alwaysOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: A,
      className: b(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        t.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ e(
        Zt,
        {
          groupView: u,
          entities: l,
          groups: t.groups,
          onGroupChange: t.onGroupChange,
          selectedGroup: t.selectedGroup,
          onSelect: p,
          onRemove: w,
          onSubItemRemove: k,
          onSubItemSelect: v,
          onClear: P,
          onSelectAll: z,
          selectedEntities: t.selectedEntities ?? [],
          search: s,
          onSearch: _,
          onToggleExpand: E,
          searchPlaceholder: t.searchPlaceholder,
          selectAllLabel: t.selectAllLabel,
          clearLabel: t.clearLabel,
          selectedLabel: t.selectedLabel,
          singleSelector: t.singleSelector,
          loading: t.loading,
          notFoundTitle: t.notFoundTitle,
          notFoundSubtitle: t.notFoundSubtitle,
          width: t.width ?? j - 2,
          disabled: t.disabled,
          hiddenAvatar: t.hiddenAvatar,
          onCreate: t.onCreate,
          onCreateLabel: t.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ o(nr, { ...t, onOpenChange: r, open: n, children: [
    /* @__PURE__ */ e(
      ar,
      {
        className: "w-full",
        disabled: t.disabled,
        "aria-label": t.label || t.placeholder,
        children: t.children ? t.children : /* @__PURE__ */ e(
          ui,
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
      rr,
      {
        container: g,
        className: b(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ e(
          Zt,
          {
            groupView: u,
            entities: l,
            groups: t.groups,
            onGroupChange: t.onGroupChange,
            selectedGroup: t.selectedGroup,
            onSelect: p,
            onRemove: w,
            onSubItemRemove: k,
            onSubItemSelect: v,
            onClear: P,
            onSelectAll: z,
            selectedEntities: t.selectedEntities ?? [],
            search: s,
            onSearch: _,
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
function ht(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Xt(t) {
  return ht(t).split(/\s+/).filter((n) => n.length > 0);
}
function Ve(t = "", n) {
  const a = Xt(t);
  if (a.length === 0)
    return 1 / 0;
  for (const r of n) {
    const l = ht(r), i = Xt(r), s = ht(t);
    if (l.includes(s) || a.every(
      (d) => i.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function fi(t, n) {
  const a = Ve(n, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((l, i) => {
    const s = Ve(
      n,
      i.subSearchKeys ?? [i.subName]
    );
    return Math.min(l, s);
  }, 1 / 0)), Math.min(a, r);
}
const mi = ({
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
  const { ref: f } = ot({
    threshold: 0.1,
    onChange(h) {
      h && d?.(t);
    }
  }), u = xn(n, {
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
        /* @__PURE__ */ e(ct, { icon: l ?? vn }),
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
}, hi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(D, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(D, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(D, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Ft = Y(
  "ActivityItem",
  ee(mi, hi)
), Gn = ({
  title: t,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ e("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ e("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: t }) }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: n })
] }), gi = ({
  title: t,
  items: n,
  onClickItem: a,
  onItemVisible: r
}) => /* @__PURE__ */ e(Gn, { title: t, children: n.map((l) => /* @__PURE__ */ e(
  Ft,
  {
    ...l,
    onClick: () => a(l.id),
    onVisible: r
  },
  l.id
)) }), pi = ({
  title: t,
  numItems: n
}) => /* @__PURE__ */ e(Gn, { title: t, children: Array.from({ length: n }).map((a, r) => /* @__PURE__ */ e(Ft.Skeleton, {}, r)) }), Be = ee(gi, pi), bi = 3, xi = ["today", "yesterday", "lastWeek", "lastMonth"], vi = (t) => sr(t, ([n]) => {
  const a = xi.indexOf(n);
  return a === -1 ? -Number(n) : a - 4e3;
}), gt = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), yi = ({
  items: t,
  loadingMoreItems: n = !1,
  onClickItem: a,
  onEndReached: r,
  onEndReachedItemsThreshold: l = 5
}) => {
  const i = re(), s = lr(t, "createdAt"), c = Object.values(s).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = ir((u) => {
    c.includes(u) && r?.();
  }, 1e3), f = vi(
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
      h !== f.length - 1 && /* @__PURE__ */ e(gt, {})
    ] }, u)),
    n && new Array(bi).fill(null).map((u, m) => /* @__PURE__ */ e(Ft.Skeleton, {}, m))
  ] });
}, wi = () => {
  const t = re();
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(Be.Skeleton, { title: t.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(gt, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(gt, {}),
    /* @__PURE__ */ e(
      Be.Skeleton,
      {
        title: t.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, Qo = Y(
  "ActivityItemList",
  ee(yi, wi)
), Ni = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, Ci = {
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
function ki({
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
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        a ? "" : Ci[or(
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
                pe,
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
              className: b(
                "absolute -right-0.5",
                a ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ e(
                Dn,
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
function Ii(t) {
  const n = M(null), a = M(), r = Q(() => {
    const i = n.current;
    if (!i) return;
    const s = cr.create(i, {
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
const Si = ({
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
  const [m, h] = O(s), g = M(null);
  $(() => {
    h(s);
  }, [s]);
  const p = (_) => {
    h(_), c?.(_);
  }, v = Ke(), { canvasRef: w, handleMouseEnter: k, handleMouseLeave: P } = Ii(v), z = qe({
    emoji: Ni[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    ye,
    {
      href: t,
      onClick: l,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        le()
      ),
      onMouseEnter: v ? void 0 : k,
      onMouseLeave: v ? void 0 : P,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: w,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          ki,
          {
            firstName: n,
            lastName: a,
            src: r,
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
              a
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ e("span", { className: "truncate", children: f }),
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: z })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(dt, { date: u }) })
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
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(D, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(D, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(D, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), ec = ee(Si, Fi), tc = ({
  title: t,
  subtitle: n,
  buttonLabel: a,
  onClick: r
}) => /* @__PURE__ */ o("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ o("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(yn, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: t }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(V, { label: a, variant: "outline", onClick: r }) })
] });
function Ai({
  emoji: t,
  initialCount: n,
  hasReacted: a = !1,
  users: r,
  onInteraction: l
}) {
  const [i, s] = O(a), [c, d] = O(n), f = M(null), { fireEmojiConfetti: u } = dr(), m = (p, v) => {
    p.stopPropagation(), d(c + (i ? -1 : 1)), s(!i), l?.(v), i || u(v, f);
  }, h = r?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ e(
    vt,
    {
      ref: f,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (p) => {
        m(p, t);
      },
      className: b(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        i && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": ur(t),
      prepend: /* @__PURE__ */ e(qe, { emoji: t, size: "md" }),
      children: /* @__PURE__ */ e(
        fr,
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
  return h ? /* @__PURE__ */ e(xe, { label: h, children: g }) : g;
}
function Li({ items: t, onInteraction: n, locale: a, action: r }) {
  return /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2", children: [
    r && /* @__PURE__ */ e(
      V,
      {
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        variant: "outline",
        hideLabel: !0
      }
    ),
    /* @__PURE__ */ e(Dn, { onSelect: n, locale: a }),
    t.map((l) => /* @__PURE__ */ e(
      Ai,
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
const Ei = Y("Reactions", Li), Kn = H(function({ content: n, collapsed: a, id: r, className: l, tabIndex: i }, s) {
  return /* @__PURE__ */ e(
    mr,
    {
      ref: s,
      id: r,
      content: n,
      tabIndex: i,
      className: b(
        "FactorialOneTextEditor",
        a && "line-clamp-5 break-words",
        l
      )
    }
  );
});
Kn.displayName = "BasePostDescription";
const Oi = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ e(D, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ e(D, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), qn = ee(
  Kn,
  Oi
), Jt = ({ tags: t, right: n }) => /* @__PURE__ */ e(
  "div",
  {
    className: b(
      "flex flex-1 flex-row items-center gap-1.5",
      n && "justify-end"
    ),
    children: t.map((a) => {
      const r = /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        _e,
        {
          icon: a.icon,
          text: a.label ?? (a.description || ""),
          onlyIcon: !0,
          additionalAccessibleText: `${a.label}: ${a.description}`
        }
      ) });
      return a.label || a.description ? /* @__PURE__ */ e(
        xe,
        {
          label: a.label,
          description: a.description,
          children: r
        },
        a.label ?? a.description
      ) : r;
    })
  }
), pt = H(
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
          !m && /* @__PURE__ */ o(K, { children: [
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
                f && /* @__PURE__ */ o(K, { children: [
                  /* @__PURE__ */ e(dt, { date: f }),
                  /* @__PURE__ */ e(
                    W,
                    {
                      icon: cn,
                      size: "sm",
                      className: "text-f1-foreground-tertiary"
                    }
                  )
                ] }),
                u && /* @__PURE__ */ e(dt, { date: u })
              ] })
            ] }),
            (c || d) && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between", children: [
              c && /* @__PURE__ */ e(Jt, { tags: c }),
              d && /* @__PURE__ */ e(Jt, { tags: d, right: !0 })
            ] })
          ] })
        ]
      }
    );
  }
), _i = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), Yn = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const a = (t?.split(".")).at(-1);
  return !!a && _i.has(a);
}, Di = ({
  title: t,
  mediaUrl: n,
  place: a,
  date: r
}) => {
  let l = hr(r);
  const i = (s) => {
    s.stopPropagation();
  };
  return a && (l = `${l} · ${a}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: Yn(n) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
        children: /* @__PURE__ */ e("source", { src: n })
      }
    ) : /* @__PURE__ */ o(K, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: n,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(D, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      pt,
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
}, Pi = () => /* @__PURE__ */ o(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(D, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ o("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(D, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ o("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(D, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(D, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), Zn = ee(Di, Pi), Ti = ({
  describedBy: t,
  controls: n,
  expanded: a,
  onClick: r
}) => {
  const l = re();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        le()
      ),
      "aria-controls": n,
      "aria-describedby": t,
      "aria-expanded": a,
      onClick: r,
      children: l.actions.seeMore
    }
  ) });
}, zi = ({
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
  actions: g,
  dropdownItems: p,
  noReactionsButton: v = !1,
  descriptionExpandable: w = !1
}) => {
  const k = ft(), P = ft(), z = M(null), [_, E] = O(null), [A, j] = O(!1), T = [f.views, f.comments].filter(Boolean).join(" · "), y = w && _?.id === t && _.description === i, I = !y, S = xn(r), N = () => {
    s(t);
  }, B = (F) => {
    F.stopPropagation();
  }, x = n ? `${n.firstName} ${n.lastName}` : void 0, C = (F) => {
    F.preventDefault(), F.stopPropagation(), i && E({ id: t, description: i });
  };
  return $(() => {
    y && z.current?.focus();
  }, [y]), $(() => {
    w || E(null);
  }, [w]), $(() => {
    const F = z.current;
    if (!w || !F || y) {
      j(!1);
      return;
    }
    const U = () => {
      j(
        F.scrollHeight > F.clientHeight
      );
    };
    if (U(), typeof ResizeObserver > "u") return;
    const ae = new ResizeObserver(U);
    return ae.observe(F), () => ae.disconnect();
  }, [w, y, i]), /* @__PURE__ */ o(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: N,
      id: `community-post-${t}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: n ? /* @__PURE__ */ e(
          Te,
          {
            href: n.url || "#",
            title: x,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              pe,
              {
                firstName: n.firstName,
                lastName: n.lastName,
                src: n.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(ct, { icon: Ot }) }),
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                n ? /* @__PURE__ */ o(K, { children: [
                  /* @__PURE__ */ e(
                    Te,
                    {
                      href: n.url,
                      className: "block md:hidden",
                      title: x,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        pe,
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
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(ct, { icon: Ot, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: b(
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
                  g?.map((F) => /* @__PURE__ */ e(
                    V,
                    {
                      hideLabel: !F.label,
                      ...F.icon && { icon: F.icon },
                      variant: "outline",
                      size: "md",
                      onClick: F.onClick,
                      label: F.label ?? "",
                      title: F.label ?? ""
                    },
                    F.label
                  )),
                  p?.length && /* @__PURE__ */ e(
                    Ce,
                    {
                      items: p,
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
                        label: h.label,
                        onClick: h.onClick
                      },
                      ...p ?? []
                    ],
                    icon: ut,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: S }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: k,
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              i && /* @__PURE__ */ o(K, { children: [
                /* @__PURE__ */ e(
                  qn,
                  {
                    ref: z,
                    id: P,
                    content: i,
                    collapsed: I,
                    tabIndex: y ? -1 : void 0,
                    className: b(y && le())
                  }
                ),
                w && A && !y && /* @__PURE__ */ e(
                  Ti,
                  {
                    describedBy: k,
                    controls: P,
                    expanded: y,
                    onClick: C
                  }
                )
              ] })
            ] })
          ] }),
          c && !d && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: Yn(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: B,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ o(K, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(D, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          d && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(Zn, { ...d }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: T }),
          !v && /* @__PURE__ */ e(
            Ei,
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
}, Ri = ({
  withEvent: t,
  withImage: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(D, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ o("div", { className: "w-full", children: [
    /* @__PURE__ */ o("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(D, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(D, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(qn.Skeleton, {}) }),
    n && !t && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(D, { className: "h-full w-full rounded-2xs" }) }),
    t && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(Zn.Skeleton, {}) }),
    /* @__PURE__ */ o("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(D, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), nc = ee(
  zi,
  Ri
), Xn = se.forwardRef(({ person: t, onClick: n, ...a }, r) => {
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
            a.info && /* @__PURE__ */ e(xe, { label: a.info, children: /* @__PURE__ */ e(
              W,
              {
                icon: hn,
                size: "sm",
                className: "text-f1-icon-secondary"
              }
            ) })
          ] }),
          "bottomTags" in a && /* @__PURE__ */ e("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: a.bottomTags.map((i, s) => /* @__PURE__ */ o(K, { children: [
            /* @__PURE__ */ e(_e, { ...i }, i.text),
            s < a.bottomTags.length - 1 && /* @__PURE__ */ e("span", { children: "·" })
          ] })) }),
          "description" in a && a.description && /* @__PURE__ */ e("p", { className: "truncate text-f1-foreground-secondary", children: a.description })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
          "rightTag" in a && a.rightTag && /* @__PURE__ */ e(br, { ...a.rightTag }),
          "actions" in a && /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-center justify-end gap-2", children: [
            a.actions?.primary && /* @__PURE__ */ e(
              V,
              {
                variant: "outline",
                onClick: a.actions.primary.onClick,
                label: a.actions.primary.label,
                icon: a.actions.primary.icon
              }
            ),
            a.actions?.secondary && /* @__PURE__ */ e(
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
}), Bi = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ e(D, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e(D, { className: "h-4" }),
    /* @__PURE__ */ e(D, { className: "h-4" })
  ] })
] });
Xn.displayName = "OnePersonListItem";
const ac = ne(
  Y(
    "OnePersonListItem",
    ee(Xn, Bi)
  )
), $i = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function Wi({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  return /* @__PURE__ */ e(El, { children: /* @__PURE__ */ e(
    Mi,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
function Mi({
  children: t,
  sidebar: n,
  banner: a,
  ai: r,
  aiPromotion: l
}) {
  const i = r?.enabled ? xr : l?.enabled ? Yl : Jr, s = r?.enabled ? r : l?.enabled ? l : void 0;
  return /* @__PURE__ */ e(i, { ...s, children: /* @__PURE__ */ e(
    Ui,
    {
      ai: r,
      aiPromotion: l,
      sidebar: n,
      banner: a,
      children: t
    }
  ) });
}
const rc = Y(
  "ApplicationFrame",
  Wi
), ji = ({ contentId: t }) => {
  const n = re();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: le(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Vi(t, n, a) {
  return !n && t ? a === "hidden" : n && !t ? a !== "hidden" : !1;
}
function Hi(t, n) {
  const { sidebarState: a, toggleSidebar: r } = Fe(), l = M(t);
  $(() => {
    n && Vi(
      t,
      l.current,
      a
    ) && r({ isInvokedByUser: !1 }), l.current = t;
  }, [t, n, a, r]);
}
function Ui({
  ai: t,
  aiPromotion: n,
  children: a,
  sidebar: r,
  banner: l
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: c, setForceFloat: d } = Fe(), f = Ke(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: g,
    closeCanvas: p,
    chatWidth: v,
    resizable: w
  } = vr(), k = m === "fullscreen", P = m === "canvas", { open: z } = Ze(), _ = w ? v : yr, E = M(k), A = k && !E.current, j = !k && E.current, [
    T,
    y
  ] = O(!1);
  $(() => {
    !k && E.current && y(!0), E.current = k;
  }, [k]);
  const I = k || T || j, S = q(() => A ? { duration: 0.15, ease: "easeOut" } : j ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [A, j]), N = st(
    `(max-width: ${$e.xl}px)`,
    { initializeWithValue: !0 }
  ), B = st(`(max-width: ${$e.md}px)`, {
    initializeWithValue: !0
  });
  return $(() => {
    d(u);
  }, [u, d]), $(() => {
    d(z);
  }, [z, d]), Hi(u, N), /* @__PURE__ */ e(
    nl,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ e(wn, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(ke, { children: i === "unlocked" && /* @__PURE__ */ e(
            G.nav,
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
              ref: (x) => {
                i === "hidden" ? x?.setAttribute("inert", "") : x?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(ji, { contentId: "content" }),
                r
              ]
            }
          ),
          /* @__PURE__ */ o(
            G.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !B ? _ : 0
              },
              transition: { paddingRight: $i },
              children: [
                /* @__PURE__ */ e(
                  G.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      I ? "overflow-hidden" : "overflow-auto",
                      !u && !z && "xs:pr-1",
                      i === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: i,
                    children: /* @__PURE__ */ e(
                      G.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          I ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: a
                      }
                    )
                  }
                ),
                t?.enabled && P && h && /* @__PURE__ */ e(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      B ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: B ? void 0 : { right: _ },
                    children: /* @__PURE__ */ e(
                      wr,
                      {
                        content: h,
                        onClose: p,
                        entities: g
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  G.div,
                  {
                    className: b(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      B ? "fixed inset-0 z-[30]" : b(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        I || P ? "z-20" : "z-0",
                        i === "hidden" && I ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: B || k ? "100%" : _
                    },
                    transition: S,
                    onAnimationComplete: () => {
                      T && y(!1);
                    },
                    children: /* @__PURE__ */ e(Nr, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ e(ql, {})
        ] }) })
      ] })
    }
  );
}
const Jn = ({
  firstName: t,
  lastName: n,
  src: a,
  "aria-label": r,
  "aria-labelledby": l,
  pulse: i,
  onPulseClick: s
}) => {
  const c = re(), [d, f] = O(!i);
  return /* @__PURE__ */ e("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ e(ke, { mode: "popLayout", initial: !!d, children: d ? /* @__PURE__ */ e(
    G.div,
    {
      className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: /* @__PURE__ */ e(
        G.div,
        {
          initial: { opacity: 0, originX: 0.6, originY: 0.6 },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: { opacity: 0, scale: 0 },
          transition: {
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => f(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: /* @__PURE__ */ e(qe, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ o(
    G.div,
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      className: "relative h-10 w-10",
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: [
        /* @__PURE__ */ e(
          bn,
          {
            type: "rounded",
            name: [t, n],
            src: a,
            size: "lg",
            color: "random",
            "aria-label": r,
            "aria-labelledby": l
          }
        ),
        i ? /* @__PURE__ */ e("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ e(
          vt,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), s();
            },
            "aria-label": c.actions.edit,
            children: /* @__PURE__ */ e(
              W,
              {
                icon: rl[i],
                color: al[i],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ e(
          G.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ e(
              ge,
              {
                compact: !0,
                label: c.actions.add,
                variant: "neutral",
                size: "sm",
                icon: Cr,
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                hideLabel: !0
              }
            )
          },
          "reaction-button"
        )
      ]
    },
    "avatar"
  ) }) });
};
Jn.displayName = "PulseAvatar";
const Gi = be({
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
function Qn({
  children: t,
  header: n,
  period: a,
  embedded: r = !1
}) {
  const { sidebarState: l, toggleSidebar: i, isSmallScreen: s } = Fe();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ e("div", { className: Gi({ period: a }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (s || l === "hidden") && /* @__PURE__ */ e(
              V,
              {
                variant: "ghost",
                onClick: () => i(),
                label: "Open main menu",
                icon: dn,
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
                  n?.onPulseClick ? /* @__PURE__ */ e(
                    Jn,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ e(
                    pe,
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
                        className: b(
                          s ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ e(
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
            /* @__PURE__ */ e(un, {}),
            /* @__PURE__ */ e($n, {})
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
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
Qn.displayName = "DaytimePage";
const lc = ne(
  Y("DaytimePage", Qn)
);
function Ki(t) {
  return t.filter((n) => !!n.title).map(({ title: n, description: a, href: r, onClick: l, target: i }) => ({
    label: n,
    description: a,
    href: r,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function qi({ label: t, options: n, hasNewUpdate: a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ e(Ce, { items: Ki(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            le()
          ),
          "aria-label": t,
          children: [
            /* @__PURE__ */ e(W, { icon: Nn, size: "sm" }),
            a && /* @__PURE__ */ e("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const ic = ne(
  Y("OmniButton", qi)
);
function ea({ children: t, header: n, embedded: a = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
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
ea.displayName = "Page";
const sc = ne(Y("Page", ea));
function Yi({
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
    /* @__PURE__ */ e(D, { className: "size-6" }),
    /* @__PURE__ */ e(D, { className: "h-3 w-14" })
  ] }) : t.length + (i?.length || 0) === 1 ? /* @__PURE__ */ e("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ e(
    Qt,
    {
      company: s,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
    Zi,
    {
      companies: t,
      selected: s,
      onChange: a,
      additionalOptions: i,
      children: /* @__PURE__ */ e(
        Qt,
        {
          company: s,
          withNotification: l
        }
      )
    }
  ) });
}
const Zi = ({
  companies: t,
  selected: n,
  onChange: a,
  children: r,
  additionalOptions: l = []
}) => {
  const i = re(), [s, c] = O(!1), d = q(
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
    Me,
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
            le()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            r,
            /* @__PURE__ */ e("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ e(
              G.div,
              {
                animate: { rotate: s ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ e(W, { icon: kn, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Qt = ({
  company: t,
  withNotification: n = !1
}) => /* @__PURE__ */ o(
  "div",
  {
    className: b(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ e(
        kr,
        {
          name: t?.name?.[0],
          src: t?.logo,
          size: "sm",
          badge: n ? { icon: Cn, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ e(me, { tag: "span", children: t?.name ?? "" })
    ]
  }
);
function oc({
  user: t,
  options: n,
  showActivityButton: a = !1,
  activityButtonShortcut: r,
  onActivityButtonClick: l,
  onDropdownClick: i,
  hasActivityUpdates: s
}) {
  const c = re();
  return /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(Ce, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          le("focus-visible:ring-inset")
        ),
        onClick: i,
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
          /* @__PURE__ */ e(me, { children: `${t.firstName} ${t.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ e(xe, { label: c.notifications, shortcut: r, children: /* @__PURE__ */ o("div", { className: "relative", children: [
      /* @__PURE__ */ e(
        V,
        {
          icon: vn,
          label: c.notifications,
          onClick: l,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ e(Ir, { type: "highlight", size: "sm", icon: Cn }) })
    ] }) })
  ] });
}
function Xi({ isExpanded: t }) {
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
            className: b(
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
            className: b(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Ji() {
  const { prevSidebarState: t, sidebarState: n, toggleSidebar: a, isSmallScreen: r } = Fe(), l = M(null);
  return $(() => {
    t === "hidden" && n === "locked" && l.current?.focus();
  }, [t, n]), /* @__PURE__ */ o(
    vt,
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
        /* @__PURE__ */ e("div", { className: b("hidden", { flex: !r }), children: /* @__PURE__ */ e(Xi, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ e("div", { className: b("hidden", { flex: r }), children: /* @__PURE__ */ e(W, { icon: Ie, size: "md" }) })
      ]
    }
  );
}
function cc({
  companies: t,
  selected: n,
  onChange: a,
  withNotification: r = !1,
  additionalOptions: l,
  isLoading: i = !1
}) {
  return /* @__PURE__ */ o("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ e(
      Yi,
      {
        companies: t,
        selected: n,
        onChange: a,
        isLoading: i,
        withNotification: r,
        additionalOptions: l
      }
    ),
    /* @__PURE__ */ e(Ji, {})
  ] });
}
function Qi() {
  const [t, n] = O(!1);
  return $(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const ta = Ye(void 0);
function es({ children: t }) {
  const [n, a] = O(!1), [r, l] = O(null);
  return /* @__PURE__ */ e(
    ta.Provider,
    {
      value: { isDragging: n, setIsDragging: a, draggedItemId: r, setDraggedItemId: l },
      children: t
    }
  );
}
function At() {
  const t = Se(ta);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const ts = ({
  item: t,
  active: n
}) => /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ e(
      W,
      {
        icon: t.icon,
        size: "md",
        className: b(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ e("span", { children: t.label })
  ] }),
  t.badge && /* @__PURE__ */ e(Ge, { value: t.badge, size: "sm", type: "bold" })
] }), ns = ({ item: t }) => {
  const { isActive: n } = xt(), { label: a, icon: r, ...l } = t, i = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ e(
    ye,
    {
      ...l,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        le("focus-visible:ring-inset"),
        i ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ e(ts, { item: t, active: i })
    }
  );
}, as = ({
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
  const f = re(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = At(), { isActive: p } = xt(), v = p(t.href, { exact: t.exactMatch }), w = M(!1), [k, P] = O(!1), z = l === 0, _ = l === i - 1, E = i === 1, A = q(() => {
    const N = [];
    return !E && !z && N.push({
      label: f.actions.moveUp,
      onClick: () => s?.(l, l - 1),
      icon: Sr
    }), !E && !_ && N.push({
      label: f.actions.moveDown,
      onClick: () => s?.(l, l + 1),
      icon: Fr
    }), N.length > 0 && N.push({ type: "separator" }), N.push({
      label: f.favorites.remove,
      onClick: () => r?.(t),
      icon: Ar,
      critical: !0
    }), N;
  }, [E, z, _, f, s, l, r, t]), j = () => {
    m(!0), P(!1), g(t.href || null), w.current = !0;
  }, T = () => {
    m(!1), g(null), c(), setTimeout(() => {
      w.current = !1;
    }, 0);
  }, y = u && h === t.href, I = q(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      k && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [v, k, y, d]
  ), S = q(() => /* @__PURE__ */ o(K, { children: [
    /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ e(ls, { tooltip: n, children: /* @__PURE__ */ o(
      ye,
      {
        onClick: t.onClick,
        href: t.href,
        exactMatch: t.exactMatch,
        className: b(
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
              className: b(
                "transition-colors",
                v ? "text-f1-icon-bold" : "text-f1-icon"
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          k && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ e(
          Ce,
          {
            open: k,
            onOpenChange: P,
            items: A,
            children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ e(W, { icon: ut, size: "sm" }) })
          }
        )
      }
    )
  ] }), [t, v, k, y, A, n]);
  return d ? /* @__PURE__ */ e(
    Pn,
    {
      value: t,
      drag: "y",
      dragConstraints: a,
      dragElastic: 0.1,
      onDragStart: j,
      onDragEnd: T,
      className: I,
      whileDrag: {
        scale: 1.05
      },
      children: S
    }
  ) : /* @__PURE__ */ e("div", { className: I, children: S });
}, na = ({
  title: t,
  isOpen: n = !0,
  isRoot: a,
  onCollapse: r,
  children: l,
  isDragging: i,
  wasDragging: s
}) => {
  const [c, d] = O(n), f = Ke(), u = () => {
    if (i || s?.current) return;
    const m = !c;
    d(m), r?.(m);
  };
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o(Er, { open: c, children: [
    /* @__PURE__ */ e("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          le("focus-visible:ring-inset"),
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
            G.div,
            {
              initial: !1,
              animate: { rotate: c ? 0 : -90 },
              transition: { duration: f ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ e(
                W,
                {
                  icon: kn,
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
      G.div,
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
}, rt = ({
  category: t,
  isSortable: n = !1,
  dragConstraints: a,
  onCollapse: r,
  onDragEnd: l,
  currentOrder: i
}) => {
  const { isDragging: s, setIsDragging: c } = At(), d = M(!1), f = ll(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, i && l?.(i);
    }, 0);
  }, h = (p) => {
    !s && !d.current && r?.(t, p);
  }, g = /* @__PURE__ */ e(
    na,
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
          className: b(
            "flex flex-col gap-0.5",
            s && !d.current && "pointer-events-none"
          ),
          children: t.items.map((p, v) => /* @__PURE__ */ e(ns, { item: p }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ e(
    Pn,
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
      children: g
    }
  ) : g;
};
function dc({
  tree: t,
  onCollapse: n,
  onSort: a,
  onFavoritesChange: r,
  favorites: l
}) {
  const i = M(null), s = t.filter(
    (p) => p.isSortable === !1
  ), [c, d] = O(
    t.filter((p) => p.isSortable !== !1)
  ), [f, u] = O(0), m = Q((p) => {
    d(p);
  }, []), h = Q(
    (p) => {
      a?.(p);
    },
    [a]
  ), g = Qi();
  return /* @__PURE__ */ e(es, { children: /* @__PURE__ */ e(wn, { id: "sidebar-menu", children: /* @__PURE__ */ e(
    rs,
    {
      disableDragging: g,
      nonSortableItems: s,
      sortableItems: c,
      setSortableItems: m,
      containerRef: i,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: r,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function rs({
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
  const u = re(), { isDragging: m } = At(), h = t.some((x) => x.isRoot), g = t.filter((x) => !x.isRoot).length > 0, p = n.length > 0, v = M(null), [w, k] = O(s), P = s.length > 0;
  $(() => {
    JSON.stringify(s) !== JSON.stringify(w) && k(s);
  }, [s]);
  const z = (x) => {
    k(x);
  }, _ = Q(
    (x) => {
      const C = w.filter((F) => F.href !== x.href);
      k(C), c?.(C);
    },
    [w, c]
  ), E = Q(
    (x, C) => {
      if (C < 0 || C >= w.length) return;
      const F = [...w], [U] = F.splice(x, 1);
      F.splice(C, 0, U), k(F), c?.(F);
    },
    [w, c]
  ), [A, j] = O(!1), T = M(null);
  $(() => {
    n.length > 0 && !A && (a([...n]), j(!0));
  }, [n, a, A]), $(() => {
    const x = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", x), () => {
      window.removeEventListener("resize", x), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, n, d]);
  const y = "flex flex-col gap-0.5", I = q(
    () => w.reduce(
      (x, C, F) => (C.label in x || (x[C.label] = []), x[C.label].push(F), x),
      {}
    ),
    [w]
  ), S = q(
    () => P && w.map((x, C) => /* @__PURE__ */ e(
      as,
      {
        isSortable: !f,
        tooltip: (I[x.label] ?? []).length > 1 ? x.tooltip : void 0,
        item: x,
        dragConstraints: v,
        onRemove: _,
        index: C,
        total: w.length,
        onMove: E,
        onReorderFinish: () => {
          c?.(w);
        }
      },
      `${x.href}-${x.label}`
    )),
    [
      P,
      w,
      I,
      _,
      E,
      c,
      f
    ]
  ), N = "flex flex-col gap-3", B = q(() => n.map((x) => /* @__PURE__ */ e(
    rt,
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
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ e("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => x.isRoot).map((x, C) => /* @__PURE__ */ e(
          rt,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        P && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ e(na, { title: u.favorites.favorites, children: /* @__PURE__ */ e("div", { ref: v, children: f ? /* @__PURE__ */ e("div", { className: y, children: S }) : /* @__PURE__ */ e(
          zt,
          {
            axis: "y",
            values: w,
            onReorder: z,
            className: y,
            children: S
          }
        ) }) }) }),
        g && /* @__PURE__ */ e("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: t.filter((x) => !x.isRoot).map((x, C) => /* @__PURE__ */ e(
          rt,
          {
            category: x,
            onCollapse: l
          },
          `fixed-${C}`
        )) }),
        p && /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: r,
            children: f ? /* @__PURE__ */ e("div", { className: N, children: B }) : /* @__PURE__ */ e(
              zt,
              {
                axis: "y",
                values: n,
                onReorder: a,
                layoutScroll: !0,
                className: N,
                children: B
              }
            )
          }
        )
      ]
    }
  );
}
const ls = ({
  tooltip: t,
  children: n
}) => t ? /* @__PURE__ */ e(xe, { description: t, children: n }) : n;
function uc({
  onClick: t,
  placeholder: n,
  shortcut: a = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ e("div", { className: "px-3", children: /* @__PURE__ */ o(
    "button",
    {
      onClick: t,
      className: b(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        le()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(W, { icon: _r, size: "md" }),
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        /* @__PURE__ */ e("div", { className: "hidden xs:block", children: /* @__PURE__ */ e(Dr, { keys: a }) })
      ]
    }
  ) });
}
const en = ({ position: t }) => /* @__PURE__ */ e(
  G.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: b(
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
function is({
  header: t,
  body: n,
  footer: a,
  onFooterDropdownClick: r
}) {
  const { sidebarState: l, isSmallScreen: i } = Fe(), s = Ke(), [c, d] = ot({ threshold: 1 }), [f, u] = ot({ threshold: 1 }), m = re(), h = {
    x: {
      ease: l !== "locked" ? i ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : l !== "locked" && !i ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  }, g = () => a ? Qr(a) && r ? On(
    a,
    {
      onDropdownClick: r
    }
  ) : a : null;
  return /* @__PURE__ */ o(
    G.aside,
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
        /* @__PURE__ */ e("header", { className: "flex-shrink-0", children: t }),
        n && /* @__PURE__ */ o("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ o(Ue, { className: "h-full", children: [
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
          /* @__PURE__ */ o(ke, { children: [
            !d && /* @__PURE__ */ e(en, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ e(en, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ e("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const fc = ne(is), ss = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, tn = {
  approved: {
    icon: mn,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: Ie,
    type: "critical",
    size: "sm"
  }
}, os = {
  icon: Nn,
  type: "neutral",
  size: "sm"
}, cs = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, ds = (t) => t in tn ? tn[t] : os;
function nn(t) {
  return cs[t ?? "neutral"] ?? 0;
}
const us = ({
  title: t,
  approvalsRequired: n = 1,
  status: a,
  approvers: r
}) => {
  const l = re(), i = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), s = l.approvals.statuses[a], c = q(() => r.map((d) => {
    const f = ds(d.status);
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      src: d.avatar,
      badge: f
    };
  }).sort(
    (d, f) => nn(f.badge?.type) - nn(d.badge?.type)
  ), [r]);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: i })
      ] }),
      /* @__PURE__ */ e(We, { text: s, variant: ss[a] })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(In, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, fs = ({ steps: t }) => {
  const a = re().approvals.history, r = t.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ e("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: a }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ e("div", { className: "mt-3.5 flex flex-col items-center", children: t.map((l, i) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              i < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ e("span", { children: i + 1 })
          }
        ),
        i !== t.length - 1 && /* @__PURE__ */ e("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ e("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: t.map((l, i) => /* @__PURE__ */ o(K, { children: [
        /* @__PURE__ */ e(
          us,
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
}, mc = ne(
  Y("OneApprovalHistory", fs)
), lt = (t, n) => typeof n == "string" && n in t;
function ms(t, n, a) {
  const r = {};
  let l = !1;
  const i = il(t);
  if (i && n.filters) {
    const d = n.filters, f = Object.fromEntries(
      Object.entries(i).filter(
        ([u]) => lt(d, u)
      )
    );
    Object.keys(f).length > 0 && (a.setCurrentFilters(f), r.filters = f, l = !0);
  }
  const s = t.sortings;
  if (s === null)
    a.setCurrentSortings(null), r.sortings = null, l = !0;
  else if (s && n.sortings && lt(n.sortings, s.field)) {
    const d = {
      field: s.field,
      order: s.order
    };
    a.setCurrentSortings(d), r.sortings = d, l = !0;
  }
  typeof t.search == "string" && n.search?.enabled && (a.setCurrentSearch(t.search), r.search = t.search, l = !0);
  const c = t.grouping;
  if (c?.field !== void 0 && n.grouping && lt(n.grouping.groupBy, c.field)) {
    const d = {
      field: c.field,
      order: c.order
    };
    a.setCurrentGrouping(d), r.grouping = d, l = !0;
  }
  return l ? r : null;
}
function hc(t) {
  const {
    source: n,
    collectionId: a,
    activeItemId: r,
    defaultActiveItemId: l,
    onActiveItemChange: i,
    idProvider: s,
    itemUrl: c,
    getItemTitle: d,
    enabled: f = !0,
    restorePersistedState: u = !0,
    deps: m = []
  } = t, h = sl(), g = ol(n, m), [p, v] = O(null), w = p?.key === a && p.settled, k = M(g);
  k.current = g;
  const P = M(h);
  P.current = h;
  const z = M(null);
  $(() => {
    if (!f || z.current === a) return;
    if (!u) {
      z.current = a, v({ key: a, applied: null, settled: !1 });
      return;
    }
    let N = !1;
    return (async () => {
      let x = null;
      try {
        const C = await P.current.get(
          a
        );
        C && !N && (x = ms(
          C,
          k.current,
          k.current
        ));
      } catch {
      }
      N || (z.current = a, v({ key: a, applied: x, settled: !1 }));
    })(), () => {
      N = !0;
    };
  }, [a, f, u]);
  const {
    data: _,
    paginationInfo: E,
    setPage: A,
    loadMore: j,
    isLoading: T,
    isInitialLoading: y
  } = Pr(
    g,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: f && w,
      fetchParamsProvider: (N) => ({
        ...N,
        navigationFilters: g.currentNavigationFilters
      })
    },
    [JSON.stringify(g.currentNavigationFilters)]
  );
  $(() => {
    v(
      (N) => N && N.key === a && !N.settled ? { ...N, settled: !0 } : N
    );
  }, [p, a]);
  const I = cl({
    dataSource: g,
    data: _,
    paginationInfo: E,
    setPage: A,
    loadMore: j,
    isLoading: T,
    idProvider: s,
    itemUrl: c ?? n.itemUrl,
    activeItemId: r,
    defaultActiveItemId: l,
    onActiveItemChange: i
  }), S = Wl(I, {
    getItemTitle: d
  });
  return {
    ...I,
    isReady: w && !y,
    navigation: S,
    appliedCollectionState: p?.applied ?? null,
    dataSource: g,
    data: _,
    paginationInfo: E,
    isLoading: T
  };
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
}, hs = be({
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
}), gs = se.forwardRef(function({ className: n, gap: a, children: r, tileSize: l, ...i }, s) {
  return /* @__PURE__ */ e("div", { className: b("@container", "grow"), ref: s, ...i, children: /* @__PURE__ */ e(
    "div",
    {
      className: b(hs({ gap: a, tileSize: l }), n),
      ref: s,
      ...i,
      children: r
    }
  ) });
}), ps = be({
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
}), aa = H(function({
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
  width: g,
  ...p
}, v) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(
        ps({
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
          width: g
        }),
        n
      ),
      ref: v,
      ...p
    }
  );
}), bs = be({
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
}), xs = se.forwardRef(function({ className: n, gap: a, wrap: r, ...l }, i) {
  return /* @__PURE__ */ e(
    aa,
    {
      className: b(bs({ gap: a, wrap: r }), n),
      ref: i,
      ...l
    }
  );
}), vs = be({
  base: "flex-col",
  variants: {
    gap: {
      ...Lt
    }
  },
  defaultVariants: {}
}), ys = H(function({ className: n, gap: a, children: r, ...l }, i) {
  return /* @__PURE__ */ e(
    aa,
    {
      className: b(vs({ gap: a }), n),
      ref: i,
      ...l,
      children: r
    }
  );
}), gc = ue(
  {
    name: "Stack",
    type: "layout"
  },
  ys
), pc = ue(
  {
    name: "Split",
    type: "layout"
  },
  xs
), bc = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  gs
), ws = ({ children: t }) => {
  const { enabled: n } = Tn();
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        n && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": n,
      children: /* @__PURE__ */ e(
        G.div,
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
}, Ns = () => /* @__PURE__ */ e("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Cs = H(function({ header: n, children: a, action: r, summaries: l, alert: i, status: s, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Tn();
  $(() => {
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
        n && /* @__PURE__ */ e(wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
              n.title && /* @__PURE__ */ e(Nt, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ e(Ns, {}),
                /* @__PURE__ */ e(Sn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ e(xe, { label: n.info, children: /* @__PURE__ */ e(
                W,
                {
                  icon: Fn,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ e("div", { className: "ml-0.5", children: /* @__PURE__ */ e(Ge, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              i && /* @__PURE__ */ e(An, { text: i, level: "critical" }),
              s && /* @__PURE__ */ e(We, { text: s.text, variant: s.variant }),
              n.link && /* @__PURE__ */ e(
                Tr,
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
            /* @__PURE__ */ e(ws, { children: /* @__PURE__ */ e(zr, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
              V,
              {
                icon: f ? Rr : Br,
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
          l && /* @__PURE__ */ e("div", { className: "flex flex-row", children: l.map((g, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ e("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ e("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          se.Children.toArray(a).filter(m).map((g, p) => /* @__PURE__ */ o(se.Fragment, { children: [
            p > 0 && /* @__PURE__ */ e(dl, { bare: !0 }),
            g
          ] }, p))
        ] }),
        r && /* @__PURE__ */ e($r, { children: /* @__PURE__ */ e(V, { variant: "neutral", size: "sm", ...r }) })
      ]
    }
  );
}), ks = be({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), Is = H(
  function({ header: n, height: a }, r) {
    return /* @__PURE__ */ o(
      yt,
      {
        className: b(
          "flex gap-4 border-f1-border-secondary",
          a === "full" && "h-full"
        ),
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ e(wt, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ o(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                n?.title ? /* @__PURE__ */ e(Nt, { children: n.title }) : /* @__PURE__ */ e(D, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ e(Sn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            Ct,
            {
              "aria-hidden": !0,
              className: b(a !== "full" && ks({ height: a })),
              children: [...Array(4)].map((l, i) => /* @__PURE__ */ e(
                D,
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
  Y("Widget", ee(Cs, Is))
), ce = Object.assign(
  H(function({ chart: n, summaries: a, ...r }, l) {
    return /* @__PURE__ */ e(Ne, { ref: l, ...r, summaries: a, children: n && /* @__PURE__ */ e("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), Ss = ee(
  H(function({ canBeBlurred: n, ...a }, r) {
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
        chart: /* @__PURE__ */ e(ul, { ...i, canBeBlurred: n })
      }
    );
  }),
  ce.Skeleton
), Fs = Y(
  "AreaChartWidget",
  Ss
), As = H(function(n, a) {
  return /* @__PURE__ */ e(
    ce,
    {
      ref: a,
      ...n,
      chart: /* @__PURE__ */ e(fl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Ls = Y(
  "BarChartWidget",
  ee(As, ce.Skeleton)
), Es = ee(
  H(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(ml, { yAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Os = Y(
  "LineChartWidget",
  Es
), _s = ee(
  H(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(hl, { ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Ds = Y(
  "PieChartWidget",
  _s
), Ps = ee(
  H(
    function(n, a) {
      return /* @__PURE__ */ e(ce, { ref: a, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Ts = Y(
  "SummariesWidget",
  Ps
), zs = ee(
  H(
    function(n, a) {
      return /* @__PURE__ */ e(
        ce,
        {
          ref: a,
          ...n,
          chart: /* @__PURE__ */ e(gl, { xAxis: { hide: !0 }, ...n.chart })
        }
      );
    }
  ),
  ce.Skeleton
), Rs = Y(
  "VerticalBarChartWidget",
  zs
), xc = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Fs
), vc = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Ls
), yc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  Os
), wc = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Ds
), Nc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  Rs
), Cc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Ts
), Bs = (t, n) => /* @__PURE__ */ o(
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
), $s = H(Bs), Ws = (t, n) => /* @__PURE__ */ o(
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
), Ms = H(Ws), js = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, Vs = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, Hs = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, Us = {
  "line-chart": "default",
  "bar-chart": "promote"
}, Gs = H(
  function({ title: n, content: a, buttonLabel: r, buttonIcon: l, buttonAction: i, type: s }, c) {
    const d = js[s], f = Vs[s], u = Hs[s], m = Us[s];
    return /* @__PURE__ */ o(
      yt,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ e(wt, { className: "-mt-0.5", children: /* @__PURE__ */ e(Nt, { children: n }) }),
          /* @__PURE__ */ o(Ct, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  s === "bar-chart" && /* @__PURE__ */ e("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ e($s, { className: "w-full" }) }),
                  s === "line-chart" && /* @__PURE__ */ e(Ms, { className: "w-full" })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex min-h-28 flex-1 flex-col items-start gap-5", children: [
              /* @__PURE__ */ e("p", { className: "flex w-3/4 text-xl font-semibold", children: a }),
              r && /* @__PURE__ */ e(
                V,
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
), kc = ne(
  Y("ChartWidgetEmptyState", Gs)
);
function Ks(t, n) {
  const a = M(null), r = M(null), [l, i] = O({
    visibleItems: [],
    overflowItems: []
  });
  Wr({
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
      const g = u[h].getBoundingClientRect().height;
      m.push(g);
    }
    return m;
  }, []), d = Q(
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
  ), f = Q(() => {
    if (!a.current || t.length === 0) return;
    const u = a.current.clientHeight, m = c(), h = d(
      m,
      u
    );
    i(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (g) => g.visibleItems.length === h && g.overflowItems.length === t.length - h ? g : {
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
const Qe = function({
  items: n,
  renderListItem: a,
  className: r,
  gap: l = 0,
  minSize: i,
  onVisibleItemsChange: s
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = Ks(n, l);
  return $(() => {
    s?.(f);
  }, [s, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", r),
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
Qe.displayName = "VerticalOverflowList";
const Ic = ({
  events: t,
  showAllItems: n,
  gap: a = 8,
  minSize: r = 184
}) => t.length ? n ? /* @__PURE__ */ e("div", { className: "flex flex-col", children: t.map((l) => /* @__PURE__ */ e(pt, { ...l }, l.title)) }) : /* @__PURE__ */ e(
  Qe,
  {
    items: t,
    gap: a,
    minSize: r,
    renderListItem: (l) => /* @__PURE__ */ e(pt, { ...l }, l.title)
  }
) : null, qs = ({ onClick: t, children: n }) => {
  const a = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? /* @__PURE__ */ e(
    "a",
    {
      className: b(
        a,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      ),
      onClick: t,
      tabIndex: 0,
      children: n
    }
  ) : /* @__PURE__ */ e("div", { className: a, tabIndex: 1, children: n });
};
function Sc({
  label: t,
  count: n,
  icon: a,
  iconClassName: r,
  onClick: l
}) {
  return /* @__PURE__ */ e(qs, { onClick: l, children: /* @__PURE__ */ o(
    "div",
    {
      className: b(
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
const Ys = H(
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
        "icon" in l && l.icon && /* @__PURE__ */ e("span", { className: b("flex", r), children: /* @__PURE__ */ e(W, { icon: l.icon }) }),
        "emoji" in l && l.emoji && /* @__PURE__ */ e("span", { className: b("flex", r), children: /* @__PURE__ */ e(qe, { emoji: l.emoji, size: "md" }) })
      ] })
    ] }, a);
  }
), Fc = H(
  function({ items: n }, a) {
    return /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: n.map(({ label: r, content: l, color: i, ...s }) => /* @__PURE__ */ e(
          Ys,
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
), Zs = ({
  onClick: t,
  withEmoji: n,
  withPointerCursor: a,
  children: r
}) => {
  const l = b(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    n ? "gap-2" : "gap-2.5",
    a ? "cursor-pointer" : "cursor-default",
    t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return t ? /* @__PURE__ */ e("a", { className: l, onClick: t, children: r }) : /* @__PURE__ */ e("div", { className: l, children: r });
};
function Ac({
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
    Zs,
    {
      onClick: (f) => {
        f.preventDefault(), s?.(t);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: i,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ e(Mr, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ e(jr, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
        ] }),
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e(
          In,
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
const Xs = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function an({
  id: t,
  title: n,
  subtitle: a,
  onClick: r,
  module: l
}) {
  const i = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Xs, { onClick: (c) => {
    c.preventDefault(), r?.(t);
  }, className: i, children: [
    /* @__PURE__ */ e(yn, { module: l ?? "inbox", size: "md" }),
    /* @__PURE__ */ o("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: n }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: a })
    ] })
  ] });
}
const Js = ({ onClick: t, className: n, children: a }) => t ? /* @__PURE__ */ e("a", { className: n, onClick: t, tabIndex: 0, children: a }) : /* @__PURE__ */ e("div", { className: n, tabIndex: -1, children: a });
function bt({
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
  const u = b(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
    f ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(Js, { onClick: (h) => {
    h.preventDefault(), f?.(t);
  }, className: u, children: [
    /* @__PURE__ */ o("div", { className: "flex flex-1 flex-row items-start gap-1", children: [
      i && /* @__PURE__ */ e(
        W,
        {
          icon: i,
          size: "md",
          className: b("mt-0.5", c)
        }
      ),
      /* @__PURE__ */ e("p", { className: "mt-0.5 line-clamp-2 font-medium", children: n }),
      s && /* @__PURE__ */ e(
        W,
        {
          icon: s,
          size: "md",
          className: b("mt-0.5", d)
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
      a && /* @__PURE__ */ e(An, { ...a }),
      r && /* @__PURE__ */ e(_e, { ...r }),
      !!l && /* @__PURE__ */ e(Ge, { value: l })
    ] })
  ] });
}
function Lc({
  items: t,
  minSize: n = 184,
  onClickItem: a,
  showAllItems: r,
  onVisibleItemsChange: l
}) {
  return r ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: t.map((i) => /* @__PURE__ */ e(an, { ...i, onClick: a }, i.id)) }) : /* @__PURE__ */ e(
    Qe,
    {
      items: t,
      minSize: n,
      renderListItem: (i) => /* @__PURE__ */ e(an, { ...i, onClick: a }, i.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Ec({
  items: t,
  gap: n,
  minSize: a = 184,
  onClickItem: r,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ e("div", { className: "flex flex-col", style: { minHeight: `${a}px` }, children: t.map((i) => /* @__PURE__ */ e(bt, { ...i, onClick: r }, i.id)) }) : /* @__PURE__ */ e(
    Qe,
    {
      items: t,
      gap: n,
      renderListItem: (i) => /* @__PURE__ */ e(bt, { ...i, onClick: r }),
      minSize: a
    }
  );
}
const Qs = ({ title: t, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ e("p", { className: "flex text-f1-foreground-secondary", children: t }),
  /* @__PURE__ */ e("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Oc = H(
  function({ title: n, titleValue: a, titleTooltip: r, list: l }, i) {
    return /* @__PURE__ */ o("div", { ref: i, className: "flex flex-col gap-2", children: [
      n && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 font-medium", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e("div", { children: n }),
          r && /* @__PURE__ */ e("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ e(
            xe,
            {
              label: r.label,
              description: r.description,
              children: /* @__PURE__ */ e(W, { icon: Fn, size: "sm" })
            }
          ) })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ] }),
      l.map((s) => /* @__PURE__ */ e(Qs, { title: s.title, info: s.info }, s.title))
    ] });
  }
);
function _c({
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
      pl,
      {
        data: a,
        legend: l,
        hideTooltip: i
      }
    ) }),
    !!r && /* @__PURE__ */ e("div", { className: l ? "mt-1" : "mt-2", children: /* @__PURE__ */ e(
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
const ra = (t, n) => ((n ?? 0) < -1 * (t ?? 0) ? -1 * t : n) ?? 0, eo = ({
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
    const u = ra(
      a,
      r
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return r >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = ve[s];
  return {
    status: s,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, it = "--:--", to = (t, n) => {
  if (t && t > 0)
    return {
      value: t * 60 / n,
      color: ve.empty
    };
  if (!n)
    return {
      value: 1,
      color: ve.empty
    };
}, no = ({
  data: t = [],
  trackedMinutes: n,
  remainingMinutes: a = 0
}) => {
  const r = a < 0 && a < -1 * n, l = ra(
    n,
    a
  ), i = t.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, s = r || (l ?? 0) < 0 ? void 0 : to(
    l ?? 0,
    i
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...t].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - g) / i;
        return c -= g, m.variant === "clocked-in" && r ? [
          ...u,
          {
            value: g / i + v,
            color: ve.overtime
          }
        ] : [
          ...u,
          {
            value: g / i,
            color: ve.overtime
          },
          {
            value: v,
            color: ve[m.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return f = f.filter((u) => u.value > 0), f.length || f.push({
    value: 1,
    color: ve.empty
  }), f;
}, ao = ({
  data: t = [],
  remainingMinutes: n,
  trackedMinutes: a = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, l = t.at(-1), i = r ? _t(r) : it, s = n === void 0 || n > 0 ? it : l ? _t(l.to) : it, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : a * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return {
    primaryLabel: i,
    secondaryLabel: s,
    time: m
  };
}, ve = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function ro({
  data: t = [],
  trackedMinutes: n = 0,
  remainingMinutes: a
}) {
  const r = no({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  }), { primaryLabel: l, secondaryLabel: i, time: s } = ao({
    data: t,
    trackedMinutes: n,
    remainingMinutes: a
  });
  return /* @__PURE__ */ o("div", { className: "relative h-40 w-40", children: [
    /* @__PURE__ */ e(bl, { width: 156, height: 156, children: /* @__PURE__ */ e(
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
        children: r.map((c, d) => /* @__PURE__ */ e(
          Vr,
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
function lo({
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
            className: b(
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
function Dc({
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
  canShowBreakButton: g = !0,
  canSeeGraph: p = !0,
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: w,
  canShowProject: k = !0,
  projectSelectorElement: P,
  breakTypeName: z
}) {
  const { status: _, statusText: E, subtitle: A, statusColor: j } = eo({
    data: a,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), T = _ === "clocked-out", y = m?.map((R) => ({
    value: R.id,
    label: R.duration ? `${R.name} · ${R.duration}` : R.name,
    description: R.description,
    tag: R.isPaid ? r.paid : r.unpaid
  })) ?? [], [I, S] = O(!1), N = () => {
    if (y.length > 1)
      I || S(!0);
    else {
      const R = y?.[0]?.value;
      u?.(R);
    }
  }, B = (R) => {
    h?.(R), S(!1), u?.(R);
  }, x = T && i.length && !c && s, C = i.find((R) => R.id === l), F = i.map((R) => ({
    value: R.id,
    label: R.name,
    icon: R.icon
  })), U = _ === "break", [ae, ie] = O(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ o("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ o("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: E }),
            /* @__PURE__ */ o("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                G.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: j
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
                    backgroundColor: j
                  }
                }
              )
            ] })
          ] }),
          A && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: A })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          _ === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            V,
            {
              onClick: d,
              label: r.clockIn,
              icon: Dt
            }
          ) }),
          _ === "clocked-in" && /* @__PURE__ */ o(K, { children: [
            g && /* @__PURE__ */ e(K, { children: y.length > 1 && h ? /* @__PURE__ */ e(
              Me,
              {
                label: r.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: B,
                open: I,
                onOpenChange: S,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  V,
                  {
                    label: r.break,
                    variant: "neutral",
                    icon: Pt,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              V,
              {
                onClick: N,
                label: r.break,
                variant: "neutral",
                icon: Pt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              V,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Tt
              }
            )
          ] }),
          _ === "break" && /* @__PURE__ */ o(K, { children: [
            /* @__PURE__ */ e(
              V,
              {
                onClick: f,
                label: r.clockOut,
                variant: "neutral",
                icon: Tt,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              V,
              {
                onClick: d,
                label: r.resume,
                icon: Dt
              }
            )
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ e(
        ro,
        {
          data: a,
          trackedMinutes: t,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: x ? /* @__PURE__ */ o(K, { children: [
      /* @__PURE__ */ e(
        Me,
        {
          label: r.selectLocation,
          hideLabel: !0,
          value: l,
          options: F,
          onChange: w,
          open: ae,
          onOpenChange: ie,
          disabled: c,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            lo,
            {
              text: C?.name,
              placeholder: r.selectLocation,
              icon: C?.icon
            }
          ) })
        }
      ),
      k && P
    ] }) : /* @__PURE__ */ o(K, { children: [
      s && C && /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(_e, { text: C.name, icon: C.icon }) }),
      k && P,
      U && z && /* @__PURE__ */ e(_e, { text: z })
    ] }) })
  ] }) });
}
const io = {
  done: Kr,
  "in-progress": Gr,
  todo: Ur
}, so = {
  done: "text-f1-icon-success",
  "in-progress": "text-f1-icon-info",
  todo: "text-f1-icon"
};
function oo({
  task: t,
  status: n,
  onClick: a,
  hideIcon: r = !1
}) {
  const l = () => {
    a?.(t);
  }, i = q(() => {
    if (!r)
      return io[n];
  }, [n, r]);
  return /* @__PURE__ */ e(
    bt,
    {
      id: t.id,
      title: t.text,
      icon: i,
      iconClassName: so[n],
      alert: t.badge?.isPastDue ? {
        text: t.badge.text,
        level: "critical"
      } : void 0,
      rawTag: t.badge && !t.badge.isPastDue ? {
        text: t.badge.text,
        icon: qr
      } : void 0,
      count: t.counter,
      onClick: l
    }
  );
}
function Pc({
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
    ).map(({ id: u, text: m, badge: h, counter: g }) => ({
      id: u,
      text: m,
      badge: h,
      counter: g,
      status: f
    }))
  ), c = !s.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: l }) : s.slice(0, r).map((d) => /* @__PURE__ */ e(
    oo,
    {
      task: d,
      status: d.status,
      hideIcon: a,
      onClick: n
    },
    d.id
  )) });
}
var co = Object.defineProperty, uo = Object.defineProperties, fo = Object.getOwnPropertyDescriptors, He = Object.getOwnPropertySymbols, la = Object.prototype.hasOwnProperty, ia = Object.prototype.propertyIsEnumerable, rn = (t, n, a) => n in t ? co(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a, oe = (t, n) => {
  for (var a in n || (n = {})) la.call(n, a) && rn(t, a, n[a]);
  if (He) for (var a of He(n)) ia.call(n, a) && rn(t, a, n[a]);
  return t;
}, et = (t, n) => uo(t, fo(n)), mo = (t, n) => {
  var a = {};
  for (var r in t) la.call(t, r) && n.indexOf(r) < 0 && (a[r] = t[r]);
  if (t != null && He) for (var r of He(t)) n.indexOf(r) < 0 && ia.call(t, r) && (a[r] = t[r]);
  return a;
}, ho = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, go = ({ spotsList: t, usedSpot: n }) => t.some((a) => a !== n && n.left === a.left), po = ({ position: t, spot: n, stone: a }) => {
  if (t.left > n.left && n.right >= t.left && t.top + a.height > n.top) {
    if (n.bottom && n.bottom < t.top) return n;
    let r = oe({}, n);
    return r.right = t.left, r;
  }
  return null;
}, bo = ({ position: t, stone: n, spot: a }) => {
  if (t.left + n.width > a.left && t.top >= a.top) {
    if (a.bottom && a.bottom < t.top || a.right < t.left) return a;
    let r = oe({}, a);
    return r.bottom = t.top, r;
  }
  return null;
}, xo = ({ stone: t, position: n, spotsList: a, optimalSpot: r }) => {
  let l = oe({}, r);
  return l.left = n.left + t.width, ho(l) || go({ usedSpot: l, spotsList: a }) ? null : l;
}, vo = ({ spots: t, position: n, optimalSpot: a, stone: r }) => t.map((l, i, s) => {
  if (l === a) return xo({ stone: r, position: n, optimalSpot: a, spotsList: s });
  let c = po({ position: n, spot: l, stone: r });
  return c || bo({ position: n, stone: r, spot: l }) || l;
});
function yo(t, n) {
  for (let a = 0, r = n.length; a < r; a++) {
    let l = n[a];
    if (t(l)) return l;
  }
  return null;
}
var wo = (t, n) => n.filter(t), No = (t, n) => [...n].sort(t), Co = (t, n) => t.top === n.top ? t.left < n.left ? -1 : 1 : t.top < n.top ? -1 : 1, ko = (t) => No(Co, t), Io = ({ availableSpots: t, optimalSpot: n, containerSize: a, stone: r }) => {
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
}, So = (t, n) => {
  let a = t.right - t.left >= n.width;
  if (!t.bottom) return a;
  let r = t.bottom - t.top >= n.height;
  return a && r;
}, Fo = ({ availableSpots: t, stone: n }) => yo((a) => So(a, n), t);
function Ao({ stone: t, availableSpots: n, containerSize: a }) {
  let r = Fo({ availableSpots: n, stone: t }), l = { left: r.left, top: r.top }, i = Io({ optimalSpot: r, availableSpots: n.filter((d) => d !== r), stone: t, containerSize: a }), s = [...n, i], c = vo({ spots: s, position: l, optimalSpot: r, stone: t });
  return s = [...wo(Boolean, c)], s = ko(s), { position: l, availableSpots: s };
}
var Lo = ({ stones: t, containerSize: n }) => {
  let a = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return a;
  let r = 0, l = [], i = [{ top: 0, left: 0, right: n }];
  for (let s of t) {
    let c = Ao({ availableSpots: i, stone: s, containerSize: n }), d = c.position.top + s.height;
    r < d && (r = d), l.push(c.position), i = c.availableSpots;
  }
  return { availableSpots: i, positions: l, containerHeight: r };
}, Eo = (t) => t.reduce((n, a) => {
  if (!a) return n;
  let r = a.getBoundingClientRect();
  return n.push({ width: r.width, height: r.height }), n;
}, []), Oo = ({ boxesRefs: t, wrapperRef: n, children: a, windowWidth: r, wrapperWidth: l }) => {
  let [{ positions: i, containerHeight: s, stones: c, availableSpots: d }, f] = O({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return $(() => {
    var u, m;
    let h = Eo(t.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Lo({ stones: h, containerSize: g });
    f(et(oe({}, p), { stones: h }));
  }, [a, t, n, r, l]), { positions: i, containerHeight: s, stones: c, availableSpots: d };
}, _o = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), Do = ({ transition: t, transitionDuration: n }) => t ? { transition: _o(n)[t] } : null, Po = (t) => t ? et(oe({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, To = ({ style: t, position: n, transition: a, transitionDuration: r }) => oe(oe(et(oe({}, t), { position: "absolute" }), Po(n)), Do({ transition: a, transitionDuration: r }));
function zo(t, n, a) {
  let r;
  return function(...l) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, l);
    }, n);
  };
}
var Ro = () => {
  let [t, n] = O(), a = M(zo(n, 300));
  return $(() => {
    let r = () => {
      a.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, Bo = (t) => {
  let [n, a] = O(null);
  return $(() => {
    let r = new ResizeObserver((l) => {
      for (let i of l) a(i.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), n;
}, $o = (t) => {
  var n = t, { children: a, style: r, transition: l = !1, transitionDuration: i = 500, transitionStep: s = 50 } = n, c = mo(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = M([]), f = M(null), u = Ro(), m = Bo(f), { positions: h, containerHeight: g } = Oo({ boxesRefs: d, wrapperRef: f, children: a, windowWidth: u, wrapperWidth: m }), p = oe({ minHeight: g ?? 0, position: "relative" }, r);
  return e("div", et(oe({ ref: f, style: p }, c), { children: _n.map(a, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let k = { style: To({ style: v.props.style, position: h[w], transition: l, transitionDuration: i }), ref: (P) => d.current[w] = P };
    return On(v, oe(oe({}, v.props), k));
  }) }));
};
const Wo = { sm: 340, md: 480, lg: 640 }, ln = H(
  function({ children: n, widgetWidth: a = "sm" }, r) {
    const l = Wo[a], [i, s] = O(), c = _n.toArray(n), d = M(null);
    return $(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && s(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [s, l]), /* @__PURE__ */ e("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ e("div", { ref: d, children: i === 1 ? /* @__PURE__ */ e("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : i && i > 1 && /* @__PURE__ */ e("div", { className: "relative -mr-4", children: /* @__PURE__ */ e($o, { children: c.map((f, u) => /* @__PURE__ */ e(
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
), Mo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], Tc = ee(ln, () => /* @__PURE__ */ e(Ln, { children: /* @__PURE__ */ e(ln, { children: Mo.map((t, n) => /* @__PURE__ */ e(Ne.Skeleton, { height: t }, n)) }) })), sn = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: t }), zc = ee(
  H(function({ children: n }, a) {
    return /* @__PURE__ */ e(Ue, { ref: a, showBar: !1, children: /* @__PURE__ */ e(sn, { children: n }) });
  }),
  () => /* @__PURE__ */ e(Ln, { orientation: "horizontal", children: /* @__PURE__ */ o(sn, { children: [
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {}),
    /* @__PURE__ */ e(Ne.Skeleton, {})
  ] }) })
);
function jo({
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
    vl,
    {
      title: t,
      description: n,
      ...a ? { emoji: a } : { variant: "warning" },
      actions: r
    }
  );
}
const Rc = ne(
  Y("WidgetEmptyState", jo)
), sa = H(
  ({ title: t, children: n }, a) => (Yr(
    t,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: a, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground-secondary", children: t }),
    n
  ] }))
);
sa.displayName = "WidgetSection";
const Bc = ne(
  Y("WidgetSection", sa)
), $c = ({
  identifier: t,
  allowedRoutes: n,
  disallowedRoutes: a,
  children: r
}) => {
  const l = Zr(), i = window.location.pathname, s = q(() => n?.length ? n.includes(i) : a?.length ? !a.includes(i) : !0, [i, n, a]), c = q(() => {
    let d = `The component ${t} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), a && a.length > 0 && (d += ` Disallowed routes: ${a.join(", ")}`), d;
  }, [t, n, a]);
  return s ? r : (l && console.error(c), null);
}, Wc = ne(
  ue(
    {
      name: "ScrollArea",
      type: "layout"
    },
    Ue
  )
);
export {
  Qo as ActivityItemList,
  wi as ActivityItemListSkeleton,
  ql as AiPromotionChat,
  Yl as AiPromotionChatProvider,
  rc as ApplicationFrame,
  pd as AreaChart,
  xc as AreaChartWidget,
  bc as AutoGrid,
  Ir as Badge,
  bd as BarChart,
  vc as BarChartWidget,
  yi as BaseActivityItemList,
  xd as BaseBanner,
  Si as BaseCelebration,
  zi as BaseCommunityPost,
  Vc as BaseTabs,
  Hc as BreadcrumbSelect,
  Il as Breadcrumbs,
  pt as CalendarEvent,
  Ic as CalendarEventList,
  vd as CardSelectableContainer,
  el as Carousel,
  yd as CategoryBarChart,
  _c as CategoryBarSection,
  ec as Celebration,
  Fi as CelebrationSkeleton,
  kc as ChartWidgetEmptyState,
  Uc as Chip,
  Dc as ClockInControls,
  wd as ComboChart,
  nc as CommunityPost,
  Ri as CommunityPostSkeleton,
  Yi as CompanySelector,
  Ge as Counter,
  Tc as Dashboard,
  lc as DaytimePage,
  Gc as DetailsItem,
  Kc as DetailsItemsList,
  Nd as Dialog,
  Ce as Dropdown,
  Jo as EntitySelect,
  Cd as F0ActionBar,
  kd as F0AiBanner,
  yn as F0AvatarModule,
  qc as F0ButtonToggle,
  Zo as F0Callout,
  Id as F0NumberInput,
  Yc as F0SearchInput,
  Sd as F0SegmentedControl,
  Fd as F0TableOfContent,
  Ad as F0TextAreaInput,
  Zc as F0TextInput,
  Xo as F0VersionHistory,
  Ld as F1SearchBox,
  Ed as FILE_TYPES,
  Xc as FileItem,
  tc as HighlightBanner,
  Fc as IndicatorsList,
  Od as Input,
  _d as Item,
  Dd as ItemSectionHeader,
  Pd as LineChart,
  yc as LineChartWidget,
  dc as Menu,
  Jc as MobileDropdown,
  Td as NotesTextEditor,
  zd as NotesTextEditorPatchTargetNotFoundError,
  Rd as NotesTextEditorSkeleton,
  Bd as NotesTextEditorUnsupportedPatchTypeError,
  $d as NumberInput,
  ic as OmniButton,
  mc as OneApprovalHistory,
  Qc as OneCalendar,
  ed as OneCalendarInternal,
  Wd as OneDataCollection,
  Md as OneDateNavigator,
  vl as OneEmptyState,
  jd as OnePagination,
  ac as OnePersonListItem,
  $c as OneRestrictComponent,
  sc as Page,
  Yo as PageHeader,
  St as PageHeaderNavigationContext,
  Ko as PageHeaderNavigationProvider,
  za as PageNavigation,
  Vd as PieChart,
  wc as PieChartWidget,
  ws as PrivateBox,
  Hd as ProgressBarChart,
  Ud as RadarChart,
  Ei as Reactions,
  Gd as ResourceHeader,
  mr as RichTextDisplay,
  Kd as RichTextEditor,
  Wc as ScrollArea,
  uc as SearchBar,
  qd as SectionHeader,
  Me as Select,
  Dr as Shortcut,
  fc as Sidebar,
  oc as SidebarFooter,
  cc as SidebarHeader,
  fn as Spinner,
  pc as Split,
  gc as Stack,
  Cc as SummariesWidget,
  td as Switch,
  nd as Tabs,
  ad as TabsSkeleton,
  Pc as TasksList,
  Yd as Textarea,
  rd as ToggleGroup,
  ld as ToggleGroupItem,
  xe as Tooltip,
  Oc as TwoColumnsList,
  Zd as VerticalBarChart,
  Nc as VerticalBarChartWidget,
  mt as VirtualList,
  id as WeekStartDay,
  sd as Weekdays,
  Ne as Widget,
  Ac as WidgetAvatarsListItem,
  Rc as WidgetEmptyState,
  Sc as WidgetHighlightButton,
  Lc as WidgetInboxList,
  an as WidgetInboxListItem,
  Bc as WidgetSection,
  Ec as WidgetSimpleList,
  bt as WidgetSimpleListItem,
  zc as WidgetStrip,
  Xd as actionBarStatuses,
  Jd as buttonToggleSizes,
  Qd as buttonToggleVariants,
  od as chipVariants,
  eu as downloadAsCSV,
  tu as generateCSVContent,
  cd as getGranularityDefinition,
  dd as getGranularityDefinitions,
  ud as getGranularitySimpleDefinition,
  fd as granularityDefinitions,
  md as modules,
  nu as predefinedPresets,
  hd as rangeSeparator,
  ms as seedFromStorage,
  au as selectSizes,
  Ze as useAiPromotionChat,
  ru as useDataCollectionData,
  hc as useDataCollectionItemNavigation,
  ol as useDataCollectionSource,
  lu as useExportAction,
  iu as useInfiniteScrollPagination,
  Wl as usePageHeaderItemNavigation,
  qo as usePageHeaderNavigation,
  Fe as useSidebar
};
