import { jsx as j } from "react/jsx-runtime";
import { CollapsibleItemSectionHeader as b } from "./CollapsibleItemSectionHeader.js";
import { StaticItemSectionHeader as k } from "./StaticItemSectionHeader.js";
function y({
  item: t,
  children: m,
  isActive: f,
  collapsible: l,
  isExpanded: r,
  onToggleExpanded: u,
  sortable: o,
  hideChildrenCounter: S,
  canDropInside: i = !1,
  onDragOver: p,
  onDragLeave: H,
  onDrop: e,
  currentParentId: x,
  draggedItemId: c
}) {
  return l ? /* @__PURE__ */ j(
    b,
    {
      item: t,
      isActive: f,
      isExpanded: r,
      onToggleExpanded: u,
      sortable: o,
      hideChildrenCounter: S,
      canDropInside: i,
      onDragOver: p,
      onDragLeave: H,
      onDrop: e,
      currentParentId: x,
      draggedItemId: c,
      children: m
    }
  ) : /* @__PURE__ */ j(
    k,
    {
      item: t,
      isActive: f,
      sortable: o,
      hideChildrenCounter: S,
      canDropInside: i,
      onDragOver: p,
      onDragLeave: H,
      onDrop: e,
      currentParentId: x,
      draggedItemId: c,
      children: m
    }
  );
}
export {
  y as ItemSectionHeader
};
