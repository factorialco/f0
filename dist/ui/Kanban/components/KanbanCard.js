import { jsxs as L, jsx as c, Fragment as x } from "react/jsx-runtime";
import { attachClosestEdge as R, extractClosestEdge as g } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js";
import { DropIndicator as T } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types_react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/box.js";
import { dropTargetForElements as F } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
import { useRef as b, useState as I, useEffect as N } from "react";
import { CardInternal as O } from "../../../components/F0Card/CardInternal.js";
import { useDraggable as j } from "../../../lib/dnd/hooks.js";
import { cn as E, focusRing as w } from "../../../lib/utils.js";
import { F0Link as P } from "../../../components/F0Link/F0Link.js";
const S = 'button, a[href], input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], [role="option"], [role="radio"], [role="switch"]', z = (r) => r instanceof HTMLElement ? !!r.closest(S) : !1;
function J({
  drag: r,
  id: i,
  index: l,
  total: k,
  laneId: u,
  draggable: d = !1,
  showIndicator: v = !0,
  disabledEdges: D = [],
  forcedEdge: f = null,
  ...n
}) {
  const s = b(null), m = b(null), [p, o] = I(null);
  j({
    ref: s,
    payload: { kind: r.type ?? "list-card", id: r.id, data: r.data }
  }), N(() => {
    if (s.current)
      return F({
        element: s.current,
        getData: ({ input: t, element: a }) => R(
          { type: "list-card-target", id: i, index: l, laneId: u },
          {
            input: t,
            element: a,
            allowedEdges: ["top", "bottom"]
          }
        ),
        onDragEnter: ({ self: t, source: a }) => {
          if (a?.data?.id === i) {
            o(null);
            return;
          }
          const e = g(t.data);
          o(e === "top" || e === "bottom" ? e : null);
        },
        onDrag: ({ self: t, source: a }) => {
          if (a?.data?.id === i) {
            o(null);
            return;
          }
          const e = g(t.data);
          o(e === "top" || e === "bottom" ? e : null);
        },
        onDragLeave: () => o(null),
        onDrop: () => o(null)
      });
  }, [i, l, u]);
  const C = l === 0, h = l === k - 1, y = (t) => {
    if (d && !z(t.target)) {
      if (n.onClick) {
        n.onClick(), t.preventDefault(), t.stopPropagation();
        return;
      }
      m.current && (m.current.click(), t.preventDefault(), t.stopPropagation());
    }
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: s,
      className: E(
        "group relative my-1",
        d && "cursor-grab active:cursor-grabbing",
        C && "mt-1.5",
        h && "mb-1.5"
      ),
      "data-kanban-card": "true",
      "data-index": l,
      "data-lane-id": u,
      onClick: y,
      children: [
        /* @__PURE__ */ c(O, { ...n, disableOverlayLink: d }),
        n.link && /* @__PURE__ */ c(
          P,
          {
            ref: m,
            href: n.link,
            className: E(
              "!z-1 pointer-events-none absolute inset-0 block rounded-xl",
              w()
            ),
            "aria-label": n.title,
            children: " "
          }
        ),
        v && (f ?? p) && /* @__PURE__ */ c(x, { children: (() => {
          const t = f ?? p;
          return D.includes(t) ? null : /* @__PURE__ */ c(
            T,
            {
              edge: t,
              type: "terminal-no-bleed",
              gap: "4px"
            }
          );
        })() })
      ]
    }
  );
}
export {
  J as KanbanCard
};
