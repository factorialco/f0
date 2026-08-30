import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { DataChartEmptyState as t } from "./EmptyState.js";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/EmptyState/DataChartEmptyStateView.tsx
var i = ({ emptyState: i }) => {
	let a = e();
	if (i?.render) return /* @__PURE__ */ r(n, { children: i.render() });
	let o = a.dataChart.emptyState;
	return /* @__PURE__ */ r(t, {
		content: i?.title ?? o.title,
		description: i?.description ?? o.description
	});
};
//#endregion
export { i as DataChartEmptyStateView };
