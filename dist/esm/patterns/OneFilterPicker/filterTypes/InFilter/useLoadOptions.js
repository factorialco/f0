import { useDataSource as e } from "../../../../hooks/datasource/useDataSource.js";
import { useData as t } from "../../../../hooks/datasource/useData.js";
import { useCallback as n, useEffect as r, useState as i } from "react";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/useLoadOptions.ts
var a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
function c(e) {
	return JSON.stringify(e);
}
function l(e, t, n) {
	let r = `${e}:${String(t)}`;
	o.set(r, n);
}
function u(e, t) {
	let n = `${e}:${String(t)}`;
	return o.get(n);
}
function d(e, t, n) {
	s.set(`${e}:${String(t)}`, n);
}
function f(e, t) {
	return s.get(`${e}:${String(t)}`);
}
async function p(e, t, n = !1) {
	if (n && a.has(e)) return a.get(e);
	let r = await (typeof t == "function" ? t : () => t)();
	return a.set(e, r), r;
}
function m({ schema: o, search: s }) {
	let l = c(o), [u, d] = i([]), [f, m] = i(!1), [h, g] = i(null), _ = "options" in o.options ? o.options.options : void 0, v = "source" in o.options ? o.options.source : void 0, y = e(v ? {
		...v,
		search: {
			enabled: !0,
			sync: !0
		}
	} : { dataAdapter: { fetchData: async () => ({ records: [] }) } }, [v]), { data: b, isInitialLoading: x, loadMore: S, isLoadingMore: C, paginationInfo: w } = t({
		...y,
		currentSearch: s
	}, {}, [v]), T = n(async (e = !1) => {
		if (_) {
			e && a.delete(l);
			try {
				m(!0), g(null);
				let e = await p(l, _, o.options.cache);
				d(e);
			} catch (e) {
				g(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to load options"));
			} finally {
				m(!1);
			}
		}
	}, [JSON.stringify(o), l]);
	return r(() => {
		if ("source" in o.options && o.options.mapOptions) try {
			m(!1), g(null);
			let e = b.records.map(o.options.mapOptions);
			d(e);
		} catch (e) {
			g(e instanceof Error ? e : /* @__PURE__ */ Error("Failed to map options from source"));
		}
	}, [b.records, o.options]), r(() => {
		v || T();
	}, [T, v]), {
		options: u,
		isLoading: v ? x || C : f,
		error: h,
		setOptions: d,
		loadOptions: T,
		loadMore: v ? S : void 0,
		hasMore: v ? w?.type === "infinite-scroll" && "hasMore" in w && w.hasMore : !1
	};
}
//#endregion
export { l as cacheLabel, d as cacheNestedLabel, c as getCacheKey, u as getCachedLabel, f as getNestedCachedLabel, p as loadOptions, m as useLoadOptions };
