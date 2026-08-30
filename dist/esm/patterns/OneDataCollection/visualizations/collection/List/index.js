import { cn as e } from "../../../../../lib/utils.js";
import { isInfiniteScrollPagination as t } from "../../../../../hooks/datasource/useData.js";
import { useGroups as n } from "../../../../../hooks/datasource/useGroups.js";
import { useSelectable as r } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { GroupHeader as i } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { useDebounceBoolean as a } from "../../../../../lib/useDebounceBoolean.js";
import { useDataCollectionData as o } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { PagesPagination as s } from "../../../components/PagesPagination/PagesPagination.js";
import { useInfiniteScrollPagination as c } from "../../../hooks/useInfiniteScrollPagination.js";
import { ListGroup as l } from "./components/ListGroup.js";
import { ListSkeleton as u } from "./components/ListSkeleton.js";
import { useEffect as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { AnimatePresence as m, motion as h } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/List/index.tsx
var g = ({ fields: g, itemDefinition: _, source: v, onSelectItems: y, onLoadData: b, onLoadError: x, tmpFullWidth: S }) => {
	let { data: C, paginationInfo: w, setPage: T, isInitialLoading: E, isLoadingMore: D, loadMore: O } = o(v, { onError: (e) => {
		x(e);
	} });
	d(() => {
		b({
			totalItems: w?.total || C.records.length,
			filters: v.currentFilters,
			search: v.currentSearch,
			isInitialLoading: E,
			data: C.records
		});
	}, [w?.total, C.records]);
	let { isLoading: k } = v, { loadingIndicatorRef: A } = c(w, k, D, O), { selectedItems: j, groupAllSelectedStatus: M, handleSelectItemChange: N, handleSelectGroupChange: P } = r({
		data: C,
		paginationInfo: w,
		source: v,
		onSelectItems: y,
		selectionMode: "multi",
		selectedState: v.defaultSelectedItems
	}), F = v.grouping?.collapsible, I = v.grouping?.defaultOpenGroups, { openGroups: L, setGroupOpen: R } = n(C?.type === "grouped" ? C.groups : [], I);
	if (a({
		value: E,
		delay: 100
	})) return /* @__PURE__ */ f(u, {
		source: v,
		fields: g,
		count: 30,
		isInitialLoading: !0
	});
	v.sortings || g.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a property but no sortings are provided in the data source");
	});
	let z = E || k && v.dataAdapter.paginationType === "pages";
	return /* @__PURE__ */ p("div", {
		className: e("flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2", !S && "px-page", S && "px-0"),
		children: [/* @__PURE__ */ f("div", {
			className: e("flex min-h-0 flex-1 flex-col gap-2", z && "select-none opacity-50 transition-opacity"),
			"aria-live": z ? "polite" : void 0,
			"aria-busy": z ? "true" : void 0,
			children: /* @__PURE__ */ p("div", {
				className: "min-h-0 flex-1 overflow-auto pb-3",
				children: [
					C.type === "grouped" && C.groups.map((e, t) => {
						let n = e.itemCount;
						return /* @__PURE__ */ p("div", {
							className: "flex flex-col gap-0 pt-2 first:pt-0",
							children: [/* @__PURE__ */ f(i, {
								className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
								selectable: !!v.selectable,
								select: M[e.key]?.checked ? !0 : M[e.key]?.indeterminate ? "indeterminate" : !1,
								onSelectChange: (t) => P(e, t),
								showOpenChange: F,
								label: e.label,
								itemCount: n,
								open: L[e.key],
								onOpenChange: (t) => R(e.key, t)
							}, `group-header-${e.key}`), /* @__PURE__ */ f(m, { children: (!F || L[e.key]) && /* @__PURE__ */ f(h.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .1,
									ease: "easeInOut"
								},
								className: "mt-0.5",
								children: /* @__PURE__ */ f(l, {
									source: v,
									items: e.records,
									selectedItems: j,
									handleSelectItemChange: N,
									fields: g,
									itemDefinition: _,
									isLoadingMore: D && t === C.groups.length - 1
								}, `list-group-${e.key}`)
							}) })]
						}, `group-header-${e.key}`);
					}),
					C?.type === "flat" && /* @__PURE__ */ f(l, {
						source: v,
						items: C.records,
						selectedItems: j,
						handleSelectItemChange: N,
						fields: g,
						itemDefinition: _,
						isLoadingMore: D
					}),
					t(w) && D && /* @__PURE__ */ f(u, {
						source: v,
						fields: g,
						count: 5
					}),
					t(w) && w.hasMore && /* @__PURE__ */ f("div", {
						ref: A,
						className: "w-full",
						"aria-hidden": "true"
					})
				]
			})
		}), /* @__PURE__ */ f(s, {
			paginationInfo: w,
			setPage: T
		})]
	});
};
//#endregion
export { g as ListCollection };
