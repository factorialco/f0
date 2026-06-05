import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { useMemo as n, useEffect as w } from "react";
import { withDataTestId as B } from "../../../../lib/data-testid/index.js";
import { cn as x } from "../../../../lib/utils.js";
import j from "../ApplyingChangesTag/index.js";
import { SurveyFormBuilderProvider as A } from "../Context.js";
import { DragProvider as F, useDragContext as R } from "../DragContext.js";
import { AddButton as T } from "./AddButton/index.js";
import { LastQuestionDialog as C } from "./LastQuestionDialog.js";
import { QuestionItem as L } from "./QuestionItem.js";
import { SectionHeaderItem as M } from "./SectionHeaderItem.js";
import { TableOfContent as Q } from "./TableOfContent/index.js";
import { useReorderHandler as G } from "./useReorderHandler.js";
import { flattenElements as H, computeSectionEndIds as k } from "./utils.js";
import { injectSectionEnds as le, reconstructElements as me } from "./utils.js";
import { motion as p } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { ReorderGroup as z } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.js";
function O({ children: s }) {
  const { isDragging: c } = R();
  return /* @__PURE__ */ t("div", { className: x("relative @container", c && "select-none"), children: s });
}
const P = ({
  elements: s,
  disabled: c,
  onChange: f,
  disallowOptionalQuestions: a,
  allowedQuestionTypes: v,
  applyingChanges: i,
  useUpload: h,
  datasets: q
}) => {
  const y = !c, r = n(
    () => s.map((e) => e.type === "question" ? {
      ...e,
      question: {
        ...e.question,
        required: a ? !0 : e.question.required
      }
    } : e.type === "section" ? {
      ...e,
      section: {
        ...e.section,
        questions: e.section.questions?.map((o) => ({
          ...o,
          required: a ? !0 : o.required
        }))
      }
    } : e),
    [s, a]
  ), u = n(() => H(r), [r]), d = n(
    () => u.filter((e) => e.type !== "section-end"),
    [u]
  ), S = n(
    () => k(r),
    [r]
  ), E = n(() => {
    const e = /* @__PURE__ */ new Set();
    for (const o of r)
      if (o.type === "section")
        for (const l of o.section.questions ?? [])
          e.add(`question-${l.id}`);
    return e;
  }, [r]), {
    handleFlatReorder: b,
    handleConfirmLastQuestionMove: I,
    handleCancelLastQuestionMove: D,
    lastQuestionDialogOpen: N
  } = G({ flatItems: u, onChange: f });
  w(() => {
    if (i) {
      const e = document.activeElement;
      e && e.getAttribute("name") !== "one-ai-input" && e.blur();
    }
  }, [i]);
  const g = !!r.length;
  return /* @__PURE__ */ m(
    A,
    {
      disabled: c,
      elements: r,
      onChange: f,
      disallowOptionalQuestions: a,
      allowedQuestionTypes: v,
      useUpload: h,
      datasets: q,
      children: [
        /* @__PURE__ */ t(F, { children: /* @__PURE__ */ m(O, { children: [
          g && /* @__PURE__ */ t(Q, { elements: r, onChange: f }),
          /* @__PURE__ */ m("div", { className: "relative flex flex-1 flex-col", children: [
            /* @__PURE__ */ m(
              p.div,
              {
                className: x(
                  "flex w-full max-w-[750px] self-center flex-col gap-6",
                  i && "pointer-events-none"
                ),
                initial: { filter: "blur(0px)" },
                animate: { filter: i ? "blur(2px)" : "none" },
                exit: { filter: "blur(0px)" },
                children: [
                  /* @__PURE__ */ t(
                    z,
                    {
                      axis: "y",
                      values: d,
                      onReorder: b,
                      as: "div",
                      children: /* @__PURE__ */ t("div", { className: "flex flex-col", children: d.map((e, o) => {
                        const l = o === 0 ? "" : E.has(e.id) ? "mt-4" : "mt-8";
                        return e.type === "section-header" ? /* @__PURE__ */ t(
                          M,
                          {
                            item: e,
                            className: l
                          },
                          e.id
                        ) : /* @__PURE__ */ t(
                          L,
                          {
                            item: e,
                            showEndOfSection: S.has(e.id),
                            className: l
                          },
                          e.id
                        );
                      }) })
                    }
                  ),
                  y && /* @__PURE__ */ t(T, {})
                ]
              }
            ),
            i && /* @__PURE__ */ t(
              p.div,
              {
                className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                children: /* @__PURE__ */ t(j, {})
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ t(
          C,
          {
            open: N,
            onConfirm: I,
            onCancel: D
          }
        )
      ]
    }
  );
}, se = B(P);
export {
  se as SurveyFormBuilder,
  k as computeSectionEndIds,
  H as flattenElements,
  le as injectSectionEnds,
  me as reconstructElements
};
