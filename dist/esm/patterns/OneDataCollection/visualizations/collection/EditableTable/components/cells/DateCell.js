import { cn as e } from "../../../../../../../lib/utils.js";
import { F0DatePicker as t } from "../../../../../../../F0DatePicker.js";
import { BaseCell as n } from "./BaseCell.js";
import { useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
import { format as a, isValid as o, parseISO as s } from "date-fns";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/DateCell.tsx
var c = "yyyy-MM-dd";
function l({ editableColumn: l, value: u, inputPlaceholder: d, error: f, loading: p, isLastColumn: m, onChange: h, hint: g, item: _ }) {
	let v = typeof l.dateConfig == "function" ? l.dateConfig(_) : l.dateConfig, y = r(() => {
		if (!u) return;
		let e = s(u);
		if (o(e)) return {
			granularity: "day",
			value: {
				from: e,
				to: e
			}
		};
	}, [u]);
	return /* @__PURE__ */ i(n, {
		showRightBorder: !m,
		error: f,
		hint: g,
		cursor: "pointer",
		children: /* @__PURE__ */ i("div", {
			className: e("flex w-full min-w-0 items-center", l.align === "right" && "justify-end"),
			children: /* @__PURE__ */ i(t, {
				className: e("[&_input]:!py-0", "[&_[data-slot='icon']]:!inset-y-0", "[&_[data-slot='placeholder']]:!flex", "[&_[data-slot='placeholder']]:!items-center", "[&_[data-slot='placeholder']]:!py-0", "[&_[data-slot='placeholder']]:!right-0", "[&_[data-slot='placeholder']]:!truncate"),
				placeholder: d ?? l.inputPlaceholder,
				label: l.label,
				hideLabel: !0,
				transparent: !0,
				displayFormat: "default",
				value: y,
				onChange: (e) => {
					let t = e?.value?.from, n = t ? a(t, c) : "";
					n !== u && h(n);
				},
				loading: p,
				minDate: v?.minDate,
				maxDate: v?.maxDate
			})
		})
	});
}
//#endregion
export { l as DateCell };
