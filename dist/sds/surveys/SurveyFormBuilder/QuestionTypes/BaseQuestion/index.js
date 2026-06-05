import { jsxs as r, jsx as e, Fragment as b } from "react/jsx-runtime";
import { useState as A, useRef as I, useEffect as H } from "react";
import { F0Icon as i } from "../../../../../components/F0Icon/index.js";
import J from "../../../../../icons/app/AcademicCap.js";
import U from "../../../../../icons/app/Add.js";
import V from "../../../../../icons/app/Check.js";
import Z from "../../../../../icons/app/CheckDouble.js";
import "../../../../../icons/app/Menu.js";
import { cn as a } from "../../../../../lib/utils.js";
import { DropdownMenu as ee, DropdownMenuTrigger as oe, DropdownMenuContent as re, DropdownMenuItem as u, DropdownMenuSeparator as R, DropdownMenuSub as ne, DropdownMenuSubTrigger as le, DropdownMenuPortal as te, DropdownMenuSubContent as ae } from "../../../../../ui/dropdown-menu.js";
import { FormMessage as se } from "../../../../../ui/form.js";
import { useQuestionTypes as ie } from "../../constants.js";
import { useSurveyFormBuilderContext as ce } from "../../Context.js";
import { useDragContext as de } from "../../DragContext.js";
import { ActionsMenu as ue } from "./ActionsMenu/index.js";
import { useI18n as pe } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as fe } from "../../../../../components/F0Button/F0Button.js";
const O = {
  fieldSizing: "content"
}, Qe = ({
  id: t,
  title: c,
  description: d,
  children: E,
  required: p,
  locked: K,
  type: f,
  hiddenActions: P
}) => {
  const {
    onQuestionChange: y,
    onAddNewElement: v,
    disabled: m,
    answering: l,
    getIsSingleQuestionInSection: q,
    getSectionContainingQuestion: z,
    isQuestionTypeAllowed: N
  } = ce(), h = z(t), F = h?.locked || K, S = !!h, [D, $] = A(!1), [C, j] = A(!1), { isDragging: L } = de(), { t: n } = pe(), _ = (o) => {
    y?.({
      id: t,
      type: f,
      title: o.target.value
    });
  }, W = (o) => {
    y?.({
      id: t,
      type: f,
      description: o.target.value
    });
  }, g = (o, s) => {
    v?.({
      type: o,
      afterId: t,
      datasetKey: s
    });
  }, X = () => {
    v?.({
      type: "section",
      afterId: t
    });
  }, w = ie(), Y = w.filter((o) => !o.datasetKey), T = Array.from(
    new Set(
      w.filter((o) => !!o.datasetKey).map((o) => o.datasetKey)
    )
  ), k = q(t), B = I(null), G = I(!k);
  H(() => {
    G.current && B.current?.focus({ preventScroll: !0 });
  }, []);
  const x = m || F || l, M = !l && x;
  return /* @__PURE__ */ r(
    "div",
    {
      id: `co-creation-question-${t}`,
      className: a(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background px-3 py-4",
        !L && !l && "hover:border-f1-border-hover",
        !l || d ? "gap-4" : "gap-2"
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ r("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ e("div", { className: "relative w-full", children: l ? /* @__PURE__ */ r("div", { className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground", children: [
              c || n("surveyFormBuilder.labels.titlePlaceholder"),
              p && /* @__PURE__ */ e("span", { className: "text-f1-foreground-critical", children: " *" })
            ] }) : /* @__PURE__ */ r(b, { children: [
              /* @__PURE__ */ e(
                "textarea",
                {
                  ref: B,
                  value: c,
                  "aria-label": n("surveyFormBuilder.labels.title"),
                  placeholder: n("surveyFormBuilder.labels.titlePlaceholder"),
                  onChange: _,
                  disabled: x,
                  className: a(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    M && "cursor-not-allowed"
                  ),
                  style: O
                }
              ),
              /* @__PURE__ */ r("div", { className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold", children: [
                /* @__PURE__ */ e("span", { className: "opacity-0", children: c || n("surveyFormBuilder.labels.titlePlaceholder") }),
                p && /* @__PURE__ */ r(
                  "span",
                  {
                    className: a(
                      "text-f1-foreground-critical",
                      !c && "text-f1-foreground-secondary"
                    ),
                    children: [
                      " ",
                      "*"
                    ]
                  }
                )
              ] })
            ] }) }),
            !m && !l && !F && /* @__PURE__ */ e(
              "div",
              {
                className: a(
                  "opacity-0 group-hover/question:opacity-100",
                  C && "opacity-100"
                ),
                children: /* @__PURE__ */ e(
                  ue,
                  {
                    open: C,
                    setOpen: j,
                    questionId: t,
                    questionType: f,
                    canDeleteQuestion: !S || !k,
                    hiddenActions: P
                  }
                )
              }
            )
          ] }),
          l ? d ? /* @__PURE__ */ e("p", { className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary", children: d }) : null : /* @__PURE__ */ e(
            "textarea",
            {
              value: d,
              "aria-label": n("surveyFormBuilder.labels.description"),
              placeholder: n(
                "surveyFormBuilder.labels.questionDescriptionPlaceholder"
              ),
              onChange: W,
              disabled: x,
              className: a(
                "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                M && "cursor-not-allowed"
              ),
              style: O
            }
          )
        ] }),
        E,
        l && /* @__PURE__ */ e(
          se,
          {
            className: "-mt-2",
            fallback: n(p ? "forms.validation.required" : "forms.validation.invalidType")
          }
        ),
        !m && !l && !h?.locked && /* @__PURE__ */ e(
          "div",
          {
            className: a(
              "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
              D && "opacity-100"
            ),
            children: /* @__PURE__ */ r(
              ee,
              {
                open: D,
                onOpenChange: $,
                children: [
                  /* @__PURE__ */ e(oe, { asChild: !0, children: /* @__PURE__ */ e(
                    fe,
                    {
                      icon: U,
                      label: n("surveyFormBuilder.actions.addQuestion"),
                      size: "sm",
                      variant: "outline",
                      hideLabel: !0
                    }
                  ) }),
                  /* @__PURE__ */ r(re, { align: "center", className: "w-80", children: [
                    !S && /* @__PURE__ */ r(b, { children: [
                      /* @__PURE__ */ e(u, { onClick: X, children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                        /* @__PURE__ */ e(i, { icon: J, color: "default" }),
                        /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: n("surveyFormBuilder.questionTypes.section") })
                      ] }) }),
                      /* @__PURE__ */ e(R, {})
                    ] }),
                    Y.map((o) => /* @__PURE__ */ e(
                      u,
                      {
                        onClick: () => g(o.questionType),
                        children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                          /* @__PURE__ */ e(i, { icon: o.icon, color: "default" }),
                          /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: o.label })
                        ] })
                      },
                      o.questionType
                    )),
                    T.length > 0 && /* @__PURE__ */ r(b, { children: [
                      /* @__PURE__ */ e(R, {}),
                      T.map((o) => {
                        const s = w.find(
                          (Q) => Q.datasetKey === o && Q.questionType === "dropdown-single"
                        );
                        return /* @__PURE__ */ r(ne, { children: [
                          /* @__PURE__ */ e(le, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                            s && /* @__PURE__ */ e(i, { icon: s.icon, color: "default" }),
                            /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: s?.label ?? o })
                          ] }) }),
                          /* @__PURE__ */ e(te, { children: /* @__PURE__ */ r(ae, { children: [
                            N("dropdown-single") && /* @__PURE__ */ e(
                              u,
                              {
                                onClick: () => g("dropdown-single", o),
                                children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ e(i, { icon: V, color: "default" }),
                                  /* @__PURE__ */ e("span", { className: "flex-1", children: n(
                                    "surveyFormBuilder.labels.singleSelection"
                                  ) })
                                ] })
                              }
                            ),
                            N("dropdown-multi") && /* @__PURE__ */ e(
                              u,
                              {
                                onClick: () => g("dropdown-multi", o),
                                children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ e(i, { icon: Z, color: "default" }),
                                  /* @__PURE__ */ e("span", { className: "flex-1", children: n(
                                    "surveyFormBuilder.labels.multiSelection"
                                  ) })
                                ] })
                              }
                            )
                          ] }) })
                        ] }, o);
                      })
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
};
export {
  Qe as BaseQuestion
};
