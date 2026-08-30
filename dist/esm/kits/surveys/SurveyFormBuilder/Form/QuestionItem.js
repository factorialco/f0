import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Handle.js";
import { useSurveyFormBuilderContext as r } from "../Context.js";
import { useDragContext as i } from "../DragContext.js";
import { Question as a } from "../QuestionTypes/Question/index.js";
import { EndOfSectionDivider as o } from "./EndOfSectionDivider.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { Reorder as l, useDragControls as u } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/Form/QuestionItem.tsx
var d = ({ item: d, showEndOfSection: f, className: p }) => {
	let { isDragging: m, setIsDragging: h, setDraggedItemId: g, draggedItemId: _ } = i(), v = u(), { disabled: y, answering: b, getSectionContainingQuestion: x } = r(), S = x(d.question.id), C = !!S && _ === S.id, w = () => {
		h(!0), g(d.question.id);
	}, T = () => {
		h(!1), g(null);
	}, E = S?.locked, D = !y && !b && !E;
	return /* @__PURE__ */ c(l.Item, {
		value: d,
		onDragStart: w,
		onDragEnd: T,
		dragListener: !1,
		dragControls: v,
		layout: "position",
		as: "div",
		className: e(p, C && "invisible h-0 overflow-hidden"),
		children: [/* @__PURE__ */ s("div", {
			className: "w-full",
			children: /* @__PURE__ */ c("div", {
				className: e("group/element flex flex-row items-start gap-1", !y && !b && "pr-7", m && "cursor-grabbing"),
				children: [!y && !b && (E ? /* @__PURE__ */ s("div", {
					className: "mt-2 aspect-square w-6 scale-75",
					"aria-hidden": !0
				}) : /* @__PURE__ */ s("div", {
					className: e("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40", !m && "cursor-grab"),
					onPointerDown: (e) => {
						D && v.start(e);
					},
					children: /* @__PURE__ */ s(t, {
						icon: n,
						size: "sm"
					})
				})), /* @__PURE__ */ s(a, { ...d.question })]
			})
		}), f && /* @__PURE__ */ s(o, {})]
	});
};
//#endregion
export { d as QuestionItem };
