import { collectionVisualizations as e } from "../visualizations/collection/collectionViewRegistry.js";
//#region src/patterns/OneDataCollection/internal/isSettingsDefault.ts
var t = () => {
	let t = {};
	for (let [n, r] of Object.entries(e)) r.settings.default && (t[n] = { ...r.settings.default });
	return { visualization: t };
}, n = (t, n) => {
	if (!n || !(n in e)) return !0;
	let r = n, i = t.visualization[r], a = e[r]?.settings.default;
	return JSON.stringify(i) === JSON.stringify(a);
};
//#endregion
export { t as getDefaultDataCollectionSettings, n as isVisualizationSettingsDefault };
