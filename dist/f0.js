import { cR as mo, ay as Ie, bX as er, K as W, L as tn, _ as Wn, cS as po, ac as ta, aD as Ga, cT as cd, aE as go, ah as Ve, u as Ne, a9 as Me, cU as tr, a6 as dd, R as ud, cV as br, az as vt, av as na, cW as fd, cX as hd, cY as md, cZ as Ka, bB as pd, c_ as gd, c$ as vo, d0 as vd, a$ as ra, b0 as sa, a4 as Zr, b1 as aa, aK as bo, cG as yr, d1 as yo, d2 as bd, d3 as yd, d4 as xd, aF as wd, d5 as ia, d6 as Xa, bE as Sd, d7 as kd, b5 as _d, d8 as Cd, am as xo, M as Pe, at as Nd, au as xr, d9 as Qn, da as wo, co as oa, db as Dd, dc as Fd, ao as nr, dd as la, cp as So, aU as gn, cq as ko, de as Td, df as ca, br as Ad, dg as _o, dh as Co, N as St, aP as Ed, di as Is, dj as No, dk as Rd, dl as Do, bP as bn, dm as Fo, dn as Id, dp as Od, as as To, dq as Ld, cf as Md, dr as Pd, aC as qr, ds as Bd, dt as Vd, du as jd, dv as $d, j as zd, dw as Zd, a8 as Ao, dx as dn, dy as Eo, dz as Ro, dA as wr, ci as Io, aa as da, ab as ua, dB as fa, af as ha, al as dt, dC as ma, an as yn, dD as Pn, dE as Bn, ae as Vn, dF as jn, dG as qd, dH as lr, dI as Oo, bv as Sr, dJ as ot, dK as Lo, bR as Ur, dL as Mo, bM as pa, bS as ga, dM as Ud, dN as Wd, dO as Qd, dP as Hd, ck as Gd, bk as Po, bp as Kd, dQ as Xd, dR as Yd, dS as Jd, dT as Bo, bY as eu, c0 as tu, c7 as nu, dU as Vo, dV as ru, dW as su, dX as au, dY as iu, I as ou, dZ as lu, d_ as cu, d$ as du, e0 as uu, bF as fu, e1 as hu } from "./F0AiChat-BYLxF5hG.js";
import { en as lx, e5 as cx, i as dx, ez as ux, bj as fx, h as hx, F as mx, a as px, C as gx, b as vx, bQ as bx, c9 as yx, bx as xx, ca as wx, be as Sx, bD as kx, aJ as _x, by as Cx, aS as Nx, ec as Dx, eg as Fx, e3 as Tx, eh as Ax, eD as Ex, k as Rx, bA as Ix, ej as Ox, bz as Lx, bC as Mx, el as Px, em as Bx, cQ as Vx, e6 as jx, eo as $x, e7 as zx, e8 as Zx, e9 as qx, cC as Ux, cD as Wx, e2 as Qx, ea as Hx, eb as Gx, ek as Kx, cE as Xx, eE as Yx, ed as Jx, ee as ew, ef as tw, e4 as nw, cF as rw, ey as sw, et as aw, ew as iw, g as ow, es as lw, bn as cw, cB as dw, cy as uw, cA as fw, cx as hw, er as mw, eq as pw, cr as gw, cz as vw, c as bw, ep as yw, eu as xw, d as ww, eA as Sw, eB as kw, eC as _w, bl as Cw, ei as Nw, ev as Dw, f as Fw, e as Tw, bi as Aw, ex as Ew, eF as Rw } from "./F0AiChat-BYLxF5hG.js";
import { jsx as c, jsxs as D, Fragment as Ge } from "react/jsx-runtime";
import * as kt from "react";
import ue, { forwardRef as st, useRef as Q, useImperativeHandle as mu, Children as kr, useCallback as O, useMemo as z, useState as ee, useEffect as oe, createElement as cr, isValidElement as jo, Fragment as $o, useLayoutEffect as pu, createContext as Et, memo as zo, useReducer as gu, useContext as nt, cloneElement as vu, useId as va } from "react";
import { unstable_batchedUpdates as dr, createPortal as bu, flushSync as yu } from "react-dom";
import { C as xu, X as wu, D as Os, U as Su, T as ku, E as _u, S as Zo, I as ba, Y as qo, N as Cu, $ as Nu, Z as Du, a0 as Fu, H as Tu, l as Au, a1 as Eu } from "./index-C8CHV0An.js";
import { n as Ow, o as Lw, p as Mw, x as Pw, F as Bw, W as Vw, q as jw, Q as $w, O as zw, r as Zw, P as qw, w as Uw, y as Ww, R as Qw, v as Hw, _ as Gw, z as Kw, M as Xw, G as Yw, u as Jw } from "./index-C8CHV0An.js";
import { A as t0, F as n0, c as r0, d as s0, b as a0, a as i0, o as o0, u as l0 } from "./F0HILActionConfirmation-dyML5T1a.js";
import { defaultTranslations as d0 } from "./i18n-provider-defaults.js";
const Ru = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Iu = st(function({ widgets: t, children: n }, r) {
  const s = Q(null);
  mu(r, () => s.current);
  const a = kr.toArray(t).filter((i) => !!i).map((i, o) => /* @__PURE__ */ c("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, o));
  return /* @__PURE__ */ c(mo, { layout: "home", children: /* @__PURE__ */ D("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ D("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ c(xu, { columns: Ru, showArrows: !1, children: a }),
      /* @__PURE__ */ c("main", { children: n })
    ] }),
    /* @__PURE__ */ D("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ c("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: a.slice(0, 3) }),
      /* @__PURE__ */ c("main", { className: "col-span-2", children: n }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-5", children: a.slice(3) })
    ] })
  ] }) });
}), Ou = tn({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Uo = ue.forwardRef(({ children: e, variant: t, className: n, ...r }, s) => /* @__PURE__ */ c(mo, { layout: "standard", children: /* @__PURE__ */ c(
  "section",
  {
    ref: s,
    className: W("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ c("div", { className: W(Ou({ variant: t })), children: e })
  }
) }));
Uo.displayName = "StandardLayout";
const Lu = Ie(
  er(
    {
      name: "StandardLayout",
      type: "layout"
    },
    Uo
  )
), Mu = st(
  function({
    children: t,
    sideContent: n,
    mainColumnPosition: r = "left",
    sticky: s = !1
  }, a) {
    return /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ D(
      "div",
      {
        className: W(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          s && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ c(
            "main",
            {
              className: W(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                s ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                r === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ c(
            Bu,
            {
              sticky: s,
              className: W(
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
), Pu = Ie(
  er(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Mu
  )
), Bu = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c(
  "aside",
  {
    className: W(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      t
    ),
    children: e
  }
), Vu = (e, t, n) => /* @__PURE__ */ c("div", { children: e }), Wr = ({
  widgets: e = [],
  editMode: t = !1,
  onChange: n = () => {
  },
  WidgetWrapper: r = Vu,
  main: s = !1,
  deps: a
}) => {
  const i = O(
    (_, w, C) => /* @__PURE__ */ c(
      Wn.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: r(_, w, C)
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
  ), l = (_, w) => {
    if (typeof _.content == "function" && _.deps && w) {
      const C = {};
      return _.deps.forEach((A) => {
        typeof A == "string" && w[A] !== void 0 && (C[A] = w[A]);
      }), _.content(C);
    }
    return typeof _.content == "function" ? null : _.content;
  }, d = (_, w, C) => _.map((A) => {
    const L = l(A, C), P = {
      id: A.id,
      h: A.h ?? 1,
      w: A.w ?? 1,
      allowedSizes: A.availableSizes,
      noMove: !w,
      noResize: !w,
      locked: A.locked,
      meta: A.meta,
      _originalContent: L,
      content: i(L, A.meta, w)
    };
    return A.x !== void 0 && (P.x = A.x), A.y !== void 0 && (P.y = A.y), P;
  }), [u, f] = ee(
    d(e, t)
  ), h = Q(t), m = Q(e), x = Q(!1), S = Q(/* @__PURE__ */ new Map()), g = Q(e);
  g.current = e;
  const b = Q(a), p = z(() => {
    const _ = /* @__PURE__ */ new Map();
    return !a || Object.keys(a).length === 0 || e.forEach((w) => {
      if (w.deps && w.deps.length > 0) {
        const C = w.deps.map((A) => typeof A == "string" && a[A] !== void 0 ? a[A] : A).filter((A) => A !== null);
        _.set(w.id, C);
      }
    }), _;
  }, [e, a]), v = O(
    (_) => {
      f(_), x.current || n(
        _.map((w) => {
          const C = g.current.find(
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
      ), x.current = !1;
    },
    [n]
  ), k = (_, w) => !_ && !w ? !1 : !_ || !w || _.length !== w.length ? !0 : _.some((C, A) => C !== w[A]);
  return oe(() => {
    const _ = h.current !== t, w = m.current !== e, C = b.current !== a && (b.current === void 0 || a === void 0 || Object.keys(b.current).length !== Object.keys(a).length || Object.keys(a).some(
      (T) => b.current?.[T] !== a[T]
    )), A = /* @__PURE__ */ new Map();
    e.forEach((T) => {
      if (T.deps && T.deps.length > 0) {
        const R = S.current.get(T.id), N = p.get(T.id);
        A.set(
          T.id,
          k(R, N)
        ), N ? S.current.set(T.id, N) : S.current.delete(T.id);
      }
    });
    const L = new Set(e.map((T) => T.id));
    S.current.forEach((T, R) => {
      L.has(R) || S.current.delete(R);
    });
    const P = Array.from(A.values()).some((T) => T) || C;
    _ && !w && !P ? (x.current = !0, f(
      (T) => T.map((R) => {
        const N = e.find((H) => H.id === R.id);
        if (!N)
          return R;
        const M = l(N, a);
        return {
          ...R,
          noMove: !t,
          noResize: !t,
          locked: N.locked,
          meta: N.meta,
          _originalContent: M,
          content: i(
            M,
            N.meta,
            t
          )
        };
      })
    )) : (w || P) && f((T) => {
      const R = new Map(
        T.map((N) => [N.id, N])
      );
      return e.map((N) => {
        const M = R.get(N.id), H = A.get(N.id) ?? !1;
        let X;
        H || !M ? X = l(N, a) : X = M._originalContent ?? l(N, a);
        const te = {
          id: N.id,
          h: M?.h ?? N.h ?? 1,
          w: M?.w ?? N.w ?? 1,
          allowedSizes: N.availableSizes,
          noMove: !t,
          noResize: !t,
          locked: N.locked,
          meta: N.meta,
          _originalContent: X,
          content: i(X, N.meta, t)
        }, se = M?.x ?? N.x, q = M?.y ?? N.y;
        return se !== void 0 && (te.x = se), q !== void 0 && (te.y = q), te;
      });
    }), h.current = t, m.current = e, b.current = a;
  }, [
    e,
    t,
    i,
    p,
    a
  ]), /* @__PURE__ */ c(
    po,
    {
      className: W(s && "h-full flex-1 overflow-auto"),
      options: o,
      onChange: v,
      widgets: u
    }
  );
};
Wr.displayName = "GroupGrid";
Wr.__isPageLayoutGroup = !0;
const ju = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutBlock = !0, n;
}, $u = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutGroup = !0, n;
}, zu = (e, t) => /* @__PURE__ */ c(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ c(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Wo = st(zu), Zu = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji"
], Qo = st((e, t) => {
  const n = Zu.reduce((r, s) => {
    const { [s]: a, ...i } = r;
    return i;
  }, e);
  return /* @__PURE__ */ c(
    ta,
    {
      ...n,
      variant: "ai",
      ref: t,
      iconRotate: e.icon == Wo
    }
  );
});
Qo.displayName = "AIButton";
const Rn = tn({
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
}), qu = {
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
}, ya = st(
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
    const f = s ?? qu[t ?? "body"], h = l ? /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (a !== void 0) {
      const m = typeof a == "number" ? a : 1;
      return h ? cr(
        f,
        {
          ...d,
          className: W(
            Rn({ variant: t, align: n }),
            r,
            "inline-flex gap-0.5"
          ),
          ref: u
        },
        /* @__PURE__ */ c(
          Ga,
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
        Ga,
        {
          ref: u,
          lines: m,
          noTooltip: i,
          tag: f,
          className: W(Rn({ variant: t, align: n }), r),
          markdown: o,
          ...d,
          children: e
        }
      );
    }
    if (o) {
      const m = cd(e);
      return h ? cr(
        f,
        {
          ...d,
          className: W(Rn({ variant: t, align: n }), r),
          ref: u
        },
        /* @__PURE__ */ c("span", { dangerouslySetInnerHTML: { __html: m } }),
        h
      ) : cr(f, {
        ...d,
        className: W(Rn({ variant: t, align: n }), r),
        ref: u,
        dangerouslySetInnerHTML: { __html: m }
      });
    }
    return cr(
      f,
      {
        ...d,
        className: W(Rn({ variant: t, align: n }), r),
        ref: u
      },
      e,
      h
    );
  }
);
ya.displayName = "Text";
const Ho = st((e, t) => /* @__PURE__ */ c(ya, { ref: t, markdown: e.markdown ?? !0, ...e }));
Ho.displayName = "F0Text";
const Go = Ie(Ho), yy = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Ko = ({
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
  const [d, u] = ee(!1), [f, h] = ee(!1), m = Ne(), x = (g) => {
    u(g);
  }, S = f || d;
  return oe(() => {
    if (!s || !r) return;
    const g = () => {
      r();
    };
    return document.addEventListener("mouseup", g), () => {
      document.removeEventListener("mouseup", g);
    };
  }, [s, r]), /* @__PURE__ */ D(
    "div",
    {
      className: W(
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
              className: W(
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
                    children: /* @__PURE__ */ c(Me, { icon: tr, size: "xs" })
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: W(
                      "flex min-w-0 flex-1 items-center",
                      t && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ c(Go, { variant: "label", content: e, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ c(dd, { children: (a || i) && S && /* @__PURE__ */ D(
            Wn.div,
            {
              className: W(
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
                  Qo,
                  {
                    size: "sm",
                    label: m.ai.ask,
                    onClick: a,
                    icon: Wo
                  }
                ) }),
                i && /* @__PURE__ */ c(
                  ud,
                  {
                    items: i,
                    open: d,
                    onOpenChange: x,
                    align: "end",
                    children: /* @__PURE__ */ c(
                      ta,
                      {
                        icon: br,
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
}, Uu = () => /* @__PURE__ */ D("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ c("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ c(Ve, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ D("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ c(Ve, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
Ko.displayName = "F0Widget";
const Wu = go(Ko, Uu), Qu = ({
  children: e,
  title: t,
  draggable: n = !1,
  actions: r,
  aiButton: s
}) => /* @__PURE__ */ c(
  Wu,
  {
    title: t,
    draggable: n,
    actions: r,
    AIButton: s,
    children: e
  }
), Xo = ({
  widgets: e,
  editMode: t = !1,
  onChange: n = () => {
  },
  deps: r,
  ...s
}) => /* @__PURE__ */ c(
  Wr,
  {
    widgets: e,
    editMode: t,
    onChange: n,
    deps: r,
    ...s,
    WidgetWrapper: (a, i, o) => /* @__PURE__ */ c(
      Qu,
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
Xo.displayName = "Dashboard";
const Hu = $u("Dashboard", Xo), xy = Ie(
  vt("Dashboard", Hu)
), Gu = tn({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Ku = (e) => (e || []).map((t) => t.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n), t), []), Xu = (e) => {
  const t = (n) => "onClick" in n;
  return Array.isArray(e) ? e.every(t) ? [
    {
      items: e
    }
  ] : e : [e];
}, Qr = st(
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
      () => Xu(d.actions || []),
      [d.actions]
    ), h = z(
      () => f.flatMap((x) => x.items),
      [f]
    ), m = z(
      () => h.length > 0 || !!l,
      [h, l]
    );
    return /* @__PURE__ */ D(
      "div",
      {
        ref: u,
        className: W(Gu({ variant: t }), "relative", n),
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
              na,
              {
                items: Ku(f),
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
Qr.displayName = "Block";
Qr.__isPageLayoutBlock = !0;
const Yu = ({
  title: e = "",
  description: t,
  titleLevel: n = "h2",
  children: r,
  className: s,
  ...a
}) => {
  if (!e) return null;
  const i = n;
  return /* @__PURE__ */ D(Qr, { ...a, className: W("space-y-4", s), children: [
    /* @__PURE__ */ D("div", { className: "space-y-2", children: [
      /* @__PURE__ */ c(
        i,
        {
          className: W("font-semibold text-f1-foreground", {
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
}, Ju = ju(
  "BlockContent",
  Yu
), ef = (e) => !jo(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutBlock" in e.type, tf = (e) => !jo(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutGroup" in e.type, Yo = (e, t, n) => {
  const r = kr.toArray(t);
  for (const s of r)
    n.includes("block") && ef(s) || n.includes("group") && tf(s) || console.warn(
      `${e}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      s
    );
}, xa = st(
  ({ children: e, onSort: t, ...n }, r) => {
    Yo("GroupLinear", e, ["block"]);
    const [s, a] = ee(kr.toArray(e));
    return oe(() => {
      a(kr.toArray(e));
    }, [e]), oe(() => {
      t?.(s);
    }, [s, t]), /* @__PURE__ */ c("div", { ref: r, ...n, children: s.map((i, o) => /* @__PURE__ */ c($o, { children: i }, o)) });
  }
);
xa.displayName = "GroupLinear";
xa.__isPageLayoutGroup = !0;
function nf() {
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
const Hr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Cn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function wa(e) {
  return "nodeType" in e;
}
function at(e) {
  var t, n;
  return e ? Cn(e) ? e : wa(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Sa(e) {
  const {
    Document: t
  } = at(e);
  return e instanceof t;
}
function rr(e) {
  return Cn(e) ? !1 : e instanceof at(e).HTMLElement;
}
function Jo(e) {
  return e instanceof at(e).SVGElement;
}
function Nn(e) {
  return e ? Cn(e) ? e.document : wa(e) ? Sa(e) ? e : rr(e) || Jo(e) ? e.ownerDocument : document : document : document;
}
const Tt = Hr ? pu : oe;
function Gr(e) {
  const t = Q(e);
  return Tt(() => {
    t.current = e;
  }), O(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function rf() {
  const e = Q(null), t = O((r, s) => {
    e.current = setInterval(r, s);
  }, []), n = O(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Hn(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return Tt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function sr(e, t) {
  const n = Q();
  return z(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function _r(e) {
  const t = Gr(e), n = Q(null), r = O(
    (s) => {
      s !== n.current && t?.(s, n.current), n.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Cr(e) {
  const t = Q();
  return oe(() => {
    t.current = e;
  }, [e]), t.current;
}
let us = {};
function ar(e, t) {
  return z(() => {
    if (t)
      return t;
    const n = us[e] == null ? 0 : us[e] + 1;
    return us[e] = n, e + "-" + n;
  }, [e, t]);
}
function el(e) {
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
const vn = /* @__PURE__ */ el(1), Gn = /* @__PURE__ */ el(-1);
function sf(e) {
  return "clientX" in e && "clientY" in e;
}
function Kr(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = at(e.target);
  return t && e instanceof t;
}
function af(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = at(e.target);
  return t && e instanceof t;
}
function Nr(e) {
  if (af(e)) {
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
  return sf(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Yt = /* @__PURE__ */ Object.freeze({
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
        return [Yt.Translate.toString(e), Yt.Scale.toString(e)].join(" ");
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
}), Ya = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function of(e) {
  return e.matches(Ya) ? e : e.querySelector(Ya);
}
const lf = {
  display: "none"
};
function cf(e) {
  let {
    id: t,
    value: n
  } = e;
  return ue.createElement("div", {
    id: t,
    style: lf
  }, n);
}
function df(e) {
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
  return ue.createElement("div", {
    id: t,
    style: s,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function uf() {
  const [e, t] = ee("");
  return {
    announce: O((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const tl = /* @__PURE__ */ Et(null);
function ff(e) {
  const t = nt(tl);
  oe(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function hf() {
  const [e] = ee(() => /* @__PURE__ */ new Set()), t = O((r) => (e.add(r), () => e.delete(r)), [e]);
  return [O((r) => {
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
const mf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, pf = {
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
function gf(e) {
  let {
    announcements: t = pf,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = mf
  } = e;
  const {
    announce: a,
    announcement: i
  } = uf(), o = ar("DndLiveRegion"), [l, d] = ee(!1);
  if (oe(() => {
    d(!0);
  }, []), ff(z(() => ({
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
  const u = ue.createElement(ue.Fragment, null, ue.createElement(cf, {
    id: r,
    value: s.draggable
  }), ue.createElement(df, {
    id: o,
    announcement: i
  }));
  return n ? bu(u, n) : u;
}
var Ue;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ue || (Ue = {}));
function Dr() {
}
function Ja(e, t) {
  return z(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function vf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return z(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const At = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function bf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function yf(e, t) {
  const n = Nr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function xf(e, t) {
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
function wf(e, t) {
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
function ei(e) {
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
function nl(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const Sf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = ei(t), a = [];
  for (const i of r) {
    const {
      id: o
    } = i, l = n.get(o);
    if (l) {
      const d = ei(l), u = s.reduce((h, m, x) => h + bf(d[x], m), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: o,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return a.sort(xf);
};
function kf(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), s = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), i = s - r, o = a - n;
  if (r < s && n < a) {
    const l = t.width * t.height, d = e.width * e.height, u = i * o, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const _f = (e) => {
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
      const l = kf(o, t);
      l > 0 && s.push({
        id: i,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return s.sort(wf);
};
function Cf(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function rl(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : At;
}
function Nf(e) {
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
const Df = /* @__PURE__ */ Nf(1);
function sl(e) {
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
function Ff(e, t, n) {
  const r = sl(t);
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
const Tf = {
  ignoreTransform: !1
};
function Dn(e, t) {
  t === void 0 && (t = Tf);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: u
    } = at(e).getComputedStyle(e);
    d && (n = Ff(n, d, u));
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
function ti(e) {
  return Dn(e, {
    ignoreTransform: !0
  });
}
function Af(e) {
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
function Ef(e, t) {
  return t === void 0 && (t = at(e).getComputedStyle(e)), t.position === "fixed";
}
function Rf(e, t) {
  t === void 0 && (t = at(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const a = t[s];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function Xr(e, t) {
  const n = [];
  function r(s) {
    if (t != null && n.length >= t || !s)
      return n;
    if (Sa(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
      return n.push(s.scrollingElement), n;
    if (!rr(s) || Jo(s) || n.includes(s))
      return n;
    const a = at(e).getComputedStyle(s);
    return s !== e && Rf(s, a) && n.push(s), Ef(s, a) ? n : r(s.parentNode);
  }
  return e ? r(e) : n;
}
function al(e) {
  const [t] = Xr(e, 1);
  return t ?? null;
}
function fs(e) {
  return !Hr || !e ? null : Cn(e) ? e : wa(e) ? Sa(e) || e === Nn(e).scrollingElement ? window : rr(e) ? e : null : null;
}
function il(e) {
  return Cn(e) ? e.scrollX : e.scrollLeft;
}
function ol(e) {
  return Cn(e) ? e.scrollY : e.scrollTop;
}
function Ls(e) {
  return {
    x: il(e),
    y: ol(e)
  };
}
var We;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(We || (We = {}));
function ll(e) {
  return !Hr || !e ? !1 : e === document.scrollingElement;
}
function cl(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ll(e) ? {
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
const If = {
  x: 0.2,
  y: 0.2
};
function Of(e, t, n, r, s) {
  let {
    top: a,
    left: i,
    right: o,
    bottom: l
  } = n;
  r === void 0 && (r = 10), s === void 0 && (s = If);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: h
  } = cl(e), m = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, S = {
    height: t.height * s.y,
    width: t.width * s.x
  };
  return !d && a <= t.top + S.height ? (m.y = We.Backward, x.y = r * Math.abs((t.top + S.height - a) / S.height)) : !u && l >= t.bottom - S.height && (m.y = We.Forward, x.y = r * Math.abs((t.bottom - S.height - l) / S.height)), !h && o >= t.right - S.width ? (m.x = We.Forward, x.x = r * Math.abs((t.right - S.width - o) / S.width)) : !f && i <= t.left + S.width && (m.x = We.Backward, x.x = r * Math.abs((t.left + S.width - i) / S.width)), {
    direction: m,
    speed: x
  };
}
function Lf(e) {
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
function dl(e) {
  return e.reduce((t, n) => vn(t, Ls(n)), At);
}
function Mf(e) {
  return e.reduce((t, n) => t + il(n), 0);
}
function Pf(e) {
  return e.reduce((t, n) => t + ol(n), 0);
}
function ul(e, t) {
  if (t === void 0 && (t = Dn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: s,
    right: a
  } = t(e);
  al(e) && (s <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Bf = [["x", ["left", "right"], Mf], ["y", ["top", "bottom"], Pf]];
class ka {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Xr(n), s = dl(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, o] of Bf)
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
class $n {
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
function Vf(e) {
  const {
    EventTarget: t
  } = at(e);
  return e instanceof t ? e : Nn(e);
}
function hs(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var xt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(xt || (xt = {}));
function ni(e) {
  e.preventDefault();
}
function jf(e) {
  e.stopPropagation();
}
var ye;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ye || (ye = {}));
const fl = {
  start: [ye.Space, ye.Enter],
  cancel: [ye.Esc],
  end: [ye.Space, ye.Enter, ye.Tab]
}, $f = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ye.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ye.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ye.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ye.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class _a {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new $n(Nn(n)), this.windowListeners = new $n(at(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(xt.Resize, this.handleCancel), this.windowListeners.add(xt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(xt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && ul(r), n(At);
  }
  handleKeyDown(t) {
    if (Kr(t)) {
      const {
        active: n,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: a = fl,
        coordinateGetter: i = $f,
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
      } : At;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (f) {
        const h = Gn(f, u), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = r.current;
        for (const S of x) {
          const g = t.code, {
            isTop: b,
            isRight: p,
            isLeft: v,
            isBottom: k,
            maxScroll: _,
            minScroll: w
          } = cl(S), C = Lf(S), A = {
            x: Math.min(g === ye.Right ? C.right - C.width / 2 : C.right, Math.max(g === ye.Right ? C.left : C.left + C.width / 2, f.x)),
            y: Math.min(g === ye.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(g === ye.Down ? C.top : C.top + C.height / 2, f.y))
          }, L = g === ye.Right && !p || g === ye.Left && !v, P = g === ye.Down && !k || g === ye.Up && !b;
          if (L && A.x !== f.x) {
            const T = S.scrollLeft + h.x, R = g === ye.Right && T <= _.x || g === ye.Left && T >= w.x;
            if (R && !h.y) {
              S.scrollTo({
                left: T,
                behavior: o
              });
              return;
            }
            R ? m.x = S.scrollLeft - T : m.x = g === ye.Right ? S.scrollLeft - _.x : S.scrollLeft - w.x, m.x && S.scrollBy({
              left: -m.x,
              behavior: o
            });
            break;
          } else if (P && A.y !== f.y) {
            const T = S.scrollTop + h.y, R = g === ye.Down && T <= _.y || g === ye.Up && T >= w.y;
            if (R && !h.x) {
              S.scrollTo({
                top: T,
                behavior: o
              });
              return;
            }
            R ? m.y = S.scrollTop - T : m.y = g === ye.Down ? S.scrollTop - _.y : S.scrollTop - w.y, m.y && S.scrollBy({
              top: -m.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(t, vn(Gn(f, this.referenceCoordinates), m));
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
_a.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = fl,
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
function ri(e) {
  return !!(e && "distance" in e);
}
function si(e) {
  return !!(e && "delay" in e);
}
class Ca {
  constructor(t, n, r) {
    var s;
    r === void 0 && (r = Vf(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = n, this.document = Nn(i), this.documentListeners = new $n(this.document), this.listeners = new $n(r), this.windowListeners = new $n(at(i)), this.initialCoordinates = (s = Nr(a)) != null ? s : At, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(xt.Resize, this.handleCancel), this.windowListeners.add(xt.DragStart, ni), this.windowListeners.add(xt.VisibilityChange, this.handleCancel), this.windowListeners.add(xt.ContextMenu, ni), this.documentListeners.add(xt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (si(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (ri(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(xt.Click, jf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(xt.SelectionChange, this.removeTextSelection), n(t));
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
    const l = (n = Nr(t)) != null ? n : At, d = Gn(s, l);
    if (!r && o) {
      if (ri(o)) {
        if (o.tolerance != null && hs(d, o.tolerance))
          return this.handleCancel();
        if (hs(d, o.distance))
          return this.handleStart();
      }
      if (si(o) && hs(d, o.tolerance))
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
    t.code === ye.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const zf = {
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
class Na extends Ca {
  constructor(t) {
    const {
      event: n
    } = t, r = Nn(n.target);
    super(t, zf, r);
  }
}
Na.activators = [{
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
const Zf = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ms;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Ms || (Ms = {}));
class qf extends Ca {
  constructor(t) {
    super(t, Zf, Nn(t.event.target));
  }
}
qf.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Ms.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const ms = {
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
class Uf extends Ca {
  constructor(t) {
    super(t, ms);
  }
  static setup() {
    return window.addEventListener(ms.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ms.move.name, t);
    };
    function t() {
    }
  }
}
Uf.activators = [{
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
var zn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(zn || (zn = {}));
var Fr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Fr || (Fr = {}));
function Wf(e) {
  let {
    acceleration: t,
    activator: n = zn.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: a,
    interval: i = 5,
    order: o = Fr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: u,
    delta: f,
    threshold: h
  } = e;
  const m = Hf({
    delta: f,
    disabled: !a
  }), [x, S] = rf(), g = Q({
    x: 0,
    y: 0
  }), b = Q({
    x: 0,
    y: 0
  }), p = z(() => {
    switch (n) {
      case zn.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case zn.DraggableRect:
        return s;
    }
  }, [n, s, l]), v = Q(null), k = O(() => {
    const w = v.current;
    if (!w)
      return;
    const C = g.current.x * b.current.x, A = g.current.y * b.current.y;
    w.scrollBy(C, A);
  }, []), _ = z(() => o === Fr.TreeOrder ? [...d].reverse() : d, [o, d]);
  oe(
    () => {
      if (!a || !d.length || !p) {
        S();
        return;
      }
      for (const w of _) {
        if (r?.(w) === !1)
          continue;
        const C = d.indexOf(w), A = u[C];
        if (!A)
          continue;
        const {
          direction: L,
          speed: P
        } = Of(w, A, p, t, h);
        for (const T of ["x", "y"])
          m[T][L[T]] || (P[T] = 0, L[T] = 0);
        if (P.x > 0 || P.y > 0) {
          S(), v.current = w, x(k, i), g.current = P, b.current = L;
          return;
        }
      }
      g.current = {
        x: 0,
        y: 0
      }, b.current = {
        x: 0,
        y: 0
      }, S();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      k,
      r,
      S,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      x,
      d,
      _,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Qf = {
  x: {
    [We.Backward]: !1,
    [We.Forward]: !1
  },
  y: {
    [We.Backward]: !1,
    [We.Forward]: !1
  }
};
function Hf(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Cr(t);
  return sr((s) => {
    if (n || !r || !s)
      return Qf;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [We.Backward]: s.x[We.Backward] || a.x === -1,
        [We.Forward]: s.x[We.Forward] || a.x === 1
      },
      y: {
        [We.Backward]: s.y[We.Backward] || a.y === -1,
        [We.Forward]: s.y[We.Forward] || a.y === 1
      }
    };
  }, [n, t, r]);
}
function Gf(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return sr((s) => {
    var a;
    return t == null ? null : (a = r ?? s) != null ? a : null;
  }, [r, t]);
}
function Kf(e, t) {
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
var Kn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Kn || (Kn = {}));
var Ps;
(function(e) {
  e.Optimized = "optimized";
})(Ps || (Ps = {}));
const ai = /* @__PURE__ */ new Map();
function Xf(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: s
  } = t;
  const [a, i] = ee(null), {
    frequency: o,
    measure: l,
    strategy: d
  } = s, u = Q(e), f = g(), h = Hn(f), m = O(function(b) {
    b === void 0 && (b = []), !h.current && i((p) => p === null ? b : p.concat(b.filter((v) => !p.includes(v))));
  }, [h]), x = Q(null), S = sr((b) => {
    if (f && !n)
      return ai;
    if (!b || b === ai || u.current !== e || a != null) {
      const p = /* @__PURE__ */ new Map();
      for (let v of e) {
        if (!v)
          continue;
        if (a && a.length > 0 && !a.includes(v.id) && v.rect.current) {
          p.set(v.id, v.rect.current);
          continue;
        }
        const k = v.node.current, _ = k ? new ka(l(k), k) : null;
        v.rect.current = _, _ && p.set(v.id, _);
      }
      return p;
    }
    return b;
  }, [e, a, n, f, l]);
  return oe(() => {
    u.current = e;
  }, [e]), oe(
    () => {
      f || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), oe(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), oe(
    () => {
      f || typeof o != "number" || x.current !== null || (x.current = setTimeout(() => {
        m(), x.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, f, m, ...r]
  ), {
    droppableRects: S,
    measureDroppableContainers: m,
    measuringScheduled: a != null
  };
  function g() {
    switch (d) {
      case Kn.Always:
        return !1;
      case Kn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Da(e, t) {
  return sr((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Yf(e, t) {
  return Da(e, t);
}
function Jf(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Gr(t), s = z(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, n]);
  return oe(() => () => s?.disconnect(), [s]), s;
}
function Yr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Gr(t), s = z(
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
  return oe(() => () => s?.disconnect(), [s]), s;
}
function eh(e) {
  return new ka(Dn(e), e);
}
function ii(e, t, n) {
  t === void 0 && (t = eh);
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
  const i = Jf({
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
  }), o = Yr({
    callback: a
  });
  return Tt(() => {
    a(), e ? (o?.observe(e), i?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), i?.disconnect());
  }, [e]), r;
}
function th(e) {
  const t = Da(e);
  return rl(e, t);
}
const oi = [];
function nh(e) {
  const t = Q(e), n = sr((r) => e ? r && r !== oi && e && t.current && e.parentNode === t.current.parentNode ? r : Xr(e) : oi, [e]);
  return oe(() => {
    t.current = e;
  }, [e]), n;
}
function rh(e) {
  const [t, n] = ee(null), r = Q(e), s = O((a) => {
    const i = fs(a.target);
    i && n((o) => o ? (o.set(i, Ls(i)), new Map(o)) : null);
  }, []);
  return oe(() => {
    const a = r.current;
    if (e !== a) {
      i(a);
      const o = e.map((l) => {
        const d = fs(l);
        return d ? (d.addEventListener("scroll", s, {
          passive: !0
        }), [d, Ls(d)]) : null;
      }).filter((l) => l != null);
      n(o.length ? new Map(o) : null), r.current = e;
    }
    return () => {
      i(e), i(a);
    };
    function i(o) {
      o.forEach((l) => {
        const d = fs(l);
        d?.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), z(() => e.length ? t ? Array.from(t.values()).reduce((a, i) => vn(a, i), At) : dl(e) : At, [e, t]);
}
function li(e, t) {
  t === void 0 && (t = []);
  const n = Q(null);
  return oe(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), oe(() => {
    const r = e !== At;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Gn(e, n.current) : At;
}
function sh(e) {
  oe(
    () => {
      if (!Hr)
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
function ah(e, t) {
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
function hl(e) {
  return z(() => e ? Af(e) : null, [e]);
}
const ci = [];
function ih(e, t) {
  t === void 0 && (t = Dn);
  const [n] = e, r = hl(n ? at(n) : null), [s, a] = ee(ci);
  function i() {
    a(() => e.length ? e.map((l) => ll(l) ? r : new ka(t(l), l)) : ci);
  }
  const o = Yr({
    callback: i
  });
  return Tt(() => {
    o?.disconnect(), i(), e.forEach((l) => o?.observe(l));
  }, [e]), s;
}
function ml(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return rr(t) ? t : e;
}
function oh(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ee(null), s = O((d) => {
    for (const {
      target: u
    } of d)
      if (rr(u)) {
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
  }, [t]), a = Yr({
    callback: s
  }), i = O((d) => {
    const u = ml(d);
    a?.disconnect(), u && a?.observe(u), r(u ? t(u) : null);
  }, [t, a]), [o, l] = _r(i);
  return z(() => ({
    nodeRef: o,
    rect: n,
    setRef: l
  }), [n, o, l]);
}
const lh = [{
  sensor: Na,
  options: {}
}, {
  sensor: _a,
  options: {}
}], ch = {
  current: {}
}, pr = {
  draggable: {
    measure: ti
  },
  droppable: {
    measure: ti,
    strategy: Kn.WhileDragging,
    frequency: Ps.Optimized
  },
  dragOverlay: {
    measure: Dn
  }
};
class Zn extends Map {
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
const dh = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Zn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Dr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: pr,
  measureDroppableContainers: Dr,
  windowRect: null,
  measuringScheduled: !1
}, pl = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Dr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Dr
}, ir = /* @__PURE__ */ Et(pl), gl = /* @__PURE__ */ Et(dh);
function uh() {
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
      containers: new Zn()
    }
  };
}
function fh(e, t) {
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
      } = n, s = new Zn(e.droppable.containers);
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
      const i = new Zn(e.droppable.containers);
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
      const a = new Zn(e.droppable.containers);
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
function hh(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: s
  } = nt(ir), a = Cr(r), i = Cr(n?.id);
  return oe(() => {
    if (!t && !r && a && i != null) {
      if (!Kr(a) || document.activeElement === a.target)
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
          const f = of(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, s, i, a]), null;
}
function vl(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((s, a) => a({
    transform: s,
    ...r
  }), n) : n;
}
function mh(e) {
  return z(
    () => ({
      draggable: {
        ...pr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...pr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...pr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function ph(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: s = !0
  } = e;
  const a = Q(!1), {
    x: i,
    y: o
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  Tt(() => {
    if (!i && !o || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const d = t?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const u = n(d), f = rl(u, r);
    if (i || (f.x = 0), o || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const h = al(d);
      h && h.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, o, r, n]);
}
const Jr = /* @__PURE__ */ Et({
  ...At,
  scaleX: 1,
  scaleY: 1
});
var Qt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Qt || (Qt = {}));
const gh = /* @__PURE__ */ zo(function(t) {
  var n, r, s, a;
  let {
    id: i,
    accessibility: o,
    autoScroll: l = !0,
    children: d,
    sensors: u = lh,
    collisionDetection: f = _f,
    measuring: h,
    modifiers: m,
    ...x
  } = t;
  const S = gu(fh, void 0, uh), [g, b] = S, [p, v] = hf(), [k, _] = ee(Qt.Uninitialized), w = k === Qt.Initialized, {
    draggable: {
      active: C,
      nodes: A,
      translate: L
    },
    droppable: {
      containers: P
    }
  } = g, T = C != null ? A.get(C) : null, R = Q({
    initial: null,
    translated: null
  }), N = z(() => {
    var Ke;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Ke = T?.data) != null ? Ke : ch,
      rect: R
    } : null;
  }, [C, T]), M = Q(null), [H, X] = ee(null), [te, se] = ee(null), q = Hn(x, Object.values(x)), fe = ar("DndDescribedBy", i), K = z(() => P.getEnabled(), [P]), V = mh(h), {
    droppableRects: I,
    measureDroppableContainers: ce,
    measuringScheduled: xe
  } = Xf(K, {
    dragging: w,
    dependencies: [L.x, L.y],
    config: V.droppable
  }), ie = Gf(A, C), pe = z(() => te ? Nr(te) : null, [te]), be = ld(), le = Yf(ie, V.draggable.measure);
  ph({
    activeNode: C != null ? A.get(C) : null,
    config: be.layoutShiftCompensation,
    initialRect: le,
    measure: V.draggable.measure
  });
  const Y = ii(ie, V.draggable.measure, le), de = ii(ie ? ie.parentElement : null), De = Q({
    activatorEvent: null,
    active: null,
    activeNode: ie,
    collisionRect: null,
    collisions: null,
    droppableRects: I,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: P,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Te = P.getNodeFor((n = De.current.over) == null ? void 0 : n.id), Le = oh({
    measure: V.dragOverlay.measure
  }), Xe = (r = Le.nodeRef.current) != null ? r : ie, it = w ? (s = Le.rect) != null ? s : Y : null, ft = !!(Le.nodeRef.current && Le.rect), y = th(ft ? null : Y), F = hl(Xe ? at(Xe) : null), E = nh(w ? Te ?? ie : null), U = ih(E), $ = vl(m, {
    transform: {
      x: L.x - y.x,
      y: L.y - y.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: N,
    activeNodeRect: Y,
    containerNodeRect: de,
    draggingNodeRect: it,
    over: De.current.over,
    overlayNodeRect: Le.rect,
    scrollableAncestors: E,
    scrollableAncestorRects: U,
    windowRect: F
  }), B = pe ? vn(pe, L) : null, ne = rh(E), he = li(ne), Ee = li(ne, [Y]), ke = vn($, he), Qe = it ? Df(it, $) : null, Bt = N && Qe ? f({
    active: N,
    collisionRect: Qe,
    droppableRects: I,
    droppableContainers: K,
    pointerCoordinates: B
  }) : null, Vt = nl(Bt, "id"), [ge, Re] = ee(null), Oe = ft ? $ : vn($, Ee), Ye = Cf(Oe, (a = ge?.rect) != null ? a : null, Y), Rt = Q(null), Qa = O(
    (Ke, ht) => {
      let {
        sensor: mt,
        options: qt
      } = ht;
      if (M.current == null)
        return;
      const yt = A.get(M.current);
      if (!yt)
        return;
      const pt = Ke.nativeEvent, It = new mt({
        active: M.current,
        activeNode: yt,
        event: pt,
        options: qt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: De,
        onAbort(He) {
          if (!A.get(He))
            return;
          const {
            onDragAbort: Ot
          } = q.current, jt = {
            id: He
          };
          Ot?.(jt), p({
            type: "onDragAbort",
            event: jt
          });
        },
        onPending(He, Ut, Ot, jt) {
          if (!A.get(He))
            return;
          const {
            onDragPending: An
          } = q.current, Wt = {
            id: He,
            constraint: Ut,
            initialCoordinates: Ot,
            offset: jt
          };
          An?.(Wt), p({
            type: "onDragPending",
            event: Wt
          });
        },
        onStart(He) {
          const Ut = M.current;
          if (Ut == null)
            return;
          const Ot = A.get(Ut);
          if (!Ot)
            return;
          const {
            onDragStart: jt
          } = q.current, Tn = {
            activatorEvent: pt,
            active: {
              id: Ut,
              data: Ot.data,
              rect: R
            }
          };
          dr(() => {
            jt?.(Tn), _(Qt.Initializing), b({
              type: Ue.DragStart,
              initialCoordinates: He,
              active: Ut
            }), p({
              type: "onDragStart",
              event: Tn
            }), X(Rt.current), se(pt);
          });
        },
        onMove(He) {
          b({
            type: Ue.DragMove,
            coordinates: He
          });
        },
        onEnd: fn(Ue.DragEnd),
        onCancel: fn(Ue.DragCancel)
      });
      Rt.current = It;
      function fn(He) {
        return async function() {
          const {
            active: Ot,
            collisions: jt,
            over: Tn,
            scrollAdjustedTranslate: An
          } = De.current;
          let Wt = null;
          if (Ot && An) {
            const {
              cancelDrop: En
            } = q.current;
            Wt = {
              activatorEvent: pt,
              active: Ot,
              collisions: jt,
              delta: An,
              over: Tn
            }, He === Ue.DragEnd && typeof En == "function" && await Promise.resolve(En(Wt)) && (He = Ue.DragCancel);
          }
          M.current = null, dr(() => {
            b({
              type: He
            }), _(Qt.Uninitialized), Re(null), X(null), se(null), Rt.current = null;
            const En = He === Ue.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Wt) {
              const ds = q.current[En];
              ds?.(Wt), p({
                type: En,
                event: Wt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), ad = O((Ke, ht) => (mt, qt) => {
    const yt = mt.nativeEvent, pt = A.get(qt);
    if (
      // Another sensor is already instantiating
      M.current !== null || // No active draggable
      !pt || // Event has already been captured
      yt.dndKit || yt.defaultPrevented
    )
      return;
    const It = {
      active: pt
    };
    Ke(mt, ht.options, It) === !0 && (yt.dndKit = {
      capturedBy: ht.sensor
    }, M.current = qt, Qa(mt, ht));
  }, [A, Qa]), Ha = Kf(u, ad);
  sh(u), Tt(() => {
    Y && k === Qt.Initializing && _(Qt.Initialized);
  }, [Y, k]), oe(
    () => {
      const {
        onDragMove: Ke
      } = q.current, {
        active: ht,
        activatorEvent: mt,
        collisions: qt,
        over: yt
      } = De.current;
      if (!ht || !mt)
        return;
      const pt = {
        active: ht,
        activatorEvent: mt,
        collisions: qt,
        delta: {
          x: ke.x,
          y: ke.y
        },
        over: yt
      };
      dr(() => {
        Ke?.(pt), p({
          type: "onDragMove",
          event: pt
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ke.x, ke.y]
  ), oe(
    () => {
      const {
        active: Ke,
        activatorEvent: ht,
        collisions: mt,
        droppableContainers: qt,
        scrollAdjustedTranslate: yt
      } = De.current;
      if (!Ke || M.current == null || !ht || !yt)
        return;
      const {
        onDragOver: pt
      } = q.current, It = qt.get(Vt), fn = It && It.rect.current ? {
        id: It.id,
        rect: It.rect.current,
        data: It.data,
        disabled: It.disabled
      } : null, He = {
        active: Ke,
        activatorEvent: ht,
        collisions: mt,
        delta: {
          x: yt.x,
          y: yt.y
        },
        over: fn
      };
      dr(() => {
        Re(fn), pt?.(He), p({
          type: "onDragOver",
          event: He
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Vt]
  ), Tt(() => {
    De.current = {
      activatorEvent: te,
      active: N,
      activeNode: ie,
      collisionRect: Qe,
      collisions: Bt,
      droppableRects: I,
      draggableNodes: A,
      draggingNode: Xe,
      draggingNodeRect: it,
      droppableContainers: P,
      over: ge,
      scrollableAncestors: E,
      scrollAdjustedTranslate: ke
    }, R.current = {
      initial: it,
      translated: Qe
    };
  }, [N, ie, Bt, Qe, A, Xe, it, I, P, ge, E, ke]), Wf({
    ...be,
    delta: L,
    draggingRect: Qe,
    pointerCoordinates: B,
    scrollableAncestors: E,
    scrollableAncestorRects: U
  });
  const id = z(() => ({
    active: N,
    activeNode: ie,
    activeNodeRect: Y,
    activatorEvent: te,
    collisions: Bt,
    containerNodeRect: de,
    dragOverlay: Le,
    draggableNodes: A,
    droppableContainers: P,
    droppableRects: I,
    over: ge,
    measureDroppableContainers: ce,
    scrollableAncestors: E,
    scrollableAncestorRects: U,
    measuringConfiguration: V,
    measuringScheduled: xe,
    windowRect: F
  }), [N, ie, Y, te, Bt, de, Le, A, P, I, ge, ce, E, U, V, xe, F]), od = z(() => ({
    activatorEvent: te,
    activators: Ha,
    active: N,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: fe
    },
    dispatch: b,
    draggableNodes: A,
    over: ge,
    measureDroppableContainers: ce
  }), [te, Ha, N, Y, b, fe, A, ge, ce]);
  return ue.createElement(tl.Provider, {
    value: v
  }, ue.createElement(ir.Provider, {
    value: od
  }, ue.createElement(gl.Provider, {
    value: id
  }, ue.createElement(Jr.Provider, {
    value: Ye
  }, d)), ue.createElement(hh, {
    disabled: o?.restoreFocus === !1
  })), ue.createElement(gf, {
    ...o,
    hiddenTextDescribedById: fe
  }));
  function ld() {
    const Ke = H?.autoScrollEnabled === !1, ht = typeof l == "object" ? l.enabled === !1 : l === !1, mt = w && !Ke && !ht;
    return typeof l == "object" ? {
      ...l,
      enabled: mt
    } : {
      enabled: mt
    };
  }
}), vh = /* @__PURE__ */ Et(null), di = "button", bh = "Draggable";
function yh(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: s
  } = e;
  const a = ar(bh), {
    activators: i,
    activatorEvent: o,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: h
  } = nt(ir), {
    role: m = di,
    roleDescription: x = "draggable",
    tabIndex: S = 0
  } = s ?? {}, g = l?.id === t, b = nt(g ? Jr : vh), [p, v] = _r(), [k, _] = _r(), w = ah(i, t), C = Hn(n);
  Tt(
    () => (f.set(t, {
      id: t,
      key: a,
      node: p,
      activatorNode: k,
      data: C
    }), () => {
      const L = f.get(t);
      L && L.key === a && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const A = z(() => ({
    role: m,
    tabIndex: S,
    "aria-disabled": r,
    "aria-pressed": g && m === di ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": u.draggable
  }), [r, m, S, g, x, u.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: d,
    attributes: A,
    isDragging: g,
    listeners: r ? void 0 : w,
    node: p,
    over: h,
    setNodeRef: v,
    setActivatorNodeRef: _,
    transform: b
  };
}
function bl() {
  return nt(gl);
}
const xh = "Droppable", wh = {
  timeout: 25
};
function Sh(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: s
  } = e;
  const a = ar(xh), {
    active: i,
    dispatch: o,
    over: l,
    measureDroppableContainers: d
  } = nt(ir), u = Q({
    disabled: n
  }), f = Q(!1), h = Q(null), m = Q(null), {
    disabled: x,
    updateMeasurementsFor: S,
    timeout: g
  } = {
    ...wh,
    ...s
  }, b = Hn(S ?? r), p = O(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        d(Array.isArray(b.current) ? b.current : [b.current]), m.current = null;
      }, g);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), v = Yr({
    callback: p,
    disabled: x || !i
  }), k = O((A, L) => {
    v && (L && (v.unobserve(L), f.current = !1), A && v.observe(A));
  }, [v]), [_, w] = _r(k), C = Hn(t);
  return oe(() => {
    !v || !_.current || (v.disconnect(), f.current = !1, v.observe(_.current));
  }, [_, v]), oe(
    () => (o({
      type: Ue.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: n,
        node: _,
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
  ), oe(() => {
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
    node: _,
    over: l,
    setNodeRef: w
  };
}
function kh(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, s] = ee(null), [a, i] = ee(null), o = Cr(n);
  return !n && !r && o && s(o), Tt(() => {
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
  }, [t, r, a]), ue.createElement(ue.Fragment, null, n, r ? vu(r, {
    ref: i
  }) : null);
}
const _h = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Ch(e) {
  let {
    children: t
  } = e;
  return ue.createElement(ir.Provider, {
    value: pl
  }, ue.createElement(Jr.Provider, {
    value: _h
  }, t));
}
const Nh = {
  position: "fixed",
  touchAction: "none"
}, Dh = (e) => Kr(e) ? "transform 250ms ease" : void 0, Fh = /* @__PURE__ */ st((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: s,
    children: a,
    className: i,
    rect: o,
    style: l,
    transform: d,
    transition: u = Dh
  } = e;
  if (!o)
    return null;
  const f = s ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Nh,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Yt.Transform.toString(f),
    transformOrigin: s && r ? yf(r, o) : void 0,
    transition: typeof u == "function" ? u(r) : u,
    ...l
  };
  return ue.createElement(n, {
    className: i,
    style: h,
    ref: t
  }, a);
}), Th = (e) => (t) => {
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
}, Ah = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Yt.Transform.toString(t)
  }, {
    transform: Yt.Transform.toString(n)
  }];
}, Eh = {
  duration: 250,
  easing: "ease",
  keyframes: Ah,
  sideEffects: /* @__PURE__ */ Th({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Rh(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: s
  } = e;
  return Gr((a, i) => {
    if (t === null)
      return;
    const o = n.get(a);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const d = ml(i);
    if (!d)
      return;
    const {
      transform: u
    } = at(i).getComputedStyle(i), f = sl(u);
    if (!f)
      return;
    const h = typeof t == "function" ? t : Ih(t);
    return ul(l, s.draggable.measure), h({
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
function Ih(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: s
  } = {
    ...Eh,
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
    }), [x] = m, S = m[m.length - 1];
    if (JSON.stringify(x) === JSON.stringify(S))
      return;
    const g = r?.({
      active: i,
      dragOverlay: o,
      ...d
    }), b = o.node.animate(m, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((p) => {
      b.onfinish = () => {
        g?.(), p();
      };
    });
  };
}
let ui = 0;
function Oh(e) {
  return z(() => {
    if (e != null)
      return ui++, ui;
  }, [e]);
}
const Lh = /* @__PURE__ */ ue.memo((e) => {
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
    draggableNodes: x,
    droppableContainers: S,
    dragOverlay: g,
    over: b,
    measuringConfiguration: p,
    scrollableAncestors: v,
    scrollableAncestorRects: k,
    windowRect: _
  } = bl(), w = nt(Jr), C = Oh(f?.id), A = vl(i, {
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: g.rect,
    over: b,
    overlayNodeRect: g.rect,
    scrollableAncestors: v,
    scrollableAncestorRects: k,
    transform: w,
    windowRect: _
  }), L = Da(h), P = Rh({
    config: r,
    draggableNodes: x,
    droppableContainers: S,
    measuringConfiguration: p
  }), T = L ? g.setRef : void 0;
  return ue.createElement(Ch, null, ue.createElement(kh, {
    animation: P
  }, f && C ? ue.createElement(Fh, {
    key: C,
    id: f.id,
    ref: T,
    as: o,
    activatorEvent: u,
    adjustScale: t,
    className: l,
    transition: a,
    rect: L,
    style: {
      zIndex: d,
      ...s
    },
    transform: A
  }, n) : null));
});
function Fa(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Mh(e, t) {
  return e.reduce((n, r, s) => {
    const a = t.get(r);
    return a && (n[s] = a), n;
  }, Array(e.length));
}
function ur(e) {
  return e !== null && e >= 0;
}
function Ph(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Bh(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const yl = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: s
  } = e;
  const a = Fa(t, r, n), i = t[s], o = a[s];
  return !o || !i ? null : {
    x: o.left - i.left,
    y: o.top - i.top,
    scaleX: o.width / i.width,
    scaleY: o.height / i.height
  };
}, xl = "Sortable", wl = /* @__PURE__ */ ue.createContext({
  activeIndex: -1,
  containerId: xl,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: yl,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Vh(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: s = yl,
    disabled: a = !1
  } = e;
  const {
    active: i,
    dragOverlay: o,
    droppableRects: l,
    over: d,
    measureDroppableContainers: u
  } = bl(), f = ar(xl, n), h = o.rect !== null, m = z(() => r.map((w) => typeof w == "object" && "id" in w ? w.id : w), [r]), x = i != null, S = i ? m.indexOf(i.id) : -1, g = d ? m.indexOf(d.id) : -1, b = Q(m), p = !Ph(m, b.current), v = g !== -1 && S === -1 || p, k = Bh(a);
  Tt(() => {
    p && x && u(m);
  }, [p, m, x, u]), oe(() => {
    b.current = m;
  }, [m]);
  const _ = z(
    () => ({
      activeIndex: S,
      containerId: f,
      disabled: k,
      disableTransforms: v,
      items: m,
      overIndex: g,
      useDragOverlay: h,
      sortedRects: Mh(m, l),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S, f, k.draggable, k.droppable, v, m, g, l, h, s]
  );
  return ue.createElement(wl.Provider, {
    value: _
  }, t);
}
const jh = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: s
  } = e;
  return Fa(n, r, s).indexOf(t);
}, $h = (e) => {
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
}, zh = {
  duration: 200,
  easing: "ease"
}, Sl = "transform", Zh = /* @__PURE__ */ Yt.Transition.toString({
  property: Sl,
  duration: 0,
  easing: "linear"
}), qh = {
  roleDescription: "sortable"
};
function Uh(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: s
  } = e;
  const [a, i] = ee(null), o = Q(n);
  return Tt(() => {
    if (!t && n !== o.current && r.current) {
      const l = s.current;
      if (l) {
        const d = Dn(r.current, {
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
  }, [t, n, r, s]), oe(() => {
    a && i(null);
  }, [a]), a;
}
function Wh(e) {
  let {
    animateLayoutChanges: t = $h,
    attributes: n,
    disabled: r,
    data: s,
    getNewIndex: a = jh,
    id: i,
    strategy: o,
    resizeObserverConfig: l,
    transition: d = zh
  } = e;
  const {
    items: u,
    containerId: f,
    activeIndex: h,
    disabled: m,
    disableTransforms: x,
    sortedRects: S,
    overIndex: g,
    useDragOverlay: b,
    strategy: p
  } = nt(wl), v = Qh(r, m), k = u.indexOf(i), _ = z(() => ({
    sortable: {
      containerId: f,
      index: k,
      items: u
    },
    ...s
  }), [f, s, k, u]), w = z(() => u.slice(u.indexOf(i)), [u, i]), {
    rect: C,
    node: A,
    isOver: L,
    setNodeRef: P
  } = Sh({
    id: i,
    data: _,
    disabled: v.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: w,
      ...l
    }
  }), {
    active: T,
    activatorEvent: R,
    activeNodeRect: N,
    attributes: M,
    setNodeRef: H,
    listeners: X,
    isDragging: te,
    over: se,
    setActivatorNodeRef: q,
    transform: fe
  } = yh({
    id: i,
    data: _,
    attributes: {
      ...qh,
      ...n
    },
    disabled: v.draggable
  }), K = nf(P, H), V = !!T, I = V && !x && ur(h) && ur(g), ce = !b && te, xe = ce && I ? fe : null, pe = I ? xe ?? (o ?? p)({
    rects: S,
    activeNodeRect: N,
    activeIndex: h,
    overIndex: g,
    index: k
  }) : null, be = ur(h) && ur(g) ? a({
    id: i,
    items: u,
    activeIndex: h,
    overIndex: g
  }) : k, le = T?.id, Y = Q({
    activeId: le,
    items: u,
    newIndex: be,
    containerId: f
  }), de = u !== Y.current.items, De = t({
    active: T,
    containerId: f,
    isDragging: te,
    isSorting: V,
    id: i,
    index: k,
    items: u,
    newIndex: Y.current.newIndex,
    previousItems: Y.current.items,
    previousContainerId: Y.current.containerId,
    transition: d,
    wasDragging: Y.current.activeId != null
  }), Te = Uh({
    disabled: !De,
    index: k,
    node: A,
    rect: C
  });
  return oe(() => {
    V && Y.current.newIndex !== be && (Y.current.newIndex = be), f !== Y.current.containerId && (Y.current.containerId = f), u !== Y.current.items && (Y.current.items = u);
  }, [V, be, f, u]), oe(() => {
    if (le === Y.current.activeId)
      return;
    if (le != null && Y.current.activeId == null) {
      Y.current.activeId = le;
      return;
    }
    const Xe = setTimeout(() => {
      Y.current.activeId = le;
    }, 50);
    return () => clearTimeout(Xe);
  }, [le]), {
    active: T,
    activeIndex: h,
    attributes: M,
    data: _,
    rect: C,
    index: k,
    newIndex: be,
    items: u,
    isOver: L,
    isSorting: V,
    isDragging: te,
    listeners: X,
    node: A,
    overIndex: g,
    over: se,
    setNodeRef: K,
    setActivatorNodeRef: q,
    setDroppableNodeRef: P,
    setDraggableNodeRef: H,
    transform: Te ?? pe,
    transition: Le()
  };
  function Le() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Te || // Or to prevent items jumping to back to their "new" position when items change
      de && Y.current.newIndex === k
    )
      return Zh;
    if (!(ce && !Kr(R) || !d) && (V || De))
      return Yt.Transition.toString({
        ...d,
        property: Sl
      });
  }
}
function Qh(e, t) {
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
function Tr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Hh = [ye.Down, ye.Right, ye.Up, ye.Left], Gh = (e, t) => {
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
  if (Hh.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    a.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const h = s.get(f.id);
      if (h)
        switch (e.code) {
          case ye.Down:
            r.top < h.top && l.push(f);
            break;
          case ye.Up:
            r.top > h.top && l.push(f);
            break;
          case ye.Left:
            r.left > h.left && l.push(f);
            break;
          case ye.Right:
            r.left < h.left && l.push(f);
            break;
        }
    });
    const d = Sf({
      collisionRect: r,
      droppableRects: s,
      droppableContainers: l
    });
    let u = nl(d, "id");
    if (u === i?.id && d.length > 1 && (u = d[1].id), u != null) {
      const f = a.get(n.id), h = a.get(u), m = h ? s.get(h.id) : null, x = h?.node.current;
      if (x && m && f && h) {
        const g = Xr(x).some((w, C) => o[C] !== w), b = kl(f, h), p = Kh(f, h), v = g || !b ? {
          x: 0,
          y: 0
        } : {
          x: p ? r.width - m.width : 0,
          y: p ? r.height - m.height : 0
        }, k = {
          x: m.left,
          y: m.top
        };
        return v.x && v.y ? k : Gn(k, v);
      }
    }
  }
};
function kl(e, t) {
  return !Tr(e) || !Tr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Kh(e, t) {
  return !Tr(e) || !Tr(t) || !kl(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const fi = ({ id: e, children: t }) => {
  const { attributes: n, listeners: r, setNodeRef: s, transform: a, transition: i } = Wh({ id: e }), o = {
    transform: Yt.Translate.toString(a),
    transition: i,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ c("div", { ref: s, style: o, ...n, ...r, children: t });
}, Ta = ({
  blocks: e,
  sortable: t = !1,
  onSort: n = () => {
  },
  main: r = !1
}) => {
  const [s, a] = ee([]);
  fd(() => {
    a(
      e.map((f, h) => ({
        id: f.id ?? h.toString(),
        render: f.render
      }))
    );
  }, [e]);
  const [i, o] = ee(null), l = vf(
    Ja(Na),
    Ja(_a, {
      coordinateGetter: Gh
    })
  ), d = (f) => {
    o(f.active.id);
  }, u = (f) => {
    const { active: h, over: m } = f;
    o(null), m && h.id !== m.id && a((x) => {
      const S = x.findIndex((b) => b.id === h.id), g = x.findIndex((b) => b.id === m.id);
      return Fa(x, S, g);
    });
  };
  return /* @__PURE__ */ c("div", { className: W("flex flex-wrap items-stretch gap-4", r && "flex-1"), children: /* @__PURE__ */ D(
    gh,
    {
      sensors: l,
      onDragStart: d,
      onDragEnd: u,
      children: [
        /* @__PURE__ */ c(Vh, { items: s, children: s.map((f) => /* @__PURE__ */ c(fi, { id: f.id, children: f.render }, f.id)) }),
        /* @__PURE__ */ c(Lh, { children: i ? /* @__PURE__ */ c(fi, { id: i, children: s.find((f) => f.id === i)?.render }) : null })
      ]
    }
  ) });
};
Ta.displayName = "GroupMasonry";
Ta.__isPageLayoutGroup = !0;
const Xh = st(function({ children: t, aside: n, header: r, variant: s = "main-aside" }, a) {
  return process.env.NODE_ENV === "development" && Yo("Page", t, ["block", "group"]), /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ D(
    "div",
    {
      className: W(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ D(
          "main",
          {
            className: W(
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
                  className: W(
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
            className: W(
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
}), wy = {
  Page: Ie(vt("Page", Xh)),
  Block: Ie(vt("Block", Qr)),
  BlockContent: Ie(
    vt("BlockContent", Ju)
  ),
  Group: Ie(vt("Group", xa)),
  GroupGrid: Ie(
    vt("GroupGrid", Wr)
  ),
  GroupMasonry: Ie(
    vt("GroupMasonry", Ta)
  )
}, Sy = Lu, ky = Pu, _y = Ie(
  er(
    {
      name: "HomeLayout",
      type: "layout"
    },
    Iu
  )
);
var ps, hi;
function Yh() {
  if (hi) return ps;
  hi = 1;
  var e = wu();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return ps = t, ps;
}
const Cy = [
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
], Jh = (e) => typeof e == "boolean" || !e ? {
  show: !!e,
  invertStatus: !1
} : {
  show: e.show ?? !0,
  invertStatus: e.invertStatus ?? !1
}, _l = ({ label: e, ...t }) => {
  const n = hd(), r = n(t.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), s = Jh(t.trend), a = n(t.comparison), i = md(
    r.numericValue,
    r.formatterOptions
  ), o = Ka(a.numericValue), l = Ka(r.numericValue), d = z(() => {
    if (!(!o || !s.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, s.show]);
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    e && /* @__PURE__ */ c("div", { children: e }),
    /* @__PURE__ */ D("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ c("span", { className: "font-bold text-2xl", children: i }),
      o !== void 0 && /* @__PURE__ */ c(
        pd,
        {
          percentage: d,
          amount: a,
          invertStatus: s.invertStatus,
          hint: t.comparisonHint
        }
      )
    ] })
  ] });
}, em = () => /* @__PURE__ */ D("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ c(Ve, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ D("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ c(Ve, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ c(Ve, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
_l.displayName = "F0BigNumber";
const tm = go(_l, em), Ny = Ie(tm), Dy = gd.filter(
  (e) => e !== "ai"
), Fy = vo, Ty = ["default", "outline", "neutral"], Ay = vo, Ey = ["split", "dropdown"], Ry = vd, Cl = {
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
}, Nl = {
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
}, nm = {}, rm = {
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
}, sm = {
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
}, am = {
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
}, im = {
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
}, om = {
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
}, lm = {
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
}, Dl = {
  width: rm,
  height: sm,
  minWidth: am,
  minHeight: im,
  maxWidth: om,
  maxHeight: lm
}, Fl = {
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
}, Tl = {
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
}, Al = {
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
}, cm = {}, El = {
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
}, Rl = {
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
}, dm = {}, um = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Il = {
  overflow: um,
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
}, fm = {}, Ol = {
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
}, hm = {}, mm = {
  ...Fl,
  ...Ol,
  ...Rl,
  ...Al,
  ...El,
  ...Dl,
  ...Cl,
  ...Nl,
  ...Il,
  ...Tl
};
function pm(e, t) {
  return t.split(" ").map((n) => `${e}:${n}`).join(" ");
}
function gm(e, t) {
  const n = [];
  for (const [r, s] of Object.entries(t)) {
    if (s == null) continue;
    const a = mm[r];
    if (!a) continue;
    const i = a[String(s)];
    i && n.push(pm(e, i));
  }
  return n.join(" ");
}
const vm = tn({
  base: "",
  variants: {
    ...Fl,
    ...Ol,
    ...Rl,
    ...Al,
    ...El,
    ...Dl,
    ...Cl,
    ...Nl,
    ...Il,
    ...Tl
  },
  defaultVariants: {
    ...hm,
    ...dm,
    ...cm,
    ...nm,
    ...fm
  }
}), bm = ["sm", "md", "lg", "xl"], Ll = st(
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
    marginLeft: x,
    marginRight: S,
    // Gap
    gap: g,
    // Grid
    columns: b,
    rows: p,
    colSpan: v,
    colStart: k,
    rowSpan: _,
    // Dimensions
    width: w,
    height: C,
    minWidth: A,
    minHeight: L,
    maxWidth: P,
    maxHeight: T,
    // Background
    background: R,
    // Border
    borderColor: N,
    border: M,
    borderTop: H,
    borderBottom: X,
    borderLeft: te,
    borderRight: se,
    borderRadius: q,
    borderRadiusTopLeft: fe,
    borderRadiusTopRight: K,
    borderRadiusBottomLeft: V,
    borderRadiusBottomRight: I,
    borderStyle: ce,
    // Overflow
    overflow: xe,
    overflowX: ie,
    overflowY: pe,
    // Divider
    divider: be,
    dividerColor: le,
    // Flex
    alignItems: Y,
    justifyContent: de,
    flexDirection: De,
    flexWrap: Te,
    grow: Le,
    shrink: Xe,
    // Responsive breakpoint overrides
    sm: it,
    md: ft,
    lg: y,
    xl: F,
    ...E
  }, U) => {
    const $ = H && H !== "none" || X && X !== "none" || te && te !== "none" || se && se !== "none", B = M && M !== "none" || $, ne = { sm: it, md: ft, lg: y, xl: F }, he = bm.map((Ee) => {
      const ke = ne[Ee];
      return ke ? gm(Ee, ke) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      "div",
      {
        ref: U,
        className: W(
          $ && "border-0",
          vm({
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
            marginLeft: x,
            marginRight: S,
            gap: g,
            columns: b,
            rows: p,
            colSpan: v,
            colStart: k,
            rowSpan: _,
            width: w,
            height: C,
            minWidth: A,
            minHeight: L,
            maxWidth: P,
            maxHeight: T,
            background: R,
            borderColor: N,
            border: M,
            borderTop: H,
            borderBottom: X,
            borderLeft: te,
            borderRight: se,
            borderRadius: q,
            borderRadiusTopLeft: fe,
            borderRadiusTopRight: K,
            borderRadiusBottomLeft: V,
            borderRadiusBottomRight: I,
            borderStyle: ce,
            overflow: xe,
            overflowX: ie,
            overflowY: pe,
            divider: be,
            dividerColor: le,
            alignItems: Y,
            justifyContent: de,
            flexDirection: De,
            flexWrap: Te,
            grow: Le,
            shrink: Xe
          }),
          he,
          B && !N && "border-f1-border",
          be && !le && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...E
      }
    );
  }
);
Ll.displayName = "F0Box";
const ym = er(
  {
    name: "F0Box",
    type: "layout"
  },
  Ll
), Iy = ["sm", "md", "lg"], Oy = ["compact", "expanded"], Bs = ({ count: e, list: t }) => {
  const [n, r] = ee(!1), s = /* @__PURE__ */ c(yr, { label: `+${e}` });
  return t?.length ? /* @__PURE__ */ D(ra, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ c(sa, { asChild: !0, children: /* @__PURE__ */ c("button", { className: Zr("inline-flex flex-shrink-0 items-center"), children: s }) }),
    /* @__PURE__ */ c(
      aa,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ D(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          t.map((a, i) => /* @__PURE__ */ c(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ c(yr, { ...a })
            },
            i
          )),
          /* @__PURE__ */ c(
            yo,
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
Bs.displayName = "ChipCounter";
const Ml = ({
  chips: e,
  max: t = 4,
  remainingCount: n,
  layout: r = "compact"
}) => {
  if (r === "fill")
    return /* @__PURE__ */ c(
      bd,
      {
        items: e,
        renderListItem: (l) => /* @__PURE__ */ c(yr, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: n !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ c(
          Bs,
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
    s.map((l, d) => /* @__PURE__ */ c(yr, { ...l }, d)),
    o && /* @__PURE__ */ c(
      Bs,
      {
        count: i,
        list: n ? void 0 : a
      }
    )
  ] });
};
Ml.displayName = "F0ChipList";
const Ly = Ie(
  vt("F0ChipList", Ml)
), My = yd, xm = ["days", "hours", "minutes", "seconds"], Py = ["sm", "md"], Ar = [...xm], mi = ["hours", "minutes"], zt = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function By(e) {
  const t = Number.isFinite(e) ? e : 0;
  let n = Math.max(0, Math.floor(t));
  const r = Math.floor(n / zt.days);
  n = n % zt.days;
  const s = Math.floor(n / zt.hours);
  n = n % zt.hours;
  const a = Math.floor(n / zt.minutes), i = n % zt.minutes;
  return { days: r, hours: s, minutes: a, seconds: i };
}
function pi(e) {
  return Ar.reduce((t, n) => {
    const r = e[n], s = Number.isFinite(r) ? r : 0, a = Math.max(0, Math.floor(s));
    return t + a * zt[n];
  }, 0);
}
function gs(e, t) {
  const n = Number.isFinite(e) ? e : 0;
  let r = Math.max(0, Math.floor(n));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, a = Ar.filter((i) => t.includes(i));
  for (const i of a)
    s[i] = Math.floor(r / zt[i]), r = r % zt[i];
  return s;
}
function wm(e, t) {
  return t != null && e > t ? t : e < 0 ? 0 : e;
}
const Sm = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s"
}, km = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, _m = 2, Cm = tn({
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
}), Pl = st(
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
    units: u = mi,
    fields: f,
    status: h,
    disabled: m = !1,
    required: x = !1,
    readonly: S = !1,
    size: g = "md"
  }, b) {
    const p = va(), v = Q(/* @__PURE__ */ new Map()), k = Q(!1), _ = z(() => {
      const V = Ar.filter((I) => u.includes(I));
      return V.length > 0 ? V : Ar.filter((I) => mi.includes(I));
    }, [u]), w = _.join("|"), [C, A] = ee(
      () => gs(o, _)
    ), L = Q(o), P = Q(w);
    (o !== L.current || w !== P.current) && (L.current = o, P.current = w, A(gs(o, _)));
    const T = `${p}-${_[0]}`, R = O(
      (V) => {
        const I = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        for (const ce of _)
          I[ce] = V[ce];
        return I;
      },
      [_]
    ), N = O(
      (V) => {
        const I = R(V), ce = pi(I);
        A(I), L.current = ce, l(ce);
      },
      [l, R]
    ), M = O(
      (V, I) => (ce) => {
        const xe = ce.target.value;
        if (xe === "") {
          N({ ...C, [V]: 0 });
          return;
        }
        const ie = xe.replace(/\D/g, "");
        if (ie === "") return;
        const pe = parseInt(ie, 10);
        if (isNaN(pe)) return;
        const be = wm(pe, I);
        N({ ...C, [V]: be });
      },
      [C, N]
    ), H = O(() => {
      const V = R(C), I = pi(V);
      A(gs(I, _)), L.current = I, d?.();
    }, [C, d, R, _]), X = O(
      (V) => {
        V.metaKey || V.ctrlKey || V.altKey || V.key.length > 1 || /^\d$/.test(V.key) || V.preventDefault();
      },
      []
    ), te = O(
      (V) => {
        if (m || V.target instanceof HTMLInputElement) return;
        const I = _[0];
        I && v.current.get(I)?.focus();
      },
      [m, _]
    ), se = O(
      (V) => (I) => {
        I ? v.current.set(V, I) : v.current.delete(V);
      },
      []
    ), q = (a && a.trim().length > 0 ? a : void 0) || s || void 0;
    oe(() => {
      process.env.NODE_ENV !== "production" && !q && !k.current && (k.current = !0, console.warn(
        "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
      ));
    }, [q]);
    const fe = h?.type ?? "default", K = !i && s.length > 0;
    return /* @__PURE__ */ D(
      "div",
      {
        ref: b,
        className: W(
          "flex flex-col gap-2",
          "pointer-events-none",
          m && "cursor-not-allowed"
        ),
        children: [
          K && /* @__PURE__ */ c(
            xd,
            {
              label: s,
              required: x,
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
              className: W(
                "pointer-events-auto",
                Cm({
                  size: g,
                  status: fe,
                  disabled: m,
                  readonly: S
                })
              ),
              onClick: te,
              role: "group",
              "aria-label": q,
              "aria-describedby": n,
              "aria-invalid": r,
              "aria-disabled": m || void 0,
              "data-status": fe,
              "data-disabled": m ? "" : void 0,
              children: _.map((V, I) => {
                const ce = f?.[V]?.max, xe = C[V], ie = f?.[V]?.suffix ?? Sm[V], pe = xe > 0 ? String(xe) : "", be = f?.[V]?.maxVisibleDigits, le = typeof be == "number" && Number.isFinite(be) ? Math.max(1, Math.floor(be)) : _m;
                return /* @__PURE__ */ D($o, { children: [
                  I > 0 && /* @__PURE__ */ c(
                    Me,
                    {
                      icon: wd,
                      size: "xs",
                      color: "default",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c(
                    "input",
                    {
                      ref: se(V),
                      id: `${p}-${V}`,
                      className: W(
                        "border-none bg-transparent p-0 text-inherit outline-none",
                        "font-inherit text-[length:inherit] leading-[inherit]",
                        "placeholder:text-f1-foreground-secondary",
                        m && "pointer-events-none"
                      ),
                      style: {
                        width: `${Math.min(
                          Math.max(pe.length, 1),
                          le
                        )}ch`
                      },
                      "aria-label": f?.[V]?.ariaLabel ?? km[V],
                      "aria-describedby": n,
                      "aria-invalid": r,
                      value: pe,
                      placeholder: "0",
                      onChange: M(V, ce),
                      onBlur: H,
                      onKeyDown: X,
                      inputMode: "numeric",
                      disabled: m,
                      readOnly: S,
                      "aria-readonly": S || void 0
                    }
                  ),
                  /* @__PURE__ */ c("span", { className: "text-f1-foreground-secondary", children: ie })
                ] }, V);
              })
            }
          ),
          /* @__PURE__ */ c(ia, { status: h })
        ]
      }
    );
  }
);
Pl.displayName = "F0DurationInput";
const Nm = Ie(
  er(
    {
      name: "F0DurationInput",
      type: "form"
    },
    Pl
  )
), Dm = 388;
function Bl({
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
  const d = Ne(), u = Object.keys(e)[0] ?? null, [f, h] = ee(u), [m, x] = ee(t);
  oe(() => {
    x(t);
  }, [t]), oe(() => {
    if (!f && e) {
      const p = Object.keys(e);
      if (p.length > 0) {
        const v = p.find((k) => {
          const _ = m[k], w = Xa(e[k].type);
          return _ !== void 0 && !w.isEmpty(_, {
            schema: e[k],
            i18n: d
          });
        });
        h(v ?? p[0]);
      }
    }
  }, [e, f, m, d]);
  const S = (p, v) => {
    const k = {
      ...m,
      [p]: v
    };
    x(k), i || n(k);
  }, g = () => {
    n(m);
  }, b = z(() => r || Object.entries(e).reduce((v, [k, _]) => {
    const w = Xa(_.type);
    return Math.max(v, w?.formHeight || Dm);
  }, 0), [e, r]);
  return !e || Object.keys(e).length === 0 ? null : /* @__PURE__ */ c(Sd, { dataTestId: l, children: /* @__PURE__ */ c(
    "div",
    {
      className: W(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        a
      ),
      style: { maxWidth: s },
      children: /* @__PURE__ */ c(
        kd,
        {
          filters: e,
          tempFilters: m,
          selectedFilterKey: f,
          onFilterSelect: h,
          onFilterChange: S,
          onApply: g,
          height: b,
          showApplyButton: i,
          applyButtonLabel: o
        }
      )
    }
  ) });
}
Bl.displayName = "F0FilterPickerContent";
const Vy = Bl;
var or = (e) => e.type === "checkbox", on = (e) => e instanceof Date, tt = (e) => e == null;
const Vl = (e) => typeof e == "object";
var $e = (e) => !tt(e) && !Array.isArray(e) && Vl(e) && !on(e), jl = (e) => $e(e) && e.target ? or(e.target) ? e.target.checked : e.target.value : e, Fm = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, $l = (e, t) => e.has(Fm(t)), Tm = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return $e(t) && t.hasOwnProperty("isPrototypeOf");
}, Aa = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function lt(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Aa && (e instanceof Blob || r)) && (n || $e(e)))
    if (t = n ? [] : {}, !n && !Tm(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = lt(e[s]));
  else
    return e;
  return t;
}
var es = (e) => Array.isArray(e) ? e.filter(Boolean) : [], je = (e) => e === void 0, G = (e, t, n) => {
  if (!t || !$e(e))
    return n;
  const r = es(t.split(/[,[\].]+?/)).reduce((s, a) => tt(s) ? s : s[a], e);
  return je(r) || r === e ? je(e[t]) ? n : e[t] : r;
}, wt = (e) => typeof e == "boolean", Ea = (e) => /^\w*$/.test(e), zl = (e) => es(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ce = (e, t, n) => {
  let r = -1;
  const s = Ea(t) ? [t] : zl(t), a = s.length, i = a - 1;
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
const Er = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ft = {
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
}, Zl = ue.createContext(null), nn = () => ue.useContext(Zl), Am = (e) => {
  const { children: t, ...n } = e;
  return ue.createElement(Zl.Provider, { value: n }, t);
};
var ql = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(s, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Ft.all && (t._proxyFormState[i] = !r || Ft.all), n && (n[i] = !0), e[i];
      }
    });
  return s;
}, ct = (e) => $e(e) && !Object.keys(e).length, Ul = (e, t, n, r) => {
  n(e);
  const { name: s, ...a } = e;
  return ct(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === (!r || Ft.all));
}, qn = (e) => Array.isArray(e) ? e : [e], Wl = (e, t, n) => !e || !t || e === t || qn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Ra(e) {
  const t = ue.useRef(e);
  t.current = e, ue.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Em(e) {
  const t = nn(), { control: n = t.control, disabled: r, name: s, exact: a } = e || {}, [i, o] = ue.useState(n._formState), l = ue.useRef(!0), d = ue.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = ue.useRef(s);
  return u.current = s, Ra({
    disabled: r,
    next: (f) => l.current && Wl(u.current, f.name, a) && Ul(f, d.current, n._updateFormState) && o({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), ue.useEffect(() => (l.current = !0, d.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), ue.useMemo(() => ql(i, n, d.current, !1), [i, n]);
}
var Mt = (e) => typeof e == "string", Ql = (e, t, n, r, s) => Mt(e) ? (r && t.watch.add(e), G(n, e, s)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), G(n, a))) : (r && (t.watchAll = !0), n);
function Rm(e) {
  const t = nn(), { control: n = t.control, name: r, defaultValue: s, disabled: a, exact: i } = e || {}, o = ue.useRef(r);
  o.current = r, Ra({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Wl(o.current, u.name, i) && d(lt(Ql(o.current, n._names, u.values || n._formValues, !1, s)));
    }
  });
  const [l, d] = ue.useState(n._getWatch(r, s));
  return ue.useEffect(() => n._removeUnmounted()), l;
}
function Im(e) {
  const t = nn(), { name: n, disabled: r, control: s = t.control, shouldUnregister: a } = e, i = $l(s._names.array, n), o = Rm({
    control: s,
    name: n,
    defaultValue: G(s._formValues, n, G(s._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Em({
    control: s,
    name: n,
    exact: !0
  }), d = ue.useRef(s.register(n, {
    ...e.rules,
    value: o,
    ...wt(e.disabled) ? { disabled: e.disabled } : {}
  })), u = ue.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!G(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!G(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!G(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!G(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => G(l.errors, n)
    }
  }), [l, n]), f = ue.useMemo(() => ({
    name: n,
    value: o,
    ...wt(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: (h) => d.current.onChange({
      target: {
        value: jl(h),
        name: n
      },
      type: Er.CHANGE
    }),
    onBlur: () => d.current.onBlur({
      target: {
        value: G(s._formValues, n),
        name: n
      },
      type: Er.BLUR
    }),
    ref: (h) => {
      const m = G(s._fields, n);
      m && h && (m._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (x) => h.setCustomValidity(x),
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
  return ue.useEffect(() => {
    const h = s._options.shouldUnregister || a, m = (x, S) => {
      const g = G(s._fields, x);
      g && g._f && (g._f.mount = S);
    };
    if (m(n, !0), h) {
      const x = lt(G(s._options.defaultValues, n));
      Ce(s._defaultValues, n, x), je(G(s._formValues, n)) && Ce(s._formValues, n, x);
    }
    return !i && s.register(n), () => {
      (i ? h && !s._state.action : h) ? s.unregister(n) : m(n, !1);
    };
  }, [n, s, i, a]), ue.useEffect(() => {
    s._updateDisabledField({
      disabled: r,
      fields: s._fields,
      name: n
    });
  }, [r, n, s]), ue.useMemo(() => ({
    field: f,
    formState: l,
    fieldState: u
  }), [f, l, u]);
}
const Om = (e) => e.render(Im(e));
var Hl = (e, t, n, r, s) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: s || !0
  }
} : {}, gi = (e) => ({
  isOnSubmit: !e || e === Ft.onSubmit,
  isOnBlur: e === Ft.onBlur,
  isOnChange: e === Ft.onChange,
  isOnAll: e === Ft.all,
  isOnTouch: e === Ft.onTouched
}), vi = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Un = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const a = G(e, s);
    if (a) {
      const { _f: i, ...o } = a;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r)
          return !0;
        if (i.ref && t(i.ref, i.name) && !r)
          return !0;
        if (Un(o, t))
          break;
      } else if ($e(o) && Un(o, t))
        break;
    }
  }
};
var Lm = (e, t, n) => {
  const r = qn(G(e, n));
  return Ce(r, "root", t[n]), Ce(e, n, r), e;
}, Ia = (e) => e.type === "file", Lt = (e) => typeof e == "function", Rr = (e) => {
  if (!Aa)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, gr = (e) => Mt(e), Oa = (e) => e.type === "radio", Ir = (e) => e instanceof RegExp;
const bi = {
  value: !1,
  isValid: !1
}, yi = { value: !0, isValid: !0 };
var Gl = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !je(e[0].attributes.value) ? je(e[0].value) || e[0].value === "" ? yi : { value: e[0].value, isValid: !0 } : yi
    ) : bi;
  }
  return bi;
};
const xi = {
  isValid: !1,
  value: null
};
var Kl = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, xi) : xi;
function wi(e, t, n = "validate") {
  if (gr(e) || Array.isArray(e) && e.every(gr) || wt(e) && !e)
    return {
      type: n,
      message: gr(e) ? e : "",
      ref: t
    };
}
var hn = (e) => $e(e) && !Ir(e) ? e : {
  value: e,
  message: ""
}, Si = async (e, t, n, r, s, a) => {
  const { ref: i, refs: o, required: l, maxLength: d, minLength: u, min: f, max: h, pattern: m, validate: x, name: S, valueAsNumber: g, mount: b } = e._f, p = G(n, S);
  if (!b || t.has(S))
    return {};
  const v = o ? o[0] : i, k = (R) => {
    s && v.reportValidity && (v.setCustomValidity(wt(R) ? "" : R || ""), v.reportValidity());
  }, _ = {}, w = Oa(i), C = or(i), A = w || C, L = (g || Ia(i)) && je(i.value) && je(p) || Rr(i) && i.value === "" || p === "" || Array.isArray(p) && !p.length, P = Hl.bind(null, S, r, _), T = (R, N, M, H = $t.maxLength, X = $t.minLength) => {
    const te = R ? N : M;
    _[S] = {
      type: R ? H : X,
      message: te,
      ref: i,
      ...P(R ? H : X, te)
    };
  };
  if (a ? !Array.isArray(p) || !p.length : l && (!A && (L || tt(p)) || wt(p) && !p || C && !Gl(o).isValid || w && !Kl(o).isValid)) {
    const { value: R, message: N } = gr(l) ? { value: !!l, message: l } : hn(l);
    if (R && (_[S] = {
      type: $t.required,
      message: N,
      ref: v,
      ...P($t.required, N)
    }, !r))
      return k(N), _;
  }
  if (!L && (!tt(f) || !tt(h))) {
    let R, N;
    const M = hn(h), H = hn(f);
    if (!tt(p) && !isNaN(p)) {
      const X = i.valueAsNumber || p && +p;
      tt(M.value) || (R = X > M.value), tt(H.value) || (N = X < H.value);
    } else {
      const X = i.valueAsDate || new Date(p), te = (fe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + fe), se = i.type == "time", q = i.type == "week";
      Mt(M.value) && p && (R = se ? te(p) > te(M.value) : q ? p > M.value : X > new Date(M.value)), Mt(H.value) && p && (N = se ? te(p) < te(H.value) : q ? p < H.value : X < new Date(H.value));
    }
    if ((R || N) && (T(!!R, M.message, H.message, $t.max, $t.min), !r))
      return k(_[S].message), _;
  }
  if ((d || u) && !L && (Mt(p) || a && Array.isArray(p))) {
    const R = hn(d), N = hn(u), M = !tt(R.value) && p.length > +R.value, H = !tt(N.value) && p.length < +N.value;
    if ((M || H) && (T(M, R.message, N.message), !r))
      return k(_[S].message), _;
  }
  if (m && !L && Mt(p)) {
    const { value: R, message: N } = hn(m);
    if (Ir(R) && !p.match(R) && (_[S] = {
      type: $t.pattern,
      message: N,
      ref: i,
      ...P($t.pattern, N)
    }, !r))
      return k(N), _;
  }
  if (x) {
    if (Lt(x)) {
      const R = await x(p, n), N = wi(R, v);
      if (N && (_[S] = {
        ...N,
        ...P($t.validate, N.message)
      }, !r))
        return k(N.message), _;
    } else if ($e(x)) {
      let R = {};
      for (const N in x) {
        if (!ct(R) && !r)
          break;
        const M = wi(await x[N](p, n), v, N);
        M && (R = {
          ...M,
          ...P(N, M.message)
        }, k(M.message), r && (_[S] = R));
      }
      if (!ct(R) && (_[S] = {
        ref: v,
        ...R
      }, !r))
        return _;
    }
  }
  return k(!0), _;
};
function Mm(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = je(e) ? r++ : e[t[r++]];
  return e;
}
function Pm(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !je(e[t]))
      return !1;
  return !0;
}
function qe(e, t) {
  const n = Array.isArray(t) ? t : Ea(t) ? [t] : zl(t), r = n.length === 1 ? e : Mm(e, n), s = n.length - 1, a = n[s];
  return r && delete r[a], s !== 0 && ($e(r) && ct(r) || Array.isArray(r) && Pm(r)) && qe(e, n.slice(0, -1)), e;
}
var vs = () => {
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
}, Vs = (e) => tt(e) || !Vl(e);
function Gt(e, t) {
  if (Vs(e) || Vs(t))
    return e === t;
  if (on(e) && on(t))
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
      if (on(a) && on(i) || $e(a) && $e(i) || Array.isArray(a) && Array.isArray(i) ? !Gt(a, i) : a !== i)
        return !1;
    }
  }
  return !0;
}
var Xl = (e) => e.type === "select-multiple", Bm = (e) => Oa(e) || or(e), bs = (e) => Rr(e) && e.isConnected, Yl = (e) => {
  for (const t in e)
    if (Lt(e[t]))
      return !0;
  return !1;
};
function Or(e, t = {}) {
  const n = Array.isArray(e);
  if ($e(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || $e(e[r]) && !Yl(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Or(e[r], t[r])) : tt(e[r]) || (t[r] = !0);
  return t;
}
function Jl(e, t, n) {
  const r = Array.isArray(e);
  if ($e(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || $e(e[s]) && !Yl(e[s]) ? je(t) || Vs(n[s]) ? n[s] = Array.isArray(e[s]) ? Or(e[s], []) : { ...Or(e[s]) } : Jl(e[s], tt(t) ? {} : t[s], n[s]) : n[s] = !Gt(e[s], t[s]);
  return n;
}
var In = (e, t) => Jl(e, t, Or(t)), ec = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => je(e) ? e : t ? e === "" ? NaN : e && +e : n && Mt(e) ? new Date(e) : r ? r(e) : e;
function ys(e) {
  const t = e.ref;
  return Ia(t) ? t.files : Oa(t) ? Kl(e.refs).value : Xl(t) ? [...t.selectedOptions].map(({ value: n }) => n) : or(t) ? Gl(e.refs).value : ec(je(t.value) ? e.ref.value : t.value, e);
}
var Vm = (e, t, n, r) => {
  const s = {};
  for (const a of e) {
    const i = G(t, a);
    i && Ce(s, a, i._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: r
  };
}, On = (e) => je(e) ? e : Ir(e) ? e.source : $e(e) ? Ir(e.value) ? e.value.source : e.value : e;
const ki = "AsyncFunction";
var jm = (e) => !!e && !!e.validate && !!(Lt(e.validate) && e.validate.constructor.name === ki || $e(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === ki)), $m = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function _i(e, t, n) {
  const r = G(e, n);
  if (r || Ea(n))
    return {
      error: r,
      name: n
    };
  const s = n.split(".");
  for (; s.length; ) {
    const a = s.join("."), i = G(t, a), o = G(e, a);
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
var zm = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0, Zm = (e, t) => !es(G(e, t)).length && qe(e, t);
const qm = {
  mode: Ft.onSubmit,
  reValidateMode: Ft.onChange,
  shouldFocusError: !0
};
function Um(e = {}) {
  let t = {
    ...qm,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Lt(t.defaultValues),
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
    values: vs(),
    array: vs(),
    state: vs()
  }, h = gi(t.mode), m = gi(t.reValidateMode), x = t.criteriaMode === Ft.all, S = (y) => (F) => {
    clearTimeout(d), d = setTimeout(y, F);
  }, g = async (y) => {
    if (!t.disabled && (u.isValid || y)) {
      const F = t.resolver ? ct((await A()).errors) : await P(r, !0);
      F !== n.isValid && f.state.next({
        isValid: F
      });
    }
  }, b = (y, F) => {
    !t.disabled && (u.isValidating || u.validatingFields) && ((y || Array.from(o.mount)).forEach((E) => {
      E && (F ? Ce(n.validatingFields, E, F) : qe(n.validatingFields, E));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !ct(n.validatingFields)
    }));
  }, p = (y, F = [], E, U, $ = !0, B = !0) => {
    if (U && E && !t.disabled) {
      if (i.action = !0, B && Array.isArray(G(r, y))) {
        const ne = E(G(r, y), U.argA, U.argB);
        $ && Ce(r, y, ne);
      }
      if (B && Array.isArray(G(n.errors, y))) {
        const ne = E(G(n.errors, y), U.argA, U.argB);
        $ && Ce(n.errors, y, ne), Zm(n.errors, y);
      }
      if (u.touchedFields && B && Array.isArray(G(n.touchedFields, y))) {
        const ne = E(G(n.touchedFields, y), U.argA, U.argB);
        $ && Ce(n.touchedFields, y, ne);
      }
      u.dirtyFields && (n.dirtyFields = In(s, a)), f.state.next({
        name: y,
        isDirty: R(y, F),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ce(a, y, F);
  }, v = (y, F) => {
    Ce(n.errors, y, F), f.state.next({
      errors: n.errors
    });
  }, k = (y) => {
    n.errors = y, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, _ = (y, F, E, U) => {
    const $ = G(r, y);
    if ($) {
      const B = G(a, y, je(E) ? G(s, y) : E);
      je(B) || U && U.defaultChecked || F ? Ce(a, y, F ? B : ys($._f)) : H(y, B), i.mount && g();
    }
  }, w = (y, F, E, U, $) => {
    let B = !1, ne = !1;
    const he = {
      name: y
    };
    if (!t.disabled) {
      const Ee = !!(G(r, y) && G(r, y)._f && G(r, y)._f.disabled);
      if (!E || U) {
        u.isDirty && (ne = n.isDirty, n.isDirty = he.isDirty = R(), B = ne !== he.isDirty);
        const ke = Ee || Gt(G(s, y), F);
        ne = !!(!Ee && G(n.dirtyFields, y)), ke || Ee ? qe(n.dirtyFields, y) : Ce(n.dirtyFields, y, !0), he.dirtyFields = n.dirtyFields, B = B || u.dirtyFields && ne !== !ke;
      }
      if (E) {
        const ke = G(n.touchedFields, y);
        ke || (Ce(n.touchedFields, y, E), he.touchedFields = n.touchedFields, B = B || u.touchedFields && ke !== E);
      }
      B && $ && f.state.next(he);
    }
    return B ? he : {};
  }, C = (y, F, E, U) => {
    const $ = G(n.errors, y), B = u.isValid && wt(F) && n.isValid !== F;
    if (t.delayError && E ? (l = S(() => v(y, E)), l(t.delayError)) : (clearTimeout(d), l = null, E ? Ce(n.errors, y, E) : qe(n.errors, y)), (E ? !Gt($, E) : $) || !ct(U) || B) {
      const ne = {
        ...U,
        ...B && wt(F) ? { isValid: F } : {},
        errors: n.errors,
        name: y
      };
      n = {
        ...n,
        ...ne
      }, f.state.next(ne);
    }
  }, A = async (y) => {
    b(y, !0);
    const F = await t.resolver(a, t.context, Vm(y || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(y), F;
  }, L = async (y) => {
    const { errors: F } = await A(y);
    if (y)
      for (const E of y) {
        const U = G(F, E);
        U ? Ce(n.errors, E, U) : qe(n.errors, E);
      }
    else
      n.errors = F;
    return F;
  }, P = async (y, F, E = {
    valid: !0
  }) => {
    for (const U in y) {
      const $ = y[U];
      if ($) {
        const { _f: B, ...ne } = $;
        if (B) {
          const he = o.array.has(B.name), Ee = $._f && jm($._f);
          Ee && u.validatingFields && b([U], !0);
          const ke = await Si($, o.disabled, a, x, t.shouldUseNativeValidation && !F, he);
          if (Ee && u.validatingFields && b([U]), ke[B.name] && (E.valid = !1, F))
            break;
          !F && (G(ke, B.name) ? he ? Lm(n.errors, ke, B.name) : Ce(n.errors, B.name, ke[B.name]) : qe(n.errors, B.name));
        }
        !ct(ne) && await P(ne, F, E);
      }
    }
    return E.valid;
  }, T = () => {
    for (const y of o.unMount) {
      const F = G(r, y);
      F && (F._f.refs ? F._f.refs.every((E) => !bs(E)) : !bs(F._f.ref)) && ie(y);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, R = (y, F) => !t.disabled && (y && F && Ce(a, y, F), !Gt(K(), s)), N = (y, F, E) => Ql(y, o, {
    ...i.mount ? a : je(F) ? s : Mt(y) ? { [y]: F } : F
  }, E, F), M = (y) => es(G(i.mount ? a : s, y, t.shouldUnregister ? G(s, y, []) : [])), H = (y, F, E = {}) => {
    const U = G(r, y);
    let $ = F;
    if (U) {
      const B = U._f;
      B && (!B.disabled && Ce(a, y, ec(F, B)), $ = Rr(B.ref) && tt(F) ? "" : F, Xl(B.ref) ? [...B.ref.options].forEach((ne) => ne.selected = $.includes(ne.value)) : B.refs ? or(B.ref) ? B.refs.length > 1 ? B.refs.forEach((ne) => (!ne.defaultChecked || !ne.disabled) && (ne.checked = Array.isArray($) ? !!$.find((he) => he === ne.value) : $ === ne.value)) : B.refs[0] && (B.refs[0].checked = !!$) : B.refs.forEach((ne) => ne.checked = ne.value === $) : Ia(B.ref) ? B.ref.value = "" : (B.ref.value = $, B.ref.type || f.values.next({
        name: y,
        values: { ...a }
      })));
    }
    (E.shouldDirty || E.shouldTouch) && w(y, $, E.shouldTouch, E.shouldDirty, !0), E.shouldValidate && fe(y);
  }, X = (y, F, E) => {
    for (const U in F) {
      const $ = F[U], B = `${y}.${U}`, ne = G(r, B);
      (o.array.has(y) || $e($) || ne && !ne._f) && !on($) ? X(B, $, E) : H(B, $, E);
    }
  }, te = (y, F, E = {}) => {
    const U = G(r, y), $ = o.array.has(y), B = lt(F);
    Ce(a, y, B), $ ? (f.array.next({
      name: y,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && E.shouldDirty && f.state.next({
      name: y,
      dirtyFields: In(s, a),
      isDirty: R(y, B)
    })) : U && !U._f && !tt(B) ? X(y, B, E) : H(y, B, E), vi(y, o) && f.state.next({ ...n }), f.values.next({
      name: i.mount ? y : void 0,
      values: { ...a }
    });
  }, se = async (y) => {
    i.mount = !0;
    const F = y.target;
    let E = F.name, U = !0;
    const $ = G(r, E), B = () => F.type ? ys($._f) : jl(y), ne = (he) => {
      U = Number.isNaN(he) || on(he) && isNaN(he.getTime()) || Gt(he, G(a, E, he));
    };
    if ($) {
      let he, Ee;
      const ke = B(), Qe = y.type === Er.BLUR || y.type === Er.FOCUS_OUT, Bt = !$m($._f) && !t.resolver && !G(n.errors, E) && !$._f.deps || zm(Qe, G(n.touchedFields, E), n.isSubmitted, m, h), Vt = vi(E, o, Qe);
      Ce(a, E, ke), Qe ? ($._f.onBlur && $._f.onBlur(y), l && l(0)) : $._f.onChange && $._f.onChange(y);
      const ge = w(E, ke, Qe, !1), Re = !ct(ge) || Vt;
      if (!Qe && f.values.next({
        name: E,
        type: y.type,
        values: { ...a }
      }), Bt)
        return u.isValid && (t.mode === "onBlur" && Qe ? g() : Qe || g()), Re && f.state.next({ name: E, ...Vt ? {} : ge });
      if (!Qe && Vt && f.state.next({ ...n }), t.resolver) {
        const { errors: Oe } = await A([E]);
        if (ne(ke), U) {
          const Ye = _i(n.errors, r, E), Rt = _i(Oe, r, Ye.name || E);
          he = Rt.error, E = Rt.name, Ee = ct(Oe);
        }
      } else
        b([E], !0), he = (await Si($, o.disabled, a, x, t.shouldUseNativeValidation))[E], b([E]), ne(ke), U && (he ? Ee = !1 : u.isValid && (Ee = await P(r, !0)));
      U && ($._f.deps && fe($._f.deps), C(E, Ee, he, ge));
    }
  }, q = (y, F) => {
    if (G(n.errors, F) && y.focus)
      return y.focus(), 1;
  }, fe = async (y, F = {}) => {
    let E, U;
    const $ = qn(y);
    if (t.resolver) {
      const B = await L(je(y) ? y : $);
      E = ct(B), U = y ? !$.some((ne) => G(B, ne)) : E;
    } else y ? (U = (await Promise.all($.map(async (B) => {
      const ne = G(r, B);
      return await P(ne && ne._f ? { [B]: ne } : ne);
    }))).every(Boolean), !(!U && !n.isValid) && g()) : U = E = await P(r);
    return f.state.next({
      ...!Mt(y) || u.isValid && E !== n.isValid ? {} : { name: y },
      ...t.resolver || !y ? { isValid: E } : {},
      errors: n.errors
    }), F.shouldFocus && !U && Un(r, q, y ? $ : o.mount), U;
  }, K = (y) => {
    const F = {
      ...i.mount ? a : s
    };
    return je(y) ? F : Mt(y) ? G(F, y) : y.map((E) => G(F, E));
  }, V = (y, F) => ({
    invalid: !!G((F || n).errors, y),
    isDirty: !!G((F || n).dirtyFields, y),
    error: G((F || n).errors, y),
    isValidating: !!G(n.validatingFields, y),
    isTouched: !!G((F || n).touchedFields, y)
  }), I = (y) => {
    y && qn(y).forEach((F) => qe(n.errors, F)), f.state.next({
      errors: y ? n.errors : {}
    });
  }, ce = (y, F, E) => {
    const U = (G(r, y, { _f: {} })._f || {}).ref, $ = G(n.errors, y) || {}, { ref: B, message: ne, type: he, ...Ee } = $;
    Ce(n.errors, y, {
      ...Ee,
      ...F,
      ref: U
    }), f.state.next({
      name: y,
      errors: n.errors,
      isValid: !1
    }), E && E.shouldFocus && U && U.focus && U.focus();
  }, xe = (y, F) => Lt(y) ? f.values.subscribe({
    next: (E) => y(N(void 0, F), E)
  }) : N(y, F, !0), ie = (y, F = {}) => {
    for (const E of y ? qn(y) : o.mount)
      o.mount.delete(E), o.array.delete(E), F.keepValue || (qe(r, E), qe(a, E)), !F.keepError && qe(n.errors, E), !F.keepDirty && qe(n.dirtyFields, E), !F.keepTouched && qe(n.touchedFields, E), !F.keepIsValidating && qe(n.validatingFields, E), !t.shouldUnregister && !F.keepDefaultValue && qe(s, E);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...F.keepDirty ? { isDirty: R() } : {}
    }), !F.keepIsValid && g();
  }, pe = ({ disabled: y, name: F, field: E, fields: U }) => {
    (wt(y) && i.mount || y || o.disabled.has(F)) && (y ? o.disabled.add(F) : o.disabled.delete(F), w(F, ys(E ? E._f : G(U, F)._f), !1, !1, !0));
  }, be = (y, F = {}) => {
    let E = G(r, y);
    const U = wt(F.disabled) || wt(t.disabled);
    return Ce(r, y, {
      ...E || {},
      _f: {
        ...E && E._f ? E._f : { ref: { name: y } },
        name: y,
        mount: !0,
        ...F
      }
    }), o.mount.add(y), E ? pe({
      field: E,
      disabled: wt(F.disabled) ? F.disabled : t.disabled,
      name: y
    }) : _(y, !0, F.value), {
      ...U ? { disabled: F.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!F.required,
        min: On(F.min),
        max: On(F.max),
        minLength: On(F.minLength),
        maxLength: On(F.maxLength),
        pattern: On(F.pattern)
      } : {},
      name: y,
      onChange: se,
      onBlur: se,
      ref: ($) => {
        if ($) {
          be(y, F), E = G(r, y);
          const B = je($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, ne = Bm(B), he = E._f.refs || [];
          if (ne ? he.find((Ee) => Ee === B) : B === E._f.ref)
            return;
          Ce(r, y, {
            _f: {
              ...E._f,
              ...ne ? {
                refs: [
                  ...he.filter(bs),
                  B,
                  ...Array.isArray(G(s, y)) ? [{}] : []
                ],
                ref: { type: B.type, name: y }
              } : { ref: B }
            }
          }), _(y, !1, void 0, B);
        } else
          E = G(r, y, {}), E._f && (E._f.mount = !1), (t.shouldUnregister || F.shouldUnregister) && !($l(o.array, y) && i.action) && o.unMount.add(y);
      }
    };
  }, le = () => t.shouldFocusError && Un(r, q, o.mount), Y = (y) => {
    wt(y) && (f.state.next({ disabled: y }), Un(r, (F, E) => {
      const U = G(r, E);
      U && (F.disabled = U._f.disabled || y, Array.isArray(U._f.refs) && U._f.refs.forEach(($) => {
        $.disabled = U._f.disabled || y;
      }));
    }, 0, !1));
  }, de = (y, F) => async (E) => {
    let U;
    E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
    let $ = lt(a);
    if (o.disabled.size)
      for (const B of o.disabled)
        Ce($, B, void 0);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: B, values: ne } = await A();
      n.errors = B, $ = ne;
    } else
      await P(r);
    if (qe(n.errors, "root"), ct(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await y($, E);
      } catch (B) {
        U = B;
      }
    } else
      F && await F({ ...n.errors }, E), le(), setTimeout(le);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ct(n.errors) && !U,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), U)
      throw U;
  }, De = (y, F = {}) => {
    G(r, y) && (je(F.defaultValue) ? te(y, lt(G(s, y))) : (te(y, F.defaultValue), Ce(s, y, lt(F.defaultValue))), F.keepTouched || qe(n.touchedFields, y), F.keepDirty || (qe(n.dirtyFields, y), n.isDirty = F.defaultValue ? R(y, lt(G(s, y))) : R()), F.keepError || (qe(n.errors, y), u.isValid && g()), f.state.next({ ...n }));
  }, Te = (y, F = {}) => {
    const E = y ? lt(y) : s, U = lt(E), $ = ct(y), B = $ ? s : U;
    if (F.keepDefaultValues || (s = E), !F.keepValues) {
      if (F.keepDirtyValues) {
        const ne = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(In(s, a))
        ]);
        for (const he of Array.from(ne))
          G(n.dirtyFields, he) ? Ce(B, he, G(a, he)) : te(he, G(B, he));
      } else {
        if (Aa && je(y))
          for (const ne of o.mount) {
            const he = G(r, ne);
            if (he && he._f) {
              const Ee = Array.isArray(he._f.refs) ? he._f.refs[0] : he._f.ref;
              if (Rr(Ee)) {
                const ke = Ee.closest("form");
                if (ke) {
                  ke.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = t.shouldUnregister ? F.keepDefaultValues ? lt(s) : {} : lt(B), f.array.next({
        values: { ...B }
      }), f.values.next({
        values: { ...B }
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
      isDirty: $ ? !1 : F.keepDirty ? n.isDirty : !!(F.keepDefaultValues && !Gt(y, s)),
      isSubmitted: F.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: $ ? {} : F.keepDirtyValues ? F.keepDefaultValues && a ? In(s, a) : n.dirtyFields : F.keepDefaultValues && y ? In(s, y) : F.keepDirty ? n.dirtyFields : {},
      touchedFields: F.keepTouched ? n.touchedFields : {},
      errors: F.keepErrors ? n.errors : {},
      isSubmitSuccessful: F.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Le = (y, F) => Te(Lt(y) ? y(a) : y, F);
  return {
    control: {
      register: be,
      unregister: ie,
      getFieldState: V,
      handleSubmit: de,
      setError: ce,
      _executeSchema: A,
      _getWatch: N,
      _getDirty: R,
      _updateValid: g,
      _removeUnmounted: T,
      _updateFieldArray: p,
      _updateDisabledField: pe,
      _getFieldArray: M,
      _reset: Te,
      _resetDefaultValues: () => Lt(t.defaultValues) && t.defaultValues().then((y) => {
        Le(y, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (y) => {
        n = {
          ...n,
          ...y
        };
      },
      _disableForm: Y,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: k,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return i;
      },
      set _state(y) {
        i = y;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return o;
      },
      set _names(y) {
        o = y;
      },
      get _formState() {
        return n;
      },
      set _formState(y) {
        n = y;
      },
      get _options() {
        return t;
      },
      set _options(y) {
        t = {
          ...t,
          ...y
        };
      }
    },
    trigger: fe,
    register: be,
    handleSubmit: de,
    watch: xe,
    setValue: te,
    getValues: K,
    reset: Le,
    resetField: De,
    clearErrors: I,
    unregister: ie,
    setError: ce,
    setFocus: (y, F = {}) => {
      const E = G(r, y), U = E && E._f;
      if (U) {
        const $ = U.refs ? U.refs[0] : U.ref;
        $.focus && ($.focus(), F.shouldSelect && Lt($.select) && $.select());
      }
    },
    getFieldState: V
  };
}
function tc(e = {}) {
  const t = ue.useRef(void 0), n = ue.useRef(void 0), [r, s] = ue.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Lt(e.defaultValues),
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
    defaultValues: Lt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Um(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Ra({
    subject: a._subjects.state,
    next: (i) => {
      Ul(i, a._proxyFormState, a._updateFormState, !0) && s({ ...a._formState });
    }
  }), ue.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), ue.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== r.isDirty && a._subjects.state.next({
        isDirty: i
      });
    }
  }, [a, r.isDirty]), ue.useEffect(() => {
    e.values && !Gt(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, s((i) => ({ ...i }))) : a._resetDefaultValues();
  }, [e.values, a]), ue.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), ue.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), ue.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = ql(r, a), t.current;
}
var Wm = "Label", nc = kt.forwardRef((e, t) => /* @__PURE__ */ c(
  _d.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
nc.displayName = Wm;
var rc = nc;
const Lr = kt.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  rc,
  {
    ref: n,
    className: W(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Lr.displayName = rc.displayName;
const sc = Am, ac = kt.createContext(
  {}
), js = ({
  ...e
}) => {
  const { formState: t } = nn();
  return /* @__PURE__ */ c(ac.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c(Om, { ...e, disabled: t.isSubmitting }) });
}, ts = () => {
  const e = kt.useContext(ac), t = kt.useContext(ic), { getFieldState: n, formState: r } = nn(), s = n(e.name, r);
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
}, ic = kt.createContext(
  {}
), La = kt.forwardRef(({ className: e, ...t }, n) => {
  const r = kt.useId();
  return /* @__PURE__ */ c(ic.Provider, { value: { id: r }, children: /* @__PURE__ */ c("div", { ref: n, className: W("space-y-2", e), ...t }) });
});
La.displayName = "FormItem";
const Qm = kt.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = ts();
  return /* @__PURE__ */ c(
    Lr,
    {
      ref: n,
      className: W(r && "text-f1-foreground-critical", e),
      htmlFor: s,
      ...t
    }
  );
});
Qm.displayName = "FormLabel";
const oc = kt.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: s, formMessageId: a } = ts();
  return /* @__PURE__ */ c(
    Cd,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${s} ${a}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
oc.displayName = "FormControl";
const lc = kt.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ts();
  return /* @__PURE__ */ c(
    "p",
    {
      ref: n,
      id: r,
      className: W("text-base text-f1-foreground-secondary", e),
      ...t
    }
  );
});
lc.displayName = "FormDescription";
const ns = kt.forwardRef(
  ({ className: e, children: t, fallback: n, ...r }, s) => {
    const { error: a, formMessageId: i } = ts(), { forms: o } = Ne(), l = a ? a.message ?? n ?? o.validation.invalidType : t;
    return l ? /* @__PURE__ */ D(
      "div",
      {
        ref: s,
        id: i,
        className: W("flex gap-1", e),
        ...r,
        children: [
          /* @__PURE__ */ c(Me, { icon: xo, color: "critical" }),
          /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
ns.displayName = "FormMessage";
function Hm({
  isActionBar: e,
  isDirty: t,
  actionBarStatus: n,
  hasErrors: r,
  errorCount: s,
  resolvedActionBarLabel: a,
  submitLabel: i,
  submitIcon: o,
  discardableChanges: l,
  discardLabel: d,
  discardIcon: u,
  issuesOneLabel: f,
  issuesOtherLabel: h,
  onSubmit: m,
  onDiscard: x,
  goToPreviousError: S,
  goToNextError: g
}) {
  return e ? /* @__PURE__ */ c(
    Os,
    {
      isOpen: t || n === "loading" || n === "success",
      variant: "light",
      status: r ? void 0 : n,
      label: a,
      leftContent: r ? /* @__PURE__ */ D("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ D("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ c(Me, { icon: xo, size: "md", color: "critical" }),
          /* @__PURE__ */ c("span", { className: "font-medium text-f1-foreground-critical", children: s === 1 ? f.replace("{{count}}", String(s)) : h.replace("{{count}}", String(s)) })
        ] }),
        s > 1 && /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c(
            Pe,
            {
              icon: Nd,
              onClick: S,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }
          ),
          /* @__PURE__ */ c(
            Pe,
            {
              icon: xr,
              onClick: g,
              variant: "outline",
              label: "Go to next error",
              hideLabel: !0
            }
          )
        ] })
      ] }) : void 0,
      primaryActions: [
        {
          label: i,
          icon: o,
          onClick: m,
          disabled: r
        }
      ],
      secondaryActions: l ? [
        {
          label: d,
          icon: u,
          onClick: x
        }
      ] : []
    }
  ) : /* @__PURE__ */ c(
    Os,
    {
      isOpen: n === "loading" || n === "success",
      variant: "light",
      status: n,
      label: a
    }
  );
}
const Ci = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = G(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, cc = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? Ci(r.ref, n, e) : r.refs && r.refs.forEach((s) => Ci(s, n, e));
  }
}, Gm = (e, t) => {
  t.shouldUseNativeValidation && cc(e, t);
  const n = {};
  for (const r in e) {
    const s = G(t.fields, r), a = Object.assign(e[r] || {}, { ref: s && s.ref });
    if (Km(t.names || Object.keys(e), r)) {
      const i = Object.assign({}, G(n, r));
      Ce(i, "root", a), Ce(n, r, i);
    } else Ce(n, r, a);
  }
  return n;
}, Km = (e, t) => e.some((n) => n.startsWith(t + "."));
var Xm = function(e, t) {
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
      n[i] = Hl(i, t, n, s, d ? [].concat(d, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Ym = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, s, a) {
    try {
      return Promise.resolve((function(i, o) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(d) {
            return a.shouldUseNativeValidation && cc({}, a), { errors: {}, values: n.raw ? r : d };
          });
        } catch (d) {
          return o(d);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(i) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(i)) return { values: {}, errors: Gm(Xm(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, Se;
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
})(Se || (Se = {}));
var Ni;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ni || (Ni = {}));
const re = Se.arrayToEnum([
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
]), Ht = (e) => {
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
}, j = Se.arrayToEnum([
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
class Zt extends Error {
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
    if (!(t instanceof Zt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Se.jsonStringifyReplacer, 2);
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
Zt.create = (e) => new Zt(e);
const $s = (e, t) => {
  let n;
  switch (e.code) {
    case j.invalid_type:
      e.received === re.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case j.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Se.jsonStringifyReplacer)}`;
      break;
    case j.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Se.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      n = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Se.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      n = `Invalid enum value. Expected ${Se.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Se.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Se.assertNever(e);
  }
  return { message: n };
};
let Jm = $s;
function ep() {
  return Jm;
}
const tp = (e) => {
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
function J(e, t) {
  const n = ep(), r = tp({
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
      n === $s ? void 0 : $s
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(r);
}
class bt {
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
        return me;
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
    return bt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return me;
      a.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const me = Object.freeze({
  status: "aborted"
}), Ln = (e) => ({ status: "dirty", value: e }), _t = (e) => ({ status: "valid", value: e }), Di = (e) => e.status === "aborted", Fi = (e) => e.status === "dirty", xn = (e) => e.status === "valid", Mr = (e) => typeof Promise < "u" && e instanceof Promise;
var ae;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(ae || (ae = {}));
class Jt {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ti = (e, t) => {
  if (xn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Zt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ve(e) {
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
class we {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ht(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ht(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new bt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ht(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Mr(n))
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
      parsedType: Ht(t)
    }, s = this._parseSync({ data: t, path: r.path, parent: r });
    return Ti(r, s);
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
      parsedType: Ht(t)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: t, path: [], parent: n });
        return xn(r) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((r) => xn(r) ? {
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
      parsedType: Ht(t)
    }, s = this._parse({ data: t, path: r.path, parent: r }), a = await (Mr(s) ? s : Promise.resolve(s));
    return Ti(r, a);
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
    return new kn({
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
    return Xt.create(this, this._def);
  }
  nullable() {
    return _n.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Pt.create(this);
  }
  promise() {
    return Vr.create(this, this._def);
  }
  or(t) {
    return Pr.create([this, t], this._def);
  }
  and(t) {
    return Br.create(this, t, this._def);
  }
  transform(t) {
    return new kn({
      ...ve(this._def),
      schema: this,
      typeName: Z.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ws({
      ...ve(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Z.ZodDefault
    });
  }
  brand() {
    return new _p({
      typeName: Z.ZodBranded,
      type: this,
      ...ve(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Qs({
      ...ve(this._def),
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
    return Ma.create(this, t);
  }
  readonly() {
    return Hs.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const np = /^c[^\s-]{8,}$/i, rp = /^[0-9a-z]+$/, sp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ap = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ip = /^[a-z0-9_-]{21}$/i, op = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, lp = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, cp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, dp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xs;
const up = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, fp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, hp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, mp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, pp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, gp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", vp = new RegExp(`^${dc}$`);
function uc(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function bp(e) {
  return new RegExp(`^${uc(e)}$`);
}
function yp(e) {
  let t = `${dc}T${uc(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function xp(e, t) {
  return !!((t === "v4" || !t) && up.test(e) || (t === "v6" || !t) && hp.test(e));
}
function wp(e, t) {
  if (!op.test(e))
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
function Sp(e, t) {
  return !!((t === "v4" || !t) && fp.test(e) || (t === "v6" || !t) && mp.test(e));
}
class Kt extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== re.string) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: j.invalid_type,
        expected: re.string,
        received: a.parsedType
      }), me;
    }
    const r = new bt();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), J(s, {
          code: j.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), J(s, {
          code: j.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value, o = t.data.length < a.value;
        (i || o) && (s = this._getOrReturnCtx(t, s), i ? J(s, {
          code: j.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && J(s, {
          code: j.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        cp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "email",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        xs || (xs = new RegExp(dp, "u")), xs.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "emoji",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        ap.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "uuid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        ip.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "nanoid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        np.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "cuid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        rp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "cuid2",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        sp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
          validation: "ulid",
          code: j.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), J(s, {
            validation: "url",
            code: j.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "regex",
        code: j.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? yp(a).test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? vp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? bp(a).test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? lp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "duration",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? xp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "ip",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? wp(t.data, a.alg) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "jwt",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? Sp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "cidr",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? pp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "base64",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? gp.test(t.data) || (s = this._getOrReturnCtx(t, s), J(s, {
        validation: "base64url",
        code: j.invalid_string,
        message: a.message
      }), r.dirty()) : Se.assertNever(a);
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
    return new Kt({
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
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Kt({
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
Kt.create = (e) => new Kt({
  checks: [],
  typeName: Z.ZodString,
  coerce: e?.coerce ?? !1,
  ...ve(e)
});
function kp(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = n > r ? n : r, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
class wn extends we {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== re.number) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: j.invalid_type,
        expected: re.number,
        received: a.parsedType
      }), me;
    }
    let r;
    const s = new bt();
    for (const a of this._def.checks)
      a.kind === "int" ? Se.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? kp(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.not_finite,
        message: a.message
      }), s.dirty()) : Se.assertNever(a);
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
    return new wn({
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
    return new wn({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Se.isInteger(t.value));
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
wn.create = (e) => new wn({
  checks: [],
  typeName: Z.ZodNumber,
  coerce: e?.coerce || !1,
  ...ve(e)
});
class Xn extends we {
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
    const s = new bt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), J(r, {
        code: j.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : Se.assertNever(a);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return J(n, {
      code: j.invalid_type,
      expected: re.bigint,
      received: n.parsedType
    }), me;
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
    return new Xn({
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
    return new Xn({
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
Xn.create = (e) => new Xn({
  checks: [],
  typeName: Z.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...ve(e)
});
class zs extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== re.boolean) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.boolean,
        received: r.parsedType
      }), me;
    }
    return _t(t.data);
  }
}
zs.create = (e) => new zs({
  typeName: Z.ZodBoolean,
  coerce: e?.coerce || !1,
  ...ve(e)
});
class Yn extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== re.date) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: j.invalid_type,
        expected: re.date,
        received: a.parsedType
      }), me;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return J(a, {
        code: j.invalid_date
      }), me;
    }
    const r = new bt();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), J(s, {
        code: j.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Se.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Yn({
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
Yn.create = (e) => new Yn({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: Z.ZodDate,
  ...ve(e)
});
class Ai extends we {
  _parse(t) {
    if (this._getType(t) !== re.symbol) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.symbol,
        received: r.parsedType
      }), me;
    }
    return _t(t.data);
  }
}
Ai.create = (e) => new Ai({
  typeName: Z.ZodSymbol,
  ...ve(e)
});
class Ei extends we {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.undefined,
        received: r.parsedType
      }), me;
    }
    return _t(t.data);
  }
}
Ei.create = (e) => new Ei({
  typeName: Z.ZodUndefined,
  ...ve(e)
});
class Ri extends we {
  _parse(t) {
    if (this._getType(t) !== re.null) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.null,
        received: r.parsedType
      }), me;
    }
    return _t(t.data);
  }
}
Ri.create = (e) => new Ri({
  typeName: Z.ZodNull,
  ...ve(e)
});
class Zs extends we {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return _t(t.data);
  }
}
Zs.create = (e) => new Zs({
  typeName: Z.ZodAny,
  ...ve(e)
});
class qs extends we {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return _t(t.data);
  }
}
qs.create = (e) => new qs({
  typeName: Z.ZodUnknown,
  ...ve(e)
});
class en extends we {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return J(n, {
      code: j.invalid_type,
      expected: re.never,
      received: n.parsedType
    }), me;
  }
}
en.create = (e) => new en({
  typeName: Z.ZodNever,
  ...ve(e)
});
class Ii extends we {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.void,
        received: r.parsedType
      }), me;
    }
    return _t(t.data);
  }
}
Ii.create = (e) => new Ii({
  typeName: Z.ZodVoid,
  ...ve(e)
});
class Pt extends we {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== re.array)
      return J(n, {
        code: j.invalid_type,
        expected: re.array,
        received: n.parsedType
      }), me;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value, o = n.data.length < s.exactLength.value;
      (i || o) && (J(n, {
        code: i ? j.too_big : j.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (J(n, {
      code: j.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (J(n, {
      code: j.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, o) => s.type._parseAsync(new Jt(n, i, n.path, o)))).then((i) => bt.mergeArray(r, i));
    const a = [...n.data].map((i, o) => s.type._parseSync(new Jt(n, i, n.path, o)));
    return bt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Pt({
      ...this._def,
      minLength: { value: t, message: ae.toString(n) }
    });
  }
  max(t, n) {
    return new Pt({
      ...this._def,
      maxLength: { value: t, message: ae.toString(n) }
    });
  }
  length(t, n) {
    return new Pt({
      ...this._def,
      exactLength: { value: t, message: ae.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Pt.create = (e, t) => new Pt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Z.ZodArray,
  ...ve(t)
});
function pn(e) {
  if (e instanceof Ze) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Xt.create(pn(r));
    }
    return new Ze({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Pt ? new Pt({
    ...e._def,
    type: pn(e.element)
  }) : e instanceof Xt ? Xt.create(pn(e.unwrap())) : e instanceof _n ? _n.create(pn(e.unwrap())) : e instanceof ln ? ln.create(e.items.map((t) => pn(t))) : e;
}
class Ze extends we {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Se.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== re.object) {
      const d = this._getOrReturnCtx(t);
      return J(d, {
        code: j.invalid_type,
        expected: re.object,
        received: d.parsedType
      }), me;
    }
    const { status: r, ctx: s } = this._processInputParams(t), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof en && this._def.unknownKeys === "strip"))
      for (const d in s.data)
        i.includes(d) || o.push(d);
    const l = [];
    for (const d of i) {
      const u = a[d], f = s.data[d];
      l.push({
        key: { status: "valid", value: d },
        value: u._parse(new Jt(s, f, s.path, d)),
        alwaysSet: d in s.data
      });
    }
    if (this._def.catchall instanceof en) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (d === "strict")
        o.length > 0 && (J(s, {
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
            new Jt(s, f, s.path, u)
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
    }).then((d) => bt.mergeObjectSync(r, d)) : bt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return ae.errToObj, new Ze({
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
    return new Ze({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ze({
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
    return new Ze({
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
    return new Ze({
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
    return new Ze({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const r of Se.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const r of Se.objectKeys(this.shape))
      t[r] || (n[r] = this.shape[r]);
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return pn(this);
  }
  partial(t) {
    const n = {};
    for (const r of Se.objectKeys(this.shape)) {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional();
    }
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const r of Se.objectKeys(this.shape))
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Xt; )
          a = a._def.innerType;
        n[r] = a;
      }
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return fc(Se.objectKeys(this.shape));
  }
}
Ze.create = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strip",
  catchall: en.create(),
  typeName: Z.ZodObject,
  ...ve(t)
});
Ze.strictCreate = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strict",
  catchall: en.create(),
  typeName: Z.ZodObject,
  ...ve(t)
});
Ze.lazycreate = (e, t) => new Ze({
  shape: e,
  unknownKeys: "strip",
  catchall: en.create(),
  typeName: Z.ZodObject,
  ...ve(t)
});
class Pr extends we {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function s(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new Zt(o.ctx.common.issues));
      return J(n, {
        code: j.invalid_union,
        unionErrors: i
      }), me;
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
      const o = i.map((l) => new Zt(l));
      return J(n, {
        code: j.invalid_union,
        unionErrors: o
      }), me;
    }
  }
  get options() {
    return this._def.options;
  }
}
Pr.create = (e, t) => new Pr({
  options: e,
  typeName: Z.ZodUnion,
  ...ve(t)
});
function Us(e, t) {
  const n = Ht(e), r = Ht(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === re.object && r === re.object) {
    const s = Se.objectKeys(t), a = Se.objectKeys(e).filter((o) => s.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of a) {
      const l = Us(e[o], t[o]);
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
      const i = e[a], o = t[a], l = Us(i, o);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === re.date && r === re.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Br extends we {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = (a, i) => {
      if (Di(a) || Di(i))
        return me;
      const o = Us(a.value, i.value);
      return o.valid ? ((Fi(a) || Fi(i)) && n.dirty(), { status: n.value, value: o.data }) : (J(r, {
        code: j.invalid_intersection_types
      }), me);
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
Br.create = (e, t, n) => new Br({
  left: e,
  right: t,
  typeName: Z.ZodIntersection,
  ...ve(n)
});
class ln extends we {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.array)
      return J(r, {
        code: j.invalid_type,
        expected: re.array,
        received: r.parsedType
      }), me;
    if (r.data.length < this._def.items.length)
      return J(r, {
        code: j.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), me;
    !this._def.rest && r.data.length > this._def.items.length && (J(r, {
      code: j.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Jt(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => bt.mergeArray(n, i)) : bt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ln({
      ...this._def,
      rest: t
    });
  }
}
ln.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ln({
    items: e,
    typeName: Z.ZodTuple,
    rest: null,
    ...ve(t)
  });
};
class Oi extends we {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.map)
      return J(r, {
        code: j.invalid_type,
        expected: re.map,
        received: r.parsedType
      }), me;
    const s = this._def.keyType, a = this._def.valueType, i = [...r.data.entries()].map(([o, l], d) => ({
      key: s._parse(new Jt(r, o, r.path, [d, "key"])),
      value: a._parse(new Jt(r, l, r.path, [d, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const d = await l.key, u = await l.value;
          if (d.status === "aborted" || u.status === "aborted")
            return me;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of i) {
        const d = l.key, u = l.value;
        if (d.status === "aborted" || u.status === "aborted")
          return me;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), o.set(d.value, u.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Oi.create = (e, t, n) => new Oi({
  valueType: t,
  keyType: e,
  typeName: Z.ZodMap,
  ...ve(n)
});
class Jn extends we {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== re.set)
      return J(r, {
        code: j.invalid_type,
        expected: re.set,
        received: r.parsedType
      }), me;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (J(r, {
      code: j.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (J(r, {
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
          return me;
        u.status === "dirty" && n.dirty(), d.add(u.value);
      }
      return { status: n.value, value: d };
    }
    const o = [...r.data.values()].map((l, d) => a._parse(new Jt(r, l, r.path, d)));
    return r.common.async ? Promise.all(o).then((l) => i(l)) : i(o);
  }
  min(t, n) {
    return new Jn({
      ...this._def,
      minSize: { value: t, message: ae.toString(n) }
    });
  }
  max(t, n) {
    return new Jn({
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
Jn.create = (e, t) => new Jn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Z.ZodSet,
  ...ve(t)
});
class Li extends we {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Li.create = (e, t) => new Li({
  getter: e,
  typeName: Z.ZodLazy,
  ...ve(t)
});
class Mi extends we {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return J(n, {
        received: n.data,
        code: j.invalid_literal,
        expected: this._def.value
      }), me;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Mi.create = (e, t) => new Mi({
  value: e,
  typeName: Z.ZodLiteral,
  ...ve(t)
});
function fc(e, t) {
  return new Sn({
    values: e,
    typeName: Z.ZodEnum,
    ...ve(t)
  });
}
class Sn extends we {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return J(n, {
        expected: Se.joinValues(r),
        received: n.parsedType,
        code: j.invalid_type
      }), me;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return J(n, {
        received: n.data,
        code: j.invalid_enum_value,
        options: r
      }), me;
    }
    return _t(t.data);
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
    return Sn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Sn.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Sn.create = fc;
class Pi extends we {
  _parse(t) {
    const n = Se.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== re.string && r.parsedType !== re.number) {
      const s = Se.objectValues(n);
      return J(r, {
        expected: Se.joinValues(s),
        received: r.parsedType,
        code: j.invalid_type
      }), me;
    }
    if (this._cache || (this._cache = new Set(Se.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = Se.objectValues(n);
      return J(r, {
        received: r.data,
        code: j.invalid_enum_value,
        options: s
      }), me;
    }
    return _t(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Pi.create = (e, t) => new Pi({
  values: e,
  typeName: Z.ZodNativeEnum,
  ...ve(t)
});
class Vr extends we {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== re.promise && n.common.async === !1)
      return J(n, {
        code: j.invalid_type,
        expected: re.promise,
        received: n.parsedType
      }), me;
    const r = n.parsedType === re.promise ? n.data : Promise.resolve(n.data);
    return _t(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Vr.create = (e, t) => new Vr({
  type: e,
  typeName: Z.ZodPromise,
  ...ve(t)
});
class kn extends we {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = this._def.effect || null, a = {
      addIssue: (i) => {
        J(r, i), i.fatal ? n.abort() : n.dirty();
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
            return me;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? me : l.status === "dirty" || n.value === "dirty" ? Ln(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return me;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? me : o.status === "dirty" || n.value === "dirty" ? Ln(o.value) : o;
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
        return o.status === "aborted" ? me : (o.status === "dirty" && n.dirty(), i(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? me : (o.status === "dirty" && n.dirty(), i(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!xn(i))
          return me;
        const o = s.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => xn(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({
          status: n.value,
          value: o
        })) : me);
    Se.assertNever(s);
  }
}
kn.create = (e, t, n) => new kn({
  schema: e,
  typeName: Z.ZodEffects,
  effect: t,
  ...ve(n)
});
kn.createWithPreprocess = (e, t, n) => new kn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Z.ZodEffects,
  ...ve(n)
});
class Xt extends we {
  _parse(t) {
    return this._getType(t) === re.undefined ? _t(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Xt.create = (e, t) => new Xt({
  innerType: e,
  typeName: Z.ZodOptional,
  ...ve(t)
});
class _n extends we {
  _parse(t) {
    return this._getType(t) === re.null ? _t(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_n.create = (e, t) => new _n({
  innerType: e,
  typeName: Z.ZodNullable,
  ...ve(t)
});
class Ws extends we {
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
Ws.create = (e, t) => new Ws({
  innerType: e,
  typeName: Z.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ve(t)
});
class Qs extends we {
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
    return Mr(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Zt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Zt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Qs.create = (e, t) => new Qs({
  innerType: e,
  typeName: Z.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ve(t)
});
class Bi extends we {
  _parse(t) {
    if (this._getType(t) !== re.nan) {
      const r = this._getOrReturnCtx(t);
      return J(r, {
        code: j.invalid_type,
        expected: re.nan,
        received: r.parsedType
      }), me;
    }
    return { status: "valid", value: t.data };
  }
}
Bi.create = (e) => new Bi({
  typeName: Z.ZodNaN,
  ...ve(e)
});
class _p extends we {
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
class Ma extends we {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? me : a.status === "dirty" ? (n.dirty(), Ln(a.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? me : s.status === "dirty" ? (n.dirty(), {
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
    return new Ma({
      in: t,
      out: n,
      typeName: Z.ZodPipeline
    });
  }
}
class Hs extends we {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (s) => (xn(s) && (s.value = Object.freeze(s.value)), s);
    return Mr(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hs.create = (e, t) => new Hs({
  innerType: e,
  typeName: Z.ZodReadonly,
  ...ve(t)
});
var Z;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Z || (Z = {}));
const rs = Kt.create, Cp = wn.create, Np = zs.create, Dp = Yn.create, Fp = Zs.create, Tp = qs.create;
en.create;
const hc = Pt.create, Pa = Ze.create;
Pr.create;
Br.create;
ln.create;
Sn.create;
Vr.create;
Xt.create;
_n.create;
function Ae(e, t) {
  return e._def?.typeName === t;
}
function rn(e) {
  return Ae(e, "ZodEffects") ? e._def.schema : e;
}
const mc = /* @__PURE__ */ new WeakMap();
function gt(e, t) {
  mc.set(e, t);
  const n = e;
  return n._f0Config = t, n._innerSchema = e, n;
}
function sn(e) {
  const t = e;
  return t._f0Config ? t._f0Config : mc.get(e);
}
function jy(e) {
  return sn(e) !== void 0;
}
function rt(e) {
  let t = e;
  for (; Ae(t, "ZodOptional") || Ae(t, "ZodNullable") || Ae(t, "ZodDefault"); )
    t = t._def.innerType;
  return t;
}
function pc(e, t) {
  if ("fieldType" in t && t.fieldType)
    return t.fieldType;
  if ("useUpload" in t && t.useUpload)
    return "file";
  if ("options" in t && t.options || "source" in t && t.source)
    return "select";
  const n = rt(e);
  return Ae(n, "ZodString") ? "rows" in t && t.rows ? "textarea" : "text" : Ae(n, "ZodNumber") ? "number" : Ae(n, "ZodBoolean") ? "switch" : Ae(n, "ZodDate") ? "date" : Ae(n, "ZodEnum") || Ae(n, "ZodArray") && ("options" in t && t.options || "source" in t && t.source) ? "select" : Ae(n, "ZodObject") && "render" in t && t.render ? "custom" : "text";
}
function Ap(e, t) {
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
function ss(e, t) {
  return typeof e == "function" ? e({ values: t }) : Ap(e, t);
}
function Ba(e, t) {
  return e === void 0 ? !1 : typeof e == "function" ? e({ values: t }) : e;
}
function mn(e, t) {
  if (e !== void 0)
    return typeof e == "function" ? e({ values: t }) : e;
}
function gc(e, t) {
  return async (n, r, s) => {
    const a = Ep(e, n), i = { ...n };
    for (const l of Object.keys(i))
      i[l] === null && (i[l] = void 0);
    return Ym(a, t)(i, r, s);
  };
}
function Ep(e, t) {
  const r = rn(e).shape, s = {};
  for (const [i, o] of Object.entries(r)) {
    const l = sn(o);
    if (!l || !l.renderIf) {
      s[i] = o;
      continue;
    }
    ss(l.renderIf, t) ? s[i] = o : s[i] = Fp();
  }
  const a = Pa(s);
  if (Ae(e, "ZodEffects")) {
    const o = e._def.effect;
    if (o.type === "refinement")
      return a.superRefine(o.refinement);
  }
  return a;
}
const Va = "gap-4", vc = "mt-6", bc = "max-w-[720px]", an = "md", as = Et(null);
function ja() {
  const e = nt(as);
  if (!e)
    throw new Error("useF0FormContext must be used within a F0Form");
  return e;
}
function yc() {
  return nt(as);
}
function cn(e, t, n) {
  const r = ["forms", e];
  return t && r.push(t), n && r.push(n), r.join(".");
}
function Rp(e) {
  const t = rt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function Ip({
  field: e,
  formField: t
}) {
  const n = e.validation && Rp(e.validation);
  return /* @__PURE__ */ c(
    Qn,
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
function Op({
  field: e,
  formField: t,
  error: n,
  isValidating: r,
  required: s
}) {
  const i = yc()?.renderCustomField, o = {
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
    return /* @__PURE__ */ c(Ge, { children: i({
      ...o,
      customFieldName: e.customFieldName,
      fieldType: "custom"
    }) });
  }
  if (!e.render)
    throw new Error(
      `Custom field "${e.id}" has neither a render function nor a customFieldName.`
    );
  return /* @__PURE__ */ c(Ge, { children: e.render(o) });
}
function Lp(e, t) {
  if (e)
    return {
      value: { from: e, to: e },
      granularity: t?.[0] ?? "day"
    };
}
function Mp(e) {
  return e?.value?.from;
}
function xc({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => Lp(
      t.value ?? void 0,
      e.granularities
    ),
    [t.value, e.granularities]
  ), i = (l) => {
    t.onChange(Mp(l) ?? null);
  }, o = (l) => {
    l || t.onBlur();
  };
  return /* @__PURE__ */ c(
    wo,
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
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function Gs(e) {
  if (!e || !(e instanceof Date) || isNaN(e.getTime())) return "";
  const t = String(e.getHours()).padStart(2, "0"), n = String(e.getMinutes()).padStart(2, "0");
  return `${t}:${n}`;
}
function Pp(e) {
  if (!e) return;
  const [t, n] = e.split(":").map(Number);
  if (isNaN(t) || isNaN(n)) return;
  const r = /* @__PURE__ */ new Date();
  return r.setHours(t, n, 0, 0), r;
}
function ws(e, t) {
  if (!e) return;
  const n = new Date(e);
  if (t) {
    const [r, s, a] = t.split(":").map(Number);
    n.setHours(r ?? 0, s ?? 0, a ?? 0, 0);
  } else
    n.setHours(0, 0, 0, 0);
  return n;
}
function wc({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => Gs(t.value ?? void 0),
    [t.value]
  ), i = O(
    (o) => {
      if (!o) {
        t.onChange(null), t.onBlur();
        return;
      }
      const l = Pp(o);
      t.onChange(l), t.onBlur();
    },
    [t]
  );
  return /* @__PURE__ */ c(
    oa,
    {
      type: "time",
      label: e.label,
      disabled: e.disabled,
      value: a,
      onChange: i,
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      clearable: e.clearable,
      name: t.name,
      ref: t.ref,
      icon: Dd
    }
  );
}
function Bp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = t.value ?? void 0, i = z(() => Gs(a), [a]), o = O(
    (m) => {
      if (!m) {
        t.onChange(null);
        return;
      }
      t.onChange(ws(m, i));
    },
    [t, i]
  ), l = O(
    (m) => {
      if (!m) {
        if (a) {
          const S = new Date(a);
          S.setHours(0, 0, 0, 0), t.onChange(S);
        }
        return;
      }
      const x = Gs(m);
      if (!a) {
        const S = /* @__PURE__ */ new Date();
        S.setHours(0, 0, 0, 0), t.onChange(ws(S, x));
        return;
      }
      t.onChange(ws(a, x));
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
      xc,
      {
        field: d,
        formField: u,
        error: n,
        status: s,
        loading: r
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-32", children: /* @__PURE__ */ c(
      wc,
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
function Vp(e) {
  if (!(!e?.from || !e?.to))
    return {
      value: { from: e.from, to: e.to },
      granularity: "range"
    };
}
function jp(e) {
  if (!(!e?.value?.from || !e?.value?.to))
    return {
      from: e.value.from,
      to: e.value.to
    };
}
function $p({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = z(
    () => Vp(
      t.value ?? void 0
    ),
    [t.value]
  ), i = (d) => {
    t.onChange(jp(d) ?? null);
  }, o = (d) => {
    d || t.onBlur();
  }, l = e.fromLabel && e.toLabel ? `${e.label} (${e.fromLabel} - ${e.toLabel})` : e.label;
  return /* @__PURE__ */ c(
    wo,
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
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function zp({
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
    Nm,
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
function Zp(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function qp({
  entry: e,
  useUpload: t,
  onUploadComplete: n,
  onRemove: r,
  onError: s,
  disabled: a,
  translations: i
}) {
  const o = !!e.file, l = t?.(), d = l?.upload, u = l?.cancelUpload, f = l?.progress ?? 0, h = l?.status ?? "idle", [m, x] = ee(null), S = Q(!1), g = O(async () => {
    if (!(!o || !e.file || !d) && !S.current) {
      S.current = !0;
      try {
        const C = await d(e.file);
        C.type === "success" ? n(C.value) : r();
      } catch {
        const C = i.uploadFailed;
        x(C), s(C);
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
  oe(() => {
    o && g();
  }, [o, g]);
  const b = O(() => {
    o && (h === "uploading" || h === "processing") && u?.(), r();
  }, [o, h, u, r]), p = o && (h === "uploading" || h === "processing"), v = Math.round(f * 100), k = e.file ?? {
    name: e.initialFile?.name ?? "",
    type: e.initialFile?.type ?? ""
  }, _ = e.file?.name ?? e.initialFile?.name ?? "", w = e.file?.size ?? e.initialFile?.size;
  return /* @__PURE__ */ D(
    "div",
    {
      className: W(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        m && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ c(Fd, { file: k, size: "md" }),
        /* @__PURE__ */ D("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ c("span", { className: "truncate text-base font-medium text-f1-foreground", children: _ }),
          /* @__PURE__ */ c("span", { className: "text-sm text-f1-foreground-secondary", children: m || (p ? h === "processing" ? i.processing : `${i.uploading} ${v}%` : w != null ? Zp(w) : null) })
        ] }),
        !a && /* @__PURE__ */ c(
          Pe,
          {
            variant: "ghost",
            size: "sm",
            label: i.remove,
            onClick: b,
            icon: nr,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const Up = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function Ks(e) {
  return Up.has(e) ? `${e}/*` : e;
}
const Vi = {
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
}, ji = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function Wp(e) {
  if (!e || e.length === 0) return;
  const t = [];
  for (const n of e) {
    const r = Ks(n);
    if (ji[r])
      t.push(ji[r]);
    else if (Vi[r])
      t.push(Vi[r]);
    else {
      const s = r.split("/")[1];
      s && t.push(s.toUpperCase());
    }
  }
  return t.length > 0 ? t.join(", ") : void 0;
}
function Qp({
  isDragOver: e,
  hasCriticalStatus: t,
  statusType: n
}) {
  return e ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t ? "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10" : n === "warning" ? "border-f1-border-warning-bold bg-f1-background" : n === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function Hp(e, t, n) {
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
function Gp({
  field: e,
  formField: t,
  error: n,
  statusType: r,
  initialFiles: s
}) {
  const { forms: a } = Ne(), i = yc(), o = s ?? i?.initialFiles, l = va(), d = Q(null), [u, f] = ee(!1), h = e.multiple ?? !1, [m, x] = ee(
    () => Hp(o, t.value, h)
  ), [S, g] = ee(null), b = a.file, p = m.length > 0, v = h || !p, k = e.accept ? e.accept.map(Ks).join(",") : void 0, _ = z(
    () => Wp(e.accept),
    [e.accept]
  ), w = O(
    (K) => e.accept && !e.accept.some((V) => {
      const I = Ks(V);
      return I.endsWith("/*") ? K.type.startsWith(I.replace("/*", "/")) : K.type === I;
    }) ? b.invalidFileType.replace(
      "{{types}}",
      _ ?? ""
    ) : e.maxSizeMB && K.size > e.maxSizeMB * 1024 * 1024 ? b.fileTooLarge.replace(
      "{{maxSize}}",
      String(e.maxSizeMB)
    ) : null,
    [e.accept, e.maxSizeMB, b, _]
  ), C = O(
    (K) => {
      g(null);
      const V = h ? K : [K[0]];
      for (const I of V) {
        const ce = w(I);
        if (ce) {
          g(ce);
          continue;
        }
        const xe = `${I.name}-${I.size}-${Date.now()}-${Math.random()}`;
        x((ie) => h ? [...ie, { key: xe, file: I }] : [{ key: xe, file: I }]);
      }
    },
    [h, w]
  ), A = O(
    (K) => {
      K.preventDefault(), K.stopPropagation(), e.disabled || f(!0);
    },
    [e.disabled]
  ), L = O((K) => {
    K.preventDefault(), K.stopPropagation(), f(!1);
  }, []), P = O(
    (K) => {
      if (K.preventDefault(), K.stopPropagation(), f(!1), e.disabled) return;
      const V = Array.from(K.dataTransfer.files);
      V.length > 0 && C(V);
    },
    [e.disabled, C]
  ), T = O(
    (K) => {
      const V = Array.from(K.target.files ?? []);
      V.length > 0 && C(V), d.current && (d.current.value = "");
    },
    [C]
  ), R = O(() => {
    e.disabled || d.current?.click();
  }, [e.disabled]), N = O(
    (K) => {
      (K.key === "Enter" || K.key === " ") && (K.preventDefault(), R());
    },
    [R]
  ), M = O(
    (K, V) => {
      if (x(
        (I) => I.map((ce) => ce.key === K ? { ...ce, value: V } : ce)
      ), h) {
        const I = Array.isArray(t.value) ? t.value : [];
        t.onChange([...I, V]);
      } else
        t.onChange(V);
    },
    [h, t]
  ), H = O(
    (K) => {
      const V = m.find((I) => I.key === K);
      if (x((I) => I.filter((ce) => ce.key !== K)), V?.value)
        if (h) {
          const I = Array.isArray(t.value) ? t.value : [];
          t.onChange(I.filter((ce) => ce !== V.value));
        } else
          t.onChange(void 0);
      else h || t.onChange(void 0);
      t.onBlur();
    },
    [m, h, t]
  ), X = O((K, V) => {
    x(
      (I) => I.map(
        (ce) => ce.key === K ? { ...ce, error: V } : ce
      )
    );
  }, []), te = u ? b.dropzoneActive : e.description ?? (h ? b.dropzoneMultiple : b.dropzone), se = !!(n || S || r === "error"), q = se || r === "warning" || r === "info", fe = Qp({
    isDragOver: u,
    hasCriticalStatus: se,
    statusType: r
  });
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    v && /* @__PURE__ */ D(
      "div",
      {
        role: "button",
        tabIndex: e.disabled ? -1 : 0,
        onDragOver: A,
        onDragLeave: L,
        onDrop: P,
        onClick: R,
        onKeyDown: N,
        "aria-disabled": e.disabled,
        className: W(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          fe,
          !e.disabled && !u && !q && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          e.disabled && "cursor-not-allowed opacity-50",
          Zr("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ c(Me, { icon: la, size: "lg" }) }),
          /* @__PURE__ */ D("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ c("span", { className: "text-center text-base text-f1-foreground-secondary", children: te }),
            !u && _ && /* @__PURE__ */ c("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: b.acceptedTypes.replace(
              "{{types}}",
              _
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "input",
      {
        ref: d,
        id: l,
        type: "file",
        accept: k,
        multiple: h,
        onChange: T,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    S && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-critical", children: S }),
    m.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: m.map((K) => /* @__PURE__ */ c(
      qp,
      {
        entry: K,
        useUpload: K.file ? e.useUpload : void 0,
        onUploadComplete: (V) => M(K.key, V),
        onRemove: () => H(K.key),
        onError: (V) => X(K.key, V),
        disabled: e.disabled,
        translations: {
          remove: b.remove,
          uploading: b.uploading,
          processing: b.processing,
          uploadFailed: b.uploadFailed
        }
      },
      K.key
    )) })
  ] });
}
function Kp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    So,
    {
      ...t,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      step: e.step,
      min: e.min,
      max: e.max,
      locale: e.locale ?? "en-US",
      value: t.value != null ? Number(t.value) : void 0,
      onChange: (a) => t.onChange(a),
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      clearable: e.clearable
    }
  );
}
function Xp({
  field: e,
  formField: t,
  error: n,
  loading: r
}) {
  const s = t.value;
  return /* @__PURE__ */ c(
    Su,
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
function Yp({
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
    size: an,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    gn,
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
    gn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    gn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  );
}
function Jp({
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
    size: an,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    gn,
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
    gn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    gn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  );
}
function eg(e) {
  const { field: t } = e;
  return "source" in t && t.source !== void 0 && t.mapOptions !== void 0 ? /* @__PURE__ */ c(
    Jp,
    {
      ...e,
      field: t
    }
  ) : "options" in t && t.options !== void 0 ? /* @__PURE__ */ c(
    Yp,
    {
      ...e,
      field: t
    }
  ) : null;
}
function tg(e) {
  const t = rt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function ng({
  field: e,
  formField: t
}) {
  const n = e.validation && tg(e.validation);
  return /* @__PURE__ */ c(
    ko,
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
const rg = {
  email: "name@example.com"
}, sg = {
  url: ca,
  email: Td
};
function ag({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = e.inputType ?? "text", i = e.placeholder ?? rg[a] ?? void 0, o = sg[a];
  return /* @__PURE__ */ c(
    oa,
    {
      ...t,
      label: e.label,
      type: a,
      placeholder: i,
      disabled: e.disabled,
      value: t.value != null ? String(t.value) : "",
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      icon: o,
      clearable: e.clearable
    }
  );
}
function ig({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    ku,
    {
      ...t,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      rows: e.rows,
      maxLength: e.maxLength,
      value: t.value != null ? String(t.value) : "",
      size: an,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function Xs({
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
  const d = !!n.error, { isValidating: u } = n, f = Ba(e.disabled, i) || s || !!l, h = {
    error: d,
    loading: u || !!l
  }, m = d ? { type: "error" } : r ? { type: r.type } : void 0;
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ c(
        ag,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "number":
      return /* @__PURE__ */ c(
        Kp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "duration":
      return /* @__PURE__ */ c(
        zp,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: d,
          status: m
        }
      );
    case "textarea":
      return /* @__PURE__ */ c(
        ig,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "select":
      return /* @__PURE__ */ c(
        eg,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "checkbox":
      return /* @__PURE__ */ c(
        Ip,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "switch":
      return /* @__PURE__ */ c(
        ng,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "date":
      return /* @__PURE__ */ c(
        xc,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: mn(e.minDate, i),
            maxDate: mn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "time":
      return /* @__PURE__ */ c(
        wc,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: mn(e.minDate, i),
            maxDate: mn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "datetime":
      return /* @__PURE__ */ c(
        Bp,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: mn(e.minDate, i),
            maxDate: mn(e.maxDate, i)
          },
          formField: t,
          ...h,
          status: m
        }
      );
    case "daterange":
      return /* @__PURE__ */ c(
        $p,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h,
          status: m
        }
      );
    case "richtext":
      return /* @__PURE__ */ c(
        Xp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...h
        }
      );
    case "file":
      return /* @__PURE__ */ c(
        Gp,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: d,
          statusType: m?.type,
          initialFiles: o
        }
      );
    case "custom":
      return /* @__PURE__ */ c(
        Op,
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
function Ys(e) {
  return Ae(e, "ZodOptional") || Ae(e, "ZodNullable") || Ae(e, "ZodDefault") && Ys(e._def.innerType);
}
const og = /* @__PURE__ */ new Set([
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
function $i(e) {
  const t = rt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : og.has(r.kind)) : !1;
}
const lg = /* @__PURE__ */ new Set([
  "select",
  "date",
  "time",
  "datetime",
  "daterange",
  "file"
]);
function is(e, t) {
  if (Ys(e))
    return !1;
  const n = rt(e);
  if (Ae(n, "ZodString"))
    return t && lg.has(t) ? !0 : $i(e);
  if (Ae(n, "ZodObject")) {
    const r = n._def.shape();
    if (r && "value" in r) {
      if (Ys(r.value))
        return !1;
      if (Ae(rt(r.value), "ZodString"))
        return $i(r.value);
    }
  }
  return !0;
}
function cg(e) {
  return e != null && typeof e == "object" && "_type" in e && e._type === "select-config";
}
function dg({
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
    if (cg(l)) {
      const d = { ...e, ...l, type: "select" };
      return Xs({
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
    return /* @__PURE__ */ c(Ge, { children: l });
  }
  return Xs({
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
function os({ field: e, sectionId: t }) {
  const n = nn(), r = n.watch(), { isSubmitting: s } = n.formState, {
    formName: a,
    isLoading: i,
    renderCustomField: o
  } = ja(), { forms: l } = Ne(), d = Ba(e.disabled, r), u = Q(d);
  oe(() => {
    const g = u.current;
    if (u.current = d, !g && d && e.resetOnDisable) {
      const b = n.formState.defaultValues?.[e.id];
      n.setValue(e.id, b, { shouldValidate: !1 });
    }
  }, [d, e.resetOnDisable, e.id, n]);
  const f = !e.renderIf || ss(e.renderIf, r), h = e.type !== "checkbox" && e.type !== "custom", m = e.type !== "custom", x = e.validation && is(e.validation, e.type), S = cn(a, t, e.id);
  return f ? /* @__PURE__ */ c(
    js,
    {
      control: n.control,
      name: e.id,
      render: ({ field: g, fieldState: b }) => /* @__PURE__ */ D(La, { id: S, className: "scroll-mt-4", children: [
        h && /* @__PURE__ */ D(
          "label",
          {
            htmlFor: e.id,
            className: "text-base font-medium leading-normal text-f1-foreground-secondary",
            children: [
              e.label,
              x && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ c(oc, { children: dg({
          field: e,
          formField: g,
          fieldState: b,
          isSubmitting: s,
          isRequired: x,
          values: r,
          isFormLoading: i,
          renderCustomField: o
        }) }),
        e.helpText && /* @__PURE__ */ c(lc, { children: e.helpText }),
        "moreInfoLink" in e && e.moreInfoLink && /* @__PURE__ */ c(
          Ad,
          {
            href: e.moreInfoLink.href,
            target: "_blank",
            variant: "link",
            children: e.moreInfoLink.label ?? l.moreInformation
          }
        ),
        (() => {
          if (!e.alert) return null;
          const p = typeof e.alert == "function" ? e.alert({ fieldValue: g.value, values: r }) : e.alert;
          return p ? /* @__PURE__ */ c(_o, { ...p, variant: p.variant ?? "info" }) : null;
        })(),
        m && !b.error && /* @__PURE__ */ c(ia, { status: e.status }),
        m && /* @__PURE__ */ c(
          ns,
          {
            fallback: x ? l.validation.required : l.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ c(
    js,
    {
      control: n.control,
      name: e.id,
      render: () => /* @__PURE__ */ c("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function Ss(e) {
  const t = rt(e);
  if (!Ae(t, "ZodDate"))
    return {};
  const n = t._def.checks || [];
  let r, s;
  for (const a of n)
    a.kind === "min" ? r = new Date(a.value) : a.kind === "max" && (s = new Date(a.value));
  return { minDate: r, maxDate: s };
}
function ug(e) {
  const t = rt(e);
  if (!Ae(t, "ZodNumber"))
    return {};
  const n = t._def.checks || [];
  let r, s;
  for (const a of n)
    a.kind === "min" ? r = a.value : a.kind === "max" && (s = a.value);
  return { min: r, max: s };
}
function fg(e) {
  const t = rt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "email") : !1;
}
function hg(e) {
  const t = rt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "url") : !1;
}
function zi(e) {
  return fg(e) ? "email" : hg(e) ? "url" : "text";
}
function mg(e) {
  const t = rt(e);
  if (!Ae(t, "ZodString"))
    return {};
  const n = t._def.checks || [];
  let r;
  for (const s of n)
    s.kind === "max" && (r = s.value);
  return { maxLength: r };
}
function Zi(e, t, n, r) {
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
  }, a = !is(t, r);
  switch (r) {
    case "text": {
      const i = "inputType" in n && n.inputType ? n.inputType : zi(t);
      return {
        ...s,
        type: "text",
        inputType: i,
        clearable: a,
        renderIf: n.renderIf
      };
    }
    case "number": {
      const { min: i, max: o } = ug(t);
      return {
        ...s,
        type: "number",
        step: "step" in n ? n.step : void 0,
        min: i,
        max: o,
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
      const { maxLength: i } = mg(t);
      return {
        ...s,
        type: "textarea",
        rows: "rows" in n ? n.rows : void 0,
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
        renderIf: n.renderIf
      };
    case "date": {
      const i = Ss(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
      const i = Ss(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
      const i = Ss(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
        inputType: zi(t),
        renderIf: n.renderIf
      };
  }
}
function jr(e) {
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
          (l) => Zi(l.id, l.schema, l.config, l.fieldType)
        )
      };
      t.push(o);
    } else {
      n.add(r);
      const i = Zi(
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
function Sc(e) {
  const t = e.shape, n = [], r = Object.entries(t);
  for (let s = 0; s < r.length; s++) {
    const [a, i] = r[s], o = sn(i);
    if (o) {
      const l = pc(i, o);
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
function kc(e, t) {
  return z(() => {
    const n = rn(e), r = Sc(n), s = [], a = {};
    for (const l of r) {
      const d = l.config.section;
      d ? (a[d] || (a[d] = []), a[d].push(l)) : s.push(l);
    }
    s.sort((l, d) => l.position - d.position);
    for (const l of Object.keys(a))
      a[l].sort((d, u) => d.position - u.position);
    const i = [];
    i.push(...jr(s));
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
          fields: jr(u)
        }
      };
      i.push(f);
    }
    return i;
  }, [e, t]);
}
function $y(e, t) {
  const n = rn(e), r = Sc(n), s = [], a = {};
  for (const l of r) {
    const d = l.config.section;
    d ? (a[d] || (a[d] = []), a[d].push(l)) : s.push(l);
  }
  s.sort((l, d) => l.position - d.position);
  for (const l of Object.keys(a))
    a[l].sort((d, u) => d.position - u.position);
  const i = [];
  i.push(...jr(s));
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
        fields: jr(u)
      }
    };
    i.push(f);
  }
  return i;
}
function _c(e) {
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
function $a({ row: e, sectionId: t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `flex xs:flex-row flex-col items-start ${Va} [&>*]:flex-1`,
      children: e.fields.map((n) => /* @__PURE__ */ c(os, { field: n, sectionId: t }, n.id))
    }
  );
}
function qi(e) {
  const t = rt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function za({
  fields: e,
  sectionId: t
}) {
  const n = nn(), { formName: r } = ja(), { watch: s, setValue: a } = n, { isSubmitting: i } = n.formState, o = s(), l = z(
    () => e.filter(
      (p) => !p.renderIf || ss(p.renderIf, o)
    ),
    [e, o]
  ), d = z(
    () => Object.fromEntries(
      l.map((p) => [
        p.id,
        Ba(p.disabled, o) || i
      ])
    ),
    [l, i, o]
  ), u = Q({});
  oe(() => {
    const p = u.current, v = n.formState.defaultValues ?? {};
    for (const k of l) {
      if (!(k.id in p))
        continue;
      const _ = p[k.id], w = d[k.id] ?? !1;
      if (!_ && w && k.resetOnDisable) {
        const C = v[k.id] ?? !1;
        a(k.id, C, { shouldValidate: !1 });
      }
    }
    u.current = { ...d };
  }, [d, l, n, a]);
  const f = z(
    () => l.map((p) => ({
      value: p.id,
      title: p.label,
      description: p.helpText,
      disabled: d[p.id] ?? !1,
      required: !!(p.validation && qi(p.validation)),
      moreInfoLink: p.moreInfoLink
    })),
    [l, d]
  ), h = z(
    () => l.filter((p) => o[p.id]).map((p) => p.id),
    [l, o]
  );
  if (l.length === 0)
    return null;
  const m = (p) => {
    for (const v of l) {
      const k = p.includes(v.id), _ = !!o[v.id];
      k !== _ && a(v.id, k, {
        shouldValidate: !0,
        shouldDirty: !0
      });
    }
  }, x = z(() => {
    const p = [];
    for (const v of l) {
      if (!v.alert) continue;
      const k = typeof v.alert == "function" ? v.alert({ fieldValue: o[v.id], values: o }) : v.alert;
      k && p.push({ fieldId: v.id, props: k });
    }
    return p;
  }, [l, o]), { forms: S } = Ne(), g = l.filter((p) => p.validation && qi(p.validation)).map((p) => {
    const v = n.formState.errors[p.id];
    return v ? { fieldId: p.id, label: p.label, message: v.message } : null;
  }).filter(
    (p) => p !== null
  ), b = z(
    () => l.map((p) => ({
      fieldId: p.id,
      anchorId: cn(r, t, p.id)
    })),
    [l, r, t]
  );
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ D(
      "div",
      {
        id: b[0]?.anchorId,
        className: "flex scroll-mt-4 flex-col gap-4",
        children: [
          b.slice(1).map(({ fieldId: p, anchorId: v }) => /* @__PURE__ */ c("span", { id: v, className: "hidden" }, p)),
          /* @__PURE__ */ c(
            _u,
            {
              multiple: !0,
              isToggle: !0,
              grouped: !0,
              items: f,
              value: h,
              onChange: m
            }
          ),
          x.map(({ fieldId: p, props: v }) => /* @__PURE__ */ c(_o, { ...v, variant: v.variant ?? "info" }, p))
        ]
      }
    ),
    g.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: g.map((p) => /* @__PURE__ */ c(
      js,
      {
        control: n.control,
        name: p.fieldId,
        render: () => /* @__PURE__ */ c(La, { children: /* @__PURE__ */ c(ns, { fallback: S.validation.required }) })
      },
      p.fieldId
    )) })
  ] });
}
const pg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function gg(e) {
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
function vg(e) {
  const t = [];
  let n = [];
  const r = () => {
    n.length > 0 && (t.push({ type: "switchGroup", fields: [...n] }), n = []);
  };
  return e.forEach((s, a) => {
    s.type === "field" && s.field.type === "switch" ? n.push(s.field) : (r(), s.type === "field" ? t.push({ type: "field", item: s }) : s.type === "row" && t.push({ type: "row", item: s, index: a }));
  }), r(), t;
}
function Cc({
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
  isLoading: h
}) {
  const m = Ne(), x = kc(n), S = i?.label ?? "Submit", g = i?.icon === null ? void 0 : i?.icon ?? Co, b = i?.showSubmitWhenDirty ?? !1, p = i?.hideSubmitButton ?? !1, v = z(() => _c(m), [m]), k = pg[o], _ = z(
    () => gc(n, { errorMap: v }),
    [n, v]
  ), w = tc({
    resolver: _,
    mode: k,
    defaultValues: s
  }), C = Q(h);
  oe(() => {
    C.current && !h && s && w.reset(s), C.current = h;
  }, [h, s, w]);
  const A = w.formState.errors.root, { isSubmitting: L, isDirty: P } = w.formState, T = Object.keys(w.formState.errors).filter((se) => se !== "root").length > 0, R = Q(null), N = O(
    async (se) => {
      const q = { ...se };
      for (const K of Object.keys(q))
        q[K] === null && (q[K] = void 0);
      const fe = await a(q);
      fe.success ? w.reset(se) : (fe.errors && Object.entries(fe.errors).forEach(([K, V]) => {
        w.setError(K, { message: V });
      }), fe.rootMessage && w.setError("root", { message: fe.rootMessage }));
    },
    [a, w]
  );
  oe(() => {
    if (u) {
      const se = {
        submit: () => new Promise((q, fe) => {
          w.handleSubmit(
            async (K) => {
              await N(K), q();
            },
            () => {
              fe(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => w.reset(),
        isDirty: () => w.formState.isDirty,
        getValues: () => w.getValues(),
        setValue: (q, fe, K) => {
          w.setValue(
            q,
            fe,
            {
              shouldValidate: K?.shouldValidate ?? !0,
              shouldDirty: K?.shouldDirty ?? !0
            }
          );
        },
        setValues: (q, fe) => {
          for (const [K, V] of Object.entries(q))
            w.setValue(
              K,
              V,
              {
                shouldValidate: !1,
                shouldDirty: fe?.shouldDirty ?? !0
              }
            );
          fe?.shouldValidate !== !1 && w.trigger();
        },
        trigger: async (q) => q ? w.trigger(q) : w.trigger(),
        getErrors: () => gg(w.formState.errors),
        getFieldNames: () => Object.keys(w.getValues()),
        _setStateCallback: (q) => {
          R.current = q;
        }
      };
      u.current = se;
    }
    return () => {
      u && (u.current = null);
    };
  }, [u, w, N]), oe(() => {
    R.current && R.current({ isSubmitting: L, hasErrors: T });
  }, [L, T]);
  const M = vg(x), H = z(
    () => ({
      formName: e,
      initialFiles: d,
      renderCustomField: f,
      isLoading: h
    }),
    [e, d, f, h]
  ), X = r?.title ?? t, te = r?.description;
  return /* @__PURE__ */ c(as.Provider, { value: H, children: /* @__PURE__ */ c(sc, { ...w, children: /* @__PURE__ */ D(
    "form",
    {
      onSubmit: w.handleSubmit(N),
      className: W("flex flex-col", l),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: W(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ c(Zo, { title: X, description: te ?? "" }),
              r?.action && /* @__PURE__ */ c(
                Pe,
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
        /* @__PURE__ */ c("div", { className: `flex flex-col ${Va}`, children: M.map((se, q) => {
          switch (se.type) {
            case "switchGroup":
              return /* @__PURE__ */ c(
                za,
                {
                  fields: se.fields,
                  sectionId: t
                },
                `switch-group-${q}`
              );
            case "field":
              return /* @__PURE__ */ c(
                os,
                {
                  field: se.item.field,
                  sectionId: t
                },
                se.item.field.id
              );
            case "row":
              return /* @__PURE__ */ c(
                $a,
                {
                  row: se.item,
                  sectionId: t
                },
                `row-${se.index}`
              );
            default:
              return null;
          }
        }) }),
        A && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: A.message }),
        !p && (!b || P) && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Pe,
          {
            type: "submit",
            label: S,
            icon: g,
            loading: L,
            disabled: T || h
          }
        ) })
      ]
    }
  ) }) });
}
function bg(e) {
  const t = [];
  let n = [];
  const r = () => {
    n.length > 0 && (t.push({ type: "switchGroup", fields: [...n] }), n = []);
  };
  return e.forEach((s, a) => {
    s.type === "field" && s.field.type === "switch" ? n.push(s.field) : (r(), s.type === "field" ? t.push({ type: "field", item: s }) : s.type === "row" && t.push({ type: "row", item: s, index: a }));
  }), r(), t;
}
function yg({ section: e }) {
  const n = nn().watch(), { formName: r } = ja(), { title: s, description: a, withInset: i, renderIf: o, action: l, fields: d } = e.section, u = e.id;
  if (o && !ss(o, n))
    return null;
  const f = bg(d), h = cn(r, u);
  return /* @__PURE__ */ D("section", { id: h, className: "flex scroll-mt-4 flex-col", children: [
    /* @__PURE__ */ D(
      "div",
      {
        className: W(
          "flex items-start justify-between py-5",
          i && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ c(Zo, { title: s, description: a ?? "" }),
          l && /* @__PURE__ */ c(
            Pe,
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
    /* @__PURE__ */ c("div", { className: `flex flex-col ${Va}`, children: f.map((m, x) => m.type === "switchGroup" ? /* @__PURE__ */ c(
      za,
      {
        fields: m.fields,
        sectionId: u
      },
      `switch-group-${x}`
    ) : m.type === "field" ? /* @__PURE__ */ c(
      os,
      {
        field: m.item.field,
        sectionId: u
      },
      m.item.field.id
    ) : m.type === "row" ? /* @__PURE__ */ c(
      $a,
      {
        row: m.item,
        sectionId: u
      },
      `row-${m.index}`
    ) : null) })
  ] });
}
const xg = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), wg = {
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
}, Sg = (e) => ({
  ...wg,
  ...e
}), kg = (e) => {
  const t = Sg(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function Nc(e, t, n, r) {
  r?.errorMessages && n && (e.errorMessage = {
    ...e.errorMessage,
    [t]: n
  });
}
function Fe(e, t, n, r, s) {
  e[t] = n, Nc(e, t, r, s);
}
const Dc = (e, t) => {
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
    $ref: e.$refStrategy === "relative" ? Dc(t, e.currentPath) : t.join("/")
  };
}
function _g(e, t) {
  const n = {
    type: "array"
  };
  return e.type?._def && e.type?._def?.typeName !== Z.ZodAny && (n.items = _e(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && Fe(n, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && Fe(n, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (Fe(n, "minItems", e.exactLength.value, e.exactLength.message, t), Fe(n, "maxItems", e.exactLength.value, e.exactLength.message, t)), n;
}
function Cg(e, t) {
  const n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? Fe(n, "minimum", r.value, r.message, t) : Fe(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), Fe(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? Fe(n, "maximum", r.value, r.message, t) : Fe(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), Fe(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        Fe(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function Ng() {
  return {
    type: "boolean"
  };
}
function Fc(e, t) {
  return _e(e.type._def, t);
}
const Dg = (e, t) => _e(e.innerType._def, t);
function Tc(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((s, a) => Tc(e, t, s))
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
      return Fg(e, t);
  }
}
const Fg = (e, t) => {
  const n = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        Fe(
          n,
          "minimum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
      case "max":
        Fe(
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
function Tg(e, t) {
  return {
    ..._e(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Ag(e, t) {
  return t.effectStrategy === "input" ? _e(e.schema._def, t) : ut(t);
}
function Eg(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const Rg = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Ig(e, t) {
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
    if (Rg(a))
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
function Og(e, t) {
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
let ks;
const Ct = {
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
  emoji: () => (ks === void 0 && (ks = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), ks),
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
function Ac(e, t) {
  const n = {
    type: "string"
  };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          Fe(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t);
          break;
        case "max":
          Fe(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Nt(n, "email", r.message, t);
              break;
            case "format:idn-email":
              Nt(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              Je(n, Ct.email, r.message, t);
              break;
          }
          break;
        case "url":
          Nt(n, "uri", r.message, t);
          break;
        case "uuid":
          Nt(n, "uuid", r.message, t);
          break;
        case "regex":
          Je(n, r.regex, r.message, t);
          break;
        case "cuid":
          Je(n, Ct.cuid, r.message, t);
          break;
        case "cuid2":
          Je(n, Ct.cuid2, r.message, t);
          break;
        case "startsWith":
          Je(n, RegExp(`^${_s(r.value, t)}`), r.message, t);
          break;
        case "endsWith":
          Je(n, RegExp(`${_s(r.value, t)}$`), r.message, t);
          break;
        case "datetime":
          Nt(n, "date-time", r.message, t);
          break;
        case "date":
          Nt(n, "date", r.message, t);
          break;
        case "time":
          Nt(n, "time", r.message, t);
          break;
        case "duration":
          Nt(n, "duration", r.message, t);
          break;
        case "length":
          Fe(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t), Fe(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "includes": {
          Je(n, RegExp(_s(r.value, t)), r.message, t);
          break;
        }
        case "ip": {
          r.version !== "v6" && Nt(n, "ipv4", r.message, t), r.version !== "v4" && Nt(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          Je(n, Ct.base64url, r.message, t);
          break;
        case "jwt":
          Je(n, Ct.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && Je(n, Ct.ipv4Cidr, r.message, t), r.version !== "v4" && Je(n, Ct.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          Je(n, Ct.emoji(), r.message, t);
          break;
        case "ulid": {
          Je(n, Ct.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Nt(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              Fe(n, "contentEncoding", "base64", r.message, t);
              break;
            }
            case "pattern:zod": {
              Je(n, Ct.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Je(n, Ct.nanoid, r.message, t);
      }
  return n;
}
function _s(e, t) {
  return t.patternStrategy === "escape" ? Mg(e) : e;
}
const Lg = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Mg(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Lg.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function Nt(e, t, n, r) {
  e.format || e.anyOf?.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...n && r.errorMessages && { errorMessage: { format: n } }
  })) : Fe(e, "format", t, n, r);
}
function Je(e, t, n, r) {
  e.pattern || e.allOf?.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: Ui(t, r),
    ...n && r.errorMessages && { errorMessage: { pattern: n } }
  })) : Fe(e, "pattern", Ui(t, r), n, r);
}
function Ui(e, t) {
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
function Ec(e, t) {
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
    const { type: r, ...s } = Ac(e.keyType._def, t);
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
      const { type: r, ...s } = Fc(e.keyType._def, t);
      return {
        ...n,
        propertyNames: s
      };
    }
  }
  return n;
}
function Pg(e, t) {
  if (t.mapStrategy === "record")
    return Ec(e, t);
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
function Bg(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(r.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Vg(e) {
  return e.target === "openAi" ? void 0 : {
    not: ut({
      ...e,
      currentPath: [...e.currentPath, "not"]
    })
  };
}
function jg(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const $r = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function $g(e, t) {
  if (t.target === "openApi3")
    return Wi(e, t);
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every((r) => r._def.typeName in $r && (!r._def.checks || !r._def.checks.length))) {
    const r = n.reduce((s, a) => {
      const i = $r[a._def.typeName];
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
  return Wi(e, t);
}
const Wi = (e, t) => {
  const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((r, s) => _e(r._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
  return n.length ? { anyOf: n } : void 0;
};
function zg(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: $r[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        $r[e.innerType._def.typeName],
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
function Zg(e, t) {
  const n = {
    type: "number"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        n.type = "integer", Nc(n, "type", r.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? Fe(n, "minimum", r.value, r.message, t) : Fe(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), Fe(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? Fe(n, "maximum", r.value, r.message, t) : Fe(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), Fe(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        Fe(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function qg(e, t) {
  const n = t.target === "openAi", r = {
    type: "object",
    properties: {}
  }, s = [], a = e.shape();
  for (const o in a) {
    let l = a[o];
    if (l === void 0 || l._def === void 0)
      continue;
    let d = Wg(l);
    d && n && (l._def.typeName === "ZodOptional" && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), d = !1);
    const u = _e(l._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", o],
      propertyPath: [...t.currentPath, "properties", o]
    });
    u !== void 0 && (r.properties[o] = u, d || s.push(o));
  }
  s.length && (r.required = s);
  const i = Ug(e, t);
  return i !== void 0 && (r.additionalProperties = i), r;
}
function Ug(e, t) {
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
function Wg(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const Qg = (e, t) => {
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
}, Hg = (e, t) => {
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
function Gg(e, t) {
  return _e(e.type._def, t);
}
function Kg(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: _e(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && Fe(r, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && Fe(r, "maxItems", e.maxSize.value, e.maxSize.message, t), r;
}
function Xg(e, t) {
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
function Yg(e) {
  return {
    not: ut(e)
  };
}
function Jg(e) {
  return ut(e);
}
const ev = (e, t) => _e(e.innerType._def, t), tv = (e, t, n) => {
  switch (t) {
    case Z.ZodString:
      return Ac(e, n);
    case Z.ZodNumber:
      return Zg(e, n);
    case Z.ZodObject:
      return qg(e, n);
    case Z.ZodBigInt:
      return Cg(e, n);
    case Z.ZodBoolean:
      return Ng();
    case Z.ZodDate:
      return Tc(e, n);
    case Z.ZodUndefined:
      return Yg(n);
    case Z.ZodNull:
      return jg(n);
    case Z.ZodArray:
      return _g(e, n);
    case Z.ZodUnion:
    case Z.ZodDiscriminatedUnion:
      return $g(e, n);
    case Z.ZodIntersection:
      return Ig(e, n);
    case Z.ZodTuple:
      return Xg(e, n);
    case Z.ZodRecord:
      return Ec(e, n);
    case Z.ZodLiteral:
      return Og(e, n);
    case Z.ZodEnum:
      return Eg(e);
    case Z.ZodNativeEnum:
      return Bg(e);
    case Z.ZodNullable:
      return zg(e, n);
    case Z.ZodOptional:
      return Qg(e, n);
    case Z.ZodMap:
      return Pg(e, n);
    case Z.ZodSet:
      return Kg(e, n);
    case Z.ZodLazy:
      return () => e.getter()._def;
    case Z.ZodPromise:
      return Gg(e, n);
    case Z.ZodNaN:
    case Z.ZodNever:
      return Vg(n);
    case Z.ZodEffects:
      return Ag(e, n);
    case Z.ZodAny:
      return ut(n);
    case Z.ZodUnknown:
      return Jg(n);
    case Z.ZodDefault:
      return Tg(e, n);
    case Z.ZodBranded:
      return Fc(e, n);
    case Z.ZodReadonly:
      return ev(e, n);
    case Z.ZodCatch:
      return Dg(e, n);
    case Z.ZodPipeline:
      return Hg(e, n);
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
    if (o !== xg)
      return o;
  }
  if (r && !n) {
    const o = nv(r, t);
    if (o !== void 0)
      return o;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = tv(e, e.typeName, t), i = typeof a == "function" ? _e(a(), t) : a;
  if (i && rv(e, t, i), t.postProcess) {
    const o = t.postProcess(i, e, t);
    return s.jsonSchema = i, o;
  }
  return s.jsonSchema = i, i;
}
const nv = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: Dc(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), ut(t)) : t.$refStrategy === "seen" ? ut(t) : void 0;
  }
}, rv = (e, t, n) => (e.description && (n.description = e.description, t.markdownDescription && (n.markdownDescription = e.description)), n), Qi = (e, t) => {
  const n = kg(t);
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
function ls() {
  const [e, t] = ee(!1), [n, r] = ee(!1), s = Q((g) => {
    t(g.isSubmitting), r(g.hasErrors);
  }), a = Q(null), i = Q({
    get current() {
      return a.current;
    },
    set current(g) {
      a.current = g, g && g._setStateCallback(s.current);
    }
  }), o = O(async () => {
    if (!a.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    return a.current.submit();
  }, []), l = O(() => {
    if (!a.current) {
      console.warn("useF0Form: formRef is not attached to an F0Form component");
      return;
    }
    a.current.reset();
  }, []), d = O(() => a.current ? a.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), u = O(() => a.current ? a.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), f = O(
    (g, b, p) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValue(g, b, p);
    },
    []
  ), h = O(
    (g, b) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValues(g, b);
    },
    []
  ), m = O(async (g) => a.current ? a.current.trigger(g) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), x = O(() => a.current ? a.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), S = O(() => a.current ? a.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
  return {
    formRef: i.current,
    submit: o,
    reset: l,
    isDirty: d,
    getValues: u,
    setValue: f,
    setValues: h,
    trigger: m,
    getErrors: x,
    getFieldNames: S,
    isSubmitting: e,
    hasErrors: n
  };
}
const Rc = Et(null);
function sv() {
  const e = nt(Rc);
  if (!e)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return e;
}
function av({ children: e, ...t }) {
  return /* @__PURE__ */ c(Rc.Provider, { value: t, children: e });
}
const iv = tn({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function ov(e, t, n) {
  return e === t ? "active" : n ? "completed" : "upcoming";
}
function lv({ state: e, index: t }) {
  return e === "completed" ? /* @__PURE__ */ c("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ c(St, { className: "h-3 w-3" }) }) : /* @__PURE__ */ c(
    Ed,
    {
      value: t + 1,
      type: e === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function cv() {
  const { steps: e, currentStep: t, goToStep: n, allowStepSkipping: r } = sv();
  return /* @__PURE__ */ c("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: e.map((s, a) => {
    const i = a < t || s.isCompleted?.() === !0, o = ov(a, t, i), l = e[t]?.hasErrors?.() === !0, d = a > t && e.slice(t, a).some((m) => m.hasErrors?.() === !0);
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
        className: W(
          Zr(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          o === "active" && "bg-f1-background-selected",
          u && "hover:bg-f1-background-secondary-hover",
          !u && a !== t && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ c(lv, { state: o, index: a }),
          /* @__PURE__ */ c("span", { className: iv({ state: o }), children: s.title })
        ]
      },
      a
    );
  }) });
}
function dv({
  steps: e,
  defaultStepIndex: t = 0,
  onSubmit: n,
  onStepChanged: r,
  allowStepSkipping: s = !1,
  autoCloseOnLastStepSubmit: a = !1,
  onClose: i
}) {
  const [o, l] = ee(t), [d, u] = ee(!1), f = Q(e);
  f.current = e;
  const h = O(
    (g) => {
      l(g), r?.(g);
    },
    [r]
  ), m = O(
    async (g) => {
      if (!(g < 0 || g >= f.current.length || f.current[o]?.hasErrors?.() === !0 || !s && g > o + 1 || g > o && f.current.slice(o, g).some((v) => v.hasErrors?.() === !0) || !f.current.slice(0, g).every((p) => p.isCompleted?.() !== !1))) {
        if (g > o) {
          u(!0);
          try {
            for (let p = o; p < g; p++) {
              const v = f.current[p];
              v?.onNext && await v.onNext();
            }
            h(g);
          } catch {
          } finally {
            u(!1);
          }
          return;
        }
        h(g);
      }
    },
    [h, o, s]
  ), x = O(async () => {
    const g = f.current[o];
    if (g) {
      u(!0);
      try {
        g.onNext && await g.onNext(), o === f.current.length - 1 ? (n && await n(), a && i?.()) : h(o + 1);
      } catch {
      } finally {
        u(!1);
      }
    }
  }, [o, n, h, a, i]), S = O(() => {
    o > 0 && h(o - 1);
  }, [o, h]);
  return {
    currentStep: o,
    loading: d,
    goToStep: m,
    goNext: x,
    goPrevious: S
  };
}
const uv = () => {
}, Za = ({
  steps: e,
  children: t,
  isOpen: n,
  onClose: r = uv,
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
  autoSkipCompletedSteps: x = !1
}) => {
  const S = z(() => {
    if (i !== void 0) return i;
    if (!x) return 0;
    const L = e.findIndex(
      (P) => P.isCompleted?.() !== !0
    );
    return L === -1 ? e.length - 1 : L;
  }, [i, x, e]), g = dv({
    steps: e,
    defaultStepIndex: S,
    onSubmit: u,
    onStepChanged: f,
    allowStepSkipping: h,
    autoCloseOnLastStepSubmit: m,
    onClose: r
  }), b = Ne(), p = e[g.currentStep], v = g.currentStep === 0, k = g.currentStep === e.length - 1, _ = k ? p?.nextLabel ?? d ?? b.wizard.submit : p?.nextLabel ?? o ?? b.wizard.next, w = p?.previousLabel ?? l ?? b.wizard.previous, C = z(
    () => ({
      label: _,
      icon: k ? void 0 : Is,
      onClick: () => {
        g.goNext();
      },
      disabled: p?.isCompleted?.() === !1 || p?.hasErrors?.() === !0,
      loading: g.loading
    }),
    [_, k, g, p]
  ), A = z(
    () => v ? void 0 : {
      label: w,
      icon: No,
      onClick: g.goPrevious,
      disabled: g.loading
    },
    [v, w, g]
  );
  return /* @__PURE__ */ c(
    Rd,
    {
      isOpen: n,
      onClose: r,
      width: a,
      title: s,
      primaryAction: C,
      secondaryAction: A,
      disableContentPadding: !0,
      children: /* @__PURE__ */ c(
        av,
        {
          currentStep: g.currentStep,
          totalSteps: e.length,
          loading: g.loading,
          goToStep: g.goToStep,
          goNext: g.goNext,
          goPrevious: g.goPrevious,
          steps: e,
          allowStepSkipping: h,
          children: /* @__PURE__ */ D("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ c("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ c(cv, {}) }),
            /* @__PURE__ */ c("div", { className: "flex-1 overflow-y-auto px-8", children: t({
              currentStep: g.currentStep,
              goToStep: g.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
Za.displayName = "F0Wizard";
function Ic(e) {
  const n = rn(e).shape, r = Object.entries(n);
  return r.length === 0 ? !1 : r.every(([, s]) => sn(s)?.disabled === !0);
}
function fv(e, t) {
  if (t) return Object.keys(t);
  const r = rn(e).shape, s = /* @__PURE__ */ new Set();
  for (const a of Object.values(r)) {
    const i = sn(a);
    i?.section && s.add(i.section);
  }
  return Array.from(s);
}
function Cs(e, t) {
  const n = e.shape, r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = sn(a);
    i?.section && t.includes(i.section) && (r[s] = a);
  }
  return Pa(r);
}
function Oc(e, t, n) {
  const r = t ?? {};
  if (n) return n({ data: r });
  const a = rn(e).shape;
  return Object.entries(a).every(([i, o]) => {
    if (o.isOptional()) return !0;
    const l = r[i];
    return l != null && l !== "";
  });
}
const hv = 3e3;
function Lc() {
  const { forms: e } = Ne(), [t, n] = ee("idle"), [r, s] = ee(), a = Q(null);
  oe(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const i = O((d) => {
    a.current && (clearTimeout(a.current), a.current = null), s(d), n("success"), a.current = setTimeout(() => {
      n("idle"), s(void 0), a.current = null;
    }, hv);
  }, []), o = t === "success" ? r ?? e.actionBar.saved : void 0, l = z(
    () => /* @__PURE__ */ c(
      Os,
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
function Mc(e, t, n, r, s, a, i) {
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
function Mn(e, t, n) {
  if (n)
    return n[e]?.sectionIds ?? [];
  const r = t[e];
  return r ? [r] : [];
}
function mv({
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
  renderCustomField: x
}) {
  const {
    name: S,
    schema: g,
    sections: b,
    defaultValues: p,
    onSubmit: v,
    submitConfig: k,
    errorTriggerMode: _ = "on-blur"
  } = e, w = k?.label, C = z(() => Object.keys(g), [g]), A = z(() => t ? t.some(
    (Y) => Y.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), t.flatMap(
    (Y) => Y.sectionIds.map((de) => ({
      title: b?.[de]?.title ?? Y.title,
      sectionIds: [de],
      nextLabel: Y.nextLabel,
      previousLabel: Y.previousLabel
    }))
  )) : t : void 0, [t, b]), L = Q({}), P = Q(i ?? 0), T = z(
    () => Object.fromEntries(C.map((le) => [le, null])),
    [C]
  ), [R, N] = ee({}), M = Q(R);
  M.current = R;
  const H = O(
    (le) => le.every((Y) => {
      const de = g[Y];
      return de ? Ic(de) : !1;
    }),
    [g]
  ), X = O(
    (le) => async () => {
      const Y = Mn(le, C, A);
      for (const de of Y) {
        const De = T[de];
        De && await De.submit();
      }
    },
    [C, A, T]
  ), te = O(
    (le) => Mn(le, C, A).some((de) => M.current[de] === !0),
    [C, A]
  ), se = z(
    () => A ?? C.map((le) => ({
      title: b?.[le]?.title ?? le,
      sectionIds: [le]
    })),
    [A, C, b]
  ), q = O(
    (le) => {
      if (!m) return !1;
      const Y = se[le];
      return Y ? Y.sectionIds.every((de) => {
        const De = g[de];
        if (!De) return !1;
        const Te = p?.[de] ?? L.current[de];
        return Oc(De, Te, Y.isCompleted);
      }) : !1;
    },
    [m, se, g, p]
  ), fe = z(() => {
    if (i !== void 0) return i;
    if (!m) return;
    const le = se.findIndex(
      (Y, de) => !q(de)
    );
    return le === -1 ? se.length - 1 : le;
  }, [i, m, se, q]), K = z(
    () => Mc(
      C,
      b,
      A,
      H,
      X,
      te,
      m ? q : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      C,
      b,
      A,
      H,
      X,
      te,
      R,
      m,
      q
    ]
  ), V = Q(null), { showSuccess: I, ActionBar: ce } = Lc(), xe = O(
    (le) => async (Y) => {
      L.current[le] = Y;
      const de = await v({
        sectionId: le,
        data: Y,
        fullData: { ...L.current }
      });
      return V.current = de, de.success && de.message && I(de.message), de;
    },
    [v, I]
  ), ie = O(() => {
    if (V.current?.success) {
      if (h) {
        const Y = h({
          fullData: { ...L.current }
        });
        window.location.href = Y;
        return;
      }
      f && r?.();
    }
  }, [f, h, r]), pe = O(() => {
    const le = Mn(
      P.current,
      C,
      A
    );
    for (const Y of le) {
      const de = T[Y];
      de && (L.current[Y] = de.getValues());
    }
  }, [C, A, T]), be = O(
    (le) => {
      pe(), P.current = le, d?.(le);
    },
    [pe, d]
  );
  return /* @__PURE__ */ c(
    Za,
    {
      steps: K,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: fe,
      nextLabel: o,
      previousLabel: l,
      submitLabel: w,
      onSubmit: ie,
      onStepChanged: be,
      allowStepSkipping: u,
      children: ({ currentStep: le }) => {
        const Y = Mn(
          le,
          C,
          A
        );
        return /* @__PURE__ */ D(Ge, { children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 pb-5", children: Y.map((de) => {
            const De = g[de];
            if (!De) return null;
            const Te = b?.[de], Le = L.current[de], Xe = p?.[de];
            return /* @__PURE__ */ c(
              pv,
              {
                sectionId: de,
                formName: S,
                schema: De,
                sectionConfig: Te,
                defaultValues: Le ?? Xe,
                onSubmit: xe(de),
                submitConfig: k,
                errorTriggerMode: _,
                sectionForms: T,
                onErrorStateChange: (ft) => {
                  N((y) => y[de] === ft ? y : { ...y, [de]: ft });
                },
                renderCustomField: x,
                isLoading: e.isLoading
              },
              de
            );
          }) }),
          ce
        ] });
      }
    }
  );
}
function pv({
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
  const h = ls();
  oe(() => (l[e] = h, () => {
    l[e] = null;
  }), [l, e, h]);
  const m = Q(d);
  return m.current = d, oe(() => {
    m.current(h.hasErrors);
  }, [h.hasErrors]), /* @__PURE__ */ c(
    Cc,
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
function gv({
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
  renderCustomField: x
}) {
  const {
    name: S,
    schema: g,
    sections: b,
    defaultValues: p,
    onSubmit: v,
    submitConfig: k,
    errorTriggerMode: _ = "on-blur"
  } = e, w = k?.label, C = z(() => rn(g), [g]), A = z(
    () => fv(g, b),
    [g, b]
  ), L = O(
    (ie) => {
      const pe = Cs(C, ie);
      return Ic(pe);
    },
    [C]
  ), P = ls(), T = Q(
    p ? { ...p } : {}
  ), R = Q(i ?? 0), N = O(
    (ie) => async () => {
      await P.submit();
    },
    [P]
  ), M = O(
    (ie) => P.hasErrors,
    [P.hasErrors]
  ), H = z(
    () => t ?? A.map((ie) => ({
      title: b?.[ie]?.title ?? ie,
      sectionIds: [ie]
    })),
    [t, A, b]
  ), X = O(
    (ie) => {
      if (!m) return !1;
      const pe = H[ie];
      if (!pe) return !1;
      const be = Cs(
        C,
        pe.sectionIds
      );
      return Oc(be, p, pe.isCompleted);
    },
    [m, H, C, p]
  ), te = z(() => {
    if (i !== void 0) return i;
    if (!m) return;
    const ie = H.findIndex(
      (pe, be) => !X(be)
    );
    return ie === -1 ? H.length - 1 : ie;
  }, [i, m, H, X]), se = z(
    () => Mc(
      A,
      b,
      t,
      L,
      N,
      M,
      m ? X : void 0
    ),
    [
      A,
      b,
      t,
      L,
      N,
      M,
      m,
      X
    ]
  ), q = Q(null), fe = Q(null), { showSuccess: K, ActionBar: V } = Lc(), I = O(
    async (ie) => {
      Object.assign(T.current, ie);
      const pe = { ...T.current };
      fe.current = pe;
      const be = await v({ data: pe });
      return q.current = be, be;
    },
    [v]
  ), ce = O(() => {
    const ie = q.current;
    if (ie?.success) {
      if (K(ie.message), h) {
        const pe = h({
          fullData: fe.current
        });
        window.location.href = pe;
        return;
      }
      f && r?.();
    }
  }, [f, h, r, K]), xe = O(
    (ie) => {
      const pe = P.getValues();
      Object.assign(T.current, pe), R.current = ie, d?.(ie);
    },
    [P, d]
  );
  return /* @__PURE__ */ c(
    Za,
    {
      steps: se,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: te,
      nextLabel: o,
      previousLabel: l,
      submitLabel: w,
      onSubmit: ce,
      onStepChanged: xe,
      allowStepSkipping: u,
      children: ({ currentStep: ie }) => {
        const pe = Mn(
          ie,
          A,
          t
        ), be = Cs(
          C,
          pe
        ), le = pe.reduce((Y, de) => (b?.[de] && (Y[de] = b[de]), Y), {});
        return /* @__PURE__ */ D(Ge, { children: [
          /* @__PURE__ */ c("div", { className: "pb-5", children: /* @__PURE__ */ c(
            cs,
            {
              name: `${S}-step-${ie}`,
              schema: be,
              sections: le,
              defaultValues: T.current,
              onSubmit: I,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: _,
              formRef: P.formRef,
              renderCustomField: x,
              isLoading: e.isLoading
            },
            ie
          ) }),
          V
        ] });
      }
    }
  );
}
function Pc(e) {
  return e.formDefinition._brand === "per-section" ? /* @__PURE__ */ c(
    mv,
    {
      ...e
    }
  ) : /* @__PURE__ */ c(
    gv,
    {
      ...e
    }
  );
}
Pc.displayName = "F0WizardForm";
function vv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
function bv(e, t) {
  const n = typeof e == "function", [r, s] = ee(
    n ? void 0 : e
  ), [a, i] = ee(n), o = Q(e);
  return o.current = e, oe(() => {
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
function Bc(e) {
  const {
    name: t,
    schema: n,
    sections: r,
    defaultValues: s,
    onSubmit: a,
    submitConfig: i,
    errorTriggerMode: o,
    defaultValuesParamsSchema: l
  } = e, d = typeof s == "function" && l ? s : void 0, u = !!l, { resolved: f, isLoading: h } = bv(
    s,
    u
  );
  return z(() => {
    const m = vv(n) ? "single" : "per-section";
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
const yv = Ie(Pc), xv = cs;
function wv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const { formRef: r, submit: s, isSubmitting: a, hasErrors: i } = ls(), o = Bc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    submitConfig: { type: "default", hideSubmitButton: !0 },
    onSubmit: async ({ data: l }) => (await e.onSubmit?.(l), n(), { success: !0 })
  });
  return /* @__PURE__ */ c(
    Do,
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
      children: /* @__PURE__ */ c(xv, { formDefinition: o, formRef: r })
    }
  );
}
function Sv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const r = Bc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    onSubmit: async ({ data: s }) => (await e.onSubmit?.(s), { success: !0 })
  });
  return /* @__PURE__ */ c(
    yv,
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
function kv({
  presentedForm: e,
  onClose: t
}) {
  const { mode: n, definition: r, initialValues: s } = e, a = z(
    () => `${e.name}-${JSON.stringify(s)}`,
    [e.name, s]
  );
  return n === "wizard" ? /* @__PURE__ */ c(
    Sv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  ) : /* @__PURE__ */ c(
    wv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  );
}
function zy(e) {
  return e;
}
function Ns(e, t = {}) {
  return typeof e == "function" ? e(t) : e ?? {};
}
function Hi(e, t = {}, n) {
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
          const u = rt(e).shape?.[l];
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
        const l = rt(e);
        return Object.keys(l.shape ?? {});
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: a };
}
function _v(e) {
  const n = rt(e).shape;
  if (!n) return {};
  const r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = sn(a), o = a.description;
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
function Cv(e) {
  if (!e) return {};
  const t = {};
  for (const [n, r] of Object.entries(e))
    t[n] = {
      title: r.title,
      ...r.description && { description: r.description }
    };
  return t;
}
const Vc = Et(null);
function Zy({
  children: e,
  availableFormDefinitions: t
}) {
  const n = Q(/* @__PURE__ */ new Map()), r = Q(""), [s, a] = ee(
    null
  ), [i, o] = ee([]), l = O(() => {
    queueMicrotask(() => {
      const b = Array.from(n.current.entries());
      if (b.length === 0) {
        r.current !== "[]" && (r.current = "[]", o([]));
        return;
      }
      const p = b.map(([k, _]) => {
        const w = _.ref.current;
        return w ? {
          formName: k,
          formSchema: Qi(_.schema),
          fieldDescriptions: _v(_.schema),
          sectionDescriptions: Cv(_.sections),
          formValues: w.getValues(),
          formErrors: w.getErrors(),
          isDirty: w.isDirty(),
          ..._.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: Qi(
              _.defaultValuesParamsSchema
            )
          } : {}
        } : void 0;
      }).filter((k) => k !== null), v = JSON.stringify(p);
      v !== r.current && (r.current = v, o(p));
    });
  }, []), d = O(
    (b, p, v, k, _, w) => {
      n.current.set(b, {
        ref: p,
        schema: v,
        sections: k,
        defaultValuesParamsSchema: _,
        defaultValuesFn: w
      }), l();
    },
    [l]
  ), u = O(
    (b) => {
      if (n.current.get(b)?.virtual) return;
      n.current.delete(b);
      const v = t?.find((k) => k.name === b);
      if (v) {
        const { ref: k, dirtyFields: _ } = Hi(
          v.schema,
          Ns(v.defaultValues),
          v.onSubmit
        );
        n.current.set(b, {
          ref: k,
          schema: v.schema,
          sections: v.sections,
          virtual: !0,
          defaultValuesParamsSchema: v.defaultValuesParamsSchema,
          dirtyFields: _
        });
      }
      l();
    },
    [l, t]
  ), f = O((b) => n.current.get(b), []), h = O(() => Array.from(n.current.keys()), []), m = O(
    (b, p, v) => {
      const k = t?.find((L) => L.name === b);
      if (!k)
        return {
          success: !1,
          error: `Form "${b}" not found in availableFormDefinitions`
        };
      if (v && k.defaultValuesParamsSchema) {
        const L = k.defaultValuesParamsSchema.safeParse(v);
        if (!L.success)
          return {
            success: !1,
            error: `Invalid defaultValuesParams for form "${b}": ${L.error.issues.map((P) => P.message).join(", ")}`
          };
      }
      const _ = Ns(
        k.defaultValues,
        v ?? {}
      ), w = n.current.get(b), C = w?.ref.current;
      let A;
      if (v && w?.dirtyFields) {
        const L = C?.getValues() ?? {}, P = {};
        for (const T of w.dirtyFields)
          T in L && (P[T] = L[T]);
        A = { ..._, ...P };
      } else
        A = C?.getValues() ?? _;
      return a({
        name: b,
        mode: p,
        definition: k,
        initialValues: A
      }), { success: !0 };
    },
    [t]
  ), x = O(() => {
    a(null);
  }, []), S = Q(/* @__PURE__ */ new Set());
  oe(() => {
    const b = t ?? [], p = /* @__PURE__ */ new Set();
    for (const v of b) {
      p.add(v.name);
      const k = n.current.get(v.name);
      if (k && !k.virtual || k?.virtual) continue;
      const { ref: _, dirtyFields: w } = Hi(
        v.schema,
        Ns(v.defaultValues),
        v.onSubmit
      );
      n.current.set(v.name, {
        ref: _,
        schema: v.schema,
        sections: v.sections,
        virtual: !0,
        defaultValuesParamsSchema: v.defaultValuesParamsSchema,
        dirtyFields: w
      });
    }
    for (const v of S.current)
      p.has(v) || n.current.get(v)?.virtual && n.current.delete(v);
    return S.current = p, l(), () => {
      for (const v of p)
        n.current.get(v)?.virtual && n.current.delete(v);
      l();
    };
  }, [t, l]);
  const g = {
    register: d,
    unregister: u,
    get: f,
    getFormNames: h,
    rebuildDescriptions: l,
    formDescriptions: i,
    presentedForm: s,
    presentForm: m,
    dismissForm: x
  };
  return /* @__PURE__ */ D(Vc.Provider, { value: g, children: [
    e,
    s && /* @__PURE__ */ c(
      kv,
      {
        presentedForm: s,
        onClose: x
      }
    )
  ] });
}
function Nv() {
  return nt(Vc);
}
const Ds = "f0-form-error-navigate", Fs = /* @__PURE__ */ new WeakMap();
function Js(e, t) {
  if (typeof document > "u") return null;
  const n = cn(e, void 0, t), r = document.getElementById(n);
  if (r) return r;
  const s = `forms.${e}.`, a = `.${t}`;
  return document.querySelector(
    `[id^="${s}"][id$="${a}"]`
  );
}
const Dv = (e) => {
  const t = Fs.get(e);
  t && clearTimeout(t), e.classList.remove(Ds), e.offsetWidth, e.classList.add(Ds);
  const n = setTimeout(() => {
    e.classList.remove(Ds), Fs.delete(e);
  }, 600);
  Fs.set(e, n);
};
function Fv(e) {
  let t = e;
  for (; t && t.offsetParent === null && t.parentElement; )
    t = t.parentElement;
  return t ?? e;
}
function Gi(e, t, { highlight: n = !1 } = {}) {
  const r = Js(e, t);
  r && Tv(r, { highlight: n });
}
function Tv(e, { highlight: t = !1 } = {}) {
  const n = Fv(e);
  n.scrollIntoView({ behavior: "smooth", block: "center" });
  const r = n.querySelector("input, textarea, select, button");
  r instanceof HTMLElement && r.focus(), t && Dv(n);
}
function Av({
  formName: e,
  errors: t
}) {
  const n = Object.keys(t).filter((b) => b !== "root"), r = typeof document > "u" ? n : [...n].sort((b, p) => {
    const v = Js(e, b), k = Js(e, p);
    if (!v || !k) return 0;
    const _ = v.compareDocumentPosition(k);
    return _ & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : _ & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), s = r.length > 0, a = r.length, [i, o] = ee(null), l = i ? Math.max(0, r.indexOf(i)) : 0, d = Q(r);
  d.current = r;
  const u = Q(i);
  u.current = i;
  const f = O(() => {
    const b = u.current;
    if (!b) return 0;
    const p = d.current.indexOf(b);
    return p === -1 ? 0 : p;
  }, []), h = Q([]);
  oe(() => {
    const b = r, p = h.current, v = b.find(
      (k) => !p.includes(k)
    );
    v && (Gi(e, v, { highlight: !0 }), o(v)), h.current = b;
  }, [r, e]);
  const m = O(
    (b) => {
      const p = d.current;
      if (p.length === 0) return;
      const v = (b % p.length + p.length) % p.length, k = p[v];
      o(k), Gi(e, k, { highlight: !0 });
    },
    [e]
  ), x = O(() => {
    m(f() - 1);
  }, [f, m]), S = O(() => {
    m(f() + 1);
  }, [f, m]), g = O(() => {
    o(null), h.current = [];
  }, []);
  return {
    fieldErrors: r,
    hasErrors: s,
    errorCount: a,
    currentErrorIndex: l,
    goToPreviousError: x,
    goToNextError: S,
    resetErrorNavigation: g
  };
}
function Ev(e) {
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
function Rv(e) {
  const t = [];
  let n = [];
  const r = () => {
    n.length > 0 && (t.push({ type: "switchGroup", fields: [...n] }), n = []);
  };
  return e.forEach((s, a) => {
    s.type === "field" && s.field.type === "switch" ? n.push(s.field) : (r(), s.type === "field" ? t.push({ type: "field", item: s }) : s.type === "row" ? t.push({ type: "row", item: s, index: a }) : s.type === "section" && t.push({ type: "section", item: s }));
  }), r(), t;
}
function Iv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
const Ov = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function jc(e) {
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
    isLoading: h
  } = e, m = d?.showSectionsSidepanel ?? !1, x = z(() => Object.keys(n), [n]), S = O(
    (k) => {
      const _ = cn(t, k), w = document.getElementById(_);
      w && w.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [t]
  ), [g, b] = ee(
    x[0]
  ), p = z(() => !r || !m ? [] : x.map((k) => ({
    id: k,
    label: r[k]?.title ?? k,
    onClick: () => {
      b(k), S(k);
    }
  })), [r, x, m, S]), v = /* @__PURE__ */ c("div", { className: W("flex w-full flex-col", bc, o), children: x.map((k, _) => {
    const w = n[k], C = r?.[k], A = s?.[k], L = C?.submitConfig ?? i;
    return /* @__PURE__ */ c(
      "div",
      {
        id: cn(t, k),
        className: W("scroll-mt-4", _ !== 0 && vc),
        children: /* @__PURE__ */ c(
          Cc,
          {
            formName: t,
            sectionId: k,
            schema: w,
            sectionConfig: C,
            defaultValues: A,
            onSubmit: (P) => a(k, P),
            submitConfig: L,
            errorTriggerMode: l,
            initialFiles: u,
            renderCustomField: f,
            isLoading: h
          }
        )
      },
      k
    );
  }) });
  return m && p.length > 0 ? /* @__PURE__ */ D("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
      ba,
      {
        items: p,
        activeItem: g,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: v })
  ] }) : v;
}
function Lv(e) {
  return "formDefinition" in e && e.formDefinition != null;
}
function cs(e) {
  const t = e;
  if (Lv(t))
    return /* @__PURE__ */ c(Mv, { ...t });
  const n = t;
  return Iv(n.schema) ? /* @__PURE__ */ c(
    $c,
    {
      ...n
    }
  ) : /* @__PURE__ */ c(
    jc,
    {
      ...n
    }
  );
}
function Mv(e) {
  const {
    formDefinition: t,
    className: n,
    styling: r,
    formRef: s,
    initialFiles: a,
    renderCustomField: i
  } = e;
  return t.isLoading ? t._brand === "single" ? /* @__PURE__ */ c(
    Ki,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      isLoading: !0
    }
  ) : /* @__PURE__ */ c(
    Xi,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i,
      isLoading: !0
    }
  ) : t._brand === "single" ? /* @__PURE__ */ c(
    Ki,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i
    }
  ) : /* @__PURE__ */ c(
    Xi,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i
    }
  );
}
function Ki({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  isLoading: i
}) {
  const o = e, l = O(
    (d) => o.onSubmit({ data: d }),
    [o]
  );
  return /* @__PURE__ */ c(
    $c,
    {
      name: o.name,
      schema: o.schema,
      sections: o.sections,
      defaultValues: o.defaultValues,
      onSubmit: l,
      submitConfig: o.submitConfig,
      errorTriggerMode: o.errorTriggerMode,
      className: t,
      styling: n,
      formRef: r,
      initialFiles: s,
      renderCustomField: a,
      isLoading: i,
      defaultValuesParamsSchema: o.defaultValuesParamsSchema,
      defaultValuesFn: o.defaultValuesFn
    }
  );
}
function Xi({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  isLoading: i
}) {
  const o = e, l = Q(
    o.defaultValues ? { ...o.defaultValues } : {}
  ), d = O(
    (u, f) => (l.current[u] = f, o.onSubmit({
      sectionId: u,
      data: f,
      fullData: { ...l.current }
    })),
    [o]
  );
  return /* @__PURE__ */ c(
    jc,
    {
      name: o.name,
      schema: o.schema,
      sections: o.sections,
      defaultValues: o.defaultValues,
      onSubmit: d,
      submitConfig: o.submitConfig,
      errorTriggerMode: o.errorTriggerMode,
      className: t,
      styling: n,
      formRef: r,
      initialFiles: s,
      renderCustomField: a,
      isLoading: i
    }
  );
}
function $c(e) {
  const t = Ne(), { forms: n } = t, {
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
    defaultValuesParamsSchema: x,
    defaultValuesFn: S
  } = e, g = f?.showSectionsSidepanel ?? !1, b = l?.type === "action-bar", p = l?.label ?? "Submit", v = l?.icon === null ? void 0 : l?.icon ?? Co, k = l?.type !== "action-bar" && l?.hideSubmitButton, _ = l?.type !== "action-bar" && !!l?.hideActionBar, w = !b && !k, C = l?.type === "action-bar" && l?.discardable, A = b ? l?.discardConfig : void 0, L = A?.label ?? n.actionBar.discard, P = A?.icon === null ? void 0 : A?.icon ?? bn, T = b ? l?.actionBarLabel ?? n.actionBar.unsavedChanges : n.actionBar.unsavedChanges, R = l?.savingMessage ?? n.actionBar.saving, N = l?.successMessageDuration, M = kc(s, a), H = z(() => M.filter((ge) => ge.type === "section").map((ge) => ge.id), [M]), [X, te] = ee(
    H[0]
  ), se = O(
    (ge) => {
      te(ge);
      const Re = cn(r, ge), Oe = document.getElementById(Re);
      Oe && Oe.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [r]
  ), q = z(() => !a || !g ? [] : H.map((ge) => ({
    id: ge,
    label: a[ge]?.title ?? ge,
    onClick: () => se(ge)
  })), [a, H, g, se]), fe = z(() => _c(t), [t]), K = Ov[u], V = z(
    () => gc(s, { errorMap: fe }),
    [s, fe]
  ), I = tc({
    resolver: V,
    mode: K,
    defaultValues: i
  }), ce = Q(m);
  oe(() => {
    ce.current && !m && i && I.reset(i), ce.current = m;
  }, [m, i, I]);
  const xe = I.formState.errors.root, { isDirty: ie, isSubmitting: pe, errors: be } = I.formState, [le, Y] = ee("idle"), [de, De] = ee(), Te = Q(null), {
    hasErrors: Le,
    errorCount: Xe,
    goToPreviousError: it,
    goToNextError: ft,
    resetErrorNavigation: y
  } = Av({
    formName: r,
    errors: be
  }), F = (() => {
    if (!Le)
      return le === "loading" ? R : le === "success" ? de ?? n.actionBar.saved : T;
  })(), E = async (ge) => {
    Te.current && (clearTimeout(Te.current), Te.current = null), yu(() => {
      Y("loading");
    });
    const Re = { ...ge };
    for (const Ye of Object.keys(Re))
      Re[Ye] === null && (Re[Ye] = void 0);
    const Oe = await o(Re);
    Oe.success ? (I.reset(ge), y(), De(Oe.message), Y("success"), Te.current = setTimeout(() => {
      Y("idle"), De(void 0), Te.current = null;
    }, N ?? 2e3)) : (Y("idle"), Oe.errors && Object.entries(Oe.errors).forEach(([Ye, Rt]) => {
      I.setError(Ye, { message: Rt });
    }), Oe.rootMessage && I.setError("root", { message: Oe.rootMessage }));
  };
  oe(() => () => {
    Te.current && clearTimeout(Te.current);
  }, []);
  const U = () => {
    I.reset(), y(), Y("idle"), De(void 0), Te.current && (clearTimeout(Te.current), Te.current = null);
  }, $ = Q(null), B = Q(E);
  B.current = E;
  const ne = O(
    (ge) => ({
      submit: () => new Promise((Re, Oe) => {
        I.handleSubmit(
          async (Ye) => {
            await B.current(Ye), Re();
          },
          () => Oe(new Error("Form validation failed"))
        )();
      }),
      reset: () => {
        I.reset(), y();
      },
      isDirty: () => I.formState.isDirty,
      getValues: () => I.getValues(),
      setValue: (Re, Oe, Ye) => {
        I.setValue(
          Re,
          Oe,
          {
            shouldValidate: Ye?.shouldValidate ?? !0,
            shouldDirty: Ye?.shouldDirty ?? !0
          }
        );
      },
      setValues: (Re, Oe) => {
        for (const [Ye, Rt] of Object.entries(Re))
          I.setValue(Ye, Rt, {
            shouldValidate: !1,
            shouldDirty: Oe?.shouldDirty ?? !0
          });
        Oe?.shouldValidate !== !1 && I.trigger();
      },
      trigger: async (Re) => Re ? I.trigger(Re) : I.trigger(),
      getErrors: () => Ev(I.formState.errors),
      getFieldNames: () => Object.keys(I.getValues()),
      _setStateCallback: ge?.stateCallback ? (Re) => {
        $.current = Re;
      } : () => {
      }
    }),
    [I, y]
  );
  oe(() => (h && (h.current = ne({ stateCallback: !0 })), () => {
    h && (h.current = null);
  }), [h, ne]), oe(() => {
    $.current && $.current({
      isSubmitting: pe,
      hasErrors: Le
    });
  }, [pe, Le]);
  const he = Nv(), Ee = Q(null), ke = h ?? Ee;
  oe(() => {
    if (he)
      return h || (Ee.current = ne()), he.register(
        r,
        ke,
        s,
        a,
        x,
        S
      ), () => {
        he.unregister(r);
      };
  }, [
    he,
    r,
    s,
    a,
    h,
    ke,
    ne,
    x
  ]);
  const Qe = Rv(M), Bt = z(
    () => ({
      formName: r,
      initialFiles: e.initialFiles,
      renderCustomField: e.renderCustomField,
      isLoading: m
    }),
    [r, e.initialFiles, e.renderCustomField, m]
  ), Vt = /* @__PURE__ */ D(
    "form",
    {
      onSubmit: I.handleSubmit(E),
      className: W("flex flex-col", bc, d),
      children: [
        Qe.map((ge, Re) => {
          const Oe = Re !== 0 && ge.type !== "section" ? "mt-4" : "";
          switch (ge.type) {
            case "switchGroup":
              return /* @__PURE__ */ c("div", { className: Oe, children: /* @__PURE__ */ c(za, { fields: ge.fields }) }, `switch-group-${Re}`);
            case "field":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: W(Oe, "empty:hidden"),
                  children: /* @__PURE__ */ c(os, { field: ge.item.field })
                },
                ge.item.field.id
              );
            case "row":
              return /* @__PURE__ */ c("div", { className: Oe, children: /* @__PURE__ */ c($a, { row: ge.item }) }, `row-${ge.index}`);
            case "section":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Re !== 0 ? vc : "",
                  children: /* @__PURE__ */ c(yg, { section: ge.item })
                },
                ge.item.id
              );
            default:
              return null;
          }
        }),
        xe && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: xe.message }),
        !b && w && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          Pe,
          {
            type: "submit",
            label: p,
            icon: v,
            loading: pe,
            disabled: Le || m
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ c(as.Provider, { value: Bt, children: /* @__PURE__ */ D(sc, { ...I, children: [
    g && q.length > 0 ? /* @__PURE__ */ D("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
        ba,
        {
          items: q,
          activeItem: X,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: Vt })
    ] }) : Vt,
    !_ && /* @__PURE__ */ c(
      Hm,
      {
        isActionBar: b,
        isDirty: ie,
        actionBarStatus: le,
        hasErrors: Le,
        errorCount: Xe,
        resolvedActionBarLabel: F,
        submitLabel: p,
        submitIcon: v,
        discardableChanges: C,
        discardLabel: L,
        discardIcon: P,
        issuesOneLabel: n.actionBar.issues.one,
        issuesOtherLabel: n.actionBar.issues.other,
        onSubmit: I.handleSubmit(E),
        onDiscard: U,
        goToPreviousError: it,
        goToNextError: ft
      }
    )
  ] }) });
}
function qy(e) {
  const n = rn(e).shape, r = [];
  for (const [s, a] of Object.entries(n)) {
    const i = a, o = sn(i);
    if (!o) continue;
    const l = pc(i, o), d = is(i, l), u = {
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
const Uy = vt("F0Form", cs);
function et({
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
  const h = va(), m = l ?? (e.validation ? is(e.validation) : !1), x = !u && e.type !== "checkbox" && e.type !== "custom", S = {
    value: t,
    onChange: n,
    onBlur: r ?? (() => {
    }),
    name: e.id,
    ref: () => {
    }
  }, g = {
    error: s || i?.type === "error" ? {
      type: "custom",
      message: a ?? i?.message
    } : void 0,
    isValidating: !!o
  }, b = s ? { type: "error", message: a } : i, p = d !== void 0 ? { ...e, disabled: d } : e, v = e.type === "file" ? f : void 0;
  return /* @__PURE__ */ D("div", { className: "space-y-2", id: h, children: [
    x && /* @__PURE__ */ D(
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
    Xs({
      field: p,
      formField: S,
      fieldState: g,
      isSubmitting: !1,
      isRequired: m,
      values: {},
      initialFiles: v,
      fieldStatus: b
    }),
    e.helpText && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-secondary", children: e.helpText }),
    /* @__PURE__ */ c(ia, { status: b })
  ] });
}
et.displayName = "F0FormField";
const zc = st((e, t) => /* @__PURE__ */ c(ya, { ref: t, variant: "heading", ...e }));
zc.displayName = "F0Heading";
const Wy = Ie(zc), Pv = ({
  props: e
}) => {
  const { status: t, title: n, taskCount: r, completedCount: s, expanded: a, onExpandToggle: i } = e;
  return /* @__PURE__ */ D(Ge, { children: [
    /* @__PURE__ */ c(Fo, { icon: Id, size: "sm" }),
    /* @__PURE__ */ D("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ c(
        Od,
        {
          label: `${r} ${n}`,
          itemCount: void 0,
          open: a,
          onOpenChange: () => i(),
          showOpenChange: !0
        }
      ),
      s !== void 0 && /* @__PURE__ */ c(
        To,
        {
          text: `${s}/${r}`,
          variant: t === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, Bv = ({
  primaryAction: e,
  secondaryActions: t,
  otherActions: n
}) => {
  const r = t && t.length > 0, s = n && n.length > 0;
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    s && /* @__PURE__ */ c(na, { items: n, size: "md" }),
    t?.map((a, i) => /* @__PURE__ */ c(
      Pe,
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
      Pe,
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
}, Vv = ({ props: e }) => {
  const { metadata: t, primaryAction: n, secondaryActions: r, otherActions: s } = e, a = t?.some(Boolean), i = n || r && r.length > 0 || s && s.length > 0;
  return /* @__PURE__ */ D("div", { className: "pl-9", children: [
    t && a && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(qo, { items: t }) }),
    i && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(
      Bv,
      {
        primaryAction: n,
        secondaryActions: r,
        otherActions: s
      }
    ) })
  ] });
}, jv = ({ props: e }) => {
  const { status: t, icon: n = Ld, title: r, description: s, metadata: a } = e, i = a?.some(Boolean);
  return /* @__PURE__ */ D("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ D("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ c(Fo, { icon: n, size: "sm" }),
      /* @__PURE__ */ c(
        "h4",
        {
          className: W(
            "text-base font-semibold text-f1-foreground",
            t === "completed" && "line-through"
          ),
          children: r
        }
      ),
      s && /* @__PURE__ */ c(Go, { content: s, variant: "description" })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex justify-end items-center gap-3 pl-9", children: t === "completed" && a && i && /* @__PURE__ */ c(qo, { items: a }) })
  ] });
}, $v = ({ status: e }) => /* @__PURE__ */ c(
  "div",
  {
    "data-testid": "timeline-connector",
    className: W(
      "w-0.5 min-h-2 flex-1",
      e === "completed" && "bg-f1-icon-positive",
      e === "in-progress" && "bg-f1-border-secondary",
      e === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )
  }
), zv = {
  completed: /* @__PURE__ */ c(Me, { icon: qr, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ c(Me, { icon: Pd, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ c(Me, { icon: Md, size: "lg", color: "secondary" })
}, Zc = ({
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
        children: zv[e]
      }
    ),
    !t && /* @__PURE__ */ c($v, { status: e })
  ] }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: r })
] }), qc = ({ props: e }) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1 } = e;
  return /* @__PURE__ */ D(Zc, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(jv, { props: e }) }),
    t !== "completed" && /* @__PURE__ */ c(Vv, { props: e })
  ] });
}, Zv = ({
  props: e
}) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1, expanded: s, items: a } = e;
  return /* @__PURE__ */ D(Zc, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(Pv, { props: e }) }),
    s && /* @__PURE__ */ c("div", { className: "flex flex-col pl-4", children: a.map((i, o) => /* @__PURE__ */ c(
      qc,
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
}, qv = (e) => "items" in e, Uv = (e) => qv(e) ? /* @__PURE__ */ c(Zv, { props: e }) : /* @__PURE__ */ c(qc, { props: e }), Qy = [
  "completed",
  "in-progress",
  "not-started"
], Hy = Ie(
  vt("F0TimelineRow", Uv)
), Gy = Ie(Bd), Ky = Ie(
  vt(
    "F0GridStack",
    po
  )
), Ts = 16, Wv = tn({
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
function Uc(e, t = 0) {
  return e.flatMap((n) => [
    { id: n.id, depth: Math.min(t, 3) },
    ...n.children ? Uc(n.children, t + 1) : []
  ]);
}
function Qv(e, t) {
  const n = e.length;
  if (n <= Ts) return e;
  const r = n / (Ts - 1), s = new Set(
    Array.from(
      { length: Ts - 1 },
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
function Hv({
  items: e,
  activeItem: t,
  className: n,
  align: r = "left",
  variant: s = "dark"
}) {
  const a = z(
    () => Qv(Uc(e), t),
    [e, t]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: W(
        "flex flex-col justify-center gap-2 py-3",
        r === "right" ? "items-end" : "items-start",
        n
      ),
      children: a.map((i) => /* @__PURE__ */ c(
        "div",
        {
          className: Wv({
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
const As = "[role='menu']";
function Gv(e, t) {
  const n = Q(null), r = O(() => {
    n.current?.(), n.current = null;
  }, []);
  return oe(() => r, [r]), { deferClose: O(() => {
    if (!document.querySelector(As)) return !1;
    r();
    const a = () => {
      o.disconnect(), document.removeEventListener("pointermove", l), n.current = null;
    }, i = () => {
      a(), t();
    }, o = new MutationObserver(() => {
      document.querySelector(As) || i();
    });
    o.observe(document.body, { childList: !0, subtree: !0 });
    const l = (d) => {
      const u = d.target;
      !u.closest(As) && !e.current?.contains(u) && i();
    };
    return document.addEventListener("pointermove", l), n.current = a, !0;
  }, [e, t, r]) };
}
const Kv = 300, Xv = 0, Yv = tn({
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
function Wc({
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
  const [h, m] = ee(!1), x = Q(!1), S = Q(null), { deferClose: g } = Gv(S, () => m(!1)), b = (v) => {
    !v && g() || (v && !h && (x.current = !0), m(v));
  }, p = O((v) => {
    S.current = v, !(!v || !x.current) && (x.current = !1, requestAnimationFrame(() => {
      v.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ D(
    Vd,
    {
      open: h,
      onOpenChange: b,
      openDelay: Xv,
      closeDelay: Kv,
      children: [
        /* @__PURE__ */ c(jd, { asChild: !0, children: /* @__PURE__ */ c(
          "button",
          {
            className: W(
              Zr(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              n
            ),
            "aria-label": e ?? "Menu",
            children: /* @__PURE__ */ c(
              Hv,
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
          $d,
          {
            ref: p,
            side: l === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: f,
            className: W(
              Yv({ size: d }),
              !e && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ c(
              ba,
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
const Xy = Ie(
  vt(
    "F0TableOfContentPopover",
    Wc
  )
), Jv = Wn.create(zd), eb = () => {
  const e = Ne();
  return /* @__PURE__ */ D("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ c(
      Jv,
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
}, tb = zo(eb);
var nb = Yh();
const Yi = /* @__PURE__ */ Zd(nb), Qc = (e) => {
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
}, Hc = (e) => {
  if (!e || e.length === 0) return null;
  const t = e.length, n = e.every((r) => /^\d+$/.test(r.label.trim()));
  return t === 5 && n ? "1-5" : t === 10 && n ? "1-10" : t === 5 && !n ? "emojis" : null;
}, ea = (e) => {
  switch (e) {
    case "rating":
      return {
        value: 0,
        options: Qc("1-5")
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
}, fr = (e) => `new-${e}-${Date.now()}`, Ji = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], rb = (e) => {
  if (!e)
    return Ji[0];
  const t = Ji.find(
    (n) => e?.includes(n)
  );
  if (!t)
    throw new Error(
      `No default question type found for allowed question types: ${e.join(", ")}`
    );
  return t;
}, Gc = Et(void 0);
function Kc({
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
  const f = Q(e);
  f.current = e;
  const h = Q(a);
  h.current = a;
  const m = z(() => {
    const T = e[e.length - 1];
    if (T)
      return T.type === "section" ? T.section.id : T.question.id;
  }, [e]), x = O((T) => {
    const R = T.id, N = f.current.map((M) => {
      if (M.type === "question")
        return M.question.id === R ? {
          ...M,
          question: {
            ...M.question,
            ...T
          }
        } : M;
      if (M.type === "section") {
        const H = M.section.questions?.map(
          (X) => X.id === R ? {
            ...X,
            ...T
          } : X
        );
        return {
          ...M,
          section: {
            ...M.section,
            questions: H
          }
        };
      }
      return M;
    });
    h.current(N);
  }, []), S = O((T) => {
    const R = T.id, N = f.current.map((M) => M.type === "section" && M.section.id === R ? {
      ...M,
      section: {
        ...M.section,
        ...T
      }
    } : M);
    h.current(N);
  }, []), g = O(
    ({
      element: T,
      afterId: R
    }) => {
      const N = [...f.current];
      if (!R) {
        N.push(T), h.current(N);
        return;
      }
      ((H) => {
        N.forEach((X, te) => {
          X.type === "section" && X.section.id === H && N.splice(te + 1, 0, T), X.type === "question" && X.question.id === H && N.splice(te + 1, 0, T);
        });
      })(R), T.type === "question" && N.length === f.current.length && N.forEach((H, X) => {
        if (H.type !== "section")
          return;
        const te = [...H.section.questions ?? []];
        te?.forEach((se, q) => {
          se.id === R && te.splice(q + 1, 0, T.question);
        }), N.splice(X, 1, {
          ...H,
          section: {
            ...H.section,
            questions: te
          }
        });
      }), h.current(N);
    },
    []
  ), b = O(
    ({ type: T, afterId: R, datasetKey: N }) => {
      if ((T === "dropdown-single" || T === "dropdown-multi") && !N)
        throw new Error(`${T} questions require a datasetKey`);
      const M = fr(
        T === "section" ? "section" : "question"
      ), H = rb(i), X = T === "section" ? {
        type: "section",
        section: {
          id: M,
          title: "",
          questions: [
            {
              id: fr("question"),
              title: "",
              description: "",
              type: H,
              required: !0,
              ...ea(
                H
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: M,
          title: "",
          description: "",
          type: T,
          required: !0,
          ...ea(T),
          ...N ? { datasetKey: N } : {}
        }
      };
      g({ element: X, afterId: R });
    },
    [g, i]
  ), p = O(
    ({ elementId: T }) => {
      const N = Yi(
        f.current.map(
          (H) => H.type === "section" ? [H, ...H.section.questions ?? []] : [H.question]
        )
      ).find(
        (H) => H.type === "section" ? H.section.id === T : H.id === T
      );
      let M;
      N && (M = N.type === "section" ? {
        ...N,
        section: {
          ...N.section,
          id: fr("section")
        }
      } : {
        type: "question",
        question: { ...N, id: fr("question") }
      }), M && g({ element: M, afterId: T });
    },
    [g]
  ), v = O((T) => Yi(
    f.current.map(
      (N) => N.type === "question" ? [N.question] : N.section.questions
    )
  ).find((N) => N?.id === T), []), k = O((T) => {
    let R = f.current.filter((N) => N.type === "section" ? N.section.id !== T : N.type === "question" ? N.question.id !== T : !0);
    R.length === f.current.length && (R = R.map((N) => N.type === "section" ? {
      ...N,
      section: {
        ...N.section,
        questions: N.section.questions?.filter(
          (M) => M.id !== T
        )
      }
    } : N)), h.current(R);
  }, []), _ = O((T) => {
    const R = f.current.find((N) => N.type === "section" ? N.section.questions?.some(
      (M) => M.id === T
    ) : !1);
    return R?.type === "section" && R?.section.questions?.length === 1;
  }, []), w = O((T) => {
    const R = f.current.find((N) => N.type === "section" ? N.section.questions?.some(
      (M) => M.id === T
    ) : !1);
    return R?.type === "section" ? R.section : void 0;
  }, []), C = Q(!0), A = !e.length;
  oe(() => {
    if (C.current) {
      C.current = !1, A && !n && !r && b({
        type: "section"
      });
      return;
    }
  }, [A, b, n]);
  const L = O(
    (T) => T === "file" && !d ? !1 : !i || i.includes(T),
    [i, d]
  ), P = z(
    () => ({
      onQuestionChange: x,
      onSectionChange: S,
      onAddNewElement: b,
      onDuplicateElement: p,
      getIsSingleQuestionInSection: _,
      getSectionContainingQuestion: w,
      disabled: n,
      answering: r,
      getQuestionById: v,
      deleteElement: k,
      lastElementId: m,
      disallowOptionalQuestions: s,
      isQuestionTypeAllowed: L,
      errors: o,
      onFieldBlur: l,
      useUpload: d,
      datasets: u
    }),
    [
      x,
      S,
      b,
      p,
      _,
      w,
      n,
      r,
      v,
      k,
      m,
      s,
      L,
      o,
      l,
      d,
      u
    ]
  );
  return /* @__PURE__ */ c(Gc.Provider, { value: P, children: t });
}
function ze() {
  const e = nt(Gc);
  if (!e)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return e;
}
const Xc = Et(void 0);
function qa({ children: e }) {
  const [t, n] = ee(!1), [r, s] = ee(null);
  return /* @__PURE__ */ c(
    Xc.Provider,
    {
      value: { isDragging: t, setIsDragging: n, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function Fn() {
  const e = nt(Xc);
  return e || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const Ua = () => {
  const { isQuestionTypeAllowed: e, datasets: t } = ze(), { t: n } = Ne(), s = [
    {
      label: n("surveyFormBuilder.questionTypes.rating"),
      icon: Ao,
      questionType: "rating"
    },
    {
      label: n("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: dn,
      questionType: "multi-select"
    },
    {
      label: n("surveyFormBuilder.questionTypes.singleChoice"),
      icon: St,
      questionType: "select"
    },
    {
      label: n("surveyFormBuilder.questionTypes.text"),
      icon: Eo,
      questionType: "text"
    },
    {
      label: n("surveyFormBuilder.questionTypes.longText"),
      icon: Ro,
      questionType: "longText"
    },
    {
      label: n("surveyFormBuilder.questionTypes.numeric"),
      icon: wr,
      questionType: "numeric"
    },
    {
      label: n("surveyFormBuilder.questionTypes.link"),
      icon: ca,
      questionType: "link"
    },
    {
      label: n("surveyFormBuilder.questionTypes.date"),
      icon: Io,
      questionType: "date"
    },
    {
      label: n("surveyFormBuilder.questionTypes.file"),
      icon: la,
      questionType: "file"
    },
    {
      label: n("surveyFormBuilder.questionTypes.checkbox"),
      icon: qr,
      questionType: "checkbox"
    }
  ].filter(
    (i) => e(i.questionType)
  ), a = e("dropdown-single") ? Object.entries(t ?? {}).map(([i, o]) => ({
    label: o.title,
    icon: o.icon ?? xr,
    questionType: "dropdown-single",
    datasetKey: i
  })) : [];
  return [...s, ...a];
}, sb = {
  rating: Ao,
  "multi-select": dn,
  select: St,
  text: Eo,
  longText: Ro,
  numeric: wr,
  link: ca,
  date: Io,
  "dropdown-single": xr,
  "dropdown-multi": xr,
  file: la,
  checkbox: qr
}, ab = () => {
  const { disabled: e, answering: t, onAddNewElement: n, isQuestionTypeAllowed: r } = ze(), [s, a] = ee(!1), i = Ua(), { t: o } = Ne(), l = (h, m) => {
    n?.({ type: h, datasetKey: m });
  }, d = () => {
    n?.({ type: "section" });
  }, u = i.filter((h) => !h.datasetKey), f = Array.from(
    new Set(
      i.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  );
  return e || t ? null : /* @__PURE__ */ c("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ D(da, { open: s, onOpenChange: a, children: [
    /* @__PURE__ */ c(ua, { asChild: !0, children: /* @__PURE__ */ c(
      Pe,
      {
        icon: fa,
        label: o("surveyFormBuilder.actions.addQuestion"),
        size: "md",
        variant: "outline",
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ D(ha, { align: "center", className: "w-80", children: [
      /* @__PURE__ */ c(dt, { onClick: d, children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
        /* @__PURE__ */ c(Me, { icon: ma, color: "default" }),
        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: o("surveyFormBuilder.questionTypes.section") })
      ] }) }),
      /* @__PURE__ */ c(yn, {}),
      u.map((h) => /* @__PURE__ */ c(
        dt,
        {
          onClick: () => l(h.questionType),
          children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ c(Me, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: h.label })
          ] })
        },
        h.questionType
      )),
      f.length > 0 && /* @__PURE__ */ D(Ge, { children: [
        /* @__PURE__ */ c(yn, {}),
        f.map((h) => {
          const m = i.find(
            (x) => x.datasetKey === h && x.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ D(Pn, { children: [
            /* @__PURE__ */ c(Bn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(Me, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h })
            ] }) }),
            /* @__PURE__ */ c(Vn, { children: /* @__PURE__ */ D(jn, { children: [
              r("dropdown-single") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => l("dropdown-single", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(Me, { icon: St, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: o("surveyFormBuilder.labels.singleSelection") })
                  ] })
                }
              ),
              r("dropdown-multi") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => l("dropdown-multi", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(Me, { icon: dn, color: "default" }),
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
}, ib = ({
  open: e,
  onConfirm: t,
  onCancel: n
}) => {
  const { t: r } = Ne();
  return /* @__PURE__ */ c(
    Cu,
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
}, zr = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function ob(e, t) {
  if (e !== "rating" || !t || t.type !== "rating")
    return null;
  const n = t.options;
  return !Array.isArray(n) || n.length === 0 || typeof n[0]?.value != "number" ? null : Hc(n);
}
function lb(e, t, n) {
  return !(e === t || (e === "select" || e === "multi-select") && n && "options" in n && Array.isArray(n.options) && n.options.length > 0 || (e === "dropdown-single" || e === "dropdown-multi") && (t === "dropdown-single" || t === "dropdown-multi"));
}
function Yc() {
  const {
    onQuestionChange: e,
    getQuestionById: t,
    deleteElement: n,
    onDuplicateElement: r,
    disallowOptionalQuestions: s
  } = ze(), a = Ua();
  return { getActionsForQuestion: O(
    (o, l, d) => {
      const u = t(o), f = u && "datasetKey" in u && typeof u.datasetKey == "string" ? u.datasetKey : void 0, h = ob(l, u);
      return {
        question: u,
        questionTypes: a,
        currentRatingType: h,
        currentDatasetKey: f,
        isMultiSelectEnabled: l === "dropdown-multi" && !!f,
        disallowOptionalQuestions: s,
        canDelete: d,
        handleChangeRequired: (k) => {
          e?.({
            id: o,
            type: l,
            required: k
          });
        },
        handleSelectQuestionType: (k, _) => {
          const w = lb(
            k,
            l,
            u
          ), C = k === "dropdown-single" || k === "dropdown-multi", A = l === "dropdown-single" || l === "dropdown-multi";
          e?.({
            id: o,
            type: k,
            // Set datasetKey for dropdown types, clear it for non-dropdown types
            ...C ? { datasetKey: _ } : { datasetKey: void 0 },
            // Reset value when switching between single/multi or switching into
            // a dropdown type from a different type to avoid incompatible values
            ...C && A && k !== l || C && !A ? { value: k === "dropdown-multi" ? [] : null } : {},
            ...w && {
              ...ea(k)
            }
          });
        },
        handleSelectRatingType: (k) => {
          e?.({
            id: o,
            type: "rating",
            value: 0,
            options: Qc(k)
          });
        },
        handleToggleMultiSelect: (k) => {
          if (!f) return;
          e?.({
            id: o,
            type: k ? "dropdown-multi" : "dropdown-single",
            datasetKey: f,
            value: k ? [] : null
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
function cb({
  questionId: e,
  questionType: t,
  canDelete: n = !0
}) {
  const { getActionsForQuestion: r } = Yc();
  return z(
    () => r(e, t, n),
    [r, e, t, n]
  );
}
const eo = ({
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
        ko,
        {
          title: e,
          checked: n,
          onCheckedChange: r,
          hideLabel: !0
        }
      )
    ] })
  }
), db = ({
  label: e,
  value: t,
  currentDatasetKey: n,
  questionTypes: r,
  currentRatingType: s,
  isQuestionTypeAllowed: a,
  onSelectQuestionType: i,
  onSelectRatingType: o
}) => {
  const { t: l } = Ne(), d = r.filter((h) => !h.datasetKey), u = Array.from(
    new Set(
      r.filter((h) => !!h.datasetKey).map((h) => h.datasetKey)
    )
  ), f = n ? r.find(
    (h) => h.questionType === t && h.datasetKey === n
  )?.label ?? void 0 : r.find(
    (h) => h.questionType === t && !h.datasetKey
  )?.label ?? void 0;
  return /* @__PURE__ */ D(Pn, { children: [
    /* @__PURE__ */ c(Bn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ot, { icon: Lo, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: e }),
      !!f && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: f })
    ] }) }),
    /* @__PURE__ */ c(Vn, { children: /* @__PURE__ */ D(jn, { children: [
      d.map((h) => {
        const m = h.questionType === "rating", x = t === h.questionType && !n;
        return m ? /* @__PURE__ */ D(Pn, { children: [
          /* @__PURE__ */ c(Bn, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
            /* @__PURE__ */ c(ot, { icon: h.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
            s && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: zr.find(
              (S) => S.value === s
            )?.label })
          ] }) }),
          /* @__PURE__ */ c(Vn, { children: /* @__PURE__ */ c(jn, { children: zr.map((S) => /* @__PURE__ */ c(
            dt,
            {
              onClick: () => o(S.value),
              children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
                /* @__PURE__ */ c("span", { className: "flex-1", children: S.label }),
                s === S.value && /* @__PURE__ */ c(ot, { icon: St, color: "default" })
              ] })
            },
            S.value
          )) }) })
        ] }, h.questionType) : /* @__PURE__ */ c(
          dt,
          {
            onClick: () => i(h.questionType),
            children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              /* @__PURE__ */ c(ot, { icon: h.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1", children: h.label }),
              x && /* @__PURE__ */ c(ot, { icon: St, color: "default" })
            ] })
          },
          h.questionType
        );
      }),
      u.length > 0 && /* @__PURE__ */ D(Ge, { children: [
        /* @__PURE__ */ c(yn, {}),
        u.map((h) => {
          const m = r.find(
            (x) => x.datasetKey === h && x.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ D(Pn, { children: [
            /* @__PURE__ */ c(Bn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ c(ot, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: m?.label ?? h }),
              n === h && /* @__PURE__ */ c(ot, { icon: St, color: "default" })
            ] }) }),
            /* @__PURE__ */ c(Vn, { children: /* @__PURE__ */ D(jn, { children: [
              a("dropdown-single") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => i("dropdown-single", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ot, { icon: St, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.singleSelection") }),
                    n === h && t === "dropdown-single" && /* @__PURE__ */ c(ot, { icon: St, color: "default" })
                  ] })
                }
              ),
              a("dropdown-multi") && /* @__PURE__ */ c(
                dt,
                {
                  onClick: () => i("dropdown-multi", h),
                  children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ c(ot, { icon: dn, color: "default" }),
                    /* @__PURE__ */ c("span", { className: "flex-1", children: l("surveyFormBuilder.labels.multiSelection") }),
                    n === h && t === "dropdown-multi" && /* @__PURE__ */ c(ot, { icon: St, color: "default" })
                  ] })
                }
              )
            ] }) })
          ] }, h);
        })
      ] })
    ] }) })
  ] });
}, to = ({
  label: e,
  icon: t,
  onClick: n,
  critical: r
}) => /* @__PURE__ */ c(
  dt,
  {
    onClick: n,
    className: W(r ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(ot, { icon: t }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: e })
    ] })
  }
);
function ub({
  open: e,
  setOpen: t,
  questionId: n,
  questionType: r,
  canDeleteQuestion: s = !0
}) {
  const { t: a } = Ne(), { isQuestionTypeAllowed: i } = ze(), {
    question: o,
    questionTypes: l,
    currentRatingType: d,
    currentDatasetKey: u,
    isMultiSelectEnabled: f,
    disallowOptionalQuestions: h,
    handleChangeRequired: m,
    handleSelectQuestionType: x,
    handleSelectRatingType: S,
    handleToggleMultiSelect: g,
    handleDuplicate: b,
    handleDelete: p
  } = cb({
    questionId: n,
    questionType: r,
    canDelete: s
  });
  return /* @__PURE__ */ D(da, { open: e, onOpenChange: t, children: [
    /* @__PURE__ */ c(ua, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ c(
      Pe,
      {
        icon: br,
        label: a("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ D(ha, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ c(qd, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: a("surveyFormBuilder.labels.questionOptions") }),
      !h && /* @__PURE__ */ c(lr, { children: /* @__PURE__ */ c(
        eo,
        {
          label: a("surveyFormBuilder.labels.required"),
          icon: Oo,
          checked: !!o?.required,
          onChange: m
        }
      ) }),
      !!u && /* @__PURE__ */ c(lr, { children: /* @__PURE__ */ c(
        eo,
        {
          label: a("surveyFormBuilder.labels.allowMultiSelection"),
          icon: dn,
          checked: f,
          onChange: g
        }
      ) }),
      /* @__PURE__ */ c(lr, { children: /* @__PURE__ */ c(
        db,
        {
          label: a("surveyFormBuilder.labels.questionType"),
          value: r,
          currentDatasetKey: u,
          questionTypes: l,
          currentRatingType: d,
          isQuestionTypeAllowed: i,
          onSelectQuestionType: x,
          onSelectRatingType: S
        }
      ) }),
      /* @__PURE__ */ c(yn, {}),
      /* @__PURE__ */ D(lr, { children: [
        /* @__PURE__ */ c(
          to,
          {
            label: a("surveyFormBuilder.actions.duplicateQuestion"),
            icon: Sr,
            onClick: b
          }
        ),
        s && /* @__PURE__ */ c(
          to,
          {
            label: a("surveyFormBuilder.actions.deleteQuestion"),
            icon: bn,
            onClick: p,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
function un(e) {
  const { answering: t, getSectionContainingQuestion: n } = ze(), r = n(e.id), s = e.locked || r?.locked;
  return t ? !1 : s || !0;
}
const no = {
  fieldSizing: "content"
}, Be = ({
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
  } = ze(), x = h(e), S = x?.locked || a, g = !!x, [b, p] = ee(!1), [v, k] = ee(!1), { isDragging: _ } = Fn(), { t: w } = Ne(), C = (q) => {
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
  }, L = (q, fe) => {
    l?.({
      type: q,
      afterId: e,
      datasetKey: fe
    });
  }, P = () => {
    l?.({
      type: "section",
      afterId: e
    });
  }, T = Ua(), R = T.filter((q) => !q.datasetKey), N = Array.from(
    new Set(
      T.filter((q) => !!q.datasetKey).map((q) => q.datasetKey)
    )
  ), M = f(e), H = Q(null), X = Q(!M);
  oe(() => {
    X.current && H.current?.focus({ preventScroll: !0 });
  }, []);
  const te = d || S || u, se = !u && te;
  return /* @__PURE__ */ D(
    "div",
    {
      id: `co-creation-question-${e}`,
      className: W(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !_ && !u && "hover:border-f1-border-hover",
        !u || n ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ D("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ c("div", { className: "relative w-full", children: u ? /* @__PURE__ */ D("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              t || w("surveyFormBuilder.labels.titlePlaceholder"),
              s && /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ D(Ge, { children: [
              /* @__PURE__ */ c(
                "textarea",
                {
                  ref: H,
                  value: t,
                  "aria-label": w("surveyFormBuilder.labels.title"),
                  placeholder: w("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: C,
                  disabled: te,
                  className: W(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    se && "cursor-not-allowed"
                  ),
                  style: no
                }
              ),
              /* @__PURE__ */ D("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ c("span", { className: "opacity-0", children: t || w("surveyFormBuilder.labels.titlePlaceholder") }),
                s && /* @__PURE__ */ D(
                  "span",
                  {
                    className: W(
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
            !d && !u && !S && /* @__PURE__ */ c(
              "div",
              {
                className: W(
                  "opacity-0 group-hover/question:opacity-100",
                  v && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  ub,
                  {
                    open: v,
                    setOpen: k,
                    questionId: e,
                    questionType: i,
                    canDeleteQuestion: !g || !M
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
              className: W(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                se && "cursor-not-allowed"
              ),
              style: no
            }
          )
        ] }),
        r,
        u && /* @__PURE__ */ c(
          ns,
          {
            className: "-mt-2",
            fallback: w(s ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !d && !u && !x?.locked && /* @__PURE__ */ c(
          "div",
          {
            className: W(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              b && "opacity-100"
            ),
            children: /* @__PURE__ */ D(
              da,
              {
                open: b,
                onOpenChange: p,
                children: [
                  /* @__PURE__ */ c(ua, { asChild: !0, children: /* @__PURE__ */ c(
                    Pe,
                    {
                      icon: fa,
                      label: w("surveyFormBuilder.actions.addQuestion"),
                      size: "sm",
                      variant: "outline",
                      hideLabel: !0
                    }
                  ) }),
                  /* @__PURE__ */ D(ha, { align: "center", className: "w-80", children: [
                    !g && /* @__PURE__ */ D(Ge, { children: [
                      /* @__PURE__ */ c(dt, { onClick: P, children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                        /* @__PURE__ */ c(Me, { icon: ma, color: "default" }),
                        /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: w("surveyFormBuilder.questionTypes.section") })
                      ] }) }),
                      /* @__PURE__ */ c(yn, {})
                    ] }),
                    R.map((q) => /* @__PURE__ */ c(
                      dt,
                      {
                        onClick: () => L(q.questionType),
                        children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                          /* @__PURE__ */ c(Me, { icon: q.icon, color: "default" }),
                          /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: q.label })
                        ] })
                      },
                      q.questionType
                    )),
                    N.length > 0 && /* @__PURE__ */ D(Ge, { children: [
                      /* @__PURE__ */ c(yn, {}),
                      N.map((q) => {
                        const fe = T.find(
                          (K) => K.datasetKey === q && K.questionType === "dropdown-single"
                        );
                        return /* @__PURE__ */ D(Pn, { children: [
                          /* @__PURE__ */ c(Bn, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                            fe && /* @__PURE__ */ c(Me, { icon: fe.icon, color: "default" }),
                            /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: fe?.label ?? q })
                          ] }) }),
                          /* @__PURE__ */ c(Vn, { children: /* @__PURE__ */ D(jn, { children: [
                            m("dropdown-single") && /* @__PURE__ */ c(
                              dt,
                              {
                                onClick: () => L("dropdown-single", q),
                                children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(Me, { icon: St, color: "default" }),
                                  /* @__PURE__ */ c("span", { className: "flex-1", children: w(
                                    "surveyFormBuilder.labels.singleSelection"
                                  ) })
                                ] })
                              }
                            ),
                            m("dropdown-multi") && /* @__PURE__ */ c(
                              dt,
                              {
                                onClick: () => L("dropdown-multi", q),
                                children: /* @__PURE__ */ D("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ c(Me, { icon: dn, color: "default" }),
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
}, fb = {
  fieldSizing: "content"
}, hb = ({
  value: e,
  label: t,
  ...n
}) => {
  const { onQuestionChange: r, answering: s, disabled: a } = ze(), i = un(n), { t: o } = Ne();
  if (s)
    return /* @__PURE__ */ c(Be, { ...n, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
      Qn,
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
  return /* @__PURE__ */ c(Be, { ...n, children: /* @__PURE__ */ D("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ c(Qn, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
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
        className: W(
          "w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary",
          l && "cursor-not-allowed opacity-50"
        ),
        style: fb
      }
    )
  ] }) });
}, mb = ({
  value: e,
  ...t
}) => {
  const { onQuestionChange: n } = ze(), r = un(t), { t: s } = Ne(), a = {
    id: t.id,
    type: "date",
    label: s("surveyFormBuilder.answer.label"),
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Be, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    et,
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
}, pb = ({
  datasetKey: e,
  showSearchBox: t,
  searchBoxPlaceholder: n,
  ...r
}) => {
  const { onQuestionChange: s, answering: a, datasets: i } = ze(), o = un(r), { t: l } = Ne(), d = i?.[e];
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
  return /* @__PURE__ */ c(Be, { ...r, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
    et,
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
}, Jc = [
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
], gb = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
}), vb = ({
  value: e,
  useUpload: t,
  accept: n,
  maxSizeMB: r,
  ...s
}) => {
  const { onQuestionChange: a, useUpload: i } = ze(), o = un(s), { t: l } = Ne(), d = t ?? i, u = {
    id: s.id,
    type: "file",
    label: l("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: n ?? Jc,
    maxSizeMB: r,
    useUpload: d ?? gb
  };
  return /* @__PURE__ */ c(Be, { ...s, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    et,
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
}, bb = ({
  value: e,
  ...t
}) => {
  const { t: n } = Ne(), { onQuestionChange: r, answering: s } = ze(), a = un(t), i = n("surveyFormBuilder.answer.linkPlaceholder"), o = {
    id: t.id,
    type: "text",
    inputType: "url",
    label: n("surveyFormBuilder.answer.label"),
    placeholder: i,
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Be, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    et,
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
}, yb = ({
  value: e,
  ...t
}) => {
  const { t: n } = Ne(), { onQuestionChange: r, answering: s } = ze(), a = un(t), i = (l) => {
    r?.({
      ...t,
      type: "numeric",
      value: l
    });
  }, o = n("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ c(Be, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: s ? /* @__PURE__ */ c(
    So,
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
      icon: wr
    }
  ) : /* @__PURE__ */ c(
    oa,
    {
      type: "text",
      size: "md",
      value: o,
      onChange: () => {
      },
      disabled: !0,
      label: n("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: wr
    }
  ) }) });
}, xb = ({
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
      className: W(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        t && "border-f1-border-selected bg-f1-background-selected-secondary",
        s ? "cursor-default" : "cursor-pointer"
      ),
      onClick: u,
      children: a ? /* @__PURE__ */ D(ra, { open: l, onOpenChange: d, children: [
        /* @__PURE__ */ c(sa, { asChild: !0, children: /* @__PURE__ */ c(
          Pe,
          {
            emoji: o,
            label: i.toString(),
            variant: "ghost",
            hideLabel: !0
          }
        ) }),
        /* @__PURE__ */ c(
          aa,
          {
            side: "bottom",
            align: "center",
            className: "w-fit border-none bg-transparent p-2 shadow-none",
            onClick: (h) => {
              h.preventDefault(), h.stopPropagation();
            },
            children: /* @__PURE__ */ c(
              Nu,
              {
                data: Du,
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
}, wb = ({
  options: e,
  value: t,
  ...n
}) => {
  const { onQuestionChange: r, disabled: s, answering: a } = ze(), o = Hc(e) === "emojis", l = (u) => {
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
  return /* @__PURE__ */ c(Be, { ...n, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: e.map((u) => /* @__PURE__ */ c(
    xb,
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
}, Sb = (e) => /* @__PURE__ */ c(wb, { ...e, type: "rating" });
function kb({
  checked: e,
  disabled: t
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: W(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        e ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background",
        t && "opacity-50"
      ),
      children: e && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
const _b = {
  fieldSizing: "content"
}, Cb = ({
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
  const { value: f, label: h } = t, { isDragging: m, setIsDragging: x, setDraggedItemId: S, draggedItemId: g } = Fn(), { t: b } = Ne(), p = m && g === f, v = () => {
    !a && !i || n(f);
  }, k = (R) => {
    r({ value: f, index: e, action: R });
  }, _ = (R) => {
    R.stopPropagation(), k("mark-as-correct");
  }, w = (R) => {
    R.stopPropagation(), k("remove");
  }, C = (R) => {
    const N = R.target.value;
    s({ value: f, index: e, newLabel: N });
  }, A = () => {
    x(!0), S(f);
  }, L = () => {
    x(!1), S(null);
  }, P = m ? p : !a && !i, T = !a && !i && !d;
  return /* @__PURE__ */ c(
    Ur,
    {
      value: t,
      onDragStart: A,
      onDragEnd: L,
      dragListener: T,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ D(
        "div",
        {
          className: W(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (a || i) && "cursor-pointer",
            m && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: v,
          children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: W(
                  "block",
                  P ? "group-hover:hidden" : "cursor-default",
                  m && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: u === "multi-select" ? /* @__PURE__ */ c(
                  Qn,
                  {
                    title: h,
                    checked: i ? !!o : !1,
                    onCheckedChange: v,
                    disabled: !i,
                    presentational: !i,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ c(
                  kb,
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
                className: W(
                  "hidden scale-75 cursor-grab",
                  T && "active:cursor-grabbing",
                  P && "group-hover:block",
                  m && "cursor-grabbing",
                  !T && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ c(
                  "div",
                  {
                    className: W(
                      "flex aspect-square scale-90 items-center justify-center",
                      u === "multi-select" ? "w-6" : "w-5"
                    ),
                    children: /* @__PURE__ */ c(ot, { icon: tr, size: "sm" })
                  }
                )
              }
            ),
            !a && !i && !d ? /* @__PURE__ */ c(
              "textarea",
              {
                placeholder: b(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: h,
                onChange: C,
                className: "flex-1 resize-none font-medium",
                style: _b
              }
            ) : /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: h }),
            !a && !i && l && /* @__PURE__ */ c("span", { className: "text-sm font-medium text-f1-foreground-positive", children: b("surveyFormBuilder.selectQuestion.correct") }),
            !a && !i && !d ? /* @__PURE__ */ D("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ c(
                Pe,
                {
                  label: b("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: l ? nr : Mo,
                  onClick: _,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ c(
                Pe,
                {
                  label: b("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: bn,
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
}, Nb = ({ options: e, ...t }) => {
  const {
    onQuestionChange: n,
    disabled: r,
    answering: s,
    getSectionContainingQuestion: a
  } = ze(), i = new Set(e.map((g) => g.value)).size !== e.length, o = a(t.id), l = t.locked || o?.locked, { t: d } = Ne(), u = z(
    () => ({
      id: t.id,
      type: t.type,
      options: e
    }),
    [t.id, t.type, e]
  );
  oe(() => {
    if (!i) return;
    let g = e.map((v) => ({
      ...v,
      value: v.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const b = {
      id: t.id,
      type: t.type
    }, p = new Set(g.map((v) => v.value)).size !== g.length;
    if (!p) {
      n?.({ ...b, options: g });
      return;
    }
    g = g.map((v) => ({
      ...v,
      value: Fu()
    })), p && n?.({ ...b, options: g }), n?.({ ...b, options: g });
  }, [
    i,
    n,
    e,
    t.id,
    t.type
  ]);
  const f = (g) => {
    let b = e;
    g.action === "remove" && (b = e.filter((p) => p.value !== g.value)), g.action === "mark-as-correct" && (b = e.map((p) => ({
      ...p,
      correct: p.value === g.value ? !p.correct : p.correct
    }))), n?.({
      ...u,
      options: b
    });
  }, h = (g) => {
    if (t.type === "select") {
      const b = !t.required && t.value === g ? null : g;
      n?.({
        ...u,
        type: t.type,
        value: b
      });
    } else if (t.type === "multi-select") {
      const b = Array.isArray(t.value) ? t.value : [], p = b.includes(g) ? b.filter((v) => v !== g) : [...b, g];
      n?.({
        ...u,
        type: t.type,
        value: p
      });
    }
  }, m = (g) => {
    const b = e.map((p, v) => ({
      ...p,
      ...v === g.index ? {
        value: g.value,
        label: g.newLabel
      } : {}
    }));
    n?.({
      ...u,
      options: b
    });
  }, x = () => {
    const g = e.length, b = {
      value: `new-option-${g + 1}`,
      label: d("surveyFormBuilder.selectQuestion.newOption", {
        number: g + 1
      })
    };
    n?.({
      ...u,
      options: [...e, b]
    });
  }, S = (g) => {
    n?.({
      ...u,
      options: g
    });
  };
  return i ? null : /* @__PURE__ */ c(Be, { ...t, children: /* @__PURE__ */ D("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ c(qa, { children: /* @__PURE__ */ c(
      pa,
      {
        axis: "y",
        values: e,
        onReorder: S,
        as: "div",
        children: e.map((g, b) => {
          const p = t.type === "select" ? t.value === g.value : Array.isArray(t.value) && t.value.includes(g.value);
          return /* @__PURE__ */ c("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ c(
            Cb,
            {
              index: b,
              option: g,
              correct: g.correct,
              onClick: h,
              onClickAction: f,
              onChangeLabel: m,
              disabled: r,
              answering: s,
              selected: p,
              locked: l,
              type: t.type
            }
          ) }, g.value);
        })
      }
    ) }),
    !r && !s && !l && /* @__PURE__ */ c("div", { className: "opacity-50", children: /* @__PURE__ */ c(
      Pe,
      {
        label: d("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: fa,
        onClick: x
      }
    ) })
  ] }) });
}, Db = ({
  value: e,
  ...t
}) => {
  const { onQuestionChange: n, answering: r } = ze(), s = un(t), { t: a } = Ne(), i = a("surveyFormBuilder.answer.textPlaceholder"), o = z(
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
  return /* @__PURE__ */ c(Be, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    et,
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
}, Wa = ({ ...e }) => {
  switch (e.type) {
    case "text":
    case "longText":
      return /* @__PURE__ */ c(Db, { ...e });
    case "rating":
      return /* @__PURE__ */ c(Sb, { ...e });
    case "select":
    case "multi-select":
      return /* @__PURE__ */ c(Nb, { ...e });
    case "dropdown-single":
    case "dropdown-multi":
      return /* @__PURE__ */ c(pb, { ...e });
    case "numeric":
      return /* @__PURE__ */ c(yb, { ...e });
    case "link":
      return /* @__PURE__ */ c(bb, { ...e });
    case "date":
      return /* @__PURE__ */ c(mb, { ...e });
    case "file":
      return /* @__PURE__ */ c(vb, { ...e });
    case "checkbox":
      return /* @__PURE__ */ c(hb, { ...e });
    default:
      throw new Error("Invalid question type provided");
  }
}, ed = () => {
  const { t: e } = Ne();
  return /* @__PURE__ */ D("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: e("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, Fb = ({
  item: e,
  showEndOfSection: t,
  className: n
}) => {
  const { isDragging: r, setIsDragging: s, setDraggedItemId: a, draggedItemId: i } = Fn(), o = ga(), { disabled: l, answering: d, getSectionContainingQuestion: u } = ze(), f = u(e.question.id), h = !!f && i === f.id, m = () => {
    s(!0), a(e.question.id);
  }, x = () => {
    s(!1), a(null);
  }, S = e.question.locked || f?.locked, g = !l && !d && !S;
  return /* @__PURE__ */ D(
    Ur,
    {
      value: e,
      onDragStart: m,
      onDragEnd: x,
      dragListener: !1,
      dragControls: o,
      layout: "position",
      as: "div",
      className: W(
        n,
        h && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ D(
          "div",
          {
            className: W(
              "group/element flex flex-row items-start gap-1",
              r && "cursor-grabbing"
            ),
            children: [
              !l && !d && /* @__PURE__ */ c(
                "div",
                {
                  className: W(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !r && "cursor-grab",
                    !g && "cursor-not-allowed"
                  ),
                  onPointerDown: (b) => {
                    g && o.start(b);
                  },
                  children: /* @__PURE__ */ c(Me, { icon: tr, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(
                Wa,
                {
                  ...e.question
                }
              )
            ]
          }
        ) }),
        t && /* @__PURE__ */ c(ed, {})
      ]
    }
  );
}, Tb = ({ question: e }) => {
  const { isDragging: t, setIsDragging: n, setDraggedItemId: r } = Fn(), s = ga(), { disabled: a, answering: i, getSectionContainingQuestion: o } = ze(), l = o(e.id), d = () => {
    n(!0), r(e.id);
  }, u = () => {
    n(!1), r(null);
  }, f = e.locked || l?.locked, h = !a && !i && !f;
  return /* @__PURE__ */ c(
    Ur,
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
          className: W(
            "group/question-element flex flex-row items-start gap-1",
            t && "cursor-grabbing"
          ),
          style: { marginLeft: a || i ? 0 : -27 },
          children: [
            !a && !i && /* @__PURE__ */ c(
              "div",
              {
                className: W(
                  "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
                  !t && "cursor-grab",
                  !h && "cursor-not-allowed"
                ),
                onPointerDown: (m) => {
                  h && s.start(m);
                },
                children: /* @__PURE__ */ c(Me, { icon: tr, size: "sm" })
              }
            ),
            /* @__PURE__ */ c(
              Wa,
              {
                ...e
              }
            )
          ]
        }
      )
    }
  );
}, Ab = {
  fieldSizing: "content"
}, Eb = ({
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
  } = ze(), [f, h] = ee(!1), { t: m } = Ne(), x = z(
    () => ({
      id: e,
      title: t,
      description: n
    }),
    [e, t, n]
  ), S = (C) => {
    i?.({ ...x, title: C.target.value });
  }, g = (C) => {
    i?.({
      ...x,
      description: C.target.value
    });
  }, b = (C) => {
    i?.({ ...x, questions: C });
  }, p = () => {
    u?.({ elementId: e, type: "section" });
  }, v = () => {
    d(e);
  }, k = [
    {
      label: m("surveyFormBuilder.actions.duplicateSection"),
      icon: Sr,
      onClick: p
    },
    {
      label: m("surveyFormBuilder.actions.deleteSection"),
      icon: bn,
      onClick: v,
      critical: !0
    }
  ], _ = o || s || l, w = Q(null);
  return oe(() => {
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
                onChange: S,
                disabled: _,
                className: W(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  _ && "cursor-not-allowed"
                )
              }
            ),
            !o && !l && !s && /* @__PURE__ */ c(
              "div",
              {
                className: W(
                  "opacity-0 group-hover/section:opacity-100",
                  f && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  na,
                  {
                    items: k,
                    icon: br,
                    open: f,
                    onOpenChange: h,
                    align: "start",
                    children: /* @__PURE__ */ c(
                      Pe,
                      {
                        icon: br,
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
              onChange: g,
              disabled: _,
              style: Ab,
              className: W(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                _ && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !a && /* @__PURE__ */ D(Ge, { children: [
          /* @__PURE__ */ c(qa, { children: /* @__PURE__ */ c(
            pa,
            {
              axis: "y",
              values: r,
              onReorder: b,
              as: "div",
              children: /* @__PURE__ */ c("div", { className: "group/section-list flex flex-col gap-4", children: r.map((C) => /* @__PURE__ */ c(Tb, { question: C }, C.id)) })
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
}, Rb = ({
  item: e,
  className: t
}) => {
  const { isDragging: n, setIsDragging: r, setDraggedItemId: s, draggedItemId: a } = Fn(), i = ga(), { disabled: o, answering: l } = ze(), d = a === e.section.id, u = () => {
    r(!0), s(e.section.id);
  }, f = () => {
    r(!1), s(null);
  }, h = !o && !l && !e.section.locked;
  return /* @__PURE__ */ c(
    Ur,
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
            className: W(
              "flex flex-row items-start gap-1 w-full",
              n && "cursor-grabbing"
            ),
            children: [
              !o && !l && /* @__PURE__ */ c(
                "div",
                {
                  className: W(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !n && "cursor-grab",
                    !h && "cursor-not-allowed"
                  ),
                  onPointerDown: (m) => {
                    h && i.start(m);
                  },
                  children: /* @__PURE__ */ c(Me, { icon: tr, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(Eb, { ...e.section, hideQuestions: !0 })
            ]
          }
        ),
        d && (e.section.questions ?? []).length > 0 && /* @__PURE__ */ D("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (e.section.questions ?? []).map((m) => /* @__PURE__ */ c(Wa, { ...m }, m.id)),
          /* @__PURE__ */ c(ed, {})
        ] })
      ] }) })
    }
  );
}, ro = (e) => sb[e], Ib = (e) => {
  document.getElementById(e)?.scrollIntoView({ behavior: "smooth", block: "start" });
}, Ob = (e, t) => {
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
  } = t, { deleteElement: m, onDuplicateElement: x, disabled: S, answering: g } = ze(), { getActionsForQuestion: b, questionTypes: p } = Yc(), v = O((_) => {
    Ib(_);
  }, []), k = O(
    (_, w, C) => {
      const {
        question: A,
        currentRatingType: L,
        currentDatasetKey: P,
        disallowOptionalQuestions: T,
        handleChangeRequired: R,
        handleSelectQuestionType: N,
        handleSelectRatingType: M,
        handleDuplicate: H,
        handleDelete: X
      } = b(_, w, C), te = [
        { type: "label", text: l }
      ];
      T || te.push({
        type: "toggle",
        label: d,
        icon: Oo,
        checked: !!A?.required,
        onCheckedChange: R
      });
      const se = p.filter((I) => !I.datasetKey), q = p.filter((I) => !!I.datasetKey), fe = se.map((I) => {
        if (I.questionType === "rating") {
          const ce = zr.map((xe) => ({
            label: xe.label,
            onClick: () => M(xe.value),
            selected: L === xe.value
          }));
          return {
            type: "submenu",
            label: I.label,
            icon: I.icon,
            selectedLabel: L ? zr.find((xe) => xe.value === L)?.label : void 0,
            children: ce
          };
        }
        return {
          label: I.label,
          icon: I.icon,
          onClick: () => N(I.questionType),
          selected: w === I.questionType && !P
        };
      }), K = /* @__PURE__ */ new Map();
      for (const I of q)
        I.datasetKey && !K.has(I.datasetKey) && K.set(I.datasetKey, {
          label: I.label,
          icon: I.icon,
          datasetKey: I.datasetKey
        });
      if (K.size > 0) {
        fe.push({ type: "separator" });
        for (const [I, ce] of K)
          fe.push({
            type: "submenu",
            label: ce.label,
            icon: ce.icon,
            selectedLabel: P === I ? w === "dropdown-multi" ? h : f : void 0,
            children: [
              {
                label: f,
                icon: St,
                onClick: () => N("dropdown-single", I),
                selected: P === I && w === "dropdown-single"
              },
              {
                label: h,
                icon: dn,
                onClick: () => N("dropdown-multi", I),
                selected: P === I && w === "dropdown-multi"
              }
            ]
          });
      }
      let V;
      if (P) {
        const I = K.get(P);
        I && (V = I.label);
      } else
        V = se.find(
          (I) => I.questionType === w
        )?.label;
      return te.push({
        type: "submenu",
        label: u,
        icon: Lo,
        selectedLabel: V,
        children: fe
      }), te.push({ type: "separator" }), te.push({
        label: s,
        icon: Sr,
        onClick: H
      }), C && te.push({
        label: a,
        icon: bn,
        onClick: X,
        critical: !0
      }), te;
    },
    [
      b,
      p,
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
    () => e.map((_) => {
      if (_.type === "section") {
        const C = _.section, A = `co-creation-section-${C.id}`, L = C.questions ?? [], P = L.length === 1;
        return {
          id: A,
          label: C.title || n,
          icon: ma,
          onClick: v,
          ...!S && !g && !C.locked && {
            otherActions: [
              {
                label: i,
                icon: Sr,
                onClick: () => x?.({
                  elementId: C.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: o,
                icon: bn,
                onClick: () => m(C.id),
                critical: !0
              }
            ]
          },
          children: L.map((T) => ({
            id: `co-creation-question-${T.id}`,
            label: T.title || r,
            icon: ro(T.type),
            onClick: v,
            ...!S && !g && !C.locked && {
              otherActions: k(
                T.id,
                T.type,
                !P
              )
            }
          }))
        };
      }
      const w = _.question;
      return {
        id: `co-creation-question-${w.id}`,
        label: w.title || r,
        icon: ro(w.type),
        onClick: v,
        ...!S && !g && !w.locked && {
          otherActions: k(
            w.id,
            w.type,
            !0
          )
        }
      };
    }),
    [
      e,
      v,
      n,
      r,
      S,
      g,
      k,
      i,
      o,
      x,
      m
    ]
  );
}, Es = "co-creation-section-", hr = "co-creation-question-";
function Lb(e, t) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const i of t)
    if (i.type === "section") {
      n.set(i.section.id, i.section);
      for (const o of i.section.questions ?? [])
        r.set(o.id, o);
    } else
      r.set(i.question.id, i.question);
  const s = [], a = (i) => {
    if (i.id.startsWith(Es)) {
      const o = i.id.slice(Es.length), l = n.get(o);
      if (!l) return;
      const d = (i.children ?? []).filter((u) => u.id.startsWith(hr)).map((u) => r.get(u.id.slice(hr.length))).filter((u) => u != null);
      s.push({
        type: "section",
        section: { ...l, questions: d }
      });
      for (const u of i.children ?? [])
        u.id.startsWith(Es) && a(u);
      return;
    }
    if (i.id.startsWith(hr)) {
      const o = i.id.slice(hr.length), l = r.get(o);
      l && s.push({ type: "question", question: l });
    }
  };
  for (const i of e)
    a(i);
  return s;
}
const td = ({
  elements: e,
  onChange: t,
  answering: n
}) => {
  const { t: r } = Ne(), { disabled: s } = ze(), { portalContainer: a } = nt(Ud), i = Ob(e, {
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
  }), o = O(
    (l) => {
      t(Lb(l, e));
    },
    [e, t]
  );
  return /* @__PURE__ */ c("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ c(
    Wc,
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
function Mb(e) {
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
function so(e) {
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
function Pb(e, t) {
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
function Bb(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (n.type === "section") {
      const r = n.section.questions;
      r?.length && t.add(`question-${r[r.length - 1].id}`);
    }
  return t;
}
function Vb({
  flatItems: e,
  onChange: t
}) {
  const [n, r] = ee(
    null
  ), [s, a] = ee(!1), i = O(
    (d) => {
      const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
      let h = null;
      for (const w of e)
        w.type === "section-header" ? (h = w.id, u.set(w.id, /* @__PURE__ */ new Set()), w.section.locked && f.add(w.id)) : w.type === "section-end" ? h = null : h && u.get(h).add(w.id);
      const m = e.filter((w) => w.type === "section-header").map((w) => w.id), x = d.filter((w) => w.type === "section-header").map((w) => w.id), S = m.some(
        (w, C) => x[C] !== w
      ), g = new Map(
        e.filter((w) => w.type !== "section-end").map((w, C) => [w.id, C])
      ), b = new Set(f);
      if (S)
        for (const [w, C] of d.entries())
          C.type === "section-header" && g.get(C.id) !== w && b.add(C.id);
      let p;
      if (b.size > 0) {
        const w = /* @__PURE__ */ new Map();
        for (const L of b) {
          const P = u.get(L);
          if (P)
            for (const T of P)
              w.set(T, L);
        }
        const C = /* @__PURE__ */ new Map();
        for (const L of b)
          C.set(L, []);
        const A = [];
        for (const L of d) {
          const P = w.get(L.id);
          P ? C.get(P).push(L) : A.push(L);
        }
        p = [];
        for (const L of A)
          p.push(L), L.type === "section-header" && b.has(L.id) && p.push(...C.get(L.id));
      } else
        p = d;
      const v = /* @__PURE__ */ new Set();
      for (const w of u.values())
        for (const C of w)
          v.add(C);
      const k = Pb(
        p,
        v
      );
      if ([
        ...u.entries()
      ].some(([w, C]) => {
        if (C.size === 0) return !1;
        const A = k.findIndex((P) => P.id === w);
        if (A === -1) return !1;
        const L = k[A + 1];
        return !L || L.type !== "question";
      })) {
        r(k), a(!0);
        return;
      }
      t(so(k));
    },
    [t, e]
  ), o = O(() => {
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
      t(so(u));
    }
    a(!1), r(null);
  }, [n, t]), l = O(() => {
    a(!1), r(null);
  }, []);
  return {
    handleFlatReorder: i,
    handleConfirmLastQuestionMove: o,
    handleCancelLastQuestionMove: l,
    lastQuestionDialogOpen: s
  };
}
function jb({ children: e }) {
  const { isDragging: t } = Fn();
  return /* @__PURE__ */ c("div", { className: W("relative @container", t && "select-none"), children: e });
}
const $b = ({
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
    () => e.map((v) => v.type === "question" ? {
      ...v,
      question: {
        ...v.question,
        required: r ? !0 : v.question.required
      }
    } : v.type === "section" ? {
      ...v,
      section: {
        ...v.section,
        questions: v.section.questions?.map((k) => ({
          ...k,
          required: r ? !0 : k.required
        }))
      }
    } : v),
    [e, r]
  ), u = z(() => Mb(d), [d]), f = z(
    () => u.filter((v) => v.type !== "section-end"),
    [u]
  ), h = z(
    () => Bb(d),
    [d]
  ), m = z(() => {
    const v = /* @__PURE__ */ new Set();
    for (const k of d)
      if (k.type === "section")
        for (const _ of k.section.questions ?? [])
          v.add(`question-${_.id}`);
    return v;
  }, [d]), {
    handleFlatReorder: x,
    handleConfirmLastQuestionMove: S,
    handleCancelLastQuestionMove: g,
    lastQuestionDialogOpen: b
  } = Vb({ flatItems: u, onChange: n });
  oe(() => {
    if (a) {
      const v = document.activeElement;
      v && v.getAttribute("name") !== "one-ai-input" && v.blur();
    }
  }, [a]);
  const p = !!d.length;
  return /* @__PURE__ */ D(
    Kc,
    {
      disabled: t,
      elements: d,
      onChange: n,
      disallowOptionalQuestions: r,
      allowedQuestionTypes: s,
      useUpload: i,
      datasets: o,
      children: [
        /* @__PURE__ */ c(qa, { children: /* @__PURE__ */ D(jb, { children: [
          p && /* @__PURE__ */ c(td, { elements: d, onChange: n }),
          /* @__PURE__ */ D("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ D(
              Wn.div,
              {
                className: W(
                  "flex w-full max-w-[750px] self-center flex-col gap-6",
                  a && "pointer-events-none"
                ),
                initial: { filter: "blur(0px)" },
                animate: { filter: a ? "blur(2px)" : "none" },
                exit: { filter: "blur(0px)" },
                children: [
                  /* @__PURE__ */ c(
                    pa,
                    {
                      axis: "y",
                      values: f,
                      onReorder: x,
                      as: "div",
                      children: /* @__PURE__ */ c("div", { className: "flex flex-col", children: f.map((v, k) => {
                        const _ = k === 0 ? "" : m.has(v.id) ? "mt-4" : "mt-8";
                        return v.type === "section-header" ? /* @__PURE__ */ c(
                          Rb,
                          {
                            item: v,
                            className: _
                          },
                          v.id
                        ) : /* @__PURE__ */ c(
                          Fb,
                          {
                            item: v,
                            showEndOfSection: h.has(v.id),
                            className: _
                          },
                          v.id
                        );
                      }) })
                    }
                  ),
                  l && /* @__PURE__ */ c(ab, {})
                ]
              }
            ),
            a && /* @__PURE__ */ c(
              Wn.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ c(tb, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ c(
          ib,
          {
            open: b,
            onConfirm: S,
            onCancel: g
          }
        )
      ]
    }
  );
}, Yy = Ie($b);
function Dt({
  titleWidth: e,
  descriptionWidth: t,
  answer: n
}) {
  return /* @__PURE__ */ D("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ c(Ve, { className: "h-5 rounded-sm", style: { width: e } }),
      t && /* @__PURE__ */ c(
        Ve,
        {
          className: "h-4 rounded-sm",
          style: { width: t }
        }
      )
    ] }),
    n
  ] });
}
const vr = /* @__PURE__ */ c(Ve, { className: "h-10 w-full rounded-sm" }), ao = /* @__PURE__ */ c(Ve, { className: "h-24 w-full rounded-sm" }), zb = /* @__PURE__ */ c(Ve, { className: "h-10 w-56 max-w-full rounded-sm" });
function Zb() {
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(Ve, { className: "h-9 rounded-sm" }, t)) });
}
function io({ count: e }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: Array.from({ length: e }).map((t, n) => /* @__PURE__ */ c(
    Ve,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - n * 7)}%` }
    },
    n
  )) });
}
function qb() {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(
    Ve,
    {
      className: "h-8 rounded-sm",
      style: { width: `${18 + t * 3}%` }
    },
    t
  )) });
}
function Ub() {
  return /* @__PURE__ */ c(
    "div",
    {
      className: "flex w-full flex-col gap-10",
      "data-testid": "survey-answering-form-loading-all-questions",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [0, 1].map((e) => /* @__PURE__ */ D("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Ve, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ c(Ve, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: e === 0 ? /* @__PURE__ */ D(Ge, { children: [
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: vr
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: ao
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ c(Zb, {})
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ c(io, { count: 4 })
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: vr
            }
          )
        ] }) : /* @__PURE__ */ D(Ge, { children: [
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: zb
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: vr
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ c(qb, {})
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ c(io, { count: 3 })
            }
          ),
          /* @__PURE__ */ c(
            Dt,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: ao
            }
          )
        ] }) })
      ] }, e))
    }
  );
}
function Wb() {
  return /* @__PURE__ */ D(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Ve, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ c(Ve, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c(
          Dt,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: vr
          }
        )
      ]
    }
  );
}
function Qb(e) {
  const [t, n] = ee(0), [r, s] = ee(null), a = e.length, i = a > 0 ? t / a * 100 : 0, o = r ?? i, l = e[t], d = t === 0, u = t === a - 1, f = O(() => {
    s(null), n((S) => Math.min(S + 1, a - 1));
  }, [a]), h = O(() => {
    s(null), n((S) => Math.max(S - 1, 0));
  }, []), m = O(() => {
    s(null), n(0);
  }, []), x = O((S) => {
    s(S);
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
    setProgress: x
  };
}
function Hb({
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
      className: W(
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
function Gb({ checked: e }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: W(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        e ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: e && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function oo({
  value: e,
  onChange: t,
  onBlur: n,
  config: r
}) {
  const { options: s, type: a, required: i, disabled: o, showAnswerValidation: l } = r, d = s.some((x) => x.correct), u = !!l && d, f = (x) => {
    if (o || a !== "select") return;
    t(!i && e === x ? void 0 : x), n();
  }, h = (x) => {
    if (o || a !== "multi-select") return;
    const S = Array.isArray(e) ? e : [], g = S.includes(x) ? S.filter((b) => b !== x) : [...S, x];
    t(g), n();
  }, m = (x) => {
    a === "select" ? f(x) : h(x);
  };
  return /* @__PURE__ */ c("div", { className: "-mx-0.5 flex flex-col items-start", children: s.map((x) => {
    const S = a === "select" ? e === x.value : Array.isArray(e) && e.includes(x.value);
    return /* @__PURE__ */ D(
      "div",
      {
        className: W(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          o ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (g) => {
          o || a === "multi-select" && g.target.closest("input") || m(x.value);
        },
        children: [
          a === "multi-select" ? /* @__PURE__ */ c(
            Qn,
            {
              title: x.label,
              checked: !!S,
              onCheckedChange: () => h(x.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ c(Gb, { checked: !!S }),
          /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: x.label }),
          u ? /* @__PURE__ */ c("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ c(
            Me,
            {
              icon: x.correct ? Mo : nr,
              color: x.correct ? "positive" : "critical",
              "aria-hidden": !0
            }
          ) }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
        ]
      },
      x.value
    );
  }) });
}
const Kb = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, Xb = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function mr(e, t) {
  return rs().optional().superRefine((n, r) => {
    e && (!n || n.trim() === "") && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function Yb(e, t) {
  return rs().optional().superRefine((n, r) => {
    if (e && (!n || n.trim() === "")) {
      r.addIssue({
        code: "custom",
        message: t("forms.validation.required")
      });
      return;
    }
    n && !Kb.test(n) && r.addIssue({
      code: "custom",
      message: t("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function lo(e, t) {
  return Cp().optional().superRefine((n, r) => {
    e && n == null && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function co(e, t) {
  return hc(rs()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function Jb(e, t) {
  return Dp().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ey(e, t) {
  return hc(rs()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ty(e, t) {
  return Np().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function uo(e, t) {
  const n = t?.[e.id];
  if (n) return n.value;
  if (e.type === "multi-select" || e.type === "dropdown-multi")
    return [];
  const r = e;
  return r.value !== void 0 && r.value !== null ? r.value : null;
}
function nd(e) {
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
function fo(e, t, n, r = !1, s = r, a, i) {
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
      return gt(mr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: x }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!x,
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
      return gt(mr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: x }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!x,
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
      return gt(lo(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: x }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: u,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!x,
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
      return gt(Yb(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: x }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: u,
            value: f ?? "",
            onChange: h,
            onBlur: m,
            error: !!x,
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
      return gt(Jb(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: f, onChange: h, onBlur: m, error: x }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: u,
            value: f,
            onChange: h,
            onBlur: m,
            error: !!x,
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
      return gt(mr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: x, onBlur: S, error: g }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          et,
          {
            field: h,
            value: m ?? "",
            onChange: x,
            onBlur: S,
            error: !!g,
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
      return gt(co(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: x, onBlur: S, error: g }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          et,
          {
            field: h,
            value: m ?? [],
            onChange: x,
            onBlur: S,
            error: !!g,
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
      return gt(mr(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: x, config: S }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c(
          oo,
          {
            value: h,
            onChange: m,
            onBlur: x,
            config: S
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
      return gt(co(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: x, config: S }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c(
          oo,
          {
            value: h,
            onChange: m,
            onBlur: x,
            config: S
          }
        ) })
      });
    }
    case "rating": {
      const f = {
        options: e.options,
        disabled: s
      };
      return gt(lo(!!e.required, t), {
        ...l,
        fieldType: "custom",
        fieldConfig: f,
        render: ({ value: h, onChange: m, onBlur: x, config: S }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c(
          Hb,
          {
            value: h,
            onChange: m,
            onBlur: x,
            config: S
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
        accept: u.accept ?? Jc,
        maxSizeMB: u.maxSizeMB,
        useUpload: f ?? Xb,
        disabled: s || !f
      };
      return gt(ey(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: m, onChange: x, onBlur: S, error: g }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: h,
            value: m ?? [],
            onChange: x,
            onBlur: S,
            error: !!g,
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
      return gt(ty(!!e.required, t), {
        ...l,
        fieldType: "custom",
        render: ({ value: h, onChange: m, onBlur: x, error: S }) => /* @__PURE__ */ c(Be, { ...d, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          et,
          {
            field: f,
            value: h ?? !1,
            onChange: m,
            onBlur: x,
            error: !!S,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return gt(Tp(), {
        ...l,
        fieldType: "custom",
        render: () => null
      });
  }
}
function ny(e, t, n, r, s, a, i = !1, o = i, l, d) {
  return z(() => {
    const u = {}, f = {}, h = {}, m = nd(e), x = t === "stepped";
    for (const S of e)
      if (S.type === "section") {
        const g = S.section, b = g.id;
        t === "all-questions" && (h[b] = {
          title: g.title,
          description: g.description,
          withInset: !0
        });
        for (const p of g.questions ?? [])
          x && s && p.id !== s || (u[p.id] = fo(
            p,
            n,
            t === "all-questions" ? b : void 0,
            i,
            o,
            l,
            d
          ), f[p.id] = a?.[p.id] ?? uo(p, r));
      } else {
        const g = S.question;
        if (x && s && g.id !== s)
          continue;
        u[g.id] = fo(
          g,
          n,
          void 0,
          i,
          o,
          l,
          d
        ), f[g.id] = a?.[g.id] ?? uo(g, r);
      }
    return {
      schema: Pa(u),
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
const Rs = () => {
};
function Jy({
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
  labels: x,
  preview: S = !1,
  useUpload: g,
  datasets: b
}) {
  const { t: p } = Ne(), v = l === "fullscreen", k = l === "fullscreen" ? "center" : l, [_, w] = ee(v), { formRef: C, submit: A, isSubmitting: L, hasErrors: P } = ls(), T = Q({}), R = z(
    () => nd(e),
    [e]
  ), N = Qb(R), M = R.length > 0, H = {
    title: x?.empty?.title ?? p("surveyAnsweringForm.labels.empty.title"),
    description: x?.empty?.description ?? p("surveyAnsweringForm.labels.empty.description"),
    emoji: x?.empty?.emoji ?? p("surveyAnsweringForm.labels.empty.emoji")
  }, X = n === "stepped", se = S && !!f && Object.keys(f).length > 0, q = S && !se, fe = X ? N.currentQuestion?.id : void 0, {
    schema: K,
    defaultValues: V,
    sections: I
  } = ny(
    e,
    n,
    p,
    f,
    fe,
    X ? T.current : void 0,
    S,
    se,
    g,
    b
  ), ce = _ ? "fullscreen" : k, xe = ce === "center" ? "xl" : void 0, ie = Q(null), pe = O(
    (F) => {
      ie.current && clearTimeout(ie.current), ie.current = setTimeout(() => {
        ie.current = null, o();
      }, F);
    },
    [o]
  ), be = O(
    async (F) => {
      if (S)
        return { success: !0 };
      if (!t)
        throw new Error("onSubmit is required when preview is false");
      if (X && !N.isLastStep)
        return T.current = {
          ...T.current,
          ...F
        }, N.goToNext(), { success: !0 };
      const E = X ? { ...T.current, ...F } : F, U = {};
      for (const [B, ne] of Object.entries(E))
        U[B] = ne === void 0 ? null : ne;
      if (X) {
        N.setProgress(100);
        const [B] = await Promise.all([
          t(U),
          new Promise((ne) => setTimeout(ne, 1e3))
        ]);
        return B.success ? (pe(B.message ? 1e3 : 0), { success: !0, message: B.message }) : (N.setProgress(null), { success: !1, errors: B.errors });
      }
      const $ = await t(U);
      return $.success ? (pe($.message ? 1e3 : 0), { success: !0, message: $.message }) : { success: !1, errors: $.errors };
    },
    [
      t,
      S,
      pe,
      X,
      N.isLastStep,
      N.goToNext,
      N.setProgress
    ]
  ), le = O(async () => {
    try {
      await A();
    } catch {
    }
  }, [A]), Y = O(() => {
    const F = C.current?.getValues() ?? {};
    T.current = {
      ...T.current,
      ...F
    }, N.goToPrevious();
  }, [C, N.goToPrevious]), de = u && !m ? [
    {
      label: p(_ ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: _ ? Wd : Qd,
      onClick: () => w((F) => !F)
    }
  ] : void 0, De = M ? m || se ? void 0 : q ? X && !N.isLastStep ? {
    label: p("surveyAnsweringForm.actions.next"),
    onClick: N.goToNext,
    icon: Is
  } : {
    label: p("surveyAnsweringForm.actions.submit"),
    onClick: Rs,
    disabled: !0
  } : X && !N.isLastStep ? {
    label: p("surveyAnsweringForm.actions.next"),
    onClick: le,
    icon: Is
  } : {
    label: p("surveyAnsweringForm.actions.submit"),
    onClick: le,
    disabled: L || P,
    loading: L
  } : void 0, Te = M ? m || se ? void 0 : X && !N.isFirstStep ? {
    label: p("surveyAnsweringForm.actions.previous"),
    onClick: Y,
    icon: No
  } : void 0 : void 0, Le = n === "all-questions" && M && !m, Xe = X && M && !m, it = X && !!N.currentQuestion?.sectionTitle && !m, ft = !M && !m || X, y = ce === "center" || ce === "fullscreen";
  return /* @__PURE__ */ c(
    Do,
    {
      isOpen: i,
      onClose: o,
      title: r,
      module: d,
      position: ce,
      width: xe,
      primaryAction: De,
      secondaryAction: Te,
      otherActions: de,
      disableContentPadding: y,
      children: /* @__PURE__ */ c(
        Kc,
        {
          answering: !0,
          elements: e,
          onChange: Rs,
          datasets: b,
          children: /* @__PURE__ */ D(
            "div",
            {
              className: W(
                "relative flex min-h-full flex-col @container",
                X && !_ && "min-h-[600px]",
                ft && "h-full"
              ),
              children: [
                Le && /* @__PURE__ */ c(td, { elements: e, onChange: Rs, answering: !0 }),
                Xe && /* @__PURE__ */ c("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ c(
                  Hd,
                  {
                    label: "Value",
                    value: N.progress,
                    hideLabel: !0
                  }
                ) }),
                /* @__PURE__ */ D(
                  "div",
                  {
                    className: W(
                      "mx-auto flex w-full flex-col @lg:w-[750px] max-w-full",
                      n === "all-questions" && !ft ? "justify-start" : "flex-1 justify-center",
                      y && "px-4 py-12"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
                        Tu,
                        {
                          title: r,
                          description: s,
                          ...a
                        }
                      ) }),
                      m ? n === "stepped" ? /* @__PURE__ */ c(Wb, {}) : /* @__PURE__ */ c(Ub, {}) : M ? null : /* @__PURE__ */ c(
                        ym,
                        {
                          display: "flex",
                          flexDirection: "column",
                          height: "full",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingX: "lg",
                          children: /* @__PURE__ */ c(
                            Gd,
                            {
                              emoji: H.emoji,
                              title: H.title,
                              description: H.description
                            }
                          )
                        }
                      ),
                      it && /* @__PURE__ */ D("div", { className: "py-1 pl-5", children: [
                        /* @__PURE__ */ c("span", { className: "text-lg font-semibold text-f1-foreground", children: N.currentQuestion?.sectionTitle }),
                        N.currentQuestion?.sectionDescription && /* @__PURE__ */ c("p", { className: "text-f1-foreground-secondary", children: N.currentQuestion?.sectionDescription })
                      ] }),
                      M && !m && /* @__PURE__ */ c(
                        cs,
                        {
                          formRef: C,
                          name: "survey-answering",
                          schema: K,
                          defaultValues: V,
                          onSubmit: be,
                          submitConfig: {
                            hideSubmitButton: !0
                          },
                          errorTriggerMode: h,
                          sections: I
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
const ry = ({ benefits: e }) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: e.map((t, n) => /* @__PURE__ */ c(sy, { text: t }, n)) }), sy = ({ text: e }) => /* @__PURE__ */ D("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ c(Me, { icon: qr, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ c("span", { children: e })
] }), rd = st(
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
      className: W(
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
                a && /* @__PURE__ */ c(Po, { module: a }),
                i && /* @__PURE__ */ c("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              (o || l) && /* @__PURE__ */ D("div", { className: "flex justify-start gap-2", children: [
                o && /* @__PURE__ */ c(Kd, { icon: o.icon, text: o.label }),
                l && /* @__PURE__ */ c(
                  To,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ c("h2", { className: "font-bold text-xl text-f1-foreground", children: e })
            ] }),
            /* @__PURE__ */ c(ry, { benefits: n })
          ] }),
          r && /* @__PURE__ */ c("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
rd.displayName = "ProductBlankslate";
const ay = Ie(rd);
function iy({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  module: s,
  portalContainer: a
}) {
  const [i, o] = ee(e);
  return oe(() => {
    o(e);
  }, [e]), /* @__PURE__ */ c(Xd, { open: i, onOpenChange: (d) => {
    o(d), d || t();
  }, modal: !0, children: /* @__PURE__ */ D(
    Yd,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: a,
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ D(Jd, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            s && /* @__PURE__ */ c(Po, { module: s, size: "lg" }),
            n
          ] }),
          /* @__PURE__ */ c(
            ta,
            {
              variant: "outline",
              icon: nr,
              onClick: t,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ D(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          r,
          /* @__PURE__ */ c(
            yo,
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
function oy({
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
  portalContainer: x,
  tag: S,
  promoTag: g,
  showResponseDialog: b = !0
}) {
  const [p, v] = ee(e), [k, _] = ee(null), [w, C] = ee(!1), A = async () => {
    if (u?.onClick) {
      C(!0);
      try {
        await u.onClick(), v(!1), b && _("success");
      } catch {
        b && _("error");
      } finally {
        C(!1);
      }
    }
  }, L = () => {
    v(!1), t?.();
  }, P = w;
  return /* @__PURE__ */ D(Ge, { children: [
    /* @__PURE__ */ c(
      iy,
      {
        isOpen: p,
        onClose: L,
        title: f,
        module: h,
        portalContainer: x,
        children: /* @__PURE__ */ c("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ c(
          ay,
          {
            title: n,
            image: r,
            benefits: s,
            withShadow: !1,
            tag: S,
            promoTag: g,
            actions: /* @__PURE__ */ D("div", { className: "flex gap-3", children: [
              u && /* @__PURE__ */ c(
                Pe,
                {
                  variant: u.variant,
                  label: P ? o.label : u.label,
                  icon: u.icon || void 0,
                  onClick: A,
                  loading: u.loading,
                  size: u.size
                }
              ),
              m && /* @__PURE__ */ c(
                Pe,
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
    k && b && /* @__PURE__ */ c(
      Bo,
      {
        open: !0,
        onClose: () => {
          L(), _(null);
        },
        success: k === "success",
        errorMessage: a,
        successMessage: i,
        nextSteps: l,
        closeLabel: d,
        portalContainer: x
      }
    )
  ] });
}
const ex = Ie(oy);
function ly({
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
  oe(() => {
    i && i(!d);
  }, [i, d]);
  const h = e?.includes(".mp4");
  return /* @__PURE__ */ c(Ge, { children: d ? null : /* @__PURE__ */ D(eu, { style: { width: a }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ D(tu, { children: [
      s && /* @__PURE__ */ c("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ c(
        Pe,
        {
          variant: "ghost",
          icon: nr,
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
          /* @__PURE__ */ c(Lr, { className: "text-lg font-medium", children: t }),
          /* @__PURE__ */ c(Lr, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: n })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ c(nu, { className: "p-3", children: o.map(
      (m) => m.type === "upsell" ? /* @__PURE__ */ c(
        Vo,
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
        Pe,
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
const cy = Ie(ly), sd = st(
  function({ primaryAction: t, secondaryAction: n, ...r }, s) {
    const a = (l) => l.variant === "promote" ? /* @__PURE__ */ c(
      Vo,
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
      Pe,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), i = t?.variant !== "promote" ? t : void 0, o = n?.variant !== "promote" ? n : void 0;
    return /* @__PURE__ */ D(
      Au,
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
sd.displayName = "UpsellingBanner";
const tx = Ie(sd);
function dy({
  isOpen: e,
  setIsOpen: t,
  label: n,
  variant: r = "promote",
  size: s = "md",
  showIcon: a = !0,
  side: i = "right",
  align: o = "center",
  icon: l = ru,
  mediaUrl: d,
  title: u,
  description: f,
  width: h = "300px",
  trackVisibility: m,
  actions: x,
  onClick: S,
  hideLabel: g = !1
}) {
  const [b, p] = ee(!1), [v, k] = ee(null), [_, w] = ee(null), C = (R) => {
    t(R), S && S();
  }, A = async (R) => {
    if (R.type === "upsell") {
      w(R);
      try {
        await R.onClick(), R.showConfirmation && (p(!0), k("success"));
      } catch {
        p(!0), k("error");
      }
    }
  }, L = () => {
    k(null), p(!1), w(null), t(!1);
  }, P = e && !b, T = x?.map((R) => R.type === "upsell" ? {
    ...R,
    onClick: () => A(R)
  } : R);
  return /* @__PURE__ */ D(Ge, { children: [
    /* @__PURE__ */ D(ra, { open: P, onOpenChange: C, children: [
      /* @__PURE__ */ c(sa, { asChild: !0, children: /* @__PURE__ */ c(
        Pe,
        {
          variant: r,
          label: n,
          size: s,
          icon: a ? l : void 0,
          onClick: () => t(e),
          hideLabel: g
        }
      ) }),
      /* @__PURE__ */ c(
        aa,
        {
          side: i,
          align: o,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ c(
            cy,
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
    _?.type === "upsell" && _.showConfirmation && v && /* @__PURE__ */ c(
      Bo,
      {
        open: !0,
        onClose: L,
        success: v === "success",
        errorMessage: _.errorMessage,
        successMessage: _.successMessage,
        nextSteps: _.nextSteps,
        closeLabel: _.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const nx = Ie(dy), rx = vt(
  "F0AnalyticsDashboard",
  su
), uy = Et(
  null
), fy = ({ children: e, fullScreen: t = !0 }) => {
  const n = Q(null), [r, s] = ee(n.current);
  return hu(() => {
    s(n.current);
  }, []), /* @__PURE__ */ c(uy.Provider, { value: { element: r }, children: /* @__PURE__ */ c(
    "div",
    {
      ref: n,
      id: "f0-layout",
      className: W({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    }
  ) });
}, hy = ({
  children: e
}) => /* @__PURE__ */ c(fu, { reducedMotion: "user", children: e }), sx = ({
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
}) => /* @__PURE__ */ c(hy, { children: /* @__PURE__ */ c(
  au,
  {
    isDev: o,
    showExperimentalWarnings: d,
    renderDataTestIdAttribute: u,
    children: /* @__PURE__ */ c(iu, { ...i, children: /* @__PURE__ */ c(ou, { ...a, children: /* @__PURE__ */ c(lu, { ...n, children: /* @__PURE__ */ c(fy, { ...t, children: /* @__PURE__ */ c(cu, { children: /* @__PURE__ */ c(
      Eu,
      {
        initiallyEnabled: r,
        children: /* @__PURE__ */ c(du, { ...s, children: /* @__PURE__ */ c(
          uu,
          {
            handler: l,
            children: e
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), ho = (e) => `datacollection-${e}`, ax = {
  get: async (e) => JSON.parse(
    localStorage.getItem(ho(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(ho(e), JSON.stringify(t));
  }
};
export {
  t0 as AiChatTranslationsProvider,
  Ow as AreaChart,
  lx as Await,
  Lw as BarChart,
  cx as BarChartSkeleton,
  _u as CardSelectableContainer,
  Mw as CategoryBarChart,
  dx as ChatSpinner,
  yr as Chip,
  Pw as ComboChart,
  xy as Dashboard,
  Sd as DataTestIdWrapper,
  ux as DndProvider,
  fx as EmojiImage,
  Os as F0ActionBar,
  hx as F0ActionItem,
  mx as F0AiChat,
  px as F0AiChatProvider,
  gx as F0AiChatTextArea,
  Zy as F0AiFormRegistryProvider,
  vx as F0AiFullscreenChat,
  n0 as F0AiMask,
  _o as F0Alert,
  rx as F0AnalyticsDashboard,
  r0 as F0AuraVoiceAnimation,
  bx as F0Avatar,
  yx as F0AvatarAlert,
  xx as F0AvatarCompany,
  Bw as F0AvatarDate,
  wx as F0AvatarEmoji,
  Fd as F0AvatarFile,
  Sx as F0AvatarIcon,
  kx as F0AvatarList,
  Po as F0AvatarModule,
  _x as F0AvatarPerson,
  Cx as F0AvatarTeam,
  Ny as F0BigNumber,
  ym as F0Box,
  Pe as F0Button,
  Nx as F0ButtonDropdown,
  Dx as F0ButtonToggle,
  Fx as F0Card,
  Qn as F0Checkbox,
  Ly as F0ChipList,
  Tx as F0DataChart,
  wo as F0DatePicker,
  Do as F0Dialog,
  Ud as F0DialogContext,
  Ax as F0DialogProvider,
  Nm as F0DurationInput,
  Ex as F0EventCatcherProvider,
  Vy as F0FilterPickerContent,
  Uy as F0Form,
  et as F0FormField,
  Ky as F0GridStack,
  s0 as F0HILActionConfirmation,
  Wy as F0Heading,
  Me as F0Icon,
  Ad as F0Link,
  zd as F0OneIcon,
  Rx as F0OneSwitch,
  sx as F0Provider,
  gn as F0Select,
  Xy as F0TableOfContentPopover,
  Ix as F0TagAlert,
  pd as F0TagBalance,
  Ox as F0TagCompany,
  Lx as F0TagDot,
  Mx as F0TagList,
  Px as F0TagPerson,
  Kd as F0TagRaw,
  To as F0TagStatus,
  Bx as F0TagTeam,
  Go as F0Text,
  Hy as F0TimelineRow,
  yv as F0WizardForm,
  Vw as FILE_TYPES,
  Vx as FileItem,
  jx as FunnelChartSkeleton,
  $x as GROUP_ID_SYMBOL,
  zx as GaugeChartSkeleton,
  Zx as HeatmapChartSkeleton,
  _y as HomeLayout,
  wy as Layout,
  jw as LineChart,
  qx as LineChartSkeleton,
  $w as NotesTextEditor,
  zw as NotesTextEditorSkeleton,
  Ux as OneCalendar,
  Wx as OneCalendarInternal,
  Ga as OneEllipsis,
  Gd as OneEmptyState,
  Qx as OneFilterPicker,
  Zw as PieChart,
  Hx as PieChartSkeleton,
  Eu as PrivacyModeProvider,
  ay as ProductBlankslate,
  qw as ProductCard,
  ex as ProductModal,
  cy as ProductWidget,
  Uw as ProgressBarChart,
  Ww as RadarChart,
  Gx as RadarChartSkeleton,
  Qw as RichTextDisplay,
  Su as RichTextEditor,
  Sy as StandardLayout,
  Jy as SurveyAnsweringForm,
  Yy as SurveyFormBuilder,
  Gy as Tag,
  Kx as TagCounter,
  ky as TwoColumnLayout,
  Bo as UpsellRequestResponseDialog,
  tx as UpsellingBanner,
  Vo as UpsellingButton,
  nx as UpsellingPopover,
  Hw as VerticalBarChart,
  Xx as WeekStartDay,
  Gw as _RadarChart,
  Kw as actionBarStatuses,
  a0 as actionItemStatuses,
  i0 as aiTranslations,
  yy as avatarVariants,
  Yx as buildTranslations,
  Ey as buttonDropdownModes,
  Ay as buttonDropdownSizes,
  Ty as buttonDropdownVariants,
  Fy as buttonSizes,
  Iy as buttonToggleSizes,
  Oy as buttonToggleVariants,
  Dy as buttonVariants,
  Jx as cardImageAspectRatios,
  ew as cardImageFits,
  tw as cardImageSizes,
  nw as chartColorTokens,
  rw as chipVariants,
  Bb as computeSectionEndIds,
  sw as createAtlaskitDriver,
  aw as createDataSourceDefinition,
  ju as createPageLayoutBlock,
  $u as createPageLayoutBlockGroup,
  ax as dataCollectionLocalStorageHandler,
  My as datepickerSizes,
  d0 as defaultTranslations,
  zy as defineAvailableForm,
  qy as describeFormSchema,
  Py as durationInputSizes,
  xm as durationUnits,
  ss as evaluateRenderIf,
  vt as experimental,
  gt as f0FormField,
  pi as fieldsToSeconds,
  Mb as flattenElements,
  cn as generateAnchorId,
  iw as getAnimationVariants,
  ow as getCanvasEntity,
  lw as getDataSourcePaginationType,
  cw as getEmojiLabel,
  sn as getF0Config,
  dw as getGranularityDefinition,
  uw as getGranularityDefinitions,
  fw as getGranularitySimpleDefinition,
  $y as getSchemaDefinition,
  hw as granularityDefinitions,
  jy as hasF0Config,
  pc as inferFieldType,
  Pb as injectSectionEnds,
  mw as isInfiniteScrollPagination,
  pw as isPageBasedPagination,
  Ae as isZodType,
  Ry as linkVariants,
  gw as modules,
  o0 as oneIconSizes,
  Xw as predefinedPresets,
  vw as rangeSeparator,
  so as reconstructElements,
  By as secondsToFields,
  gs as secondsToVisibleFields,
  Yw as selectSizes,
  Cy as tagDotColors,
  Qy as timelineRowStatuses,
  rt as unwrapZodSchema,
  bw as useAiChat,
  l0 as useAiChatTranslations,
  yw as useData,
  xw as useDataSource,
  ww as useDefaultCopilotActions,
  Sw as useDndEvents,
  kw as useDraggable,
  _w as useDroppableList,
  Cw as useEmojiConfetti,
  Nv as useF0AiFormRegistry,
  Nw as useF0Dialog,
  ls as useF0Form,
  Bc as useF0FormDefinition,
  Dw as useGroups,
  Fw as useMessageSourcesAction,
  Tw as useOrchestratorThinkingAction,
  Jw as usePrivacyMode,
  Aw as useReducedMotion,
  kc as useSchemaDefinition,
  Ew as useSelectable,
  Rw as useXRay,
  Ie as withDataTestId
};
