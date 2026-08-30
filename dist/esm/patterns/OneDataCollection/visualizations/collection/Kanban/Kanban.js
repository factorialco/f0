import { useIsDev as e } from "../../../../../lib/providers/user-platafform/UserPlatformProvider.js";
import { cn as t } from "../../../../../lib/utils.js";
import { useReducedMotion as n } from "../../../../../lib/a11y.js";
import { useGroups as r } from "../../../../../hooks/datasource/useGroups.js";
import { GroupHeader as i } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { useDataCollectionLanesData as a } from "../../../hooks/useDataCollectionData/useDataCollectionLanesData.js";
import { useSelectableLanes as o } from "../../../hooks/useSelectableLanes/useSelectableLanes.js";
import { KanbanCard as ee } from "../../../../../ui/Kanban/components/KanbanCard.js";
import { KanbanBoard as s } from "./KanbanBoard.js";
import { useCallback as c, useEffect as l, useMemo as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { AnimatePresence as m, motion as h } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Kanban/Kanban.tsx
var g = (e) => !!(e && e.type === "infinite-scroll"), _ = ({ lanes: _, title: v, description: y, avatar: b, metadata: x, onMove: S, onCreate: C, source: w, onSelectItems: te, onLoadError: T, onLoadData: E, getLanesForGroup: D, selectableGroups: O = !0 }) => {
	let { lanesProvider: k, lanesHooks: A } = a(w, { onError: (e) => T(e) }), j = w.idProvider, ne = n(), M = w.currentSortings === null, { totalItemsAggregated: N, isInitialLoadingAggregated: P } = u(() => {
		let e = Object.values(A), t = e.length === _.length;
		if (e.length === 0 || !t) return {
			totalItemsAggregated: void 0,
			isInitialLoadingAggregated: !0
		};
		let n = 0, r = !1;
		for (let t of e) {
			let e = t.paginationInfo?.total ?? t.data.records.length;
			n += typeof e == "number" ? e : 0, t.isInitialLoading && (r = !0);
		}
		return {
			totalItemsAggregated: n,
			isInitialLoadingAggregated: r
		};
	}, [A, _.length]), F = u(() => Object.values(A).some((e) => e.isInitialLoading), [A]);
	l(() => {
		E({
			totalItems: N,
			filters: w.currentFilters,
			search: w.currentSearch,
			isInitialLoading: P,
			data: Object.values(A).flatMap((e) => e.data.records)
		});
	}, [
		N,
		P,
		A,
		w.currentFilters,
		w.currentSearch
	]);
	let I = u(() => _.map((e) => ({
		id: e.id,
		data: A[e.id]?.data || {
			type: "flat",
			records: [],
			groups: []
		},
		paginationInfo: A[e.id]?.paginationInfo || null
	})), [_, A]), { lanesSelectProvider: L, lanesUseSelectable: R } = o(I, w, (e, t) => {
		te?.(e, t);
	}), z = c((e, t) => {
		if (j) return String(j(e, t));
		let n = e?.id;
		return String(n ?? t);
	}, [j]), B = c((e, t, n, r) => {
		let i = String(j ? j(e, t) : e?.id ?? t), a = w.selectable ? w.selectable(e) : e.id, o = R && r ? R.get(r) : void 0, s = (typeof a == "string" || typeof a == "number") && o && o?.selectedItems.has(a), c = w.itemUrl ? w.itemUrl(e) : void 0, l = w.itemOnClick ? w.itemOnClick(e) : void 0;
		return /* @__PURE__ */ f(ee, {
			drag: {
				id: i,
				type: "list-card",
				data: {
					...e,
					laneId: r
				}
			},
			id: String(e.id),
			index: t,
			total: n,
			laneId: r,
			showIndicator: M,
			title: v ? v(e) : String(t),
			description: y ? y(e) : void 0,
			avatar: b ? b(e) : void 0,
			draggable: S !== void 0,
			metadata: x ? [...x(e)] : void 0,
			compact: !0,
			forceVerticalMetadata: !0,
			selectable: w.selectable !== void 0,
			selected: s,
			"data-testid": `kanban-card-${String(e.id)}`,
			onSelect: (t) => {
				o && o.handleSelectItemChange(e, t);
			},
			onClick: l,
			link: c
		}, i);
	}, [
		j,
		w.selectable,
		w.itemUrl,
		w.itemOnClick,
		R,
		M,
		v,
		y,
		b,
		S,
		x
	]), V = u(() => _.map((e) => {
		let t = A[e.id], n = t?.paginationInfo?.total, r = g(t?.paginationInfo) && t?.paginationInfo?.hasMore;
		return {
			id: e.id,
			title: e.title,
			items: t?.data?.records ?? [],
			variant: e.variant,
			color: e.color,
			total: n,
			hasMore: r,
			loading: !t || t.isInitialLoading,
			loadingMore: t?.isLoadingMore || !1,
			fetchMore: r ? () => t.loadMore() : void 0
		};
	}), [_, A]), H = !!w.currentGrouping, U = e(), W = w.currentGrouping?.order ?? "asc", G = w.currentGrouping?.field, K = w.dataAdapter?.paginationType, q = u(() => {
		let e = w.currentGrouping?.field;
		if (e != null) return w.grouping?.groupBy?.[e];
	}, [w.currentGrouping?.field, w.grouping]), J = u(() => new Set(_.map((e) => e.id)), [_]), Y = u(() => {
		if (!H) return [];
		let e = /* @__PURE__ */ new Set();
		for (let t of _) {
			let n = A[t.id]?.data;
			if (n?.type === "grouped") for (let t of n.groups) e.add(t.key);
		}
		return Array.from(e).sort((e, t) => {
			let n = e.localeCompare(t, void 0, { numeric: !0 });
			return W === "desc" ? -n : n;
		});
	}, [
		H,
		_,
		A,
		W
	]), X = u(() => H ? Y.map((e) => {
		let t = (D ? D(e) : _).filter((e) => J.has(e.id)).map((t) => {
			let n = A[t.id], r = (n?.data?.type === "grouped" ? n.data.groups.find((t) => t.key === e) : void 0)?.records ?? [];
			return {
				id: t.id,
				title: t.title,
				items: r,
				variant: t.variant,
				color: t.color,
				total: r.length,
				hasMore: !1,
				loading: !n || n.isInitialLoading,
				loadingMore: !1,
				fetchMore: void 0
			};
		});
		return {
			key: e,
			label: q ? q.label(e, w.currentFilters) : e,
			itemCount: q?.itemCount ? q.itemCount(e, w.currentFilters) : t.reduce((e, t) => e + t.items.length, 0),
			lanes: t
		};
	}) : [], [
		H,
		Y,
		_,
		A,
		D,
		q,
		J,
		w.currentFilters
	]), Z = u(() => {
		if (!H || !D) return [];
		let e = /* @__PURE__ */ new Set();
		for (let t of Y) for (let n of D(t)) J.has(n.id) || e.add(n.id);
		return Array.from(e);
	}, [
		H,
		D,
		Y,
		J
	]);
	l(() => {
		!U || !H || (G != null && !q && console.error(`[OneDataCollection/Kanban] currentGrouping.field "${String(G)}" is not a key of grouping.groupBy — the board will render without groups.`), (K === "infinite-scroll" || K === "pages") && console.warn("[OneDataCollection/Kanban] grouping with a paginated source only shows each group's first page; counters use the authoritative itemCount but cards may be incomplete. Use a non-paginated source for grouped Kanban."), Z.length > 0 && console.warn(`[OneDataCollection/Kanban] getLanesForGroup returned lane id(s) not present in source.lanes: ${Z.join(", ")}. They are ignored (they would never load).`));
	}, [
		U,
		H,
		G,
		K,
		q,
		Z
	]);
	let Q = w.grouping?.collapsible, re = w.grouping?.defaultOpenGroups, { openGroups: $, setGroupOpen: ie } = r(X.map((e) => ({
		key: e.key,
		label: e.label,
		itemCount: e.itemCount,
		records: []
	})), re);
	return /* @__PURE__ */ p(d, { children: [
		k,
		L,
		H ? /* @__PURE__ */ f("div", {
			className: "flex max-h-full min-h-0 flex-1 flex-col gap-6 overflow-auto",
			"aria-busy": F,
			"aria-live": F ? "polite" : void 0,
			children: X.length === 0 ? /* @__PURE__ */ f(s, {
				lanes: V,
				renderCard: B,
				getKey: z,
				onCreate: C,
				onMove: S,
				idProvider: j,
				allowReorder: !1,
				loading: F
			}) : X.map((e) => {
				let n = O && w.selectable !== void 0, r = 0, a = 0;
				for (let t of e.lanes) {
					if (t.id === void 0) continue;
					let n = R.get(t.id)?.groupAllSelectedStatus[e.key];
					r += n?.selectedCount ?? 0, a += n?.unselectedCount ?? 0;
				}
				let o = r === 0 ? !1 : a === 0 || "indeterminate";
				return /* @__PURE__ */ p("div", {
					className: "flex flex-col gap-2",
					"data-testid": `kanban-group-${e.key}`,
					children: [/* @__PURE__ */ f(i, {
						className: t("rounded-md py-3 pl-6 pr-3.5", (Q || n) && "cursor-pointer select-none transition-colors hover:bg-f1-background-hover"),
						showOpenChange: Q,
						label: e.label,
						itemCount: e.itemCount,
						selectable: n,
						select: o,
						onSelectChange: (t) => e.lanes.forEach((n) => {
							n.id !== void 0 && R.get(n.id)?.handleSelectGroupChange(e.key, t);
						}),
						open: $[e.key],
						onOpenChange: (t) => ie(e.key, t)
					}), /* @__PURE__ */ f(m, { children: (!Q || $[e.key]) && /* @__PURE__ */ f(h.div, {
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
							duration: ne ? 0 : .1,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ f(s, {
							lanes: e.lanes,
							heightMode: "content",
							renderCard: B,
							getKey: z,
							onCreate: C,
							onMove: S,
							idProvider: j,
							allowReorder: !1,
							loading: F
						})
					}) })]
				}, `kanban-group-${e.key}`);
			})
		}) : /* @__PURE__ */ f(s, {
			lanes: V,
			renderCard: B,
			getKey: z,
			onCreate: C,
			onMove: S,
			idProvider: j,
			allowReorder: M,
			loading: F
		})
	] });
};
//#endregion
export { _ as KanbanCollection };
