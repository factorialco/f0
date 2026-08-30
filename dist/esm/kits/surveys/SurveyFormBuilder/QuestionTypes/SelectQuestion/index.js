import e from "../../../../../icons/app/Add.js";
import { useI18n as t } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../../../components/F0Button/F0Button.js";
import { useSurveyFormBuilderContext as r } from "../../Context.js";
import { DragProvider as i } from "../../DragContext.js";
import { BaseQuestion as a } from "../BaseQuestion/index.js";
import { SelectOption as o } from "./SelectOption/index.js";
import { useEffect as s, useMemo as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { Reorder as d } from "motion/react";
import { nanoid as f } from "nanoid";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/SelectQuestion/index.tsx
var p = ({ options: p, ...m }) => {
	let { onQuestionChange: h, disabled: g, answering: _, getSectionContainingQuestion: v } = r(), y = new Set(p.map((e) => e.value)).size !== p.length, b = v(m.id)?.locked || m.locked, { t: x } = t(), S = c(() => ({
		id: m.id,
		type: m.type,
		options: p
	}), [
		m.id,
		m.type,
		p
	]);
	s(() => {
		if (!y) return;
		let e = p.map((e) => ({
			...e,
			value: e.label.toLowerCase().replace(/\s+/g, "-")
		})), t = {
			id: m.id,
			type: m.type
		}, n = new Set(e.map((e) => e.value)).size !== e.length;
		if (!n) {
			h?.({
				...t,
				options: e
			});
			return;
		}
		e = e.map((e) => ({
			...e,
			value: f()
		})), n && h?.({
			...t,
			options: e
		}), h?.({
			...t,
			options: e
		});
	}, [
		y,
		h,
		p,
		m.id,
		m.type
	]);
	let C = (e) => {
		let t = p;
		e.action === "remove" && (t = p.filter((t) => t.value !== e.value)), e.action === "mark-as-correct" && (t = p.map((t) => ({
			...t,
			correct: t.value === e.value ? !t.correct : t.correct
		}))), h?.({
			...S,
			options: t
		});
	}, w = (e) => {
		if (m.type === "select") {
			let t = !m.required && m.value === e ? null : e;
			h?.({
				...S,
				type: m.type,
				value: t
			});
		} else if (m.type === "multi-select") {
			let t = Array.isArray(m.value) ? m.value : [], n = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
			h?.({
				...S,
				type: m.type,
				value: n
			});
		}
	}, T = (e) => {
		let t = p.map((t, n) => ({
			...t,
			...n === e.index ? {
				value: e.value,
				label: e.newLabel
			} : {}
		}));
		h?.({
			...S,
			options: t
		});
	}, E = () => {
		let e = p.length, t = {
			value: `new-option-${e + 1}`,
			label: x("surveyFormBuilder.selectQuestion.newOption", { number: e + 1 })
		};
		h?.({
			...S,
			options: [...p, t]
		});
	}, D = (e) => {
		h?.({
			...S,
			options: e
		});
	};
	return y ? null : /* @__PURE__ */ l(a, {
		...m,
		children: /* @__PURE__ */ u("div", {
			className: "-mx-0.5 flex flex-col items-start [&>div]:w-full",
			children: [/* @__PURE__ */ l(i, { children: /* @__PURE__ */ l(d.Group, {
				axis: "y",
				values: p,
				onReorder: D,
				as: "div",
				children: p.map((e, t) => {
					let n = m.type === "select" ? m.value === e.value : Array.isArray(m.value) && m.value.includes(e.value);
					return /* @__PURE__ */ l("div", {
						className: "w-full [&>div]:w-full",
						children: /* @__PURE__ */ l(o, {
							index: t,
							option: e,
							correct: e.correct,
							onClick: w,
							onClickAction: C,
							onChangeLabel: T,
							disabled: g,
							answering: _,
							selected: n,
							locked: b,
							type: m.type
						})
					}, e.value);
				})
			}) }), !g && !_ && !b && /* @__PURE__ */ l("div", {
				className: "opacity-70",
				children: /* @__PURE__ */ l(n, {
					label: x("surveyFormBuilder.selectQuestion.addOption"),
					variant: "ghost",
					icon: e,
					onClick: E
				})
			})]
		})
	});
};
//#endregion
export { p as SelectQuestion };
