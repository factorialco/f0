import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { F0Icon as t } from "../F0Icon/index.js";
import n from "../../icons/app/ExternalLink.js";
import { Action as r } from "../../ui/Action/Action.js";
import { forwardRef as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/F0Link/F0Link.tsx
var c = i(function({ className: e, children: i, stopPropagation: c = !1, "aria-label": l, href: u, variant: d = "link", ...f }, p) {
	let { target: m } = f, h = m === "_blank", g = (e) => {
		c && e.stopPropagation(), f.onClick?.(e);
	}, _ = u === void 0 ? {
		...f,
		onClick: g,
		"aria-label": l,
		className: e
	} : {
		...f,
		href: u,
		onClick: g,
		rel: h ? "noopener noreferrer" : void 0,
		"aria-label": l,
		className: e
	};
	return /* @__PURE__ */ s(r, {
		ref: p,
		..._,
		variant: d,
		children: [/* @__PURE__ */ o("span", { children: i }), h && /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(t, {
			icon: n,
			size: "sm",
			"aria-hidden": !0
		}), /* @__PURE__ */ o("span", {
			className: "sr-only",
			children: " (opens in new tab)"
		})] })]
	});
});
c.displayName = "F0Link";
var l = e(c);
//#endregion
export { l as F0Link };
