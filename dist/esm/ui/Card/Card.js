import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../../components/F0Icon/index.js";
import { Tooltip as n, TooltipContent as r, TooltipProvider as i, TooltipTrigger as a } from "../tooltip.js";
import o from "../../icons/app/ChevronRight.js";
import s from "../../icons/app/InfoCircleLine.js";
import { useI18n as c } from "../../lib/providers/i18n/i18n-provider.js";
import { Link as l } from "../../lib/linkHandler.js";
import * as u from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/ui/Card/Card.tsx
var p = u.forwardRef(({ className: t, href: n, onClick: r, disabled: i, children: a, ...o }, s) => {
	let { actions: u } = c();
	return /* @__PURE__ */ f("div", {
		ref: s,
		role: "article",
		className: e("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-4 shadow", (n || r) && !i && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", t),
		...o,
		onClick: () => {
			if (!i && !n && r) return r();
		},
		children: [n && !i && /* @__PURE__ */ d(l, {
			href: n,
			className: "absolute inset-0 block",
			tabIndex: 0,
			children: /* @__PURE__ */ d("span", {
				className: "sr-only",
				children: u.view
			})
		}), a]
	});
});
p.displayName = "Card";
var m = u.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ d("div", {
	ref: r,
	className: e("flex flex-row gap-1.5", t),
	...n
}));
m.displayName = "CardHeader";
var h = u.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ d("h3", {
	ref: r,
	className: e("text-base font-medium text-f1-foreground", t),
	...n
}));
h.displayName = "CardTitle";
var g = u.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ d("h3", {
	ref: r,
	className: e("line-clamp-1 text-base font-normal text-f1-foreground-secondary", t),
	...n
}));
g.displayName = "CardSubtitle";
var _ = u.forwardRef(({ className: o, content: c }, l) => /* @__PURE__ */ d("div", {
	ref: l,
	className: e("-ml-1 flex h-6 w-6 items-center justify-center", o),
	children: /* @__PURE__ */ d(i, { children: /* @__PURE__ */ f(n, { children: [/* @__PURE__ */ d(a, {
		className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
		"aria-label": c,
		children: /* @__PURE__ */ d(t, {
			icon: s,
			size: "md"
		})
	}), /* @__PURE__ */ d(r, { children: /* @__PURE__ */ d("p", { children: c }) })] }) })
}));
_.displayName = "CardInfo";
var v = u.forwardRef(({ className: n, title: r, icon: i = o, href: a, ...s }, c) => {
	let u = e("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-transparent bg-transparent", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", n), f = /* @__PURE__ */ d(t, {
		size: "sm",
		icon: i,
		className: "text-f1-icon-bold"
	});
	if (!a) {
		let { target: e, rel: t, download: n, type: i, ...a } = s;
		return /* @__PURE__ */ d("button", {
			ref: c,
			className: u,
			"aria-label": r,
			type: "button",
			...a,
			children: f
		});
	}
	return /* @__PURE__ */ d(l, {
		ref: c,
		className: u,
		role: "button",
		"aria-label": r,
		href: a,
		...s,
		children: f
	});
});
v.displayName = "CardLink";
var y = u.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ d("div", {
	ref: r,
	className: e("relative flex grow flex-col", t),
	...n
}));
y.displayName = "CardContent";
var b = u.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ d("div", {
	ref: r,
	className: e("flex items-center", t),
	...n
}));
b.displayName = "CardFooter";
var x = u.forwardRef(function({ className: t, ...n }, r) {
	return /* @__PURE__ */ d("div", {
		ref: r,
		className: e("flex text-3xl font-semibold", t),
		...n
	});
});
b.displayName = "CardComment";
//#endregion
export { p as Card, x as CardComment, y as CardContent, b as CardFooter, m as CardHeader, _ as CardInfo, v as CardLink, g as CardSubtitle, h as CardTitle };
