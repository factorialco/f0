import { detectRatingOptionType as e } from "../../lib.js";
import { useSurveyFormBuilderContext as t } from "../../Context.js";
import { BaseQuestion as n } from "../BaseQuestion/index.js";
import { ScoreEditOption as r } from "./ScoreEditOption.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseScoreQuestion/index.tsx
var a = ({ options: a, value: o, ...s }) => {
	let { onQuestionChange: c, disabled: l, answering: u, getSectionContainingQuestion: d } = t(), f = d(s.id)?.locked || s.locked, p = e(a) === "emojis", m = (e) => {
		c?.({
			id: s.id,
			value: e,
			type: "rating"
		});
	}, h = (e, t) => {
		let n = a.map((n) => n.value === e ? {
			...n,
			label: t
		} : n);
		c?.({
			id: s.id,
			type: "rating",
			value: o,
			options: n
		});
	};
	return /* @__PURE__ */ i(n, {
		...s,
		children: /* @__PURE__ */ i("div", {
			className: "grid grid-cols-3 gap-3 @md:grid-cols-5",
			children: a.map((e) => /* @__PURE__ */ i(r, {
				option: e,
				selected: o === e.value,
				onClick: m,
				onChangeLabel: h,
				disabled: (l || f) && !u,
				isEmojiMode: !u && p
			}, e.value))
		})
	});
};
//#endregion
export { a as BaseScoreQuestion };
