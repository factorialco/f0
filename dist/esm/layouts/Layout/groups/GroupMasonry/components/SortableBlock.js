import { jsx as e } from "react/jsx-runtime";
import { useSortable as t } from "@dnd-kit/sortable";
import { CSS as n } from "@dnd-kit/utilities";
//#region src/layouts/Layout/groups/GroupMasonry/components/SortableBlock.tsx
var r = ({ id: r, children: i }) => {
	let { attributes: a, listeners: o, setNodeRef: s, transform: c, transition: l } = t({ id: r }), u = {
		transform: n.Translate.toString(c),
		transition: l,
		flex: "1 1",
		display: "flex",
		flexDirection: "column"
	};
	return /* @__PURE__ */ e("div", {
		ref: s,
		style: u,
		...a,
		...o,
		children: i
	});
};
//#endregion
export { r as SortableBlock };
