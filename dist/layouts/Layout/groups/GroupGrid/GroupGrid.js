import { jsx as S } from "react/jsx-runtime";
import { useCallback as N, useMemo as A, useState as I, useRef as m, useEffect as J } from "react";
import { F0GridStack as Q } from "../../../../lib/F0GridStack/F0GridStack.js";
import { cn as U } from "../../../../lib/utils.js";
import { motion as X } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const Y = (a, i, R) => /* @__PURE__ */ S("div", { children: a }), D = ({
  widgets: a = [],
  editMode: i = !1,
  onChange: R = () => {
  },
  WidgetWrapper: G = Y,
  main: P = !1,
  deps: s
}) => {
  const v = N(
    (r, n, c) => /* @__PURE__ */ S(
      X.div,
      {
        className: "h-full w-full",
        initial: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: {
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        },
        children: G(r, n, c)
      }
    ),
    [G]
  ), L = A(
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
  ), C = (r, n) => {
    if (typeof r.content == "function" && r.deps && n) {
      const c = {};
      return r.deps.forEach((t) => {
        typeof t == "string" && n[t] !== void 0 && (c[t] = n[t]);
      }), r.content(c);
    }
    return typeof r.content == "function" ? null : r.content;
  }, T = (r, n, c) => r.map((t) => {
    const k = C(t, c), u = {
      id: t.id,
      h: t.h ?? 1,
      w: t.w ?? 1,
      allowedSizes: t.availableSizes,
      noMove: !n,
      noResize: !n,
      locked: t.locked,
      meta: t.meta,
      _originalContent: k,
      content: v(k, t.meta, n)
    };
    return t.x !== void 0 && (u.x = t.x), t.y !== void 0 && (u.y = t.y), u;
  }), [q, b] = I(
    T(a, i)
  ), O = m(i), E = m(a), W = m(!1), p = m(/* @__PURE__ */ new Map()), j = m(a);
  j.current = a;
  const h = m(s), y = A(() => {
    const r = /* @__PURE__ */ new Map();
    return !s || Object.keys(s).length === 0 || a.forEach((n) => {
      if (n.deps && n.deps.length > 0) {
        const c = n.deps.map((t) => typeof t == "string" && s[t] !== void 0 ? s[t] : t).filter((t) => t !== null);
        r.set(n.id, c);
      }
    }), r;
  }, [a, s]), B = N(
    (r) => {
      b(r), W.current || R(
        r.map((n) => {
          const c = j.current.find(
            (t) => t.id === n.id
          );
          return {
            id: n.id,
            w: n.w ?? 1,
            h: n.h ?? 1,
            allowedSizes: n.allowedSizes,
            meta: n.meta,
            // Preserve the original content (function or static) from the widget prop
            content: typeof c?.content == "function" ? c.content : n._originalContent,
            x: n.x ?? 0,
            y: n.y ?? 0,
            locked: n.locked,
            deps: c?.deps
          };
        })
      ), W.current = !1;
    },
    [R]
  ), H = (r, n) => !r && !n ? !1 : !r || !n || r.length !== n.length ? !0 : r.some((c, t) => c !== n[t]);
  return J(() => {
    const r = O.current !== i, n = E.current !== a, c = h.current !== s && (h.current === void 0 || s === void 0 || Object.keys(h.current).length !== Object.keys(s).length || Object.keys(s).some(
      (e) => h.current?.[e] !== s[e]
    )), t = /* @__PURE__ */ new Map();
    a.forEach((e) => {
      if (e.deps && e.deps.length > 0) {
        const l = p.current.get(e.id), o = y.get(e.id);
        t.set(
          e.id,
          H(l, o)
        ), o ? p.current.set(e.id, o) : p.current.delete(e.id);
      }
    });
    const k = new Set(a.map((e) => e.id));
    p.current.forEach((e, l) => {
      k.has(l) || p.current.delete(l);
    });
    const u = Array.from(t.values()).some((e) => e) || c;
    r && !n && !u ? (W.current = !0, b(
      (e) => e.map((l) => {
        const o = a.find((_) => _.id === l.id);
        if (!o)
          return l;
        const f = C(o, s);
        return {
          ...l,
          noMove: !i,
          noResize: !i,
          locked: o.locked,
          meta: o.meta,
          _originalContent: f,
          content: v(
            f,
            o.meta,
            i
          )
        };
      })
    )) : (n || u) && b((e) => {
      const l = new Map(
        e.map((o) => [o.id, o])
      );
      return a.map((o) => {
        const f = l.get(o.id), _ = t.get(o.id) ?? !1;
        let x;
        _ || !f ? x = C(o, s) : x = f._originalContent ?? C(o, s);
        const z = {
          id: o.id,
          h: f?.h ?? o.h ?? 1,
          w: f?.w ?? o.w ?? 1,
          allowedSizes: o.availableSizes,
          noMove: !i,
          noResize: !i,
          locked: o.locked,
          meta: o.meta,
          _originalContent: x,
          content: v(x, o.meta, i)
        }, M = f?.x ?? o.x, F = f?.y ?? o.y;
        return M !== void 0 && (z.x = M), F !== void 0 && (z.y = F), z;
      });
    }), O.current = i, E.current = a, h.current = s;
  }, [
    a,
    i,
    v,
    y,
    s
  ]), /* @__PURE__ */ S(
    Q,
    {
      className: U(P && "h-full flex-1 overflow-auto"),
      options: L,
      onChange: B,
      widgets: q
    }
  );
};
D.displayName = "GroupGrid";
D.__isPageLayoutGroup = !0;
export {
  D as GroupGrid
};
