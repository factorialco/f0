import { jsx as e, jsxs as T } from "react/jsx-runtime";
import { useMemo as z, useState as xe, useRef as X, useCallback as Q } from "react";
import Se from "../../../icons/app/ArrowLeft.js";
import M from "../../../icons/app/ArrowRight.js";
import Ae from "../../../icons/app/Maximize.js";
import "../../../icons/app/Menu.js";
import je from "../../../icons/app/Minimize.js";
import { F0Box as G } from "../../../lib/F0Box/index.js";
import { cn as W } from "../../../lib/utils.js";
import { F0Dialog as Ce } from "../../../patterns/F0Dialog/index.js";
import { F0Form as J } from "../../../patterns/F0Form/F0Form.js";
import { useF0Form as Qe } from "../../../patterns/F0Form/useF0Form.js";
import { ResourceHeader as K } from "../../../patterns/ResourceHeader/index.js";
import { ProgressBarCell as Te } from "../../../ui/value-display/types/progressBar/progressBar.js";
import { SurveyFormBuilderProvider as U } from "../SurveyFormBuilder/Context.js";
import { TableOfContent as De } from "../SurveyFormBuilder/Form/TableOfContent/index.js";
import { SurveyAllQuestionsLoadingSkeleton as Y, SurveySteppedLoadingSkeleton as Ne } from "./components/skeletons/SurveyAnsweringFormLoadingSkeletons.js";
import { useStepper as Pe } from "./hooks/useStepper.js";
import { extractFlatQuestions as Z, useSurveyFormSchema as _ } from "./hooks/useSurveyFormSchema.js";
import { OneEmptyState as ee } from "../../../components/OneEmptyState/OneEmptyState.js";
import { useI18n as te } from "../../../lib/providers/i18n/i18n-provider.js";
const D = () => {
};
function st(s) {
  return s.inline ? /* @__PURE__ */ e(Re, { ...s }) : /* @__PURE__ */ e(ke, { ...s });
}
function ke({
  elements: s,
  onSubmit: l,
  mode: u,
  title: b,
  description: N,
  resourceHeader: P,
  isOpen: g,
  onClose: v,
  position: a = "center",
  module: m,
  allowToChangeFullscreen: I = !1,
  defaultValues: y,
  errorTriggerMode: h = "on-blur",
  loading: i = !1,
  labels: w,
  preview: c = !1,
  useUpload: se,
  datasets: B
}) {
  const { t: n } = te(), re = a === "fullscreen", ne = a === "fullscreen" ? "center" : a, [F, ie] = xe(re), { formRef: k, submit: O, isSubmitting: E, hasErrors: oe } = Qe(), f = X({}), q = z(
    () => Z(s),
    [s]
  ), t = Pe(q), d = q.length > 0, R = {
    title: w?.empty?.title ?? n("surveyAnsweringForm.labels.empty.title"),
    description: w?.empty?.description ?? n("surveyAnsweringForm.labels.empty.description"),
    emoji: w?.empty?.emoji ?? n("surveyAnsweringForm.labels.empty.emoji")
  }, r = u === "stepped", x = c && !!y && Object.keys(y).length > 0, ce = c && !x, le = r ? t.currentQuestion?.id : void 0, {
    schema: ue,
    defaultValues: ae,
    sections: me
  } = _(
    s,
    u,
    n,
    y,
    le,
    r ? f.current : void 0,
    c,
    x,
    se,
    B
  ), S = F ? "fullscreen" : ne, fe = S === "center" ? "xl" : void 0, A = X(null), L = Q(
    (o) => {
      A.current && clearTimeout(A.current), A.current = setTimeout(() => {
        A.current = null, v();
      }, o);
    },
    [v]
  ), de = Q(
    async (o) => {
      if (c)
        return { success: !0 };
      if (!l)
        throw new Error("onSubmit is required when preview is false");
      if (r && !t.isLastStep)
        return f.current = {
          ...f.current,
          ...o
        }, t.goToNext(), { success: !0 };
      const Fe = r ? { ...f.current, ...o } : o, V = {};
      for (const [p, C] of Object.entries(Fe))
        V[p] = C === void 0 ? null : C;
      if (r) {
        t.setProgress(100);
        const [p] = await Promise.all([
          l(V),
          new Promise((C) => setTimeout(C, 1e3))
        ]);
        return p.success ? (L(p.message ? 1e3 : 0), { success: !0, message: p.message }) : (t.setProgress(null), { success: !1, errors: p.errors });
      }
      const j = await l(V);
      return j.success ? (L(j.message ? 1e3 : 0), { success: !0, message: j.message }) : { success: !1, errors: j.errors };
    },
    [
      l,
      c,
      L,
      r,
      t.isLastStep,
      t.goToNext,
      t.setProgress
    ]
  ), $ = Q(async () => {
    try {
      await O();
    } catch {
    }
  }, [O]), pe = Q(() => {
    const o = k.current?.getValues() ?? {};
    f.current = {
      ...f.current,
      ...o
    }, t.goToPrevious();
  }, [k, t.goToPrevious]), ge = I && !i ? [
    {
      label: n(F ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
      icon: F ? je : Ae,
      onClick: () => ie((o) => !o)
    }
  ] : void 0, ve = d ? i || x ? void 0 : ce ? r && !t.isLastStep ? {
    label: n("surveyAnsweringForm.actions.next"),
    onClick: t.goToNext,
    icon: M
  } : {
    label: n("surveyAnsweringForm.actions.submit"),
    onClick: D,
    disabled: !0
  } : r && !t.isLastStep ? {
    label: n("surveyAnsweringForm.actions.next"),
    onClick: $,
    icon: M
  } : {
    label: n("surveyAnsweringForm.actions.submit"),
    onClick: $,
    disabled: E || oe,
    loading: E
  } : void 0, ye = d ? i || x ? void 0 : r && !t.isFirstStep ? {
    label: n("surveyAnsweringForm.actions.previous"),
    onClick: pe,
    icon: Se
  } : void 0 : void 0, he = u === "all-questions" && d && !i, we = r && d && !i, be = r && !!t.currentQuestion?.sectionTitle && !i, H = S === "center" || S === "fullscreen";
  return /* @__PURE__ */ e(
    Ce,
    {
      isOpen: g,
      onClose: v,
      title: b,
      module: m,
      position: S,
      width: fe,
      primaryAction: ve,
      secondaryAction: ye,
      otherActions: ge,
      disableContentPadding: H,
      children: /* @__PURE__ */ e(
        U,
        {
          answering: !0,
          elements: s,
          onChange: D,
          datasets: B,
          children: /* @__PURE__ */ T(
            "div",
            {
              className: W(
                "relative flex h-full min-h-full flex-col @container",
                r && !F && "min-h-[600px]"
              ),
              children: [
                he && /* @__PURE__ */ e(De, { elements: s, onChange: D, answering: !0 }),
                we && /* @__PURE__ */ e("div", { className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none", children: /* @__PURE__ */ e(
                  Te,
                  {
                    label: "Value",
                    value: t.progress,
                    hideLabel: !0
                  }
                ) }),
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: W(
                      "mx-auto flex w-full flex-1 justify-center flex-col @lg:w-[750px] max-w-full pt-0",
                      H && "px-4 py-12"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
                        K,
                        {
                          title: b,
                          description: N,
                          ...P
                        }
                      ) }),
                      i ? u === "stepped" ? /* @__PURE__ */ e(Ne, {}) : /* @__PURE__ */ e(Y, {}) : d ? null : /* @__PURE__ */ e(
                        G,
                        {
                          display: "flex",
                          flexDirection: "column",
                          height: "full",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingX: "lg",
                          children: /* @__PURE__ */ e(
                            ee,
                            {
                              emoji: R.emoji,
                              title: R.title,
                              description: R.description
                            }
                          )
                        }
                      ),
                      be && /* @__PURE__ */ T("div", { className: "py-1 pl-5", children: [
                        /* @__PURE__ */ e("span", { className: "text-lg font-semibold text-f1-foreground", children: t.currentQuestion?.sectionTitle }),
                        t.currentQuestion?.sectionDescription && /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: t.currentQuestion?.sectionDescription })
                      ] }),
                      d && !i && /* @__PURE__ */ e(
                        J,
                        {
                          formRef: k,
                          name: "survey-answering",
                          schema: ue,
                          defaultValues: ae,
                          onSubmit: de,
                          submitConfig: {
                            hideSubmitButton: !0
                          },
                          errorTriggerMode: h,
                          sections: me
                        },
                        r ? t.currentStep : void 0
                      )
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
function Re({
  elements: s,
  title: l,
  description: u,
  resourceHeader: b,
  defaultValues: N,
  loading: P = !1,
  labels: g,
  useUpload: v,
  datasets: a
}) {
  const { t: m } = te(), y = z(
    () => Z(s),
    [s]
  ).length > 0, h = {
    title: g?.empty?.title ?? m("surveyAnsweringForm.labels.empty.title"),
    description: g?.empty?.description ?? m("surveyAnsweringForm.labels.empty.description"),
    emoji: g?.empty?.emoji ?? m("surveyAnsweringForm.labels.empty.emoji")
  }, {
    schema: i,
    defaultValues: w,
    sections: c
  } = _(
    s,
    "all-questions",
    m,
    N,
    void 0,
    void 0,
    !0,
    !0,
    v,
    a
  );
  return /* @__PURE__ */ e(
    U,
    {
      answering: !0,
      elements: s,
      onChange: D,
      datasets: a,
      children: /* @__PURE__ */ T("div", { className: "mx-auto flex w-full max-w-3xl flex-col", children: [
        /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(
          K,
          {
            title: l,
            description: u,
            ...b
          }
        ) }),
        P ? /* @__PURE__ */ e(Y, {}) : y ? /* @__PURE__ */ e(
          J,
          {
            name: "survey-answering-inline",
            schema: i,
            defaultValues: w,
            onSubmit: async () => ({ success: !0 }),
            submitConfig: {
              hideSubmitButton: !0,
              hideActionBar: !0
            },
            sections: c
          }
        ) : /* @__PURE__ */ e(
          G,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "lg",
            children: /* @__PURE__ */ e(
              ee,
              {
                emoji: h.emoji,
                title: h.title,
                description: h.description
              }
            )
          }
        )
      ] })
    }
  );
}
export {
  st as SurveyAnsweringForm
};
