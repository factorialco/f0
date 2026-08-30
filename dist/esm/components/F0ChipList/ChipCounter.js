import { focusRing as e } from "../../lib/utils.js";
import { Popover as t, PopoverContent as n, PopoverTrigger as r } from "../../ui/popover.js";
import { ScrollArea as i, ScrollBar as a } from "../../ui/scrollarea.js";
import { Chip as o } from "../OneChip/index.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/F0ChipList/ChipCounter.tsx
var u = ({ count: u, list: d }) => {
	let [f, p] = s(!1), m = /* @__PURE__ */ c(o, { label: `+${u}` });
	return d?.length ? /* @__PURE__ */ l(t, {
		open: f,
		onOpenChange: p,
		children: [/* @__PURE__ */ c(r, {
			asChild: !0,
			children: /* @__PURE__ */ c("button", {
				className: e("inline-flex flex-shrink-0 items-center"),
				children: m
			})
		}), /* @__PURE__ */ c(n, {
			className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
			align: "end",
			children: /* @__PURE__ */ l(i, {
				className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
				children: [d.map((e, t) => /* @__PURE__ */ c("div", {
					className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
					children: /* @__PURE__ */ c(o, { ...e })
				}, t)), /* @__PURE__ */ c(a, {
					orientation: "vertical",
					className: "[&_div]:bg-f1-background"
				})]
			})
		})]
	}) : m;
};
u.displayName = "ChipCounter";
//#endregion
export { u as ChipCounter };
