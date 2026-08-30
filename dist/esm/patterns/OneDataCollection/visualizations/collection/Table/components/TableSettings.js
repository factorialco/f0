import { useDataCollectionSettings as e } from "../../../../Settings/SettingsProvider.js";
import { getNextLockedColumnIds as t, useColumns as n } from "../hooks/useColums.js";
import { SortAndHideSettings as r } from "../../../../Settings/SortAndHideSettings.js";
import { useMemo as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/TableSettings.tsx
var o = ({ columns: o, frozenColumns: s, allowSorting: c, allowHiding: l, visualizationKey: u = "table", onAddColumn: d, onRemoveColumn: f, lockedColumnIds: p, onLockedColumnIdsChange: m }) => {
	let { settings: h } = e(), g = h.visualization[u], _ = p !== void 0 || !!m, { columnsWithStatus: v, savedOrder: y, managedLockedColumnIds: b } = n(o, s, g, c, l, p, _), x = i(() => {
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
	return /* @__PURE__ */ a(r, {
		items: x,
		visualizationKey: u,
		allowSorting: c,
		allowHiding: l,
		onAddColumn: d,
		onRemoveColumn: f,
		onLockedColumnChange: m ? (e, n) => {
			m(t(b, e, n));
		} : void 0,
		orderBaseline: _ ? y : void 0,
		keepOneUnlockedVisible: _
	});
};
//#endregion
export { o as TableSettings };
