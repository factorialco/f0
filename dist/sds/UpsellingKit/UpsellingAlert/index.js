import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { F0Icon as m } from "../../../components/F0Icon/index.js";
import { withDataTestId as n } from "../../../lib/data-testid/index.js";
import { cn as o } from "../../../lib/utils.js";
import { UpsellingButton as d } from "../UpsellingButton/index.js";
function i({
  icon: l,
  title: a,
  description: r,
  action: s
}) {
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      className: "w-full rounded-md p-3 text-f1-foreground [background:hsl(var(--promote-50)/0.1)]",
      children: /* @__PURE__ */ t(
        "div",
        {
          className: o(
            "flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:justify-between",
            r ? "@xs:items-start" : "@xs:items-center"
          ),
          children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: o(
                  "flex flex-row gap-2",
                  r ? "items-start" : "items-center"
                ),
                children: [
                  l && /* @__PURE__ */ e("div", { className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border border-solid text-f1-icon-promote [background:hsl(var(--promote-50)/0.1)] [border-color:hsl(var(--promote-50)/0.1)]", children: /* @__PURE__ */ e(m, { icon: l, size: "sm" }) }),
                  /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
                    /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: a }),
                    r && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: r })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ e("div", { className: o("flex flex-shrink-0 @xs:pl-0", l && "pl-8"), children: /* @__PURE__ */ e(
              d,
              {
                label: s.label,
                onRequest: s.onRequest,
                errorMessage: s.errorMessage,
                successMessage: s.successMessage,
                loadingState: s.loadingState,
                nextSteps: s.nextSteps,
                closeLabel: s.closeLabel,
                variant: "outlinePromote",
                size: "sm"
              }
            ) })
          ]
        }
      )
    }
  ) });
}
const g = n(i);
export {
  g as UpsellingAlert
};
