import { jsx as t } from "react/jsx-runtime";
import { useSurveyFormBuilderContext as u } from "../../Context.js";
import { BaseQuestion as f } from "../BaseQuestion/index.js";
import { useQuestionDisabled as v } from "../BaseQuestion/useQuestionDisabled.js";
import { F0FormField as x } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useI18n as F } from "../../../../../lib/providers/i18n/i18n-provider.js";
const U = [
  "image/*",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv"
], h = () => ({
  upload: async (o) => ({
    type: "success",
    value: `local-${o.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
}), E = ({
  value: o,
  useUpload: l,
  accept: a,
  maxSizeMB: i,
  ...e
}) => {
  const { onQuestionChange: n, useUpload: p } = u(), s = v(e), { t: r } = F(), c = l ?? p, d = {
    id: e.id,
    type: "file",
    label: r("surveyFormBuilder.answer.label"),
    multiple: !0,
    accept: a ?? U,
    maxSizeMB: i,
    useUpload: c ?? h
  };
  return /* @__PURE__ */ t(f, { ...e, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
    x,
    {
      field: d,
      value: o ?? [],
      onChange: (m) => {
        n?.({
          ...e,
          type: "file",
          value: m || null
        });
      },
      disabled: s,
      hideLabel: !0
    }
  ) }) });
};
export {
  U as DEFAULT_FILE_ACCEPT,
  E as FileQuestion
};
