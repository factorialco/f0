import { useReducedMotion as e } from "../../../../lib/a11y.js";
import { Collapsible as t, CollapsibleContent as n } from "../../../../ui/collapsible.js";
import { Item as r } from "../Item/index.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/experimental/Navigation/F0TableOfContent/ItemSectionHeader/CollapsibleItemSectionHeader.tsx
function s({ item: s, children: c, isActive: l, isExpanded: u, onToggleExpanded: d, sortable: f, hideChildrenCounter: p, canDropInside: m = !1, onDragOver: h, onDragLeave: g, onDrop: _, currentParentId: v, draggedItemId: y }) {
	let b = e();
	return /* @__PURE__ */ a(t, {
		open: u,
		onOpenChange: (e) => {
			e !== u && d?.(s.id);
		},
		children: [/* @__PURE__ */ i(r, {
			item: s,
			counter: p ? void 0 : s.children?.length ?? 0,
			isActive: l,
			collapsible: !0,
			isExpanded: u,
			onToggleExpanded: d,
			sortable: f,
			onDragOver: h,
			onDragLeave: g,
			onDrop: _,
			canDropInside: m,
			currentParentId: v,
			draggedItemId: y
		}), /* @__PURE__ */ i(n, {
			forceMount: !0,
			className: "flex flex-col gap-1",
			children: /* @__PURE__ */ i(o.div, {
				initial: !1,
				animate: {
					height: u ? "auto" : 0,
					opacity: +!!u,
					visibility: u ? "visible" : "hidden"
				},
				transition: {
					duration: b ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				children: /* @__PURE__ */ i("div", {
					className: "ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5",
					children: c
				})
			})
		})]
	});
}
//#endregion
export { s as CollapsibleItemSectionHeader };
