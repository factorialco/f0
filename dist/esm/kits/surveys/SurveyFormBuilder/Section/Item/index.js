import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import n from "../../../../../icons/app/Handle.js";
import { useSurveyFormBuilderContext as r } from "../../Context.js";
import { useDragContext as i } from "../../DragContext.js";
import { Question as a } from "../../QuestionTypes/Question/index.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { Reorder as c, useDragControls as l } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/Section/Item/index.tsx
var u = ({ question: u }) => {
	let { isDragging: d, setIsDragging: f, setDraggedItemId: p } = i(), m = l(), { disabled: h, answering: g, getSectionContainingQuestion: _ } = r(), v = _(u.id), y = () => {
		f(!0), p(u.id);
	}, b = () => {
		f(!1), p(null);
	}, x = v?.locked, S = !h && !g && !x;
	return /* @__PURE__ */ o(c.Item, {
		value: u,
		as: "div",
		onDragStart: y,
		onDragEnd: b,
		dragListener: !1,
		dragControls: m,
		layout: "position",
		children: /* @__PURE__ */ s("div", {
			className: e("group/question-element flex flex-row items-start gap-1", d && "cursor-grabbing"),
			style: { marginLeft: h || g ? 0 : -27 },
			children: [!h && !g && /* @__PURE__ */ o("div", {
				className: e("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40", !d && "cursor-grab", !S && "cursor-not-allowed"),
				onPointerDown: (e) => {
					S && m.start(e);
				},
				children: /* @__PURE__ */ o(t, {
					icon: n,
					size: "sm"
				})
			}), /* @__PURE__ */ o(a, { ...u })]
		})
	});
};
//#endregion
export { u as Item };
