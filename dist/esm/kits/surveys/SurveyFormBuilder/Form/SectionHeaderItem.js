import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Handle.js";
import { useSurveyFormBuilderContext as r } from "../Context.js";
import { useDragContext as i } from "../DragContext.js";
import { Question as a } from "../QuestionTypes/Question/index.js";
import { EndOfSectionDivider as o } from "./EndOfSectionDivider.js";
import { Section as s } from "../Section/index.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { Reorder as u, useDragControls as d } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/Form/SectionHeaderItem.tsx
var f = ({ item: f, className: p }) => {
	let { isDragging: m, setIsDragging: h, setDraggedItemId: g, draggedItemId: _ } = i(), v = d(), { disabled: y, answering: b } = r(), x = _ === f.section.id;
	return /* @__PURE__ */ c(u.Item, {
		value: f,
		onDragStart: () => {
			h(!0), g(f.section.id);
		},
		onDragEnd: () => {
			h(!1), g(null);
		},
		dragListener: !1,
		dragControls: v,
		layout: "position",
		as: "div",
		className: p,
		children: /* @__PURE__ */ c("div", {
			className: "w-full",
			children: /* @__PURE__ */ l("div", {
				className: "group/element w-full",
				children: [/* @__PURE__ */ l("div", {
					className: e("flex flex-row items-start gap-1 w-full", !y && !b && "pr-7", m && "cursor-grabbing"),
					children: [!y && !b && (f.section.locked ? /* @__PURE__ */ c("div", {
						className: "mt-2 aspect-square w-6 scale-75",
						"aria-hidden": !0
					}) : /* @__PURE__ */ c("div", {
						className: e("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40", !m && "cursor-grab"),
						onPointerDown: (e) => {
							v.start(e);
						},
						children: /* @__PURE__ */ c(t, {
							icon: n,
							size: "sm"
						})
					})), /* @__PURE__ */ c(s, {
						...f.section,
						hideQuestions: !0
					})]
				}), x && (f.section.questions ?? []).length > 0 && /* @__PURE__ */ l("div", {
					className: "flex flex-col gap-4 w-full mt-4 ml-7",
					children: [(f.section.questions ?? []).map((e) => /* @__PURE__ */ c(a, { ...e }, e.id)), /* @__PURE__ */ c(o, {})]
				})]
			})
		})
	});
};
//#endregion
export { f as SectionHeaderItem };
