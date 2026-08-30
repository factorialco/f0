import { CollapsibleItemSectionHeader as e } from "./CollapsibleItemSectionHeader.js";
import { StaticItemSectionHeader as t } from "./StaticItemSectionHeader.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Navigation/F0TableOfContent/ItemSectionHeader/index.tsx
function r({ item: r, children: i, isActive: a, collapsible: o, isExpanded: s, onToggleExpanded: c, sortable: l, hideChildrenCounter: u, canDropInside: d = !1, onDragOver: f, onDragLeave: p, onDrop: m, currentParentId: h, draggedItemId: g }) {
	return o ? /* @__PURE__ */ n(e, {
		item: r,
		isActive: a,
		isExpanded: s,
		onToggleExpanded: c,
		sortable: l,
		hideChildrenCounter: u,
		canDropInside: d,
		onDragOver: f,
		onDragLeave: p,
		onDrop: m,
		currentParentId: h,
		draggedItemId: g,
		children: i
	}) : /* @__PURE__ */ n(t, {
		item: r,
		isActive: a,
		sortable: l,
		hideChildrenCounter: u,
		canDropInside: d,
		onDragOver: f,
		onDragLeave: p,
		onDrop: m,
		currentParentId: h,
		draggedItemId: g,
		children: i
	});
}
//#endregion
export { r as ItemSectionHeader };
