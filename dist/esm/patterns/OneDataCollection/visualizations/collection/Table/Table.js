import { cn as e, focusRing as t } from "../../../../../lib/utils.js";
import { F0Icon as n } from "../../../../../components/F0Icon/index.js";
import r from "../../../../../icons/app/Add.js";
import i from "../../../../../icons/app/MaximizeHorizontal.js";
import a from "../../../../../icons/app/MinimizeHorizontal.js";
import { useI18n as o } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as s } from "../../../../../ui/skeleton.js";
import { F0Button as c } from "../../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as l } from "../../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import "../../../../../ui/value-display/const.js";
import { F0Checkbox as u } from "../../../../../components/F0Checkbox/F0Checkbox.js";
import { isInfiniteScrollPagination as ee } from "../../../../../hooks/datasource/useData.js";
import { getAnimationVariants as d, useGroups as te } from "../../../../../hooks/datasource/useGroups.js";
import { useSelectable as ne } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { GroupHeader as re } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { TableBody as ie } from "../../../../../experimental/OneTable/TableBody/index.js";
import { TableCell as f } from "../../../../../experimental/OneTable/TableCell/index.js";
import { TableHead as p } from "../../../../../experimental/OneTable/TableHead/index.js";
import { TableHeader as ae } from "../../../../../experimental/OneTable/TableHeader/index.js";
import { TableRow as m } from "../../../../../experimental/OneTable/TableRow/index.js";
import { OneTable as oe } from "../../../../../experimental/OneTable/Table/index.js";
import { TableFooter as se } from "../../../../../experimental/OneTable/TableFooter/index.js";
import { useDataCollectionData as ce } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { PagesPagination as le } from "../../../components/PagesPagination/PagesPagination.js";
import { useInfiniteScrollPagination as ue } from "../../../hooks/useInfiniteScrollPagination.js";
import { useAddRow as de } from "../EditableTable/context/AddRowContext.js";
import { statusToChecked as fe } from "../utils.js";
import { getColumnId as pe, useColumns as me } from "./hooks/useColums.js";
import { groupBorderClass as he, useHeaderGroups as ge } from "./hooks/useHeaderGroups.js";
import { useSticky as _e } from "./useSticky.js";
import { NestedDataProvider as ve } from "./providers/NestedProvider.js";
import { Row as ye } from "./components/Row.js";
import { useAddedRowKeys as be } from "./hooks/useAddedRowKeys.js";
import { useColumnCollapseAnimation as xe } from "./hooks/useColumnCollapseAnimation.js";
import { useCreateSelectionRegistry as Se } from "./providers/SelectionRegistryProvider.js";
import { SettingsRenderer as h } from "./settings/SettingsRenderer.js";
import { useDataCollectionSettings as Ce } from "../../../Settings/SettingsProvider.js";
import { Fragment as we, useEffect as Te, useMemo as g, useRef as Ee, useState as De } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import { AnimatePresence as Oe, motion as ke } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/Table.tsx
var Ae = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], je = ({ text: e, count: t }) => {
	let n = String(t), r = e.indexOf(n);
	if (r === -1) return /* @__PURE__ */ v("span", {
		className: "font-me text-base font-medium text-f1-foreground-secondary",
		children: e
	});
	let i = e.slice(0, r), a = e.slice(r + n.length);
	return /* @__PURE__ */ y("span", {
		className: "text-base font-medium text-f1-foreground-secondary",
		children: [
			i,
			/* @__PURE__ */ v("span", {
				className: "font-semibold text-f1-foreground",
				children: n
			}),
			a
		]
	});
}, b = ({ columns: h, source: b, frozenColumns: Me = 0, defaultExpanded: Ne, onSelectItems: Pe, onLoadData: Fe, onLoadError: Ie, allowColumnHiding: Le, allowColumnReordering: Re, lockedColumnIds: x, onLockedColumnIdsChange: ze, referenceRowType: S, boldRootRows: Be, headerGroups: Ve, onHeaderGroupCollapsedChange: He, bordered: Ue, rowWrapper: C, cellRenderer: w, showItemActions: T, visualizationSettings: We, fromVisualization: E = "table", summaryPlaceholder: Ge = "-" }) => {
	let { t: D, ...O } = o(), k = de(), [A] = De(() => ke.create(ye)), { settings: Ke } = Ce(), qe = x !== void 0 || !!ze, { columns: Je, stickyColumnIds: j } = me(h, Me, We ?? Ke.visualization?.table, Re, Le, x, qe), Ye = g(() => new Set(j), [j]), { columns: M, headerGroups: N, toggleHeaderGroup: Xe, collapsingCellClasses: P, collapseTransitions: Ze, settleHeaderGroup: Qe } = ge(Je, {
		headerGroups: Ve,
		onCollapsedChange: He,
		preservedColumnIds: Ye
	}), F = Ee(null);
	xe(F, Ze, Qe);
	let { data: I, paginationInfo: L, setPage: $e, isInitialLoading: et, isLoadingMore: tt, loadMore: nt, summaries: R, committedQuery: rt } = ce(b, { onError: (e) => {
		Ie(e);
	} }), { currentSortings: z, setCurrentSortings: it, isLoading: at } = b, B = T !== !1 && !!b.itemActions, V = E === "editableTable", ot = V ? 1 : 2, st = g(() => T === !1 ? {
		...b,
		itemActions: void 0
	} : b, [b, T]), { loadingIndicatorRef: ct } = ue(L, at, tt, nt);
	Te(() => {
		Fe({
			totalItems: L?.total || I.records.length,
			filters: b.currentFilters,
			search: b.currentSearch,
			isInitialLoading: et,
			data: I.records
		});
	}, [L?.total, I.records]);
	let H = j.length, U = (e, t) => "id" in e && e.id !== void 0 && e.id !== null ? `id:${String(e.id)}` : `index:${String(t)}`, lt = I?.type === "flat" ? I.records.map((e, t) => `row-${U(e, t)}`) : [], ut = be(lt, rt), W = Se(), { selectedItems: G, allSelectedStatus: K, groupAllSelectedStatus: dt, handleSelectItemChange: q, handleSelectAll: ft, handleSelectAllItems: pt, handleSelectGroupChange: mt } = ne({
		data: I,
		paginationInfo: L,
		source: b,
		onSelectItems: Pe,
		selectionMode: "multi",
		selectedState: b.defaultSelectedItems,
		getRenderedSelectableEntries: W.getEntries,
		renderedSelectableCount: W.ids.length
	}), J = g(() => !R || !b.summaries ? null : {
		data: R,
		sticky: !0,
		label: b.summaries?.label
	}, [R, b.summaries]), ht = (e, t, n) => {
		if (!(!e || !t)) return n === null ? "none" : n.field === e ? n.order : "none";
	}, gt = (e) => e == null || e === "", _t = (e) => e ?? Ge, vt = (e) => {
		it(() => !z || z.field !== e ? {
			field: e,
			order: "asc"
		} : z.order === "asc" ? {
			field: e,
			order: "desc"
		} : null);
	}, Y = b.grouping?.collapsible, yt = b.grouping?.defaultOpenGroups, { openGroups: bt, setGroupOpen: xt } = te(I?.type === "grouped" ? I.groups : [], yt), St = M.length + +!!B + +!!b.selectable, { getStickyPosition: X, checkColumnWidth: Z } = _e(H, M, !!b.selectable), Ct = I?.records.some((e) => b.itemsWithChildren?.(e));
	if (et) return /* @__PURE__ */ v(oe.Skeleton, { columns: St });
	b.sortings || M.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
	});
	let wt = K.selectedCount > 0 || K.checked, Q = W.ids.length > 0 ? W.ids : (I?.records ?? []).map((e) => b.selectable?.(e)).filter((e) => e !== void 0), Tt = Q.length > 0 && Q.every((e) => G.has(e)), $ = Math.max(L?.total ?? 0, Q.length), Et = K.checked && !K.indeterminate || Tt, Dt = !!b.allPagesSelection && (!K.checked || K.indeterminate) && L?.total !== void 0 && $ > K.selectedCount, Ot = M.length + (B ? ot : 0), kt = K.selectedCount === 1 ? O.status.selected.singular : O.status.selected.plural;
	return /* @__PURE__ */ v("div", {
		className: "flex h-full min-h-0 flex-col gap-4",
		children: /* @__PURE__ */ y(ve, {
			defaultExpanded: Ne,
			currentFilters: b.currentFilters,
			currentSortings: b.currentSortings,
			currentNavigationFilters: b.currentNavigationFilters,
			children: [/* @__PURE__ */ v("div", {
				ref: F,
				className: e("min-h-0", Ue && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"),
				children: /* @__PURE__ */ y(oe, {
					loading: at,
					children: [
						/* @__PURE__ */ y(ae, {
							sticky: !0,
							children: [
								N ? /* @__PURE__ */ y(m, { children: [
									b.selectable && /* @__PURE__ */ v(p, {
										align: "left",
										sticky: { left: 0 },
										width: Z,
										className: e("border-0 border-r border-solid border-f1-border-secondary", "hover:after:bg-transparent"),
										children: /* @__PURE__ */ v("div", { className: "ml-3.5 flex w-full items-center justify-start" })
									}),
									N.map((r, o) => {
										let s = r.type === "group" && r.collapsible, c = e(he, !s && "hover:after:bg-transparent"), l = r.columnIndices.every((e) => M[e].align === "right") ? "right" : "left";
										return r.type === "group" ? /* @__PURE__ */ v(p, {
											align: l,
											colSpan: r.colSpan,
											className: c,
											highlighted: r.columnIndices.some((e) => M[e].highlighted),
											onClick: r.collapsible ? () => Xe(r.id) : void 0,
											children: r.collapsible ? /* @__PURE__ */ y("button", {
												type: "button",
												"aria-expanded": !r.collapsed,
												className: e("flex max-w-full items-center gap-1 rounded-xs font-medium text-f1-foreground-secondary", l === "right" && "flex-row-reverse", t()),
												children: [/* @__PURE__ */ v("span", {
													className: "truncate",
													children: r.label
												}), /* @__PURE__ */ v(n, {
													"aria-hidden": "true",
													size: "sm",
													icon: r.collapsed ? i : a
												})]
											}) : r.label
										}, `header-group-${r.id}-${o}`) : /* @__PURE__ */ v(p, {
											align: l,
											className: c,
											width: M[r.columnIndices[0]].width,
											minWidth: M[r.columnIndices[0]].minWidth,
											highlighted: !!M[r.columnIndices[0]].highlighted,
											sticky: X(r.columnIndices[0]),
											children: /* @__PURE__ */ v("span", {})
										}, `header-ungrouped-${r.columnIndices[0]}`);
									}),
									B && (V ? /* @__PURE__ */ v(p, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ v("span", {
											className: "sr-only",
											children: O.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ v(p, {
										hidden: !0,
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: /* @__PURE__ */ v("span", {})
									}, "actions")] }))
								] }) : null,
								/* @__PURE__ */ y(m, { children: [
									b.selectable && /* @__PURE__ */ v(p, {
										width: Z,
										sticky: { left: 0 },
										align: "left",
										className: N ? e("[&>div:first-child]:hidden", "border-0 border-r border-solid border-f1-border-secondary") : void 0,
										children: /* @__PURE__ */ v("div", {
											className: "ml-3.5 flex w-full items-center justify-start",
											children: /* @__PURE__ */ v(u, {
												checked: Et,
												indeterminate: wt && !Et,
												onCheckedChange: ft,
												title: O.actions.selectAll,
												hideLabel: !0,
												disabled: I?.records.length === 0
											})
										})
									}),
									M.map(({ sorting: t, label: n, ...r }, i) => {
										let a = N?.find((e) => e.type === "group" && e.columnIndices.includes(i)), o = !!N && (!a || a.columnIndices[a.columnIndices.length - 1] === i);
										return /* @__PURE__ */ v(p, {
											sortState: ht(t, b.sortings, z),
											width: r.width,
											align: r.align,
											sticky: X(i),
											...r,
											hidden: !1,
											className: e(N && "[&>div:first-child]:hidden", o && "border-0 border-r border-solid border-f1-border-secondary", E === "editableTable" && (i !== M.length - 1 || B) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", P.get(pe({
												id: r.id,
												label: n
											}))) || void 0,
											onSortClick: t ? () => {
												t && vt(t);
											} : void 0,
											children: n
										}, `table-head-${i}`);
									}),
									B && (V ? /* @__PURE__ */ v(p, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ v("span", {
											className: "sr-only",
											children: O.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ v(p, {
										width: 68,
										hidden: !0,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: O.collections.actions.actions
									}, "actions")] }))
								] }),
								wt && b.selectable && !!b.allPagesSelection && /* @__PURE__ */ v(m, { children: /* @__PURE__ */ v("th", {
									colSpan: 1 + Ot,
									className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary px-5",
									children: /* @__PURE__ */ y("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ v(je, {
											text: K.checked && !K.indeterminate ? D("status.selected.allItemsSelected", { total: $ }) : Tt ? D("status.selected.allOnPage", { count: K.selectedCount }) : `${K.selectedCount} ${kt}`,
											count: K.checked && !K.indeterminate ? $ : K.selectedCount
										}), Dt && /* @__PURE__ */ v(c, {
											variant: "outline",
											label: D("status.selected.selectAllItems", { total: $ }),
											onClick: () => pt(!0),
											size: "sm"
										})]
									})
								}) })
							]
						}),
						/* @__PURE__ */ y(ie, { children: [
							I?.type === "grouped" && I.groups.map((e, t) => {
								let n = e.itemCount;
								return /* @__PURE__ */ y(we, { children: [/* @__PURE__ */ y(m, {
									sticky: !0,
									children: [
										b.selectable && /* @__PURE__ */ v(f, {
											width: Z,
											sticky: { left: 0 },
											children: /* @__PURE__ */ v("div", {
												className: "pointer-events-auto ml-1.5 flex items-center justify-start",
												children: /* @__PURE__ */ v(u, {
													checked: !!fe(dt[e.key]),
													indeterminate: fe(dt[e.key]) === "indeterminate",
													title: O.actions.selectAll,
													hideLabel: !0,
													onCheckedChange: (t) => mt(e, t)
												})
											})
										}),
										/* @__PURE__ */ v(f, {
											sticky: { left: b.selectable ? Z : 0 },
											colSpan: H || 1,
											children: /* @__PURE__ */ v(re, {
												selectable: !1,
												showOpenChange: Y,
												label: e.label,
												itemCount: n,
												open: bt[e.key],
												onOpenChange: (t) => xt(e.key, t)
											})
										}),
										M.length - (H || 1) > 0 && /* @__PURE__ */ v(f, {
											colSpan: M.length - (H || 1),
											children: "\xA0"
										})
									]
								}, `group-header-${e.key}`), /* @__PURE__ */ v(Oe, { children: A && (!Y || bt[e.key]) && e.records.map((e, n) => {
									let r = `row-${t}-${U(e, n)}`, i = /* @__PURE__ */ v(A, {
										variants: d(),
										initial: Y ? "hidden" : "visible",
										animate: "visible",
										exit: "hidden",
										custom: n,
										layout: !0,
										source: st,
										item: e,
										index: n,
										groupIndex: t,
										onItemCheckedChange: q,
										onCheckedChange: (t) => q(e, t),
										selectedItems: G,
										columns: M,
										frozenColumnsLeft: H,
										checkColumnWidth: Z,
										referenceRowType: S,
										rowWrapper: C,
										cellRenderer: w,
										headerGroups: N,
										collapsingCellClasses: P,
										fromVisualization: E,
										registerSelectable: W.register,
										unregisterSelectable: W.unregister
									}, r);
									return C ? /* @__PURE__ */ v(C, {
										item: e,
										index: n,
										children: i
									}, r) : i;
								}) }, `group-animate-${t}`)] }, `group-${e.key}`);
							}),
							I?.type === "flat" && I.records.map((e, t) => {
								let n = `row-${U(e, t)}`, r = ut.has(n), i = /* @__PURE__ */ v(A, {
									variants: d(),
									initial: r ? "hidden" : !1,
									animate: "visible",
									custom: t,
									layout: !0,
									isNew: r,
									groupIndex: 0,
									source: st,
									item: e,
									index: t,
									onItemCheckedChange: q,
									onCheckedChange: (t) => q(e, t),
									selectedItems: G,
									columns: M,
									frozenColumnsLeft: H,
									checkColumnWidth: Z,
									tableWithChildren: Ct,
									referenceRowType: S,
									boldRootRows: Be,
									rowWrapper: C,
									cellRenderer: w,
									fromVisualization: E,
									headerGroups: N,
									collapsingCellClasses: P,
									registerSelectable: W.register,
									unregisterSelectable: W.unregister
								}, n);
								return C ? /* @__PURE__ */ v(C, {
									item: e,
									index: t,
									children: i
								}, n) : i;
							}),
							L?.type === "infinite-scroll" && tt && Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ v(m, { children: Array.from({ length: St }).map((e, n) => /* @__PURE__ */ v(f, { children: /* @__PURE__ */ v(s, { className: "h-4 w-full" }) }, `skeleton-cell-${t}-${n}`)) }, `skeleton-row-${t}`)),
							ee(L) && L.hasMore && /* @__PURE__ */ v("tr", { children: /* @__PURE__ */ v("td", {
								colSpan: M.length + +!!b.selectable + +!!B,
								ref: ct,
								className: "h-10",
								"aria-hidden": "true"
							}) })
						] }),
						(() => {
							let t = Ae(k?.addRowActions?.());
							return !J && t.length === 0 ? null : /* @__PURE__ */ y(se, { children: [J && /* @__PURE__ */ y(m, {
								className: e(J.sticky && "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
								children: [
									b.selectable && /* @__PURE__ */ v(f, {
										width: Z,
										sticky: { left: 0 },
										children: J.label && /* @__PURE__ */ v("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: J.label
										})
									}),
									M.map((t, n) => /* @__PURE__ */ v(f, {
										firstCell: n === 0,
										width: t.width,
										sticky: X(n),
										highlighted: !!t.highlighted,
										className: e(V && (n !== M.length - 1 || B) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", P.get(pe(t))),
										children: n === 0 && !b.selectable && J.label ? /* @__PURE__ */ v("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: J.label
										}) : /* @__PURE__ */ v("div", {
											className: e(t.align === "right" ? "justify-end" : "", "flex", "min-h-6 items-center"),
											children: (() => {
												let e = _t(t.summaryPlaceholder);
												if (t.summary && b.summaries && b.summaries[t.summary]?.type === "sum") {
													let n = J.data[t.summary];
													return gt(n) ? /* @__PURE__ */ v("span", {
														className: "text-f1-foreground-secondary",
														children: e
													}) : /* @__PURE__ */ y("div", {
														className: "flex gap-1",
														children: [/* @__PURE__ */ v("span", {
															className: "text-f1-foreground-secondary",
															children: O.collections.summaries.types.sum
														}), `${n}`]
													});
												}
												return /* @__PURE__ */ v("span", {
													className: "text-f1-foreground-secondary",
													children: e
												});
											})()
										})
									}, `summary-${String(t.label)}`)),
									B && (V ? /* @__PURE__ */ v(f, {
										sticky: { right: 0 },
										children: ""
									}, "summary-actions") : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ v(f, {
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: ""
									}, "summary-actions")] }))
								]
							}), t.length > 0 && /* @__PURE__ */ v(m, { children: /* @__PURE__ */ v(f, {
								colSpan: M.length + +!!b.selectable + (B ? ot : 0),
								className: "h-[48px] align-middle",
								children: /* @__PURE__ */ v("div", {
									className: "pointer-events-auto flex h-full items-center",
									onClick: (e) => e.stopPropagation(),
									onMouseDownCapture: (e) => e.stopPropagation(),
									children: t.length === 1 ? /* @__PURE__ */ v(c, {
										variant: "outline",
										icon: t[0].icon ?? r,
										label: t[0].label,
										onClick: t[0].onClick,
										loading: t[0].loading,
										disabled: t[0].disabled,
										size: "sm"
									}) : t.some((e) => e.description !== void 0) ? /* @__PURE__ */ v(l, {
										mode: "dropdown",
										variant: "outline",
										size: "sm",
										trigger: k?.addRowActionsLabel,
										disabled: t.every((e) => e.disabled),
										loading: t.some((e) => e.loading),
										items: t.map((e, t) => ({
											value: t.toString(),
											label: e.label,
											icon: e.icon,
											description: e.description
										})),
										onClick: (e) => {
											t[Number(e)]?.onClick?.();
										}
									}) : /* @__PURE__ */ v(l, {
										variant: "outline",
										size: "sm",
										disabled: t.every((e) => e.disabled),
										loading: t.some((e) => e.loading),
										items: t.map((e, t) => ({
											value: t.toString(),
											label: e.label,
											icon: e.icon
										})),
										onClick: (e) => {
											t[Number(e)]?.onClick?.();
										}
									})
								})
							}) })] });
						})()
					]
				})
			}), /* @__PURE__ */ v(le, {
				paginationInfo: L,
				setPage: $e,
				className: "pb-4"
			})]
		})
	});
};
//#endregion
export { h as SettingsRenderer, b as TableCollection };
