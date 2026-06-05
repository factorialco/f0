import { jsx as l } from "react/jsx-runtime";
import { useSurveyFormBuilderContext as p } from "../../Context.js";
import { BaseQuestion as x } from "../BaseQuestion/index.js";
import { useQuestionDisabled as b } from "../BaseQuestion/useQuestionDisabled.js";
import { F0FormField as g } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useI18n as B } from "../../../../../lib/providers/i18n/i18n-provider.js";
const j = ({
  datasetKey: d,
  showSearchBox: u,
  searchBoxPlaceholder: c,
  ...e
}) => {
  const { onQuestionChange: r, answering: a, datasets: m } = p(), w = b(e), { t: s } = B(), o = m?.[d];
  if (!o)
    throw new Error(`Dataset "${d}" not found for ${e.type}`);
  const t = e.type === "dropdown-multi", f = u ?? !0, h = e.type === "dropdown-single" ? e.allowCreate : void 0, v = a && !t && h && o.onCreate ? (n) => o.onCreate(n).then(
    (i) => {
      const C = o.mapOptions(i);
      r?.({
        id: e.id,
        type: "dropdown-single",
        value: C.value
      });
    },
    (i) => {
      console.warn("[SurveyFormBuilder] onCreate failed:", i);
    }
  ) : void 0, y = {
    id: e.id,
    type: "select",
    label: s("surveyFormBuilder.answer.label"),
    placeholder: o.placeholder ?? s("surveyFormBuilder.answer.dropdownPlaceholder"),
    source: o.dataSource,
    mapOptions: o.mapOptions,
    icon: o.icon,
    clearable: !e.required,
    multiple: t,
    showSearchBox: f,
    searchBoxPlaceholder: c,
    onCreate: v
  };
  return /* @__PURE__ */ l(x, { ...e, children: /* @__PURE__ */ l("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ l(
    g,
    {
      field: y,
      value: t ? e.value ?? [] : e.value ?? "",
      onChange: (n) => {
        r?.(t ? {
          id: e.id,
          type: "dropdown-multi",
          value: n
        } : {
          id: e.id,
          type: "dropdown-single",
          value: n
        });
      },
      disabled: !a || w,
      hideLabel: !0
    }
  ) }) });
};
export {
  j as DropdownSingleQuestion
};
