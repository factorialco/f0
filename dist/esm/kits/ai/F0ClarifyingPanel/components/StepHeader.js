import e from "../../../../icons/app/ChevronLeft.js";
import t from "../../../../icons/app/ChevronRight.js";
import n from "../../../../icons/app/Cross.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as a } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/kits/ai/F0ClarifyingPanel/components/StepHeader.tsx
var c = ({ question: c, stepLabel: l, isFirstStep: u, isFinalStep: d, canProceed: f, onBack: p, onNext: m, onCancel: h }) => {
	let g = r();
	return /* @__PURE__ */ s("div", {
		className: "flex items-start gap-0.5 pl-4 pr-3",
		children: [
			/* @__PURE__ */ o(a, {
				className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
				lines: 3,
				children: c
			}),
			l && /* @__PURE__ */ s("div", {
				className: "flex shrink-0 items-center gap-0.5",
				children: [
					/* @__PURE__ */ o(i, {
						variant: "ghost",
						size: "sm",
						onClick: p,
						disabled: u,
						label: g.ai.clarifyingQuestion.back,
						hideLabel: !0,
						icon: e
					}),
					/* @__PURE__ */ o("span", {
						className: "text-sm font-semibold text-f1-foreground-tertiary",
						children: l
					}),
					/* @__PURE__ */ o(i, {
						variant: "ghost",
						size: "sm",
						onClick: m,
						disabled: d || !f,
						label: g.ai.clarifyingQuestion.next,
						hideLabel: !0,
						icon: t
					})
				]
			}),
			/* @__PURE__ */ o(i, {
				variant: "ghost",
				size: "sm",
				onClick: h,
				label: g.actions.cancel,
				hideLabel: !0,
				icon: n
			})
		]
	});
};
//#endregion
export { c as StepHeader };
