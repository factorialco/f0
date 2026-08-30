import { cn as e } from "../../../../../lib/utils.js";
import { F0Button as t } from "../../../../../components/F0Button/F0Button.js";
import { ItemActionsDropdown as n } from "../ItemActionsDropdown/ItemActionsDropdown.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/itemActions/ItemActionsRow/ItemActionsRow.tsx
var a = ({ className: a, primaryItemActions: o, dropdownItemActions: s, handleDropDownOpenChange: c }) => /* @__PURE__ */ i("aside", {
	className: e("pointer-events-auto items-center justify-end gap-2 md:flex", a),
	children: [o.map((e) => /* @__PURE__ */ r(t, {
		label: e.label,
		hideLabel: e.hideLabel,
		variant: "outline",
		onClick: e.onClick,
		icon: e.icon
	}, e.label)), /* @__PURE__ */ r(n, {
		align: "end",
		items: s,
		onOpenChange: c
	})]
});
//#endregion
export { a as ItemActionsRow };
