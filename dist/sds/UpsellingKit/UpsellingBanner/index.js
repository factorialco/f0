import { jsxs as p, jsx as n } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { withDataTestId as g } from "../../../lib/data-testid/index.js";
import { BaseBanner as v } from "../../ai/Banners/BaseBanner/index.js";
import { UpsellingButton as d } from "../UpsellingButton/index.js";
import { F0Button as u } from "../../../components/F0Button/F0Button.js";
const a = f(
  function({ primaryAction: r, secondaryAction: s, ...t }, l) {
    const o = (e) => e.variant === "promote" ? /* @__PURE__ */ n(
      d,
      {
        label: e.label,
        onRequest: async () => {
          await e.onClick();
        },
        errorMessage: e.errorMessage,
        successMessage: e.successMessage,
        loadingState: e.loadingState,
        nextSteps: e.nextSteps,
        closeLabel: e.closeLabel,
        showIcon: e.showIcon,
        showConfirmation: e.showConfirmation,
        variant: e.variant
      }
    ) : /* @__PURE__ */ n(
      u,
      {
        onClick: e.onClick,
        label: e.label,
        variant: e.variant || "default",
        size: "md",
        icon: e.icon
      }
    ), i = r?.variant !== "promote" ? r : void 0, m = s?.variant !== "promote" ? s : void 0;
    return /* @__PURE__ */ p(
      v,
      {
        ref: l,
        ...t,
        primaryAction: i,
        secondaryAction: m,
        children: [
          r?.variant === "promote" && o(r),
          s?.variant === "promote" && o(s)
        ]
      }
    );
  }
);
a.displayName = "UpsellingBanner";
const S = g(a);
export {
  S as UpsellingBanner
};
