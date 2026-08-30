import { cn as e } from "../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyAnsweringForm/components/RatingQuestionField.tsx
function n({ value: n, onChange: r, onBlur: i, config: a }) {
	let { options: o, disabled: s } = a, c = (e) => {
		s || (r(e), i());
	};
	return /* @__PURE__ */ t("div", {
		className: "flex flex-wrap gap-3",
		children: o.map((r) => /* @__PURE__ */ t("div", {
			className: e("flex min-h-10 min-w-20 grow basis-auto items-center justify-center rounded-md border border-solid border-f1-border px-3 py-1.5 text-center font-medium", s ? "cursor-not-allowed" : "cursor-pointer", n === r.value && "border-f1-border-selected bg-f1-background-selected-secondary"),
			onClick: () => c(r.value),
			children: /* @__PURE__ */ t("span", {
				className: "text-base font-medium leading-tight",
				children: r.label
			})
		}, r.value))
	});
}
//#endregion
export { n as RatingQuestionField };
