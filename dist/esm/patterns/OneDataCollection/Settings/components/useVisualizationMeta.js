import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { collectionVisualizations as t } from "../../visualizations/collection/collectionViewRegistry.js";
//#region src/patterns/OneDataCollection/Settings/components/useVisualizationMeta.ts
var n = () => {
	let n = e();
	return (e) => e.type === "custom" ? {
		icon: e.icon,
		label: e.label
	} : {
		icon: t[e.type].icon,
		label: e.label ?? n.collections.visualizations[e.type]
	};
};
//#endregion
export { n as useVisualizationMeta };
