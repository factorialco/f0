import { getNextLockedColumnIds as e, useColumns as t } from "../hooks/useColums.js";
import { SortAndHideSettings as n } from "../../../../Settings/SortAndHideSettings.js";
import { useDataCollectionSettings as r } from "../../../../Settings/SettingsProvider.js";
import { useMemo as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/TableSettings.tsx
var o = ({ columns: o, frozenColumns: s, allowSorting: c, allowHiding: l, visualizationKey: u = "table", onAddColumn: d, onRemoveColumn: f, lockedColumnIds: p, onLockedColumnIdsChange: m }) => {
	let { settings: h } = r(), g = h.visualization[u], _ = p !== void 0 || !!m, { columnsWithStatus: v, savedOrder: y, managedLockedColumnIds: b } = t(o, s, g, c, l, p, _), x = i(() => {
		let e = new Set(v.filter((e) => e.visible && !e.locked).map((e) => e.column.id));
		return v.filter((e) => l || e.visible).map((t) => ({
			id: t.column.id,
			label: t.column.label,
			sortable: t.sortable,
			canHide: t.canHide,
			visible: t.visible,
			locked: t.locked,
			lockable: !!m && !t.frozen && (t.locked || [...e].some((e) => e !== t.column.id)),
			showLockState: _ && t.locked,
			removable: !!f && !t.locked && !t.column.noRemoving
		}));
	}, [
		v,
		l,
		m,
		f,
		_
	]);
	return /* @__PURE__ */ a(n, {
		items: x,
		visualizationKey: u,
		allowSorting: c,
		allowHiding: l,
		onAddColumn: d,
		onRemoveColumn: f,
		onLockedColumnChange: m ? (t, n) => {
			m(e(b, t, n));
		} : void 0,
		orderBaseline: _ ? y : void 0,
		keepOneUnlockedVisible: _
	});
};
//#endregion
export { o as TableSettings };
