import { cn as e } from "../lib/utils.js";
import * as t from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/table.tsx
var r = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("div", {
	className: "relative w-full",
	children: /* @__PURE__ */ n("table", {
		ref: i,
		className: e("w-full caption-bottom border-spacing-0 border-0 border-none text-base", t),
		...r
	})
}));
r.displayName = "Table";
var i = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("thead", {
	ref: i,
	className: e("relative min-h-10 [&_tr]:hover:bg-transparent", "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", t),
	...r
}));
i.displayName = "TableHeader";
var a = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("tbody", {
	ref: i,
	className: e("border-0", t),
	...r
}));
a.displayName = "TableBody";
var o = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("tfoot", {
	ref: i,
	className: e("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", t),
	...r
}));
o.displayName = "TableFooter";
var s = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("tr", {
	ref: i,
	className: e("group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover", t),
	...r
}));
s.displayName = "TableRow";
var c = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("th", {
	ref: i,
	className: e("relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6", "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent", t),
	...r
}));
c.displayName = "TableHead";
var l = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("td", {
	ref: i,
	className: e("relative min-h-[48px] whitespace-nowrap px-3 pb-[9px] pt-2 align-top first:pl-6 last:pr-6", "[&:has([role=checkbox])]:px-2", t),
	...r
}));
l.displayName = "TableCell";
var u = t.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ n("caption", {
	ref: i,
	className: e("text-muted-foreground mt-4 text-sm", t),
	...r
}));
u.displayName = "TableCaption";
//#endregion
export { r as Table, a as TableBody, u as TableCaption, l as TableCell, o as TableFooter, c as TableHead, i as TableHeader, s as TableRow };
