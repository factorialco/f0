import { jsx as t, jsxs as I } from "react/jsx-runtime";
import { useMemo as d } from "react";
import { F0DialogInternal as T } from "../../patterns/F0Dialog/F0DialogInternal.js";
import C from "../../icons/app/ArrowLeft.js";
import D from "../../icons/app/ArrowRight.js";
import { useI18n as j } from "../../lib/providers/i18n/i18n-provider.js";
import { WizardProvider as A } from "./components/WizardProvider.js";
import { WizardSteps as R } from "./components/WizardSteps.js";
import { useWizardNavigation as k } from "./hooks/useWizardNavigation.js";
const E = () => {
}, M = ({
  steps: e,
  children: v,
  isOpen: g,
  onClose: l = E,
  title: b,
  width: x = "xl",
  defaultStepIndex: i,
  nextLabel: h,
  previousLabel: S,
  submitLabel: N,
  onSubmit: w,
  onStepChanged: z,
  allowStepSkipping: s = !1,
  autoCloseOnLastStepSubmit: y = !1,
  autoSkipCompletedSteps: c = !1
}) => {
  const F = d(() => {
    if (i !== void 0) return i;
    if (!c) return 0;
    const p = e.findIndex(
      (W) => W.isCompleted?.() !== !0
    );
    return p === -1 ? e.length - 1 : p;
  }, [i, c, e]), r = k({
    steps: e,
    defaultStepIndex: F,
    onSubmit: w,
    onStepChanged: z,
    allowStepSkipping: s,
    autoCloseOnLastStepSubmit: y,
    onClose: l
  }), n = j(), o = e[r.currentStep], f = r.currentStep === 0, a = r.currentStep === e.length - 1, m = a ? o?.nextLabel ?? N ?? n.wizard.submit : o?.nextLabel ?? h ?? n.wizard.next, u = o?.previousLabel ?? S ?? n.wizard.previous, L = d(
    () => ({
      label: m,
      icon: a ? void 0 : D,
      onClick: () => {
        r.goNext();
      },
      disabled: o?.isCompleted?.() === !1 || o?.hasErrors?.() === !0,
      loading: r.loading
    }),
    [m, a, r, o]
  ), P = d(
    () => f ? void 0 : {
      label: u,
      icon: C,
      onClick: r.goPrevious,
      disabled: r.loading
    },
    [f, u, r]
  );
  return /* @__PURE__ */ t(
    T,
    {
      isOpen: g,
      onClose: l,
      width: x,
      title: b,
      primaryAction: L,
      secondaryAction: P,
      disableContentPadding: !0,
      children: /* @__PURE__ */ t(
        A,
        {
          currentStep: r.currentStep,
          totalSteps: e.length,
          loading: r.loading,
          goToStep: r.goToStep,
          goNext: r.goNext,
          goPrevious: r.goPrevious,
          steps: e,
          allowStepSkipping: s,
          children: /* @__PURE__ */ I("div", { className: "flex h-[58vh] flex-1 flex-row", children: [
            /* @__PURE__ */ t("div", { className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2", children: /* @__PURE__ */ t(R, {}) }),
            /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-8", children: v({
              currentStep: r.currentStep,
              goToStep: r.goToStep
            }) })
          ] })
        }
      )
    }
  );
};
M.displayName = "F0Wizard";
export {
  M as F0Wizard
};
