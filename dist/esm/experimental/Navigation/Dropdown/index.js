import { DataTestIdWrapper as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { F0Icon as r } from "../../../components/F0Icon/index.js";
import i from "../../../icons/app/EllipsisHorizontal.js";
import { Link as a } from "../../../lib/linkHandler.js";
import { ButtonInternal as o } from "../../../components/F0Button/internal.js";
import { DropdownItemContent as s } from "./DropdownItem.js";
import { DropdownInternal as c } from "./internal.js";
import { Drawer as l, DrawerContent as u, DrawerOverlay as d, DrawerTrigger as f } from "../../../ui/drawer.js";
import { useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/experimental/Navigation/Dropdown/index.tsx
var g = [], _ = t("Dropdown", (t) => {
	let { open: n, onOpenChange: r, dataTestId: i, ...a } = t, o = g.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, a);
	return /* @__PURE__ */ m(e, {
		dataTestId: i,
		children: /* @__PURE__ */ m(c, {
			...o,
			open: n,
			onOpenChange: r,
			align: t.align || "end"
		})
	});
}), v = t("MobileDropdown", ({ items: t, children: c, dataTestId: g }) => {
	let [_, v] = p(!1);
	return /* @__PURE__ */ m(e, {
		dataTestId: g,
		children: /* @__PURE__ */ h(l, {
			open: _,
			onOpenChange: v,
			children: [
				/* @__PURE__ */ m(f, {
					asChild: !0,
					children: c || /* @__PURE__ */ m(o, {
						label: "Other actions",
						icon: i,
						variant: "outline",
						size: "lg",
						pressed: _,
						noTitle: !0
					})
				}),
				/* @__PURE__ */ m(d, { className: "bg-f1-background-overlay" }),
				/* @__PURE__ */ m(u, {
					className: "bg-f1-background",
					children: /* @__PURE__ */ m("div", {
						className: "flex flex-col px-2 pb-3 pt-2",
						children: t.map((e, t) => e.type === "separator" ? /* @__PURE__ */ m("div", { className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary" }, `separator-${t}`) : e.type === "label" ? /* @__PURE__ */ m("span", {
							className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
							children: e.text
						}, `label-${t}`) : e.href ? /* @__PURE__ */ m(a, {
							href: e.href,
							className: n("flex w-full items-start gap-1.5", e.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
							children: /* @__PURE__ */ m(s, { item: e })
						}, `link-${t}`) : /* @__PURE__ */ h("button", {
							onClick: (t) => {
								t.preventDefault(), t.stopPropagation(), e.onClick?.(), v(!1);
							},
							className: "flex w-full cursor-pointer items-center gap-2 p-3",
							children: [e.icon && /* @__PURE__ */ m("span", {
								className: n("h-5 w-5 text-f1-icon", e.critical && "text-f1-icon-critical"),
								children: /* @__PURE__ */ m(r, {
									icon: e.icon,
									size: "md"
								})
							}), /* @__PURE__ */ m("span", {
								className: n("font-medium", e.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
								children: e.label
							})]
						}, e.label))
					})
				})
			]
		})
	});
});
//#endregion
export { _ as Dropdown, v as MobileDropdown };
