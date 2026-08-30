import { cn as e } from "../../../../../../../lib/utils.js";
import { F0NumberInput as t } from "../../../../../../../components/F0NumberInput/F0NumberInput.js";
import { BaseCell as n } from "./BaseCell.js";
import { useNumberCellLayout as r } from "./hooks/useNumberCellLayout.js";
import { useCallback as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/NumberCell.tsx
function s({ editableColumn: s, value: c, inputPlaceholder: l, error: u, loading: d, onChange: f, item: p, hint: m }) {
	let h = s.numberConfig, g = typeof c == "string" ? c.trim() : c, _ = g !== "" && g != null ? Number(g) : NaN, v = isFinite(_) ? _ : null, { ref: y, width: b, locale: x, units: S, unitsBefore: C, grouping: w } = r(h, v, p), T = (e) => {
		if (e == null) {
			c !== "" && f(null);
			return;
		}
		let t = e;
		h?.min != null && t < h.min && (t = h.min), h?.max != null && t > h.max && (t = h.max);
		let n = String(t);
		n !== c && f(n);
	}, E = S && /* @__PURE__ */ a("span", {
		className: "flex shrink-0 select-none items-center self-center pt-[1px] text-sm text-f1-foreground",
		children: S
	}), D = i((e) => {
		let t = e.currentTarget.querySelector("input");
		t && e.target !== t && t.focus();
	}, []);
	return /* @__PURE__ */ a(n, {
		error: u,
		hint: m,
		children: /* @__PURE__ */ a("div", {
			ref: y,
			onClick: D,
			className: e("flex h-full w-full cursor-text items-center", s.align === "right" && "justify-end"),
			children: /* @__PURE__ */ o("div", {
				className: e("flex h-full max-w-full items-center gap-1", C && "pl-3 [&_input]:pl-1", !C && S && "pr-3 [&_input]:pr-1"),
				style: { width: b },
				children: [
					C && E,
					/* @__PURE__ */ a(t, {
						label: s.label,
						hideLabel: !0,
						value: v,
						placeholder: l ?? s.inputPlaceholder,
						onChange: T,
						loading: d,
						transparent: !0,
						hint: "",
						locale: x,
						grouping: w,
						min: h?.min,
						max: h?.max,
						step: h?.step,
						maxDecimals: h?.maxDecimals
					}),
					!C && E
				]
			})
		})
	});
}
//#endregion
export { s as NumberCell };
