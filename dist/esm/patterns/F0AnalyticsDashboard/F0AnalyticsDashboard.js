import { cn as e } from "../../lib/utils.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { navigationFilterTypes as n } from "../OneDataCollection/navigationFilters/index.js";
import { NavigationFilters as r } from "../OneDataCollection/components/NavigationFilters/NavigationFilters.js";
import { DashboardGrid as i } from "./components/DashboardGrid/DashboardGrid.js";
import { ExportDropdown as a } from "./components/ExportDropdown/ExportDropdown.js";
import { FilterBar as o } from "./components/FilterBar/FilterBar.js";
import { FilterBarSkeleton as s } from "./components/FilterBar/FilterBarSkeleton.js";
import { useDashboardExport as c } from "./hooks/useDashboardExport.js";
import { useEffect as l, useMemo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { useControllableState as m } from "@radix-ui/react-use-controllable-state";
//#region src/patterns/F0AnalyticsDashboard/F0AnalyticsDashboard.tsx
var h = ({ filters: h, presets: g, defaultFilters: _, filtersValue: v, onFiltersChange: y, items: b, itemFilters: x, editMode: S, onLayoutChange: C, enableExport: w, exportFilename: T, onExportReady: E, resetKey: D, onTransformChart: O, onAskAi: k, onAskAiTarget: A, navigationFilters: j, filtersLoading: M }) => {
	let N = t(), [P = {}, F] = m({
		prop: v,
		defaultProp: _ ?? {},
		onChange: y
	}), I = u(() => {
		if (!j) return {};
		let e = {};
		for (let [t, r] of Object.entries(j)) e[t] = n[r.type].valueConverter?.(r.defaultValue, r, N) ?? r.defaultValue;
		return e;
	}, []), [L, R] = d(I), { exportAsExcel: z, isExporting: B } = c({
		items: b,
		filters: P,
		filename: T
	}), V = b.length === 1 && b[0]?.type === "collection";
	l(() => {
		if (V) {
			E?.(void 0);
			return;
		}
		return E?.(z), () => E?.(void 0);
	}, [
		z,
		E,
		V
	]);
	let H = b.length === 1, [U, W] = d(!1), G = H || U;
	return /* @__PURE__ */ p("div", {
		className: e("flex flex-col gap-5 pb-10", G && "h-full pb-0"),
		children: [(h || M || w || j) && /* @__PURE__ */ p("div", {
			className: "flex items-center justify-between gap-4 px-5",
			children: [/* @__PURE__ */ f("div", {
				className: "w-full",
				children: h ? /* @__PURE__ */ f(o, {
					filters: h,
					value: P,
					presets: g,
					onChange: F
				}) : M ? /* @__PURE__ */ f(s, {}) : null
			}), /* @__PURE__ */ p("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [j && /* @__PURE__ */ f(r, {
					navigationFilters: j,
					currentNavigationFilters: L,
					onChangeNavigationFilters: R
				}), w && /* @__PURE__ */ f(a, {
					onExportExcel: z,
					isExporting: B
				})]
			})]
		}), /* @__PURE__ */ f("div", {
			className: e("px-5", G && "flex min-h-0 flex-1 flex-col pb-5"),
			children: /* @__PURE__ */ f(i, {
				items: b,
				itemFilters: x,
				filters: {
					...P,
					...L
				},
				editMode: S,
				onLayoutChange: C,
				onTransformChart: O,
				onAskAi: k,
				onAskAiTarget: A,
				resetKey: D,
				onFullscreenChange: W
			})
		})]
	});
};
h.displayName = "F0AnalyticsDashboard";
//#endregion
export { h as F0AnalyticsDashboard };
