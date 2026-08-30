import { cn as e } from "../lib/utils.js";
import { Skeleton as t } from "./skeleton.js";
import { withSkeleton as n } from "../lib/skeleton.js";
import * as r from "react";
import { useId as i } from "react";
import { cva as a } from "cva";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { LayoutGroup as c, motion as l } from "motion/react";
import * as u from "@radix-ui/react-navigation-menu";
//#region src/ui/tab-navigation.tsx
function d(e, t) {
	let { asChild: n, children: i } = e;
	if (!n) return typeof t == "function" ? t(i) : t;
	let a = r.Children.only(i);
	return r.cloneElement(a, { children: typeof t == "function" ? t(a.props.children) : t });
}
var f = a({
	base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-page py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
	variants: { secondary: {
		true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
		false: "bg-f1-background-transparent pt-1"
	} },
	defaultVariants: { secondary: !1 }
}), p = r.forwardRef(({ className: t, children: n, secondary: r, ...a }, l) => {
	let d = i();
	return /* @__PURE__ */ s(u.Root, {
		ref: l,
		...a,
		asChild: !1,
		className: "relative",
		children: [/* @__PURE__ */ o("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }), /* @__PURE__ */ o(c, {
			id: d,
			children: /* @__PURE__ */ o(u.List, {
				className: e(f({ secondary: r }), t),
				children: n
			})
		})]
	});
});
p.displayName = "TabNavigation";
var m = a({
	base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
	variants: {
		secondary: {
			true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary dark:group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
			false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
		},
		disabled: { true: "pointer-events-none text-f1-foreground-disabled" }
	},
	defaultVariants: {
		secondary: !1,
		disabled: !1
	}
}), h = r.forwardRef(function({ asChild: t, disabled: n, active: r, className: i, children: a, secondary: c, ...f }, p) {
	return /* @__PURE__ */ o(u.Item, {
		className: "flex",
		children: /* @__PURE__ */ o(u.Link, {
			"data-active": r ? "true" : void 0,
			"aria-disabled": n || void 0,
			className: e("group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", n ? "pointer-events-none" : ""),
			ref: p,
			onSelect: () => {},
			asChild: t,
			...f,
			children: d({
				asChild: t,
				children: a
			}, (t) => /* @__PURE__ */ s("span", {
				className: e("text-f1-foreground-secondary ring-1 ring-inset ring-transparent", m({
					secondary: c,
					disabled: n
				}), i),
				children: [t, r && !c && /* @__PURE__ */ o(l.div, {
					layoutId: "underline",
					className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
					transition: {
						type: "spring",
						bounce: .2,
						duration: .5
					}
				})]
			}))
		})
	});
}), g = n(h, ({ className: n }) => /* @__PURE__ */ o("li", {
	className: "list-none",
	children: /* @__PURE__ */ o(t, {
		className: e("mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent", n),
		children: "\xA0"
	})
}));
//#endregion
export { p as TabNavigation, g as TabNavigationLink };
