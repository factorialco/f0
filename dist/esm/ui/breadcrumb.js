import { cn as e } from "../lib/utils.js";
import { Link as t } from "../lib/linkHandler.js";
import { forwardRef as n, useId as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { AnimatePresence as o, LayoutGroup as s } from "motion/react";
import { ChevronRight as c, MoreHorizontal as l } from "lucide-react";
import { Slot as u } from "@radix-ui/react-slot";
//#region src/ui/breadcrumb.tsx
var d = n(({ ...e }, t) => /* @__PURE__ */ i("nav", {
	ref: t,
	"aria-label": "breadcrumb",
	...e
}));
d.displayName = "Breadcrumb";
var f = n(({ className: t, children: n, ...a }, c) => {
	let l = r();
	return /* @__PURE__ */ i("ol", {
		ref: c,
		className: e("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary", t),
		...a,
		children: /* @__PURE__ */ i(s, {
			id: l,
			children: /* @__PURE__ */ i(o, {
				initial: !1,
				children: n
			})
		})
	});
});
f.displayName = "BreadcrumbList";
var p = ({ className: t, ...n }) => /* @__PURE__ */ i("li", {
	className: e("inline-flex items-center gap-0.5 pr-1", t),
	...n
});
p.displayName = "BreadcrumbItem";
var m = n(({ asChild: n, className: r, ...a }, o) => /* @__PURE__ */ i(n ? u : t, {
	ref: o,
	className: e("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", r),
	...a
}));
m.displayName = "BreadcrumbLink";
var h = n(({ className: t, ...n }, r) => /* @__PURE__ */ i("span", {
	ref: r,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: e("truncate px-1.5 py-0.5 text-f1-foreground", t),
	...n
}));
h.displayName = "BreadcrumbPage";
var g = ({ children: t, className: n, ...r }) => /* @__PURE__ */ i("li", {
	role: "presentation",
	"aria-hidden": "true",
	className: e("flex align-bottom", n),
	...r,
	children: t ?? /* @__PURE__ */ i(c, {})
});
g.displayName = "BreadcrumbSeparator";
var _ = ({ className: t, ...n }) => /* @__PURE__ */ a("span", {
	role: "presentation",
	"aria-hidden": "true",
	className: e("flex h-9 w-9 items-center justify-center", t),
	...n,
	children: [/* @__PURE__ */ i(l, { className: "h-4 w-4" }), /* @__PURE__ */ i("span", {
		className: "sr-only",
		children: "More"
	})]
});
_.displayName = "BreadcrumbElipssis";
//#endregion
export { d as Breadcrumb, _ as BreadcrumbEllipsis, p as BreadcrumbItem, m as BreadcrumbLink, f as BreadcrumbList, h as BreadcrumbPage, g as BreadcrumbSeparator };
