import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
import { F0TagRaw as n } from "../../../components/tags/F0TagRaw/index.js";
import { getFilterType as r } from "../filterTypes/utils.js";
import { getActiveFilterKeys as i } from "../internal/getActiveFilterKeys.js";
import { FilterChipButton as a } from "./FilterChipButton.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c } from "motion/react";
//#region src/patterns/OneFilterPicker/components/FiltersChipsList.tsx
function l({ filters: l, value: u = {}, onFilterSelect: d, onFilterRemove: f, onClearAll: p, hideChips: m = !1, resultCount: h }) {
	let g = e(), _ = i(l, u, g), v = !m && _.length > 0;
	return v ? /* @__PURE__ */ s("div", {
		className: "mt-2 flex items-center gap-2",
		children: [/* @__PURE__ */ s("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [h !== void 0 && v && /* @__PURE__ */ o(n, { text: g.t(h === 1 ? "filters.resultsFor.one" : "filters.resultsFor.other", { count: h }) }), /* @__PURE__ */ o(c, {
				presenceAffectsLayout: !0,
				initial: !1,
				children: v && _.map((e) => {
					let t = l[e];
					if (!l[e]) return null;
					let n = u?.[e];
					return r(t.type).isEmpty(n, {
						schema: t,
						i18n: g
					}) ? null : /* @__PURE__ */ o(a, {
						filter: t,
						filterKey: String(e),
						value: n,
						onSelect: () => d(e),
						onRemove: () => f(e)
					}, `filter-${String(e)}`);
				})
			})]
		}), /* @__PURE__ */ o(t, {
			variant: "neutral",
			label: g.actions.clear,
			size: "sm",
			onClick: p
		})]
	}) : null;
}
//#endregion
export { l as FiltersChipsList };
