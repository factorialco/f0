import { BaseCell as e } from "../BaseCell.js";
import { ReadOnlyCellContent as t } from "../ReadOnlyCellContent.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/status/DisabledCell.tsx
function r({ editableColumn: r, item: i, hint: a }) {
	return /* @__PURE__ */ n(e, {
		disabled: !0,
		borderOnHover: !1,
		hint: a,
		hintPosition: a?.hintPosition ?? "right",
		cursor: "not-allowed",
		children: /* @__PURE__ */ n(t, {
			editableColumn: r,
			item: i,
			iconColor: "secondary",
			className: "min-h-12 [&_*]:text-f1-foreground-secondary"
		})
	});
}
//#endregion
export { r as DisabledCell };
