import { parseDataCollectionUrlParams as e, syncDataCollectionUrlParams as t } from "../../../lib/providers/datacollection/dataCollectionUrlParams.js";
import { useCallback as n, useEffect as r, useState as i } from "react";
import { useDebounceCallback as a } from "usehooks-ts";
import { useDeepCompareEffect as o } from "@reactuses/core";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionUrlSync.ts
var s = 300, c = ({ disabled: c, storageReady: l, filtersDefinition: u, filters: d, search: f, sortings: p, defaultSortings: m = null, visualization: h, visualizationKeys: g, selectedPresetId: _, setFilters: v, setSearch: y, setSortings: b, setVisualization: x, setSelectedPresetId: S }) => {
	let C = !c, w = g.length > 1, [T, E] = i(!1);
	r(() => {
		if (!C || !l || T) return;
		let t = e(typeof window < "u" ? window.location.search : "", u);
		if ("filters" in t && v(t.filters ?? {}), "search" in t && y(t.search), "sortings" in t && b(t.sortings ?? null), w && t.visualization !== void 0) {
			let e = g.indexOf(t.visualization);
			e >= 0 && x(e);
		}
		t.preset !== void 0 && S(t.preset), E(!0);
	}, [C, l]);
	let D = n((e) => t(e), []), O = a(D, s);
	o(() => {
		if (!(!C || !T)) return O({
			filters: d,
			search: f,
			sortings: JSON.stringify(p) === JSON.stringify(m) ? null : p,
			visualization: w && h > 0 ? g[h] : void 0,
			preset: _
		}), () => O.cancel();
	}, [
		C,
		T,
		d,
		f,
		p,
		m,
		h,
		g,
		w,
		_,
		O
	]);
};
//#endregion
export { c as useDataCollectionUrlSync };
