import { CalendarEvent as e } from "../CalendarEvent/index.js";
import { VerticalOverflowList as t } from "../../../../ui/VerticalOverflowList/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/CalendarEventList/index.tsx
var r = ({ events: r, showAllItems: i, gap: a = 8, minSize: o = 184 }) => r.length ? i ? /* @__PURE__ */ n("div", {
	className: "flex flex-col",
	style: { gap: `${a}px` },
	children: r.map((t) => /* @__PURE__ */ n(e, { ...t }, t.title))
}) : /* @__PURE__ */ n(t, {
	items: r,
	gap: a,
	minSize: o,
	renderListItem: (t) => /* @__PURE__ */ n(e, { ...t }, t.title)
}) : null;
//#endregion
export { r as CalendarEventList };
