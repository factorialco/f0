"use client";
import { cn as e } from "../../lib/utils.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../components/F0Button/F0Button.js";
import { FilterContent as r } from "../OneFilterPicker/components/FilterContent.js";
import { FilterList as i } from "../OneFilterPicker/components/FilterList.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/F0FilterPickerContent/internal.tsx
function s({ filters: s, tempFilters: c, selectedFilterKey: l, onFilterSelect: u, onFilterChange: d, onApply: f, onClear: p, height: m, showApplyButton: h = !0, applyButtonLabel: g, className: _ }) {
	let v = t();
	return /* @__PURE__ */ o("div", {
		className: e("flex flex-col transition-all", "max-h-[calc(var(--radix-popover-content-available-height)-15px)] min-h-[250px]", _),
		style: { height: m },
		children: [/* @__PURE__ */ o("div", {
			className: "flex min-h-0 flex-1",
			children: [/* @__PURE__ */ a(i, {
				definition: s,
				tempFilters: c,
				selectedFilterKey: l,
				onFilterSelect: u,
				onClickApplyFilters: f
			}), l && /* @__PURE__ */ a("div", {
				className: "min-w-[340px] flex-1",
				children: /* @__PURE__ */ a(r, {
					selectedFilterKey: l,
					definition: s,
					tempFilters: c,
					onFilterChange: d
				})
			})]
		}), h || p ? /* @__PURE__ */ o("div", {
			className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2",
			children: [p && /* @__PURE__ */ a(n, {
				onClick: p,
				label: v.collections.emptyStates.noResults.clearFilters,
				variant: "outline"
			}), h && /* @__PURE__ */ a(n, {
				onClick: f,
				label: g ?? v.filters.applyFilters
			})]
		}) : null]
	});
}
s.displayName = "FilterPickerInternal";
//#endregion
export { s as FilterPickerInternal };
