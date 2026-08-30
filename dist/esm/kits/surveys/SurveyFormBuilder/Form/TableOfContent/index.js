import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0DialogContext as t } from "../../../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { F0TableOfContentPopover as n } from "../../../../../components/F0TableOfContentPopover/F0TableOfContentPopover.js";
import { useSurveyFormBuilderContext as r } from "../../Context.js";
import { useTableOfContentItems as i } from "./useTableOfContentItems.js";
import { useCallback as a, useContext as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/Form/TableOfContent/index.tsx
var c = "co-creation-section-", l = "co-creation-question-";
function u(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	for (let e of t) if (e.type === "section") {
		n.set(e.section.id, e.section);
		for (let t of e.section.questions ?? []) r.set(t.id, t);
	} else r.set(e.question.id, e.question);
	let i = [], a = (e) => {
		if (e.id.startsWith(c)) {
			let t = e.id.slice(20), o = n.get(t);
			if (!o) return;
			let s = (e.children ?? []).filter((e) => e.id.startsWith(l)).map((e) => r.get(e.id.slice(21))).filter((e) => e != null);
			i.push({
				type: "section",
				section: {
					...o,
					questions: s
				}
			});
			for (let t of e.children ?? []) t.id.startsWith(c) && a(t);
			return;
		}
		if (e.id.startsWith(l)) {
			let t = e.id.slice(21), n = r.get(t);
			n && i.push({
				type: "question",
				question: n
			});
		}
	};
	for (let t of e) a(t);
	return i;
}
var d = ({ elements: c, onChange: l, answering: d }) => {
	let { t: f } = e(), { disabled: p } = r(), { portalContainer: m } = o(t), h = i(c, {
		untitledSectionLabel: f("surveyFormBuilder.labels.sectionTitlePlaceholder"),
		untitledQuestionLabel: f("surveyFormBuilder.labels.titlePlaceholder"),
		duplicateQuestionLabel: f("surveyFormBuilder.actions.duplicateQuestion"),
		deleteQuestionLabel: f("surveyFormBuilder.actions.deleteQuestion"),
		duplicateSectionLabel: f("surveyFormBuilder.actions.duplicateSection"),
		deleteSectionLabel: f("surveyFormBuilder.actions.deleteSection"),
		questionOptionsLabel: f("surveyFormBuilder.labels.questionOptions"),
		requiredLabel: f("surveyFormBuilder.labels.required"),
		questionTypeLabel: f("surveyFormBuilder.labels.questionType"),
		singleSelectionLabel: f("surveyFormBuilder.labels.singleSelection"),
		multiSelectionLabel: f("surveyFormBuilder.labels.multiSelection")
	}), g = a((e) => {
		l(u(e, c));
	}, [c, l]);
	return /* @__PURE__ */ s("div", {
		className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block",
		children: /* @__PURE__ */ s(n, {
			items: h,
			barsAlign: "left",
			size: "md",
			collapsible: !0,
			showChildrenCounter: !0,
			sortable: !d && !p,
			onReorder: g,
			portalContainer: m
		})
	});
};
//#endregion
export { d as TableOfContent };
