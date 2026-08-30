import { VerticalOverflowList as e } from "../../../../../ui/VerticalOverflowList/index.js";
import { WidgetInboxListItem as t } from "../../ListItems/WidgetInboxListItem/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/Lists/WidgetInboxList/index.tsx
function r({ items: r, minSize: i = 184, onClickItem: a, showAllItems: o, onVisibleItemsChange: s }) {
	return o ? /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-2",
		children: r.map((e) => /* @__PURE__ */ n(t, {
			...e,
			onClick: a
		}, e.id))
	}) : /* @__PURE__ */ n(e, {
		items: r,
		minSize: i,
		renderListItem: (e) => /* @__PURE__ */ n(t, {
			...e,
			onClick: a
		}, e.id),
		onVisibleItemsChange: s,
		gap: 8
	});
}
//#endregion
export { r as WidgetInboxList };
