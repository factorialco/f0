import { jsx as o, jsxs as D } from "react/jsx-runtime";
import { F0Icon as x } from "../../../../../components/F0Icon/index.js";
import h from "../../../../../icons/app/Handle.js";
import "../../../../../icons/app/Menu.js";
import { cn as m } from "../../../../../lib/utils.js";
import { useSurveyFormBuilderContext as v } from "../../Context.js";
import { useDragContext as w } from "../../DragContext.js";
import { Question as y } from "../../QuestionTypes/Question/index.js";
import { useDragControls as I } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/use-drag-controls.js";
import { ReorderItem as b } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Item.js";
const z = ({ question: r }) => {
  const { isDragging: n, setIsDragging: s, setDraggedItemId: i } = w(), a = I(), { disabled: e, answering: t, getSectionContainingQuestion: l } = v(), g = l(r.id), d = () => {
    s(!0), i(r.id);
  }, p = () => {
    s(!1), i(null);
  }, f = r.locked || g?.locked, c = !e && !t && !f;
  return /* @__PURE__ */ o(
    b,
    {
      value: r,
      as: "div",
      onDragStart: d,
      onDragEnd: p,
      dragListener: !1,
      dragControls: a,
      layout: "position",
      children: /* @__PURE__ */ D(
        "div",
        {
          className: m(
            "group/question-element flex flex-row items-start gap-1",
            n && "cursor-grabbing"
          ),
          style: { marginLeft: e || t ? 0 : -27 },
          children: [
            !e && !t && /* @__PURE__ */ o(
              "div",
              {
                className: m(
                  "mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40",
                  !n && "cursor-grab",
                  !c && "cursor-not-allowed"
                ),
                onPointerDown: (u) => {
                  c && a.start(u);
                },
                children: /* @__PURE__ */ o(x, { icon: h, size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              y,
              {
                ...r
              }
            )
          ]
        }
      )
    }
  );
};
export {
  z as Item
};
