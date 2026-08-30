import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { ButtonInternal as t } from "./internal.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0Button/F0Button.tsx
var i = [
	"append",
	"className",
	"pressed",
	"compact",
	"noTitle",
	"noAutoTooltip",
	"style",
	"block"
], a = n((e, n) => {
	let a = i.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ r(t, {
		...a,
		ref: n
	});
});
a.displayName = "F0Button";
var o = e(a);
//#endregion
export { o as F0Button };
