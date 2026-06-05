import { jsx as d } from "react/jsx-runtime";
import { useMemo as x } from "react";
import { useSurveyFormBuilderContext as f } from "../../Context.js";
import { BaseQuestion as y } from "../BaseQuestion/index.js";
import { useQuestionDisabled as h } from "../BaseQuestion/useQuestionDisabled.js";
import { F0FormField as v } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useI18n as F } from "../../../../../lib/providers/i18n/i18n-provider.js";
const D = ({
  value: i,
  ...r
}) => {
  const { onQuestionChange: t, answering: a } = f(), u = h(r), { t: e } = F(), l = e("surveyFormBuilder.answer.textPlaceholder"), c = x(
    () => r.type === "text" ? {
      id: r.id,
      type: "text",
      label: e("surveyFormBuilder.answer.label"),
      placeholder: l,
      clearable: !r.required
    } : {
      id: r.id,
      type: "textarea",
      label: e("surveyFormBuilder.answer.label"),
      placeholder: l,
      rows: 4
    },
    [
      r.id,
      r.type,
      r.required,
      l,
      e
    ]
  );
  return /* @__PURE__ */ d(y, { ...r, children: /* @__PURE__ */ d("div", { className: "px-0.5", children: /* @__PURE__ */ d(
    v,
    {
      field: c,
      value: a ? i ?? "" : l,
      onChange: (m) => {
        t?.({
          ...r,
          value: m
        });
      },
      disabled: u,
      hideLabel: !0
    }
  ) }) });
};
export {
  D as TextQuestion
};
