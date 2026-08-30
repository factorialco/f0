import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import { CopyAction as n } from "./actions/CopyAction.js";
import { NavigateAction as r } from "./actions/NavigateAction.js";
import { OpenLinkAction as i } from "./actions/OpenLinkAction.js";
import { forwardRef as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/ItemContainer.tsx
var c = a((n, r) => {
	let { text: i, leftIcon: a, className: c, action: u = { type: "noop" } } = n;
	return /* @__PURE__ */ o("li", {
		className: "flex rounded font-medium text-f1-foreground *:flex-1",
		ref: r,
		children: /* @__PURE__ */ s(l, {
			action: u,
			className: e("flex items-center gap-1.5 p-1.5", c),
			children: [a && (typeof a == "function" ? a({}) : /* @__PURE__ */ o(t, {
				icon: a,
				size: "md",
				"aria-hidden": "true"
			})), /* @__PURE__ */ o("div", {
				className: "line-clamp-5 flex-1 whitespace-pre-line text-left",
				children: i
			})]
		})
	});
});
c.displayName = "ItemContainer";
var l = ({ children: e, action: t, ...a }) => {
	let s = t.type;
	switch (s) {
		case "copy": return /* @__PURE__ */ o(n, {
			...t,
			...a,
			children: e
		});
		case "navigate": return /* @__PURE__ */ o(r, {
			...t,
			...a,
			children: e
		});
		case "open-link": return /* @__PURE__ */ o(i, {
			...t,
			...a,
			children: e
		});
		case "noop": return /* @__PURE__ */ o("div", {
			...a,
			children: e
		});
		default: return s;
	}
};
//#endregion
export { c as ItemContainer };
