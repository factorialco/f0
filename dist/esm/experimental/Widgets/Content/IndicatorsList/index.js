import { Indicator as e } from "../../../../ui/indicator.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/IndicatorsList/index.tsx
var r = t(function({ items: t }, r) {
	return /* @__PURE__ */ n("div", {
		ref: r,
		className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
		children: t.map(({ label: t, content: r, color: i, ...a }) => /* @__PURE__ */ n(e, {
			label: t,
			content: r,
			color: i,
			...a
		}, `${t}-${r}`))
	});
});
//#endregion
export { r as IndicatorsList };
