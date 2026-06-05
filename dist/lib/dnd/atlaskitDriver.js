import { attachClosestEdge as s } from "../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js";
import { combine as d } from "../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js";
import { monitorForElements as c, dropTargetForElements as p, draggable as i } from "../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
function m(n) {
  const o = /* @__PURE__ */ new Set();
  return d(
    c({
      canMonitor(e) {
        return e.source.data.instanceId === n;
      },
      onDragStart(e) {
        const r = e.source.data;
        o.forEach((t) => t({ phase: "start", source: r }));
      },
      onDrop(e) {
        const r = e.source.data;
        o.forEach((t) => t({ phase: "drop", source: r }));
      },
      onDropTargetChange(e) {
        const r = e.source.data;
        o.forEach((t) => t({ phase: "over", source: r }));
      }
    })
  ), {
    registerDraggable(e, { payload: r, disabled: t, handle: a }) {
      return t ? () => {
      } : i({
        element: e,
        getInitialData: () => ({ ...r, instanceId: n }),
        dragHandle: a ?? void 0
      });
    },
    registerDroppable(e, { id: r }) {
      return p({
        element: e,
        getData: ({ input: t, element: a }) => s(
          { type: "list-droppable", index: 0, id: r },
          {
            input: t,
            element: a,
            allowedEdges: ["top", "bottom"]
          }
        )
      });
    },
    subscribe(e) {
      return o.add(e), () => o.delete(e);
    }
  };
}
export {
  m as createAtlaskitDriver
};
