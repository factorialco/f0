import { jsx as m } from "react/jsx-runtime";
import { useContext as f, useCallback as b } from "react";
import { F0DialogContext as h } from "../../../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { F0TableOfContentPopover as y } from "../../../../../components/F0TableOfContentPopover/F0TableOfContentPopover.js";
import { useSurveyFormBuilderContext as q } from "../../Context.js";
import { useTableOfContentItems as F } from "./useTableOfContentItems.js";
import { useI18n as v } from "../../../../../lib/providers/i18n/i18n-provider.js";
const d = "co-creation-section-", a = "co-creation-question-";
function B(r, l) {
  const u = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const e of l)
    if (e.type === "section") {
      u.set(e.section.id, e.section);
      for (const o of e.section.questions ?? [])
        t.set(o.id, o);
    } else
      t.set(e.question.id, e.question);
  const n = [], c = (e) => {
    if (e.id.startsWith(d)) {
      const o = e.id.slice(d.length), s = u.get(o);
      if (!s) return;
      const p = (e.children ?? []).filter((i) => i.id.startsWith(a)).map((i) => t.get(i.id.slice(a.length))).filter((i) => i != null);
      n.push({
        type: "section",
        section: { ...s, questions: p }
      });
      for (const i of e.children ?? [])
        i.id.startsWith(d) && c(i);
      return;
    }
    if (e.id.startsWith(a)) {
      const o = e.id.slice(a.length), s = t.get(o);
      s && n.push({ type: "question", question: s });
    }
  };
  for (const e of r)
    c(e);
  return n;
}
const O = ({
  elements: r,
  onChange: l,
  answering: u
}) => {
  const { t } = v(), { disabled: n } = q(), { portalContainer: c } = f(h), e = F(r, {
    untitledSectionLabel: t("surveyFormBuilder.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: t("surveyFormBuilder.labels.titlePlaceholder"),
    duplicateQuestionLabel: t("surveyFormBuilder.actions.duplicateQuestion"),
    deleteQuestionLabel: t("surveyFormBuilder.actions.deleteQuestion"),
    duplicateSectionLabel: t("surveyFormBuilder.actions.duplicateSection"),
    deleteSectionLabel: t("surveyFormBuilder.actions.deleteSection"),
    questionOptionsLabel: t("surveyFormBuilder.labels.questionOptions"),
    requiredLabel: t("surveyFormBuilder.labels.required"),
    questionTypeLabel: t("surveyFormBuilder.labels.questionType"),
    singleSelectionLabel: t("surveyFormBuilder.labels.singleSelection"),
    multiSelectionLabel: t("surveyFormBuilder.labels.multiSelection")
  }), o = b(
    (s) => {
      l(B(s, r));
    },
    [r, l]
  );
  return /* @__PURE__ */ m("div", { className: "sticky left-0 top-1/2 z-10 hidden h-0 -translate-y-12 px-2 @3xl:block", children: /* @__PURE__ */ m(
    y,
    {
      items: e,
      barsAlign: "left",
      size: "md",
      collapsible: !0,
      showChildrenCounter: !0,
      sortable: !u && !n,
      onReorder: o,
      portalContainer: c
    }
  ) });
};
export {
  O as TableOfContent
};
