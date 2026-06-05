import { jsxs as r, jsx as e, Fragment as J } from "react/jsx-runtime";
import { F0Icon as a } from "../../../../../../components/F0Icon/F0Icon.js";
import { Switch as U } from "../../../../../../experimental/Forms/Fields/Switch/index.js";
import V from "../../../../../../icons/app/AlertCircleLine.js";
import h from "../../../../../../icons/app/Check.js";
import q from "../../../../../../icons/app/CheckDouble.js";
import W from "../../../../../../icons/app/Delete.js";
import X from "../../../../../../icons/app/Ellipsis.js";
import Y from "../../../../../../icons/app/Hub.js";
import Z from "../../../../../../icons/app/LayersFront.js";
import "../../../../../../icons/app/Menu.js";
import ee from "../../../../../../icons/app/Plus.js";
import { cn as le } from "../../../../../../lib/utils.js";
import { DropdownMenu as re, DropdownMenuTrigger as oe, DropdownMenuContent as ne, DropdownMenuLabel as ae, DropdownMenuGroup as g, DropdownMenuSeparator as L, DropdownMenuItem as w, DropdownMenuSub as D, DropdownMenuSubTrigger as I, DropdownMenuPortal as T, DropdownMenuSubContent as A } from "../../../../../../ui/dropdown-menu.js";
import { useSurveyFormBuilderContext as te } from "../../../Context.js";
import { useQuestionActions as ie, RATING_OPTIONS as k } from "./useQuestionActions.js";
import { useI18n as O } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as de } from "../../../../../../components/F0Button/F0Button.js";
const $ = ({
  label: d,
  icon: i,
  checked: n,
  onChange: o
}) => /* @__PURE__ */ e(
  w,
  {
    className: "!pb-2.5 pr-4",
    onClick: (s) => {
      s.preventDefault(), o(!n);
    },
    children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(a, { icon: i, color: "default" }),
      /* @__PURE__ */ e("span", { className: "flex-1", children: d }),
      /* @__PURE__ */ e(
        U,
        {
          title: d,
          checked: n,
          onCheckedChange: o,
          hideLabel: !0
        }
      )
    ] })
  }
), se = ({
  label: d,
  value: i,
  currentDatasetKey: n,
  questionTypes: o,
  currentRatingType: s,
  isQuestionTypeAllowed: b,
  onSelectQuestionType: t,
  onSelectRatingType: F
}) => {
  const { t: x } = O(), y = o.filter((l) => !l.datasetKey), v = Array.from(
    new Set(
      o.filter((l) => !!l.datasetKey).map((l) => l.datasetKey)
    )
  ), u = n ? o.find(
    (l) => l.questionType === i && l.datasetKey === n
  )?.label ?? void 0 : o.find(
    (l) => l.questionType === i && !l.datasetKey
  )?.label ?? void 0;
  return /* @__PURE__ */ r(D, { children: [
    /* @__PURE__ */ e(I, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(a, { icon: Y, color: "default" }),
      /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: d }),
      !!u && /* @__PURE__ */ e("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: u })
    ] }) }),
    /* @__PURE__ */ e(T, { children: /* @__PURE__ */ r(A, { children: [
      y.map((l) => {
        const m = l.questionType === "rating", f = i === l.questionType && !n;
        return m ? /* @__PURE__ */ r(D, { children: [
          /* @__PURE__ */ e(I, { className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2 text-base font-medium", children: [
            /* @__PURE__ */ e(a, { icon: l.icon, color: "default" }),
            /* @__PURE__ */ e("span", { className: "flex-1", children: l.label }),
            s && /* @__PURE__ */ e("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: k.find(
              (c) => c.value === s
            )?.label })
          ] }) }),
          /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(A, { children: k.map((c) => /* @__PURE__ */ e(
            w,
            {
              onClick: () => F(c.value),
              children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2 pl-2", children: [
                /* @__PURE__ */ e("span", { className: "flex-1", children: c.label }),
                s === c.value && /* @__PURE__ */ e(a, { icon: h, color: "default" })
              ] })
            },
            c.value
          )) }) })
        ] }, l.questionType) : /* @__PURE__ */ e(
          w,
          {
            onClick: () => t(l.questionType),
            children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
              /* @__PURE__ */ e(a, { icon: l.icon, color: "default" }),
              /* @__PURE__ */ e("span", { className: "flex-1", children: l.label }),
              f && /* @__PURE__ */ e(a, { icon: h, color: "default" })
            ] })
          },
          l.questionType
        );
      }),
      v.length > 0 && /* @__PURE__ */ r(J, { children: [
        /* @__PURE__ */ e(L, {}),
        v.map((l) => {
          const m = o.find(
            (f) => f.datasetKey === l && f.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ r(D, { children: [
            /* @__PURE__ */ e(I, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
              m && /* @__PURE__ */ e(a, { icon: m.icon, color: "default" }),
              /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: m?.label ?? l }),
              n === l && /* @__PURE__ */ e(a, { icon: h, color: "default" })
            ] }) }),
            /* @__PURE__ */ e(T, { children: /* @__PURE__ */ r(A, { children: [
              b("dropdown-single") && /* @__PURE__ */ e(
                w,
                {
                  onClick: () => t("dropdown-single", l),
                  children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ e(a, { icon: h, color: "default" }),
                    /* @__PURE__ */ e("span", { className: "flex-1", children: x("surveyFormBuilder.labels.singleSelection") }),
                    n === l && i === "dropdown-single" && /* @__PURE__ */ e(a, { icon: h, color: "default" })
                  ] })
                }
              ),
              b("dropdown-multi") && /* @__PURE__ */ e(
                w,
                {
                  onClick: () => t("dropdown-multi", l),
                  children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ e(a, { icon: q, color: "default" }),
                    /* @__PURE__ */ e("span", { className: "flex-1", children: x("surveyFormBuilder.labels.multiSelection") }),
                    n === l && i === "dropdown-multi" && /* @__PURE__ */ e(a, { icon: h, color: "default" })
                  ] })
                }
              )
            ] }) })
          ] }, l);
        })
      ] })
    ] }) })
  ] });
}, Q = ({
  label: d,
  icon: i,
  onClick: n,
  critical: o
}) => /* @__PURE__ */ e(
  w,
  {
    onClick: n,
    className: le(o ? "text-f1-foreground-critical" : void 0),
    children: /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ e(a, { icon: i }),
      /* @__PURE__ */ e("span", { className: "flex-1", children: d })
    ] })
  }
);
function Be({
  open: d,
  setOpen: i,
  questionId: n,
  questionType: o,
  canDeleteQuestion: s = !0,
  hiddenActions: b
}) {
  const { t } = O(), { isQuestionTypeAllowed: F } = te(), {
    question: x,
    questionTypes: y,
    currentRatingType: v,
    currentDatasetKey: u,
    isMultiSelectEnabled: l,
    isAllowCreateEnabled: m,
    datasetHasOnCreate: f,
    disallowOptionalQuestions: c,
    handleChangeRequired: E,
    handleSelectQuestionType: K,
    handleSelectRatingType: j,
    handleToggleMultiSelect: G,
    handleToggleAllowCreate: H,
    handleDuplicate: P,
    handleDelete: z
  } = ie({
    questionId: n,
    questionType: o,
    canDelete: s
  }), p = (_) => b?.includes(_) ?? !1, S = !c && !p("required"), M = !!u && !p("multiSelect"), R = !!u && f && o === "dropdown-single" && !p("allowCreate"), B = !p("questionType"), N = !p("duplicate"), C = s && !p("delete");
  return !S && !M && !R && !B && !N && !C ? null : /* @__PURE__ */ r(re, { open: d, onOpenChange: i, children: [
    /* @__PURE__ */ e(oe, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ e(
      de,
      {
        icon: X,
        label: t("surveyFormBuilder.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ r(ne, { className: "w-80", align: "start", children: [
      /* @__PURE__ */ e(ae, { className: "p-4 pb-2 font-medium text-f1-foreground-secondary", children: t("surveyFormBuilder.labels.questionOptions") }),
      S && /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e(
        $,
        {
          label: t("surveyFormBuilder.labels.required"),
          icon: V,
          checked: !!x?.required,
          onChange: E
        }
      ) }),
      M && /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e(
        $,
        {
          label: t("surveyFormBuilder.labels.allowMultiSelection"),
          icon: q,
          checked: l,
          onChange: G
        }
      ) }),
      R && /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e(
        $,
        {
          label: t("surveyFormBuilder.labels.allowCreate"),
          icon: ee,
          checked: m,
          onChange: H
        }
      ) }),
      B && /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e(
        se,
        {
          label: t("surveyFormBuilder.labels.questionType"),
          value: o,
          currentDatasetKey: u,
          questionTypes: y,
          currentRatingType: v,
          isQuestionTypeAllowed: F,
          onSelectQuestionType: K,
          onSelectRatingType: j
        }
      ) }),
      (S || M || R || B) && (N || C) && /* @__PURE__ */ e(L, {}),
      (N || C) && /* @__PURE__ */ r(g, { children: [
        N && /* @__PURE__ */ e(
          Q,
          {
            label: t("surveyFormBuilder.actions.duplicateQuestion"),
            icon: Z,
            onClick: P
          }
        ),
        C && /* @__PURE__ */ e(
          Q,
          {
            label: t("surveyFormBuilder.actions.deleteQuestion"),
            icon: W,
            onClick: z,
            critical: !0
          }
        )
      ] })
    ] })
  ] });
}
export {
  Be as ActionsMenu
};
