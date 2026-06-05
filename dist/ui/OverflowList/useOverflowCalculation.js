import { useRef as h, useState as E, useCallback as g, useEffect as w } from "react";
import { useResizeObserver as B } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
const O = 20;
function G(t, a, n) {
  const o = h(null), R = h(null), C = h(null), m = h(null), d = h(null), [x, S] = E({
    visibleItems: [],
    overflowItems: []
  }), [M, y] = E(!1);
  B({
    ref: o,
    onResize: () => {
      v();
    }
  });
  const z = g(() => {
    if (n?.itemsWidth)
      return Array.isArray(n.itemsWidth) ? n.itemsWidth : Array(t.length).fill(n.itemsWidth);
    if (!m.current)
      return [];
    const i = m.current.children, c = [];
    for (let l = 0; l < i.length; l++) {
      const r = i[l].getBoundingClientRect().width;
      c.push(r);
    }
    return c;
  }, [n?.itemsWidth, t.length]), f = g(
    ({ itemWidths: i, availableWidth: c }) => {
      let l = 0, r = 0;
      for (let u = 0; u < i.length; u++) {
        const e = r + i[u];
        if (e > c) break;
        r = e, l++;
      }
      return Math.max(
        n?.min ?? 0,
        Math.min(l, n?.max ?? t.length)
      );
    },
    [n?.max, n?.min, t.length]
  ), v = g(() => {
    if (t.length === 0) {
      S((s) => s.visibleItems.length === 0 && s.overflowItems.length === 0 ? s : { visibleItems: [], overflowItems: [] });
      return;
    }
    if (!o.current) return;
    const i = o.current.clientWidth, c = R.current?.offsetWidth || C.current?.offsetWidth || 32, l = z(), r = l.map((s) => s + a), u = i - c - a;
    let e = f({
      itemWidths: r,
      availableWidth: u
    });
    e >= t.length && (n?.max === void 0 || t.length <= n.max) && (e = f({
      itemWidths: r,
      availableWidth: i
    }));
    const A = e >= t.length ? i : u, W = d.current;
    if (W !== null && e > W) {
      const s = f({
        itemWidths: r,
        availableWidth: A - O
      });
      s < e && (e = Math.max(s, W));
    }
    d.current = e;
    let I = e === 0 ? [] : t.slice(0, e), b = e === 0 ? t : t.slice(e);
    b.length === 1 && I.length && l.length > 0 && c === l[l.length - 1] - a && (I = t, b = []), S({
      visibleItems: I,
      overflowItems: b
    });
  }, [t, a, z, f, n?.max]);
  return w(() => {
    d.current = null;
  }, [t.length]), w(() => {
    v();
  }, [v]), w(() => {
    y(!0);
  }, []), {
    containerRef: o,
    overflowButtonRef: R,
    customOverflowIndicatorRef: C,
    measurementContainerRef: m,
    visibleItems: x.visibleItems,
    overflowItems: x.overflowItems,
    isInitialized: M
  };
}
export {
  G as useOverflowCalculation
};
