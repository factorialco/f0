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
function g(e, t = !1) {
	return typeof e == "string" ? e ? [{
		text: e,
		critical: t
	}] : [] : (e ?? []).filter((e) => e.text);
}
function _(e) {
	return g(e).map((e) => e.text).join(" · ");
}
function v({ avatar: _, avatarSize: v = "lg", left: y, title: b, subtitle: x, subtitleCritical: S = !1, description: C, descriptionCritical: w = !1, right: T, actions: E, unread: D = !1, href: O, showChevron: k = !1 }) {
	let A = !!E?.length, j = c(), [M, N] = u(null), P = y ?? (_ ? /* @__PURE__ */ f(o, {
		avatar: _,
		size: v
	}) : null), F = g(C, w), I = /* @__PURE__ */ p(d, { children: [
		P ? /* @__PURE__ */ p("div", {
			className: "relative shrink-0",
			children: [P, D ? /* @__PURE__ */ f("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" }) : null]
		}) : null,
		/* @__PURE__ */ p("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ p("div", {
				className: "flex min-w-0 items-baseline gap-1",
				children: [/* @__PURE__ */ f("span", {
					className: "truncate font-medium text-f1-foreground",
					children: b
				}), x ? /* @__PURE__ */ p("span", {
					className: e("truncate", S ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"),
					children: ["· ", x]
				}) : null]
			}), F.length > 0 ? /* @__PURE__ */ f("div", {
				className: e("truncate", F.length === 1 && F[0].critical ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"),
				children: F.map((e, t) => /* @__PURE__ */ p(l, { children: [t > 0 ? /* @__PURE__ */ f("span", {
					className: "text-f1-foreground-secondary",
					children: " · "
				}) : null, /* @__PURE__ */ f("span", {
					className: e.critical ? "text-f1-foreground-critical" : "text-f1-foreground-secondary",
					children: e.text
				})] }, t))
			}) : null]
		}),
		T,
		k ? /* @__PURE__ */ f(t, {
			icon: n,
			size: "sm",
			color: "secondary"
		}) : null
	] }), L = e("flex w-full items-center gap-3 rounded-md p-2 text-left", O && "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring", A ? "group-hover:bg-f1-background-tertiary group-focus-within:bg-f1-background-tertiary" : O && "hover:bg-f1-background-tertiary", M && "bg-f1-background-tertiary"), R = O ? /* @__PURE__ */ f(r, {
		href: O,
		className: e(L, "no-underline"),
		...i(O) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: I
	}) : /* @__PURE__ */ f("div", {
		className: L,
		children: I
	});
	return A ? /* @__PURE__ */ p("div", {
		className: "group relative",
		children: [R, /* @__PURE__ */ f("div", {
			className: e(m, M && h),
			children: E?.map((e) => {
				let t = /* @__PURE__ */ f(a, {
					icon: e.icon,
					label: e.label,
					hideLabel: !!e.icon && !e.showLabel,
					variant: e.critical ? "critical" : "outline",
					size: j ? "md" : "sm",
					onClick: e.onClick
				});
				return e.items ? /* @__PURE__ */ f(s, {
					items: e.items,
					align: "end",
					open: M === e.label,
					onOpenChange: (t) => N((n) => t ? e.label : n === e.label ? null : n),
					children: t
				}, e.label) : /* @__PURE__ */ f(l, { children: t }, e.label);
			})
		})]
	}) : R;
}
//#endregion
export { v as HomeListItem, g as descriptionParts, _ as descriptionText };
