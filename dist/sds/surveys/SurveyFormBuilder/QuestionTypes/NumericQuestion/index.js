import { jsx as r } from "react/jsx-runtime";
import "../../../../../icons/app/Menu.js";
import o from "../../../../../icons/app/Numbers.js";
import { useSurveyFormBuilderContext as s } from "../../Context.js";
import { BaseQuestion as c } from "../BaseQuestion/index.js";
import { useQuestionDisabled as h } from "../BaseQuestion/useQuestionDisabled.js";
import { useI18n as p } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0NumberInput as f } from "../../../../../components/F0NumberInput/F0NumberInput.js";
import { F0TextInput as x } from "../../../../../components/F0TextInput/F0TextInput.js";
const q = ({
  value: t,
  ...e
}) => {
  const { t: i } = p(), { onQuestionChange: m, answering: a } = s(), n = h(e), u = (d) => {
    m?.({
      ...e,
      type: "numeric",
      value: d
    });
  }, l = i("surveyFormBuilder.answer.numericPlaceholder");
  return /* @__PURE__ */ r(c, { ...e, children: /* @__PURE__ */ r("div", { className: "px-0.5", children: a ? /* @__PURE__ */ r(
    f,
    {
      locale: "en-US",
      size: "md",
      value: t,
      onChange: u,
      disabled: n,
      label: i("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      required: e.required,
      maxDecimals: 0,
      placeholder: l,
      icon: o
    }
  ) : /* @__PURE__ */ r(
    x,
    {
      type: "text",
      size: "md",
      value: l,
      onChange: () => {
      },
      disabled: !0,
      label: i("surveyFormBuilder.answer.label"),
      hideLabel: !0,
      icon: o
    }
  ) }) });
};
export {
  q as NumericQuestion
};
