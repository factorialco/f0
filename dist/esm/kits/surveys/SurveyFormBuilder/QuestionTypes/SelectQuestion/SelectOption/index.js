import { cn as e } from "../../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../../components/F0Icon/F0Icon.js";
import n from "../../../../../../icons/app/CheckCircleLine.js";
import r from "../../../../../../icons/app/Cross.js";
import i from "../../../../../../icons/app/Delete.js";
import a from "../../../../../../icons/app/Handle.js";
import { useI18n as o } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as s } from "../../../../../../components/F0Button/F0Button.js";
import { F0Checkbox as c } from "../../../../../../components/F0Checkbox/F0Checkbox.js";
import { useDragContext as l } from "../../../DragContext.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Reorder as f } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/SelectQuestion/SelectOption/index.tsx
function p({ checked: t, disabled: n }) {
	return /* @__PURE__ */ u("div", {
		"aria-hidden": "true",
		className: e("flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors", t ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background", n && "opacity-50"),
		children: t && /* @__PURE__ */ u("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
	});
}
var m = { fieldSizing: "content" }, h = ({ index: h, option: g, onClick: _, onClickAction: v, onChangeLabel: y, disabled: b, answering: x, selected: S, correct: C, locked: w, type: T }) => {
	let { value: E, label: D } = g, { isDragging: O, setIsDragging: k, setDraggedItemId: A, draggedItemId: j } = l(), { t: M } = o(), N = O && j === E, P = () => {
		!b && !x || _(E);
	}, F = (e) => {
		v({
			value: E,
			index: h,
			action: e
		});
	}, I = (e) => {
		e.stopPropagation(), F("mark-as-correct");
	}, L = (e) => {
		e.stopPropagation(), F("remove");
	}, R = (e) => {
		let t = e.target.value;
		y({
			value: E,
			index: h,
			newLabel: t
		});
	}, z = () => {
		k(!0), A(E);
	}, B = () => {
		k(!1), A(null);
	}, V = O ? N : !b && !x, H = !b && !x && !w;
	return /* @__PURE__ */ u(f.Item, {
		value: g,
		onDragStart: z,
		onDragEnd: B,
		dragListener: H,
		layout: "position",
		as: "div",
		children: /* @__PURE__ */ d("div", {
			className: e("group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover", (b || x) && "cursor-pointer", O && "!cursor-grabbing active:!cursor-grabbing"),
			onClick: P,
			children: [
				/* @__PURE__ */ u("div", {
					className: e("block", V ? "group-hover:hidden" : "cursor-default", O && "cursor-grabbing [&_button]:cursor-grabbing"),
					children: T === "multi-select" ? /* @__PURE__ */ u(c, {
						title: D,
						checked: x ? !!S : !1,
						onCheckedChange: P,
						disabled: !x,
						presentational: !x,
						hideLabel: !0
					}) : /* @__PURE__ */ u(p, {
						checked: x ? !!S : !1,
						disabled: !x
					})
				}),
				/* @__PURE__ */ u("div", {
					className: e("hidden scale-75 cursor-grab", H && "active:cursor-grabbing", V && "group-hover:block", O && "cursor-grabbing", !H && "cursor-not-allowed"),
					children: /* @__PURE__ */ u("div", {
						className: e("flex aspect-square scale-90 items-center justify-center", T === "multi-select" ? "w-6" : "w-5"),
						children: /* @__PURE__ */ u(t, {
							icon: a,
							size: "sm"
						})
					})
				}),
				!b && !x && !w ? /* @__PURE__ */ u("textarea", {
					placeholder: M("surveyFormBuilder.selectQuestion.optionPlaceholder"),
					value: D,
					onChange: R,
					className: "flex-1 resize-none font-medium text-f1-foreground placeholder:text-f1-foreground-tertiary",
					style: m
				}) : /* @__PURE__ */ u("p", {
					className: "flex-1 font-medium",
					children: D
				}),
				!b && !x && C && /* @__PURE__ */ u("span", {
					className: "text-sm font-medium text-f1-foreground-positive",
					children: M("surveyFormBuilder.selectQuestion.correct")
				}),
				!b && !x && !w ? /* @__PURE__ */ d("div", {
					className: "hidden flex-row items-center gap-1 group-hover:inline-block",
					children: [/* @__PURE__ */ u(s, {
						label: M("surveyFormBuilder.selectQuestion.markAsCorrect"),
						variant: "ghost",
						icon: C ? r : n,
						onClick: I,
						hideLabel: !0
					}), /* @__PURE__ */ u(s, {
						label: M("surveyFormBuilder.selectQuestion.remove"),
						variant: "ghost",
						icon: i,
						hideLabel: !0,
						onClick: L
					})]
				}) : /* @__PURE__ */ u("div", { className: "min-h-8" })
			]
		})
	});
};
//#endregion
export { h as SelectOption };
