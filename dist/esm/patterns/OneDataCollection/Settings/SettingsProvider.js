import { collectionVisualizations as e } from "../visualizations/collection/collectionViewRegistry.js";
import { createContext as t, useContext as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/SettingsProvider.tsx
var a = () => {
	let t = {};
	for (let [n, r] of Object.entries(e)) r.settings.default && (t[n] = { ...r.settings.default });
	return t;
}, o = t({
	setSettings: () => {},
	settings: { visualization: {} },
	setVisualizationSettings: () => {}
}), s = () => {
	let e = n(o);
	if (!e) throw Error("useTableSettings must be used within a TableSettingsProvider");
	return e;
}, c = ({ children: e }) => {
	let [t, n] = r({ visualization: a() });
	return /* @__PURE__ */ i(o.Provider, {
		value: {
			settings: t,
			setSettings: n,
			setVisualizationSettings: (e, t) => {
				n(typeof t == "function" ? (n) => ({
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
export { c as DataCollectionSettingsProvider, s as useDataCollectionSettings };
