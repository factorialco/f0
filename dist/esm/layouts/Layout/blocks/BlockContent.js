import { cn as e } from "../../../lib/utils.js";
import { createPageLayoutBlock as t } from "../utils.js";
import { Block as n } from "./Block/Block.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
var a = t("BlockContent", ({ title: t = "", description: a, titleLevel: o = "h2", children: s, className: c, ...l }) => {
	if (!t) return null;
	let u = o;
	return /* @__PURE__ */ i(n, {
		...l,
		className: e("space-y-4", c),
		children: [/* @__PURE__ */ i("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ r(u, {
				className: e("font-semibold text-f1-foreground", {
					"text-2xl": o === "h1",
					"text-xl": o === "h2",
					"text-lg": o === "h3",
					"text-base": o === "h4",
					"text-sm": o === "h5",
					"text-xs": o === "h6"
				}),
				children: t
			}), a && /* @__PURE__ */ r("p", {
				className: "text-sm text-f1-foreground-secondary",
				children: a
			})]
		}), /* @__PURE__ */ r("div", {
			className: "flex-1",
			children: s
		})]
	});
});
//#endregion
export { a as BlockContent };
