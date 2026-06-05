import { jsx as e, jsxs as x } from "react/jsx-runtime";
import { F0Icon as j } from "../../../../../../components/F0Icon/F0Icon.js";
import Q from "../../../../../../icons/app/CheckCircleLine.js";
import z from "../../../../../../icons/app/Cross.js";
import P from "../../../../../../icons/app/Delete.js";
import _ from "../../../../../../icons/app/Handle.js";
import "../../../../../../icons/app/Menu.js";
import { cn as c } from "../../../../../../lib/utils.js";
import { useDragContext as $ } from "../../../DragContext.js";
import { useI18n as q } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { ReorderItem as M } from "../../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
import { F0Checkbox as O } from "../../../../../../components/F0Checkbox/F0Checkbox.js";
import { F0Button as F } from "../../../../../../components/F0Button/F0Button.js";
function X({
  checked: a,
  disabled: l
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      className: c(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        a ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background",
        l && "opacity-50"
      ),
      children: a && /* @__PURE__ */ e("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
const Y = {
  fieldSizing: "content"
}, ae = ({
  index: a,
  option: l,
  onClick: N,
  onClickAction: I,
  onChangeLabel: y,
  disabled: o,
  answering: r,
  selected: g,
  correct: f,
  locked: d,
  type: h
}) => {
  const { value: i, label: m } = l, { isDragging: n, setIsDragging: b, setDraggedItemId: p, draggedItemId: D } = $(), { t: s } = q(), L = n && D === i, v = () => {
    !o && !r || N(i);
  }, k = (t) => {
    I({ value: i, index: a, action: t });
  }, R = (t) => {
    t.stopPropagation(), k("mark-as-correct");
  }, E = (t) => {
    t.stopPropagation(), k("remove");
  }, A = (t) => {
    const T = t.target.value;
    y({ value: i, index: a, newLabel: T });
  }, B = () => {
    b(!0), p(i);
  }, S = () => {
    b(!1), p(null);
  }, C = n ? L : !o && !r, u = !o && !r && !d;
  return /* @__PURE__ */ e(
    M,
    {
      value: l,
      onDragStart: B,
      onDragEnd: S,
      dragListener: u,
      layout: "position",
      as: "div",
      children: /* @__PURE__ */ x(
        "div",
        {
          className: c(
            "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
            (o || r) && "cursor-pointer",
            n && "!cursor-grabbing active:!cursor-grabbing"
          ),
          onClick: v,
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: c(
                  "block",
                  C ? "group-hover:hidden" : "cursor-default",
                  n && "cursor-grabbing [&_button]:cursor-grabbing"
                ),
                children: h === "multi-select" ? /* @__PURE__ */ e(
                  O,
                  {
                    title: m,
                    checked: r ? !!g : !1,
                    onCheckedChange: v,
                    disabled: !r,
                    presentational: !r,
                    hideLabel: !0
                  }
                ) : /* @__PURE__ */ e(
                  X,
                  {
                    checked: r ? !!g : !1,
                    disabled: !r
                  }
                )
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: c(
                  "hidden scale-75 cursor-grab",
                  u && "active:cursor-grabbing",
                  C && "group-hover:block",
                  n && "cursor-grabbing",
                  !u && "cursor-not-allowed"
                ),
                children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: c(
                      "flex aspect-square scale-90 items-center justify-center",
                      h === "multi-select" ? "w-6" : "w-5"
                    ),
                    children: /* @__PURE__ */ e(j, { icon: _, size: "sm" })
                  }
                )
              }
            ),
            !o && !r && !d ? /* @__PURE__ */ e(
              "textarea",
              {
                placeholder: s(
                  "surveyFormBuilder.selectQuestion.optionPlaceholder"
                ),
                value: m,
                onChange: A,
                className: "flex-1 resize-none font-medium",
                style: Y
              }
            ) : /* @__PURE__ */ e("p", { className: "flex-1 font-medium", children: m }),
            !o && !r && f && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-f1-foreground-positive", children: s("surveyFormBuilder.selectQuestion.correct") }),
            !o && !r && !d ? /* @__PURE__ */ x("div", { className: "hidden flex-row items-center gap-1 group-hover:inline-block", children: [
              /* @__PURE__ */ e(
                F,
                {
                  label: s("surveyFormBuilder.selectQuestion.markAsCorrect"),
                  variant: "ghost",
                  icon: f ? z : Q,
                  onClick: R,
                  hideLabel: !0
                }
              ),
              /* @__PURE__ */ e(
                F,
                {
                  label: s("surveyFormBuilder.selectQuestion.remove"),
                  variant: "ghost",
                  icon: P,
                  hideLabel: !0,
                  onClick: E
                }
              )
            ] }) : /* @__PURE__ */ e("div", { className: "min-h-8" })
          ]
        }
      )
    }
  );
};
export {
  ae as SelectOption
};
