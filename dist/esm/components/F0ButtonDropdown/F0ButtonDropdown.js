import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { F0Icon as r } from "../F0Icon/index.js";
import i from "../../icons/app/ChevronDown.js";
import { useI18n as a } from "../../lib/providers/i18n/i18n-provider.js";
import { actionVariants as o, buttonSizeVariants as s } from "../../ui/Action/variants.js";
import { Action as c } from "../../ui/Action/Action.js";
import { DropdownInternal as l } from "../../experimental/Navigation/Dropdown/internal.js";
import { useMemo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/F0ButtonDropdown/F0ButtonDropdown.tsx
var m = (e) => Array.isArray(e) ? e.every(h) ? [{ items: e }] : e : [e];
function h(e) {
	return "value" in e;
}
var g = ({ onClick: e, value: h, items: g, size: _, variant: v, disabled: y, loading: b, tooltip: x }) => {
	let S = a(), [C, w] = d(!1), T = u(() => m(g), [g]), E = u(() => T.flatMap((e) => e.items), [T]), D = u(() => h || E[0]?.value, [h, E]), O = u(() => E.find((e) => e.value === D), [D, E]), k = () => {
		let t = E.find((e) => e.value === D);
		t && e(D, t);
	}, A = u(() => T.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.filter((e) => e.value !== D).map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), w(!1);
		}
	}))), t), []), [
		T,
		e,
		D
	]), j = _ === "sm" ? "[&_.main]:w-6" : _ === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
	return O && /* @__PURE__ */ f("div", {
		className: t(y && "opacity-30"),
		children: /* @__PURE__ */ f(c, {
			onClick: k,
			variant: v,
			size: _,
			disabled: y,
			loading: b,
			"data-testid": "button-main",
			"aria-label": O.label,
			prepend: O.icon && /* @__PURE__ */ f(r, { icon: O.icon }),
			className: "rounded-r-none after:rounded-r-none disabled:opacity-100",
			tooltip: {
				label: x,
				description: O.label
			},
			appendOutside: /* @__PURE__ */ f(l, {
				items: A,
				align: "end",
				open: C && !y,
				onOpenChange: (e) => {
					y || w(e);
				},
				children: /* @__PURE__ */ f("button", {
					className: t(o({
						variant: v,
						pressed: C && !y
					}), s({ size: _ }), "-translate-x-px rounded-l-none px-0 after:rounded-l-none disabled:opacity-100", j, n()),
					disabled: y,
					"data-testid": "button-menu",
					"data-pressed": C && !y,
					children: /* @__PURE__ */ p("div", {
						className: "main flex items-center justify-center gap-1",
						children: [/* @__PURE__ */ f("span", {
							className: "sr-only",
							children: S.actions.more
						}), /* @__PURE__ */ f(r, {
							icon: i,
							size: _ === "sm" ? "sm" : "md"
						})]
					})
				})
			}),
			children: O.label
		})
	});
}, _ = ({ onClick: e, trigger: t, value: n, items: a, size: o, variant: s, disabled: p, loading: h, tooltip: g }) => {
	let [_, v] = d(!1), y = u(() => m(a), [a]), b = u(() => y.flatMap((e) => e.items), [y]), x = u(() => b.find((e) => e.value === n), [n, b]), S = t || x?.label || b[0]?.label, C = x ? {
		label: g,
		description: x.label
	} : g, w = u(() => y.map((e) => e.items).reduce((t, n) => (t.length > 0 && t.push({ type: "separator" }), t.push(...n.map((t) => ({
		...t,
		onClick: () => {
			e(t.value, t), v(!1);
		}
	}))), t), []), [y, e]);
	return S ? /* @__PURE__ */ f(l, {
		items: w,
		align: "end",
		open: _ && !p,
		onOpenChange: (e) => {
			p || v(e);
		},
		children: /* @__PURE__ */ f(c, {
			variant: s,
			size: o,
			disabled: p,
			loading: h,
			"data-testid": "button-dropdown-trigger",
			"aria-label": S,
			prepend: x?.icon && /* @__PURE__ */ f(r, { icon: x.icon }),
			append: /* @__PURE__ */ f(r, {
				icon: i,
				size: o === "sm" ? "sm" : "md"
			}),
			pressed: _ && !p,
			tooltip: C,
			children: S
		})
	}) : null;
}, v = e((e) => (e.mode ?? "split") === "dropdown" ? /* @__PURE__ */ f(_, {
	onClick: e.onClick,
	trigger: "trigger" in e ? e.trigger : void 0,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}) : /* @__PURE__ */ f(g, {
	onClick: e.onClick,
	value: "value" in e ? e.value : void 0,
	items: e.items,
	size: e.size,
	variant: e.variant,
	disabled: e.disabled,
	loading: e.loading,
	tooltip: e.tooltip
}));
//#endregion
export { v as F0ButtonDropdown };
