import { cn as e } from "../../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Select as n } from "../../../../../../../F0Select.js";
import { BaseCell as r } from "./BaseCell.js";
import { renderProperty as i } from "../../../../../property-render.js";
import { useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/MultiSelectCell.tsx
var s = /* @__PURE__ */ new Set();
function c(e, t) {
	if (t === void 0) return [];
	let n = e[t];
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function l({ editableColumn: l, error: u, loading: d, onChange: f, item: p, hint: m }) {
	let h = t(), [g, _] = a(!1), v = l.selectConfig;
	if (!v) return s.has(l.label) || (s.add(l.label), console.warn(`MultiSelectCell: column "${l.label}" has editType "multiselect" but no selectConfig`)), /* @__PURE__ */ o(r, { children: i(p, l, "editableTable", h) });
	let y = c(p, l.id), b = {
		label: l.label,
		hideLabel: !0,
		value: y,
		onChange: (e) => f(e),
		loading: d,
		size: "sm",
		placeholder: v.placeholder ?? h.t("common.selectPlaceholder"),
		showSearchBox: v.showSearchBox,
		multiple: !0,
		onOpenChange: _
	}, x = v.clearable ? { clearable: !0 } : {};
	return /* @__PURE__ */ o(r, {
		error: u,
		isActive: g,
		hint: m,
		cursor: "pointer",
		children: /* @__PURE__ */ o("div", {
			className: e("flex w-full min-w-0 h-full", "items-center", "[&_[data-testid=input-field-wrapper]]:border-0", "[&_[data-testid=input-field-wrapper]]:bg-transparent", "[&_[data-testid=input-field-wrapper]]:shadow-none", "[&_[data-testid=input-field-wrapper]]:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0", "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0", "[&_[data-testid=input-field-wrapper]]:h-full", "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2", "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto", "[&>div]:h-full", "[&>div]:w-full", "[&>div>button]:h-full", l.align === "right" && "justify-end"),
			children: "source" in v && v.source ? /* @__PURE__ */ o(n, {
				...b,
				...x,
				source: v.source,
				mapOptions: v.mapOptions
			}) : /* @__PURE__ */ o(n, {
				...b,
				...x,
				options: typeof v.options == "function" ? v.options(p) : v.options
			})
		})
	});
}
//#endregion
export { l as MultiSelectCell };
