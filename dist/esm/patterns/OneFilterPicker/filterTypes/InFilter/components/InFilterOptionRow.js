"use client";
import { cn as e, focusRing as t } from "../../../../../lib/utils.js";
import { OneEllipsis as n } from "../../../../../lib/OneEllipsis/OneEllipsis.js";
import r from "../../../../../icons/app/ChevronDown.js";
import i from "../../../../../icons/app/ChevronRight.js";
import { useI18n as a } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../../components/F0Button/F0Button.js";
import { hasSelectedDescendant as s, optionMatchesSearch as c } from "./option-utils.js";
import { InFilterOptionCheckbox as l } from "./InFilterOptionCheckbox.js";
import { cacheLabel as u, cacheNestedLabel as d } from "../useLoadOptions.js";
import { useCallback as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterOptionRow.tsx
function g({ option: _, isSelected: v, onToggle: y, isCompactMode: b, depth: x, onFilterChange: S, allFiltersValue: C, cacheKey: w, searchTerm: T, autoExpand: E }) {
	let [D, O] = p(!1), k = a(), A = !!_.children?.options.length, j = D || E && A, M = _.children?.filterKey, N = M && C ? C[M] ?? [] : [], P = f((e, t) => {
		if (!M || !S) return;
		let n = N.includes(e);
		if (!n) {
			u(w, e, t);
			let n = `${_.label} > ${t}`;
			d(M, e, n);
		}
		let r = n ? N.filter((t) => t !== e) : [...N, e];
		S(M, r);
	}, [
		M,
		N,
		S,
		w,
		_.label
	]), F = A && s(_, C), I = k.t(j ? "actions.collapseItem" : "actions.expandItem", { title: _.label });
	return /* @__PURE__ */ h("div", {
		className: e("w-full", x === 0 && !b && "px-2", x === 0 && "border-0 border-b border-solid border-f1-border-secondary last:border-b-0"),
		children: [/* @__PURE__ */ h("div", {
			className: "flex flex-row items-center overflow-hidden min-w-0",
			style: { paddingLeft: `${x * 24}px` },
			children: [A && /* @__PURE__ */ h("div", {
				className: "relative shrink-0",
				children: [/* @__PURE__ */ m(o, {
					variant: "ghost",
					size: "sm",
					onClick: () => O((e) => !e),
					icon: j ? r : i,
					label: I,
					"aria-label": F ? `${I}. ${k.status.selected.singular}` : I,
					"aria-expanded": j,
					hideLabel: !0
				}), F && !j && /* @__PURE__ */ m("span", {
					"aria-hidden": "true",
					className: "absolute -right-px -top-px h-2 w-2 rounded-full bg-f1-background-selected-bold"
				})]
			}), /* @__PURE__ */ m("div", {
				className: e("flex min-w-0 flex-1 cursor-pointer appearance-none items-center gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary", b && "py-1 pr-1", t()),
				children: /* @__PURE__ */ h("div", {
					className: "flex min-w-0 flex-1 items-center justify-between gap-1",
					onClick: y,
					children: [/* @__PURE__ */ m("span", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ m(n, { children: _.label })
					}), /* @__PURE__ */ m(l, {
						label: _.label,
						isSelected: v,
						onToggle: y
					})]
				})
			})]
		}), j && _.children && /* @__PURE__ */ m("div", { children: _.children.options.filter((e) => !T || c(e, T)).map((e) => {
			let t = N.includes(e.value);
			return /* @__PURE__ */ m(g, {
				option: e,
				isSelected: t,
				onToggle: () => P(e.value, e.label),
				isCompactMode: b,
				depth: x + 1,
				onFilterChange: S,
				allFiltersValue: C,
				cacheKey: w,
				searchTerm: T,
				autoExpand: E
			}, String(e.value));
		}) })]
	});
}
//#endregion
export { g as InFilterOptionRow };
