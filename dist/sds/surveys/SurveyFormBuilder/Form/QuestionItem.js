import { jsxs as g, jsx as e } from "react/jsx-runtime";
import { F0Icon as x } from "../../../../components/F0Icon/index.js";
import S from "../../../../icons/app/Handle.js";
import "../../../../icons/app/Menu.js";
import { cn as t } from "../../../../lib/utils.js";
import { useSurveyFormBuilderContext as b } from "../Context.js";
import { useDragContext as q } from "../DragContext.js";
import { Question as y } from "../QuestionTypes/Question/index.js";
import { EndOfSectionDivider as C } from "./EndOfSectionDivider.js";
import { useDragControls as E } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { ReorderItem as N } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
const G = ({
  item: o,
  showEndOfSection: m,
  className: u
}) => {
  const { isDragging: n, setIsDragging: i, setDraggedItemId: s, draggedItemId: p } = q(), a = E(), { disabled: c, answering: d, getSectionContainingQuestion: f } = b(), r = f(o.question.id), D = !!r && p === r.id, v = () => {
    i(!0), s(o.question.id);
  }, h = () => {
    i(!1), s(null);
  }, I = o.question.locked || r?.locked, l = !c && !d && !I;
  return /* @__PURE__ */ g(
    N,
    {
      value: o,
      onDragStart: v,
      onDragEnd: h,
      dragListener: !1,
      dragControls: a,
      layout: "position",
      as: "div",
      className: t(
        u,
        D && "invisible h-0 overflow-hidden"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ g(
          "div",
          {
            className: t(
              "group/element flex flex-row items-start gap-1",
              n && "cursor-grabbing"
            ),
            children: [
              !c && !d && /* @__PURE__ */ e(
                "div",
                {
                  className: t(
                    "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40",
                    !n && "cursor-grab",
                    !l && "cursor-not-allowed"
                  ),
                  onPointerDown: (w) => {
                    l && a.start(w);
                  },
                  children: /* @__PURE__ */ e(x, { icon: S, size: "sm" })
                }
              ),
              /* @__PURE__ */ e(
                y,
                {
                  ...o.question
                }
              )
            ]
          }
        ) }),
        m && /* @__PURE__ */ e(C, {})
      ]
    }
  );
};
export {
  G as QuestionItem
};
