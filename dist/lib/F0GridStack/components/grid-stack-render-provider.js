import { jsx as h } from "react/jsx-runtime";
import { GridStack as p } from "../../../node_modules/.pnpm/gridstack@12.3.3/node_modules/gridstack/dist/gridstack.js";
import G from "../../../_virtual/isEqual.js";
import { useRef as u, useCallback as m, useLayoutEffect as k, useMemo as R } from "react";
import { useGridStackContext as W } from "./grid-stack-context.js";
import { GridStackRenderContext as y } from "./grid-stack-render-context.js";
const a = /* @__PURE__ */ new WeakMap();
function j({ children: g }) {
  const {
    _gridStack: { value: e, set: c },
    options: n
  } = W(), l = u(/* @__PURE__ */ new Map()), s = u(null), i = u(n), d = m(
    (r, t) => {
      if (t.id && t.grid) {
        let o = a.get(t.grid);
        o || (o = /* @__PURE__ */ new Map(), a.set(t.grid, o)), o.set(t.id, r), l.current.set(t.id, r);
      }
    },
    []
  ), f = m(() => {
    if (s.current) {
      p.renderCB = d;
      const r = p.init(i.current, s.current);
      return r && i.current.handle && r.opts && (r.opts.handle = i.current.handle), r;
    }
    return null;
  }, [d]), C = (r, t) => {
    const { children: o, ...S } = r, { children: M, ...v } = t;
    return G(S, v);
  };
  return k(() => {
    if (!C(n, i.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), l.current.clear(), a.delete(e), i.current = n, c(null);
      } catch (r) {
        console.error("Error destroying gridstack", r);
      }
    else e && (i.current = n, n.handle && e.opts && (e.opts.handle = n.handle));
  }, [n, e, c]), k(() => {
    if (!e && s.current)
      try {
        c(f());
      } catch (r) {
        console.error("Error initializing gridstack", r);
      }
  }, [e, f, c]), /* @__PURE__ */ h(
    y.Provider,
    {
      value: R(
        () => ({
          getWidgetContainer: (r) => {
            if (e) {
              const t = a.get(e);
              if (t?.has(r))
                return t.get(r) || null;
            }
            return l.current.get(r) || null;
          }
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [e]
      ),
      children: /* @__PURE__ */ h("div", { ref: s, children: e ? g : null })
    }
  );
}
export {
  j as GridStackRenderProvider,
  a as gridWidgetContainersMap
};
