import { createContext as e, useContext as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/SettingsProvider.tsx
var i = () => ({
	table: {},
	editableTable: {},
	list: {},
	card: {},
	kanban: {},
	graph: {}
}), a = e({
	setSettings: () => {},
	settings: { visualization: {} },
	setVisualizationSettings: () => {}
}), o = () => {
	let e = t(a);
	if (!e) throw Error("useTableSettings must be used within a TableSettingsProvider");
	return e;
}, s = ({ children: e }) => {
	let [t, o] = n({ visualization: i() });
	return /* @__PURE__ */ r(a.Provider, {
		value: {
			settings: t,
			setSettings: o,
			setVisualizationSettings: (e, t) => {
				o(typeof t == "function" ? (n) => ({
					...n,
					visualization: {
						...n.visualization,
						[e]: t(n.visualization[e])
					}
				}) : (n) => ({
					...n,
					visualization: {
						...n.visualization,
						[e]: t
					}
				}));
			}
		},
		children: e
	});
};
//#endregion
export { s as DataCollectionSettingsProvider, o as useDataCollectionSettings };
