import { OneDataCollection as e } from "../../../OneDataCollection/index.js";
import { useDataCollectionSource as t } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
import { DashboardItem as n } from "../DashboardItem/DashboardItem.js";
import { useCollectionDownloadActions as r } from "../../hooks/useCollectionDownloadActions.js";
import { useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/CollectionItem/CollectionItem.tsx
function s({ item: s, filters: c, actions: l, itemFilters: u, editMode: d, handleDelete: f, onAskAi: p, onAskAiTarget: m, isFullscreen: h, onFullscreenChange: g }) {
	let _ = s.useDashboardFilters === !1 ? {} : c, v = JSON.stringify(_), y = JSON.stringify(u?.value ?? {}), b = i(() => s.createSource(_), [v, y]), x = t(b, [v, y]), [S, C] = a(), w = i(() => ((s.visualizations?.find((e) => e?.type === "table"))?.options?.columns ?? []).filter((e) => typeof e?.id == "string" && typeof e?.label == "string").map((e) => ({
		id: e.id,
		label: e.label,
		render: e.render
	})), [s]), T = r({
		source: x,
		title: s.title,
		columns: w,
		tableSettings: S
	}), E = i(() => [...l ?? [], ...T], [l, T]);
	return /* @__PURE__ */ o(n, {
		title: s.title,
		description: s.description,
		info: s.info,
		explanation: s.explanation,
		isLoading: !1,
		actions: E,
		itemFilters: u,
		editMode: d,
		handleDelete: f,
		onAskAi: p,
		onAskAiTarget: m,
		itemId: s.id,
		isFullscreen: h,
		onFullscreenChange: g,
		children: /* @__PURE__ */ o(e, {
			fullHeight: !0,
			source: x,
			visualizations: s.visualizations,
			onStateChange: (e) => {
				let t = e.settings?.visualization?.table;
				C((e) => {
					let n = JSON.stringify(e?.hidden) === JSON.stringify(t?.hidden), r = JSON.stringify(e?.order) === JSON.stringify(t?.order);
					return n && r ? e : t;
				});
			}
		})
	});
}
//#endregion
export { s as CollectionItem };
