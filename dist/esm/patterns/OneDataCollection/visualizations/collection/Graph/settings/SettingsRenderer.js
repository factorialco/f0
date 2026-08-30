import { useDataCollectionSettings as e } from "../../../../Settings/SettingsProvider.js";
import { SortAndHideSettings as t } from "../../../../Settings/SortAndHideSettings.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/settings/SettingsRenderer.tsx
var r = ({ tagTypes: r, labels: i, defaultVisibleTagTypes: a, pinnedTagTypes: o, lockedTagTypes: s }) => {
	let { settings: c } = e(), l = c.visualization.graph ?? {}, u = new Set(a ?? r), d = new Set(o ?? []), f = s ?? {}, p = new Set(l.hidden ?? r.filter((e) => !u.has(e))), m = l.order ?? [], h = [...m.filter((e) => r.includes(e)), ...r.filter((e) => !m.includes(e))].map((e) => {
		let t = f[e];
		return t === void 0 ? {
			id: e,
			label: i?.[e] ?? e,
			sortable: !d.has(e),
			canHide: !d.has(e),
			visible: d.has(e) || !p.has(e)
		} : {
			id: e,
			label: i?.[e] ?? e,
			sortable: !1,
			canHide: !1,
			visible: !1,
			disabledReason: t
		};
	});
	return /* @__PURE__ */ n(t, {
		items: h,
		visualizationKey: "graph",
		allowSorting: !0,
		allowHiding: !0
	});
}, i = (e) => !e.nodeTagTypes || e.nodeTagTypes.length === 0 ? null : /* @__PURE__ */ n(r, {
	tagTypes: e.nodeTagTypes,
	labels: e.nodeTagTypeLabels,
	defaultVisibleTagTypes: e.defaultVisibleTagTypes,
	pinnedTagTypes: e.pinnedTagTypes,
	lockedTagTypes: e.lockedTagTypes
});
//#endregion
export { i as SettingsRenderer };
