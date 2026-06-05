import { jsx as c } from "react/jsx-runtime";
import './F0GridStack.css';import '../../node_modules/.pnpm/gridstack@12.3.3/node_modules/gridstack/dist/gridstack.css';/* empty css                                                                                  */
import { useMemo as S } from "react";
import { GridStackProvider as R } from "./components/grid-stack-provider.js";
import { GridStackRender as x } from "./components/grid-stack-render.js";
import { GridStackRenderProvider as G } from "./components/grid-stack-render-provider.js";
/* empty css                */
const v = ({
  options: a,
  widgets: e,
  onChange: f,
  className: d,
  static: h,
  forcePositionSync: k
}) => {
  const u = S(() => JSON.stringify(
    e.map((o) => ({
      id: o.id,
      w: o.w,
      h: o.h,
      x: o.x,
      y: o.y,
      noMove: o.noMove,
      noResize: o.noResize,
      locked: o.locked,
      content: o.content?.toString() ?? "",
      _originalContent: o._originalContent?.toString() ?? "",
      allowedSizes: o.allowedSizes
    }))
  ), [e]), z = S(() => ({
    ...a,
    class: d
  }), [a, u, d]), y = (o, n, t) => {
    let i = t[0], r = 1 / 0;
    for (const s of t) {
      const l = s.w - o, m = s.h - n, p = l * l + m * m;
      p < r && (r = p, i = s);
    }
    return i;
  };
  return /* @__PURE__ */ c(
    R,
    {
      options: z,
      widgets: e,
      onResizeStop: (o, n) => {
        const t = n.gridstackNode;
        if (!t) return;
        const i = n.gridstackNode?.allowedSizes ?? [];
        if (i.length === 0)
          return;
        const r = y(t.w ?? 1, t.h ?? 1, i ?? []);
        (t.w !== r.w || t.h !== r.h) && t.grid?.update(n, { w: r.w, h: r.h });
      },
      onChange: f,
      static: h,
      forcePositionSync: k,
      children: /* @__PURE__ */ c(G, { children: /* @__PURE__ */ c(x, {}) })
    }
  );
};
v.displayName = "F0GridStack";
export {
  v as F0GridStack
};
