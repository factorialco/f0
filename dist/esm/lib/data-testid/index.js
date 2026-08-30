import { useRenderDataTestIdAttribute as e } from "../providers/user-platafform/UserPlatformProvider.js";
import { forwardRef as t, memo as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/lib/data-testid/index.tsx
var i = [
	"prototype",
	"length",
	"name",
	"$$typeof",
	"render"
], a = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (!i.includes(r)) try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, o = ({ dataTestId: t, children: n }) => {
	let i = e();
	return !t || !i ? n : /* @__PURE__ */ r("div", {
		"data-testid": t,
		style: { display: "contents" },
		children: n
	});
}, s = (e) => {
	if (e.$$typeof === Symbol.for("react.forward_ref")) {
		let n = e, i = t((e, t) => {
			let { dataTestId: i, ...a } = e;
			return /* @__PURE__ */ r(o, {
				dataTestId: i,
				children: /* @__PURE__ */ r(n, {
					...a,
					ref: t
				})
			});
		});
		return a(e, i), i.displayName ||= e.displayName || e.name || e.render?.name || "Component", i;
	}
	if (e.$$typeof === Symbol.for("react.memo")) {
		let t = e.type, r = e.compare, i = s(t), o = n(i, r);
		return a(e, o), o.displayName ||= e.displayName || e.name || e.type?.displayName || "Component", o;
	}
	let i = t((t, n) => {
		let { dataTestId: i, ...a } = t;
		return /* @__PURE__ */ r(o, {
			dataTestId: i,
			children: /* @__PURE__ */ r(e, {
				...a,
				ref: n
			})
		});
	});
	return a(e, i), i.displayName ||= e.displayName || e.name || "Component", i;
};
//#endregion
export { o as DataTestIdWrapper, s as withDataTestId };
