import { createInitialVisualizationSettings as e } from "./visualizationSettings.js";
import { createContext as t, useContext as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/SettingsProvider.tsx
var a = t({
	setSettings: () => {},
	settings: { visualization: e() },
	setVisualizationSettings: () => {}
}), o = () => n(a), s = ({ children: t }) => {
	let [n, o] = r({ visualization: e() });
	return /* @__PURE__ */ i(a.Provider, {
		value: {
			settings: n,
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
		children: t
	});
};
//#endregion
export { s as DataCollectionSettingsProvider, o as useDataCollectionSettings };
