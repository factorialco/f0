import { NestedActionRow as e } from "../NestedActionRow/index.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
var r = t((t, r) => {
	let i = t.addRowActions.map((e) => ({
		label: e.label,
		icon: e.icon,
		description: e.description,
		onClick: e.onClick,
		loading: e.loading,
		disabled: e.disabled
	}));
	return /* @__PURE__ */ n(e, {
		...t,
		ref: r,
		nestedRowPropsOverride: { onAddRow: {
			actions: i,
			label: t.addRowLabel
		} }
	});
});
r.displayName = "AddRowRow";
//#endregion
export { r as AddRowRow };
