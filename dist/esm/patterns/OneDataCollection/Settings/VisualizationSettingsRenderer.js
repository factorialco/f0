import { collectionVisualizations as e } from "../visualizations/collection/collectionViewRegistry.js";
//#region src/patterns/OneDataCollection/Settings/VisualizationSettingsRenderer.tsx
var t = (t) => {
	if (t === "custom") return null;
	let n = e[t];
	if (!n) throw Error(`Visualization type ${t} not found`);
	return n;
}, n = (e) => t(e.type)?.settings.renderer ?? null, r = (e) => {
	if (e.type === "custom") return !1;
	let t = n(e);
	return t ? t(e.options) !== null : !1;
}, i = ({ visualization: e }) => {
	if (e.type === "custom") return null;
	let t = n(e);
	return t ? t(e.options) : null;
};
//#endregion
export { i as VisualizationSettingsRenderer, t as getVisualizationTypeRegistry, r as hasVisualizacionSettings };
