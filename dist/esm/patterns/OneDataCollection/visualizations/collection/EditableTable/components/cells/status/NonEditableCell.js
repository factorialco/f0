import { BaseCell as e } from "../BaseCell.js";
import { ReadOnlyCellContent as t } from "../ReadOnlyCellContent.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/NonEditableCell.tsx
function r({ editableColumn: r, item: i, isLastColumn: a, hint: o }) {
	return /* @__PURE__ */ n(e, {
		showRightBorder: !a,
		borderOnHover: !1,
		hint: o,
		hintPosition: o?.hintPosition ?? "right",
		cursor: "default",
		children: /* @__PURE__ */ n(t, {
			editableColumn: r,
			item: i,
			showFieldAffordances: !1
		})
	});
}
//#endregion
export { r as NonEditableCell };
