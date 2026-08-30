import { cn as e, focusRing as t } from "../lib/utils.js";
import { F0Icon as n } from "../components/F0Icon/index.js";
import r from "../icons/app/ChevronLeft.js";
import i from "../icons/app/ChevronRight.js";
import a from "../icons/app/EllipsisHorizontal.js";
import * as o from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/ui/pagination.tsx
var c = ({ className: t, ...n }) => /* @__PURE__ */ s("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: e("flex w-full justify-center", t),
	...n
});
c.displayName = "Pagination";
var l = o.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ s("div", {
	ref: r,
	className: e("flex list-none flex-row items-center gap-1", t),
	...n
}));
l.displayName = "PaginationContent";
var u = o.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ s("div", {
	ref: r,
	className: e("", t),
	...n
}));
u.displayName = "PaginationItem";
var d = ({ className: n, isActive: r, ...i }) => /* @__PURE__ */ s("a", {
	"aria-current": r ? "page" : void 0,
	className: e("flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover", r && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover", t(), n),
	...i
});
d.displayName = "PaginationLink";
var f = ({ className: t, ...i }) => /* @__PURE__ */ s(d, {
	role: "button",
	"aria-label": "Go to previous page",
	className: e("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
	...i,
	children: /* @__PURE__ */ s(n, { icon: r })
});
f.displayName = "PaginationPrevious";
var p = ({ className: t, ...r }) => /* @__PURE__ */ s(d, {
	role: "button",
	"aria-label": "Go to next page",
	className: e("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
	...r,
	children: /* @__PURE__ */ s(n, { icon: i })
});
p.displayName = "PaginationNext";
var m = ({ className: t, ...r }) => /* @__PURE__ */ s("span", {
	role: "presentation",
	"aria-hidden": !0,
	className: e("flex h-9 w-9 items-center justify-center", t),
	...r,
	children: /* @__PURE__ */ s(n, { icon: a })
});
m.displayName = "PaginationEllipsis";
//#endregion
export { c as Pagination, l as PaginationContent, m as PaginationEllipsis, u as PaginationItem, d as PaginationLink, p as PaginationNext, f as PaginationPrevious };
