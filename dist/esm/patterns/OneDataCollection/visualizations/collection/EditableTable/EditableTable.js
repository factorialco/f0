import { EditableRowProvider as e } from "./context/EditableRowContext.js";
import { EditableCellRenderer as t } from "./components/EditableCellRenderer.js";
import { useDataCollectionSettings as n } from "../../../Settings/SettingsProvider.js";
import { AddRowProvider as r } from "./context/AddRowContext.js";
import { TableCollection as i } from "../Table/Table.js";
import { useMemo as a, useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/EditableTable.tsx
var c = ({ onCellChange: c, addRowActions: l, addRowActionsLabel: u, addNestedRowActions: d, addNestedRowActionsLabel: f, ...p }) => {
	let { settings: m } = n(), h = o(c);
	h.current = c;
	let g = a(() => function({ item: t, children: n }) {
		return /* @__PURE__ */ s(e, {
			item: t,
			onCellChange: (...e) => h.current?.(...e),
			children: n
		});
	}, []);
	return /* @__PURE__ */ s(r, {
		addRowActions: l,
		addRowActionsLabel: u,
		addNestedRowActions: d,
		addNestedRowActionsLabel: f,
		children: /* @__PURE__ */ s(i, {
			...p,
			rowWrapper: g,
			cellRenderer: t,
			visualizationSettings: m.visualization?.editableTable,
			fromVisualization: "editableTable"
		})
	});
};
//#endregion
export { c as EditableTableCollection };
