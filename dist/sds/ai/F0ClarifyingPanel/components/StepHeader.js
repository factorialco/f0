import { jsxs as o, jsx as e } from "react/jsx-runtime";
import f from "../../../../icons/app/ChevronLeft.js";
import p from "../../../../icons/app/ChevronRight.js";
import h from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { useI18n as x } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as b } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
const z = ({
  question: a,
  stepLabel: t,
  isFirstStep: s,
  isFinalStep: n,
  canProceed: l,
  onBack: m,
  onNext: c,
  onCancel: d
}) => {
  const i = x();
  return /* @__PURE__ */ o("div", { className: "flex items-start gap-0.5 pl-4 pr-3", children: [
    /* @__PURE__ */ e(
      b,
      {
        className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
        lines: 3,
        children: a
      }
    ),
    t && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ e(
        r,
        {
          variant: "ghost",
          size: "sm",
          onClick: m,
          disabled: s,
          label: i.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: f
        }
      ),
      /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-f1-foreground-tertiary", children: t }),
      /* @__PURE__ */ e(
        r,
        {
          variant: "ghost",
          size: "sm",
          onClick: c,
          disabled: n || !l,
          label: i.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: p
        }
      )
    ] }),
    /* @__PURE__ */ e(
      r,
      {
        variant: "ghost",
        size: "sm",
        onClick: d,
        label: i.actions.cancel,
        hideLabel: !0,
        icon: h
      }
    )
  ] });
};
export {
  z as StepHeader
};
