import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Check.js";
import r from "../../../../icons/app/Ellipsis.js";
import { ButtonInternal as i } from "../../../../components/F0Button/internal.js";
import { DropdownMenu as a, DropdownMenuContent as o, DropdownMenuGroup as s, DropdownMenuItem as c, DropdownMenuLabel as l, DropdownMenuPortal as u, DropdownMenuSeparator as d, DropdownMenuSub as f, DropdownMenuSubContent as p, DropdownMenuSubTrigger as m, DropdownMenuTrigger as h } from "../../../../ui/dropdown-menu.js";
import { Switch as g } from "../../../Forms/Fields/Switch/index.js";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/experimental/Navigation/F0TableOfContent/Item/ItemDropDown.tsx
function y(r, i) {
	if ("type" in r) {
		if (r.type === "separator") return /* @__PURE__ */ _(d, {}, `sep-${i}`);
		if (r.type === "label") return /* @__PURE__ */ _(l, {
			className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
			children: r.text
		}, `label-${i}`);
		if (r.type === "toggle") return /* @__PURE__ */ _(s, { children: /* @__PURE__ */ _(c, {
			className: "!pb-2.5 pr-4",
			onClick: (e) => {
				e.preventDefault(), r.onCheckedChange(!r.checked);
			},
			children: /* @__PURE__ */ v("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					r.icon && /* @__PURE__ */ _(t, {
						icon: r.icon,
						color: "default"
					}),
					/* @__PURE__ */ _("span", {
						className: "flex-1",
						children: r.label
					}),
					/* @__PURE__ */ _(g, {
						title: r.label,
						checked: r.checked,
						onCheckedChange: r.onCheckedChange,
						hideLabel: !0
					})
				]
			})
		}) }, `toggle-${i}`);
		if (r.type === "submenu") return /* @__PURE__ */ _(s, { children: /* @__PURE__ */ v(f, { children: [/* @__PURE__ */ _(m, {
			className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
			children: /* @__PURE__ */ v("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					r.icon && /* @__PURE__ */ _(t, {
						icon: r.icon,
						color: "default"
					}),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-base font-medium",
						children: r.label
					}),
					r.selectedLabel && /* @__PURE__ */ _("span", {
						className: "mr-1 text-base text-f1-foreground-secondary",
						children: r.selectedLabel
					})
				]
			})
		}), /* @__PURE__ */ _(u, { children: /* @__PURE__ */ _(p, { children: r.children.map((e, t) => y(e, t)) }) })] }) }, `submenu-${i}`);
	}
	let a = r;
	return /* @__PURE__ */ _(c, {
		onClick: a.onClick,
		className: e(a.critical && "text-f1-foreground-critical"),
		children: /* @__PURE__ */ v("div", {
			className: "flex w-full flex-row items-center gap-2",
			children: [
				a.icon && /* @__PURE__ */ _(t, { icon: a.icon }),
				/* @__PURE__ */ _("span", {
					className: "flex-1",
					children: a.label
				}),
				a.selected && /* @__PURE__ */ _(t, {
					icon: n,
					color: "default"
				})
			]
		})
	}, `item-${i}`);
}
function b({ otherActions: e, open: t, setOpen: n, disabled: s }) {
	return e.some((e) => "type" in e && (e.type === "toggle" || e.type === "submenu" || e.type === "label")), /* @__PURE__ */ v(a, {
		open: t,
		onOpenChange: n,
		children: [/* @__PURE__ */ _(h, {
			tabIndex: -1,
			asChild: !0,
			children: /* @__PURE__ */ _(i, {
				icon: r,
				label: "Actions",
				hideLabel: !0,
				variant: "ghost",
				pressed: t,
				size: "sm",
				disabled: s
			})
		}), /* @__PURE__ */ _(o, {
			className: "w-80",
			align: "start",
			children: e.map((e, t) => y(e, t))
		})]
	});
}
//#endregion
export { b as ItemDropDown };
