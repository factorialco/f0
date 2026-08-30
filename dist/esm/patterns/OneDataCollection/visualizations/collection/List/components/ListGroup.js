import { cn as e } from "../../../../../../lib/utils.js";
import { Row as t } from "./Row.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/List/components/ListGroup.tsx
var r = ({ source: r, items: i, selectedItems: a, handleSelectItemChange: o, fields: s, itemDefinition: c, isLoadingMore: l }) => /* @__PURE__ */ n("div", {
	className: e("flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", l && "rounded-b-none"),
	children: i.map((e, i) => /* @__PURE__ */ n(t, {
		source: r,
		item: e,
		selectedItems: a,
		handleSelectItemChange: o,
		fields: s,
		itemDefinition: c
	}, `row-${i}`))
});
//#endregion
export { r as ListGroup };
