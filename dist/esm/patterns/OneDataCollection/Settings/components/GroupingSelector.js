import e from "../../../../icons/app/ArrowDown.js";
import t from "../../../../icons/app/ArrowUp.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { F0Select as i } from "../../../../F0Select.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/components/GroupingSelector.tsx
var s = "__no-grouping__", c = ({ grouping: c, currentGrouping: l, onGroupingChange: u, hideLabel: d = !1 }) => {
	let f = n();
	if (!c || c.mandatory && Object.entries(c.groupBy).length < 2) return null;
	let p = [...c.mandatory ? [] : [{
		label: f.collections.grouping.noGrouping,
		value: s
	}], ...Object.entries(c.groupBy || {}).filter((e) => !!e[1]).map(([e, t]) => ({
		label: t.name,
		value: e
	}))];
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col",
		children: /* @__PURE__ */ o("div", {
			className: "flex items-end gap-2",
			children: [/* @__PURE__ */ a("div", {
				className: "shrink grow [&_button]:h-8 [&_button]:rounded",
				children: /* @__PURE__ */ a(i, {
					label: f.collections.grouping.groupBy,
					options: p,
					hideLabel: d,
					value: l?.field.toString() ?? s,
					onChange: (e) => u?.(e === s ? void 0 : {
						field: e,
						order: c.groupBy[e]?.defaultDirection ?? l?.order ?? "asc"
					})
				})
			}), l?.field && /* @__PURE__ */ a(r, {
				hideLabel: !0,
				label: f.collections.grouping.toggleDirection,
				variant: "outline",
				icon: l?.order === "asc" ? t : e,
				onClick: () => u?.({
					field: l.field,
					order: l.order === "asc" ? "desc" : "asc"
				})
			})]
		})
	});
};
//#endregion
export { c as GroupingSelector };
