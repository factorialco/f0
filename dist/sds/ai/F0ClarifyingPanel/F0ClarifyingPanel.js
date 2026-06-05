import { jsx as t, jsxs as w } from "react/jsx-runtime";
import { useRef as X } from "react";
import { useReducedMotion as b } from "../../../lib/a11y.js";
import { ConfirmFooter as Y } from "./components/ConfirmFooter.js";
import { OptionsList as Z } from "./components/OptionsList.js";
import { StepHeader as _ } from "./components/StepHeader.js";
import { motion as k } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { AnimatePresence as $ } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { useI18n as tt } from "../../../lib/providers/i18n/i18n-provider.js";
const O = "easeOut", T = 0.3, ut = ({
  clarifyingQuestion: s,
  isSubmitDisabled: c
}) => {
  const r = b() ? 0 : T;
  return /* @__PURE__ */ t(
    k.div,
    {
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: { duration: r, ease: O },
      className: "overflow-hidden",
      children: /* @__PURE__ */ t(
        et,
        {
          clarifyingQuestion: s,
          isSubmitDisabled: c
        }
      )
    }
  );
}, et = ({
  clarifyingQuestion: s,
  isSubmitDisabled: c
}) => {
  const o = tt(), r = b(), {
    currentStep: D,
    currentStepIndex: n,
    totalSteps: a,
    toggleOption: R,
    confirm: l,
    skip: F,
    cancel: C,
    back: M,
    setCustomAnswerText: N,
    setCustomAnswerActive: P,
    activateCustomAnswer: I
  } = s, {
    question: x,
    options: B,
    selectedOptionIds: m,
    selectionMode: E,
    optional: A,
    allowCustomAnswer: L,
    customAnswerText: S,
    isCustomAnswerActive: u
  } = D, v = X(null), p = E ?? "single", Q = a > 1, j = n === 0, i = n === a - 1, q = Q ? o.t("ai.clarifyingQuestion.stepOf", {
    current: String(n + 1),
    total: String(a)
  }) : void 0, d = m.length > 0, f = (S ?? "").trim().length > 0, g = d || u && f || A === !0, h = c === !0 && i, y = () => {
    h || l();
  }, K = () => {
    h || F();
  }, H = (e) => {
    const W = p === "single" && m.includes(e);
    R(e), p === "single" && !i && !W && Promise.resolve().then(l);
  }, U = i ? o.ai.clarifyingQuestion.submit : o.ai.clarifyingQuestion.next, z = A === !0 && !d && !(u && f), G = () => {
    I(), requestAnimationFrame(() => {
      v.current?.focus();
    });
  }, J = (e) => {
    e.key === "Escape" && (e.preventDefault(), C());
  }, V = r ? 0 : T / 2;
  return /* @__PURE__ */ w("div", { className: "flex flex-col", onKeyDown: J, children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ t($, { mode: "wait", initial: !1, children: /* @__PURE__ */ w(
      k.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: V, ease: O },
        children: [
          /* @__PURE__ */ t(
            _,
            {
              question: x,
              stepLabel: q,
              isFirstStep: j,
              isFinalStep: i,
              canProceed: g,
              onBack: M,
              onNext: l,
              onCancel: C
            }
          ),
          /* @__PURE__ */ t(
            Z,
            {
              mode: p,
              question: x,
              options: B,
              selectedOptionIds: m,
              allowCustomAnswer: L,
              hasSelection: d,
              hasCustomText: f,
              customAnswerText: S,
              isCustomAnswerActive: u,
              canProceed: g,
              customInputRef: v,
              onToggleOption: H,
              onActivateCustom: G,
              onChangeCustomText: N,
              onToggleCustomActive: P,
              onConfirm: y
            }
          )
        ]
      },
      n
    ) }) }),
    /* @__PURE__ */ t(
      Y,
      {
        canProceed: g,
        submitDisabled: h,
        label: U,
        onConfirm: y,
        onSkip: K,
        showSkip: z
      }
    )
  ] });
};
export {
  ut as F0ClarifyingPanel
};
