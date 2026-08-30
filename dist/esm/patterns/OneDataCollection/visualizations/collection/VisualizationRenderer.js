import { collectionVisualizations as e } from "./collectionViewRegistry.js";
//#region src/patterns/OneDataCollection/visualizations/collection/VisualizationRenderer.tsx
var t = ({ visualization: t, source: n, onSelectItems: r, onLoadData: i, onLoadError: a, tmpFullWidth: o, searchSelectionNonce: s }) => {
	if (t.type === "custom") return t.component({
		source: n,
		onLoadData: i,
		onLoadError: a,
		onSelectItems: r
	});
	let c = e[t.type];
	if (!c) throw Error(`Visualization type ${t.type} not found`);
	return c.render({
		source: n,
		...t.options,
		onSelectItems: r,
		onLoadData: i,
		onLoadError: a,
		tmpFullWidth: o,
		searchSelectionNonce: s
	});
};
//#endregion
export { t as VisualizationRenderer };
