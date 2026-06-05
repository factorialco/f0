import { jsxs as g, jsx as h } from "react/jsx-runtime";
import { useEffect as p, useRef as I, useState as x, useCallback as b } from "react";
import { useResizeObserver as C } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { cn as R } from "../../lib/utils.js";
function z(s, a) {
  const n = I(null), c = I(null), [o, m] = x({
    visibleItems: [],
    overflowItems: []
  });
  C({
    ref: n,
    onResize: () => {
      r();
    }
  });
  const f = b(
    (e, t, l) => t < l - 1 ? e + a : e,
    [a]
  ), u = b(() => {
    if (!c.current) return [];
    const e = c.current.children, t = [];
    for (let l = 0; l < e.length; l++) {
      const i = e[l].getBoundingClientRect().height;
      t.push(i);
    }
    return t;
  }, []), v = b(
    (e, t) => {
      let l = 0, i = 0;
      for (let d = 0; d < e.length; d++) {
        const w = i + e[d];
        if (w > t + 30) break;
        i = w, i = f(
          i,
          d,
          e.length
        ), l++;
      }
      return l;
    },
    [f]
  ), r = b(() => {
    if (!n.current || s.length === 0) return;
    const e = n.current.clientHeight, t = u(), l = v(
      t,
      e
    );
    m(l === 0 ? {
      visibleItems: [],
      overflowItems: s
    } : (i) => i.visibleItems.length === l && i.overflowItems.length === s.length - l ? i : {
      visibleItems: s.slice(0, l),
      overflowItems: s.slice(l)
    });
  }, [s, u, v]);
  return p(() => {
    r();
  }, [r]), {
    containerRef: n,
    measurementContainerRef: c,
    visibleItems: o.visibleItems,
    overflowItems: o.overflowItems
  };
}
const S = function({
  items: a,
  renderListItem: n,
  className: c,
  gap: o = 0,
  minSize: m,
  onVisibleItemsChange: f
}) {
  const { containerRef: u, measurementContainerRef: v, visibleItems: r } = z(a, o);
  return p(() => {
    f?.(r);
  }, [f, r]), /* @__PURE__ */ g(
    "div",
    {
      ref: u,
      className: R("relative flex h-full flex-col", c),
      style: {
        minHeight: `${m}px`
      },
      children: [
        /* @__PURE__ */ h(
          "div",
          {
            ref: v,
            "aria-hidden": "true",
            className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
            style: { gap: `${o}px` },
            "data-testid": "overflow-measurement-container",
            children: a.map((e, t) => /* @__PURE__ */ h("div", { "data-testid": "overflow-measurement-item", children: n(e, t, !1) }, `measure-${t}`))
          }
        ),
        /* @__PURE__ */ h(
          "div",
          {
            className: "flex flex-col",
            style: { gap: `${o}px` },
            "data-testid": "overflow-visible-container",
            children: r.map((e, t) => /* @__PURE__ */ h(
              "div",
              {
                className: "transition-all duration-150",
                "data-testid": "overflow-visible-item",
                children: n(e, t, !0)
              },
              `item-${t}`
            ))
          }
        )
      ]
    }
  );
};
S.displayName = "VerticalOverflowList";
export {
  S as VerticalOverflowList
};
