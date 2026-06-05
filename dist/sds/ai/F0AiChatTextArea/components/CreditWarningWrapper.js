import { jsxs as r, jsx as i } from "react/jsx-runtime";
import m from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { cn as s } from "../../../../lib/utils.js";
import { useI18n as l } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as f } from "../../../../components/F0Button/F0Button.js";
const a = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, u = ({
  creditWarning: e,
  children: n
}) => {
  const o = l();
  if (!e) return n;
  const t = {
    ...a[e.level],
    text: o.ai.creditWarning.soft
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: s("flex flex-col rounded-xl", t.bg, t.formBorder),
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ i(
            "p",
            {
              className: s("min-w-0 flex-1 text-sm font-medium", t.fontColor),
              children: t.text
            }
          ),
          /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center gap-1", children: [
            e.onGetCredits && /* @__PURE__ */ i(
              f,
              {
                label: o.ai.creditWarning.getCredits ?? "",
                size: "sm",
                variant: "outline",
                tooltip: o.ai.creditWarning.getCredits ?? "",
                onClick: e.onGetCredits
              }
            ),
            e.onDismiss && /* @__PURE__ */ i(
              f,
              {
                label: o.ai.creditWarning.dismiss ?? "",
                size: "sm",
                variant: "ghost",
                icon: m,
                hideLabel: !0,
                onClick: e.onDismiss
              }
            )
          ] })
        ] }),
        n
      ]
    }
  );
};
export {
  u as CreditWarningWrapper
};
