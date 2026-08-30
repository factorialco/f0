import { VerticalOverflowList as e } from "../../../../../ui/VerticalOverflowList/index.js";
import { WidgetSimpleListItem as t } from "../../ListItems/WidgetSimpleListItem/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/Lists/WidgetSimpleList/index.tsx
function r({ items: r, gap: i, minSize: a = 184, onClickItem: o, showAllItems: s }) {
	return s ? /* @__PURE__ */ n("div", {
		className: "flex flex-col",
		style: { minHeight: `${a}px` },
		children: r.map((e) => /* @__PURE__ */ n(t, {
			...e,
			onClick: o
		}, e.id))
	}) : /* @__PURE__ */ n(e, {
		items: r,
		gap: i,
		renderListItem: (e) => /* @__PURE__ */ n(t, {
			...e,
			onClick: o
		}),
		minSize: a
	});
}
//#endregion
export { r as WidgetSimpleList };
