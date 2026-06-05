import { jsxs as g, jsx as o } from "react/jsx-runtime";
import { cn as h } from "../../../../lib/utils.js";
import { RadioIndicator as x } from "./RadioIndicator.js";
import { useI18n as y } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as b } from "../../../../components/F0Checkbox/F0Checkbox.js";
const F = ({
  mode: n,
  hasSelection: a,
  hasCustomText: i,
  customAnswerText: s,
  isCustomAnswerActive: r,
  canProceed: l,
  inputRef: c,
  onActivate: d,
  onChangeText: p,
  onToggleActive: f,
  onConfirm: u
}) => {
  const t = y().ai.clarifyingQuestion.typeYourAnswer, m = n === "single" ? /* @__PURE__ */ o(x, { isSelected: i && !a }) : /* @__PURE__ */ o(
    b,
    {
      checked: r,
      onCheckedChange: () => f(!r),
      title: t,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: h(
        "flex items-center gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      ),
      children: [
        m,
        /* @__PURE__ */ o(
          "input",
          {
            ref: c,
            type: "text",
            value: s ?? "",
            onChange: (e) => p(e.target.value),
            onFocus: d,
            onKeyDown: (e) => {
              e.key === "Enter" && l && (e.preventDefault(), u());
            },
            placeholder: t,
            "aria-label": t,
            className: "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
};
export {
  F as CustomAnswerRow
};
