import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/ChevronRight.js";
import { Link as r, isExternalHref as i } from "../../../lib/linkHandler.js";
import { F0Button as a } from "../../../components/F0Button/F0Button.js";
import { F0Avatar as o } from "../../../components/avatars/F0Avatar/index.js";
import { DropdownInternal as s } from "../../../experimental/Navigation/Dropdown/internal.js";
import { useWidgetIsWide as c } from "../../../experimental/Widgets/Widget/index.js";
import { Fragment as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/sds/Home/HomeListItem/index.tsx
var m = e("pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center gap-1 rounded-r-md pl-16 pr-2", "bg-gradient-to-l from-f1-background from-60% to-transparent", "opacity-0 transition-opacity motion-reduce:transition-none", "group-hover:pointer-events-auto group-hover:opacity-100", "group-focus-within:pointer-events-auto group-focus-within:opacity-100"), h = "pointer-events-auto opacity-100";
function g({ avatar: g, avatarSize: _ = "lg", left: v, title: y, subtitle: b, subtitleCritical: x = !1, description: S, right: C, actions: w, unread: T = !1, href: E, showChevron: D = !1 }) {
	let O = !!w?.length, k = c(), [A, j] = u(null), M = v ?? (g ? /* @__PURE__ */ f(o, {
		avatar: g,
		size: _
	}) : null), N = /* @__PURE__ */ p(d, { children: [
		M ? /* @__PURE__ */ p("div", {
			className: "relative shrink-0",
			children: [M, T ? /* @__PURE__ */ f("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" }) : null]
		}) : null,
		/* @__PURE__ */ p("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ p("div", {
				className: "flex min-w-0 items-baseline gap-1",
				children: [/* @__PURE__ */ f("span", {
					className: "truncate font-medium text-f1-foreground",
					children: y
				}), b ? /* @__PURE__ */ p("span", {
					className: e("truncate", x ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"),
					children: ["· ", b]
				}) : null]
			}), S ? /* @__PURE__ */ f("div", {
				className: "truncate text-f1-foreground-secondary",
				children: S
			}) : null]
		}),
		C,
		D ? /* @__PURE__ */ f(t, {
			icon: n,
			size: "sm",
			color: "secondary"
		}) : null
	] }), P = e("flex w-full items-center gap-3 rounded-md p-2 text-left", E && "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring", O ? "group-hover:bg-f1-background-tertiary group-focus-within:bg-f1-background-tertiary" : E && "hover:bg-f1-background-tertiary", A && "bg-f1-background-tertiary"), F = E ? /* @__PURE__ */ f(r, {
		href: E,
		className: e(P, "no-underline"),
		...i(E) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: N
	}) : /* @__PURE__ */ f("div", {
		className: P,
		children: N
	});
	return O ? /* @__PURE__ */ p("div", {
		className: "group relative",
		children: [F, /* @__PURE__ */ f("div", {
			className: e(m, A && h),
			children: w?.map((e) => {
				let t = /* @__PURE__ */ f(a, {
					icon: e.icon,
					label: e.label,
					hideLabel: !!e.icon && !e.showLabel,
					variant: e.critical ? "critical" : "outline",
					size: k ? "md" : "sm",
					onClick: e.onClick
				});
				return e.items ? /* @__PURE__ */ f(s, {
					items: e.items,
					align: "end",
					open: A === e.label,
					onOpenChange: (t) => j((n) => t ? e.label : n === e.label ? null : n),
					children: t
				}, e.label) : /* @__PURE__ */ f(l, { children: t }, e.label);
			})
		})]
	}) : F;
}
//#endregion
export { g as HomeListItem };
