import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../../components/F0Button/F0Button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/ai/F0ClarifyingPanel/components/ConfirmFooter.tsx
var i = ({ canProceed: i, submitDisabled: a, label: o, onConfirm: s, onSkip: c, showSkip: l }) => {
	let u = e();
	return /* @__PURE__ */ r("div", {
		className: "flex items-center justify-end gap-3 p-3",
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-center",
			children: l && c && /* @__PURE__ */ n(t, {
				variant: "outline",
				type: "button",
				label: u.ai.clarifyingQuestion.skip,
				onClick: c,
				disabled: a
			})
		}), /* @__PURE__ */ n(t, {
			disabled: !i || a,
			variant: "default",
			type: "button",
			label: o,
			onClick: s
		})]
	});
};
//#endregion
export { i as ConfirmFooter };
