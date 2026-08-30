import { TableSettings as e } from "../components/TableSettings.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/settings/SettingsRenderer.tsx
var n = (n) => !n.allowColumnHiding && !n.allowColumnReordering && !n.onAddColumn && !n.onRemoveColumn && !n.onLockedColumnIdsChange ? null : /* @__PURE__ */ t(e, {
	columns: n.columns,
	frozenColumns: n.frozenColumns || 0,
	allowSorting: n.allowColumnReordering ?? !1,
	allowHiding: n.allowColumnHiding ?? !1,
	visualizationKey: n.visualizationKey,
	onAddColumn: n.onAddColumn,
	onRemoveColumn: n.onRemoveColumn,
	lockedColumnIds: n.lockedColumnIds,
	onLockedColumnIdsChange: n.onLockedColumnIdsChange
});
//#endregion
export { n as SettingsRenderer };
