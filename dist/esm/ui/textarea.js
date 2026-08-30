import { cn as e } from "../lib/utils.js";
import { F0InputField as t } from "../components/F0InputField/F0InputField.js";
import { forwardRef as n, useImperativeHandle as r, useLayoutEffect as i, useRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/ui/textarea.tsx
var s = n(({ className: n, label: s, labelIcon: c, icon: l, error: u, hideLabel: d, maxLength: f, clearable: p, disabled: m, required: h, value: g, cols: _, rows: v, status: y, hint: b, onChange: x, placeholder: S, size: C, loading: w, maxHeight: T, ...E }, D) => {
	let O = a(null);
	return r(D, () => O.current), i(() => {
		let e = O.current;
		if (!e) return;
		e.style.height = "0px";
		let t = e.scrollHeight, n = getComputedStyle(e), r = parseFloat(n.lineHeight) || 20, i = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom), a = r * (e.rows || 2) + i, o = Math.max(t, a);
		T != null && o > T ? (e.style.height = `${T}px`, e.style.overflowY = "auto") : (e.style.height = `${o}px`, e.style.overflowY = "hidden");
	}), /* @__PURE__ */ o(t, {
		label: s,
		labelIcon: c,
		icon: l,
		error: u,
		status: y,
		hint: b,
		hideLabel: d,
		maxLength: f,
		clearable: p,
		value: g,
		canGrow: !0,
		placeholder: S ?? "",
		onChange: (e) => {
			x?.(e ?? "");
		},
		disabled: m,
		required: h,
		size: C,
		loading: w,
		inputRef: O,
		...E,
		children: /* @__PURE__ */ o("textarea", {
			className: e("block w-full resize-none pt-2", n),
			value: g,
			cols: _,
			rows: v,
			disabled: m,
			required: h
		})
	});
});
s.displayName = "Textarea";
//#endregion
export { s as Textarea };
