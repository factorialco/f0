import { jsxs as l, jsx as e, Fragment as R } from "react/jsx-runtime";
import { useState as E, useMemo as O, useRef as T, useEffect as k } from "react";
import { Dropdown as P } from "../../../../experimental/Navigation/Dropdown/index.js";
import z from "../../../../icons/app/Delete.js";
import b from "../../../../icons/app/Ellipsis.js";
import A from "../../../../icons/app/LayersFront.js";
import "../../../../icons/app/Menu.js";
import { cn as m } from "../../../../lib/utils.js";
import { useSurveyFormBuilderContext as I } from "../Context.js";
import { DragProvider as $ } from "../DragContext.js";
import { Item as j } from "./Item/index.js";
import { useI18n as L } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as _ } from "../../../../components/F0Button/F0Button.js";
import { ReorderGroup as G } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.js";
const M = {
  fieldSizing: "content"
}, te = ({
  id: t,
  title: a,
  description: i,
  questions: u = [],
  locked: f,
  hideQuestions: v
}) => {
  const {
    onSectionChange: s,
    disabled: p,
    answering: c,
    deleteElement: x,
    onDuplicateElement: y
  } = I(), [h, w] = E(!1), { t: o } = L(), d = O(
    () => ({
      id: t,
      title: a,
      description: i
    }),
    [t, a, i]
  ), F = (r) => {
    s?.({ ...d, title: r.target.value });
  }, S = (r) => {
    s?.({
      ...d,
      description: r.target.value
    });
  }, N = (r) => {
    s?.({ ...d, questions: r });
  }, B = () => {
    y?.({ elementId: t, type: "section" });
  }, C = () => {
    x(t);
  }, D = [
    {
      label: o("surveyFormBuilder.actions.duplicateSection"),
      icon: A,
      onClick: B
    },
    {
      label: o("surveyFormBuilder.actions.deleteSection"),
      icon: z,
      onClick: C,
      critical: !0
    }
  ], n = p || f || c, g = T(null);
  return k(() => {
    g.current?.focus({ preventScroll: !0 });
  }, []), /* @__PURE__ */ l(
    "div",
    {
      id: `co-creation-section-${t}`,
      className: "group/section flex w-full flex-col gap-1 bg-f1-background",
      children: [
        /* @__PURE__ */ l("div", { className: "py-1 pl-5 pr-3", children: [
          /* @__PURE__ */ l("div", { className: "flex flex-row", children: [
            /* @__PURE__ */ e(
              "input",
              {
                ref: g,
                type: "text",
                "aria-label": o("surveyFormBuilder.labels.title"),
                value: a,
                placeholder: o("surveyFormBuilder.labels.sectionTitlePlaceholder"),
                onChange: F,
                disabled: n,
                className: m(
                  "w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                  n && "cursor-not-allowed"
                )
              }
            ),
            !p && !c && !f && /* @__PURE__ */ e(
              "div",
              {
                className: m(
                  "opacity-0 group-hover/section:opacity-100",
                  h && "opacity-100"
                ),
                children: /* @__PURE__ */ e(
                  P,
                  {
                    items: D,
                    icon: b,
                    open: h,
                    onOpenChange: w,
                    align: "start",
                    children: /* @__PURE__ */ e(
                      _,
                      {
                        icon: b,
                        label: o("surveyFormBuilder.actions.actions"),
                        size: "md",
                        variant: "ghost",
                        tooltip: !1,
                        hideLabel: !0
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "textarea",
            {
              value: i,
              "aria-label": o("surveyFormBuilder.labels.description"),
              placeholder: o(
                "surveyFormBuilder.labels.sectionDescriptionPlaceholder"
              ),
              onChange: S,
              disabled: n,
              style: M,
              className: m(
                "w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
                n && "cursor-not-allowed"
              )
            }
          )
        ] }),
        !v && /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
            G,
            {
              axis: "y",
              values: u,
              onReorder: N,
              as: "div",
              children: /* @__PURE__ */ e("div", { className: "group/section-list flex flex-col gap-4", children: u.map((r) => /* @__PURE__ */ e(j, { question: r }, r.id)) })
            }
          ) }),
          !c && /* @__PURE__ */ l("div", { className: "mt-8 flex flex-row items-center gap-4", children: [
            /* @__PURE__ */ e("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
            /* @__PURE__ */ e("span", { className: "text-base font-medium text-f1-foreground-secondary", children: o("surveyFormBuilder.labels.endOfSection") }),
            /* @__PURE__ */ e("div", { className: "h-px flex-1 bg-f1-border-secondary" })
          ] })
        ] })
      ]
    }
  );
};
export {
  te as Section
};
