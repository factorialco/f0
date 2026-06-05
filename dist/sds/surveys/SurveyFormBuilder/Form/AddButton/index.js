import { jsx as e, jsxs as o, Fragment as b } from "react/jsx-runtime";
import { useState as N } from "react";
import { F0Icon as l } from "../../../../../components/F0Icon/index.js";
import v from "../../../../../icons/app/AcademicCap.js";
import F from "../../../../../icons/app/Add.js";
import S from "../../../../../icons/app/Check.js";
import T from "../../../../../icons/app/CheckDouble.js";
import "../../../../../icons/app/Menu.js";
import { DropdownMenu as C, DropdownMenuTrigger as D, DropdownMenuContent as M, DropdownMenuItem as i, DropdownMenuSeparator as p, DropdownMenuSub as B, DropdownMenuSubTrigger as A, DropdownMenuPortal as K, DropdownMenuSubContent as Q } from "../../../../../ui/dropdown-menu.js";
import { useQuestionTypes as R } from "../../constants.js";
import { useSurveyFormBuilderContext as j } from "../../Context.js";
import { useI18n as I } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as $ } from "../../../../../components/F0Button/F0Button.js";
const X = () => {
  const { disabled: f, answering: w, onAddNewElement: d, isQuestionTypeAllowed: c } = j(), [h, x] = N(!1), s = R(), { t } = I(), a = (n, r) => {
    d?.({ type: n, datasetKey: r });
  }, g = () => {
    d?.({ type: "section" });
  }, y = s.filter((n) => !n.datasetKey), m = Array.from(
    new Set(
      s.filter((n) => !!n.datasetKey).map((n) => n.datasetKey)
    )
  );
  return f || w ? null : /* @__PURE__ */ e("div", { className: "ml-6 flex justify-center", children: /* @__PURE__ */ o(C, { open: h, onOpenChange: x, children: [
    /* @__PURE__ */ e(D, { asChild: !0, children: /* @__PURE__ */ e(
      $,
      {
        icon: F,
        label: t("surveyFormBuilder.actions.addQuestion"),
        size: "md",
        variant: "outline",
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ o(M, { align: "center", className: "w-80", children: [
      /* @__PURE__ */ e(i, { onClick: g, children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
        /* @__PURE__ */ e(l, { icon: v, color: "default" }),
        /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: t("surveyFormBuilder.questionTypes.section") })
      ] }) }),
      /* @__PURE__ */ e(p, {}),
      y.map((n) => /* @__PURE__ */ e(
        i,
        {
          onClick: () => a(n.questionType),
          children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ e(l, { icon: n.icon, color: "default" }),
            /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: n.label })
          ] })
        },
        n.questionType
      )),
      m.length > 0 && /* @__PURE__ */ o(b, { children: [
        /* @__PURE__ */ e(p, {}),
        m.map((n) => {
          const r = s.find(
            (u) => u.datasetKey === n && u.questionType === "dropdown-single"
          );
          return /* @__PURE__ */ o(B, { children: [
            /* @__PURE__ */ e(A, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
              r && /* @__PURE__ */ e(l, { icon: r.icon, color: "default" }),
              /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: r?.label ?? n })
            ] }) }),
            /* @__PURE__ */ e(K, { children: /* @__PURE__ */ o(Q, { children: [
              c("dropdown-single") && /* @__PURE__ */ e(
                i,
                {
                  onClick: () => a("dropdown-single", n),
                  children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ e(l, { icon: S, color: "default" }),
                    /* @__PURE__ */ e("span", { className: "flex-1", children: t("surveyFormBuilder.labels.singleSelection") })
                  ] })
                }
              ),
              c("dropdown-multi") && /* @__PURE__ */ e(
                i,
                {
                  onClick: () => a("dropdown-multi", n),
                  children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
                    /* @__PURE__ */ e(l, { icon: T, color: "default" }),
                    /* @__PURE__ */ e("span", { className: "flex-1", children: t("surveyFormBuilder.labels.multiSelection") })
                  ] })
                }
              )
            ] }) })
          ] }, n);
        })
      ] })
    ] })
  ] }) });
};
export {
  X as AddButton
};
