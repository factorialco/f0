import { cn as e } from "../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
import { useSortable as n } from "@dnd-kit/sortable";
import { CSS as r } from "@dnd-kit/utilities";
//#region src/sds/Home/WidgetContainer/SortableWidget.tsx
var i = ({ id: i, disabled: a = !1, children: o }) => {
	let { listeners: s, setNodeRef: c, transform: l, transition: u, isDragging: d } = n({
		id: i,
		disabled: a
	}), f = {
		transform: r.Translate.toString(l && {
			...l,
			x: 0
		}),
		transition: u ?? void 0
	};
	return /* @__PURE__ */ t("div", {
		ref: c,
		style: f,
		"data-widget-id": i,
		className: e(!a && "cursor-grab active:cursor-grabbing", d && "invisible"),
		...a ? {} : s,
		children: o({ isDragging: d })
	});
};
//#endregion
export { i as SortableWidget };
