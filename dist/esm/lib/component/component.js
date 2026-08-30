import { useComponentXRay as e } from "../xray.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/lib/component/component.tsx
var r = (r, i) => {
	let a = t((t, a) => {
		let { ref: o } = e(r, a);
		return /* @__PURE__ */ n(i, {
			ref: o,
			...t
		});
	});
	return a.displayName = `${r.name}`, a;
};
//#endregion
export { r as Component };
