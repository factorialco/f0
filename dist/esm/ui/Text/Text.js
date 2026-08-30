import { cn as e } from "../../lib/utils.js";
import { parseMarkdown as t } from "../../lib/markdown.js";
import { OneEllipsis as n } from "../../lib/OneEllipsis/OneEllipsis.js";
import { defaultTag as r, textVariants as i } from "./variants.js";
import { createElement as a, forwardRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/ui/Text/Text.tsx
var c = o(({ content: o, variant: c, align: l, className: u, as: d, ellipsis: f, noEllipsisTooltip: p, markdown: m, required: h, ...g }, _) => {
	let v = d ?? r[c ?? "body"], y = h ? /* @__PURE__ */ s("span", {
		className: "text-f1-foreground-critical",
		"aria-hidden": "true",
		children: " *"
	}) : null;
	if (f !== void 0) {
		let t = typeof f == "number" ? f : 1;
		return y ? a(v, {
			...g,
			className: e(i({
				variant: c,
				align: l
			}), u, "inline-flex gap-0.5"),
			ref: _
		}, /* @__PURE__ */ s(n, {
			lines: t,
			noTooltip: p,
			tag: "span",
			className: "min-w-0",
			markdown: m,
			children: o
		}), y) : /* @__PURE__ */ s(n, {
			ref: _,
			lines: t,
			noTooltip: p,
			tag: v,
			className: e(i({
				variant: c,
				align: l
			}), u),
			markdown: m,
			...g,
			children: o
		});
	}
	if (m) {
		let n = t(o);
		return y ? a(v, {
			...g,
			className: e(i({
				variant: c,
				align: l
			}), u),
			ref: _
		}, /* @__PURE__ */ s("span", { dangerouslySetInnerHTML: { __html: n } }), y) : a(v, {
			...g,
			className: e(i({
				variant: c,
				align: l
			}), u),
			ref: _,
			dangerouslySetInnerHTML: { __html: n }
		});
	}
	return a(v, {
		...g,
		className: e(i({
			variant: c,
			align: l
		}), u),
		ref: _
	}, o, y);
});
c.displayName = "Text";
//#endregion
export { c as Text };
