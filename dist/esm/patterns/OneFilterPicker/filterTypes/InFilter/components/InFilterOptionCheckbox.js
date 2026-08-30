"use client";
import { F0Checkbox as e } from "../../../../../components/F0Checkbox/F0Checkbox.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterOptionCheckbox.tsx
function n({ label: n, isSelected: r, onToggle: i }) {
	return /* @__PURE__ */ t("div", {
		className: "shrink-0",
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ t(e, {
			title: n,
			checked: r,
			onCheckedChange: (e) => {
				e !== r && i();
			},
			hideLabel: !0
		})
	});
}
//#endregion
export { n as InFilterOptionCheckbox };
