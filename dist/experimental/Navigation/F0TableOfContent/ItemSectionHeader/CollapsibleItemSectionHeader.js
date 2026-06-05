import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useReducedMotion as v } from "../../../../lib/a11y.js";
import { Collapsible as C, CollapsibleContent as y } from "../../../../ui/collapsible.js";
import { Item as M } from "../Item/index.js";
import { motion as g } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function H({
  item: r,
  children: l,
  isActive: t,
  isExpanded: o,
  onToggleExpanded: i,
  sortable: n,
  hideChildrenCounter: c,
  canDropInside: s = !1,
  onDragOver: a,
  onDragLeave: m,
  onDrop: f,
  currentParentId: u,
  draggedItemId: b
}) {
  const d = v();
  return /* @__PURE__ */ p(
    C,
    {
      open: o,
      onOpenChange: (h) => {
        h !== o && i?.(r.id);
      },
      children: [
        /* @__PURE__ */ e(
          M,
          {
            item: r,
            counter: c ? void 0 : r.children?.length ?? 0,
            isActive: t,
            collapsible: !0,
            isExpanded: o,
            onToggleExpanded: i,
            sortable: n,
            onDragOver: a,
            onDragLeave: m,
            onDrop: f,
            canDropInside: s,
            currentParentId: u,
            draggedItemId: b
          }
        ),
        /* @__PURE__ */ e(y, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ e(
          g.div,
          {
            initial: !1,
            animate: {
              height: o ? "auto" : 0,
              opacity: o ? 1 : 0,
              visibility: o ? "visible" : "hidden"
            },
            transition: {
              duration: d ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            children: /* @__PURE__ */ e("div", { className: "ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5", children: l })
          }
        ) })
      ]
    }
  );
}
export {
  H as CollapsibleItemSectionHeader
};
