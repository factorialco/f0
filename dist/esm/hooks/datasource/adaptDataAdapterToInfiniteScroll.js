import { isObservableLike as e, isPromiseLike as t } from "../../lib/promise-to-observable.js";
import { getDataSourcePaginationType as n } from "./useDataSource.js";
//#region src/hooks/datasource/adaptDataAdapterToInfiniteScroll.ts
var r = (e) => e.type === "infinite-scroll" ? e : {
	type: "infinite-scroll",
	records: e.records,
	total: e.total,
	perPage: e.perPage,
	cursor: String(e.currentPage + 1),
	hasMore: e.currentPage < e.pagesCount,
	summaries: e.summaries
}, i = (n, r) => e(n) ? n.map((e) => {
	let t = e.data;
	return t == null ? {
		loading: e.loading,
		error: e.error,
		data: null
	} : {
		loading: e.loading,
		error: e.error,
		data: r(t)
	};
}) : t(n) ? n.then(r) : r(n), a = (e) => {
	if (n(e) !== "pages") return e;
	let t = e;
	return {
		...t,
		paginationType: "infinite-scroll",
		fetchData: (e) => {
			let n = "cursor" in e.pagination ? e.pagination.cursor : null, a = Math.max(1, Number(n) || 1);
			return i(t.fetchData({
				...e,
				pagination: {
					currentPage: a,
					perPage: e.pagination.perPage
				}
			}), r);
		}
	};
};
//#endregion
export { a as adaptDataAdapterToInfiniteScroll };
