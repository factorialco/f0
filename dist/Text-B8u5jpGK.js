import { n as e, t } from "./OneEllipsis-DuhKMtYp.js";
import { t as n } from "./utils-CVzxZnoI.js";
import { n as r, t as i } from "./variants-BcEah5PS.js";
import { createElement as a, forwardRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/ui/Text/Text.tsx
var c = o(({ content: o, variant: c, align: l, className: u, as: d, ellipsis: f, noEllipsisTooltip: p, markdown: m, required: h, ...g }, _) => {
	let v = d ?? i[c ?? "body"], y = h ? /* @__PURE__ */ s("span", {
		className: "text-f1-foreground-critical",
		"aria-hidden": "true",
		children: " *"
	}) : null;
	if (f !== void 0) {
		let e = typeof f == "number" ? f : 1;
		return y ? a(v, {
			...g,
			className: n(r({
				variant: c,
				align: l
			}), u, "inline-flex gap-0.5"),
			ref: _
		}, /* @__PURE__ */ s(t, {
			lines: e,
			noTooltip: p,
			tag: "span",
			className: "min-w-0",
			markdown: m,
			children: o
		}), y) : /* @__PURE__ */ s(t, {
			ref: _,
			lines: e,
			noTooltip: p,
			tag: v,
			className: n(r({
				variant: c,
				align: l
			}), u),
			markdown: m,
			...g,
			children: o
		});
	}
	if (m) {
		let t = e(o);
		return y ? a(v, {
			...g,
			className: n(r({
				variant: c,
				align: l
			}), u),
			ref: _
		}, /* @__PURE__ */ s("span", { dangerouslySetInnerHTML: { __html: t } }), y) : a(v, {
			...g,
			className: n(r({
				variant: c,
				align: l
			}), u),
			ref: _,
			dangerouslySetInnerHTML: { __html: t }
		});
	}
	return a(v, {
		...g,
		className: n(r({
			variant: c,
			align: l
		}), u),
		ref: _
	}, o, y);
});
c.displayName = "Text";
//#endregion
export { c as t };
