import { Item as e } from "../Item/index.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/experimental/Navigation/F0TableOfContent/ItemSectionHeader/StaticItemSectionHeader.tsx
function i({ item: i, children: a, isActive: o, sortable: s, hideChildrenCounter: c, canDropInside: l = !1, onDragOver: u, onDragLeave: d, onDrop: f, currentParentId: p, draggedItemId: m }) {
	return /* @__PURE__ */ r(t, { children: [/* @__PURE__ */ n(e, {
		item: i,
		counter: c ? void 0 : i.children?.length ?? 0,
		isActive: o,
		collapsible: !1,
		isExpanded: void 0,
		onToggleExpanded: void 0,
		sortable: s,
		onDragOver: u,
		onDragLeave: d,
		onDrop: f,
		canDropInside: l,
		currentParentId: p,
		draggedItemId: m
	}), a && /* @__PURE__ */ n("div", {
		className: "ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4",
		children: a
	})] });
}
//#endregion
export { i as StaticItemSectionHeader };
