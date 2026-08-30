import { TooltipInternal as e } from "../experimental/Overlays/Tooltip/index.js";
import { Fragment as t, jsx as n } from "react/jsx-runtime";
//#region src/lib/tooltip-wrapper.tsx
var r = (e) => typeof e == "string" ? e : [e.title, e.description].filter(Boolean).join(" "), i = (e) => e.map((e) => e.trim()).map((e) => /[.!?:;]$/.test(e) ? e : `${e}.`).join(" "), a = (e) => {
	if (!e) return;
	if (typeof e == "string") return e;
	let t = [
		e.title,
		e.description,
		...(e.items ?? []).map(r)
	].filter((e) => !!(e && e.trim()));
	return t.length > 0 ? i(t) : void 0;
}, o = (e) => {
	if (!e) return;
	if (typeof e == "string") return { label: e };
	let { title: t, description: n, items: r } = e;
	if (t) return {
		label: t,
		description: n,
		items: r
	};
	if (n) return {
		description: n,
		items: r
	};
	if (r?.length) return { items: r };
}, s = ({ tooltip: r, children: i }) => {
	let a = o(r);
	return a ? /* @__PURE__ */ n(e, {
		instant: !0,
		...a,
		children: i
	}) : /* @__PURE__ */ n(t, { children: i });
};
//#endregion
export { s as TooltipWrapper, a as tooltipAccessibleText };
