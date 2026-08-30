import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { ConfirmFooter as n } from "./components/ConfirmFooter.js";
import { OptionsList as r } from "./components/OptionsList.js";
import { StepHeader as i } from "./components/StepHeader.js";
import { useRef as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/kits/ai/F0ClarifyingPanel/F0ClarifyingPanel.tsx
var u = "easeOut", d = .3, f = ({ clarifyingQuestion: e, isSubmitDisabled: t }) => /* @__PURE__ */ o(p, {
	clarifyingQuestion: e,
	isSubmitDisabled: t
}), p = ({ clarifyingQuestion: f, isSubmitDisabled: p }) => {
	let m = e(), h = t(), { currentStep: g, currentStepIndex: _, totalSteps: v, toggleOption: y, confirm: b, skip: x, cancel: S, back: C, setCustomAnswerText: w, setCustomAnswerActive: T, activateCustomAnswer: E } = f, { question: D, options: O, selectedOptionIds: k, selectionMode: A, optional: j, allowCustomAnswer: M, customAnswerText: N, isCustomAnswerActive: P } = g, F = a(null), I = A ?? "single", L = v > 1, R = _ === 0, z = _ === v - 1, B = L ? m.t("ai.clarifyingQuestion.stepOf", {
		current: String(_ + 1),
		total: String(v)
	}) : void 0, V = k.length > 0, H = (N ?? "").trim().length > 0, U = V || P && H || j === !0, W = p === !0 && z, G = () => {
		W || b();
	}, K = () => {
		W || x();
	}, q = (e) => {
		let t = I === "single" && k.includes(e);
		y(e), I === "single" && !z && !t && Promise.resolve().then(b);
	}, J = z ? m.ai.clarifyingQuestion.submit : m.ai.clarifyingQuestion.next, Y = j === !0 && !V && !(P && H), X = () => {
		E(), requestAnimationFrame(() => {
			F.current?.focus();
		});
	}, Z = (e) => {
		e.key === "Escape" && (e.preventDefault(), S());
	}, Q = h ? 0 : d / 2;
	return /* @__PURE__ */ s("div", {
		className: "flex flex-col",
		onKeyDown: Z,
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-col gap-3 pt-3",
			children: /* @__PURE__ */ o(c, {
				mode: "wait",
				initial: !1,
				children: /* @__PURE__ */ s(l.div, {
					className: "flex flex-col gap-3",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: Q,
						ease: u
					},
					children: [/* @__PURE__ */ o(i, {
						question: D,
						stepLabel: B,
						isFirstStep: R,
						isFinalStep: z,
						canProceed: U,
						onBack: C,
						onNext: b,
						onCancel: S
					}), /* @__PURE__ */ o(r, {
						mode: I,
						question: D,
						options: O,
						selectedOptionIds: k,
						allowCustomAnswer: M,
						hasSelection: V,
						hasCustomText: H,
						customAnswerText: N,
						isCustomAnswerActive: P,
						canProceed: U,
						customInputRef: F,
						onToggleOption: q,
						onActivateCustom: X,
						onChangeCustomText: w,
						onToggleCustomActive: T,
						onConfirm: G
					})]
				}, _)
			})
		}), /* @__PURE__ */ o(n, {
			canProceed: U,
			submitDisabled: W,
			label: J,
			onConfirm: G,
			onSkip: K,
			showSkip: Y
		})]
	});
};
//#endregion
export { f as F0ClarifyingPanel };
