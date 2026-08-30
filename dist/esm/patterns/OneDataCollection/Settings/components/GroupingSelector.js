import e from "../../../../icons/app/ArrowDown.js";
import t from "../../../../icons/app/ArrowUp.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/components/GroupingSelector.tsx
var o = "__no-grouping__", s = ({ SelectComponent: s, grouping: c, currentGrouping: l, onGroupingChange: u, hideLabel: d = !1 }) => {
	let f = n();
	if (!c || c.mandatory && Object.entries(c.groupBy).length < 2) return null;
	let p = [...c.mandatory ? [] : [{
		label: f.collections.grouping.noGrouping,
		value: o
	}], ...Object.entries(c.groupBy || {}).filter((e) => !!e[1]).map(([e, t]) => ({
		label: t.name,
		value: e
	}))];
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col",
		children: /* @__PURE__ */ a("div", {
			className: "flex items-end gap-2",
			children: [/* @__PURE__ */ i("div", {
				className: "shrink grow [&_button]:h-8 [&_button]:rounded",
				children: /* @__PURE__ */ i(s, {
					label: f.collections.grouping.groupBy,
					options: p,
					hideLabel: d,
					value: l?.field.toString() ?? o,
					onChange: (e) => u?.(e === o ? void 0 : {
						field: e,
						order: c.groupBy[e]?.defaultDirection ?? l?.order ?? "asc"
					})
				})
			}), l?.field && /* @__PURE__ */ i(r, {
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
export { s as GroupingSelector };
