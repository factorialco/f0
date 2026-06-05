import { jsx as v } from "react/jsx-runtime";
import { extractClosestEdge as D, attachClosestEdge as M } from "../../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js";
import { dropTargetForElements as N } from "../../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
import { useState as g, useRef as E, useMemo as q, useEffect as A } from "react";
import { useDraggable as G } from "../../../../lib/dnd/hooks.js";
import { cn as J } from "../../../../lib/utils.js";
import { PrimitiveItem as K } from "./PrimitiveItem.js";
import { motion as O } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function ee({
  item: e,
  counter: I,
  isActive: T,
  collapsible: w = !1,
  isExpanded: y = !1,
  onToggleExpanded: C = () => {
  },
  sortable: d,
  children: k,
  onDragOver: f,
  onDragLeave: h,
  onDrop: p,
  canDropInside: m = !1,
  currentParentId: R = null,
  justDropped: L = !1
}) {
  const [x, z] = g(!1), [H, Y] = g(!1), u = E(null), [S, c] = g(null), [j, l] = g(!1), a = E(null), B = q(
    () => ({
      kind: "toc-item",
      id: e.id,
      data: { item: e, currentParentId: R }
    }),
    [e.id, R, e]
  );
  return G({
    ref: u,
    payload: B,
    disabled: !d
  }), A(() => {
    if (!(!u.current || !d))
      return N({
        element: u.current,
        canDrop: ({ source: t }) => {
          const r = t.data;
          return r.kind === "toc-item" && r.id !== e.id;
        },
        getData: ({ input: t, element: r }) => {
          const n = r.getBoundingClientRect(), s = t.clientY - n.top, i = n.height * 0.6;
          return m && s > i ? { type: "toc-item-target", id: e.id, position: "inside" } : M(
            { type: "toc-item-target", id: e.id },
            {
              input: t,
              element: r,
              allowedEdges: ["top", "bottom"]
            }
          );
        },
        onDragEnter: ({ source: t }) => {
          if (t.data.id === e.id) {
            c(null), l(!1), a.current = null;
            return;
          }
        },
        onDrag: ({ self: t, source: r }) => {
          if (r.data.id === e.id) {
            c(null), l(!1), a.current = null;
            return;
          }
          const b = t.data, s = D(t.data);
          if (b.position === "inside") {
            const o = a.current;
            (!o || !o.isInside || o.edge !== null) && (l(!0), c(null), a.current = { edge: null, isInside: !0 }, f?.(e.id, "inside"));
          } else if (s && (s === "top" || s === "bottom")) {
            const o = s === "top" ? "before" : "after", i = a.current;
            !i || i.edge !== s || i.isInside !== !1 ? (c(s), l(!1), a.current = {
              edge: s,
              isInside: !1,
              lastReportTime: Date.now()
            }, f?.(e.id, o)) : Date.now() - (i.lastReportTime || 0) > 50 && (f?.(e.id, o), a.current = {
              ...i,
              lastReportTime: Date.now()
            });
          } else if (!s) {
            const o = a.current;
            if (o?.edge) {
              const i = o.edge === "top" ? "before" : "after";
              Date.now() - (o.lastReportTime || 0) > 50 && (f?.(e.id, i), a.current = {
                ...o,
                lastReportTime: Date.now()
              });
            }
          }
        },
        onDragLeave: () => {
          h?.();
        },
        onDrop: ({ self: t }) => {
          const r = t.data;
          let n = "after";
          r.position === "inside" ? n = "inside" : n = D(t.data) === "top" ? "before" : "after", c(null), l(!1), p && p(e.id, n);
        }
      });
  }, [e.id, d, m, f, h, p]), /* @__PURE__ */ v(
    O.div,
    {
      ref: u,
      className: J(
        "relative rounded-lg transition-colors",
        d && "cursor-grab active:cursor-grabbing",
        // Show subtle indicator bars (less prominent since we have placeholders)
        S === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5",
        S === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5",
        j && m && "bg-f1-background-hover/30",
        L && "bg-f1-background-selected"
      ),
      animate: {},
      transition: { duration: 0 },
      children: /* @__PURE__ */ v(
        K,
        {
          item: e,
          counter: I,
          isActive: T,
          sortable: d,
          collapsible: w,
          isExpanded: y,
          onToggleExpanded: C,
          open: x,
          setOpen: z,
          isHovered: H,
          setIsHovered: Y,
          children: k
        }
      )
    }
  );
}
export {
  ee as Item
};
