import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/CheckCircleLine.js";
import r from "../../../../icons/app/Cross.js";
import { F0Checkbox as i } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyAnsweringForm/components/SelectQuestionField.tsx
function s({ checked: t }) {
	return /* @__PURE__ */ a("div", {
		"aria-hidden": "true",
		className: e("flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors", t ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"),
		children: t && /* @__PURE__ */ a("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
	});
}
function c({ value: c, onChange: l, onBlur: u, config: d }) {
	let { options: f, type: p, required: m, disabled: h, showAnswerValidation: g } = d, _ = f.some((e) => e.correct), v = !!g && _, y = (e) => {
		h || p === "select" && (l(!m && c === e ? void 0 : e), u());
	}, b = (e) => {
		if (h || p !== "multi-select") return;
		let t = Array.isArray(c) ? c : [];
		l(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]), u();
	}, x = (e) => {
		p === "select" ? y(e) : b(e);
	};
	return /* @__PURE__ */ a("div", {
		className: "-mx-0.5 flex flex-col items-start",
		children: f.map((l) => {
			let u = p === "select" ? c === l.value : Array.isArray(c) && c.includes(l.value);
			return /* @__PURE__ */ o("div", {
				className: e("flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5", h ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"),
				onClick: (e) => {
					h || p === "multi-select" && e.target.closest("input") || x(l.value);
				},
				children: [
					p === "multi-select" ? /* @__PURE__ */ a(i, {
						title: l.label,
						checked: !!u,
						onCheckedChange: () => b(l.value),
						hideLabel: !0
					}) : /* @__PURE__ */ a(s, { checked: !!u }),
					/* @__PURE__ */ a("p", {
						className: "flex-1 font-medium",
						children: l.label
					}),
					v ? /* @__PURE__ */ a("div", {
						className: "min-h-8 p-1",
						children: /* @__PURE__ */ a(t, {
							icon: l.correct ? n : r,
							color: l.correct ? "positive" : "critical",
							"aria-hidden": !0
						})
					}) : /* @__PURE__ */ a("div", { className: "min-h-8" })
				]
			}, l.value);
		})
	});
}
//#endregion
export { c as SelectQuestionField };
