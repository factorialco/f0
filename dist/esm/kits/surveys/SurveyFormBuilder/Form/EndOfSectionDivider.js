import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/Form/EndOfSectionDivider.tsx
var r = () => {
	let { t: r } = e();
	return /* @__PURE__ */ n("div", {
		className: "mt-8 ml-7 flex flex-row items-center gap-4",
		children: [
			/* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
			/* @__PURE__ */ t("span", {
				className: "text-base font-medium text-f1-foreground-secondary",
				children: r("surveyFormBuilder.labels.endOfSection")
			}),
			/* @__PURE__ */ t("div", { className: "h-px flex-1 bg-f1-border-secondary" })
		]
	});
};
//#endregion
export { r as EndOfSectionDivider };
