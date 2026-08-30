import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/EllipsisHorizontal.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { Link as r } from "../../../lib/linkHandler.js";
import { ButtonInternal as i } from "../../../components/F0Button/internal.js";
import { TooltipWrapper as a } from "../../../lib/tooltip-wrapper.js";
import { DropdownMenu as o, DropdownMenuContent as s, DropdownMenuItem as c, DropdownMenuLabel as l, DropdownMenuSeparator as u, DropdownMenuTrigger as d } from "../../../ui/dropdown-menu.js";
import { DropdownItemContent as f } from "./DropdownItem.js";
import p, { useEffect as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/experimental/Navigation/Dropdown/internal.tsx
var v = ({ item: t }) => {
	let { label: n, icon: i, avatar: o, description: s, disabledTooltip: l, href: u, critical: d, disabled: p, ...m } = t, h = e("flex items-start gap-1.5 w-full", d && "text-f1-foreground-critical"), _ = /* @__PURE__ */ g(c, {
		asChild: !0,
		className: e(h, "cursor-pointer"),
		disabled: p,
		children: u ? /* @__PURE__ */ g(r, {
			href: u,
			className: e(h, "text-f1-foreground no-underline hover:cursor-pointer"),
			...m,
			children: /* @__PURE__ */ g(f, { item: t })
		}) : /* @__PURE__ */ g("div", {
			...m,
			className: h,
			children: /* @__PURE__ */ g(f, { item: t })
		})
	});
	return p && l ? /* @__PURE__ */ g(a, {
		tooltip: l,
		children: /* @__PURE__ */ g("span", {
			className: "block w-full cursor-not-allowed",
			children: _
		})
	}) : _;
};
function y(e, t) {
	return e.type === "separator" ? /* @__PURE__ */ g(u, {}, t) : e.type === "label" ? /* @__PURE__ */ g(l, {
		className: "flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary",
		children: e.text
	}, t) : /* @__PURE__ */ g(v, { item: {
		...e,
		onClick: () => {
			setTimeout(() => {
				e.onClick?.();
			}, 200);
		}
	} }, t);
}
function b({ items: e, icon: r = t, align: a = "start", size: c, children: l, open: u, onOpenChange: f, label: v, disabled: b, ...x }) {
	let S = n(), [C, w] = h(!1), T = u !== void 0 && f !== void 0, E = T ? u : C, D = T ? f : w;
	m(() => {
		b && E && D(!1);
	}, [
		b,
		E,
		D
	]);
	let O = !b && E, k = (e) => {
		D(e);
	}, A = l ? p.isValidElement(l) ? p.cloneElement(l, {
		disabled: l.props.disabled ?? b,
		"aria-disabled": l.props["aria-disabled"] ?? (b ? !0 : void 0)
	}) : l : /* @__PURE__ */ g(i, {
		...x,
		hideLabel: !v,
		icon: r,
		size: c,
		label: v ?? S.actions.toggleDropdownMenu,
		variant: "outline",
		pressed: O,
		compact: !v,
		noAutoTooltip: !0,
		noTitle: !0,
		disabled: b
	});
	return /* @__PURE__ */ _(o, {
		open: O,
		onOpenChange: k,
		children: [/* @__PURE__ */ g(d, {
			asChild: !0,
			disabled: b,
			children: A
		}), /* @__PURE__ */ g(s, {
			align: a,
			children: e.map((e, t) => y(e, t))
		})]
	});
}
//#endregion
export { b as DropdownInternal };
