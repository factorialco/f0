import { jsx as l, jsxs as f } from "react/jsx-runtime";
import { cn as x } from "../../../../../lib/utils.js";
import { useSurveyFormBuilderContext as m } from "../../Context.js";
import { BaseQuestion as d } from "../BaseQuestion/index.js";
import { useQuestionDisabled as b } from "../BaseQuestion/useQuestionDisabled.js";
import { useI18n as k } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as o } from "../../../../../components/F0Checkbox/F0Checkbox.js";
const g = {
  fieldSizing: "content"
}, E = ({
  value: n,
  label: r,
  ...e
}) => {
  const { onQuestionChange: i, answering: s, disabled: u } = m(), h = b(e), { t: a } = k();
  if (s)
    return /* @__PURE__ */ l(d, { ...e, children: /* @__PURE__ */ l("div", { className: "px-0.5", children: /* @__PURE__ */ l(
      o,
      {
        id: e.id,
        checked: n ?? !1,
        onCheckedChange: (t) => {
          i?.({
            ...e,
            type: "checkbox",
            label: r,
            value: t || null
          });
        },
        disabled: h,
        title: r
      }
    ) }) });
  const c = u || e.locked;
  return /* @__PURE__ */ l(d, { ...e, children: /* @__PURE__ */ f("div", { className: "flex items-start px-0.5", children: [
    /* @__PURE__ */ l(o, { checked: !1, disabled: !0, hideLabel: !0, presentational: !0 }),
    /* @__PURE__ */ l(
      "textarea",
      {
        value: r,
        placeholder: a("surveyFormBuilder.checkboxQuestion.placeholder"),
        "aria-label": a("surveyFormBuilder.checkboxQuestion.placeholder"),
        onChange: (t) => {
          i?.({
            ...e,
            type: "checkbox",
            label: t.target.value
          });
        },
        disabled: !!c,
        className: x(
          "w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary",
          c && "cursor-not-allowed opacity-50"
        ),
        style: g
      }
    )
  ] }) });
};
export {
  E as CheckboxQuestion
};
