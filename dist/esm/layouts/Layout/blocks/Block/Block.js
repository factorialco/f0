import { cn as e } from "../../../../lib/utils.js";
import { Dropdown as t } from "../../../../experimental/Navigation/Dropdown/index.js";
import { forwardRef as n, useMemo as r } from "react";
import { cva as i } from "cva";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/layouts/Layout/blocks/Block/Block.tsx
var s = i({
	base: "flex w-full flex-col p-4",
	variants: { variant: {
		default: "",
		"full-width": "px-0",
		full: "p-0"
	} }
}), c = (e) => (e || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({ type: "separator" }), e.push(...t), e), []), l = (e) => Array.isArray(e) ? e.every((e) => "onClick" in e) ? [{ items: e }] : e : [e], u = n(({ children: n, variant: i = "default", className: u, draggable: d = !1, onDragStart: f, onDragEnd: p, onDrop: m, dragId: h, primaryAction: g, ..._ }, v) => {
	let y = r(() => l(_.actions || []), [_.actions]), b = r(() => y.flatMap((e) => e.items), [y]), x = r(() => b.length > 0 || !!g, [b, g]);
	return /* @__PURE__ */ o("div", {
		ref: v,
		className: e(s({ variant: i }), "relative", u),
		draggable: d,
		onDragStart: f,
		onDragEnd: p,
		onDrop: m,
		"data-drag-id": h,
		..._,
		children: [x && /* @__PURE__ */ o("div", {
			className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
			children: [!!g && g, b.length > 0 && /* @__PURE__ */ a(t, {
				items: c(y),
				"data-testid": "actions-dropdown"
			})]
		}), /* @__PURE__ */ a("div", {
			"data-testid": "content",
			children: n
		})]
	});
});
u.displayName = "Block", u.__isPageLayoutBlock = !0;
//#endregion
export { u as Block, c as actionsToLayoutBlockActionItems };
