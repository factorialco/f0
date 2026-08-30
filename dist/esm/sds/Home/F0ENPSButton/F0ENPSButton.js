import { cn as e } from "../../../lib/utils.js";
import { pulseIcon as t, pulses as n } from "../../../lib/mood.js";
import { F0ButtonToggleGroup as r } from "../../../components/F0ButtonToggleGroup/index.js";
import { useEffect as i, useMemo as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/sds/Home/F0ENPSButton/F0ENPSButton.tsx
var c = {
	superNegative: "mood-super-negative",
	negative: "mood-negative",
	neutral: "mood-neutral",
	positive: "mood-positive",
	superPositive: "mood-super-positive"
}, l = {
	sm: "[&_svg]:w-4",
	md: "[&_svg]:w-6",
	lg: "[&_svg]:w-7"
}, u = {
	superNegative: "text-f1-icon-mood-super-negative",
	negative: "text-f1-icon-mood-negative",
	neutral: "text-f1-icon-mood-neutral",
	positive: "text-f1-icon-mood-positive",
	superPositive: "text-f1-icon-mood-super-positive"
}, d = "text-f1-icon-secondary", f = (e) => n.includes(e), p = ({ value: p, onChange: m, labels: h, icons: g, size: _ = "lg", fullWidth: v = !0, disabled: y = !1, required: b = !1 }) => {
	let [x, S] = o(p);
	i(() => {
		S(p);
	}, [p]);
	let C = a(() => n.map((n) => ({
		value: n,
		icon: g?.[n] ?? t[n],
		label: h[n],
		color: c[n],
		tooltip: {
			description: h[n],
			instant: !0
		},
		className: e(l[_], x === void 0 ? u[n] : n !== x && d)
	})), [
		h,
		g,
		_,
		x
	]);
	return /* @__PURE__ */ s(r, {
		items: C,
		value: x ?? "",
		onChange: (e) => {
			let t = f(e) ? e : void 0;
			t !== x && (S(t), m?.(t));
		},
		size: _,
		fullWidth: v,
		disabled: y,
		required: b
	});
};
p.displayName = "F0ENPSButton";
//#endregion
export { p as F0ENPSButton };
