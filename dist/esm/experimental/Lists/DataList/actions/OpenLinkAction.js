import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ExternalLink.js";
import { Link as r } from "../../../../lib/linkHandler.js";
import { memo as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/actions/OpenLinkAction.tsx
var s = i(({ children: i, className: s, href: c, ...l }) => /* @__PURE__ */ o(r, {
	...l,
	target: "_blank",
	href: c,
	rel: "noopener noreferrer",
	className: e("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", s),
	children: [i, /* @__PURE__ */ a("div", {
		className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100",
		children: /* @__PURE__ */ a(t, {
			"aria-hidden": !0,
			icon: n,
			size: "md",
			color: "default"
		})
	})]
}));
s.displayName = "OpenLinkAction";
//#endregion
export { s as OpenLinkAction };
