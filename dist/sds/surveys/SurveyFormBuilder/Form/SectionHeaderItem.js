import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { F0Icon as D } from "../../../../components/F0Icon/index.js";
import v from "../../../../icons/app/Handle.js";
import "../../../../icons/app/Menu.js";
import { cn as m } from "../../../../lib/utils.js";
import { useSurveyFormBuilderContext as w } from "../Context.js";
import { useDragContext as x } from "../DragContext.js";
import { Question as I } from "../QuestionTypes/Question/index.js";
import { Section as S } from "../Section/index.js";
import { EndOfSectionDivider as b } from "./EndOfSectionDivider.js";
import { useDragControls as y } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { ReorderItem as N } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
const O = ({
  item: r,
  className: g
}) => {
  const { isDragging: s, setIsDragging: n, setDraggedItemId: i, draggedItemId: f } = x(), a = y(), { disabled: l, answering: c } = w(), u = f === r.section.id, p = () => {
    n(!0), i(r.section.id);
  }, h = () => {
    n(!1), i(null);
  }, d = !l && !c && !r.section.locked;
  return /* @__PURE__ */ e(
    N,
    {
      value: r,
      onDragStart: p,
      onDragEnd: h,
      dragListener: !1,
      dragControls: a,
      layout: "position",
      as: "div",
      className: g,
      children: /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ t("div", { className: "group/element w-full", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: m(
              "flex flex-row items-start gap-1 w-full",
              s && "cursor-grabbing"
            ),
            children: [
              !l && !c && /* @__PURE__ */ e(
                "div",
                {
                  className: m(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !s && "cursor-grab",
                    !d && "cursor-not-allowed"
                  ),
                  onPointerDown: (o) => {
                    d && a.start(o);
                  },
                  children: /* @__PURE__ */ e(D, { icon: v, size: "sm" })
                }
              ),
              /* @__PURE__ */ e(S, { ...r.section, hideQuestions: !0 })
            ]
          }
        ),
        u && (r.section.questions ?? []).length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-col gap-4 w-full mt-4 ml-7", children: [
          (r.section.questions ?? []).map((o) => /* @__PURE__ */ e(I, { ...o }, o.id)),
          /* @__PURE__ */ e(b, {})
        ] })
      ] }) })
    }
  );
};
export {
  O as SectionHeaderItem
};
