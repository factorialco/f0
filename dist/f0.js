import { cY as wo, a4 as Re, c2 as sr, M as Q, N as nn, T as Kn, cZ as So, aQ as ti, c_ as yd, a5 as ko, a6 as Be, u as Ce, ap as Le, c$ as ar, R as xd, K as wd, aa as Sd, J as _o, d0 as Nr, aM as bt, aJ as ia, d1 as kd, d2 as _d, d3 as Cd, d4 as Nd, d5 as ni, _ as Dd, d6 as Fd, d7 as Co, d8 as Td, ba as oa, bb as la, a3 as Xr, bc as ca, aV as No, cO as Dr, d9 as Do, da as Ad, db as Ed, dc as Id, aR as Od, dd as da, de as ri, bL as Rd, df as Ld, bg as Md, dg as Pd, aA as Fo, O as Me, aH as Bd, aI as Fr, dh as Xn, di as To, cw as ua, dj as Vd, dk as jd, aC as ir, dl as fa, cx as Ao, b3 as bn, cy as Eo, dm as $d, dn as ma, bD as zd, dp as Io, dq as Oo, P as kt, a_ as qd, dr as Bs, ds as Ro, dt as Zd, du as Lo, bW as xn, dv as Mo, dw as Ud, dx as Wd, aG as Po, dy as Hd, cn as Qd, dz as Gd, aP as Yr, dA as Kd, dB as Xd, dC as Yd, dD as Jd, j as eu, dE as tu, ao as Bo, dF as fn, dG as Vo, dH as jo, dI as Tr, cq as $o, aq as ha, ar as pa, dJ as ga, au as va, az as dt, dK as ba, aB as wn, dL as $n, dM as zn, at as qn, dN as Zn, dO as nu, dP as hr, dQ as zo, bH as Ar, dR as ot, dS as qo, bY as Jr, dT as Zo, bT as ya, bZ as xa, dU as ru, cs as Uo, dV as su, dW as au, dX as iu, bw as Wo, bB as ou, dY as lu, dZ as cu, d_ as du, d$ as Ho, c3 as uu, c7 as fu, ce as mu, e0 as Qo, e1 as hu, e2 as pu, e3 as gu, e4 as vu, I as bu, e5 as yu, e6 as xu, e7 as wu, e8 as Su, bM as ku, e9 as _u } from "./F0AiChat-C2z1rOrA.js";
import { ev as fx, ed as mx, i as hx, eI as px, bv as gx, h as vx, F as bx, a as yx, C as xx, b as wx, bX as Sx, cg as kx, Y as _x, ch as Cx, bp as Nx, W as Dx, U as Fx, X as Tx, b1 as Ax, ek as Ex, eo as Ix, eb as Ox, ep as Rx, eM as Lx, ew as Mx, k as Px, Z as Bx, er as Vx, bJ as jx, bK as $x, et as zx, eu as qx, ee as Zx, ex as Ux, ef as Wx, eg as Hx, eh as Qx, cK as Gx, cL as Kx, ea as Xx, ei as Yx, ej as Jx, es as ew, cM as tw, eN as nw, el as rw, em as sw, en as aw, ec as iw, cN as ow, eH as lw, eC as cw, eF as dw, g as uw, eB as fw, bz as mw, cJ as hw, cG as pw, cI as gw, cF as vw, eA as bw, ez as yw, cz as xw, cH as ww, c as Sw, ey as kw, eD as _w, d as Cw, eJ as Nw, eK as Dw, eL as Fw, bx as Tw, eq as Aw, eE as Ew, f as Iw, e as Ow, Q as Rw, eG as Lw, eO as Mw } from "./F0AiChat-C2z1rOrA.js";
import { jsx as c, jsxs as D, Fragment as Ke } from "react/jsx-runtime";
import * as _t from "react";
import ce, { forwardRef as ft, useRef as H, useImperativeHandle as Cu, Children as Er, useCallback as L, useMemo as z, useState as ee, useEffect as ie, createElement as pr, isValidElement as Go, Fragment as Ko, useLayoutEffect as Nu, createContext as Ct, memo as Xo, useReducer as Du, useContext as et, cloneElement as Fu, useId as wa } from "react";
import { g as Tu } from "./types-DkDJxTyY.js";
import { A as Bw, e as Vw, F as jw, c as $w, d as zw, b as qw, a as Zw, f as Uw, o as Ww, u as Hw } from "./types-DkDJxTyY.js";
import { unstable_batchedUpdates as gr, createPortal as Au, flushSync as Eu } from "react-dom";
import { C as Iu, x as Vs, y as Yo, Q as Ou, T as Ru, S as Jo, E as Sa, W as el, J as Lu, $ as Mu, X as Pu, Y as Bu, D as tl, l as Vu, Z as ju } from "./index-BrzwkAXM.js";
import { n as Gw, o as Kw, p as Xw, v as Yw, F as Jw, M as e0, K as t0, b as n0, U as r0, q as s0, N as a0, O as i0, r as o0, P as l0, t as c0, R as d0, s as u0, _ as f0, w as m0, H as h0, z as p0, u as g0 } from "./index-BrzwkAXM.js";
import { defaultTranslations as b0 } from "./i18n-provider-defaults.js";
const $u = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, zu = ft(function({ widgets: t, children: n }, r) {
  const s = H(null);
  Cu(r, () => s.current);
  const a = Er.toArray(t).filter((i) => !!i).map((i, o) => /* @__PURE__ */ c("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, o));
  return /* @__PURE__ */ c(wo, { layout: "home", children: /* @__PURE__ */ D("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ D("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ c(Iu, { columns: $u, showArrows: !1, children: a }),
      /* @__PURE__ */ c("main", { children: n })
    ] }),
    /* @__PURE__ */ D("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ c("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: a.slice(0, 3) }),
      /* @__PURE__ */ c("main", { className: "col-span-2", children: n }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-5", children: a.slice(3) })
    ] })
  ] }) });
}), qu = nn({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), nl = ce.forwardRef(({ children: e, variant: t, className: n, ...r }, s) => /* @__PURE__ */ c(wo, { layout: "standard", children: /* @__PURE__ */ c(
  "section",
  {
    ref: s,
    className: Q("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ c("div", { className: Q(qu({ variant: t })), children: e })
  }
) }));
nl.displayName = "StandardLayout";
const Zu = Re(
  sr(
    {
      name: "StandardLayout",
      type: "layout"
    },
    nl
  )
), Uu = ft(
  function({
    children: t,
    sideContent: n,
    mainColumnPosition: r = "left",
    sticky: s = !1
  }, a) {
    return /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ D(
      "div",
      {
        className: Q(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          s && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ c(
            "main",
            {
              className: Q(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                s ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ c(
            Hu,
            {
              sticky: s,
              className: Q(
                "order-1",
                r === "right" ? "md:order-1" : "md:order-3"
              ),
              children: n
            }
          )
        ]
      }
    ) });
  }
), Wu = Re(
  sr(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Uu
  )
), Hu = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c(
  "aside",
  {
    className: Q(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      t
    ),
    children: e
  }
), Qu = (e, t, n) => /* @__PURE__ */ c("div", { children: e }), es = ({
  widgets: e = [],
  editMode: t = !1,
  onChange: n = () => {
  },
  WidgetWrapper: r = Qu,
  main: s = !1,
  deps: a
}) => {
  const i = L(
    (y, w, C) => /* @__PURE__ */ c(
      Kn.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: r(y, w, C)
      }
    ),
    [r]
  ), o = z(
    () => ({
      acceptWidgets: !0,
      margin: 8,
      handle: "[data-gs-handle='true']",
      column: 4,
      columnOpts: {
        breakpointForWindow: !0,
        breakpoints: [
          { c: 1, w: 700 },
          { c: 3, w: 850 },
          { c: 6, w: 950 },
          { c: 8, w: 1100 }
        ],
        columnMax: 4
      }
    }),
    []
  ), l = (y, w) => {
    if (typeof y.content == "function" && y.deps && w) {
      const C = {};
      return y.deps.forEach((A) => {
        typeof A == "string" && w[A] !== void 0 && (C[A] = w[A]);
      }), y.content(C);
    }
    return typeof y.content == "function" ? null : y.content;
  }, d = (y, w, C) => y.map((A) => {
    const O = l(A, C), M = {
      id: A.id,
      h: A.h ?? 1,
      w: A.w ?? 1,
      allowedSizes: A.availableSizes,
      noMove: !w,
      noResize: !w,
      locked: A.locked,
      meta: A.meta,
      _originalContent: O,
      content: i(O, A.meta, w)
    };
    return A.x !== void 0 && (M.x = A.x), A.y !== void 0 && (M.y = A.y), M;
  }), [u, f] = ee(
    d(e, t)
  ), h = H(t), m = H(e), g = H(!1), b = H(/* @__PURE__ */ new Map()), p = H(e);
  p.current = e;
  const S = H(a), v = z(() => {
    const y = /* @__PURE__ */ new Map();
    return !a || Object.keys(a).length === 0 || e.forEach((w) => {
      if (w.deps && w.deps.length > 0) {
        const C = w.deps.map((A) => typeof A == "string" && a[A] !== void 0 ? a[A] : A).filter((A) => A !== null);
        y.set(w.id, C);
      }
    }), y;
  }, [e, a]), k = L(
    (y) => {
      f(y), g.current || n(
        y.map((w) => {
          const C = p.current.find(
            (A) => A.id === w.id
          );
          return {
            id: w.id,
            w: w.w ?? 1,
            h: w.h ?? 1,
            allowedSizes: w.allowedSizes,
            meta: w.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof C?.content == "function" ? C.content : w._originalContent,
            x: w.x ?? 0,
            y: w.y ?? 0,
            locked: w.locked,
            deps: C?.deps
          };
        })
      ), g.current = !1;
    },
    [n]
  ), _ = (y, w) => !y && !w ? !1 : !y || !w || y.length !== w.length ? !0 : y.some((C, A) => C !== w[A]);
  return ie(() => {
    const y = h.current !== t, w = m.current !== e, C = S.current !== a && (S.current === void 0 || a === void 0 || Object.keys(S.current).length !== Object.keys(a).length || Object.keys(a).some(
      (T) => S.current?.[T] !== a[T]
    )), A = /* @__PURE__ */ new Map();
    e.forEach((T) => {
      if (T.deps && T.deps.length > 0) {
        const I = b.current.get(T.id), N = v.get(T.id);
        A.set(
          T.id,
          _(I, N)
        ), N ? b.current.set(T.id, N) : b.current.delete(T.id);
      }
    });
    const O = new Set(e.map((T) => T.id));
    b.current.forEach((T, I) => {
      O.has(I) || b.current.delete(I);
    });
    const M = Array.from(A.values()).some((T) => T) || C;
    y && !w && !M ? (g.current = !0, f(
      (T) => T.map((I) => {
        const N = e.find((G) => G.id === I.id);
        if (!N)
          return I;
        const P = l(N, a);
        return {
          ...I,
          noMove: !t,
          noResize: !t,
          locked: N.locked,
          meta: N.meta,
          _originalContent: P,
          content: i(
            P,
            N.meta,
            t
          )
        };
      })
    )) : (w || M) && f((T) => {
      const I = new Map(
        T.map((N) => [N.id, N])
      );
      return e.map((N) => {
        const P = I.get(N.id), G = A.get(N.id) ?? !1;
        let X;
        G || !P ? X = l(N, a) : X = P._originalContent ?? l(N, a);
        const te = {
          id: N.id,
          h: P?.h ?? N.h ?? 1,
          w: P?.w ?? N.w ?? 1,
          allowedSizes: N.availableSizes,
          noMove: !t,
          noResize: !t,
          locked: N.locked,
          meta: N.meta,
          _originalContent: X,
          content: i(X, N.meta, t)
        }, fe = P?.x ?? N.x, q = P?.y ?? N.y;
        return fe !== void 0 && (te.x = fe), q !== void 0 && (te.y = q), te;
      });
    }), h.current = t, m.current = e, S.current = a;
  }, [
    e,
    t,
    i,
    v,
    a
  ]), /* @__PURE__ */ c(
    So,
    {
      className: Q(s && "h-full flex-1 overflow-auto"),
      options: o,
      onChange: k,
      widgets: u
    }
  );
};
es.displayName = "GroupGrid";
es.__isPageLayoutGroup = !0;
const Gu = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutBlock = !0, n;
}, Ku = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutGroup = !0, n;
}, Mn = nn({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), Xu = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, ka = ft(
  ({
    content: e,
    variant: t,
    align: n,
    className: r,
    as: s,
    ellipsis: a,
    noEllipsisTooltip: i,
    markdown: o,
    required: l,
    ...d
  }, u) => {
    const f = s ?? Xu[t ?? "body"], h = l ? /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (a !== void 0) {
      const m = typeof a == "number" ? a : 1;
      return h ? pr(
        f,
        {
          ...d,
          className: Q(
            Mn({ variant: t, align: n }),
            r,
            "inline-flex gap-0.5"
          ),
          ref: u
        },
        /* @__PURE__ */ c(
          ti,
          {
            lines: m,
            noTooltip: i,
            tag: "span",
            className: "min-w-0",
            markdown: o,
            children: e
          }
        ),
        h
      ) : /* @__PURE__ */ c(
        ti,
        {
          ref: u,
          lines: m,
          noTooltip: i,
          tag: f,
          className: Q(Mn({ variant: t, align: n }), r),
          markdown: o,
          ...d,
          children: e
        }
      );
    }
    if (o) {
      const m = yd(e);
      return h ? pr(
        f,
        {
          ...d,
          className: Q(Mn({ variant: t, align: n }), r),
          ref: u
        },
        /* @__PURE__ */ c("span", { dangerouslySetInnerHTML: { __html: m } }),
        h
      ) : pr(f, {
        ...d,
        className: Q(Mn({ variant: t, align: n }), r),
        ref: u,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return pr(
      f,
      {
        ...d,
        className: Q(Mn({ variant: t, align: n }), r),
        ref: u
      },
      e,
      h
    );
  }
);
ka.displayName = "Text";
const rl = ft((e, t) => /* @__PURE__ */ c(ka, { ref: t, markdown: e.markdown ?? !0, ...e }));
rl.displayName = "F0Text";
const sl = Re(rl), ky = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], al = ({
  title: e,
  draggable: t = !1,
  onDragStart: n,
  onDragEnd: r,
  isDragging: s = !1,
  AIButton: a,
  actions: i,
  children: o,
  selected: l = !1
}) => {
  const [d, u] = ee(!1), [f, h] = ee(!1), m = Ce(), g = (p) => {
    u(p);
  }, b = f || d;
  return ie(() => {
    if (!s || !r) return;
    const p = () => {
      r();
    };
    return document.addEventListener("mouseup", p), () => {
      document.removeEventListener("mouseup", p);
    };
  }, [s, r]), /* @__PURE__ */ D(
    "div",
    {
      className: Q(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        t && d ? "border-f1-border-hover" : t && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        s && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      children: [
        /* @__PURE__ */ D("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ D(
            "div",
            {
              className: Q(
                "flex min-w-0 flex-1 items-center",
                !t && "pl-4",
                !i && !a && "pr-4"
              ),
              children: [
                t && /* @__PURE__ */ c(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: n,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ c(Le, { icon: ar, size: "xs" })
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: Q(
                      "flex min-w-0 flex-1 items-center",
                      t && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ c(sl, { variant: "label", content: e, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ c(xd, { children: (a || i) && b && /* @__PURE__ */ D(
            Kn.div,
            {
              className: Q(
                "flex shrink-0 items-center gap-0.5 pr-2",
                !i && "pr-4"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                duration: 0.2,
                ease: [0.33, 1, 0.68, 1]
              },
              children: [
                a && /* @__PURE__ */ c("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ c(
                  Tu,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: a,
                    icon: wd
                  }
                ) }),
                i && /* @__PURE__ */ c(
                  Sd,
                  {
                    items: i,
                    open: d,
                    onOpenChange: g,
                    align: "end",
                    children: /* @__PURE__ */ c(
                      _o,
                      {
                        icon: Nr,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: d
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: o })
      ]
    }
  );
}, Yu = () => /* @__PURE__ */ D("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ c("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ c(Be, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ D("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ c(Be, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
al.displayName = "F0Widget";
const Ju = ko(al, Yu), ef = ({
  children: e,
  title: t,
  draggable: n = !1,
  actions: r,
  aiButton: s
}) => /* @__PURE__ */ c(
  Ju,
  {
    title: t,
    draggable: n,
    actions: r,
    AIButton: s,
    children: e
  }
), il = ({
  widgets: e,
  editMode: t = !1,
  onChange: n = () => {
  },
  deps: r,
  ...s
}) => /* @__PURE__ */ c(
  es,
  {
    widgets: e,
    editMode: t,
    onChange: n,
    deps: r,
    ...s,
    WidgetWrapper: (a, i, o) => /* @__PURE__ */ c(
      ef,
      {
        title: i?.title ?? "",
        draggable: o,
        actions: i?.actions,
        aiButton: i?.aiButton,
        children: a
      }
    )
  }
);
il.displayName = "Dashboard";
const tf = Ku("Dashboard", il), _y = Re(
  bt("Dashboard", tf)
), nf = nn({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), rf = (e) => (e || []).map((t) => t.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n), t), []), sf = (e) => {
  const t = (n) => "onClick" in n;
  return Array.isArray(e) ? e.every(t) ? [
    {
      items: e
    }
  ] : e : [e];
}, ts = ft(
  ({
    children: e,
    variant: t = "default",
    className: n,
    draggable: r = !1,
    onDragStart: s,
    onDragEnd: a,
    onDrop: i,
    dragId: o,
    primaryAction: l,
    ...d
  }, u) => {
    const f = z(
      () => sf(d.actions || []),
      [d.actions]
    ), h = z(
      () => f.flatMap((g) => g.items),
      [f]
    ), m = z(
      () => h.length > 0 || !!l,
      [h, l]
    );
    return /* @__PURE__ */ D(
      "div",
      {
        ref: u,
        className: Q(nf({ variant: t }), "relative", n),
        draggable: r,
        onDragStart: s,
        onDragEnd: a,
        onDrop: i,
        "data-drag-id": o,
        ...d,
        children: [
          m && /* @__PURE__ */ D("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            h.length > 0 && /* @__PURE__ */ c(
              ia,
              {
                items: rf(f),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { "data-testid": "content", children: e })
        ]
      }
    );
  }
);
ts.displayName = "Block";
ts.__isPageLayoutBlock = !0;
const af = ({
  title: e = "",
  description: t,
  titleLevel: n = "h2",
  children: r,
  className: s,
  ...a
}) => {
  if (!e) return null;
  const i = n;
  return /* @__PURE__ */ D(ts, { ...a, className: Q("space-y-4", s), children: [
    /* @__PURE__ */ D("div", { className: "space-y-2", children: [
      /* @__PURE__ */ c(
        i,
        {
          className: Q("font-semibold text-f1-foreground", {
            "text-2xl": n === "h1",
            "text-xl": n === "h2",
            "text-lg": n === "h3",
            "text-base": n === "h4",
            "text-sm": n === "h5",
            "text-xs": n === "h6"
          }),
          children: e
        }
      ),
      t && /* @__PURE__ */ c("p", { className: "text-sm text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex-1", children: r })
  ] });
}, of = Gu(
  "BlockContent",
  af
), lf = (e) => !Go(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutBlock" in e.type, cf = (e) => !Go(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutGroup" in e.type, ol = (e, t, n) => {
  const r = Er.toArray(t);
  for (const s of r)
    n.includes("block") && lf(s) || n.includes("group") && cf(s) || console.warn(
      `${e}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      s
    );
}, _a = ft(
  ({ children: e, onSort: t, ...n }, r) => {
    ol("GroupLinear", e, ["block"]);
    const [s, a] = ee(Er.toArray(e));
    return ie(() => {
      a(Er.toArray(e));
    }, [e]), ie(() => {
      t?.(s);
    }, [s, t]), /* @__PURE__ */ c("div", { ref: r, ...n, children: s.map((i, o) => /* @__PURE__ */ c(Ko, { children: i }, o)) });
  }
);
_a.displayName = "GroupLinear";
_a.__isPageLayoutGroup = !0;
function df() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return z(
    () => (r) => {
      t.forEach((s) => s(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const ns = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Fn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Ca(e) {
  return "nodeType" in e;
}
function at(e) {
  var t, n;
  return e ? Fn(e) ? e : Ca(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Na(e) {
  const {
    Document: t
  } = at(e);
  return e instanceof t;
}
function or(e) {
  return Fn(e) ? !1 : e instanceof at(e).HTMLElement;
}
function ll(e) {
  return e instanceof at(e).SVGElement;
}
function Tn(e) {
  return e ? Fn(e) ? e.document : Ca(e) ? Na(e) ? e : or(e) || ll(e) ? e.ownerDocument : document : document : document;
}
const It = ns ? Nu : ie;
function rs(e) {
  const t = H(e);
  return It(() => {
    t.current = e;
  }), L(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function uf() {
  const e = H(null), t = L((r, s) => {
    e.current = setInterval(r, s);
  }, []), n = L(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Yn(e, t) {
  t === void 0 && (t = [e]);
  const n = H(e);
  return It(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function lr(e, t) {
  const n = H();
  return z(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Ir(e) {
  const t = rs(e), n = H(null), r = L(
    (s) => {
      s !== n.current && t?.(s, n.current), n.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Or(e) {
  const t = H();
  return ie(() => {
    t.current = e;
  }, [e]), t.current;
}
let vs = {};
function cr(e, t) {
  return z(() => {
    if (t)
      return t;
    const n = vs[e] == null ? 0 : vs[e] + 1;
    return vs[e] = n, e + "-" + n;
  }, [e, t]);
}
function cl(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((a, i) => {
      const o = Object.entries(i);
      for (const [l, d] of o) {
        const u = a[l];
        u != null && (a[l] = u + e * d);
      }
      return a;
    }, {
      ...t
    });
  };
}
const yn = /* @__PURE__ */ cl(1), Jn = /* @__PURE__ */ cl(-1);
function ff(e) {
  return "clientX" in e && "clientY" in e;
}
function ss(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = at(e.target);
  return t && e instanceof t;
}
function mf(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = at(e.target);
  return t && e instanceof t;
}
function Rr(e) {
  if (mf(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return ff(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Jt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Jt.Translate.toString(e), Jt.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), si = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function hf(e) {
  return e.matches(si) ? e : e.querySelector(si);
}
const pf = {
  display: "none"
};
function gf(e) {
  let {
    id: t,
    value: n
  } = e;
  return ce.createElement("div", {
    id: t,
    style: pf
  }, n);
}
function vf(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const s = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return ce.createElement("div", {
    id: t,
    style: s,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function bf() {
  const [e, t] = ee("");
  return {
    announce: L((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const dl = /* @__PURE__ */ Ct(null);
function yf(e) {
  const t = et(dl);
  ie(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function xf() {
  const [e] = ee(() => /* @__PURE__ */ new Set()), t = L((r) => (e.add(r), () => e.delete(r)), [e]);
  return [L((r) => {
    let {
      type: s,
      event: a
    } = r;
    e.forEach((i) => {
      var o;
      return (o = i[s]) == null ? void 0 : o.call(i, a);
    });
  }, [e]), t];
}
const wf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Sf = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function kf(e) {
  let {
    announcements: t = Sf,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = wf
  } = e;
  const {
    announce: a,
    announcement: i
  } = bf(), o = cr("DndLiveRegion"), [l, d] = ee(!1);
  if (ie(() => {
    d(!0);
  }, []), yf(z(() => ({
    onDragStart(f) {
      let {
        active: h
      } = f;
      a(t.onDragStart({
        active: h
      }));
    },
    onDragMove(f) {
      let {
        active: h,
        over: m
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: h,
        over: m
      }));
    },
    onDragOver(f) {
      let {
        active: h,
        over: m
      } = f;
      a(t.onDragOver({
        active: h,
        over: m
      }));
    },
    onDragEnd(f) {
      let {
        active: h,
        over: m
      } = f;
      a(t.onDragEnd({
        active: h,
        over: m
      }));
    },
    onDragCancel(f) {
      let {
        active: h,
        over: m
      } = f;
      a(t.onDragCancel({
        active: h,
        over: m
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = ce.createElement(ce.Fragment, null, ce.createElement(gf, {
    id: r,
    value: s.draggable
  }), ce.createElement(vf, {
    id: o,
    announcement: i
  }));
  return n ? Au(u, n) : u;
}
var Ue;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ue || (Ue = {}));
function Lr() {
}
function ai(e, t) {
  return z(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function _f() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return z(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Ot = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Cf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Nf(e, t) {
  const n = Rr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Df(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function Ff(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function ii(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: s
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + s,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + s,
    y: n + r
  }];
}
function ul(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const Tf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = ii(t), a = [];
  for (const i of r) {
    const {
      id: o
    } = i, l = n.get(o);
    if (l) {
      const d = ii(l), u = s.reduce((h, m, g) => h + Cf(d[g], m), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: o,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return a.sort(Df);
};
function Af(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), s = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), i = s - r, o = a - n;
  if (r < s && n < a) {
    const l = t.width * t.height, d = e.width * e.height, u = i * o, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Ef = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = [];
  for (const a of r) {
    const {
      id: i
    } = a, o = n.get(i);
    if (o) {
      const l = Af(o, t);
      l > 0 && s.push({
        id: i,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return s.sort(Ff);
};
function If(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function fl(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Ot;
}
function Of(e) {
  return function(n) {
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return s.reduce((i, o) => ({
      ...i,
      top: i.top + e * o.y,
      bottom: i.bottom + e * o.y,
      left: i.left + e * o.x,
      right: i.right + e * o.x
    }), {
      ...n
    });
  };
}
const Rf = /* @__PURE__ */ Of(1);
function ml(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Lf(e, t, n) {
  const r = ml(t);
  if (!r)
    return e;
  const {
    scaleX: s,
    scaleY: a,
    x: i,
    y: o
  } = r, l = e.left - i - (1 - s) * parseFloat(n), d = e.top - o - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = s ? e.width / s : e.width, f = a ? e.height / a : e.height;
  return {
    width: u,
    height: f,
    top: d,
    right: l + u,
    bottom: d + f,
    left: l
  };
}
const Mf = {
  ignoreTransform: !1
};
function An(e, t) {
  t === void 0 && (t = Mf);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: u
    } = at(e).getComputedStyle(e);
    d && (n = Lf(n, d, u));
  }
  const {
    top: r,
    left: s,
    width: a,
    height: i,
    bottom: o,
    right: l
  } = n;
  return {
    top: r,
    left: s,
    width: a,
    height: i,
    bottom: o,
    right: l
  };
}
function oi(e) {
  return An(e, {
    ignoreTransform: !0
  });
}
function Pf(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function Bf(e, t) {
  return t === void 0 && (t = at(e).getComputedStyle(e)), t.position === "fixed";
}
function Vf(e, t) {
  t === void 0 && (t = at(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const a = t[s];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function as(e, t) {
  const n = [];
  function r(s) {
    if (t != null && n.length >= t || !s)
      return n;
    if (Na(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
      return n.push(s.scrollingElement), n;
    if (!or(s) || ll(s) || n.includes(s))
      return n;
    const a = at(e).getComputedStyle(s);
    return s !== e && Vf(s, a) && n.push(s), Bf(s, a) ? n : r(s.parentNode);
  }
  return e ? r(e) : n;
}
function hl(e) {
  const [t] = as(e, 1);
  return t ?? null;
}
function bs(e) {
  return !ns || !e ? null : Fn(e) ? e : Ca(e) ? Na(e) || e === Tn(e).scrollingElement ? window : or(e) ? e : null : null;
}
function pl(e) {
  return Fn(e) ? e.scrollX : e.scrollLeft;
}
function gl(e) {
  return Fn(e) ? e.scrollY : e.scrollTop;
}
function js(e) {
  return {
    x: pl(e),
    y: gl(e)
  };
}
var Qe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Qe || (Qe = {}));
function vl(e) {
  return !ns || !e ? !1 : e === document.scrollingElement;
}
function bl(e) {
  const t = {
    x: 0,
    y: 0
  }, n = vl(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, s = e.scrollTop <= t.y, a = e.scrollLeft <= t.x, i = e.scrollTop >= r.y, o = e.scrollLeft >= r.x;
  return {
    isTop: s,
    isLeft: a,
    isBottom: i,
    isRight: o,
    maxScroll: r,
    minScroll: t
  };
}
const jf = {
  x: 0.2,
  y: 0.2
};
function $f(e, t, n, r, s) {
  let {
    top: a,
    left: i,
    right: o,
    bottom: l
  } = n;
  r === void 0 && (r = 10), s === void 0 && (s = jf);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: h
  } = bl(e), m = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * s.y,
    width: t.width * s.x
  };
  return !d && a <= t.top + b.height ? (m.y = Qe.Backward, g.y = r * Math.abs((t.top + b.height - a) / b.height)) : !u && l >= t.bottom - b.height && (m.y = Qe.Forward, g.y = r * Math.abs((t.bottom - b.height - l) / b.height)), !h && o >= t.right - b.width ? (m.x = Qe.Forward, g.x = r * Math.abs((t.right - b.width - o) / b.width)) : !f && i <= t.left + b.width && (m.x = Qe.Backward, g.x = r * Math.abs((t.left + b.width - i) / b.width)), {
    direction: m,
    speed: g
  };
}
function zf(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: a,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: a,
      bottom: i,
      width: a,
      height: i
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: s
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: s,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function yl(e) {
  return e.reduce((t, n) => yn(t, js(n)), Ot);
}
function qf(e) {
  return e.reduce((t, n) => t + pl(n), 0);
}
function Zf(e) {
  return e.reduce((t, n) => t + gl(n), 0);
}
function xl(e, t) {
  if (t === void 0 && (t = An), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: s,
    right: a
  } = t(e);
  hl(e) && (s <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Uf = [["x", ["left", "right"], qf], ["y", ["top", "bottom"], Zf]];
class Da {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = as(n), s = yl(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, o] of Uf)
      for (const l of i)
        Object.defineProperty(this, l, {
          get: () => {
            const d = o(r), u = s[a] - d;
            return this.rect[l] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Un {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var s;
    (s = this.target) == null || s.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function Wf(e) {
  const {
    EventTarget: t
  } = at(e);
  return e instanceof t ? e : Tn(e);
}
function ys(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var wt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(wt || (wt = {}));
function li(e) {
  e.preventDefault();
}
function Hf(e) {
  e.stopPropagation();
}
var xe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(xe || (xe = {}));
const wl = {
  start: [xe.Space, xe.Enter],
  cancel: [xe.Esc],
  end: [xe.Space, xe.Enter, xe.Tab]
}, Qf = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case xe.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case xe.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case xe.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case xe.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Fa {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Un(Tn(n)), this.windowListeners = new Un(at(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(wt.Resize, this.handleCancel), this.windowListeners.add(wt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(wt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && xl(r), n(Ot);
  }
  handleKeyDown(t) {
    if (ss(t)) {
      const {
        active: n,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: a = wl,
        coordinateGetter: i = Qf,
        scrollBehavior: o = "smooth"
      } = s, {
        code: l
      } = t;
      if (a.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: d
      } = r.current, u = d ? {
        x: d.left,
        y: d.top
      } : Ot;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (f) {
        const h = Jn(f, u), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = r.current;
        for (const b of g) {
          const p = t.code, {
            isTop: S,
            isRight: v,
            isLeft: k,
            isBottom: _,
            maxScroll: y,
            minScroll: w
          } = bl(b), C = zf(b), A = {
            x: Math.min(p === xe.Right ? C.right - C.width / 2 : C.right, Math.max(p === xe.Right ? C.left : C.left + C.width / 2, f.x)),
            y: Math.min(p === xe.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(p === xe.Down ? C.top : C.top + C.height / 2, f.y))
          }, O = p === xe.Right && !v || p === xe.Left && !k, M = p === xe.Down && !_ || p === xe.Up && !S;
          if (O && A.x !== f.x) {
            const T = b.scrollLeft + h.x, I = p === xe.Right && T <= y.x || p === xe.Left && T >= w.x;
            if (I && !h.y) {
              b.scrollTo({
                left: T,
                behavior: o
              });
              return;
            }
            I ? m.x = b.scrollLeft - T : m.x = p === xe.Right ? b.scrollLeft - y.x : b.scrollLeft - w.x, m.x && b.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (M && A.y !== f.y) {
            const T = b.scrollTop + h.y, I = p === xe.Down && T <= y.y || p === xe.Up && T >= w.y;
            if (I && !h.x) {
              b.scrollTo({
                top: T,
                behavior: o
              });
              return;
            }
            I ? m.y = b.scrollTop - T : m.y = p === xe.Down ? b.scrollTop - y.y : b.scrollTop - w.y, m.y && b.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(t, yn(Jn(f, this.referenceCoordinates), m));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Fa.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = wl,
      onActivation: s
    } = t, {
      active: a
    } = n;
    const {
      code: i
    } = e.nativeEvent;
    if (r.start.includes(i)) {
      const o = a.activatorNode.current;
      return o && e.target !== o ? !1 : (e.preventDefault(), s?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ci(e) {
  return !!(e && "distance" in e);
}
function di(e) {
  return !!(e && "delay" in e);
}
class Ta {
  constructor(t, n, r) {
    var s;
    r === void 0 && (r = Wf(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = n, this.document = Tn(i), this.documentListeners = new Un(this.document), this.listeners = new Un(r), this.windowListeners = new Un(at(i)), this.initialCoordinates = (s = Rr(a)) != null ? s : Ot, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(wt.Resize, this.handleCancel), this.windowListeners.add(wt.DragStart, li), this.windowListeners.add(wt.VisibilityChange, this.handleCancel), this.windowListeners.add(wt.ContextMenu, li), this.documentListeners.add(wt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (di(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (ci(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: s
    } = this.props;
    s(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(wt.Click, Hf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(wt.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: s,
      props: a
    } = this, {
      onMove: i,
      options: {
        activationConstraint: o
      }
    } = a;
    if (!s)
      return;
    const l = (n = Rr(t)) != null ? n : Ot, d = Jn(s, l);
    if (!r && o) {
      if (ci(o)) {
        if (o.tolerance != null && ys(d, o.tolerance))
          return this.handleCancel();
        if (ys(d, o.distance))
          return this.handleStart();
      }
      if (di(o) && ys(d, o.tolerance))
        return this.handleCancel();
      this.handlePending(o, d);
      return;
    }
    t.cancelable && t.preventDefault(), i(l);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === xe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Gf = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Aa extends Ta {
  constructor(t) {
    const {
      event: n
    } = t, r = Tn(n.target);
    super(t, Gf, r);
  }
}
Aa.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Kf = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var $s;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})($s || ($s = {}));
class Xf extends Ta {
  constructor(t) {
    super(t, Kf, Tn(t.event.target));
  }
}
Xf.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === $s.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const xs = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Yf extends Ta {
  constructor(t) {
    super(t, xs);
  }
  static setup() {
    return window.addEventListener(xs.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(xs.move.name, t);
    };
    function t() {
    }
  }
}
Yf.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: s
    } = n;
    return s.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var Wn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Wn || (Wn = {}));
var Mr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Mr || (Mr = {}));
function Jf(e) {
  let {
    acceleration: t,
    activator: n = Wn.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: a,
    interval: i = 5,
    order: o = Mr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: u,
    delta: f,
    threshold: h
  } = e;
  const m = tm({
    delta: f,
    disabled: !a
  }), [g, b] = uf(), p = H({
    x: 0,
    y: 0
  }), S = H({
    x: 0,
    y: 0
  }), v = z(() => {
    switch (n) {
      case Wn.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Wn.DraggableRect:
        return s;
    }
  }, [n, s, l]), k = H(null), _ = L(() => {
    const w = k.current;
    if (!w)
      return;
    const C = p.current.x * S.current.x, A = p.current.y * S.current.y;
    w.scrollBy(C, A);
  }, []), y = z(() => o === Mr.TreeOrder ? [...d].reverse() : d, [o, d]);
  ie(
    () => {
      if (!a || !d.length || !v) {
        b();
        return;
      }
      for (const w of y) {
        if (r?.(w) === !1)
          continue;
        const C = d.indexOf(w), A = u[C];
        if (!A)
          continue;
        const {
          direction: O,
          speed: M
        } = $f(w, A, v, t, h);
        for (const T of ["x", "y"])
          m[T][O[T]] || (M[T] = 0, O[T] = 0);
        if (M.x > 0 || M.y > 0) {
          b(), k.current = w, g(_, i), p.current = M, S.current = O;
          return;
        }
      }
      p.current = {
        x: 0,
        y: 0
      }, S.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      _,
      r,
      b,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      g,
      d,
      y,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const em = {
  x: {
    [Qe.Backward]: !1,
    [Qe.Forward]: !1
  },
  y: {
    [Qe.Backward]: !1,
    [Qe.Forward]: !1
  }
};
function tm(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Or(t);
  return lr((s) => {
    if (n || !r || !s)
      return em;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Qe.Backward]: s.x[Qe.Backward] || a.x === -1,
        [Qe.Forward]: s.x[Qe.Forward] || a.x === 1
      },
      y: {
        [Qe.Backward]: s.y[Qe.Backward] || a.y === -1,
        [Qe.Forward]: s.y[Qe.Forward] || a.y === 1
      }
    };
  }, [n, t, r]);
}
function nm(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return lr((s) => {
    var a;
    return t == null ? null : (a = r ?? s) != null ? a : null;
  }, [r, t]);
}
function rm(e, t) {
  return z(() => e.reduce((n, r) => {
    const {
      sensor: s
    } = r, a = s.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...a];
  }, []), [e, t]);
}
var er;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(er || (er = {}));
var zs;
(function(e) {
  e.Optimized = "optimized";
})(zs || (zs = {}));
const ui = /* @__PURE__ */ new Map();
function sm(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: s
  } = t;
  const [a, i] = ee(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = s, u = H(e), f = p(), h = Yn(f), m = L(function(S) {
    S === void 0 && (S = []), !h.current && i((v) => v === null ? S : v.concat(S.filter((k) => !v.includes(k))));
  }, [h]), g = H(null), b = lr((S) => {
    if (f && !n)
      return ui;
    if (!S || S === ui || u.current !== e || a != null) {
      const v = /* @__PURE__ */ new Map();
      for (let k of e) {
        if (!k)
          continue;
        if (a && a.length > 0 && !a.includes(k.id) && k.rect.current) {
          v.set(k.id, k.rect.current);
          continue;
        }
        const _ = k.node.current, y = _ ? new Da(l(_), _) : null;
        k.rect.current = y, y && v.set(k.id, y);
      }
      return v;
    }
    return S;
  }, [e, a, n, f, l]);
  return ie(() => {
    u.current = e;
  }, [e]), ie(
    () => {
      f || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), ie(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), ie(
    () => {
      f || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        m(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, f, m, ...r]
  ), {
    droppableRects: b,
    measureDroppableContainers: m,
    measuringScheduled: a != null
  };
  function p() {
    switch (d) {
      case er.Always:
        return !1;
      case er.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Ea(e, t) {
  return lr((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function am(e, t) {
  return Ea(e, t);
}
function im(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = rs(t), s = z(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, n]);
  return ie(() => () => s?.disconnect(), [s]), s;
}
function is(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = rs(t), s = z(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return ie(() => () => s?.disconnect(), [s]), s;
}
function om(e) {
  return new Da(An(e), e);
}
function fi(e, t, n) {
  t === void 0 && (t = om);
  const [r, s] = ee(null);
  function a() {
    s((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var d;
        return (d = l ?? n) != null ? d : null;
      }
      const u = t(e);
      return JSON.stringify(l) === JSON.stringify(u) ? l : u;
    });
  }
  const i = im({
    callback(l) {
      if (e)
        for (const d of l) {
          const {
            type: u,
            target: f
          } = d;
          if (u === "childList" && f instanceof HTMLElement && f.contains(e)) {
            a();
            break;
          }
        }
    }
  }), o = is({
    callback: a
  });
  return It(() => {
    a(), e ? (o?.observe(e), i?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), i?.disconnect());
  }, [e]), r;
}
function lm(e) {
  const t = Ea(e);
  return fl(e, t);
}
const mi = [];
function cm(e) {
  const t = H(e), n = lr((r) => e ? r && r !== mi && e && t.current && e.parentNode === t.current.parentNode ? r : as(e) : mi, [e]);
  return ie(() => {
    t.current = e;
  }, [e]), n;
}
function dm(e) {
  const [t, n] = ee(null), r = H(e), s = L((a) => {
    const i = bs(a.target);
    i && n((o) => o ? (o.set(i, js(i)), new Map(o)) : null);
  }, []);
  return ie(() => {
    const a = r.current;
    if (e !== a) {
      i(a);
      const o = e.map((l) => {
        const d = bs(l);
        return d ? (d.addEventListener("scroll", s, {
          passive: !0
        }), [d, js(d)]) : null;
      }).filter((l) => l != null);
      n(o.length ? new Map(o) : null), r.current = e;
    }
    return () => {
      i(e), i(a);
    };
    function i(o) {
      o.forEach((l) => {
        const d = bs(l);
        d?.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), z(() => e.length ? t ? Array.from(t.values()).reduce((a, i) => yn(a, i), Ot) : yl(e) : Ot, [e, t]);
}
function hi(e, t) {
  t === void 0 && (t = []);
  const n = H(null);
  return ie(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ie(() => {
    const r = e !== Ot;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Jn(e, n.current) : Ot;
}
function um(e) {
  ie(
    () => {
      if (!ns)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function fm(e, t) {
  return z(() => e.reduce((n, r) => {
    let {
      eventName: s,
      handler: a
    } = r;
    return n[s] = (i) => {
      a(i, t);
    }, n;
  }, {}), [e, t]);
}
function Sl(e) {
  return z(() => e ? Pf(e) : null, [e]);
}
const pi = [];
function mm(e, t) {
  t === void 0 && (t = An);
  const [n] = e, r = Sl(n ? at(n) : null), [s, a] = ee(pi);
  function i() {
    a(() => e.length ? e.map((l) => vl(l) ? r : new Da(t(l), l)) : pi);
  }
  const o = is({
    callback: i
  });
  return It(() => {
    o?.disconnect(), i(), e.forEach((l) => o?.observe(l));
  }, [e]), s;
}
function kl(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return or(t) ? t : e;
}
function hm(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ee(null), s = L((d) => {
    for (const {
      target: u
    } of d)
      if (or(u)) {
        r((f) => {
          const h = t(u);
          return f ? {
            ...f,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), a = is({
    callback: s
  }), i = L((d) => {
    const u = kl(d);
    a?.disconnect(), u && a?.observe(u), r(u ? t(u) : null);
  }, [t, a]), [o, l] = Ir(i);
  return z(() => ({
    nodeRef: o,
    rect: n,
    setRef: l
  }), [n, o, l]);
}
const pm = [{
  sensor: Aa,
  options: {}
}, {
  sensor: Fa,
  options: {}
}], gm = {
  current: {}
}, Sr = {
  draggable: {
    measure: oi
  },
  droppable: {
    measure: oi,
    strategy: er.WhileDragging,
    frequency: zs.Optimized
  },
  dragOverlay: {
    measure: An
  }
};
class Hn extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const vm = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Hn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Lr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Sr,
  measureDroppableContainers: Lr,
  windowRect: null,
  measuringScheduled: !1
}, _l = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Lr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Lr
}, dr = /* @__PURE__ */ Ct(_l), Cl = /* @__PURE__ */ Ct(vm);
function bm() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Hn()
    }
  };
}
function ym(e, t) {
  switch (t.type) {
    case Ue.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ue.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case Ue.DragEnd:
    case Ue.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Ue.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, s = new Hn(e.droppable.containers);
      return s.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case Ue.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: s
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Hn(e.droppable.containers);
      return i.set(n, {
        ...a,
        disabled: s
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case Ue.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const a = new Hn(e.droppable.containers);
      return a.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    default:
      return e;
  }
}
function xm(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: s
  } = et(dr), a = Or(r), i = Or(n?.id);
  return ie(() => {
    if (!t && !r && a && i != null) {
      if (!ss(a) || document.activeElement === a.target)
        return;
      const o = s.get(i);
      if (!o)
        return;
      const {
        activatorNode: l,
        node: d
      } = o;
      if (!l.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [l.current, d.current]) {
          if (!u)
            continue;
          const f = hf(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, s, i, a]), null;
}
function Nl(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((s, a) => a({
    transform: s,
    ...r
  }), n) : n;
}
function wm(e) {
  return z(
    () => ({
      draggable: {
        ...Sr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...Sr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...Sr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function Sm(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: s = !0
  } = e;
  const a = H(!1), {
    x: i,
    y: o
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  It(() => {
    if (!i && !o || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const d = t?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const u = n(d), f = fl(u, r);
    if (i || (f.x = 0), o || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const h = hl(d);
      h && h.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, o, r, n]);
}
const os = /* @__PURE__ */ Ct({
  ...Ot,
  scaleX: 1,
  scaleY: 1
});
var Qt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Qt || (Qt = {}));
const km = /* @__PURE__ */ Xo(function(t) {
  var n, r, s, a;
  let {
    id: i,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: u = pm,
    collisionDetection: f = Ef,
    measuring: h,
    modifiers: m,
    ...g
  } = t;
  const b = Du(ym, void 0, bm), [p, S] = b, [v, k] = xf(), [_, y] = ee(Qt.Uninitialized), w = _ === Qt.Initialized, {
    draggable: {
      active: C,
      nodes: A,
      translate: O
    },
    droppable: {
      containers: M
    }
  } = p, T = C != null ? A.get(C) : null, I = H({
    initial: null,
    translated: null
  }), N = z(() => {
    var Je;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Je = T?.data) != null ? Je : gm,
      rect: I
    } : null;
  }, [C, T]), P = H(null), [G, X] = ee(null), [te, fe] = ee(null), q = Yn(g, Object.values(g)), le = cr("DndDescribedBy", i), ue = z(() => M.getEnabled(), [M]), R = wm(h), {
    droppableRects: B,
    measureDroppableContainers: U,
    measuringScheduled: me
  } = sm(ue, {
    dragging: w,
    dependencies: [O.x, O.y],
    config: R.droppable
  }), se = nm(A, C), ge = z(() => te ? Rr(te) : null, [te]), ve = bd(), de = am(se, R.draggable.measure);
  Sm({
    activeNode: C != null ? A.get(C) : null,
    config: ve.layoutShiftCompensation,
    initialRect: de,
    measure: R.draggable.measure
  });
  const J = fi(se, R.draggable.measure, de), oe = fi(se ? se.parentElement : null), Ie = H({
    activatorEvent: null,
    active: null,
    activeNode: se,
    collisionRect: null,
    collisions: null,
    droppableRects: B,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: M,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Ve = M.getNodeFor((n = Ie.current.over) == null ? void 0 : n.id), De = hm({
    measure: R.dragOverlay.measure
  }), Xe = (r = De.nodeRef.current) != null ? r : se, We = w ? (s = De.rect) != null ? s : J : null, mt = !!(De.nodeRef.current && De.rect), x = lm(mt ? null : J), F = Sl(Xe ? at(Xe) : null), E = cm(w ? Ve ?? se : null), W = mm(E), $ = Nl(m, {
    transform: {
      x: O.x - x.x,
      y: O.y - x.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: N,
    activeNodeRect: J,
    containerNodeRect: oe,
    draggingNodeRect: We,
    over: Ie.current.over,
    overlayNodeRect: De.rect,
    scrollableAncestors: E,
    scrollableAncestorRects: W,
    windowRect: F
  }), V = ge ? yn(ge, O) : null, ne = dm(E), he = hi(ne), Ee = hi(ne, [J]), we = yn($, he), He = We ? Rf(We, $) : null, Rt = N && He ? f({
    active: N,
    collisionRect: He,
    droppableRects: B,
    droppableContainers: ue,
    pointerCoordinates: V
  }) : null, Zt = ul(Rt, "id"), [it, ln] = ee(null), ye = mt ? $ : yn($, Ee), Fe = If(ye, (a = it?.rect) != null ? a : null, J), Te = H(null), Ye = L(
    (Je, ht) => {
      let {
        sensor: pt,
        options: Ut
      } = ht;
      if (P.current == null)
        return;
      const xt = A.get(P.current);
      if (!xt)
        return;
      const gt = Je.nativeEvent, Lt = new pt({
        active: P.current,
        activeNode: xt,
        event: gt,
        options: Ut,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Ie,
        onAbort(Ge) {
          if (!A.get(Ge))
            return;
          const {
            onDragAbort: Mt
          } = q.current, jt = {
            id: Ge
          };
          Mt?.(jt), v({
            type: "onDragAbort",
            event: jt
          });
        },
        onPending(Ge, Wt, Mt, jt) {
          if (!A.get(Ge))
            return;
          const {
            onDragPending: Rn
          } = q.current, Ht = {
            id: Ge,
            constraint: Wt,
            initialCoordinates: Mt,
            offset: jt
          };
          Rn?.(Ht), v({
            type: "onDragPending",
            event: Ht
          });
        },
        onStart(Ge) {
          const Wt = P.current;
          if (Wt == null)
            return;
          const Mt = A.get(Wt);
          if (!Mt)
            return;
          const {
            onDragStart: jt
          } = q.current, On = {
            activatorEvent: gt,
            active: {
              id: Wt,
              data: Mt.data,
              rect: I
            }
          };
          gr(() => {
            jt?.(On), y(Qt.Initializing), S({
              type: Ue.DragStart,
              initialCoordinates: Ge,
              active: Wt
            }), v({
              type: "onDragStart",
              event: On
            }), X(Te.current), fe(gt);
          });
        },
        onMove(Ge) {
          S({
            type: Ue.DragMove,
            coordinates: Ge
          });
        },
        onEnd: hn(Ue.DragEnd),
        onCancel: hn(Ue.DragCancel)
      });
      Te.current = Lt;
      function hn(Ge) {
        return async function() {
          const {
            active: Mt,
            collisions: jt,
            over: On,
            scrollAdjustedTranslate: Rn
          } = Ie.current;
          let Ht = null;
          if (Mt && Rn) {
            const {
              cancelDrop: Ln
            } = q.current;
            Ht = {
              activatorEvent: gt,
              active: Mt,
              collisions: jt,
              delta: Rn,
              over: On
            }, Ge === Ue.DragEnd && typeof Ln == "function" && await Promise.resolve(Ln(Ht)) && (Ge = Ue.DragCancel);
          }
          P.current = null, gr(() => {
            S({
              type: Ge
            }), y(Qt.Uninitialized), ln(null), X(null), fe(null), Te.current = null;
            const Ln = Ge === Ue.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ht) {
              const gs = q.current[Ln];
              gs?.(Ht), v({
                type: Ln,
                event: Ht
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), In = L((Je, ht) => (pt, Ut) => {
    const xt = pt.nativeEvent, gt = A.get(Ut);
    if (
      // Another sensor is already instantiating
      P.current !== null || // No active draggable
      !gt || // Event has already been captured
      xt.dndKit || xt.defaultPrevented
    )
      return;
    const Lt = {
      active: gt
    };
    Je(pt, ht.options, Lt) === !0 && (xt.dndKit = {
      capturedBy: ht.sensor
    }, P.current = Ut, Ye(pt, ht));
  }, [A, Ye]), ei = rm(u, In);
  um(u), It(() => {
    J && _ === Qt.Initializing && y(Qt.Initialized);
  }, [J, _]), ie(
    () => {
      const {
        onDragMove: Je
      } = q.current, {
        active: ht,
        activatorEvent: pt,
        collisions: Ut,
        over: xt
      } = Ie.current;
      if (!ht || !pt)
        return;
      const gt = {
        active: ht,
        activatorEvent: pt,
        collisions: Ut,
        delta: {
          x: we.x,
          y: we.y
        },
        over: xt
      };
      gr(() => {
        Je?.(gt), v({
          type: "onDragMove",
          event: gt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [we.x, we.y]
  ), ie(
    () => {
      const {
        active: Je,
        activatorEvent: ht,
        collisions: pt,
        droppableContainers: Ut,
        scrollAdjustedTranslate: xt
      } = Ie.current;
      if (!Je || P.current == null || !ht || !xt)
        return;
      const {
        onDragOver: gt
      } = q.current, Lt = Ut.get(Zt), hn = Lt && Lt.rect.current ? {
        id: Lt.id,
        rect: Lt.rect.current,
        data: Lt.data,
        disabled: Lt.disabled
      } : null, Ge = {
        active: Je,
        activatorEvent: ht,
        collisions: pt,
        delta: {
          x: xt.x,
          y: xt.y
        },
        over: hn
      };
      gr(() => {
        ln(hn), gt?.(Ge), v({
          type: "onDragOver",
          event: Ge
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Zt]
  ), It(() => {
    Ie.current = {
      activatorEvent: te,
      active: N,
      activeNode: se,
      collisionRect: He,
      collisions: Rt,
      droppableRects: B,
      draggableNodes: A,
      draggingNode: Xe,
      draggingNodeRect: We,
      droppableContainers: M,
      over: it,
      scrollableAncestors: E,
      scrollAdjustedTranslate: we
    }, I.current = {
      initial: We,
      translated: He
    };
  }, [N, se, Rt, He, A, Xe, We, B, M, it, E, we]), Jf({
    ...ve,
    delta: O,
    draggingRect: He,
    pointerCoordinates: V,
    scrollableAncestors: E,
    scrollableAncestorRects: W
  });
  const gd = z(() => ({
    active: N,
    activeNode: se,
    activeNodeRect: J,
    activatorEvent: te,
    collisions: Rt,
    containerNodeRect: oe,
    dragOverlay: De,
    draggableNodes: A,
    droppableContainers: M,
    droppableRects: B,
    over: it,
    measureDroppableContainers: U,
    scrollableAncestors: E,
    scrollableAncestorRects: W,
    measuringConfiguration: R,
    measuringScheduled: me,
    windowRect: F
  }), [N, se, J, te, Rt, oe, De, A, M, B, it, U, E, W, R, me, F]), vd = z(() => ({
    activatorEvent: te,
    activators: ei,
    active: N,
    activeNodeRect: J,
    ariaDescribedById: {
      draggable: le
    },
    dispatch: S,
    draggableNodes: A,
    over: it,
    measureDroppableContainers: U
  }), [te, ei, N, J, S, le, A, it, U]);
  return ce.createElement(dl.Provider, {
    value: k
  }, ce.createElement(dr.Provider, {
    value: vd
  }, ce.createElement(Cl.Provider, {
    value: gd
  }, ce.createElement(os.Provider, {
    value: Fe
  }, d)), ce.createElement(xm, {
    disabled: o?.restoreFocus === !1
  })), ce.createElement(kf, {
    ...o,
    hiddenTextDescribedById: le
  }));
  function bd() {
    const Je = G?.autoScrollEnabled === !1, ht = typeof l == "object" ? l.enabled === !1 : l === !1, pt = w && !Je && !ht;
    return typeof l == "object" ? {
      ...l,
      enabled: pt
    } : {
      enabled: pt
    };
  }
}), _m = /* @__PURE__ */ Ct(null), gi = "button", Cm = "Draggable";
function Nm(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: s
  } = e;
  const a = cr(Cm), {
    activators: i,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: h
  } = et(dr), {
    role: m = gi,
    roleDescription: g = "draggable",
    tabIndex: b = 0
  } = s ?? {}, p = l?.id === t, S = et(p ? os : _m), [v, k] = Ir(), [_, y] = Ir(), w = fm(i, t), C = Yn(n);
  It(
    () => (f.set(t, {
      id: t,
      key: a,
      node: v,
      activatorNode: _,
      data: C
    }), () => {
      const O = f.get(t);
      O && O.key === a && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const A = z(() => ({
    role: m,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": p && m === gi ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": u.draggable
  }), [r, m, b, p, g, u.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: A,
    isDragging: p,
    listeners: r ? void 0 : w,
    node: v,
    over: h,
    setNodeRef: k,
    setActivatorNodeRef: y,
    transform: S
  };
}
function Dl() {
  return et(Cl);
}
const Dm = "Droppable", Fm = {
  timeout: 25
};
function Tm(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: s
  } = e;
  const a = cr(Dm), {
    active: i,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = et(dr), u = H({
    disabled: n
  }), f = H(!1), h = H(null), m = H(null), {
    disabled: g,
    updateMeasurementsFor: b,
    timeout: p
  } = {
    ...Fm,
    ...s
  }, S = Yn(b ?? r), v = L(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        d(Array.isArray(S.current) ? S.current : [S.current]), m.current = null;
      }, p);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), k = is({
    callback: v,
    disabled: g || !i
  }), _ = L((A, O) => {
    k && (O && (k.unobserve(O), f.current = !1), A && k.observe(A));
  }, [k]), [y, w] = Ir(_), C = Yn(t);
  return ie(() => {
    !k || !y.current || (k.disconnect(), f.current = !1, k.observe(y.current));
  }, [y, k]), ie(
    () => (o({
      type: Ue.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: n,
        node: y,
        rect: h,
        data: C
      }
    }), () => o({
      type: Ue.UnregisterDroppable,
      key: a,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ie(() => {
    n !== u.current.disabled && (o({
      type: Ue.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: n
    }), u.current.disabled = n);
  }, [r, a, n, o]), {
    active: i,
    rect: h,
    isOver: l?.id === r,
    node: y,
    over: l,
    setNodeRef: w
  };
}
function Am(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, s] = ee(null), [a, i] = ee(null), o = Or(n);
  return !n && !r && o && s(o), It(() => {
    if (!a)
      return;
    const l = r?.key, d = r?.props.id;
    if (l == null || d == null) {
      s(null);
      return;
    }
    Promise.resolve(t(d, a)).then(() => {
      s(null);
    });
  }, [t, r, a]), ce.createElement(ce.Fragment, null, n, r ? Fu(r, {
    ref: i
  }) : null);
}
const Em = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Im(e) {
  let {
    children: t
  } = e;
  return ce.createElement(dr.Provider, {
    value: _l
  }, ce.createElement(os.Provider, {
    value: Em
  }, t));
}
const Om = {
  position: "fixed",
  touchAction: "none"
}, Rm = (e) => ss(e) ? "transform 250ms ease" : void 0, Lm = /* @__PURE__ */ ft((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: s,
    children: a,
    className: i,
    rect: o,
    style: l,
    transform: d,
    transition: u = Rm
  } = e;
  if (!o)
    return null;
  const f = s ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Om,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Jt.Transform.toString(f),
    transformOrigin: s && r ? Nf(r, o) : void 0,
    transition: typeof u == "function" ? u(r) : u,
    ...l
  };
  return ce.createElement(n, {
    className: i,
    style: h,
    ref: t
  }, a);
}), Mm = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const s = {}, {
    styles: a,
    className: i
  } = e;
  if (a != null && a.active)
    for (const [o, l] of Object.entries(a.active))
      l !== void 0 && (s[o] = n.node.style.getPropertyValue(o), n.node.style.setProperty(o, l));
  if (a != null && a.dragOverlay)
    for (const [o, l] of Object.entries(a.dragOverlay))
      l !== void 0 && r.node.style.setProperty(o, l);
  return i != null && i.active && n.node.classList.add(i.active), i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay), function() {
    for (const [l, d] of Object.entries(s))
      n.node.style.setProperty(l, d);
    i != null && i.active && n.node.classList.remove(i.active);
  };
}, Pm = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Jt.Transform.toString(t)
  }, {
    transform: Jt.Transform.toString(n)
  }];
}, Bm = {
  duration: 250,
  easing: "ease",
  keyframes: Pm,
  sideEffects: /* @__PURE__ */ Mm({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Vm(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: s
  } = e;
  return rs((a, i) => {
    if (t === null)
      return;
    const o = n.get(a);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = kl(i);
    if (!d)
      return;
    const {
      transform: u
    } = at(i).getComputedStyle(i), f = ml(u);
    if (!f)
      return;
    const h = typeof t == "function" ? t : jm(t);
    return xl(l, s.draggable.measure), h({
      active: {
        id: a,
        data: o.data,
        node: l,
        rect: s.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: i,
        rect: s.dragOverlay.measure(d)
      },
      droppableContainers: r,
      measuringConfiguration: s,
      transform: f
    });
  });
}
function jm(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: s
  } = {
    ...Bm,
    ...e
  };
  return (a) => {
    let {
      active: i,
      dragOverlay: o,
      transform: l,
      ...d
    } = a;
    if (!t)
      return;
    const u = {
      x: o.rect.left - i.rect.left,
      y: o.rect.top - i.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? i.rect.width * l.scaleX / o.rect.width : 1,
      scaleY: l.scaleY !== 1 ? i.rect.height * l.scaleY / o.rect.height : 1
    }, h = {
      x: l.x - u.x,
      y: l.y - u.y,
      ...f
    }, m = s({
      ...d,
      active: i,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = m, b = m[m.length - 1];
    if (JSON.stringify(g) === JSON.stringify(b))
      return;
    const p = r?.({
      active: i,
      dragOverlay: o,
      ...d
    }), S = o.node.animate(m, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((v) => {
      S.onfinish = () => {
        p?.(), v();
      };
    });
  };
}
let vi = 0;
function $m(e) {
  return z(() => {
    if (e != null)
      return vi++, vi;
  }, [e]);
}
const zm = /* @__PURE__ */ ce.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: s,
    transition: a,
    modifiers: i,
    wrapperElement: o = "div",
    className: l,
    zIndex: d = 999
  } = e;
  const {
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    containerNodeRect: m,
    draggableNodes: g,
    droppableContainers: b,
    dragOverlay: p,
    over: S,
    measuringConfiguration: v,
    scrollableAncestors: k,
    scrollableAncestorRects: _,
    windowRect: y
  } = Dl(), w = et(os), C = $m(f?.id), A = Nl(i, {
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: p.rect,
    over: S,
    overlayNodeRect: p.rect,
    scrollableAncestors: k,
    scrollableAncestorRects: _,
    transform: w,
    windowRect: y
  }), O = Ea(h), M = Vm({
    config: r,
    draggableNodes: g,
    droppableContainers: b,
    measuringConfiguration: v
  }), T = O ? p.setRef : void 0;
  return ce.createElement(Im, null, ce.createElement(Am, {
    animation: M
  }, f && C ? ce.createElement(Lm, {
    key: C,
    id: f.id,
    ref: T,
    as: o,
    activatorEvent: u,
    adjustScale: t,
    className: l,
    transition: a,
    rect: O,
    style: {
      zIndex: d,
      ...s
    },
    transform: A
  }, n) : null));
});
function Ia(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function qm(e, t) {
  return e.reduce((n, r, s) => {
    const a = t.get(r);
    return a && (n[s] = a), n;
  }, Array(e.length));
}
function vr(e) {
  return e !== null && e >= 0;
}
function Zm(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Um(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Fl = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: s
  } = e;
  const a = Ia(t, r, n), i = t[s], o = a[s];
  return !o || !i ? null : {
    x: o.left - i.left,
    y: o.top - i.top,
    scaleX: o.width / i.width,
    scaleY: o.height / i.height
  };
}, Tl = "Sortable", Al = /* @__PURE__ */ ce.createContext({
  activeIndex: -1,
  containerId: Tl,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Fl,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Wm(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: s = Fl,
    disabled: a = !1
  } = e;
  const {
    active: i,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: u
  } = Dl(), f = cr(Tl, n), h = o.rect !== null, m = z(() => r.map((w) => typeof w == "object" && "id" in w ? w.id : w), [r]), g = i != null, b = i ? m.indexOf(i.id) : -1, p = d ? m.indexOf(d.id) : -1, S = H(m), v = !Zm(m, S.current), k = p !== -1 && b === -1 || v, _ = Um(a);
  It(() => {
    v && g && u(m);
  }, [v, m, g, u]), ie(() => {
    S.current = m;
  }, [m]);
  const y = z(
    () => ({
      activeIndex: b,
      containerId: f,
      disabled: _,
      disableTransforms: k,
      items: m,
      overIndex: p,
      useDragOverlay: h,
      sortedRects: qm(m, l),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, f, _.draggable, _.droppable, k, m, p, l, h, s]
  );
  return ce.createElement(Al.Provider, {
    value: y
  }, t);
}
const Hm = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: s
  } = e;
  return Ia(n, r, s).indexOf(t);
}, Qm = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: s,
    items: a,
    newIndex: i,
    previousItems: o,
    previousContainerId: l,
    transition: d
  } = e;
  return !d || !r || o !== a && s === i ? !1 : n ? !0 : i !== s && t === l;
}, Gm = {
  duration: 200,
  easing: "ease"
}, El = "transform", Km = /* @__PURE__ */ Jt.Transition.toString({
  property: El,
  duration: 0,
  easing: "linear"
}), Xm = {
  roleDescription: "sortable"
};
function Ym(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: s
  } = e;
  const [a, i] = ee(null), o = H(n);
  return It(() => {
    if (!t && n !== o.current && r.current) {
      const l = s.current;
      if (l) {
        const d = An(r.current, {
          ignoreTransform: !0
        }), u = {
          x: l.left - d.left,
          y: l.top - d.top,
          scaleX: l.width / d.width,
          scaleY: l.height / d.height
        };
        (u.x || u.y) && i(u);
      }
    }
    n !== o.current && (o.current = n);
  }, [t, n, r, s]), ie(() => {
    a && i(null);
  }, [a]), a;
}
function Jm(e) {
  let {
    animateLayoutChanges: t = Qm,
    attributes: n,
    disabled: r,
    data: s,
    getNewIndex: a = Hm,
    id: i,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = Gm
  } = e;
  const {
    items: u,
    containerId: f,
    activeIndex: h,
    disabled: m,
    disableTransforms: g,
    sortedRects: b,
    overIndex: p,
    useDragOverlay: S,
    strategy: v
  } = et(Al), k = eh(r, m), _ = u.indexOf(i), y = z(() => ({
    sortable: {
      containerId: f,
      index: _,
      items: u
    },
    ...s
  }), [f, s, _, u]), w = z(() => u.slice(u.indexOf(i)), [u, i]), {
    rect: C,
    node: A,
    isOver: O,
    setNodeRef: M
  } = Tm({
    id: i,
    data: y,
    disabled: k.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: w,
      ...l
    }
  }), {
    active: T,
    activatorEvent: I,
    activeNodeRect: N,
    attributes: P,
    setNodeRef: G,
    listeners: X,
    isDragging: te,
    over: fe,
    setActivatorNodeRef: q,
    transform: le
  } = Nm({
    id: i,
    data: y,
    attributes: {
      ...Xm,
      ...n
    },
    disabled: k.draggable
  }), ue = df(M, G), R = !!T, B = R && !g && vr(h) && vr(p), U = !S && te, me = U && B ? le : null, ge = B ? me ?? (o ?? v)({
    rects: b,
    activeNodeRect: N,
    activeIndex: h,
    overIndex: p,
    index: _
  }) : null, ve = vr(h) && vr(p) ? a({
    id: i,
    items: u,
    activeIndex: h,
    overIndex: p
  }) : _, de = T?.id, J = H({
    activeId: de,
    items: u,
    newIndex: ve,
    containerId: f
  }), oe = u !== J.current.items, Ie = t({
    active: T,
    containerId: f,
    isDragging: te,
    isSorting: R,
    id: i,
    index: _,
    items: u,
    newIndex: J.current.newIndex,
    previousItems: J.current.items,
    previousContainerId: J.current.containerId,
    transition: d,
    wasDragging: J.current.activeId != null
  }), Ve = Ym({
    disabled: !Ie,
    index: _,
    node: A,
    rect: C
  });
  return ie(() => {
    R && J.current.newIndex !== ve && (J.current.newIndex = ve), f !== J.current.containerId && (J.current.containerId = f), u !== J.current.items && (J.current.items = u);
  }, [R, ve, f, u]), ie(() => {
    if (de === J.current.activeId)
      return;
    if (de != null && J.current.activeId == null) {
      J.current.activeId = de;
      return;
    }
    const Xe = setTimeout(() => {
      J.current.activeId = de;
    }, 50);
    return () => clearTimeout(Xe);
  }, [de]), {
    active: T,
    activeIndex: h,
    attributes: P,
    data: y,
    rect: C,
    index: _,
    newIndex: ve,
    items: u,
    isOver: O,
    isSorting: R,
    isDragging: te,
    listeners: X,
    node: A,
    overIndex: p,
    over: fe,
    setNodeRef: ue,
    setActivatorNodeRef: q,
    setDroppableNodeRef: M,
    setDraggableNodeRef: G,
    transform: Ve ?? ge,
    transition: De()
  };
  function De() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Ve || // Or to prevent items jumping to back to their "new" position when items change
      oe && J.current.newIndex === _
    )
      return Km;
    if (!(U && !ss(I) || !d) && (R || Ie))
      return Jt.Transition.toString({
        ...d,
        property: El
      });
  }
}
function eh(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
function Pr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const th = [xe.Down, xe.Right, xe.Up, xe.Left], nh = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: s,
      droppableContainers: a,
      over: i,
      scrollableAncestors: o
    }
  } = t;
  if (th.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    a.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const h = s.get(f.id);
      if (h)
        switch (e.code) {
          case xe.Down:
            r.top < h.top && l.push(f);
            break;
          case xe.Up:
            r.top > h.top && l.push(f);
            break;
          case xe.Left:
            r.left > h.left && l.push(f);
            break;
          case xe.Right:
            r.left < h.left && l.push(f);
            break;
        }
    });
    const d = Tf({
      collisionRect: r,
      droppableRects: s,
      droppableContainers: l
    });
    let u = ul(d, "id");
    if (u === i?.id && d.length > 1 && (u = d[1].id), u != null) {
      const f = a.get(n.id), h = a.get(u), m = h ? s.get(h.id) : null, g = h?.node.current;
      if (g && m && f && h) {
        const p = as(g).some((w, C) => o[C] !== w), S = Il(f, h), v = rh(f, h), k = p || !S ? {
          x: 0,
          y: 0
        } : {
          x: v ? r.width - m.width : 0,
          y: v ? r.height - m.height : 0
        }, _ = {
          x: m.left,
          y: m.top
        };
        return k.x && k.y ? _ : Jn(_, k);
      }
    }
  }
};
function Il(e, t) {
  return !Pr(e) || !Pr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function rh(e, t) {
  return !Pr(e) || !Pr(t) || !Il(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const bi = ({ id: e, children: t }) => {
  const { attributes: n, listeners: r, setNodeRef: s, transform: a, transition: i } = Jm({ id: e }), o = {
    transform: Jt.Translate.toString(a),
    transition: i,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ c("div", { ref: s, style: o, ...n, ...r, children: t });
}, Oa = ({
  blocks: e,
  sortable: t = !1,
  onSort: n = () => {
  },
  main: r = !1
}) => {
  const [s, a] = ee([]);
  kd(() => {
    a(
      e.map((f, h) => ({
        id: f.id ?? h.toString(),
        render: f.render
      }))
    );
  }, [e]);
  const [i, o] = ee(null), l = _f(
    ai(Aa),
    ai(Fa, {
      coordinateGetter: nh
    })
  ), d = (f) => {
    o(f.active.id);
  }, u = (f) => {
    const { active: h, over: m } = f;
    o(null), m && h.id !== m.id && a((g) => {
      const b = g.findIndex((S) => S.id === h.id), p = g.findIndex((S) => S.id === m.id);
      return Ia(g, b, p);
    });
  };
  return /* @__PURE__ */ c("div", { className: Q("flex flex-wrap items-stretch gap-4", r && "flex-1"), children: /* @__PURE__ */ D(
    km,
    {
      sensors: l,
      onDragStart: d,
      onDragEnd: u,
      children: [
        /* @__PURE__ */ c(Wm, { items: s, children: s.map((f) => /* @__PURE__ */ c(bi, { id: f.id, children: f.render }, f.id)) }),
        /* @__PURE__ */ c(zm, { children: i ? /* @__PURE__ */ c(bi, { id: i, children: s.find((f) => f.id === i)?.render }) : null })
      ]
    }
  ) });
};
Oa.displayName = "GroupMasonry";
Oa.__isPageLayoutGroup = !0;
const sh = ft(function({ children: t, aside: n, header: r, variant: s = "main-aside" }, a) {
  return process.env.NODE_ENV === "development" && ol("Page", t, ["block", "group"]), /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ D(
    "div",
    {
      className: Q(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ D(
          "main",
          {
            className: Q(
              "sm:min-h-xs h-fit border-0",
              "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2",
              "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden",
              s === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
              "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
            ),
            children: [
              r && /* @__PURE__ */ c(
                "header",
                {
                  className: Q(
                    "sticky top-0 z-30 bg-f1-background"
                  ),
                  children: r
                }
              ),
              /* @__PURE__ */ c("div", { className: "flex-1", children: t })
            ]
          }
        ),
        n && /* @__PURE__ */ c(
          "aside",
          {
            className: Q(
              "min-w-30 sm:basis-1/4 md:max-w-80",
              "order-2",
              s === "aside-main" ? "md:order-1" : "md:order-3"
            ),
            children: n
          }
        )
      ]
    }
  ) });
}), Cy = {
  Page: Re(bt("Page", sh)),
  Block: Re(bt("Block", ts)),
  BlockContent: Re(
    bt("BlockContent", of)
  ),
  Group: Re(bt("Group", _a)),
  GroupGrid: Re(
    bt("GroupGrid", es)
  ),
  GroupMasonry: Re(
    bt("GroupMasonry", Oa)
  )
}, Ny = Zu, Dy = Wu, Fy = Re(
  sr(
    {
      name: "HomeLayout",
      type: "layout"
    },
    zu
  )
);
var ws, yi;
function ah() {
  if (yi) return ws;
  yi = 1;
  var e = _d();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return ws = t, ws;
}
const Ty = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], ih = (e) => typeof e == "boolean" || !e ? {
  show: !!e,
  invertStatus: !1
} : {
  show: e.show ?? !0,
  invertStatus: e.invertStatus ?? !1
}, Ol = ({ label: e, ...t }) => {
  const n = Cd(), r = n(t.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), s = ih(t.trend), a = n(t.comparison), i = Nd(
    r.numericValue,
    r.formatterOptions
  ), o = ni(a.numericValue), l = ni(r.numericValue), d = z(() => {
    if (!(!o || !s.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, s.show]);
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    e && /* @__PURE__ */ c("div", { children: e }),
    /* @__PURE__ */ D("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ c("span", { className: "font-bold text-2xl", children: i }),
      o !== void 0 && /* @__PURE__ */ c(
        Dd,
        {
          percentage: d,
          amount: a,
          invertStatus: s.invertStatus,
          hint: t.comparisonHint
        }
      )
    ] })
  ] });
}, oh = () => /* @__PURE__ */ D("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ c(Be, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ D("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ c(Be, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ c(Be, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
Ol.displayName = "F0BigNumber";
const lh = ko(Ol, oh), Ay = Re(lh), Ey = Fd.filter(
  (e) => e !== "ai"
), Iy = Co, Oy = ["default", "outline", "neutral"], Ry = Co, Ly = ["split", "dropdown"], My = Td, Rl = {
  background: {
    transparent: "bg-transparent",
    primary: "bg-f1-background",
    secondary: "bg-f1-background-secondary",
    tertiary: "bg-f1-background-tertiary",
    inverse: "bg-f1-background-inverse",
    "inverse-secondary": "bg-f1-background-inverse-secondary",
    bold: "bg-f1-background-bold",
    accent: "bg-f1-background-accent",
    "accent-bold": "bg-f1-background-accent-bold",
    promote: "bg-f1-background-promote",
    critical: "bg-f1-background-critical",
    "critical-bold": "bg-f1-background-critical-bold",
    info: "bg-f1-background-info",
    "info-bold": "bg-f1-background-info-bold",
    warning: "bg-f1-background-warning",
    "warning-bold": "bg-f1-background-warning-bold",
    positive: "bg-f1-background-positive",
    "positive-bold": "bg-f1-background-positive-bold",
    selected: "bg-f1-background-selected",
    "selected-secondary": "bg-f1-background-selected-secondary",
    "selected-bold": "bg-f1-background-selected-bold",
    overlay: "bg-f1-background-overlay"
  }
}, Ll = {
  // -- Color --
  borderColor: {
    default: "border-f1-border",
    secondary: "border-f1-border-secondary",
    bold: "border-f1-border-bold",
    selected: "border-f1-border-selected",
    "selected-bold": "border-f1-border-selected-bold",
    critical: "border-f1-border-critical",
    "critical-bold": "border-f1-border-critical-bold",
    warning: "border-f1-border-warning",
    "warning-bold": "border-f1-border-warning-bold",
    info: "border-f1-border-info",
    "info-bold": "border-f1-border-info-bold",
    positive: "border-f1-border-positive",
    "positive-bold": "border-f1-border-positive-bold",
    promote: "border-f1-border-promote"
  },
  // -- Width (all sides) --
  border: {
    none: "border-0",
    default: "border border-solid",
    thick: "border-2 border-solid"
  },
  // -- Width per side (includes reset so only the specified side shows) --
  borderTop: {
    none: "border-t-0",
    default: "border-t border-solid",
    thick: "border-t-2 border-solid"
  },
  borderBottom: {
    none: "border-b-0",
    default: "border-b border-solid",
    thick: "border-b-2 border-solid"
  },
  borderLeft: {
    none: "border-l-0",
    default: "border-l border-solid",
    thick: "border-l-2 border-solid"
  },
  borderRight: {
    none: "border-r-0",
    default: "border-r border-solid",
    thick: "border-r-2 border-solid"
  },
  // -- Radius (all corners) --
  borderRadius: {
    none: "rounded-none",
    "2xs": "rounded-2xs",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full"
  },
  // -- Radius per corner --
  borderRadiusTopLeft: {
    none: "rounded-tl-none",
    "2xs": "rounded-tl-2xs",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    full: "rounded-tl-full"
  },
  borderRadiusTopRight: {
    none: "rounded-tr-none",
    "2xs": "rounded-tr-2xs",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    full: "rounded-tr-full"
  },
  borderRadiusBottomLeft: {
    none: "rounded-bl-none",
    "2xs": "rounded-bl-2xs",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    full: "rounded-bl-full"
  },
  borderRadiusBottomRight: {
    none: "rounded-br-none",
    "2xs": "rounded-br-2xs",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    full: "rounded-br-full"
  },
  // -- Style --
  borderStyle: {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    none: "border-none"
  }
}, ch = {}, dh = {
  // Special
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  min: "w-min",
  max: "w-max",
  fit: "w-fit",
  // Numeric scale
  0: "w-0",
  "0.5": "w-0.5",
  1: "w-1",
  "1.5": "w-1.5",
  2: "w-2",
  "2.5": "w-2.5",
  3: "w-3",
  "3.5": "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  18: "w-18",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "5/6": "w-5/6"
}, uh = {
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  min: "h-min",
  max: "h-max",
  fit: "h-fit",
  0: "h-0",
  "0.5": "h-0.5",
  1: "h-1",
  "1.5": "h-1.5",
  2: "h-2",
  "2.5": "h-2.5",
  3: "h-3",
  "3.5": "h-3.5",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
  9: "h-9",
  10: "h-10",
  11: "h-11",
  12: "h-12",
  14: "h-14",
  16: "h-16",
  18: "h-18",
  20: "h-20",
  24: "h-24",
  28: "h-28",
  32: "h-32",
  36: "h-36",
  40: "h-40",
  44: "h-44",
  48: "h-48",
  52: "h-52",
  56: "h-56",
  60: "h-60",
  64: "h-64",
  72: "h-72",
  80: "h-80",
  96: "h-96",
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "5/6": "h-5/6"
}, fh = {
  auto: "min-w-0",
  full: "min-w-full",
  screen: "min-w-screen",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit",
  0: "min-w-0",
  "0.5": "min-w-0.5",
  1: "min-w-1",
  "1.5": "min-w-1.5",
  2: "min-w-2",
  "2.5": "min-w-2.5",
  3: "min-w-3",
  "3.5": "min-w-3.5",
  4: "min-w-4",
  5: "min-w-5",
  6: "min-w-6",
  7: "min-w-7",
  8: "min-w-8",
  9: "min-w-9",
  10: "min-w-10",
  11: "min-w-11",
  12: "min-w-12",
  14: "min-w-14",
  16: "min-w-16",
  18: "min-w-18",
  20: "min-w-20",
  24: "min-w-24",
  28: "min-w-28",
  32: "min-w-32",
  36: "min-w-36",
  40: "min-w-40",
  44: "min-w-44",
  48: "min-w-48",
  52: "min-w-52",
  56: "min-w-56",
  60: "min-w-60",
  64: "min-w-64",
  72: "min-w-72",
  80: "min-w-80",
  96: "min-w-96",
  "1/2": "min-w-1/2",
  "1/3": "min-w-1/3",
  "2/3": "min-w-2/3",
  "1/4": "min-w-1/4",
  "2/4": "min-w-2/4",
  "3/4": "min-w-3/4",
  "1/5": "min-w-1/5",
  "2/5": "min-w-2/5",
  "3/5": "min-w-3/5",
  "4/5": "min-w-4/5",
  "1/6": "min-w-1/6",
  "5/6": "min-w-5/6"
}, mh = {
  auto: "min-h-0",
  full: "min-h-full",
  screen: "min-h-screen",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit",
  0: "min-h-0",
  "0.5": "min-h-0.5",
  1: "min-h-1",
  "1.5": "min-h-1.5",
  2: "min-h-2",
  "2.5": "min-h-2.5",
  3: "min-h-3",
  "3.5": "min-h-3.5",
  4: "min-h-4",
  5: "min-h-5",
  6: "min-h-6",
  7: "min-h-7",
  8: "min-h-8",
  9: "min-h-9",
  10: "min-h-10",
  11: "min-h-11",
  12: "min-h-12",
  14: "min-h-14",
  16: "min-h-16",
  18: "min-h-18",
  20: "min-h-20",
  24: "min-h-24",
  28: "min-h-28",
  32: "min-h-32",
  36: "min-h-36",
  40: "min-h-40",
  44: "min-h-44",
  48: "min-h-48",
  52: "min-h-52",
  56: "min-h-56",
  60: "min-h-60",
  64: "min-h-64",
  72: "min-h-72",
  80: "min-h-80",
  96: "min-h-96",
  "1/2": "min-h-1/2",
  "1/3": "min-h-1/3",
  "2/3": "min-h-2/3",
  "1/4": "min-h-1/4",
  "2/4": "min-h-2/4",
  "3/4": "min-h-3/4",
  "1/5": "min-h-1/5",
  "2/5": "min-h-2/5",
  "3/5": "min-h-3/5",
  "4/5": "min-h-4/5",
  "1/6": "min-h-1/6",
  "5/6": "min-h-5/6"
}, hh = {
  auto: "max-w-none",
  full: "max-w-full",
  screen: "max-w-screen",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  0: "max-w-0",
  "0.5": "max-w-0.5",
  1: "max-w-1",
  "1.5": "max-w-1.5",
  2: "max-w-2",
  "2.5": "max-w-2.5",
  3: "max-w-3",
  "3.5": "max-w-3.5",
  4: "max-w-4",
  5: "max-w-5",
  6: "max-w-6",
  7: "max-w-7",
  8: "max-w-8",
  9: "max-w-9",
  10: "max-w-10",
  11: "max-w-11",
  12: "max-w-12",
  14: "max-w-14",
  16: "max-w-16",
  18: "max-w-18",
  20: "max-w-20",
  24: "max-w-24",
  28: "max-w-28",
  32: "max-w-32",
  36: "max-w-36",
  40: "max-w-40",
  44: "max-w-44",
  48: "max-w-48",
  52: "max-w-52",
  56: "max-w-56",
  60: "max-w-60",
  64: "max-w-64",
  72: "max-w-72",
  80: "max-w-80",
  96: "max-w-96",
  "1/2": "max-w-1/2",
  "1/3": "max-w-1/3",
  "2/3": "max-w-2/3",
  "1/4": "max-w-1/4",
  "2/4": "max-w-2/4",
  "3/4": "max-w-3/4",
  "1/5": "max-w-1/5",
  "2/5": "max-w-2/5",
  "3/5": "max-w-3/5",
  "4/5": "max-w-4/5",
  "1/6": "max-w-1/6",
  "5/6": "max-w-5/6"
}, ph = {
  auto: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit",
  0: "max-h-0",
  "0.5": "max-h-0.5",
  1: "max-h-1",
  "1.5": "max-h-1.5",
  2: "max-h-2",
  "2.5": "max-h-2.5",
  3: "max-h-3",
  "3.5": "max-h-3.5",
  4: "max-h-4",
  5: "max-h-5",
  6: "max-h-6",
  7: "max-h-7",
  8: "max-h-8",
  9: "max-h-9",
  10: "max-h-10",
  11: "max-h-11",
  12: "max-h-12",
  14: "max-h-14",
  16: "max-h-16",
  18: "max-h-18",
  20: "max-h-20",
  24: "max-h-24",
  28: "max-h-28",
  32: "max-h-32",
  36: "max-h-36",
  40: "max-h-40",
  44: "max-h-44",
  48: "max-h-48",
  52: "max-h-52",
  56: "max-h-56",
  60: "max-h-60",
  64: "max-h-64",
  72: "max-h-72",
  80: "max-h-80",
  96: "max-h-96",
  "1/2": "max-h-1/2",
  "1/3": "max-h-1/3",
  "2/3": "max-h-2/3",
  "1/4": "max-h-1/4",
  "2/4": "max-h-2/4",
  "3/4": "max-h-3/4",
  "1/5": "max-h-1/5",
  "2/5": "max-h-2/5",
  "3/5": "max-h-3/5",
  "4/5": "max-h-4/5",
  "1/6": "max-h-1/6",
  "5/6": "max-h-5/6"
}, Ml = {
  width: dh,
  height: uh,
  minWidth: fh,
  minHeight: mh,
  maxWidth: hh,
  maxHeight: ph
}, Pl = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden"
  },
  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky"
  }
}, Bl = {
  divider: {
    x: "divide-x divide-y-0 divide-solid",
    y: "divide-y divide-x-0 divide-solid"
  },
  dividerColor: {
    default: "divide-f1-border",
    secondary: "divide-f1-border-secondary",
    bold: "divide-f1-border-bold",
    selected: "divide-f1-border-selected",
    "selected-bold": "divide-f1-border-selected-bold",
    critical: "divide-f1-border-critical",
    "critical-bold": "divide-f1-border-critical-bold",
    warning: "divide-f1-border-warning",
    "warning-bold": "divide-f1-border-warning-bold",
    info: "divide-f1-border-info",
    "info-bold": "divide-f1-border-info-bold",
    positive: "divide-f1-border-positive",
    "positive-bold": "divide-f1-border-positive-bold",
    promote: "divide-f1-border-promote"
  }
}, Vl = {
  gap: {
    none: "gap-0",
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4",
    "2xl": "gap-6",
    "3xl": "gap-8",
    "4xl": "gap-10",
    "5xl": "gap-12"
  },
  alignItems: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  },
  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch"
  },
  flexDirection: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  },
  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  },
  grow: {
    true: "grow",
    false: "grow-0"
  },
  shrink: {
    true: "shrink",
    false: "shrink-0"
  }
}, gh = {}, jl = {
  columns: {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12"
  },
  rows: {
    none: "grid-rows-none",
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6"
  },
  colSpan: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
    full: "col-span-full"
  },
  colStart: {
    auto: "col-start-auto",
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
    13: "col-start-13"
  },
  rowSpan: {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    full: "row-span-full"
  }
}, $l = {
  margin: {
    none: "m-0",
    xs: "m-1",
    sm: "m-2",
    md: "m-3",
    lg: "m-4",
    xl: "m-6",
    "2xl": "m-8",
    "3xl": "m-10",
    "4xl": "m-12",
    "5xl": "m-16",
    auto: "m-auto"
  },
  marginX: {
    none: "mx-0",
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
    xl: "mx-6",
    "2xl": "mx-8",
    "3xl": "mx-10",
    "4xl": "mx-12",
    "5xl": "mx-16",
    auto: "mx-auto"
  },
  marginY: {
    none: "my-0",
    xs: "my-1",
    sm: "my-2",
    md: "my-3",
    lg: "my-4",
    xl: "my-6",
    "2xl": "my-8",
    "3xl": "my-10",
    "4xl": "my-12",
    "5xl": "my-16",
    auto: "my-auto"
  },
  marginTop: {
    none: "mt-0",
    xs: "mt-1",
    sm: "mt-2",
    md: "mt-3",
    lg: "mt-4",
    xl: "mt-6",
    "2xl": "mt-8",
    "3xl": "mt-10",
    "4xl": "mt-12",
    "5xl": "mt-16",
    auto: "mt-auto"
  },
  marginBottom: {
    none: "mb-0",
    xs: "mb-1",
    sm: "mb-2",
    md: "mb-3",
    lg: "mb-4",
    xl: "mb-6",
    "2xl": "mb-8",
    "3xl": "mb-10",
    "4xl": "mb-12",
    "5xl": "mb-16",
    auto: "mb-auto"
  },
  marginLeft: {
    none: "ml-0",
    xs: "ml-1",
    sm: "ml-2",
    md: "ml-3",
    lg: "ml-4",
    xl: "ml-6",
    "2xl": "ml-8",
    "3xl": "ml-10",
    "4xl": "ml-12",
    "5xl": "ml-16",
    auto: "ml-auto"
  },
  marginRight: {
    none: "mr-0",
    xs: "mr-1",
    sm: "mr-2",
    md: "mr-3",
    lg: "mr-4",
    xl: "mr-6",
    "2xl": "mr-8",
    "3xl": "mr-10",
    "4xl": "mr-12",
    "5xl": "mr-16",
    auto: "mr-auto"
  }
}, vh = {}, bh = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, zl = {
  overflow: bh,
  overflowX: {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    auto: "overflow-x-auto",
    scroll: "overflow-x-scroll"
  },
  overflowY: {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    auto: "overflow-y-auto",
    scroll: "overflow-y-scroll"
  }
}, yh = {}, ql = {
  padding: {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
    "2xl": "p-8",
    "3xl": "p-10",
    "4xl": "p-12",
    "5xl": "p-16"
  },
  paddingX: {
    none: "px-0",
    xs: "px-1",
    sm: "px-2",
    md: "px-3",
    lg: "px-4",
    xl: "px-6",
    "2xl": "px-8",
    "3xl": "px-10",
    "4xl": "px-12",
    "5xl": "px-16"
  },
  paddingY: {
    none: "py-0",
    xs: "py-1",
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
    xl: "py-6",
    "2xl": "py-8",
    "3xl": "py-10",
    "4xl": "py-12",
    "5xl": "py-16"
  },
  paddingTop: {
    none: "pt-0",
    xs: "pt-1",
    sm: "pt-2",
    md: "pt-3",
    lg: "pt-4",
    xl: "pt-6",
    "2xl": "pt-8",
    "3xl": "pt-10",
    "4xl": "pt-12",
    "5xl": "pt-16"
  },
  paddingBottom: {
    none: "pb-0",
    xs: "pb-1",
    sm: "pb-2",
    md: "pb-3",
    lg: "pb-4",
    xl: "pb-6",
    "2xl": "pb-8",
    "3xl": "pb-10",
    "4xl": "pb-12",
    "5xl": "pb-16"
  },
  paddingLeft: {
    none: "pl-0",
    xs: "pl-1",
    sm: "pl-2",
    md: "pl-3",
    lg: "pl-4",
    xl: "pl-6",
    "2xl": "pl-8",
    "3xl": "pl-10",
    "4xl": "pl-12",
    "5xl": "pl-16"
  },
  paddingRight: {
    none: "pr-0",
    xs: "pr-1",
    sm: "pr-2",
    md: "pr-3",
    lg: "pr-4",
    xl: "pr-6",
    "2xl": "pr-8",
    "3xl": "pr-10",
    "4xl": "pr-12",
    "5xl": "pr-16"
  }
}, xh = {}, wh = {
  ...Pl,
  ...ql,
  ...$l,
  ...Vl,
  ...jl,
  ...Ml,
  ...Rl,
  ...Ll,
  ...zl,
  ...Bl
};
function Sh(e, t) {
  return t.split(" ").map((n) => `${e}:${n}`).join(" ");
}
function kh(e, t) {
  const n = [];
  for (const [r, s] of Object.entries(t)) {
    if (s == null) continue;
    const a = wh[r];
    if (!a) continue;
    const i = a[String(s)];
    i && n.push(Sh(e, i));
  }
  return n.join(" ");
}
const _h = nn({
  base: "",
  variants: {
    ...Pl,
    ...ql,
    ...$l,
    ...Vl,
    ...jl,
    ...Ml,
    ...Rl,
    ...Ll,
    ...zl,
    ...Bl
  },
  defaultVariants: {
    ...xh,
    ...vh,
    ...gh,
    ...ch,
    ...yh
  }
}), Ch = ["sm", "md", "lg", "xl"], Zl = ft(
  ({
    // Display & Position
    display: e,
    position: t,
    // Padding
    padding: n,
    paddingX: r,
    paddingY: s,
    paddingTop: a,
    paddingBottom: i,
    paddingLeft: o,
    paddingRight: l,
    // Margin
    margin: d,
    marginX: u,
    marginY: f,
    marginTop: h,
    marginBottom: m,
    marginLeft: g,
    marginRight: b,
    // Gap
    gap: p,
    // Grid
    columns: S,
    rows: v,
    colSpan: k,
    colStart: _,
    rowSpan: y,
    // Dimensions
    width: w,
    height: C,
    minWidth: A,
    minHeight: O,
    maxWidth: M,
    maxHeight: T,
    // Background
    background: I,
    // Border
    borderColor: N,
    border: P,
    borderTop: G,
    borderBottom: X,
    borderLeft: te,
    borderRight: fe,
    borderRadius: q,
    borderRadiusTopLeft: le,
    borderRadiusTopRight: ue,
    borderRadiusBottomLeft: R,
    borderRadiusBottomRight: B,
    borderStyle: U,
    // Overflow
    overflow: me,
    overflowX: se,
    overflowY: ge,
    // Divider
    divider: ve,
    dividerColor: de,
    // Flex
    alignItems: J,
    justifyContent: oe,
    flexDirection: Ie,
    flexWrap: Ve,
    grow: De,
    shrink: Xe,
    // Responsive breakpoint overrides
    sm: We,
    md: mt,
    lg: x,
    xl: F,
    ...E
  }, W) => {
    const $ = G && G !== "none" || X && X !== "none" || te && te !== "none" || fe && fe !== "none", V = P && P !== "none" || $, ne = { sm: We, md: mt, lg: x, xl: F }, he = Ch.map((Ee) => {
      const we = ne[Ee];
      return we ? kh(Ee, we) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      "div",
      {
        ref: W,
        className: Q(
          $ && "border-0",
          _h({
            display: e,
            position: t,
            padding: n,
            paddingX: r,
            paddingY: s,
            paddingTop: a,
            paddingBottom: i,
            paddingLeft: o,
            paddingRight: l,
            margin: d,
            marginX: u,
            marginY: f,
            marginTop: h,
            marginBottom: m,
            marginLeft: g,
            marginRight: b,
            gap: p,
            columns: S,
            rows: v,
            colSpan: k,
            colStart: _,
            rowSpan: y,
            width: w,
            height: C,
            minWidth: A,
            minHeight: O,
            maxWidth: M,
            maxHeight: T,
            background: I,
            borderColor: N,
            border: P,
            borderTop: G,
            borderBottom: X,
            borderLeft: te,
            borderRight: fe,
            borderRadius: q,
            borderRadiusTopLeft: le,
            borderRadiusTopRight: ue,
            borderRadiusBottomLeft: R,
            borderRadiusBottomRight: B,
            borderStyle: U,
            overflow: me,
            overflowX: se,
            overflowY: ge,
            divider: ve,
            dividerColor: de,
            alignItems: J,
            justifyContent: oe,
            flexDirection: Ie,
            flexWrap: Ve,
            grow: De,
            shrink: Xe
          }),
          he,
          V && !N && "border-f1-border",
          ve && !de && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...E
      }
    );
  }
);
Zl.displayName = "F0Box";
const Ul = sr(
  {
    name: "F0Box",
    type: "layout"
  },
  Zl
), Py = ["sm", "md", "lg"], By = ["compact", "expanded"], qs = ({ count: e, list: t }) => {
  const [n, r] = ee(!1), s = /* @__PURE__ */ c(Dr, { label: `+${e}` });
  return t?.length ? /* @__PURE__ */ D(oa, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ c(la, { asChild: !0, children: /* @__PURE__ */ c("button", { className: Xr("inline-flex flex-shrink-0 items-center"), children: s }) }),
    /* @__PURE__ */ c(
      ca,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ D(No, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          t.map((a, i) => /* @__PURE__ */ c(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ c(Dr, { ...a })
            },
            i
          )),
          /* @__PURE__ */ c(
            Do,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : s;
};
qs.displayName = "ChipCounter";
const Wl = ({
  chips: e,
  max: t = 4,
  remainingCount: n,
  layout: r = "compact"
}) => {
  if (r === "fill")
    return /* @__PURE__ */ c(
      Ad,
      {
        items: e,
        renderListItem: (l) => /* @__PURE__ */ c(Dr, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: n !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ c(
          qs,
          {
            count: (n ?? 0) + l,
            list: n ? void 0 : e.slice(e.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const s = e.slice(0, t), a = e.slice(t), i = n ?? e.length - t, o = i > 0;
  return /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
    s.map((l, d) => /* @__PURE__ */ c(Dr, { ...l }, d)),
    o && /* @__PURE__ */ c(
      qs,
      {
        count: i,
        list: n ? void 0 : a
      }
    )
  ] });
};
Wl.displayName = "F0ChipList";
const Vy = Re(
  bt("F0ChipList", Wl)
), jy = Ed, Nh = ["days", "hours", "minutes", "seconds"], $y = ["sm", "md"], Br = [...Nh], xi = ["hours", "minutes"], zt = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function zy(e) {
  const t = Number.isFinite(e) ? e : 0;
  let n = Math.max(0, Math.floor(t));
  const r = Math.floor(n / zt.days);
  n = n % zt.days;
  const s = Math.floor(n / zt.hours);
  n = n % zt.hours;
  const a = Math.floor(n / zt.minutes), i = n % zt.minutes;
  return { days: r, hours: s, minutes: a, seconds: i };
}
function wi(e) {
  return Br.reduce((t, n) => {
    const r = e[n], s = Number.isFinite(r) ? r : 0, a = Math.max(0, Math.floor(s));
    return t + a * zt[n];
  }, 0);
}
function Ss(e, t) {
  const n = Number.isFinite(e) ? e : 0;
  let r = Math.max(0, Math.floor(n));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, a = Br.filter((i) => t.includes(i));
  for (const i of a)
    s[i] = Math.floor(r / zt[i]), r = r % zt[i];
  return s;
}
function Dh(e, t) {
  return t != null && e > t ? t : e < 0 ? 0 : e;
}
const Fh = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s"
}, Th = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Ah = 2, Eh = nn({
  base: [
    "inline-flex items-center gap-1 overflow-hidden rounded-[10px]",
    "border border-solid border-f1-border bg-f1-background",
    "transition-[border-color]",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none"
  ],
  variants: {
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-[6px]"
    },
    status: {
      default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error: "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical"
    },
    disabled: {
      true: "cursor-not-allowed aria-disabled:cursor-not-allowed bg-f1-background-tertiary",
      false: "cursor-text"
    },
    readonly: {
      true: "border-f1-border-secondary",
      false: ""
    }
  },
  compoundVariants: [
    {
      disabled: !1,
      readonly: !0,
      class: "bg-f1-background-secondary"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "default",
      class: "hover:border-f1-border-hover"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "warning",
      class: "hover:border-f1-border-warning-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "info",
      class: "hover:border-f1-border-info-bold"
    },
    {
      disabled: !1,
      readonly: !1,
      status: "error",
      class: "hover:border-f1-border-critical-bold"
    }
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: !1,
    readonly: !1
  }
}), Hl = ft(
  function({
    id: t,
    "aria-describedby": n,
    "aria-invalid": r,
    label: s,
    ariaLabel: a,
    hideLabel: i = !1,
    value: o,
    onChange: l,
    onBlur: d,
    units: u = xi,
    fields: f,
    status: h,
    disabled: m = !1,
    required: g = !1,
    readonly: b = !1,
    size: p = "md"
  }, S) {
    const v = wa(), k = H(/* @__PURE__ */ new Map()), _ = H(!1), y = z(() => {
      const R = Br.filter((B) => u.includes(B));
      return R.length > 0 ? R : Br.filter((B) => xi.includes(B));
    }, [u]), w = y.join("|"), [C, A] = ee(
      () => Ss(o, y)
    ), O = H(o), M = H(w);
    (o !== O.current || w !== M.current) && (O.current = o, M.current = w, A(Ss(o, y)));
    const T = `${v}-${y[0]}`, I = L(
      (R) => {
        const B = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        for (const U of y)
          B[U] = R[U];
        return B;
      },
      [y]
    ), N = L(
      (R) => {
        const B = I(R), U = wi(B);
        A(B), O.current = U, l(U);
      },
      [l, I]
    ), P = L(
      (R, B) => (U) => {
        const me = U.target.value;
        if (me === "") {
          N({ ...C, [R]: 0 });
          return;
        }
        const se = me.replace(/\D/g, "");
        if (se === "") return;
        const ge = parseInt(se, 10);
        if (isNaN(ge)) return;
        const ve = Dh(ge, B);
        N({ ...C, [R]: ve });
      },
      [C, N]
    ), G = L(() => {
      const R = I(C), B = wi(R);
      A(Ss(B, y)), O.current = B, d?.();
    }, [C, d, I, y]), X = L(
      (R) => {
        R.metaKey || R.ctrlKey || R.altKey || R.key.length > 1 || /^\d$/.test(R.key) || R.preventDefault();
      },
      []
    ), te = L(
      (R) => {
        if (m || R.target instanceof HTMLInputElement) return;
        const B = y[0];
        B && k.current.get(B)?.focus();
      },
      [m, y]
    ), fe = L(
      (R) => (B) => {
        B ? k.current.set(R, B) : k.current.delete(R);
      },
      []
    ), q = (a && a.trim().length > 0 ? a : void 0) || s || void 0;
    ie(() => {
      process.env.NODE_ENV !== "production" && !q && !_.current && (_.current = !0, console.warn(
        "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
      ));
    }, [q]);
    const le = h?.type ?? "default", ue = !i && s.length > 0;
    return /* @__PURE__ */ D(
      "div",
      {
        ref: S,
        className: Q(
          "flex flex-col gap-2",
          "pointer-events-none",
          m && "cursor-not-allowed"
        ),
        children: [
          ue && /* @__PURE__ */ c(
            Id,
            {
              label: s,
              required: g,
              htmlFor: T,
              className: "min-w-0 flex-1",
              disabled: m
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              id: t,
              "data-testid": "input-field-wrapper",
              className: Q(
                "pointer-events-auto",
                Eh({
                  size: p,
                  status: le,
                  disabled: m,
                  readonly: b
                })
              ),
              onClick: te,
              role: "group",
              "aria-label": q,
              "aria-describedby": n,
              "aria-invalid": r,
              "aria-disabled": m || void 0,
              "data-status": le,
              "data-disabled": m ? "" : void 0,
              children: y.map((R, B) => {
                const U = f?.[R]?.max, me = C[R], se = f?.[R]?.suffix ?? Fh[R], ge = me > 0 ? String(me) : "", ve = f?.[R]?.maxVisibleDigits, de = typeof ve == "number" && Number.isFinite(ve) ? Math.max(1, Math.floor(ve)) : Ah;
                return /* @__PURE__ */ D(Ko, { children: [
                  B > 0 && /* @__PURE__ */ c(
                    Le,
                    {
                      icon: Od,
                      size: "xs",
                      color: "default",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c(
                    "input",
                    {
                      ref: fe(R),
                      id: `${v}-${R}`,
                      className: Q(
                        "border-none bg-transparent p-0 text-inherit outline-none",
                        "font-inherit text-[length:inherit] leading-[inherit]",
                        "placeholder:text-f1-foreground-secondary",
                        m && "pointer-events-none"
                      ),
                      style: {
                        width: `${Math.min(
                          Math.max(ge.length, 1),
                          de
                        )}ch`
                      },
                      "aria-label": f?.[R]?.ariaLabel ?? Th[R],
                      "aria-describedby": n,
                      "aria-invalid": r,
                      value: ge,
                      placeholder: "0",
                      onChange: P(R, U),
                      onBlur: G,
                      onKeyDown: X,
                      inputMode: "numeric",
                      disabled: m,
                      readOnly: b,
                      "aria-readonly": b || void 0
                    }
                  ),
                  /* @__PURE__ */ c("span", { className: "text-f1-foreground-secondary", children: se })
                ] }, R);
              })
            }
          ),
          /* @__PURE__ */ c(da, { status: h })
        ]
      }
    );
  }
);
Hl.displayName = "F0DurationInput";
const Ih = Re(
  sr(
    {
      name: "F0DurationInput",
      type: "form"
    },
    Hl
  )
), Oh = 388;
function Ql({
  filters: e,
  value: t,
  onChange: n,
  height: r,
  width: s = 600,
  className: a,
  showApplyButton: i = !0,
  applyButtonLabel: o,
  dataTestId: l
}) {
  const d = Ce(), u = Object.keys(e)[0] ?? null, [f, h] = ee(u), [m, g] = ee(t);
  ie(() => {
    g(t);
  }, [t]), ie(() => {
    if (!f && e) {
      const v = Object.keys(e);
      if (v.length > 0) {
        const k = v.find((_) => {
          const y = m[_], w = ri(e[_].type);
          return y !== void 0 && !w.isEmpty(y, {
            schema: e[_],
            i18n: d
          });
        });
        h(k ?? v[0]);
      }
    }
  }, [e, f, m, d]);
  const b = (v, k) => {
    const _ = {
      ...m,
      [v]: k
    };
    g(_), i || n(_);
  }, p = () => {
    n(m);
  }, S = z(() => r || Object.entries(e).reduce((k, [_, y]) => {
    const w = ri(y.type);
    return Math.max(k, w?.formHeight || Oh);
  }, 0), [e, r]);
  return !e || Object.keys(e).length === 0 ? null : /* @__PURE__ */ c(Rd, { dataTestId: l, children: /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        a
      ),
      style: { maxWidth: s },
      children: /* @__PURE__ */ c(
        Ld,
        {
          filters: e,
          tempFilters: m,
          selectedFilterKey: f,
          onFilterSelect: h,
          onFilterChange: b,
          onApply: p,
          height: S,
          showApplyButton: i,
          applyButtonLabel: o
        }
      )
    }
  ) });
}
Ql.displayName = "F0FilterPickerContent";
const qy = Ql;
var ur = (e) => e.type === "checkbox", cn = (e) => e instanceof Date, rt = (e) => e == null;
const Gl = (e) => typeof e == "object";
var $e = (e) => !rt(e) && !Array.isArray(e) && Gl(e) && !cn(e), Kl = (e) => $e(e) && e.target ? ur(e.target) ? e.target.checked : e.target.value : e, Rh = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Xl = (e, t) => e.has(Rh(t)), Lh = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return $e(t) && t.hasOwnProperty("isPrototypeOf");
}, Ra = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function lt(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ra && (e instanceof Blob || r)) && (n || $e(e)))
    if (t = n ? [] : {}, !n && !Lh(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = lt(e[s]));
  else
    return e;
  return t;
}
var ls = (e) => Array.isArray(e) ? e.filter(Boolean) : [], je = (e) => e === void 0, K = (e, t, n) => {
  if (!t || !$e(e))
    return n;
  const r = ls(t.split(/[,[\].]+?/)).reduce((s, a) => rt(s) ? s : s[a], e);
  return je(r) || r === e ? je(e[t]) ? n : e[t] : r;
}, St = (e) => typeof e == "boolean", La = (e) => /^\w*$/.test(e), Yl = (e) => ls(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ne = (e, t, n) => {
  let r = -1;
  const s = La(t) ? [t] : Yl(t), a = s.length, i = a - 1;
  for (; ++r < a; ) {
    const o = s[r];
    let l = n;
    if (r !== i) {
      const d = e[o];
      l = $e(d) || Array.isArray(d) ? d : isNaN(+s[r + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    e[o] = l, e = e[o];
  }
  return e;
};
const Vr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, At = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, $t = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Jl = ce.createContext(null), rn = () => ce.useContext(Jl), Mh = (e) => {
  const { children: t, ...n } = e;
  return ce.createElement(Jl.Provider, { value: n }, t);
};
var ec = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(s, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== At.all && (t._proxyFormState[i] = !r || At.all), n && (n[i] = !0), e[i];
      }
    });
  return s;
}, ct = (e) => $e(e) && !Object.keys(e).length, tc = (e, t, n, r) => {
  n(e);
  const { name: s, ...a } = e;
  return ct(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === (!r || At.all));
}, Qn = (e) => Array.isArray(e) ? e : [e], nc = (e, t, n) => !e || !t || e === t || Qn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Ma(e) {
  const t = ce.useRef(e);
  t.current = e, ce.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Ph(e) {
  const t = rn(), { control: n = t.control, disabled: r, name: s, exact: a } = e || {}, [i, o] = ce.useState(n._formState), l = ce.useRef(!0), d = ce.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = ce.useRef(s);
  return u.current = s, Ma({
    disabled: r,
    next: (f) => l.current && nc(u.current, f.name, a) && tc(f, d.current, n._updateFormState) && o({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), ce.useEffect(() => (l.current = !0, d.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), ce.useMemo(() => ec(i, n, d.current, !1), [i, n]);
}
var Bt = (e) => typeof e == "string", rc = (e, t, n, r, s) => Bt(e) ? (r && t.watch.add(e), K(n, e, s)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), K(n, a))) : (r && (t.watchAll = !0), n);
function Bh(e) {
  const t = rn(), { control: n = t.control, name: r, defaultValue: s, disabled: a, exact: i } = e || {}, o = ce.useRef(r);
  o.current = r, Ma({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      nc(o.current, u.name, i) && d(lt(rc(o.current, n._names, u.values || n._formValues, !1, s)));
    }
  });
  const [l, d] = ce.useState(n._getWatch(r, s));
  return ce.useEffect(() => n._removeUnmounted()), l;
}
function Vh(e) {
  const t = rn(), { name: n, disabled: r, control: s = t.control, shouldUnregister: a } = e, i = Xl(s._names.array, n), o = Bh({
    control: s,
    name: n,
    defaultValue: K(s._formValues, n, K(s._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Ph({
    control: s,
    name: n,
    exact: !0
  }), d = ce.useRef(s.register(n, {
    ...e.rules,
    value: o,
    ...St(e.disabled) ? { disabled: e.disabled } : {}
  })), u = ce.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!K(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!K(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!K(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!K(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => K(l.errors, n)
    }
  }), [l, n]), f = ce.useMemo(() => ({
    name: n,
    value: o,
    ...St(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: (h) => d.current.onChange({
      target: {
        value: Kl(h),
        name: n
      },
      type: Vr.CHANGE
    }),
    onBlur: () => d.current.onBlur({
      target: {
        value: K(s._formValues, n),
        name: n
      },
      type: Vr.BLUR
    }),
    ref: (h) => {
      const m = K(s._fields, n);
      m && h && (m._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (g) => h.setCustomValidity(g),
        reportValidity: () => h.reportValidity()
      });
    }
  }), [
    n,
    s._formValues,
    r,
    l.disabled,
    o,
    s._fields
  ]);
  return ce.useEffect(() => {
    const h = s._options.shouldUnregister || a, m = (g, b) => {
      const p = K(s._fields, g);
      p && p._f && (p._f.mount = b);
    };
    if (m(n, !0), h) {
      const g = lt(K(s._options.defaultValues, n));
      Ne(s._defaultValues, n, g), je(K(s._formValues, n)) && Ne(s._formValues, n, g);
    }
    return !i && s.register(n), () => {
      (i ? h && !s._state.action : h) ? s.unregister(n) : m(n, !1);
    };
  }, [n, s, i, a]), ce.useEffect(() => {
    s._updateDisabledField({
      disabled: r,
      fields: s._fields,
      name: n
    });
  }, [r, n, s]), ce.useMemo(() => ({
    field: f,
    formState: l,
    fieldState: u
  }), [f, l, u]);
}
const jh = (e) => e.render(Vh(e));
var sc = (e, t, n, r, s) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: s || !0
  }
} : {}, Si = (e) => ({
  isOnSubmit: !e || e === At.onSubmit,
  isOnBlur: e === At.onBlur,
  isOnChange: e === At.onChange,
  isOnAll: e === At.all,
  isOnTouch: e === At.onTouched
}), ki = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Gn = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const a = K(e, s);
    if (a) {
      const { _f: i, ...o } = a;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r)
          return !0;
        if (i.ref && t(i.ref, i.name) && !r)
          return !0;
        if (Gn(o, t))
          break;
      } else if ($e(o) && Gn(o, t))
        break;
    }
  }
};
var $h = (e, t, n) => {
  const r = Qn(K(e, n));
  return Ne(r, "root", t[n]), Ne(e, n, r), e;
}, Pa = (e) => e.type === "file", Pt = (e) => typeof e == "function", jr = (e) => {
  if (!Ra)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, kr = (e) => Bt(e), Ba = (e) => e.type === "radio", $r = (e) => e instanceof RegExp;
const _i = {
  value: !1,
  isValid: !1
}, Ci = { value: !0, isValid: !0 };
var ac = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !je(e[0].attributes.value) ? je(e[0].value) || e[0].value === "" ? Ci : { value: e[0].value, isValid: !0 } : Ci
    ) : _i;
  }
  return _i;
};
const Ni = {
  isValid: !1,
  value: null
};
var ic = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Ni) : Ni;
function Di(e, t, n = "validate") {
  if (kr(e) || Array.isArray(e) && e.every(kr) || St(e) && !e)
    return {
      type: n,
      message: kr(e) ? e : "",
      ref: t
    };
}
var pn = (e) => $e(e) && !$r(e) ? e : {
  value: e,
  message: ""
}, Fi = async (e, t, n, r, s, a) => {
  const { ref: i, refs: o, required: l, maxLength: d, minLength: u, min: f, max: h, pattern: m, validate: g, name: b, valueAsNumber: p, mount: S } = e._f, v = K(n, b);
  if (!S || t.has(b))
    return {};
  const k = o ? o[0] : i, _ = (I) => {
    s && k.reportValidity && (k.setCustomValidity(St(I) ? "" : I || ""), k.reportValidity());
  }, y = {}, w = Ba(i), C = ur(i), A = w || C, O = (p || Pa(i)) && je(i.value) && je(v) || jr(i) && i.value === "" || v === "" || Array.isArray(v) && !v.length, M = sc.bind(null, b, r, y), T = (I, N, P, G = $t.maxLength, X = $t.minLength) => {
    const te = I ? N : P;
    y[b] = {
      type: I ? G : X,
      message: te,
      ref: i,
      ...M(I ? G : X, te)
    };
  };
  if (a ? !Array.isArray(v) || !v.length : l && (!A && (O || rt(v)) || St(v) && !v || C && !ac(o).isValid || w && !ic(o).isValid)) {
    const { value: I, message: N } = kr(l) ? { value: !!l, message: l } : pn(l);
    if (I && (y[b] = {
      type: $t.required,
      message: N,
      ref: k,
      ...M($t.required, N)
    }, !r))
      return _(N), y;
  }
  if (!O && (!rt(f) || !rt(h))) {
    let I, N;
    const P = pn(h), G = pn(f);
    if (!rt(v) && !isNaN(v)) {
      const X = i.valueAsNumber || v && +v;
      rt(P.value) || (I = X > P.value), rt(G.value) || (N = X < G.value);
    } else {
      const X = i.valueAsDate || new Date(v), te = (le) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + le), fe = i.type == "time", q = i.type == "week";
      Bt(P.value) && v && (I = fe ? te(v) > te(P.value) : q ? v > P.value : X > new Date(P.value)), Bt(G.value) && v && (N = fe ? te(v) < te(G.value) : q ? v < G.value : X < new Date(G.value));
    }
    if ((I || N) && (T(!!I, P.message, G.message, $t.max, $t.min), !r))
      return _(y[b].message), y;
  }
  if ((d || u) && !O && (Bt(v) || a && Array.isArray(v))) {
    const I = pn(d), N = pn(u), P = !rt(I.value) && v.length > +I.value, G = !rt(N.value) && v.length < +N.value;
    if ((P || G) && (T(P, I.message, N.message), !r))
      return _(y[b].message), y;
  }
  if (m && !O && Bt(v)) {
    const { value: I, message: N } = pn(m);
    if ($r(I) && !v.match(I) && (y[b] = {
      type: $t.pattern,
      message: N,
      ref: i,
      ...M($t.pattern, N)
    }, !r))
      return _(N), y;
  }
  if (g) {
    if (Pt(g)) {
      const I = await g(v, n), N = Di(I, k);
      if (N && (y[b] = {
        ...N,
        ...M($t.validate, N.message)
      }, !r))
        return _(N.message), y;
    } else if ($e(g)) {
      let I = {};
      for (const N in g) {
        if (!ct(I) && !r)
          break;
        const P = Di(await g[N](v, n), k, N);
        P && (I = {
          ...P,
          ...M(N, P.message)
        }, _(P.message), r && (y[b] = I));
      }
      if (!ct(I) && (y[b] = {
        ref: k,
        ...I
      }, !r))
        return y;
    }
  }
  return _(!0), y;
};
function zh(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = je(e) ? r++ : e[t[r++]];
  return e;
}
function qh(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !je(e[t]))
      return !1;
  return !0;
}
function Ze(e, t) {
  const n = Array.isArray(t) ? t : La(t) ? [t] : Yl(t), r = n.length === 1 ? e : zh(e, n), s = n.length - 1, a = n[s];
  return r && delete r[a], s !== 0 && ($e(r) && ct(r) || Array.isArray(r) && qh(r)) && Ze(e, n.slice(0, -1)), e;
}
var ks = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const a of e)
        a.next && a.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((a) => a !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Zs = (e) => rt(e) || !Gl(e);
function Kt(e, t) {
  if (Zs(e) || Zs(t))
    return e === t;
  if (cn(e) && cn(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const s of n) {
    const a = e[s];
    if (!r.includes(s))
      return !1;
    if (s !== "ref") {
      const i = t[s];
      if (cn(a) && cn(i) || $e(a) && $e(i) || Array.isArray(a) && Array.isArray(i) ? !Kt(a, i) : a !== i)
        return !1;
    }
  }
  return !0;
}
var oc = (e) => e.type === "select-multiple", Zh = (e) => Ba(e) || ur(e), _s = (e) => jr(e) && e.isConnected, lc = (e) => {
  for (const t in e)
    if (Pt(e[t]))
      return !0;
  return !1;
};
function zr(e, t = {}) {
  const n = Array.isArray(e);
  if ($e(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || $e(e[r]) && !lc(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, zr(e[r], t[r])) : rt(e[r]) || (t[r] = !0);
  return t;
}
function cc(e, t, n) {
  const r = Array.isArray(e);
  if ($e(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || $e(e[s]) && !lc(e[s]) ? je(t) || Zs(n[s]) ? n[s] = Array.isArray(e[s]) ? zr(e[s], []) : { ...zr(e[s]) } : cc(e[s], rt(t) ? {} : t[s], n[s]) : n[s] = !Kt(e[s], t[s]);
  return n;
}
var Pn = (e, t) => cc(e, t, zr(t)), dc = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => je(e) ? e : t ? e === "" ? NaN : e && +e : n && Bt(e) ? new Date(e) : r ? r(e) : e;
function Cs(e) {
  const t = e.ref;
  return Pa(t) ? t.files : Ba(t) ? ic(e.refs).value : oc(t) ? [...t.selectedOptions].map(({ value: n }) => n) : ur(t) ? ac(e.refs).value : dc(je(t.value) ? e.ref.value : t.value, e);
}
var Uh = (e, t, n, r) => {
  const s = {};
  for (const a of e) {
    const i = K(t, a);
    i && Ne(s, a, i._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: r
  };
}, Bn = (e) => je(e) ? e : $r(e) ? e.source : $e(e) ? $r(e.value) ? e.value.source : e.value : e;
const Ti = "AsyncFunction";
var Wh = (e) => !!e && !!e.validate && !!(Pt(e.validate) && e.validate.constructor.name === Ti || $e(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ti)), Hh = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ai(e, t, n) {
  const r = K(e, n);
  if (r || La(n))
    return {
      error: r,
      name: n
    };
  const s = n.split(".");
  for (; s.length; ) {
    const a = s.join("."), i = K(t, a), o = K(e, a);
    if (i && !Array.isArray(i) && n !== a)
      return { name: n };
    if (o && o.type)
      return {
        name: a,
        error: o
      };
    s.pop();
  }
  return {
    name: n
  };
}
var Qh = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0, Gh = (e, t) => !ls(K(e, t)).length && Ze(e, t);
const Kh = {
  mode: At.onSubmit,
  reValidateMode: At.onChange,
  shouldFocusError: !0
};
function Xh(e = {}) {
  let t = {
    ...Kh,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Pt(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, s = $e(t.defaultValues) || $e(t.values) ? lt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : lt(s), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: ks(),
    array: ks(),
    state: ks()
  }, h = Si(t.mode), m = Si(t.reValidateMode), g = t.criteriaMode === At.all, b = (x) => (F) => {
    clearTimeout(d), d = setTimeout(x, F);
  }, p = async (x) => {
    if (!t.disabled && (u.isValid || x)) {
      const F = t.resolver ? ct((await A()).errors) : await M(r, !0);
      F !== n.isValid && f.state.next({
        isValid: F
      });
    }
  }, S = (x, F) => {
    !t.disabled && (u.isValidating || u.validatingFields) && ((x || Array.from(o.mount)).forEach((E) => {
      E && (F ? Ne(n.validatingFields, E, F) : Ze(n.validatingFields, E));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !ct(n.validatingFields)
    }));
  }, v = (x, F = [], E, W, $ = !0, V = !0) => {
    if (W && E && !t.disabled) {
      if (i.action = !0, V && Array.isArray(K(r, x))) {
        const ne = E(K(r, x), W.argA, W.argB);
        $ && Ne(r, x, ne);
      }
      if (V && Array.isArray(K(n.errors, x))) {
        const ne = E(K(n.errors, x), W.argA, W.argB);
        $ && Ne(n.errors, x, ne), Gh(n.errors, x);
      }
      if (u.touchedFields && V && Array.isArray(K(n.touchedFields, x))) {
        const ne = E(K(n.touchedFields, x), W.argA, W.argB);
        $ && Ne(n.touchedFields, x, ne);
      }
      u.dirtyFields && (n.dirtyFields = Pn(s, a)), f.state.next({
        name: x,
        isDirty: I(x, F),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ne(a, x, F);
  }, k = (x, F) => {
    Ne(n.errors, x, F), f.state.next({
      errors: n.errors
    });
  }, _ = (x) => {
    n.errors = x, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, y = (x, F, E, W) => {
    const $ = K(r, x);
    if ($) {
      const V = K(a, x, je(E) ? K(s, x) : E);
      je(V) || W && W.defaultChecked || F ? Ne(a, x, F ? V : Cs($._f)) : G(x, V), i.mount && p();
    }
  }, w = (x, F, E, W, $) => {
    let V = !1, ne = !1;
    const he = {
      name: x
    };
    if (!t.disabled) {
      const Ee = !!(K(r, x) && K(r, x)._f && K(r, x)._f.disabled);
      if (!E || W) {
        u.isDirty && (ne = n.isDirty, n.isDirty = he.isDirty = I(), V = ne !== he.isDirty);
        const we = Ee || Kt(K(s, x), F);
        ne = !!(!Ee && K(n.dirtyFields, x)), we || Ee ? Ze(n.dirtyFields, x) : Ne(n.dirtyFields, x, !0), he.dirtyFields = n.dirtyFields, V = V || u.dirtyFields && ne !== !we;
      }
      if (E) {
        const we = K(n.touchedFields, x);
        we || (Ne(n.touchedFields, x, E), he.touchedFields = n.touchedFields, V = V || u.touchedFields && we !== E);
      }
      V && $ && f.state.next(he);
    }
    return V ? he : {};
  }, C = (x, F, E, W) => {
    const $ = K(n.errors, x), V = u.isValid && St(F) && n.isValid !== F;
    if (t.delayError && E ? (l = b(() => k(x, E)), l(t.delayError)) : (clearTimeout(d), l = null, E ? Ne(n.errors, x, E) : Ze(n.errors, x)), (E ? !Kt($, E) : $) || !ct(W) || V) {
      const ne = {
        ...W,
        ...V && St(F) ? { isValid: F } : {},
        errors: n.errors,
        name: x
      };
      n = {
        ...n,
        ...ne
      }, f.state.next(ne);
    }
  }, A = async (x) => {
    S(x, !0);
    const F = await t.resolver(a, t.context, Uh(x || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return S(x), F;
  }, O = async (x) => {
    const { errors: F } = await A(x);
    if (x)
      for (const E of x) {
        const W = K(F, E);
        W ? Ne(n.errors, E, W) : Ze(n.errors, E);
      }
    else
      n.errors = F;
    return F;
  }, M = async (x, F, E = {
    valid: !0
  }) => {
    for (const W in x) {
      const $ = x[W];
      if ($) {
        const { _f: V, ...ne } = $;
        if (V) {
          const he = o.array.has(V.name), Ee = $._f && Wh($._f);
          Ee && u.validatingFields && S([W], !0);
          const we = await Fi($, o.disabled, a, g, t.shouldUseNativeValidation && !F, he);
          if (Ee && u.validatingFields && S([W]), we[V.name] && (E.valid = !1, F))
            break;
          !F && (K(we, V.name) ? he ? $h(n.errors, we, V.name) : Ne(n.errors, V.name, we[V.name]) : Ze(n.errors, V.name));
        }
        !ct(ne) && await M(ne, F, E);
      }
    }
    return E.valid;
  }, T = () => {
    for (const x of o.unMount) {
      const F = K(r, x);
      F && (F._f.refs ? F._f.refs.every((E) => !_s(E)) : !_s(F._f.ref)) && se(x);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, I = (x, F) => !t.disabled && (x && F && Ne(a, x, F), !Kt(ue(), s)), N = (x, F, E) => rc(x, o, {
    ...i.mount ? a : je(F) ? s : Bt(x) ? { [x]: F } : F
  }, E, F), P = (x) => ls(K(i.mount ? a : s, x, t.shouldUnregister ? K(s, x, []) : [])), G = (x, F, E = {}) => {
    const W = K(r, x);
    let $ = F;
    if (W) {
      const V = W._f;
      V && (!V.disabled && Ne(a, x, dc(F, V)), $ = jr(V.ref) && rt(F) ? "" : F, oc(V.ref) ? [...V.ref.options].forEach((ne) => ne.selected = $.includes(ne.value)) : V.refs ? ur(V.ref) ? V.refs.length > 1 ? V.refs.forEach((ne) => (!ne.defaultChecked || !ne.disabled) && (ne.checked = Array.isArray($) ? !!$.find((he) => he === ne.value) : $ === ne.value)) : V.refs[0] && (V.refs[0].checked = !!$) : V.refs.forEach((ne) => ne.checked = ne.value === $) : Pa(V.ref) ? V.ref.value = "" : (V.ref.value = $, V.ref.type || f.values.next({
        name: x,
        values: { ...a }
      })));
    }
    (E.shouldDirty || E.shouldTouch) && w(x, $, E.shouldTouch, E.shouldDirty, !0), E.shouldValidate && le(x);
  }, X = (x, F, E) => {
    for (const W in F) {
      const $ = F[W], V = `${x}.${W}`, ne = K(r, V);
      (o.array.has(x) || $e($) || ne && !ne._f) && !cn($) ? X(V, $, E) : G(V, $, E);
    }
  }, te = (x, F, E = {}) => {
    const W = K(r, x), $ = o.array.has(x), V = lt(F);
    Ne(a, x, V), $ ? (f.array.next({
      name: x,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && E.shouldDirty && f.state.next({
      name: x,
      dirtyFields: Pn(s, a),
      isDirty: I(x, V)
    })) : W && !W._f && !rt(V) ? X(x, V, E) : G(x, V, E), ki(x, o) && f.state.next({ ...n }), f.values.next({
      name: i.mount ? x : void 0,
      values: { ...a }
    });
  }, fe = async (x) => {
    i.mount = !0;
    const F = x.target;
    let E = F.name, W = !0;
    const $ = K(r, E), V = () => F.type ? Cs($._f) : Kl(x), ne = (he) => {
      W = Number.isNaN(he) || cn(he) && isNaN(he.getTime()) || Kt(he, K(a, E, he));
    };
    if ($) {
      let he, Ee;
      const we = V(), He = x.type === Vr.BLUR || x.type === Vr.FOCUS_OUT, Rt = !Hh($._f) && !t.resolver && !K(n.errors, E) && !$._f.deps || Qh(He, K(n.touchedFields, E), n.isSubmitted, m, h), Zt = ki(E, o, He);
      Ne(a, E, we), He ? ($._f.onBlur && $._f.onBlur(x), l && l(0)) : $._f.onChange && $._f.onChange(x);
      const it = w(E, we, He, !1), ln = !ct(it) || Zt;
      if (!He && f.values.next({
        name: E,
        type: x.type,
        values: { ...a }
      }), Rt)
        return u.isValid && (t.mode === "onBlur" && He ? p() : He || p()), ln && f.state.next({ name: E, ...Zt ? {} : it });
      if (!He && Zt && f.state.next({ ...n }), t.resolver) {
        const { errors: ye } = await A([E]);
        if (ne(we), W) {
          const Fe = Ai(n.errors, r, E), Te = Ai(ye, r, Fe.name || E);
          he = Te.error, E = Te.name, Ee = ct(ye);
        }
      } else
        S([E], !0), he = (await Fi($, o.disabled, a, g, t.shouldUseNativeValidation))[E], S([E]), ne(we), W && (he ? Ee = !1 : u.isValid && (Ee = await M(r, !0)));
      W && ($._f.deps && le($._f.deps), C(E, Ee, he, it));
    }
  }, q = (x, F) => {
    if (K(n.errors, F) && x.focus)
      return x.focus(), 1;
  }, le = async (x, F = {}) => {
    let E, W;
    const $ = Qn(x);
    if (t.resolver) {
      const V = await O(je(x) ? x : $);
      E = ct(V), W = x ? !$.some((ne) => K(V, ne)) : E;
    } else x ? (W = (await Promise.all($.map(async (V) => {
      const ne = K(r, V);
      return await M(ne && ne._f ? { [V]: ne } : ne);
    }))).every(Boolean), !(!W && !n.isValid) && p()) : W = E = await M(r);
    return f.state.next({
      ...!Bt(x) || u.isValid && E !== n.isValid ? {} : { name: x },
      ...t.resolver || !x ? { isValid: E } : {},
      errors: n.errors
    }), F.shouldFocus && !W && Gn(r, q, x ? $ : o.mount), W;
  }, ue = (x) => {
    const F = {
      ...i.mount ? a : s
    };
    return je(x) ? F : Bt(x) ? K(F, x) : x.map((E) => K(F, E));
  }, R = (x, F) => ({
    invalid: !!K((F || n).errors, x),
    isDirty: !!K((F || n).dirtyFields, x),
    error: K((F || n).errors, x),
    isValidating: !!K(n.validatingFields, x),
    isTouched: !!K((F || n).touchedFields, x)
  }), B = (x) => {
    x && Qn(x).forEach((F) => Ze(n.errors, F)), f.state.next({
      errors: x ? n.errors : {}
    });
  }, U = (x, F, E) => {
    const W = (K(r, x, { _f: {} })._f || {}).ref, $ = K(n.errors, x) || {}, { ref: V, message: ne, type: he, ...Ee } = $;
    Ne(n.errors, x, {
      ...Ee,
      ...F,
      ref: W
    }), f.state.next({
      name: x,
      errors: n.errors,
      isValid: !1
    }), E && E.shouldFocus && W && W.focus && W.focus();
  }, me = (x, F) => Pt(x) ? f.values.subscribe({
    next: (E) => x(N(void 0, F), E)
  }) : N(x, F, !0), se = (x, F = {}) => {
    for (const E of x ? Qn(x) : o.mount)
      o.mount.delete(E), o.array.delete(E), F.keepValue || (Ze(r, E), Ze(a, E)), !F.keepError && Ze(n.errors, E), !F.keepDirty && Ze(n.dirtyFields, E), !F.keepTouched && Ze(n.touchedFields, E), !F.keepIsValidating && Ze(n.validatingFields, E), !t.shouldUnregister && !F.keepDefaultValue && Ze(s, E);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...F.keepDirty ? { isDirty: I() } : {}
    }), !F.keepIsValid && p();
  }, ge = ({ disabled: x, name: F, field: E, fields: W }) => {
    (St(x) && i.mount || x || o.disabled.has(F)) && (x ? o.disabled.add(F) : o.disabled.delete(F), w(F, Cs(E ? E._f : K(W, F)._f), !1, !1, !0));
  }, ve = (x, F = {}) => {
    let E = K(r, x);
    const W = St(F.disabled) || St(t.disabled);
    return Ne(r, x, {
      ...E || {},
      _f: {
        ...E && E._f ? E._f : { ref: { name: x } },
        name: x,
        mount: !0,
        ...F
      }
    }), o.mount.add(x), E ? ge({
      field: E,
      disabled: St(F.disabled) ? F.disabled : t.disabled,
      name: x
    }) : y(x, !0, F.value), {
      ...W ? { disabled: F.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!F.required,
        min: Bn(F.min),
        max: Bn(F.max),
        minLength: Bn(F.minLength),
        maxLength: Bn(F.maxLength),
        pattern: Bn(F.pattern)
      } : {},
      name: x,
      onChange: fe,
      onBlur: fe,
      ref: ($) => {
        if ($) {
          ve(x, F), E = K(r, x);
          const V = je($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, ne = Zh(V), he = E._f.refs || [];
          if (ne ? he.find((Ee) => Ee === V) : V === E._f.ref)
            return;
          Ne(r, x, {
            _f: {
              ...E._f,
              ...ne ? {
                refs: [
                  ...he.filter(_s),
                  V,
                  ...Array.isArray(K(s, x)) ? [{}] : []
                ],
                ref: { type: V.type, name: x }
              } : { ref: V }
            }
          }), y(x, !1, void 0, V);
        } else
          E = K(r, x, {}), E._f && (E._f.mount = !1), (t.shouldUnregister || F.shouldUnregister) && !(Xl(o.array, x) && i.action) && o.unMount.add(x);
      }
    };
  }, de = () => t.shouldFocusError && Gn(r, q, o.mount), J = (x) => {
    St(x) && (f.state.next({ disabled: x }), Gn(r, (F, E) => {
      const W = K(r, E);
      W && (F.disabled = W._f.disabled || x, Array.isArray(W._f.refs) && W._f.refs.forEach(($) => {
        $.disabled = W._f.disabled || x;
      }));
    }, 0, !1));
  }, oe = (x, F) => async (E) => {
    let W;
    E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
    let $ = lt(a);
    if (o.disabled.size)
      for (const V of o.disabled)
        Ne($, V, void 0);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: V, values: ne } = await A();
      n.errors = V, $ = ne;
    } else
      await M(r);
    if (Ze(n.errors, "root"), ct(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await x($, E);
      } catch (V) {
        W = V;
      }
    } else
      F && await F({ ...n.errors }, E), de(), setTimeout(de);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ct(n.errors) && !W,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), W)
      throw W;
  }, Ie = (x, F = {}) => {
    K(r, x) && (je(F.defaultValue) ? te(x, lt(K(s, x))) : (te(x, F.defaultValue), Ne(s, x, lt(F.defaultValue))), F.keepTouched || Ze(n.touchedFields, x), F.keepDirty || (Ze(n.dirtyFields, x), n.isDirty = F.defaultValue ? I(x, lt(K(s, x))) : I()), F.keepError || (Ze(n.errors, x), u.isValid && p()), f.state.next({ ...n }));
  }, Ve = (x, F = {}) => {
    const E = x ? lt(x) : s, W = lt(E), $ = ct(x), V = $ ? s : W;
    if (F.keepDefaultValues || (s = E), !F.keepValues) {
      if (F.keepDirtyValues) {
        const ne = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(Pn(s, a))
        ]);
        for (const he of Array.from(ne))
          K(n.dirtyFields, he) ? Ne(V, he, K(a, he)) : te(he, K(V, he));
      } else {
        if (Ra && je(x))
          for (const ne of o.mount) {
            const he = K(r, ne);
            if (he && he._f) {
              const Ee = Array.isArray(he._f.refs) ? he._f.refs[0] : he._f.ref;
              if (jr(Ee)) {
                const we = Ee.closest("form");
                if (we) {
                  we.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = t.shouldUnregister ? F.keepDefaultValues ? lt(s) : {} : lt(V), f.array.next({
        values: { ...V }
      }), f.values.next({
        values: { ...V }
      });
    }
    o = {
      mount: F.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, i.mount = !u.isValid || !!F.keepIsValid || !!F.keepDirtyValues, i.watch = !!t.shouldUnregister, f.state.next({
      submitCount: F.keepSubmitCount ? n.submitCount : 0,
      isDirty: $ ? !1 : F.keepDirty ? n.isDirty : !!(F.keepDefaultValues && !Kt(x, s)),
      isSubmitted: F.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: $ ? {} : F.keepDirtyValues ? F.keepDefaultValues && a ? Pn(s, a) : n.dirtyFields : F.keepDefaultValues && x ? Pn(s, x) : F.keepDirty ? n.dirtyFields : {},
      touchedFields: F.keepTouched ? n.touchedFields : {},
      errors: F.keepErrors ? n.errors : {},
      isSubmitSuccessful: F.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, De = (x, F) => Ve(Pt(x) ? x(a) : x, F);
  return {
    control: {
      register: ve,
      unregister: se,
      getFieldState: R,
      handleSubmit: oe,
      setError: U,
      _executeSchema: A,
      _getWatch: N,
      _getDirty: I,
      _updateValid: p,
      _removeUnmounted: T,
      _updateFieldArray: v,
      _updateDisabledField: ge,
      _getFieldArray: P,
      _reset: Ve,
      _resetDefaultValues: () => Pt(t.defaultValues) && t.defaultValues().then((x) => {
        De(x, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (x) => {
        n = {
          ...n,
          ...x
        };
      },
      _disableForm: J,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return i;
      },
      set _state(x) {
        i = x;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return o;
      },
      set _names(x) {
        o = x;
      },
      get _formState() {
        return n;
      },
      set _formState(x) {
        n = x;
      },
      get _options() {
        return t;
      },
      set _options(x) {
        t = {
          ...t,
          ...x
        };
      }
    },
    trigger: le,
    register: ve,
    handleSubmit: oe,
    watch: me,
    setValue: te,
    getValues: ue,
    reset: De,
    resetField: Ie,
    clearErrors: B,
    unregister: se,
    setError: U,
    setFocus: (x, F = {}) => {
      const E = K(r, x), W = E && E._f;
      if (W) {
        const $ = W.refs ? W.refs[0] : W.ref;
        $.focus && ($.focus(), F.shouldSelect && Pt($.select) && $.select());
      }
    },
    getFieldState: R
  };
}
function uc(e = {}) {
  const t = ce.useRef(void 0), n = ce.useRef(void 0), [r, s] = ce.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Pt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Pt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Xh(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Ma({
    subject: a._subjects.state,
    next: (i) => {
      tc(i, a._proxyFormState, a._updateFormState, !0) && s({ ...a._formState });
    }
  }), ce.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), ce.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== r.isDirty && a._subjects.state.next({
        isDirty: i
      });
    }
  }, [a, r.isDirty]), ce.useEffect(() => {
    e.values && !Kt(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, s((i) => ({ ...i }))) : a._resetDefaultValues();
  }, [e.values, a]), ce.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), ce.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), ce.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = ec(r, a), t.current;
}
var Yh = "Label", fc = _t.forwardRef((e, t) => /* @__PURE__ */ c(
  Md.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
fc.displayName = Yh;
var mc = fc;
const qr = _t.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  mc,
  {
    ref: n,
    className: Q(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
qr.displayName = mc.displayName;
const hc = Mh, pc = _t.createContext(
  {}
), Us = ({
  ...e
}) => {
  const { formState: t } = rn();
  return /* @__PURE__ */ c(pc.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c(jh, { ...e, disabled: t.isSubmitting }) });
}, cs = () => {
  const e = _t.useContext(pc), t = _t.useContext(gc), { getFieldState: n, formState: r } = rn(), s = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...s
  };
}, gc = _t.createContext(
  {}
), Va = _t.forwardRef(({ className: e, ...t }, n) => {
  const r = _t.useId();
  return /* @__PURE__ */ c(gc.Provider, { value: { id: r }, children: /* @__PURE__ */ c("div", { ref: n, className: Q("space-y-2", e), ...t }) });
});
Va.displayName = "FormItem";
const Jh = _t.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = cs();
  return /* @__PURE__ */ c(
    qr,
    {
      ref: n,
      className: Q(r && "text-f1-foreground-critical", e),
      htmlFor: s,
      ...t
    }
  );
});
Jh.displayName = "FormLabel";
const vc = _t.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: s, formMessageId: a } = cs();
  return /* @__PURE__ */ c(
    Pd,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${s} ${a}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
vc.displayName = "FormControl";
const bc = _t.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = cs();
  return /* @__PURE__ */ c(
    "p",
    {
      ref: n,
      id: r,
      className: Q("text-base text-f1-foreground-secondary", e),
      ...t
    }
  );
});
bc.displayName = "FormDescription";
const ds = _t.forwardRef(
  ({ className: e, children: t, fallback: n, ...r }, s) => {
    const { error: a, formMessageId: i } = cs(), { forms: o } = Ce(), l = a ? a.message ?? n ?? o.validation.invalidType : t;
    return l ? /* @__PURE__ */ D(
      "div",
      {
        ref: s,
        id: i,
        className: Q("flex gap-1", e),
        ...r,
        children: [
          /* @__PURE__ */ c(Le, { icon: Fo, color: "critical" }),
          /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
ds.displayName = "FormMessage";
const yc = ft(
  function({
    isActionBar: t,
    isDirty: n,
    actionBarStatus: r,
    hasErrors: s,
    errorCount: a,
    resolvedActionBarLabel: i,
    submitLabel: o,
    submitIcon: l,
    discardableChanges: d,
    discardLabel: u,
    discardIcon: f,
    issuesOneLabel: h,
    issuesOtherLabel: m,
    onSubmit: g,
    onDiscard: b,
    goToPreviousError: p,
    goToNextError: S
  }, v) {
    return t ? /* @__PURE__ */ c(
      Vs,
      {
        ref: v,
        isOpen: n || r === "loading" || r === "success",
        variant: "light",
        status: s ? void 0 : r,
        label: i,
        leftContent: s ? /* @__PURE__ */ D("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ D("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ c(Le, { icon: Fo, size: "md", color: "critical" }),
            /* @__PURE__ */ c("span", { className: "font-medium text-f1-foreground-critical", children: a === 1 ? h.replace("{{count}}", String(a)) : m.replace(
              "{{count}}",
              String(a)
            ) })
          ] }),
          a > 1 && /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ c(
              Me,
              {
                icon: Bd,
                onClick: p,
                variant: "outline",
                label: "Go to previous error",
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ c(
              Me,
              {
                icon: Fr,
                onClick: S,
                variant: "outline",
                label: "Go to next error",
                hideLabel: !0
              }
            )
          ] })
        ] }) : void 0,
        primaryActions: [
          {
            label: o,
            icon: l,
            onClick: g,
            disabled: s
          }
        ],
        secondaryActions: d ? [
          {
            label: u,
            icon: f,
            onClick: b
          }
        ] : []
      }
    ) : /* @__PURE__ */ c(
      Vs,
      {
        ref: v,
        isOpen: r === "loading" || r === "success",
        variant: "light",
        status: r,
        label: i
      }
    );
  }
);
yc.displayName = "FormActionBar";
const Ei = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = K(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, xc = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? Ei(r.ref, n, e) : r.refs && r.refs.forEach((s) => Ei(s, n, e));
  }
}, ep = (e, t) => {
  t.shouldUseNativeValidation && xc(e, t);
  const n = {};
  for (const r in e) {
    const s = K(t.fields, r), a = Object.assign(e[r] || {}, { ref: s && s.ref });
    if (tp(t.names || Object.keys(e), r)) {
      const i = Object.assign({}, K(n, r));
      Ne(i, "root", a), Ne(n, r, i);
    } else Ne(n, r, a);
  }
  return n;
}, tp = (e, t) => e.some((n) => n.startsWith(t + "."));
var np = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], s = r.code, a = r.message, i = r.path.join(".");
    if (!n[i]) if ("unionErrors" in r) {
      var o = r.unionErrors[0].errors[0];
      n[i] = { message: o.message, type: o.code };
    } else n[i] = { message: a, type: s };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var l = n[i].types, d = l && l[r.code];
      n[i] = sc(i, t, n, s, d ? [].concat(d, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, rp = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, s, a) {
    try {
      return Promise.resolve((function(i, o) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(d) {
            return a.shouldUseNativeValidation && xc({}, a), { errors: {}, values: n.raw ? r : d };
          });
        } catch (d) {
          return o(d);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(i) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(i)) return { values: {}, errors: ep(np(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, ke;
(function(e) {
  e.assertEqual = (s) => {
  };
  function t(s) {
  }
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (s) => {
    const a = {};
    for (const i of s)
      a[i] = i;
    return a;
  }, e.getValidEnumValues = (s) => {
    const a = e.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), i = {};
    for (const o of a)
      i[o] = s[o];
    return e.objectValues(i);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(a) {
    return s[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a;
  }, e.find = (s, a) => {
    for (const i of s)
      if (a(i))
        return i;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function r(s, a = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(ke || (ke = {}));
var Ii;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ii || (Ii = {}));
const re = ke.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Gt = (e) => {
  switch (typeof e) {
    case "undefined":
      return re.undefined;
    case "string":
      return re.string;
    case "number":
      return Number.isNaN(e) ? re.nan : re.number;
    case "boolean":
      return re.boolean;
    case "function":
      return re.function;
    case "bigint":
      return re.bigint;
    case "symbol":
      return re.symbol;
    case "object":
      return Array.isArray(e) ? re.array : e === null ? re.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? re.promise : typeof Map < "u" && e instanceof Map ? re.map : typeof Set < "u" && e instanceof Set ? re.set : typeof Date < "u" && e instanceof Date ? re.date : re.object;
    default:
      return re.unknown;
  }
}, j = ke.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class qt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, s = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(n(i));
        else {
          let o = r, l = 0;
          for (; l < i.path.length; ) {
            const d = i.path[l];
            l === i.path.length - 1 ? (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(n(i))) : o[d] = o[d] || { _errors: [] }, o = o[d], l++;
          }
        }
    };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof qt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ke.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const a = s.path[0];
        n[a] = n[a] || [], n[a].push(t(s));
      } else
        r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
qt.create = (e) => new qt(e);
const Ws = (e, t) => {
  let n;
  switch (e.code) {
    case j.invalid_type:
      e.received === re.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case j.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ke.jsonStringifyReplacer)}`;
      break;
    case j.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ke.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      n = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ke.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      n = `Invalid enum value. Expected ${ke.joinValues(e.options)}, received '${e.received}'`;
      break;
    case j.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case j.invalid_return_type:
      n = "Invalid function return type";
      break;
    case j.invalid_date:
      n = "Invalid date";
      break;
    case j.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ke.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case j.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case j.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case j.custom:
      n = "Invalid input";
      break;
    case j.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case j.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case j.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, ke.assertNever(e);
  }
  return { message: n };
};
let sp = Ws;
function ap() {
  return sp;
}
const ip = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: s } = e, a = [...n, ...s.path || []], i = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let o = "";
  const l = r.filter((d) => !!d).slice().reverse();
  for (const d of l)
    o = d(i, { data: t, defaultError: o }).message;
  return {
    ...s,
    path: a,
    message: o
  };
};
function Y(e, t) {
  const n = ap(), r = ip({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === Ws ? void 0 : Ws
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(r);
}
class yt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted")
        return pe;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const a = await s.key, i = await s.value;
      r.push({
        key: a,
        value: i
      });
    }
    return yt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return pe;
      a.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const pe = Object.freeze({
  status: "aborted"
}), Vn = (e) => ({ status: "dirty", value: e }), Nt = (e) => ({ status: "valid", value: e }), Oi = (e) => e.status === "aborted", Ri = (e) => e.status === "dirty", Sn = (e) => e.status === "valid", Zr = (e) => typeof Promise < "u" && e instanceof Promise;
var ae;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(ae || (ae = {}));
class en {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Li = (e, t) => {
  if (Sn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new qt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function be(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: s } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (i, o) => {
    const { message: l } = e;
    return i.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? r ?? o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? n ?? o.defaultError };
  }, description: s };
}
class Se {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Gt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Gt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new yt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Gt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Zr(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    const r = {
      common: {
        issues: [],
        async: n?.async ?? !1,
        contextualErrorMap: n?.errorMap
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Gt(t)
    }, s = this._parseSync({ data: t, path: r.path, parent: r });
    return Li(r, s);
  }
  "~validate"(t) {
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Gt(t)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: t, path: [], parent: n });
        return Sn(r) ? {
          value: r.value
        } : {
          issues: n.common.issues
        };
      } catch (r) {
        r?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), n.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((r) => Sn(r) ? {
      value: r.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n?.errorMap,
        async: !0
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Gt(t)
    }, s = this._parse({ data: t, path: r.path, parent: r }), a = await (Zr(s) ? s : Promise.resolve(s));
    return Li(r, a);
  }
  refine(t, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, a) => {
      const i = t(s), o = () => a.addIssue({
        code: j.custom,
        ...r(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) => t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(t) {
    return new Cn({
      schema: this,
      typeName: Z.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return Yt.create(this, this._def);
  }
  nullable() {
    return Nn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Vt.create(this);
  }
  promise() {
    return Hr.create(this, this._def);
  }
  or(t) {
    return Ur.create([this, t], this._def);
  }
  and(t) {
    return Wr.create(this, t, this._def);
  }
  transform(t) {
    return new Cn({
      ...be(this._def),
      schema: this,
      typeName: Z.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Xs({
      ...be(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Z.ZodDefault
    });
  }
  brand() {
    return new Tp({
      typeName: Z.ZodBranded,
      type: this,
      ...be(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ys({
      ...be(this._def),
      innerType: this,
      catchValue: n,
      typeName: Z.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return ja.create(this, t);
  }
  readonly() {
    return Js.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const op = /^c[^\s-]{8,}$/i, lp = /^[0-9a-z]+$/, cp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, dp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, up = /^[a-z0-9_-]{21}$/i, fp = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, mp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, hp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, pp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ns;
const gp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, vp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, bp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, yp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, xp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, wp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, wc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Sp = new RegExp(`^${wc}$`);
function Sc(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function kp(e) {
  return new RegExp(`^${Sc(e)}$`);
}
function _p(e) {
  let t = `${wc}T${Sc(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Cp(e, t) {
  return !!((t === "v4" || !t) && gp.test(e) || (t === "v6" || !t) && bp.test(e));
}
function Np(e, t) {
  if (!fp.test(e))
    return !1;
  try {
    const [n] = e.split(".");
    if (!n)
      return !1;
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || t && s.alg !== t);
  } catch {
    return !1;
  }
}
function Dp(e, t) {
  return !!((t === "v4" || !t) && vp.test(e) || (t === "v6" || !t) && yp.test(e));
}
class Xt extends Se {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== re.string) {
      const a = this._getOrReturnCtx(t);
      return Y(a, {
        code: j.invalid_type,
        expected: re.string,
        received: a.parsedType
      }), pe;
    }
    const r = new yt();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), Y(s, {
          code: j.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), Y(s, {
          code: j.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value, o = t.data.length < a.value;
        (i || o) && (s = this._getOrReturnCtx(t, s), i ? Y(s, {
          code: j.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && Y(s, {
          code: j.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        hp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "email",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Ns || (Ns = new RegExp(pp, "u")), Ns.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "emoji",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        dp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "uuid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        up.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "nanoid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        op.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "cuid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        lp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "cuid2",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        cp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
          validation: "ulid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), Y(s, {
            validation: "url",
            code: j.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "regex",
        code: j.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? _p(a).test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? Sp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? kp(a).test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? mp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "duration",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? Cp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "ip",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? Np(t.data, a.alg) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "jwt",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? Dp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "cidr",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? xp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "base64",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? wp.test(t.data) || (s = this._getOrReturnCtx(t, s), Y(s, {
        validation: "base64url",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : ke.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: j.invalid_string,
      ...ae.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ae.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ae.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ae.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ae.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ae.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ae.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ae.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ae.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ae.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...ae.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...ae.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ae.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...ae.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      offset: t?.offset ?? !1,
      local: t?.local ?? !1,
      ...ae.errToObj(t?.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      ...ae.errToObj(t?.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ae.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...ae.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n?.position,
      ...ae.errToObj(n?.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...ae.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...ae.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...ae.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...ae.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...ae.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, ae.errToObj(t));
  }
  trim() {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Xt.create = (e) => new Xt({
  checks: [],
  typeName: Z.ZodString,
  coerce: e?.coerce ?? !1,
  ...be(e)
});
function Fp(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = n > r ? n : r, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
class kn extends Se {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== re.number) {
      const a = this._getOrReturnCtx(t);
      return Y(a, {
        code: j.invalid_type,
        expected: re.number,
        received: a.parsedType
      }), pe;
    }
    let r;
    const s = new yt();
    for (const a of this._def.checks)
      a.kind === "int" ? ke.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? Fp(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.not_finite,
        message: a.message
      }), s.dirty()) : ke.assertNever(a);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ae.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ae.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ae.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ae.toString(n));
  }
  setLimit(t, n, r, s) {
    return new kn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: ae.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new kn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: ae.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ae.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ae.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ae.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ae.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ae.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: ae.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ae.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ae.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ke.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
kn.create = (e) => new kn({
  checks: [],
  typeName: Z.ZodNumber,
  coerce: e?.coerce || !1,
  ...be(e)
});
class tr extends Se {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== re.bigint)
      return this._getInvalidInput(t);
    let r;
    const s = new yt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Y(r, {
        code: j.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : ke.assertNever(a);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return Y(n, {
      code: j.invalid_type,
      expected: re.bigint,
      received: n.parsedType
    }), pe;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ae.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ae.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ae.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ae.toString(n));
  }
  setLimit(t, n, r, s) {
    return new tr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: ae.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new tr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ae.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ae.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ae.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ae.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ae.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
tr.create = (e) => new tr({
  checks: [],
  typeName: Z.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...be(e)
});
class Hs extends Se {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== re.boolean) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.boolean,
        received: r.parsedType
      }), pe;
    }
    return Nt(t.data);
  }
}
Hs.create = (e) => new Hs({
  typeName: Z.ZodBoolean,
  coerce: e?.coerce || !1,
  ...be(e)
});
class nr extends Se {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== re.date) {
      const a = this._getOrReturnCtx(t);
      return Y(a, {
        code: j.invalid_type,
        expected: re.date,
        received: a.parsedType
      }), pe;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return Y(a, {
        code: j.invalid_date
      }), pe;
    }
    const r = new yt();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), Y(s, {
        code: j.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : ke.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: ae.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: ae.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
nr.create = (e) => new nr({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: Z.ZodDate,
  ...be(e)
});
class Mi extends Se {
  _parse(t) {
    if (this._getType(t) !== re.symbol) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.symbol,
        received: r.parsedType
      }), pe;
    }
    return Nt(t.data);
  }
}
Mi.create = (e) => new Mi({
  typeName: Z.ZodSymbol,
  ...be(e)
});
class Pi extends Se {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.undefined,
        received: r.parsedType
      }), pe;
    }
    return Nt(t.data);
  }
}
Pi.create = (e) => new Pi({
  typeName: Z.ZodUndefined,
  ...be(e)
});
class Bi extends Se {
  _parse(t) {
    if (this._getType(t) !== re.null) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.null,
        received: r.parsedType
      }), pe;
    }
    return Nt(t.data);
  }
}
Bi.create = (e) => new Bi({
  typeName: Z.ZodNull,
  ...be(e)
});
class Qs extends Se {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Nt(t.data);
  }
}
Qs.create = (e) => new Qs({
  typeName: Z.ZodAny,
  ...be(e)
});
class Gs extends Se {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Nt(t.data);
  }
}
Gs.create = (e) => new Gs({
  typeName: Z.ZodUnknown,
  ...be(e)
});
class tn extends Se {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Y(n, {
      code: j.invalid_type,
      expected: re.never,
      received: n.parsedType
    }), pe;
  }
}
tn.create = (e) => new tn({
  typeName: Z.ZodNever,
  ...be(e)
});
class Vi extends Se {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.void,
        received: r.parsedType
      }), pe;
    }
    return Nt(t.data);
  }
}
Vi.create = (e) => new Vi({
  typeName: Z.ZodVoid,
  ...be(e)
});
class Vt extends Se {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== re.array)
      return Y(n, {
        code: j.invalid_type,
        expected: re.array,
        received: n.parsedType
      }), pe;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value, o = n.data.length < s.exactLength.value;
      (i || o) && (Y(n, {
        code: i ? j.too_big : j.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (Y(n, {
      code: j.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (Y(n, {
      code: j.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, o) => s.type._parseAsync(new en(n, i, n.path, o)))).then((i) => yt.mergeArray(r, i));
    const a = [...n.data].map((i, o) => s.type._parseSync(new en(n, i, n.path, o)));
    return yt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Vt({
      ...this._def,
      minLength: { value: t, message: ae.toString(n) }
    });
  }
  max(t, n) {
    return new Vt({
      ...this._def,
      maxLength: { value: t, message: ae.toString(n) }
    });
  }
  length(t, n) {
    return new Vt({
      ...this._def,
      exactLength: { value: t, message: ae.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Vt.create = (e, t) => new Vt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Z.ZodArray,
  ...be(t)
});
function vn(e) {
  if (e instanceof qe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Yt.create(vn(r));
    }
    return new qe({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Vt ? new Vt({
    ...e._def,
    type: vn(e.element)
  }) : e instanceof Yt ? Yt.create(vn(e.unwrap())) : e instanceof Nn ? Nn.create(vn(e.unwrap())) : e instanceof dn ? dn.create(e.items.map((t) => vn(t))) : e;
}
class qe extends Se {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ke.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== re.object) {
      const d = this._getOrReturnCtx(t);
      return Y(d, {
        code: j.invalid_type,
        expected: re.object,
        received: d.parsedType
      }), pe;
    }
    const { status: r, ctx: s } = this._processInputParams(t), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof tn && this._def.unknownKeys === "strip"))
      for (const d in s.data)
        i.includes(d) || o.push(d);
    const l = [];
    for (const d of i) {
      const u = a[d], f = s.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: u._parse(new en(s, f, s.path, d)),
        alwaysSet: d in s.data
      });
    }
    if (this._def.catchall instanceof tn) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (d === "strict")
        o.length > 0 && (Y(s, {
          code: j.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const u of o) {
        const f = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: d._parse(
            new en(s, f, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of l) {
        const f = await u.key, h = await u.value;
        d.push({
          key: f,
          value: h,
          alwaysSet: u.alwaysSet
        });
      }
      return d;
    }).then((d) => yt.mergeObjectSync(r, d)) : yt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return ae.errToObj, new qe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          const s = this._def.errorMap?.(n, r).message ?? r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: ae.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new qe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new qe({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new qe({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new qe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Z.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new qe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const r of ke.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const r of ke.objectKeys(this.shape))
      t[r] || (n[r] = this.shape[r]);
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return vn(this);
  }
  partial(t) {
    const n = {};
    for (const r of ke.objectKeys(this.shape)) {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional();
    }
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const r of ke.objectKeys(this.shape))
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Yt; )
          a = a._def.innerType;
        n[r] = a;
      }
    return new qe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return kc(ke.objectKeys(this.shape));
  }
}
qe.create = (e, t) => new qe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: tn.create(),
  typeName: Z.ZodObject,
  ...be(t)
});
qe.strictCreate = (e, t) => new qe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: tn.create(),
  typeName: Z.ZodObject,
  ...be(t)
});
qe.lazycreate = (e, t) => new qe({
  shape: e,
  unknownKeys: "strip",
  catchall: tn.create(),
  typeName: Z.ZodObject,
  ...be(t)
});
class Ur extends Se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function s(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new qt(o.ctx.common.issues));
      return Y(n, {
        code: j.invalid_union,
        unionErrors: i
      }), pe;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const i = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let a;
      const i = [];
      for (const l of r) {
        const d = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: d
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((l) => new qt(l));
      return Y(n, {
        code: j.invalid_union,
        unionErrors: o
      }), pe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ur.create = (e, t) => new Ur({
  options: e,
  typeName: Z.ZodUnion,
  ...be(t)
});
function Ks(e, t) {
  const n = Gt(e), r = Gt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === re.object && r === re.object) {
    const s = ke.objectKeys(t), a = ke.objectKeys(e).filter((o) => s.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of a) {
      const l = Ks(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      i[o] = l.data;
    }
    return { valid: !0, data: i };
  } else if (n === re.array && r === re.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const i = e[a], o = t[a], l = Ks(i, o);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === re.date && r === re.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Wr extends Se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = (a, i) => {
      if (Oi(a) || Oi(i))
        return pe;
      const o = Ks(a.value, i.value);
      return o.valid ? ((Ri(a) || Ri(i)) && n.dirty(), { status: n.value, value: o.data }) : (Y(r, {
        code: j.invalid_intersection_types
      }), pe);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Wr.create = (e, t, n) => new Wr({
  left: e,
  right: t,
  typeName: Z.ZodIntersection,
  ...be(n)
});
class dn extends Se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.array)
      return Y(r, {
        code: j.invalid_type,
        expected: re.array,
        received: r.parsedType
      }), pe;
    if (r.data.length < this._def.items.length)
      return Y(r, {
        code: j.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), pe;
    !this._def.rest && r.data.length > this._def.items.length && (Y(r, {
      code: j.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new en(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => yt.mergeArray(n, i)) : yt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new dn({
      ...this._def,
      rest: t
    });
  }
}
dn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new dn({
    items: e,
    typeName: Z.ZodTuple,
    rest: null,
    ...be(t)
  });
};
class ji extends Se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.map)
      return Y(r, {
        code: j.invalid_type,
        expected: re.map,
        received: r.parsedType
      }), pe;
    const s = this._def.keyType, a = this._def.valueType, i = [...r.data.entries()].map(([o, l], d) => ({
      key: s._parse(new en(r, o, r.path, [d, "key"])),
      value: a._parse(new en(r, l, r.path, [d, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const d = await l.key, u = await l.value;
          if (d.status === "aborted" || u.status === "aborted")
            return pe;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of i) {
        const d = l.key, u = l.value;
        if (d.status === "aborted" || u.status === "aborted")
          return pe;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
ji.create = (e, t, n) => new ji({
  valueType: t,
  keyType: e,
  typeName: Z.ZodMap,
  ...be(n)
});
class rr extends Se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.set)
      return Y(r, {
        code: j.invalid_type,
        expected: re.set,
        received: r.parsedType
      }), pe;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (Y(r, {
      code: j.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (Y(r, {
      code: j.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function i(l) {
      const d = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return pe;
        u.status === "dirty" && n.dirty(), d.add(u.value);
      }
      return { status: n.value, value: d };
    }
    const o = [...r.data.values()].map((l, d) => a._parse(new en(r, l, r.path, d)));
    return r.common.async ? Promise.all(o).then((l) => i(l)) : i(o);
  }
  min(t, n) {
    return new rr({
      ...this._def,
      minSize: { value: t, message: ae.toString(n) }
    });
  }
  max(t, n) {
    return new rr({
      ...this._def,
      maxSize: { value: t, message: ae.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
rr.create = (e, t) => new rr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Z.ZodSet,
  ...be(t)
});
class $i extends Se {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
$i.create = (e, t) => new $i({
  getter: e,
  typeName: Z.ZodLazy,
  ...be(t)
});
class zi extends Se {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Y(n, {
        received: n.data,
        code: j.invalid_literal,
        expected: this._def.value
      }), pe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
zi.create = (e, t) => new zi({
  value: e,
  typeName: Z.ZodLiteral,
  ...be(t)
});
function kc(e, t) {
  return new _n({
    values: e,
    typeName: Z.ZodEnum,
    ...be(t)
  });
}
class _n extends Se {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Y(n, {
        expected: ke.joinValues(r),
        received: n.parsedType,
        code: j.invalid_type
      }), pe;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Y(n, {
        received: n.data,
        code: j.invalid_enum_value,
        options: r
      }), pe;
    }
    return Nt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return _n.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return _n.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
_n.create = kc;
class qi extends Se {
  _parse(t) {
    const n = ke.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== re.string && r.parsedType !== re.number) {
      const s = ke.objectValues(n);
      return Y(r, {
        expected: ke.joinValues(s),
        received: r.parsedType,
        code: j.invalid_type
      }), pe;
    }
    if (this._cache || (this._cache = new Set(ke.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = ke.objectValues(n);
      return Y(r, {
        received: r.data,
        code: j.invalid_enum_value,
        options: s
      }), pe;
    }
    return Nt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
qi.create = (e, t) => new qi({
  values: e,
  typeName: Z.ZodNativeEnum,
  ...be(t)
});
class Hr extends Se {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== re.promise && n.common.async === !1)
      return Y(n, {
        code: j.invalid_type,
        expected: re.promise,
        received: n.parsedType
      }), pe;
    const r = n.parsedType === re.promise ? n.data : Promise.resolve(n.data);
    return Nt(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Hr.create = (e, t) => new Hr({
  type: e,
  typeName: Z.ZodPromise,
  ...be(t)
});
class Cn extends Se {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = this._def.effect || null, a = {
      addIssue: (i) => {
        Y(r, i), i.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (n.value === "aborted")
            return pe;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? pe : l.status === "dirty" || n.value === "dirty" ? Vn(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return pe;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? pe : o.status === "dirty" || n.value === "dirty" ? Vn(o.value) : o;
      }
    }
    if (s.type === "refinement") {
      const i = (o) => {
        const l = s.refinement(o, a);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? pe : (o.status === "dirty" && n.dirty(), i(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? pe : (o.status === "dirty" && n.dirty(), i(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Sn(i))
          return pe;
        const o = s.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => Sn(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({
          status: n.value,
          value: o
        })) : pe);
    ke.assertNever(s);
  }
}
Cn.create = (e, t, n) => new Cn({
  schema: e,
  typeName: Z.ZodEffects,
  effect: t,
  ...be(n)
});
Cn.createWithPreprocess = (e, t, n) => new Cn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Z.ZodEffects,
  ...be(n)
});
class Yt extends Se {
  _parse(t) {
    return this._getType(t) === re.undefined ? Nt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Yt.create = (e, t) => new Yt({
  innerType: e,
  typeName: Z.ZodOptional,
  ...be(t)
});
class Nn extends Se {
  _parse(t) {
    return this._getType(t) === re.null ? Nt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nn.create = (e, t) => new Nn({
  innerType: e,
  typeName: Z.ZodNullable,
  ...be(t)
});
class Xs extends Se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === re.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Xs.create = (e, t) => new Xs({
  innerType: e,
  typeName: Z.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...be(t)
});
class Ys extends Se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Zr(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ys.create = (e, t) => new Ys({
  innerType: e,
  typeName: Z.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...be(t)
});
class Zi extends Se {
  _parse(t) {
    if (this._getType(t) !== re.nan) {
      const r = this._getOrReturnCtx(t);
      return Y(r, {
        code: j.invalid_type,
        expected: re.nan,
        received: r.parsedType
      }), pe;
    }
    return { status: "valid", value: t.data };
  }
}
Zi.create = (e) => new Zi({
  typeName: Z.ZodNaN,
  ...be(e)
});
class Tp extends Se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ja extends Se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? pe : a.status === "dirty" ? (n.dirty(), Vn(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? pe : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new ja({
      in: t,
      out: n,
      typeName: Z.ZodPipeline
    });
  }
}
class Js extends Se {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (s) => (Sn(s) && (s.value = Object.freeze(s.value)), s);
    return Zr(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Js.create = (e, t) => new Js({
  innerType: e,
  typeName: Z.ZodReadonly,
  ...be(t)
});
var Z;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Z || (Z = {}));
const us = Xt.create, Ap = kn.create, Ep = Hs.create, Ip = nr.create, Op = Qs.create, Rp = Gs.create;
tn.create;
const _c = Vt.create, $a = qe.create;
Ur.create;
Wr.create;
dn.create;
_n.create;
Hr.create;
Yt.create;
Nn.create;
function Oe(e, t) {
  return e._def?.typeName === t;
}
function sn(e) {
  return Oe(e, "ZodEffects") ? e._def.schema : e;
}
const Cc = /* @__PURE__ */ new WeakMap();
function vt(e, t) {
  Cc.set(e, t);
  const n = e;
  return n._f0Config = t, n._innerSchema = e, n;
}
function an(e) {
  const t = e;
  return t._f0Config ? t._f0Config : Cc.get(e);
}
function Zy(e) {
  return an(e) !== void 0;
}
function st(e) {
  let t = e;
  for (; Oe(t, "ZodOptional") || Oe(t, "ZodNullable") || Oe(t, "ZodDefault"); )
    t = t._def.innerType;
  return t;
}
function Nc(e, t) {
  if ("fieldType" in t && t.fieldType)
    return t.fieldType;
  if ("options" in t && t.options || "source" in t && t.source)
    return "select";
  const n = st(e);
  return Oe(n, "ZodString") ? "rows" in t && t.rows ? "textarea" : "text" : Oe(n, "ZodNumber") ? "number" : Oe(n, "ZodBoolean") ? "switch" : Oe(n, "ZodDate") ? "date" : Oe(n, "ZodEnum") || Oe(n, "ZodArray") && ("options" in t && t.options || "source" in t && t.source) ? "select" : Oe(n, "ZodObject") && "render" in t && t.render ? "custom" : "text";
}
function Lp(e, t) {
  const n = t[e.fieldId];
  if ("equalsTo" in e)
    return e.equalsTo instanceof Date && n instanceof Date ? n.getTime() === e.equalsTo.getTime() : n === e.equalsTo;
  if ("notEqualsTo" in e)
    return e.notEqualsTo instanceof Date && n instanceof Date ? n.getTime() !== e.notEqualsTo.getTime() : n !== e.notEqualsTo;
  if ("greaterThan" in e) {
    const r = e.greaterThan;
    return typeof n == "number" && typeof r == "number" ? n > r : n instanceof Date && r instanceof Date ? n.getTime() > r.getTime() : !1;
  }
  if ("greaterThanOrEqual" in e) {
    const r = e.greaterThanOrEqual;
    return typeof n == "number" && typeof r == "number" ? n >= r : n instanceof Date && r instanceof Date ? n.getTime() >= r.getTime() : !1;
  }
  if ("lowerThan" in e) {
    const r = e.lowerThan;
    return typeof n == "number" && typeof r == "number" ? n < r : n instanceof Date && r instanceof Date ? n.getTime() < r.getTime() : !1;
  }
  if ("lowerThanOrEqual" in e) {
    const r = e.lowerThanOrEqual;
    return typeof n == "number" && typeof r == "number" ? n <= r : n instanceof Date && r instanceof Date ? n.getTime() <= r.getTime() : !1;
  }
  if ("isEmpty" in e) {
    const r = n == null || n === "" || Array.isArray(n) && n.length === 0;
    return e.isEmpty ? r : !r;
  }
  return "matches" in e ? typeof n == "string" && e.matches.test(n) : "includes" in e ? Array.isArray(n) ? n.includes(e.includes) : n === e.includes : "notIncludes" in e ? Array.isArray(n) ? !n.includes(e.notIncludes) : n !== e.notIncludes : !0;
}
function fs(e, t) {
  return typeof e == "function" ? e({ values: t }) : Lp(e, t);
}
function za(e, t) {
  return e === void 0 ? !1 : typeof e == "function" ? e({ values: t }) : e;
}
function gn(e, t) {
  if (e !== void 0)
    return typeof e == "function" ? e({ values: t }) : e;
}
function Dc(e, t) {
  return async (n, r, s) => {
    const a = Mp(e, n), i = { ...n };
    for (const l of Object.keys(i))
      i[l] === null && (i[l] = void 0);
    return rp(a, t)(i, r, s);
  };
}
function Mp(e, t) {
  const r = sn(e).shape, s = {};
  for (const [i, o] of Object.entries(r)) {
    const l = an(o);
    if (!l || !l.renderIf) {
      s[i] = o;
      continue;
    }
    fs(l.renderIf, t) ? s[i] = o : s[i] = Op();
  }
  const a = $a(s);
  if (Oe(e, "ZodEffects")) {
    const o = e._def.effect;
    if (o.type === "refinement")
      return a.superRefine(o.refinement);
  }
  return a;
}
const qa = "gap-4", Fc = "mt-6", Tc = "max-w-[720px]", on = "md", ms = Ct(null);
function Za() {
  const e = et(ms);
  if (!e)
    throw new Error("useF0FormContext must be used within a F0Form");
  return e;
}
function Ac() {
  return et(ms);
}
function un(e, t, n) {
  const r = ["forms", e];
  return t && r.push(t), n && r.push(n), r.join(".");
}
const fr = Ct(void 0);
function Pp({
  field: e,
  formField: t
}) {
  const n = et(fr), r = e.options.map((s) => ({
    value: s.value,
    title: s.label,
    description: s.description,
    selectedContent: n?.get(s.value)
  }));
  return /* @__PURE__ */ c(
    Yo,
    {
      grouped: e.grouped !== !1,
      items: r,
      value: t.value,
      onChange: (s) => t.onChange(s),
      label: e.label,
      disabled: e.disabled
    }
  );
}
function Bp(e) {
  const t = st(e);
  return Oe(t, "ZodLiteral") && t._def.value === !0;
}
function Vp({
  field: e,
  formField: t
}) {
  const n = e.validation && Bp(e.validation);
  return /* @__PURE__ */ c(
    Xn,
    {
      ...t,
      title: e.label,
      disabled: e.disabled,
      required: n,
      checked: !!t.value,
      onCheckedChange: t.onChange
    }
  );
}
function jp({
  field: e,
  formField: t,
  error: n,
  isValidating: r,
  required: s
}) {
  const i = Ac()?.renderCustomField, o = {
    id: e.id,
    label: e.label,
    placeholder: e.placeholder,
    value: t.value,
    onChange: t.onChange,
    onBlur: t.onBlur,
    error: n,
    isValidating: r,
    disabled: e.disabled,
    required: s,
    config: e.fieldConfig
  };
  if (e.customFieldName) {
    if (!i)
      throw new Error(
        `Custom field "${e.id}" has customFieldName "${e.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    return /* @__PURE__ */ c(Ke, { children: i({
      ...o,
      customFieldName: e.customFieldName,
      fieldType: "custom"
    }) });
  }
  if (!e.render)
    throw new Error(
      `Custom field "${e.id}" has neither a render function nor a customFieldName.`
    );
  return /* @__PURE__ */ c(Ke, { children: e.render(o) });
}
function $p(e, t) {
  if (e)
    return {
      value: { from: e, to: e },
      granularity: t?.[0] ?? "day"
    };
}
function zp(e) {
  return e?.value?.from;
}
function Ec({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => $p(
      t.value ?? void 0,
      e.granularities
    ),
    [t.value, e.granularities]
  ), i = (l) => {
    t.onChange(zp(l) ?? null);
  }, o = (l) => {
    l || t.onBlur();
  };
  return /* @__PURE__ */ c(
    To,
    {
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities,
      minDate: e.minDate,
      maxDate: e.maxDate,
      presets: e.presets,
      clearable: e.clearable,
      value: a,
      onChange: i,
      onOpenChange: o,
      size: on,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function ea(e) {
  if (!e || !(e instanceof Date) || isNaN(e.getTime())) return "";
  const t = String(e.getHours()).padStart(2, "0"), n = String(e.getMinutes()).padStart(2, "0");
  return `${t}:${n}`;
}
function qp(e) {
  if (!e) return;
  const [t, n] = e.split(":").map(Number);
  if (isNaN(t) || isNaN(n)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(t, n, 0, 0), r;
}
function Ds(e, t) {
  if (!e) return;
  const n = new Date(e);
  if (t) {
    const [r, s, a] = t.split(":").map(Number);
    n.setHours(r ?? 0, s ?? 0, a ?? 0, 0);
  } else
    n.setHours(0, 0, 0, 0);
  return n;
}
function Ic({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => ea(t.value ?? void 0),
    [t.value]
  ), i = L(
    (o) => {
      if (!o) {
        t.onChange(null), t.onBlur();
        return;
      }
      const l = qp(o);
      t.onChange(l), t.onBlur();
    },
    [t]
  );
  return /* @__PURE__ */ c(
    ua,
    {
      type: "time",
      label: e.label,
      disabled: e.disabled,
      value: a,
      onChange: i,
      size: on,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      clearable: e.clearable,
      name: t.name,
      ref: t.ref,
      icon: Vd
    }
  );
}
function Zp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = t.value ?? void 0, i = z(() => ea(a), [a]), o = L(
    (m) => {
      if (!m) {
        t.onChange(null);
        return;
      }
      t.onChange(Ds(m, i));
    },
    [t, i]
  ), l = L(
    (m) => {
      if (!m) {
        if (a) {
          const b = new Date(a);
          b.setHours(0, 0, 0, 0), t.onChange(b);
        }
        return;
      }
      const g = ea(m);
      if (!a) {
        const b = /* @__PURE__ */ new Date();
        b.setHours(0, 0, 0, 0), t.onChange(Ds(b, g));
        return;
      }
      t.onChange(Ds(a, g));
    },
    [t, a]
  ), d = z(
    () => ({
      id: `${e.id}-date`,
      type: "date",
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities ?? ["day"],
      presets: e.presets,
      minDate: e.minDate,
      maxDate: e.maxDate,
      clearable: e.clearable
    }),
    [e]
  ), u = z(
    () => ({
      ...t,
      value: a,
      onChange: o
    }),
    [t, a, o]
  ), f = z(
    () => ({
      id: `${e.id}-time`,
      type: "time",
      label: "Time",
      disabled: e.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [e.id, e.disabled]
  ), h = z(
    () => ({
      ...t,
      value: a,
      onChange: l
    }),
    [t, a, l]
  );
  return /* @__PURE__ */ D("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ c("div", { className: "flex-1", children: /* @__PURE__ */ c(
      Ec,
      {
        field: d,
        formField: u,
        error: n,
        status: s,
        loading: r
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-32", children: /* @__PURE__ */ c(
      Ic,
      {
        field: f,
        formField: h,
        error: n,
        status: s,
        loading: r
      }
    ) })
  ] });
}
function Up(e) {
  if (!(!e?.from || !e?.to))
    return {
      value: { from: e.from, to: e.to },
      granularity: "range"
    };
}
function Wp(e) {
  if (!(!e?.value?.from || !e?.value?.to))
    return {
      from: e.value.from,
      to: e.value.to
    };
}
function Hp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => Up(
      t.value ?? void 0
    ),
    [t.value]
  ), i = (d) => {
    t.onChange(Wp(d) ?? null);
  }, o = (d) => {
    d || t.onBlur();
  }, l = e.fromLabel && e.toLabel ? `${e.label} (${e.fromLabel} - ${e.toLabel})` : e.label;
  return /* @__PURE__ */ c(
    To,
    {
      label: l,
      placeholder: e.placeholder,
      disabled: e.disabled,
      granularities: e.granularities ?? ["range"],
      minDate: e.minDate,
      maxDate: e.maxDate,
      presets: e.presets,
      clearable: e.clearable,
      value: a,
      onChange: i,
      onOpenChange: o,
      size: on,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function Qp({
  field: e,
  formField: t,
  error: n,
  status: r,
  id: s,
  "aria-describedby": a,
  "aria-invalid": i
}) {
  const o = typeof t.value == "number" && Number.isFinite(t.value) ? t.value : 0, l = r ?? (n ? { type: "error" } : void 0);
  return /* @__PURE__ */ c(
    Ih,
    {
      id: s,
      "aria-describedby": a,
      "aria-invalid": i,
      label: e.label,
      hideLabel: !0,
      value: o,
      onChange: (d) => t.onChange(d),
      onBlur: t.onBlur,
      units: e.units,
      fields: e.fields,
      status: l,
      disabled: e.disabled,
      readonly: e.readonly,
      size: e.size
    }
  );
}
function Gp(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Kp({
  entry: e,
  useUpload: t,
  onUploadComplete: n,
  onRemove: r,
  onError: s,
  disabled: a,
  translations: i
}) {
  const o = !!e.file, l = t?.(), d = l?.upload, u = l?.cancelUpload, f = l?.progress ?? 0, h = l?.status ?? "idle", [m, g] = ee(null), b = H(!1), p = L(async () => {
    if (!(!o || !e.file || !d) && !b.current) {
      b.current = !0;
      try {
        const C = await d(e.file);
        C.type === "success" ? n(C.value) : r();
      } catch {
        const C = i.uploadFailed;
        g(C), s(C);
      }
    }
  }, [
    o,
    e.file,
    d,
    n,
    r,
    s,
    i
  ]);
  ie(() => {
    o && p();
  }, [o, p]);
  const S = L(() => {
    o && (h === "uploading" || h === "processing") && u?.(), r();
  }, [o, h, u, r]), v = o && (h === "uploading" || h === "processing"), k = Math.round(f * 100), _ = e.file ?? {
    name: e.initialFile?.name ?? "",
    type: e.initialFile?.type ?? ""
  }, y = e.file?.name ?? e.initialFile?.name ?? "", w = e.file?.size ?? e.initialFile?.size;
  return /* @__PURE__ */ D(
    "div",
    {
      className: Q(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ c(jd, { file: _, size: "md" }),
        /* @__PURE__ */ D("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ c("span", { className: "truncate text-base font-medium text-f1-foreground", children: y }),
          /* @__PURE__ */ c("span", { className: "text-sm text-f1-foreground-secondary", children: m || (v ? h === "processing" ? i.processing : `${i.uploading} ${k}%` : w != null ? Gp(w) : null) })
        ] }),
        !a && /* @__PURE__ */ c(
          Me,
          {
            variant: "ghost",
            size: "sm",
            label: i.remove,
            onClick: S,
            icon: ir,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const Xp = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function ta(e) {
  return Xp.has(e) ? `${e}/*` : e;
}
const Ui = {
  "application/pdf": "PDF",
  "application/msword": "DOC",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
  "application/vnd.ms-excel": "XLS",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
  "application/vnd.ms-powerpoint": "PPT",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
  "application/zip": "ZIP",
  "application/json": "JSON",
  "text/plain": "TXT",
  "text/csv": "CSV",
  "text/html": "HTML",
  "text/markdown": "Markdown",
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/gif": "GIF",
  "image/webp": "WebP",
  "image/svg+xml": "SVG",
  "image/heic": "HEIC",
  "image/bmp": "BMP",
  "image/tiff": "TIFF",
  "video/mp4": "MP4",
  "video/webm": "WebM",
  "video/quicktime": "MOV",
  "audio/mpeg": "MP3",
  "audio/ogg": "OGG",
  "audio/wav": "WAV"
}, Wi = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function Yp(e) {
  if (!e || e.length === 0) return;
  const t = [];
  for (const n of e) {
    const r = ta(n);
    if (Wi[r])
      t.push(Wi[r]);
    else if (Ui[r])
      t.push(Ui[r]);
    else {
      const s = r.split("/")[1];
      s && t.push(s.toUpperCase());
    }
  }
  return t.length > 0 ? t.join(", ") : void 0;
}
function Jp({
  isDragOver: e,
  hasCriticalStatus: t,
  statusType: n
}) {
  return e ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t ? "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10" : n === "warning" ? "border-f1-border-warning-bold bg-f1-background" : n === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function eg(e, t, n) {
  if (!e?.length) return [];
  const r = n ? Array.isArray(t) ? t : [] : typeof t == "string" && t ? [t] : [];
  if (r.length === 0) return [];
  const s = new Map(e.map((a) => [a.value, a]));
  return r.map((a) => s.get(a)).filter((a) => a != null).map((a) => ({
    key: `initial-${a.value}`,
    initialFile: a,
    value: a.value
  }));
}
function tg({
  field: e,
  formField: t,
  error: n,
  statusType: r,
  initialFiles: s
}) {
  const { forms: a } = Ce(), i = Ac(), o = i?.useUpload ?? e.useUpload, l = s ?? i?.initialFiles, d = wa(), u = H(null), [f, h] = ee(!1), m = e.multiple ?? !1, [g, b] = ee(
    () => eg(l, t.value, m)
  ), [p, S] = ee(null), v = a.file, k = g.length > 0, _ = m || !k, y = e.accept ? e.accept.map(ta).join(",") : void 0, w = z(
    () => Yp(e.accept),
    [e.accept]
  ), C = L(
    (R) => e.accept && !e.accept.some((B) => {
      const U = ta(B);
      return U.endsWith("/*") ? R.type.startsWith(U.replace("/*", "/")) : R.type === U;
    }) ? v.invalidFileType.replace(
      "{{types}}",
      w ?? ""
    ) : e.maxSizeMB && R.size > e.maxSizeMB * 1024 * 1024 ? v.fileTooLarge.replace(
      "{{maxSize}}",
      String(e.maxSizeMB)
    ) : null,
    [e.accept, e.maxSizeMB, v, w]
  ), A = L(
    (R) => {
      S(null);
      const B = m ? R : [R[0]];
      for (const U of B) {
        const me = C(U);
        if (me) {
          S(me);
          continue;
        }
        o || console.warn(
          "[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config."
        );
        const se = `${U.name}-${U.size}-${Date.now()}-${Math.random()}`;
        b((ge) => m ? [...ge, { key: se, file: U }] : [{ key: se, file: U }]);
      }
    },
    [m, C, o]
  ), O = L(
    (R) => {
      R.preventDefault(), R.stopPropagation(), e.disabled || h(!0);
    },
    [e.disabled]
  ), M = L((R) => {
    R.preventDefault(), R.stopPropagation(), h(!1);
  }, []), T = L(
    (R) => {
      if (R.preventDefault(), R.stopPropagation(), h(!1), e.disabled) return;
      const B = Array.from(R.dataTransfer.files);
      B.length > 0 && A(B);
    },
    [e.disabled, A]
  ), I = L(
    (R) => {
      const B = Array.from(R.target.files ?? []);
      B.length > 0 && A(B), u.current && (u.current.value = "");
    },
    [A]
  ), N = L(() => {
    e.disabled || u.current?.click();
  }, [e.disabled]), P = L(
    (R) => {
      (R.key === "Enter" || R.key === " ") && (R.preventDefault(), N());
    },
    [N]
  ), G = L(
    (R, B) => {
      if (b(
        (U) => U.map((me) => me.key === R ? { ...me, value: B } : me)
      ), m) {
        const U = Array.isArray(t.value) ? t.value : [];
        t.onChange([...U, B]);
      } else
        t.onChange(B);
    },
    [m, t]
  ), X = L(
    (R) => {
      const B = g.find((U) => U.key === R);
      if (b((U) => U.filter((me) => me.key !== R)), B?.value)
        if (m) {
          const U = Array.isArray(t.value) ? t.value : [];
          t.onChange(U.filter((me) => me !== B.value));
        } else
          t.onChange(void 0);
      else m || t.onChange(void 0);
      t.onBlur();
    },
    [g, m, t]
  ), te = L((R, B) => {
    b(
      (U) => U.map(
        (me) => me.key === R ? { ...me, error: B } : me
      )
    );
  }, []), fe = f ? v.dropzoneActive : e.description ?? (m ? v.dropzoneMultiple : v.dropzone), q = !!(n || p || r === "error"), le = q || r === "warning" || r === "info", ue = Jp({
    isDragOver: f,
    hasCriticalStatus: q,
    statusType: r
  });
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    _ && /* @__PURE__ */ D(
      "div",
      {
        role: "button",
        tabIndex: e.disabled ? -1 : 0,
        onDragOver: O,
        onDragLeave: M,
        onDrop: T,
        onClick: N,
        onKeyDown: P,
        "aria-disabled": e.disabled,
        className: Q(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          ue,
          !e.disabled && !f && !le && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          e.disabled && "cursor-not-allowed opacity-50",
          Xr("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ c(Le, { icon: fa, size: "lg" }) }),
          /* @__PURE__ */ D("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ c("span", { className: "text-center text-base text-f1-foreground-secondary", children: fe }),
            !f && w && /* @__PURE__ */ c("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: v.acceptedTypes.replace(
              "{{types}}",
              w
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "input",
      {
        ref: u,
        id: d,
        type: "file",
        accept: y,
        multiple: m,
        onChange: I,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    p && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-critical", children: p }),
    g.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: g.map((R) => /* @__PURE__ */ c(
      Kp,
      {
        entry: R,
        useUpload: R.file ? o : void 0,
        onUploadComplete: (B) => G(R.key, B),
        onRemove: () => X(R.key),
        onError: (B) => te(R.key, B),
        disabled: e.disabled,
        translations: {
          remove: v.remove,
          uploading: v.uploading,
          processing: v.processing,
          uploadFailed: v.uploadFailed
        }
      },
      R.key
    )) })
  ] });
}
function ng({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    Ao,
    {
      ...t,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      step: e.step,
      min: e.min,
      max: e.max,
      maxDecimals: e.maxDecimals,
      units: e.units,
      locale: e.locale ?? "en-US",
      value: t.value != null ? Number(t.value) : void 0,
      onChange: (a) => t.onChange(a),
      size: on,
      hideLabel: !0,
      hint: "",
      error: n,
      status: s,
      loading: r,
      clearable: e.clearable
    }
  );
}
function rg({
  field: e,
  formField: t,
  error: n,
  loading: r
}) {
  const s = t.value;
  return /* @__PURE__ */ c(
    Ou,
    {
      ...t,
      title: e.label,
      placeholder: e.placeholder ?? "",
      maxCharacters: e.maxCharacters,
      mentionsConfig: e.mentionsConfig,
      height: e.height,
      plainHtmlMode: e.plainHtmlMode,
      disabled: e.disabled,
      error: n,
      loading: r,
      initialEditorState: {
        content: s?.value ?? ""
      },
      onChange: (a) => {
        t.onChange({
          value: a.value,
          mentionIds: a.mentionIds
        });
      }
    }
  );
}
function sg({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = {
    label: e.label,
    placeholder: e.placeholder,
    disabled: e.disabled,
    options: e.options,
    showSearchBox: e.showSearchBox,
    searchBoxPlaceholder: e.searchBoxPlaceholder,
    icon: e.icon,
    name: t.name,
    onBlur: t.onBlur,
    error: n,
    status: s,
    loading: r,
    size: on,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    bn,
    {
      ...a,
      multiple: !0,
      clearable: e.clearable,
      value: t.value ?? [],
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : e.clearable ? /* @__PURE__ */ c(
    bn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    bn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  );
}
function ag({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = {
    label: e.label,
    placeholder: e.placeholder,
    disabled: e.disabled,
    source: e.source,
    mapOptions: e.mapOptions,
    showSearchBox: e.showSearchBox,
    searchBoxPlaceholder: e.searchBoxPlaceholder,
    icon: e.icon,
    name: t.name,
    onBlur: t.onBlur,
    error: n,
    status: s,
    loading: r,
    size: on,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    bn,
    {
      ...a,
      multiple: !0,
      clearable: e.clearable,
      value: t.value ?? [],
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : e.clearable ? /* @__PURE__ */ c(
    bn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    bn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  );
}
function ig(e) {
  const { field: t } = e;
  return "source" in t && t.source !== void 0 && t.mapOptions !== void 0 ? /* @__PURE__ */ c(
    ag,
    {
      ...e,
      field: t
    }
  ) : "options" in t && t.options !== void 0 ? /* @__PURE__ */ c(
    sg,
    {
      ...e,
      field: t
    }
  ) : null;
}
function og(e) {
  const t = st(e);
  return Oe(t, "ZodLiteral") && t._def.value === !0;
}
function lg({
  field: e,
  formField: t
}) {
  const n = e.validation && og(e.validation);
  return /* @__PURE__ */ c(
    Eo,
    {
      ...t,
      title: e.label,
      disabled: e.disabled,
      required: n,
      checked: !!t.value,
      onCheckedChange: t.onChange,
      hideLabel: !0
    }
  );
}
const cg = {
  email: "name@example.com"
}, dg = {
  url: ma,
  email: $d
};
function ug({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = e.inputType ?? "text", i = e.placeholder ?? cg[a] ?? void 0, o = dg[a];
  return /* @__PURE__ */ c(
    ua,
    {
      ...t,
      label: e.label,
      type: a,
      placeholder: i,
      disabled: e.disabled,
      value: t.value != null ? String(t.value) : "",
      size: on,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      icon: o,
      clearable: e.clearable
    }
  );
}
function fg({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    Ru,
    {
      ...t,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      rows: e.rows,
      maxLength: e.maxLength,
      maxHeight: e.maxHeight,
      value: t.value != null ? String(t.value) : "",
      size: on,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function na({
  field: e,
  formField: t,
  fieldState: n,
  fieldStatus: r,
  isSubmitting: s,
  isRequired: a,
  values: i,
  initialFiles: o,
  isFormLoading: l
}) {
  const d = !!n.error, { isValidating: u } = n, f = za(e.disabled, i) || s || !!l, h = {
    error: d,
    loading: !!l
  }, m = d ? { type: "error" } : r ? { type: r.type } : void 0;
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ c(
        ug,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "number":
      return /* @__PURE__ */ c(
        ng,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "duration":
      return /* @__PURE__ */ c(
        Qp,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: d,
          status: m
        }
      );
    case "textarea":
      return /* @__PURE__ */ c(
        fg,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "select":
      return /* @__PURE__ */ c(
        ig,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "checkbox":
      return /* @__PURE__ */ c(
        Vp,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "switch":
      return /* @__PURE__ */ c(
        lg,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "date":
      return /* @__PURE__ */ c(
        Ec,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: gn(e.minDate, i),
            maxDate: gn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "time":
      return /* @__PURE__ */ c(
        Ic,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: gn(e.minDate, i),
            maxDate: gn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "datetime":
      return /* @__PURE__ */ c(
        Zp,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: gn(e.minDate, i),
            maxDate: gn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "daterange":
      return /* @__PURE__ */ c(
        Hp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "richtext":
      return /* @__PURE__ */ c(
        rg,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h
        }
      );
    case "file":
      return /* @__PURE__ */ c(
        tg,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: d,
          statusType: m?.type,
          initialFiles: o
        }
      );
    case "cardSelect":
      return /* @__PURE__ */ c(
        Pp,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "custom":
      return /* @__PURE__ */ c(
        jp,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: n.error?.message,
          isValidating: u,
          required: a
        }
      );
    default:
      return null;
  }
}
function ra(e) {
  return Oe(e, "ZodOptional") || Oe(e, "ZodNullable") || Oe(e, "ZodDefault") && ra(e._def.innerType);
}
const mg = /* @__PURE__ */ new Set([
  "min",
  // .min(n) where n >= 1
  "email",
  // .email()
  "url",
  // .url()
  "uuid",
  // .uuid()
  "cuid",
  // .cuid()
  "cuid2",
  // .cuid2()
  "ulid",
  // .ulid()
  "regex",
  // .regex() - typically requires content
  "includes",
  // .includes() - requires the substring
  "startsWith",
  // .startsWith()
  "endsWith"
  // .endsWith()
]);
function Hi(e) {
  const t = st(e);
  return Oe(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : mg.has(r.kind)) : !1;
}
const hg = /* @__PURE__ */ new Set([
  "select",
  "date",
  "time",
  "datetime",
  "daterange",
  "file"
]);
function hs(e, t) {
  if (ra(e))
    return !1;
  const n = st(e);
  if (Oe(n, "ZodString"))
    return t && hg.has(t) ? !0 : Hi(e);
  if (Oe(n, "ZodObject")) {
    const r = n._def.shape();
    if (r && "value" in r) {
      if (ra(r.value))
        return !1;
      if (Oe(st(r.value), "ZodString"))
        return Hi(r.value);
    }
  }
  return !0;
}
function pg(e) {
  return e != null && typeof e == "object" && "_type" in e && e._type === "select-config";
}
function gg({
  field: e,
  formField: t,
  fieldState: n,
  isSubmitting: r,
  isRequired: s,
  values: a,
  isFormLoading: i,
  renderCustomField: o
}) {
  if (e.customFieldName && e.type !== "custom") {
    if (!o)
      throw new Error(
        `Field "${e.id}" has customFieldName "${e.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      );
    const l = o({
      id: e.id,
      label: e.label,
      placeholder: e.placeholder,
      value: t.value,
      onChange: t.onChange,
      onBlur: t.onBlur,
      error: void 0,
      isValidating: n.isValidating,
      disabled: typeof e.disabled == "boolean" ? e.disabled : void 0,
      required: s,
      customFieldName: e.customFieldName,
      config: void 0,
      fieldType: e.type
    });
    if (pg(l)) {
      const d = { ...e, ...l, type: "select" };
      return na({
        field: d,
        formField: t,
        fieldState: n,
        fieldStatus: e.status,
        isSubmitting: r,
        isRequired: s,
        values: a,
        isFormLoading: i
      });
    }
    return /* @__PURE__ */ c(Ke, { children: l });
  }
  return na({
    field: e,
    formField: t,
    fieldState: n,
    fieldStatus: e.status,
    isSubmitting: r,
    isRequired: s,
    values: a,
    isFormLoading: i
  });
}
function Et({ field: e, sectionId: t }) {
  const n = rn(), r = n.watch(), { isSubmitting: s } = n.formState, {
    formName: a,
    isLoading: i,
    renderCustomField: o
  } = Za(), { forms: l } = Ce(), d = za(e.disabled, r), u = H(d);
  ie(() => {
    const p = u.current;
    if (u.current = d, !p && d && e.resetOnDisable) {
      const S = n.formState.defaultValues?.[e.id];
      n.setValue(e.id, S, { shouldValidate: !1 });
    }
  }, [d, e.resetOnDisable, e.id, n]);
  const f = !e.renderIf || fs(e.renderIf, r), h = e.type !== "checkbox" && e.type !== "custom" && !(e.type === "cardSelect" && e.hideLabel), m = e.type !== "custom", g = e.validation && hs(e.validation, e.type), b = un(a, t, e.id);
  return f ? /* @__PURE__ */ c(
    Us,
    {
      control: n.control,
      name: e.id,
      render: ({ field: p, fieldState: S }) => /* @__PURE__ */ D(Va, { id: b, className: "scroll-mt-4", children: [
        h && /* @__PURE__ */ D(
          "label",
          {
            htmlFor: e.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              e.label,
              g && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ c(vc, { children: gg({
          field: e,
          formField: p,
          fieldState: S,
          isSubmitting: s,
          isRequired: g,
          values: r,
          isFormLoading: i,
          renderCustomField: o
        }) }),
        e.helpText && /* @__PURE__ */ c(bc, { children: e.helpText }),
        "moreInfoLink" in e && e.moreInfoLink && /* @__PURE__ */ c(
          zd,
          {
            href: e.moreInfoLink.href,
            target: "_blank",
            variant: "link",
            children: e.moreInfoLink.label ?? l.moreInformation
          }
        ),
        (() => {
          if (!e.alert) return null;
          const v = typeof e.alert == "function" ? e.alert({ fieldValue: p.value, values: r }) : e.alert;
          return v ? /* @__PURE__ */ c(Io, { ...v, variant: v.variant ?? "info" }) : null;
        })(),
        m && !S.error && /* @__PURE__ */ c(da, { status: e.status }),
        m && /* @__PURE__ */ c(
          ds,
          {
            fallback: g ? l.validation.required : l.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ c(
    Us,
    {
      control: n.control,
      name: e.id,
      render: () => /* @__PURE__ */ c("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function Dn({ row: e, sectionId: t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `flex xs:flex-row flex-col items-start ${qa} [&>*]:flex-1`,
      children: e.fields.map((n) => /* @__PURE__ */ c(Et, { field: n, sectionId: t }, n.id))
    }
  );
}
function Qi(e, t) {
  const n = e.renderIf;
  return !n || typeof n == "function" ? null : "fieldId" in n && "equalsTo" in n && n.equalsTo === !0 && t.has(n.fieldId) ? n.fieldId : null;
}
function br(e, t) {
  const n = e.renderIf;
  return !n || typeof n == "function" ? null : "fieldId" in n && "equalsTo" in n && typeof n.equalsTo == "string" && t.has(n.fieldId) ? { fieldId: n.fieldId, equalsTo: n.equalsTo } : null;
}
function Ua(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const [r, s] of e)
    n.set(
      r,
      /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: s.map(
        (a) => "type" in a && a.type === "row" ? /* @__PURE__ */ c(
          Dn,
          {
            row: a,
            sectionId: t
          },
          a.fields.map((i) => i.id).join("-")
        ) : /* @__PURE__ */ c(
          Et,
          {
            field: a,
            sectionId: t
          },
          a.id
        )
      ) }, r)
    );
  return n;
}
function Wa(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const r = e[n];
    if (r.type === "field" && r.field.type === "switch") {
      const s = [];
      if (r.field.grouped === !1)
        s.push(r.field), n++;
      else
        for (; n < e.length && e[n].type === "field" && e[n].field.type === "switch" && e[n].field.grouped !== !1; )
          s.push(e[n].field), n++;
      const a = new Set(s.map((d) => d.id)), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (; n < e.length; ) {
        const d = e[n];
        if (d.type === "field" && d.field.type !== "switch") {
          const u = Qi(d.field, a);
          if (u) {
            d.field.type === "cardSelect" && o.add(d.field.id);
            const h = i.get(u) ?? [];
            h.push(d.field), i.set(u, h), n++;
            continue;
          }
          const f = br(
            d.field,
            o
          );
          if (f) {
            l.has(f.fieldId) || l.set(f.fieldId, /* @__PURE__ */ new Map());
            const h = l.get(
              f.fieldId
            ), m = h.get(f.equalsTo) ?? [];
            m.push(d.field), h.set(f.equalsTo, m), n++;
            continue;
          }
          break;
        } else if (d.type === "row") {
          const u = d.fields.map(
            (g) => Qi(g, a)
          ), f = u[0];
          if (f && u.every((g) => g === f)) {
            const g = i.get(f) ?? [];
            g.push(d), i.set(f, g), n++;
            continue;
          }
          const h = d.fields.map(
            (g) => br(g, o)
          ), m = h[0];
          if (m && h.every(
            (g) => g && g.fieldId === m.fieldId && g.equalsTo === m.equalsTo
          )) {
            l.has(m.fieldId) || l.set(m.fieldId, /* @__PURE__ */ new Map());
            const g = l.get(
              m.fieldId
            ), b = g.get(m.equalsTo) ?? [];
            b.push(d), g.set(m.equalsTo, b), n++;
            continue;
          }
          break;
        } else
          break;
      }
      t.push({
        type: "switchGroup",
        fields: s,
        dependentFields: i.size > 0 ? i : void 0,
        cardSelectDependentFields: l.size > 0 ? l : void 0
      });
    } else if (r.type === "field")
      if (r.field.type === "cardSelect") {
        const s = r.field.id, a = /* @__PURE__ */ new Set([s]), i = /* @__PURE__ */ new Map();
        for (n++; n < e.length; ) {
          const o = e[n];
          if (o.type === "field") {
            const l = br(o.field, a);
            if (l) {
              const d = i.get(l.equalsTo) ?? [];
              d.push(o.field), i.set(l.equalsTo, d), n++;
              continue;
            }
          } else if (o.type === "row") {
            const l = o.fields.map(
              (u) => br(u, a)
            ), d = l[0];
            if (d && l.every(
              (u) => u && u.fieldId === d.fieldId && u.equalsTo === d.equalsTo
            )) {
              const u = i.get(d.equalsTo) ?? [];
              u.push(o), i.set(d.equalsTo, u), n++;
              continue;
            }
          }
          break;
        }
        t.push({
          type: "field",
          item: r,
          cardSelectDependentFields: i.size > 0 ? i : void 0
        });
      } else
        t.push({ type: "field", item: r }), n++;
    else r.type === "row" ? (t.push({ type: "row", item: r, index: n }), n++) : (r.type === "section" && t.push({ type: "section", item: r }), n++);
  }
  return t;
}
function Fs(e) {
  const t = st(e);
  if (!Oe(t, "ZodDate"))
    return {};
  const n = t._def.checks || [];
  let r, s;
  for (const a of n)
    a.kind === "min" ? r = new Date(a.value) : a.kind === "max" && (s = new Date(a.value));
  return { minDate: r, maxDate: s };
}
function vg(e) {
  const t = st(e);
  if (!Oe(t, "ZodNumber"))
    return { isInteger: !1 };
  const n = t._def.checks || [];
  let r, s, a = !1;
  for (const i of n)
    i.kind === "min" ? r = i.value : i.kind === "max" ? s = i.value : i.kind === "int" && (a = !0);
  return { min: r, max: s, isInteger: a };
}
function bg(e) {
  const t = st(e);
  return Oe(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "email") : !1;
}
function yg(e) {
  const t = st(e);
  return Oe(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "url") : !1;
}
function Gi(e) {
  return bg(e) ? "email" : yg(e) ? "url" : "text";
}
function xg(e) {
  const t = st(e);
  if (!Oe(t, "ZodString"))
    return {};
  const n = t._def.checks || [];
  let r;
  for (const s of n)
    s.kind === "max" && (r = s.value);
  return { maxLength: r };
}
function Ki(e, t, n, r) {
  const s = {
    id: e,
    label: n.label,
    placeholder: n.placeholder,
    helpText: n.helpText,
    status: n.status,
    disabled: n.disabled,
    resetOnDisable: n.resetOnDisable,
    alert: n.alert,
    customFieldName: "customFieldName" in n ? n.customFieldName : void 0,
    validation: t
  }, a = !hs(t, r);
  switch (r) {
    case "text": {
      const i = "inputType" in n && n.inputType ? n.inputType : Gi(t);
      return {
        ...s,
        type: "text",
        inputType: i,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "money":
    case "percentage":
    case "number": {
      const { min: i, max: o, isInteger: l } = vg(t), d = r === "percentage" ? "%" : r === "money" && "currency" in n ? n.currency : void 0;
      return {
        ...s,
        type: "number",
        step: "step" in n ? n.step : void 0,
        min: i,
        max: o,
        maxDecimals: l ? 0 : void 0,
        units: d,
        locale: "locale" in n ? n.locale : void 0,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "duration":
      return {
        ...s,
        type: "duration",
        units: "units" in n ? n.units : void 0,
        fields: "fields" in n ? n.fields : void 0,
        readonly: "readonly" in n ? n.readonly : void 0,
        size: "size" in n ? n.size : void 0,
        renderIf: n.renderIf
      };
    case "textarea": {
      const { maxLength: i } = xg(t);
      return {
        ...s,
        type: "textarea",
        rows: "rows" in n ? n.rows : void 0,
        maxHeight: "maxHeight" in n ? n.maxHeight : void 0,
        maxLength: i,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "select": {
      const i = "source" in n && n.source;
      return {
        ...s,
        type: "select",
        // Only include options if not using source
        ...i ? {
          source: n.source,
          mapOptions: "mapOptions" in n ? n.mapOptions : void 0
        } : {
          options: "options" in n ? n.options : []
        },
        multiple: "multiple" in n ? n.multiple : void 0,
        clearable: a,
        showSearchBox: "showSearchBox" in n ? n.showSearchBox : void 0,
        searchBoxPlaceholder: "searchBoxPlaceholder" in n ? n.searchBoxPlaceholder : void 0,
        renderIf: n.renderIf
      };
    }
    case "checkbox":
      return {
        ...s,
        type: "checkbox",
        moreInfoLink: "moreInfoLink" in n ? n.moreInfoLink : void 0,
        renderIf: n.renderIf
      };
    case "switch":
      return {
        ...s,
        type: "switch",
        moreInfoLink: "moreInfoLink" in n ? n.moreInfoLink : void 0,
        grouped: "grouped" in n ? n.grouped : void 0,
        renderIf: n.renderIf
      };
    case "date": {
      const i = Fs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
      return {
        ...s,
        type: "date",
        granularities: "granularities" in n ? n.granularities : void 0,
        minDate: o ?? i.minDate,
        maxDate: l ?? i.maxDate,
        presets: "presets" in n ? n.presets : void 0,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "time": {
      const i = Fs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
      return {
        ...s,
        type: "time",
        minDate: o ?? i.minDate,
        maxDate: l ?? i.maxDate,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "datetime": {
      const i = Fs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
      return {
        ...s,
        type: "datetime",
        minDate: o ?? i.minDate,
        maxDate: l ?? i.maxDate,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "daterange":
      return {
        ...s,
        type: "daterange",
        fromLabel: "fromLabel" in n ? n.fromLabel : void 0,
        toLabel: "toLabel" in n ? n.toLabel : void 0,
        granularities: "granularities" in n ? n.granularities : void 0,
        presets: "presets" in n ? n.presets : void 0,
        clearable: a,
        renderIf: n.renderIf
      };
    case "richtext":
      return {
        ...s,
        type: "richtext",
        maxCharacters: "maxCharacters" in n ? n.maxCharacters : void 0,
        mentionsConfig: "mentionsConfig" in n ? n.mentionsConfig : void 0,
        height: "height" in n ? n.height : void 0,
        plainHtmlMode: "plainHtmlMode" in n ? n.plainHtmlMode : void 0,
        renderIf: n.renderIf
      };
    case "file":
      return {
        ...s,
        type: "file",
        accept: "accept" in n ? n.accept : void 0,
        maxSizeMB: "maxSizeMB" in n ? n.maxSizeMB : void 0,
        multiple: "multiple" in n ? n.multiple : void 0,
        description: "description" in n ? n.description : void 0,
        useUpload: "useUpload" in n ? n.useUpload : void 0,
        renderIf: n.renderIf
      };
    case "cardSelect":
      return {
        ...s,
        type: "cardSelect",
        options: "options" in n ? n.options : [],
        hideLabel: "hideLabel" in n ? n.hideLabel : void 0,
        grouped: "grouped" in n ? n.grouped : void 0,
        renderIf: n.renderIf
      };
    case "custom":
      return {
        ...s,
        type: "custom",
        render: "render" in n ? n.render : void 0,
        fieldConfig: "fieldConfig" in n ? n.fieldConfig : void 0,
        renderIf: n.renderIf
      };
    default:
      return {
        ...s,
        type: "text",
        inputType: Gi(t),
        renderIf: n.renderIf
      };
  }
}
function Qr(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.length; r++) {
    if (n.has(r)) continue;
    const s = e[r], a = s.config.row;
    if (a) {
      const i = [];
      for (let l = r; l < e.length; l++)
        e[l].config.row === a && (i.push(e[l]), n.add(l));
      i.sort((l, d) => l.position - d.position);
      const o = {
        type: "row",
        fields: i.map(
          (l) => Ki(l.id, l.schema, l.config, l.fieldType)
        )
      };
      t.push(o);
    } else {
      n.add(r);
      const i = Ki(
        s.id,
        s.schema,
        s.config,
        s.fieldType
      );
      t.push({ type: "field", field: i });
    }
  }
  return t;
}
function Oc(e) {
  const t = e.shape, n = [], r = Object.entries(t);
  for (let s = 0; s < r.length; s++) {
    const [a, i] = r[s], o = an(i);
    if (o) {
      const l = Nc(i, o);
      n.push({
        id: a,
        schema: i,
        config: o,
        fieldType: l,
        position: s
      });
    }
  }
  return n;
}
function Rc(e, t) {
  return z(() => {
    const n = sn(e), r = Oc(n), s = [], a = {};
    for (const l of r) {
      const d = l.config.section;
      d ? (a[d] || (a[d] = []), a[d].push(l)) : s.push(l);
    }
    s.sort((l, d) => l.position - d.position);
    for (const l of Object.keys(a))
      a[l].sort((d, u) => d.position - u.position);
    const i = [];
    i.push(...Qr(s));
    const o = t ? Object.keys(t).filter((l) => a[l]) : Object.keys(a);
    for (const l of o) {
      const d = t?.[l], u = a[l], f = {
        id: l,
        type: "section",
        section: {
          title: d?.title ?? l,
          description: d?.description,
          withInset: d?.withInset,
          renderIf: d?.renderIf,
          action: d?.action,
          fields: Qr(u)
        }
      };
      i.push(f);
    }
    return i;
  }, [e, t]);
}
function Uy(e, t) {
  const n = sn(e), r = Oc(n), s = [], a = {};
  for (const l of r) {
    const d = l.config.section;
    d ? (a[d] || (a[d] = []), a[d].push(l)) : s.push(l);
  }
  s.sort((l, d) => l.position - d.position);
  for (const l of Object.keys(a))
    a[l].sort((d, u) => d.position - u.position);
  const i = [];
  i.push(...Qr(s));
  const o = t ? Object.keys(t).filter((l) => a[l]) : Object.keys(a);
  for (const l of o) {
    const d = t?.[l], u = a[l], f = {
      id: l,
      type: "section",
      section: {
        title: d?.title ?? l,
        description: d?.description,
        withInset: d?.withInset,
        renderIf: d?.renderIf,
        action: d?.action,
        fields: Qr(u)
      }
    };
    i.push(f);
  }
  return i;
}
function Lc(e) {
  const { validation: t } = e.forms;
  return (n, r) => {
    switch (n.code) {
      case j.invalid_type:
        return n.received === "undefined" || n.received === "null" ? { message: t.required } : { message: t.invalidType };
      case j.invalid_string:
        if (n.validation === "email")
          return { message: t.string.email };
        if (n.validation === "url")
          return { message: t.string.url };
        break;
      case j.too_small:
        if (n.type === "string")
          return n.minimum === 1 ? { message: t.required } : {
            message: t.string.min.replace(
              "{{min}}",
              String(n.minimum)
            )
          };
        if (n.type === "number")
          return n.minimum === 0 && !n.inclusive ? { message: t.number.positive } : {
            message: t.number.min.replace(
              "{{min}}",
              String(n.minimum)
            )
          };
        if (n.type === "array")
          return {
            message: t.array.min.replace(
              "{{min}}",
              String(n.minimum)
            )
          };
        if (n.type === "date")
          return {
            message: t.date.min.replace(
              "{{min}}",
              String(n.minimum)
            )
          };
        break;
      case j.too_big:
        if (n.type === "string")
          return {
            message: t.string.max.replace(
              "{{max}}",
              String(n.maximum)
            )
          };
        if (n.type === "number")
          return n.maximum === 0 && !n.inclusive ? { message: t.number.negative } : {
            message: t.number.max.replace(
              "{{max}}",
              String(n.maximum)
            )
          };
        if (n.type === "array")
          return {
            message: t.array.max.replace(
              "{{max}}",
              String(n.maximum)
            )
          };
        if (n.type === "date")
          return {
            message: t.date.max.replace(
              "{{max}}",
              String(n.maximum)
            )
          };
        break;
      case j.invalid_date:
        return { message: t.date.invalid };
      case j.not_multiple_of:
        if (n.multipleOf === 1)
          return { message: t.number.integer };
        break;
      case j.invalid_literal:
        if (n.expected === !0)
          return { message: t.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function Xi(e) {
  const t = st(e);
  return Oe(t, "ZodLiteral") && t._def.value === !0;
}
function Ha({
  fields: e,
  dependentFields: t,
  cardSelectDependentFields: n,
  sectionId: r
}) {
  const s = rn(), { formName: a } = Za(), { watch: i, setValue: o } = s, { isSubmitting: l } = s.formState, d = i(), u = z(
    () => e.filter(
      (_) => !_.renderIf || fs(_.renderIf, d)
    ),
    [e, d]
  ), f = z(
    () => Object.fromEntries(
      u.map((_) => [
        _.id,
        za(_.disabled, d) || l
      ])
    ),
    [u, l, d]
  ), h = H({});
  ie(() => {
    const _ = h.current, y = s.formState.defaultValues ?? {};
    for (const w of u) {
      if (!(w.id in _))
        continue;
      const C = _[w.id], A = f[w.id] ?? !1;
      if (!C && A && w.resetOnDisable) {
        const O = y[w.id] ?? !1;
        o(w.id, O, { shouldValidate: !1 });
      }
    }
    h.current = { ...f };
  }, [f, u, s, o]);
  const m = z(
    () => u.map((_) => ({
      value: _.id,
      title: _.label,
      description: _.helpText,
      disabled: f[_.id] ?? !1,
      required: !!(_.validation && Xi(_.validation)),
      moreInfoLink: _.moreInfoLink,
      selectedContent: t?.has(_.id) ? /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: t.get(_.id).map((y) => {
        if ("type" in y && y.type === "row")
          return /* @__PURE__ */ c(
            Dn,
            {
              row: y,
              sectionId: r
            },
            y.fields.map((C) => C.id).join("-")
          );
        const w = y;
        if (w.type === "cardSelect" && n?.has(w.id)) {
          const C = n.get(w.id), A = /* @__PURE__ */ new Map();
          for (const [O, M] of C)
            A.set(
              O,
              /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: M.map(
                (T) => "type" in T && T.type === "row" ? /* @__PURE__ */ c(
                  Dn,
                  {
                    row: T,
                    sectionId: r
                  },
                  T.fields.map((I) => I.id).join("-")
                ) : /* @__PURE__ */ c(
                  Et,
                  {
                    field: T,
                    sectionId: r
                  },
                  T.id
                )
              ) }, O)
            );
          return /* @__PURE__ */ c(fr.Provider, { value: A, children: /* @__PURE__ */ c(Et, { field: w, sectionId: r }) }, w.id);
        }
        return /* @__PURE__ */ c(Et, { field: w, sectionId: r }, w.id);
      }) }) : void 0
    })),
    [
      u,
      f,
      t,
      n,
      r
    ]
  ), g = z(
    () => u.filter((_) => d[_.id]).map((_) => _.id),
    [u, d]
  );
  if (u.length === 0)
    return null;
  const b = (_) => {
    for (const y of u) {
      const w = _.includes(y.id), C = !!d[y.id];
      w !== C && o(y.id, w, {
        shouldValidate: !0,
        shouldDirty: !0
      });
    }
  }, p = z(() => {
    const _ = [];
    for (const y of u) {
      if (!y.alert) continue;
      const w = typeof y.alert == "function" ? y.alert({ fieldValue: d[y.id], values: d }) : y.alert;
      w && _.push({ fieldId: y.id, props: w });
    }
    return _;
  }, [u, d]), { forms: S } = Ce(), v = u.filter((_) => _.validation && Xi(_.validation)).map((_) => {
    const y = s.formState.errors[_.id];
    return y ? { fieldId: _.id, label: _.label, message: y.message } : null;
  }).filter(
    (_) => _ !== null
  ), k = z(
    () => u.map((_) => ({
      fieldId: _.id,
      anchorId: un(a, r, _.id)
    })),
    [u, a, r]
  );
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ D(
      "div",
      {
        id: k[0]?.anchorId,
        className: "flex scroll-mt-4 flex-col gap-4",
        children: [
          k.slice(1).map(({ fieldId: _, anchorId: y }) => /* @__PURE__ */ c("span", { id: y, className: "hidden" }, _)),
          /* @__PURE__ */ c(
            Yo,
            {
              multiple: !0,
              isToggle: !0,
              grouped: !0,
              items: m,
              value: g,
              onChange: b
            }
          ),
          p.map(({ fieldId: _, props: y }) => /* @__PURE__ */ c(Io, { ...y, variant: y.variant ?? "info" }, _))
        ]
      }
    ),
    v.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: v.map((_) => /* @__PURE__ */ c(
      Us,
      {
        control: s.control,
        name: _.fieldId,
        render: () => /* @__PURE__ */ c(Va, { children: /* @__PURE__ */ c(ds, { fallback: S.validation.required }) })
      },
      _.fieldId
    )) })
  ] });
}
const wg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Sg(e) {
  const t = {};
  function n(r, s) {
    for (const [a, i] of Object.entries(r)) {
      if (a === "root") continue;
      const o = s ? `${s}.${a}` : a;
      if (i && typeof i == "object" && !Array.isArray(i)) {
        const l = i;
        "message" in l && typeof l.message == "string" ? t[o] = l.message : n(l, o);
      }
    }
  }
  return n(e, ""), t;
}
function Mc({
  formName: e,
  sectionId: t,
  schema: n,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: a,
  submitConfig: i,
  errorTriggerMode: o,
  className: l,
  initialFiles: d,
  formRef: u,
  renderCustomField: f,
  useUpload: h,
  isLoading: m
}) {
  const g = Ce(), b = Rc(n), p = i?.label ?? "Submit", S = i?.icon === null ? void 0 : i?.icon ?? Oo, v = i?.showSubmitWhenDirty ?? !1, k = i?.hideSubmitButton ?? !1, _ = z(() => Lc(g), [g]), y = wg[o], w = z(
    () => Dc(n, { errorMap: _ }),
    [n, _]
  ), C = uc({
    resolver: w,
    mode: y,
    defaultValues: s
  }), A = H(m);
  ie(() => {
    A.current && !m && s && C.reset(s), A.current = m;
  }, [m, s, C]);
  const O = C.formState.errors.root, { isSubmitting: M, isDirty: T } = C.formState, I = Object.keys(C.formState.errors).filter((q) => q !== "root").length > 0, N = H(null), P = L(
    async (q) => {
      const le = { ...q };
      for (const R of Object.keys(le))
        le[R] === null && (le[R] = void 0);
      const ue = await a(le);
      ue.success ? C.reset(q) : (ue.errors && Object.entries(ue.errors).forEach(([R, B]) => {
        C.setError(R, { message: B });
      }), ue.rootMessage && C.setError("root", { message: ue.rootMessage }));
    },
    [a, C]
  );
  ie(() => {
    if (u) {
      const q = {
        submit: () => new Promise((le, ue) => {
          C.handleSubmit(
            async (R) => {
              await P(R), le();
            },
            () => {
              ue(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => C.reset(),
        isDirty: () => C.formState.isDirty,
        getValues: () => C.getValues(),
        setValue: (le, ue, R) => {
          C.setValue(
            le,
            ue,
            {
              shouldValidate: R?.shouldValidate ?? !0,
              shouldDirty: R?.shouldDirty ?? !0
            }
          );
        },
        setValues: (le, ue) => {
          for (const [R, B] of Object.entries(le))
            C.setValue(
              R,
              B,
              {
                shouldValidate: !1,
                shouldDirty: ue?.shouldDirty ?? !0
              }
            );
          ue?.shouldValidate !== !1 && C.trigger();
        },
        trigger: async (le) => le ? C.trigger(le) : C.trigger(),
        getErrors: () => Sg(C.formState.errors),
        getFieldNames: () => Object.keys(C.getValues()),
        actionBar: {
          wiggle: () => {
          }
        },
        _setStateCallback: (le) => {
          N.current = le;
        }
      };
      u.current = q;
    }
    return () => {
      u && (u.current = null);
    };
  }, [u, C, P]), ie(() => {
    N.current && N.current({ isSubmitting: M, hasErrors: I });
  }, [M, I]);
  const G = Wa(b), X = z(
    () => ({
      formName: e,
      initialFiles: d,
      renderCustomField: f,
      isLoading: m,
      useUpload: h
    }),
    [e, d, f, m, h]
  ), te = r?.title ?? t, fe = r?.description;
  return /* @__PURE__ */ c(ms.Provider, { value: X, children: /* @__PURE__ */ c(hc, { ...C, children: /* @__PURE__ */ D(
    "form",
    {
      onSubmit: C.handleSubmit(P),
      className: Q("flex flex-col", l),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: Q(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ c(Jo, { title: te, description: fe ?? "" }),
              r?.action && /* @__PURE__ */ c(
                Me,
                {
                  label: r.action.label,
                  icon: r.action.icon,
                  onClick: r.action.onClick,
                  href: r.action.href,
                  variant: "outline",
                  size: "md"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: `flex flex-col ${qa}`, children: G.map((q, le) => {
          switch (q.type) {
            case "switchGroup":
              return /* @__PURE__ */ c(
                Ha,
                {
                  fields: q.fields,
                  dependentFields: q.dependentFields,
                  cardSelectDependentFields: q.cardSelectDependentFields,
                  sectionId: t
                },
                `switch-group-${le}`
              );
            case "field": {
              const ue = q.cardSelectDependentFields ? /* @__PURE__ */ c(
                fr.Provider,
                {
                  value: Ua(
                    q.cardSelectDependentFields,
                    t
                  ),
                  children: /* @__PURE__ */ c(
                    Et,
                    {
                      field: q.item.field,
                      sectionId: t
                    }
                  )
                }
              ) : /* @__PURE__ */ c(
                Et,
                {
                  field: q.item.field,
                  sectionId: t
                }
              );
              return /* @__PURE__ */ c(ce.Fragment, { children: ue }, q.item.field.id);
            }
            case "row":
              return /* @__PURE__ */ c(
                Dn,
                {
                  row: q.item,
                  sectionId: t
                },
                `row-${q.index}`
              );
            default:
              return null;
          }
        }) }),
        O && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: O.message }),
        !k && (!v || T) && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Me,
          {
            type: "submit",
            label: p,
            icon: S,
            loading: M,
            disabled: I || m
          }
        ) })
      ]
    }
  ) }) });
}
function kg({ section: e }) {
  const n = rn().watch(), { formName: r } = Za(), { title: s, description: a, withInset: i, renderIf: o, action: l, fields: d } = e.section, u = e.id;
  if (o && !fs(o, n))
    return null;
  const f = Wa(d), h = un(r, u);
  return /* @__PURE__ */ D("section", { id: h, className: "flex scroll-mt-4 flex-col", children: [
    /* @__PURE__ */ D(
      "div",
      {
        className: Q(
          "flex items-start justify-between py-5",
          i && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ c(Jo, { title: s, description: a ?? "" }),
          l && /* @__PURE__ */ c(
            Me,
            {
              label: l.label,
              icon: l.icon,
              onClick: l.onClick,
              href: l.href,
              variant: "outline",
              size: "md"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c("div", { className: `flex flex-col ${qa}`, children: f.map((m, g) => {
      if (m.type === "switchGroup")
        return /* @__PURE__ */ c(
          Ha,
          {
            fields: m.fields,
            dependentFields: m.dependentFields,
            cardSelectDependentFields: m.cardSelectDependentFields,
            sectionId: u
          },
          `switch-group-${g}`
        );
      if (m.type === "field") {
        const b = m.cardSelectDependentFields ? /* @__PURE__ */ c(
          fr.Provider,
          {
            value: Ua(
              m.cardSelectDependentFields,
              u
            ),
            children: /* @__PURE__ */ c(
              Et,
              {
                field: m.item.field,
                sectionId: u
              },
              m.item.field.id
            )
          }
        ) : /* @__PURE__ */ c(
          Et,
          {
            field: m.item.field,
            sectionId: u
          },
          m.item.field.id
        );
        return /* @__PURE__ */ c(ce.Fragment, { children: b }, m.item.field.id);
      }
      return m.type === "row" ? /* @__PURE__ */ c(
        Dn,
        {
          row: m.item,
          sectionId: u
        },
        `row-${m.index}`
      ) : null;
    }) })
  ] });
}
const _g = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), Cg = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
}, Ng = (e) => ({
  ...Cg,
  ...e
}), Dg = (e) => {
  const t = Ng(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath: n,
    propertyPath: void 0,
    seen: new Map(Object.entries(t.definitions).map(([r, s]) => [
      s._def,
      {
        def: s._def,
        path: [...t.basePath, t.definitionPath, r],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};
function Pc(e, t, n, r) {
  r?.errorMessages && n && (e.errorMessage = {
    ...e.errorMessage,
    [t]: n
  });
}
function Ae(e, t, n, r, s) {
  e[t] = n, Pc(e, t, r, s);
}
const Bc = (e, t) => {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++)
    ;
  return [(e.length - n).toString(), ...t.slice(n)].join("/");
};
function ut(e) {
  if (e.target !== "openAi")
    return {};
  const t = [
    ...e.basePath,
    e.definitionPath,
    e.openAiAnyTypeName
  ];
  return e.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: e.$refStrategy === "relative" ? Bc(t, e.currentPath) : t.join("/")
  };
}
function Fg(e, t) {
  const n = {
    type: "array"
  };
  return e.type?._def && e.type?._def?.typeName !== Z.ZodAny && (n.items = _e(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && Ae(n, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && Ae(n, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (Ae(n, "minItems", e.exactLength.value, e.exactLength.message, t), Ae(n, "maxItems", e.exactLength.value, e.exactLength.message, t)), n;
}
function Tg(e, t) {
  const n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? Ae(n, "minimum", r.value, r.message, t) : Ae(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), Ae(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? Ae(n, "maximum", r.value, r.message, t) : Ae(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), Ae(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        Ae(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function Ag() {
  return {
    type: "boolean"
  };
}
function Vc(e, t) {
  return _e(e.type._def, t);
}
const Eg = (e, t) => _e(e.innerType._def, t);
function jc(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((s, a) => jc(e, t, s))
    };
  switch (r) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return Ig(e, t);
  }
}
const Ig = (e, t) => {
  const n = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        Ae(
          n,
          "minimum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
      case "max":
        Ae(
          n,
          "maximum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
    }
  return n;
};
function Og(e, t) {
  return {
    ..._e(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Rg(e, t) {
  return t.effectStrategy === "input" ? _e(e.schema._def, t) : ut(t);
}
function Lg(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const Mg = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Pg(e, t) {
  const n = [
    _e(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    _e(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a);
  let r = t.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0;
  const s = [];
  return n.forEach((a) => {
    if (Mg(a))
      s.push(...a.allOf), a.unevaluatedProperties === void 0 && (r = void 0);
    else {
      let i = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: o, ...l } = a;
        i = l;
      } else
        r = void 0;
      s.push(i);
    }
  }), s.length ? {
    allOf: s,
    ...r
  } : void 0;
}
function Bg(e, t) {
  const n = typeof e.value;
  return n !== "bigint" && n !== "number" && n !== "boolean" && n !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : t.target === "openApi3" ? {
    type: n === "bigint" ? "integer" : n,
    enum: [e.value]
  } : {
    type: n === "bigint" ? "integer" : n,
    const: e.value
  };
}
let Ts;
const Dt = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (Ts === void 0 && (Ts = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Ts),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function $c(e, t) {
  const n = {
    type: "string"
  };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          Ae(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t);
          break;
        case "max":
          Ae(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Ft(n, "email", r.message, t);
              break;
            case "format:idn-email":
              Ft(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              tt(n, Dt.email, r.message, t);
              break;
          }
          break;
        case "url":
          Ft(n, "uri", r.message, t);
          break;
        case "uuid":
          Ft(n, "uuid", r.message, t);
          break;
        case "regex":
          tt(n, r.regex, r.message, t);
          break;
        case "cuid":
          tt(n, Dt.cuid, r.message, t);
          break;
        case "cuid2":
          tt(n, Dt.cuid2, r.message, t);
          break;
        case "startsWith":
          tt(n, RegExp(`^${As(r.value, t)}`), r.message, t);
          break;
        case "endsWith":
          tt(n, RegExp(`${As(r.value, t)}$`), r.message, t);
          break;
        case "datetime":
          Ft(n, "date-time", r.message, t);
          break;
        case "date":
          Ft(n, "date", r.message, t);
          break;
        case "time":
          Ft(n, "time", r.message, t);
          break;
        case "duration":
          Ft(n, "duration", r.message, t);
          break;
        case "length":
          Ae(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t), Ae(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "includes": {
          tt(n, RegExp(As(r.value, t)), r.message, t);
          break;
        }
        case "ip": {
          r.version !== "v6" && Ft(n, "ipv4", r.message, t), r.version !== "v4" && Ft(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          tt(n, Dt.base64url, r.message, t);
          break;
        case "jwt":
          tt(n, Dt.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && tt(n, Dt.ipv4Cidr, r.message, t), r.version !== "v4" && tt(n, Dt.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          tt(n, Dt.emoji(), r.message, t);
          break;
        case "ulid": {
          tt(n, Dt.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Ft(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              Ae(n, "contentEncoding", "base64", r.message, t);
              break;
            }
            case "pattern:zod": {
              tt(n, Dt.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          tt(n, Dt.nanoid, r.message, t);
      }
  return n;
}
function As(e, t) {
  return t.patternStrategy === "escape" ? jg(e) : e;
}
const Vg = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function jg(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Vg.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function Ft(e, t, n, r) {
  e.format || e.anyOf?.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...n && r.errorMessages && { errorMessage: { format: n } }
  })) : Ae(e, "format", t, n, r);
}
function tt(e, t, n, r) {
  e.pattern || e.allOf?.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Yi(t, r),
    ...n && r.errorMessages && { errorMessage: { pattern: n } }
  })) : Ae(e, "pattern", Yi(t, r), n, r);
}
function Yi(e, t) {
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const n = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
    // `.` matches newlines
  }, r = n.i ? e.source.toLowerCase() : e.source;
  let s = "", a = !1, i = !1, o = !1;
  for (let l = 0; l < r.length; l++) {
    if (a) {
      s += r[l], a = !1;
      continue;
    }
    if (n.i) {
      if (i) {
        if (r[l].match(/[a-z]/)) {
          o ? (s += r[l], s += `${r[l - 2]}-${r[l]}`.toUpperCase(), o = !1) : r[l + 1] === "-" && r[l + 2]?.match(/[a-z]/) ? (s += r[l], o = !0) : s += `${r[l]}${r[l].toUpperCase()}`;
          continue;
        }
      } else if (r[l].match(/[a-z]/)) {
        s += `[${r[l]}${r[l].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if (r[l] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (r[l] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && r[l] === ".") {
      s += i ? `${r[l]}\r
` : `[${r[l]}\r
]`;
      continue;
    }
    s += r[l], r[l] === "\\" ? a = !0 : i && r[l] === "]" ? i = !1 : !i && r[l] === "[" && (i = !0);
  }
  try {
    new RegExp(s);
  } catch {
    return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
  }
  return s;
}
function zc(e, t) {
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && e.keyType?._def.typeName === Z.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((r, s) => ({
        ...r,
        [s]: _e(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", s]
        }) ?? ut(t)
      }), {}),
      additionalProperties: t.rejectedAdditionalProperties
    };
  const n = {
    type: "object",
    additionalProperties: _e(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    }) ?? t.allowedAdditionalProperties
  };
  if (t.target === "openApi3")
    return n;
  if (e.keyType?._def.typeName === Z.ZodString && e.keyType._def.checks?.length) {
    const { type: r, ...s } = $c(e.keyType._def, t);
    return {
      ...n,
      propertyNames: s
    };
  } else {
    if (e.keyType?._def.typeName === Z.ZodEnum)
      return {
        ...n,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (e.keyType?._def.typeName === Z.ZodBranded && e.keyType._def.type._def.typeName === Z.ZodString && e.keyType._def.type._def.checks?.length) {
      const { type: r, ...s } = Vc(e.keyType._def, t);
      return {
        ...n,
        propertyNames: s
      };
    }
  }
  return n;
}
function $g(e, t) {
  if (t.mapStrategy === "record")
    return zc(e, t);
  const n = _e(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || ut(t), r = _e(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || ut(t);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [n, r],
      minItems: 2,
      maxItems: 2
    }
  };
}
function zg(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(r.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function qg(e) {
  return e.target === "openAi" ? void 0 : {
    not: ut({
      ...e,
      currentPath: [...e.currentPath, "not"]
    })
  };
}
function Zg(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const Gr = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function Ug(e, t) {
  if (t.target === "openApi3")
    return Ji(e, t);
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every((r) => r._def.typeName in Gr && (!r._def.checks || !r._def.checks.length))) {
    const r = n.reduce((s, a) => {
      const i = Gr[a._def.typeName];
      return i && !s.includes(i) ? [...s, i] : s;
    }, []);
    return {
      type: r.length > 1 ? r : r[0]
    };
  } else if (n.every((r) => r._def.typeName === "ZodLiteral" && !r.description)) {
    const r = n.reduce((s, a) => {
      const i = typeof a._def.value;
      switch (i) {
        case "string":
        case "number":
        case "boolean":
          return [...s, i];
        case "bigint":
          return [...s, "integer"];
        case "object":
          if (a._def.value === null)
            return [...s, "null"];
        default:
          return s;
      }
    }, []);
    if (r.length === n.length) {
      const s = r.filter((a, i, o) => o.indexOf(a) === i);
      return {
        type: s.length > 1 ? s : s[0],
        enum: n.reduce((a, i) => a.includes(i._def.value) ? a : [...a, i._def.value], [])
      };
    }
  } else if (n.every((r) => r._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: n.reduce((r, s) => [
        ...r,
        ...s._def.values.filter((a) => !r.includes(a))
      ], [])
    };
  return Ji(e, t);
}
const Ji = (e, t) => {
  const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((r, s) => _e(r._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
  return n.length ? { anyOf: n } : void 0;
};
function Wg(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: Gr[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        Gr[e.innerType._def.typeName],
        "null"
      ]
    };
  if (t.target === "openApi3") {
    const r = _e(e.innerType._def, {
      ...t,
      currentPath: [...t.currentPath]
    });
    return r && "$ref" in r ? { allOf: [r], nullable: !0 } : r && { ...r, nullable: !0 };
  }
  const n = _e(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return n && { anyOf: [n, { type: "null" }] };
}
function Hg(e, t) {
  const n = {
    type: "number"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        n.type = "integer", Pc(n, "type", r.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? Ae(n, "minimum", r.value, r.message, t) : Ae(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), Ae(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? Ae(n, "maximum", r.value, r.message, t) : Ae(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), Ae(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        Ae(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function Qg(e, t) {
  const n = t.target === "openAi", r = {
    type: "object",
    properties: {}
  }, s = [], a = e.shape();
  for (const o in a) {
    let l = a[o];
    if (l === void 0 || l._def === void 0)
      continue;
    let d = Kg(l);
    d && n && (l._def.typeName === "ZodOptional" && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), d = !1);
    const u = _e(l._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", o],
      propertyPath: [...t.currentPath, "properties", o]
    });
    u !== void 0 && (r.properties[o] = u, d || s.push(o));
  }
  s.length && (r.required = s);
  const i = Gg(e, t);
  return i !== void 0 && (r.additionalProperties = i), r;
}
function Gg(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return _e(e.catchall._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    });
  switch (e.unknownKeys) {
    case "passthrough":
      return t.allowedAdditionalProperties;
    case "strict":
      return t.rejectedAdditionalProperties;
    case "strip":
      return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
  }
}
function Kg(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const Xg = (e, t) => {
  if (t.currentPath.toString() === t.propertyPath?.toString())
    return _e(e.innerType._def, t);
  const n = _e(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? {
    anyOf: [
      {
        not: ut(t)
      },
      n
    ]
  } : ut(t);
}, Yg = (e, t) => {
  if (t.pipeStrategy === "input")
    return _e(e.in._def, t);
  if (t.pipeStrategy === "output")
    return _e(e.out._def, t);
  const n = _e(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), r = _e(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", n ? "1" : "0"]
  });
  return {
    allOf: [n, r].filter((s) => s !== void 0)
  };
};
function Jg(e, t) {
  return _e(e.type._def, t);
}
function ev(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: _e(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && Ae(r, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && Ae(r, "maxItems", e.maxSize.value, e.maxSize.message, t), r;
}
function tv(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((n, r) => _e(n._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${r}`]
    })).reduce((n, r) => r === void 0 ? n : [...n, r], []),
    additionalItems: _e(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((n, r) => _e(n._def, {
      ...t,
      currentPath: [...t.currentPath, "items", `${r}`]
    })).reduce((n, r) => r === void 0 ? n : [...n, r], [])
  };
}
function nv(e) {
  return {
    not: ut(e)
  };
}
function rv(e) {
  return ut(e);
}
const sv = (e, t) => _e(e.innerType._def, t), av = (e, t, n) => {
  switch (t) {
    case Z.ZodString:
      return $c(e, n);
    case Z.ZodNumber:
      return Hg(e, n);
    case Z.ZodObject:
      return Qg(e, n);
    case Z.ZodBigInt:
      return Tg(e, n);
    case Z.ZodBoolean:
      return Ag();
    case Z.ZodDate:
      return jc(e, n);
    case Z.ZodUndefined:
      return nv(n);
    case Z.ZodNull:
      return Zg(n);
    case Z.ZodArray:
      return Fg(e, n);
    case Z.ZodUnion:
    case Z.ZodDiscriminatedUnion:
      return Ug(e, n);
    case Z.ZodIntersection:
      return Pg(e, n);
    case Z.ZodTuple:
      return tv(e, n);
    case Z.ZodRecord:
      return zc(e, n);
    case Z.ZodLiteral:
      return Bg(e, n);
    case Z.ZodEnum:
      return Lg(e);
    case Z.ZodNativeEnum:
      return zg(e);
    case Z.ZodNullable:
      return Wg(e, n);
    case Z.ZodOptional:
      return Xg(e, n);
    case Z.ZodMap:
      return $g(e, n);
    case Z.ZodSet:
      return ev(e, n);
    case Z.ZodLazy:
      return () => e.getter()._def;
    case Z.ZodPromise:
      return Jg(e, n);
    case Z.ZodNaN:
    case Z.ZodNever:
      return qg(n);
    case Z.ZodEffects:
      return Rg(e, n);
    case Z.ZodAny:
      return ut(n);
    case Z.ZodUnknown:
      return rv(n);
    case Z.ZodDefault:
      return Og(e, n);
    case Z.ZodBranded:
      return Vc(e, n);
    case Z.ZodReadonly:
      return sv(e, n);
    case Z.ZodCatch:
      return Eg(e, n);
    case Z.ZodPipeline:
      return Yg(e, n);
    case Z.ZodFunction:
    case Z.ZodVoid:
    case Z.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((r) => {
      })();
  }
};
function _e(e, t, n = !1) {
  const r = t.seen.get(e);
  if (t.override) {
    const o = t.override?.(e, t, r, n);
    if (o !== _g)
      return o;
  }
  if (r && !n) {
    const o = iv(r, t);
    if (o !== void 0)
      return o;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = av(e, e.typeName, t), i = typeof a == "function" ? _e(a(), t) : a;
  if (i && ov(e, t, i), t.postProcess) {
    const o = t.postProcess(i, e, t);
    return s.jsonSchema = i, o;
  }
  return s.jsonSchema = i, i;
}
const iv = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Bc(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), ut(t)) : t.$refStrategy === "seen" ? ut(t) : void 0;
  }
}, ov = (e, t, n) => (e.description && (n.description = e.description, t.markdownDescription && (n.markdownDescription = e.description)), n), eo = (e, t) => {
  const n = Dg(t);
  let r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((o, [l, d]) => ({
    ...o,
    [l]: _e(d._def, {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, l]
    }, !0) ?? ut(n)
  }), {}) : void 0;
  const s = typeof t == "string" ? t : t?.name, a = _e(
    e._def,
    n,
    !1
  ) ?? ut(n);
  n.flags.hasReferencedOpenAiAnyType && (r || (r = {}), r[n.openAiAnyTypeName] || (r[n.openAiAnyTypeName] = {
    // Skipping "object" as no properties can be defined and additionalProperties must be "false"
    type: ["string", "number", "integer", "boolean", "array", "null"],
    items: {
      $ref: n.$refStrategy === "relative" ? "1" : [
        ...n.basePath,
        n.definitionPath,
        n.openAiAnyTypeName
      ].join("/")
    }
  }));
  const i = s === void 0 ? r ? {
    ...a,
    [n.definitionPath]: r
  } : a : {
    $ref: [
      ...n.$refStrategy === "relative" ? [] : n.basePath,
      n.definitionPath,
      s
    ].join("/"),
    [n.definitionPath]: {
      ...r,
      [s]: a
    }
  };
  return n.target === "jsonSchema7" ? i.$schema = "http://json-schema.org/draft-07/schema#" : (n.target === "jsonSchema2019-09" || n.target === "openAi") && (i.$schema = "https://json-schema.org/draft/2019-09/schema#"), n.target === "openAi" && ("anyOf" in i || "oneOf" in i || "allOf" in i || "type" in i && Array.isArray(i.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), i;
};
function ps() {
  const [e, t] = ee(!1), [n, r] = ee(!1), s = H((p) => {
    t(p.isSubmitting), r(p.hasErrors);
  }), a = H(null), i = H({
    get current() {
      return a.current;
    },
    set current(p) {
      a.current = p, p && p._setStateCallback(s.current);
    }
  }), o = L(async () => {
    if (!a.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return a.current.submit();
  }, []), l = L(() => {
    if (!a.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    a.current.reset();
  }, []), d = L(() => a.current ? a.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), u = L(() => a.current ? a.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), f = L(
    (p, S, v) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValue(p, S, v);
    },
    []
  ), h = L(
    (p, S) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValues(p, S);
    },
    []
  ), m = L(async (p) => a.current ? a.current.trigger(p) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), g = L(() => a.current ? a.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), b = L(() => a.current ? a.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
  return {
    formRef: i.current,
    submit: o,
    reset: l,
    isDirty: d,
    getValues: u,
    setValue: f,
    setValues: h,
    trigger: m,
    getErrors: g,
    getFieldNames: b,
    isSubmitting: e,
    hasErrors: n
  };
}
const qc = Ct(null);
function lv() {
  const e = et(qc);
  if (!e)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return e;
}
function cv({ children: e, ...t }) {
  return /* @__PURE__ */ c(qc.Provider, { value: t, children: e });
}
const dv = nn({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function uv(e, t, n) {
  return e === t ? "active" : n ? "completed" : "upcoming";
}
function fv({ state: e, index: t }) {
  return e === "completed" ? /* @__PURE__ */ c("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ c(kt, { className: "h-3 w-3" }) }) : /* @__PURE__ */ c(
    qd,
    {
      value: t + 1,
      type: e === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function mv() {
  const { steps: e, currentStep: t, goToStep: n, allowStepSkipping: r } = lv();
  return /* @__PURE__ */ c("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: e.map((s, a) => {
    const i = a < t || s.isCompleted?.() === !0, o = uv(a, t, i), l = e[t]?.hasErrors?.() === !0, d = a > t && e.slice(t, a).some((m) => m.hasErrors?.() === !0);
    let u = a !== t && !l && !d && e.slice(0, a).every((m) => m.isCompleted?.() !== !1);
    return u && !r && a > t + 1 && (u = !1), /* @__PURE__ */ D(
      "button",
      {
        type: "button",
        onClick: () => {
          u && n(a);
        },
        onKeyDown: (m) => {
          (m.key === "Enter" || m.key === " ") && u && (m.preventDefault(), n(a));
        },
        disabled: !u && a !== t,
        "aria-current": a === t ? "step" : void 0,
        className: Q(
          Xr(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          o === "active" && "bg-f1-background-selected",
          u && "hover:bg-f1-background-secondary-hover",
          !u && a !== t && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ c(fv, { state: o, index: a }),
          /* @__PURE__ */ c("span", { className: dv({ state: o }), children: s.title })
        ]
      },
      a
    );
  }) });
}
function hv({
  steps: e,
  defaultStepIndex: t = 0,
  onSubmit: n,
  onStepChanged: r,
  allowStepSkipping: s = !1,
  autoCloseOnLastStepSubmit: a = !1,
  onClose: i
}) {
  const [o, l] = ee(t), [d, u] = ee(!1), f = H(e);
  f.current = e;
  const h = L(
    (p) => {
      l(p), r?.(p);
    },
    [r]
  ), m = L(
    async (p) => {
      if (!(p < 0 || p >= f.current.length || f.current[o]?.hasErrors?.() === !0 || !s && p > o + 1 || p > o && f.current.slice(o, p).some((k) => k.hasErrors?.() === !0) || !f.current.slice(0, p).every((v) => v.isCompleted?.() !== !1))) {
        if (p > o) {
          u(!0);
          try {
            for (let v = o; v < p; v++) {
              const k = f.current[v];
              k?.onNext && await k.onNext();
            }
            h(p);
          } catch {
          } finally {
            u(!1);
          }
          return;
        }
        h(p);
      }
    },
    [h, o, s]
  ), g = L(async () => {
    const p = f.current[o];
    if (p) {
      u(!0);
      try {
        p.onNext && await p.onNext(), o === f.current.length - 1 ? (n && await n(), a && i?.()) : h(o + 1);
      } catch {
      } finally {
        u(!1);
      }
    }
  }, [o, n, h, a, i]), b = L(() => {
    o > 0 && h(o - 1);
  }, [o, h]);
  return {
    currentStep: o,
    loading: d,
    goToStep: m,
    goNext: g,
    goPrevious: b
  };
}
const pv = () => {
}, Qa = ({
  steps: e,
  children: t,
  isOpen: n,
  onClose: r = pv,
  title: s,
  width: a = "xl",
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  submitLabel: d,
  onSubmit: u,
  onStepChanged: f,
  allowStepSkipping: h = !1,
  autoCloseOnLastStepSubmit: m = !1,
  autoSkipCompletedSteps: g = !1
}) => {
  const b = z(() => {
    if (i !== void 0) return i;
    if (!g) return 0;
    const O = e.findIndex(
      (M) => M.isCompleted?.() !== !0
    );
    return O === -1 ? e.length - 1 : O;
  }, [i, g, e]), p = hv({
    steps: e,
    defaultStepIndex: b,
    onSubmit: u,
    onStepChanged: f,
    allowStepSkipping: h,
    autoCloseOnLastStepSubmit: m,
    onClose: r
  }), S = Ce(), v = e[p.currentStep], k = p.currentStep === 0, _ = p.currentStep === e.length - 1, y = _ ? v?.nextLabel ?? d ?? S.wizard.submit : v?.nextLabel ?? o ?? S.wizard.next, w = v?.previousLabel ?? l ?? S.wizard.previous, C = z(
    () => ({
      label: y,
      icon: _ ? void 0 : Bs,
      onClick: () => {
        p.goNext();
      },
      disabled: v?.isCompleted?.() === !1 || v?.hasErrors?.() === !0,
      loading: p.loading
    }),
    [y, _, p, v]
  ), A = z(
    () => k ? void 0 : {
      label: w,
      icon: Ro,
      onClick: p.goPrevious,
      disabled: p.loading
    },
    [k, w, p]
  );
  return /* @__PURE__ */ c(
    Zd,
    {
      isOpen: n,
      onClose: r,
      width: a,
      title: s,
      primaryAction: C,
      secondaryAction: A,
      disableContentPadding: !0,
      children: /* @__PURE__ */ c(
        cv,
        {
          currentStep: p.currentStep,
          totalSteps: e.length,
          loading: p.loading,
          goToStep: p.goToStep,
          goNext: p.goNext,
          goPrevious: p.goPrevious,
          steps: e,
          allowStepSkipping: h,
          children: /* @__PURE__ */ D("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ c("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ c(mv, {}) }),
            /* @__PURE__ */ c("div", { className: "flex-1 overflow-y-auto px-8", children: t({
              currentStep: p.currentStep,
              goToStep: p.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
Qa.displayName = "F0Wizard";
function Zc(e) {
  const n = sn(e).shape, r = Object.entries(n);
  return r.length === 0 ? !1 : r.every(([, s]) => an(s)?.disabled === !0);
}
function gv(e, t) {
  if (t) return Object.keys(t);
  const r = sn(e).shape, s = /* @__PURE__ */ new Set();
  for (const a of Object.values(r)) {
    const i = an(a);
    i?.section && s.add(i.section);
  }
  return Array.from(s);
}
function Es(e, t) {
  const n = e.shape, r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = an(a);
    i?.section && t.includes(i.section) && (r[s] = a);
  }
  return $a(r);
}
function Uc(e, t, n) {
  const r = t ?? {};
  if (n) return n({ data: r });
  const a = sn(e).shape;
  return Object.entries(a).every(([i, o]) => {
    if (o.isOptional()) return !0;
    const l = r[i];
    return l != null && l !== "";
  });
}
const vv = 3e3;
function Wc() {
  const { forms: e } = Ce(), [t, n] = ee("idle"), [r, s] = ee(), a = H(null);
  ie(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const i = L((d) => {
    a.current && (clearTimeout(a.current), a.current = null), s(d), n("success"), a.current = setTimeout(() => {
      n("idle"), s(void 0), a.current = null;
    }, vv);
  }, []), o = t === "success" ? r ?? e.actionBar.saved : void 0, l = z(
    () => /* @__PURE__ */ c(
      Vs,
      {
        isOpen: t === "success",
        variant: "light",
        status: t,
        label: o
      }
    ),
    [t, o]
  );
  return { showSuccess: i, ActionBar: l };
}
function Hc(e, t, n, r, s, a, i) {
  return (n ?? e.map((l) => ({
    title: t?.[l]?.title ?? l,
    sectionIds: [l]
  }))).map((l, d) => {
    const u = r(l.sectionIds), f = i?.(d) ?? !1;
    return {
      title: l.title,
      nextLabel: l.nextLabel,
      previousLabel: l.previousLabel,
      isCompleted: u || f ? () => !0 : void 0,
      hasErrors: a ? () => a(d) : void 0,
      onNext: s(d)
    };
  });
}
function jn(e, t, n) {
  if (n)
    return n[e]?.sectionIds ?? [];
  const r = t[e];
  return r ? [r] : [];
}
function bv({
  formDefinition: e,
  steps: t,
  isOpen: n,
  onClose: r,
  title: s,
  width: a,
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  onStepChanged: d,
  allowStepSkipping: u,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: g
}) {
  const {
    name: b,
    schema: p,
    sections: S,
    defaultValues: v,
    onSubmit: k,
    submitConfig: _,
    errorTriggerMode: y = "on-blur"
  } = e, w = _?.label, C = z(() => Object.keys(p), [p]), A = z(() => t ? t.some(
    (J) => J.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), t.flatMap(
    (J) => J.sectionIds.map((oe) => ({
      title: S?.[oe]?.title ?? J.title,
      sectionIds: [oe],
      nextLabel: J.nextLabel,
      previousLabel: J.previousLabel
    }))
  )) : t : void 0, [t, S]), O = H({}), M = H(i ?? 0), T = z(
    () => Object.fromEntries(C.map((de) => [de, null])),
    [C]
  ), [I, N] = ee({}), P = H(I);
  P.current = I;
  const G = L(
    (de) => de.every((J) => {
      const oe = p[J];
      return oe ? Zc(oe) : !1;
    }),
    [p]
  ), X = L(
    (de) => async () => {
      const J = jn(de, C, A);
      for (const oe of J) {
        const Ie = T[oe];
        Ie && await Ie.submit();
      }
    },
    [C, A, T]
  ), te = L(
    (de) => jn(de, C, A).some((oe) => P.current[oe] === !0),
    [C, A]
  ), fe = z(
    () => A ?? C.map((de) => ({
      title: S?.[de]?.title ?? de,
      sectionIds: [de]
    })),
    [A, C, S]
  ), q = L(
    (de) => {
      if (!m) return !1;
      const J = fe[de];
      return J ? J.sectionIds.every((oe) => {
        const Ie = p[oe];
        if (!Ie) return !1;
        const Ve = v?.[oe] ?? O.current[oe];
        return Uc(Ie, Ve, J.isCompleted);
      }) : !1;
    },
    [m, fe, p, v]
  ), le = z(() => {
    if (i !== void 0) return i;
    if (!m) return;
    const de = fe.findIndex(
      (J, oe) => !q(oe)
    );
    return de === -1 ? fe.length - 1 : de;
  }, [i, m, fe, q]), ue = z(
    () => Hc(
      C,
      S,
      A,
      G,
      X,
      te,
      m ? q : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      C,
      S,
      A,
      G,
      X,
      te,
      I,
      m,
      q
    ]
  ), R = H(null), { showSuccess: B, ActionBar: U } = Wc(), me = L(
    (de) => async (J) => {
      O.current[de] = J;
      const oe = await k({
        sectionId: de,
        data: J,
        fullData: { ...O.current }
      });
      return R.current = oe, oe.success && oe.message && B(oe.message), oe;
    },
    [k, B]
  ), se = L(() => {
    if (R.current?.success) {
      if (h) {
        const J = h({
          fullData: { ...O.current }
        });
        window.location.href = J;
        return;
      }
      f && r?.();
    }
  }, [f, h, r]), ge = L(() => {
    const de = jn(
      M.current,
      C,
      A
    );
    for (const J of de) {
      const oe = T[J];
      oe && (O.current[J] = oe.getValues());
    }
  }, [C, A, T]), ve = L(
    (de) => {
      ge(), M.current = de, d?.(de);
    },
    [ge, d]
  );
  return /* @__PURE__ */ c(
    Qa,
    {
      steps: ue,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: le,
      nextLabel: o,
      previousLabel: l,
      submitLabel: w,
      onSubmit: se,
      onStepChanged: ve,
      allowStepSkipping: u,
      children: ({ currentStep: de }) => {
        const J = jn(
          de,
          C,
          A
        );
        return /* @__PURE__ */ D(Ke, { children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 pb-5", children: J.map((oe) => {
            const Ie = p[oe];
            if (!Ie) return null;
            const Ve = S?.[oe], De = O.current[oe], Xe = v?.[oe];
            return /* @__PURE__ */ c(
              yv,
              {
                sectionId: oe,
                formName: b,
                schema: Ie,
                sectionConfig: Ve,
                defaultValues: De ?? Xe,
                onSubmit: me(oe),
                submitConfig: _,
                errorTriggerMode: y,
                sectionForms: T,
                onErrorStateChange: (mt) => {
                  N((x) => x[oe] === mt ? x : { ...x, [oe]: mt });
                },
                renderCustomField: g,
                isLoading: e.isLoading
              },
              oe
            );
          }) }),
          U
        ] });
      }
    }
  );
}
function yv({
  sectionId: e,
  formName: t,
  schema: n,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: a,
  submitConfig: i,
  errorTriggerMode: o,
  sectionForms: l,
  onErrorStateChange: d,
  renderCustomField: u,
  isLoading: f
}) {
  const h = ps();
  ie(() => (l[e] = h, () => {
    l[e] = null;
  }), [l, e, h]);
  const m = H(d);
  return m.current = d, ie(() => {
    m.current(h.hasErrors);
  }, [h.hasErrors]), /* @__PURE__ */ c(
    Mc,
    {
      formName: t,
      sectionId: e,
      schema: n,
      sectionConfig: r,
      defaultValues: s,
      onSubmit: a,
      submitConfig: {
        ...i,
        hideSubmitButton: !0
      },
      errorTriggerMode: o,
      formRef: h.formRef,
      renderCustomField: u,
      isLoading: f
    }
  );
}
function xv({
  formDefinition: e,
  steps: t,
  isOpen: n,
  onClose: r,
  title: s,
  width: a,
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  onStepChanged: d,
  allowStepSkipping: u,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: h,
  autoSkipCompletedSteps: m = !1,
  renderCustomField: g
}) {
  const {
    name: b,
    schema: p,
    sections: S,
    defaultValues: v,
    onSubmit: k,
    submitConfig: _,
    errorTriggerMode: y = "on-blur"
  } = e, w = _?.label, C = z(() => sn(p), [p]), A = z(
    () => gv(p, S),
    [p, S]
  ), O = L(
    (se) => {
      const ge = Es(C, se);
      return Zc(ge);
    },
    [C]
  ), M = ps(), T = H(
    v ? { ...v } : {}
  ), I = H(i ?? 0), N = L(
    (se) => async () => {
      await M.submit();
    },
    [M]
  ), P = L(
    (se) => M.hasErrors,
    [M.hasErrors]
  ), G = z(
    () => t ?? A.map((se) => ({
      title: S?.[se]?.title ?? se,
      sectionIds: [se]
    })),
    [t, A, S]
  ), X = L(
    (se) => {
      if (!m) return !1;
      const ge = G[se];
      if (!ge) return !1;
      const ve = Es(
        C,
        ge.sectionIds
      );
      return Uc(ve, v, ge.isCompleted);
    },
    [m, G, C, v]
  ), te = z(() => {
    if (i !== void 0) return i;
    if (!m) return;
    const se = G.findIndex(
      (ge, ve) => !X(ve)
    );
    return se === -1 ? G.length - 1 : se;
  }, [i, m, G, X]), fe = z(
    () => Hc(
      A,
      S,
      t,
      O,
      N,
      P,
      m ? X : void 0
    ),
    [
      A,
      S,
      t,
      O,
      N,
      P,
      m,
      X
    ]
  ), q = H(null), le = H(null), { showSuccess: ue, ActionBar: R } = Wc(), B = L(
    async (se) => {
      Object.assign(T.current, se);
      const ge = { ...T.current };
      le.current = ge;
      const ve = await k({ data: ge });
      return q.current = ve, ve;
    },
    [k]
  ), U = L(() => {
    const se = q.current;
    if (se?.success) {
      if (ue(se.message), h) {
        const ge = h({
          fullData: le.current
        });
        window.location.href = ge;
        return;
      }
      f && r?.();
    }
  }, [f, h, r, ue]), me = L(
    (se) => {
      const ge = M.getValues();
      Object.assign(T.current, ge), I.current = se, d?.(se);
    },
    [M, d]
  );
  return /* @__PURE__ */ c(
    Qa,
    {
      steps: fe,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: te,
      nextLabel: o,
      previousLabel: l,
      submitLabel: w,
      onSubmit: U,
      onStepChanged: me,
      allowStepSkipping: u,
      children: ({ currentStep: se }) => {
        const ge = jn(
          se,
          A,
          t
        ), ve = Es(
          C,
          ge
        ), de = ge.reduce((J, oe) => (S?.[oe] && (J[oe] = S[oe]), J), {});
        return /* @__PURE__ */ D(Ke, { children: [
          /* @__PURE__ */ c("div", { className: "pb-5", children: /* @__PURE__ */ c(
            mr,
            {
              name: `${b}-step-${se}`,
              schema: ve,
              sections: de,
              defaultValues: T.current,
              onSubmit: B,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: y,
              formRef: M.formRef,
              renderCustomField: g,
              isLoading: e.isLoading
            },
            se
          ) }),
          R
        ] });
      }
    }
  );
}
function Qc(e) {
  return e.formDefinition._brand === "per-section" ? /* @__PURE__ */ c(
    bv,
    {
      ...e
    }
  ) : /* @__PURE__ */ c(
    xv,
    {
      ...e
    }
  );
}
Qc.displayName = "F0WizardForm";
function wv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
function Sv(e, t) {
  const n = typeof e == "function", [r, s] = ee(
    n ? void 0 : e
  ), [a, i] = ee(n), o = H(e);
  return o.current = e, ie(() => {
    if (typeof o.current != "function") return;
    const l = new AbortController();
    i(!0);
    const d = o.current;
    return d(t ? {} : l.signal).then((f) => {
      l.signal.aborted || (s(f), i(!1));
    }).catch((f) => {
      l.signal.aborted || (console.warn(
        "[useF0FormDefinition] Async defaultValues rejected:",
        f
      ), s(void 0), i(!1));
    }), () => {
      l.abort();
    };
  }, [n, t]), n ? { resolved: r, isLoading: a } : { resolved: e, isLoading: !1 };
}
function Gc(e) {
  const {
    name: t,
    schema: n,
    sections: r,
    defaultValues: s,
    onSubmit: a,
    submitConfig: i,
    errorTriggerMode: o,
    defaultValuesParamsSchema: l
  } = e, d = typeof s == "function" && l ? s : void 0, u = !!l, { resolved: f, isLoading: h } = Sv(
    s,
    u
  );
  return z(() => {
    const m = wv(n) ? "single" : "per-section";
    return {
      name: t,
      schema: n,
      sections: r,
      defaultValues: f,
      onSubmit: a,
      submitConfig: i,
      errorTriggerMode: o,
      isLoading: h,
      defaultValuesParamsSchema: l,
      defaultValuesFn: d,
      _brand: m
    };
  }, [
    t,
    n,
    r,
    f,
    a,
    i,
    o,
    h,
    l,
    d
  ]);
}
const kv = Re(Qc), _v = mr;
function Cv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const { formRef: r, submit: s, isSubmitting: a, hasErrors: i } = ps(), o = Gc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    submitConfig: { type: "default", hideSubmitButton: !0 },
    onSubmit: async ({ data: l }) => (await e.onSubmit?.(l), n(), { success: !0 })
  });
  return /* @__PURE__ */ c(
    Lo,
    {
      isOpen: !0,
      onClose: n,
      title: e.title ?? e.name,
      description: e.description,
      primaryAction: {
        label: "Submit",
        onClick: s,
        loading: a,
        disabled: i
      },
      secondaryAction: { label: "Cancel", onClick: n },
      children: /* @__PURE__ */ c(_v, { formDefinition: o, formRef: r })
    }
  );
}
function Nv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const r = Gc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    onSubmit: async ({ data: s }) => (await e.onSubmit?.(s), { success: !0 })
  });
  return /* @__PURE__ */ c(
    kv,
    {
      isOpen: !0,
      onClose: n,
      title: e.title ?? e.name,
      formDefinition: r,
      steps: e.steps,
      autoCloseOnLastStepSubmit: !0
    }
  );
}
function Dv({
  presentedForm: e,
  onClose: t
}) {
  const { mode: n, definition: r, initialValues: s } = e, a = z(
    () => `${e.name}-${JSON.stringify(s)}`,
    [e.name, s]
  );
  return n === "wizard" ? /* @__PURE__ */ c(
    Nv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  ) : /* @__PURE__ */ c(
    Cv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  );
}
function Wy(e) {
  return e;
}
function Is(e, t = {}) {
  return typeof e == "function" ? e(t) : e ?? {};
}
function to(e, t = {}, n) {
  let r = { ...t };
  const s = { ...t }, a = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const l = e.safeParse(r);
        if (!l.success)
          throw new Error(l.error.issues.map((d) => d.message).join(", "));
        await n?.(l.data);
      },
      reset: () => {
        r = { ...s }, a.clear();
      },
      isDirty: () => JSON.stringify(r) !== JSON.stringify(s),
      getValues: () => ({ ...r }),
      setValue: (l, d, u) => {
        r = { ...r, [l]: d }, a.add(l);
      },
      setValues: (l, d) => {
        r = { ...r, ...l };
        for (const u of Object.keys(l))
          a.add(u);
      },
      trigger: async (l) => {
        if (l) {
          const u = st(e).shape?.[l];
          return u ? u.safeParse(r[l]).success : !0;
        }
        return e.safeParse(r).success;
      },
      getErrors: () => {
        const l = e.safeParse(r);
        if (l.success) return {};
        const d = {};
        for (const u of l.error.issues) {
          const f = u.path.join(".");
          f && !d[f] && (d[f] = u.message);
        }
        return d;
      },
      getFieldNames: () => {
        const l = st(e);
        return Object.keys(l.shape ?? {});
      },
      actionBar: {
        wiggle: () => {
        }
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: a };
}
function Fv(e) {
  const n = st(e).shape;
  if (!n) return {};
  const r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = an(a), o = a.description;
    (i?.label || o) && (r[s] = {
      label: i?.label ?? s,
      ...i?.section && { section: i.section },
      ...i?.placeholder && { placeholder: i.placeholder },
      ...i?.helpText && { helpText: i.helpText },
      ...o && { description: o },
      ...i?.customFieldName && {
        customFieldName: i.customFieldName
      }
    });
  }
  return r;
}
function Tv(e) {
  if (!e) return {};
  const t = {};
  for (const [n, r] of Object.entries(e))
    t[n] = {
      title: r.title,
      ...r.description && { description: r.description }
    };
  return t;
}
const Kc = Ct(null);
function Hy({
  children: e,
  availableFormDefinitions: t
}) {
  const n = H(/* @__PURE__ */ new Map()), r = H(""), [s, a] = ee(
    null
  ), [i, o] = ee([]), l = L(() => {
    queueMicrotask(() => {
      const S = Array.from(n.current.entries());
      if (S.length === 0) {
        r.current !== "[]" && (r.current = "[]", o([]));
        return;
      }
      const v = S.map(([_, y]) => {
        const w = y.ref.current;
        return w ? {
          formName: _,
          formSchema: eo(y.schema),
          fieldDescriptions: Fv(y.schema),
          sectionDescriptions: Tv(y.sections),
          formValues: w.getValues(),
          formErrors: w.getErrors(),
          isDirty: w.isDirty(),
          ...y.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: eo(
              y.defaultValuesParamsSchema
            )
          } : {}
        } : void 0;
      }).filter((_) => _ !== null), k = JSON.stringify(v);
      k !== r.current && (r.current = k, o(v));
    });
  }, []), d = L(
    (S, v, k, _, y, w) => {
      n.current.set(S, {
        ref: v,
        schema: k,
        sections: _,
        defaultValuesParamsSchema: y,
        defaultValuesFn: w
      }), l();
    },
    [l]
  ), u = L(
    (S) => {
      if (n.current.get(S)?.virtual) return;
      n.current.delete(S);
      const k = t?.find((_) => _.name === S);
      if (k) {
        const { ref: _, dirtyFields: y } = to(
          k.schema,
          Is(k.defaultValues),
          k.onSubmit
        );
        n.current.set(S, {
          ref: _,
          schema: k.schema,
          sections: k.sections,
          virtual: !0,
          defaultValuesParamsSchema: k.defaultValuesParamsSchema,
          dirtyFields: y
        });
      }
      l();
    },
    [l, t]
  ), f = L((S) => n.current.get(S), []), h = L(() => Array.from(n.current.keys()), []), m = L(
    (S, v, k) => {
      const _ = t?.find((O) => O.name === S);
      if (!_)
        return {
          success: !1,
          error: `Form "${S}" not found in availableFormDefinitions`
        };
      if (k && _.defaultValuesParamsSchema) {
        const O = _.defaultValuesParamsSchema.safeParse(k);
        if (!O.success)
          return {
            success: !1,
            error: `Invalid defaultValuesParams for form "${S}": ${O.error.issues.map((M) => M.message).join(", ")}`
          };
      }
      const y = Is(
        _.defaultValues,
        k ?? {}
      ), w = n.current.get(S), C = w?.ref.current;
      let A;
      if (k && w?.dirtyFields) {
        const O = C?.getValues() ?? {}, M = {};
        for (const T of w.dirtyFields)
          T in O && (M[T] = O[T]);
        A = { ...y, ...M };
      } else
        A = C?.getValues() ?? y;
      return a({
        name: S,
        mode: v,
        definition: _,
        initialValues: A
      }), { success: !0 };
    },
    [t]
  ), g = L(() => {
    a(null);
  }, []), b = H(/* @__PURE__ */ new Set());
  ie(() => {
    const S = t ?? [], v = /* @__PURE__ */ new Set();
    for (const k of S) {
      v.add(k.name);
      const _ = n.current.get(k.name);
      if (_ && !_.virtual || _?.virtual) continue;
      const { ref: y, dirtyFields: w } = to(
        k.schema,
        Is(k.defaultValues),
        k.onSubmit
      );
      n.current.set(k.name, {
        ref: y,
        schema: k.schema,
        sections: k.sections,
        virtual: !0,
        defaultValuesParamsSchema: k.defaultValuesParamsSchema,
        dirtyFields: w
      });
    }
    for (const k of b.current)
      v.has(k) || n.current.get(k)?.virtual && n.current.delete(k);
    return b.current = v, l(), () => {
      for (const k of v)
        n.current.get(k)?.virtual && n.current.delete(k);
      l();
    };
  }, [t, l]);
  const p = {
    register: d,
    unregister: u,
    get: f,
    getFormNames: h,
    rebuildDescriptions: l,
    formDescriptions: i,
    presentedForm: s,
    presentForm: m,
    dismissForm: g
  };
  return /* @__PURE__ */ D(Kc.Provider, { value: p, children: [
    e,
    s && /* @__PURE__ */ c(
      Dv,
      {
        presentedForm: s,
        onClose: g
      }
    )
  ] });
}
function Av() {
  return et(Kc);
}
const Os = "f0-form-error-navigate", Rs = /* @__PURE__ */ new WeakMap();
function sa(e, t) {
  if (typeof document > "u") return null;
  const n = un(e, void 0, t), r = document.getElementById(n);
  if (r) return r;
  const s = `forms.${e}.`, a = `.${t}`;
  return document.querySelector(
    `[id^="${s}"][id$="${a}"]`
  );
}
const Ev = (e) => {
  const t = Rs.get(e);
  t && clearTimeout(t), e.classList.remove(Os), e.offsetWidth, e.classList.add(Os);
  const n = setTimeout(() => {
    e.classList.remove(Os), Rs.delete(e);
  }, 600);
  Rs.set(e, n);
};
function Iv(e) {
  let t = e;
  for (; t && t.offsetParent === null && t.parentElement; )
    t = t.parentElement;
  return t ?? e;
}
function no(e, t, { highlight: n = !1 } = {}) {
  const r = sa(e, t);
  r && Ov(r, { highlight: n });
}
function Ov(e, { highlight: t = !1 } = {}) {
  const n = Iv(e);
  n.scrollIntoView({ behavior: "smooth", block: "center" });
  const r = n.querySelector("input, textarea, select, button");
  r instanceof HTMLElement && r.focus(), t && Ev(n);
}
function Rv({
  formName: e,
  errors: t
}) {
  const n = Object.keys(t).filter((S) => S !== "root"), r = typeof document > "u" ? n : [...n].sort((S, v) => {
    const k = sa(e, S), _ = sa(e, v);
    if (!k || !_) return 0;
    const y = k.compareDocumentPosition(_);
    return y & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : y & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), s = r.length > 0, a = r.length, [i, o] = ee(null), l = i ? Math.max(0, r.indexOf(i)) : 0, d = H(r);
  d.current = r;
  const u = H(i);
  u.current = i;
  const f = L(() => {
    const S = u.current;
    if (!S) return 0;
    const v = d.current.indexOf(S);
    return v === -1 ? 0 : v;
  }, []), h = H([]);
  ie(() => {
    const S = r, v = h.current, k = S.find(
      (_) => !v.includes(_)
    );
    k && (no(e, k, { highlight: !0 }), o(k)), h.current = S;
  }, [r, e]);
  const m = L(
    (S) => {
      const v = d.current;
      if (v.length === 0) return;
      const k = (S % v.length + v.length) % v.length, _ = v[k];
      o(_), no(e, _, { highlight: !0 });
    },
    [e]
  ), g = L(() => {
    m(f() - 1);
  }, [f, m]), b = L(() => {
    m(f() + 1);
  }, [f, m]), p = L(() => {
    o(null), h.current = [];
  }, []);
  return {
    fieldErrors: r,
    hasErrors: s,
    errorCount: a,
    currentErrorIndex: l,
    goToPreviousError: g,
    goToNextError: b,
    resetErrorNavigation: p
  };
}
function Lv(e) {
  const t = {};
  function n(r, s) {
    for (const [a, i] of Object.entries(r)) {
      if (a === "root") continue;
      const o = s ? `${s}.${a}` : a;
      if (i && typeof i == "object" && !Array.isArray(i)) {
        const l = i;
        "message" in l && typeof l.message == "string" ? t[o] = l.message : n(l, o);
      }
    }
  }
  return n(e, ""), t;
}
function Mv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
const Pv = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Xc(e) {
  const {
    name: t,
    schema: n,
    sections: r,
    defaultValues: s,
    onSubmit: a,
    submitConfig: i,
    className: o,
    errorTriggerMode: l = "on-blur",
    styling: d,
    initialFiles: u,
    renderCustomField: f,
    isLoading: h,
    useUpload: m
  } = e, g = d?.showSectionsSidepanel ?? !1, b = z(() => Object.keys(n), [n]), p = L(
    (y) => {
      const w = un(t, y), C = document.getElementById(w);
      C && C.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [t]
  ), [S, v] = ee(
    b[0]
  ), k = z(() => !r || !g ? [] : b.map((y) => ({
    id: y,
    label: r[y]?.title ?? y,
    onClick: () => {
      v(y), p(y);
    }
  })), [r, b, g, p]), _ = /* @__PURE__ */ c("div", { className: Q("flex w-full flex-col", Tc, o), children: b.map((y, w) => {
    const C = n[y], A = r?.[y], O = s?.[y], M = A?.submitConfig ?? i;
    return /* @__PURE__ */ c(
      "div",
      {
        id: un(t, y),
        className: Q("scroll-mt-4", w !== 0 && Fc),
        children: /* @__PURE__ */ c(
          Mc,
          {
            formName: t,
            sectionId: y,
            schema: C,
            sectionConfig: A,
            defaultValues: O,
            onSubmit: (T) => a(y, T),
            submitConfig: M,
            errorTriggerMode: l,
            initialFiles: u,
            renderCustomField: f,
            isLoading: h,
            useUpload: m
          }
        )
      },
      y
    );
  }) });
  return g && k.length > 0 ? /* @__PURE__ */ D("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
      Sa,
      {
        items: k,
        activeItem: S,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: _ })
  ] }) : _;
}
function Bv(e) {
  return "formDefinition" in e && e.formDefinition != null;
}
function mr(e) {
  const t = e;
  if (Bv(t))
    return /* @__PURE__ */ c(Vv, { ...t });
  const n = t;
  return Mv(n.schema) ? /* @__PURE__ */ c(
    Yc,
    {
      ...n
    }
  ) : /* @__PURE__ */ c(
    Xc,
    {
      ...n
    }
  );
}
function Vv(e) {
  const {
    formDefinition: t,
    className: n,
    styling: r,
    formRef: s,
    initialFiles: a,
    renderCustomField: i
  } = e, o = "useUpload" in e ? e.useUpload : void 0;
  return t.isLoading ? t._brand === "single" ? /* @__PURE__ */ c(
    ro,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      useUpload: o,
      isLoading: !0
    }
  ) : /* @__PURE__ */ c(
    so,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      useUpload: o,
      isLoading: !0
    }
  ) : t._brand === "single" ? /* @__PURE__ */ c(
    ro,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      useUpload: o
    }
  ) : /* @__PURE__ */ c(
    so,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      useUpload: o
    }
  );
}
function ro({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  useUpload: i,
  isLoading: o
}) {
  const l = e, d = L(
    (u) => l.onSubmit({ data: u }),
    [l]
  );
  return /* @__PURE__ */ c(
    Yc,
    {
      name: l.name,
      schema: l.schema,
      sections: l.sections,
      defaultValues: l.defaultValues,
      onSubmit: d,
      submitConfig: l.submitConfig,
      errorTriggerMode: l.errorTriggerMode,
      className: t,
      styling: n,
      formRef: r,
      initialFiles: s,
      renderCustomField: a,
      useUpload: i,
      isLoading: o,
      defaultValuesParamsSchema: l.defaultValuesParamsSchema,
      defaultValuesFn: l.defaultValuesFn
    }
  );
}
function so({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  useUpload: i,
  isLoading: o
}) {
  const l = e, d = H(
    l.defaultValues ? { ...l.defaultValues } : {}
  ), u = L(
    (f, h) => (d.current[f] = h, l.onSubmit({
      sectionId: f,
      data: h,
      fullData: { ...d.current }
    })),
    [l]
  );
  return /* @__PURE__ */ c(
    Xc,
    {
      name: l.name,
      schema: l.schema,
      sections: l.sections,
      defaultValues: l.defaultValues,
      onSubmit: u,
      submitConfig: l.submitConfig,
      errorTriggerMode: l.errorTriggerMode,
      className: t,
      styling: n,
      formRef: r,
      initialFiles: s,
      renderCustomField: a,
      useUpload: i,
      isLoading: o
    }
  );
}
function Yc(e) {
  const t = Ce(), { forms: n } = t, {
    name: r,
    schema: s,
    sections: a,
    defaultValues: i,
    onSubmit: o,
    submitConfig: l,
    className: d,
    errorTriggerMode: u = "on-blur",
    styling: f,
    formRef: h,
    isLoading: m,
    defaultValuesParamsSchema: g,
    defaultValuesFn: b
  } = e, { useUpload: p } = e, S = f?.showSectionsSidepanel ?? !1, v = l?.type === "action-bar", k = l?.label ?? "Submit", _ = l?.icon === null ? void 0 : l?.icon ?? Oo, y = l?.type !== "action-bar" && l?.hideSubmitButton, w = l?.type !== "action-bar" && !!l?.hideActionBar, C = !v && !y, A = l?.type === "action-bar" && l?.discardable, O = v ? l?.discardConfig : void 0, M = O?.label ?? n.actionBar.discard, T = O?.icon === null ? void 0 : O?.icon ?? xn, I = v ? l?.actionBarLabel ?? n.actionBar.unsavedChanges : n.actionBar.unsavedChanges, N = l?.savingMessage ?? n.actionBar.saving, P = l?.successMessageDuration, G = Rc(s, a), X = z(() => G.filter((ye) => ye.type === "section").map((ye) => ye.id), [G]), [te, fe] = ee(
    X[0]
  ), q = L(
    (ye) => {
      fe(ye);
      const Fe = un(r, ye), Te = document.getElementById(Fe);
      Te && Te.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [r]
  ), le = z(() => !a || !S ? [] : X.map((ye) => ({
    id: ye,
    label: a[ye]?.title ?? ye,
    onClick: () => q(ye)
  })), [a, X, S, q]), ue = z(() => Lc(t), [t]), R = Pv[u], B = z(
    () => Dc(s, { errorMap: ue }),
    [s, ue]
  ), U = uc({
    resolver: B,
    mode: R,
    defaultValues: i
  }), me = H(m);
  ie(() => {
    me.current && !m && i && U.reset(i), me.current = m;
  }, [m, i, U]);
  const se = U.formState.errors.root, { isDirty: ge, isSubmitting: ve, errors: de } = U.formState, [J, oe] = ee("idle"), [Ie, Ve] = ee(), De = H(null), Xe = H(null), {
    hasErrors: We,
    errorCount: mt,
    goToPreviousError: x,
    goToNextError: F,
    resetErrorNavigation: E
  } = Rv({
    formName: r,
    errors: de
  }), W = (() => {
    if (!We)
      return J === "loading" ? N : J === "success" ? Ie ?? n.actionBar.saved : I;
  })(), $ = async (ye) => {
    De.current && (clearTimeout(De.current), De.current = null), Eu(() => {
      oe("loading");
    });
    const Fe = { ...ye };
    for (const Ye of Object.keys(Fe))
      Fe[Ye] === null && (Fe[Ye] = void 0);
    const Te = await o(Fe);
    Te.success ? (U.reset(ye), E(), Ve(Te.message), oe("success"), De.current = setTimeout(() => {
      oe("idle"), Ve(void 0), De.current = null;
    }, P ?? 2e3)) : (oe("idle"), Te.errors && Object.entries(Te.errors).forEach(([Ye, In]) => {
      U.setError(Ye, { message: In });
    }), Te.rootMessage && U.setError("root", { message: Te.rootMessage }));
  };
  ie(() => () => {
    De.current && clearTimeout(De.current);
  }, []);
  const V = () => {
    U.reset(), E(), oe("idle"), Ve(void 0), De.current && (clearTimeout(De.current), De.current = null);
  }, ne = H(null), he = H($);
  he.current = $;
  const Ee = L(
    (ye) => ({
      submit: () => new Promise((Fe, Te) => {
        U.handleSubmit(
          async (Ye) => {
            await he.current(Ye), Fe();
          },
          () => Te(new Error("Form validation failed"))
        )();
      }),
      reset: () => {
        U.reset(), E();
      },
      isDirty: () => U.formState.isDirty,
      getValues: () => U.getValues(),
      setValue: (Fe, Te, Ye) => {
        U.setValue(
          Fe,
          Te,
          {
            shouldValidate: Ye?.shouldValidate ?? !0,
            shouldDirty: Ye?.shouldDirty ?? !0
          }
        );
      },
      setValues: (Fe, Te) => {
        for (const [Ye, In] of Object.entries(Fe))
          U.setValue(Ye, In, {
            shouldValidate: !1,
            shouldDirty: Te?.shouldDirty ?? !0
          });
        Te?.shouldValidate !== !1 && U.trigger();
      },
      trigger: async (Fe) => Fe ? U.trigger(Fe) : U.trigger(),
      getErrors: () => Lv(U.formState.errors),
      getFieldNames: () => Object.keys(U.getValues()),
      actionBar: {
        wiggle: (Fe) => {
          const Te = Object.keys(U.formState.errors).length > 0;
          Xe.current?.wiggle(
            Fe?.errorHighlight && !Te ? { ...Fe, errorHighlight: !1 } : Fe
          );
        }
      },
      _setStateCallback: ye?.stateCallback ? (Fe) => {
        ne.current = Fe;
      } : () => {
      }
    }),
    [U, E]
  );
  ie(() => (h && (h.current = Ee({ stateCallback: !0 })), () => {
    h && (h.current = null);
  }), [h, Ee]), ie(() => {
    ne.current && ne.current({
      isSubmitting: ve,
      hasErrors: We
    });
  }, [ve, We]);
  const we = Av(), He = H(null), Rt = h ?? He;
  ie(() => {
    if (we)
      return h || (He.current = Ee()), we.register(
        r,
        Rt,
        s,
        a,
        g,
        b
      ), () => {
        we.unregister(r);
      };
  }, [
    we,
    r,
    s,
    a,
    h,
    Rt,
    Ee,
    g
  ]);
  const Zt = Wa(G), it = z(
    () => ({
      formName: r,
      initialFiles: e.initialFiles,
      renderCustomField: e.renderCustomField,
      isLoading: m,
      useUpload: p
    }),
    [
      r,
      e.initialFiles,
      e.renderCustomField,
      m,
      p
    ]
  ), ln = /* @__PURE__ */ D(
    "form",
    {
      onSubmit: U.handleSubmit($),
      className: Q("flex flex-col", Tc, d),
      children: [
        Zt.map((ye, Fe) => {
          const Te = Fe !== 0 && ye.type !== "section" ? "mt-4" : "";
          switch (ye.type) {
            case "switchGroup":
              return /* @__PURE__ */ c("div", { className: Te, children: /* @__PURE__ */ c(
                Ha,
                {
                  fields: ye.fields,
                  dependentFields: ye.dependentFields,
                  cardSelectDependentFields: ye.cardSelectDependentFields
                }
              ) }, `switch-group-${Fe}`);
            case "field": {
              const Ye = ye.cardSelectDependentFields ? /* @__PURE__ */ c(
                fr.Provider,
                {
                  value: Ua(
                    ye.cardSelectDependentFields
                  ),
                  children: /* @__PURE__ */ c(Et, { field: ye.item.field })
                }
              ) : /* @__PURE__ */ c(Et, { field: ye.item.field });
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Q(Te, "empty:hidden"),
                  children: Ye
                },
                ye.item.field.id
              );
            }
            case "row":
              return /* @__PURE__ */ c("div", { className: Te, children: /* @__PURE__ */ c(Dn, { row: ye.item }) }, `row-${ye.index}`);
            case "section":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Fe !== 0 ? Fc : "",
                  children: /* @__PURE__ */ c(kg, { section: ye.item })
                },
                ye.item.id
              );
            default:
              return null;
          }
        }),
        se && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: se.message }),
        !v && C && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Me,
          {
            type: "submit",
            label: k,
            icon: _,
            loading: ve,
            disabled: We || m
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ c(ms.Provider, { value: it, children: /* @__PURE__ */ D(hc, { ...U, children: [
    S && le.length > 0 ? /* @__PURE__ */ D("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
        Sa,
        {
          items: le,
          activeItem: te,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: ln })
    ] }) : ln,
    !w && /* @__PURE__ */ c(
      yc,
      {
        ref: Xe,
        isActionBar: v,
        isDirty: ge,
        actionBarStatus: J,
        hasErrors: We,
        errorCount: mt,
        resolvedActionBarLabel: W,
        submitLabel: k,
        submitIcon: _,
        discardableChanges: A,
        discardLabel: M,
        discardIcon: T,
        issuesOneLabel: n.actionBar.issues.one,
        issuesOtherLabel: n.actionBar.issues.other,
        onSubmit: U.handleSubmit($),
        onDiscard: V,
        goToPreviousError: x,
        goToNextError: F
      }
    )
  ] }) });
}
function Qy(e) {
  const n = sn(e).shape, r = [];
  for (const [s, a] of Object.entries(n)) {
    const i = a, o = an(i);
    if (!o) continue;
    const l = Nc(i, o), d = hs(i, l), u = {
      name: s,
      type: l,
      label: o.label,
      required: d
    };
    if (o.placeholder && (u.placeholder = o.placeholder), o.helpText && (u.helpText = o.helpText), o.section && (u.section = o.section), o.customFieldName && (u.customFieldName = o.customFieldName), l === "select") {
      if ("source" in o && o.source)
        u.optionsSource = "dynamic";
      else if ("options" in o && o.options) {
        const f = [];
        for (const h of o.options)
          "label" in h && "value" in h && f.push({ label: h.label, value: h.value });
        u.options = f;
      }
    }
    r.push(u);
  }
  return r;
}
const Gy = bt("F0Form", mr);
function nt({
  field: e,
  value: t,
  onChange: n,
  onBlur: r,
  error: s,
  errorMessage: a,
  status: i,
  loading: o,
  required: l,
  disabled: d,
  hideLabel: u,
  initialFiles: f
}) {
  const h = wa(), m = l ?? (e.validation ? hs(e.validation) : !1), g = !u && e.type !== "checkbox" && e.type !== "custom", b = {
    value: t,
    onChange: n,
    onBlur: r ?? (() => {
    }),
    name: e.id,
    ref: () => {
    }
  }, p = {
    error: s || i?.type === "error" ? {
      type: "custom",
      message: a ?? i?.message
    } : void 0,
    isValidating: !!o
  }, S = s ? { type: "error", message: a } : i, v = d !== void 0 ? { ...e, disabled: d } : e, k = e.type === "file" ? f : void 0;
  return /* @__PURE__ */ D("div", { className: "space-y-2", id: h, children: [
    g && /* @__PURE__ */ D(
      "label",
      {
        htmlFor: e.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [
          e.label,
          m && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    ),
    na({
      field: v,
      formField: b,
      fieldState: p,
      isSubmitting: !1,
      isRequired: m,
      values: {},
      initialFiles: k,
      fieldStatus: S
    }),
    e.helpText && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-secondary", children: e.helpText }),
    /* @__PURE__ */ c(da, { status: S })
  ] });
}
nt.displayName = "F0FormField";
const Jc = ft((e, t) => /* @__PURE__ */ c(ka, { ref: t, variant: "heading", ...e }));
Jc.displayName = "F0Heading";
const Ky = Re(Jc), jv = ({
  props: e
}) => {
  const { status: t, title: n, taskCount: r, completedCount: s, expanded: a, onExpandToggle: i } = e;
  return /* @__PURE__ */ D(Ke, { children: [
    /* @__PURE__ */ c(Mo, { icon: Ud, size: "sm" }),
    /* @__PURE__ */ D("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ c(
        Wd,
        {
          label: `${r} ${n}`,
          itemCount: void 0,
          open: a,
          onOpenChange: () => i(),
          showOpenChange: !0
        }
      ),
      s !== void 0 && /* @__PURE__ */ c(
        Po,
        {
          text: `${s}/${r}`,
          variant: t === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, $v = ({
  primaryAction: e,
  secondaryActions: t,
  otherActions: n
}) => {
  const r = t && t.length > 0, s = n && n.length > 0;
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    s && /* @__PURE__ */ c(ia, { items: n, size: "md" }),
    t?.map((a, i) => /* @__PURE__ */ c(
      Me,
      {
        label: a.label,
        icon: a.icon,
        variant: "outline",
        size: "md",
        onClick: a.onClick,
        disabled: a.disabled,
        loading: a.loading
      },
      `${a.label}-${i}`
    )),
    e && (s || r) && /* @__PURE__ */ c("div", { className: "mx-1 hidden h-4 w-px bg-f1-background-secondary-hover xs:block" }),
    e && /* @__PURE__ */ c(
      Me,
      {
        label: e.label,
        icon: e.icon,
        variant: "default",
        size: "md",
        onClick: e.onClick,
        disabled: e.disabled,
        loading: e.loading
      }
    )
  ] });
}, zv = ({ props: e }) => {
  const { metadata: t, primaryAction: n, secondaryActions: r, otherActions: s } = e, a = t?.some(Boolean), i = n || r && r.length > 0 || s && s.length > 0;
  return /* @__PURE__ */ D("div", { className: "pl-9", children: [
    t && a && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(el, { items: t }) }),
    i && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(
      $v,
      {
        primaryAction: n,
        secondaryActions: r,
        otherActions: s
      }
    ) })
  ] });
}, qv = ({ props: e }) => {
  const { status: t, icon: n = Hd, title: r, description: s, metadata: a } = e, i = a?.some(Boolean);
  return /* @__PURE__ */ D("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ D("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ c(Mo, { icon: n, size: "sm" }),
      /* @__PURE__ */ c(
        "h4",
        {
          className: Q(
            "text-base font-semibold text-f1-foreground",
            t === "completed" && "line-through"
          ),
          children: r
        }
      ),
      s && /* @__PURE__ */ c(sl, { content: s, variant: "description" })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex justify-end items-center gap-3 pl-9", children: t === "completed" && a && i && /* @__PURE__ */ c(el, { items: a }) })
  ] });
}, Zv = ({ status: e }) => /* @__PURE__ */ c(
  "div",
  {
    "data-testid": "timeline-connector",
    className: Q(
      "w-0.5 min-h-2 flex-1",
      e === "completed" && "bg-f1-icon-positive",
      e === "in-progress" && "bg-f1-border-secondary",
      e === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )
  }
), Uv = {
  completed: /* @__PURE__ */ c(Le, { icon: Yr, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ c(Le, { icon: Gd, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ c(Le, { icon: Qd, size: "lg", color: "secondary" })
}, ed = ({
  status: e,
  isLast: t,
  hideStatus: n,
  children: r
}) => /* @__PURE__ */ D("div", { className: "flex gap-4", children: [
  !n && /* @__PURE__ */ D("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "h-8 flex flex-col justify-center",
        "data-testid": `timeline-status-${e}`,
        children: Uv[e]
      }
    ),
    !t && /* @__PURE__ */ c(Zv, { status: e })
  ] }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: r })
] }), td = ({ props: e }) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1 } = e;
  return /* @__PURE__ */ D(ed, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(qv, { props: e }) }),
    t !== "completed" && /* @__PURE__ */ c(zv, { props: e })
  ] });
}, Wv = ({
  props: e
}) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1, expanded: s, items: a } = e;
  return /* @__PURE__ */ D(ed, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(jv, { props: e }) }),
    s && /* @__PURE__ */ c("div", { className: "flex flex-col pl-4", children: a.map((i, o) => /* @__PURE__ */ c(
      td,
      {
        props: {
          ...i,
          hideStatus: !0,
          isLast: o === a.length - 1
        }
      },
      `${i.title}-${o}`
    )) })
  ] });
}, Hv = (e) => "items" in e, Qv = (e) => Hv(e) ? /* @__PURE__ */ c(Wv, { props: e }) : /* @__PURE__ */ c(td, { props: e }), Xy = [
  "completed",
  "in-progress",
  "not-started"
], Yy = Re(
  bt("F0TimelineRow", Qv)
), Jy = Re(Kd), ex = Re(
  bt(
    "F0GridStack",
    So
  )
), Ls = 16, Gv = nn({
  base: "h-0.5 rounded-full bg-f1-foreground cursor-pointer",
  variants: {
    depth: {
      0: "w-4",
      1: "w-3",
      2: "w-2",
      3: "w-1.5"
    },
    variant: {
      light: "",
      dark: "dark"
    },
    active: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "light",
      active: !1,
      className: "bg-f1-foreground-tertiary opacity-60"
    },
    {
      variant: "dark",
      active: !1,
      className: "opacity-50"
    }
  ],
  defaultVariants: {
    depth: 3,
    variant: "light",
    active: !0
  }
});
function nd(e, t = 0) {
  return e.flatMap((n) => [
    { id: n.id, depth: Math.min(t, 3) },
    ...n.children ? nd(n.children, t + 1) : []
  ]);
}
function Kv(e, t) {
  const n = e.length;
  if (n <= Ls) return e;
  const r = n / (Ls - 1), s = new Set(
    Array.from(
      { length: Ls - 1 },
      (a, i) => Math.min(Math.floor(i * r), n - 1)
    )
  );
  if (s.add(n - 1), t) {
    const a = e.findIndex((i) => i.id === t);
    if (a !== -1 && !s.has(a)) {
      const i = [...s].reduce(
        (o, l) => Math.abs(l - a) < Math.abs(o - a) ? l : o
      );
      s.delete(i), s.add(a);
    }
  }
  return [...s].sort((a, i) => a - i).map((a) => e[a]);
}
function Xv({
  items: e,
  activeItem: t,
  className: n,
  align: r = "left",
  variant: s = "dark"
}) {
  const a = z(
    () => Kv(nd(e), t),
    [e, t]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "flex flex-col justify-center gap-2 py-3",
        r === "right" ? "items-end" : "items-start",
        n
      ),
      children: a.map((i) => /* @__PURE__ */ c(
        "div",
        {
          className: Gv({
            depth: i.depth,
            variant: s,
            active: i.id === t
          })
        },
        i.id
      ))
    }
  );
}
const Ms = "[role='menu']";
function Yv(e, t) {
  const n = H(null), r = L(() => {
    n.current?.(), n.current = null;
  }, []);
  return ie(() => r, [r]), { deferClose: L(() => {
    if (!document.querySelector(Ms)) return !1;
    r();
    const a = () => {
      o.disconnect(), document.removeEventListener("pointermove", l), n.current = null;
    }, i = () => {
      a(), t();
    }, o = new MutationObserver(() => {
      document.querySelector(Ms) || i();
    });
    o.observe(document.body, { childList: !0, subtree: !0 });
    const l = (d) => {
      const u = d.target;
      !u.closest(Ms) && !e.current?.contains(u) && i();
    };
    return document.addEventListener("pointermove", l), n.current = a, !0;
  }, [e, t, r]) };
}
const Jv = 300, eb = 0, tb = nn({
  base: "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
  variants: {
    size: {
      sm: "max-h-[240px]",
      md: "max-h-[400px]",
      lg: "max-h-[600px]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function rd({
  title: e,
  items: t,
  className: n,
  activeItem: r,
  collapsible: s = !1,
  sortable: a,
  onReorder: i,
  showChildrenCounter: o = !1,
  barsAlign: l = "left",
  size: d = "md",
  variant: u = "light",
  portalContainer: f
}) {
  const [h, m] = ee(!1), g = H(!1), b = H(null), { deferClose: p } = Yv(b, () => m(!1)), S = (k) => {
    !k && p() || (k && !h && (g.current = !0), m(k));
  }, v = L((k) => {
    b.current = k, !(!k || !g.current) && (g.current = !1, requestAnimationFrame(() => {
      k.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ D(
    Xd,
    {
      open: h,
      onOpenChange: S,
      openDelay: eb,
      closeDelay: Jv,
      children: [
        /* @__PURE__ */ c(Yd, { asChild: !0, children: /* @__PURE__ */ c(
          "button",
          {
            className: Q(
              Xr(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              n
            ),
            "aria-label": e ?? "Menu",
            children: /* @__PURE__ */ c(
              Xv,
              {
                items: t,
                activeItem: r,
                align: l,
                variant: u
              }
            )
          }
        ) }),
        /* @__PURE__ */ c(
          Jd,
          {
            ref: v,
            side: l === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: f,
            className: Q(
              tb({ size: d }),
              !e && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ c(
              Sa,
              {
                title: e,
                items: t,
                activeItem: r,
                collapsible: s,
                sortable: a,
                onReorder: i,
                hideChildrenCounter: !o,
                scrollable: !1
              }
            )
          }
        )
      ]
    }
  );
}
const tx = Re(
  bt(
    "F0TableOfContentPopover",
    rd
  )
), nb = Kn.create(eu), rb = () => {
  const e = Ce();
  return /* @__PURE__ */ D("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ c(
      nb,
      {
        size: "xs",
        animate: {
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
        },
        transition: {
          rotate: {
            duration: 1,
            ease: "linear",
            repeat: 1 / 0,
            repeatDelay: 1
            // Adds a 0.5s delay between each repetition
          },
          scale: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          },
          filter: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          }
        }
      }
    ),
    /* @__PURE__ */ c("span", { className: "font-medium", children: e.t("surveyFormBuilder.labels.applyingChanges") })
  ] });
}, sb = Xo(rb);
var ab = ah();
const ao = /* @__PURE__ */ tu(ab), sd = (e) => {
  switch (e) {
    case "1-5":
      return new Array(5).fill(0).map((t, n) => ({
        value: n + 1,
        label: (n + 1).toString()
      }));
    case "1-10":
      return new Array(10).fill(0).map((t, n) => ({
        value: n + 1,
        label: (n + 1).toString()
      }));
    case "emojis":
      return [
        { value: 1, label: "😠" },
        { value: 2, label: "😐" },
        { value: 3, label: "😊" },
        { value: 4, label: "😍" },
        { value: 5, label: "🤩" }
      ];
  }
}, ad = (e) => {
  if (!e || e.length === 0) return null;
  const t = e.length, n = e.every((r) => /^\d+$/.test(r.label.trim()));
  return t === 5 && n ? "1-5" : t === 10 && n ? "1-10" : t === 5 && !n ? "emojis" : null;
}, aa = (e) => {
  switch (e) {
    case "rating":
      return {
        value: 0,
        options: sd("1-5")
      };
    case "select":
    case "multi-select":
      return {
        options: [
          {
            value: "option-1",
            label: "New option 1"
          }
        ]
      };
    case "dropdown-single":
    case "dropdown-multi":
      return {};
    case "text":
    case "longText":
      return {
        value: ""
      };
    case "numeric":
      return {
        value: 0
      };
    case "link":
      return {
        value: ""
      };
    case "date":
      return {
        value: /* @__PURE__ */ new Date()
      };
    case "file":
      return {
        value: null
      };
    case "checkbox":
      return {
        value: null,
        label: ""
      };
    default:
      throw new Error(`Unsupported question type: ${e}`);
  }
}, yr = (e) => `new-${e}-${Date.now()}`, io = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], ib = (e) => {
  if (!e)
    return io[0];
  const t = io.find(
    (n) => e?.includes(n)
  );
  if (!t)
    throw new Error(
      `No default question type found for allowed question types: ${e.join(", ")}`
    );
  return t;
}, id = Ct(void 0);
function Ga({
  elements: e,
  children: t,
  disabled: n,
  answering: r,
  disallowOptionalQuestions: s,
  onChange: a,
  allowedQuestionTypes: i,
  errors: o,
  onFieldBlur: l,
  useUpload: d,
  datasets: u
}) {
  const f = H(e);
  f.current = e;
  const h = H(a);
  h.current = a;
  const m = z(() => {
    const T = e[e.length - 1];
    if (T)
      return T.type === "section" ? T.section.id : T.question.id;
  }, [e]), g = L((T) => {
    const I = T.id, N = f.current.map((P) => {
      if (P.type === "question")
        return P.question.id === I ? {
          ...P,
          question: {
            ...P.question,
            ...T
          }
        } : P;
      if (P.type === "section") {
        const G = P.section.questions?.map(
          (X) => X.id === I ? {
            ...X,
            ...T
          } : X
        );
        return {
          ...P,
          section: {
            ...P.section,
            questions: G
          }
        };
      }
      return P;
    });
    h.current(N);
  }, []), b = L((T) => {
    const I = T.id, N = f.current.map((P) => P.type === "section" && P.section.id === I ? {
      ...P,
      section: {
        ...P.section,
        ...T
      }
    } : P);
    h.current(N);
  }, []), p = L(
    ({
      element: T,
      afterId: I
    }) => {
      const N = [...f.current];
      if (!I) {
        N.push(T), h.current(N);
        return;
      }
      ((G) => {
        N.forEach((X, te) => {
          X.type === "section" && X.section.id === G && N.splice(te + 1, 0, T), X.type === "question" && X.question.id === G && N.splice(te + 1, 0, T);
        });
      })(I), T.type === "question" && N.length === f.current.length && N.forEach((G, X) => {
        if (G.type !== "section")
          return;
        const te = [...G.section.questions ?? []];
        te?.forEach((fe, q) => {
          fe.id === I && te.splice(q + 1, 0, T.question);
        }), N.splice(X, 1, {
          ...G,
          section: {
            ...G.section,
            questions: te
          }
        });
      }), h.current(N);
    },
    []
  ), S = L(
    ({ type: T, afterId: I, datasetKey: N }) => {
      if ((T === "dropdown-single" || T === "dropdown-multi") && !N)
        throw new Error(`${T} questions require a datasetKey`);
      const P = yr(
        T === "section" ? "section" : "question"
      ), G = ib(i), X = T === "section" ? {
        type: "section",
        section: {
          id: P,
          title: "",
          questions: [
            {
              id: yr("question"),
              title: "",
              description: "",
              type: G,
              required: !0,
              ...aa(
                G
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: P,
          title: "",
          description: "",
          type: T,
          required: !0,
          ...aa(T),
          ...N ? { datasetKey: N } : {}
        }
      };
      p({ element: X, afterId: I });
    },
    [p, i]
  ), v = L(
    ({ elementId: T }) => {
      const N = ao(
        f.current.map(
          (G) => G.type === "section" ? [G, ...G.section.questions ?? []] : [G.question]
        )
      ).find(
        (G) => G.type === "section" ? G.section.id === T : G.id === T
      );
      let P;
      N && (P = N.type === "section" ? {
        ...N,
        section: {
          ...N.section,
          id: yr("section")
        }
      } : {
        type: "question",
        question: { ...N, id: yr("question") }
      }), P && p({ element: P, afterId: T });
    },
    [p]
  ), k = L((T) => ao(
    f.current.map(
      (N) => N.type === "question" ? [N.question] : N.section.questions
    )
  ).find((N) => N?.id === T), []), _ = L((T) => {
    let I = f.current.filter((N) => N.type === "section" ? N.section.id !== T : N.type === "question" ? N.question.id !== T : !0);
    I.length === f.current.length && (I = I.map((N) => N.type === "section" ? {
      ...N,
      section: {
        ...N.section,
        questions: N.section.questions?.filter(
          (P) => P.id !== T
        )
      }
    } : N)), h.current(I);
  }, []), y = L((T) => {
    const I = f.current.find((N) => N.type === "section" ? N.section.questions?.some(
      (P) => P.id === T
    ) : !1);
    return I?.type === "section" && I?.section.questions?.length === 1;
  }, []), w = L((T) => {
    const I = f.current.find((N) => N.type === "section" ? N.section.questions?.some(
      (P) => P.id === T
    ) : !1);
    return I?.type === "section" ? I.section : void 0;
  }, []), C = H(!0), A = !e.length;
  ie(() => {
    if (C.current) {
      C.current = !1, A && !n && !r && S({
        type: "section"
      });
      return;
    }
  }, [A, S, n]);
  const O = L(
    (T) => T === "file" && !d ? !1 : !i || i.includes(T),
    [i, d]
  ), M = z(
    () => ({
      onQuestionChange: g,
      onSectionChange: b,
      onAddNewElement: S,
      onDuplicateElement: v,
      getIsSingleQuestionInSection: y,
      getSectionContainingQuestion: w,
      disabled: n,
      answering: r,
      getQuestionById: k,
      deleteElement: _,
      lastElementId: m,
      disallowOptionalQuestions: s,
      isQuestionTypeAllowed: O,
      errors: o,
      onFieldBlur: l,
      useUpload: d,
      datasets: u
    }),
    [
      g,
      b,
      S,
      v,
      y,
      w,
      n,
      r,
      k,
      _,
      m,
      s,
      O,
      o,
      l,
      d,
      u
    ]
  );
  return /* @__PURE__ */ c(id.Provider, { value: M, children: t });
}
function ze() {
  const e = et(id);
  if (!e)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return e;
}
const od = Ct(void 0);
function Ka({ children: e }) {
  const [t, n] = ee(!1), [r, s] = ee(null);
  return /* @__PURE__ */ c(
    od.Provider,
    {
      value: { isDragging: t, setIsDragging: n, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function En() {
  const e = et(od);
  return e || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const Xa = () => {
  const { isQuestionTypeAllowed: e, datasets: t } = ze(), { t: n } = Ce(), s = [
    {
      label: n("surveyFormBuilder.questionTypes.rating"),
      icon: Bo,
      questionType: "rating"
    },
    {
      label: n("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: fn,
      questionType: "multi-select"
    },
    {
      label: n("surveyFormBuilder.questionTypes.singleChoice"),
      icon: kt,
      questionType: "select"
    },
    {
      label: n("surveyFormBuilder.questionTypes.text"),
      icon: Vo,
      questionType: "text"
    },
    {
      label: n("surveyFormBuilder.questionTypes.longText"),
      icon: jo,
      questionType: "longText"
    },
    {
      label: n("surveyFormBuilder.questionTypes.numeric"),
      icon: Tr,
      questionType: "numeric"
    },
    {
      label: n("surveyFormBuilder.questionTypes.link"),
      icon: ma,
      questionType: "link"
    },
    {
      label: n("surveyFormBuilder.questionTypes.date"),
      icon: $o,
      questionType: "date"
    },
    {
      label: n("surveyFormBuilder.questionTypes.file"),
      icon: fa,
      questionType: "file"
    },
    {
      label: n("surveyFormBuilder.questionTypes.checkbox"),
      icon: Yr,
      questionType: "checkbox"
    }
  ].filter(
    (i) => e(i.questionType)
  ), a = e("dropdown-single") ? Object.entries(t ?? {}).map(([i, o]) => ({
    label: o.title,
    icon: o.icon ?? Fr,
    questionType: "dropdown-single",
    datasetKey: i
  })) : [];
  return [...s, ...a];
}, ob = {
  rating: Bo,
  "multi-select": fn,
  select: kt,
  text: Vo,
  longText: jo,
  numeric: Tr,
  link: ma,
  date: $o,
  "dropdown-single": Fr,
  "dropdown-multi": Fr,
  file: fa,
  checkbox: Yr
}, lb = () => {
  const { disabled: e, answering: t, onAddNewElement: n, isQuestionTypeAllowed: r } = ze(), [s, a] = ee(!1), i = Xa(), { t: o } = Ce(), l = (h, m) => {
    n?.({ type: h, datasetKey: m });
  }, d = () => {
    n?.({ type: "section" });
  }, u = i.filter((h) => !h.datasetKey), f = Array.from(
    new Set(
      i.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  );
  return e || t ? null : /* @__PURE__ */ c("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ D(ha, { open: s, onOpenChange: a, children: [
    /* @__PURE__ */ c(pa, { asChild: !0, children: /* @__PURE__ */ c(
      Me,
      {
        icon: ga,
        label: o("surveyFormBuilder.actions.addQuestion"),
        size: "md",
        variant: "outline",
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ D(va, { align: "center", className: "w-80", children: [
      /* @__PURE__ */ c(dt, { onClick: d, children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
        /* @__PURE__ */ c(Le, { icon: ba, color: "default" }),
        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: o("surveyFormBuilder.questionTypes.section") })
      ] }) }),
      /* @__PURE__ */ c(wn, {}),
      u.map((h) => /* @__PURE__ */ c(
        dt,
        {
          onClick: () => l(h.questionType),
          children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ c(Le, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: h.label })
          ] })
        },
        h.questionType
      )),
      f.length > 0 && /* @__PURE__ */ D(Ke, { children: [
        /* @__PURE__ */ c(wn, {}),
        f.map((h) => {
          const m = i.find(
            (g) => g.datasetKey === h && g.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ D($n, { children: [
            /* @__PURE__ */ c(zn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(Le, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h })
            ] }) }),
            /* @__PURE__ */ c(qn, { children: /* @__PURE__ */ D(Zn, { children: [
              r("dropdown-single") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => l("dropdown-single", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(Le, { icon: kt, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: o("surveyFormBuilder.labels.singleSelection") })
                  ] })
                }
              ),
              r("dropdown-multi") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => l("dropdown-multi", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(Le, { icon: fn, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: o("surveyFormBuilder.labels.multiSelection") })
                  ] })
                }
              )
            ] }) })
          ] }, h);
        })
      ] })
    ] })
  ] }) });
}, cb = ({
  open: e,
  onConfirm: t,
  onCancel: n
}) => {
  const { t: r } = Ce();
  return /* @__PURE__ */ c(
    Lu,
    {
      open: e,
      onClose: n,
      header: {
        type: "warning",
        title: r("surveyFormBuilder.labels.lastQuestionDialogTitle"),
        description: r(
          "surveyFormBuilder.labels.lastQuestionDialogDescription"
        )
      },
      actions: {
        primary: {
          label: r("surveyFormBuilder.actions.confirmMoveLastQuestion"),
          onClick: t
        },
        secondary: {
          label: r("surveyFormBuilder.actions.cancelMoveLastQuestion"),
          onClick: n
        }
      }
    }
  );
}, Kr = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function db(e, t) {
  if (e !== "rating" || !t || t.type !== "rating")
    return null;
  const n = t.options;
  return !Array.isArray(n) || n.length === 0 || typeof n[0]?.value != "number" ? null : ad(n);
}
function ub(e, t, n) {
  return !(e === t || (e === "select" || e === "multi-select") && n && "options" in n && Array.isArray(n.options) && n.options.length > 0 || (e === "dropdown-single" || e === "dropdown-multi") && (t === "dropdown-single" || t === "dropdown-multi"));
}
function ld() {
  const {
    onQuestionChange: e,
    getQuestionById: t,
    deleteElement: n,
    onDuplicateElement: r,
    disallowOptionalQuestions: s
  } = ze(), a = Xa();
  return { getActionsForQuestion: L(
    (o, l, d) => {
      const u = t(o), f = u && "datasetKey" in u && typeof u.datasetKey == "string" ? u.datasetKey : void 0, h = db(l, u);
      return {
        question: u,
        questionTypes: a,
        currentRatingType: h,
        currentDatasetKey: f,
        isMultiSelectEnabled: l === "dropdown-multi" && !!f,
        disallowOptionalQuestions: s,
        canDelete: d,
        handleChangeRequired: (_) => {
          e?.({
            id: o,
            type: l,
            required: _
          });
        },
        handleSelectQuestionType: (_, y) => {
          const w = ub(
            _,
            l,
            u
          ), C = _ === "dropdown-single" || _ === "dropdown-multi", A = l === "dropdown-single" || l === "dropdown-multi";
          e?.({
            id: o,
            type: _,
            // Set datasetKey for dropdown types, clear it for non-dropdown types
            ...C ? { datasetKey: y } : { datasetKey: void 0 },
            // Reset value when switching between single/multi or switching into
            // a dropdown type from a different type to avoid incompatible values
            ...C && A && _ !== l || C && !A ? { value: _ === "dropdown-multi" ? [] : null } : {},
            ...w && {
              ...aa(_)
            }
          });
        },
        handleSelectRatingType: (_) => {
          e?.({
            id: o,
            type: "rating",
            value: 0,
            options: sd(_)
          });
        },
        handleToggleMultiSelect: (_) => {
          if (!f) return;
          e?.({
            id: o,
            type: _ ? "dropdown-multi" : "dropdown-single",
            datasetKey: f,
            value: _ ? [] : null
          });
        },
        handleDuplicate: () => {
          r?.({ elementId: o, type: l });
        },
        handleDelete: () => {
          n(o);
        }
      };
    },
    [
      t,
      e,
      n,
      r,
      s,
      a
    ]
  ), questionTypes: a };
}
function fb({
  questionId: e,
  questionType: t,
  canDelete: n = !0
}) {
  const { getActionsForQuestion: r } = ld();
  return z(
    () => r(e, t, n),
    [r, e, t, n]
  );
}
const oo = ({
  label: e,
  icon: t,
  checked: n,
  onChange: r
}) => /* @__PURE__ */ c(
  dt,
  {
    className: "!pb-2.5 pr-4",
    onClick: (s) => {
      s.preventDefault(), r(!n);
    },
    children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ot, { icon: t, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: e }),
      /* @__PURE__ */ c(
        Eo,
        {
          title: e,
          checked: n,
          onCheckedChange: r,
          hideLabel: !0
        }
      )
    ] })
  }
), mb = ({
  label: e,
  value: t,
  currentDatasetKey: n,
  questionTypes: r,
  currentRatingType: s,
  isQuestionTypeAllowed: a,
  onSelectQuestionType: i,
  onSelectRatingType: o
}) => {
  const { t: l } = Ce(), d = r.filter((h) => !h.datasetKey), u = Array.from(
    new Set(
      r.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  ), f = n ? r.find(
    (h) => h.questionType === t && h.datasetKey === n
  )?.label ?? void 0 : r.find(
    (h) => h.questionType === t && !h.datasetKey
  )?.label ?? void 0;
  return /* @__PURE__ */ D($n, { children: [
    /* @__PURE__ */ c(zn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ot, { icon: qo, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: e }),
      !!f && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: f })
    ] }) }),
    /* @__PURE__ */ c(qn, { children: /* @__PURE__ */ D(Zn, { children: [
      d.map((h) => {
        const m = h.questionType === "rating", g = t === h.questionType && !n;
        return m ? /* @__PURE__ */ D($n, { children: [
          /* @__PURE__ */ c(zn, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
            /* @__PURE__ */ c(ot, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
            s && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: Kr.find(
              (b) => b.value === s
            )?.label })
          ] }) }),
          /* @__PURE__ */ c(qn, { children: /* @__PURE__ */ c(Zn, { children: Kr.map((b) => /* @__PURE__ */ c(
            dt,
            {
              onClick: () => o(b.value),
              children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
                /* @__PURE__ */ c("span", { className: "flex-1", children: b.label }),
                s === b.value && /* @__PURE__ */ c(ot, { icon: kt, color: "default" })
              ] })
            },
            b.value
          )) }) })
        ] }, h.questionType) : /* @__PURE__ */ c(
          dt,
          {
            onClick: () => i(h.questionType),
            children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              /* @__PURE__ */ c(ot, { icon: h.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
              g && /* @__PURE__ */ c(ot, { icon: kt, color: "default" })
            ] })
          },
          h.questionType
        );
      }),
      u.length > 0 && /* @__PURE__ */ D(Ke, { children: [
        /* @__PURE__ */ c(wn, {}),
        u.map((h) => {
          const m = r.find(
            (g) => g.datasetKey === h && g.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ D($n, { children: [
            /* @__PURE__ */ c(zn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(ot, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h }),
              n === h && /* @__PURE__ */ c(ot, { icon: kt, color: "default" })
            ] }) }),
            /* @__PURE__ */ c(qn, { children: /* @__PURE__ */ D(Zn, { children: [
              a("dropdown-single") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => i("dropdown-single", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ot, { icon: kt, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.singleSelection") }),
                    n === h && t === "dropdown-single" && /* @__PURE__ */ c(ot, { icon: kt, color: "default" })
                  ] })
                }
              ),
              a("dropdown-multi") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => i("dropdown-multi", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ot, { icon: fn, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.multiSelection") }),
                    n === h && t === "dropdown-multi" && /* @__PURE__ */ c(ot, { icon: kt, color: "default" })
                  ] })
                }
              )
            ] }) })
          ] }, h);
        })
      ] })
    ] }) })
  ] });
}, lo = ({
  label: e,
  icon: t,
  onClick: n,
  critical: r
}) => /* @__PURE__ */ c(
  dt,
  {
    onClick: n,
    className: Q(r ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ot, { icon: t }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: e })
    ] })
  }
);
function hb({
  open: e,
  setOpen: t,
  questionId: n,
  questionType: r,
  canDeleteQuestion: s = !0
}) {
  const { t: a } = Ce(), { isQuestionTypeAllowed: i } = ze(), {
    question: o,
    questionTypes: l,
    currentRatingType: d,
    currentDatasetKey: u,
    isMultiSelectEnabled: f,
    disallowOptionalQuestions: h,
    handleChangeRequired: m,
    handleSelectQuestionType: g,
    handleSelectRatingType: b,
    handleToggleMultiSelect: p,
    handleDuplicate: S,
    handleDelete: v
  } = fb({
    questionId: n,
    questionType: r,
    canDelete: s
  });
  return /* @__PURE__ */ D(ha, { open: e, onOpenChange: t, children: [
    /* @__PURE__ */ c(pa, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ c(
      Me,
      {
        icon: Nr,
        label: a("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ D(va, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ c(nu, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: a("surveyFormBuilder.labels.questionOptions") }),
      !h && /* @__PURE__ */ c(hr, { children: /* @__PURE__ */ c(
        oo,
        {
          label: a("surveyFormBuilder.labels.required"),
          icon: zo,
          checked: !!o?.required,
          onChange: m
        }
      ) }),
      !!u && /* @__PURE__ */ c(hr, { children: /* @__PURE__ */ c(
        oo,
        {
          label: a("surveyFormBuilder.labels.allowMultiSelection"),
          icon: fn,
          checked: f,
          onChange: p
        }
      ) }),
      /* @__PURE__ */ c(hr, { children: /* @__PURE__ */ c(
        mb,
        {
          label: a("surveyFormBuilder.labels.questionType"),
          value: r,
          currentDatasetKey: u,
          questionTypes: l,
          currentRatingType: d,
          isQuestionTypeAllowed: i,
          onSelectQuestionType: g,
          onSelectRatingType: b
        }
      ) }),
      /* @__PURE__ */ c(wn, {}),
      /* @__PURE__ */ D(hr, { children: [
        /* @__PURE__ */ c(
          lo,
          {
            label: a("surveyFormBuilder.actions.duplicateQuestion"),
            icon: Ar,
            onClick: S
          }
        ),
        s && /* @__PURE__ */ c(
          lo,
          {
            label: a("surveyFormBuilder.actions.deleteQuestion"),
            icon: xn,
            onClick: v,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
function mn(e) {
  const { answering: t, getSectionContainingQuestion: n } = ze(), r = n(e.id), s = e.locked || r?.locked;
  return t ? !1 : s || !0;
}
const co = {
  fieldSizing: "content"
}, Pe = ({
  id: e,
  title: t,
  description: n,
  children: r,
  required: s,
  locked: a,
  type: i
}) => {
  const {
    onQuestionChange: o,
    onAddNewElement: l,
    disabled: d,
    answering: u,
    getIsSingleQuestionInSection: f,
    getSectionContainingQuestion: h,
    isQuestionTypeAllowed: m
  } = ze(), g = h(e), b = g?.locked || a, p = !!g, [S, v] = ee(!1), [k, _] = ee(!1), { isDragging: y } = En(), { t: w } = Ce(), C = (q) => {
    o?.({
      id: e,
      type: i,
      title: q.target.value
    });
  }, A = (q) => {
    o?.({
      id: e,
      type: i,
      description: q.target.value
    });
  }, O = (q, le) => {
    l?.({
      type: q,
      afterId: e,
      datasetKey: le
    });
  }, M = () => {
    l?.({
      type: "section",
      afterId: e
    });
  }, T = Xa(), I = T.filter((q) => !q.datasetKey), N = Array.from(
    new Set(
      T.filter((q) => !!q.datasetKey).map((q) => q.datasetKey)
    )
  ), P = f(e), G = H(null), X = H(!P);
  ie(() => {
    X.current && G.current?.focus({ preventScroll: !0 });
  }, []);
  const te = d || b || u, fe = !u && te;
  return /* @__PURE__ */ D(
    "div",
    {
      id: `co-creation-question-${e}`,
      className: Q(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !y && !u && "hover:border-f1-border-hover",
        !u || n ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ D("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ c("div", { className: "relative w-full", children: u ? /* @__PURE__ */ D("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              t || w("surveyFormBuilder.labels.titlePlaceholder"),
              s && /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ D(Ke, { children: [
              /* @__PURE__ */ c(
                "textarea",
                {
                  ref: G,
                  value: t,
                  "aria-label": w("surveyFormBuilder.labels.title"),
                  placeholder: w("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: C,
                  disabled: te,
                  className: Q(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    fe && "cursor-not-allowed"
                  ),
                  style: co
                }
              ),
              /* @__PURE__ */ D("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ c("span", { className: "opacity-0", children: t || w("surveyFormBuilder.labels.titlePlaceholder") }),
                s && /* @__PURE__ */ D(
                  "span",
                  {
                    className: Q(
                      "text-f1-foreground-critical",
                      !t && "text-f1-foreground-secondary"
                    ),
                    children: [
                      " ",
                      "*"
                    ]
                  }
                )
              ] })
            ] }) }),
            !d && !u && !b && /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "opacity-0 group-hover/question:opacity-100",
                  k && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  hb,
                  {
                    open: k,
                    setOpen: _,
                    questionId: e,
                    questionType: i,
                    canDeleteQuestion: !p || !P
                  }
                )
              }
            )
          ] }),
          u ? n ? /* @__PURE__ */ c("p", { className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary", children: n }) : null : /* @__PURE__ */ c(
            "textarea",
            {
              value: n,
              "aria-label": w("surveyFormBuilder.labels.description"),
              placeholder: w(
                "surveyFormBuilder.labels.questionDescriptionPlaceholder"
              ),
              onChange: A,
              disabled: te,
              className: Q(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                fe && "cursor-not-allowed"
              ),
              style: co
            }
          )
        ] }),
        r,
        u && /* @__PURE__ */ c(
          ds,
          {
            className: "-mt-2",
            fallback: w(s ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !d && !u && !g?.locked && /* @__PURE__ */ c(
          "div",
          {
            className: Q(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              S && "opacity-100"
            ),
            children: /* @__PURE__ */ D(
              ha,
              {
                open: S,
                onOpenChange: v,
                children: [
                  /* @__PURE__ */ c(pa, { asChild: !0, children: /* @__PURE__ */ c(
                    Me,
                    {
                      icon: ga,
                      label: w("surveyFormBuilder.actions.addQuestion"),
                      size: "sm",
                      variant: "outline",
                      hideLabel: !0
                    }
                  ) }),
                  /* @__PURE__ */ D(va, { align: "center", className: "w-80", children: [
                    !p && /* @__PURE__ */ D(Ke, { children: [
                      /* @__PURE__ */ c(dt, { onClick: M, children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                        /* @__PURE__ */ c(Le, { icon: ba, color: "default" }),
                        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: w("surveyFormBuilder.questionTypes.section") })
                      ] }) }),
                      /* @__PURE__ */ c(wn, {})
                    ] }),
                    I.map((q) => /* @__PURE__ */ c(
                      dt,
                      {
                        onClick: () => O(q.questionType),
                        children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                          /* @__PURE__ */ c(Le, { icon: q.icon, color: "default" }),
                          /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: q.label })
                        ] })
                      },
                      q.questionType
                    )),
                    N.length > 0 && /* @__PURE__ */ D(Ke, { children: [
                      /* @__PURE__ */ c(wn, {}),
                      N.map((q) => {
                        const le = T.find(
                          (ue) => ue.datasetKey === q && ue.questionType === "dropdown-single"
                        );
                        return /* @__PURE__ */ D($n, { children: [
                          /* @__PURE__ */ c(zn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                            le && /* @__PURE__ */ c(Le, { icon: le.icon, color: "default" }),
                            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: le?.label ?? q })
                          ] }) }),
                          /* @__PURE__ */ c(qn, { children: /* @__PURE__ */ D(Zn, { children: [
                            m("dropdown-single") && /* @__PURE__ */ c(
                              dt,
                              {
                                onClick: () => O("dropdown-single", q),
                                children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(Le, { icon: kt, color: "default" }),
                                  /* @__PURE__ */ c("span", { className: "flex-1", children: w(
                                    "surveyFormBuilder.labels.singleSelection"
                                  ) })
                                ] })
                              }
                            ),
                            m("dropdown-multi") && /* @__PURE__ */ c(
                              dt,
                              {
                                onClick: () => O("dropdown-multi", q),
                                children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(Le, { icon: fn, color: "default" }),
                                  /* @__PURE__ */ c("span", { className: "flex-1", children: w(
                                    "surveyFormBuilder.labels.multiSelection"
                                  ) })
                                ] })
                              }
                            )
                          ] }) })
                        ] }, q);
                      })
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, pb = {
  fieldSizing: "content"
}, gb = ({
  value: e,
  label: t,
  ...n
}) => {
  const { onQuestionChange: r, answering: s, disabled: a } = ze(), i = mn(n), { t: o } = Ce();
  if (s)
    return /* @__PURE__ */ c(Pe, { ...n, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
      Xn,
      {
        id: n.id,
        checked: e ?? !1,
        onCheckedChange: (d) => {
          r?.({
            ...n,
            type: "checkbox",
            label: t,
            value: d || null
          });
        },
        disabled: i,
        title: t
      }
    ) }) });
  const l = a || n.locked;
  return /* @__PURE__ */ c(Pe, { ...n, children: /* @__PURE__ */ D("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ c(Xn, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
    /* @__PURE__ */ c(
      "textarea",
      {
        value: t,
        placeholder: o("surveyFormBuilder.checkboxQuestion.placeholder"),
        "aria-label": o("surveyFormBuilder.checkboxQuestion.placeholder"),
        onChange: (d) => {
          r?.({
            ...n,
            type: "checkbox",
            label: d.target.value
          });
        },
        disabled: !!l,
        className: Q(
          "w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary",
          l && "cursor-not-allowed opacity-50"
        ),
        style: pb
      }
    )
  ] }) });
}, vb = ({
  value: e,
  ...t
}) => {
  const { onQuestionChange: n } = ze(), r = mn(t), { t: s } = Ce(), a = {
    id: t.id,
    type: "date",
    label: s("surveyFormBuilder.answer.label"),
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Pe, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    nt,
    {
      field: a,
      value: e ?? void 0,
      onChange: (i) => {
        n?.({
          ...t,
          type: "date",
          value: i ?? void 0
        });
      },
      disabled: r,
      hideLabel: !0
    }
  ) }) });
}, bb = ({
  datasetKey: e,
  showSearchBox: t,
  searchBoxPlaceholder: n,
  ...r
}) => {
  const { onQuestionChange: s, answering: a, datasets: i } = ze(), o = mn(r), { t: l } = Ce(), d = i?.[e];
  if (!d)
    throw new Error(`Dataset "${e}" not found for ${r.type}`);
  const u = r.type === "dropdown-multi", f = t ?? !0, h = {
    id: r.id,
    type: "select",
    label: l("surveyFormBuilder.answer.label"),
    placeholder: d.placeholder ?? l("surveyFormBuilder.answer.dropdownPlaceholder"),
    source: d.dataSource,
    mapOptions: d.mapOptions,
    icon: d.icon,
    clearable: !r.required,
    multiple: u,
    showSearchBox: f,
    searchBoxPlaceholder: n
  };
  return /* @__PURE__ */ c(Pe, { ...r, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
    nt,
    {
      field: h,
      value: u ? r.value ?? [] : r.value ?? "",
      onChange: (m) => {
        s?.(u ? {
          id: r.id,
          type: "dropdown-multi",
          value: m
        } : {
          id: r.id,
          type: "dropdown-single",
          value: m
        });
      },
      disabled: !a || o,
      hideLabel: !0
    }
  ) }) });
}, cd = [
  "image/*",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv"
], yb = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
}), xb = ({
  value: e,
  useUpload: t,
  accept: n,
  maxSizeMB: r,
  ...s
}) => {
  const { onQuestionChange: a, useUpload: i } = ze(), o = mn(s), { t: l } = Ce(), d = t ?? i, u = {
    id: s.id,
    type: "file",
    label: l("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: n ?? cd,
    maxSizeMB: r,
    useUpload: d ?? yb
  };
  return /* @__PURE__ */ c(Pe, { ...s, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    nt,
    {
      field: u,
      value: e ?? [],
      onChange: (f) => {
        a?.({
          ...s,
          type: "file",
          value: f || null
        });
      },
      disabled: o,
      hideLabel: !0
    }
  ) }) });
}, wb = ({
  value: e,
  ...t
}) => {
  const { t: n } = Ce(), { onQuestionChange: r, answering: s } = ze(), a = mn(t), i = n("surveyFormBuilder.answer.linkPlaceholder"), o = {
    id: t.id,
    type: "text",
    inputType: "url",
    label: n("surveyFormBuilder.answer.label"),
    placeholder: i,
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Pe, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    nt,
    {
      field: o,
      value: s ? e ?? "" : i,
      onChange: (l) => {
        r?.({
          ...t,
          type: "link",
          value: l || null
        });
      },
      disabled: a,
      hideLabel: !0
    }
  ) }) });
}, Sb = ({
  value: e,
  ...t
}) => {
  const { t: n } = Ce(), { onQuestionChange: r, answering: s } = ze(), a = mn(t), i = (l) => {
    r?.({
      ...t,
      type: "numeric",
      value: l
    });
  }, o = n("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ c(Pe, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: s ? /* @__PURE__ */ c(
    Ao,
    {
      locale: "en-US",
      size: "md",
      value: e,
      onChange: i,
      disabled: a,
      label: n("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      required: t.required,
      maxDecimals: 0,
      placeholder: o,
      icon: Tr
    }
  ) : /* @__PURE__ */ c(
    ua,
    {
      type: "text",
      size: "md",
      value: o,
      onChange: () => {
      },
      disabled: !0,
      label: n("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: Tr
    }
  ) }) });
}, kb = ({
  option: e,
  selected: t,
  onClick: n,
  onChangeLabel: r,
  disabled: s,
  isEmojiMode: a = !1
}) => {
  const { value: i, label: o } = e, [l, d] = ee(!1), u = () => {
    s || n(i);
  }, f = (h) => {
    r?.(i, h.native), d(!1);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        t && "border-f1-border-selected bg-f1-background-selected-secondary",
        s ? "cursor-default" : "cursor-pointer"
      ),
      onClick: u,
      children: a ? /* @__PURE__ */ D(oa, { open: l, onOpenChange: d, children: [
        /* @__PURE__ */ c(la, { asChild: !0, children: /* @__PURE__ */ c(
          Me,
          {
            emoji: o,
            label: i.toString(),
            variant: "ghost",
            hideLabel: !0
          }
        ) }),
        /* @__PURE__ */ c(
          ca,
          {
            side: "bottom",
            align: "center",
            className: "w-fit border-none bg-transparent p-2 shadow-none",
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation();
            },
            children: /* @__PURE__ */ c(
              Mu,
              {
                data: Pu,
                onEmojiSelect: f,
                locale: "en",
                icons: "outline",
                set: "twitter",
                theme: "light",
                emojiButtonSize: 32,
                emojiButtonRadius: "10px",
                emojiSize: 24,
                maxFrequentRows: 2,
                skinTonePosition: "none",
                previewPosition: "none",
                searchPosition: "top",
                navPosition: "top",
                dynamicWidth: !0
              }
            )
          }
        )
      ] }) : /* @__PURE__ */ c("span", { className: "text-base font-medium", children: o })
    }
  );
}, _b = ({
  options: e,
  value: t,
  ...n
}) => {
  const { onQuestionChange: r, disabled: s, answering: a } = ze(), o = ad(e) === "emojis", l = (u) => {
    r?.({
      id: n.id,
      value: u,
      type: "rating"
    });
  }, d = (u, f) => {
    const h = e.map(
      (m) => m.value === u ? { ...m, label: f } : m
    );
    r?.({
      id: n.id,
      type: "rating",
      value: t ?? 0,
      options: h
    });
  };
  return /* @__PURE__ */ c(Pe, { ...n, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: e.map((u) => /* @__PURE__ */ c(
    kb,
    {
      option: u,
      selected: t === u.value,
      onClick: l,
      onChangeLabel: d,
      disabled: s && !a,
      isEmojiMode: a ? !1 : o
    },
    u.value
  )) }) });
}, Cb = (e) => /* @__PURE__ */ c(_b, { ...e, type: "rating" });
function Nb({
  checked: e,
  disabled: t
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: Q(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        e ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background",
        t && "opacity-50"
      ),
      children: e && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
const Db = {
  fieldSizing: "content"
}, Fb = ({
  index: e,
  option: t,
  onClick: n,
  onClickAction: r,
  onChangeLabel: s,
  disabled: a,
  answering: i,
  selected: o,
  correct: l,
  locked: d,
  type: u
}) => {
  const { value: f, label: h } = t, { isDragging: m, setIsDragging: g, setDraggedItemId: b, draggedItemId: p } = En(), { t: S } = Ce(), v = m && p === f, k = () => {
    !a && !i || n(f);
  }, _ = (I) => {
    r({ value: f, index: e, action: I });
  }, y = (I) => {
    I.stopPropagation(), _("mark-as-correct");
  }, w = (I) => {
    I.stopPropagation(), _("remove");
  }, C = (I) => {
    const N = I.target.value;
    s({ value: f, index: e, newLabel: N });
  }, A = () => {
    g(!0), b(f);
  }, O = () => {
    g(!1), b(null);
  }, M = m ? v : !a && !i, T = !a && !i && !d;
  return /* @__PURE__ */ c(
    Jr,
    {
      value: t,
      onDragStart: A,
      onDragEnd: O,
      dragListener: T,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ D(
        "div",
        {
          className: Q(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (a || i) && "cursor-pointer",
            m && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: k,
          children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "block",
                  M ? "group-hover:hidden" : "cursor-default",
                  m && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: u === "multi-select" ? /* @__PURE__ */ c(
                  Xn,
                  {
                    title: h,
                    checked: i ? !!o : !1,
                    onCheckedChange: k,
                    disabled: !i,
                    presentational: !i,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ c(
                  Nb,
                  {
                    checked: i ? !!o : !1,
                    disabled: !i
                  }
                )
              }
            ),
            /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "hidden scale-75 cursor-grab",
                  T && "active:cursor-grabbing",
                  M && "group-hover:block",
                  m && "cursor-grabbing",
                  !T && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ c(
                  "div",
                  {
                    className: Q(
                      "flex aspect-square scale-90 items-center justify-center",
                      u === "multi-select" ? "w-6" : "w-5"
                    ),
                    children: /* @__PURE__ */ c(ot, { icon: ar, size: "sm" })
                  }
                )
              }
            ),
            !a && !i && !d ? /* @__PURE__ */ c(
              "textarea",
              {
                placeholder: S(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: h,
                onChange: C,
                className: "flex-1 resize-none font-medium",
                style: Db
              }
            ) : /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: h }),
            !a && !i && l && /* @__PURE__ */ c("span", { className: "text-sm font-medium text-f1-foreground-positive", children: S("surveyFormBuilder.selectQuestion.correct") }),
            !a && !i && !d ? /* @__PURE__ */ D("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ c(
                Me,
                {
                  label: S("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: l ? ir : Zo,
                  onClick: y,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ c(
                Me,
                {
                  label: S("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: xn,
                  hideLabel: !0,
                  onClick: w
                }
              )
            ] }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
          ]
        }
      )
    }
  );
}, Tb = ({ options: e, ...t }) => {
  const {
    onQuestionChange: n,
    disabled: r,
    answering: s,
    getSectionContainingQuestion: a
  } = ze(), i = new Set(e.map((p) => p.value)).size !== e.length, o = a(t.id), l = t.locked || o?.locked, { t: d } = Ce(), u = z(
    () => ({
      id: t.id,
      type: t.type,
      options: e
    }),
    [t.id, t.type, e]
  );
  ie(() => {
    if (!i) return;
    let p = e.map((k) => ({
      ...k,
      value: k.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const S = {
      id: t.id,
      type: t.type
    }, v = new Set(p.map((k) => k.value)).size !== p.length;
    if (!v) {
      n?.({ ...S, options: p });
      return;
    }
    p = p.map((k) => ({
      ...k,
      value: Bu()
    })), v && n?.({ ...S, options: p }), n?.({ ...S, options: p });
  }, [
    i,
    n,
    e,
    t.id,
    t.type
  ]);
  const f = (p) => {
    let S = e;
    p.action === "remove" && (S = e.filter((v) => v.value !== p.value)), p.action === "mark-as-correct" && (S = e.map((v) => ({
      ...v,
      correct: v.value === p.value ? !v.correct : v.correct
    }))), n?.({
      ...u,
      options: S
    });
  }, h = (p) => {
    if (t.type === "select") {
      const S = !t.required && t.value === p ? null : p;
      n?.({
        ...u,
        type: t.type,
        value: S
      });
    } else if (t.type === "multi-select") {
      const S = Array.isArray(t.value) ? t.value : [], v = S.includes(p) ? S.filter((k) => k !== p) : [...S, p];
      n?.({
        ...u,
        type: t.type,
        value: v
      });
    }
  }, m = (p) => {
    const S = e.map((v, k) => ({
      ...v,
      ...k === p.index ? {
        value: p.value,
        label: p.newLabel
      } : {}
    }));
    n?.({
      ...u,
      options: S
    });
  }, g = () => {
    const p = e.length, S = {
      value: `new-option-${p + 1}`,
      label: d("surveyFormBuilder.selectQuestion.newOption", {
        number: p + 1
      })
    };
    n?.({
      ...u,
      options: [...e, S]
    });
  }, b = (p) => {
    n?.({
      ...u,
      options: p
    });
  };
  return i ? null : /* @__PURE__ */ c(Pe, { ...t, children: /* @__PURE__ */ D("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ c(Ka, { children: /* @__PURE__ */ c(
      ya,
      {
        axis: "y",
        values: e,
        onReorder: b,
        as: "div",
        children: e.map((p, S) => {
          const v = t.type === "select" ? t.value === p.value : Array.isArray(t.value) && t.value.includes(p.value);
          return /* @__PURE__ */ c("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ c(
            Fb,
            {
              index: S,
              option: p,
              correct: p.correct,
              onClick: h,
              onClickAction: f,
              onChangeLabel: m,
              disabled: r,
              answering: s,
              selected: v,
              locked: l,
              type: t.type
            }
          ) }, p.value);
        })
      }
    ) }),
    !r && !s && !l && /* @__PURE__ */ c("div", { className: "opacity-50", children: /* @__PURE__ */ c(
      Me,
      {
        label: d("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: ga,
        onClick: g
      }
    ) })
  ] }) });
}, Ab = ({
  value: e,
  ...t
}) => {
  const { onQuestionChange: n, answering: r } = ze(), s = mn(t), { t: a } = Ce(), i = a("surveyFormBuilder.answer.textPlaceholder"), o = z(
    () => t.type === "text" ? {
      id: t.id,
      type: "text",
      label: a("surveyFormBuilder.answer.label"),
      placeholder: i,
      clearable: !t.required
    } : {
      id: t.id,
      type: "textarea",
      label: a("surveyFormBuilder.answer.label"),
      placeholder: i,
      rows: 4
    },
    [
      t.id,
      t.type,
      t.required,
      i,
      a
    ]
  );
  return /* @__PURE__ */ c(Pe, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    nt,
    {
      field: o,
      value: r ? e ?? "" : i,
      onChange: (l) => {
        n?.({
          ...t,
          value: l
        });
      },
      disabled: s,
      hideLabel: !0
    }
  ) }) });
}, Ya = ({ ...e }) => {
  switch (e.type) {
    case "text":
    case "longText":
      return /* @__PURE__ */ c(Ab, { ...e });
    case "rating":
      return /* @__PURE__ */ c(Cb, { ...e });
    case "select":
    case "multi-select":
      return /* @__PURE__ */ c(Tb, { ...e });
    case "dropdown-single":
    case "dropdown-multi":
      return /* @__PURE__ */ c(bb, { ...e });
    case "numeric":
      return /* @__PURE__ */ c(Sb, { ...e });
    case "link":
      return /* @__PURE__ */ c(wb, { ...e });
    case "date":
      return /* @__PURE__ */ c(vb, { ...e });
    case "file":
      return /* @__PURE__ */ c(xb, { ...e });
    case "checkbox":
      return /* @__PURE__ */ c(gb, { ...e });
    default:
      throw new Error("Invalid question type provided");
  }
}, dd = () => {
  const { t: e } = Ce();
  return /* @__PURE__ */ D("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: e("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, Eb = ({
  item: e,
  showEndOfSection: t,
  className: n
}) => {
  const { isDragging: r, setIsDragging: s, setDraggedItemId: a, draggedItemId: i } = En(), o = xa(), { disabled: l, answering: d, getSectionContainingQuestion: u } = ze(), f = u(e.question.id), h = !!f && i === f.id, m = () => {
    s(!0), a(e.question.id);
  }, g = () => {
    s(!1), a(null);
  }, b = e.question.locked || f?.locked, p = !l && !d && !b;
  return /* @__PURE__ */ D(
    Jr,
    {
      value: e,
      onDragStart: m,
      onDragEnd: g,
      dragListener: !1,
      dragControls: o,
      layout: "position",
      as: "div",
      className: Q(
        n,
        h && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ D(
          "div",
          {
            className: Q(
              "group/element flex flex-row items-start gap-1",
              r && "cursor-grabbing"
            ),
            children: [
              !l && !d && /* @__PURE__ */ c(
                "div",
                {
                  className: Q(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !r && "cursor-grab",
                    !p && "cursor-not-allowed"
                  ),
                  onPointerDown: (S) => {
                    p && o.start(S);
                  },
                  children: /* @__PURE__ */ c(Le, { icon: ar, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(
                Ya,
                {
                  ...e.question
                }
              )
            ]
          }
        ) }),
        t && /* @__PURE__ */ c(dd, {})
      ]
    }
  );
}, Ib = ({ question: e }) => {
  const { isDragging: t, setIsDragging: n, setDraggedItemId: r } = En(), s = xa(), { disabled: a, answering: i, getSectionContainingQuestion: o } = ze(), l = o(e.id), d = () => {
    n(!0), r(e.id);
  }, u = () => {
    n(!1), r(null);
  }, f = e.locked || l?.locked, h = !a && !i && !f;
  return /* @__PURE__ */ c(
    Jr,
    {
      value: e,
      as: "div",
      onDragStart: d,
      onDragEnd: u,
      dragListener: !1,
      dragControls: s,
      layout: "position",
      children: /* @__PURE__ */ D(
        "div",
        {
          className: Q(
            "group/question-element flex flex-row items-start gap-1",
            t && "cursor-grabbing"
          ),
          style: { marginLeft: a || i ? 0 : -27 },
          children: [
            !a && !i && /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
                  !t && "cursor-grab",
                  !h && "cursor-not-allowed"
                ),
                onPointerDown: (m) => {
                  h && s.start(m);
                },
                children: /* @__PURE__ */ c(Le, { icon: ar, size: "sm" })
              }
            ),
            /* @__PURE__ */ c(
              Ya,
              {
                ...e
              }
            )
          ]
        }
      )
    }
  );
}, Ob = {
  fieldSizing: "content"
}, Rb = ({
  id: e,
  title: t,
  description: n,
  questions: r = [],
  locked: s,
  hideQuestions: a
}) => {
  const {
    onSectionChange: i,
    disabled: o,
    answering: l,
    deleteElement: d,
    onDuplicateElement: u
  } = ze(), [f, h] = ee(!1), { t: m } = Ce(), g = z(
    () => ({
      id: e,
      title: t,
      description: n
    }),
    [e, t, n]
  ), b = (C) => {
    i?.({ ...g, title: C.target.value });
  }, p = (C) => {
    i?.({
      ...g,
      description: C.target.value
    });
  }, S = (C) => {
    i?.({ ...g, questions: C });
  }, v = () => {
    u?.({ elementId: e, type: "section" });
  }, k = () => {
    d(e);
  }, _ = [
    {
      label: m("surveyFormBuilder.actions.duplicateSection"),
      icon: Ar,
      onClick: v
    },
    {
      label: m("surveyFormBuilder.actions.deleteSection"),
      icon: xn,
      onClick: k,
      critical: !0
    }
  ], y = o || s || l, w = H(null);
  return ie(() => {
    w.current?.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ D(
    "div",
    {
      id: `co-creation-section-${e}`,
      className: "group/section flex w-full flex-col gap-1 bg-f1-background",
      children: [
        /* @__PURE__ */ D("div", { className: "py-1 pl-5 pr-3", children: [
          /* @__PURE__ */ D("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ c(
              "input",
              {
                ref: w,
                type: "text",
                "aria-label": m("surveyFormBuilder.labels.title"),
                value: t,
                placeholder: m("surveyFormBuilder.labels.sectionTitlePlaceholder"),
                onChange: b,
                disabled: y,
                className: Q(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  y && "cursor-not-allowed"
                )
              }
            ),
            !o && !l && !s && /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "opacity-0 group-hover/section:opacity-100",
                  f && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  ia,
                  {
                    items: _,
                    icon: Nr,
                    open: f,
                    onOpenChange: h,
                    align: "start",
                    children: /* @__PURE__ */ c(
                      Me,
                      {
                        icon: Nr,
                        label: m("surveyFormBuilder.actions.actions"),
                        size: "md",
                        variant: "ghost",
                        tooltip: !1,
                        hideLabel: !0
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ c(
            "textarea",
            {
              value: n,
              "aria-label": m("surveyFormBuilder.labels.description"),
              placeholder: m(
                "surveyFormBuilder.labels.sectionDescriptionPlaceholder"
              ),
              onChange: p,
              disabled: y,
              style: Ob,
              className: Q(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                y && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !a && /* @__PURE__ */ D(Ke, { children: [
          /* @__PURE__ */ c(Ka, { children: /* @__PURE__ */ c(
            ya,
            {
              axis: "y",
              values: r,
              onReorder: S,
              as: "div",
              children: /* @__PURE__ */ c("div", { className: "group/section-list flex flex-col gap-4", children: r.map((C) => /* @__PURE__ */ c(Ib, { question: C }, C.id)) })
            }
          ) }),
          !l && /* @__PURE__ */ D("div", { className: "mt-8 flex flex-row items-center gap-4", children: [
            /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
            /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: m("surveyFormBuilder.labels.endOfSection") }),
            /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
          ] })
        ] })
      ]
    }
  );
}, Lb = ({
  item: e,
  className: t
}) => {
  const { isDragging: n, setIsDragging: r, setDraggedItemId: s, draggedItemId: a } = En(), i = xa(), { disabled: o, answering: l } = ze(), d = a === e.section.id, u = () => {
    r(!0), s(e.section.id);
  }, f = () => {
    r(!1), s(null);
  }, h = !o && !l && !e.section.locked;
  return /* @__PURE__ */ c(
    Jr,
    {
      value: e,
      onDragStart: u,
      onDragEnd: f,
      dragListener: !1,
      dragControls: i,
      layout: "position",
      as: "div",
      className: t,
      children: /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ D("div", { className: "group/element w-full", children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: Q(
              "flex flex-row items-start gap-1 w-full",
              n && "cursor-grabbing"
            ),
            children: [
              !o && !l && /* @__PURE__ */ c(
                "div",
                {
                  className: Q(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !n && "cursor-grab",
                    !h && "cursor-not-allowed"
                  ),
                  onPointerDown: (m) => {
                    h && i.start(m);
                  },
                  children: /* @__PURE__ */ c(Le, { icon: ar, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(Rb, { ...e.section, hideQuestions: !0 })
            ]
          }
        ),
        d && (e.section.questions ?? []).length > 0 && /* @__PURE__ */ D("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (e.section.questions ?? []).map((m) => /* @__PURE__ */ c(Ya, { ...m }, m.id)),
          /* @__PURE__ */ c(dd, {})
        ] })
      ] }) })
    }
  );
}, uo = (e) => ob[e], Mb = (e) => {
  document.getElementById(e)?.scrollIntoView({ behavior: "smooth", block: "start" });
}, Pb = (e, t) => {
  const {
    untitledSectionLabel: n,
    untitledQuestionLabel: r,
    duplicateQuestionLabel: s,
    deleteQuestionLabel: a,
    duplicateSectionLabel: i,
    deleteSectionLabel: o,
    questionOptionsLabel: l,
    requiredLabel: d,
    questionTypeLabel: u,
    singleSelectionLabel: f,
    multiSelectionLabel: h
  } = t, { deleteElement: m, onDuplicateElement: g, disabled: b, answering: p } = ze(), { getActionsForQuestion: S, questionTypes: v } = ld(), k = L((y) => {
    Mb(y);
  }, []), _ = L(
    (y, w, C) => {
      const {
        question: A,
        currentRatingType: O,
        currentDatasetKey: M,
        disallowOptionalQuestions: T,
        handleChangeRequired: I,
        handleSelectQuestionType: N,
        handleSelectRatingType: P,
        handleDuplicate: G,
        handleDelete: X
      } = S(y, w, C), te = [
        { type: "label", text: l }
      ];
      T || te.push({
        type: "toggle",
        label: d,
        icon: zo,
        checked: !!A?.required,
        onCheckedChange: I
      });
      const fe = v.filter((B) => !B.datasetKey), q = v.filter((B) => !!B.datasetKey), le = fe.map((B) => {
        if (B.questionType === "rating") {
          const U = Kr.map((me) => ({
            label: me.label,
            onClick: () => P(me.value),
            selected: O === me.value
          }));
          return {
            type: "submenu",
            label: B.label,
            icon: B.icon,
            selectedLabel: O ? Kr.find((me) => me.value === O)?.label : void 0,
            children: U
          };
        }
        return {
          label: B.label,
          icon: B.icon,
          onClick: () => N(B.questionType),
          selected: w === B.questionType && !M
        };
      }), ue = /* @__PURE__ */ new Map();
      for (const B of q)
        B.datasetKey && !ue.has(B.datasetKey) && ue.set(B.datasetKey, {
          label: B.label,
          icon: B.icon,
          datasetKey: B.datasetKey
        });
      if (ue.size > 0) {
        le.push({ type: "separator" });
        for (const [B, U] of ue)
          le.push({
            type: "submenu",
            label: U.label,
            icon: U.icon,
            selectedLabel: M === B ? w === "dropdown-multi" ? h : f : void 0,
            children: [
              {
                label: f,
                icon: kt,
                onClick: () => N("dropdown-single", B),
                selected: M === B && w === "dropdown-single"
              },
              {
                label: h,
                icon: fn,
                onClick: () => N("dropdown-multi", B),
                selected: M === B && w === "dropdown-multi"
              }
            ]
          });
      }
      let R;
      if (M) {
        const B = ue.get(M);
        B && (R = B.label);
      } else
        R = fe.find(
          (B) => B.questionType === w
        )?.label;
      return te.push({
        type: "submenu",
        label: u,
        icon: qo,
        selectedLabel: R,
        children: le
      }), te.push({ type: "separator" }), te.push({
        label: s,
        icon: Ar,
        onClick: G
      }), C && te.push({
        label: a,
        icon: xn,
        onClick: X,
        critical: !0
      }), te;
    },
    [
      S,
      v,
      l,
      d,
      u,
      f,
      h,
      s,
      a
    ]
  );
  return z(
    () => e.map((y) => {
      if (y.type === "section") {
        const C = y.section, A = `co-creation-section-${C.id}`, O = C.questions ?? [], M = O.length === 1;
        return {
          id: A,
          label: C.title || n,
          icon: ba,
          onClick: k,
          ...!b && !p && !C.locked && {
            otherActions: [
              {
                label: i,
                icon: Ar,
                onClick: () => g?.({
                  elementId: C.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: o,
                icon: xn,
                onClick: () => m(C.id),
                critical: !0
              }
            ]
          },
          children: O.map((T) => ({
            id: `co-creation-question-${T.id}`,
            label: T.title || r,
            icon: uo(T.type),
            onClick: k,
            ...!b && !p && !C.locked && {
              otherActions: _(
                T.id,
                T.type,
                !M
              )
            }
          }))
        };
      }
      const w = y.question;
      return {
        id: `co-creation-question-${w.id}`,
        label: w.title || r,
        icon: uo(w.type),
        onClick: k,
        ...!b && !p && !w.locked && {
          otherActions: _(
            w.id,
            w.type,
            !0
          )
        }
      };
    }),
    [
      e,
      k,
      n,
      r,
      b,
      p,
      _,
      i,
      o,
      g,
      m
    ]
  );
}, Ps = "co-creation-section-", xr = "co-creation-question-";
function Bb(e, t) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const i of t)
    if (i.type === "section") {
      n.set(i.section.id, i.section);
      for (const o of i.section.questions ?? [])
        r.set(o.id, o);
    } else
      r.set(i.question.id, i.question);
  const s = [], a = (i) => {
    if (i.id.startsWith(Ps)) {
      const o = i.id.slice(Ps.length), l = n.get(o);
      if (!l) return;
      const d = (i.children ?? []).filter((u) => u.id.startsWith(xr)).map((u) => r.get(u.id.slice(xr.length))).filter((u) => u != null);
      s.push({
        type: "section",
        section: { ...l, questions: d }
      });
      for (const u of i.children ?? [])
        u.id.startsWith(Ps) && a(u);
      return;
    }
    if (i.id.startsWith(xr)) {
      const o = i.id.slice(xr.length), l = r.get(o);
      l && s.push({ type: "question", question: l });
    }
  };
  for (const i of e)
    a(i);
  return s;
}
const ud = ({
  elements: e,
  onChange: t,
  answering: n
}) => {
  const { t: r } = Ce(), { disabled: s } = ze(), { portalContainer: a } = et(ru), i = Pb(e, {
    untitledSectionLabel: r("surveyFormBuilder.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: r("surveyFormBuilder.labels.titlePlaceholder"),
    duplicateQuestionLabel: r("surveyFormBuilder.actions.duplicateQuestion"),
    deleteQuestionLabel: r("surveyFormBuilder.actions.deleteQuestion"),
    duplicateSectionLabel: r("surveyFormBuilder.actions.duplicateSection"),
    deleteSectionLabel: r("surveyFormBuilder.actions.deleteSection"),
    questionOptionsLabel: r("surveyFormBuilder.labels.questionOptions"),
    requiredLabel: r("surveyFormBuilder.labels.required"),
    questionTypeLabel: r("surveyFormBuilder.labels.questionType"),
    singleSelectionLabel: r("surveyFormBuilder.labels.singleSelection"),
    multiSelectionLabel: r("surveyFormBuilder.labels.multiSelection")
  }), o = L(
    (l) => {
      t(Bb(l, e));
    },
    [e, t]
  );
  return /* @__PURE__ */ c("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ c(
    rd,
    {
      items: i,
      barsAlign: "left",
      size: "md",
      collapsible: !0,
      showChildrenCounter: !0,
      sortable: !n && !s,
      onReorder: o,
      portalContainer: a
    }
  ) });
};
function Vb(e) {
  return e.flatMap((t) => t.type === "section" ? [
    {
      type: "section-header",
      id: `section-header-${t.section.id}`,
      section: t.section
    },
    ...(t.section.questions ?? []).map(
      (n) => ({
        type: "question",
        id: `question-${n.id}`,
        question: n
      })
    ),
    {
      type: "section-end",
      id: `section-end-${t.section.id}`,
      sectionId: t.section.id
    }
  ] : [
    {
      type: "question",
      id: `question-${t.question.id}`,
      question: t.question
    }
  ]);
}
function fo(e) {
  const t = [];
  let n = null, r = [];
  for (const s of e)
    s.type === "section-header" ? (n && t.push({
      type: "section",
      section: { ...n, questions: r }
    }), n = s.section, r = []) : s.type === "section-end" ? n && (t.push({
      type: "section",
      section: { ...n, questions: r }
    }), n = null, r = []) : n ? r.push(s.question) : t.push({ type: "question", question: s.question });
  return n && t.push({
    type: "section",
    section: { ...n, questions: r }
  }), t;
}
function jb(e, t) {
  const n = [];
  let r = null, s = [];
  function a() {
    if (!r) return;
    let i = -1;
    for (let o = s.length - 1; o >= 0; o--)
      if (s[o].type === "question" && t.has(s[o].id)) {
        i = o;
        break;
      }
    if (i === -1)
      n.push({
        type: "section-end",
        id: `section-end-${r}`,
        sectionId: r
      }), n.push(...s);
    else {
      for (let o = 0; o <= i; o++)
        n.push(s[o]);
      n.push({
        type: "section-end",
        id: `section-end-${r}`,
        sectionId: r
      });
      for (let o = i + 1; o < s.length; o++)
        n.push(s[o]);
    }
    s = [], r = null;
  }
  for (const i of e)
    i.type === "section-header" ? (a(), r = i.section.id, n.push(i)) : r ? s.push(i) : n.push(i);
  return a(), n;
}
function $b(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (n.type === "section") {
      const r = n.section.questions;
      r?.length && t.add(`question-${r[r.length - 1].id}`);
    }
  return t;
}
function zb({
  flatItems: e,
  onChange: t
}) {
  const [n, r] = ee(
    null
  ), [s, a] = ee(!1), i = L(
    (d) => {
      const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
      let h = null;
      for (const w of e)
        w.type === "section-header" ? (h = w.id, u.set(w.id, /* @__PURE__ */ new Set()), w.section.locked && f.add(w.id)) : w.type === "section-end" ? h = null : h && u.get(h).add(w.id);
      const m = e.filter((w) => w.type === "section-header").map((w) => w.id), g = d.filter((w) => w.type === "section-header").map((w) => w.id), b = m.some(
        (w, C) => g[C] !== w
      ), p = new Map(
        e.filter((w) => w.type !== "section-end").map((w, C) => [w.id, C])
      ), S = new Set(f);
      if (b)
        for (const [w, C] of d.entries())
          C.type === "section-header" && p.get(C.id) !== w && S.add(C.id);
      let v;
      if (S.size > 0) {
        const w = /* @__PURE__ */ new Map();
        for (const O of S) {
          const M = u.get(O);
          if (M)
            for (const T of M)
              w.set(T, O);
        }
        const C = /* @__PURE__ */ new Map();
        for (const O of S)
          C.set(O, []);
        const A = [];
        for (const O of d) {
          const M = w.get(O.id);
          M ? C.get(M).push(O) : A.push(O);
        }
        v = [];
        for (const O of A)
          v.push(O), O.type === "section-header" && S.has(O.id) && v.push(...C.get(O.id));
      } else
        v = d;
      const k = /* @__PURE__ */ new Set();
      for (const w of u.values())
        for (const C of w)
          k.add(C);
      const _ = jb(
        v,
        k
      );
      if ([
        ...u.entries()
      ].some(([w, C]) => {
        if (C.size === 0) return !1;
        const A = _.findIndex((M) => M.id === w);
        if (A === -1) return !1;
        const O = _[A + 1];
        return !O || O.type !== "question";
      })) {
        r(_), a(!0);
        return;
      }
      t(fo(_));
    },
    [t, e]
  ), o = L(() => {
    if (n) {
      const d = /* @__PURE__ */ new Set();
      for (let f = 0; f < n.length; f++) {
        const h = n[f];
        if (h.type === "section-header") {
          const m = n[f + 1];
          (!m || m.type === "section-end" || m.type === "section-header") && d.add(h.section.id);
        }
      }
      const u = n.filter((f) => !(f.type === "section-header" && d.has(f.section.id) || f.type === "section-end" && d.has(f.sectionId)));
      t(fo(u));
    }
    a(!1), r(null);
  }, [n, t]), l = L(() => {
    a(!1), r(null);
  }, []);
  return {
    handleFlatReorder: i,
    handleConfirmLastQuestionMove: o,
    handleCancelLastQuestionMove: l,
    lastQuestionDialogOpen: s
  };
}
function qb({ children: e }) {
  const { isDragging: t } = En();
  return /* @__PURE__ */ c("div", { className: Q("relative @container", t && "select-none"), children: e });
}
const Zb = ({
  elements: e,
  disabled: t,
  onChange: n,
  disallowOptionalQuestions: r,
  allowedQuestionTypes: s,
  applyingChanges: a,
  useUpload: i,
  datasets: o
}) => {
  const l = !t, d = z(
    () => e.map((k) => k.type === "question" ? {
      ...k,
      question: {
        ...k.question,
        required: r ? !0 : k.question.required
      }
    } : k.type === "section" ? {
      ...k,
      section: {
        ...k.section,
        questions: k.section.questions?.map((_) => ({
          ..._,
          required: r ? !0 : _.required
        }))
      }
    } : k),
    [e, r]
  ), u = z(() => Vb(d), [d]), f = z(
    () => u.filter((k) => k.type !== "section-end"),
    [u]
  ), h = z(
    () => $b(d),
    [d]
  ), m = z(() => {
    const k = /* @__PURE__ */ new Set();
    for (const _ of d)
      if (_.type === "section")
        for (const y of _.section.questions ?? [])
          k.add(`question-${y.id}`);
    return k;
  }, [d]), {
    handleFlatReorder: g,
    handleConfirmLastQuestionMove: b,
    handleCancelLastQuestionMove: p,
    lastQuestionDialogOpen: S
  } = zb({ flatItems: u, onChange: n });
  ie(() => {
    if (a) {
      const k = document.activeElement;
      k && k.getAttribute("name") !== "one-ai-input" && k.blur();
    }
  }, [a]);
  const v = !!d.length;
  return /* @__PURE__ */ D(
    Ga,
    {
      disabled: t,
      elements: d,
      onChange: n,
      disallowOptionalQuestions: r,
      allowedQuestionTypes: s,
      useUpload: i,
      datasets: o,
      children: [
        /* @__PURE__ */ c(Ka, { children: /* @__PURE__ */ D(qb, { children: [
          v && /* @__PURE__ */ c(ud, { elements: d, onChange: n }),
          /* @__PURE__ */ D("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ D(
              Kn.div,
              {
                className: Q(
                  "flex w-full max-w-[750px] self-center flex-col gap-6",
                  a && "pointer-events-none"
                ),
                initial: { filter: "blur(0px)" },
                animate: { filter: a ? "blur(2px)" : "none" },
                exit: { filter: "blur(0px)" },
                children: [
                  /* @__PURE__ */ c(
                    ya,
                    {
                      axis: "y",
                      values: f,
                      onReorder: g,
                      as: "div",
                      children: /* @__PURE__ */ c("div", { className: "flex flex-col", children: f.map((k, _) => {
                        const y = _ === 0 ? "" : m.has(k.id) ? "mt-4" : "mt-8";
                        return k.type === "section-header" ? /* @__PURE__ */ c(
                          Lb,
                          {
                            item: k,
                            className: y
                          },
                          k.id
                        ) : /* @__PURE__ */ c(
                          Eb,
                          {
                            item: k,
                            showEndOfSection: h.has(k.id),
                            className: y
                          },
                          k.id
                        );
                      }) })
                    }
                  ),
                  l && /* @__PURE__ */ c(lb, {})
                ]
              }
            ),
            a && /* @__PURE__ */ c(
              Kn.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ c(sb, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ c(
          cb,
          {
            open: S,
            onConfirm: b,
            onCancel: p
          }
        )
      ]
    }
  );
}, nx = Re(Zb);
function Tt({
  titleWidth: e,
  descriptionWidth: t,
  answer: n
}) {
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ c(Be, { className: "h-5 rounded-sm", style: { width: e } }),
      t && /* @__PURE__ */ c(
        Be,
        {
          className: "h-4 rounded-sm",
          style: { width: t }
        }
      )
    ] }),
    n
  ] });
}
const _r = /* @__PURE__ */ c(Be, { className: "h-10 w-full rounded-sm" }), mo = /* @__PURE__ */ c(Be, { className: "h-24 w-full rounded-sm" }), Ub = /* @__PURE__ */ c(Be, { className: "h-10 w-56 max-w-full rounded-sm" });
function Wb() {
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(Be, { className: "h-9 rounded-sm" }, t)) });
}
function ho({ count: e }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: Array.from({ length: e }).map((t, n) => /* @__PURE__ */ c(
    Be,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - n * 7)}%` }
    },
    n
  )) });
}
function Hb() {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(
    Be,
    {
      className: "h-8 rounded-sm",
      style: { width: `${18 + t * 3}%` }
    },
    t
  )) });
}
function fd() {
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex w-full flex-col gap-10",
      "data-testid": "survey-answering-form-loading-all-questions",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [0, 1].map((e) => /* @__PURE__ */ D("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Be, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ c(Be, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: e === 0 ? /* @__PURE__ */ D(Ke, { children: [
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: _r
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: mo
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ c(Wb, {})
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ c(ho, { count: 4 })
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: _r
            }
          )
        ] }) : /* @__PURE__ */ D(Ke, { children: [
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: Ub
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: _r
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ c(Hb, {})
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ c(ho, { count: 3 })
            }
          ),
          /* @__PURE__ */ c(
            Tt,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: mo
            }
          )
        ] }) })
      ] }, e))
    }
  );
}
function Qb() {
  return /* @__PURE__ */ D(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Be, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ c(Be, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c(
          Tt,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: _r
          }
        )
      ]
    }
  );
}
function Gb(e) {
  const [t, n] = ee(0), [r, s] = ee(null), a = e.length, i = a > 0 ? t / a * 100 : 0, o = r ?? i, l = e[t], d = t === 0, u = t === a - 1, f = L(() => {
    s(null), n((b) => Math.min(b + 1, a - 1));
  }, [a]), h = L(() => {
    s(null), n((b) => Math.max(b - 1, 0));
  }, []), m = L(() => {
    s(null), n(0);
  }, []), g = L((b) => {
    s(b);
  }, []);
  return {
    currentStep: t,
    totalSteps: a,
    progress: o,
    currentQuestion: l,
    isFirstStep: d,
    isLastStep: u,
    goToNext: f,
    goToPrevious: h,
    reset: m,
    setProgress: g
  };
}
function Kb({
  value: e,
  onChange: t,
  onBlur: n,
  config: r
}) {
  const { options: s, disabled: a } = r, i = (o) => {
    a || (t(o), n());
  };
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 md:grid-cols-5", children: s.map((o) => /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "flex h-10 min-w-20 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        a ? "cursor-not-allowed" : "cursor-pointer",
        e === o.value && "border-f1-border-selected bg-f1-background-selected-secondary"
      ),
      onClick: () => i(o.value),
      children: /* @__PURE__ */ c("span", { className: "text-base font-medium", children: o.label })
    },
    o.value
  )) });
}
function Xb({ checked: e }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: Q(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        e ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: e && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function po({
  value: e,
  onChange: t,
  onBlur: n,
  config: r
}) {
  const { options: s, type: a, required: i, disabled: o, showAnswerValidation: l } = r, d = s.some((g) => g.correct), u = !!l && d, f = (g) => {
    if (o || a !== "select") return;
    t(!i && e === g ? void 0 : g), n();
  }, h = (g) => {
    if (o || a !== "multi-select") return;
    const b = Array.isArray(e) ? e : [], p = b.includes(g) ? b.filter((S) => S !== g) : [...b, g];
    t(p), n();
  }, m = (g) => {
    a === "select" ? f(g) : h(g);
  };
  return /* @__PURE__ */ c("div", { className: "-mx-0.5 flex flex-col items-start", children: s.map((g) => {
    const b = a === "select" ? e === g.value : Array.isArray(e) && e.includes(g.value);
    return /* @__PURE__ */ D(
      "div",
      {
        className: Q(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          o ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (p) => {
          o || a === "multi-select" && p.target.closest("input") || m(g.value);
        },
        children: [
          a === "multi-select" ? /* @__PURE__ */ c(
            Xn,
            {
              title: g.label,
              checked: !!b,
              onCheckedChange: () => h(g.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ c(Xb, { checked: !!b }),
          /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: g.label }),
          u ? /* @__PURE__ */ c("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ c(
            Le,
            {
              icon: g.correct ? Zo : ir,
              color: g.correct ? "positive" : "critical",
              "aria-hidden": !0
            }
          ) }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
        ]
      },
      g.value
    );
  }) });
}
const Yb = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, Jb = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function wr(e, t) {
  return us().optional().superRefine((n, r) => {
    e && (!n || n.trim() === "") && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ey(e, t) {
  return us().optional().superRefine((n, r) => {
    if (e && (!n || n.trim() === "")) {
      r.addIssue({
        code: "custom",
        message: t("forms.validation.required")
      });
      return;
    }
    n && !Yb.test(n) && r.addIssue({
      code: "custom",
      message: t("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function go(e, t) {
  return Ap().optional().superRefine((n, r) => {
    e && n == null && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function vo(e, t) {
  return _c(us()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ty(e, t) {
  return Ip().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ny(e, t) {
  return _c(us()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ry(e, t) {
  return Ep().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function bo(e, t) {
  const n = t?.[e.id];
  if (n) return n.value;
  if (e.type === "multi-select" || e.type === "dropdown-multi")
    return [];
  const r = e;
  return r.value !== void 0 && r.value !== null ? r.value : null;
}
function Ja(e) {
  const t = [];
  for (const n of e)
    if (n.type === "section")
      for (const r of n.section.questions ?? [])
        t.push({
          id: r.id,
          type: r.type,
          required: r.required,
          sectionTitle: n.section.title,
          sectionDescription: n.section.description
        });
    else
      t.push({
        id: n.question.id,
        type: n.question.type,
        required: n.question.required
      });
  return t;
}
function yo(e, t, n, r = !1, s = r, a, i) {
  const o = e.title ?? "", l = {
    label: o,
    section: n
  }, d = {
    id: e.id,
    title: e.title,
    description: e.description,
    type: e.type,
    required: e.required,
    locked: e.locked
  };
  switch (e.type) {
    case "text": {
      const u = {
        id: e.id,
        type: "text",
        label: o,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        disabled: s
      };
      return vt(wr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "longText": {
      const u = {
        id: e.id,
        type: "textarea",
        label: o,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: s
      };
      return vt(wr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "numeric": {
      const u = {
        id: e.id,
        type: "number",
        label: o,
        placeholder: t("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: s
      };
      return vt(go(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: u,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "link": {
      const u = {
        id: e.id,
        type: "text",
        inputType: "url",
        label: o,
        placeholder: t("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: s
      };
      return vt(ey(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "date": {
      const u = {
        id: e.id,
        type: "date",
        label: o,
        clearable: !e.required,
        disabled: s
      };
      return vt(ty(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: g }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: u,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!g,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-single": {
      const u = i?.[e.datasetKey];
      if (!u)
        throw new Error(
          `Dataset "${e.datasetKey}" not found for dropdown-single`
        );
      const f = e.showSearchBox ?? !0, h = {
        id: e.id,
        type: "select",
        label: o,
        placeholder: u.placeholder ?? t("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: u.dataSource,
        mapOptions: u.mapOptions,
        icon: u.icon,
        clearable: !e.required,
        multiple: !1,
        disabled: s,
        showSearchBox: f,
        searchBoxPlaceholder: e.searchBoxPlaceholder
      };
      return vt(wr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: b, error: p }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          nt,
          {
            field: h,
            value: m ?? "",
            onChange: g,
            onBlur: b,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-multi": {
      const u = i?.[e.datasetKey];
      if (!u)
        throw new Error(
          `Dataset "${e.datasetKey}" not found for dropdown-multi`
        );
      const f = e.showSearchBox ?? !0, h = {
        id: e.id,
        type: "select",
        label: o,
        placeholder: u.placeholder ?? t("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: u.dataSource,
        mapOptions: u.mapOptions,
        icon: u.icon,
        clearable: !e.required,
        multiple: !0,
        disabled: s,
        showSearchBox: f,
        searchBoxPlaceholder: e.searchBoxPlaceholder
      };
      return vt(vo(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: b, error: p }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          nt,
          {
            field: h,
            value: m ?? [],
            onChange: g,
            onBlur: b,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "select": {
      const f = {
        options: e.options,
        type: "select",
        required: e.required,
        disabled: s,
        showAnswerValidation: r
      };
      return vt(wr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: b }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c(
          po,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: b
          }
        ) })
      });
    }
    case "multi-select": {
      const f = {
        options: e.options,
        type: "multi-select",
        required: e.required,
        disabled: s,
        showAnswerValidation: r
      };
      return vt(vo(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: b }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c(
          po,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: b
          }
        ) })
      });
    }
    case "rating": {
      const f = {
        options: e.options,
        disabled: s
      };
      return vt(go(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: g, config: b }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c(
          Kb,
          {
            value: h,
            onChange: m,
            onBlur: g,
            config: b
          }
        ) })
      });
    }
    case "file": {
      const u = e, f = u.useUpload ?? a, h = {
        id: e.id,
        type: "file",
        label: o,
        multiple: !0,
        accept: u.accept ?? cd,
        maxSizeMB: u.maxSizeMB,
        useUpload: f ?? Jb,
        disabled: s || !f
      };
      return vt(ny(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: g, onBlur: b, error: p }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: h,
            value: m ?? [],
            onChange: g,
            onBlur: b,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "checkbox": {
      const u = e, f = {
        id: e.id,
        type: "checkbox",
        label: u.label || o,
        disabled: s
      };
      return vt(ry(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: h, onChange: m, onBlur: g, error: b }) => /* @__PURE__ */ c(Pe, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          nt,
          {
            field: f,
            value: h ?? !1,
            onChange: m,
            onBlur: g,
            error: !!b,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return vt(Rp(), {
        ...l,
        fieldType: "custom",
        render: () => null
      });
  }
}
function md(e, t, n, r, s, a, i = !1, o = i, l, d) {
  return z(() => {
    const u = {}, f = {}, h = {}, m = Ja(e), g = t === "stepped";
    for (const b of e)
      if (b.type === "section") {
        const p = b.section, S = p.id;
        t === "all-questions" && (h[S] = {
          title: p.title,
          description: p.description,
          withInset: !0
        });
        for (const v of p.questions ?? [])
          g && s && v.id !== s || (u[v.id] = yo(
            v,
            n,
            t === "all-questions" ? S : void 0,
            i,
            o,
            l,
            d
          ), f[v.id] = a?.[v.id] ?? bo(v, r));
      } else {
        const p = b.question;
        if (g && s && p.id !== s)
          continue;
        u[p.id] = yo(
          p,
          n,
          void 0,
          i,
          o,
          l,
          d
        ), f[p.id] = a?.[p.id] ?? bo(p, r);
      }
    return {
      schema: $a(u),
      defaultValues: f,
      flatQuestions: m,
      sections: h
    };
  }, [
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    l,
    d
  ]);
}
const Cr = () => {
};
function rx(e) {
  return e.inline ? /* @__PURE__ */ c(ay, { ...e }) : /* @__PURE__ */ c(sy, { ...e });
}
function sy({
  elements: e,
  onSubmit: t,
  mode: n,
  title: r,
  description: s,
  resourceHeader: a,
  isOpen: i,
  onClose: o,
  position: l = "center",
  module: d,
  allowToChangeFullscreen: u = !1,
  defaultValues: f,
  errorTriggerMode: h = "on-blur",
  loading: m = !1,
  labels: g,
  preview: b = !1,
  useUpload: p,
  datasets: S
}) {
  const { t: v } = Ce(), k = l === "fullscreen", _ = l === "fullscreen" ? "center" : l, [y, w] = ee(k), { formRef: C, submit: A, isSubmitting: O, hasErrors: M } = ps(), T = H({}), I = z(
    () => Ja(e),
    [e]
  ), N = Gb(I), P = I.length > 0, G = {
    title: g?.empty?.title ?? v("surveyAnsweringForm.labels.empty.title"),
    description: g?.empty?.description ?? v("surveyAnsweringForm.labels.empty.description"),
    emoji: g?.empty?.emoji ?? v("surveyAnsweringForm.labels.empty.emoji")
  }, X = n === "stepped", fe = b && !!f && Object.keys(f).length > 0, q = b && !fe, le = X ? N.currentQuestion?.id : void 0, {
    schema: ue,
    defaultValues: R,
    sections: B
  } = md(
    e,
    n,
    v,
    f,
    le,
    X ? T.current : void 0,
    b,
    fe,
    p,
    S
  ), U = y ? "fullscreen" : _, me = U === "center" ? "xl" : void 0, se = H(null), ge = L(
    (F) => {
      se.current && clearTimeout(se.current), se.current = setTimeout(() => {
        se.current = null, o();
      }, F);
    },
    [o]
  ), ve = L(
    async (F) => {
      if (b)
        return { success: !0 };
      if (!t)
        throw new Error("onSubmit is required when preview is false");
      if (X && !N.isLastStep)
        return T.current = {
          ...T.current,
          ...F
        }, N.goToNext(), { success: !0 };
      const E = X ? { ...T.current, ...F } : F, W = {};
      for (const [V, ne] of Object.entries(E))
        W[V] = ne === void 0 ? null : ne;
      if (X) {
        N.setProgress(100);
        const [V] = await Promise.all([
          t(W),
          new Promise((ne) => setTimeout(ne, 1e3))
        ]);
        return V.success ? (ge(V.message ? 1e3 : 0), { success: !0, message: V.message }) : (N.setProgress(null), { success: !1, errors: V.errors });
      }
      const $ = await t(W);
      return $.success ? (ge($.message ? 1e3 : 0), { success: !0, message: $.message }) : { success: !1, errors: $.errors };
    },
    [
      t,
      b,
      ge,
      X,
      N.isLastStep,
      N.goToNext,
      N.setProgress
    ]
  ), de = L(async () => {
    try {
      await A();
    } catch {
    }
  }, [A]), J = L(() => {
    const F = C.current?.getValues() ?? {};
    T.current = {
      ...T.current,
      ...F
    }, N.goToPrevious();
  }, [C, N.goToPrevious]), oe = u && !m ? [
    {
      label: v(y ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: y ? su : au,
      onClick: () => w((F) => !F)
    }
  ] : void 0, Ie = P ? m || fe ? void 0 : q ? X && !N.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: N.goToNext,
    icon: Bs
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: Cr,
    disabled: !0
  } : X && !N.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: de,
    icon: Bs
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: de,
    disabled: O || M,
    loading: O
  } : void 0, Ve = P ? m || fe ? void 0 : X && !N.isFirstStep ? {
    label: v("surveyAnsweringForm.actions.previous"),
    onClick: J,
    icon: Ro
  } : void 0 : void 0, De = n === "all-questions" && P && !m, Xe = X && P && !m, We = X && !!N.currentQuestion?.sectionTitle && !m, mt = !P && !m || X, x = U === "center" || U === "fullscreen";
  return /* @__PURE__ */ c(
    Lo,
    {
      isOpen: i,
      onClose: o,
      title: r,
      module: d,
      position: U,
      width: me,
      primaryAction: Ie,
      secondaryAction: Ve,
      otherActions: oe,
      disableContentPadding: x,
      children: /* @__PURE__ */ c(
        Ga,
        {
          answering: !0,
          elements: e,
          onChange: Cr,
          datasets: S,
          children: /* @__PURE__ */ D(
            "div",
            {
              className: Q(
                "relative flex min-h-full flex-col @container",
                X && !y && "min-h-[600px]",
                mt && "h-full"
              ),
              children: [
                De && /* @__PURE__ */ c(ud, { elements: e, onChange: Cr, answering: !0 }),
                Xe && /* @__PURE__ */ c("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ c(
                  iu,
                  {
                    label: "Value",
                    value: N.progress,
                    hideLabel: !0
                  }
                ) }),
                /* @__PURE__ */ D(
                  "div",
                  {
                    className: Q(
                      "mx-auto flex w-full flex-col @lg:w-[750px] max-w-full",
                      n === "all-questions" && !mt ? "justify-start" : "flex-1 justify-center",
                      x && "px-4 py-12"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
                        tl,
                        {
                          title: r,
                          description: s,
                          ...a
                        }
                      ) }),
                      m ? n === "stepped" ? /* @__PURE__ */ c(Qb, {}) : /* @__PURE__ */ c(fd, {}) : P ? null : /* @__PURE__ */ c(
                        Ul,
                        {
                          display: "flex",
                          flexDirection: "column",
                          height: "full",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingX: "lg",
                          children: /* @__PURE__ */ c(
                            Uo,
                            {
                              emoji: G.emoji,
                              title: G.title,
                              description: G.description
                            }
                          )
                        }
                      ),
                      We && /* @__PURE__ */ D("div", { className: "py-1 pl-5", children: [
                        /* @__PURE__ */ c("span", { className: "text-lg font-semibold text-f1-foreground", children: N.currentQuestion?.sectionTitle }),
                        N.currentQuestion?.sectionDescription && /* @__PURE__ */ c("p", { className: "text-f1-foreground-secondary", children: N.currentQuestion?.sectionDescription })
                      ] }),
                      P && !m && /* @__PURE__ */ c(
                        mr,
                        {
                          formRef: C,
                          name: "survey-answering",
                          schema: ue,
                          defaultValues: R,
                          onSubmit: ve,
                          submitConfig: {
                            hideSubmitButton: !0
                          },
                          errorTriggerMode: h,
                          sections: B
                        },
                        X ? N.currentStep : void 0
                      )
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
function ay({
  elements: e,
  title: t,
  description: n,
  resourceHeader: r,
  defaultValues: s,
  loading: a = !1,
  labels: i,
  useUpload: o,
  datasets: l
}) {
  const { t: d } = Ce(), f = z(
    () => Ja(e),
    [e]
  ).length > 0, h = {
    title: i?.empty?.title ?? d("surveyAnsweringForm.labels.empty.title"),
    description: i?.empty?.description ?? d("surveyAnsweringForm.labels.empty.description"),
    emoji: i?.empty?.emoji ?? d("surveyAnsweringForm.labels.empty.emoji")
  }, {
    schema: m,
    defaultValues: g,
    sections: b
  } = md(
    e,
    "all-questions",
    d,
    s,
    void 0,
    void 0,
    !0,
    !0,
    o,
    l
  );
  return /* @__PURE__ */ c(
    Ga,
    {
      answering: !0,
      elements: e,
      onChange: Cr,
      datasets: l,
      children: /* @__PURE__ */ D("div", { className: "mx-auto flex w-full max-w-3xl flex-col", children: [
        /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
          tl,
          {
            title: t,
            description: n,
            ...r
          }
        ) }),
        a ? /* @__PURE__ */ c(fd, {}) : f ? /* @__PURE__ */ c(
          mr,
          {
            name: "survey-answering-inline",
            schema: m,
            defaultValues: g,
            onSubmit: async () => ({ success: !0 }),
            submitConfig: {
              hideSubmitButton: !0,
              hideActionBar: !0
            },
            sections: b
          }
        ) : /* @__PURE__ */ c(
          Ul,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "lg",
            children: /* @__PURE__ */ c(
              Uo,
              {
                emoji: h.emoji,
                title: h.title,
                description: h.description
              }
            )
          }
        )
      ] })
    }
  );
}
const iy = ({ benefits: e }) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: e.map((t, n) => /* @__PURE__ */ c(oy, { text: t }, n)) }), oy = ({ text: e }) => /* @__PURE__ */ D("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ c(Le, { icon: Yr, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ c("span", { children: e })
] }), hd = ft(
  ({
    title: e,
    image: t,
    benefits: n,
    actions: r,
    withShadow: s = !0,
    module: a,
    moduleName: i,
    tag: o,
    promoTag: l
  }, d) => /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: Q(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        s && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ c(
          "img",
          {
            src: t,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ D("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ D("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ D("div", { className: "flex flex-row items-center gap-2", children: [
                a && /* @__PURE__ */ c(Wo, { module: a }),
                i && /* @__PURE__ */ c("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              (o || l) && /* @__PURE__ */ D("div", { className: "flex justify-start gap-2", children: [
                o && /* @__PURE__ */ c(ou, { icon: o.icon, text: o.label }),
                l && /* @__PURE__ */ c(
                  Po,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ c("h2", { className: "font-bold text-xl text-f1-foreground", children: e })
            ] }),
            /* @__PURE__ */ c(iy, { benefits: n })
          ] }),
          r && /* @__PURE__ */ c("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
hd.displayName = "ProductBlankslate";
const ly = Re(hd);
function cy({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  module: s,
  portalContainer: a
}) {
  const [i, o] = ee(e);
  return ie(() => {
    o(e);
  }, [e]), /* @__PURE__ */ c(lu, { open: i, onOpenChange: (d) => {
    o(d), d || t();
  }, modal: !0, children: /* @__PURE__ */ D(
    cu,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: a,
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ D(du, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            s && /* @__PURE__ */ c(Wo, { module: s, size: "lg" }),
            n
          ] }),
          /* @__PURE__ */ c(
            _o,
            {
              variant: "outline",
              icon: ir,
              onClick: t,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ D(No, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          r,
          /* @__PURE__ */ c(
            Do,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
function dy({
  isOpen: e,
  onClose: t,
  title: n,
  image: r,
  benefits: s,
  errorMessage: a,
  successMessage: i,
  loadingState: o,
  nextSteps: l,
  closeLabel: d,
  primaryAction: u,
  modalTitle: f,
  modalModule: h,
  secondaryAction: m,
  portalContainer: g,
  tag: b,
  promoTag: p,
  showResponseDialog: S = !0
}) {
  const [v, k] = ee(e), [_, y] = ee(null), [w, C] = ee(!1), A = async () => {
    if (u?.onClick) {
      C(!0);
      try {
        await u.onClick(), k(!1), S && y("success");
      } catch {
        S && y("error");
      } finally {
        C(!1);
      }
    }
  }, O = () => {
    k(!1), t?.();
  }, M = w;
  return /* @__PURE__ */ D(Ke, { children: [
    /* @__PURE__ */ c(
      cy,
      {
        isOpen: v,
        onClose: O,
        title: f,
        module: h,
        portalContainer: g,
        children: /* @__PURE__ */ c("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ c(
          ly,
          {
            title: n,
            image: r,
            benefits: s,
            withShadow: !1,
            tag: b,
            promoTag: p,
            actions: /* @__PURE__ */ D("div", { className: "flex gap-3", children: [
              u && /* @__PURE__ */ c(
                Me,
                {
                  variant: u.variant,
                  label: M ? o.label : u.label,
                  icon: u.icon || void 0,
                  onClick: A,
                  loading: u.loading,
                  size: u.size
                }
              ),
              m && /* @__PURE__ */ c(
                Me,
                {
                  onClick: m.onClick,
                  label: m.label,
                  variant: m.variant,
                  size: m.size,
                  icon: m.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    _ && S && /* @__PURE__ */ c(
      Ho,
      {
        open: !0,
        onClose: () => {
          O(), y(null);
        },
        success: _ === "success",
        errorMessage: a,
        successMessage: i,
        nextSteps: l,
        closeLabel: d,
        portalContainer: g
      }
    )
  ] });
}
const sx = Re(dy);
function uy({
  mediaUrl: e,
  title: t,
  description: n,
  onClose: r,
  dismissible: s,
  width: a,
  trackVisibility: i,
  actions: o,
  showConfirmation: l = !0
}) {
  const [d, u] = ee(!1), f = () => {
    u(!0), r && r();
  };
  ie(() => {
    i && i(!d);
  }, [i, d]);
  const h = e?.includes(".mp4");
  return /* @__PURE__ */ c(Ke, { children: d ? null : /* @__PURE__ */ D(uu, { style: { width: a }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ D(fu, { children: [
      s && /* @__PURE__ */ c("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ c(
        Me,
        {
          variant: "ghost",
          icon: ir,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ D("div", { children: [
        /* @__PURE__ */ c("div", { children: e && (h ? /* @__PURE__ */ c(
          "video",
          {
            src: e,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ c(
          "img",
          {
            src: e,
            alt: t,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ c(qr, { className: "text-lg font-medium", children: t }),
          /* @__PURE__ */ c(qr, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: n })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ c(mu, { className: "p-3", children: o.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ c(
        Qo,
        {
          label: m.label,
          onRequest: m.onClick,
          errorMessage: m.errorMessage,
          successMessage: m.successMessage,
          loadingState: m.loadingState,
          nextSteps: m.nextSteps,
          closeLabel: m.closeLabel,
          showConfirmation: l && m.showConfirmation,
          variant: m.variant
        },
        m.label
      ) : /* @__PURE__ */ c(
        Me,
        {
          label: m.label,
          onClick: m.onClick,
          variant: m.variant
        },
        m.label
      )
    ) })
  ] }) });
}
const fy = Re(uy), pd = ft(
  function({ primaryAction: t, secondaryAction: n, ...r }, s) {
    const a = (l) => l.variant === "promote" ? /* @__PURE__ */ c(
      Qo,
      {
        label: l.label,
        onRequest: async () => {
          await l.onClick();
        },
        errorMessage: l.errorMessage,
        successMessage: l.successMessage,
        loadingState: l.loadingState,
        nextSteps: l.nextSteps,
        closeLabel: l.closeLabel,
        showIcon: l.showIcon,
        showConfirmation: l.showConfirmation,
        variant: l.variant
      }
    ) : /* @__PURE__ */ c(
      Me,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), i = t?.variant !== "promote" ? t : void 0, o = n?.variant !== "promote" ? n : void 0;
    return /* @__PURE__ */ D(
      Vu,
      {
        ref: s,
        ...r,
        primaryAction: i,
        secondaryAction: o,
        children: [
          t?.variant === "promote" && a(t),
          n?.variant === "promote" && a(n)
        ]
      }
    );
  }
);
pd.displayName = "UpsellingBanner";
const ax = Re(pd);
function my({
  isOpen: e,
  setIsOpen: t,
  label: n,
  variant: r = "promote",
  size: s = "md",
  showIcon: a = !0,
  side: i = "right",
  align: o = "center",
  icon: l = hu,
  mediaUrl: d,
  title: u,
  description: f,
  width: h = "300px",
  trackVisibility: m,
  actions: g,
  onClick: b,
  hideLabel: p = !1
}) {
  const [S, v] = ee(!1), [k, _] = ee(null), [y, w] = ee(null), C = (I) => {
    t(I), b && b();
  }, A = async (I) => {
    if (I.type === "upsell") {
      w(I);
      try {
        await I.onClick(), I.showConfirmation && (v(!0), _("success"));
      } catch {
        v(!0), _("error");
      }
    }
  }, O = () => {
    _(null), v(!1), w(null), t(!1);
  }, M = e && !S, T = g?.map((I) => I.type === "upsell" ? {
    ...I,
    onClick: () => A(I)
  } : I);
  return /* @__PURE__ */ D(Ke, { children: [
    /* @__PURE__ */ D(oa, { open: M, onOpenChange: C, children: [
      /* @__PURE__ */ c(la, { asChild: !0, children: /* @__PURE__ */ c(
        Me,
        {
          variant: r,
          label: n,
          size: s,
          icon: a ? l : void 0,
          onClick: () => t(e),
          hideLabel: p
        }
      ) }),
      /* @__PURE__ */ c(
        ca,
        {
          side: i,
          align: o,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ c(
            fy,
            {
              mediaUrl: d,
              title: u,
              description: f,
              onClose: () => t(!1),
              dismissible: !1,
              width: h,
              trackVisibility: m,
              actions: T,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    y?.type === "upsell" && y.showConfirmation && k && /* @__PURE__ */ c(
      Ho,
      {
        open: !0,
        onClose: O,
        success: k === "success",
        errorMessage: y.errorMessage,
        successMessage: y.successMessage,
        nextSteps: y.nextSteps,
        closeLabel: y.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ix = Re(my), ox = bt(
  "F0AnalyticsDashboard",
  pu
), hy = Ct(
  null
), py = ({ children: e, fullScreen: t = !0 }) => {
  const n = H(null), [r, s] = ee(n.current);
  return _u(() => {
    s(n.current);
  }, []), /* @__PURE__ */ c(hy.Provider, { value: { element: r }, children: /* @__PURE__ */ c(
    "div",
    {
      ref: n,
      id: "f0-layout",
      className: Q({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    }
  ) });
}, gy = ({
  children: e
}) => /* @__PURE__ */ c(ku, { reducedMotion: "user", children: e }), lx = ({
  children: e,
  layout: t,
  link: n,
  privacyModeInitiallyEnabled: r,
  image: s,
  i18n: a,
  l10n: i,
  isDev: o = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: d = !1,
  renderDataTestIdAttribute: u = !1
}) => /* @__PURE__ */ c(gy, { children: /* @__PURE__ */ c(
  gu,
  {
    isDev: o,
    showExperimentalWarnings: d,
    renderDataTestIdAttribute: u,
    children: /* @__PURE__ */ c(vu, { ...i, children: /* @__PURE__ */ c(bu, { ...a, children: /* @__PURE__ */ c(yu, { ...n, children: /* @__PURE__ */ c(py, { ...t, children: /* @__PURE__ */ c(xu, { children: /* @__PURE__ */ c(
      ju,
      {
        initiallyEnabled: r,
        children: /* @__PURE__ */ c(wu, { ...s, children: /* @__PURE__ */ c(
          Su,
          {
            handler: l,
            children: e
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), xo = (e) => `datacollection-${e}`, cx = {
  get: async (e) => JSON.parse(
    localStorage.getItem(xo(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(xo(e), JSON.stringify(t));
  }
};
export {
  Bw as AiChatTranslationsProvider,
  Gw as AreaChart,
  fx as Await,
  Kw as BarChart,
  mx as BarChartSkeleton,
  Yo as CardSelectableContainer,
  Xw as CategoryBarChart,
  hx as ChatSpinner,
  Dr as Chip,
  Yw as ComboChart,
  _y as Dashboard,
  Rd as DataTestIdWrapper,
  px as DndProvider,
  gx as EmojiImage,
  Vs as F0ActionBar,
  vx as F0ActionItem,
  bx as F0AiChat,
  yx as F0AiChatProvider,
  xx as F0AiChatTextArea,
  Hy as F0AiFormRegistryProvider,
  wx as F0AiFullscreenChat,
  Vw as F0AiInsightCard,
  jw as F0AiMask,
  Io as F0Alert,
  ox as F0AnalyticsDashboard,
  $w as F0AuraVoiceAnimation,
  Sx as F0Avatar,
  kx as F0AvatarAlert,
  _x as F0AvatarCompany,
  Jw as F0AvatarDate,
  Cx as F0AvatarEmoji,
  jd as F0AvatarFile,
  Nx as F0AvatarIcon,
  Dx as F0AvatarList,
  Wo as F0AvatarModule,
  Fx as F0AvatarPerson,
  Tx as F0AvatarTeam,
  Ay as F0BigNumber,
  Ul as F0Box,
  Me as F0Button,
  Ax as F0ButtonDropdown,
  Ex as F0ButtonToggle,
  Ix as F0Card,
  Xn as F0Checkbox,
  Vy as F0ChipList,
  Ox as F0DataChart,
  To as F0DatePicker,
  Lo as F0Dialog,
  ru as F0DialogContext,
  Rx as F0DialogProvider,
  Ih as F0DurationInput,
  Lx as F0EventCatcherProvider,
  Mx as F0FileItem,
  qy as F0FilterPickerContent,
  Gy as F0Form,
  nt as F0FormField,
  ex as F0GridStack,
  zw as F0HILActionConfirmation,
  Ky as F0Heading,
  Le as F0Icon,
  zd as F0Link,
  e0 as F0NotesTextEditor,
  t0 as F0NotesTextEditorSkeleton,
  eu as F0OneIcon,
  Px as F0OneSwitch,
  lx as F0Provider,
  n0 as F0RichTextDisplay,
  Ou as F0RichTextEditor,
  bn as F0Select,
  tx as F0TableOfContentPopover,
  Bx as F0TagAlert,
  Dd as F0TagBalance,
  Vx as F0TagCompany,
  jx as F0TagDot,
  $x as F0TagList,
  zx as F0TagPerson,
  ou as F0TagRaw,
  Po as F0TagStatus,
  qx as F0TagTeam,
  sl as F0Text,
  Yy as F0TimelineRow,
  kv as F0WizardForm,
  r0 as FILE_TYPES,
  Zx as FunnelChartSkeleton,
  Ux as GROUP_ID_SYMBOL,
  Wx as GaugeChartSkeleton,
  Hx as HeatmapChartSkeleton,
  Fy as HomeLayout,
  Cy as Layout,
  s0 as LineChart,
  Qx as LineChartSkeleton,
  a0 as NotesTextEditorPatchTargetNotFoundError,
  i0 as NotesTextEditorUnsupportedPatchTypeError,
  Gx as OneCalendar,
  Kx as OneCalendarInternal,
  ti as OneEllipsis,
  Uo as OneEmptyState,
  Xx as OneFilterPicker,
  o0 as PieChart,
  Yx as PieChartSkeleton,
  ju as PrivacyModeProvider,
  ly as ProductBlankslate,
  l0 as ProductCard,
  sx as ProductModal,
  fy as ProductWidget,
  c0 as ProgressBarChart,
  d0 as RadarChart,
  Jx as RadarChartSkeleton,
  Ny as StandardLayout,
  fd as SurveyAllQuestionsLoadingSkeleton,
  rx as SurveyAnsweringForm,
  nx as SurveyFormBuilder,
  Qb as SurveySteppedLoadingSkeleton,
  Jy as Tag,
  ew as TagCounter,
  Dy as TwoColumnLayout,
  Ho as UpsellRequestResponseDialog,
  ax as UpsellingBanner,
  Qo as UpsellingButton,
  ix as UpsellingPopover,
  u0 as VerticalBarChart,
  tw as WeekStartDay,
  f0 as _RadarChart,
  m0 as actionBarStatuses,
  qw as actionItemStatuses,
  Zw as aiTranslations,
  ky as avatarVariants,
  nw as buildTranslations,
  Ly as buttonDropdownModes,
  Ry as buttonDropdownSizes,
  Oy as buttonDropdownVariants,
  Iy as buttonSizes,
  Py as buttonToggleSizes,
  By as buttonToggleVariants,
  Ey as buttonVariants,
  rw as cardImageAspectRatios,
  sw as cardImageFits,
  aw as cardImageSizes,
  iw as chartColorTokens,
  ow as chipVariants,
  $b as computeSectionEndIds,
  Uw as contentTypes,
  lw as createAtlaskitDriver,
  cw as createDataSourceDefinition,
  Gu as createPageLayoutBlock,
  Ku as createPageLayoutBlockGroup,
  cx as dataCollectionLocalStorageHandler,
  jy as datepickerSizes,
  b0 as defaultTranslations,
  Wy as defineAvailableForm,
  Qy as describeFormSchema,
  $y as durationInputSizes,
  Nh as durationUnits,
  fs as evaluateRenderIf,
  bt as experimental,
  vt as f0FormField,
  wi as fieldsToSeconds,
  Vb as flattenElements,
  un as generateAnchorId,
  dw as getAnimationVariants,
  uw as getCanvasEntity,
  fw as getDataSourcePaginationType,
  mw as getEmojiLabel,
  an as getF0Config,
  hw as getGranularityDefinition,
  pw as getGranularityDefinitions,
  gw as getGranularitySimpleDefinition,
  Uy as getSchemaDefinition,
  vw as granularityDefinitions,
  Zy as hasF0Config,
  Nc as inferFieldType,
  jb as injectSectionEnds,
  bw as isInfiniteScrollPagination,
  yw as isPageBasedPagination,
  Oe as isZodType,
  My as linkVariants,
  xw as modules,
  Ww as oneIconSizes,
  h0 as predefinedPresets,
  ww as rangeSeparator,
  fo as reconstructElements,
  zy as secondsToFields,
  Ss as secondsToVisibleFields,
  p0 as selectSizes,
  Ty as tagDotColors,
  Xy as timelineRowStatuses,
  st as unwrapZodSchema,
  Sw as useAiChat,
  Hw as useAiChatTranslations,
  kw as useData,
  _w as useDataSource,
  Cw as useDefaultCopilotActions,
  Nw as useDndEvents,
  Dw as useDraggable,
  Fw as useDroppableList,
  Tw as useEmojiConfetti,
  Av as useF0AiFormRegistry,
  Aw as useF0Dialog,
  ps as useF0Form,
  Gc as useF0FormDefinition,
  Ew as useGroups,
  Iw as useMessageSourcesAction,
  Ow as useOrchestratorThinkingAction,
  g0 as usePrivacyMode,
  Rw as useReducedMotion,
  Rc as useSchemaDefinition,
  Lw as useSelectable,
  Mw as useXRay,
  Re as withDataTestId
};
