import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useI18n as m } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
const u = ({
  canProceed: r,
  submitDisabled: i,
  label: o,
  onConfirm: a,
  onSkip: t,
  showSkip: s
}) => {
  const l = m();
  return /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center", children: s && t && /* @__PURE__ */ e(
      n,
      {
        variant: "outline",
        label: l.ai.clarifyingQuestion.skip,
        onClick: t,
        disabled: i
      }
    ) }),
    /* @__PURE__ */ e(
      n,
      {
        disabled: !r || i,
        variant: "default",
        label: o,
        onClick: a
      }
    )
  ] });
};
export {
  u as ConfirmFooter
};
