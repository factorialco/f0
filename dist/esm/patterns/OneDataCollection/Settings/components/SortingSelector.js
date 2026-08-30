import e from "../../../../icons/app/Ascending.js";
import t from "../../../../icons/app/Descending.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { F0Select as i } from "../../../../F0Select.js";
import { useMemo as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/components/SortingSelector.tsx
var c = "__no-sorting__", l = ({ currentSortings: l, sortings: u, onChange: d }) => {
	let f = n(), p = [{
		label: f.collections.sorting.noSorting,
		value: c
	}, ...Object.entries(u || {}).map(([e, t]) => ({
		label: t.label,
		value: e
	}))], m = a(() => l ?? {
		field: "__no-sorting__",
		order: "asc"
	}, [l]), h = (e) => {
		!e || e.field === "__no-sorting__" ? d(null) : d(e);
	};
	return /* @__PURE__ */ o("div", {
		className: "flex flex-col",
		children: /* @__PURE__ */ s("div", {
			className: "flex items-end gap-2",
			children: [/* @__PURE__ */ o("div", {
				className: "shrink grow [&_button]:h-8 [&_button]:rounded",
				children: /* @__PURE__ */ o(i, {
					label: f.collections.sorting.sortBy,
					options: p,
					value: m.field,
					onChange: (e) => {
						h({
							field: e,
							order: m.order ?? "asc"
						});
					}
				}, m.field)
			}), m.field !== "__no-sorting__" && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(r, {
				hideLabel: !0,
				label: f.collections.sorting.toggleDirection,
				variant: "outline",
				icon: m.order === "asc" ? e : t,
				onClick: () => h({
					field: m.field,
					order: m.order === "asc" ? "desc" : "asc"
				})
			}) })]
		})
	});
};
//#endregion
export { c as EmptySortingValue, l as SortingSelector };
