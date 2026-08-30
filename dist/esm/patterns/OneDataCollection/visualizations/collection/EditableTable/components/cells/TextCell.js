import { cn as e } from "../../../../../../../lib/utils.js";
import { F0TextInput as t } from "../../../../../../../components/F0TextInput/F0TextInput.js";
import { BaseCell as n } from "./BaseCell.js";
import { resolveTextCellIcon as r } from "./textIcon.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/TextCell.tsx
function a({ editableColumn: a, value: o, inputPlaceholder: s, error: c, loading: l, onChange: u, hint: d }) {
	let f = a.textConfig, p = f?.inputType ?? "text", m = r(f);
	return /* @__PURE__ */ i(n, {
		error: c,
		hint: d,
		children: /* @__PURE__ */ i("div", {
			className: e("flex w-full min-w-0", "cursor-text items-center", a.align === "right" && "[&_input]:text-right"),
			children: /* @__PURE__ */ i(t, {
				type: p,
				icon: m,
				label: a.label,
				hideLabel: !0,
				value: o,
				placeholder: s ?? a.inputPlaceholder,
				onChange: u,
				loading: l,
				transparent: !0
			})
		})
	});
}
//#endregion
export { a as TextCell };
