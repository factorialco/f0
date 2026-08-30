import { cn as e } from "../../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Select as n } from "../../../../../../../F0Select.js";
import { BaseCell as r } from "./BaseCell.js";
import { renderProperty as i } from "../../../../../property-render.js";
import { useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/SelectCell.tsx
var s = /* @__PURE__ */ new Set();
function c({ editableColumn: c, value: l, error: u, loading: d, onChange: f, item: p, hint: m }) {
	let h = t(), [g, _] = a(!1), v = c.selectConfig;
	if (!v) return s.has(c.label) || (s.add(c.label), console.warn(`SelectCell: column "${c.label}" has editType "select" but no selectConfig`)), /* @__PURE__ */ o(r, { children: i(p, c, "editableTable", h) });
	let y = {
		label: c.label,
		hideLabel: !0,
		value: l || void 0,
		onChange: (e, t) => {
			let n = e ?? "";
			n !== l && f(n, { selectedItem: t });
		},
		loading: d,
		size: "sm",
		placeholder: v.placeholder ?? h.t("common.selectPlaceholder"),
		showSearchBox: v.showSearchBox,
		defaultItem: v.defaultItem?.(p),
		multiple: !1,
		onOpenChange: _
	}, b = v.clearable ? { clearable: !0 } : {};
	return /* @__PURE__ */ o(r, {
		error: u,
		isActive: g,
		hint: m,
		cursor: "pointer",
		children: /* @__PURE__ */ o("div", {
			className: e("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", c.align === "right" && "justify-end"),
			children: "source" in v && v.source ? /* @__PURE__ */ o(n, {
				...y,
				...b,
				source: v.source,
				mapOptions: v.mapOptions
			}) : /* @__PURE__ */ o(n, {
				...y,
				...b,
				options: typeof v.options == "function" ? v.options(p) : v.options
			})
		})
	});
}
//#endregion
export { c as SelectCell };
