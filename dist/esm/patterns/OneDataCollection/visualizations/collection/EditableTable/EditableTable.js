import { EditableRowProvider as e } from "./context/EditableRowContext.js";
import { EditableCellRenderer as t } from "./components/EditableCellRenderer.js";
import { AddRowProvider as n } from "./context/AddRowContext.js";
import { TableCollection as r } from "../Table/Table.js";
import { useDataCollectionSettings as i } from "../../../Settings/SettingsProvider.js";
import { useMemo as a, useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/EditableTable.tsx
var c = ({ onCellChange: c, addRowActions: l, addRowActionsLabel: u, addNestedRowActions: d, addNestedRowActionsLabel: f, ...p }) => {
	let { settings: m } = i(), h = o(c);
	h.current = c;
	let g = a(() => function({ item: t, children: n }) {
		return /* @__PURE__ */ s(e, {
			item: t,
			onCellChange: (...e) => h.current?.(...e),
			children: n
		});
	}, []);
	return /* @__PURE__ */ s(n, {
		addRowActions: l,
		addRowActionsLabel: u,
		addNestedRowActions: d,
		addNestedRowActionsLabel: f,
		children: /* @__PURE__ */ s(r, {
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
