import { createInitialVisualizationSettings as e } from "../Settings/visualizationSettings.js";
//#region src/patterns/OneDataCollection/internal/isSettingsDefault.ts
var t = () => ({ visualization: e() }), n = (t, n) => {
	let r = e();
	if (!n || !(n in r)) return !0;
	let i = n, a = t.visualization[i];
	return JSON.stringify(a) === JSON.stringify(r[i]);
};
//#endregion
export { t as getDefaultDataCollectionSettings, n as isVisualizationSettingsDefault };
