import { useReducedMotion as e } from "../../../../lib/a11y.js";
import { CustomAnswerRow as t } from "./CustomAnswerRow.js";
import { OptionRow as n } from "./OptionRow.js";
import { useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { motion as c } from "motion/react";
//#region src/kits/ai/F0ClarifyingPanel/components/OptionsList.tsx
var l = ({ mode: l, question: u, options: d, selectedOptionIds: f, allowCustomAnswer: p, hasSelection: m, hasCustomText: h, customAnswerText: g, isCustomAnswerActive: _, canProceed: v, customInputRef: y, autoFocus: b, onToggleOption: x, onActivateCustom: S, onChangeCustomText: C, onToggleCustomActive: w, onConfirm: T }) => {
	let E = e(), D = (() => {
		if (l !== "single") return 0;
		let e = d.findIndex((e) => f.includes(e.id));
		return e >= 0 ? e : 0;
	})(), [O, k] = a(D), A = i([]);
	r(() => {
		b && l === "single" && A.current[O]?.focus();
	}, []);
	let j = (e) => {
		if (l !== "single") return;
		let t = d.length - 1;
		if (t < 0) return;
		let n = O;
		switch (e.key) {
			case "ArrowDown":
			case "ArrowRight":
				n = O >= t ? 0 : O + 1;
				break;
			case "ArrowUp":
			case "ArrowLeft":
				n = O <= 0 ? t : O - 1;
				break;
			case "Home":
				n = 0;
				break;
			case "End":
				n = t;
				break;
			default: return;
		}
		e.preventDefault(), k(n), A.current[n]?.focus();
	};
	return /* @__PURE__ */ s("div", {
		className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
		role: l === "single" ? "radiogroup" : "group",
		"aria-label": u,
		children: [d.map((e, t) => /* @__PURE__ */ o(c.div, {
			initial: !E && {
				opacity: 0,
				y: 4
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: E ? 0 : .2,
				ease: [
					.4,
					0,
					.2,
					1
				],
				delay: E ? 0 : .12 + t * .06
			},
			children: /* @__PURE__ */ o(n, {
				ref: (e) => {
					A.current[t] = e;
				},
				option: e,
				isSelected: f.includes(e.id),
				mode: l,
				isTabStop: l === "single" ? t === O : void 0,
				onToggle: x,
				onKeyNavigate: j
			})
		}, e.id)), p && /* @__PURE__ */ o(t, {
			mode: l,
			hasSelection: m,
			hasCustomText: h,
			customAnswerText: g,
			isCustomAnswerActive: _,
			canProceed: v,
			inputRef: y,
			onActivate: S,
			onChangeText: C,
			onToggleActive: w,
			onConfirm: T
		})]
	});
};
//#endregion
export { l as OptionsList };
