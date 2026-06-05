import { jsx as r } from "react/jsx-runtime";
import { useSurveyFormBuilderContext as m } from "../../Context.js";
import { BaseQuestion as c } from "../BaseQuestion/index.js";
import { useQuestionDisabled as s } from "../BaseQuestion/useQuestionDisabled.js";
import { F0FormField as f } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useI18n as h } from "../../../../../lib/providers/i18n/i18n-provider.js";
const g = ({
  value: t,
  ...e
}) => {
  const { t: l } = h(), { onQuestionChange: d, answering: u } = m(), n = s(e), i = l("surveyFormBuilder.answer.linkPlaceholder"), o = {
    id: e.id,
    type: "text",
    inputType: "url",
    label: l("surveyFormBuilder.answer.label"),
    placeholder: i,
    clearable: !e.required
  };
  return /* @__PURE__ */ r(c, { ...e, children: /* @__PURE__ */ r("div", { className: "px-0.5", children: /* @__PURE__ */ r(
    f,
    {
      field: o,
      value: u ? t ?? "" : i,
      onChange: (a) => {
        d?.({
          ...e,
          type: "link",
          value: a || null
        });
      },
      disabled: n,
      hideLabel: !0
    }
  ) }) });
};
export {
  g as LinkQuestion
};
