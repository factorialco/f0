import { jsx as r } from "react/jsx-runtime";
import { useSurveyFormBuilderContext as m } from "../../Context.js";
import { BaseQuestion as u } from "../BaseQuestion/index.js";
import { useQuestionDisabled as c } from "../BaseQuestion/useQuestionDisabled.js";
import { F0FormField as s } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useI18n as f } from "../../../../../lib/providers/i18n/i18n-provider.js";
const B = ({
  value: i,
  ...e
}) => {
  const { onQuestionChange: d } = m(), l = c(e), { t } = f(), a = {
    id: e.id,
    type: "date",
    label: t("surveyFormBuilder.answer.label"),
    clearable: !e.required
  };
  return /* @__PURE__ */ r(u, { ...e, children: /* @__PURE__ */ r("div", { className: "px-0.5", children: /* @__PURE__ */ r(
    s,
    {
      field: a,
      value: i ?? void 0,
      onChange: (o) => {
        d?.({
          ...e,
          type: "date",
          value: o ?? void 0
        });
      },
      disabled: l,
      hideLabel: !0
    }
  ) }) });
};
export {
  B as DateQuestion
};
