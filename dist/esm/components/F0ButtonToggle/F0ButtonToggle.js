import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { F0ButtonToggleInternal as t } from "./internal/F0ButtonToggle.internal.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0ButtonToggle/F0ButtonToggle.tsx
var i = ["withBorder"], a = n((e, n) => {
	let a = i.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ r(t, {
		...a,
		ref: n
	});
});
a.displayName = "F0ButtonToggle";
var o = e(a);
//#endregion
export { o as F0ButtonToggle };
