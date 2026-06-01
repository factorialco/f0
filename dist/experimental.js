import { g as vr, B as wr, h as yr, i as Nr, j as Dt, k as Te, l as Ir, m as b, n as ee, o as pe, u as se, T as Cr, p as kr, q as Sr, R as Ar, r as Lr, s as le, t as Fr, v as xt, w as it, x as We, A as Oe, y as Er, z as Dr, C as G, E as _r, G as Or, H as ve, J as pn, K as Pr, L as Tr, M as V, N as bn, S as R, O as we, Q as Rr, U as zr, V as Br, W as $r, X as Mr, Y as Ce, Z as xn, _ as Wr, $ as be, a0 as je, a1 as jr, a2 as vt, d as vn, a3 as Ie, a4 as Ur, a5 as wn, a6 as ae, a7 as J, a8 as yn, a9 as Nn, aa as Vr, ab as In, ac as me, ad as ne, ae as Gr, af as Hr, ag as Kr, ah as qr, ai as ge, aj as Ke, ak as Yr, al as Jr, am as Zr, an as Xr, ao as qe, ap as Cn, aq as Qr, ar as ea, as as ta, at as Ue, au as na, av as ra, aw as aa, ax as la, ay as sa, az as ia, aA as oa, aB as ca, aC as da, aD as ua, aE as ot, aF as ct, aG as kn, aH as fa, aI as ma, aJ as ha, aK as ga, aL as Ye, aM as wt, aN as Sn, aO as pa, aP as An, aQ as ba, aR as xa, aS as va, aT as _e, aU as wa, aV as _t, aW as dt, aX as ya, aY as Na, a as Ia, b as Ca, aZ as Ln, a_ as ka, f as Sa, F as Aa, a$ as Fn, b0 as La, b1 as En, b2 as Fa, b3 as Ea, b4 as Da, b5 as _a, b6 as Oa, b7 as Pa, b8 as Ta, b9 as Ra, ba as za, bb as Dn, bc as Ot, bd as ue, be as _n, bf as On, bg as Ba, bh as $a, bi as Ma, bj as Wa, bk as ja, bl as Ua, bm as Va, bn as Pt, bo as Tt, bp as Rt, bq as Ga, br as Ha, bs as Ka, bt as qa, bu as Pn, bv as Ya, bw as Ja } from "./F0CanvasPanel-DUAlJdKv.js";
import { bI as nd, bH as rd, bU as ad, bE as ld, bF as sd, bx as id, by as od, bV as cd, bz as dd, bG as ud, bQ as fd, bR as md, bA as hd, bK as gd, bJ as pd, bB as bd, bC as xd, bS as vd, bW as wd, bT as yd, bP as Nd, bM as Id, bO as Cd, bL as kd, bD as Sd, bN as Ad } from "./F0CanvasPanel-DUAlJdKv.js";
import { jsx as t, jsxs as o, Fragment as Y } from "react/jsx-runtime";
import ie, { forwardRef as H, useRef as z, useTransition as Za, useState as D, useLayoutEffect as Tn, useId as ut, useContext as ke, createContext as Je, useEffect as W, useCallback as U, useMemo as q, Fragment as Xa, isValidElement as Qa, cloneElement as Rn, Children as zn } from "react";
import { C as el, P as tl, g as Bn, c as nl, a as $n, F as ft, f as rl, b as Re, M as al, d as ll, R as zt, e as Mn, u as sl, h as il, D as ol, i as cl, j as Bt, k as Wn, l as yt, m as Nt, n as It, o as jn, p as Ct, q as dl, r as ul, S as fl, s as ml, A as hl, B as gl, L as pl, t as bl, V as xl, v as vl, w as $t, x as wl, y as yl, O as Nl } from "./useDataCollectionSource-CStqNw01.js";
import { J as Fd, K as Ed, H as Dd, $ as _d, N as Od, X as Pd, ai as Td, _ as Rd, I as zd, G as Bd, a5 as $d, ao as Md, a6 as Wd, a7 as jd, Q as Ud, ak as Vd, al as Gd, aj as Hd, am as Kd, a1 as qd, a8 as Yd, af as Jd, ah as Zd, T as Xd, W as Qd, Y as eu, a3 as tu, an as nu, a4 as ru, a2 as au, U as lu, Z as su, z as iu, E as ou, aa as cu, ab as du, ag as uu, a0 as fu, ac as mu, ad as hu, a9 as gu, ae as pu } from "./useDataCollectionSource-CStqNw01.js";
const Il = vr("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Un = H(({ className: e, items: n }, r) => /* @__PURE__ */ t(wr, { ref: r, className: e, children: /* @__PURE__ */ o("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(yr, {}),
  /* @__PURE__ */ t(Nr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
Un.displayName = "CollapsedBreadcrumbItem";
const kt = 50, Cl = 120, Ve = 8;
function kl(e, n) {
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
function Mt(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Ve;
    default:
      return e[0] + kt + e[e.length - 1] + Ve;
  }
}
function Sl(e, n) {
  return Cl * e + (n ? kt : 0) + Ve;
}
function Al(e, n, r = []) {
  if (!e) {
    const i = Math.min(n.length, 2);
    return {
      visibleCount: i,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Sl(
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
      minWidth: Mt(l)
    };
  const s = kl(e, l);
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
    minWidth: Mt(l)
  };
}
function Ll({ breadcrumbs: e, append: n }) {
  const r = z(null), a = z(null), [, l] = Za(), [s, i] = D(null), c = (s?.collapsedItems || []).length > 0;
  return Tn(() => {
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
        i(p);
      });
    }, m = new ResizeObserver(u);
    return m.observe(d), u(), () => m.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(Dt, { ref: r, className: "w-full" }) : /* @__PURE__ */ o(
    Dt,
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
        s && s.headItem && /* @__PURE__ */ o(Ir, { children: [
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
              Un,
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
}, s) => {
  const i = ut(), {
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
              /* @__PURE__ */ t("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              Wt.map((p) => /* @__PURE__ */ t("clipPath", { id: `${i}-${p.id}`, children: /* @__PURE__ */ t("path", { d: p.path }) }, p.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${i}-circle)`, children: Wt.map((p) => /* @__PURE__ */ t(
              ee.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${p.id})`,
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
}, Vn = H(El), Gn = Je(null), Dl = 15, _l = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [l, s] = D(n), [i, c] = D(!1), [d, f] = D(!0), [u, m] = D(
    Dl
  ), h = z(null), g = (v) => {
    h.current = v;
  }, p = () => {
    h.current && h.current();
  };
  return W(() => {
    s(n);
  }, [n]), W(() => {
    if (i && r?.(), !i) {
      const v = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      f(!v);
    }
  }, [i, r]), /* @__PURE__ */ t(
    Gn.Provider,
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
        clear: p,
        setClearFunction: g
      },
      children: e
    }
  );
}, ye = () => {
};
function Ze() {
  const e = ke(Gn);
  return e === null ? {
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
  } : e;
}
const Hn = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: l } = Ze(), s = se(), [i, c] = D(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(Cr, { children: /* @__PURE__ */ o(kr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(Sr, { asChild: !0, children: /* @__PURE__ */ t(
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
          Ar,
          {
            onCheckedChange: (d) => {
              a(d);
            },
            checked: l,
            "aria-label": l ? s.ai.closeChat : s.ai.openChat,
            className: b(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              le(),
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
    !l && /* @__PURE__ */ t(Fr, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, jt = "one_sidebar_locked", Kn = Je(void 0);
function Se() {
  const e = ke(Kn);
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
  const { currentPath: n } = xt(), [r, a] = D(!1), [l, s] = D(!1), i = r ? We.xl : We.md, c = it(`(max-width: ${i}px)`, {
    initializeWithValue: !0
  }), [d, f] = D(() => {
    const I = localStorage.getItem(jt);
    return I !== null ? !!I : !0;
  }), [u, m] = D(!1), [h, g] = D(
    null
  ), p = U(
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
  ), N = q(() => c ? u ? "unlocked" : "hidden" : !d && !u ? "hidden" : !d && u ? "unlocked" : "locked", [c, u, d]);
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
const Ut = ee.create(G), Vt = {
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
  const [a, l] = D(!1), s = () => {
    l(!0), n(!e);
  };
  return /* @__PURE__ */ t(Oe, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: b(
        "flex h-6 w-6 items-center justify-center rounded",
        le()
      ),
      onClick: s,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        Ut,
        {
          size: "sm",
          icon: Er,
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
        Ut,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Dr,
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
  const [m, h] = D("idle"), [g, p] = D(null), [v, ...N] = g ?? [], [I, P] = D(!1);
  W(() => {
    p(null), h("idle");
  }, [e]);
  const T = U(async () => {
    try {
      h("fetching");
      const O = await r();
      h("idle"), p(O);
    } catch {
      h("error");
    }
  }, [r]);
  return /* @__PURE__ */ o(
    _r,
    {
      open: I,
      onOpenChange: async (O) => {
        P(O), O && g === null && T(), i(O);
      },
      children: [
        /* @__PURE__ */ t(Or, { asChild: !0, children: /* @__PURE__ */ t(
          ve,
          {
            variant: "outline",
            icon: pn,
            hideLabel: !0,
            label: n,
            pressed: I,
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
                  g.length > 1 && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: N.map((O, L) => /* @__PURE__ */ t(
                    zl,
                    {
                      ...O,
                      onClick: d
                    },
                    L
                  )) }) })
                ] }),
                m === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Ml,
                  {
                    ...s,
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
                  onDropdownClose: () => P(!1)
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
  onClick: s
}) => {
  const i = "flex flex-col items-stretch w-full", c = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Rr,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ o(
        we,
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
  const s = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(Br, { asChild: !0, className: s, onClick: l, children: /* @__PURE__ */ t(
    we,
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
    button: /* @__PURE__ */ t(we, { href: r, children: /* @__PURE__ */ t(V, { label: n }) })
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
  const [l, s] = D(e);
  W(() => {
    s(e);
  }, [e]);
  const i = () => {
    s(!1), n && n();
  }, c = (d) => {
    s(!1), a(), d && d();
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
            onClick: i,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        el,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((d) => /* @__PURE__ */ t(
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
}, At = Je(null), ac = At.Provider;
function lc() {
  return ke(At);
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
function sc({
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
  const { sidebarState: u, toggleSidebar: m } = Se(), h = ke(At), g = s ?? h, p = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], v = n && Object.keys(n).length !== 0, N = l && r.length > 0, I = !l && a.length > 0, P = !l && !!i?.isVisible, T = p[p.length - 1], O = "navigation" in window ? window.navigation : null, L = l && (O ? !!O.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex items-center justify-between px-page py-4",
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
          !l && v && (g || I || P) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
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
          g && I && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (P || I) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            P && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Tl,
              {
                ...i,
                currentModule: e.name
              }
            ) }),
            I && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((F, M) => /* @__PURE__ */ t(Ul, { action: F }, M)) })
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
function Ul({ action: e }) {
  const n = z(null), [r, a] = D(!1), l = e.variant ?? "outline";
  return "actions" in e ? /* @__PURE__ */ t(Ie, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    ve,
    {
      size: "md",
      variant: l,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : "onClick" in e ? /* @__PURE__ */ t(
    ve,
    {
      size: "md",
      variant: l,
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      onClick: e.onClick
    }
  ) : /* @__PURE__ */ t(
    we,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        ve,
        {
          size: "md",
          variant: l,
          label: e.label,
          icon: e.icon,
          hideLabel: !0,
          onClick: (s) => {
            s.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
const Vl = () => {
  const e = se();
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
          ve,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: Ur,
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
  } = Ze();
  return Gl({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: l
  }), /* @__PURE__ */ t(Oe, { children: n && /* @__PURE__ */ t(
    ee.div,
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
        ee.div,
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
        ve,
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
), Yl = () => {
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
  return e ? /* @__PURE__ */ o(Hl, { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      ve,
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
        /* @__PURE__ */ t(yn, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          f.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: f.boldText })
        ] })
      ] }, u)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((f, u) => /* @__PURE__ */ t(
        Kl,
        {
          action: f,
          onClose: () => i(!1)
        },
        u
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Vl, {}) })
  ] }) : null;
}, Jl = ae(
  J("AiPromotionChat", Yl)
), Zl = ae(
  J("AiPromotionChatProvider", ql)
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
  positive: In,
  warning: Vr,
  info: Nn
}, Kt = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, Xl = H(
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
        className: Yn({ variant: s }),
        "data-testid": "sdm-callout",
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-2", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "flex flex-row items-center gap-2",
                  Kt[s]
                ),
                children: [
                  Ht[s] && /* @__PURE__ */ t(G, { icon: Ht[s], size: "sm", "aria-hidden": !0 }),
                  /* @__PURE__ */ t(
                    me,
                    {
                      className: Kt[s] || "font-medium",
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
), Jn = H(
  (e, n) => /* @__PURE__ */ t(Xl, { ref: n, ...e })
), es = ({ compact: e, variant: n }) => /* @__PURE__ */ t(Ql, { compact: e, variant: n });
Jn.displayName = "F0Callout";
const ic = ne(
  ae(Jn),
  es
);
function ts({
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
        le("focus-visible:ring-inset")
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
function ns({
  author: e,
  timestamp: n,
  onClick: r,
  isActive: a
}) {
  const { locale: l } = Hr(), s = Kr(l), i = qr(n, "PPPp", { locale: s }), c = `${e.firstName} ${e.lastName}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: b(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        a && "bg-f1-background-tertiary",
        r && "cursor-pointer hover:bg-f1-background-hover",
        le("focus-visible:ring-inset")
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
function rs({
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
            ts,
            {
              title: r.title,
              onClick: r.onClick,
              isActive: a === "current"
            }
          ),
          n.map((l) => /* @__PURE__ */ t(
            ns,
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
const oc = ae(
  J("F0VersionHistory", rs)
), Zn = H(
  ({ height: e, itemCount: n, itemSize: r, className: a, renderer: l }, s) => {
    const i = ie.useRef(null);
    ie.useImperativeHandle(
      s,
      () => i.current,
      []
    );
    const c = Yr({
      count: n,
      getScrollElement: () => i.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ t(
      "div",
      {
        ref: i,
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
Zn.displayName = "VirtualList";
const mt = J("VirtualList", Zn), Xn = ({
  text: e,
  search: n,
  searchKeys: r = [],
  semiBold: a = !1
}) => {
  if (!n)
    return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: e });
  if (e.toLowerCase().indexOf(n.toLowerCase()) === -1)
    if (r.find(
      (i) => i.toLowerCase().indexOf(n.toLowerCase().trim()) >= 0
    ))
      n = e.split(" ")[0];
    else
      return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: e });
  const l = new RegExp(`(${n})`, "gi"), s = e.split(l);
  return /* @__PURE__ */ t("span", { className: b("line-clamp-1", a ? "font-semibold" : ""), children: s.map(
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
const as = ({
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
  const m = e.name.split(" "), h = m[0] || "", g = m.slice(1).join(" "), p = (N) => {
    N.preventDefault(), N.stopPropagation(), !f && (n ? a(e) : r(e));
  }, v = (N) => {
    if (N.key === "Enter" || N.key === " ") {
      if (N.preventDefault(), f) return;
      n ? n && a(e) : r(e);
    } else N.key === "ArrowDown" ? Xe(N.currentTarget, i) : N.key === "ArrowUp" && Qe(N.currentTarget, c);
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
            icon: In,
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
  disabled: v = !1,
  hiddenAvatar: N = !1
}) => {
  const [I, P] = D(!1);
  if (!e)
    return /* @__PURE__ */ t(
      as,
      {
        marginLeft: m ? "ml-6" : "ml-0",
        entity: a,
        search: r,
        selected: l,
        onSelect: i,
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
      !l || s ? i(a) : l && c(a);
    } else F.key === "ArrowDown" ? Xe(F.currentTarget, f) : F.key === "ArrowUp" && Qe(F.currentTarget, u);
  }, O = () => {
    if (I)
      d(!n), P(!1);
    else {
      if (v || p) return;
      l ? c(a) : i(a);
    }
  };
  if (!a.subItems?.length) return null;
  const L = l || s;
  return /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        V,
        {
          hideLabel: !0,
          icon: n ? Jr : Zr,
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
            P(!0);
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
              Cn,
              {
                checked: L,
                disabled: v,
                onClick: O,
                onKeyDown: T,
                indeterminate: s,
                onPointerDown: (F) => {
                  F.stopPropagation(), P(!1);
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
}) => /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", onKeyDown: (s) => {
  s.key === "ArrowDown" || s.key === "Tab" ? Xe(s.currentTarget, r) : s.key === "ArrowUp" && Qe(s.currentTarget, a);
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
) }), Ee = ({ primaryAction: e, secondaryActions: n }) => {
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
    ea,
    {
      items: a,
      value: e.label,
      disabled: s,
      onClick: l,
      variant: "outline",
      size: "sm"
    }
  );
}, ls = ({
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
  let g, p, v = d ? {
    label: n || "",
    onClick: d,
    variant: "outline",
    disabled: a || l
  } : void 0, N = f ? {
    label: r || "",
    onClick: f,
    variant: "ghost",
    disabled: a || !s
  } : void 0;
  return v || (v = N, N = void 0), m && u ? (g = /* @__PURE__ */ t(
    Ee,
    {
      primaryAction: v,
      secondaryActions: N ? [N] : []
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
  ) : u && (g = /* @__PURE__ */ t(Ee, { primaryAction: v, secondaryActions: [] }), N && (p = /* @__PURE__ */ t(Ee, { primaryAction: N, secondaryActions: [] }))), /* @__PURE__ */ t("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ o("div", { className: "flex flex-1 justify-between p-2", children: [
    g,
    p
  ] }) });
}, ss = ({
  search: e,
  onSearch: n,
  searchPlaceholder: r,
  disabled: a = !1,
  goToFirst: l,
  goToLast: s
}) => /* @__PURE__ */ o("div", { className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover", children: [
  /* @__PURE__ */ t(G, { icon: Il, size: "md" }),
  /* @__PURE__ */ t(
    "input",
    {
      disabled: a,
      onKeyDown: (c) => {
        c.key === "ArrowDown" ? (c.preventDefault(), c.stopPropagation(), Xe(c.currentTarget, l)) : c.key === "ArrowUp" ? (c.preventDefault(), c.stopPropagation(), Qe(c.currentTarget, s)) : c.key === "Enter" && (c.preventDefault(), c.stopPropagation());
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
] }), rt = 384, at = 36, is = 37, Yt = 1, Jt = 200, Zt = '[data-avatarname-navigator-element="true"]', os = ({
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
  onGroupChange: g,
  onToggleExpand: p,
  searchPlaceholder: v,
  selectAllLabel: N,
  clearLabel: I,
  notFoundTitle: P,
  notFoundSubtitle: T,
  className: O,
  actions: L,
  onCreate: F,
  onCreateLabel: M,
  singleSelector: E = !1,
  loading: y = !1,
  disabled: C = !1,
  hiddenAvatar: x = !1
}) => {
  const k = ie.useRef(null), B = q(
    () => e ? n.reduce(
      (_, X) => _ + (X.subItems?.length ?? 0),
      0
    ) : n.length,
    [n, e]
  ), w = U(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: 0 });
    }, Yt), setTimeout(() => {
      Array.from(
        document.querySelectorAll(Zt)
      )[0]?.focus();
    }, Jt);
  }, []), S = U(() => {
    setTimeout(() => {
      k.current?.scrollTo({ top: k.current?.scrollHeight });
    }, Yt), setTimeout(() => {
      const _ = Array.from(
        document.querySelectorAll(Zt)
      );
      _[_.length - 1]?.focus();
    }, Jt);
  }, []), A = q(
    () => new Map(h.map((_) => [_.id, _])),
    [h]
  ), j = U(
    (_) => {
      const X = A.get(_.id);
      if (!e)
        return {
          selected: !!X,
          partialSelected: !!X
        };
      const te = (_.subItems ?? []).filter(
        (re) => X?.subItems?.some(
          (fe) => fe.subId === re.subId
        )
      ), Q = (_.subItems?.length ?? 0) === te.length, de = !Q && te.length > 0;
      return { selected: Q, partialSelected: de };
    },
    [e, A]
  ), K = U(
    (_) => {
      if (_.index === 0 && F)
        return /* @__PURE__ */ t(
          qt,
          {
            label: M ?? "",
            onCreate: () => F?.(l),
            goToFirst: w,
            goToLast: S
          }
        );
      const X = F ? _.index - 1 : _.index, te = n[X], { selected: Q, partialSelected: de } = j(te);
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: te.expanded ?? !1,
          onExpand: () => p(te, !0),
          search: l,
          groupView: e,
          entity: te,
          onSelect: s,
          onRemove: i,
          selected: Q,
          partialSelected: de,
          showGroupIcon: cs(r, a),
          singleSelector: E,
          goToFirst: w,
          goToLast: S,
          disabled: C,
          hiddenAvatar: x
        },
        te.id
      );
    },
    [
      F,
      M,
      C,
      n,
      j,
      w,
      S,
      e,
      r,
      x,
      i,
      s,
      p,
      l,
      a,
      E
    ]
  ), Z = q(() => e ? n.flatMap((_) => {
    const X = ze(
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
          expanded: _.expanded ?? X?.expanded ?? !1,
          subItems: _.subItems,
          subSearchKeys: _.searchKeys
        }
      },
      ...(_.subItems ?? []).map((te) => ({
        parent: {
          ..._,
          expanded: _.expanded ?? X?.expanded ?? !1
        },
        subItem: te
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
  })), [e, n, h]), $ = U(
    (_) => {
      if (_.index === 0 && F)
        return /* @__PURE__ */ t(
          qt,
          {
            label: M ?? "",
            onCreate: () => F?.(l),
            goToFirst: w,
            goToLast: S
          }
        );
      const X = F ? _.index - 1 : _.index, te = Z[X].parent, Q = Z[X].subItem;
      if (!te) {
        const re = {
          id: Q.subId,
          name: Q.subName,
          avatar: Q.subAvatar,
          subItems: Q.subItems,
          expanded: Q.expanded,
          searchKeys: Q.subSearchKeys
        }, fe = ze(
          h,
          re.id
        ), he = (re?.subItems ?? []).filter(
          (Fe) => fe?.subItems?.some(
            (xr) => xr.subId === Fe.subId
          )
        ), Pe = (re.subItems?.length ?? 0) === he.length, br = !Pe && he.length > 0;
        return /* @__PURE__ */ t(
          $e,
          {
            groupView: !0,
            expanded: re.expanded ?? !1,
            onExpand: (Fe) => p(re, Fe),
            search: l,
            entity: re,
            onSelect: s,
            onRemove: i,
            selected: Pe,
            partialSelected: br,
            showGroupIcon: r.find((Fe) => Fe.value === a)?.groupType === "team",
            singleSelector: E,
            goToFirst: w,
            goToLast: S,
            hideLine: X === Z.length - 1,
            disabled: C,
            hiddenAvatar: x
          }
        );
      }
      let de = !!ze(h, Q.subId);
      if (!de) {
        const re = ze(
          h,
          te.id
        );
        de = !!(te?.subItems ?? []).filter(
          (he) => re?.subItems?.some(
            (Pe) => Pe.subId === he.subId
          )
        ).find((he) => he.subId === Q.subId);
      }
      return /* @__PURE__ */ t(
        $e,
        {
          expanded: !1,
          onExpand: () => null,
          search: l,
          groupView: !1,
          entity: {
            id: Q.subId,
            name: Q.subName,
            avatar: Q.subAvatar,
            searchKeys: Q.subSearchKeys
          },
          onSelect: () => {
            d(te, Q);
          },
          onRemove: () => c(te, Q),
          selected: !!de,
          partialSelected: !1,
          singleSelector: E,
          goToFirst: w,
          goToLast: S,
          isChild: !0,
          hiddenAvatar: x
        }
      );
    },
    [
      Z,
      h,
      l,
      E,
      w,
      S,
      s,
      i,
      r,
      C,
      p,
      a,
      d,
      c,
      x,
      F,
      M
    ]
  ), [Ae, nt] = q(() => {
    if (!n.length)
      return [!1, !1];
    let _ = 0, X = 0;
    if (!e)
      _ = n.length, X = n.reduce(
        (de, { id: re }) => de + (A.has(re) ? 1 : 0),
        0
      );
    else {
      const de = new Set(
        [...A.values()].flatMap(
          (re) => re.subItems?.map((fe) => fe.subId) ?? []
        )
      );
      n.forEach((re) => {
        const fe = re.subItems ?? [];
        _ += fe.length, X += fe.filter(
          (he) => de.has(he.subId)
        ).length;
      });
    }
    const te = _ > 0 && X === _, Q = X > 0;
    return [te, Q];
  }, [n, A, e]), Le = Z.length, hr = !E && (N || I), gr = L && L.length > 0, pr = !y && (!E && hr || gr);
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex w-full flex-col rounded-l-xl border-0",
        E || y ? "rounded-r-xl" : "",
        O
      ),
      children: [
        /* @__PURE__ */ o(
          "header",
          {
            className: b(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              E || y ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                ss,
                {
                  search: l,
                  onSearch: m,
                  searchPlaceholder: v,
                  goToFirst: w,
                  goToLast: S
                }
              ) }),
              r && r.length > 1 && /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(
                Ue,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: y,
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
              y && /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ t(wn, {}) }),
              !y && !B && /* @__PURE__ */ o(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: rt
                  },
                  children: [
                    /* @__PURE__ */ t("span", { className: "text-lg font-medium", children: P }),
                    /* @__PURE__ */ t("span", { className: "text-center text-f1-foreground-secondary", children: T })
                  ]
                }
              ),
              !y && (!!B || F) && /* @__PURE__ */ t("div", { className: "h-full", children: e ? /* @__PURE__ */ t(
                mt,
                {
                  height: rt,
                  itemCount: Le + (F ? 1 : 0),
                  itemSize: (_) => {
                    if (_ === 0 && F) return at;
                    const X = F ? _ - 1 : _;
                    return Z[X]?.parent === null ? is : at;
                  },
                  renderer: $,
                  ref: k
                }
              ) : /* @__PURE__ */ t(
                mt,
                {
                  height: rt,
                  itemCount: n.length + (F ? 1 : 0),
                  itemSize: at,
                  renderer: K,
                  ref: k
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          ls,
          {
            onSelectAll: u,
            onClear: f,
            singleSelector: E,
            totalFilteredEntities: B,
            allVisibleSelected: Ae,
            anyVisibleSelected: nt,
            selectAllLabel: N,
            clearLabel: I,
            disabled: C,
            actions: L
          }
        )
      ]
    }
  );
}, ze = (e, n) => e.find((r) => r.id === n), cs = (e, n) => e.find((r) => r.value === n)?.groupType === "team", ds = ({
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
) }), us = ({
  groupView: e,
  onSubItemRemove: n,
  onRemove: r,
  selectedEntities: a,
  selectedLabel: l,
  disabled: s = !1,
  hiddenAvatar: i = !1
}) => {
  const c = q(() => {
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
            ds,
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
}, fs = 500, Xt = 520, Qt = 210, en = ({
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
  const g = (s ?? Xt) < fs, p = !c && !i && !g, v = s ?? Xt, N = p ? v - Qt : v;
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
            style: { width: N + 1 + "px" },
            children: /* @__PURE__ */ t(
              os,
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
        p && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: Qt + "px"
            },
            children: /* @__PURE__ */ t(
              us,
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
}, ms = ({
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
  maxLength: g,
  loading: p = !1,
  required: v = !1,
  readonly: N = !1,
  append: I,
  size: P = "sm",
  open: T
}) => {
  const O = q(
    () => r.some(
      (E) => E.subItems && E.subItems.length > 0
    ),
    [r]
  ), L = q(() => O ? r.flatMap(
    (E) => (E.subItems ?? []).map((y) => ({
      parent: E,
      subItem: y
    }))
  ) : r.map((E) => ({
    parent: null,
    subItem: {
      subId: E.id,
      subName: E.name,
      subAvatar: E.avatar,
      subDeactivated: E.deactivated
    }
  })), [O, r]), F = L.length === 0 ? void 0 : L.length === 1 ? L[0].subItem.subName : L.length + " " + n, M = L.length === 1 ? L[0].subItem.subName : void 0;
  return /* @__PURE__ */ t(
    la,
    {
      onClickContent: m,
      role: "combobox",
      label: s,
      labelIcon: i,
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
      size: P,
      avatar: l || !M ? void 0 : {
        type: "person",
        firstName: M,
        lastName: "",
        src: L[0].subItem.subAvatar,
        deactivated: L[0].subItem.subDeactivated
      },
      append: I ?? /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(sa, { open: T, disabled: a, size: P }) }),
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
  ), a = (y) => {
    r(y), e.onOpenChange?.(y);
  };
  W(() => {
    e.defaultOpen && n && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [l, s] = D(e.entities), [i, c] = D(""), [d, f] = ia("", 300), u = q(
    () => e.entities.some(
      (y) => y.subItems && y.subItems.length > 0
    ),
    [e.entities]
  ), m = ke(oa), g = m.portalContainer && (m.position === "center" || m.position === "fullscreen") ? m.portalContainer : void 0;
  function p(y) {
    if (e.singleSelector) {
      e.onSelect(y), r(!1);
      return;
    }
    const C = e.selectedEntities ?? [], x = l.find((A) => A.id === y.id);
    if (!x)
      return;
    const k = new Set(
      (x.subItems ?? []).map((A) => A.subId)
    ), B = /* @__PURE__ */ new Set([x.id]);
    l.forEach((A) => {
      A.id !== x.id && (A.subItems ?? []).some(
        (K) => k.has(K.subId)
      ) && B.add(A.id);
    });
    const w = [...C];
    function S(A) {
      const j = w.findIndex((K) => K.id === A.id);
      j >= 0 ? w[j] = A : w.push(A);
    }
    B.forEach((A) => {
      const j = l.find(($) => $.id === A);
      if (!j) return;
      const K = j.subItems?.filter(
        ($) => k.has($.subId)
      ) ?? [], Z = w.findIndex(($) => $.id === A);
      if (Z >= 0) {
        const $ = w[Z].subItems ?? [], Ae = new Set($.map((Le) => Le.subId)), nt = [
          ...$,
          ...K.filter((Le) => !Ae.has(Le.subId))
        ];
        S({
          ...j,
          subItems: nt
        });
      } else
        S({
          ...j,
          subItems: K
        });
    }), e.onSelect(w);
  }
  function v(y, C) {
    if (e.singleSelector)
      e.onSelect({ ...y, subItems: [{ ...C }] }), r(!1);
    else {
      const x = e.selectedEntities ?? [], k = new Set(x.map((S) => S.id)), B = new Map(
        x.map((S) => [S.id, S.subItems ?? []])
      );
      k.add(y.id), e.entities.forEach((S) => {
        S.subItems?.some(
          (j) => j.subId === C.subId
        ) && k.add(S.id);
      });
      const w = [];
      e.entities.forEach((S) => {
        if (k.has(S.id)) {
          let j = [...B.get(S.id) ?? []];
          S.subItems?.some(
            ($) => $.subId === C.subId
          ) && (j.some(
            (Ae) => Ae.subId === C.subId
          ) || j.push(C));
          const Z = new Set(
            (S.subItems ?? []).map(($) => $.subId)
          );
          j = j.filter(
            ($) => Z.has($.subId)
          ), w.push({
            ...S,
            subItems: j
          });
        }
      }), e.onSelect(w);
    }
  }
  function N(y) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let C = [];
    const x = e.selectedEntities ?? [];
    if (u) {
      const k = l.find(
        (w) => w.id === y.id
      );
      if (!k)
        return;
      const B = new Set(
        (k.subItems ?? []).map((w) => w.subId)
      );
      for (const w of x) {
        const S = (w.subItems ?? []).filter(
          (A) => !B.has(A.subId)
        );
        S.length > 0 && C.push({
          ...w,
          subItems: S
        });
      }
    } else
      C = (x ?? []).filter((k) => k.id !== y.id);
    e.onSelect(C);
  }
  function I(y, C) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const x = e.selectedEntities ?? [], k = C.subId, B = [];
    for (const w of x) {
      const S = w.subItems?.filter((A) => A.subId !== k) ?? [];
      S.length > 0 && B.push({
        ...w,
        subItems: S
      });
    }
    e.onSelect(B);
  }
  function P() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const y = e.selectedEntities ?? [];
    let C = [];
    if (u) {
      const x = new Set(
        l.flatMap(
          (k) => (k.subItems ?? []).map((B) => B.subId)
        )
      );
      for (const k of y) {
        const B = (k.subItems ?? []).filter(
          (w) => !x.has(w.subId)
        );
        B.length > 0 && C.push({
          ...k,
          subItems: B
        });
      }
    } else {
      const x = new Set(
        l.map((k) => k.id)
      );
      C = (y ?? []).filter((k) => !x.has(k.id));
    }
    e.onSelect(C);
  }
  function T() {
    const y = [...e.selectedEntities ?? []];
    l.forEach((C) => {
      const x = y.find((k) => k.id === C.id);
      if (!x)
        y.push({
          ...C,
          subItems: C.subItems || []
        });
      else {
        const k = Array.from(
          /* @__PURE__ */ new Set([
            ...x.subItems ?? [],
            ...C.subItems ?? []
          ])
        );
        x.subItems = k;
      }
    }), e.singleSelector || e.onSelect(y);
  }
  const O = (y) => {
    c(y), f(y);
  }, L = (y, C) => {
    e.onItemExpandedChange(y.id, C), s(
      l.map(
        (x) => x.id === y.id ? { ...x, expanded: !y.expanded } : x
      )
    );
  };
  W(() => {
    if (!d) {
      s(e.entities);
      return;
    }
    if (u && !e.applySearchToGroup) {
      const C = e.entities.map((x) => {
        const k = hs(x, d), B = x.subItems?.map((w) => ({
          ...w,
          score: Ge(
            d,
            w.subSearchKeys ?? [w.subName]
          )
        })).filter((w) => w.score < 1 / 0).sort((w, S) => w.score - S.score);
        return {
          ...x,
          score: k,
          expanded: x.expanded ?? (B?.length ?? 0) > 0,
          subItems: B
        };
      }).filter((x) => x.score < 1 / 0).sort((x, k) => x.score - k.score);
      s(C);
    } else {
      const y = e.entities.map((C) => {
        const x = Ge(
          d,
          C.searchKeys ?? [C.name]
        );
        return { ...C, score: x };
      }).filter((C) => C.score < 1 / 0).sort((C, x) => C.score - x.score);
      s(y);
    }
  }, [
    d,
    e.entities,
    e.applySearchToGroup,
    u,
    s
  ]);
  const F = z(null), [M, E] = D(0);
  return Tn(() => {
    const y = () => {
      F.current && E(F.current.offsetWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
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
          onSubItemRemove: I,
          onSubItemSelect: v,
          onClear: P,
          onSelectAll: T,
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
          width: e.width ?? M - 2,
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
          ms,
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
            onSubItemRemove: I,
            onSubItemSelect: v,
            onClear: P,
            onSelectAll: T,
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
    const l = ht(a), s = tn(a), i = ht(e);
    if (l.includes(i) || r.every(
      (d) => s.some((f) => f.includes(d))
    ))
      return 1;
  }
  return 1 / 0;
}
function hs(e, n) {
  const r = Ge(n, e.searchKeys ?? [e.name]);
  let a = 1 / 0;
  return e.subItems?.length && (a = e.subItems.reduce((l, s) => {
    const i = Ge(
      n,
      s.subSearchKeys ?? [s.subName]
    );
    return Math.min(l, i);
  }, 1 / 0)), Math.min(r, a);
}
const gs = ({
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
  const { ref: f } = ot({
    threshold: 0.1,
    onChange(h) {
      h && d?.(e);
    }
  }), u = Bn(n, {
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
          /* @__PURE__ */ t("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: `${s} · ${u}` }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "ml-1", children: i && /* @__PURE__ */ t("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, ps = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ t(R, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ o("div", { className: "flex-1", children: [
    /* @__PURE__ */ t(R, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ t(R, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), Lt = J(
  "ActivityItem",
  ne(gs, ps)
), Qn = ({
  title: e,
  children: n
}) => /* @__PURE__ */ o("div", { children: [
  /* @__PURE__ */ t("div", { className: "pb-2 pl-2 pt-1", children: /* @__PURE__ */ t("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: e }) }),
  /* @__PURE__ */ t("div", { className: "flex flex-col gap-1", children: n })
] }), bs = ({
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
)) }), xs = ({
  title: e,
  numItems: n
}) => /* @__PURE__ */ t(Qn, { title: e, children: Array.from({ length: n }).map((r, a) => /* @__PURE__ */ t(Lt.Skeleton, {}, a)) }), Me = ne(bs, xs), vs = 3, ws = ["today", "yesterday", "lastWeek", "lastMonth"], ys = (e) => ma(e, ([n]) => {
  const r = ws.indexOf(n);
  return r === -1 ? -Number(n) : r - 4e3;
}), gt = () => /* @__PURE__ */ t("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), Ns = ({
  items: e,
  loadingMoreItems: n = !1,
  onClickItem: r,
  onEndReached: a,
  onEndReachedItemsThreshold: l = 5
}) => {
  const s = se(), i = nl(e, "createdAt"), c = Object.values(i).slice().flatMap((u) => u.map((m) => m.id)).slice(-l), d = fa((u) => {
    c.includes(u) && a?.();
  }, 1e3), f = ys(
    Object.entries(i).filter(([u, m]) => !!m.length)
  );
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 p-2", children: [
    f.map(([u, m], h) => /* @__PURE__ */ o(ie.Fragment, { children: [
      /* @__PURE__ */ t(
        Me,
        {
          title: u in s.date.groups ? s.date.groups[u] : u,
          items: m,
          onClickItem: r,
          onItemVisible: d
        }
      ),
      h !== f.length - 1 && /* @__PURE__ */ t(gt, {})
    ] }, u)),
    n && new Array(vs).fill(null).map((u, m) => /* @__PURE__ */ t(Lt.Skeleton, {}, m))
  ] });
}, Is = () => {
  const e = se();
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
}, dc = J(
  "ActivityItemList",
  ne(Ns, Is)
), Cs = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, ks = {
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
function Ss({
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
      className: b(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        r ? "" : ks[ha(
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
              className: b(
                "absolute -right-0.5",
                r ? "bottom-0.5" : "-bottom-[3px]"
              ),
              children: /* @__PURE__ */ t(
                $n,
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
function As(e) {
  const n = z(null), r = z(), a = U(() => {
    const s = n.current;
    if (!s) return;
    const i = ga.create(s, {
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
const Ls = ({
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
  const [m, h] = D(i), g = z(null);
  W(() => {
    h(i);
  }, [i]);
  const p = (O) => {
    h(O), c?.(O);
  }, v = Ye(), { canvasRef: N, handleMouseEnter: I, handleMouseLeave: P } = As(v), T = wt({
    emoji: Cs[d],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    we,
    {
      href: e,
      onClick: l,
      className: b(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        le()
      ),
      onMouseEnter: v ? void 0 : I,
      onMouseLeave: v ? void 0 : P,
      children: [
        /* @__PURE__ */ t(
          "canvas",
          {
            ref: N,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ t(
          Ss,
          {
            firstName: n,
            lastName: r,
            src: a,
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
}, Fs = () => /* @__PURE__ */ o(
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
), uc = ne(Ls, Fs), fc = ({
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
function Es({
  emoji: e,
  initialCount: n,
  hasReacted: r = !1,
  users: a,
  onInteraction: l
}) {
  const [s, i] = D(r), [c, d] = D(n), f = z(null), { fireEmojiConfetti: u } = pa(), m = (p, v) => {
    p.stopPropagation(), d(c + (s ? -1 : 1)), i(!s), l?.(v), s || u(v, f);
  }, h = a?.map((p) => p.name).join(", ") || "", g = /* @__PURE__ */ t(
    An,
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
            s ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return h ? /* @__PURE__ */ t(be, { label: h, children: g }) : g;
}
function Ds({ items: e, onInteraction: n, locale: r, action: a }) {
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
    /* @__PURE__ */ t($n, { onSelect: n, locale: r }),
    e.map((l) => /* @__PURE__ */ t(
      Es,
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
const _s = J("Reactions", Ds), er = H(function({ content: n, collapsed: r, id: a, className: l, tabIndex: s }, i) {
  return /* @__PURE__ */ t(
    va,
    {
      ref: i,
      id: a,
      content: n,
      tabIndex: s,
      className: b(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        l
      )
    }
  );
});
er.displayName = "BasePostDescription";
const Os = () => /* @__PURE__ */ o("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ t(R, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ t(R, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), tr = ne(
  er,
  Os
), nn = ({ tags: e, right: n }) => /* @__PURE__ */ t(
  "div",
  {
    className: b(
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
), pt = H(
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
), Ps = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), nr = (e) => {
  if (!e) return !1;
  if (e.indexOf("//s3.") >= 0)
    return e.indexOf("response-content-type=video") >= 0;
  const r = (e?.split(".")).at(-1);
  return !!r && Ps.has(r);
}, Ts = ({
  title: e,
  mediaUrl: n,
  place: r,
  date: a
}) => {
  let l = rl(a);
  const s = (i) => {
    i.stopPropagation();
  };
  return r && (l = `${l} · ${r}`), /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    n && /* @__PURE__ */ t("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: nr(n) ? /* @__PURE__ */ t(
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
}, Rs = () => /* @__PURE__ */ o(
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
), rr = ne(Ts, Rs), zs = ({
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
      className: b(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        le()
      ),
      "aria-controls": n,
      "aria-describedby": e,
      "aria-expanded": r,
      onClick: a,
      children: l.actions.seeMore
    }
  ) });
}, Bs = ({
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
  actions: g,
  dropdownItems: p,
  noReactionsButton: v = !1,
  descriptionExpandable: N = !1
}) => {
  const I = ut(), P = ut(), T = z(null), [O, L] = D(null), [F, M] = D(!1), E = [f.views, f.comments].filter(Boolean).join(" · "), y = N && O?.id === e && O.description === s, C = !y, x = Bn(a), k = () => {
    i(e);
  }, B = (A) => {
    A.stopPropagation();
  }, w = n ? `${n.firstName} ${n.lastName}` : void 0, S = (A) => {
    A.preventDefault(), A.stopPropagation(), s && L({ id: e, description: s });
  };
  return W(() => {
    y && T.current?.focus();
  }, [y]), W(() => {
    N || L(null);
  }, [N]), W(() => {
    const A = T.current;
    if (!N || !A || y) {
      M(!1);
      return;
    }
    const j = () => {
      M(
        A.scrollHeight > A.clientHeight
      );
    };
    if (j(), typeof ResizeObserver > "u") return;
    const K = new ResizeObserver(j);
    return K.observe(A), () => K.disconnect();
  }, [N, y, s]), /* @__PURE__ */ o(
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
                    Re,
                    {
                      href: n.url,
                      title: w,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: w
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
                    Ie,
                    {
                      items: p,
                      icon: dt,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
                  Ie,
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
            /* @__PURE__ */ t("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: x }),
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  id: I,
                  className: b(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: l
                }
              ),
              s && /* @__PURE__ */ o(Y, { children: [
                /* @__PURE__ */ t(
                  tr,
                  {
                    ref: T,
                    id: P,
                    content: s,
                    collapsed: C,
                    tabIndex: y ? -1 : void 0,
                    className: b(y && le())
                  }
                ),
                N && F && !y && /* @__PURE__ */ t(
                  zs,
                  {
                    describedBy: I,
                    controls: P,
                    expanded: y,
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
              onClick: B,
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
            _s,
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
}, $s = ({
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
] }), mc = ne(
  Bs,
  $s
), ar = ie.forwardRef(({ person: e, onClick: n, ...r }, a) => {
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
          "bottomTags" in r && /* @__PURE__ */ t("div", { className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1", children: r.bottomTags.map((s, i) => /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(_e, { ...s }, s.text),
            i < r.bottomTags.length - 1 && /* @__PURE__ */ t("span", { children: "·" })
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
}), Ms = () => /* @__PURE__ */ o("div", { className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", children: [
  /* @__PURE__ */ t(R, { className: "aspect-square w-8 rounded-full" }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t(R, { className: "h-4" }),
    /* @__PURE__ */ t(R, { className: "h-4" })
  ] })
] });
ar.displayName = "OnePersonListItem";
const hc = ae(
  J(
    "OnePersonListItem",
    ne(ar, Ms)
  )
), Ws = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function js({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  return /* @__PURE__ */ t(Ol, { children: /* @__PURE__ */ t(
    Us,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function Us({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: l
}) {
  const s = a?.enabled ? Ia : l?.enabled ? Zl : Xa, i = a?.enabled ? a : l?.enabled ? l : void 0;
  return /* @__PURE__ */ t(s, { ...i, children: /* @__PURE__ */ t(
    Ks,
    {
      ai: a,
      aiPromotion: l,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const gc = J(
  "ApplicationFrame",
  js
), Vs = ({ contentId: e }) => {
  const n = se();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: le(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function Gs(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function Hs(e, n) {
  const { sidebarState: r, toggleSidebar: a } = Se(), l = z(e);
  W(() => {
    n && Gs(
      e,
      l.current,
      r
    ) && a({ isInvokedByUser: !1 }), l.current = e;
  }, [e, n, r, a]);
}
function Ks({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: l
}) {
  const { sidebarState: s, toggleSidebar: i, isSmallScreen: c, setForceFloat: d } = Se(), f = Ye(), {
    open: u,
    visualizationMode: m,
    canvasContent: h,
    canvasEntities: g,
    closeCanvas: p,
    chatWidth: v,
    resizable: N
  } = Ca(), I = m === "fullscreen", P = m === "canvas", { open: T } = Ze(), O = N ? v : ka, L = z(I), F = I && !L.current, M = !I && L.current, [
    E,
    y
  ] = D(!1);
  W(() => {
    !I && L.current && y(!0), L.current = I;
  }, [I]);
  const C = I || E || M, x = q(() => F ? { duration: 0.15, ease: "easeOut" } : M ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [F, M]), k = it(
    `(max-width: ${We.xl}px)`,
    { initializeWithValue: !0 }
  ), B = it(`(max-width: ${We.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    d(u);
  }, [u, d]), W(() => {
    d(T);
  }, [T, d]), Hs(u, k), /* @__PURE__ */ t(
    al,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ o("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: l }),
        /* @__PURE__ */ t(Ln, { id: "ai-chat-group", children: /* @__PURE__ */ o("div", { className: "relative isolate flex h-full", children: [
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
              ref: (w) => {
                s === "hidden" ? w?.setAttribute("inert", "") : w?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(Vs, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ o(
            ee.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: u && !B ? O : 0
              },
              transition: { paddingRight: Ws },
              children: [
                /* @__PURE__ */ t(
                  ee.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: b(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      C ? "overflow-hidden" : "overflow-auto",
                      !u && !T && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      ee.div,
                      {
                        className: b(
                          "flex max-w-full flex-1",
                          C ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && P && h && /* @__PURE__ */ t(
                  "div",
                  {
                    className: b(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      B ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: B ? void 0 : { right: O },
                    children: /* @__PURE__ */ t(
                      Sa,
                      {
                        content: h,
                        onClose: p,
                        entities: g
                      }
                    )
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  ee.div,
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
                        C || P ? "z-20" : "z-0",
                        s === "hidden" && C ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: B || I ? "100%" : O
                    },
                    transition: x,
                    onAnimationComplete: () => {
                      E && y(!1);
                    },
                    children: /* @__PURE__ */ t(Aa, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(Jl, {})
        ] }) })
      ] })
    }
  );
}
const qs = pe({
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
  const { sidebarState: l, toggleSidebar: s, isSmallScreen: i } = Se();
  return /* @__PURE__ */ o(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: qs({ period: r }) }),
        n && /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ o("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (i || l === "hidden") && /* @__PURE__ */ t(
              V,
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
                    ll,
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
lr.displayName = "DaytimePage";
const pc = ae(
  J("DaytimePage", lr)
);
function Ys(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: l, target: s }) => ({
    label: n,
    description: r,
    href: a,
    onClick: l ? () => l(void 0) : void 0
  }));
}
function Js({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(Ie, { items: Ys(n), children: /* @__PURE__ */ o(
        "button",
        {
          className: b(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            le()
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
const bc = ae(
  J("OmniButton", Js)
);
function sr({ children: e, header: n, embedded: r = !1 }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: b(
        "flex min-h-full w-full flex-col overflow-hidden bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary",
        !r && "xs:rounded-xl"
      ),
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
sr.displayName = "Page";
const xc = ae(J("Page", sr));
function Zs({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: l = !1,
  additionalOptions: s = []
}) {
  const i = q(
    () => e.find((c) => c.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ o("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(R, { className: "size-6" }),
    /* @__PURE__ */ t(R, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    rn,
    {
      company: i,
      withNotification: l
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Xs,
    {
      companies: e,
      selected: i,
      onChange: r,
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
const Xs = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: l = []
}) => {
  const s = se(), [i, c] = D(!1), d = q(
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
    Ue,
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
            le()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              ee.div,
              {
                animate: { rotate: i ? 180 : 0 },
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
function vc({
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
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(Ie, { items: n, children: /* @__PURE__ */ o(
      "button",
      {
        className: b(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          le("focus-visible:ring-inset")
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
          icon: kn,
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
function Qs({ isExpanded: e }) {
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
function ei() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = Se(), l = z(null);
  return W(() => {
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
        /* @__PURE__ */ t("div", { className: b("hidden", { flex: !a }), children: /* @__PURE__ */ t(Qs, { isExpanded: n === "locked" }) }),
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
    /* @__PURE__ */ t(ei, {})
  ] });
}
function ti() {
  const [e, n] = D(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const ir = Je(void 0);
function ni({ children: e }) {
  const [n, r] = D(!1), [a, l] = D(null);
  return /* @__PURE__ */ t(
    ir.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: l },
      children: e
    }
  );
}
function Ft() {
  const e = ke(ir);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const ri = ({
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
] }), ai = ({ item: e }) => {
  const { isActive: n } = xt(), { label: r, icon: a, ...l } = e, s = n(l.href, { exact: l.exactMatch });
  return /* @__PURE__ */ t(
    we,
    {
      ...l,
      className: b(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        le("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(ri, { item: e, active: s })
    }
  );
}, li = ({
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
  const f = se(), { isDragging: u, setIsDragging: m, draggedItemId: h, setDraggedItemId: g } = Ft(), { isActive: p } = xt(), v = p(e.href, { exact: e.exactMatch }), N = z(!1), [I, P] = D(!1), T = l === 0, O = l === s - 1, L = s === 1, F = q(() => {
    const k = [];
    return !L && !T && k.push({
      label: f.actions.moveUp,
      onClick: () => i?.(l, l - 1),
      icon: Ea
    }), !L && !O && k.push({
      label: f.actions.moveDown,
      onClick: () => i?.(l, l + 1),
      icon: Da
    }), k.length > 0 && k.push({ type: "separator" }), k.push({
      label: f.favorites.remove,
      onClick: () => a?.(e),
      icon: _a,
      critical: !0
    }), k;
  }, [L, T, O, f, i, l, a, e]), M = () => {
    m(!0), P(!1), g(e.href || null), N.current = !0;
  }, E = () => {
    m(!1), g(null), c(), setTimeout(() => {
      N.current = !1;
    }, 0);
  }, y = u && h === e.href, C = q(
    () => b(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      d && "touch-none",
      v ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      I && "bg-f1-background-secondary",
      y && "bg-f1-background-secondary"
    ),
    [v, I, y, d]
  ), x = q(() => /* @__PURE__ */ o(Y, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(ii, { tooltip: n, children: /* @__PURE__ */ o(
      we,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: b(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          y && "pointer-events-none"
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
        className: b(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          I && "bg-f1-background-secondary opacity-100",
          y && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          Ie,
          {
            open: I,
            onOpenChange: P,
            items: F,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(G, { icon: dt, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, v, I, y, F, n]);
  return d ? /* @__PURE__ */ t(
    Mn,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: M,
      onDragEnd: E,
      className: C,
      whileDrag: {
        scale: 1.05
      },
      children: x
    }
  ) : /* @__PURE__ */ t("div", { className: C, children: x });
}, or = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: l,
  isDragging: s,
  wasDragging: i
}) => {
  const [c, d] = D(n), f = Ye(), u = () => {
    if (s || i?.current) return;
    const m = !c;
    d(m), a?.(m);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ o(Pa, { open: c, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ o(
      "div",
      {
        className: b(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          le("focus-visible:ring-inset"),
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
            ee.div,
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
    /* @__PURE__ */ t(Ta, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
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
}, lt = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: l,
  currentOrder: s
}) => {
  const { isDragging: i, setIsDragging: c } = Ft(), d = z(!1), f = sl(), u = () => {
    c(!0), d.current = !0;
  }, m = () => {
    c(!1), setTimeout(() => {
      d.current = !1, s && l?.(s);
    }, 0);
  }, h = (p) => {
    !i && !d.current && a?.(e, p);
  }, g = /* @__PURE__ */ t(
    or,
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
          children: e.items.map((p, v) => /* @__PURE__ */ t(ai, { item: p }, v))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    Mn,
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
  const s = z(null), i = e.filter(
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
  ), g = ti();
  return /* @__PURE__ */ t(ni, { children: /* @__PURE__ */ t(Ln, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    si,
    {
      disableDragging: g,
      nonSortableItems: i,
      sortableItems: c,
      setSortableItems: m,
      containerRef: s,
      onCollapse: n,
      onDragEnd: h,
      favorites: l,
      onFavoritesChange: a,
      forceUpdate: () => u((p) => p + 1)
    },
    f
  ) }) });
}
function si({
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
  const u = se(), { isDragging: m } = Ft(), h = e.some((w) => w.isRoot), g = e.filter((w) => !w.isRoot).length > 0, p = n.length > 0, v = z(null), [N, I] = D(i), P = i.length > 0;
  W(() => {
    JSON.stringify(i) !== JSON.stringify(N) && I(i);
  }, [i]);
  const T = (w) => {
    I(w);
  }, O = U(
    (w) => {
      const S = N.filter((A) => A.href !== w.href);
      I(S), c?.(S);
    },
    [N, c]
  ), L = U(
    (w, S) => {
      if (S < 0 || S >= N.length) return;
      const A = [...N], [j] = A.splice(w, 1);
      A.splice(S, 0, j), I(A), c?.(A);
    },
    [N, c]
  ), [F, M] = D(!1), E = z(null);
  W(() => {
    n.length > 0 && !F && (r([...n]), M(!0));
  }, [n, r, F]), W(() => {
    const w = () => {
      E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        a.current && n.length > 0 && d();
      }, 50);
    };
    return window.addEventListener("resize", w), () => {
      window.removeEventListener("resize", w), E.current !== null && window.clearTimeout(E.current);
    };
  }, [a, n, d]);
  const y = "flex flex-col gap-0.5", C = q(
    () => N.reduce(
      (w, S, A) => (S.label in w || (w[S.label] = []), w[S.label].push(A), w),
      {}
    ),
    [N]
  ), x = q(
    () => P && N.map((w, S) => /* @__PURE__ */ t(
      li,
      {
        isSortable: !f,
        tooltip: (C[w.label] ?? []).length > 1 ? w.tooltip : void 0,
        item: w,
        dragConstraints: v,
        onRemove: O,
        index: S,
        total: N.length,
        onMove: L,
        onReorderFinish: () => {
          c?.(N);
        }
      },
      `${w.href}-${w.label}`
    )),
    [
      P,
      N,
      C,
      O,
      L,
      c,
      f
    ]
  ), k = "flex flex-col gap-3", B = q(() => n.map((w) => /* @__PURE__ */ t(
    lt,
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
      className: b(
        "relative",
        m && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        h && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => w.isRoot).map((w, S) => /* @__PURE__ */ t(
          lt,
          {
            category: w,
            onCollapse: l
          },
          `fixed-${S}`
        )) }),
        P && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(or, { title: u.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: v, children: f ? /* @__PURE__ */ t("div", { className: y, children: x }) : /* @__PURE__ */ t(
          zt,
          {
            axis: "y",
            values: N,
            onReorder: T,
            className: y,
            children: x
          }
        ) }) }) }),
        g && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((w) => !w.isRoot).map((w, S) => /* @__PURE__ */ t(
          lt,
          {
            category: w,
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
            children: f ? /* @__PURE__ */ t("div", { className: k, children: B }) : /* @__PURE__ */ t(
              zt,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: k,
                children: B
              }
            )
          }
        )
      ]
    }
  );
}
const ii = ({
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
        le()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(G, { icon: Ra, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(za, { keys: r }) })
      ]
    }
  ) });
}
const an = ({ position: e }) => /* @__PURE__ */ t(
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
function oi({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: l, isSmallScreen: s } = Se(), i = Ye(), [c, d] = ot({ threshold: 1 }), [f, u] = ot({ threshold: 1 }), m = se(), h = {
    x: {
      ease: l !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: i ? 0 : l !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: i ? 0 : 0.1 },
    left: { duration: i ? 0 : 0.1 },
    default: { duration: i ? 0 : 0.2 }
  }, g = () => r ? Qa(r) && a ? Rn(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
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
          /* @__PURE__ */ o(Oe, { children: [
            !d && /* @__PURE__ */ t(an, { position: "top" }, "shadow-scroll-top"),
            !u && /* @__PURE__ */ t(an, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: g() })
      ]
    }
  );
}
const Ic = ae(oi), ci = {
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
}, di = {
  icon: Fn,
  type: "neutral",
  size: "sm"
}, ui = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, fi = (e) => e in ln ? ln[e] : di;
function sn(e) {
  return ui[e ?? "neutral"] ?? 0;
}
const mi = ({
  title: e,
  approvalsRequired: n = 1,
  status: r,
  approvers: a
}) => {
  const l = se(), s = n === 1 ? l.approvals.requiredNumbers.one : l.approvals.requiredNumbers.other.replace(
    "{{count}}",
    n.toString()
  ), i = l.approvals.statuses[r], c = q(() => a.map((d) => {
    const f = fi(d.status);
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
        /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: s })
      ] }),
      /* @__PURE__ */ t(je, { text: i, variant: ci[r] })
    ] }),
    /* @__PURE__ */ t("div", { className: "w-full", children: /* @__PURE__ */ t(Dn, { avatars: c, layout: "fill", type: "person", size: "md" }) })
  ] });
}, hi = ({ steps: e }) => {
  const r = se().approvals.history, a = e.findIndex((l) => l.status === "pending");
  return /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ t("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: r }),
    /* @__PURE__ */ o("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ t("div", { className: "mt-3.5 flex flex-col items-center", children: e.map((l, s) => /* @__PURE__ */ o("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: b(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              s < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ t("span", { children: s + 1 })
          }
        ),
        s !== e.length - 1 && /* @__PURE__ */ t("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, l.title)) }),
      /* @__PURE__ */ t("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: e.map((l, s) => /* @__PURE__ */ o(Y, { children: [
        /* @__PURE__ */ t(
          mi,
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
}, Cc = ae(
  J("OneApprovalHistory", hi)
), gi = {
  records: [],
  type: "flat",
  groups: []
}, on = (e, n) => "id" in e && (typeof e.id == "string" || typeof e.id == "number" || typeof e.id == "symbol") ? e.id : n ?? JSON.stringify(e), pi = (e) => ({
  type: e.type,
  records: e.records.map((n) => ({
    ...n,
    [Ot]: n[Ot]
  })),
  groups: e.groups
}), bi = (e, n, r) => e.records.length === n.records.length && e.records.every(
  (a, l) => r(a, l) === r(n.records[l], l)
), xi = (e, n, r) => {
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
}, cn = (e, n) => {
  const r = e.paginationInfo, a = n.paginationInfo;
  return r?.type === "pages" || a?.type === "pages" ? r?.type !== "pages" || a?.type !== "pages" || r.currentPage !== a.currentPage : !1;
}, Be = (e) => ({
  data: pi(e.data),
  paginationInfo: e.paginationInfo,
  itemUrl: e.source.itemUrl
});
function vi({
  dataState: e,
  dataStateVersion: n,
  effectiveSnapshotKey: r,
  resetSnapshotKey: a,
  idProvider: l
}) {
  const [s, i] = D(null), [c, d] = D(0), f = z(r), u = z(a), m = z(null), h = z(
    null
  ), g = z(
    null
  ), p = U(() => {
    g.current !== null && (clearTimeout(g.current), g.current = null);
  }, []), v = U(
    (M) => {
      p(), g.current = setTimeout(() => {
        g.current = null;
        const E = m.current;
        !E || E.key !== M || (E.canUseCurrentData = !0, d((y) => y + 1));
      }, 0);
    },
    [p]
  );
  W(() => p, [p]), W(() => {
    if (!e) {
      if (r != null && s != null)
        return;
      m.current = null, h.current = null, p(), i(null), f.current = r, u.current = a;
      return;
    }
    if (r == null) {
      m.current = null, h.current = null, p(), i(null), f.current = r, u.current = a;
      return;
    }
    if (u.current !== a) {
      if (e.isLoading || e.isLoadingMore) return;
      u.current = a, m.current = null, h.current = null, p(), i(Be(e));
      return;
    }
    const M = f.current !== r;
    if (f.current = r, M) {
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
      if (s && (cn(s, e) || e.data.records.length > s.data.records.length)) {
        h.current = null, i(Be(e));
        return;
      }
      (E.sawLoading || n > E.requestedAtVersion) && (h.current = null);
    }
    if (e.isLoading || e.isLoadingMore)
      return;
    const y = m.current?.key === r ? m.current : null;
    if (y) {
      const C = l ?? e.source.idProvider ?? on, x = n > y.requestedAtVersion, k = s ? !bi(
        e.data,
        s.data,
        C
      ) : !0;
      if (!y.canUseCurrentData && !x && !k || !y.canUseCurrentData && x && !k)
        return;
      m.current = null, p(), i(Be(e));
      return;
    }
    i((C) => {
      if (!C)
        return e.data.records.length === 0 ? C : Be(e);
      const x = l ?? e.source.idProvider ?? on, k = xi(
        C.data,
        e.data,
        x
      );
      return e.data.records.length <= C.data.records.length ? k === C.data ? C : {
        ...C,
        data: k
      } : k === C.data ? C : {
        ...C,
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
    s,
    c
  ]);
  const N = !!(h.current && s && e && !e.isLoading && !e.isLoadingMore && (cn(s, e) || e.data.records.length > s.data.records.length)), I = e?.data ?? gi, P = N ? e?.data ?? I : s?.data ?? I, T = N ? e?.paginationInfo ?? null : s?.paginationInfo ?? e?.paginationInfo ?? null, O = U(() => {
    r == null || s == null || (h.current = {
      requestedAtVersion: n,
      sawLoading: !1
    });
  }, [n, r, s]), L = U(() => {
    m.current = null, h.current = null, p(), i(null);
  }, [p]), F = U(() => {
    h.current = null;
  }, []);
  return {
    navigationData: P,
    navigationPaginationInfo: T,
    hasSnapshot: s !== null,
    snapshotItemUrl: s?.itemUrl,
    startPendingNavigation: O,
    clearSnapshot: L,
    clearPendingNavigation: F
  };
}
const dn = () => {
}, un = (e, n, r) => e.source.idProvider?.(n, r) ?? ("id" in n && (typeof n.id == "string" || typeof n.id == "number" || typeof n.id == "symbol") ? n.id : r ?? JSON.stringify(n)), wi = (e, n) => {
  const r = e.data.records.every(
    (l, s) => un(e, l, s) === un(n, l, s)
  ), a = e.data.records.every(
    (l) => e.source.itemUrl?.(l) === n.source.itemUrl?.(l)
  );
  return r && a;
}, yi = (e, n) => e !== null && e.data === n.data && wi(e, n) && e.paginationInfo === n.paginationInfo && e.setPage === n.setPage && e.loadMore === n.loadMore && e.isLoading === n.isLoading && e.isLoadingMore === n.isLoadingMore;
function kc({
  activeItemId: e,
  defaultActiveItemId: n,
  onActiveItemChange: r,
  idProvider: a,
  itemUrl: l,
  snapshotMode: s,
  snapshotKey: i
} = {}) {
  const c = s ?? (i != null ? "manual" : "live"), [d, f] = D(0), [u, m] = D(0), [h, g] = D(0), p = c === "manual" ? i : c === "session" ? d : null, [v, N] = D({
    state: null,
    version: 0
  }), I = v.state, P = v.version, T = U(
    (K) => {
      N((Z) => K === null ? Z.state === null ? Z : { state: null, version: Z.version + 1 } : yi(Z.state, K) ? Z : { state: K, version: Z.version + 1 });
    },
    []
  ), {
    navigationData: O,
    navigationPaginationInfo: L,
    hasSnapshot: F,
    snapshotItemUrl: M,
    startPendingNavigation: E,
    clearSnapshot: y,
    clearPendingNavigation: C
  } = vi({
    dataState: I,
    dataStateVersion: P,
    effectiveSnapshotKey: p,
    resetSnapshotKey: u,
    idProvider: a
  }), x = il({
    dataSource: I?.source ?? {},
    data: O,
    paginationInfo: L,
    setPage: I?.setPage ?? dn,
    loadMore: I?.loadMore ?? dn,
    isLoading: !!(I?.isLoading || I?.isLoadingMore),
    idProvider: a,
    itemUrl: l ?? I?.source.itemUrl ?? M,
    activeItemId: e,
    defaultActiveItemId: n,
    onActiveItemChange: r
  }), k = U(() => {
    x.hasNext && x.nextItem === null && !x.isNavigating && E(), x.goToNext();
  }, [x, E]), B = U(() => {
    x.hasPrevious && x.previousItem === null && !x.isNavigating && E(), x.goToPrevious();
  }, [x, E]), w = U(
    (K) => {
      C(), c === "session" && f((Z) => Z + 1), x.setActiveItemId(K);
    },
    [C, c, x]
  ), S = U(() => {
    y(), c === "session" && f((K) => K + 1), g((K) => K + 1), x.setActiveItemId(null);
  }, [y, c, x]), A = U(() => {
    C(), m((K) => K + 1);
  }, [C]), j = q(() => !x.activeItem || x.activeIndex < 0 ? null : {
    activeItemId: x.activeItemId,
    activeItem: x.activeItem,
    activeItemUrl: x.activeItemUrl,
    currentIndex: x.absoluteIndex ?? x.activeIndex,
    totalCount: x.totalItems ?? x.loadedItemsCount,
    previousItem: x.previousItem,
    nextItem: x.nextItem,
    canGoPrevious: x.hasPrevious && !x.isNavigating,
    canGoNext: x.hasNext && !x.isNavigating,
    goToPrevious: B,
    goToNext: k,
    isNavigating: x.isNavigating,
    previousItemUrl: x.previousItemUrl,
    nextItemUrl: x.nextItemUrl
  }, [k, B, x]);
  return q(
    () => ({
      ...x,
      goToNext: k,
      goToPrevious: B,
      isReady: I !== null || F,
      controls: j,
      openItem: w,
      closeItem: S,
      resetSnapshot: A,
      [cl]: T,
      [ol]: h
    }),
    [
      x,
      I,
      F,
      j,
      k,
      B,
      w,
      S,
      h,
      A,
      T
    ]
  );
}
const Ni = (e) => e, Ii = (e) => String(e), De = (e, n) => e === n, Ci = ({
  routeId: e
}) => e ?? null, Sc = ({
  itemNavigation: e,
  routeId: n,
  parseRouteId: r = Ni,
  formatItemId: a = Ii,
  onRouteIdChange: l
}) => {
  const [s, i] = D(
    () => Ci({ routeId: n })
  ), c = z(null), d = z(void 0), f = z(null), u = z(null), m = z(null), h = z(
    e?.activeItemId ?? null
  ), g = z(e), p = z(
    Bt(e)
  ), v = z(/* @__PURE__ */ new Set());
  W(() => {
    const I = g.current !== e;
    g.current = e;
    const P = Bt(e), T = P !== void 0 && p.current !== P;
    p.current = P;
    const O = d.current !== (n ?? null);
    if (d.current = n ?? null, O && f.current !== n && (f.current = null), n == null) {
      c.current = null, u.current = null, f.current = null, v.current.clear(), i(null);
      const M = e?.activeItemId ?? null;
      M == null ? m.current = null : De(m.current, M) || (m.current = M, e?.closeItem());
      return;
    }
    const L = r(n);
    if (!e) {
      O && i(n);
      return;
    }
    if (v.current.has(n)) {
      if (!De(e.activeItemId ?? null, L)) {
        f.current = n;
        return;
      }
      v.current.clear(), f.current = null, c.current = n, u.current = null, i(n);
      return;
    }
    f.current !== n && (O && i(n), !(c.current === n && (!I || e.activeItemId != null || T)) && (m.current = null, c.current = n, u.current = De(
      e.activeItemId ?? null,
      L
    ) ? null : L, e.openItem(L)));
  }, [e, r, n]), W(() => {
    if (n == null) return;
    const I = e?.activeItemId ?? null;
    if (De(I, h.current)) return;
    if (h.current = I, I == null) {
      if (u.current != null) return;
      u.current = null, v.current.clear(), f.current = n, c.current = null, i(null), l?.(null, null);
      return;
    }
    const P = u.current;
    if (P != null) {
      De(I, P) && (u.current = null);
      return;
    }
    const T = a(I);
    T !== s && (v.current.add(T), i(T), l?.(T, I));
  }, [
    s,
    a,
    e?.activeItemId,
    l,
    n
  ]);
  const N = n == null ? null : s;
  return {
    activeRouteId: N,
    activeItemId: N == null ? null : e?.activeItemId ?? null,
    controls: N == null ? null : e?.controls ?? null
  };
};
function Ac(e, n) {
  return q(() => {
    if (!e) return null;
    const { previousItem: r, nextItem: a, previousItemUrl: l, nextItemUrl: s } = e;
    return {
      previous: l !== null ? {
        url: l,
        title: (r !== null ? n?.getItemTitle?.(r) : void 0) ?? "Previous"
      } : void 0,
      next: s !== null ? {
        url: s,
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
}, ki = pe({
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
}), Si = ie.forwardRef(function({ className: n, gap: r, children: a, tileSize: l, ...s }, i) {
  return /* @__PURE__ */ t("div", { className: b("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ t(
    "div",
    {
      className: b(ki({ gap: r, tileSize: l }), n),
      ref: i,
      ...s,
      children: a
    }
  ) });
}), Ai = pe({
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
}, v) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: b(
        Ai({
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
          width: g
        }),
        n
      ),
      ref: v,
      ...p
    }
  );
}), Li = pe({
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
}), Fi = ie.forwardRef(function({ className: n, gap: r, wrap: a, ...l }, s) {
  return /* @__PURE__ */ t(
    cr,
    {
      className: b(Li({ gap: r, wrap: a }), n),
      ref: s,
      ...l
    }
  );
}), Ei = pe({
  base: "flex-col",
  variants: {
    gap: {
      ...Et
    }
  },
  defaultVariants: {}
}), Di = H(function({ className: n, gap: r, children: a, ...l }, s) {
  return /* @__PURE__ */ t(
    cr,
    {
      className: b(Ei({ gap: r }), n),
      ref: s,
      ...l,
      children: a
    }
  );
}), Lc = ue(
  {
    name: "Stack",
    type: "layout"
  },
  Di
), Fc = ue(
  {
    name: "Split",
    type: "layout"
  },
  Fi
), Ec = ue(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Si
), _i = ({ children: e }) => {
  const { enabled: n } = Wn();
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
}, Oi = () => /* @__PURE__ */ t("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), Pi = H(function({ header: n, children: r, action: a, summaries: l, alert: s, status: i, fullHeight: c = !1 }, d) {
  const { enabled: f, toggle: u } = Wn();
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
              n.title && /* @__PURE__ */ t(It, { className: "truncate", children: n.title }),
              n.subtitle && /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
                /* @__PURE__ */ t(Oi, {}),
                /* @__PURE__ */ t(jn, { className: "truncate", children: n.subtitle })
              ] }),
              n.info && /* @__PURE__ */ t(be, { label: n.info, children: /* @__PURE__ */ t(
                G,
                {
                  icon: _n,
                  size: "sm",
                  className: "text-f1-foreground-secondary"
                }
              ) }),
              n.count && /* @__PURE__ */ t("div", { className: "ml-0.5", children: /* @__PURE__ */ t(qe, { value: n.count }) })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
              s && /* @__PURE__ */ t(On, { text: s, level: "critical" }),
              i && /* @__PURE__ */ t(je, { text: i.text, variant: i.variant }),
              n.link && /* @__PURE__ */ t(
                dl,
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
            /* @__PURE__ */ t(_i, { children: /* @__PURE__ */ t(ul, { children: n.comment }) }),
            !!n.canBeBlurred && /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
              V,
              {
                icon: f ? Ba : $a,
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
          l && /* @__PURE__ */ t("div", { className: "flex flex-row", children: l.map((g, p) => /* @__PURE__ */ o("div", { className: "grow", children: [
            /* @__PURE__ */ t("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: g.label }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-end gap-0.5 text-2xl font-semibold", children: [
              !!g.prefixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.prefixUnit }),
              g.value,
              !!g.postfixUnit && /* @__PURE__ */ t("div", { className: "text-lg font-medium", children: g.postfixUnit })
            ] })
          ] }, p)) }),
          ie.Children.toArray(r).filter(m).map((g, p) => /* @__PURE__ */ o(ie.Fragment, { children: [
            p > 0 && /* @__PURE__ */ t(fl, { bare: !0 }),
            g
          ] }, p))
        ] }),
        a && /* @__PURE__ */ t(ml, { children: /* @__PURE__ */ t(V, { variant: "neutral", size: "sm", ...a }) })
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
}), Ri = H(
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
                n?.title ? /* @__PURE__ */ t(It, { children: n.title }) : /* @__PURE__ */ t(R, { className: "h-4 w-full max-w-16" }),
                n?.subtitle && /* @__PURE__ */ t(jn, { children: n.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ t(
            Ct,
            {
              "aria-hidden": !0,
              className: b(r !== "full" && Ti({ height: r })),
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
), Ne = ae(
  J("Widget", ne(Pi, Ri))
), ce = Object.assign(
  H(function({ chart: n, summaries: r, ...a }, l) {
    return /* @__PURE__ */ t(Ne, { ref: l, ...a, summaries: r, children: n && /* @__PURE__ */ t("div", { className: "min-h-52 min-w-52 grow pt-2", children: n }) });
  }),
  {
    Skeleton: Ne.Skeleton
  }
), zi = ne(
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
), Bi = J(
  "AreaChartWidget",
  zi
), $i = H(function(n, r) {
  return /* @__PURE__ */ t(
    ce,
    {
      ref: r,
      ...n,
      chart: /* @__PURE__ */ t(gl, { yAxis: { hide: !0 }, ...n.chart })
    }
  );
}), Mi = J(
  "BarChartWidget",
  ne($i, ce.Skeleton)
), Wi = ne(
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
), ji = J(
  "LineChartWidget",
  Wi
), Ui = ne(
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
), Vi = J(
  "PieChartWidget",
  Ui
), Gi = ne(
  H(
    function(n, r) {
      return /* @__PURE__ */ t(ce, { ref: r, ...n, chart: null });
    }
  ),
  ce.Skeleton
), Hi = J(
  "SummariesWidget",
  Gi
), Ki = ne(
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
), qi = J(
  "VerticalBarChartWidget",
  Ki
), Dc = ue(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  Bi
), _c = ue(
  {
    name: "BarChartWidget",
    type: "info"
  },
  Mi
), Oc = ue(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ji
), Pc = ue(
  {
    name: "PieChartWidget",
    type: "info"
  },
  Vi
), Tc = ue(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  qi
), Rc = ue(
  {
    name: "SummariesWidget",
    type: "info"
  },
  Hi
), Yi = (e, n) => /* @__PURE__ */ o(
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
), Ji = H(Yi), Zi = (e, n) => /* @__PURE__ */ o(
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
), Xi = H(Zi), Qi = {
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
  function({ title: n, content: r, buttonLabel: a, buttonIcon: l, buttonAction: s, type: i }, c) {
    const d = Qi[i], f = eo[i], u = to[i], m = no[i];
    return /* @__PURE__ */ o(
      yt,
      {
        className: b(
          "relative flex gap-4 overflow-hidden border-dashed",
          d
        ),
        ref: c,
        children: [
          /* @__PURE__ */ t(Nt, { className: "-mt-0.5", children: /* @__PURE__ */ t(It, { children: n }) }),
          /* @__PURE__ */ o(Ct, { className: b("flex flex-col gap-4", f), children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: b(
                  "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30",
                  u
                ),
                children: [
                  i === "bar-chart" && /* @__PURE__ */ t("div", { className: "absolute bottom-1 left-4 right-4", children: /* @__PURE__ */ t(Ji, { className: "w-full" }) }),
                  i === "line-chart" && /* @__PURE__ */ t(Xi, { className: "w-full" })
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
), zc = ae(
  J("ChartWidgetEmptyState", ro)
);
function ao(e, n) {
  const r = z(null), a = z(null), [l, s] = D({
    visibleItems: [],
    overflowItems: []
  });
  Ma({
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
        g = v, g = i(
          g,
          p,
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
  minSize: s,
  onVisibleItemsChange: i
}) {
  const { containerRef: c, measurementContainerRef: d, visibleItems: f } = ao(n, l);
  return W(() => {
    i?.(f);
  }, [i, f]), /* @__PURE__ */ o(
    "div",
    {
      ref: c,
      className: b("relative flex h-full flex-col", a),
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
const so = H(
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
        children: n.map(({ label: a, content: l, color: s, ...i }) => /* @__PURE__ */ t(
          so,
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
), io = ({
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
  withPointerCursor: s = !1,
  onClick: i,
  ...c
}) {
  return /* @__PURE__ */ o(
    io,
    {
      onClick: (f) => {
        f.preventDefault(), i?.(e);
      },
      withEmoji: "emoji" in c && !!c.emoji,
      withPointerCursor: s,
      children: [
        "alert" in c && c.alert && /* @__PURE__ */ t(Wa, { type: c.alert }),
        "emoji" in c && c.emoji && /* @__PURE__ */ t(ja, { emoji: c.emoji }),
        /* @__PURE__ */ o("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("p", { className: "line-clamp-1 font-medium", children: n }),
          /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: r })
        ] }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
          Dn,
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
  const s = b(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    a ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ o(oo, { onClick: (c) => {
    c.preventDefault(), a?.(e);
  }, className: s, children: [
    /* @__PURE__ */ t(Sn, { module: l ?? "inbox", size: "md" }),
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
  return /* @__PURE__ */ o(co, { onClick: (h) => {
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
      r && /* @__PURE__ */ t(On, { ...r }),
      a && /* @__PURE__ */ t(_e, { ...a }),
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
  return a ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((s) => /* @__PURE__ */ t(fn, { ...s, onClick: r }, s.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      minSize: n,
      renderListItem: (s) => /* @__PURE__ */ t(fn, { ...s, onClick: r }, s.id),
      onVisibleItemsChange: l,
      gap: 8
    }
  );
}
function Uc({
  items: e,
  gap: n,
  minSize: r = 184,
  onClickItem: a,
  showAllItems: l
}) {
  return l ? /* @__PURE__ */ t("div", { className: "flex flex-col", style: { minHeight: `${r}px` }, children: e.map((s) => /* @__PURE__ */ t(bt, { ...s, onClick: a }, s.id)) }) : /* @__PURE__ */ t(
    et,
    {
      items: e,
      gap: n,
      renderListItem: (s) => /* @__PURE__ */ t(bt, { ...s, onClick: a }),
      minSize: r
    }
  );
}
const uo = ({ title: e, info: n }) => /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ t("div", { className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium", children: n })
] }), Vc = H(
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
              children: /* @__PURE__ */ t(G, { icon: _n, size: "sm" })
            }
          ) })
        ] }),
        r && /* @__PURE__ */ t("div", { children: r })
      ] }),
      l.map((i) => /* @__PURE__ */ t(uo, { title: i.title, info: i.info }, i.title))
    ] });
  }
);
function Gc({
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
  const i = e[e.length - 1]?.variant || "clocked-out", c = {
    "clocked-out": n.clockedOut,
    "clocked-in": n.clockedIn,
    break: n.onBreak
  }[i], d = (() => {
    if (!l || a === void 0) return;
    const u = dr(
      r,
      a
    ), m = Math.abs(u), h = Math.floor(m / 60), g = Math.floor(m % 60), p = `${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}`;
    return a >= 0 ? `${n.remainingTime} ${p}` : `${n.overtime} ${p}`;
  })(), f = xe[i];
  return {
    status: i,
    statusText: c,
    subtitle: d,
    statusColor: f
  };
}, st = "--:--", mo = (e, n) => {
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
  ), s = e.reduce(
    (u, m) => u + (m.to.getTime() - m.from.getTime()) / 1e3,
    0
  ) + (l ?? 0) * 60, i = a || (l ?? 0) < 0 ? void 0 : mo(
    l ?? 0,
    s
  );
  let c = (l ?? 0) < 0 ? Math.abs(l ?? 0) * 60 : 0, f = [
    ...[...e].reverse().reduce(
      (u, m) => {
        const h = (m.to.getTime() - m.from.getTime()) / 1e3, g = m.variant === "clocked-in" ? Math.min(h, c) : 0, v = (h - g) / s;
        return c -= g, m.variant === "clocked-in" && a ? [
          ...u,
          {
            value: g / s + v,
            color: xe.overtime
          }
        ] : [
          ...u,
          {
            value: g / s,
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
}, go = ({
  data: e = [],
  remainingMinutes: n,
  trackedMinutes: r = 0
}) => {
  const a = e.find((h) => h.variant === "clocked-in")?.from, l = e.at(-1), s = a ? $t(a) : st, i = n === void 0 || n > 0 ? st : l ? $t(l.to) : st, d = l?.variant === "break" ? l?.to.getTime() - l?.from.getTime() || 0 : r * 60 * 1e3, f = Math.floor(d / (1e3 * 60 * 60)), u = Math.floor(d % (1e3 * 60 * 60) / (1e3 * 60)), m = `${f.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
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
function po({
  data: e = [],
  trackedMinutes: n = 0,
  remainingMinutes: r
}) {
  const a = ho({
    data: e,
    trackedMinutes: n,
    remainingMinutes: r
  }), { primaryLabel: l, secondaryLabel: s, time: i } = go({
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
          Ua,
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
        /* @__PURE__ */ t(G, { icon: Va })
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
  canSeeRemainingTime: v = !0,
  // onClickProjectSelector,
  onChangeLocationId: N,
  canShowProject: I = !0,
  projectSelectorElement: P,
  breakTypeName: T
}) {
  const { status: O, statusText: L, subtitle: F, statusColor: M } = fo({
    data: r,
    labels: a,
    trackedMinutes: e,
    remainingMinutes: n,
    canSeeRemainingTime: v
  }), E = O === "clocked-out", y = m?.map(($) => ({
    value: $.id,
    label: $.duration ? `${$.name} · ${$.duration}` : $.name,
    description: $.description,
    tag: $.isPaid ? a.paid : a.unpaid
  })) ?? [], [C, x] = D(!1), k = () => {
    if (y.length > 1)
      C || x(!0);
    else {
      const $ = y?.[0]?.value;
      u?.($);
    }
  }, B = ($) => {
    h?.($), x(!1), u?.($);
  }, w = E && s.length && !c && i, S = s.find(($) => $.id === l), A = s.map(($) => ({
    value: $.id,
    label: $.name,
    icon: $.icon
  })), j = O === "break", [K, Z] = D(!1);
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
                    backgroundColor: M
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
                    backgroundColor: M
                  }
                }
              )
            ] })
          ] }),
          F && /* @__PURE__ */ t("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: F })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          O === "clocked-out" && /* @__PURE__ */ t("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ t(
            V,
            {
              onClick: d,
              label: a.clockIn,
              icon: Pt
            }
          ) }),
          O === "clocked-in" && /* @__PURE__ */ o(Y, { children: [
            g && /* @__PURE__ */ t(Y, { children: y.length > 1 && h ? /* @__PURE__ */ t(
              Ue,
              {
                label: a.break,
                hideLabel: !0,
                value: "",
                options: y,
                onChange: B,
                open: C,
                onOpenChange: x,
                children: /* @__PURE__ */ t("div", { "aria-label": "Select break type", children: /* @__PURE__ */ t(
                  V,
                  {
                    label: a.break,
                    variant: "neutral",
                    icon: Tt,
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
                icon: Tt,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Rt
              }
            )
          ] }),
          O === "break" && /* @__PURE__ */ o(Y, { children: [
            /* @__PURE__ */ t(
              V,
              {
                onClick: f,
                label: a.clockOut,
                variant: "neutral",
                icon: Rt,
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
      p && /* @__PURE__ */ t(
        po,
        {
          data: r,
          trackedMinutes: e,
          remainingMinutes: v ? n : 0
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: w ? /* @__PURE__ */ o(Y, { children: [
      /* @__PURE__ */ t(
        Ue,
        {
          label: a.selectLocation,
          hideLabel: !0,
          value: l,
          options: A,
          onChange: N,
          open: K,
          onOpenChange: Z,
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
      I && P
    ] }) : /* @__PURE__ */ o(Y, { children: [
      i && S && /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(_e, { text: S.name, icon: S.icon }) }),
      I && P,
      j && T && /* @__PURE__ */ t(_e, { text: T })
    ] }) })
  ] }) });
}
const xo = {
  done: Ka,
  "in-progress": Ha,
  todo: Ga
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
  }, s = q(() => {
    if (!a)
      return xo[n];
  }, [n, a]);
  return /* @__PURE__ */ t(
    bt,
    {
      id: e.id,
      title: e.text,
      icon: s,
      iconClassName: vo[n],
      alert: e.badge?.isPastDue ? {
        text: e.badge.text,
        level: "critical"
      } : void 0,
      rawTag: e.badge && !e.badge.isPastDue ? {
        text: e.badge.text,
        icon: qa
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
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-0", children: c ? /* @__PURE__ */ t("p", { className: "pl-2 font-medium", children: l }) : i.slice(0, a).map((d) => /* @__PURE__ */ t(
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
var yo = Object.defineProperty, No = Object.defineProperties, Io = Object.getOwnPropertyDescriptors, He = Object.getOwnPropertySymbols, ur = Object.prototype.hasOwnProperty, fr = Object.prototype.propertyIsEnumerable, mn = (e, n, r) => n in e ? yo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, oe = (e, n) => {
  for (var r in n || (n = {})) ur.call(n, r) && mn(e, r, n[r]);
  if (He) for (var r of He(n)) fr.call(n, r) && mn(e, r, n[r]);
  return e;
}, tt = (e, n) => No(e, Io(n)), Co = (e, n) => {
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
}, Eo = ({ spots: e, position: n, optimalSpot: r, stone: a }) => e.map((l, s, i) => {
  if (l === r) return Fo({ stone: a, position: n, optimalSpot: r, spotsList: i });
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
  for (let s = 0, i = e.length; s < i; s += 1) {
    let c = e[s];
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
  let a = Bo({ availableSpots: n, stone: e }), l = { left: a.left, top: a.top }, s = Ro({ optimalSpot: a, availableSpots: n.filter((d) => d !== a), stone: e, containerSize: r }), i = [...n, s], c = Eo({ spots: i, position: l, optimalSpot: a, stone: e });
  return i = [..._o(Boolean, c)], i = To(i), { position: l, availableSpots: i };
}
var Mo = ({ stones: e, containerSize: n }) => {
  let r = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return r;
  let a = 0, l = [], s = [{ top: 0, left: 0, right: n }];
  for (let i of e) {
    let c = $o({ availableSpots: s, stone: i, containerSize: n }), d = c.position.top + i.height;
    a < d && (a = d), l.push(c.position), s = c.availableSpots;
  }
  return { availableSpots: s, positions: l, containerHeight: a };
}, Wo = (e) => e.reduce((n, r) => {
  if (!r) return n;
  let a = r.getBoundingClientRect();
  return n.push({ width: a.width, height: a.height }), n;
}, []), jo = ({ boxesRefs: e, wrapperRef: n, children: r, windowWidth: a, wrapperWidth: l }) => {
  let [{ positions: s, containerHeight: i, stones: c, availableSpots: d }, f] = D({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return W(() => {
    var u, m;
    let h = Wo(e.current), g = (m = (u = n.current) == null ? void 0 : u.offsetWidth) != null ? m : 0;
    if (g === null) return;
    let p = Mo({ stones: h, containerSize: g });
    f(tt(oe({}, p), { stones: h }));
  }, [r, e, n, a, l]), { positions: s, containerHeight: i, stones: c, availableSpots: d };
}, Uo = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Vo = ({ transition: e, transitionDuration: n }) => e ? { transition: Uo(n)[e] } : null, Go = (e) => e ? tt(oe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Ho = ({ style: e, position: n, transition: r, transitionDuration: a }) => oe(oe(tt(oe({}, e), { position: "absolute" }), Go(n)), Vo({ transition: r, transitionDuration: a }));
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
      for (let s of l) r(s.contentRect.width);
    });
    return e.current && a.observe(e.current), () => {
      a.disconnect();
    };
  }, [e]), n;
}, Jo = (e) => {
  var n = e, { children: r, style: a, transition: l = !1, transitionDuration: s = 500, transitionStep: i = 50 } = n, c = Co(n, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let d = z([]), f = z(null), u = qo(), m = Yo(f), { positions: h, containerHeight: g } = jo({ boxesRefs: d, wrapperRef: f, children: r, windowWidth: u, wrapperWidth: m }), p = oe({ minHeight: g ?? 0, position: "relative" }, a);
  return t("div", tt(oe({ ref: f, style: p }, c), { children: zn.map(r, (v, N) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let I = { style: Ho({ style: v.props.style, position: h[N], transition: l, transitionDuration: s }), ref: (P) => d.current[N] = P };
    return Rn(v, oe(oe({}, v.props), I));
  }) }));
};
const Zo = { sm: 340, md: 480, lg: 640 }, hn = H(
  function({ children: n, widgetWidth: r = "sm" }, a) {
    const l = Zo[r], [s, i] = D(), c = zn.toArray(n), d = z(null);
    return W(() => {
      const f = () => {
        const u = d.current?.offsetWidth;
        u && i(Math.floor(u / l) || 1);
      };
      return f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f);
      };
    }, [i, l]), /* @__PURE__ */ t("div", { ref: a, className: "text-f1-foreground", children: /* @__PURE__ */ t("div", { ref: d, children: s === 1 ? /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 *:shadow", children: n }) : s && s > 1 && /* @__PURE__ */ t("div", { className: "relative -mr-4", children: /* @__PURE__ */ t(Jo, { children: c.map((f, u) => /* @__PURE__ */ t(
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
), Xo = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], qc = ne(hn, () => /* @__PURE__ */ t(Pn, { children: /* @__PURE__ */ t(hn, { children: Xo.map((e, n) => /* @__PURE__ */ t(Ne.Skeleton, { height: e }, n)) }) })), gn = ({ children: e }) => /* @__PURE__ */ t("div", { className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]", children: e }), Yc = ne(
  H(function({ children: n }, r) {
    return /* @__PURE__ */ t(Ke, { ref: r, showBar: !1, children: /* @__PURE__ */ t(gn, { children: n }) });
  }),
  () => /* @__PURE__ */ t(Pn, { orientation: "horizontal", children: /* @__PURE__ */ o(gn, { children: [
    /* @__PURE__ */ t(Ne.Skeleton, {}),
    /* @__PURE__ */ t(Ne.Skeleton, {}),
    /* @__PURE__ */ t(Ne.Skeleton, {})
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
    Nl,
    {
      title: e,
      description: n,
      ...r ? { emoji: r } : { variant: "warning" },
      actions: a
    }
  );
}
const Jc = ae(
  J("WidgetEmptyState", Qo)
), mr = H(
  ({ title: e, children: n }, r) => (Ya(
    e,
    { disallowEmpty: !0 },
    { componentName: "WidgetSection" }
  ), /* @__PURE__ */ o("div", { ref: r, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    n
  ] }))
);
mr.displayName = "WidgetSection";
const Zc = ae(
  J("WidgetSection", mr)
), Xc = ({
  identifier: e,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: a
}) => {
  const l = Ja(), s = window.location.pathname, i = q(() => n?.length ? n.includes(s) : r?.length ? !r.includes(s) : !0, [s, n, r]), c = q(() => {
    let d = `The component ${e} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (d += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (d += ` Disallowed routes: ${r.join(", ")}`), d;
  }, [e, n, r]);
  return i ? a : (l && console.error(c), null);
}, Qc = ae(
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
  Is as ActivityItemListSkeleton,
  Jl as AiPromotionChat,
  Zl as AiPromotionChatProvider,
  gc as ApplicationFrame,
  Fd as AreaChart,
  Dc as AreaChartWidget,
  Ec as AutoGrid,
  Fa as Badge,
  Ed as BarChart,
  _c as BarChartWidget,
  Ns as BaseActivityItemList,
  Dd as BaseBanner,
  Ls as BaseCelebration,
  Bs as BaseCommunityPost,
  nd as BaseTabs,
  rd as BreadcrumbSelect,
  Ll as Breadcrumbs,
  pt as CalendarEvent,
  Bc as CalendarEventList,
  _d as CardSelectableContainer,
  el as Carousel,
  Od as CategoryBarChart,
  Gc as CategoryBarSection,
  uc as Celebration,
  Fs as CelebrationSkeleton,
  zc as ChartWidgetEmptyState,
  ad as Chip,
  Hc as ClockInControls,
  Pd as ComboChart,
  mc as CommunityPost,
  $s as CommunityPostSkeleton,
  Zs as CompanySelector,
  qe as Counter,
  qc as Dashboard,
  pc as DaytimePage,
  ld as DetailsItem,
  sd as DetailsItemsList,
  Td as Dialog,
  Ie as Dropdown,
  cc as EntitySelect,
  Rd as F0ActionBar,
  zd as F0AiBanner,
  Sn as F0AvatarModule,
  id as F0ButtonToggle,
  ic as F0Callout,
  Bd as F0SegmentedControl,
  $d as F0TableOfContent,
  oc as F0VersionHistory,
  od as F1SearchBox,
  Md as FILE_TYPES,
  cd as FileItem,
  fc as HighlightBanner,
  Mc as IndicatorsList,
  dd as Input,
  Wd as Item,
  jd as ItemSectionHeader,
  Ud as LineChart,
  Oc as LineChartWidget,
  yc as Menu,
  ud as MobileDropdown,
  Vd as NotesTextEditor,
  Gd as NotesTextEditorPatchTargetNotFoundError,
  Hd as NotesTextEditorSkeleton,
  Kd as NotesTextEditorUnsupportedPatchTypeError,
  qd as NumberInput,
  bc as OmniButton,
  Cc as OneApprovalHistory,
  fd as OneCalendar,
  md as OneCalendarInternal,
  Yd as OneDataCollection,
  Jd as OneDateNavigator,
  Nl as OneEmptyState,
  Zd as OnePagination,
  hc as OnePersonListItem,
  Xc as OneRestrictComponent,
  xc as Page,
  sc as PageHeader,
  At as PageHeaderNavigationContext,
  ac as PageHeaderNavigationProvider,
  Xd as PieChart,
  Pc as PieChartWidget,
  _i as PrivateBox,
  Qd as ProgressBarChart,
  eu as RadarChart,
  _s as Reactions,
  tu as ResourceHeader,
  va as RichTextDisplay,
  nu as RichTextEditor,
  Qc as ScrollArea,
  Nc as SearchBar,
  ru as SectionHeader,
  Ue as Select,
  za as Shortcut,
  Ic as Sidebar,
  vc as SidebarFooter,
  wc as SidebarHeader,
  wn as Spinner,
  Fc as Split,
  Lc as Stack,
  Rc as SummariesWidget,
  hd as Switch,
  gd as Tabs,
  pd as TabsSkeleton,
  Kc as TasksList,
  au as Textarea,
  bd as ToggleGroup,
  xd as ToggleGroupItem,
  be as Tooltip,
  Vc as TwoColumnsList,
  lu as VerticalBarChart,
  Tc as VerticalBarChartWidget,
  mt as VirtualList,
  vd as WeekStartDay,
  wd as Weekdays,
  Ne as Widget,
  Wc as WidgetAvatarsListItem,
  Jc as WidgetEmptyState,
  $c as WidgetHighlightButton,
  jc as WidgetInboxList,
  fn as WidgetInboxListItem,
  Zc as WidgetSection,
  Uc as WidgetSimpleList,
  bt as WidgetSimpleListItem,
  Yc as WidgetStrip,
  su as actionBarStatuses,
  iu as buttonToggleSizes,
  ou as buttonToggleVariants,
  yd as chipVariants,
  cu as downloadAsCSV,
  du as generateCSVContent,
  Nd as getGranularityDefinition,
  Id as getGranularityDefinitions,
  Cd as getGranularitySimpleDefinition,
  kd as granularityDefinitions,
  Sd as modules,
  uu as predefinedPresets,
  Ad as rangeSeparator,
  fu as selectSizes,
  Ze as useAiPromotionChat,
  mu as useDataCollectionData,
  kc as useDataCollectionItemNavigation,
  Sc as useDataCollectionItemNavigationRouteSync,
  hu as useDataCollectionSource,
  gu as useExportAction,
  pu as useInfiniteScrollPagination,
  Ac as useItemNavigationPageHeader,
  lc as usePageHeaderNavigation,
  Se as useSidebar
};
