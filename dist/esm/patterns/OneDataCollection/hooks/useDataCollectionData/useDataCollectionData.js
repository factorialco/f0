import { useData as e } from "../../../../hooks/datasource/useData.js";
import { useState as t } from "react";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionData.tsx
function n(n, { filters: r, onError: i } = {}) {
	let [a, o] = t(void 0);
	return {
		...e(n, {
			filters: r,
			onError: i,
			fetchParamsProvider: (e) => ({
				...e,
				navigationFilters: n.currentNavigationFilters
			}),
			onResponse: (e) => {
				let t = "summaries" in e ? e.summaries : void 0;
				o(t);
			}
		}, [JSON.stringify(n.currentNavigationFilters)]),
		summaries: a
	};
}
function r(e, t = {}) {
	return { ...n(e, t) };
}
//#endregion
export { r as useDataCollectionData };
