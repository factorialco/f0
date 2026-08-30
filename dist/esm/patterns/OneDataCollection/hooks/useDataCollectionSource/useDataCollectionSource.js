import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useDataSource as t } from "../../../../hooks/datasource/useDataSource.js";
import { navigationFilterTypes as n } from "../../navigationFilters/index.js";
import { useMemo as r, useState as i } from "react";
import { useDeepCompareEffect as a } from "@reactuses/core";
//#region src/patterns/OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.ts
var o = (o, s = []) => {
	let c = e(), { navigationFilters: l, summaries: u, currentNavigationFilters: d } = o, f = t({
		...o,
		dataAdapter: o.dataAdapter
	}, s), [p, m] = i(() => l ? Object.fromEntries(Object.entries(l).map(([e, t]) => {
		let r = n[t.type];
		return [e, r.valueConverter ? r.valueConverter(t.defaultValue, t, c) : t.defaultValue];
	})) : {});
	a(() => {
		d && m(d);
	}, [d]);
	let h = r(() => u, s);
	return {
		...f,
		summaries: h,
		navigationFilters: l,
		currentNavigationFilters: p,
		setCurrentNavigationFilters: m
	};
};
//#endregion
export { o as useDataCollectionSource };
