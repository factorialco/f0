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
import { F0Checkbox as ee } from "../../../../../components/F0Checkbox/F0Checkbox.js";
import { isInfiniteScrollPagination as te } from "../../../../../hooks/datasource/useData.js";
import { getAnimationVariants as ne, useGroups as re } from "../../../../../hooks/datasource/useGroups.js";
import { useSelectable as ie } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { GroupHeader as ae } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { TableBody as oe } from "../../../../../experimental/OneTable/TableBody/index.js";
import { TableCell as u } from "../../../../../experimental/OneTable/TableCell/index.js";
import { TableHead as d } from "../../../../../experimental/OneTable/TableHead/index.js";
import { TableHeader as se } from "../../../../../experimental/OneTable/TableHeader/index.js";
import { TableRow as f } from "../../../../../experimental/OneTable/TableRow/index.js";
import { OneTable as p } from "../../../../../experimental/OneTable/Table/index.js";
import { TableFooter as ce } from "../../../../../experimental/OneTable/TableFooter/index.js";
import { useDataCollectionData as le } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { PagesPagination as ue } from "../../../components/PagesPagination/PagesPagination.js";
import { useInfiniteScrollPagination as de } from "../../../hooks/useInfiniteScrollPagination.js";
import { useAddRow as fe } from "../EditableTable/context/AddRowContext.js";
import { statusToChecked as pe } from "../utils.js";
import { getColumnId as me, useColumns as he } from "./hooks/useColums.js";
import { groupBorderClass as ge, useHeaderGroups as _e } from "./hooks/useHeaderGroups.js";
import { useSticky as ve } from "./useSticky.js";
import { NestedDataProvider as ye } from "./providers/NestedProvider.js";
import { Row as be } from "./components/Row.js";
import { useAddedRowKeys as xe } from "./hooks/useAddedRowKeys.js";
import { useColumnCollapseAnimation as Se } from "./hooks/useColumnCollapseAnimation.js";
import { useCreateSelectionRegistry as Ce } from "./providers/SelectionRegistryProvider.js";
import { SettingsRenderer as m } from "./settings/SettingsRenderer.js";
import { useDataCollectionSettings as we } from "../../../Settings/SettingsProvider.js";
import { Fragment as Te, useEffect as Ee, useMemo as h, useRef as De, useState as Oe } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { AnimatePresence as ke, motion as Ae } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/Table.tsx
var je = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], Me = ({ text: e, count: t }) => {
	let n = String(t), r = e.indexOf(n);
	if (r === -1) return /* @__PURE__ */ _("span", {
		className: "font-me text-base font-medium text-f1-foreground-secondary",
		children: e
	});
	let i = e.slice(0, r), a = e.slice(r + n.length);
	return /* @__PURE__ */ v("span", {
		className: "text-base font-medium text-f1-foreground-secondary",
		children: [
			i,
			/* @__PURE__ */ _("span", {
				className: "font-semibold text-f1-foreground",
				children: n
			}),
			a
		]
	});
}, y = ({ columns: m, source: y, frozenColumns: Ne = 0, defaultExpanded: Pe, onSelectItems: Fe, onLoadData: Ie, onLoadError: Le, allowColumnHiding: Re, allowColumnReordering: ze, lockedColumnIds: b, onLockedColumnIdsChange: Be, referenceRowType: x, boldRootRows: Ve, headerGroups: He, onHeaderGroupCollapsedChange: Ue, bordered: We, rowWrapper: S, cellRenderer: C, showItemActions: w, visualizationSettings: Ge, fromVisualization: T = "table", summaryPlaceholder: Ke = "-" }) => {
	let { t: E, ...D } = o(), O = fe(), [k] = Oe(() => Ae.create(be)), { settings: qe } = we(), Je = b !== void 0 || !!Be, { columns: Ye, stickyColumnIds: A } = he(m, Ne, Ge ?? qe.visualization?.table, ze, Re, b, Je), Xe = h(() => new Set(A), [A]), { columns: j, headerGroups: M, toggleHeaderGroup: Ze, collapsingCellClasses: N, collapseTransitions: Qe, settleHeaderGroup: $e } = _e(Ye, {
		headerGroups: He,
		onCollapsedChange: Ue,
		preservedColumnIds: Xe
	}), et = De(null);
	Se(et, Qe, $e);
	let { data: P, paginationInfo: F, setPage: tt, isInitialLoading: nt, isLoadingMore: rt, loadMore: it, summaries: I, committedQuery: at } = le(y, { onError: (e) => {
		Le(e);
	} }), { currentSortings: L, setCurrentSortings: ot, isLoading: st } = y, R = w !== !1 && !!y.itemActions, z = T === "editableTable", ct = z ? 1 : 2, lt = h(() => w === !1 ? {
		...y,
		itemActions: void 0
	} : y, [y, w]), { loadingIndicatorRef: ut } = de(F, st, rt, it);
	Ee(() => {
		Ie({
			totalItems: F?.total || P.records.length,
			filters: y.currentFilters,
			search: y.currentSearch,
			isInitialLoading: nt,
			data: P.records
		});
	}, [F?.total, P.records]);
	let B = A.length, V = (e, t) => "id" in e && e.id !== void 0 && e.id !== null ? `id:${String(e.id)}` : `index:${String(t)}`, dt = P?.type === "flat" ? P.records.map((e, t) => `row-${V(e, t)}`) : [], ft = xe(dt, at), H = Ce(), { selectedItems: U, allSelectedStatus: W, groupAllSelectedStatus: pt, handleSelectItemChange: G, handleSelectAll: mt, handleSelectAllItems: ht, handleSelectGroupChange: gt } = ie({
		data: P,
		paginationInfo: F,
		source: y,
		onSelectItems: Fe,
		selectionMode: "multi",
		selectedState: y.defaultSelectedItems,
		getRenderedSelectableEntries: H.getEntries,
		renderedSelectableCount: H.ids.length
	}), K = h(() => !I || !y.summaries ? null : {
		data: I,
		sticky: !0,
		label: y.summaries?.label
	}, [I, y.summaries]), _t = (e, t, n) => {
		if (!(!e || !t)) return n === null ? "none" : n.field === e ? n.order : "none";
	}, vt = (e) => e == null || e === "", yt = (e) => e ?? Ke, bt = (e) => {
		ot(() => !L || L.field !== e ? {
			field: e,
			order: "asc"
		} : L.order === "asc" ? {
			field: e,
			order: "desc"
		} : null);
	}, q = y.grouping?.collapsible, xt = y.grouping?.defaultOpenGroups, { openGroups: St, setGroupOpen: Ct } = re(P?.type === "grouped" ? P.groups : [], xt), wt = j.length + +!!R + +!!y.selectable, { getStickyPosition: J, checkColumnWidth: Y } = ve(B, j, !!y.selectable), Tt = P?.records.some((e) => y.itemsWithChildren?.(e));
	if (nt) return /* @__PURE__ */ _(p.Skeleton, { columns: wt });
	y.sortings || j.forEach((e) => {
		e.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
	});
	let Et = W.selectedCount > 0 || W.checked, X = H.ids.length > 0 ? H.ids : (P?.records ?? []).filter((e) => !y.selectionDisabled?.(e)).map((e) => y.selectable?.(e)).filter((e) => e !== void 0), Z = y.disableSelectAll ?? !1, Dt = X.length > 0 && X.every((e) => U.has(e)), Q = Math.max(F?.total ?? 0, X.length), $ = W.checked && !W.indeterminate || Dt, Ot = !Z && !!y.allPagesSelection && (!W.checked || W.indeterminate) && F?.total !== void 0 && Q > W.selectedCount, kt = j.length + (R ? ct : 0), At = W.selectedCount === 1 ? D.status.selected.singular : D.status.selected.plural;
	return /* @__PURE__ */ _("div", {
		className: "flex h-full min-h-0 flex-col gap-4",
		children: /* @__PURE__ */ v(ye, {
			defaultExpanded: Pe,
			currentFilters: y.currentFilters,
			currentSortings: y.currentSortings,
			currentNavigationFilters: y.currentNavigationFilters,
			children: [/* @__PURE__ */ _("div", {
				ref: et,
				className: e("min-h-0", We && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"),
				children: /* @__PURE__ */ v(p, {
					loading: st,
					children: [
						/* @__PURE__ */ v(se, {
							sticky: !0,
							children: [
								M ? /* @__PURE__ */ v(f, { children: [
									y.selectable && /* @__PURE__ */ _(d, {
										align: "left",
										sticky: { left: 0 },
										width: Y,
										className: e("border-0 border-r border-solid border-f1-border-secondary", "hover:after:bg-transparent"),
										children: /* @__PURE__ */ _("div", { className: "ml-3.5 flex w-full items-center justify-start" })
									}),
									M.map((r, o) => {
										let s = r.type === "group" && r.collapsible, c = e(ge, !s && "hover:after:bg-transparent"), l = r.columnIndices.every((e) => j[e].align === "right") ? "right" : "left";
										return r.type === "group" ? /* @__PURE__ */ _(d, {
											align: l,
											colSpan: r.colSpan,
											className: c,
											highlighted: r.columnIndices.some((e) => j[e].highlighted),
											onClick: r.collapsible ? () => Ze(r.id) : void 0,
											children: r.collapsible ? /* @__PURE__ */ v("button", {
												type: "button",
												"aria-expanded": !r.collapsed,
												className: e("flex max-w-full items-center gap-1 rounded-xs font-medium text-f1-foreground-secondary", l === "right" && "flex-row-reverse", t()),
												children: [/* @__PURE__ */ _("span", {
													className: "truncate",
													children: r.label
												}), /* @__PURE__ */ _(n, {
													"aria-hidden": "true",
													size: "sm",
													icon: r.collapsed ? i : a
												})]
											}) : r.label
										}, `header-group-${r.id}-${o}`) : /* @__PURE__ */ _(d, {
											align: l,
											className: c,
											width: j[r.columnIndices[0]].width,
											minWidth: j[r.columnIndices[0]].minWidth,
											highlighted: !!j[r.columnIndices[0]].highlighted,
											sticky: J(r.columnIndices[0]),
											children: /* @__PURE__ */ _("span", {})
										}, `header-ungrouped-${r.columnIndices[0]}`);
									}),
									R && (z ? /* @__PURE__ */ _(d, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ _("span", {
											className: "sr-only",
											children: D.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ _(d, {
										hidden: !0,
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: /* @__PURE__ */ _("span", {})
									}, "actions")] }))
								] }) : null,
								/* @__PURE__ */ v(f, { children: [
									y.selectable && /* @__PURE__ */ _(d, {
										width: Y,
										sticky: { left: 0 },
										align: "left",
										className: M ? e("[&>div:first-child]:hidden", "border-0 border-r border-solid border-f1-border-secondary") : void 0,
										children: !Z && /* @__PURE__ */ _("div", {
											className: "ml-3.5 flex w-full items-center justify-start",
											children: /* @__PURE__ */ _(ee, {
												checked: $,
												indeterminate: Et && !$,
												onCheckedChange: mt,
												title: D.actions.selectAll,
												hideLabel: !0,
												disabled: P?.records.length === 0
											})
										})
									}),
									j.map(({ sorting: t, label: n, ...r }, i) => {
										let a = M?.find((e) => e.type === "group" && e.columnIndices.includes(i)), o = !!M && (!a || a.columnIndices[a.columnIndices.length - 1] === i);
										return /* @__PURE__ */ _(d, {
											sortState: _t(t, y.sortings, L),
											width: r.width,
											align: r.align,
											sticky: J(i),
											...r,
											hidden: !1,
											className: e(M && "[&>div:first-child]:hidden", o && "border-0 border-r border-solid border-f1-border-secondary", T === "editableTable" && (i !== j.length - 1 || R) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", N.get(me({
												id: r.id,
												label: n
											}))) || void 0,
											onSortClick: t ? () => {
												t && bt(t);
											} : void 0,
											children: n
										}, `table-head-${i}`);
									}),
									R && (z ? /* @__PURE__ */ _(d, {
										width: "fit",
										sticky: { right: 0 },
										children: /* @__PURE__ */ _("span", {
											className: "sr-only",
											children: D.collections.actions.actions
										})
									}, "actions") : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ _(d, {
										width: 68,
										hidden: !0,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: D.collections.actions.actions
									}, "actions")] }))
								] }),
								Et && y.selectable && !!y.allPagesSelection && /* @__PURE__ */ _(f, { children: /* @__PURE__ */ _("th", {
									colSpan: 1 + kt,
									className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary px-5",
									children: /* @__PURE__ */ v("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ _(Me, {
											text: W.checked && !W.indeterminate ? E("status.selected.allItemsSelected", { total: Q }) : Dt ? E("status.selected.allOnPage", { count: W.selectedCount }) : `${W.selectedCount} ${At}`,
											count: W.checked && !W.indeterminate ? Q : W.selectedCount
										}), Ot && /* @__PURE__ */ _(c, {
											variant: "outline",
											label: E("status.selected.selectAllItems", { total: Q }),
											onClick: () => ht(!0),
											size: "sm"
										})]
									})
								}) })
							]
						}),
						/* @__PURE__ */ v(oe, { children: [
							P?.type === "grouped" && P.groups.map((e, t) => {
								let n = e.itemCount;
								return /* @__PURE__ */ v(Te, { children: [/* @__PURE__ */ v(f, {
									sticky: !0,
									children: [
										y.selectable && /* @__PURE__ */ _(u, {
											width: Y,
											sticky: { left: 0 },
											children: /* @__PURE__ */ _("div", {
												className: "pointer-events-auto ml-1.5 flex items-center justify-start",
												children: !Z && /* @__PURE__ */ _(ee, {
													checked: !!pe(pt[e.key]),
													indeterminate: pe(pt[e.key]) === "indeterminate",
													title: D.actions.selectAll,
													hideLabel: !0,
													onCheckedChange: (t) => gt(e, t)
												})
											})
										}),
										/* @__PURE__ */ _(u, {
											sticky: { left: y.selectable ? Y : 0 },
											colSpan: B || 1,
											children: /* @__PURE__ */ _(ae, {
												selectable: !1,
												showOpenChange: q,
												label: e.label,
												itemCount: n,
												open: St[e.key],
												onOpenChange: (t) => Ct(e.key, t)
											})
										}),
										j.length - (B || 1) > 0 && /* @__PURE__ */ _(u, {
											colSpan: j.length - (B || 1),
											children: "\xA0"
										})
									]
								}, `group-header-${e.key}`), /* @__PURE__ */ _(ke, { children: k && (!q || St[e.key]) && e.records.map((e, n) => {
									let r = `row-${t}-${V(e, n)}`, i = /* @__PURE__ */ _(k, {
										variants: ne(),
										initial: q ? "hidden" : "visible",
										animate: "visible",
										exit: "hidden",
										custom: n,
										layout: !0,
										source: lt,
										item: e,
										index: n,
										groupIndex: t,
										onItemCheckedChange: G,
										onCheckedChange: (t) => G(e, t),
										selectedItems: U,
										columns: j,
										frozenColumnsLeft: B,
										checkColumnWidth: Y,
										referenceRowType: x,
										rowWrapper: S,
										cellRenderer: C,
										headerGroups: M,
										collapsingCellClasses: N,
										fromVisualization: T,
										registerSelectable: H.register,
										unregisterSelectable: H.unregister
									}, r);
									return S ? /* @__PURE__ */ _(S, {
										item: e,
										index: n,
										children: i
									}, r) : i;
								}) }, `group-animate-${t}`)] }, `group-${e.key}`);
							}),
							P?.type === "flat" && P.records.map((e, t) => {
								let n = `row-${V(e, t)}`, r = ft.has(n), i = /* @__PURE__ */ _(k, {
									variants: ne(),
									initial: r ? "hidden" : !1,
									animate: "visible",
									custom: t,
									layout: !0,
									isNew: r,
									groupIndex: 0,
									source: lt,
									item: e,
									index: t,
									onItemCheckedChange: G,
									onCheckedChange: (t) => G(e, t),
									selectedItems: U,
									columns: j,
									frozenColumnsLeft: B,
									checkColumnWidth: Y,
									tableWithChildren: Tt,
									referenceRowType: x,
									boldRootRows: Ve,
									rowWrapper: S,
									cellRenderer: C,
									fromVisualization: T,
									headerGroups: M,
									collapsingCellClasses: N,
									registerSelectable: H.register,
									unregisterSelectable: H.unregister
								}, n);
								return S ? /* @__PURE__ */ _(S, {
									item: e,
									index: t,
									children: i
								}, n) : i;
							}),
							F?.type === "infinite-scroll" && rt && Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ _(f, { children: Array.from({ length: wt }).map((e, n) => /* @__PURE__ */ _(u, { children: /* @__PURE__ */ _(s, { className: "h-4 w-full" }) }, `skeleton-cell-${t}-${n}`)) }, `skeleton-row-${t}`)),
							te(F) && F.hasMore && /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", {
								colSpan: j.length + +!!y.selectable + +!!R,
								ref: ut,
								className: "h-10",
								"aria-hidden": "true"
							}) })
						] }),
						(() => {
							let t = je(O?.addRowActions?.());
							return !K && t.length === 0 ? null : /* @__PURE__ */ v(ce, { children: [K && /* @__PURE__ */ v(f, {
								className: e(K.sticky && "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
								children: [
									y.selectable && /* @__PURE__ */ _(u, {
										width: Y,
										sticky: { left: 0 },
										children: K.label && /* @__PURE__ */ _("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: K.label
										})
									}),
									j.map((t, n) => /* @__PURE__ */ _(u, {
										firstCell: n === 0,
										width: t.width,
										sticky: J(n),
										highlighted: !!t.highlighted,
										className: e(z && (n !== j.length - 1 || R) && "border-0 border-r-[1px] border-solid border-f1-border-secondary", N.get(me(t))),
										children: n === 0 && !y.selectable && K.label ? /* @__PURE__ */ _("div", {
											className: "font-medium text-f1-foreground-secondary",
											children: K.label
										}) : /* @__PURE__ */ _("div", {
											className: e(t.align === "right" ? "justify-end" : "", "flex", "min-h-6 items-center"),
											children: (() => {
												let e = yt(t.summaryPlaceholder);
												if (t.summary && y.summaries && y.summaries[t.summary]?.type === "sum") {
													let n = K.data[t.summary];
													return vt(n) ? /* @__PURE__ */ _("span", {
														className: "text-f1-foreground-secondary",
														children: e
													}) : /* @__PURE__ */ v("div", {
														className: "flex gap-1",
														children: [/* @__PURE__ */ _("span", {
															className: "text-f1-foreground-secondary",
															children: D.collections.summaries.types.sum
														}), `${n}`]
													});
												}
												return /* @__PURE__ */ _("span", {
													className: "text-f1-foreground-secondary",
													children: e
												});
											})()
										})
									}, `summary-${String(t.label)}`)),
									R && (z ? /* @__PURE__ */ _(u, {
										sticky: { right: 0 },
										children: ""
									}, "summary-actions") : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("th", { className: "hidden md:table-cell" }), /* @__PURE__ */ _(u, {
										width: 68,
										sticky: { right: 0 },
										className: "table-cell md:hidden",
										children: ""
									}, "summary-actions")] }))
								]
							}), t.length > 0 && /* @__PURE__ */ _(f, { children: /* @__PURE__ */ _(u, {
								colSpan: j.length + +!!y.selectable + (R ? ct : 0),
								className: "h-[48px] align-middle",
								children: /* @__PURE__ */ _("div", {
									className: "pointer-events-auto flex h-full items-center",
									onClick: (e) => e.stopPropagation(),
									onMouseDownCapture: (e) => e.stopPropagation(),
									children: t.length === 1 ? /* @__PURE__ */ _(c, {
										variant: "outline",
										icon: t[0].icon ?? r,
										label: t[0].label,
										onClick: t[0].onClick,
										loading: t[0].loading,
										disabled: t[0].disabled,
										size: "sm"
									}) : t.some((e) => e.description !== void 0) ? /* @__PURE__ */ _(l, {
										mode: "dropdown",
										variant: "outline",
										size: "sm",
										trigger: O?.addRowActionsLabel,
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
									}) : /* @__PURE__ */ _(l, {
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
			}), /* @__PURE__ */ _(ue, {
				paginationInfo: F,
				setPage: tt,
				className: "pb-4"
			})]
		})
	});
};
//#endregion
export { m as SettingsRenderer, y as TableCollection };
