import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0OneIcon as t } from "../../../ai/F0OneIcon/F0OneIcon.js";
import { memo as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { motion as a } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/ApplyingChangesTag/index.tsx
var o = a.create(t), s = n(() => {
	let t = e();
	return /* @__PURE__ */ i("div", {
		className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md",
		children: [/* @__PURE__ */ r(o, {
			size: "xs",
			animate: {
				rotate: [0, 360],
				scale: [
					1,
					.8,
					1
				],
				filter: [
					"blur(0px)",
					"blur(1px)",
					"blur(0px)"
				]
			},
			transition: {
				rotate: {
					duration: 1,
					ease: "linear",
					repeat: Infinity,
					repeatDelay: 1
				},
				scale: {
					duration: 1,
					times: [
						0,
						.5,
						1
					],
					ease: "easeInOut",
					repeat: Infinity,
					repeatDelay: 1
				},
				filter: {
					duration: 1,
					times: [
						0,
						.5,
						1
					],
					ease: "easeInOut",
					repeat: Infinity,
					repeatDelay: 1
				}
			}
		}), /* @__PURE__ */ r("span", {
			className: "font-medium text-f1-foreground",
			children: t.t("surveyFormBuilder.labels.applyingChanges")
		})]
	});
});
//#endregion
export { s as default };
