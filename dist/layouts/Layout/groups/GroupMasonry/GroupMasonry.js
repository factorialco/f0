import { jsx as r, jsxs as D } from "react/jsx-runtime";
import { useSensors as I, useSensor as m, DndContext as C, DragOverlay as G, KeyboardSensor as _, PointerSensor as b } from "../../../../node_modules/.pnpm/@dnd-kit_core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js";
import { SortableContext as E, arrayMove as M, sortableKeyboardCoordinates as j } from "../../../../node_modules/.pnpm/@dnd-kit_sortable@10.0.0_@dnd-kit_core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js";
import { useDeepCompareEffect as w } from "../../../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as f } from "react";
import { cn as K } from "../../../../lib/utils.js";
import { SortableBlock as p } from "./components/SortableBlock.js";
const u = ({
  blocks: s,
  sortable: N = !1,
  onSort: P = () => {
  },
  main: x = !1
}) => {
  const [n, l] = f([]);
  w(() => {
    l(
      s.map((e, o) => ({
        id: e.id ?? o.toString(),
        render: e.render
      }))
    );
  }, [s]);
  const [t, c] = f(null), S = I(
    m(b),
    m(_, {
      coordinateGetter: j
    })
  ), h = (e) => {
    c(e.active.id);
  }, g = (e) => {
    const { active: o, over: d } = e;
    c(null), d && o.id !== d.id && l((i) => {
      const v = i.findIndex((a) => a.id === o.id), y = i.findIndex((a) => a.id === d.id);
      return M(i, v, y);
    });
  };
  return /* @__PURE__ */ r("div", { className: K("flex flex-wrap items-stretch gap-4", x && "flex-1"), children: /* @__PURE__ */ D(
    C,
    {
      sensors: S,
      onDragStart: h,
      onDragEnd: g,
      children: [
        /* @__PURE__ */ r(E, { items: n, children: n.map((e) => /* @__PURE__ */ r(p, { id: e.id, children: e.render }, e.id)) }),
        /* @__PURE__ */ r(G, { children: t ? /* @__PURE__ */ r(p, { id: t, children: n.find((e) => e.id === t)?.render }) : null })
      ]
    }
  ) });
};
u.displayName = "GroupMasonry";
u.__isPageLayoutGroup = !0;
export {
  u as GroupMasonry
};
