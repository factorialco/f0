import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0SegmentedControl as t } from "../../../experimental/Actions/F0SegmentedControl/index.js";
import { useVisualizationMeta as n } from "../Settings/components/useVisualizationMeta.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/VisualizationSwitcher.tsx
var i = ({ visualizations: i, currentVisualization: a, onVisualizationChange: o, hideLabels: s }) => {
	let c = e(), l = n();
	if (!i || i.length <= 1) return null;
	let u = i.map((e, t) => {
		let { icon: n, label: r } = l(e);
		return {
			value: String(t),
			label: r,
			icon: n
		};
	});
	return /* @__PURE__ */ r(t, {
		items: u,
		value: String(a),
		onChange: (e) => o(Number(e)),
		hideLabels: s,
		ariaLabel: c.collections.visualizations.viewSelectorLabel
	});
};
//#endregion
export { i as VisualizationSwitcher };
