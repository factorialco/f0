import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Cross.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/CreditWarningWrapper.tsx
var o = { soft: {
	text: "",
	bg: "bg-f1-background-info",
	fontColor: "text-f1-foreground-info",
	formBorder: "[&_form]:border-f1-border-info"
} }, s = ({ creditWarning: s, children: c }) => {
	let l = n();
	if (!s) return c;
	let u = {
		...o[s.level],
		text: l.ai.creditWarning.soft
	};
	return /* @__PURE__ */ a("div", {
		className: e("flex flex-col rounded-xl", u.bg, u.formBorder),
		children: [/* @__PURE__ */ a("div", {
			className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2",
			children: [/* @__PURE__ */ i("p", {
				className: e("min-w-0 flex-1 text-sm font-medium", u.fontColor),
				children: u.text
			}), /* @__PURE__ */ a("div", {
				className: "flex shrink-0 items-center gap-1",
				children: [s.onGetCredits && /* @__PURE__ */ i(r, {
					label: l.ai.creditWarning.getCredits ?? "",
					size: "sm",
					variant: "outline",
					tooltip: l.ai.creditWarning.getCredits ?? "",
					onClick: s.onGetCredits
				}), s.onDismiss && /* @__PURE__ */ i(r, {
					label: l.ai.creditWarning.dismiss ?? "",
					size: "sm",
					variant: "ghost",
					icon: t,
					hideLabel: !0,
					onClick: s.onDismiss
				})]
			})]
		}), c]
	});
};
//#endregion
export { s as CreditWarningWrapper };
