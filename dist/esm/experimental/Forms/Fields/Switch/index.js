import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { Switch as t } from "../../../../ui/switch.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Forms/Fields/Switch/index.tsx
function r({ title: e, onCheckedChange: r, id: i, disabled: a, checked: o = !1, value: s, hideLabel: c = !1, presentational: l = !1, required: u = !1, ...d }) {
	return /* @__PURE__ */ n(t, {
		title: e,
		onCheckedChange: r,
		id: i,
		disabled: a,
		checked: o,
		value: s,
		hideLabel: c,
		required: u,
		tabIndex: l ? -1 : void 0,
		...d
	});
}
var i = e("Switch", r);
//#endregion
export { i as Switch };
