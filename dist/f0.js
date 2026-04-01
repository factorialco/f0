import { w as Ie, C as Qn, h as Q, r as Jt, m as Vn, ac as Xs, ah as ja, az as su, k as io, S as Pe, u as Fe, t as ht, ag as au, j as ot, aA as iu, aB as ou, aC as $a, aD as lu, aE as cu, aF as oo, aG as uu, ai as Pr, ar as du, aH as fu, ak as lo, aI as hu, E as je, aq as mu, af as Hn, x as pu, aJ as co, z as uo, aK as Mr, aL as gu, aM as vu, aN as Wt, ae as fo, ax as bu, l as yu, q as xu, N as wu, aO as Su, aP as _u, aQ as ku, I as Cu, aR as Nu, aS as Du, aT as Fu, aU as Tu } from "./index-Bla76Kfk.js";
import { b1 as dx, au as fx, aV as hx, as as mx, at as px, ap as gx, aX as vx, y as bx, aY as yx, aw as xx, aZ as wx, a_ as Sx, a$ as _x, b2 as kx, aW as Cx, b3 as Nx, aj as Dx, b0 as Fx } from "./index-Bla76Kfk.js";
import { jsx as c, jsxs as A, Fragment as mt } from "react/jsx-runtime";
import * as xt from "react";
import ue, { forwardRef as nt, useRef as U, useImperativeHandle as Au, Children as dr, useCallback as O, useMemo as B, useState as J, useEffect as ae, createElement as nr, isValidElement as ho, Fragment as mo, useLayoutEffect as Eu, createContext as Ft, memo as po, useReducer as Ru, useContext as et, cloneElement as Iu, useId as Ks } from "react";
import { b1 as go, b2 as vo, X as Gn, aN as Ou, L as fr, a9 as Xn, b3 as Lu, ak as Ys, al as Js, an as ea, a6 as bo, b4 as hr, b5 as yo, b6 as Pu, I as Mu, b7 as Vu, b8 as Bu, b9 as ta, ba as za, bb as ju, bc as $u, W as na, bd as Bn, be as xo, bf as Vr, bg as zu, bh as ra, bi as wo, bj as hn, S as So, bk as qu, ap as sa, ad as Zu, bl as _o, bm as ko, l as jn, o as Fs, n as Co, bn as Uu, bo as No, bp as pn, bq as Wu, br as Qu, bs as Hu, bt as Gu, bu as Xu, bv as Ku, bw as Yu, bx as Ju, i as ed, by as Do, aF as Fo, aO as To, aD as Ao, bz as mr, bA as Eo, bB as aa, bC as ia, J as td, K as nd, M as rd, O as sd, P as as, ab as Ro, N as ad, bD as pr, Q as gr, R as qa, T as Za, bE as Io, U as Ua, V as Wa, bF as Br, bG as Oo, bH as oa, bI as la, bJ as id, aQ as od, aR as ld, bK as cd, bL as ud, aX as dd, aY as fd, a_ as hd, bM as Lo, bN as Po, bO as md, bP as pd, bQ as gd } from "./F0AiChat--Le5-xiy.js";
import { b_ as Ax, h as Ex, a3 as Rx, f as Ix, F as Ox, a as Lx, C as Px, b as Mx, aM as Vx, aV as Bx, a8 as jx, ao as $x, bU as zx, bV as qx, ca as Zx, j as Ux, bY as Wx, b$ as Qx, bX as Hx, bZ as Gx, bR as Xx, bS as Kx, bT as Yx, a2 as Jx, c4 as ew, c7 as tw, g as nw, c3 as rw, c2 as sw, c1 as aw, u as iw, c0 as ow, c5 as lw, c as cw, a4 as uw, Y as dw, c9 as fw, bW as hw, c6 as mw, e as pw, d as gw, c8 as vw } from "./F0AiChat--Le5-xiy.js";
import { unstable_batchedUpdates as rr, createPortal as vd, flushSync as bd } from "react-dom";
import { C as yd, F as Ts, R as xd, T as wd, a as Sd, S as Mo, b as ca, M as Vo, D as _d, $ as kd, d as Cd, c as Nd, B as Dd } from "./index-C8lw8tWx.js";
import { e as yw, P as xw, p as ww, s as Sw } from "./index-C8lw8tWx.js";
import { T as Fd, U as Td, W as Ad } from "./index-CVMdnZvT.js";
import { R as kw, _ as Cw, Q as Nw } from "./index-CVMdnZvT.js";
import { A as Fw, B as Tw, C as Aw, b as Ew, L as Rw, P as Iw, a as Ow, c as Lw, V as Pw } from "./exports-FbTPBrTd.js";
import { A as Vw, F as Bw, c as jw, d as $w, b as zw, a as qw, o as Zw, u as Uw } from "./F0HILActionConfirmation-hDO0jPIW.js";
import { defaultTranslations as Qw } from "./i18n-provider-defaults.js";
const Ed = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Rd = nt(function({ widgets: t, children: n }, r) {
  const s = U(null);
  Au(r, () => s.current);
  const a = dr.toArray(t).filter((i) => !!i).map((i, o) => /* @__PURE__ */ c("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, o));
  return /* @__PURE__ */ c(go, { layout: "home", children: /* @__PURE__ */ A("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ A("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ c(yd, { columns: Ed, showArrows: !1, children: a }),
      /* @__PURE__ */ c("main", { children: n })
    ] }),
    /* @__PURE__ */ A("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ c("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: a.slice(0, 3) }),
      /* @__PURE__ */ c("main", { className: "col-span-2", children: n }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-5", children: a.slice(3) })
    ] })
  ] }) });
}), Id = Jt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Bo = ue.forwardRef(({ children: e, variant: t, className: n, ...r }, s) => /* @__PURE__ */ c(go, { layout: "standard", children: /* @__PURE__ */ c(
  "section",
  {
    ref: s,
    className: Q("relative flex-1 overflow-auto", n),
    ...r,
    children: /* @__PURE__ */ c("div", { className: Q(Id({ variant: t })), children: e })
  }
) }));
Bo.displayName = "StandardLayout";
const Od = Ie(
  Qn(
    {
      name: "StandardLayout",
      type: "layout"
    },
    Bo
  )
), Ld = nt(
  function({
    children: t,
    sideContent: n,
    mainColumnPosition: r = "left",
    sticky: s = !1
  }, a) {
    return /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ A(
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
            Md,
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
), Pd = Ie(
  Qn(
    {
      name: "TwoColumnLayout",
      type: "layout"
    },
    Ld
  )
), Md = ({
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
), Vd = (e, t, n) => /* @__PURE__ */ c("div", { children: e }), jr = ({
  widgets: e = [],
  editMode: t = !1,
  onChange: n = () => {
  },
  WidgetWrapper: r = Vd,
  main: s = !1,
  deps: a
}) => {
  const i = O(
    (_, S, N) => /* @__PURE__ */ c(
      Vn.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: r(_, S, N)
      }
    ),
    [r]
  ), o = B(
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
  ), l = (_, S) => {
    if (typeof _.content == "function" && _.deps && S) {
      const N = {};
      return _.deps.forEach((T) => {
        typeof T == "string" && S[T] !== void 0 && (N[T] = S[T]);
      }), _.content(N);
    }
    return typeof _.content == "function" ? null : _.content;
  }, u = (_, S, N) => _.map((T) => {
    const L = l(T, N), E = {
      id: T.id,
      h: T.h ?? 1,
      w: T.w ?? 1,
      allowedSizes: T.availableSizes,
      noMove: !S,
      noResize: !S,
      locked: T.locked,
      meta: T.meta,
      _originalContent: L,
      content: i(L, T.meta, S)
    };
    return T.x !== void 0 && (E.x = T.x), T.y !== void 0 && (E.y = T.y), E;
  }), [d, f] = J(
    u(e, t)
  ), m = U(t), h = U(e), x = U(!1), w = U(/* @__PURE__ */ new Map()), g = U(e);
  g.current = e;
  const v = U(a), p = B(() => {
    const _ = /* @__PURE__ */ new Map();
    return !a || Object.keys(a).length === 0 || e.forEach((S) => {
      if (S.deps && S.deps.length > 0) {
        const N = S.deps.map((T) => typeof T == "string" && a[T] !== void 0 ? a[T] : T).filter((T) => T !== null);
        _.set(S.id, N);
      }
    }), _;
  }, [e, a]), y = O(
    (_) => {
      f(_), x.current || n(
        _.map((S) => {
          const N = g.current.find(
            (T) => T.id === S.id
          );
          return {
            id: S.id,
            w: S.w ?? 1,
            h: S.h ?? 1,
            allowedSizes: S.allowedSizes,
            meta: S.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof N?.content == "function" ? N.content : S._originalContent,
            x: S.x ?? 0,
            y: S.y ?? 0,
            locked: S.locked,
            deps: N?.deps
          };
        })
      ), x.current = !1;
    },
    [n]
  ), k = (_, S) => !_ && !S ? !1 : !_ || !S || _.length !== S.length ? !0 : _.some((N, T) => N !== S[T]);
  return ae(() => {
    const _ = m.current !== t, S = h.current !== e, N = v.current !== a && (v.current === void 0 || a === void 0 || Object.keys(v.current).length !== Object.keys(a).length || Object.keys(a).some(
      (I) => v.current?.[I] !== a[I]
    )), T = /* @__PURE__ */ new Map();
    e.forEach((I) => {
      if (I.deps && I.deps.length > 0) {
        const C = w.current.get(I.id), R = p.get(I.id);
        T.set(
          I.id,
          k(C, R)
        ), R ? w.current.set(I.id, R) : w.current.delete(I.id);
      }
    });
    const L = new Set(e.map((I) => I.id));
    w.current.forEach((I, C) => {
      L.has(C) || w.current.delete(C);
    });
    const E = Array.from(T.values()).some((I) => I) || N;
    _ && !S && !E ? (x.current = !0, f(
      (I) => I.map((C) => {
        const R = e.find((W) => W.id === C.id);
        if (!R)
          return C;
        const j = l(R, a);
        return {
          ...C,
          noMove: !t,
          noResize: !t,
          locked: R.locked,
          meta: R.meta,
          _originalContent: j,
          content: i(
            j,
            R.meta,
            t
          )
        };
      })
    )) : (S || E) && f((I) => {
      const C = new Map(
        I.map((R) => [R.id, R])
      );
      return e.map((R) => {
        const j = C.get(R.id), W = T.get(R.id) ?? !1;
        let oe;
        W || !j ? oe = l(R, a) : oe = j._originalContent ?? l(R, a);
        const G = {
          id: R.id,
          h: j?.h ?? R.h ?? 1,
          w: j?.w ?? R.w ?? 1,
          allowedSizes: R.availableSizes,
          noMove: !t,
          noResize: !t,
          locked: R.locked,
          meta: R.meta,
          _originalContent: oe,
          content: i(oe, R.meta, t)
        }, le = j?.x ?? R.x, ee = j?.y ?? R.y;
        return le !== void 0 && (G.x = le), ee !== void 0 && (G.y = ee), G;
      });
    }), m.current = t, h.current = e, v.current = a;
  }, [
    e,
    t,
    i,
    p,
    a
  ]), /* @__PURE__ */ c(
    vo,
    {
      className: Q(s && "h-full flex-1 overflow-auto"),
      options: o,
      onChange: y,
      widgets: d
    }
  );
};
jr.displayName = "GroupGrid";
jr.__isPageLayoutGroup = !0;
const Bd = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutBlock = !0, n;
}, jd = (e, t) => {
  const n = t;
  return n.displayName = e, n.__isPageLayoutGroup = !0, n;
}, $d = (e, t) => /* @__PURE__ */ c(
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
), jo = nt($d), zd = [
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
], $o = nt((e, t) => {
  const n = zd.reduce((r, s) => {
    const { [s]: a, ...i } = r;
    return i;
  }, e);
  return /* @__PURE__ */ c(
    Xs,
    {
      ...n,
      variant: "ai",
      ref: t,
      iconRotate: e.icon == jo
    }
  );
});
$o.displayName = "AIButton";
const Fn = Jt({
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
}), qd = {
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
}, ua = nt(
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
    ...u
  }, d) => {
    const f = s ?? qd[t ?? "body"], m = l ? /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (a !== void 0) {
      const h = typeof a == "number" ? a : 1;
      return m ? nr(
        f,
        {
          ...u,
          className: Q(
            Fn({ variant: t, align: n }),
            r,
            "inline-flex gap-0.5"
          ),
          ref: d
        },
        /* @__PURE__ */ c(
          ja,
          {
            lines: h,
            noTooltip: i,
            tag: "span",
            className: "min-w-0",
            markdown: o,
            children: e
          }
        ),
        m
      ) : /* @__PURE__ */ c(
        ja,
        {
          ref: d,
          lines: h,
          noTooltip: i,
          tag: f,
          className: Q(Fn({ variant: t, align: n }), r),
          markdown: o,
          ...u,
          children: e
        }
      );
    }
    if (o) {
      const h = su(e);
      return m ? nr(
        f,
        {
          ...u,
          className: Q(Fn({ variant: t, align: n }), r),
          ref: d
        },
        /* @__PURE__ */ c("span", { dangerouslySetInnerHTML: { __html: h } }),
        m
      ) : nr(f, {
        ...u,
        className: Q(Fn({ variant: t, align: n }), r),
        ref: d,
        dangerouslySetInnerHTML: { __html: h }
      });
    }
    return nr(
      f,
      {
        ...u,
        className: Q(Fn({ variant: t, align: n }), r),
        ref: d
      },
      e,
      m
    );
  }
);
ua.displayName = "Text";
const zo = nt((e, t) => /* @__PURE__ */ c(ua, { ref: t, markdown: e.markdown ?? !0, ...e }));
zo.displayName = "F0Text";
const qo = Ie(zo), Sy = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Zo = ({
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
  const [u, d] = J(!1), [f, m] = J(!1), h = Fe(), x = (g) => {
    d(g);
  }, w = f || u;
  return ae(() => {
    if (!s || !r) return;
    const g = () => {
      r();
    };
    return document.addEventListener("mouseup", g), () => {
      document.removeEventListener("mouseup", g);
    };
  }, [s, r]), /* @__PURE__ */ A(
    "div",
    {
      className: Q(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        t && u ? "border-f1-border-hover" : t && "hover:border-f1-border-hover",
        l && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        s && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      children: [
        /* @__PURE__ */ A("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ A(
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
                    children: /* @__PURE__ */ c(ht, { icon: Gn, size: "xs" })
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: Q(
                      "flex min-w-0 flex-1 items-center",
                      t && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ c(qo, { variant: "label", content: e, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ c(au, { children: (a || i) && w && /* @__PURE__ */ A(
            Vn.div,
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
                  $o,
                  {
                    size: "sm",
                    label: h.ai.ask,
                    onClick: a,
                    icon: jo
                  }
                ) }),
                i && /* @__PURE__ */ c(
                  Ou,
                  {
                    items: i,
                    open: u,
                    onOpenChange: x,
                    align: "end",
                    children: /* @__PURE__ */ c(
                      Xs,
                      {
                        icon: fr,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: u
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
}, Zd = () => /* @__PURE__ */ A("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ c("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ c(Pe, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ A("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ c(Pe, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
Zo.displayName = "F0Widget";
const Ud = io(Zo, Zd), Wd = ({
  children: e,
  title: t,
  draggable: n = !1,
  actions: r,
  aiButton: s
}) => /* @__PURE__ */ c(
  Ud,
  {
    title: t,
    draggable: n,
    actions: r,
    AIButton: s,
    children: e
  }
), Uo = ({
  widgets: e,
  editMode: t = !1,
  onChange: n = () => {
  },
  deps: r,
  ...s
}) => /* @__PURE__ */ c(
  jr,
  {
    widgets: e,
    editMode: t,
    onChange: n,
    deps: r,
    ...s,
    WidgetWrapper: (a, i, o) => /* @__PURE__ */ c(
      Wd,
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
Uo.displayName = "Dashboard";
const Qd = jd("Dashboard", Uo), _y = Ie(
  ot("Dashboard", Qd)
), Hd = Jt({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Gd = (e) => (e || []).map((t) => t.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n), t), []), Xd = (e) => {
  const t = (n) => "onClick" in n;
  return Array.isArray(e) ? e.every(t) ? [
    {
      items: e
    }
  ] : e : [e];
}, $r = nt(
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
    ...u
  }, d) => {
    const f = B(
      () => Xd(u.actions || []),
      [u.actions]
    ), m = B(
      () => f.flatMap((x) => x.items),
      [f]
    ), h = B(
      () => m.length > 0 || !!l,
      [m, l]
    );
    return /* @__PURE__ */ A(
      "div",
      {
        ref: d,
        className: Q(Hd({ variant: t }), "relative", n),
        draggable: r,
        onDragStart: s,
        onDragEnd: a,
        onDrop: i,
        "data-drag-id": o,
        ...u,
        children: [
          h && /* @__PURE__ */ A("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!l && l,
            m.length > 0 && /* @__PURE__ */ c(
              Xn,
              {
                items: Gd(f),
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
$r.displayName = "Block";
$r.__isPageLayoutBlock = !0;
const Kd = ({
  title: e = "",
  description: t,
  titleLevel: n = "h2",
  children: r,
  className: s,
  ...a
}) => {
  if (!e) return null;
  const i = n;
  return /* @__PURE__ */ A($r, { ...a, className: Q("space-y-4", s), children: [
    /* @__PURE__ */ A("div", { className: "space-y-2", children: [
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
}, Yd = Bd(
  "BlockContent",
  Kd
), Jd = (e) => !ho(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutBlock" in e.type, ef = (e) => !ho(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutGroup" in e.type, Wo = (e, t, n) => {
  const r = dr.toArray(t);
  for (const s of r)
    n.includes("block") && Jd(s) || n.includes("group") && ef(s) || console.warn(
      `${e}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      s
    );
}, da = nt(
  ({ children: e, onSort: t, ...n }, r) => {
    Wo("GroupLinear", e, ["block"]);
    const [s, a] = J(dr.toArray(e));
    return ae(() => {
      a(dr.toArray(e));
    }, [e]), ae(() => {
      t?.(s);
    }, [s, t]), /* @__PURE__ */ c("div", { ref: r, ...n, children: s.map((i, o) => /* @__PURE__ */ c(mo, { children: i }, o)) });
  }
);
da.displayName = "GroupLinear";
da.__isPageLayoutGroup = !0;
function tf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return B(
    () => (r) => {
      t.forEach((s) => s(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const zr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function wn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function fa(e) {
  return "nodeType" in e;
}
function rt(e) {
  var t, n;
  return e ? wn(e) ? e : fa(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ha(e) {
  const {
    Document: t
  } = rt(e);
  return e instanceof t;
}
function Kn(e) {
  return wn(e) ? !1 : e instanceof rt(e).HTMLElement;
}
function Qo(e) {
  return e instanceof rt(e).SVGElement;
}
function Sn(e) {
  return e ? wn(e) ? e.document : fa(e) ? ha(e) ? e : Kn(e) || Qo(e) ? e.ownerDocument : document : document : document;
}
const Nt = zr ? Eu : ae;
function qr(e) {
  const t = U(e);
  return Nt(() => {
    t.current = e;
  }), O(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function nf() {
  const e = U(null), t = O((r, s) => {
    e.current = setInterval(r, s);
  }, []), n = O(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function $n(e, t) {
  t === void 0 && (t = [e]);
  const n = U(e);
  return Nt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Yn(e, t) {
  const n = U();
  return B(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function vr(e) {
  const t = qr(e), n = U(null), r = O(
    (s) => {
      s !== n.current && t?.(s, n.current), n.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function br(e) {
  const t = U();
  return ae(() => {
    t.current = e;
  }, [e]), t.current;
}
let is = {};
function Jn(e, t) {
  return B(() => {
    if (t)
      return t;
    const n = is[e] == null ? 0 : is[e] + 1;
    return is[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ho(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((a, i) => {
      const o = Object.entries(i);
      for (const [l, u] of o) {
        const d = a[l];
        d != null && (a[l] = d + e * u);
      }
      return a;
    }, {
      ...t
    });
  };
}
const mn = /* @__PURE__ */ Ho(1), zn = /* @__PURE__ */ Ho(-1);
function rf(e) {
  return "clientX" in e && "clientY" in e;
}
function Zr(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = rt(e.target);
  return t && e instanceof t;
}
function sf(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = rt(e.target);
  return t && e instanceof t;
}
function yr(e) {
  if (sf(e)) {
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
  return rf(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Xt = /* @__PURE__ */ Object.freeze({
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
        return [Xt.Translate.toString(e), Xt.Scale.toString(e)].join(" ");
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
}), Qa = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function af(e) {
  return e.matches(Qa) ? e : e.querySelector(Qa);
}
const of = {
  display: "none"
};
function lf(e) {
  let {
    id: t,
    value: n
  } = e;
  return ue.createElement("div", {
    id: t,
    style: of
  }, n);
}
function cf(e) {
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
  const [e, t] = J("");
  return {
    announce: O((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Go = /* @__PURE__ */ Ft(null);
function df(e) {
  const t = et(Go);
  ae(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function ff() {
  const [e] = J(() => /* @__PURE__ */ new Set()), t = O((r) => (e.add(r), () => e.delete(r)), [e]);
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
const hf = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, mf = {
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
function pf(e) {
  let {
    announcements: t = mf,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = hf
  } = e;
  const {
    announce: a,
    announcement: i
  } = uf(), o = Jn("DndLiveRegion"), [l, u] = J(!1);
  if (ae(() => {
    u(!0);
  }, []), df(B(() => ({
    onDragStart(f) {
      let {
        active: m
      } = f;
      a(t.onDragStart({
        active: m
      }));
    },
    onDragMove(f) {
      let {
        active: m,
        over: h
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: m,
        over: h
      }));
    },
    onDragOver(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragOver({
        active: m,
        over: h
      }));
    },
    onDragEnd(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragEnd({
        active: m,
        over: h
      }));
    },
    onDragCancel(f) {
      let {
        active: m,
        over: h
      } = f;
      a(t.onDragCancel({
        active: m,
        over: h
      }));
    }
  }), [a, t])), !l)
    return null;
  const d = ue.createElement(ue.Fragment, null, ue.createElement(lf, {
    id: r,
    value: s.draggable
  }), ue.createElement(cf, {
    id: o,
    announcement: i
  }));
  return n ? vd(d, n) : d;
}
var Ze;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ze || (Ze = {}));
function xr() {
}
function Ha(e, t) {
  return B(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function gf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return B(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Dt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function vf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function bf(e, t) {
  const n = yr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function yf(e, t) {
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
  return r - n;
}
function Ga(e) {
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
function Xo(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const wf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = Ga(t), a = [];
  for (const i of r) {
    const {
      id: o
    } = i, l = n.get(o);
    if (l) {
      const u = Ga(l), d = s.reduce((m, h, x) => m + vf(u[x], h), 0), f = Number((d / 4).toFixed(4));
      a.push({
        id: o,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return a.sort(yf);
};
function Sf(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), s = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), i = s - r, o = a - n;
  if (r < s && n < a) {
    const l = t.width * t.height, u = e.width * e.height, d = i * o, f = d / (l + u - d);
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
      const l = Sf(o, t);
      l > 0 && s.push({
        id: i,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return s.sort(xf);
};
function kf(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Ko(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Dt;
}
function Cf(e) {
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
const Nf = /* @__PURE__ */ Cf(1);
function Yo(e) {
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
function Df(e, t, n) {
  const r = Yo(t);
  if (!r)
    return e;
  const {
    scaleX: s,
    scaleY: a,
    x: i,
    y: o
  } = r, l = e.left - i - (1 - s) * parseFloat(n), u = e.top - o - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = s ? e.width / s : e.width, f = a ? e.height / a : e.height;
  return {
    width: d,
    height: f,
    top: u,
    right: l + d,
    bottom: u + f,
    left: l
  };
}
const Ff = {
  ignoreTransform: !1
};
function _n(e, t) {
  t === void 0 && (t = Ff);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: d
    } = rt(e).getComputedStyle(e);
    u && (n = Df(n, u, d));
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
function Xa(e) {
  return _n(e, {
    ignoreTransform: !0
  });
}
function Tf(e) {
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
function Af(e, t) {
  return t === void 0 && (t = rt(e).getComputedStyle(e)), t.position === "fixed";
}
function Ef(e, t) {
  t === void 0 && (t = rt(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const a = t[s];
    return typeof a == "string" ? n.test(a) : !1;
  });
}
function Ur(e, t) {
  const n = [];
  function r(s) {
    if (t != null && n.length >= t || !s)
      return n;
    if (ha(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
      return n.push(s.scrollingElement), n;
    if (!Kn(s) || Qo(s) || n.includes(s))
      return n;
    const a = rt(e).getComputedStyle(s);
    return s !== e && Ef(s, a) && n.push(s), Af(s, a) ? n : r(s.parentNode);
  }
  return e ? r(e) : n;
}
function Jo(e) {
  const [t] = Ur(e, 1);
  return t ?? null;
}
function os(e) {
  return !zr || !e ? null : wn(e) ? e : fa(e) ? ha(e) || e === Sn(e).scrollingElement ? window : Kn(e) ? e : null : null;
}
function el(e) {
  return wn(e) ? e.scrollX : e.scrollLeft;
}
function tl(e) {
  return wn(e) ? e.scrollY : e.scrollTop;
}
function As(e) {
  return {
    x: el(e),
    y: tl(e)
  };
}
var Ue;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ue || (Ue = {}));
function nl(e) {
  return !zr || !e ? !1 : e === document.scrollingElement;
}
function rl(e) {
  const t = {
    x: 0,
    y: 0
  }, n = nl(e) ? {
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
const Rf = {
  x: 0.2,
  y: 0.2
};
function If(e, t, n, r, s) {
  let {
    top: a,
    left: i,
    right: o,
    bottom: l
  } = n;
  r === void 0 && (r = 10), s === void 0 && (s = Rf);
  const {
    isTop: u,
    isBottom: d,
    isLeft: f,
    isRight: m
  } = rl(e), h = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, w = {
    height: t.height * s.y,
    width: t.width * s.x
  };
  return !u && a <= t.top + w.height ? (h.y = Ue.Backward, x.y = r * Math.abs((t.top + w.height - a) / w.height)) : !d && l >= t.bottom - w.height && (h.y = Ue.Forward, x.y = r * Math.abs((t.bottom - w.height - l) / w.height)), !m && o >= t.right - w.width ? (h.x = Ue.Forward, x.x = r * Math.abs((t.right - w.width - o) / w.width)) : !f && i <= t.left + w.width && (h.x = Ue.Backward, x.x = r * Math.abs((t.left + w.width - i) / w.width)), {
    direction: h,
    speed: x
  };
}
function Of(e) {
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
function sl(e) {
  return e.reduce((t, n) => mn(t, As(n)), Dt);
}
function Lf(e) {
  return e.reduce((t, n) => t + el(n), 0);
}
function Pf(e) {
  return e.reduce((t, n) => t + tl(n), 0);
}
function al(e, t) {
  if (t === void 0 && (t = _n), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: s,
    right: a
  } = t(e);
  Jo(e) && (s <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Mf = [["x", ["left", "right"], Lf], ["y", ["top", "bottom"], Pf]];
class ma {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Ur(n), s = sl(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, i, o] of Mf)
      for (const l of i)
        Object.defineProperty(this, l, {
          get: () => {
            const u = o(r), d = s[a] - u;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class In {
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
  } = rt(e);
  return e instanceof t ? e : Sn(e);
}
function ls(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var bt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(bt || (bt = {}));
function Ka(e) {
  e.preventDefault();
}
function Bf(e) {
  e.stopPropagation();
}
var ye;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ye || (ye = {}));
const il = {
  start: [ye.Space, ye.Enter],
  cancel: [ye.Esc],
  end: [ye.Space, ye.Enter, ye.Tab]
}, jf = (e, t) => {
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
class pa {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new In(Sn(n)), this.windowListeners = new In(rt(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(bt.Resize, this.handleCancel), this.windowListeners.add(bt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(bt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && al(r), n(Dt);
  }
  handleKeyDown(t) {
    if (Zr(t)) {
      const {
        active: n,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: a = il,
        coordinateGetter: i = jf,
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
        collisionRect: u
      } = r.current, d = u ? {
        x: u.left,
        y: u.top
      } : Dt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (f) {
        const m = zn(f, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = r.current;
        for (const w of x) {
          const g = t.code, {
            isTop: v,
            isRight: p,
            isLeft: y,
            isBottom: k,
            maxScroll: _,
            minScroll: S
          } = rl(w), N = Of(w), T = {
            x: Math.min(g === ye.Right ? N.right - N.width / 2 : N.right, Math.max(g === ye.Right ? N.left : N.left + N.width / 2, f.x)),
            y: Math.min(g === ye.Down ? N.bottom - N.height / 2 : N.bottom, Math.max(g === ye.Down ? N.top : N.top + N.height / 2, f.y))
          }, L = g === ye.Right && !p || g === ye.Left && !y, E = g === ye.Down && !k || g === ye.Up && !v;
          if (L && T.x !== f.x) {
            const I = w.scrollLeft + m.x, C = g === ye.Right && I <= _.x || g === ye.Left && I >= S.x;
            if (C && !m.y) {
              w.scrollTo({
                left: I,
                behavior: o
              });
              return;
            }
            C ? h.x = w.scrollLeft - I : h.x = g === ye.Right ? w.scrollLeft - _.x : w.scrollLeft - S.x, h.x && w.scrollBy({
              left: -h.x,
              behavior: o
            });
            break;
          } else if (E && T.y !== f.y) {
            const I = w.scrollTop + m.y, C = g === ye.Down && I <= _.y || g === ye.Up && I >= S.y;
            if (C && !m.x) {
              w.scrollTo({
                top: I,
                behavior: o
              });
              return;
            }
            C ? h.y = w.scrollTop - I : h.y = g === ye.Down ? w.scrollTop - _.y : w.scrollTop - S.y, h.y && w.scrollBy({
              top: -h.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(t, mn(zn(f, this.referenceCoordinates), h));
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
pa.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = il,
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
function Ya(e) {
  return !!(e && "distance" in e);
}
function Ja(e) {
  return !!(e && "delay" in e);
}
class ga {
  constructor(t, n, r) {
    var s;
    r === void 0 && (r = Vf(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: a
    } = t, {
      target: i
    } = a;
    this.props = t, this.events = n, this.document = Sn(i), this.documentListeners = new In(this.document), this.listeners = new In(r), this.windowListeners = new In(rt(i)), this.initialCoordinates = (s = yr(a)) != null ? s : Dt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(bt.Resize, this.handleCancel), this.windowListeners.add(bt.DragStart, Ka), this.windowListeners.add(bt.VisibilityChange, this.handleCancel), this.windowListeners.add(bt.ContextMenu, Ka), this.documentListeners.add(bt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ja(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ya(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(bt.Click, Bf, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(bt.SelectionChange, this.removeTextSelection), n(t));
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
    const l = (n = yr(t)) != null ? n : Dt, u = zn(s, l);
    if (!r && o) {
      if (Ya(o)) {
        if (o.tolerance != null && ls(u, o.tolerance))
          return this.handleCancel();
        if (ls(u, o.distance))
          return this.handleStart();
      }
      if (Ja(o) && ls(u, o.tolerance))
        return this.handleCancel();
      this.handlePending(o, u);
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
const $f = {
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
class va extends ga {
  constructor(t) {
    const {
      event: n
    } = t, r = Sn(n.target);
    super(t, $f, r);
  }
}
va.activators = [{
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
const zf = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Es;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Es || (Es = {}));
class qf extends ga {
  constructor(t) {
    super(t, zf, Sn(t.event.target));
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
    return n.button === Es.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const cs = {
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
class Zf extends ga {
  constructor(t) {
    super(t, cs);
  }
  static setup() {
    return window.addEventListener(cs.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(cs.move.name, t);
    };
    function t() {
    }
  }
}
Zf.activators = [{
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
var On;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(On || (On = {}));
var wr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(wr || (wr = {}));
function Uf(e) {
  let {
    acceleration: t,
    activator: n = On.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: a,
    interval: i = 5,
    order: o = wr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: d,
    delta: f,
    threshold: m
  } = e;
  const h = Qf({
    delta: f,
    disabled: !a
  }), [x, w] = nf(), g = U({
    x: 0,
    y: 0
  }), v = U({
    x: 0,
    y: 0
  }), p = B(() => {
    switch (n) {
      case On.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case On.DraggableRect:
        return s;
    }
  }, [n, s, l]), y = U(null), k = O(() => {
    const S = y.current;
    if (!S)
      return;
    const N = g.current.x * v.current.x, T = g.current.y * v.current.y;
    S.scrollBy(N, T);
  }, []), _ = B(() => o === wr.TreeOrder ? [...u].reverse() : u, [o, u]);
  ae(
    () => {
      if (!a || !u.length || !p) {
        w();
        return;
      }
      for (const S of _) {
        if (r?.(S) === !1)
          continue;
        const N = u.indexOf(S), T = d[N];
        if (!T)
          continue;
        const {
          direction: L,
          speed: E
        } = If(S, T, p, t, m);
        for (const I of ["x", "y"])
          h[I][L[I]] || (E[I] = 0, L[I] = 0);
        if (E.x > 0 || E.y > 0) {
          w(), y.current = S, x(k, i), g.current = E, v.current = L;
          return;
        }
      }
      g.current = {
        x: 0,
        y: 0
      }, v.current = {
        x: 0,
        y: 0
      }, w();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      k,
      r,
      w,
      a,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      x,
      u,
      _,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const Wf = {
  x: {
    [Ue.Backward]: !1,
    [Ue.Forward]: !1
  },
  y: {
    [Ue.Backward]: !1,
    [Ue.Forward]: !1
  }
};
function Qf(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = br(t);
  return Yn((s) => {
    if (n || !r || !s)
      return Wf;
    const a = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ue.Backward]: s.x[Ue.Backward] || a.x === -1,
        [Ue.Forward]: s.x[Ue.Forward] || a.x === 1
      },
      y: {
        [Ue.Backward]: s.y[Ue.Backward] || a.y === -1,
        [Ue.Forward]: s.y[Ue.Forward] || a.y === 1
      }
    };
  }, [n, t, r]);
}
function Hf(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Yn((s) => {
    var a;
    return t == null ? null : (a = r ?? s) != null ? a : null;
  }, [r, t]);
}
function Gf(e, t) {
  return B(() => e.reduce((n, r) => {
    const {
      sensor: s
    } = r, a = s.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...a];
  }, []), [e, t]);
}
var qn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(qn || (qn = {}));
var Rs;
(function(e) {
  e.Optimized = "optimized";
})(Rs || (Rs = {}));
const ei = /* @__PURE__ */ new Map();
function Xf(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: s
  } = t;
  const [a, i] = J(null), {
    frequency: o,
    measure: l,
    strategy: u
  } = s, d = U(e), f = g(), m = $n(f), h = O(function(v) {
    v === void 0 && (v = []), !m.current && i((p) => p === null ? v : p.concat(v.filter((y) => !p.includes(y))));
  }, [m]), x = U(null), w = Yn((v) => {
    if (f && !n)
      return ei;
    if (!v || v === ei || d.current !== e || a != null) {
      const p = /* @__PURE__ */ new Map();
      for (let y of e) {
        if (!y)
          continue;
        if (a && a.length > 0 && !a.includes(y.id) && y.rect.current) {
          p.set(y.id, y.rect.current);
          continue;
        }
        const k = y.node.current, _ = k ? new ma(l(k), k) : null;
        y.rect.current = _, _ && p.set(y.id, _);
      }
      return p;
    }
    return v;
  }, [e, a, n, f, l]);
  return ae(() => {
    d.current = e;
  }, [e]), ae(
    () => {
      f || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), ae(
    () => {
      a && a.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(a)]
  ), ae(
    () => {
      f || typeof o != "number" || x.current !== null || (x.current = setTimeout(() => {
        h(), x.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, f, h, ...r]
  ), {
    droppableRects: w,
    measureDroppableContainers: h,
    measuringScheduled: a != null
  };
  function g() {
    switch (u) {
      case qn.Always:
        return !1;
      case qn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function ba(e, t) {
  return Yn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Kf(e, t) {
  return ba(e, t);
}
function Yf(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = qr(t), s = B(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(r);
  }, [r, n]);
  return ae(() => () => s?.disconnect(), [s]), s;
}
function Wr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = qr(t), s = B(
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
  return ae(() => () => s?.disconnect(), [s]), s;
}
function Jf(e) {
  return new ma(_n(e), e);
}
function ti(e, t, n) {
  t === void 0 && (t = Jf);
  const [r, s] = J(null);
  function a() {
    s((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var u;
        return (u = l ?? n) != null ? u : null;
      }
      const d = t(e);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const i = Yf({
    callback(l) {
      if (e)
        for (const u of l) {
          const {
            type: d,
            target: f
          } = u;
          if (d === "childList" && f instanceof HTMLElement && f.contains(e)) {
            a();
            break;
          }
        }
    }
  }), o = Wr({
    callback: a
  });
  return Nt(() => {
    a(), e ? (o?.observe(e), i?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), i?.disconnect());
  }, [e]), r;
}
function eh(e) {
  const t = ba(e);
  return Ko(e, t);
}
const ni = [];
function th(e) {
  const t = U(e), n = Yn((r) => e ? r && r !== ni && e && t.current && e.parentNode === t.current.parentNode ? r : Ur(e) : ni, [e]);
  return ae(() => {
    t.current = e;
  }, [e]), n;
}
function nh(e) {
  const [t, n] = J(null), r = U(e), s = O((a) => {
    const i = os(a.target);
    i && n((o) => o ? (o.set(i, As(i)), new Map(o)) : null);
  }, []);
  return ae(() => {
    const a = r.current;
    if (e !== a) {
      i(a);
      const o = e.map((l) => {
        const u = os(l);
        return u ? (u.addEventListener("scroll", s, {
          passive: !0
        }), [u, As(u)]) : null;
      }).filter((l) => l != null);
      n(o.length ? new Map(o) : null), r.current = e;
    }
    return () => {
      i(e), i(a);
    };
    function i(o) {
      o.forEach((l) => {
        const u = os(l);
        u?.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), B(() => e.length ? t ? Array.from(t.values()).reduce((a, i) => mn(a, i), Dt) : sl(e) : Dt, [e, t]);
}
function ri(e, t) {
  t === void 0 && (t = []);
  const n = U(null);
  return ae(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ae(() => {
    const r = e !== Dt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? zn(e, n.current) : Dt;
}
function rh(e) {
  ae(
    () => {
      if (!zr)
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
function sh(e, t) {
  return B(() => e.reduce((n, r) => {
    let {
      eventName: s,
      handler: a
    } = r;
    return n[s] = (i) => {
      a(i, t);
    }, n;
  }, {}), [e, t]);
}
function ol(e) {
  return B(() => e ? Tf(e) : null, [e]);
}
const si = [];
function ah(e, t) {
  t === void 0 && (t = _n);
  const [n] = e, r = ol(n ? rt(n) : null), [s, a] = J(si);
  function i() {
    a(() => e.length ? e.map((l) => nl(l) ? r : new ma(t(l), l)) : si);
  }
  const o = Wr({
    callback: i
  });
  return Nt(() => {
    o?.disconnect(), i(), e.forEach((l) => o?.observe(l));
  }, [e]), s;
}
function ll(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Kn(t) ? t : e;
}
function ih(e) {
  let {
    measure: t
  } = e;
  const [n, r] = J(null), s = O((u) => {
    for (const {
      target: d
    } of u)
      if (Kn(d)) {
        r((f) => {
          const m = t(d);
          return f ? {
            ...f,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), a = Wr({
    callback: s
  }), i = O((u) => {
    const d = ll(u);
    a?.disconnect(), d && a?.observe(d), r(d ? t(d) : null);
  }, [t, a]), [o, l] = vr(i);
  return B(() => ({
    nodeRef: o,
    rect: n,
    setRef: l
  }), [n, o, l]);
}
const oh = [{
  sensor: va,
  options: {}
}, {
  sensor: pa,
  options: {}
}], lh = {
  current: {}
}, lr = {
  draggable: {
    measure: Xa
  },
  droppable: {
    measure: Xa,
    strategy: qn.WhileDragging,
    frequency: Rs.Optimized
  },
  dragOverlay: {
    measure: _n
  }
};
class Ln extends Map {
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
const ch = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Ln(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: xr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: lr,
  measureDroppableContainers: xr,
  windowRect: null,
  measuringScheduled: !1
}, cl = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: xr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: xr
}, er = /* @__PURE__ */ Ft(cl), ul = /* @__PURE__ */ Ft(ch);
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
      containers: new Ln()
    }
  };
}
function dh(e, t) {
  switch (t.type) {
    case Ze.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ze.DragMove:
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
    case Ze.DragEnd:
    case Ze.DragCancel:
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
    case Ze.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, s = new Ln(e.droppable.containers);
      return s.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case Ze.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: s
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Ln(e.droppable.containers);
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
    case Ze.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const a = new Ln(e.droppable.containers);
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
function fh(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: s
  } = et(er), a = br(r), i = br(n?.id);
  return ae(() => {
    if (!t && !r && a && i != null) {
      if (!Zr(a) || document.activeElement === a.target)
        return;
      const o = s.get(i);
      if (!o)
        return;
      const {
        activatorNode: l,
        node: u
      } = o;
      if (!l.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, u.current]) {
          if (!d)
            continue;
          const f = af(d);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, s, i, a]), null;
}
function dl(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((s, a) => a({
    transform: s,
    ...r
  }), n) : n;
}
function hh(e) {
  return B(
    () => ({
      draggable: {
        ...lr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...lr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...lr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function mh(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: s = !0
  } = e;
  const a = U(!1), {
    x: i,
    y: o
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  Nt(() => {
    if (!i && !o || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !r)
      return;
    const u = t?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const d = n(u), f = Ko(d, r);
    if (i || (f.x = 0), o || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const m = Jo(u);
      m && m.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, i, o, r, n]);
}
const Qr = /* @__PURE__ */ Ft({
  ...Dt,
  scaleX: 1,
  scaleY: 1
});
var Zt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Zt || (Zt = {}));
const ph = /* @__PURE__ */ po(function(t) {
  var n, r, s, a;
  let {
    id: i,
    accessibility: o,
    autoScroll: l = !0,
    children: u,
    sensors: d = oh,
    collisionDetection: f = _f,
    measuring: m,
    modifiers: h,
    ...x
  } = t;
  const w = Ru(dh, void 0, uh), [g, v] = w, [p, y] = ff(), [k, _] = J(Zt.Uninitialized), S = k === Zt.Initialized, {
    draggable: {
      active: N,
      nodes: T,
      translate: L
    },
    droppable: {
      containers: E
    }
  } = g, I = N != null ? T.get(N) : null, C = U({
    initial: null,
    translated: null
  }), R = B(() => {
    var He;
    return N != null ? {
      id: N,
      // It's possible for the active node to unmount while dragging
      data: (He = I?.data) != null ? He : lh,
      rect: C
    } : null;
  }, [N, I]), j = U(null), [W, oe] = J(null), [G, le] = J(null), ee = $n(x, Object.values(x)), me = Jn("DndDescribedBy", i), Y = B(() => E.getEnabled(), [E]), z = hh(m), {
    droppableRects: $,
    measureDroppableContainers: fe,
    measuringScheduled: ke
  } = Xf(Y, {
    dragging: S,
    dependencies: [L.x, L.y],
    config: z.droppable
  }), se = Hf(T, N), pe = B(() => G ? yr(G) : null, [G]), be = ru(), ie = Kf(se, z.draggable.measure);
  mh({
    activeNode: N != null ? T.get(N) : null,
    config: be.layoutShiftCompensation,
    initialRect: ie,
    measure: z.draggable.measure
  });
  const X = ti(se, z.draggable.measure, ie), ce = ti(se ? se.parentElement : null), Ne = U({
    activatorEvent: null,
    active: null,
    activeNode: se,
    collisionRect: null,
    collisions: null,
    droppableRects: $,
    draggableNodes: T,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Te = E.getNodeFor((n = Ne.current.over) == null ? void 0 : n.id), Le = ih({
    measure: z.dragOverlay.measure
  }), Ge = (r = Le.nodeRef.current) != null ? r : se, Xe = S ? (s = Le.rect) != null ? s : X : null, ct = !!(Le.nodeRef.current && Le.rect), b = eh(ct ? null : X), D = ol(Ge ? rt(Ge) : null), F = th(S ? Te ?? se : null), Z = ah(F), M = dl(h, {
    transform: {
      x: L.x - b.x,
      y: L.y - b.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: G,
    active: R,
    activeNodeRect: X,
    containerNodeRect: ce,
    draggingNodeRect: Xe,
    over: Ne.current.over,
    overlayNodeRect: Le.rect,
    scrollableAncestors: F,
    scrollableAncestorRects: Z,
    windowRect: D
  }), P = pe ? mn(pe, L) : null, ne = nh(F), de = ri(ne), Ee = ri(ne, [X]), Se = mn(M, de), We = Xe ? Nf(Xe, M) : null, Lt = R && We ? f({
    active: R,
    collisionRect: We,
    droppableRects: $,
    droppableContainers: Y,
    pointerCoordinates: P
  }) : null, Pt = Xo(Lt, "id"), [ge, Re] = J(null), Oe = ct ? M : mn(M, Ee), Ke = kf(Oe, (a = ge?.rect) != null ? a : null, X), Tt = U(null), Va = O(
    (He, ut) => {
      let {
        sensor: dt,
        options: $t
      } = ut;
      if (j.current == null)
        return;
      const gt = T.get(j.current);
      if (!gt)
        return;
      const ft = He.nativeEvent, At = new dt({
        active: j.current,
        activeNode: gt,
        event: ft,
        options: $t,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Ne,
        onAbort(Qe) {
          if (!T.get(Qe))
            return;
          const {
            onDragAbort: Et
          } = ee.current, Mt = {
            id: Qe
          };
          Et?.(Mt), p({
            type: "onDragAbort",
            event: Mt
          });
        },
        onPending(Qe, zt, Et, Mt) {
          if (!T.get(Qe))
            return;
          const {
            onDragPending: Nn
          } = ee.current, qt = {
            id: Qe,
            constraint: zt,
            initialCoordinates: Et,
            offset: Mt
          };
          Nn?.(qt), p({
            type: "onDragPending",
            event: qt
          });
        },
        onStart(Qe) {
          const zt = j.current;
          if (zt == null)
            return;
          const Et = T.get(zt);
          if (!Et)
            return;
          const {
            onDragStart: Mt
          } = ee.current, Cn = {
            activatorEvent: ft,
            active: {
              id: zt,
              data: Et.data,
              rect: C
            }
          };
          rr(() => {
            Mt?.(Cn), _(Zt.Initializing), v({
              type: Ze.DragStart,
              initialCoordinates: Qe,
              active: zt
            }), p({
              type: "onDragStart",
              event: Cn
            }), oe(Tt.current), le(ft);
          });
        },
        onMove(Qe) {
          v({
            type: Ze.DragMove,
            coordinates: Qe
          });
        },
        onEnd: cn(Ze.DragEnd),
        onCancel: cn(Ze.DragCancel)
      });
      Tt.current = At;
      function cn(Qe) {
        return async function() {
          const {
            active: Et,
            collisions: Mt,
            over: Cn,
            scrollAdjustedTranslate: Nn
          } = Ne.current;
          let qt = null;
          if (Et && Nn) {
            const {
              cancelDrop: Dn
            } = ee.current;
            qt = {
              activatorEvent: ft,
              active: Et,
              collisions: Mt,
              delta: Nn,
              over: Cn
            }, Qe === Ze.DragEnd && typeof Dn == "function" && await Promise.resolve(Dn(qt)) && (Qe = Ze.DragCancel);
          }
          j.current = null, rr(() => {
            v({
              type: Qe
            }), _(Zt.Uninitialized), Re(null), oe(null), le(null), Tt.current = null;
            const Dn = Qe === Ze.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const ss = ee.current[Dn];
              ss?.(qt), p({
                type: Dn,
                event: qt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), eu = O((He, ut) => (dt, $t) => {
    const gt = dt.nativeEvent, ft = T.get($t);
    if (
      // Another sensor is already instantiating
      j.current !== null || // No active draggable
      !ft || // Event has already been captured
      gt.dndKit || gt.defaultPrevented
    )
      return;
    const At = {
      active: ft
    };
    He(dt, ut.options, At) === !0 && (gt.dndKit = {
      capturedBy: ut.sensor
    }, j.current = $t, Va(dt, ut));
  }, [T, Va]), Ba = Gf(d, eu);
  rh(d), Nt(() => {
    X && k === Zt.Initializing && _(Zt.Initialized);
  }, [X, k]), ae(
    () => {
      const {
        onDragMove: He
      } = ee.current, {
        active: ut,
        activatorEvent: dt,
        collisions: $t,
        over: gt
      } = Ne.current;
      if (!ut || !dt)
        return;
      const ft = {
        active: ut,
        activatorEvent: dt,
        collisions: $t,
        delta: {
          x: Se.x,
          y: Se.y
        },
        over: gt
      };
      rr(() => {
        He?.(ft), p({
          type: "onDragMove",
          event: ft
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Se.x, Se.y]
  ), ae(
    () => {
      const {
        active: He,
        activatorEvent: ut,
        collisions: dt,
        droppableContainers: $t,
        scrollAdjustedTranslate: gt
      } = Ne.current;
      if (!He || j.current == null || !ut || !gt)
        return;
      const {
        onDragOver: ft
      } = ee.current, At = $t.get(Pt), cn = At && At.rect.current ? {
        id: At.id,
        rect: At.rect.current,
        data: At.data,
        disabled: At.disabled
      } : null, Qe = {
        active: He,
        activatorEvent: ut,
        collisions: dt,
        delta: {
          x: gt.x,
          y: gt.y
        },
        over: cn
      };
      rr(() => {
        Re(cn), ft?.(Qe), p({
          type: "onDragOver",
          event: Qe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Pt]
  ), Nt(() => {
    Ne.current = {
      activatorEvent: G,
      active: R,
      activeNode: se,
      collisionRect: We,
      collisions: Lt,
      droppableRects: $,
      draggableNodes: T,
      draggingNode: Ge,
      draggingNodeRect: Xe,
      droppableContainers: E,
      over: ge,
      scrollableAncestors: F,
      scrollAdjustedTranslate: Se
    }, C.current = {
      initial: Xe,
      translated: We
    };
  }, [R, se, Lt, We, T, Ge, Xe, $, E, ge, F, Se]), Uf({
    ...be,
    delta: L,
    draggingRect: We,
    pointerCoordinates: P,
    scrollableAncestors: F,
    scrollableAncestorRects: Z
  });
  const tu = B(() => ({
    active: R,
    activeNode: se,
    activeNodeRect: X,
    activatorEvent: G,
    collisions: Lt,
    containerNodeRect: ce,
    dragOverlay: Le,
    draggableNodes: T,
    droppableContainers: E,
    droppableRects: $,
    over: ge,
    measureDroppableContainers: fe,
    scrollableAncestors: F,
    scrollableAncestorRects: Z,
    measuringConfiguration: z,
    measuringScheduled: ke,
    windowRect: D
  }), [R, se, X, G, Lt, ce, Le, T, E, $, ge, fe, F, Z, z, ke, D]), nu = B(() => ({
    activatorEvent: G,
    activators: Ba,
    active: R,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: me
    },
    dispatch: v,
    draggableNodes: T,
    over: ge,
    measureDroppableContainers: fe
  }), [G, Ba, R, X, v, me, T, ge, fe]);
  return ue.createElement(Go.Provider, {
    value: y
  }, ue.createElement(er.Provider, {
    value: nu
  }, ue.createElement(ul.Provider, {
    value: tu
  }, ue.createElement(Qr.Provider, {
    value: Ke
  }, u)), ue.createElement(fh, {
    disabled: o?.restoreFocus === !1
  })), ue.createElement(pf, {
    ...o,
    hiddenTextDescribedById: me
  }));
  function ru() {
    const He = W?.autoScrollEnabled === !1, ut = typeof l == "object" ? l.enabled === !1 : l === !1, dt = S && !He && !ut;
    return typeof l == "object" ? {
      ...l,
      enabled: dt
    } : {
      enabled: dt
    };
  }
}), gh = /* @__PURE__ */ Ft(null), ai = "button", vh = "Draggable";
function bh(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: s
  } = e;
  const a = Jn(vh), {
    activators: i,
    activatorEvent: o,
    active: l,
    activeNodeRect: u,
    ariaDescribedById: d,
    draggableNodes: f,
    over: m
  } = et(er), {
    role: h = ai,
    roleDescription: x = "draggable",
    tabIndex: w = 0
  } = s ?? {}, g = l?.id === t, v = et(g ? Qr : gh), [p, y] = vr(), [k, _] = vr(), S = sh(i, t), N = $n(n);
  Nt(
    () => (f.set(t, {
      id: t,
      key: a,
      node: p,
      activatorNode: k,
      data: N
    }), () => {
      const L = f.get(t);
      L && L.key === a && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const T = B(() => ({
    role: h,
    tabIndex: w,
    "aria-disabled": r,
    "aria-pressed": g && h === ai ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": d.draggable
  }), [r, h, w, g, x, d.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: u,
    attributes: T,
    isDragging: g,
    listeners: r ? void 0 : S,
    node: p,
    over: m,
    setNodeRef: y,
    setActivatorNodeRef: _,
    transform: v
  };
}
function fl() {
  return et(ul);
}
const yh = "Droppable", xh = {
  timeout: 25
};
function wh(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: s
  } = e;
  const a = Jn(yh), {
    active: i,
    dispatch: o,
    over: l,
    measureDroppableContainers: u
  } = et(er), d = U({
    disabled: n
  }), f = U(!1), m = U(null), h = U(null), {
    disabled: x,
    updateMeasurementsFor: w,
    timeout: g
  } = {
    ...xh,
    ...s
  }, v = $n(w ?? r), p = O(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        u(Array.isArray(v.current) ? v.current : [v.current]), h.current = null;
      }, g);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), y = Wr({
    callback: p,
    disabled: x || !i
  }), k = O((T, L) => {
    y && (L && (y.unobserve(L), f.current = !1), T && y.observe(T));
  }, [y]), [_, S] = vr(k), N = $n(t);
  return ae(() => {
    !y || !_.current || (y.disconnect(), f.current = !1, y.observe(_.current));
  }, [_, y]), ae(
    () => (o({
      type: Ze.RegisterDroppable,
      element: {
        id: r,
        key: a,
        disabled: n,
        node: _,
        rect: m,
        data: N
      }
    }), () => o({
      type: Ze.UnregisterDroppable,
      key: a,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ae(() => {
    n !== d.current.disabled && (o({
      type: Ze.SetDroppableDisabled,
      id: r,
      key: a,
      disabled: n
    }), d.current.disabled = n);
  }, [r, a, n, o]), {
    active: i,
    rect: m,
    isOver: l?.id === r,
    node: _,
    over: l,
    setNodeRef: S
  };
}
function Sh(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, s] = J(null), [a, i] = J(null), o = br(n);
  return !n && !r && o && s(o), Nt(() => {
    if (!a)
      return;
    const l = r?.key, u = r?.props.id;
    if (l == null || u == null) {
      s(null);
      return;
    }
    Promise.resolve(t(u, a)).then(() => {
      s(null);
    });
  }, [t, r, a]), ue.createElement(ue.Fragment, null, n, r ? Iu(r, {
    ref: i
  }) : null);
}
const _h = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function kh(e) {
  let {
    children: t
  } = e;
  return ue.createElement(er.Provider, {
    value: cl
  }, ue.createElement(Qr.Provider, {
    value: _h
  }, t));
}
const Ch = {
  position: "fixed",
  touchAction: "none"
}, Nh = (e) => Zr(e) ? "transform 250ms ease" : void 0, Dh = /* @__PURE__ */ nt((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: s,
    children: a,
    className: i,
    rect: o,
    style: l,
    transform: u,
    transition: d = Nh
  } = e;
  if (!o)
    return null;
  const f = s ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Ch,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: Xt.Transform.toString(f),
    transformOrigin: s && r ? bf(r, o) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return ue.createElement(n, {
    className: i,
    style: m,
    ref: t
  }, a);
}), Fh = (e) => (t) => {
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
    for (const [l, u] of Object.entries(s))
      n.node.style.setProperty(l, u);
    i != null && i.active && n.node.classList.remove(i.active);
  };
}, Th = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Xt.Transform.toString(t)
  }, {
    transform: Xt.Transform.toString(n)
  }];
}, Ah = {
  duration: 250,
  easing: "ease",
  keyframes: Th,
  sideEffects: /* @__PURE__ */ Fh({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Eh(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: s
  } = e;
  return qr((a, i) => {
    if (t === null)
      return;
    const o = n.get(a);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const u = ll(i);
    if (!u)
      return;
    const {
      transform: d
    } = rt(i).getComputedStyle(i), f = Yo(d);
    if (!f)
      return;
    const m = typeof t == "function" ? t : Rh(t);
    return al(l, s.draggable.measure), m({
      active: {
        id: a,
        data: o.data,
        node: l,
        rect: s.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: i,
        rect: s.dragOverlay.measure(u)
      },
      droppableContainers: r,
      measuringConfiguration: s,
      transform: f
    });
  });
}
function Rh(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: s
  } = {
    ...Ah,
    ...e
  };
  return (a) => {
    let {
      active: i,
      dragOverlay: o,
      transform: l,
      ...u
    } = a;
    if (!t)
      return;
    const d = {
      x: o.rect.left - i.rect.left,
      y: o.rect.top - i.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? i.rect.width * l.scaleX / o.rect.width : 1,
      scaleY: l.scaleY !== 1 ? i.rect.height * l.scaleY / o.rect.height : 1
    }, m = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...f
    }, h = s({
      ...u,
      active: i,
      dragOverlay: o,
      transform: {
        initial: l,
        final: m
      }
    }), [x] = h, w = h[h.length - 1];
    if (JSON.stringify(x) === JSON.stringify(w))
      return;
    const g = r?.({
      active: i,
      dragOverlay: o,
      ...u
    }), v = o.node.animate(h, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((p) => {
      v.onfinish = () => {
        g?.(), p();
      };
    });
  };
}
let ii = 0;
function Ih(e) {
  return B(() => {
    if (e != null)
      return ii++, ii;
  }, [e]);
}
const Oh = /* @__PURE__ */ ue.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: s,
    transition: a,
    modifiers: i,
    wrapperElement: o = "div",
    className: l,
    zIndex: u = 999
  } = e;
  const {
    activatorEvent: d,
    active: f,
    activeNodeRect: m,
    containerNodeRect: h,
    draggableNodes: x,
    droppableContainers: w,
    dragOverlay: g,
    over: v,
    measuringConfiguration: p,
    scrollableAncestors: y,
    scrollableAncestorRects: k,
    windowRect: _
  } = fl(), S = et(Qr), N = Ih(f?.id), T = dl(i, {
    activatorEvent: d,
    active: f,
    activeNodeRect: m,
    containerNodeRect: h,
    draggingNodeRect: g.rect,
    over: v,
    overlayNodeRect: g.rect,
    scrollableAncestors: y,
    scrollableAncestorRects: k,
    transform: S,
    windowRect: _
  }), L = ba(m), E = Eh({
    config: r,
    draggableNodes: x,
    droppableContainers: w,
    measuringConfiguration: p
  }), I = L ? g.setRef : void 0;
  return ue.createElement(kh, null, ue.createElement(Sh, {
    animation: E
  }, f && N ? ue.createElement(Dh, {
    key: N,
    id: f.id,
    ref: I,
    as: o,
    activatorEvent: d,
    adjustScale: t,
    className: l,
    transition: a,
    rect: L,
    style: {
      zIndex: u,
      ...s
    },
    transform: T
  }, n) : null));
});
function ya(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Lh(e, t) {
  return e.reduce((n, r, s) => {
    const a = t.get(r);
    return a && (n[s] = a), n;
  }, Array(e.length));
}
function sr(e) {
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
function Mh(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const hl = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: s
  } = e;
  const a = ya(t, r, n), i = t[s], o = a[s];
  return !o || !i ? null : {
    x: o.left - i.left,
    y: o.top - i.top,
    scaleX: o.width / i.width,
    scaleY: o.height / i.height
  };
}, ml = "Sortable", pl = /* @__PURE__ */ ue.createContext({
  activeIndex: -1,
  containerId: ml,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: hl,
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
    strategy: s = hl,
    disabled: a = !1
  } = e;
  const {
    active: i,
    dragOverlay: o,
    droppableRects: l,
    over: u,
    measureDroppableContainers: d
  } = fl(), f = Jn(ml, n), m = o.rect !== null, h = B(() => r.map((S) => typeof S == "object" && "id" in S ? S.id : S), [r]), x = i != null, w = i ? h.indexOf(i.id) : -1, g = u ? h.indexOf(u.id) : -1, v = U(h), p = !Ph(h, v.current), y = g !== -1 && w === -1 || p, k = Mh(a);
  Nt(() => {
    p && x && d(h);
  }, [p, h, x, d]), ae(() => {
    v.current = h;
  }, [h]);
  const _ = B(
    () => ({
      activeIndex: w,
      containerId: f,
      disabled: k,
      disableTransforms: y,
      items: h,
      overIndex: g,
      useDragOverlay: m,
      sortedRects: Lh(h, l),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w, f, k.draggable, k.droppable, y, h, g, l, m, s]
  );
  return ue.createElement(pl.Provider, {
    value: _
  }, t);
}
const Bh = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: s
  } = e;
  return ya(n, r, s).indexOf(t);
}, jh = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: s,
    items: a,
    newIndex: i,
    previousItems: o,
    previousContainerId: l,
    transition: u
  } = e;
  return !u || !r || o !== a && s === i ? !1 : n ? !0 : i !== s && t === l;
}, $h = {
  duration: 200,
  easing: "ease"
}, gl = "transform", zh = /* @__PURE__ */ Xt.Transition.toString({
  property: gl,
  duration: 0,
  easing: "linear"
}), qh = {
  roleDescription: "sortable"
};
function Zh(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: s
  } = e;
  const [a, i] = J(null), o = U(n);
  return Nt(() => {
    if (!t && n !== o.current && r.current) {
      const l = s.current;
      if (l) {
        const u = _n(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - u.left,
          y: l.top - u.top,
          scaleX: l.width / u.width,
          scaleY: l.height / u.height
        };
        (d.x || d.y) && i(d);
      }
    }
    n !== o.current && (o.current = n);
  }, [t, n, r, s]), ae(() => {
    a && i(null);
  }, [a]), a;
}
function Uh(e) {
  let {
    animateLayoutChanges: t = jh,
    attributes: n,
    disabled: r,
    data: s,
    getNewIndex: a = Bh,
    id: i,
    strategy: o,
    resizeObserverConfig: l,
    transition: u = $h
  } = e;
  const {
    items: d,
    containerId: f,
    activeIndex: m,
    disabled: h,
    disableTransforms: x,
    sortedRects: w,
    overIndex: g,
    useDragOverlay: v,
    strategy: p
  } = et(pl), y = Wh(r, h), k = d.indexOf(i), _ = B(() => ({
    sortable: {
      containerId: f,
      index: k,
      items: d
    },
    ...s
  }), [f, s, k, d]), S = B(() => d.slice(d.indexOf(i)), [d, i]), {
    rect: N,
    node: T,
    isOver: L,
    setNodeRef: E
  } = wh({
    id: i,
    data: _,
    disabled: y.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: S,
      ...l
    }
  }), {
    active: I,
    activatorEvent: C,
    activeNodeRect: R,
    attributes: j,
    setNodeRef: W,
    listeners: oe,
    isDragging: G,
    over: le,
    setActivatorNodeRef: ee,
    transform: me
  } = bh({
    id: i,
    data: _,
    attributes: {
      ...qh,
      ...n
    },
    disabled: y.draggable
  }), Y = tf(E, W), z = !!I, $ = z && !x && sr(m) && sr(g), fe = !v && G, ke = fe && $ ? me : null, pe = $ ? ke ?? (o ?? p)({
    rects: w,
    activeNodeRect: R,
    activeIndex: m,
    overIndex: g,
    index: k
  }) : null, be = sr(m) && sr(g) ? a({
    id: i,
    items: d,
    activeIndex: m,
    overIndex: g
  }) : k, ie = I?.id, X = U({
    activeId: ie,
    items: d,
    newIndex: be,
    containerId: f
  }), ce = d !== X.current.items, Ne = t({
    active: I,
    containerId: f,
    isDragging: G,
    isSorting: z,
    id: i,
    index: k,
    items: d,
    newIndex: X.current.newIndex,
    previousItems: X.current.items,
    previousContainerId: X.current.containerId,
    transition: u,
    wasDragging: X.current.activeId != null
  }), Te = Zh({
    disabled: !Ne,
    index: k,
    node: T,
    rect: N
  });
  return ae(() => {
    z && X.current.newIndex !== be && (X.current.newIndex = be), f !== X.current.containerId && (X.current.containerId = f), d !== X.current.items && (X.current.items = d);
  }, [z, be, f, d]), ae(() => {
    if (ie === X.current.activeId)
      return;
    if (ie != null && X.current.activeId == null) {
      X.current.activeId = ie;
      return;
    }
    const Ge = setTimeout(() => {
      X.current.activeId = ie;
    }, 50);
    return () => clearTimeout(Ge);
  }, [ie]), {
    active: I,
    activeIndex: m,
    attributes: j,
    data: _,
    rect: N,
    index: k,
    newIndex: be,
    items: d,
    isOver: L,
    isSorting: z,
    isDragging: G,
    listeners: oe,
    node: T,
    overIndex: g,
    over: le,
    setNodeRef: Y,
    setActivatorNodeRef: ee,
    setDroppableNodeRef: E,
    setDraggableNodeRef: W,
    transform: Te ?? pe,
    transition: Le()
  };
  function Le() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Te || // Or to prevent items jumping to back to their "new" position when items change
      ce && X.current.newIndex === k
    )
      return zh;
    if (!(fe && !Zr(C) || !u) && (z || Ne))
      return Xt.Transition.toString({
        ...u,
        property: gl
      });
  }
}
function Wh(e, t) {
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
function Sr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Qh = [ye.Down, ye.Right, ye.Up, ye.Left], Hh = (e, t) => {
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
  if (Qh.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    a.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const m = s.get(f.id);
      if (m)
        switch (e.code) {
          case ye.Down:
            r.top < m.top && l.push(f);
            break;
          case ye.Up:
            r.top > m.top && l.push(f);
            break;
          case ye.Left:
            r.left > m.left && l.push(f);
            break;
          case ye.Right:
            r.left < m.left && l.push(f);
            break;
        }
    });
    const u = wf({
      collisionRect: r,
      droppableRects: s,
      droppableContainers: l
    });
    let d = Xo(u, "id");
    if (d === i?.id && u.length > 1 && (d = u[1].id), d != null) {
      const f = a.get(n.id), m = a.get(d), h = m ? s.get(m.id) : null, x = m?.node.current;
      if (x && h && f && m) {
        const g = Ur(x).some((S, N) => o[N] !== S), v = vl(f, m), p = Gh(f, m), y = g || !v ? {
          x: 0,
          y: 0
        } : {
          x: p ? r.width - h.width : 0,
          y: p ? r.height - h.height : 0
        }, k = {
          x: h.left,
          y: h.top
        };
        return y.x && y.y ? k : zn(k, y);
      }
    }
  }
};
function vl(e, t) {
  return !Sr(e) || !Sr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Gh(e, t) {
  return !Sr(e) || !Sr(t) || !vl(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const oi = ({ id: e, children: t }) => {
  const { attributes: n, listeners: r, setNodeRef: s, transform: a, transition: i } = Uh({ id: e }), o = {
    transform: Xt.Translate.toString(a),
    transition: i,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ c("div", { ref: s, style: o, ...n, ...r, children: t });
}, xa = ({
  blocks: e,
  sortable: t = !1,
  onSort: n = () => {
  },
  main: r = !1
}) => {
  const [s, a] = J([]);
  Lu(() => {
    a(
      e.map((f, m) => ({
        id: f.id ?? m.toString(),
        render: f.render
      }))
    );
  }, [e]);
  const [i, o] = J(null), l = gf(
    Ha(va),
    Ha(pa, {
      coordinateGetter: Hh
    })
  ), u = (f) => {
    o(f.active.id);
  }, d = (f) => {
    const { active: m, over: h } = f;
    o(null), h && m.id !== h.id && a((x) => {
      const w = x.findIndex((v) => v.id === m.id), g = x.findIndex((v) => v.id === h.id);
      return ya(x, w, g);
    });
  };
  return /* @__PURE__ */ c("div", { className: Q("flex flex-wrap items-stretch gap-4", r && "flex-1"), children: /* @__PURE__ */ A(
    ph,
    {
      sensors: l,
      onDragStart: u,
      onDragEnd: d,
      children: [
        /* @__PURE__ */ c(Vh, { items: s, children: s.map((f) => /* @__PURE__ */ c(oi, { id: f.id, children: f.render }, f.id)) }),
        /* @__PURE__ */ c(Oh, { children: i ? /* @__PURE__ */ c(oi, { id: i, children: s.find((f) => f.id === i)?.render }) : null })
      ]
    }
  ) });
};
xa.displayName = "GroupMasonry";
xa.__isPageLayoutGroup = !0;
const Xh = nt(function({ children: t, aside: n, header: r, variant: s = "main-aside" }, a) {
  return process.env.NODE_ENV === "development" && Wo("Page", t, ["block", "group"]), /* @__PURE__ */ c("div", { ref: a, className: "h-full", children: /* @__PURE__ */ A(
    "div",
    {
      className: Q(
        "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
        "flex-col",
        "overflow-y-auto",
        "md:sticky md:top-0 md:max-h-full"
      ),
      children: [
        /* @__PURE__ */ A(
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
}), ky = {
  Page: Ie(ot("Page", Xh)),
  Block: Ie(ot("Block", $r)),
  BlockContent: Ie(
    ot("BlockContent", Yd)
  ),
  Group: Ie(ot("Group", da)),
  GroupGrid: Ie(
    ot("GroupGrid", jr)
  ),
  GroupMasonry: Ie(
    ot("GroupMasonry", xa)
  )
}, Cy = Od, Ny = Pd, Dy = Ie(
  Qn(
    {
      name: "HomeLayout",
      type: "layout"
    },
    Rd
  )
);
var us, li;
function Kh() {
  if (li) return us;
  li = 1;
  var e = Fd();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return us = t, us;
}
const Yh = (e) => typeof e == "boolean" || !e ? {
  show: !!e,
  invertStatus: !1
} : {
  show: e.show ?? !0,
  invertStatus: e.invertStatus ?? !1
}, bl = ({ label: e, ...t }) => {
  const n = iu(), r = n(t.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), s = Yh(t.trend), a = n(t.comparison), i = ou(
    r.numericValue,
    r.formatterOptions
  ), o = $a(a.numericValue), l = $a(r.numericValue), u = B(() => {
    if (!(!o || !s.show) && !(!o || !l))
      return (l - o) / o * 100;
  }, [l, o, s.show]);
  return /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
    e && /* @__PURE__ */ c("div", { children: e }),
    /* @__PURE__ */ A("div", { className: "flex flex-row flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ c("span", { className: "font-bold text-2xl", children: i }),
      o !== void 0 && /* @__PURE__ */ c(
        lu,
        {
          percentage: u,
          amount: a,
          invertStatus: s.invertStatus,
          hint: t.comparisonHint
        }
      )
    ] })
  ] });
}, Jh = () => /* @__PURE__ */ A("div", { className: "relative flex h-full w-full cursor-progress flex-col gap-2", children: [
  /* @__PURE__ */ c(Pe, { className: "h-3 w-full max-w-16 rounded-md" }),
  /* @__PURE__ */ A("div", { className: "flex flex-row flex-wrap items-end gap-2", children: [
    /* @__PURE__ */ c(Pe, { className: "h-8 w-full max-w-36 rounded-sm" }),
    /* @__PURE__ */ c(Pe, { className: "h-6 w-full max-w-18 rounded-sm" })
  ] })
] });
bl.displayName = "F0BigNumber";
const em = io(bl, Jh), Fy = Ie(
  ot("F0BigNumber", em)
), yl = {
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
}, xl = {
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
}, tm = {}, nm = {
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
}, rm = {
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
}, sm = {
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
}, am = {
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
}, im = {
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
}, om = {
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
}, wl = {
  width: nm,
  height: rm,
  minWidth: sm,
  minHeight: am,
  maxWidth: im,
  maxHeight: om
}, Sl = {
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
}, _l = {
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
}, kl = {
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
}, lm = {}, Cl = {
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
}, Nl = {
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
}, cm = {}, um = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Dl = {
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
}, dm = {}, Fl = {
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
}, fm = {}, hm = {
  ...Sl,
  ...Fl,
  ...Nl,
  ...kl,
  ...Cl,
  ...wl,
  ...yl,
  ...xl,
  ...Dl,
  ..._l
};
function mm(e, t) {
  return t.split(" ").map((n) => `${e}:${n}`).join(" ");
}
function pm(e, t) {
  const n = [];
  for (const [r, s] of Object.entries(t)) {
    if (s == null) continue;
    const a = hm[r];
    if (!a) continue;
    const i = a[String(s)];
    i && n.push(mm(e, i));
  }
  return n.join(" ");
}
const gm = Jt({
  base: "",
  variants: {
    ...Sl,
    ...Fl,
    ...Nl,
    ...kl,
    ...Cl,
    ...wl,
    ...yl,
    ...xl,
    ...Dl,
    ..._l
  },
  defaultVariants: {
    ...fm,
    ...cm,
    ...lm,
    ...tm,
    ...dm
  }
}), vm = ["sm", "md", "lg", "xl"], Tl = nt(
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
    margin: u,
    marginX: d,
    marginY: f,
    marginTop: m,
    marginBottom: h,
    marginLeft: x,
    marginRight: w,
    // Gap
    gap: g,
    // Grid
    columns: v,
    rows: p,
    colSpan: y,
    colStart: k,
    rowSpan: _,
    // Dimensions
    width: S,
    height: N,
    minWidth: T,
    minHeight: L,
    maxWidth: E,
    maxHeight: I,
    // Background
    background: C,
    // Border
    borderColor: R,
    border: j,
    borderTop: W,
    borderBottom: oe,
    borderLeft: G,
    borderRight: le,
    borderRadius: ee,
    borderRadiusTopLeft: me,
    borderRadiusTopRight: Y,
    borderRadiusBottomLeft: z,
    borderRadiusBottomRight: $,
    borderStyle: fe,
    // Overflow
    overflow: ke,
    overflowX: se,
    overflowY: pe,
    // Divider
    divider: be,
    dividerColor: ie,
    // Flex
    alignItems: X,
    justifyContent: ce,
    flexDirection: Ne,
    flexWrap: Te,
    grow: Le,
    shrink: Ge,
    // Responsive breakpoint overrides
    sm: Xe,
    md: ct,
    lg: b,
    xl: D,
    ...F
  }, Z) => {
    const M = W && W !== "none" || oe && oe !== "none" || G && G !== "none" || le && le !== "none", P = j && j !== "none" || M, ne = { sm: Xe, md: ct, lg: b, xl: D }, de = vm.map((Ee) => {
      const Se = ne[Ee];
      return Se ? pm(Ee, Se) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      "div",
      {
        ref: Z,
        className: Q(
          M && "border-0",
          gm({
            display: e,
            position: t,
            padding: n,
            paddingX: r,
            paddingY: s,
            paddingTop: a,
            paddingBottom: i,
            paddingLeft: o,
            paddingRight: l,
            margin: u,
            marginX: d,
            marginY: f,
            marginTop: m,
            marginBottom: h,
            marginLeft: x,
            marginRight: w,
            gap: g,
            columns: v,
            rows: p,
            colSpan: y,
            colStart: k,
            rowSpan: _,
            width: S,
            height: N,
            minWidth: T,
            minHeight: L,
            maxWidth: E,
            maxHeight: I,
            background: C,
            borderColor: R,
            border: j,
            borderTop: W,
            borderBottom: oe,
            borderLeft: G,
            borderRight: le,
            borderRadius: ee,
            borderRadiusTopLeft: me,
            borderRadiusTopRight: Y,
            borderRadiusBottomLeft: z,
            borderRadiusBottomRight: $,
            borderStyle: fe,
            overflow: ke,
            overflowX: se,
            overflowY: pe,
            divider: be,
            dividerColor: ie,
            alignItems: X,
            justifyContent: ce,
            flexDirection: Ne,
            flexWrap: Te,
            grow: Le,
            shrink: Ge
          }),
          de,
          P && !R && "border-f1-border",
          be && !ie && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...F
      }
    );
  }
);
Tl.displayName = "F0Box";
const bm = Qn(
  {
    name: "F0Box",
    type: "layout"
  },
  Tl
), Ty = cu.filter(
  (e) => e !== "ai"
), Ay = oo, Ey = ["default", "outline", "neutral"], Ry = oo, Iy = ["split", "dropdown"], Oy = ["sm", "md", "lg"], Ly = ["compact", "expanded"], Py = uu, My = [
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
], Is = ({ count: e, list: t }) => {
  const [n, r] = J(!1), s = /* @__PURE__ */ c(hr, { label: `+${e}` });
  return t?.length ? /* @__PURE__ */ A(Ys, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ c(Js, { asChild: !0, children: /* @__PURE__ */ c("button", { className: Pr("inline-flex flex-shrink-0 items-center"), children: s }) }),
    /* @__PURE__ */ c(
      ea,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ A(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          t.map((a, i) => /* @__PURE__ */ c(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ c(hr, { ...a })
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
Is.displayName = "ChipCounter";
const Al = ({
  chips: e,
  max: t = 4,
  remainingCount: n,
  layout: r = "compact"
}) => {
  if (r === "fill")
    return /* @__PURE__ */ c(
      Pu,
      {
        items: e,
        renderListItem: (l) => /* @__PURE__ */ c(hr, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: n !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ c(
          Is,
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
  return /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
    s.map((l, u) => /* @__PURE__ */ c(hr, { ...l }, u)),
    o && /* @__PURE__ */ c(
      Is,
      {
        count: i,
        list: n ? void 0 : a
      }
    )
  ] });
};
Al.displayName = "F0ChipList";
const Vy = Ie(
  ot("F0ChipList", Al)
), By = Mu, ym = ["days", "hours", "minutes", "seconds"], jy = ["sm", "md"], _r = [...ym], ci = ["hours", "minutes"], Bt = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function $y(e) {
  const t = Number.isFinite(e) ? e : 0;
  let n = Math.max(0, Math.floor(t));
  const r = Math.floor(n / Bt.days);
  n = n % Bt.days;
  const s = Math.floor(n / Bt.hours);
  n = n % Bt.hours;
  const a = Math.floor(n / Bt.minutes), i = n % Bt.minutes;
  return { days: r, hours: s, minutes: a, seconds: i };
}
function ui(e) {
  return _r.reduce((t, n) => {
    const r = e[n], s = Number.isFinite(r) ? r : 0, a = Math.max(0, Math.floor(s));
    return t + a * Bt[n];
  }, 0);
}
function ds(e, t) {
  const n = Number.isFinite(e) ? e : 0;
  let r = Math.max(0, Math.floor(n));
  const s = { days: 0, hours: 0, minutes: 0, seconds: 0 }, a = _r.filter((i) => t.includes(i));
  for (const i of a)
    s[i] = Math.floor(r / Bt[i]), r = r % Bt[i];
  return s;
}
function xm(e, t) {
  return t != null && e > t ? t : e < 0 ? 0 : e;
}
const wm = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s"
}, Sm = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, _m = 2, km = Jt({
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
}), El = nt(
  function({
    id: t,
    "aria-describedby": n,
    "aria-invalid": r,
    label: s,
    ariaLabel: a,
    hideLabel: i = !1,
    value: o,
    onChange: l,
    onBlur: u,
    units: d = ci,
    fields: f,
    status: m,
    disabled: h = !1,
    required: x = !1,
    readonly: w = !1,
    size: g = "md"
  }, v) {
    const p = Ks(), y = U(/* @__PURE__ */ new Map()), k = U(!1), _ = B(() => {
      const z = _r.filter(($) => d.includes($));
      return z.length > 0 ? z : _r.filter(($) => ci.includes($));
    }, [d]), S = _.join("|"), [N, T] = J(
      () => ds(o, _)
    ), L = U(o), E = U(S);
    (o !== L.current || S !== E.current) && (L.current = o, E.current = S, T(ds(o, _)));
    const I = `${p}-${_[0]}`, C = O(
      (z) => {
        const $ = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        for (const fe of _)
          $[fe] = z[fe];
        return $;
      },
      [_]
    ), R = O(
      (z) => {
        const $ = C(z), fe = ui($);
        T($), L.current = fe, l(fe);
      },
      [l, C]
    ), j = O(
      (z, $) => (fe) => {
        const ke = fe.target.value;
        if (ke === "") {
          R({ ...N, [z]: 0 });
          return;
        }
        const se = ke.replace(/\D/g, "");
        if (se === "") return;
        const pe = parseInt(se, 10);
        if (isNaN(pe)) return;
        const be = xm(pe, $);
        R({ ...N, [z]: be });
      },
      [N, R]
    ), W = O(() => {
      const z = C(N), $ = ui(z);
      T(ds($, _)), L.current = $, u?.();
    }, [N, u, C, _]), oe = O(
      (z) => {
        z.metaKey || z.ctrlKey || z.altKey || z.key.length > 1 || /^\d$/.test(z.key) || z.preventDefault();
      },
      []
    ), G = O(
      (z) => {
        if (h || z.target instanceof HTMLInputElement) return;
        const $ = _[0];
        $ && y.current.get($)?.focus();
      },
      [h, _]
    ), le = O(
      (z) => ($) => {
        $ ? y.current.set(z, $) : y.current.delete(z);
      },
      []
    ), ee = (a && a.trim().length > 0 ? a : void 0) || s || void 0;
    ae(() => {
      process.env.NODE_ENV !== "production" && !ee && !k.current && (k.current = !0, console.warn(
        "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
      ));
    }, [ee]);
    const me = m?.type ?? "default", Y = !i && s.length > 0;
    return /* @__PURE__ */ A(
      "div",
      {
        ref: v,
        className: Q(
          "flex flex-col gap-2",
          "pointer-events-none",
          h && "cursor-not-allowed"
        ),
        children: [
          Y && /* @__PURE__ */ c(
            Vu,
            {
              label: s,
              required: x,
              htmlFor: I,
              className: "min-w-0 flex-1",
              disabled: h
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              id: t,
              "data-testid": "input-field-wrapper",
              className: Q(
                "pointer-events-auto",
                km({
                  size: g,
                  status: me,
                  disabled: h,
                  readonly: w
                })
              ),
              onClick: G,
              role: "group",
              "aria-label": ee,
              "aria-describedby": n,
              "aria-invalid": r,
              "aria-disabled": h || void 0,
              "data-status": me,
              "data-disabled": h ? "" : void 0,
              children: _.map((z, $) => {
                const fe = f?.[z]?.max, ke = N[z], se = f?.[z]?.suffix ?? wm[z], pe = ke > 0 ? String(ke) : "", be = f?.[z]?.maxVisibleDigits, ie = typeof be == "number" && Number.isFinite(be) ? Math.max(1, Math.floor(be)) : _m;
                return /* @__PURE__ */ A(mo, { children: [
                  $ > 0 && /* @__PURE__ */ c(
                    ht,
                    {
                      icon: Bu,
                      size: "xs",
                      color: "default",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ c(
                    "input",
                    {
                      ref: le(z),
                      id: `${p}-${z}`,
                      className: Q(
                        "border-none bg-transparent p-0 text-inherit outline-none",
                        "font-inherit text-[length:inherit] leading-[inherit]",
                        "placeholder:text-f1-foreground-secondary",
                        h && "pointer-events-none"
                      ),
                      style: {
                        width: `${Math.min(
                          Math.max(pe.length, 1),
                          ie
                        )}ch`
                      },
                      "aria-label": f?.[z]?.ariaLabel ?? Sm[z],
                      "aria-describedby": n,
                      "aria-invalid": r,
                      value: pe,
                      placeholder: "0",
                      onChange: j(z, fe),
                      onBlur: W,
                      onKeyDown: oe,
                      inputMode: "numeric",
                      disabled: h,
                      readOnly: w,
                      "aria-readonly": w || void 0
                    }
                  ),
                  /* @__PURE__ */ c("span", { className: "text-f1-foreground-secondary", children: se })
                ] }, z);
              })
            }
          ),
          /* @__PURE__ */ c(ta, { status: m })
        ]
      }
    );
  }
);
El.displayName = "F0DurationInput";
const Cm = Ie(
  Qn(
    {
      name: "F0DurationInput",
      type: "form"
    },
    El
  )
), Nm = 388;
function Rl({
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
  const u = Fe(), d = Object.keys(e)[0] ?? null, [f, m] = J(d), [h, x] = J(t);
  ae(() => {
    x(t);
  }, [t]), ae(() => {
    if (!f && e) {
      const p = Object.keys(e);
      if (p.length > 0) {
        const y = p.find((k) => {
          const _ = h[k], S = za(e[k].type);
          return _ !== void 0 && !S.isEmpty(_, {
            schema: e[k],
            i18n: u
          });
        });
        m(y ?? p[0]);
      }
    }
  }, [e, f, h, u]);
  const w = (p, y) => {
    const k = {
      ...h,
      [p]: y
    };
    x(k), i || n(k);
  }, g = () => {
    n(h);
  }, v = B(() => r || Object.entries(e).reduce((y, [k, _]) => {
    const S = za(_.type);
    return Math.max(y, S?.formHeight || Nm);
  }, 0), [e, r]);
  return !e || Object.keys(e).length === 0 ? null : /* @__PURE__ */ c(du, { dataTestId: l, children: /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        a
      ),
      style: { maxWidth: s },
      children: /* @__PURE__ */ c(
        ju,
        {
          filters: e,
          tempFilters: h,
          selectedFilterKey: f,
          onFilterSelect: m,
          onFilterChange: w,
          onApply: g,
          height: v,
          showApplyButton: i,
          applyButtonLabel: o
        }
      )
    }
  ) });
}
Rl.displayName = "F0FilterPickerContent";
const zy = Rl;
var tr = (e) => e.type === "checkbox", sn = (e) => e instanceof Date, Je = (e) => e == null;
const Il = (e) => typeof e == "object";
var Be = (e) => !Je(e) && !Array.isArray(e) && Il(e) && !sn(e), Ol = (e) => Be(e) && e.target ? tr(e.target) ? e.target.checked : e.target.value : e, Dm = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ll = (e, t) => e.has(Dm(t)), Fm = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Be(t) && t.hasOwnProperty("isPrototypeOf");
}, wa = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function st(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(wa && (e instanceof Blob || r)) && (n || Be(e)))
    if (t = n ? [] : {}, !n && !Fm(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = st(e[s]));
  else
    return e;
  return t;
}
var Hr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ve = (e) => e === void 0, H = (e, t, n) => {
  if (!t || !Be(e))
    return n;
  const r = Hr(t.split(/[,[\].]+?/)).reduce((s, a) => Je(s) ? s : s[a], e);
  return Ve(r) || r === e ? Ve(e[t]) ? n : e[t] : r;
}, yt = (e) => typeof e == "boolean", Sa = (e) => /^\w*$/.test(e), Pl = (e) => Hr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ce = (e, t, n) => {
  let r = -1;
  const s = Sa(t) ? [t] : Pl(t), a = s.length, i = a - 1;
  for (; ++r < a; ) {
    const o = s[r];
    let l = n;
    if (r !== i) {
      const u = e[o];
      l = Be(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    e[o] = l, e = e[o];
  }
  return e;
};
const kr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ct = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Vt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ml = ue.createContext(null), en = () => ue.useContext(Ml), Tm = (e) => {
  const { children: t, ...n } = e;
  return ue.createElement(Ml.Provider, { value: n }, t);
};
var Vl = (e, t, n, r = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(s, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Ct.all && (t._proxyFormState[i] = !r || Ct.all), n && (n[i] = !0), e[i];
      }
    });
  return s;
}, at = (e) => Be(e) && !Object.keys(e).length, Bl = (e, t, n, r) => {
  n(e);
  const { name: s, ...a } = e;
  return at(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === (!r || Ct.all));
}, Pn = (e) => Array.isArray(e) ? e : [e], jl = (e, t, n) => !e || !t || e === t || Pn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function _a(e) {
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
function Am(e) {
  const t = en(), { control: n = t.control, disabled: r, name: s, exact: a } = e || {}, [i, o] = ue.useState(n._formState), l = ue.useRef(!0), u = ue.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = ue.useRef(s);
  return d.current = s, _a({
    disabled: r,
    next: (f) => l.current && jl(d.current, f.name, a) && Bl(f, u.current, n._updateFormState) && o({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), ue.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), ue.useMemo(() => Vl(i, n, u.current, !1), [i, n]);
}
var It = (e) => typeof e == "string", $l = (e, t, n, r, s) => It(e) ? (r && t.watch.add(e), H(n, e, s)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), H(n, a))) : (r && (t.watchAll = !0), n);
function Em(e) {
  const t = en(), { control: n = t.control, name: r, defaultValue: s, disabled: a, exact: i } = e || {}, o = ue.useRef(r);
  o.current = r, _a({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      jl(o.current, d.name, i) && u(st($l(o.current, n._names, d.values || n._formValues, !1, s)));
    }
  });
  const [l, u] = ue.useState(n._getWatch(r, s));
  return ue.useEffect(() => n._removeUnmounted()), l;
}
function Rm(e) {
  const t = en(), { name: n, disabled: r, control: s = t.control, shouldUnregister: a } = e, i = Ll(s._names.array, n), o = Em({
    control: s,
    name: n,
    defaultValue: H(s._formValues, n, H(s._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Am({
    control: s,
    name: n,
    exact: !0
  }), u = ue.useRef(s.register(n, {
    ...e.rules,
    value: o,
    ...yt(e.disabled) ? { disabled: e.disabled } : {}
  })), d = ue.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!H(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!H(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!H(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!H(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => H(l.errors, n)
    }
  }), [l, n]), f = ue.useMemo(() => ({
    name: n,
    value: o,
    ...yt(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: (m) => u.current.onChange({
      target: {
        value: Ol(m),
        name: n
      },
      type: kr.CHANGE
    }),
    onBlur: () => u.current.onBlur({
      target: {
        value: H(s._formValues, n),
        name: n
      },
      type: kr.BLUR
    }),
    ref: (m) => {
      const h = H(s._fields, n);
      h && m && (h._f.ref = {
        focus: () => m.focus(),
        select: () => m.select(),
        setCustomValidity: (x) => m.setCustomValidity(x),
        reportValidity: () => m.reportValidity()
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
    const m = s._options.shouldUnregister || a, h = (x, w) => {
      const g = H(s._fields, x);
      g && g._f && (g._f.mount = w);
    };
    if (h(n, !0), m) {
      const x = st(H(s._options.defaultValues, n));
      Ce(s._defaultValues, n, x), Ve(H(s._formValues, n)) && Ce(s._formValues, n, x);
    }
    return !i && s.register(n), () => {
      (i ? m && !s._state.action : m) ? s.unregister(n) : h(n, !1);
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
    fieldState: d
  }), [f, l, d]);
}
const Im = (e) => e.render(Rm(e));
var zl = (e, t, n, r, s) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: s || !0
  }
} : {}, di = (e) => ({
  isOnSubmit: !e || e === Ct.onSubmit,
  isOnBlur: e === Ct.onBlur,
  isOnChange: e === Ct.onChange,
  isOnAll: e === Ct.all,
  isOnTouch: e === Ct.onTouched
}), fi = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Mn = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const a = H(e, s);
    if (a) {
      const { _f: i, ...o } = a;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], s) && !r)
          return !0;
        if (i.ref && t(i.ref, i.name) && !r)
          return !0;
        if (Mn(o, t))
          break;
      } else if (Be(o) && Mn(o, t))
        break;
    }
  }
};
var Om = (e, t, n) => {
  const r = Pn(H(e, n));
  return Ce(r, "root", t[n]), Ce(e, n, r), e;
}, ka = (e) => e.type === "file", Rt = (e) => typeof e == "function", Cr = (e) => {
  if (!wa)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, cr = (e) => It(e), Ca = (e) => e.type === "radio", Nr = (e) => e instanceof RegExp;
const hi = {
  value: !1,
  isValid: !1
}, mi = { value: !0, isValid: !0 };
var ql = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Ve(e[0].attributes.value) ? Ve(e[0].value) || e[0].value === "" ? mi : { value: e[0].value, isValid: !0 } : mi
    ) : hi;
  }
  return hi;
};
const pi = {
  isValid: !1,
  value: null
};
var Zl = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, pi) : pi;
function gi(e, t, n = "validate") {
  if (cr(e) || Array.isArray(e) && e.every(cr) || yt(e) && !e)
    return {
      type: n,
      message: cr(e) ? e : "",
      ref: t
    };
}
var un = (e) => Be(e) && !Nr(e) ? e : {
  value: e,
  message: ""
}, vi = async (e, t, n, r, s, a) => {
  const { ref: i, refs: o, required: l, maxLength: u, minLength: d, min: f, max: m, pattern: h, validate: x, name: w, valueAsNumber: g, mount: v } = e._f, p = H(n, w);
  if (!v || t.has(w))
    return {};
  const y = o ? o[0] : i, k = (C) => {
    s && y.reportValidity && (y.setCustomValidity(yt(C) ? "" : C || ""), y.reportValidity());
  }, _ = {}, S = Ca(i), N = tr(i), T = S || N, L = (g || ka(i)) && Ve(i.value) && Ve(p) || Cr(i) && i.value === "" || p === "" || Array.isArray(p) && !p.length, E = zl.bind(null, w, r, _), I = (C, R, j, W = Vt.maxLength, oe = Vt.minLength) => {
    const G = C ? R : j;
    _[w] = {
      type: C ? W : oe,
      message: G,
      ref: i,
      ...E(C ? W : oe, G)
    };
  };
  if (a ? !Array.isArray(p) || !p.length : l && (!T && (L || Je(p)) || yt(p) && !p || N && !ql(o).isValid || S && !Zl(o).isValid)) {
    const { value: C, message: R } = cr(l) ? { value: !!l, message: l } : un(l);
    if (C && (_[w] = {
      type: Vt.required,
      message: R,
      ref: y,
      ...E(Vt.required, R)
    }, !r))
      return k(R), _;
  }
  if (!L && (!Je(f) || !Je(m))) {
    let C, R;
    const j = un(m), W = un(f);
    if (!Je(p) && !isNaN(p)) {
      const oe = i.valueAsNumber || p && +p;
      Je(j.value) || (C = oe > j.value), Je(W.value) || (R = oe < W.value);
    } else {
      const oe = i.valueAsDate || new Date(p), G = (me) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + me), le = i.type == "time", ee = i.type == "week";
      It(j.value) && p && (C = le ? G(p) > G(j.value) : ee ? p > j.value : oe > new Date(j.value)), It(W.value) && p && (R = le ? G(p) < G(W.value) : ee ? p < W.value : oe < new Date(W.value));
    }
    if ((C || R) && (I(!!C, j.message, W.message, Vt.max, Vt.min), !r))
      return k(_[w].message), _;
  }
  if ((u || d) && !L && (It(p) || a && Array.isArray(p))) {
    const C = un(u), R = un(d), j = !Je(C.value) && p.length > +C.value, W = !Je(R.value) && p.length < +R.value;
    if ((j || W) && (I(j, C.message, R.message), !r))
      return k(_[w].message), _;
  }
  if (h && !L && It(p)) {
    const { value: C, message: R } = un(h);
    if (Nr(C) && !p.match(C) && (_[w] = {
      type: Vt.pattern,
      message: R,
      ref: i,
      ...E(Vt.pattern, R)
    }, !r))
      return k(R), _;
  }
  if (x) {
    if (Rt(x)) {
      const C = await x(p, n), R = gi(C, y);
      if (R && (_[w] = {
        ...R,
        ...E(Vt.validate, R.message)
      }, !r))
        return k(R.message), _;
    } else if (Be(x)) {
      let C = {};
      for (const R in x) {
        if (!at(C) && !r)
          break;
        const j = gi(await x[R](p, n), y, R);
        j && (C = {
          ...j,
          ...E(R, j.message)
        }, k(j.message), r && (_[w] = C));
      }
      if (!at(C) && (_[w] = {
        ref: y,
        ...C
      }, !r))
        return _;
    }
  }
  return k(!0), _;
};
function Lm(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Ve(e) ? r++ : e[t[r++]];
  return e;
}
function Pm(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ve(e[t]))
      return !1;
  return !0;
}
function qe(e, t) {
  const n = Array.isArray(t) ? t : Sa(t) ? [t] : Pl(t), r = n.length === 1 ? e : Lm(e, n), s = n.length - 1, a = n[s];
  return r && delete r[a], s !== 0 && (Be(r) && at(r) || Array.isArray(r) && Pm(r)) && qe(e, n.slice(0, -1)), e;
}
var fs = () => {
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
}, Os = (e) => Je(e) || !Il(e);
function Qt(e, t) {
  if (Os(e) || Os(t))
    return e === t;
  if (sn(e) && sn(t))
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
      if (sn(a) && sn(i) || Be(a) && Be(i) || Array.isArray(a) && Array.isArray(i) ? !Qt(a, i) : a !== i)
        return !1;
    }
  }
  return !0;
}
var Ul = (e) => e.type === "select-multiple", Mm = (e) => Ca(e) || tr(e), hs = (e) => Cr(e) && e.isConnected, Wl = (e) => {
  for (const t in e)
    if (Rt(e[t]))
      return !0;
  return !1;
};
function Dr(e, t = {}) {
  const n = Array.isArray(e);
  if (Be(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Be(e[r]) && !Wl(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Dr(e[r], t[r])) : Je(e[r]) || (t[r] = !0);
  return t;
}
function Ql(e, t, n) {
  const r = Array.isArray(e);
  if (Be(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || Be(e[s]) && !Wl(e[s]) ? Ve(t) || Os(n[s]) ? n[s] = Array.isArray(e[s]) ? Dr(e[s], []) : { ...Dr(e[s]) } : Ql(e[s], Je(t) ? {} : t[s], n[s]) : n[s] = !Qt(e[s], t[s]);
  return n;
}
var Tn = (e, t) => Ql(e, t, Dr(t)), Hl = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Ve(e) ? e : t ? e === "" ? NaN : e && +e : n && It(e) ? new Date(e) : r ? r(e) : e;
function ms(e) {
  const t = e.ref;
  return ka(t) ? t.files : Ca(t) ? Zl(e.refs).value : Ul(t) ? [...t.selectedOptions].map(({ value: n }) => n) : tr(t) ? ql(e.refs).value : Hl(Ve(t.value) ? e.ref.value : t.value, e);
}
var Vm = (e, t, n, r) => {
  const s = {};
  for (const a of e) {
    const i = H(t, a);
    i && Ce(s, a, i._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: r
  };
}, An = (e) => Ve(e) ? e : Nr(e) ? e.source : Be(e) ? Nr(e.value) ? e.value.source : e.value : e;
const bi = "AsyncFunction";
var Bm = (e) => !!e && !!e.validate && !!(Rt(e.validate) && e.validate.constructor.name === bi || Be(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === bi)), jm = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function yi(e, t, n) {
  const r = H(e, n);
  if (r || Sa(n))
    return {
      error: r,
      name: n
    };
  const s = n.split(".");
  for (; s.length; ) {
    const a = s.join("."), i = H(t, a), o = H(e, a);
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
var $m = (e, t, n, r, s) => s.isOnAll ? !1 : !n && s.isOnTouch ? !(t || e) : (n ? r.isOnBlur : s.isOnBlur) ? !e : (n ? r.isOnChange : s.isOnChange) ? e : !0, zm = (e, t) => !Hr(H(e, t)).length && qe(e, t);
const qm = {
  mode: Ct.onSubmit,
  reValidateMode: Ct.onChange,
  shouldFocusError: !0
};
function Zm(e = {}) {
  let t = {
    ...qm,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Rt(t.defaultValues),
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
  }, r = {}, s = Be(t.defaultValues) || Be(t.values) ? st(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : st(s), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, o = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: fs(),
    array: fs(),
    state: fs()
  }, m = di(t.mode), h = di(t.reValidateMode), x = t.criteriaMode === Ct.all, w = (b) => (D) => {
    clearTimeout(u), u = setTimeout(b, D);
  }, g = async (b) => {
    if (!t.disabled && (d.isValid || b)) {
      const D = t.resolver ? at((await T()).errors) : await E(r, !0);
      D !== n.isValid && f.state.next({
        isValid: D
      });
    }
  }, v = (b, D) => {
    !t.disabled && (d.isValidating || d.validatingFields) && ((b || Array.from(o.mount)).forEach((F) => {
      F && (D ? Ce(n.validatingFields, F, D) : qe(n.validatingFields, F));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !at(n.validatingFields)
    }));
  }, p = (b, D = [], F, Z, M = !0, P = !0) => {
    if (Z && F && !t.disabled) {
      if (i.action = !0, P && Array.isArray(H(r, b))) {
        const ne = F(H(r, b), Z.argA, Z.argB);
        M && Ce(r, b, ne);
      }
      if (P && Array.isArray(H(n.errors, b))) {
        const ne = F(H(n.errors, b), Z.argA, Z.argB);
        M && Ce(n.errors, b, ne), zm(n.errors, b);
      }
      if (d.touchedFields && P && Array.isArray(H(n.touchedFields, b))) {
        const ne = F(H(n.touchedFields, b), Z.argA, Z.argB);
        M && Ce(n.touchedFields, b, ne);
      }
      d.dirtyFields && (n.dirtyFields = Tn(s, a)), f.state.next({
        name: b,
        isDirty: C(b, D),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ce(a, b, D);
  }, y = (b, D) => {
    Ce(n.errors, b, D), f.state.next({
      errors: n.errors
    });
  }, k = (b) => {
    n.errors = b, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, _ = (b, D, F, Z) => {
    const M = H(r, b);
    if (M) {
      const P = H(a, b, Ve(F) ? H(s, b) : F);
      Ve(P) || Z && Z.defaultChecked || D ? Ce(a, b, D ? P : ms(M._f)) : W(b, P), i.mount && g();
    }
  }, S = (b, D, F, Z, M) => {
    let P = !1, ne = !1;
    const de = {
      name: b
    };
    if (!t.disabled) {
      const Ee = !!(H(r, b) && H(r, b)._f && H(r, b)._f.disabled);
      if (!F || Z) {
        d.isDirty && (ne = n.isDirty, n.isDirty = de.isDirty = C(), P = ne !== de.isDirty);
        const Se = Ee || Qt(H(s, b), D);
        ne = !!(!Ee && H(n.dirtyFields, b)), Se || Ee ? qe(n.dirtyFields, b) : Ce(n.dirtyFields, b, !0), de.dirtyFields = n.dirtyFields, P = P || d.dirtyFields && ne !== !Se;
      }
      if (F) {
        const Se = H(n.touchedFields, b);
        Se || (Ce(n.touchedFields, b, F), de.touchedFields = n.touchedFields, P = P || d.touchedFields && Se !== F);
      }
      P && M && f.state.next(de);
    }
    return P ? de : {};
  }, N = (b, D, F, Z) => {
    const M = H(n.errors, b), P = d.isValid && yt(D) && n.isValid !== D;
    if (t.delayError && F ? (l = w(() => y(b, F)), l(t.delayError)) : (clearTimeout(u), l = null, F ? Ce(n.errors, b, F) : qe(n.errors, b)), (F ? !Qt(M, F) : M) || !at(Z) || P) {
      const ne = {
        ...Z,
        ...P && yt(D) ? { isValid: D } : {},
        errors: n.errors,
        name: b
      };
      n = {
        ...n,
        ...ne
      }, f.state.next(ne);
    }
  }, T = async (b) => {
    v(b, !0);
    const D = await t.resolver(a, t.context, Vm(b || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return v(b), D;
  }, L = async (b) => {
    const { errors: D } = await T(b);
    if (b)
      for (const F of b) {
        const Z = H(D, F);
        Z ? Ce(n.errors, F, Z) : qe(n.errors, F);
      }
    else
      n.errors = D;
    return D;
  }, E = async (b, D, F = {
    valid: !0
  }) => {
    for (const Z in b) {
      const M = b[Z];
      if (M) {
        const { _f: P, ...ne } = M;
        if (P) {
          const de = o.array.has(P.name), Ee = M._f && Bm(M._f);
          Ee && d.validatingFields && v([Z], !0);
          const Se = await vi(M, o.disabled, a, x, t.shouldUseNativeValidation && !D, de);
          if (Ee && d.validatingFields && v([Z]), Se[P.name] && (F.valid = !1, D))
            break;
          !D && (H(Se, P.name) ? de ? Om(n.errors, Se, P.name) : Ce(n.errors, P.name, Se[P.name]) : qe(n.errors, P.name));
        }
        !at(ne) && await E(ne, D, F);
      }
    }
    return F.valid;
  }, I = () => {
    for (const b of o.unMount) {
      const D = H(r, b);
      D && (D._f.refs ? D._f.refs.every((F) => !hs(F)) : !hs(D._f.ref)) && se(b);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, C = (b, D) => !t.disabled && (b && D && Ce(a, b, D), !Qt(Y(), s)), R = (b, D, F) => $l(b, o, {
    ...i.mount ? a : Ve(D) ? s : It(b) ? { [b]: D } : D
  }, F, D), j = (b) => Hr(H(i.mount ? a : s, b, t.shouldUnregister ? H(s, b, []) : [])), W = (b, D, F = {}) => {
    const Z = H(r, b);
    let M = D;
    if (Z) {
      const P = Z._f;
      P && (!P.disabled && Ce(a, b, Hl(D, P)), M = Cr(P.ref) && Je(D) ? "" : D, Ul(P.ref) ? [...P.ref.options].forEach((ne) => ne.selected = M.includes(ne.value)) : P.refs ? tr(P.ref) ? P.refs.length > 1 ? P.refs.forEach((ne) => (!ne.defaultChecked || !ne.disabled) && (ne.checked = Array.isArray(M) ? !!M.find((de) => de === ne.value) : M === ne.value)) : P.refs[0] && (P.refs[0].checked = !!M) : P.refs.forEach((ne) => ne.checked = ne.value === M) : ka(P.ref) ? P.ref.value = "" : (P.ref.value = M, P.ref.type || f.values.next({
        name: b,
        values: { ...a }
      })));
    }
    (F.shouldDirty || F.shouldTouch) && S(b, M, F.shouldTouch, F.shouldDirty, !0), F.shouldValidate && me(b);
  }, oe = (b, D, F) => {
    for (const Z in D) {
      const M = D[Z], P = `${b}.${Z}`, ne = H(r, P);
      (o.array.has(b) || Be(M) || ne && !ne._f) && !sn(M) ? oe(P, M, F) : W(P, M, F);
    }
  }, G = (b, D, F = {}) => {
    const Z = H(r, b), M = o.array.has(b), P = st(D);
    Ce(a, b, P), M ? (f.array.next({
      name: b,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && F.shouldDirty && f.state.next({
      name: b,
      dirtyFields: Tn(s, a),
      isDirty: C(b, P)
    })) : Z && !Z._f && !Je(P) ? oe(b, P, F) : W(b, P, F), fi(b, o) && f.state.next({ ...n }), f.values.next({
      name: i.mount ? b : void 0,
      values: { ...a }
    });
  }, le = async (b) => {
    i.mount = !0;
    const D = b.target;
    let F = D.name, Z = !0;
    const M = H(r, F), P = () => D.type ? ms(M._f) : Ol(b), ne = (de) => {
      Z = Number.isNaN(de) || sn(de) && isNaN(de.getTime()) || Qt(de, H(a, F, de));
    };
    if (M) {
      let de, Ee;
      const Se = P(), We = b.type === kr.BLUR || b.type === kr.FOCUS_OUT, Lt = !jm(M._f) && !t.resolver && !H(n.errors, F) && !M._f.deps || $m(We, H(n.touchedFields, F), n.isSubmitted, h, m), Pt = fi(F, o, We);
      Ce(a, F, Se), We ? (M._f.onBlur && M._f.onBlur(b), l && l(0)) : M._f.onChange && M._f.onChange(b);
      const ge = S(F, Se, We, !1), Re = !at(ge) || Pt;
      if (!We && f.values.next({
        name: F,
        type: b.type,
        values: { ...a }
      }), Lt)
        return d.isValid && (t.mode === "onBlur" && We ? g() : We || g()), Re && f.state.next({ name: F, ...Pt ? {} : ge });
      if (!We && Pt && f.state.next({ ...n }), t.resolver) {
        const { errors: Oe } = await T([F]);
        if (ne(Se), Z) {
          const Ke = yi(n.errors, r, F), Tt = yi(Oe, r, Ke.name || F);
          de = Tt.error, F = Tt.name, Ee = at(Oe);
        }
      } else
        v([F], !0), de = (await vi(M, o.disabled, a, x, t.shouldUseNativeValidation))[F], v([F]), ne(Se), Z && (de ? Ee = !1 : d.isValid && (Ee = await E(r, !0)));
      Z && (M._f.deps && me(M._f.deps), N(F, Ee, de, ge));
    }
  }, ee = (b, D) => {
    if (H(n.errors, D) && b.focus)
      return b.focus(), 1;
  }, me = async (b, D = {}) => {
    let F, Z;
    const M = Pn(b);
    if (t.resolver) {
      const P = await L(Ve(b) ? b : M);
      F = at(P), Z = b ? !M.some((ne) => H(P, ne)) : F;
    } else b ? (Z = (await Promise.all(M.map(async (P) => {
      const ne = H(r, P);
      return await E(ne && ne._f ? { [P]: ne } : ne);
    }))).every(Boolean), !(!Z && !n.isValid) && g()) : Z = F = await E(r);
    return f.state.next({
      ...!It(b) || d.isValid && F !== n.isValid ? {} : { name: b },
      ...t.resolver || !b ? { isValid: F } : {},
      errors: n.errors
    }), D.shouldFocus && !Z && Mn(r, ee, b ? M : o.mount), Z;
  }, Y = (b) => {
    const D = {
      ...i.mount ? a : s
    };
    return Ve(b) ? D : It(b) ? H(D, b) : b.map((F) => H(D, F));
  }, z = (b, D) => ({
    invalid: !!H((D || n).errors, b),
    isDirty: !!H((D || n).dirtyFields, b),
    error: H((D || n).errors, b),
    isValidating: !!H(n.validatingFields, b),
    isTouched: !!H((D || n).touchedFields, b)
  }), $ = (b) => {
    b && Pn(b).forEach((D) => qe(n.errors, D)), f.state.next({
      errors: b ? n.errors : {}
    });
  }, fe = (b, D, F) => {
    const Z = (H(r, b, { _f: {} })._f || {}).ref, M = H(n.errors, b) || {}, { ref: P, message: ne, type: de, ...Ee } = M;
    Ce(n.errors, b, {
      ...Ee,
      ...D,
      ref: Z
    }), f.state.next({
      name: b,
      errors: n.errors,
      isValid: !1
    }), F && F.shouldFocus && Z && Z.focus && Z.focus();
  }, ke = (b, D) => Rt(b) ? f.values.subscribe({
    next: (F) => b(R(void 0, D), F)
  }) : R(b, D, !0), se = (b, D = {}) => {
    for (const F of b ? Pn(b) : o.mount)
      o.mount.delete(F), o.array.delete(F), D.keepValue || (qe(r, F), qe(a, F)), !D.keepError && qe(n.errors, F), !D.keepDirty && qe(n.dirtyFields, F), !D.keepTouched && qe(n.touchedFields, F), !D.keepIsValidating && qe(n.validatingFields, F), !t.shouldUnregister && !D.keepDefaultValue && qe(s, F);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...D.keepDirty ? { isDirty: C() } : {}
    }), !D.keepIsValid && g();
  }, pe = ({ disabled: b, name: D, field: F, fields: Z }) => {
    (yt(b) && i.mount || b || o.disabled.has(D)) && (b ? o.disabled.add(D) : o.disabled.delete(D), S(D, ms(F ? F._f : H(Z, D)._f), !1, !1, !0));
  }, be = (b, D = {}) => {
    let F = H(r, b);
    const Z = yt(D.disabled) || yt(t.disabled);
    return Ce(r, b, {
      ...F || {},
      _f: {
        ...F && F._f ? F._f : { ref: { name: b } },
        name: b,
        mount: !0,
        ...D
      }
    }), o.mount.add(b), F ? pe({
      field: F,
      disabled: yt(D.disabled) ? D.disabled : t.disabled,
      name: b
    }) : _(b, !0, D.value), {
      ...Z ? { disabled: D.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!D.required,
        min: An(D.min),
        max: An(D.max),
        minLength: An(D.minLength),
        maxLength: An(D.maxLength),
        pattern: An(D.pattern)
      } : {},
      name: b,
      onChange: le,
      onBlur: le,
      ref: (M) => {
        if (M) {
          be(b, D), F = H(r, b);
          const P = Ve(M.value) && M.querySelectorAll && M.querySelectorAll("input,select,textarea")[0] || M, ne = Mm(P), de = F._f.refs || [];
          if (ne ? de.find((Ee) => Ee === P) : P === F._f.ref)
            return;
          Ce(r, b, {
            _f: {
              ...F._f,
              ...ne ? {
                refs: [
                  ...de.filter(hs),
                  P,
                  ...Array.isArray(H(s, b)) ? [{}] : []
                ],
                ref: { type: P.type, name: b }
              } : { ref: P }
            }
          }), _(b, !1, void 0, P);
        } else
          F = H(r, b, {}), F._f && (F._f.mount = !1), (t.shouldUnregister || D.shouldUnregister) && !(Ll(o.array, b) && i.action) && o.unMount.add(b);
      }
    };
  }, ie = () => t.shouldFocusError && Mn(r, ee, o.mount), X = (b) => {
    yt(b) && (f.state.next({ disabled: b }), Mn(r, (D, F) => {
      const Z = H(r, F);
      Z && (D.disabled = Z._f.disabled || b, Array.isArray(Z._f.refs) && Z._f.refs.forEach((M) => {
        M.disabled = Z._f.disabled || b;
      }));
    }, 0, !1));
  }, ce = (b, D) => async (F) => {
    let Z;
    F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
    let M = st(a);
    if (o.disabled.size)
      for (const P of o.disabled)
        Ce(M, P, void 0);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: P, values: ne } = await T();
      n.errors = P, M = ne;
    } else
      await E(r);
    if (qe(n.errors, "root"), at(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await b(M, F);
      } catch (P) {
        Z = P;
      }
    } else
      D && await D({ ...n.errors }, F), ie(), setTimeout(ie);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: at(n.errors) && !Z,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), Z)
      throw Z;
  }, Ne = (b, D = {}) => {
    H(r, b) && (Ve(D.defaultValue) ? G(b, st(H(s, b))) : (G(b, D.defaultValue), Ce(s, b, st(D.defaultValue))), D.keepTouched || qe(n.touchedFields, b), D.keepDirty || (qe(n.dirtyFields, b), n.isDirty = D.defaultValue ? C(b, st(H(s, b))) : C()), D.keepError || (qe(n.errors, b), d.isValid && g()), f.state.next({ ...n }));
  }, Te = (b, D = {}) => {
    const F = b ? st(b) : s, Z = st(F), M = at(b), P = M ? s : Z;
    if (D.keepDefaultValues || (s = F), !D.keepValues) {
      if (D.keepDirtyValues) {
        const ne = /* @__PURE__ */ new Set([
          ...o.mount,
          ...Object.keys(Tn(s, a))
        ]);
        for (const de of Array.from(ne))
          H(n.dirtyFields, de) ? Ce(P, de, H(a, de)) : G(de, H(P, de));
      } else {
        if (wa && Ve(b))
          for (const ne of o.mount) {
            const de = H(r, ne);
            if (de && de._f) {
              const Ee = Array.isArray(de._f.refs) ? de._f.refs[0] : de._f.ref;
              if (Cr(Ee)) {
                const Se = Ee.closest("form");
                if (Se) {
                  Se.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = t.shouldUnregister ? D.keepDefaultValues ? st(s) : {} : st(P), f.array.next({
        values: { ...P }
      }), f.values.next({
        values: { ...P }
      });
    }
    o = {
      mount: D.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, i.mount = !d.isValid || !!D.keepIsValid || !!D.keepDirtyValues, i.watch = !!t.shouldUnregister, f.state.next({
      submitCount: D.keepSubmitCount ? n.submitCount : 0,
      isDirty: M ? !1 : D.keepDirty ? n.isDirty : !!(D.keepDefaultValues && !Qt(b, s)),
      isSubmitted: D.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: M ? {} : D.keepDirtyValues ? D.keepDefaultValues && a ? Tn(s, a) : n.dirtyFields : D.keepDefaultValues && b ? Tn(s, b) : D.keepDirty ? n.dirtyFields : {},
      touchedFields: D.keepTouched ? n.touchedFields : {},
      errors: D.keepErrors ? n.errors : {},
      isSubmitSuccessful: D.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Le = (b, D) => Te(Rt(b) ? b(a) : b, D);
  return {
    control: {
      register: be,
      unregister: se,
      getFieldState: z,
      handleSubmit: ce,
      setError: fe,
      _executeSchema: T,
      _getWatch: R,
      _getDirty: C,
      _updateValid: g,
      _removeUnmounted: I,
      _updateFieldArray: p,
      _updateDisabledField: pe,
      _getFieldArray: j,
      _reset: Te,
      _resetDefaultValues: () => Rt(t.defaultValues) && t.defaultValues().then((b) => {
        Le(b, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (b) => {
        n = {
          ...n,
          ...b
        };
      },
      _disableForm: X,
      _subjects: f,
      _proxyFormState: d,
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
      set _state(b) {
        i = b;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return o;
      },
      set _names(b) {
        o = b;
      },
      get _formState() {
        return n;
      },
      set _formState(b) {
        n = b;
      },
      get _options() {
        return t;
      },
      set _options(b) {
        t = {
          ...t,
          ...b
        };
      }
    },
    trigger: me,
    register: be,
    handleSubmit: ce,
    watch: ke,
    setValue: G,
    getValues: Y,
    reset: Le,
    resetField: Ne,
    clearErrors: $,
    unregister: se,
    setError: fe,
    setFocus: (b, D = {}) => {
      const F = H(r, b), Z = F && F._f;
      if (Z) {
        const M = Z.refs ? Z.refs[0] : Z.ref;
        M.focus && (M.focus(), D.shouldSelect && Rt(M.select) && M.select());
      }
    },
    getFieldState: z
  };
}
function Gl(e = {}) {
  const t = ue.useRef(void 0), n = ue.useRef(void 0), [r, s] = ue.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Rt(e.defaultValues),
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
    defaultValues: Rt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Zm(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, _a({
    subject: a._subjects.state,
    next: (i) => {
      Bl(i, a._proxyFormState, a._updateFormState, !0) && s({ ...a._formState });
    }
  }), ue.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), ue.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== r.isDirty && a._subjects.state.next({
        isDirty: i
      });
    }
  }, [a, r.isDirty]), ue.useEffect(() => {
    e.values && !Qt(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, s((i) => ({ ...i }))) : a._resetDefaultValues();
  }, [e.values, a]), ue.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), ue.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), ue.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Vl(r, a), t.current;
}
var Um = "Label", Xl = xt.forwardRef((e, t) => /* @__PURE__ */ c(
  fu.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Xl.displayName = Um;
var Kl = Xl;
const Fr = xt.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(
  Kl,
  {
    ref: n,
    className: Q(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Fr.displayName = Kl.displayName;
const Yl = Tm, Jl = xt.createContext(
  {}
), Ls = ({
  ...e
}) => {
  const { formState: t } = en();
  return /* @__PURE__ */ c(Jl.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c(Im, { ...e, disabled: t.isSubmitting }) });
}, Gr = () => {
  const e = xt.useContext(Jl), t = xt.useContext(ec), { getFieldState: n, formState: r } = en(), s = n(e.name, r);
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
}, ec = xt.createContext(
  {}
), Na = xt.forwardRef(({ className: e, ...t }, n) => {
  const r = xt.useId();
  return /* @__PURE__ */ c(ec.Provider, { value: { id: r }, children: /* @__PURE__ */ c("div", { ref: n, className: Q("space-y-2", e), ...t }) });
});
Na.displayName = "FormItem";
const Wm = xt.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = Gr();
  return /* @__PURE__ */ c(
    Fr,
    {
      ref: n,
      className: Q(r && "text-f1-foreground-critical", e),
      htmlFor: s,
      ...t
    }
  );
});
Wm.displayName = "FormLabel";
const tc = xt.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: s, formMessageId: a } = Gr();
  return /* @__PURE__ */ c(
    hu,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${s} ${a}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
tc.displayName = "FormControl";
const nc = xt.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Gr();
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
nc.displayName = "FormDescription";
const Xr = xt.forwardRef(
  ({ className: e, children: t, fallback: n, ...r }, s) => {
    const { error: a, formMessageId: i } = Gr(), { forms: o } = Fe(), l = a ? a.message ?? n ?? o.validation.invalidType : t;
    return l ? /* @__PURE__ */ A(
      "div",
      {
        ref: s,
        id: i,
        className: Q("flex gap-1", e),
        ...r,
        children: [
          /* @__PURE__ */ c(ht, { icon: lo, color: "critical" }),
          /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-critical", children: l })
        ]
      }
    ) : null;
  }
);
Xr.displayName = "FormMessage";
function Qm({
  isActionBar: e,
  isDirty: t,
  actionBarStatus: n,
  hasErrors: r,
  errorCount: s,
  resolvedActionBarLabel: a,
  submitLabel: i,
  submitIcon: o,
  discardableChanges: l,
  discardLabel: u,
  discardIcon: d,
  issuesOneLabel: f,
  issuesOtherLabel: m,
  onSubmit: h,
  onDiscard: x,
  goToPreviousError: w,
  goToNextError: g
}) {
  return e ? /* @__PURE__ */ c(
    Ts,
    {
      isOpen: t || n === "loading" || n === "success",
      variant: "light",
      status: r ? void 0 : n,
      label: a,
      leftContent: r ? /* @__PURE__ */ A("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ A("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ c(ht, { icon: lo, size: "md", color: "critical" }),
          /* @__PURE__ */ c("span", { className: "font-medium text-f1-foreground-critical", children: s === 1 ? f.replace("{{count}}", String(s)) : m.replace("{{count}}", String(s)) })
        ] }),
        s > 1 && /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c(
            je,
            {
              icon: $u,
              onClick: w,
              variant: "outline",
              label: "Go to previous error",
              hideLabel: !0
            }
          ),
          /* @__PURE__ */ c(
            je,
            {
              icon: na,
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
          onClick: h,
          disabled: r
        }
      ],
      secondaryActions: l ? [
        {
          label: u,
          icon: d,
          onClick: x
        }
      ] : []
    }
  ) : /* @__PURE__ */ c(
    Ts,
    {
      isOpen: n === "loading" || n === "success",
      variant: "light",
      status: n,
      label: a
    }
  );
}
const xi = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = H(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, rc = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? xi(r.ref, n, e) : r.refs && r.refs.forEach((s) => xi(s, n, e));
  }
}, Hm = (e, t) => {
  t.shouldUseNativeValidation && rc(e, t);
  const n = {};
  for (const r in e) {
    const s = H(t.fields, r), a = Object.assign(e[r] || {}, { ref: s && s.ref });
    if (Gm(t.names || Object.keys(e), r)) {
      const i = Object.assign({}, H(n, r));
      Ce(i, "root", a), Ce(n, r, i);
    } else Ce(n, r, a);
  }
  return n;
}, Gm = (e, t) => e.some((n) => n.startsWith(t + "."));
var Xm = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], s = r.code, a = r.message, i = r.path.join(".");
    if (!n[i]) if ("unionErrors" in r) {
      var o = r.unionErrors[0].errors[0];
      n[i] = { message: o.message, type: o.code };
    } else n[i] = { message: a, type: s };
    if ("unionErrors" in r && r.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var l = n[i].types, u = l && l[r.code];
      n[i] = zl(i, t, n, s, u ? [].concat(u, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Km = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, s, a) {
    try {
      return Promise.resolve((function(i, o) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(u) {
            return a.shouldUseNativeValidation && rc({}, a), { errors: {}, values: n.raw ? r : u };
          });
        } catch (u) {
          return o(u);
        }
        return l && l.then ? l.then(void 0, o) : l;
      })(0, function(i) {
        if ((function(o) {
          return Array.isArray(o?.errors);
        })(i)) return { values: {}, errors: Hm(Xm(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, we;
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
})(we || (we = {}));
var wi;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(wi || (wi = {}));
const te = we.arrayToEnum([
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
]), Ut = (e) => {
  switch (typeof e) {
    case "undefined":
      return te.undefined;
    case "string":
      return te.string;
    case "number":
      return Number.isNaN(e) ? te.nan : te.number;
    case "boolean":
      return te.boolean;
    case "function":
      return te.function;
    case "bigint":
      return te.bigint;
    case "symbol":
      return te.symbol;
    case "object":
      return Array.isArray(e) ? te.array : e === null ? te.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? te.promise : typeof Map < "u" && e instanceof Map ? te.map : typeof Set < "u" && e instanceof Set ? te.set : typeof Date < "u" && e instanceof Date ? te.date : te.object;
    default:
      return te.unknown;
  }
}, V = we.arrayToEnum([
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
class jt extends Error {
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
            const u = i.path[l];
            l === i.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(n(i))) : o[u] = o[u] || { _errors: [] }, o = o[u], l++;
          }
        }
    };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof jt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, we.jsonStringifyReplacer, 2);
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
jt.create = (e) => new jt(e);
const Ps = (e, t) => {
  let n;
  switch (e.code) {
    case V.invalid_type:
      e.received === te.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case V.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, we.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${we.joinValues(e.keys, ", ")}`;
      break;
    case V.invalid_union:
      n = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${we.joinValues(e.options)}`;
      break;
    case V.invalid_enum_value:
      n = `Invalid enum value. Expected ${we.joinValues(e.options)}, received '${e.received}'`;
      break;
    case V.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      n = "Invalid function return type";
      break;
    case V.invalid_date:
      n = "Invalid date";
      break;
    case V.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : we.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case V.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case V.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case V.custom:
      n = "Invalid input";
      break;
    case V.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case V.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, we.assertNever(e);
  }
  return { message: n };
};
let Ym = Ps;
function Jm() {
  return Ym;
}
const ep = (e) => {
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
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    o = u(i, { data: t, defaultError: o }).message;
  return {
    ...s,
    path: a,
    message: o
  };
};
function K(e, t) {
  const n = Jm(), r = ep({
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
      n === Ps ? void 0 : Ps
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(r);
}
class pt {
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
        return he;
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
    return pt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return he;
      a.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const he = Object.freeze({
  status: "aborted"
}), En = (e) => ({ status: "dirty", value: e }), wt = (e) => ({ status: "valid", value: e }), Si = (e) => e.status === "aborted", _i = (e) => e.status === "dirty", gn = (e) => e.status === "valid", Tr = (e) => typeof Promise < "u" && e instanceof Promise;
var re;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(re || (re = {}));
class Kt {
  constructor(t, n, r, s) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ki = (e, t) => {
  if (gn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new jt(e.common.issues);
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
class xe {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ut(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ut(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new pt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ut(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Tr(n))
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
      parsedType: Ut(t)
    }, s = this._parseSync({ data: t, path: r.path, parent: r });
    return ki(r, s);
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
      parsedType: Ut(t)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: t, path: [], parent: n });
        return gn(r) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((r) => gn(r) ? {
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
      parsedType: Ut(t)
    }, s = this._parse({ data: t, path: r.path, parent: r }), a = await (Tr(s) ? s : Promise.resolve(s));
    return ki(r, a);
  }
  refine(t, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, a) => {
      const i = t(s), o = () => a.addIssue({
        code: V.custom,
        ...r(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) => t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(t) {
    return new yn({
      schema: this,
      typeName: q.ZodEffects,
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
    return Gt.create(this, this._def);
  }
  nullable() {
    return xn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ot.create(this);
  }
  promise() {
    return Rr.create(this, this._def);
  }
  or(t) {
    return Ar.create([this, t], this._def);
  }
  and(t) {
    return Er.create(this, t, this._def);
  }
  transform(t) {
    return new yn({
      ...ve(this._def),
      schema: this,
      typeName: q.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new $s({
      ...ve(this._def),
      innerType: this,
      defaultValue: n,
      typeName: q.ZodDefault
    });
  }
  brand() {
    return new _p({
      typeName: q.ZodBranded,
      type: this,
      ...ve(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new zs({
      ...ve(this._def),
      innerType: this,
      catchValue: n,
      typeName: q.ZodCatch
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
    return Da.create(this, t);
  }
  readonly() {
    return qs.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const tp = /^c[^\s-]{8,}$/i, np = /^[0-9a-z]+$/, rp = /^[0-9A-HJKMNP-TV-Z]{26}$/i, sp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ap = /^[a-z0-9_-]{21}$/i, ip = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, op = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, lp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, cp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ps;
const up = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, dp = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, fp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, hp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, mp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, pp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, sc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", gp = new RegExp(`^${sc}$`);
function ac(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function vp(e) {
  return new RegExp(`^${ac(e)}$`);
}
function bp(e) {
  let t = `${sc}T${ac(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function yp(e, t) {
  return !!((t === "v4" || !t) && up.test(e) || (t === "v6" || !t) && fp.test(e));
}
function xp(e, t) {
  if (!ip.test(e))
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
function wp(e, t) {
  return !!((t === "v4" || !t) && dp.test(e) || (t === "v6" || !t) && hp.test(e));
}
class Ht extends xe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== te.string) {
      const a = this._getOrReturnCtx(t);
      return K(a, {
        code: V.invalid_type,
        expected: te.string,
        received: a.parsedType
      }), he;
    }
    const r = new pt();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (s = this._getOrReturnCtx(t, s), K(s, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (s = this._getOrReturnCtx(t, s), K(s, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value, o = t.data.length < a.value;
        (i || o) && (s = this._getOrReturnCtx(t, s), i ? K(s, {
          code: V.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && K(s, {
          code: V.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        lp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "email",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        ps || (ps = new RegExp(cp, "u")), ps.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "emoji",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        sp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "uuid",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        ap.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "nanoid",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        tp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "cuid",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        np.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "cuid2",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        rp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "ulid",
          code: V.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), K(s, {
            validation: "url",
            code: V.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "regex",
        code: V.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? bp(a).test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? gp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? vp(a).test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? op.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "duration",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? yp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "ip",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? xp(t.data, a.alg) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "jwt",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? wp(t.data, a.version) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "cidr",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? mp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "base64",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? pp.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "base64url",
        code: V.invalid_string,
        message: a.message
      }), r.dirty()) : we.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: V.invalid_string,
      ...re.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...re.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...re.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...re.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...re.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...re.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...re.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...re.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...re.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...re.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...re.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...re.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...re.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...re.errToObj(t) });
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
      ...re.errToObj(t?.message)
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
      ...re.errToObj(t?.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...re.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...re.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n?.position,
      ...re.errToObj(n?.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...re.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...re.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...re.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...re.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...re.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, re.errToObj(t));
  }
  trim() {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ht({
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
Ht.create = (e) => new Ht({
  checks: [],
  typeName: q.ZodString,
  coerce: e?.coerce ?? !1,
  ...ve(e)
});
function Sp(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, s = n > r ? n : r, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
class vn extends xe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== te.number) {
      const a = this._getOrReturnCtx(t);
      return K(a, {
        code: V.invalid_type,
        expected: te.number,
        received: a.parsedType
      }), he;
    }
    let r;
    const s = new pt();
    for (const a of this._def.checks)
      a.kind === "int" ? we.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? Sp(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.not_finite,
        message: a.message
      }), s.dirty()) : we.assertNever(a);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, re.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, re.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, re.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, re.toString(n));
  }
  setLimit(t, n, r, s) {
    return new vn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: re.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: re.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: re.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: re.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: re.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: re.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: re.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && we.isInteger(t.value));
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
vn.create = (e) => new vn({
  checks: [],
  typeName: q.ZodNumber,
  coerce: e?.coerce || !1,
  ...ve(e)
});
class Zn extends xe {
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
    if (this._getType(t) !== te.bigint)
      return this._getInvalidInput(t);
    let r;
    const s = new pt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), K(r, {
        code: V.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : we.assertNever(a);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return K(n, {
      code: V.invalid_type,
      expected: te.bigint,
      received: n.parsedType
    }), he;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, re.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, re.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, re.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, re.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Zn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: re.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Zn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: re.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: re.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: re.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: re.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: re.toString(n)
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
Zn.create = (e) => new Zn({
  checks: [],
  typeName: q.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...ve(e)
});
class Ms extends xe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== te.boolean) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.boolean,
        received: r.parsedType
      }), he;
    }
    return wt(t.data);
  }
}
Ms.create = (e) => new Ms({
  typeName: q.ZodBoolean,
  coerce: e?.coerce || !1,
  ...ve(e)
});
class Un extends xe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== te.date) {
      const a = this._getOrReturnCtx(t);
      return K(a, {
        code: V.invalid_type,
        expected: te.date,
        received: a.parsedType
      }), he;
    }
    if (Number.isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return K(a, {
        code: V.invalid_date
      }), he;
    }
    const r = new pt();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (s = this._getOrReturnCtx(t, s), K(s, {
        code: V.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : we.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: re.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: re.toString(n)
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
Un.create = (e) => new Un({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: q.ZodDate,
  ...ve(e)
});
class Ci extends xe {
  _parse(t) {
    if (this._getType(t) !== te.symbol) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.symbol,
        received: r.parsedType
      }), he;
    }
    return wt(t.data);
  }
}
Ci.create = (e) => new Ci({
  typeName: q.ZodSymbol,
  ...ve(e)
});
class Ni extends xe {
  _parse(t) {
    if (this._getType(t) !== te.undefined) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.undefined,
        received: r.parsedType
      }), he;
    }
    return wt(t.data);
  }
}
Ni.create = (e) => new Ni({
  typeName: q.ZodUndefined,
  ...ve(e)
});
class Di extends xe {
  _parse(t) {
    if (this._getType(t) !== te.null) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.null,
        received: r.parsedType
      }), he;
    }
    return wt(t.data);
  }
}
Di.create = (e) => new Di({
  typeName: q.ZodNull,
  ...ve(e)
});
class Vs extends xe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return wt(t.data);
  }
}
Vs.create = (e) => new Vs({
  typeName: q.ZodAny,
  ...ve(e)
});
class Bs extends xe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return wt(t.data);
  }
}
Bs.create = (e) => new Bs({
  typeName: q.ZodUnknown,
  ...ve(e)
});
class Yt extends xe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return K(n, {
      code: V.invalid_type,
      expected: te.never,
      received: n.parsedType
    }), he;
  }
}
Yt.create = (e) => new Yt({
  typeName: q.ZodNever,
  ...ve(e)
});
class Fi extends xe {
  _parse(t) {
    if (this._getType(t) !== te.undefined) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.void,
        received: r.parsedType
      }), he;
    }
    return wt(t.data);
  }
}
Fi.create = (e) => new Fi({
  typeName: q.ZodVoid,
  ...ve(e)
});
class Ot extends xe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), s = this._def;
    if (n.parsedType !== te.array)
      return K(n, {
        code: V.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), he;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value, o = n.data.length < s.exactLength.value;
      (i || o) && (K(n, {
        code: i ? V.too_big : V.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (K(n, {
      code: V.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (K(n, {
      code: V.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, o) => s.type._parseAsync(new Kt(n, i, n.path, o)))).then((i) => pt.mergeArray(r, i));
    const a = [...n.data].map((i, o) => s.type._parseSync(new Kt(n, i, n.path, o)));
    return pt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Ot({
      ...this._def,
      minLength: { value: t, message: re.toString(n) }
    });
  }
  max(t, n) {
    return new Ot({
      ...this._def,
      maxLength: { value: t, message: re.toString(n) }
    });
  }
  length(t, n) {
    return new Ot({
      ...this._def,
      exactLength: { value: t, message: re.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ot.create = (e, t) => new Ot({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: q.ZodArray,
  ...ve(t)
});
function fn(e) {
  if (e instanceof $e) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Gt.create(fn(r));
    }
    return new $e({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Ot ? new Ot({
    ...e._def,
    type: fn(e.element)
  }) : e instanceof Gt ? Gt.create(fn(e.unwrap())) : e instanceof xn ? xn.create(fn(e.unwrap())) : e instanceof an ? an.create(e.items.map((t) => fn(t))) : e;
}
class $e extends xe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = we.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== te.object) {
      const u = this._getOrReturnCtx(t);
      return K(u, {
        code: V.invalid_type,
        expected: te.object,
        received: u.parsedType
      }), he;
    }
    const { status: r, ctx: s } = this._processInputParams(t), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Yt && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        i.includes(u) || o.push(u);
    const l = [];
    for (const u of i) {
      const d = a[u], f = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: d._parse(new Kt(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof Yt) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of o)
          l.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (u === "strict")
        o.length > 0 && (K(s, {
          code: V.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of o) {
        const f = s.data[d];
        l.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new Kt(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of l) {
        const f = await d.key, m = await d.value;
        u.push({
          key: f,
          value: m,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => pt.mergeObjectSync(r, u)) : pt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return re.errToObj, new $e({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          const s = this._def.errorMap?.(n, r).message ?? r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: re.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new $e({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new $e({
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
    return new $e({
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
    return new $e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: q.ZodObject
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
    return new $e({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const r of we.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const r of we.objectKeys(this.shape))
      t[r] || (n[r] = this.shape[r]);
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return fn(this);
  }
  partial(t) {
    const n = {};
    for (const r of we.objectKeys(this.shape)) {
      const s = this.shape[r];
      t && !t[r] ? n[r] = s : n[r] = s.optional();
    }
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const r of we.objectKeys(this.shape))
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Gt; )
          a = a._def.innerType;
        n[r] = a;
      }
    return new $e({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return ic(we.objectKeys(this.shape));
  }
}
$e.create = (e, t) => new $e({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: q.ZodObject,
  ...ve(t)
});
$e.strictCreate = (e, t) => new $e({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Yt.create(),
  typeName: q.ZodObject,
  ...ve(t)
});
$e.lazycreate = (e, t) => new $e({
  shape: e,
  unknownKeys: "strip",
  catchall: Yt.create(),
  typeName: q.ZodObject,
  ...ve(t)
});
class Ar extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function s(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new jt(o.ctx.common.issues));
      return K(n, {
        code: V.invalid_union,
        unionErrors: i
      }), he;
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
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, d = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((l) => new jt(l));
      return K(n, {
        code: V.invalid_union,
        unionErrors: o
      }), he;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ar.create = (e, t) => new Ar({
  options: e,
  typeName: q.ZodUnion,
  ...ve(t)
});
function js(e, t) {
  const n = Ut(e), r = Ut(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === te.object && r === te.object) {
    const s = we.objectKeys(t), a = we.objectKeys(e).filter((o) => s.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of a) {
      const l = js(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      i[o] = l.data;
    }
    return { valid: !0, data: i };
  } else if (n === te.array && r === te.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < e.length; a++) {
      const i = e[a], o = t[a], l = js(i, o);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return n === te.date && r === te.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Er extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = (a, i) => {
      if (Si(a) || Si(i))
        return he;
      const o = js(a.value, i.value);
      return o.valid ? ((_i(a) || _i(i)) && n.dirty(), { status: n.value, value: o.data }) : (K(r, {
        code: V.invalid_intersection_types
      }), he);
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
Er.create = (e, t, n) => new Er({
  left: e,
  right: t,
  typeName: q.ZodIntersection,
  ...ve(n)
});
class an extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.array)
      return K(r, {
        code: V.invalid_type,
        expected: te.array,
        received: r.parsedType
      }), he;
    if (r.data.length < this._def.items.length)
      return K(r, {
        code: V.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), he;
    !this._def.rest && r.data.length > this._def.items.length && (K(r, {
      code: V.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new Kt(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => pt.mergeArray(n, i)) : pt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new an({
      ...this._def,
      rest: t
    });
  }
}
an.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new an({
    items: e,
    typeName: q.ZodTuple,
    rest: null,
    ...ve(t)
  });
};
class Ti extends xe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.map)
      return K(r, {
        code: V.invalid_type,
        expected: te.map,
        received: r.parsedType
      }), he;
    const s = this._def.keyType, a = this._def.valueType, i = [...r.data.entries()].map(([o, l], u) => ({
      key: s._parse(new Kt(r, o, r.path, [u, "key"])),
      value: a._parse(new Kt(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const u = await l.key, d = await l.value;
          if (u.status === "aborted" || d.status === "aborted")
            return he;
          (u.status === "dirty" || d.status === "dirty") && n.dirty(), o.set(u.value, d.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of i) {
        const u = l.key, d = l.value;
        if (u.status === "aborted" || d.status === "aborted")
          return he;
        (u.status === "dirty" || d.status === "dirty") && n.dirty(), o.set(u.value, d.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Ti.create = (e, t, n) => new Ti({
  valueType: t,
  keyType: e,
  typeName: q.ZodMap,
  ...ve(n)
});
class Wn extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== te.set)
      return K(r, {
        code: V.invalid_type,
        expected: te.set,
        received: r.parsedType
      }), he;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (K(r, {
      code: V.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (K(r, {
      code: V.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function i(l) {
      const u = /* @__PURE__ */ new Set();
      for (const d of l) {
        if (d.status === "aborted")
          return he;
        d.status === "dirty" && n.dirty(), u.add(d.value);
      }
      return { status: n.value, value: u };
    }
    const o = [...r.data.values()].map((l, u) => a._parse(new Kt(r, l, r.path, u)));
    return r.common.async ? Promise.all(o).then((l) => i(l)) : i(o);
  }
  min(t, n) {
    return new Wn({
      ...this._def,
      minSize: { value: t, message: re.toString(n) }
    });
  }
  max(t, n) {
    return new Wn({
      ...this._def,
      maxSize: { value: t, message: re.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Wn.create = (e, t) => new Wn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: q.ZodSet,
  ...ve(t)
});
class Ai extends xe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ai.create = (e, t) => new Ai({
  getter: e,
  typeName: q.ZodLazy,
  ...ve(t)
});
class Ei extends xe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        received: n.data,
        code: V.invalid_literal,
        expected: this._def.value
      }), he;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ei.create = (e, t) => new Ei({
  value: e,
  typeName: q.ZodLiteral,
  ...ve(t)
});
function ic(e, t) {
  return new bn({
    values: e,
    typeName: q.ZodEnum,
    ...ve(t)
  });
}
class bn extends xe {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return K(n, {
        expected: we.joinValues(r),
        received: n.parsedType,
        code: V.invalid_type
      }), he;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return K(n, {
        received: n.data,
        code: V.invalid_enum_value,
        options: r
      }), he;
    }
    return wt(t.data);
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
    return bn.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return bn.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
bn.create = ic;
class Ri extends xe {
  _parse(t) {
    const n = we.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== te.string && r.parsedType !== te.number) {
      const s = we.objectValues(n);
      return K(r, {
        expected: we.joinValues(s),
        received: r.parsedType,
        code: V.invalid_type
      }), he;
    }
    if (this._cache || (this._cache = new Set(we.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = we.objectValues(n);
      return K(r, {
        received: r.data,
        code: V.invalid_enum_value,
        options: s
      }), he;
    }
    return wt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ri.create = (e, t) => new Ri({
  values: e,
  typeName: q.ZodNativeEnum,
  ...ve(t)
});
class Rr extends xe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== te.promise && n.common.async === !1)
      return K(n, {
        code: V.invalid_type,
        expected: te.promise,
        received: n.parsedType
      }), he;
    const r = n.parsedType === te.promise ? n.data : Promise.resolve(n.data);
    return wt(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Rr.create = (e, t) => new Rr({
  type: e,
  typeName: q.ZodPromise,
  ...ve(t)
});
class yn extends xe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === q.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), s = this._def.effect || null, a = {
      addIssue: (i) => {
        K(r, i), i.fatal ? n.abort() : n.dirty();
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
            return he;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? he : l.status === "dirty" || n.value === "dirty" ? En(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return he;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? he : o.status === "dirty" || n.value === "dirty" ? En(o.value) : o;
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
        return o.status === "aborted" ? he : (o.status === "dirty" && n.dirty(), i(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? he : (o.status === "dirty" && n.dirty(), i(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!gn(i))
          return he;
        const o = s.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => gn(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({
          status: n.value,
          value: o
        })) : he);
    we.assertNever(s);
  }
}
yn.create = (e, t, n) => new yn({
  schema: e,
  typeName: q.ZodEffects,
  effect: t,
  ...ve(n)
});
yn.createWithPreprocess = (e, t, n) => new yn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: q.ZodEffects,
  ...ve(n)
});
class Gt extends xe {
  _parse(t) {
    return this._getType(t) === te.undefined ? wt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Gt.create = (e, t) => new Gt({
  innerType: e,
  typeName: q.ZodOptional,
  ...ve(t)
});
class xn extends xe {
  _parse(t) {
    return this._getType(t) === te.null ? wt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xn.create = (e, t) => new xn({
  innerType: e,
  typeName: q.ZodNullable,
  ...ve(t)
});
class $s extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === te.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
$s.create = (e, t) => new $s({
  innerType: e,
  typeName: q.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ve(t)
});
class zs extends xe {
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
    return Tr(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new jt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new jt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
zs.create = (e, t) => new zs({
  innerType: e,
  typeName: q.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ve(t)
});
class Ii extends xe {
  _parse(t) {
    if (this._getType(t) !== te.nan) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        code: V.invalid_type,
        expected: te.nan,
        received: r.parsedType
      }), he;
    }
    return { status: "valid", value: t.data };
  }
}
Ii.create = (e) => new Ii({
  typeName: q.ZodNaN,
  ...ve(e)
});
class _p extends xe {
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
class Da extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? he : a.status === "dirty" ? (n.dirty(), En(a.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? he : s.status === "dirty" ? (n.dirty(), {
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
    return new Da({
      in: t,
      out: n,
      typeName: q.ZodPipeline
    });
  }
}
class qs extends xe {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (s) => (gn(s) && (s.value = Object.freeze(s.value)), s);
    return Tr(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
qs.create = (e, t) => new qs({
  innerType: e,
  typeName: q.ZodReadonly,
  ...ve(t)
});
var q;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(q || (q = {}));
const Kr = Ht.create, kp = vn.create, Cp = Ms.create, Np = Un.create, Dp = Vs.create, Fp = Bs.create;
Yt.create;
const oc = Ot.create, Fa = $e.create;
Ar.create;
Er.create;
an.create;
bn.create;
Rr.create;
Gt.create;
xn.create;
function Ae(e, t) {
  return e._def?.typeName === t;
}
function tn(e) {
  return Ae(e, "ZodEffects") ? e._def.schema : e;
}
const lc = /* @__PURE__ */ new WeakMap();
function vt(e, t) {
  lc.set(e, t);
  const n = e;
  return n._f0Config = t, n._innerSchema = e, n;
}
function nn(e) {
  const t = e;
  return t._f0Config ? t._f0Config : lc.get(e);
}
function qy(e) {
  return nn(e) !== void 0;
}
function tt(e) {
  let t = e;
  for (; Ae(t, "ZodOptional") || Ae(t, "ZodNullable") || Ae(t, "ZodDefault"); )
    t = t._def.innerType;
  return t;
}
function cc(e, t) {
  if ("fieldType" in t && t.fieldType)
    return t.fieldType;
  if ("useUpload" in t && t.useUpload)
    return "file";
  if ("options" in t && t.options || "source" in t && t.source)
    return "select";
  const n = tt(e);
  return Ae(n, "ZodString") ? "rows" in t && t.rows ? "textarea" : "text" : Ae(n, "ZodNumber") ? "number" : Ae(n, "ZodBoolean") ? "switch" : Ae(n, "ZodDate") ? "date" : Ae(n, "ZodEnum") || Ae(n, "ZodArray") && ("options" in t && t.options || "source" in t && t.source) ? "select" : Ae(n, "ZodObject") && "render" in t && t.render ? "custom" : "text";
}
function Tp(e, t) {
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
function Yr(e, t) {
  return typeof e == "function" ? e({ values: t }) : Tp(e, t);
}
function Ta(e, t) {
  return e === void 0 ? !1 : typeof e == "function" ? e({ values: t }) : e;
}
function dn(e, t) {
  if (e !== void 0)
    return typeof e == "function" ? e({ values: t }) : e;
}
function uc(e, t) {
  return async (n, r, s) => {
    const a = Ap(e, n), i = { ...n };
    for (const l of Object.keys(i))
      i[l] === null && (i[l] = void 0);
    return Km(a, t)(i, r, s);
  };
}
function Ap(e, t) {
  const r = tn(e).shape, s = {};
  for (const [i, o] of Object.entries(r)) {
    const l = nn(o);
    if (!l || !l.renderIf) {
      s[i] = o;
      continue;
    }
    Yr(l.renderIf, t) ? s[i] = o : s[i] = Dp();
  }
  const a = Fa(s);
  if (Ae(e, "ZodEffects")) {
    const o = e._def.effect;
    if (o.type === "refinement")
      return a.superRefine(o.refinement);
  }
  return a;
}
const Aa = "gap-4", dc = "mt-6", fc = "max-w-[720px]", rn = "md", Jr = Ft(null);
function Ea() {
  const e = et(Jr);
  if (!e)
    throw new Error("useF0FormContext must be used within a F0Form");
  return e;
}
function hc() {
  return et(Jr);
}
function on(e, t, n) {
  const r = ["forms", e];
  return t && r.push(t), n && r.push(n), r.join(".");
}
function Ep(e) {
  const t = tt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function Rp({
  field: e,
  formField: t
}) {
  const n = e.validation && Ep(e.validation);
  return /* @__PURE__ */ c(
    Bn,
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
function Ip({
  field: e,
  formField: t,
  error: n,
  isValidating: r,
  required: s
}) {
  const i = hc()?.renderCustomField, o = {
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
    return /* @__PURE__ */ c(mt, { children: i({
      ...o,
      customFieldName: e.customFieldName,
      fieldType: "custom"
    }) });
  }
  if (!e.render)
    throw new Error(
      `Custom field "${e.id}" has neither a render function nor a customFieldName.`
    );
  return /* @__PURE__ */ c(mt, { children: e.render(o) });
}
function Op(e, t) {
  if (e)
    return {
      value: { from: e, to: e },
      granularity: t?.[0] ?? "day"
    };
}
function Lp(e) {
  return e?.value?.from;
}
function mc({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = B(
    () => Op(
      t.value ?? void 0,
      e.granularities
    ),
    [t.value, e.granularities]
  ), i = (l) => {
    t.onChange(Lp(l) ?? null);
  }, o = (l) => {
    l || t.onBlur();
  };
  return /* @__PURE__ */ c(
    xo,
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
      size: rn,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function Zs(e) {
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
function gs(e, t) {
  if (!e) return;
  const n = new Date(e);
  if (t) {
    const [r, s, a] = t.split(":").map(Number);
    n.setHours(r ?? 0, s ?? 0, a ?? 0, 0);
  } else
    n.setHours(0, 0, 0, 0);
  return n;
}
function pc({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = B(
    () => Zs(t.value ?? void 0),
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
    Vr,
    {
      type: "time",
      label: e.label,
      disabled: e.disabled,
      value: a,
      onChange: i,
      size: rn,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      clearable: e.clearable,
      name: t.name,
      ref: t.ref,
      icon: zu
    }
  );
}
function Mp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = t.value ?? void 0, i = B(() => Zs(a), [a]), o = O(
    (h) => {
      if (!h) {
        t.onChange(null);
        return;
      }
      t.onChange(gs(h, i));
    },
    [t, i]
  ), l = O(
    (h) => {
      if (!h) {
        if (a) {
          const w = new Date(a);
          w.setHours(0, 0, 0, 0), t.onChange(w);
        }
        return;
      }
      const x = Zs(h);
      if (!a) {
        const w = /* @__PURE__ */ new Date();
        w.setHours(0, 0, 0, 0), t.onChange(gs(w, x));
        return;
      }
      t.onChange(gs(a, x));
    },
    [t, a]
  ), u = B(
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
  ), d = B(
    () => ({
      ...t,
      value: a,
      onChange: o
    }),
    [t, a, o]
  ), f = B(
    () => ({
      id: `${e.id}-time`,
      type: "time",
      label: "Time",
      disabled: e.disabled,
      clearable: !1
      // Time clearing is handled via date clear
    }),
    [e.id, e.disabled]
  ), m = B(
    () => ({
      ...t,
      value: a,
      onChange: l
    }),
    [t, a, l]
  );
  return /* @__PURE__ */ A("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ c("div", { className: "flex-1", children: /* @__PURE__ */ c(
      mc,
      {
        field: u,
        formField: d,
        error: n,
        status: s,
        loading: r
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-32", children: /* @__PURE__ */ c(
      pc,
      {
        field: f,
        formField: m,
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
function Bp(e) {
  if (!(!e?.value?.from || !e?.value?.to))
    return {
      from: e.value.from,
      to: e.value.to
    };
}
function jp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = B(
    () => Vp(
      t.value ?? void 0
    ),
    [t.value]
  ), i = (u) => {
    t.onChange(Bp(u) ?? null);
  }, o = (u) => {
    u || t.onBlur();
  }, l = e.fromLabel && e.toLabel ? `${e.label} (${e.fromLabel} - ${e.toLabel})` : e.label;
  return /* @__PURE__ */ c(
    xo,
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
      size: rn,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function $p({
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
    Cm,
    {
      id: s,
      "aria-describedby": a,
      "aria-invalid": i,
      label: e.label,
      hideLabel: !0,
      value: o,
      onChange: (u) => t.onChange(u),
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
function zp(e) {
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
  const o = !!e.file, l = t?.(), u = l?.upload, d = l?.cancelUpload, f = l?.progress ?? 0, m = l?.status ?? "idle", [h, x] = J(null), w = U(!1), g = O(async () => {
    if (!(!o || !e.file || !u) && !w.current) {
      w.current = !0;
      try {
        const N = await u(e.file);
        N.type === "success" ? n(N.value) : r();
      } catch {
        const N = i.uploadFailed;
        x(N), s(N);
      }
    }
  }, [
    o,
    e.file,
    u,
    n,
    r,
    s,
    i
  ]);
  ae(() => {
    o && g();
  }, [o, g]);
  const v = O(() => {
    o && (m === "uploading" || m === "processing") && d?.(), r();
  }, [o, m, d, r]), p = o && (m === "uploading" || m === "processing"), y = Math.round(f * 100), k = e.file ?? {
    name: e.initialFile?.name ?? "",
    type: e.initialFile?.type ?? ""
  }, _ = e.file?.name ?? e.initialFile?.name ?? "", S = e.file?.size ?? e.initialFile?.size;
  return /* @__PURE__ */ A(
    "div",
    {
      className: Q(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        h && "border-f1-border-critical"
      ),
      children: [
        /* @__PURE__ */ c(mu, { file: k, size: "md" }),
        /* @__PURE__ */ A("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
          /* @__PURE__ */ c("span", { className: "truncate text-base font-medium text-f1-foreground", children: _ }),
          /* @__PURE__ */ c("span", { className: "text-sm text-f1-foreground-secondary", children: h || (p ? m === "processing" ? i.processing : `${i.uploading} ${y}%` : S != null ? zp(S) : null) })
        ] }),
        !a && /* @__PURE__ */ c(
          je,
          {
            variant: "ghost",
            size: "sm",
            label: i.remove,
            onClick: v,
            icon: Hn,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
const Zp = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function Us(e) {
  return Zp.has(e) ? `${e}/*` : e;
}
const Oi = {
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
}, Li = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function Up(e) {
  if (!e || e.length === 0) return;
  const t = [];
  for (const n of e) {
    const r = Us(n);
    if (Li[r])
      t.push(Li[r]);
    else if (Oi[r])
      t.push(Oi[r]);
    else {
      const s = r.split("/")[1];
      s && t.push(s.toUpperCase());
    }
  }
  return t.length > 0 ? t.join(", ") : void 0;
}
function Wp({
  isDragOver: e,
  hasCriticalStatus: t,
  statusType: n
}) {
  return e ? "border-f1-border-accent bg-f1-background-accent-bold/5" : t ? "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10" : n === "warning" ? "border-f1-border-warning-bold bg-f1-background" : n === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function Qp(e, t, n) {
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
function Hp({
  field: e,
  formField: t,
  error: n,
  statusType: r,
  initialFiles: s
}) {
  const { forms: a } = Fe(), i = hc(), o = s ?? i?.initialFiles, l = Ks(), u = U(null), [d, f] = J(!1), m = e.multiple ?? !1, [h, x] = J(
    () => Qp(o, t.value, m)
  ), [w, g] = J(null), v = a.file, p = h.length > 0, y = m || !p, k = e.accept ? e.accept.map(Us).join(",") : void 0, _ = B(
    () => Up(e.accept),
    [e.accept]
  ), S = O(
    (Y) => e.accept && !e.accept.some((z) => {
      const $ = Us(z);
      return $.endsWith("/*") ? Y.type.startsWith($.replace("/*", "/")) : Y.type === $;
    }) ? v.invalidFileType.replace(
      "{{types}}",
      _ ?? ""
    ) : e.maxSizeMB && Y.size > e.maxSizeMB * 1024 * 1024 ? v.fileTooLarge.replace(
      "{{maxSize}}",
      String(e.maxSizeMB)
    ) : null,
    [e.accept, e.maxSizeMB, v, _]
  ), N = O(
    (Y) => {
      g(null);
      const z = m ? Y : [Y[0]];
      for (const $ of z) {
        const fe = S($);
        if (fe) {
          g(fe);
          continue;
        }
        const ke = `${$.name}-${$.size}-${Date.now()}-${Math.random()}`;
        x((se) => m ? [...se, { key: ke, file: $ }] : [{ key: ke, file: $ }]);
      }
    },
    [m, S]
  ), T = O(
    (Y) => {
      Y.preventDefault(), Y.stopPropagation(), e.disabled || f(!0);
    },
    [e.disabled]
  ), L = O((Y) => {
    Y.preventDefault(), Y.stopPropagation(), f(!1);
  }, []), E = O(
    (Y) => {
      if (Y.preventDefault(), Y.stopPropagation(), f(!1), e.disabled) return;
      const z = Array.from(Y.dataTransfer.files);
      z.length > 0 && N(z);
    },
    [e.disabled, N]
  ), I = O(
    (Y) => {
      const z = Array.from(Y.target.files ?? []);
      z.length > 0 && N(z), u.current && (u.current.value = "");
    },
    [N]
  ), C = O(() => {
    e.disabled || u.current?.click();
  }, [e.disabled]), R = O(
    (Y) => {
      (Y.key === "Enter" || Y.key === " ") && (Y.preventDefault(), C());
    },
    [C]
  ), j = O(
    (Y, z) => {
      if (x(
        ($) => $.map((fe) => fe.key === Y ? { ...fe, value: z } : fe)
      ), m) {
        const $ = Array.isArray(t.value) ? t.value : [];
        t.onChange([...$, z]);
      } else
        t.onChange(z);
    },
    [m, t]
  ), W = O(
    (Y) => {
      const z = h.find(($) => $.key === Y);
      if (x(($) => $.filter((fe) => fe.key !== Y)), z?.value)
        if (m) {
          const $ = Array.isArray(t.value) ? t.value : [];
          t.onChange($.filter((fe) => fe !== z.value));
        } else
          t.onChange(void 0);
      else m || t.onChange(void 0);
      t.onBlur();
    },
    [h, m, t]
  ), oe = O((Y, z) => {
    x(
      ($) => $.map(
        (fe) => fe.key === Y ? { ...fe, error: z } : fe
      )
    );
  }, []), G = d ? v.dropzoneActive : e.description ?? (m ? v.dropzoneMultiple : v.dropzone), le = !!(n || w || r === "error"), ee = le || r === "warning" || r === "info", me = Wp({
    isDragOver: d,
    hasCriticalStatus: le,
    statusType: r
  });
  return /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
    y && /* @__PURE__ */ A(
      "div",
      {
        role: "button",
        tabIndex: e.disabled ? -1 : 0,
        onDragOver: T,
        onDragLeave: L,
        onDrop: E,
        onClick: C,
        onKeyDown: R,
        "aria-disabled": e.disabled,
        className: Q(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
          me,
          !e.disabled && !d && !ee && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          e.disabled && "cursor-not-allowed opacity-50",
          Pr("rounded-lg")
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon", children: /* @__PURE__ */ c(ht, { icon: ra, size: "lg" }) }),
          /* @__PURE__ */ A("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ c("span", { className: "text-center text-base text-f1-foreground-secondary", children: G }),
            !d && _ && /* @__PURE__ */ c("span", { className: "text-center text-sm text-f1-foreground-secondary/70", children: v.acceptedTypes.replace(
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
        ref: u,
        id: l,
        type: "file",
        accept: k,
        multiple: m,
        onChange: I,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    w && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-critical", children: w }),
    h.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: h.map((Y) => /* @__PURE__ */ c(
      qp,
      {
        entry: Y,
        useUpload: Y.file ? e.useUpload : void 0,
        onUploadComplete: (z) => j(Y.key, z),
        onRemove: () => W(Y.key),
        onError: (z) => oe(Y.key, z),
        disabled: e.disabled,
        translations: {
          remove: v.remove,
          uploading: v.uploading,
          processing: v.processing,
          uploadFailed: v.uploadFailed
        }
      },
      Y.key
    )) })
  ] });
}
function Gp({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  return /* @__PURE__ */ c(
    wo,
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
      size: rn,
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
    xd,
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
function Kp({
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
    name: t.name,
    onBlur: t.onBlur,
    error: n,
    status: s,
    loading: r,
    size: rn,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    hn,
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
    hn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    hn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
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
    source: e.source,
    mapOptions: e.mapOptions,
    showSearchBox: e.showSearchBox,
    searchBoxPlaceholder: e.searchBoxPlaceholder,
    name: t.name,
    onBlur: t.onBlur,
    error: n,
    status: s,
    loading: r,
    size: rn,
    hideLabel: !0
  };
  return e.multiple ? /* @__PURE__ */ c(
    hn,
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
    hn,
    {
      ...a,
      clearable: !0,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  ) : /* @__PURE__ */ c(
    hn,
    {
      ...a,
      value: t.value ?? void 0,
      onChange: (i) => {
        t.onChange(i), t.onBlur();
      }
    }
  );
}
function Jp(e) {
  const { field: t } = e;
  return "source" in t && t.source !== void 0 && t.mapOptions !== void 0 ? /* @__PURE__ */ c(
    Yp,
    {
      ...e,
      field: t
    }
  ) : "options" in t && t.options !== void 0 ? /* @__PURE__ */ c(
    Kp,
    {
      ...e,
      field: t
    }
  ) : null;
}
function eg(e) {
  const t = tt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function tg({
  field: e,
  formField: t
}) {
  const n = e.validation && eg(e.validation);
  return /* @__PURE__ */ c(
    So,
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
const ng = {
  email: "name@example.com"
}, rg = {
  url: sa,
  email: qu
};
function sg({
  field: e,
  formField: t,
  error: n,
  loading: r,
  status: s
}) {
  const a = e.inputType ?? "text", i = e.placeholder ?? ng[a] ?? void 0, o = rg[a];
  return /* @__PURE__ */ c(
    Vr,
    {
      ...t,
      label: e.label,
      type: a,
      placeholder: i,
      disabled: e.disabled,
      value: t.value != null ? String(t.value) : "",
      size: rn,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r,
      icon: o,
      clearable: e.clearable
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
  return /* @__PURE__ */ c(
    wd,
    {
      ...t,
      label: e.label,
      placeholder: e.placeholder,
      disabled: e.disabled,
      rows: e.rows,
      maxLength: e.maxLength,
      value: t.value != null ? String(t.value) : "",
      size: rn,
      hideLabel: !0,
      error: n,
      status: s,
      loading: r
    }
  );
}
function Ws({
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
  const u = !!n.error, { isValidating: d } = n, f = Ta(e.disabled, i) || s || !!l, m = {
    error: u,
    loading: d || !!l
  }, h = u ? { type: "error" } : r ? { type: r.type } : void 0;
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ c(
        sg,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m,
          status: h
        }
      );
    case "number":
      return /* @__PURE__ */ c(
        Gp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m,
          status: h
        }
      );
    case "duration":
      return /* @__PURE__ */ c(
        $p,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: u,
          status: h
        }
      );
    case "textarea":
      return /* @__PURE__ */ c(
        ag,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m,
          status: h
        }
      );
    case "select":
      return /* @__PURE__ */ c(
        Jp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m,
          status: h
        }
      );
    case "checkbox":
      return /* @__PURE__ */ c(
        Rp,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "switch":
      return /* @__PURE__ */ c(
        tg,
        {
          field: { ...e, disabled: f },
          formField: t
        }
      );
    case "date":
      return /* @__PURE__ */ c(
        mc,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: dn(e.minDate, i),
            maxDate: dn(e.maxDate, i)
          },
          formField: t,
          ...m,
          status: h
        }
      );
    case "time":
      return /* @__PURE__ */ c(
        pc,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: dn(e.minDate, i),
            maxDate: dn(e.maxDate, i)
          },
          formField: t,
          ...m,
          status: h
        }
      );
    case "datetime":
      return /* @__PURE__ */ c(
        Mp,
        {
          field: {
            ...e,
            disabled: f,
            // Evaluate dynamic date constraints
            minDate: dn(e.minDate, i),
            maxDate: dn(e.maxDate, i)
          },
          formField: t,
          ...m,
          status: h
        }
      );
    case "daterange":
      return /* @__PURE__ */ c(
        jp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m,
          status: h
        }
      );
    case "richtext":
      return /* @__PURE__ */ c(
        Xp,
        {
          field: { ...e, disabled: f },
          formField: t,
          ...m
        }
      );
    case "file":
      return /* @__PURE__ */ c(
        Hp,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: u,
          statusType: h?.type,
          initialFiles: o
        }
      );
    case "custom":
      return /* @__PURE__ */ c(
        Ip,
        {
          field: { ...e, disabled: f },
          formField: t,
          error: n.error?.message,
          isValidating: d,
          required: a
        }
      );
    default:
      return null;
  }
}
function Qs(e) {
  return Ae(e, "ZodOptional") || Ae(e, "ZodNullable") || Ae(e, "ZodDefault") && Qs(e._def.innerType);
}
const ig = /* @__PURE__ */ new Set([
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
function Pi(e) {
  const t = tt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "min" ? (r.value ?? 0) >= 1 : ig.has(r.kind)) : !1;
}
const og = /* @__PURE__ */ new Set([
  "select",
  "date",
  "time",
  "datetime",
  "daterange",
  "file"
]);
function es(e, t) {
  if (Qs(e))
    return !1;
  const n = tt(e);
  if (Ae(n, "ZodString"))
    return t && og.has(t) ? !0 : Pi(e);
  if (Ae(n, "ZodObject")) {
    const r = n._def.shape();
    if (r && "value" in r) {
      if (Qs(r.value))
        return !1;
      if (Ae(tt(r.value), "ZodString"))
        return Pi(r.value);
    }
  }
  return !0;
}
function lg(e) {
  return e != null && typeof e == "object" && "_type" in e && e._type === "select-config";
}
function cg({
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
    if (lg(l)) {
      const u = { ...e, ...l, type: "select" };
      return Ws({
        field: u,
        formField: t,
        fieldState: n,
        fieldStatus: e.status,
        isSubmitting: r,
        isRequired: s,
        values: a,
        isFormLoading: i
      });
    }
    return /* @__PURE__ */ c(mt, { children: l });
  }
  return Ws({
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
function ts({ field: e, sectionId: t }) {
  const n = en(), r = n.watch(), { isSubmitting: s } = n.formState, {
    formName: a,
    isLoading: i,
    renderCustomField: o
  } = Ea(), { forms: l } = Fe(), u = Ta(e.disabled, r), d = U(u);
  ae(() => {
    const g = d.current;
    if (d.current = u, !g && u && e.resetOnDisable) {
      const v = n.formState.defaultValues?.[e.id];
      n.setValue(e.id, v, { shouldValidate: !1 });
    }
  }, [u, e.resetOnDisable, e.id, n]);
  const f = !e.renderIf || Yr(e.renderIf, r), m = e.type !== "checkbox" && e.type !== "custom", h = e.type !== "custom", x = e.validation && es(e.validation, e.type), w = on(a, t, e.id);
  return f ? /* @__PURE__ */ c(
    Ls,
    {
      control: n.control,
      name: e.id,
      render: ({ field: g, fieldState: v }) => /* @__PURE__ */ A(Na, { id: w, className: "scroll-mt-4", children: [
        m && /* @__PURE__ */ A(
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
        /* @__PURE__ */ c(tc, { children: cg({
          field: e,
          formField: g,
          fieldState: v,
          isSubmitting: s,
          isRequired: x,
          values: r,
          isFormLoading: i,
          renderCustomField: o
        }) }),
        e.helpText && /* @__PURE__ */ c(nc, { children: e.helpText }),
        "moreInfoLink" in e && e.moreInfoLink && /* @__PURE__ */ c(
          Zu,
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
        h && !v.error && /* @__PURE__ */ c(ta, { status: e.status }),
        h && /* @__PURE__ */ c(
          Xr,
          {
            fallback: x ? l.validation.required : l.validation.invalidType
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ c(
    Ls,
    {
      control: n.control,
      name: e.id,
      render: () => /* @__PURE__ */ c("span", { className: "hidden", "aria-hidden": "true" })
    }
  );
}
function vs(e) {
  const t = tt(e);
  if (!Ae(t, "ZodDate"))
    return {};
  const n = t._def.checks || [];
  let r, s;
  for (const a of n)
    a.kind === "min" ? r = new Date(a.value) : a.kind === "max" && (s = new Date(a.value));
  return { minDate: r, maxDate: s };
}
function ug(e) {
  const t = tt(e);
  if (!Ae(t, "ZodNumber"))
    return {};
  const n = t._def.checks || [];
  let r, s;
  for (const a of n)
    a.kind === "min" ? r = a.value : a.kind === "max" && (s = a.value);
  return { min: r, max: s };
}
function dg(e) {
  const t = tt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "email") : !1;
}
function fg(e) {
  const t = tt(e);
  return Ae(t, "ZodString") ? (t._def.checks || []).some((r) => r.kind === "url") : !1;
}
function Mi(e) {
  return dg(e) ? "email" : fg(e) ? "url" : "text";
}
function hg(e) {
  const t = tt(e);
  if (!Ae(t, "ZodString"))
    return {};
  const n = t._def.checks || [];
  let r;
  for (const s of n)
    s.kind === "max" && (r = s.value);
  return { maxLength: r };
}
function Vi(e, t, n, r) {
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
  }, a = !es(t, r);
  switch (r) {
    case "text": {
      const i = "inputType" in n && n.inputType ? n.inputType : Mi(t);
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
      const { maxLength: i } = hg(t);
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
      const i = vs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
      const i = vs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
      const i = vs(t), o = "minDate" in n ? n.minDate : void 0, l = "maxDate" in n ? n.maxDate : void 0;
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
        inputType: Mi(t),
        renderIf: n.renderIf
      };
  }
}
function Ir(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.length; r++) {
    if (n.has(r)) continue;
    const s = e[r], a = s.config.row;
    if (a) {
      const i = [];
      for (let l = r; l < e.length; l++)
        e[l].config.row === a && (i.push(e[l]), n.add(l));
      i.sort((l, u) => l.position - u.position);
      const o = {
        type: "row",
        fields: i.map(
          (l) => Vi(l.id, l.schema, l.config, l.fieldType)
        )
      };
      t.push(o);
    } else {
      n.add(r);
      const i = Vi(
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
function gc(e) {
  const t = e.shape, n = [], r = Object.entries(t);
  for (let s = 0; s < r.length; s++) {
    const [a, i] = r[s], o = nn(i);
    if (o) {
      const l = cc(i, o);
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
function vc(e, t) {
  return B(() => {
    const n = tn(e), r = gc(n), s = [], a = {};
    for (const l of r) {
      const u = l.config.section;
      u ? (a[u] || (a[u] = []), a[u].push(l)) : s.push(l);
    }
    s.sort((l, u) => l.position - u.position);
    for (const l of Object.keys(a))
      a[l].sort((u, d) => u.position - d.position);
    const i = [];
    i.push(...Ir(s));
    const o = t ? Object.keys(t).filter((l) => a[l]) : Object.keys(a);
    for (const l of o) {
      const u = t?.[l], d = a[l], f = {
        id: l,
        type: "section",
        section: {
          title: u?.title ?? l,
          description: u?.description,
          withInset: u?.withInset,
          renderIf: u?.renderIf,
          action: u?.action,
          fields: Ir(d)
        }
      };
      i.push(f);
    }
    return i;
  }, [e, t]);
}
function Zy(e, t) {
  const n = tn(e), r = gc(n), s = [], a = {};
  for (const l of r) {
    const u = l.config.section;
    u ? (a[u] || (a[u] = []), a[u].push(l)) : s.push(l);
  }
  s.sort((l, u) => l.position - u.position);
  for (const l of Object.keys(a))
    a[l].sort((u, d) => u.position - d.position);
  const i = [];
  i.push(...Ir(s));
  const o = t ? Object.keys(t).filter((l) => a[l]) : Object.keys(a);
  for (const l of o) {
    const u = t?.[l], d = a[l], f = {
      id: l,
      type: "section",
      section: {
        title: u?.title ?? l,
        description: u?.description,
        withInset: u?.withInset,
        renderIf: u?.renderIf,
        action: u?.action,
        fields: Ir(d)
      }
    };
    i.push(f);
  }
  return i;
}
function bc(e) {
  const { validation: t } = e.forms;
  return (n, r) => {
    switch (n.code) {
      case V.invalid_type:
        return n.received === "undefined" || n.received === "null" ? { message: t.required } : { message: t.invalidType };
      case V.invalid_string:
        if (n.validation === "email")
          return { message: t.string.email };
        if (n.validation === "url")
          return { message: t.string.url };
        break;
      case V.too_small:
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
      case V.too_big:
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
      case V.invalid_date:
        return { message: t.date.invalid };
      case V.not_multiple_of:
        if (n.multipleOf === 1)
          return { message: t.number.integer };
        break;
      case V.invalid_literal:
        if (n.expected === !0)
          return { message: t.checkbox.mustBeChecked };
        break;
    }
    return { message: r.defaultError };
  };
}
function Ra({ row: e, sectionId: t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `flex xs:flex-row flex-col items-start ${Aa} [&>*]:flex-1`,
      children: e.fields.map((n) => /* @__PURE__ */ c(ts, { field: n, sectionId: t }, n.id))
    }
  );
}
function Bi(e) {
  const t = tt(e);
  return Ae(t, "ZodLiteral") && t._def.value === !0;
}
function Ia({
  fields: e,
  sectionId: t
}) {
  const n = en(), { formName: r } = Ea(), { watch: s, setValue: a } = n, { isSubmitting: i } = n.formState, o = s(), l = B(
    () => e.filter(
      (p) => !p.renderIf || Yr(p.renderIf, o)
    ),
    [e, o]
  ), u = B(
    () => Object.fromEntries(
      l.map((p) => [
        p.id,
        Ta(p.disabled, o) || i
      ])
    ),
    [l, i, o]
  ), d = U({});
  ae(() => {
    const p = d.current, y = n.formState.defaultValues ?? {};
    for (const k of l) {
      if (!(k.id in p))
        continue;
      const _ = p[k.id], S = u[k.id] ?? !1;
      if (!_ && S && k.resetOnDisable) {
        const N = y[k.id] ?? !1;
        a(k.id, N, { shouldValidate: !1 });
      }
    }
    d.current = { ...u };
  }, [u, l, n, a]);
  const f = B(
    () => l.map((p) => ({
      value: p.id,
      title: p.label,
      description: p.helpText,
      disabled: u[p.id] ?? !1,
      required: !!(p.validation && Bi(p.validation)),
      moreInfoLink: p.moreInfoLink
    })),
    [l, u]
  ), m = B(
    () => l.filter((p) => o[p.id]).map((p) => p.id),
    [l, o]
  );
  if (l.length === 0)
    return null;
  const h = (p) => {
    for (const y of l) {
      const k = p.includes(y.id), _ = !!o[y.id];
      k !== _ && a(y.id, k, {
        shouldValidate: !0,
        shouldDirty: !0
      });
    }
  }, x = B(() => {
    const p = [];
    for (const y of l) {
      if (!y.alert) continue;
      const k = typeof y.alert == "function" ? y.alert({ fieldValue: o[y.id], values: o }) : y.alert;
      k && p.push({ fieldId: y.id, props: k });
    }
    return p;
  }, [l, o]), { forms: w } = Fe(), g = l.filter((p) => p.validation && Bi(p.validation)).map((p) => {
    const y = n.formState.errors[p.id];
    return y ? { fieldId: p.id, label: p.label, message: y.message } : null;
  }).filter(
    (p) => p !== null
  ), v = B(
    () => l.map((p) => ({
      fieldId: p.id,
      anchorId: on(r, t, p.id)
    })),
    [l, r, t]
  );
  return /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ A(
      "div",
      {
        id: v[0]?.anchorId,
        className: "flex scroll-mt-4 flex-col gap-4",
        children: [
          v.slice(1).map(({ fieldId: p, anchorId: y }) => /* @__PURE__ */ c("span", { id: y, className: "hidden" }, p)),
          /* @__PURE__ */ c(
            Sd,
            {
              multiple: !0,
              isToggle: !0,
              grouped: !0,
              items: f,
              value: m,
              onChange: h
            }
          ),
          x.map(({ fieldId: p, props: y }) => /* @__PURE__ */ c(_o, { ...y, variant: y.variant ?? "info" }, p))
        ]
      }
    ),
    g.length > 0 && /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: g.map((p) => /* @__PURE__ */ c(
      Ls,
      {
        control: n.control,
        name: p.fieldId,
        render: () => /* @__PURE__ */ c(Na, { children: /* @__PURE__ */ c(Xr, { fallback: w.validation.required }) })
      },
      p.fieldId
    )) })
  ] });
}
const mg = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function pg(e) {
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
function gg(e) {
  const t = [];
  let n = [];
  const r = () => {
    n.length > 0 && (t.push({ type: "switchGroup", fields: [...n] }), n = []);
  };
  return e.forEach((s, a) => {
    s.type === "field" && s.field.type === "switch" ? n.push(s.field) : (r(), s.type === "field" ? t.push({ type: "field", item: s }) : s.type === "row" && t.push({ type: "row", item: s, index: a }));
  }), r(), t;
}
function yc({
  formName: e,
  sectionId: t,
  schema: n,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: a,
  submitConfig: i,
  errorTriggerMode: o,
  className: l,
  initialFiles: u,
  formRef: d,
  renderCustomField: f,
  isLoading: m
}) {
  const h = Fe(), x = vc(n), w = i?.label ?? "Submit", g = i?.icon === null ? void 0 : i?.icon ?? ko, v = i?.showSubmitWhenDirty ?? !1, p = i?.hideSubmitButton ?? !1, y = B(() => bc(h), [h]), k = mg[o], _ = B(
    () => uc(n, { errorMap: y }),
    [n, y]
  ), S = Gl({
    resolver: _,
    mode: k,
    defaultValues: s
  }), N = U(m);
  ae(() => {
    N.current && !m && s && S.reset(s), N.current = m;
  }, [m, s, S]);
  const T = S.formState.errors.root, { isSubmitting: L, isDirty: E } = S.formState, I = Object.keys(S.formState.errors).filter((le) => le !== "root").length > 0, C = U(null), R = O(
    async (le) => {
      const ee = { ...le };
      for (const Y of Object.keys(ee))
        ee[Y] === null && (ee[Y] = void 0);
      const me = await a(ee);
      me.success ? S.reset(le) : (me.errors && Object.entries(me.errors).forEach(([Y, z]) => {
        S.setError(Y, { message: z });
      }), me.rootMessage && S.setError("root", { message: me.rootMessage }));
    },
    [a, S]
  );
  ae(() => {
    if (d) {
      const le = {
        submit: () => new Promise((ee, me) => {
          S.handleSubmit(
            async (Y) => {
              await R(Y), ee();
            },
            () => {
              me(new Error("Form validation failed"));
            }
          )();
        }),
        reset: () => S.reset(),
        isDirty: () => S.formState.isDirty,
        getValues: () => S.getValues(),
        setValue: (ee, me, Y) => {
          S.setValue(
            ee,
            me,
            {
              shouldValidate: Y?.shouldValidate ?? !0,
              shouldDirty: Y?.shouldDirty ?? !0
            }
          );
        },
        setValues: (ee, me) => {
          for (const [Y, z] of Object.entries(ee))
            S.setValue(
              Y,
              z,
              {
                shouldValidate: !1,
                shouldDirty: me?.shouldDirty ?? !0
              }
            );
          me?.shouldValidate !== !1 && S.trigger();
        },
        trigger: async (ee) => ee ? S.trigger(ee) : S.trigger(),
        getErrors: () => pg(S.formState.errors),
        getFieldNames: () => Object.keys(S.getValues()),
        _setStateCallback: (ee) => {
          C.current = ee;
        }
      };
      d.current = le;
    }
    return () => {
      d && (d.current = null);
    };
  }, [d, S, R]), ae(() => {
    C.current && C.current({ isSubmitting: L, hasErrors: I });
  }, [L, I]);
  const j = gg(x), W = B(
    () => ({
      formName: e,
      initialFiles: u,
      renderCustomField: f,
      isLoading: m
    }),
    [e, u, f, m]
  ), oe = r?.title ?? t, G = r?.description;
  return /* @__PURE__ */ c(Jr.Provider, { value: W, children: /* @__PURE__ */ c(Yl, { ...S, children: /* @__PURE__ */ A(
    "form",
    {
      onSubmit: S.handleSubmit(R),
      className: Q("flex flex-col", l),
      children: [
        /* @__PURE__ */ A(
          "div",
          {
            className: Q(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            ),
            children: [
              /* @__PURE__ */ c(Mo, { title: oe, description: G ?? "" }),
              r?.action && /* @__PURE__ */ c(
                je,
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
        /* @__PURE__ */ c("div", { className: `flex flex-col ${Aa}`, children: j.map((le, ee) => {
          switch (le.type) {
            case "switchGroup":
              return /* @__PURE__ */ c(
                Ia,
                {
                  fields: le.fields,
                  sectionId: t
                },
                `switch-group-${ee}`
              );
            case "field":
              return /* @__PURE__ */ c(
                ts,
                {
                  field: le.item.field,
                  sectionId: t
                },
                le.item.field.id
              );
            case "row":
              return /* @__PURE__ */ c(
                Ra,
                {
                  row: le.item,
                  sectionId: t
                },
                `row-${le.index}`
              );
            default:
              return null;
          }
        }) }),
        T && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: T.message }),
        !p && (!v || E) && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          je,
          {
            type: "submit",
            label: w,
            icon: g,
            loading: L,
            disabled: I || m
          }
        ) })
      ]
    }
  ) }) });
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
function bg({ section: e }) {
  const n = en().watch(), { formName: r } = Ea(), { title: s, description: a, withInset: i, renderIf: o, action: l, fields: u } = e.section, d = e.id;
  if (o && !Yr(o, n))
    return null;
  const f = vg(u), m = on(r, d);
  return /* @__PURE__ */ A("section", { id: m, className: "flex scroll-mt-4 flex-col", children: [
    /* @__PURE__ */ A(
      "div",
      {
        className: Q(
          "flex items-start justify-between py-5",
          i && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ c(Mo, { title: s, description: a ?? "" }),
          l && /* @__PURE__ */ c(
            je,
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
    /* @__PURE__ */ c("div", { className: `flex flex-col ${Aa}`, children: f.map((h, x) => h.type === "switchGroup" ? /* @__PURE__ */ c(
      Ia,
      {
        fields: h.fields,
        sectionId: d
      },
      `switch-group-${x}`
    ) : h.type === "field" ? /* @__PURE__ */ c(
      ts,
      {
        field: h.item.field,
        sectionId: d
      },
      h.item.field.id
    ) : h.type === "row" ? /* @__PURE__ */ c(
      Ra,
      {
        row: h.item,
        sectionId: d
      },
      `row-${h.index}`
    ) : null) })
  ] });
}
const yg = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), xg = {
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
}, wg = (e) => ({
  ...xg,
  ...e
}), Sg = (e) => {
  const t = wg(e), n = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
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
function xc(e, t, n, r) {
  r?.errorMessages && n && (e.errorMessage = {
    ...e.errorMessage,
    [t]: n
  });
}
function De(e, t, n, r, s) {
  e[t] = n, xc(e, t, r, s);
}
const wc = (e, t) => {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++)
    ;
  return [(e.length - n).toString(), ...t.slice(n)].join("/");
};
function lt(e) {
  if (e.target !== "openAi")
    return {};
  const t = [
    ...e.basePath,
    e.definitionPath,
    e.openAiAnyTypeName
  ];
  return e.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: e.$refStrategy === "relative" ? wc(t, e.currentPath) : t.join("/")
  };
}
function _g(e, t) {
  const n = {
    type: "array"
  };
  return e.type?._def && e.type?._def?.typeName !== q.ZodAny && (n.items = _e(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && De(n, "minItems", e.minLength.value, e.minLength.message, t), e.maxLength && De(n, "maxItems", e.maxLength.value, e.maxLength.message, t), e.exactLength && (De(n, "minItems", e.exactLength.value, e.exactLength.message, t), De(n, "maxItems", e.exactLength.value, e.exactLength.message, t)), n;
}
function kg(e, t) {
  const n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? De(n, "minimum", r.value, r.message, t) : De(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), De(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? De(n, "maximum", r.value, r.message, t) : De(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), De(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        De(n, "multipleOf", r.value, r.message, t);
        break;
    }
  return n;
}
function Cg() {
  return {
    type: "boolean"
  };
}
function Sc(e, t) {
  return _e(e.type._def, t);
}
const Ng = (e, t) => _e(e.innerType._def, t);
function _c(e, t, n) {
  const r = n ?? t.dateStrategy;
  if (Array.isArray(r))
    return {
      anyOf: r.map((s, a) => _c(e, t, s))
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
      return Dg(e, t);
  }
}
const Dg = (e, t) => {
  const n = {
    type: "integer",
    format: "unix-time"
  };
  if (t.target === "openApi3")
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        De(
          n,
          "minimum",
          r.value,
          // This is in milliseconds
          r.message,
          t
        );
        break;
      case "max":
        De(
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
function Fg(e, t) {
  return {
    ..._e(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Tg(e, t) {
  return t.effectStrategy === "input" ? _e(e.schema._def, t) : lt(t);
}
function Ag(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
const Eg = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function Rg(e, t) {
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
    if (Eg(a))
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
function Ig(e, t) {
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
let bs;
const St = {
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
  emoji: () => (bs === void 0 && (bs = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), bs),
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
function kc(e, t) {
  const n = {
    type: "string"
  };
  if (e.checks)
    for (const r of e.checks)
      switch (r.kind) {
        case "min":
          De(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t);
          break;
        case "max":
          De(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              _t(n, "email", r.message, t);
              break;
            case "format:idn-email":
              _t(n, "idn-email", r.message, t);
              break;
            case "pattern:zod":
              Ye(n, St.email, r.message, t);
              break;
          }
          break;
        case "url":
          _t(n, "uri", r.message, t);
          break;
        case "uuid":
          _t(n, "uuid", r.message, t);
          break;
        case "regex":
          Ye(n, r.regex, r.message, t);
          break;
        case "cuid":
          Ye(n, St.cuid, r.message, t);
          break;
        case "cuid2":
          Ye(n, St.cuid2, r.message, t);
          break;
        case "startsWith":
          Ye(n, RegExp(`^${ys(r.value, t)}`), r.message, t);
          break;
        case "endsWith":
          Ye(n, RegExp(`${ys(r.value, t)}$`), r.message, t);
          break;
        case "datetime":
          _t(n, "date-time", r.message, t);
          break;
        case "date":
          _t(n, "date", r.message, t);
          break;
        case "time":
          _t(n, "time", r.message, t);
          break;
        case "duration":
          _t(n, "duration", r.message, t);
          break;
        case "length":
          De(n, "minLength", typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, r.message, t), De(n, "maxLength", typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value, r.message, t);
          break;
        case "includes": {
          Ye(n, RegExp(ys(r.value, t)), r.message, t);
          break;
        }
        case "ip": {
          r.version !== "v6" && _t(n, "ipv4", r.message, t), r.version !== "v4" && _t(n, "ipv6", r.message, t);
          break;
        }
        case "base64url":
          Ye(n, St.base64url, r.message, t);
          break;
        case "jwt":
          Ye(n, St.jwt, r.message, t);
          break;
        case "cidr": {
          r.version !== "v6" && Ye(n, St.ipv4Cidr, r.message, t), r.version !== "v4" && Ye(n, St.ipv6Cidr, r.message, t);
          break;
        }
        case "emoji":
          Ye(n, St.emoji(), r.message, t);
          break;
        case "ulid": {
          Ye(n, St.ulid, r.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              _t(n, "binary", r.message, t);
              break;
            }
            case "contentEncoding:base64": {
              De(n, "contentEncoding", "base64", r.message, t);
              break;
            }
            case "pattern:zod": {
              Ye(n, St.base64, r.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Ye(n, St.nanoid, r.message, t);
      }
  return n;
}
function ys(e, t) {
  return t.patternStrategy === "escape" ? Lg(e) : e;
}
const Og = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Lg(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    Og.has(e[n]) || (t += "\\"), t += e[n];
  return t;
}
function _t(e, t, n, r) {
  e.format || e.anyOf?.some((s) => s.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { format: e.errorMessage.format }
    }
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.anyOf.push({
    format: t,
    ...n && r.errorMessages && { errorMessage: { format: n } }
  })) : De(e, "format", t, n, r);
}
function Ye(e, t, n, r) {
  e.pattern || e.allOf?.some((s) => s.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...e.errorMessage && r.errorMessages && {
      errorMessage: { pattern: e.errorMessage.pattern }
    }
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, Object.keys(e.errorMessage).length === 0 && delete e.errorMessage)), e.allOf.push({
    pattern: ji(t, r),
    ...n && r.errorMessages && { errorMessage: { pattern: n } }
  })) : De(e, "pattern", ji(t, r), n, r);
}
function ji(e, t) {
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
function Cc(e, t) {
  if (t.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), t.target === "openApi3" && e.keyType?._def.typeName === q.ZodEnum)
    return {
      type: "object",
      required: e.keyType._def.values,
      properties: e.keyType._def.values.reduce((r, s) => ({
        ...r,
        [s]: _e(e.valueType._def, {
          ...t,
          currentPath: [...t.currentPath, "properties", s]
        }) ?? lt(t)
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
  if (e.keyType?._def.typeName === q.ZodString && e.keyType._def.checks?.length) {
    const { type: r, ...s } = kc(e.keyType._def, t);
    return {
      ...n,
      propertyNames: s
    };
  } else {
    if (e.keyType?._def.typeName === q.ZodEnum)
      return {
        ...n,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (e.keyType?._def.typeName === q.ZodBranded && e.keyType._def.type._def.typeName === q.ZodString && e.keyType._def.type._def.checks?.length) {
      const { type: r, ...s } = Sc(e.keyType._def, t);
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
    return Cc(e, t);
  const n = _e(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || lt(t), r = _e(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || lt(t);
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
function Mg(e) {
  const t = e.values, r = Object.keys(e.values).filter((a) => typeof t[t[a]] != "number").map((a) => t[a]), s = Array.from(new Set(r.map((a) => typeof a)));
  return {
    type: s.length === 1 ? s[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: r
  };
}
function Vg(e) {
  return e.target === "openAi" ? void 0 : {
    not: lt({
      ...e,
      currentPath: [...e.currentPath, "not"]
    })
  };
}
function Bg(e) {
  return e.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
const Or = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function jg(e, t) {
  if (t.target === "openApi3")
    return $i(e, t);
  const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every((r) => r._def.typeName in Or && (!r._def.checks || !r._def.checks.length))) {
    const r = n.reduce((s, a) => {
      const i = Or[a._def.typeName];
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
  return $i(e, t);
}
const $i = (e, t) => {
  const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((r, s) => _e(r._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", `${s}`]
  })).filter((r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
  return n.length ? { anyOf: n } : void 0;
};
function $g(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return t.target === "openApi3" ? {
      type: Or[e.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        Or[e.innerType._def.typeName],
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
function zg(e, t) {
  const n = {
    type: "number"
  };
  if (!e.checks)
    return n;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        n.type = "integer", xc(n, "type", r.message, t);
        break;
      case "min":
        t.target === "jsonSchema7" ? r.inclusive ? De(n, "minimum", r.value, r.message, t) : De(n, "exclusiveMinimum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMinimum = !0), De(n, "minimum", r.value, r.message, t));
        break;
      case "max":
        t.target === "jsonSchema7" ? r.inclusive ? De(n, "maximum", r.value, r.message, t) : De(n, "exclusiveMaximum", r.value, r.message, t) : (r.inclusive || (n.exclusiveMaximum = !0), De(n, "maximum", r.value, r.message, t));
        break;
      case "multipleOf":
        De(n, "multipleOf", r.value, r.message, t);
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
    let u = Ug(l);
    u && n && (l._def.typeName === "ZodOptional" && (l = l._def.innerType), l.isNullable() || (l = l.nullable()), u = !1);
    const d = _e(l._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", o],
      propertyPath: [...t.currentPath, "properties", o]
    });
    d !== void 0 && (r.properties[o] = d, u || s.push(o));
  }
  s.length && (r.required = s);
  const i = Zg(e, t);
  return i !== void 0 && (r.additionalProperties = i), r;
}
function Zg(e, t) {
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
function Ug(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
const Wg = (e, t) => {
  if (t.currentPath.toString() === t.propertyPath?.toString())
    return _e(e.innerType._def, t);
  const n = _e(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? {
    anyOf: [
      {
        not: lt(t)
      },
      n
    ]
  } : lt(t);
}, Qg = (e, t) => {
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
function Hg(e, t) {
  return _e(e.type._def, t);
}
function Gg(e, t) {
  const r = {
    type: "array",
    uniqueItems: !0,
    items: _e(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && De(r, "minItems", e.minSize.value, e.minSize.message, t), e.maxSize && De(r, "maxItems", e.maxSize.value, e.maxSize.message, t), r;
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
function Kg(e) {
  return {
    not: lt(e)
  };
}
function Yg(e) {
  return lt(e);
}
const Jg = (e, t) => _e(e.innerType._def, t), ev = (e, t, n) => {
  switch (t) {
    case q.ZodString:
      return kc(e, n);
    case q.ZodNumber:
      return zg(e, n);
    case q.ZodObject:
      return qg(e, n);
    case q.ZodBigInt:
      return kg(e, n);
    case q.ZodBoolean:
      return Cg();
    case q.ZodDate:
      return _c(e, n);
    case q.ZodUndefined:
      return Kg(n);
    case q.ZodNull:
      return Bg(n);
    case q.ZodArray:
      return _g(e, n);
    case q.ZodUnion:
    case q.ZodDiscriminatedUnion:
      return jg(e, n);
    case q.ZodIntersection:
      return Rg(e, n);
    case q.ZodTuple:
      return Xg(e, n);
    case q.ZodRecord:
      return Cc(e, n);
    case q.ZodLiteral:
      return Ig(e, n);
    case q.ZodEnum:
      return Ag(e);
    case q.ZodNativeEnum:
      return Mg(e);
    case q.ZodNullable:
      return $g(e, n);
    case q.ZodOptional:
      return Wg(e, n);
    case q.ZodMap:
      return Pg(e, n);
    case q.ZodSet:
      return Gg(e, n);
    case q.ZodLazy:
      return () => e.getter()._def;
    case q.ZodPromise:
      return Hg(e, n);
    case q.ZodNaN:
    case q.ZodNever:
      return Vg(n);
    case q.ZodEffects:
      return Tg(e, n);
    case q.ZodAny:
      return lt(n);
    case q.ZodUnknown:
      return Yg(n);
    case q.ZodDefault:
      return Fg(e, n);
    case q.ZodBranded:
      return Sc(e, n);
    case q.ZodReadonly:
      return Jg(e, n);
    case q.ZodCatch:
      return Ng(e, n);
    case q.ZodPipeline:
      return Qg(e, n);
    case q.ZodFunction:
    case q.ZodVoid:
    case q.ZodSymbol:
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
    if (o !== yg)
      return o;
  }
  if (r && !n) {
    const o = tv(r, t);
    if (o !== void 0)
      return o;
  }
  const s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  const a = ev(e, e.typeName, t), i = typeof a == "function" ? _e(a(), t) : a;
  if (i && nv(e, t, i), t.postProcess) {
    const o = t.postProcess(i, e, t);
    return s.jsonSchema = i, o;
  }
  return s.jsonSchema = i, i;
}
const tv = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: wc(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), lt(t)) : t.$refStrategy === "seen" ? lt(t) : void 0;
  }
}, nv = (e, t, n) => (e.description && (n.description = e.description, t.markdownDescription && (n.markdownDescription = e.description)), n), zi = (e, t) => {
  const n = Sg(t);
  let r = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((o, [l, u]) => ({
    ...o,
    [l]: _e(u._def, {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, l]
    }, !0) ?? lt(n)
  }), {}) : void 0;
  const s = typeof t == "string" ? t : t?.name, a = _e(
    e._def,
    n,
    !1
  ) ?? lt(n);
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
function ns() {
  const [e, t] = J(!1), [n, r] = J(!1), s = U((g) => {
    t(g.isSubmitting), r(g.hasErrors);
  }), a = U(null), i = U({
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
  }, []), u = O(() => a.current ? a.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), d = O(() => a.current ? a.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), f = O(
    (g, v, p) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValue(g, v, p);
    },
    []
  ), m = O(
    (g, v) => {
      if (!a.current) {
        console.warn(
          "useF0Form: formRef is not attached to an F0Form component"
        );
        return;
      }
      a.current.setValues(g, v);
    },
    []
  ), h = O(async (g) => a.current ? a.current.trigger(g) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), x = O(() => a.current ? a.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), w = O(() => a.current ? a.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
  return {
    formRef: i.current,
    submit: o,
    reset: l,
    isDirty: u,
    getValues: d,
    setValue: f,
    setValues: m,
    trigger: h,
    getErrors: x,
    getFieldNames: w,
    isSubmitting: e,
    hasErrors: n
  };
}
const Nc = Ft(null);
function rv() {
  const e = et(Nc);
  if (!e)
    throw new Error("useF0Wizard must be used within a F0Wizard");
  return e;
}
function sv({ children: e, ...t }) {
  return /* @__PURE__ */ c(Nc.Provider, { value: t, children: e });
}
const av = Jt({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function iv(e, t, n) {
  return e === t ? "active" : n ? "completed" : "upcoming";
}
function ov({ state: e, index: t }) {
  return e === "completed" ? /* @__PURE__ */ c("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ c(jn, { className: "h-3 w-3" }) }) : /* @__PURE__ */ c(
    pu,
    {
      value: t + 1,
      type: e === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function lv() {
  const { steps: e, currentStep: t, goToStep: n, allowStepSkipping: r } = rv();
  return /* @__PURE__ */ c("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: e.map((s, a) => {
    const i = a < t || s.isCompleted?.() === !0, o = iv(a, t, i), l = e[t]?.hasErrors?.() === !0, u = a > t && e.slice(t, a).some((h) => h.hasErrors?.() === !0);
    let d = a !== t && !l && !u && e.slice(0, a).every((h) => h.isCompleted?.() !== !1);
    return d && !r && a > t + 1 && (d = !1), /* @__PURE__ */ A(
      "button",
      {
        type: "button",
        onClick: () => {
          d && n(a);
        },
        onKeyDown: (h) => {
          (h.key === "Enter" || h.key === " ") && d && (h.preventDefault(), n(a));
        },
        disabled: !d && a !== t,
        "aria-current": a === t ? "step" : void 0,
        className: Q(
          Pr(),
          "flex cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left",
          o === "active" && "bg-f1-background-selected",
          d && "hover:bg-f1-background-secondary-hover",
          !d && a !== t && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ c(ov, { state: o, index: a }),
          /* @__PURE__ */ c("span", { className: av({ state: o }), children: s.title })
        ]
      },
      a
    );
  }) });
}
function cv({
  steps: e,
  defaultStepIndex: t = 0,
  onSubmit: n,
  onStepChanged: r,
  allowStepSkipping: s = !1,
  autoCloseOnLastStepSubmit: a = !1,
  onClose: i
}) {
  const [o, l] = J(t), [u, d] = J(!1), f = U(e);
  f.current = e;
  const m = O(
    (g) => {
      l(g), r?.(g);
    },
    [r]
  ), h = O(
    async (g) => {
      if (!(g < 0 || g >= f.current.length || f.current[o]?.hasErrors?.() === !0 || !s && g > o + 1 || g > o && f.current.slice(o, g).some((y) => y.hasErrors?.() === !0) || !f.current.slice(0, g).every((p) => p.isCompleted?.() !== !1))) {
        if (g > o) {
          d(!0);
          try {
            for (let p = o; p < g; p++) {
              const y = f.current[p];
              y?.onNext && await y.onNext();
            }
            m(g);
          } catch {
          } finally {
            d(!1);
          }
          return;
        }
        m(g);
      }
    },
    [m, o, s]
  ), x = O(async () => {
    const g = f.current[o];
    if (g) {
      d(!0);
      try {
        g.onNext && await g.onNext(), o === f.current.length - 1 ? (n && await n(), a && i?.()) : m(o + 1);
      } catch {
      } finally {
        d(!1);
      }
    }
  }, [o, n, m, a, i]), w = O(() => {
    o > 0 && m(o - 1);
  }, [o, m]);
  return {
    currentStep: o,
    loading: u,
    goToStep: h,
    goNext: x,
    goPrevious: w
  };
}
const uv = () => {
}, Oa = ({
  steps: e,
  children: t,
  isOpen: n,
  onClose: r = uv,
  title: s,
  width: a = "xl",
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  submitLabel: u,
  onSubmit: d,
  onStepChanged: f,
  allowStepSkipping: m = !1,
  autoCloseOnLastStepSubmit: h = !1,
  autoSkipCompletedSteps: x = !1
}) => {
  const w = B(() => {
    if (i !== void 0) return i;
    if (!x) return 0;
    const L = e.findIndex(
      (E) => E.isCompleted?.() !== !0
    );
    return L === -1 ? e.length - 1 : L;
  }, [i, x, e]), g = cv({
    steps: e,
    defaultStepIndex: w,
    onSubmit: d,
    onStepChanged: f,
    allowStepSkipping: m,
    autoCloseOnLastStepSubmit: h,
    onClose: r
  }), v = Fe(), p = e[g.currentStep], y = g.currentStep === 0, k = g.currentStep === e.length - 1, _ = k ? p?.nextLabel ?? u ?? v.wizard.submit : p?.nextLabel ?? o ?? v.wizard.next, S = p?.previousLabel ?? l ?? v.wizard.previous, N = B(
    () => ({
      label: _,
      icon: k ? void 0 : Fs,
      onClick: () => {
        g.goNext();
      },
      disabled: p?.isCompleted?.() === !1 || p?.hasErrors?.() === !0,
      loading: g.loading
    }),
    [_, k, g, p]
  ), T = B(
    () => y ? void 0 : {
      label: S,
      icon: Co,
      onClick: g.goPrevious,
      disabled: g.loading
    },
    [y, S, g]
  );
  return /* @__PURE__ */ c(
    Uu,
    {
      isOpen: n,
      onClose: r,
      width: a,
      title: s,
      primaryAction: N,
      secondaryAction: T,
      disableContentPadding: !0,
      children: /* @__PURE__ */ c(
        sv,
        {
          currentStep: g.currentStep,
          totalSteps: e.length,
          loading: g.loading,
          goToStep: g.goToStep,
          goNext: g.goNext,
          goPrevious: g.goPrevious,
          steps: e,
          allowStepSkipping: m,
          children: /* @__PURE__ */ A("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ c("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ c(lv, {}) }),
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
Oa.displayName = "F0Wizard";
function Dc(e) {
  const n = tn(e).shape, r = Object.entries(n);
  return r.length === 0 ? !1 : r.every(([, s]) => nn(s)?.disabled === !0);
}
function dv(e, t) {
  if (t) return Object.keys(t);
  const r = tn(e).shape, s = /* @__PURE__ */ new Set();
  for (const a of Object.values(r)) {
    const i = nn(a);
    i?.section && s.add(i.section);
  }
  return Array.from(s);
}
function xs(e, t) {
  const n = e.shape, r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = nn(a);
    i?.section && t.includes(i.section) && (r[s] = a);
  }
  return Fa(r);
}
function Fc(e, t, n) {
  const r = t ?? {};
  if (n) return n({ data: r });
  const a = tn(e).shape;
  return Object.entries(a).every(([i, o]) => {
    if (o.isOptional()) return !0;
    const l = r[i];
    return l != null && l !== "";
  });
}
const fv = 3e3;
function Tc() {
  const { forms: e } = Fe(), [t, n] = J("idle"), [r, s] = J(), a = U(null);
  ae(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const i = O((u) => {
    a.current && (clearTimeout(a.current), a.current = null), s(u), n("success"), a.current = setTimeout(() => {
      n("idle"), s(void 0), a.current = null;
    }, fv);
  }, []), o = t === "success" ? r ?? e.actionBar.saved : void 0, l = B(
    () => /* @__PURE__ */ c(
      Ts,
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
function Ac(e, t, n, r, s, a, i) {
  return (n ?? e.map((l) => ({
    title: t?.[l]?.title ?? l,
    sectionIds: [l]
  }))).map((l, u) => {
    const d = r(l.sectionIds), f = i?.(u) ?? !1;
    return {
      title: l.title,
      nextLabel: l.nextLabel,
      previousLabel: l.previousLabel,
      isCompleted: d || f ? () => !0 : void 0,
      hasErrors: a ? () => a(u) : void 0,
      onNext: s(u)
    };
  });
}
function Rn(e, t, n) {
  if (n)
    return n[e]?.sectionIds ?? [];
  const r = t[e];
  return r ? [r] : [];
}
function hv({
  formDefinition: e,
  steps: t,
  isOpen: n,
  onClose: r,
  title: s,
  width: a,
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  onStepChanged: u,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: m,
  autoSkipCompletedSteps: h = !1,
  renderCustomField: x
}) {
  const {
    name: w,
    schema: g,
    sections: v,
    defaultValues: p,
    onSubmit: y,
    submitConfig: k,
    errorTriggerMode: _ = "on-blur"
  } = e, S = k?.label, N = B(() => Object.keys(g), [g]), T = B(() => t ? t.some(
    (X) => X.sectionIds.length > 1
  ) ? (process.env.NODE_ENV !== "production" && console.error(
    "[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."
  ), t.flatMap(
    (X) => X.sectionIds.map((ce) => ({
      title: v?.[ce]?.title ?? X.title,
      sectionIds: [ce],
      nextLabel: X.nextLabel,
      previousLabel: X.previousLabel
    }))
  )) : t : void 0, [t, v]), L = U({}), E = U(i ?? 0), I = B(
    () => Object.fromEntries(N.map((ie) => [ie, null])),
    [N]
  ), [C, R] = J({}), j = U(C);
  j.current = C;
  const W = O(
    (ie) => ie.every((X) => {
      const ce = g[X];
      return ce ? Dc(ce) : !1;
    }),
    [g]
  ), oe = O(
    (ie) => async () => {
      const X = Rn(ie, N, T);
      for (const ce of X) {
        const Ne = I[ce];
        Ne && await Ne.submit();
      }
    },
    [N, T, I]
  ), G = O(
    (ie) => Rn(ie, N, T).some((ce) => j.current[ce] === !0),
    [N, T]
  ), le = B(
    () => T ?? N.map((ie) => ({
      title: v?.[ie]?.title ?? ie,
      sectionIds: [ie]
    })),
    [T, N, v]
  ), ee = O(
    (ie) => {
      if (!h) return !1;
      const X = le[ie];
      return X ? X.sectionIds.every((ce) => {
        const Ne = g[ce];
        if (!Ne) return !1;
        const Te = p?.[ce] ?? L.current[ce];
        return Fc(Ne, Te, X.isCompleted);
      }) : !1;
    },
    [h, le, g, p]
  ), me = B(() => {
    if (i !== void 0) return i;
    if (!h) return;
    const ie = le.findIndex(
      (X, ce) => !ee(ce)
    );
    return ie === -1 ? le.length - 1 : ie;
  }, [i, h, le, ee]), Y = B(
    () => Ac(
      N,
      v,
      T,
      W,
      oe,
      G,
      h ? ee : void 0
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      N,
      v,
      T,
      W,
      oe,
      G,
      C,
      h,
      ee
    ]
  ), z = U(null), { showSuccess: $, ActionBar: fe } = Tc(), ke = O(
    (ie) => async (X) => {
      L.current[ie] = X;
      const ce = await y({
        sectionId: ie,
        data: X,
        fullData: { ...L.current }
      });
      return z.current = ce, ce.success && ce.message && $(ce.message), ce;
    },
    [y, $]
  ), se = O(() => {
    if (z.current?.success) {
      if (m) {
        const X = m({
          fullData: { ...L.current }
        });
        window.location.href = X;
        return;
      }
      f && r?.();
    }
  }, [f, m, r]), pe = O(() => {
    const ie = Rn(
      E.current,
      N,
      T
    );
    for (const X of ie) {
      const ce = I[X];
      ce && (L.current[X] = ce.getValues());
    }
  }, [N, T, I]), be = O(
    (ie) => {
      pe(), E.current = ie, u?.(ie);
    },
    [pe, u]
  );
  return /* @__PURE__ */ c(
    Oa,
    {
      steps: Y,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: me,
      nextLabel: o,
      previousLabel: l,
      submitLabel: S,
      onSubmit: se,
      onStepChanged: be,
      allowStepSkipping: d,
      children: ({ currentStep: ie }) => {
        const X = Rn(
          ie,
          N,
          T
        );
        return /* @__PURE__ */ A(mt, { children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 pb-5", children: X.map((ce) => {
            const Ne = g[ce];
            if (!Ne) return null;
            const Te = v?.[ce], Le = L.current[ce], Ge = p?.[ce];
            return /* @__PURE__ */ c(
              mv,
              {
                sectionId: ce,
                formName: w,
                schema: Ne,
                sectionConfig: Te,
                defaultValues: Le ?? Ge,
                onSubmit: ke(ce),
                submitConfig: k,
                errorTriggerMode: _,
                sectionForms: I,
                onErrorStateChange: (ct) => {
                  R((b) => b[ce] === ct ? b : { ...b, [ce]: ct });
                },
                renderCustomField: x,
                isLoading: e.isLoading
              },
              ce
            );
          }) }),
          fe
        ] });
      }
    }
  );
}
function mv({
  sectionId: e,
  formName: t,
  schema: n,
  sectionConfig: r,
  defaultValues: s,
  onSubmit: a,
  submitConfig: i,
  errorTriggerMode: o,
  sectionForms: l,
  onErrorStateChange: u,
  renderCustomField: d,
  isLoading: f
}) {
  const m = ns();
  ae(() => (l[e] = m, () => {
    l[e] = null;
  }), [l, e, m]);
  const h = U(u);
  return h.current = u, ae(() => {
    h.current(m.hasErrors);
  }, [m.hasErrors]), /* @__PURE__ */ c(
    yc,
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
      formRef: m.formRef,
      renderCustomField: d,
      isLoading: f
    }
  );
}
function pv({
  formDefinition: e,
  steps: t,
  isOpen: n,
  onClose: r,
  title: s,
  width: a,
  defaultStepIndex: i,
  nextLabel: o,
  previousLabel: l,
  onStepChanged: u,
  allowStepSkipping: d,
  autoCloseOnLastStepSubmit: f,
  linkAfterLastStepSubmit: m,
  autoSkipCompletedSteps: h = !1,
  renderCustomField: x
}) {
  const {
    name: w,
    schema: g,
    sections: v,
    defaultValues: p,
    onSubmit: y,
    submitConfig: k,
    errorTriggerMode: _ = "on-blur"
  } = e, S = k?.label, N = B(() => tn(g), [g]), T = B(
    () => dv(g, v),
    [g, v]
  ), L = O(
    (se) => {
      const pe = xs(N, se);
      return Dc(pe);
    },
    [N]
  ), E = ns(), I = U(
    p ? { ...p } : {}
  ), C = U(i ?? 0), R = O(
    (se) => async () => {
      await E.submit();
    },
    [E]
  ), j = O(
    (se) => E.hasErrors,
    [E.hasErrors]
  ), W = B(
    () => t ?? T.map((se) => ({
      title: v?.[se]?.title ?? se,
      sectionIds: [se]
    })),
    [t, T, v]
  ), oe = O(
    (se) => {
      if (!h) return !1;
      const pe = W[se];
      if (!pe) return !1;
      const be = xs(
        N,
        pe.sectionIds
      );
      return Fc(be, p, pe.isCompleted);
    },
    [h, W, N, p]
  ), G = B(() => {
    if (i !== void 0) return i;
    if (!h) return;
    const se = W.findIndex(
      (pe, be) => !oe(be)
    );
    return se === -1 ? W.length - 1 : se;
  }, [i, h, W, oe]), le = B(
    () => Ac(
      T,
      v,
      t,
      L,
      R,
      j,
      h ? oe : void 0
    ),
    [
      T,
      v,
      t,
      L,
      R,
      j,
      h,
      oe
    ]
  ), ee = U(null), me = U(null), { showSuccess: Y, ActionBar: z } = Tc(), $ = O(
    async (se) => {
      Object.assign(I.current, se);
      const pe = { ...I.current };
      me.current = pe;
      const be = await y({ data: pe });
      return ee.current = be, be;
    },
    [y]
  ), fe = O(() => {
    const se = ee.current;
    if (se?.success) {
      if (Y(se.message), m) {
        const pe = m({
          fullData: me.current
        });
        window.location.href = pe;
        return;
      }
      f && r?.();
    }
  }, [f, m, r, Y]), ke = O(
    (se) => {
      const pe = E.getValues();
      Object.assign(I.current, pe), C.current = se, u?.(se);
    },
    [E, u]
  );
  return /* @__PURE__ */ c(
    Oa,
    {
      steps: le,
      isOpen: n,
      onClose: r,
      title: s,
      width: a,
      defaultStepIndex: G,
      nextLabel: o,
      previousLabel: l,
      submitLabel: S,
      onSubmit: fe,
      onStepChanged: ke,
      allowStepSkipping: d,
      children: ({ currentStep: se }) => {
        const pe = Rn(
          se,
          T,
          t
        ), be = xs(
          N,
          pe
        ), ie = pe.reduce((X, ce) => (v?.[ce] && (X[ce] = v[ce]), X), {});
        return /* @__PURE__ */ A(mt, { children: [
          /* @__PURE__ */ c("div", { className: "pb-5", children: /* @__PURE__ */ c(
            rs,
            {
              name: `${w}-step-${se}`,
              schema: be,
              sections: ie,
              defaultValues: I.current,
              onSubmit: $,
              submitConfig: { hideSubmitButton: !0, hideActionBar: !0 },
              errorTriggerMode: _,
              formRef: E.formRef,
              renderCustomField: x,
              isLoading: e.isLoading
            },
            se
          ) }),
          z
        ] });
      }
    }
  );
}
function Ec(e) {
  return e.formDefinition._brand === "per-section" ? /* @__PURE__ */ c(
    hv,
    {
      ...e
    }
  ) : /* @__PURE__ */ c(
    pv,
    {
      ...e
    }
  );
}
Ec.displayName = "F0WizardForm";
function gv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
function vv(e, t) {
  const n = typeof e == "function", [r, s] = J(
    n ? void 0 : e
  ), [a, i] = J(n), o = U(e);
  return o.current = e, ae(() => {
    if (typeof o.current != "function") return;
    const l = new AbortController();
    i(!0);
    const u = o.current;
    return u(t ? {} : l.signal).then((f) => {
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
function Rc(e) {
  const {
    name: t,
    schema: n,
    sections: r,
    defaultValues: s,
    onSubmit: a,
    submitConfig: i,
    errorTriggerMode: o,
    defaultValuesParamsSchema: l
  } = e, u = typeof s == "function" && l ? s : void 0, d = !!l, { resolved: f, isLoading: m } = vv(
    s,
    d
  );
  return B(() => {
    const h = gv(n) ? "single" : "per-section";
    return {
      name: t,
      schema: n,
      sections: r,
      defaultValues: f,
      onSubmit: a,
      submitConfig: i,
      errorTriggerMode: o,
      isLoading: m,
      defaultValuesParamsSchema: l,
      defaultValuesFn: u,
      _brand: h
    };
  }, [
    t,
    n,
    r,
    f,
    a,
    i,
    o,
    m,
    l,
    u
  ]);
}
const bv = Ie(Ec), yv = rs;
function xv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const { formRef: r, submit: s, isSubmitting: a, hasErrors: i } = ns(), o = Rc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    submitConfig: { type: "default", hideSubmitButton: !0 },
    onSubmit: async ({ data: l }) => (await e.onSubmit?.(l), n(), { success: !0 })
  });
  return /* @__PURE__ */ c(
    No,
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
      children: /* @__PURE__ */ c(yv, { formDefinition: o, formRef: r })
    }
  );
}
function wv({
  definition: e,
  initialValues: t,
  onClose: n
}) {
  const r = Rc({
    name: e.name,
    schema: e.schema,
    defaultValues: t,
    sections: e.sections,
    onSubmit: async ({ data: s }) => (await e.onSubmit?.(s), { success: !0 })
  });
  return /* @__PURE__ */ c(
    bv,
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
function Sv({
  presentedForm: e,
  onClose: t
}) {
  const { mode: n, definition: r, initialValues: s } = e, a = B(
    () => `${e.name}-${JSON.stringify(s)}`,
    [e.name, s]
  );
  return n === "wizard" ? /* @__PURE__ */ c(
    wv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  ) : /* @__PURE__ */ c(
    xv,
    {
      definition: r,
      initialValues: s,
      onClose: t
    },
    a
  );
}
function Uy(e) {
  return e;
}
function ws(e, t = {}) {
  return typeof e == "function" ? e(t) : e ?? {};
}
function qi(e, t = {}, n) {
  let r = { ...t };
  const s = { ...t }, a = /* @__PURE__ */ new Set();
  return { ref: {
    current: {
      submit: async () => {
        const l = e.safeParse(r);
        if (!l.success)
          throw new Error(l.error.issues.map((u) => u.message).join(", "));
        await n?.(l.data);
      },
      reset: () => {
        r = { ...s }, a.clear();
      },
      isDirty: () => JSON.stringify(r) !== JSON.stringify(s),
      getValues: () => ({ ...r }),
      setValue: (l, u, d) => {
        r = { ...r, [l]: u }, a.add(l);
      },
      setValues: (l, u) => {
        r = { ...r, ...l };
        for (const d of Object.keys(l))
          a.add(d);
      },
      trigger: async (l) => {
        if (l) {
          const d = tt(e).shape?.[l];
          return d ? d.safeParse(r[l]).success : !0;
        }
        return e.safeParse(r).success;
      },
      getErrors: () => {
        const l = e.safeParse(r);
        if (l.success) return {};
        const u = {};
        for (const d of l.error.issues) {
          const f = d.path.join(".");
          f && !u[f] && (u[f] = d.message);
        }
        return u;
      },
      getFieldNames: () => {
        const l = tt(e);
        return Object.keys(l.shape ?? {});
      },
      _setStateCallback: () => {
      }
    }
  }, dirtyFields: a };
}
function _v(e) {
  const n = tt(e).shape;
  if (!n) return {};
  const r = {};
  for (const [s, a] of Object.entries(n)) {
    const i = nn(a), o = a.description;
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
function kv(e) {
  if (!e) return {};
  const t = {};
  for (const [n, r] of Object.entries(e))
    t[n] = {
      title: r.title,
      ...r.description && { description: r.description }
    };
  return t;
}
const Ic = Ft(null);
function Wy({
  children: e,
  availableFormDefinitions: t
}) {
  const n = U(/* @__PURE__ */ new Map()), r = U(""), [s, a] = J(
    null
  ), [i, o] = J([]), l = O(() => {
    queueMicrotask(() => {
      const v = Array.from(n.current.entries());
      if (v.length === 0) {
        r.current !== "[]" && (r.current = "[]", o([]));
        return;
      }
      const p = v.map(([k, _]) => {
        const S = _.ref.current;
        return S ? {
          formName: k,
          formSchema: zi(_.schema),
          fieldDescriptions: _v(_.schema),
          sectionDescriptions: kv(_.sections),
          formValues: S.getValues(),
          formErrors: S.getErrors(),
          isDirty: S.isDirty(),
          ..._.defaultValuesParamsSchema ? {
            defaultValuesParamsSchema: zi(
              _.defaultValuesParamsSchema
            )
          } : {}
        } : void 0;
      }).filter((k) => k !== null), y = JSON.stringify(p);
      y !== r.current && (r.current = y, o(p));
    });
  }, []), u = O(
    (v, p, y, k, _, S) => {
      n.current.set(v, {
        ref: p,
        schema: y,
        sections: k,
        defaultValuesParamsSchema: _,
        defaultValuesFn: S
      }), l();
    },
    [l]
  ), d = O(
    (v) => {
      if (n.current.get(v)?.virtual) return;
      n.current.delete(v);
      const y = t?.find((k) => k.name === v);
      if (y) {
        const { ref: k, dirtyFields: _ } = qi(
          y.schema,
          ws(y.defaultValues),
          y.onSubmit
        );
        n.current.set(v, {
          ref: k,
          schema: y.schema,
          sections: y.sections,
          virtual: !0,
          defaultValuesParamsSchema: y.defaultValuesParamsSchema,
          dirtyFields: _
        });
      }
      l();
    },
    [l, t]
  ), f = O((v) => n.current.get(v), []), m = O(() => Array.from(n.current.keys()), []), h = O(
    (v, p, y) => {
      const k = t?.find((L) => L.name === v);
      if (!k)
        return {
          success: !1,
          error: `Form "${v}" not found in availableFormDefinitions`
        };
      if (y && k.defaultValuesParamsSchema) {
        const L = k.defaultValuesParamsSchema.safeParse(y);
        if (!L.success)
          return {
            success: !1,
            error: `Invalid defaultValuesParams for form "${v}": ${L.error.issues.map((E) => E.message).join(", ")}`
          };
      }
      const _ = ws(
        k.defaultValues,
        y ?? {}
      ), S = n.current.get(v), N = S?.ref.current;
      let T;
      if (y && S?.dirtyFields) {
        const L = N?.getValues() ?? {}, E = {};
        for (const I of S.dirtyFields)
          I in L && (E[I] = L[I]);
        T = { ..._, ...E };
      } else
        T = N?.getValues() ?? _;
      return a({
        name: v,
        mode: p,
        definition: k,
        initialValues: T
      }), { success: !0 };
    },
    [t]
  ), x = O(() => {
    a(null);
  }, []), w = U(/* @__PURE__ */ new Set());
  ae(() => {
    const v = t ?? [], p = /* @__PURE__ */ new Set();
    for (const y of v) {
      p.add(y.name);
      const k = n.current.get(y.name);
      if (k && !k.virtual || k?.virtual) continue;
      const { ref: _, dirtyFields: S } = qi(
        y.schema,
        ws(y.defaultValues),
        y.onSubmit
      );
      n.current.set(y.name, {
        ref: _,
        schema: y.schema,
        sections: y.sections,
        virtual: !0,
        defaultValuesParamsSchema: y.defaultValuesParamsSchema,
        dirtyFields: S
      });
    }
    for (const y of w.current)
      p.has(y) || n.current.get(y)?.virtual && n.current.delete(y);
    return w.current = p, l(), () => {
      for (const y of p)
        n.current.get(y)?.virtual && n.current.delete(y);
      l();
    };
  }, [t, l]);
  const g = {
    register: u,
    unregister: d,
    get: f,
    getFormNames: m,
    rebuildDescriptions: l,
    formDescriptions: i,
    presentedForm: s,
    presentForm: h,
    dismissForm: x
  };
  return /* @__PURE__ */ A(Ic.Provider, { value: g, children: [
    e,
    s && /* @__PURE__ */ c(
      Sv,
      {
        presentedForm: s,
        onClose: x
      }
    )
  ] });
}
function Cv() {
  return et(Ic);
}
const Ss = "f0-form-error-navigate", _s = /* @__PURE__ */ new WeakMap();
function Hs(e, t) {
  if (typeof document > "u") return null;
  const n = on(e, void 0, t), r = document.getElementById(n);
  if (r) return r;
  const s = `forms.${e}.`, a = `.${t}`;
  return document.querySelector(
    `[id^="${s}"][id$="${a}"]`
  );
}
const Nv = (e) => {
  const t = _s.get(e);
  t && clearTimeout(t), e.classList.remove(Ss), e.offsetWidth, e.classList.add(Ss);
  const n = setTimeout(() => {
    e.classList.remove(Ss), _s.delete(e);
  }, 600);
  _s.set(e, n);
};
function Dv(e) {
  let t = e;
  for (; t && t.offsetParent === null && t.parentElement; )
    t = t.parentElement;
  return t ?? e;
}
function Zi(e, t, { highlight: n = !1 } = {}) {
  const r = Hs(e, t);
  r && Fv(r, { highlight: n });
}
function Fv(e, { highlight: t = !1 } = {}) {
  const n = Dv(e);
  n.scrollIntoView({ behavior: "smooth", block: "center" });
  const r = n.querySelector("input, textarea, select, button");
  r instanceof HTMLElement && r.focus(), t && Nv(n);
}
function Tv({
  formName: e,
  errors: t
}) {
  const n = Object.keys(t).filter((v) => v !== "root"), r = typeof document > "u" ? n : [...n].sort((v, p) => {
    const y = Hs(e, v), k = Hs(e, p);
    if (!y || !k) return 0;
    const _ = y.compareDocumentPosition(k);
    return _ & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : _ & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), s = r.length > 0, a = r.length, [i, o] = J(null), l = i ? Math.max(0, r.indexOf(i)) : 0, u = U(r);
  u.current = r;
  const d = U(i);
  d.current = i;
  const f = O(() => {
    const v = d.current;
    if (!v) return 0;
    const p = u.current.indexOf(v);
    return p === -1 ? 0 : p;
  }, []), m = U([]);
  ae(() => {
    const v = r, p = m.current, y = v.find(
      (k) => !p.includes(k)
    );
    y && (Zi(e, y, { highlight: !0 }), o(y)), m.current = v;
  }, [r, e]);
  const h = O(
    (v) => {
      const p = u.current;
      if (p.length === 0) return;
      const y = (v % p.length + p.length) % p.length, k = p[y];
      o(k), Zi(e, k, { highlight: !0 });
    },
    [e]
  ), x = O(() => {
    h(f() - 1);
  }, [f, h]), w = O(() => {
    h(f() + 1);
  }, [f, h]), g = O(() => {
    o(null), m.current = [];
  }, []);
  return {
    fieldErrors: r,
    hasErrors: s,
    errorCount: a,
    currentErrorIndex: l,
    goToPreviousError: x,
    goToNextError: w,
    resetErrorNavigation: g
  };
}
function Av(e) {
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
function Ev(e) {
  const t = [];
  let n = [];
  const r = () => {
    n.length > 0 && (t.push({ type: "switchGroup", fields: [...n] }), n = []);
  };
  return e.forEach((s, a) => {
    s.type === "field" && s.field.type === "switch" ? n.push(s.field) : (r(), s.type === "field" ? t.push({ type: "field", item: s }) : s.type === "row" ? t.push({ type: "row", item: s, index: a }) : s.type === "section" && t.push({ type: "section", item: s }));
  }), r(), t;
}
function Rv(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = e._def;
  return n?.typeName === "ZodObject" || n?.typeName === "ZodEffects";
}
const Iv = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit"
};
function Oc(e) {
  const {
    name: t,
    schema: n,
    sections: r,
    defaultValues: s,
    onSubmit: a,
    submitConfig: i,
    className: o,
    errorTriggerMode: l = "on-blur",
    styling: u,
    initialFiles: d,
    renderCustomField: f,
    isLoading: m
  } = e, h = u?.showSectionsSidepanel ?? !1, x = B(() => Object.keys(n), [n]), w = O(
    (k) => {
      const _ = on(t, k), S = document.getElementById(_);
      S && S.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [t]
  ), [g, v] = J(
    x[0]
  ), p = B(() => !r || !h ? [] : x.map((k) => ({
    id: k,
    label: r[k]?.title ?? k,
    onClick: () => {
      v(k), w(k);
    }
  })), [r, x, h, w]), y = /* @__PURE__ */ c("div", { className: Q("flex w-full flex-col", fc, o), children: x.map((k, _) => {
    const S = n[k], N = r?.[k], T = s?.[k], L = N?.submitConfig ?? i;
    return /* @__PURE__ */ c(
      "div",
      {
        id: on(t, k),
        className: Q("scroll-mt-4", _ !== 0 && dc),
        children: /* @__PURE__ */ c(
          yc,
          {
            formName: t,
            sectionId: k,
            schema: S,
            sectionConfig: N,
            defaultValues: T,
            onSubmit: (E) => a(k, E),
            submitConfig: L,
            errorTriggerMode: l,
            initialFiles: d,
            renderCustomField: f,
            isLoading: m
          }
        )
      },
      k
    );
  }) });
  return h && p.length > 0 ? /* @__PURE__ */ A("div", { className: "flex w-full gap-4", children: [
    /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
      ca,
      {
        items: p,
        activeItem: g,
        scrollable: !1
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
    /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: y })
  ] }) : y;
}
function Ov(e) {
  return "formDefinition" in e && e.formDefinition != null;
}
function rs(e) {
  const t = e;
  if (Ov(t))
    return /* @__PURE__ */ c(Lv, { ...t });
  const n = t;
  return Rv(n.schema) ? /* @__PURE__ */ c(
    Lc,
    {
      ...n
    }
  ) : /* @__PURE__ */ c(
    Oc,
    {
      ...n
    }
  );
}
function Lv(e) {
  const {
    formDefinition: t,
    className: n,
    styling: r,
    formRef: s,
    initialFiles: a,
    renderCustomField: i
  } = e;
  return t.isLoading ? t._brand === "single" ? /* @__PURE__ */ c(
    Ui,
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
    Wi,
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
    Ui,
    {
      formDefinition: t,
      className: n,
      styling: r,
      formRef: s,
      initialFiles: a,
      renderCustomField: i
    }
  ) : /* @__PURE__ */ c(
    Wi,
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
function Ui({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  isLoading: i
}) {
  const o = e, l = O(
    (u) => o.onSubmit({ data: u }),
    [o]
  );
  return /* @__PURE__ */ c(
    Lc,
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
function Wi({
  formDefinition: e,
  className: t,
  styling: n,
  formRef: r,
  initialFiles: s,
  renderCustomField: a,
  isLoading: i
}) {
  const o = e, l = U(
    o.defaultValues ? { ...o.defaultValues } : {}
  ), u = O(
    (d, f) => (l.current[d] = f, o.onSubmit({
      sectionId: d,
      data: f,
      fullData: { ...l.current }
    })),
    [o]
  );
  return /* @__PURE__ */ c(
    Oc,
    {
      name: o.name,
      schema: o.schema,
      sections: o.sections,
      defaultValues: o.defaultValues,
      onSubmit: u,
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
function Lc(e) {
  const t = Fe(), { forms: n } = t, {
    name: r,
    schema: s,
    sections: a,
    defaultValues: i,
    onSubmit: o,
    submitConfig: l,
    className: u,
    errorTriggerMode: d = "on-blur",
    styling: f,
    formRef: m,
    isLoading: h,
    defaultValuesParamsSchema: x,
    defaultValuesFn: w
  } = e, g = f?.showSectionsSidepanel ?? !1, v = l?.type === "action-bar", p = l?.label ?? "Submit", y = l?.icon === null ? void 0 : l?.icon ?? ko, k = l?.type !== "action-bar" && l?.hideSubmitButton, _ = l?.type !== "action-bar" && !!l?.hideActionBar, S = !v && !k, N = l?.type === "action-bar" && l?.discardable, T = v ? l?.discardConfig : void 0, L = T?.label ?? n.actionBar.discard, E = T?.icon === null ? void 0 : T?.icon ?? pn, I = v ? l?.actionBarLabel ?? n.actionBar.unsavedChanges : n.actionBar.unsavedChanges, C = l?.savingMessage ?? n.actionBar.saving, R = l?.successMessageDuration, j = vc(s, a), W = B(() => j.filter((ge) => ge.type === "section").map((ge) => ge.id), [j]), [oe, G] = J(
    W[0]
  ), le = O(
    (ge) => {
      G(ge);
      const Re = on(r, ge), Oe = document.getElementById(Re);
      Oe && Oe.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [r]
  ), ee = B(() => !a || !g ? [] : W.map((ge) => ({
    id: ge,
    label: a[ge]?.title ?? ge,
    onClick: () => le(ge)
  })), [a, W, g, le]), me = B(() => bc(t), [t]), Y = Iv[d], z = B(
    () => uc(s, { errorMap: me }),
    [s, me]
  ), $ = Gl({
    resolver: z,
    mode: Y,
    defaultValues: i
  }), fe = U(h);
  ae(() => {
    fe.current && !h && i && $.reset(i), fe.current = h;
  }, [h, i, $]);
  const ke = $.formState.errors.root, { isDirty: se, isSubmitting: pe, errors: be } = $.formState, [ie, X] = J("idle"), [ce, Ne] = J(), Te = U(null), {
    hasErrors: Le,
    errorCount: Ge,
    goToPreviousError: Xe,
    goToNextError: ct,
    resetErrorNavigation: b
  } = Tv({
    formName: r,
    errors: be
  }), D = (() => {
    if (!Le)
      return ie === "loading" ? C : ie === "success" ? ce ?? n.actionBar.saved : I;
  })(), F = async (ge) => {
    Te.current && (clearTimeout(Te.current), Te.current = null), bd(() => {
      X("loading");
    });
    const Re = { ...ge };
    for (const Ke of Object.keys(Re))
      Re[Ke] === null && (Re[Ke] = void 0);
    const Oe = await o(Re);
    Oe.success ? ($.reset(ge), b(), Ne(Oe.message), X("success"), Te.current = setTimeout(() => {
      X("idle"), Ne(void 0), Te.current = null;
    }, R ?? 2e3)) : (X("idle"), Oe.errors && Object.entries(Oe.errors).forEach(([Ke, Tt]) => {
      $.setError(Ke, { message: Tt });
    }), Oe.rootMessage && $.setError("root", { message: Oe.rootMessage }));
  };
  ae(() => () => {
    Te.current && clearTimeout(Te.current);
  }, []);
  const Z = () => {
    $.reset(), b(), X("idle"), Ne(void 0), Te.current && (clearTimeout(Te.current), Te.current = null);
  }, M = U(null), P = U(F);
  P.current = F;
  const ne = O(
    (ge) => ({
      submit: () => new Promise((Re, Oe) => {
        $.handleSubmit(
          async (Ke) => {
            await P.current(Ke), Re();
          },
          () => Oe(new Error("Form validation failed"))
        )();
      }),
      reset: () => {
        $.reset(), b();
      },
      isDirty: () => $.formState.isDirty,
      getValues: () => $.getValues(),
      setValue: (Re, Oe, Ke) => {
        $.setValue(
          Re,
          Oe,
          {
            shouldValidate: Ke?.shouldValidate ?? !0,
            shouldDirty: Ke?.shouldDirty ?? !0
          }
        );
      },
      setValues: (Re, Oe) => {
        for (const [Ke, Tt] of Object.entries(Re))
          $.setValue(Ke, Tt, {
            shouldValidate: !1,
            shouldDirty: Oe?.shouldDirty ?? !0
          });
        Oe?.shouldValidate !== !1 && $.trigger();
      },
      trigger: async (Re) => Re ? $.trigger(Re) : $.trigger(),
      getErrors: () => Av($.formState.errors),
      getFieldNames: () => Object.keys($.getValues()),
      _setStateCallback: ge?.stateCallback ? (Re) => {
        M.current = Re;
      } : () => {
      }
    }),
    [$, b]
  );
  ae(() => (m && (m.current = ne({ stateCallback: !0 })), () => {
    m && (m.current = null);
  }), [m, ne]), ae(() => {
    M.current && M.current({
      isSubmitting: pe,
      hasErrors: Le
    });
  }, [pe, Le]);
  const de = Cv(), Ee = U(null), Se = m ?? Ee;
  ae(() => {
    if (de)
      return m || (Ee.current = ne()), de.register(
        r,
        Se,
        s,
        a,
        x,
        w
      ), () => {
        de.unregister(r);
      };
  }, [
    de,
    r,
    s,
    a,
    m,
    Se,
    ne,
    x
  ]);
  const We = Ev(j), Lt = B(
    () => ({
      formName: r,
      initialFiles: e.initialFiles,
      renderCustomField: e.renderCustomField,
      isLoading: h
    }),
    [r, e.initialFiles, e.renderCustomField, h]
  ), Pt = /* @__PURE__ */ A(
    "form",
    {
      onSubmit: $.handleSubmit(F),
      className: Q("flex flex-col", fc, u),
      children: [
        We.map((ge, Re) => {
          const Oe = Re !== 0 && ge.type !== "section" ? "mt-4" : "";
          switch (ge.type) {
            case "switchGroup":
              return /* @__PURE__ */ c("div", { className: Oe, children: /* @__PURE__ */ c(Ia, { fields: ge.fields }) }, `switch-group-${Re}`);
            case "field":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Q(Oe, "empty:hidden"),
                  children: /* @__PURE__ */ c(ts, { field: ge.item.field })
                },
                ge.item.field.id
              );
            case "row":
              return /* @__PURE__ */ c("div", { className: Oe, children: /* @__PURE__ */ c(Ra, { row: ge.item }) }, `row-${ge.index}`);
            case "section":
              return /* @__PURE__ */ c(
                "div",
                {
                  className: Re !== 0 ? dc : "",
                  children: /* @__PURE__ */ c(bg, { section: ge.item })
                },
                ge.item.id
              );
            default:
              return null;
          }
        }),
        ke && /* @__PURE__ */ c("p", { className: "mt-4 text-base font-medium text-f1-foreground-critical", children: ke.message }),
        !v && S && /* @__PURE__ */ c("div", { className: "mt-4", children: /* @__PURE__ */ c(
          je,
          {
            type: "submit",
            label: p,
            icon: y,
            loading: pe,
            disabled: Le || h
          }
        ) })
      ]
    }
  );
  return /* @__PURE__ */ c(Jr.Provider, { value: Lt, children: /* @__PURE__ */ A(Yl, { ...$, children: [
    g && ee.length > 0 ? /* @__PURE__ */ A("div", { className: "flex w-full gap-4", children: [
      /* @__PURE__ */ c("div", { className: "sticky top-4 h-fit shrink-0 self-start pt-3", children: /* @__PURE__ */ c(
        ca,
        {
          items: ee,
          activeItem: oe,
          scrollable: !1
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "w-px bg-f1-border-secondary" }),
      /* @__PURE__ */ c("div", { className: "flex flex-1 justify-center", children: Pt })
    ] }) : Pt,
    !_ && /* @__PURE__ */ c(
      Qm,
      {
        isActionBar: v,
        isDirty: se,
        actionBarStatus: ie,
        hasErrors: Le,
        errorCount: Ge,
        resolvedActionBarLabel: D,
        submitLabel: p,
        submitIcon: y,
        discardableChanges: N,
        discardLabel: L,
        discardIcon: E,
        issuesOneLabel: n.actionBar.issues.one,
        issuesOtherLabel: n.actionBar.issues.other,
        onSubmit: $.handleSubmit(F),
        onDiscard: Z,
        goToPreviousError: Xe,
        goToNextError: ct
      }
    )
  ] }) });
}
function Qy(e) {
  const n = tn(e).shape, r = [];
  for (const [s, a] of Object.entries(n)) {
    const i = a, o = nn(i);
    if (!o) continue;
    const l = cc(i, o), u = es(i, l), d = {
      name: s,
      type: l,
      label: o.label,
      required: u
    };
    if (o.placeholder && (d.placeholder = o.placeholder), o.helpText && (d.helpText = o.helpText), o.section && (d.section = o.section), o.customFieldName && (d.customFieldName = o.customFieldName), l === "select") {
      if ("source" in o && o.source)
        d.optionsSource = "dynamic";
      else if ("options" in o && o.options) {
        const f = [];
        for (const m of o.options)
          "label" in m && "value" in m && f.push({ label: m.label, value: m.value });
        d.options = f;
      }
    }
    r.push(d);
  }
  return r;
}
const Hy = ot("F0Form", rs);
function it({
  field: e,
  value: t,
  onChange: n,
  onBlur: r,
  error: s,
  errorMessage: a,
  status: i,
  loading: o,
  required: l,
  disabled: u,
  hideLabel: d,
  initialFiles: f
}) {
  const m = Ks(), h = l ?? (e.validation ? es(e.validation) : !1), x = !d && e.type !== "checkbox" && e.type !== "custom", w = {
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
  }, v = s ? { type: "error", message: a } : i, p = u !== void 0 ? { ...e, disabled: u } : e, y = e.type === "file" ? f : void 0;
  return /* @__PURE__ */ A("div", { className: "space-y-2", id: m, children: [
    x && /* @__PURE__ */ A(
      "label",
      {
        htmlFor: e.id,
        className: "text-base font-medium leading-normal text-f1-foreground-secondary",
        children: [
          e.label,
          h && /* @__PURE__ */ c("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
        ]
      }
    ),
    Ws({
      field: p,
      formField: w,
      fieldState: g,
      isSubmitting: !1,
      isRequired: h,
      values: {},
      initialFiles: y,
      fieldStatus: v
    }),
    e.helpText && /* @__PURE__ */ c("p", { className: "text-base text-f1-foreground-secondary", children: e.helpText }),
    /* @__PURE__ */ c(ta, { status: v })
  ] });
}
it.displayName = "F0FormField";
const Pc = nt((e, t) => /* @__PURE__ */ c(ua, { ref: t, variant: "heading", ...e }));
Pc.displayName = "F0Heading";
const Gy = Ie(Pc), Pv = ({
  props: e
}) => {
  const { status: t, title: n, taskCount: r, completedCount: s, expanded: a, onExpandToggle: i } = e;
  return /* @__PURE__ */ A(mt, { children: [
    /* @__PURE__ */ c(co, { icon: Wu, size: "sm" }),
    /* @__PURE__ */ A("div", { className: "flex flex-1 items-center justify-between", children: [
      /* @__PURE__ */ c(
        Qu,
        {
          label: `${r} ${n}`,
          itemCount: void 0,
          open: a,
          onOpenChange: () => i(),
          showOpenChange: !0
        }
      ),
      s !== void 0 && /* @__PURE__ */ c(
        uo,
        {
          text: `${s}/${r}`,
          variant: t === "completed" ? "positive" : "warning"
        }
      )
    ] })
  ] });
}, Mv = ({
  primaryAction: e,
  secondaryActions: t,
  otherActions: n
}) => {
  const r = t && t.length > 0, s = n && n.length > 0;
  return /* @__PURE__ */ A("div", { className: "flex flex-col gap-2 xs:flex-row xs:items-center [&>*]:w-full [&>*]:xs:w-auto", children: [
    s && /* @__PURE__ */ c(Xn, { items: n, size: "md" }),
    t?.map((a, i) => /* @__PURE__ */ c(
      je,
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
      je,
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
  return /* @__PURE__ */ A("div", { className: "pl-9", children: [
    t && a && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(Vo, { items: t }) }),
    i && /* @__PURE__ */ c("div", { className: "mb-3", children: /* @__PURE__ */ c(
      Mv,
      {
        primaryAction: n,
        secondaryActions: r,
        otherActions: s
      }
    ) })
  ] });
}, Bv = ({ props: e }) => {
  const { status: t, icon: n = Hu, title: r, description: s, metadata: a } = e, i = a?.some(Boolean);
  return /* @__PURE__ */ A("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ A("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ c(co, { icon: n, size: "sm" }),
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
      s && /* @__PURE__ */ c(qo, { content: s, variant: "description" })
    ] }),
    /* @__PURE__ */ c("div", { className: "flex justify-end items-center gap-3 pl-9", children: t === "completed" && a && i && /* @__PURE__ */ c(Vo, { items: a }) })
  ] });
}, jv = ({ status: e }) => /* @__PURE__ */ c(
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
), $v = {
  completed: /* @__PURE__ */ c(ht, { icon: Mr, color: "positive", size: "lg" }),
  "in-progress": /* @__PURE__ */ c(ht, { icon: Xu, size: "lg", color: "warning" }),
  "not-started": /* @__PURE__ */ c(ht, { icon: Gu, size: "lg", color: "secondary" })
}, Mc = ({
  status: e,
  isLast: t,
  hideStatus: n,
  children: r
}) => /* @__PURE__ */ A("div", { className: "flex gap-4", children: [
  !n && /* @__PURE__ */ A("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "h-8 flex flex-col justify-center",
        "data-testid": `timeline-status-${e}`,
        children: $v[e]
      }
    ),
    !t && /* @__PURE__ */ c(jv, { status: e })
  ] }),
  /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col gap-3 pb-5", children: r })
] }), Vc = ({ props: e }) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1 } = e;
  return /* @__PURE__ */ A(Mc, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(Bv, { props: e }) }),
    t !== "completed" && /* @__PURE__ */ c(Vv, { props: e })
  ] });
}, zv = ({
  props: e
}) => {
  const { status: t, isLast: n = !1, hideStatus: r = !1, expanded: s, items: a } = e;
  return /* @__PURE__ */ A(Mc, { status: t, isLast: n, hideStatus: r, children: [
    /* @__PURE__ */ c("div", { className: "flex min-h-8 items-center gap-2", children: /* @__PURE__ */ c(Pv, { props: e }) }),
    s && /* @__PURE__ */ c("div", { className: "flex flex-col pl-4", children: a.map((i, o) => /* @__PURE__ */ c(
      Vc,
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
}, qv = (e) => "items" in e, Zv = (e) => qv(e) ? /* @__PURE__ */ c(zv, { props: e }) : /* @__PURE__ */ c(Vc, { props: e }), Xy = [
  "completed",
  "in-progress",
  "not-started"
], Ky = Ie(
  ot("F0TimelineRow", Zv)
), Yy = Ie(gu), Jy = Ie(
  ot(
    "F0GridStack",
    vo
  )
), ks = 16, Uv = Jt({
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
function Bc(e, t = 0) {
  return e.flatMap((n) => [
    { id: n.id, depth: Math.min(t, 3) },
    ...n.children ? Bc(n.children, t + 1) : []
  ]);
}
function Wv(e, t) {
  const n = e.length;
  if (n <= ks) return e;
  const r = n / (ks - 1), s = new Set(
    Array.from(
      { length: ks - 1 },
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
function Qv({
  items: e,
  activeItem: t,
  className: n,
  align: r = "left",
  variant: s = "dark"
}) {
  const a = B(
    () => Wv(Bc(e), t),
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
          className: Uv({
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
const Cs = "[role='menu']";
function Hv(e, t) {
  const n = U(null), r = O(() => {
    n.current?.(), n.current = null;
  }, []);
  return ae(() => r, [r]), { deferClose: O(() => {
    if (!document.querySelector(Cs)) return !1;
    r();
    const a = () => {
      o.disconnect(), document.removeEventListener("pointermove", l), n.current = null;
    }, i = () => {
      a(), t();
    }, o = new MutationObserver(() => {
      document.querySelector(Cs) || i();
    });
    o.observe(document.body, { childList: !0, subtree: !0 });
    const l = (u) => {
      const d = u.target;
      !d.closest(Cs) && !e.current?.contains(d) && i();
    };
    return document.addEventListener("pointermove", l), n.current = a, !0;
  }, [e, t, r]) };
}
const Gv = 300, Xv = 0, Kv = Jt({
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
function jc({
  title: e,
  items: t,
  className: n,
  activeItem: r,
  collapsible: s = !1,
  sortable: a,
  onReorder: i,
  showChildrenCounter: o = !1,
  barsAlign: l = "left",
  size: u = "md",
  variant: d = "light",
  portalContainer: f
}) {
  const [m, h] = J(!1), x = U(!1), w = U(null), { deferClose: g } = Hv(w, () => h(!1)), v = (y) => {
    !y && g() || (y && !m && (x.current = !0), h(y));
  }, p = O((y) => {
    w.current = y, !(!y || !x.current) && (x.current = !1, requestAnimationFrame(() => {
      y.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ A(
    Ku,
    {
      open: m,
      onOpenChange: v,
      openDelay: Xv,
      closeDelay: Gv,
      children: [
        /* @__PURE__ */ c(Yu, { asChild: !0, children: /* @__PURE__ */ c(
          "button",
          {
            className: Q(
              Pr(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              n
            ),
            "aria-label": e ?? "Menu",
            children: /* @__PURE__ */ c(
              Qv,
              {
                items: t,
                activeItem: r,
                align: l,
                variant: d
              }
            )
          }
        ) }),
        /* @__PURE__ */ c(
          Ju,
          {
            ref: p,
            side: l === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: f,
            className: Q(
              Kv({ size: u }),
              !e && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ c(
              ca,
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
const ex = Ie(
  ot(
    "F0TableOfContentPopover",
    jc
  )
), Yv = Vn.create(ed), Jv = () => {
  const e = Fe();
  return /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ c(
      Yv,
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
}, eb = po(Jv);
var tb = Kh();
const Qi = /* @__PURE__ */ vu(tb), $c = (e) => {
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
}, zc = (e) => {
  if (!e || e.length === 0) return null;
  const t = e.length, n = e.every((r) => /^\d+$/.test(r.label.trim()));
  return t === 5 && n ? "1-5" : t === 10 && n ? "1-10" : t === 5 && !n ? "emojis" : null;
}, Gs = (e) => {
  switch (e) {
    case "rating":
      return {
        value: 0,
        options: $c("1-5")
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
      return {
        options: []
      };
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
}, ar = (e) => `new-${e}-${Date.now()}`, Hi = [
  "text",
  "longText",
  "select",
  "multi-select",
  "dropdown-single",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], nb = (e) => {
  if (!e)
    return Hi[0];
  const t = Hi.find(
    (n) => e?.includes(n)
  );
  if (!t)
    throw new Error(
      `No default question type found for allowed question types: ${e.join(", ")}`
    );
  return t;
}, qc = Ft(void 0);
function Zc({
  elements: e,
  children: t,
  disabled: n,
  answering: r,
  disallowOptionalQuestions: s,
  onChange: a,
  allowedQuestionTypes: i,
  errors: o,
  onFieldBlur: l,
  useUpload: u
}) {
  const d = U(e);
  d.current = e;
  const f = U(a);
  f.current = a;
  const m = B(() => {
    const E = e[e.length - 1];
    if (E)
      return E.type === "section" ? E.section.id : E.question.id;
  }, [e]), h = O((E) => {
    const I = E.id, C = d.current.map((R) => {
      if (R.type === "question")
        return R.question.id === I ? {
          ...R,
          question: {
            ...R.question,
            ...E
          }
        } : R;
      if (R.type === "section") {
        const j = R.section.questions?.map(
          (W) => W.id === I ? {
            ...W,
            ...E
          } : W
        );
        return {
          ...R,
          section: {
            ...R.section,
            questions: j
          }
        };
      }
      return R;
    });
    f.current(C);
  }, []), x = O((E) => {
    const I = E.id, C = d.current.map((R) => R.type === "section" && R.section.id === I ? {
      ...R,
      section: {
        ...R.section,
        ...E
      }
    } : R);
    f.current(C);
  }, []), w = O(
    ({
      element: E,
      afterId: I
    }) => {
      const C = [...d.current];
      if (!I) {
        C.push(E), f.current(C);
        return;
      }
      ((j) => {
        C.forEach((W, oe) => {
          W.type === "section" && W.section.id === j && C.splice(oe + 1, 0, E), W.type === "question" && W.question.id === j && C.splice(oe + 1, 0, E);
        });
      })(I), E.type === "question" && C.length === d.current.length && C.forEach((j, W) => {
        if (j.type !== "section")
          return;
        const oe = [...j.section.questions ?? []];
        oe?.forEach((G, le) => {
          G.id === I && oe.splice(le + 1, 0, E.question);
        }), C.splice(W, 1, {
          ...j,
          section: {
            ...j.section,
            questions: oe
          }
        });
      }), f.current(C);
    },
    []
  ), g = O(
    ({ type: E, afterId: I }) => {
      const C = ar(
        E === "section" ? "section" : "question"
      ), R = nb(i), j = E === "section" ? {
        type: "section",
        section: {
          id: C,
          title: "",
          questions: [
            {
              id: ar("question"),
              title: "",
              description: "",
              type: R,
              required: !0,
              ...Gs(
                R
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: C,
          title: "",
          description: "",
          type: E,
          required: !0,
          ...Gs(E)
        }
      };
      w({ element: j, afterId: I });
    },
    [w, i]
  ), v = O(
    ({ elementId: E }) => {
      const C = Qi(
        d.current.map(
          (j) => j.type === "section" ? [j, ...j.section.questions ?? []] : [j.question]
        )
      ).find(
        (j) => j.type === "section" ? j.section.id === E : j.id === E
      );
      let R;
      C && (R = C.type === "section" ? {
        ...C,
        section: {
          ...C.section,
          id: ar("section")
        }
      } : {
        type: "question",
        question: { ...C, id: ar("question") }
      }), R && w({ element: R, afterId: E });
    },
    [w]
  ), p = O((E) => Qi(
    d.current.map(
      (C) => C.type === "question" ? [C.question] : C.section.questions
    )
  ).find((C) => C?.id === E), []), y = O((E) => {
    let I = d.current.filter((C) => C.type === "section" ? C.section.id !== E : C.type === "question" ? C.question.id !== E : !0);
    I.length === d.current.length && (I = I.map((C) => C.type === "section" ? {
      ...C,
      section: {
        ...C.section,
        questions: C.section.questions?.filter(
          (R) => R.id !== E
        )
      }
    } : C)), f.current(I);
  }, []), k = O((E) => {
    const I = d.current.find((C) => C.type === "section" ? C.section.questions?.some(
      (R) => R.id === E
    ) : !1);
    return I?.type === "section" && I?.section.questions?.length === 1;
  }, []), _ = O((E) => {
    const I = d.current.find((C) => C.type === "section" ? C.section.questions?.some(
      (R) => R.id === E
    ) : !1);
    return I?.type === "section" ? I.section : void 0;
  }, []), S = U(!0), N = !e.length;
  ae(() => {
    if (S.current) {
      S.current = !1, N && !n && !r && g({
        type: "section"
      });
      return;
    }
  }, [N, g, n]);
  const T = O(
    (E) => E === "file" && !u ? !1 : !i || i.includes(E),
    [i, u]
  ), L = B(
    () => ({
      onQuestionChange: h,
      onSectionChange: x,
      onAddNewElement: g,
      onDuplicateElement: v,
      getIsSingleQuestionInSection: k,
      getSectionContainingQuestion: _,
      disabled: n,
      answering: r,
      getQuestionById: p,
      deleteElement: y,
      lastElementId: m,
      disallowOptionalQuestions: s,
      isQuestionTypeAllowed: T,
      errors: o,
      onFieldBlur: l,
      useUpload: u
    }),
    [
      h,
      x,
      g,
      v,
      k,
      _,
      n,
      r,
      p,
      y,
      m,
      s,
      T,
      o,
      l,
      u
    ]
  );
  return /* @__PURE__ */ c(qc.Provider, { value: L, children: t });
}
function ze() {
  const e = et(qc);
  if (!e)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return e;
}
const Uc = Ft(void 0);
function La({ children: e }) {
  const [t, n] = J(!1), [r, s] = J(null);
  return /* @__PURE__ */ c(
    Uc.Provider,
    {
      value: { isDragging: t, setIsDragging: n, draggedItemId: r, setDraggedItemId: s },
      children: e
    }
  );
}
function kn() {
  const e = et(Uc);
  return e || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const Pa = () => {
  const { isQuestionTypeAllowed: e } = ze(), { t } = Fe();
  return [
    {
      label: t("surveyFormBuilder.questionTypes.rating"),
      icon: Do,
      questionType: "rating"
    },
    {
      label: t("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: Fo,
      questionType: "multi-select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.singleChoice"),
      icon: jn,
      questionType: "select"
    },
    {
      label: t("surveyFormBuilder.questionTypes.text"),
      icon: To,
      questionType: "text"
    },
    {
      label: t("surveyFormBuilder.questionTypes.longText"),
      icon: Ao,
      questionType: "longText"
    },
    {
      label: t("surveyFormBuilder.questionTypes.numeric"),
      icon: mr,
      questionType: "numeric"
    },
    {
      label: t("surveyFormBuilder.questionTypes.link"),
      icon: sa,
      questionType: "link"
    },
    {
      label: t("surveyFormBuilder.questionTypes.date"),
      icon: Eo,
      questionType: "date"
    },
    {
      label: t("surveyFormBuilder.questionTypes.dropdownSingle"),
      icon: na,
      questionType: "dropdown-single"
    },
    {
      label: t("surveyFormBuilder.questionTypes.file"),
      icon: ra,
      questionType: "file"
    },
    {
      label: t("surveyFormBuilder.questionTypes.checkbox"),
      icon: Mr,
      questionType: "checkbox"
    }
  ].filter(
    (s) => e(s.questionType)
  );
}, rb = {
  rating: Do,
  "multi-select": Fo,
  select: jn,
  text: To,
  longText: Ao,
  numeric: mr,
  link: sa,
  date: Eo,
  "dropdown-single": na,
  file: ra,
  checkbox: Mr
}, sb = () => {
  const { disabled: e, answering: t, onAddNewElement: n } = ze(), r = Pa(), { t: s } = Fe(), a = (l) => {
    n?.({
      type: l
    });
  }, i = () => {
    n?.({
      type: "section"
    });
  }, o = [
    {
      label: s("surveyFormBuilder.questionTypes.section"),
      icon: aa,
      onClick: i
    },
    {
      type: "separator"
    },
    ...r.map((l) => ({
      ...l,
      onClick: () => a(l.questionType)
    }))
  ];
  return e || t ? null : /* @__PURE__ */ c("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ c(
    Xn,
    {
      items: o,
      icon: ia,
      size: "md",
      align: "center"
    }
  ) });
}, ab = ({
  open: e,
  onConfirm: t,
  onCancel: n
}) => {
  const { t: r } = Fe();
  return /* @__PURE__ */ c(
    _d,
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
}, Lr = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function ib(e, t) {
  if (e !== "rating" || !t || t.type !== "rating")
    return null;
  const n = t.options;
  return !Array.isArray(n) || n.length === 0 || typeof n[0]?.value != "number" ? null : zc(n);
}
function ob(e, t, n) {
  return !(e === t || (e === "select" || e === "multi-select") && n && "options" in n && Array.isArray(n.options) && n.options.length > 0);
}
function Wc() {
  const {
    onQuestionChange: e,
    getQuestionById: t,
    deleteElement: n,
    onDuplicateElement: r,
    disallowOptionalQuestions: s
  } = ze(), a = Pa();
  return { getActionsForQuestion: O(
    (o, l, u) => {
      const d = t(o), f = ib(l, d);
      return {
        question: d,
        questionTypes: a,
        currentRatingType: f,
        disallowOptionalQuestions: s,
        canDelete: u,
        handleChangeRequired: (v) => {
          e?.({
            id: o,
            type: l,
            required: v
          });
        },
        handleSelectQuestionType: (v) => {
          const p = ob(
            v,
            l,
            d
          );
          e?.({
            id: o,
            type: v,
            ...p && {
              ...Gs(v)
            }
          });
        },
        handleSelectRatingType: (v) => {
          e?.({
            id: o,
            type: "rating",
            value: 0,
            options: $c(v)
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
function lb({
  questionId: e,
  questionType: t,
  canDelete: n = !0
}) {
  const { getActionsForQuestion: r } = Wc();
  return B(
    () => r(e, t, n),
    [r, e, t, n]
  );
}
const cb = ({
  label: e,
  icon: t,
  checked: n,
  onChange: r
}) => /* @__PURE__ */ c(
  gr,
  {
    className: "!pb-2.5 pr-4",
    onClick: (s) => {
      s.preventDefault(), r(!n);
    },
    children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(Wt, { icon: t, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: e }),
      /* @__PURE__ */ c(
        So,
        {
          title: e,
          checked: n,
          onCheckedChange: r,
          hideLabel: !0
        }
      )
    ] })
  }
), ub = ({
  label: e,
  value: t,
  questionTypes: n,
  currentRatingType: r,
  onSelectQuestionType: s,
  onSelectRatingType: a
}) => {
  const i = n.find(
    (o) => o.questionType === t
  )?.label;
  return /* @__PURE__ */ A(qa, { children: [
    /* @__PURE__ */ c(Za, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(Wt, { icon: Io, color: "default" }),
      /* @__PURE__ */ c("span", { className: "flex-1 text-base font-medium", children: e }),
      !!i && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: i })
    ] }) }),
    /* @__PURE__ */ c(Ua, { children: /* @__PURE__ */ c(Wa, { children: n.map((o) => {
      const l = o.questionType === "rating", u = t === o.questionType;
      return l ? /* @__PURE__ */ A(qa, { children: [
        /* @__PURE__ */ c(Za, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
          /* @__PURE__ */ c(Wt, { icon: o.icon, color: "default" }),
          /* @__PURE__ */ c("span", { className: "flex-1", children: o.label }),
          r && /* @__PURE__ */ c("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: Lr.find(
            (d) => d.value === r
          )?.label })
        ] }) }),
        /* @__PURE__ */ c(Ua, { children: /* @__PURE__ */ c(Wa, { children: Lr.map((d) => /* @__PURE__ */ c(
          gr,
          {
            onClick: () => a(d.value),
            children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
              /* @__PURE__ */ c("span", { className: "flex-1", children: d.label }),
              r === d.value && /* @__PURE__ */ c(Wt, { icon: jn, color: "default" })
            ] })
          },
          d.value
        )) }) })
      ] }, o.questionType) : /* @__PURE__ */ c(
        gr,
        {
          onClick: () => s(o.questionType),
          children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ c(Wt, { icon: o.icon, color: "default" }),
            /* @__PURE__ */ c("span", { className: "flex-1", children: o.label }),
            u && /* @__PURE__ */ c(Wt, { icon: jn, color: "default" })
          ] })
        },
        o.questionType
      );
    }) }) })
  ] });
}, Gi = ({
  label: e,
  icon: t,
  onClick: n,
  critical: r
}) => /* @__PURE__ */ c(
  gr,
  {
    onClick: n,
    className: Q(r ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ A("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ c(Wt, { icon: t }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: e })
    ] })
  }
);
function db({
  open: e,
  setOpen: t,
  questionId: n,
  questionType: r,
  canDeleteQuestion: s = !0
}) {
  const { t: a } = Fe(), {
    question: i,
    questionTypes: o,
    currentRatingType: l,
    disallowOptionalQuestions: u,
    handleChangeRequired: d,
    handleSelectQuestionType: f,
    handleSelectRatingType: m,
    handleDuplicate: h,
    handleDelete: x
  } = lb({
    questionId: n,
    questionType: r,
    canDelete: s
  });
  return /* @__PURE__ */ A(td, { open: e, onOpenChange: t, children: [
    /* @__PURE__ */ c(nd, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ c(
      je,
      {
        icon: fr,
        label: a("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ A(rd, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ c(sd, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: a("surveyFormBuilder.labels.questionOptions") }),
      !u && /* @__PURE__ */ c(as, { children: /* @__PURE__ */ c(
        cb,
        {
          label: a("surveyFormBuilder.labels.required"),
          icon: Ro,
          checked: !!i?.required,
          onChange: d
        }
      ) }),
      /* @__PURE__ */ c(as, { children: /* @__PURE__ */ c(
        ub,
        {
          label: a("surveyFormBuilder.labels.questionType"),
          value: r,
          questionTypes: o,
          currentRatingType: l,
          onSelectQuestionType: f,
          onSelectRatingType: m
        }
      ) }),
      /* @__PURE__ */ c(ad, {}),
      /* @__PURE__ */ A(as, { children: [
        /* @__PURE__ */ c(
          Gi,
          {
            label: a("surveyFormBuilder.actions.duplicateQuestion"),
            icon: pr,
            onClick: h
          }
        ),
        s && /* @__PURE__ */ c(
          Gi,
          {
            label: a("surveyFormBuilder.actions.deleteQuestion"),
            icon: pn,
            onClick: x,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
function ln(e) {
  const { answering: t, getSectionContainingQuestion: n } = ze(), r = n(e.id), s = e.locked || r?.locked;
  return t ? !1 : s || !0;
}
const Xi = {
  fieldSizing: "content"
}, Me = ({
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
    disabled: u,
    answering: d,
    getIsSingleQuestionInSection: f,
    getSectionContainingQuestion: m
  } = ze(), h = m(e), x = h?.locked || a, w = !!h, [g, v] = J(!1), [p, y] = J(!1), { isDragging: k } = kn(), { t: _ } = Fe(), S = (G) => {
    o?.({
      id: e,
      type: i,
      title: G.target.value
    });
  }, N = (G) => {
    o?.({
      id: e,
      type: i,
      description: G.target.value
    });
  }, T = (G) => {
    l?.({
      type: G,
      afterId: e
    });
  }, L = () => {
    l?.({
      type: "section",
      afterId: e
    });
  }, E = Pa(), I = [
    ...w ? [] : [
      {
        label: _("surveyFormBuilder.questionTypes.section"),
        icon: aa,
        onClick: L
      },
      {
        type: "separator"
      }
    ],
    ...E.map((G) => ({
      ...G,
      onClick: () => T(G.questionType)
    }))
  ], C = f(e), R = U(null), j = U(!C);
  ae(() => {
    j.current && R.current?.focus({ preventScroll: !0 });
  }, []);
  const W = u || x || d, oe = !d && W;
  return /* @__PURE__ */ A(
    "div",
    {
      id: `co-creation-question-${e}`,
      className: Q(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !k && !d && "hover:border-f1-border-hover",
        !d || n ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ A("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ A("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ c("div", { className: "relative w-full", children: d ? /* @__PURE__ */ A("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              t || _("surveyFormBuilder.labels.titlePlaceholder"),
              s && /* @__PURE__ */ c("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ A(mt, { children: [
              /* @__PURE__ */ c(
                "textarea",
                {
                  ref: R,
                  value: t,
                  "aria-label": _("surveyFormBuilder.labels.title"),
                  placeholder: _("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: S,
                  disabled: W,
                  className: Q(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    oe && "cursor-not-allowed"
                  ),
                  style: Xi
                }
              ),
              /* @__PURE__ */ A("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ c("span", { className: "opacity-0", children: t || _("surveyFormBuilder.labels.titlePlaceholder") }),
                s && /* @__PURE__ */ A(
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
            !u && !d && !x && /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "opacity-0 group-hover/question:opacity-100",
                  p && "opacity-100"
                ),
                children: /* @__PURE__ */ c(
                  db,
                  {
                    open: p,
                    setOpen: y,
                    questionId: e,
                    questionType: i,
                    canDeleteQuestion: !w || !C
                  }
                )
              }
            )
          ] }),
          d ? n ? /* @__PURE__ */ c("p", { className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary", children: n }) : null : /* @__PURE__ */ c(
            "textarea",
            {
              value: n,
              "aria-label": _("surveyFormBuilder.labels.description"),
              placeholder: _(
                "surveyFormBuilder.labels.questionDescriptionPlaceholder"
              ),
              onChange: N,
              disabled: W,
              className: Q(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                oe && "cursor-not-allowed"
              ),
              style: Xi
            }
          )
        ] }),
        r,
        d && /* @__PURE__ */ c(
          Xr,
          {
            className: "-mt-2",
            fallback: _(s ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !u && !d && !h?.locked && /* @__PURE__ */ c(
          "div",
          {
            className: Q(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              g && "opacity-100"
            ),
            children: /* @__PURE__ */ c(
              Xn,
              {
                items: I,
                icon: ia,
                size: "sm",
                open: g,
                onOpenChange: v,
                align: "center"
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
  const { onQuestionChange: r, answering: s, disabled: a } = ze(), i = ln(n), { t: o } = Fe();
  if (s)
    return /* @__PURE__ */ c(Me, { ...n, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
      Bn,
      {
        id: n.id,
        checked: e ?? !1,
        onCheckedChange: (u) => {
          r?.({
            ...n,
            type: "checkbox",
            label: t,
            value: u || null
          });
        },
        disabled: i,
        title: t
      }
    ) }) });
  const l = a || n.locked;
  return /* @__PURE__ */ c(Me, { ...n, children: /* @__PURE__ */ A("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ c(Bn, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
    /* @__PURE__ */ c(
      "textarea",
      {
        value: t,
        placeholder: o("surveyFormBuilder.checkboxQuestion.placeholder"),
        "aria-label": o("surveyFormBuilder.checkboxQuestion.placeholder"),
        onChange: (u) => {
          r?.({
            ...n,
            type: "checkbox",
            label: u.target.value
          });
        },
        disabled: !!l,
        className: Q(
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
  const { onQuestionChange: n } = ze(), r = ln(t), { t: s } = Fe(), a = {
    id: t.id,
    type: "date",
    label: s("surveyFormBuilder.answer.label"),
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Me, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    it,
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
}, Qc = 8, pb = ({
  options: e,
  showSearchBox: t,
  searchBoxPlaceholder: n,
  ...r
}) => {
  const { onQuestionChange: s, answering: a } = ze(), i = ln(r), { t: o } = Fe(), l = B(
    () => e.map((f) => ({ value: f.value, label: f.label })),
    [e]
  ), u = t ?? l.length > Qc, d = B(
    () => ({
      id: r.id,
      type: "select",
      label: o("surveyFormBuilder.answer.label"),
      placeholder: o("surveyFormBuilder.answer.dropdownPlaceholder"),
      options: l,
      clearable: !r.required,
      multiple: !1,
      showSearchBox: u,
      searchBoxPlaceholder: n
    }),
    [
      r.id,
      r.required,
      l,
      o,
      u,
      n
    ]
  );
  return /* @__PURE__ */ c(Me, { ...r, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: a ? /* @__PURE__ */ c(
    it,
    {
      field: d,
      value: r.value ?? "",
      onChange: (f) => {
        s?.({
          id: r.id,
          type: "dropdown-single",
          value: f
        });
      },
      disabled: i,
      hideLabel: !0
    }
  ) : /* @__PURE__ */ c(
    Vr,
    {
      type: "text",
      size: "md",
      value: o("surveyFormBuilder.answer.dropdownPlaceholder"),
      onChange: () => {
      },
      disabled: !0,
      label: o("surveyFormBuilder.answer.label"),
      hideLabel: !0
    }
  ) }) });
}, Hc = [
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
  const { onQuestionChange: a, useUpload: i } = ze(), o = ln(s), { t: l } = Fe(), u = t ?? i, d = {
    id: s.id,
    type: "file",
    label: l("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: n ?? Hc,
    maxSizeMB: r,
    useUpload: u ?? gb
  };
  return /* @__PURE__ */ c(Me, { ...s, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    it,
    {
      field: d,
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
  const { t: n } = Fe(), { onQuestionChange: r, answering: s } = ze(), a = ln(t), i = n("surveyFormBuilder.answer.linkPlaceholder"), o = {
    id: t.id,
    type: "text",
    inputType: "url",
    label: n("surveyFormBuilder.answer.label"),
    placeholder: i,
    clearable: !t.required
  };
  return /* @__PURE__ */ c(Me, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    it,
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
  const { t: n } = Fe(), { onQuestionChange: r, answering: s } = ze(), a = ln(t), i = (l) => {
    r?.({
      ...t,
      type: "numeric",
      value: l
    });
  }, o = n("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ c(Me, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: s ? /* @__PURE__ */ c(
    wo,
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
      icon: mr
    }
  ) : /* @__PURE__ */ c(
    Vr,
    {
      type: "text",
      size: "md",
      value: o,
      onChange: () => {
      },
      disabled: !0,
      label: n("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: mr
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
  const { value: i, label: o } = e, [l, u] = J(!1), d = () => {
    s || n(i);
  }, f = (m) => {
    r?.(i, m.native), u(!1);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: Q(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        t && "border-f1-border-selected bg-f1-background-selected-secondary",
        s ? "cursor-default" : "cursor-pointer"
      ),
      onClick: d,
      children: a ? /* @__PURE__ */ A(Ys, { open: l, onOpenChange: u, children: [
        /* @__PURE__ */ c(Js, { asChild: !0, children: /* @__PURE__ */ c(
          je,
          {
            emoji: o,
            label: i.toString(),
            variant: "ghost",
            hideLabel: !0
          }
        ) }),
        /* @__PURE__ */ c(
          ea,
          {
            side: "bottom",
            align: "center",
            className: "w-fit border-none bg-transparent p-2 shadow-none",
            onClick: (m) => {
              m.preventDefault(), m.stopPropagation();
            },
            children: /* @__PURE__ */ c(
              kd,
              {
                data: Cd,
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
  const { onQuestionChange: r, disabled: s, answering: a } = ze(), o = zc(e) === "emojis", l = (d) => {
    r?.({
      id: n.id,
      value: d,
      type: "rating"
    });
  }, u = (d, f) => {
    const m = e.map(
      (h) => h.value === d ? { ...h, label: f } : h
    );
    r?.({
      id: n.id,
      type: "rating",
      value: t ?? 0,
      options: m
    });
  };
  return /* @__PURE__ */ c(Me, { ...n, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: e.map((d) => /* @__PURE__ */ c(
    xb,
    {
      option: d,
      selected: t === d.value,
      onClick: l,
      onChangeLabel: u,
      disabled: s && !a,
      isEmojiMode: a ? !1 : o
    },
    d.value
  )) }) });
}, Sb = (e) => /* @__PURE__ */ c(wb, { ...e, type: "rating" });
function _b({
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
const kb = {
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
  locked: u,
  type: d
}) => {
  const { value: f, label: m } = t, { isDragging: h, setIsDragging: x, setDraggedItemId: w, draggedItemId: g } = kn(), { t: v } = Fe(), p = h && g === f, y = () => {
    !a && !i || n(f);
  }, k = (C) => {
    r({ value: f, index: e, action: C });
  }, _ = (C) => {
    C.stopPropagation(), k("mark-as-correct");
  }, S = (C) => {
    C.stopPropagation(), k("remove");
  }, N = (C) => {
    const R = C.target.value;
    s({ value: f, index: e, newLabel: R });
  }, T = () => {
    x(!0), w(f);
  }, L = () => {
    x(!1), w(null);
  }, E = h ? p : !a && !i, I = !a && !i && !u;
  return /* @__PURE__ */ c(
    Br,
    {
      value: t,
      onDragStart: T,
      onDragEnd: L,
      dragListener: I,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ A(
        "div",
        {
          className: Q(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (a || i) && "cursor-pointer",
            h && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: y,
          children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: Q(
                  "block",
                  E ? "group-hover:hidden" : "cursor-default",
                  h && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: d === "multi-select" ? /* @__PURE__ */ c(
                  Bn,
                  {
                    title: m,
                    checked: i ? !!o : !1,
                    onCheckedChange: y,
                    disabled: !i,
                    presentational: !i,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ c(
                  _b,
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
                  I && "active:cursor-grabbing",
                  E && "group-hover:block",
                  h && "cursor-grabbing",
                  !I && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ c("div", { className: "flex aspect-square w-6 scale-90 items-center justify-center", children: /* @__PURE__ */ c(Wt, { icon: Gn, size: "sm" }) })
              }
            ),
            !a && !i && !u ? /* @__PURE__ */ c(
              "textarea",
              {
                placeholder: v(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: m,
                onChange: N,
                className: "flex-1 resize-none font-medium",
                style: kb
              }
            ) : /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: m }),
            !a && !i && l && /* @__PURE__ */ c("span", { className: "text-sm font-medium text-f1-foreground-positive", children: v("surveyFormBuilder.selectQuestion.correct") }),
            !a && !i && !u ? /* @__PURE__ */ A("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ c(
                je,
                {
                  label: v("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: l ? Hn : Oo,
                  onClick: _,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ c(
                je,
                {
                  label: v("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: pn,
                  hideLabel: !0,
                  onClick: S
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
  } = ze(), i = new Set(e.map((g) => g.value)).size !== e.length, o = a(t.id), l = t.locked || o?.locked, { t: u } = Fe(), d = B(
    () => ({
      id: t.id,
      type: t.type,
      options: e
    }),
    [t.id, t.type, e]
  );
  ae(() => {
    if (!i) return;
    let g = e.map((y) => ({
      ...y,
      value: y.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const v = {
      id: t.id,
      type: t.type
    }, p = new Set(g.map((y) => y.value)).size !== g.length;
    if (!p) {
      n?.({ ...v, options: g });
      return;
    }
    g = g.map((y) => ({
      ...y,
      value: Td()
    })), p && n?.({ ...v, options: g }), n?.({ ...v, options: g });
  }, [
    i,
    n,
    e,
    t.id,
    t.type
  ]);
  const f = (g) => {
    let v = e;
    g.action === "remove" && (v = e.filter((p) => p.value !== g.value)), g.action === "mark-as-correct" && (v = e.map((p) => ({
      ...p,
      correct: p.value === g.value ? !p.correct : p.correct
    }))), n?.({
      ...d,
      options: v
    });
  }, m = (g) => {
    if (t.type === "select") {
      const v = !t.required && t.value === g ? null : g;
      n?.({
        ...d,
        type: t.type,
        value: v
      });
    } else if (t.type === "multi-select") {
      const v = Array.isArray(t.value) ? t.value : [], p = v.includes(g) ? v.filter((y) => y !== g) : [...v, g];
      n?.({
        ...d,
        type: t.type,
        value: p
      });
    }
  }, h = (g) => {
    const v = e.map((p, y) => ({
      ...p,
      ...y === g.index ? {
        value: g.value,
        label: g.newLabel
      } : {}
    }));
    n?.({
      ...d,
      options: v
    });
  }, x = () => {
    const g = e.length, v = {
      value: `new-option-${g + 1}`,
      label: u("surveyFormBuilder.selectQuestion.newOption", {
        number: g + 1
      })
    };
    n?.({
      ...d,
      options: [...e, v]
    });
  }, w = (g) => {
    n?.({
      ...d,
      options: g
    });
  };
  return i ? null : /* @__PURE__ */ c(Me, { ...t, children: /* @__PURE__ */ A("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ c(La, { children: /* @__PURE__ */ c(
      oa,
      {
        axis: "y",
        values: e,
        onReorder: w,
        as: "div",
        children: e.map((g, v) => {
          const p = t.type === "select" ? t.value === g.value : Array.isArray(t.value) && t.value.includes(g.value);
          return /* @__PURE__ */ c("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ c(
            Cb,
            {
              index: v,
              option: g,
              correct: g.correct,
              onClick: m,
              onClickAction: f,
              onChangeLabel: h,
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
      je,
      {
        label: u("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: ia,
        onClick: x
      }
    ) })
  ] }) });
}, Db = ({
  value: e,
  ...t
}) => {
  const { onQuestionChange: n, answering: r } = ze(), s = ln(t), { t: a } = Fe(), i = a("surveyFormBuilder.answer.textPlaceholder"), o = B(
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
  return /* @__PURE__ */ c(Me, { ...t, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
    it,
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
}, Ma = ({ ...e }) => {
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
}, Gc = () => {
  const { t: e } = Fe();
  return /* @__PURE__ */ A("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: e("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
}, Fb = ({
  item: e,
  showEndOfSection: t,
  className: n
}) => {
  const { isDragging: r, setIsDragging: s, setDraggedItemId: a, draggedItemId: i } = kn(), o = la(), { disabled: l, answering: u, getSectionContainingQuestion: d } = ze(), f = d(e.question.id), m = !!f && i === f.id, h = () => {
    s(!0), a(e.question.id);
  }, x = () => {
    s(!1), a(null);
  }, w = e.question.locked || f?.locked, g = !l && !u && !w;
  return /* @__PURE__ */ A(
    Br,
    {
      value: e,
      onDragStart: h,
      onDragEnd: x,
      dragListener: !1,
      dragControls: o,
      layout: "position",
      as: "div",
      className: Q(
        n,
        m && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ A(
          "div",
          {
            className: Q(
              "group/element flex flex-row items-start gap-1",
              r && "cursor-grabbing"
            ),
            children: [
              !l && !u && /* @__PURE__ */ c(
                "div",
                {
                  className: Q(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !r && "cursor-grab",
                    !g && "cursor-not-allowed"
                  ),
                  onPointerDown: (v) => {
                    g && o.start(v);
                  },
                  children: /* @__PURE__ */ c(ht, { icon: Gn, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(
                Ma,
                {
                  ...e.question
                }
              )
            ]
          }
        ) }),
        t && /* @__PURE__ */ c(Gc, {})
      ]
    }
  );
}, Tb = ({ question: e }) => {
  const { isDragging: t, setIsDragging: n, setDraggedItemId: r } = kn(), s = la(), { disabled: a, answering: i, getSectionContainingQuestion: o } = ze(), l = o(e.id), u = () => {
    n(!0), r(e.id);
  }, d = () => {
    n(!1), r(null);
  }, f = e.locked || l?.locked, m = !a && !i && !f;
  return /* @__PURE__ */ c(
    Br,
    {
      value: e,
      as: "div",
      onDragStart: u,
      onDragEnd: d,
      dragListener: !1,
      dragControls: s,
      layout: "position",
      children: /* @__PURE__ */ A(
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
                  !m && "cursor-not-allowed"
                ),
                onPointerDown: (h) => {
                  m && s.start(h);
                },
                children: /* @__PURE__ */ c(ht, { icon: Gn, size: "sm" })
              }
            ),
            /* @__PURE__ */ c(
              Ma,
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
    deleteElement: u,
    onDuplicateElement: d
  } = ze(), [f, m] = J(!1), { t: h } = Fe(), x = B(
    () => ({
      id: e,
      title: t,
      description: n
    }),
    [e, t, n]
  ), w = (N) => {
    i?.({ ...x, title: N.target.value });
  }, g = (N) => {
    i?.({
      ...x,
      description: N.target.value
    });
  }, v = (N) => {
    i?.({ ...x, questions: N });
  }, p = () => {
    d?.({ elementId: e, type: "section" });
  }, y = () => {
    u(e);
  }, k = [
    {
      label: h("surveyFormBuilder.actions.duplicateSection"),
      icon: pr,
      onClick: p
    },
    {
      label: h("surveyFormBuilder.actions.deleteSection"),
      icon: pn,
      onClick: y,
      critical: !0
    }
  ], _ = o || s || l, S = U(null);
  return ae(() => {
    S.current?.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ A(
    "div",
    {
      id: `co-creation-section-${e}`,
      className: "group/section flex w-full flex-col gap-1 bg-f1-background",
      children: [
        /* @__PURE__ */ A("div", { className: "py-1 pl-5 pr-3", children: [
          /* @__PURE__ */ A("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ c(
              "input",
              {
                ref: S,
                type: "text",
                "aria-label": h("surveyFormBuilder.labels.title"),
                value: t,
                placeholder: h("surveyFormBuilder.labels.sectionTitlePlaceholder"),
                onChange: w,
                disabled: _,
                className: Q(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  _ && "cursor-not-allowed"
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
                  Xn,
                  {
                    items: k,
                    icon: fr,
                    open: f,
                    onOpenChange: m,
                    align: "start",
                    children: /* @__PURE__ */ c(
                      je,
                      {
                        icon: fr,
                        label: h("surveyFormBuilder.actions.actions"),
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
              "aria-label": h("surveyFormBuilder.labels.description"),
              placeholder: h(
                "surveyFormBuilder.labels.sectionDescriptionPlaceholder"
              ),
              onChange: g,
              disabled: _,
              style: Ab,
              className: Q(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                _ && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !a && /* @__PURE__ */ A(mt, { children: [
          /* @__PURE__ */ c(La, { children: /* @__PURE__ */ c(
            oa,
            {
              axis: "y",
              values: r,
              onReorder: v,
              as: "div",
              children: /* @__PURE__ */ c("div", { className: "group/section-list flex flex-col gap-4", children: r.map((N) => /* @__PURE__ */ c(Tb, { question: N }, N.id)) })
            }
          ) }),
          !l && /* @__PURE__ */ A("div", { className: "mt-8 flex flex-row items-center gap-4", children: [
            /* @__PURE__ */ c("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
            /* @__PURE__ */ c("span", { className: "text-base font-medium text-f1-foreground-secondary", children: h("surveyFormBuilder.labels.endOfSection") }),
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
  const { isDragging: n, setIsDragging: r, setDraggedItemId: s, draggedItemId: a } = kn(), i = la(), { disabled: o, answering: l } = ze(), u = a === e.section.id, d = () => {
    r(!0), s(e.section.id);
  }, f = () => {
    r(!1), s(null);
  }, m = !o && !l && !e.section.locked;
  return /* @__PURE__ */ c(
    Br,
    {
      value: e,
      onDragStart: d,
      onDragEnd: f,
      dragListener: !1,
      dragControls: i,
      layout: "position",
      as: "div",
      className: t,
      children: /* @__PURE__ */ c("div", { className: "w-full", children: /* @__PURE__ */ A("div", { className: "group/element w-full", children: [
        /* @__PURE__ */ A(
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
                    !m && "cursor-not-allowed"
                  ),
                  onPointerDown: (h) => {
                    m && i.start(h);
                  },
                  children: /* @__PURE__ */ c(ht, { icon: Gn, size: "sm" })
                }
              ),
              /* @__PURE__ */ c(Eb, { ...e.section, hideQuestions: !0 })
            ]
          }
        ),
        u && (e.section.questions ?? []).length > 0 && /* @__PURE__ */ A("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (e.section.questions ?? []).map((h) => /* @__PURE__ */ c(Ma, { ...h }, h.id)),
          /* @__PURE__ */ c(Gc, {})
        ] })
      ] }) })
    }
  );
}, Ki = (e) => rb[e], Ib = (e) => {
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
    requiredLabel: u,
    questionTypeLabel: d
  } = t, { deleteElement: f, onDuplicateElement: m, disabled: h, answering: x } = ze(), { getActionsForQuestion: w, questionTypes: g } = Wc(), v = O((y) => {
    Ib(y);
  }, []), p = O(
    (y, k, _) => {
      const {
        question: S,
        currentRatingType: N,
        disallowOptionalQuestions: T,
        handleChangeRequired: L,
        handleSelectQuestionType: E,
        handleSelectRatingType: I,
        handleDuplicate: C,
        handleDelete: R
      } = w(y, k, _), j = [
        { type: "label", text: l }
      ];
      T || j.push({
        type: "toggle",
        label: u,
        icon: Ro,
        checked: !!S?.required,
        onCheckedChange: L
      });
      const W = g.map((G) => {
        if (G.questionType === "rating") {
          const le = Lr.map((ee) => ({
            label: ee.label,
            onClick: () => I(ee.value),
            selected: N === ee.value
          }));
          return {
            type: "submenu",
            label: G.label,
            icon: G.icon,
            selectedLabel: N ? Lr.find((ee) => ee.value === N)?.label : void 0,
            children: le
          };
        }
        return {
          label: G.label,
          icon: G.icon,
          onClick: () => E(G.questionType),
          selected: k === G.questionType
        };
      }), oe = g.find(
        (G) => G.questionType === k
      )?.label;
      return j.push({
        type: "submenu",
        label: d,
        icon: Io,
        selectedLabel: oe,
        children: W
      }), j.push({ type: "separator" }), j.push({
        label: s,
        icon: pr,
        onClick: C
      }), _ && j.push({
        label: a,
        icon: pn,
        onClick: R,
        critical: !0
      }), j;
    },
    [
      w,
      g,
      l,
      u,
      d,
      s,
      a
    ]
  );
  return B(
    () => e.map((y) => {
      if (y.type === "section") {
        const _ = y.section, S = `co-creation-section-${_.id}`, N = _.questions ?? [], T = N.length === 1;
        return {
          id: S,
          label: _.title || n,
          icon: aa,
          onClick: v,
          ...!h && !x && !_.locked && {
            otherActions: [
              {
                label: i,
                icon: pr,
                onClick: () => m?.({
                  elementId: _.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: o,
                icon: pn,
                onClick: () => f(_.id),
                critical: !0
              }
            ]
          },
          children: N.map((L) => ({
            id: `co-creation-question-${L.id}`,
            label: L.title || r,
            icon: Ki(L.type),
            onClick: v,
            ...!h && !x && !_.locked && {
              otherActions: p(
                L.id,
                L.type,
                !T
              )
            }
          }))
        };
      }
      const k = y.question;
      return {
        id: `co-creation-question-${k.id}`,
        label: k.title || r,
        icon: Ki(k.type),
        onClick: v,
        ...!h && !x && !k.locked && {
          otherActions: p(
            k.id,
            k.type,
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
      h,
      x,
      p,
      i,
      o,
      m,
      f
    ]
  );
}, Ns = "co-creation-section-", ir = "co-creation-question-";
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
    if (i.id.startsWith(Ns)) {
      const o = i.id.slice(Ns.length), l = n.get(o);
      if (!l) return;
      const u = (i.children ?? []).filter((d) => d.id.startsWith(ir)).map((d) => r.get(d.id.slice(ir.length))).filter((d) => d != null);
      s.push({
        type: "section",
        section: { ...l, questions: u }
      });
      for (const d of i.children ?? [])
        d.id.startsWith(Ns) && a(d);
      return;
    }
    if (i.id.startsWith(ir)) {
      const o = i.id.slice(ir.length), l = r.get(o);
      l && s.push({ type: "question", question: l });
    }
  };
  for (const i of e)
    a(i);
  return s;
}
const Xc = ({
  elements: e,
  onChange: t,
  answering: n
}) => {
  const { t: r } = Fe(), { disabled: s } = ze(), { portalContainer: a } = et(id), i = Ob(e, {
    untitledSectionLabel: r("surveyFormBuilder.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: r("surveyFormBuilder.labels.titlePlaceholder"),
    duplicateQuestionLabel: r("surveyFormBuilder.actions.duplicateQuestion"),
    deleteQuestionLabel: r("surveyFormBuilder.actions.deleteQuestion"),
    duplicateSectionLabel: r("surveyFormBuilder.actions.duplicateSection"),
    deleteSectionLabel: r("surveyFormBuilder.actions.deleteSection"),
    questionOptionsLabel: r("surveyFormBuilder.labels.questionOptions"),
    requiredLabel: r("surveyFormBuilder.labels.required"),
    questionTypeLabel: r("surveyFormBuilder.labels.questionType")
  }), o = O(
    (l) => {
      t(Lb(l, e));
    },
    [e, t]
  );
  return /* @__PURE__ */ c("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ c(
    jc,
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
function Pb(e) {
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
function Yi(e) {
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
function Mb(e, t) {
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
function Vb(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (n.type === "section") {
      const r = n.section.questions;
      r?.length && t.add(`question-${r[r.length - 1].id}`);
    }
  return t;
}
function Bb({
  flatItems: e,
  onChange: t
}) {
  const [n, r] = J(
    null
  ), [s, a] = J(!1), i = O(
    (u) => {
      const d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set();
      let m = null;
      for (const S of e)
        S.type === "section-header" ? (m = S.id, d.set(S.id, /* @__PURE__ */ new Set()), S.section.locked && f.add(S.id)) : S.type === "section-end" ? m = null : m && d.get(m).add(S.id);
      const h = e.filter((S) => S.type === "section-header").map((S) => S.id), x = u.filter((S) => S.type === "section-header").map((S) => S.id), w = h.some(
        (S, N) => x[N] !== S
      ), g = new Map(
        e.filter((S) => S.type !== "section-end").map((S, N) => [S.id, N])
      ), v = new Set(f);
      if (w)
        for (const [S, N] of u.entries())
          N.type === "section-header" && g.get(N.id) !== S && v.add(N.id);
      let p;
      if (v.size > 0) {
        const S = /* @__PURE__ */ new Map();
        for (const L of v) {
          const E = d.get(L);
          if (E)
            for (const I of E)
              S.set(I, L);
        }
        const N = /* @__PURE__ */ new Map();
        for (const L of v)
          N.set(L, []);
        const T = [];
        for (const L of u) {
          const E = S.get(L.id);
          E ? N.get(E).push(L) : T.push(L);
        }
        p = [];
        for (const L of T)
          p.push(L), L.type === "section-header" && v.has(L.id) && p.push(...N.get(L.id));
      } else
        p = u;
      const y = /* @__PURE__ */ new Set();
      for (const S of d.values())
        for (const N of S)
          y.add(N);
      const k = Mb(
        p,
        y
      );
      if ([
        ...d.entries()
      ].some(([S, N]) => {
        if (N.size === 0) return !1;
        const T = k.findIndex((E) => E.id === S);
        if (T === -1) return !1;
        const L = k[T + 1];
        return !L || L.type !== "question";
      })) {
        r(k), a(!0);
        return;
      }
      t(Yi(k));
    },
    [t, e]
  ), o = O(() => {
    if (n) {
      const u = /* @__PURE__ */ new Set();
      for (let f = 0; f < n.length; f++) {
        const m = n[f];
        if (m.type === "section-header") {
          const h = n[f + 1];
          (!h || h.type === "section-end" || h.type === "section-header") && u.add(m.section.id);
        }
      }
      const d = n.filter((f) => !(f.type === "section-header" && u.has(f.section.id) || f.type === "section-end" && u.has(f.sectionId)));
      t(Yi(d));
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
  const { isDragging: t } = kn();
  return /* @__PURE__ */ c("div", { className: Q("relative @container", t && "select-none"), children: e });
}
const $b = ({
  elements: e,
  disabled: t,
  onChange: n,
  disallowOptionalQuestions: r,
  allowedQuestionTypes: s,
  applyingChanges: a,
  useUpload: i
}) => {
  const o = !t, l = B(
    () => e.map((p) => p.type === "question" ? {
      ...p,
      question: {
        ...p.question,
        required: r ? !0 : p.question.required
      }
    } : p.type === "section" ? {
      ...p,
      section: {
        ...p.section,
        questions: p.section.questions?.map((y) => ({
          ...y,
          required: r ? !0 : y.required
        }))
      }
    } : p),
    [e, r]
  ), u = B(() => Pb(l), [l]), d = B(
    () => u.filter((p) => p.type !== "section-end"),
    [u]
  ), f = B(
    () => Vb(l),
    [l]
  ), m = B(() => {
    const p = /* @__PURE__ */ new Set();
    for (const y of l)
      if (y.type === "section")
        for (const k of y.section.questions ?? [])
          p.add(`question-${k.id}`);
    return p;
  }, [l]), {
    handleFlatReorder: h,
    handleConfirmLastQuestionMove: x,
    handleCancelLastQuestionMove: w,
    lastQuestionDialogOpen: g
  } = Bb({ flatItems: u, onChange: n });
  ae(() => {
    if (a) {
      const p = document.activeElement;
      p && p.getAttribute("name") !== "one-ai-input" && p.blur();
    }
  }, [a]);
  const v = !!l.length;
  return /* @__PURE__ */ A(
    Zc,
    {
      disabled: t,
      elements: l,
      onChange: n,
      disallowOptionalQuestions: r,
      allowedQuestionTypes: s,
      useUpload: i,
      children: [
        /* @__PURE__ */ c(La, { children: /* @__PURE__ */ A(jb, { children: [
          v && /* @__PURE__ */ c(Xc, { elements: l, onChange: n }),
          /* @__PURE__ */ A("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ A(
              Vn.div,
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
                    oa,
                    {
                      axis: "y",
                      values: d,
                      onReorder: h,
                      as: "div",
                      children: /* @__PURE__ */ c("div", { className: "flex flex-col", children: d.map((p, y) => {
                        const k = y === 0 ? "" : m.has(p.id) ? "mt-4" : "mt-8";
                        return p.type === "section-header" ? /* @__PURE__ */ c(
                          Rb,
                          {
                            item: p,
                            className: k
                          },
                          p.id
                        ) : /* @__PURE__ */ c(
                          Fb,
                          {
                            item: p,
                            showEndOfSection: f.has(p.id),
                            className: k
                          },
                          p.id
                        );
                      }) })
                    }
                  ),
                  o && /* @__PURE__ */ c(sb, {})
                ]
              }
            ),
            a && /* @__PURE__ */ c(
              Vn.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ c(eb, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ c(
          ab,
          {
            open: g,
            onConfirm: x,
            onCancel: w
          }
        )
      ]
    }
  );
}, tx = Ie($b);
function kt({
  titleWidth: e,
  descriptionWidth: t,
  answer: n
}) {
  return /* @__PURE__ */ A("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ c(Pe, { className: "h-5 rounded-sm", style: { width: e } }),
      t && /* @__PURE__ */ c(
        Pe,
        {
          className: "h-4 rounded-sm",
          style: { width: t }
        }
      )
    ] }),
    n
  ] });
}
const ur = /* @__PURE__ */ c(Pe, { className: "h-10 w-full rounded-sm" }), Ji = /* @__PURE__ */ c(Pe, { className: "h-24 w-full rounded-sm" }), zb = /* @__PURE__ */ c(Pe, { className: "h-10 w-56 max-w-full rounded-sm" });
function qb() {
  return /* @__PURE__ */ c("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(Pe, { className: "h-9 rounded-sm" }, t)) });
}
function eo({ count: e }) {
  return /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: Array.from({ length: e }).map((t, n) => /* @__PURE__ */ c(
    Pe,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - n * 7)}%` }
    },
    n
  )) });
}
function Zb() {
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ c(
    Pe,
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
      children: [0, 1].map((e) => /* @__PURE__ */ A("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ A("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Pe, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ c(Pe, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-4", children: e === 0 ? /* @__PURE__ */ A(mt, { children: [
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: ur
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: Ji
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ c(qb, {})
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ c(eo, { count: 4 })
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: ur
            }
          )
        ] }) : /* @__PURE__ */ A(mt, { children: [
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: zb
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: ur
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ c(Zb, {})
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ c(eo, { count: 3 })
            }
          ),
          /* @__PURE__ */ c(
            kt,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: Ji
            }
          )
        ] }) })
      ] }, e))
    }
  );
}
function Wb() {
  return /* @__PURE__ */ A(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ A("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ c(Pe, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ c(Pe, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ c(
          kt,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: ur
          }
        )
      ]
    }
  );
}
function Qb(e) {
  const [t, n] = J(0), [r, s] = J(null), a = e.length, i = a > 0 ? t / a * 100 : 0, o = r ?? i, l = e[t], u = t === 0, d = t === a - 1, f = O(() => {
    s(null), n((w) => Math.min(w + 1, a - 1));
  }, [a]), m = O(() => {
    s(null), n((w) => Math.max(w - 1, 0));
  }, []), h = O(() => {
    s(null), n(0);
  }, []), x = O((w) => {
    s(w);
  }, []);
  return {
    currentStep: t,
    totalSteps: a,
    progress: o,
    currentQuestion: l,
    isFirstStep: u,
    isLastStep: d,
    goToNext: f,
    goToPrevious: m,
    reset: h,
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
function Gb({ checked: e }) {
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
function to({
  value: e,
  onChange: t,
  onBlur: n,
  config: r
}) {
  const { options: s, type: a, required: i, disabled: o, showAnswerValidation: l } = r, u = s.some((x) => x.correct), d = !!l && u, f = (x) => {
    if (o || a !== "select") return;
    t(!i && e === x ? void 0 : x), n();
  }, m = (x) => {
    if (o || a !== "multi-select") return;
    const w = Array.isArray(e) ? e : [], g = w.includes(x) ? w.filter((v) => v !== x) : [...w, x];
    t(g), n();
  }, h = (x) => {
    a === "select" ? f(x) : m(x);
  };
  return /* @__PURE__ */ c("div", { className: "-mx-0.5 flex flex-col items-start", children: s.map((x) => {
    const w = a === "select" ? e === x.value : Array.isArray(e) && e.includes(x.value);
    return /* @__PURE__ */ A(
      "div",
      {
        className: Q(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          o ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (g) => {
          o || a === "multi-select" && g.target.closest("input") || h(x.value);
        },
        children: [
          a === "multi-select" ? /* @__PURE__ */ c(
            Bn,
            {
              title: x.label,
              checked: !!w,
              onCheckedChange: () => m(x.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ c(Gb, { checked: !!w }),
          /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: x.label }),
          d ? /* @__PURE__ */ c("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ c(
            ht,
            {
              icon: x.correct ? Oo : Hn,
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
const Xb = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, Kb = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function or(e, t) {
  return Kr().optional().superRefine((n, r) => {
    e && (!n || n.trim() === "") && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function Yb(e, t) {
  return Kr().optional().superRefine((n, r) => {
    if (e && (!n || n.trim() === "")) {
      r.addIssue({
        code: "custom",
        message: t("forms.validation.required")
      });
      return;
    }
    n && !Xb.test(n) && r.addIssue({
      code: "custom",
      message: t("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function no(e, t) {
  return kp().optional().superRefine((n, r) => {
    e && n == null && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function Jb(e, t) {
  return oc(Kr()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ey(e, t) {
  return Np().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ty(e, t) {
  return oc(Kr()).optional().superRefine((n, r) => {
    e && (!n || n.length === 0) && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ny(e, t) {
  return Cp().optional().superRefine((n, r) => {
    e && !n && r.addIssue({
      code: "custom",
      message: t("forms.validation.required")
    });
  });
}
function ro(e, t) {
  const n = t?.[e.id];
  if (n) return n.value;
  if (e.type === "multi-select") return [];
  const r = e;
  return r.value !== void 0 && r.value !== null ? r.value : null;
}
function Kc(e) {
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
function so(e, t, n, r = !1, s = r, a) {
  const i = e.title ?? "", o = {
    label: i,
    section: n
  }, l = {
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
        label: i,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        disabled: s
      };
      return vt(or(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: d, onChange: f, onBlur: m, error: h }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: u,
            value: d ?? "",
            onChange: f,
            onBlur: m,
            error: !!h,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "longText": {
      const u = {
        id: e.id,
        type: "textarea",
        label: i,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: s
      };
      return vt(or(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: d, onChange: f, onBlur: m, error: h }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: u,
            value: d ?? "",
            onChange: f,
            onBlur: m,
            error: !!h,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "numeric": {
      const u = {
        id: e.id,
        type: "number",
        label: i,
        placeholder: t("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: s
      };
      return vt(no(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: d, onChange: f, onBlur: m, error: h }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: u,
            value: d,
            onChange: f,
            onBlur: m,
            error: !!h,
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
        label: i,
        placeholder: t("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: s
      };
      return vt(Yb(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: d, onChange: f, onBlur: m, error: h }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: u,
            value: d ?? "",
            onChange: f,
            onBlur: m,
            error: !!h,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "date": {
      const u = {
        id: e.id,
        type: "date",
        label: i,
        clearable: !e.required,
        disabled: s
      };
      return vt(ey(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: d, onChange: f, onBlur: m, error: h }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: u,
            value: d,
            onChange: f,
            onBlur: m,
            error: !!h,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-single": {
      const u = e.options.map((m) => ({
        value: m.value,
        label: m.label
      })), d = e.showSearchBox ?? u.length > Qc, f = {
        id: e.id,
        type: "select",
        label: i,
        placeholder: t("surveyFormBuilder.answer.dropdownPlaceholder"),
        options: u,
        clearable: !e.required,
        multiple: !1,
        disabled: s,
        showSearchBox: d,
        searchBoxPlaceholder: e.searchBoxPlaceholder
      };
      return vt(or(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: m, onChange: h, onBlur: x, error: w }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ c(
          it,
          {
            field: f,
            value: m ?? "",
            onChange: h,
            onBlur: x,
            error: !!w,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "select": {
      const d = {
        options: e.options,
        type: "select",
        required: e.required,
        disabled: s,
        showAnswerValidation: r
      };
      return vt(or(!!e.required, t), {
        ...o,
        fieldType: "custom",
        fieldConfig: d,
        render: ({ value: f, onChange: m, onBlur: h, config: x }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c(
          to,
          {
            value: f,
            onChange: m,
            onBlur: h,
            config: x
          }
        ) })
      });
    }
    case "multi-select": {
      const d = {
        options: e.options,
        type: "multi-select",
        required: e.required,
        disabled: s,
        showAnswerValidation: r
      };
      return vt(Jb(!!e.required, t), {
        ...o,
        fieldType: "custom",
        fieldConfig: d,
        render: ({ value: f, onChange: m, onBlur: h, config: x }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c(
          to,
          {
            value: f,
            onChange: m,
            onBlur: h,
            config: x
          }
        ) })
      });
    }
    case "rating": {
      const d = {
        options: e.options,
        disabled: s
      };
      return vt(no(!!e.required, t), {
        ...o,
        fieldType: "custom",
        fieldConfig: d,
        render: ({ value: f, onChange: m, onBlur: h, config: x }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c(
          Hb,
          {
            value: f,
            onChange: m,
            onBlur: h,
            config: x
          }
        ) })
      });
    }
    case "file": {
      const u = e, d = u.useUpload ?? a, f = {
        id: e.id,
        type: "file",
        label: i,
        multiple: !0,
        accept: u.accept ?? Hc,
        maxSizeMB: u.maxSizeMB,
        useUpload: d ?? Kb,
        disabled: s || !d
      };
      return vt(ty(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: m, onChange: h, onBlur: x, error: w }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: f,
            value: m ?? [],
            onChange: h,
            onBlur: x,
            error: !!w,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "checkbox": {
      const u = e, d = {
        id: e.id,
        type: "checkbox",
        label: u.label || i,
        disabled: s
      };
      return vt(ny(!!e.required, t), {
        ...o,
        fieldType: "custom",
        render: ({ value: f, onChange: m, onBlur: h, error: x }) => /* @__PURE__ */ c(Me, { ...l, children: /* @__PURE__ */ c("div", { className: "px-0.5", children: /* @__PURE__ */ c(
          it,
          {
            field: d,
            value: f ?? !1,
            onChange: m,
            onBlur: h,
            error: !!x,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return vt(Fp(), {
        ...o,
        fieldType: "custom",
        render: () => null
      });
  }
}
function ry(e, t, n, r, s, a, i = !1, o = i, l) {
  return B(() => {
    const u = {}, d = {}, f = {}, m = Kc(e), h = t === "stepped";
    for (const x of e)
      if (x.type === "section") {
        const w = x.section, g = w.id;
        t === "all-questions" && (f[g] = {
          title: w.title,
          description: w.description,
          withInset: !0
        });
        for (const v of w.questions ?? [])
          h && s && v.id !== s || (u[v.id] = so(
            v,
            n,
            t === "all-questions" ? g : void 0,
            i,
            o,
            l
          ), d[v.id] = a?.[v.id] ?? ro(v, r));
      } else {
        const w = x.question;
        if (h && s && w.id !== s)
          continue;
        u[w.id] = so(
          w,
          n,
          void 0,
          i,
          o,
          l
        ), d[w.id] = a?.[w.id] ?? ro(w, r);
      }
    return {
      schema: Fa(u),
      defaultValues: d,
      flatQuestions: m,
      sections: f
    };
  }, [
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    l
  ]);
}
const Ds = () => {
};
function nx({
  elements: e,
  onSubmit: t,
  mode: n,
  title: r,
  description: s,
  resourceHeader: a,
  isOpen: i,
  onClose: o,
  position: l = "center",
  module: u,
  allowToChangeFullscreen: d = !1,
  defaultValues: f,
  errorTriggerMode: m = "on-blur",
  loading: h = !1,
  labels: x,
  preview: w = !1,
  useUpload: g
}) {
  const { t: v } = Fe(), p = l === "fullscreen", y = l === "fullscreen" ? "center" : l, [k, _] = J(p), { formRef: S, submit: N, isSubmitting: T, hasErrors: L } = ns(), E = U({}), I = B(
    () => Kc(e),
    [e]
  ), C = Qb(I), R = I.length > 0, j = {
    title: x?.empty?.title ?? v("surveyAnsweringForm.labels.empty.title"),
    description: x?.empty?.description ?? v("surveyAnsweringForm.labels.empty.description"),
    emoji: x?.empty?.emoji ?? v("surveyAnsweringForm.labels.empty.emoji")
  }, W = n === "stepped", G = w && !!f && Object.keys(f).length > 0, le = w && !G, ee = W ? C.currentQuestion?.id : void 0, {
    schema: me,
    defaultValues: Y,
    sections: z
  } = ry(
    e,
    n,
    v,
    f,
    ee,
    W ? E.current : void 0,
    w,
    G,
    g
  ), $ = k ? "fullscreen" : y, fe = $ === "center" ? "xl" : void 0, ke = U(null), se = O(
    (b) => {
      ke.current && clearTimeout(ke.current), ke.current = setTimeout(() => {
        ke.current = null, o();
      }, b);
    },
    [o]
  ), pe = O(
    async (b) => {
      if (w)
        return { success: !0 };
      if (!t)
        throw new Error("onSubmit is required when preview is false");
      if (W && !C.isLastStep)
        return E.current = {
          ...E.current,
          ...b
        }, C.goToNext(), { success: !0 };
      const D = W ? { ...E.current, ...b } : b, F = {};
      for (const [M, P] of Object.entries(D))
        F[M] = P === void 0 ? null : P;
      if (W) {
        C.setProgress(100);
        const [M] = await Promise.all([
          t(F),
          new Promise((P) => setTimeout(P, 1e3))
        ]);
        return M.success ? (se(M.message ? 1e3 : 0), { success: !0, message: M.message }) : (C.setProgress(null), { success: !1, errors: M.errors });
      }
      const Z = await t(F);
      return Z.success ? (se(Z.message ? 1e3 : 0), { success: !0, message: Z.message }) : { success: !1, errors: Z.errors };
    },
    [
      t,
      w,
      se,
      W,
      C.isLastStep,
      C.goToNext,
      C.setProgress
    ]
  ), be = O(async () => {
    try {
      await N();
    } catch {
    }
  }, [N]), ie = O(() => {
    const b = S.current?.getValues() ?? {};
    E.current = {
      ...E.current,
      ...b
    }, C.goToPrevious();
  }, [S, C.goToPrevious]), X = d && !h ? [
    {
      label: v(k ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: k ? od : ld,
      onClick: () => _((b) => !b)
    }
  ] : void 0, ce = R ? h || G ? void 0 : le ? W && !C.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: C.goToNext,
    icon: Fs
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: Ds,
    disabled: !0
  } : W && !C.isLastStep ? {
    label: v("surveyAnsweringForm.actions.next"),
    onClick: be,
    icon: Fs
  } : {
    label: v("surveyAnsweringForm.actions.submit"),
    onClick: be,
    disabled: T || L,
    loading: T
  } : void 0, Ne = R ? h || G ? void 0 : W && !C.isFirstStep ? {
    label: v("surveyAnsweringForm.actions.previous"),
    onClick: ie,
    icon: Co
  } : void 0 : void 0, Te = n === "all-questions" && R && !h, Le = W && R && !h, Ge = W && !!C.currentQuestion?.sectionTitle && !h, Xe = !R && !h || W, ct = $ === "center" || $ === "fullscreen";
  return /* @__PURE__ */ c(
    No,
    {
      isOpen: i,
      onClose: o,
      title: r,
      module: u,
      position: $,
      width: fe,
      primaryAction: ce,
      secondaryAction: Ne,
      otherActions: X,
      disableContentPadding: ct,
      children: /* @__PURE__ */ c(Zc, { answering: !0, elements: e, onChange: Ds, children: /* @__PURE__ */ A(
        "div",
        {
          className: Q(
            "relative flex min-h-full flex-col @container",
            W && !k && "min-h-[600px]",
            Xe && "h-full"
          ),
          children: [
            Te && /* @__PURE__ */ c(Xc, { elements: e, onChange: Ds, answering: !0 }),
            Le && /* @__PURE__ */ c("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ c(
              cd,
              {
                label: "Value",
                value: C.progress,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ A(
              "div",
              {
                className: Q(
                  "mx-auto flex w-full flex-col @lg:w-[750px] max-w-full",
                  n === "all-questions" && !Xe ? "justify-start" : "flex-1 justify-center",
                  ct && "px-4 py-12"
                ),
                children: [
                  /* @__PURE__ */ c("div", { className: "mb-6", children: /* @__PURE__ */ c(
                    Nd,
                    {
                      title: r,
                      description: s,
                      ...a
                    }
                  ) }),
                  h ? n === "stepped" ? /* @__PURE__ */ c(Wb, {}) : /* @__PURE__ */ c(Ub, {}) : R ? null : /* @__PURE__ */ c(
                    bm,
                    {
                      display: "flex",
                      flexDirection: "column",
                      height: "full",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingX: "lg",
                      children: /* @__PURE__ */ c(
                        ud,
                        {
                          emoji: j.emoji,
                          title: j.title,
                          description: j.description
                        }
                      )
                    }
                  ),
                  Ge && /* @__PURE__ */ A("div", { className: "py-1 pl-5", children: [
                    /* @__PURE__ */ c("span", { className: "text-lg font-semibold text-f1-foreground", children: C.currentQuestion?.sectionTitle }),
                    C.currentQuestion?.sectionDescription && /* @__PURE__ */ c("p", { className: "text-f1-foreground-secondary", children: C.currentQuestion?.sectionDescription })
                  ] }),
                  R && !h && /* @__PURE__ */ c(
                    rs,
                    {
                      formRef: S,
                      name: "survey-answering",
                      schema: me,
                      defaultValues: Y,
                      onSubmit: pe,
                      submitConfig: {
                        hideSubmitButton: !0
                      },
                      errorTriggerMode: m,
                      sections: z
                    },
                    W ? C.currentStep : void 0
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
const sy = ({ benefits: e }) => /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: e.map((t, n) => /* @__PURE__ */ c(ay, { text: t }, n)) }), ay = ({ text: e }) => /* @__PURE__ */ A("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ c(ht, { icon: Mr, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ c("span", { children: e })
] }), Yc = nt(
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
  }, u) => /* @__PURE__ */ A(
    "div",
    {
      ref: u,
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
        /* @__PURE__ */ A("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ A("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ A("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-2", children: [
                a && /* @__PURE__ */ c(fo, { module: a }),
                i && /* @__PURE__ */ c("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              (o || l) && /* @__PURE__ */ A("div", { className: "flex justify-start gap-2", children: [
                o && /* @__PURE__ */ c(bu, { icon: o.icon, text: o.label }),
                l && /* @__PURE__ */ c(
                  uo,
                  {
                    variant: l.variant || "positive",
                    text: l.label
                  }
                )
              ] }),
              /* @__PURE__ */ c("h2", { className: "font-bold text-xl text-f1-foreground", children: e })
            ] }),
            /* @__PURE__ */ c(sy, { benefits: n })
          ] }),
          r && /* @__PURE__ */ c("div", { className: "flex gap-3", children: r })
        ] })
      ]
    }
  )
);
Yc.displayName = "ProductBlankslate";
const iy = Ie(Yc);
function oy({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  module: s,
  portalContainer: a
}) {
  const [i, o] = J(e);
  return ae(() => {
    o(e);
  }, [e]), /* @__PURE__ */ c(dd, { open: i, onOpenChange: (u) => {
    o(u), u || t();
  }, modal: !0, children: /* @__PURE__ */ A(
    fd,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: a,
      children: [
        /* @__PURE__ */ A("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ A(hd, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            s && /* @__PURE__ */ c(fo, { module: s, size: "lg" }),
            n
          ] }),
          /* @__PURE__ */ c(
            Xs,
            {
              variant: "outline",
              icon: Hn,
              onClick: t,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ A(bo, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
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
function ly({
  isOpen: e,
  onClose: t,
  title: n,
  image: r,
  benefits: s,
  errorMessage: a,
  successMessage: i,
  loadingState: o,
  nextSteps: l,
  closeLabel: u,
  primaryAction: d,
  modalTitle: f,
  modalModule: m,
  secondaryAction: h,
  portalContainer: x,
  tag: w,
  promoTag: g,
  showResponseDialog: v = !0
}) {
  const [p, y] = J(e), [k, _] = J(null), [S, N] = J(!1), T = async () => {
    if (d?.onClick) {
      N(!0);
      try {
        await d.onClick(), y(!1), v && _("success");
      } catch {
        v && _("error");
      } finally {
        N(!1);
      }
    }
  }, L = () => {
    y(!1), t?.();
  }, E = S;
  return /* @__PURE__ */ A(mt, { children: [
    /* @__PURE__ */ c(
      oy,
      {
        isOpen: p,
        onClose: L,
        title: f,
        module: m,
        portalContainer: x,
        children: /* @__PURE__ */ c("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ c(
          iy,
          {
            title: n,
            image: r,
            benefits: s,
            withShadow: !1,
            tag: w,
            promoTag: g,
            actions: /* @__PURE__ */ A("div", { className: "flex gap-3", children: [
              d && /* @__PURE__ */ c(
                je,
                {
                  variant: d.variant,
                  label: E ? o.label : d.label,
                  icon: d.icon || void 0,
                  onClick: T,
                  loading: d.loading,
                  size: d.size
                }
              ),
              h && /* @__PURE__ */ c(
                je,
                {
                  onClick: h.onClick,
                  label: h.label,
                  variant: h.variant,
                  size: h.size,
                  icon: h.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    k && v && /* @__PURE__ */ c(
      Lo,
      {
        open: !0,
        onClose: () => {
          L(), _(null);
        },
        success: k === "success",
        errorMessage: a,
        successMessage: i,
        nextSteps: l,
        closeLabel: u,
        portalContainer: x
      }
    )
  ] });
}
const rx = Ie(ly);
function cy({
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
  const [u, d] = J(!1), f = () => {
    d(!0), r && r();
  };
  ae(() => {
    i && i(!u);
  }, [i, u]);
  const m = e?.includes(".mp4");
  return /* @__PURE__ */ c(mt, { children: u ? null : /* @__PURE__ */ A(yu, { style: { width: a }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ A(xu, { children: [
      s && /* @__PURE__ */ c("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ c(
        je,
        {
          variant: "ghost",
          icon: Hn,
          size: "sm",
          hideLabel: !0,
          onClick: f,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ c("div", { children: e && (m ? /* @__PURE__ */ c(
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
        /* @__PURE__ */ A("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ c(Fr, { className: "text-lg font-medium", children: t }),
          /* @__PURE__ */ c(Fr, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: n })
        ] })
      ] })
    ] }),
    o && /* @__PURE__ */ c(wu, { className: "p-3", children: o.map(
      (h) => h.type === "upsell" ? /* @__PURE__ */ c(
        Po,
        {
          label: h.label,
          onRequest: h.onClick,
          errorMessage: h.errorMessage,
          successMessage: h.successMessage,
          loadingState: h.loadingState,
          nextSteps: h.nextSteps,
          closeLabel: h.closeLabel,
          showConfirmation: l && h.showConfirmation,
          variant: h.variant
        },
        h.label
      ) : /* @__PURE__ */ c(
        je,
        {
          label: h.label,
          onClick: h.onClick,
          variant: h.variant
        },
        h.label
      )
    ) })
  ] }) });
}
const uy = Ie(cy), Jc = nt(
  function({ primaryAction: t, secondaryAction: n, ...r }, s) {
    const a = (l) => l.variant === "promote" ? /* @__PURE__ */ c(
      Po,
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
      je,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), i = t?.variant !== "promote" ? t : void 0, o = n?.variant !== "promote" ? n : void 0;
    return /* @__PURE__ */ A(
      Dd,
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
Jc.displayName = "UpsellingBanner";
const sx = Ie(Jc);
function dy({
  isOpen: e,
  setIsOpen: t,
  label: n,
  variant: r = "promote",
  size: s = "md",
  showIcon: a = !0,
  side: i = "right",
  align: o = "center",
  icon: l = Su,
  mediaUrl: u,
  title: d,
  description: f,
  width: m = "300px",
  trackVisibility: h,
  actions: x,
  onClick: w,
  hideLabel: g = !1
}) {
  const [v, p] = J(!1), [y, k] = J(null), [_, S] = J(null), N = (C) => {
    t(C), w && w();
  }, T = async (C) => {
    if (C.type === "upsell") {
      S(C);
      try {
        await C.onClick(), C.showConfirmation && (p(!0), k("success"));
      } catch {
        p(!0), k("error");
      }
    }
  }, L = () => {
    k(null), p(!1), S(null), t(!1);
  }, E = e && !v, I = x?.map((C) => C.type === "upsell" ? {
    ...C,
    onClick: () => T(C)
  } : C);
  return /* @__PURE__ */ A(mt, { children: [
    /* @__PURE__ */ A(Ys, { open: E, onOpenChange: N, children: [
      /* @__PURE__ */ c(Js, { asChild: !0, children: /* @__PURE__ */ c(
        je,
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
        ea,
        {
          side: i,
          align: o,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ c(
            uy,
            {
              mediaUrl: u,
              title: d,
              description: f,
              onClose: () => t(!1),
              dismissible: !1,
              width: m,
              trackVisibility: h,
              actions: I,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    _?.type === "upsell" && _.showConfirmation && y && /* @__PURE__ */ c(
      Lo,
      {
        open: !0,
        onClose: L,
        success: y === "success",
        errorMessage: _.errorMessage,
        successMessage: _.successMessage,
        nextSteps: _.nextSteps,
        closeLabel: _.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ax = Ie(dy), ix = ot(
  "F0AnalyticsDashboard",
  md
), fy = Ft(
  null
), hy = ({ children: e, fullScreen: t = !0 }) => {
  const n = U(null), [r, s] = J(n.current);
  return Tu(() => {
    s(n.current);
  }, []), /* @__PURE__ */ c(fy.Provider, { value: { element: r }, children: /* @__PURE__ */ c(
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
}, my = ({
  children: e
}) => /* @__PURE__ */ c(gd, { reducedMotion: "user", children: e }), ox = ({
  children: e,
  layout: t,
  link: n,
  privacyModeInitiallyEnabled: r,
  image: s,
  i18n: a,
  l10n: i,
  isDev: o = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: u = !1,
  renderDataTestIdAttribute: d = !1
}) => /* @__PURE__ */ c(my, { children: /* @__PURE__ */ c(
  _u,
  {
    isDev: o,
    showExperimentalWarnings: u,
    renderDataTestIdAttribute: d,
    children: /* @__PURE__ */ c(ku, { ...i, children: /* @__PURE__ */ c(Cu, { ...a, children: /* @__PURE__ */ c(Nu, { ...n, children: /* @__PURE__ */ c(hy, { ...t, children: /* @__PURE__ */ c(Du, { children: /* @__PURE__ */ c(
      Ad,
      {
        initiallyEnabled: r,
        children: /* @__PURE__ */ c(Fu, { ...s, children: /* @__PURE__ */ c(
          pd,
          {
            handler: l,
            children: e
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), ao = (e) => `datacollection-${e}`, lx = {
  get: async (e) => JSON.parse(
    localStorage.getItem(ao(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(ao(e), JSON.stringify(t));
  }
};
export {
  Vw as AiChatTranslationsProvider,
  Fw as AreaChart,
  Ax as Await,
  Tw as BarChart,
  Aw as CategoryBarChart,
  Ex as ChatSpinner,
  Ew as ComboChart,
  _y as Dashboard,
  du as DataTestIdWrapper,
  Rx as DndProvider,
  dx as EmojiImage,
  Ix as F0ActionItem,
  Ox as F0AiChat,
  Lx as F0AiChatProvider,
  Px as F0AiChatTextArea,
  Wy as F0AiFormRegistryProvider,
  Mx as F0AiFullscreenChat,
  Bw as F0AiMask,
  _o as F0Alert,
  ix as F0AnalyticsDashboard,
  jw as F0AuraVoiceAnimation,
  fx as F0Avatar,
  Vx as F0AvatarAlert,
  hx as F0AvatarCompany,
  yw as F0AvatarDate,
  mx as F0AvatarEmoji,
  mu as F0AvatarFile,
  px as F0AvatarIcon,
  Bx as F0AvatarList,
  fo as F0AvatarModule,
  gx as F0AvatarPerson,
  vx as F0AvatarTeam,
  Fy as F0BigNumber,
  bm as F0Box,
  je as F0Button,
  jx as F0ButtonDropdown,
  $x as F0ButtonToggle,
  zx as F0Card,
  Bn as F0Checkbox,
  Vy as F0ChipList,
  xo as F0DatePicker,
  No as F0Dialog,
  id as F0DialogContext,
  qx as F0DialogProvider,
  Cm as F0DurationInput,
  Zx as F0EventCatcherProvider,
  zy as F0FilterPickerContent,
  Hy as F0Form,
  it as F0FormField,
  Jy as F0GridStack,
  $w as F0HILActionConfirmation,
  Gy as F0Heading,
  ht as F0Icon,
  Zu as F0Link,
  ed as F0OneIcon,
  Ux as F0OneSwitch,
  ox as F0Provider,
  hn as F0Select,
  ex as F0TableOfContentPopover,
  bx as F0TagAlert,
  lu as F0TagBalance,
  yx as F0TagCompany,
  xx as F0TagDot,
  Wx as F0TagList,
  wx as F0TagPerson,
  bu as F0TagRaw,
  uo as F0TagStatus,
  Sx as F0TagTeam,
  qo as F0Text,
  Ky as F0TimelineRow,
  bv as F0WizardForm,
  Qx as GROUP_ID_SYMBOL,
  Dy as HomeLayout,
  ky as Layout,
  Rw as LineChart,
  Hx as OneFilterPicker,
  Iw as PieChart,
  Ad as PrivacyModeProvider,
  iy as ProductBlankslate,
  xw as ProductCard,
  rx as ProductModal,
  uy as ProductWidget,
  Ow as ProgressBarChart,
  Lw as ProgressBarDuo,
  kw as RadarChart,
  Cy as StandardLayout,
  nx as SurveyAnsweringForm,
  tx as SurveyFormBuilder,
  Yy as Tag,
  Gx as TagCounter,
  Ny as TwoColumnLayout,
  Lo as UpsellRequestResponseDialog,
  sx as UpsellingBanner,
  Po as UpsellingButton,
  ax as UpsellingPopover,
  Pw as VerticalBarChart,
  Cw as _RadarChart,
  zw as actionItemStatuses,
  qw as aiTranslations,
  Sy as avatarVariants,
  _x as buildTranslations,
  Iy as buttonDropdownModes,
  Ry as buttonDropdownSizes,
  Ey as buttonDropdownVariants,
  Ay as buttonSizes,
  Oy as buttonToggleSizes,
  Ly as buttonToggleVariants,
  Ty as buttonVariants,
  Xx as cardImageAspectRatios,
  Kx as cardImageFits,
  Yx as cardImageSizes,
  Vb as computeSectionEndIds,
  Jx as createAtlaskitDriver,
  ew as createDataSourceDefinition,
  Bd as createPageLayoutBlock,
  jd as createPageLayoutBlockGroup,
  lx as dataCollectionLocalStorageHandler,
  By as datepickerSizes,
  Qw as defaultTranslations,
  Uy as defineAvailableForm,
  Qy as describeFormSchema,
  jy as durationInputSizes,
  ym as durationUnits,
  Yr as evaluateRenderIf,
  ot as experimental,
  vt as f0FormField,
  ui as fieldsToSeconds,
  Pb as flattenElements,
  on as generateAnchorId,
  tw as getAnimationVariants,
  nw as getCanvasEntity,
  rw as getDataSourcePaginationType,
  kx as getEmojiLabel,
  nn as getF0Config,
  Zy as getSchemaDefinition,
  qy as hasF0Config,
  cc as inferFieldType,
  Mb as injectSectionEnds,
  sw as isInfiniteScrollPagination,
  aw as isPageBasedPagination,
  Ae as isZodType,
  Py as linkVariants,
  Cx as modules,
  Zw as oneIconSizes,
  ww as predefinedPresets,
  Yi as reconstructElements,
  $y as secondsToFields,
  ds as secondsToVisibleFields,
  Sw as selectSizes,
  My as tagDotColors,
  Xy as timelineRowStatuses,
  tt as unwrapZodSchema,
  iw as useAiChat,
  Uw as useAiChatTranslations,
  ow as useData,
  lw as useDataSource,
  cw as useDefaultCopilotActions,
  uw as useDndEvents,
  dw as useDraggable,
  fw as useDroppableList,
  Nx as useEmojiConfetti,
  Cv as useF0AiFormRegistry,
  hw as useF0Dialog,
  ns as useF0Form,
  Rc as useF0FormDefinition,
  mw as useGroups,
  pw as useMessageSourcesAction,
  gw as useOrchestratorThinkingAction,
  Nw as usePrivacyMode,
  Dx as useReducedMotion,
  vc as useSchemaDefinition,
  vw as useSelectable,
  Fx as useXRay,
  Ie as withDataTestId
};
