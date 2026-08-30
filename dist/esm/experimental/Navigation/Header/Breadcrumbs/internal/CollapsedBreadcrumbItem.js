import { DropdownInternal as e } from "../../../Dropdown/internal.js";
import { BreadcrumbItem as t } from "../../../../../ui/breadcrumb.js";
import { BreadcrumbSeparator as n } from "./BreadcrumbSeparator.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/CollapsedBreadcrumbItem.tsx
var o = r(({ className: r, items: o }, s) => /* @__PURE__ */ i(t, {
	ref: s,
	className: r,
	children: /* @__PURE__ */ a("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ i(n, {}), /* @__PURE__ */ i(e, {
			items: o,
			children: /* @__PURE__ */ i("button", {
				className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
				children: "..."
			})
		})]
	})
}));
o.displayName = "CollapsedBreadcrumbItem";
//#endregion
export { o as CollapsedBreadcrumbItem };
