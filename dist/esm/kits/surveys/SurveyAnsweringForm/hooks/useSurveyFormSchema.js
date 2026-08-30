import { f0FormField as e } from "../../../../patterns/F0Form/f0Schema.js";
import { F0FormField as t } from "../../../../patterns/F0FormField/F0FormField.js";
import { BaseQuestion as n } from "../../SurveyFormBuilder/QuestionTypes/BaseQuestion/index.js";
import { DEFAULT_FILE_ACCEPT as r } from "../../SurveyFormBuilder/QuestionTypes/FileQuestion/index.js";
import { RatingQuestionField as i } from "../components/RatingQuestionField.js";
import { SelectQuestionField as a } from "../components/SelectQuestionField.js";
import { useMemo as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { z as c } from "zod";
//#region src/kits/surveys/SurveyAnsweringForm/hooks/useSurveyFormSchema.tsx
var l = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, u = () => ({
	upload: async (e) => ({
		type: "success",
		value: `local-${e.name}-${Date.now()}`
	}),
	cancelUpload: () => {},
	progress: 0,
	status: "idle"
});
function d(e, t) {
	return c.string().optional().superRefine((n, r) => {
		e && (!n || n.trim() === "") && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function f(e, t) {
	return c.string().optional().superRefine((n, r) => {
		if (e && (!n || n.trim() === "")) {
			r.addIssue({
				code: "custom",
				message: t("forms.validation.required")
			});
			return;
		}
		n && !l.test(n) && r.addIssue({
			code: "custom",
			message: t("surveyFormBuilder.answer.invalidUrl")
		});
	});
}
function p(e, t) {
	return c.number().optional().superRefine((n, r) => {
		e && n == null && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function m(e, t) {
	return c.array(c.string()).optional().superRefine((n, r) => {
		e && (!n || n.length === 0) && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function h(e, t) {
	return c.date().optional().superRefine((n, r) => {
		e && !n && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function g(e, t) {
	return c.array(c.string()).optional().superRefine((n, r) => {
		e && (!n || n.length === 0) && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function _(e, t) {
	return c.boolean().optional().superRefine((n, r) => {
		e && !n && r.addIssue({
			code: "custom",
			message: t("forms.validation.required")
		});
	});
}
function v(e, t) {
	let n = t?.[e.id];
	if (n) return n.value;
	if (e.type === "multi-select" || e.type === "dropdown-multi") return [];
	let r = e;
	return r.value !== void 0 && r.value !== null ? r.value : null;
}
function y(e) {
	let t = [];
	for (let n of e) if (n.type === "section") for (let e of n.section.questions ?? []) t.push({
		id: e.id,
		type: e.type,
		required: e.required,
		sectionTitle: n.section.title,
		sectionDescription: n.section.description
	});
	else t.push({
		id: n.question.id,
		type: n.question.type,
		required: n.question.required
	});
	return t;
}
function b(o, l, v, y = !1, b = y, x, S) {
	let C = o.title ?? "", w = {
		label: C,
		section: v
	}, T = {
		id: o.id,
		title: o.title,
		description: o.description,
		type: o.type,
		required: o.required
	};
	switch (o.type) {
		case "text": {
			let r = {
				id: o.id,
				type: "text",
				label: C,
				placeholder: l("surveyFormBuilder.answer.textPlaceholder"),
				disabled: b
			};
			return e(d(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: r,
							value: e ?? "",
							onChange: i,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "longText": {
			let r = {
				id: o.id,
				type: "textarea",
				label: C,
				placeholder: l("surveyFormBuilder.answer.textPlaceholder"),
				rows: 4,
				disabled: b
			};
			return e(d(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: r,
							value: e ?? "",
							onChange: i,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "numeric": {
			let r = {
				id: o.id,
				type: "number",
				label: C,
				placeholder: l("surveyFormBuilder.answer.numericPlaceholder"),
				disabled: b
			};
			return e(p(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: r,
							value: e,
							onChange: i,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "link": {
			let r = {
				id: o.id,
				type: "text",
				inputType: "url",
				label: C,
				placeholder: l("surveyFormBuilder.answer.linkPlaceholder"),
				disabled: b
			};
			return e(f(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: r,
							value: e ?? "",
							onChange: i,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "date": {
			let r = {
				id: o.id,
				type: "date",
				label: C,
				clearable: !o.required,
				disabled: b
			};
			return e(h(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: r,
							value: e,
							onChange: i,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "dropdown-single": {
			let r = S?.[o.datasetKey];
			if (!r) throw Error(`Dataset "${o.datasetKey}" not found for dropdown-single`);
			let i = o.showSearchBox ?? !0, a = {
				id: o.id,
				type: "select",
				label: C,
				placeholder: r.placeholder ?? l("surveyFormBuilder.answer.dropdownPlaceholder"),
				source: r.dataSource,
				mapOptions: r.mapOptions,
				icon: r.icon,
				clearable: !o.required,
				multiple: !1,
				disabled: b,
				showSearchBox: i,
				searchBoxPlaceholder: o.searchBoxPlaceholder
			};
			return e(d(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: i, onBlur: c, error: l }) => {
					let u = o.allowCreate && r.onCreate ? {
						...a,
						onCreate: (e) => r.onCreate(e).then((e) => {
							i(r.mapOptions(e).value);
						}, (e) => {
							console.warn("[SurveyAnsweringForm] onCreate failed:", e);
						})
					} : a;
					return /* @__PURE__ */ s(n, {
						...T,
						children: /* @__PURE__ */ s("div", {
							className: "flex flex-col items-start px-0.5 [&>div]:w-full",
							children: /* @__PURE__ */ s(t, {
								field: u,
								value: e ?? "",
								onChange: i,
								onBlur: c,
								error: !!l,
								hideLabel: !0
							})
						})
					});
				}
			});
		}
		case "dropdown-multi": {
			let r = S?.[o.datasetKey];
			if (!r) throw Error(`Dataset "${o.datasetKey}" not found for dropdown-multi`);
			let i = o.showSearchBox ?? !0, a = {
				id: o.id,
				type: "select",
				label: C,
				placeholder: r.placeholder ?? l("surveyFormBuilder.answer.dropdownPlaceholder"),
				source: r.dataSource,
				mapOptions: r.mapOptions,
				icon: r.icon,
				clearable: !o.required,
				multiple: !0,
				disabled: b,
				showSearchBox: i,
				searchBoxPlaceholder: o.searchBoxPlaceholder
			};
			return e(m(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: r, onBlur: i, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "flex flex-col items-start px-0.5 [&>div]:w-full",
						children: /* @__PURE__ */ s(t, {
							field: a,
							value: e ?? [],
							onChange: r,
							onBlur: i,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "select": {
			let t = {
				options: o.options,
				type: "select",
				required: o.required,
				disabled: b,
				showAnswerValidation: y
			};
			return e(d(!!o.required, l), {
				...w,
				fieldType: "custom",
				fieldConfig: t,
				render: ({ value: e, onChange: t, onBlur: r, config: i }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s(a, {
						value: e,
						onChange: t,
						onBlur: r,
						config: i
					})
				})
			});
		}
		case "multi-select": {
			let t = {
				options: o.options,
				type: "multi-select",
				required: o.required,
				disabled: b,
				showAnswerValidation: y
			};
			return e(m(!!o.required, l), {
				...w,
				fieldType: "custom",
				fieldConfig: t,
				render: ({ value: e, onChange: t, onBlur: r, config: i }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s(a, {
						value: e,
						onChange: t,
						onBlur: r,
						config: i
					})
				})
			});
		}
		case "rating": {
			let t = {
				options: o.options,
				disabled: b
			};
			return e(p(!!o.required, l), {
				...w,
				fieldType: "custom",
				fieldConfig: t,
				render: ({ value: e, onChange: t, onBlur: r, config: a }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s(i, {
						value: e,
						onChange: t,
						onBlur: r,
						config: a
					})
				})
			});
		}
		case "file": {
			let i = o, a = i.useUpload ?? x, c = {
				id: o.id,
				type: "file",
				label: C,
				multiple: !0,
				accept: i.accept ?? r,
				maxSizeMB: i.maxSizeMB,
				useUpload: a ?? u,
				disabled: b || !a
			};
			return e(g(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: r, onBlur: i, error: a }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: c,
							value: e ?? [],
							onChange: r,
							onBlur: i,
							error: !!a,
							hideLabel: !0
						})
					})
				})
			});
		}
		case "checkbox": {
			let r = o, i = {
				id: o.id,
				type: "checkbox",
				label: r.label || C,
				disabled: b
			};
			return e(_(!!o.required, l), {
				...w,
				fieldType: "custom",
				render: ({ value: e, onChange: r, onBlur: a, error: o }) => /* @__PURE__ */ s(n, {
					...T,
					children: /* @__PURE__ */ s("div", {
						className: "px-0.5",
						children: /* @__PURE__ */ s(t, {
							field: i,
							value: e ?? !1,
							onChange: r,
							onBlur: a,
							error: !!o,
							hideLabel: !0
						})
					})
				})
			});
		}
		default: return e(c.unknown(), {
			...w,
			fieldType: "custom",
			render: () => null
		});
	}
}
function x(e, t, n, r, i, a, s = !1, l = s, u, d) {
	return o(() => {
		let o = {}, f = {}, p = {}, m = y(e), h = t === "stepped";
		for (let c of e) if (c.type === "section") {
			let e = c.section, m = e.id;
			t === "all-questions" && (p[m] = {
				title: e.title ?? "",
				description: e.description,
				withInset: !0
			});
			for (let c of e.questions ?? []) h && i && c.id !== i || (o[c.id] = b(c, n, t === "all-questions" ? m : void 0, s, l, u, d), f[c.id] = a?.[c.id] ?? v(c, r));
		} else {
			let e = c.question;
			if (h && i && e.id !== i) continue;
			o[e.id] = b(e, n, void 0, s, l, u, d), f[e.id] = a?.[e.id] ?? v(e, r);
		}
		return {
			schema: c.object(o),
			defaultValues: f,
			flatQuestions: m,
			sections: p
		};
	}, [
		e,
		t,
		n,
		r,
		i,
		s,
		l,
		u,
		d
	]);
}
//#endregion
export { y as extractFlatQuestions, x as useSurveyFormSchema };
