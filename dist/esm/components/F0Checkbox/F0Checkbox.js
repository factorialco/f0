import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { Checkbox as t } from "../../ui/checkbox.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/F0Checkbox/F0Checkbox.tsx
function r({ title: e, onCheckedChange: r, id: i, disabled: a, indeterminate: o = !1, checked: s = !1, value: c, hideLabel: l = !1, presentational: u = !1, stopPropagation: d = !1, name: f, required: p = !1, ...m }) {
	return /* @__PURE__ */ n(t, {
		title: e,
		onCheckedChange: r,
		id: i,
		disabled: a,
		indeterminate: o,
		checked: s,
		value: c,
		name: f,
		hideLabel: l,
		required: p,
		tabIndex: u ? -1 : void 0,
		onClick: (e) => d && e.stopPropagation(),
		...m
	});
}
var i = e(r);
//#endregion
export { i as F0Checkbox };
