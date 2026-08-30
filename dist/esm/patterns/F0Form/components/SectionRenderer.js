import { cn as e } from "../../../lib/utils.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
import { SectionHeader as n } from "../../SectionHeader/index.js";
import { evaluateRenderIf as r } from "../fields/utils.js";
import { FIELD_GAP as i } from "../constants.js";
import { generateAnchorId as a, useF0FormContext as o } from "../context.js";
import { CardSelectDepsContext as s } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as c } from "../fields/FieldRenderer.js";
import { RowRenderer as l } from "./RowRenderer.js";
import { buildCardSelectContentMap as u, groupContiguousSwitches as d } from "../groupingUtils.js";
import { SwitchGroupRenderer as f } from "./SwitchGroupRenderer.js";
import p from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { useFormContext as g } from "react-hook-form";
//#region src/patterns/F0Form/components/SectionRenderer.tsx
function _({ section: _ }) {
	let v = g().watch(), { formName: y } = o(), { title: b, description: x, withInset: S, renderIf: C, action: w, fields: T } = _.section, E = _.id;
	if (C && !r(C, v)) return null;
	let D = d(T), O = a(y, E);
	return /* @__PURE__ */ h("section", {
		id: O,
		className: "flex scroll-mt-4 flex-col",
		children: [/* @__PURE__ */ h("div", {
			className: e("flex items-start justify-between py-5", S && "px-5", "[&>div]:px-0 [&>div]:mx-0 [&>div]:border-0"),
			children: [/* @__PURE__ */ m(n, {
				title: b,
				description: x ?? ""
			}), w && /* @__PURE__ */ m(t, {
				label: w.label,
				icon: w.icon,
				onClick: w.onClick,
				href: w.href,
				variant: "outline",
				size: "md"
			})]
		}), /* @__PURE__ */ m("div", {
			className: `flex flex-col ${i}`,
			children: D.map((e, t) => {
				if (e.type === "switchGroup") return /* @__PURE__ */ m(f, {
					fields: e.fields,
					dependentFields: e.dependentFields,
					cardSelectDependentFields: e.cardSelectDependentFields,
					sectionId: E
				}, `switch-group-${t}`);
				if (e.type === "field") {
					let t = e.cardSelectDependentFields ? /* @__PURE__ */ m(s.Provider, {
						value: u(e.cardSelectDependentFields, E),
						children: /* @__PURE__ */ m(c, {
							field: e.item.field,
							sectionId: E
						}, e.item.field.id)
					}) : /* @__PURE__ */ m(c, {
						field: e.item.field,
						sectionId: E
					}, e.item.field.id);
					return /* @__PURE__ */ m(p.Fragment, { children: t }, e.item.field.id);
				}
				return e.type === "row" ? /* @__PURE__ */ m(l, {
					row: e.item,
					sectionId: E
				}, `row-${e.index}`) : null;
			})
		})]
	});
}
//#endregion
export { _ as SectionRenderer };
