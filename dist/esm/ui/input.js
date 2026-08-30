import { cn as e } from "../lib/utils.js";
import { F0InputField as t } from "../components/F0InputField/F0InputField.js";
import * as n from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/input.tsx
var i = n.forwardRef(({ className: n, type: i, label: a, labelIcon: o, icon: s, error: c, status: l, hint: u, disabled: d, required: f, value: p, placeholder: m, clearable: h, onClear: g, size: _, loading: v, isEmpty: y, emptyValue: b, maxLength: x, hideMaxLength: S, append: C, onChange: w, role: T, appendTag: E, lengthProvider: D, onClickContent: O, hideLabel: k, name: A, onFocus: j, onBlur: M, onKeyDown: N, readonly: P, buttonToggle: F, transparent: I, "aria-controls": L, "aria-expanded": R, "aria-activedescendant": z, "aria-autocomplete": B, ...V }, H) => /* @__PURE__ */ r(t, {
	label: a,
	icon: s,
	labelIcon: o,
	error: c,
	status: l,
	hint: u,
	disabled: d,
	required: f,
	value: p,
	loading: v,
	clearable: h,
	className: n,
	onClear: g,
	placeholder: m || "",
	size: _,
	role: T,
	"aria-controls": L,
	"aria-expanded": R,
	"aria-activedescendant": z,
	"aria-autocomplete": B,
	isEmpty: y,
	emptyValue: b,
	maxLength: x,
	hideMaxLength: S,
	append: C,
	lengthProvider: D,
	hidePlaceholder: i === "file",
	hideLabel: k,
	onChange: w,
	onClickContent: O,
	name: A,
	appendTag: E,
	onFocus: j,
	onBlur: M,
	inputRef: H,
	readonly: P,
	buttonToggle: F,
	transparent: I,
	children: /* @__PURE__ */ r("input", {
		type: i,
		...V,
		onKeyDown: N,
		className: e("[&::-webkit-search-cancel-button]:hidden", "w-full shrink placeholder:-z-10 disabled:cursor-not-allowed")
	})
}));
i.displayName = "Input";
//#endregion
export { i as Input };
