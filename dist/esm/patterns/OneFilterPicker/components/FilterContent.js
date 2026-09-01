"use client";
import { getFilterType as e } from "../filterTypes/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/components/FilterContent.tsx
function n({ selectedFilterKey: n, definition: r, tempFilters: i, onFilterChange: a, isCompactMode: o }) {
	if (!n) return null;
	let s = r[n], c = e(s.type);
	if (!c) throw Error(`Filter type ${s.type} not found`);
	let l = i[n] || c.emptyValue, u = (e, t) => {
		a(e, t);
	};
	function d({ schema: t, value: n, onChange: r }) {
		return e(t.type).render({
			schema: t,
			value: n,
			onChange: r,
			isCompactMode: o,
			onFilterChange: u,
			allFiltersValue: i
		});
	}
	return /* @__PURE__ */ t("div", {
		className: "relative flex h-full w-full flex-col gap-1",
		children: /* @__PURE__ */ t("div", {
			className: "relative flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden",
			children: d({
				schema: s,
				value: l,
				onChange: (e) => {
					a(n, e);
				}
			})
		})
	});
}
//#endregion
export { n as FilterContent };
