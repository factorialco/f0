import { useSelectable as e } from "../../../../hooks/datasource/useSelectable/useSelectable.js";
import { mergeLanesSelectItemsStatus as t } from "./utils.js";
import { useCallback as n, useEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/hooks/useSelectableLanes/useSelectableLanes.tsx
var s = (t) => {
	let n = e({
		data: t.data || {
			type: "flat",
			records: [],
			groups: []
		},
		paginationInfo: t.paginationInfo,
		source: t.source,
		onSelectItems: t.onSelectItems,
		selectedState: t.source.defaultSelectedItems
	});
	return r(() => {
		t.onHookUpdate(n);
	}, [n]), null;
}, c = (e, c, l) => {
	let [u, d] = a(/* @__PURE__ */ new Map()), [f, p] = a({
		selectItemsStatus: /* @__PURE__ */ new Map(),
		clearCallback: /* @__PURE__ */ new Map()
	}), m = n(() => {
		f.clearCallback.forEach((e) => e());
	}, [f.clearCallback]);
	return r(() => {
		let e = Object.fromEntries(f.selectItemsStatus);
		l?.({
			...t(f.selectItemsStatus),
			byLane: e
		}, m);
	}, [f]), {
		lanesUseSelectable: u,
		lanesSelectProvider: i(() => (e || []).map((e) => /* @__PURE__ */ o(s, {
			source: c,
			data: e.data || {
				type: "flat",
				records: [],
				groups: []
			},
			paginationInfo: e.paginationInfo,
			onHookUpdate: (t) => d((n) => new Map(n).set(e.id, t)),
			onSelectItems: (t, n) => {
				p((r) => ({
					selectItemsStatus: new Map(r.selectItemsStatus).set(e.id, t),
					clearCallback: new Map(r.clearCallback).set(e.id, n)
				}));
			}
		}, e.id)), [JSON.stringify(e)])
	};
};
//#endregion
export { c as useSelectableLanes };
