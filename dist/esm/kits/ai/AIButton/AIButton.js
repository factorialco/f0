import { ButtonInternal as e } from "../../../components/F0Button/internal.js";
import t from "../../../icons/ai/One.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/kits/ai/AIButton/AIButton.tsx
var i = [
	"append",
	"className",
	"pressed",
	"compact",
	"noTitle",
	"noAutoTooltip",
	"style",
	"variant",
	"loading",
	"emoji"
], a = n((n, a) => {
	let o = i.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, n);
	return /* @__PURE__ */ r(e, {
		...o,
		variant: "ai",
		ref: a,
		iconRotate: n.icon == t
	});
});
a.displayName = "AIButton";
//#endregion
export { a as AIButton };
