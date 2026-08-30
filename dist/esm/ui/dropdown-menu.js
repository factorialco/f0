"use client";
import { cn as e } from "../lib/utils.js";
import { F0Icon as t } from "../components/F0Icon/F0Icon.js";
import * as n from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-dropdown-menu";
import { Check as o, ChevronRight as s, Circle as c } from "lucide-react";
//#region src/ui/dropdown-menu.tsx
var l = a.Root, u = a.Trigger, d = a.Group, f = a.Portal, p = a.Sub, m = a.RadioGroup, h = n.forwardRef(({ className: n, inset: o, children: c, ...l }, u) => /* @__PURE__ */ i(a.SubTrigger, {
	ref: u,
	className: e("flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", o && "pl-8", n),
	...l,
	children: [c, /* @__PURE__ */ r(t, {
		icon: s,
		size: "md",
		className: "ml-auto"
	})]
}));
h.displayName = a.SubTrigger.displayName;
var g = n.forwardRef(({ className: t, ...n }, i) => /* @__PURE__ */ r(a.SubContent, {
	ref: i,
	className: e("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
	...n
}));
g.displayName = a.SubContent.displayName;
var _ = n.forwardRef(({ className: t, sideOffset: n = 4, container: i, ...o }, s) => /* @__PURE__ */ r(a.Portal, {
	container: i ?? void 0,
	children: /* @__PURE__ */ r(a.Content, {
		ref: s,
		sideOffset: n,
		className: e("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", t),
		...o
	})
}));
_.displayName = a.Content.displayName;
var v = n.forwardRef(({ className: t, inset: n, ...i }, o) => /* @__PURE__ */ r(a.Item, {
	onClick: (e) => {
		e.stopPropagation();
	},
	ref: o,
	className: e("relative flex cursor-default select-none items-center rounded py-2 pl-3 pr-5 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "only:after:inset-y-1 only:after:h-auto", "focus:outline-none focus:ring-0 focus:ring-transparent", n && "pl-8", t),
	...i
}));
v.displayName = a.Item.displayName;
var y = n.forwardRef(({ className: t, children: n, checked: s, ...c }, l) => /* @__PURE__ */ i(a.CheckboxItem, {
	ref: l,
	className: e("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	checked: s,
	...c,
	children: [/* @__PURE__ */ r("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ r(a.ItemIndicator, { children: /* @__PURE__ */ r(o, { className: "h-4 w-4" }) })
	}), n]
}));
y.displayName = a.CheckboxItem.displayName;
var b = n.forwardRef(({ className: t, children: n, ...o }, s) => /* @__PURE__ */ i(a.RadioItem, {
	ref: s,
	className: e("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
	...o,
	children: [/* @__PURE__ */ r("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ r(a.ItemIndicator, { children: /* @__PURE__ */ r(c, { className: "h-2 w-2 fill-current" }) })
	}), n]
}));
b.displayName = a.RadioItem.displayName;
var x = n.forwardRef(({ className: t, inset: n, ...i }, o) => /* @__PURE__ */ r(a.Label, {
	ref: o,
	className: e("px-2 py-1.5 text-sm font-semibold", n && "pl-8", t),
	...i
}));
x.displayName = a.Label.displayName;
var S = n.forwardRef(({ className: t, ...n }, i) => /* @__PURE__ */ r(a.Separator, {
	ref: i,
	className: e("-mx-1 my-1 h-px bg-f1-border-secondary", t),
	...n
}));
S.displayName = a.Separator.displayName;
var C = ({ className: t, ...n }) => /* @__PURE__ */ r("span", {
	className: e("ml-auto text-sm tracking-widest opacity-60", t),
	...n
});
C.displayName = "DropdownMenuShortcut";
//#endregion
export { l as DropdownMenu, y as DropdownMenuCheckboxItem, _ as DropdownMenuContent, d as DropdownMenuGroup, v as DropdownMenuItem, x as DropdownMenuLabel, f as DropdownMenuPortal, m as DropdownMenuRadioGroup, b as DropdownMenuRadioItem, S as DropdownMenuSeparator, C as DropdownMenuShortcut, p as DropdownMenuSub, g as DropdownMenuSubContent, h as DropdownMenuSubTrigger, u as DropdownMenuTrigger };
