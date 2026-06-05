import { jsxs as p, Fragment as b, jsx as o } from "react/jsx-runtime";
import { Item as f } from "../Item/index.js";
function v({
  item: e,
  children: r,
  isActive: d,
  sortable: i,
  hideChildrenCounter: l,
  canDropInside: n = !1,
  onDragOver: t,
  onDragLeave: a,
  onDrop: s,
  currentParentId: m,
  draggedItemId: c
}) {
  return /* @__PURE__ */ p(b, { children: [
    /* @__PURE__ */ o(
      f,
      {
        item: e,
        counter: l ? void 0 : e.children?.length ?? 0,
        isActive: d,
        collapsible: !1,
        isExpanded: void 0,
        onToggleExpanded: void 0,
        sortable: i,
        onDragOver: t,
        onDragLeave: a,
        onDrop: s,
        canDropInside: n,
        currentParentId: m,
        draggedItemId: c
      }
    ),
    r && /* @__PURE__ */ o("div", { className: "ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4", children: r })
  ] });
}
export {
  v as StaticItemSectionHeader
};
