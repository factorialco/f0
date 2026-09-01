import { cn as e } from "../../lib/utils.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { useLayout as n } from "../../layouts/LayoutProvider.js";
import { Spinner as r } from "../../ui/Spinner/index.js";
import { F0ActionBar as ee } from "../../components/F0ActionBar/index.js";
import { useEventEmitter as te } from "./useEventEmitter.js";
import { getActiveFilterKeys as ne } from "../OneFilterPicker/internal/getActiveFilterKeys.js";
import { OneFilterPicker as re } from "../OneFilterPicker/OneFilterPicker.js";
import { OneEmptyState as ie } from "../../components/OneEmptyState/OneEmptyState.js";
import { useDebounceBoolean as ae } from "../../lib/useDebounceBoolean.js";
import { filterActions as oe, getPrimaryActions as se, getSecondaryActions as ce, getUpsellAction as le } from "./actions.js";
import { OneDataCollectionActionBar as ue } from "./components/ActionBar/OneDataCollectionActionBar.js";
import { CollectionActions as de } from "./components/CollectionActions/CollectionActions.js";
import { NavigationFilters as fe } from "./components/NavigationFilters/NavigationFilters.js";
import { PresetFormDialog as pe } from "./components/PresetFormDialog/PresetFormDialog.js";
import { Search as me } from "./components/Search/Search.js";
import { useSearchPreview as he } from "./components/Search/useSearchPreview.js";
import { TotalItemsSummary as ge } from "./components/TotalItemsSummary/TotalItemsSummary.js";
import { useDataCollectionStorage as _e } from "./hooks/useDataColectionStorage/useDataCollectionStorage.js";
import { shouldAutoSizePerPage as ve, useAutoPerPage as ye } from "./hooks/useAutoPerPage.js";
import { useEmptyState as be } from "./hooks/useEmptyState.js";
import { useDataCollectionSettings as xe } from "./Settings/SettingsProvider.js";
import { useExportAction as Se } from "./hooks/useExportAction.js";
import { useDataCollectionUrlSync as Ce } from "./hooks/useDataCollectionUrlSync.js";
import { usePerVisualizationFilters as we } from "./hooks/usePerVisualizationFilters.js";
import { VisualizationRenderer as Te } from "./visualizations/collection/VisualizationRenderer.js";
import { getDefaultDataCollectionSettings as Ee } from "./internal/isSettingsDefault.js";
import { derivePresetId as De } from "./internal/presetId.js";
import { SHARED_PRESET_PARAM as Oe, buildSharedPresetUrl as ke, decodeSharedPreset as Ae } from "./internal/sharedPreset.js";
import { Settings as je } from "./Settings/Settings.js";
import { useHeaderActionsCollapse as Me } from "./components/useHeaderActionsCollapse.js";
import { VisualizationSwitcher as Ne } from "./components/VisualizationSwitcher.js";
import { useCallback as i, useEffect as a, useLayoutEffect as Pe, useMemo as o, useRef as s, useState as c } from "react";
import { createPortal as Fe } from "react-dom";
import { Fragment as Ie, jsx as l, jsxs as u } from "react/jsx-runtime";
import { motion as Le } from "motion/react";
import { useDeepCompareEffect as Re } from "@reactuses/core";
import ze from "lodash/isEqual";
//#region src/patterns/OneDataCollection/OneDatacollection.tsx
var Be = 1500, Ve = 2e3, d = ({ source: d, visualizations: f, onSelectItems: He, onBulkAction: Ue, autoManageBulkActionStatus: We = !1, bulkActionStatus: p, onStateChange: Ge, emptyStates: Ke, fullHeight: m, storage: qe, id: Je, disableUrlParams: Ye, tmpFullWidth: Xe, csvExport: h, savingViewsDisabled: Ze, initialVisualization: Qe = 0 }) => {
	let { filters: $e, currentFilters: et, setCurrentFilters: tt, presets: nt, presetsLoading: rt, currentNavigationFilters: g, navigationFilters: it, setCurrentNavigationFilters: at, search: _, currentSearch: v, setCurrentSearch: ot, isLoading: st, primaryActions: ct, primaryActionsLabel: lt, secondaryActions: y, upsellAction: ut, totalItemSummary: dt, currentGrouping: b, setCurrentGrouping: ft, grouping: x, currentSortings: S, setCurrentSortings: C, sortings: pt } = d, [w, mt] = c(Qe), [T, E] = c(void 0), [D, ht] = c([]), [O, k] = c(null), [gt] = c(() => {
		if (typeof window > "u") return null;
		let e = new URLSearchParams(window.location.search);
		return Ae(e.get(Oe));
	}), A = he(d.searchPreview, d.debouncedCurrentSearch), { effectiveFilters: j, effectivePresets: _t, currentFilters: M, setCurrentFilters: N, allVisualizationFilters: vt, setAllVisualizationFilters: yt, hasPerVisualizationFilters: P } = we({
		sourceFilters: $e,
		sourcePresets: nt,
		sourceCurrentFilters: et,
		sourceSetCurrentFilters: tt,
		visualizations: f,
		currentVisualization: w,
		storageKey: Je
	}), bt = s(null), [xt, St] = c(!1), F = ve(d.dataAdapter, m), Ct = "perPage" in d.dataAdapter && d.dataAdapter.perPage === "auto" && d.dataAdapter.paginationType === "pages" && !m, wt = (() => {
		switch (f[w]?.type) {
			case "list": return 68;
			default: return 48;
		}
	})(), Tt = ye(bt, F, {
		rowHeight: wt,
		ready: xt,
		measureKey: w
	});
	a(() => {
		F && St(!1);
	}, [w]), a(() => {
		Ct && console.warn("[OneDataCollection] perPage: \"auto\" requires the fullHeight prop — falling back to the default page size.");
	}, [Ct]);
	let Et = o(() => F ? {
		...d.dataAdapter,
		perPage: Tt
	} : d.dataAdapter, [
		d.dataAdapter,
		F,
		Tt
	]), Dt = o(() => {
		let e = d;
		return P && (e = {
			...e,
			currentFilters: M,
			setCurrentFilters: N
		}), e.dataAdapter !== Et && (e = {
			...e,
			dataAdapter: Et
		}), e;
	}, [
		d,
		P,
		M,
		N,
		Et
	]), I = s(S), Ot = s(b), kt = s(M), { emitSortingChange: At } = te({
		defaultSorting: I.current,
		currentVisualization: P ? w : void 0
	});
	a(() => {
		At(S);
	}, [At, S]);
	let jt = o(() => se(ct), [ct]), L = o(() => oe(ce(y)), [y]), Mt = o(() => le(ut), [ut]), Nt = h && typeof h == "object" ? h.filename : Je ? `${Je}_export` : void 0, Pt = Se({
		source: Dt,
		currentVisualization: f[w],
		filename: Nt,
		enabled: !!h
	}), Ft = o(() => Math.min(y && "expanded" in y && y.expanded || 0, 2), [y]), It = o(() => L[0]?.items.slice(0, Ft) || [], [L, Ft]), Lt = o(() => {
		let e = L[0] ?? { items: [] }, t = [{
			...e,
			items: e.items?.slice(Ft) || []
		}, ...L.slice(1)];
		return h && t.push({ items: [Pt] }), t.filter((e) => e.items.length > 0);
	}, [
		L,
		Ft,
		h,
		Pt.loading,
		Pt.disabled,
		Pt.onClick
	]), Rt = jt?.length > 0 || L?.length > 0 || !!Mt || !!h, [zt, Bt] = c(void 0), Vt = n(), [R, Ht] = c(void 0), Ut = i((e) => {
		if (!e) return [];
		let t = [], n = [];
		for (let r of e) "type" in r && r.type === "separator" ? (t.push({ items: n }), n = []) : n.push(r);
		return n.length > 0 && t.push({ items: n }), t;
	}, []), z = o(() => {
		if (R) return "warningMessage" in R ? { warningMessage: R.warningMessage } : {
			primary: Ut(R.primary ?? []),
			secondary: (R?.secondary ?? []).filter((e) => !("type" in e && e.type === "separator"))
		};
	}, [R, Ut]), [Wt, Gt] = c(!1), [Kt, qt] = c(0), [Jt, Yt] = c(!1), [Xt, B] = c("idle"), [Zt, Qt] = c(!1), $t = s(null), V = s(null), en = s(null), tn = s(null), nn = s(null), rn = Me(en, tn, nn), an = (e) => p !== void 0 && p !== "idle" && !(p === "success" && e), on = an(Zt) ? p : Xt, sn = an(Zt), cn = s(!1);
	cn.current = sn;
	let ln = p !== void 0, un = i((e, t = !0) => {
		V.current && clearTimeout(V.current), V.current = setTimeout(() => {
			t && Gt(!1), e(), V.current = null;
		}, Be);
	}, []);
	a(() => () => {
		V.current && clearTimeout(V.current);
	}, []);
	let dn = s(void 0);
	a(() => {
		let e = dn.current;
		dn.current = p, p === "success" && e !== "success" ? (Qt(!1), un(() => {
			zt?.(), Qt(!0);
		})) : e === "success" && p !== "success" && (V.current &&= (clearTimeout(V.current), null), Qt(!1));
	}, [
		p,
		zt,
		un
	]);
	let H = t(), U = o(() => dt === !0 ? (e) => e === void 0 ? null : `${e} ${H.collections.itemsCount}` : dt || void 0, [dt, H]), fn = (e, t, n) => {
		He?.(e, t, n), Gt(!!e.allSelected || e.itemsStatus.some((e) => e.checked)), B((e) => e === "error" ? "idle" : e), qt(e.selectedCount), Bt(() => t), Yt(e.allSelected === !0);
		let r = d.bulkActions ? d.bulkActions(e) : void 0, ee = (n) => {
			if ("type" in n && n.type === "separator") return { type: "separator" };
			let r = n;
			return {
				...r,
				onClick: () => {
					let n = Ue?.(r.id, e, t);
					if (!(We && n !== void 0 && typeof n?.then == "function")) {
						!r.keepSelection && !ln && t();
						return;
					}
					cn.current || (B("loading"), n.then(() => {
						B("success"), un(() => {
							r.keepSelection || t(), B("idle");
						}, !r.keepSelection);
					}, () => {
						B("error"), $t.current?.wiggle({ errorHighlight: !0 });
					}));
				}
			};
		};
		r && ("primary" in r ? Ht({
			primary: (r?.primary || []).map(ee),
			secondary: (r?.secondary || []).map(ee)
		}) : "warningMessage" in r && Ht({ warningMessage: r.warningMessage }));
	}, [pn, mn] = c(void 0), [hn, gn] = c(!0), _n = o(() => [_?.enabled, f.length > 1].some(Boolean), [_, f]), { emptyState: W, setEmptyStateType: G } = be(Ke, {
		retry: () => {
			G(!1), N({ ...M });
		},
		clearFilters: () => {
			G(!1), N({}), ot(void 0);
		}
	}), vn = (e, t, n) => e === 0 ? j && ne(j, t, H).length > 0 || n ? "no-results" : "no-data" : !1, yn = ({ totalItems: e, filters: t, isInitialLoading: n, search: r }) => {
		n || (gn(n), mn(e), St(!0), G(vn(e, t, r)));
	}, bn = (e) => {
		G("error", e.cause instanceof Error ? e.cause.message : e.message);
	}, xn = ae({
		value: !!rt,
		delay: 100
	});
	a(() => {
		G(!1);
	}, [
		M,
		v,
		g,
		d.dataAdapter
	]);
	let Sn = o(() => U !== void 0, [U]), Cn = U === void 0 || pn === void 0 ? null : U(pn), { settings: K, setSettings: wn } = xe(), q = o(() => [...(_t ?? []).map((e, t) => ({
		...e,
		id: e.id ?? `${e.label}-${t}`
	})), ...D], [_t, D]), Tn = o(() => new Set(D.map((e) => e.id)), [D]), J = o(() => ({
		filters: M,
		sortings: S,
		grouping: b,
		visualization: w,
		settings: K
	}), [
		M,
		S,
		b,
		w,
		K
	]), En = i((e) => ({
		filters: e.filter ?? {},
		sortings: e.sortings === void 0 ? I.current : e.sortings,
		grouping: e.grouping === void 0 ? Ot.current : e.grouping,
		visualization: e.visualization ?? 0,
		settings: e.settings === void 0 ? Ee() : e.settings
	}), []), Y = s(null), Dn = s(!1), On = s(null), kn = i(() => ({
		filters: kt.current,
		sortings: I.current,
		grouping: Ot.current,
		visualization: 0,
		settings: Ee()
	}), []), An = i((e) => {
		C(e.sortings), ft(e.grouping), wn(e.settings), e.visualization === w ? N(e.filters) : (On.current = {
			filters: e.filters,
			visualization: e.visualization
		}, mt(e.visualization));
	}, [
		w,
		N,
		C,
		ft,
		wn
	]);
	Pe(() => {
		let e = On.current;
		e && e.visualization === w && (On.current = null, N(e.filters));
	}, [w, N]);
	let jn = i((e) => {
		if (Dn.current = !1, e === T) {
			An(Y.current ?? kn()), Y.current = null, E(void 0);
			return;
		}
		let t = q.find((t) => t.id === e);
		t && (T || (Y.current = J), An(En(t)), E(e));
	}, [
		q,
		T,
		J,
		An,
		kn,
		En
	]), X = s(null);
	a(() => {
		let e = T ? q.find((e) => e.id === T) : void 0;
		if (!e) {
			X.current = null;
			return;
		}
		X.current?.id !== e.id && (X.current = {
			id: e.id,
			snapshot: En(e),
			settled: !1
		});
		let t = X.current;
		if (t && !On.current) {
			if (!t.settled) {
				ze(J, t.snapshot) && (t.settled = !0);
				return;
			}
			ze(J, t.snapshot) || (X.current = null, Y.current = null, Dn.current = !0, E(void 0));
		}
	}, [
		T,
		q,
		J,
		En
	]);
	let [Z, Mn] = c(null), Nn = o(() => Ze || T && q.some((e) => e.id === T) || Z === null ? "none" : !((e, t) => ze({
		...e,
		visualization: void 0
	}, {
		...t,
		visualization: void 0
	}))(J, Z) || Dn.current && !ze(J, Z) ? "save" : "none", [
		Ze,
		T,
		q,
		J,
		Z
	]), Pn = i((e) => {
		let t = O?.mode === "create" ? O.shared : void 0, n = t ? {
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		} : {
			filter: M,
			sortings: S,
			grouping: b,
			visualization: w,
			settings: K
		}, r = {
			id: De(e.title, q.map((e) => e.id ?? e.label)),
			label: e.title,
			description: e.description,
			...n
		};
		ht((e) => [...e, r]), E(r.id), Dn.current = !1, k(null);
	}, [
		O,
		M,
		S,
		b,
		w,
		K,
		q
	]), Fn = i((e) => {
		let t = O?.mode === "update" ? O.presetId : void 0;
		if (!t) return;
		let n = De(e.title, q.filter((e) => e.id !== t).map((e) => e.id ?? e.label));
		ht((r) => r.map((r) => r.id === t ? {
			...r,
			id: n,
			label: e.title,
			description: e.description
		} : r)), E((e) => e === t ? n : e), k(null);
	}, [O, q]), In = i(() => {
		let e = O?.mode === "update" ? O.presetId : void 0;
		e && (ht((t) => t.filter((t) => t.id !== e)), E((t) => t === e ? void 0 : t), k(null));
	}, [O]), Ln = i(() => {
		k({ mode: "create" });
	}, []), Rn = o(() => Array.from(Tn).filter((e) => !!e), [Tn]), zn = i((e) => k({
		mode: "update",
		presetId: e
	}), []), Bn = i((e) => {
		let t = D.find((t) => t.id === e);
		if (!t) return;
		let n = ke({
			label: t.label,
			description: t.description,
			filter: t.filter,
			sortings: t.sortings,
			grouping: t.grouping,
			visualization: t.visualization,
			settings: t.settings
		}), r = typeof navigator < "u" ? navigator.clipboard : void 0;
		!n || !r || r.writeText(n).then(() => Hn(!0)).catch(() => {});
	}, [D]), [Vn, Hn] = c(!1);
	a(() => {
		if (!Vn) return;
		let e = setTimeout(() => Hn(!1), Ve);
		return () => clearTimeout(e);
	}, [Vn]), a(() => {
		if (gt && (k({
			mode: "create",
			shared: gt
		}), typeof window < "u")) {
			let e = new URLSearchParams(window.location.search);
			e.delete(Oe);
			let t = e.toString();
			window.history.replaceState(null, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
		}
	}, []);
	let Un = o(() => O?.mode === "update" ? D.find((e) => e.id === O.presetId) : void 0, [O, D]), { storageReady: Wn } = _e(Je, typeof qe == "object" ? qe?.features ?? ["*"] : ["*"], {
		settings: {
			value: K,
			setValue: wn
		},
		sortings: {
			value: S,
			setValue: C
		},
		grouping: {
			value: b,
			setValue: ft
		},
		navigationFilters: {
			value: g,
			setValue: at
		},
		visualization: {
			value: w,
			setValue: mt
		},
		search: {
			value: v,
			setValue: ot
		},
		filters: {
			value: et,
			setValue: tt
		},
		customPresets: {
			value: D,
			setValue: ht
		},
		...P ? { visualizationFilters: {
			value: vt,
			setValue: yt
		} } : {}
	}, qe === !1);
	a(() => {
		Wn && Z === null && Mn(J);
	}, [
		Wn,
		Z,
		J
	]), Ce({
		disabled: !!Ye,
		storageReady: Wn,
		filtersDefinition: $e,
		filters: M,
		search: v,
		sortings: S,
		defaultSortings: I.current,
		visualization: w,
		visualizationKeys: f.map((e) => e.type),
		selectedPresetId: T,
		setFilters: N,
		setSearch: ot,
		setSortings: C,
		setVisualization: mt,
		setSelectedPresetId: E
	});
	let Gn = ae({
		value: hn && Wn,
		delay: 100
	});
	Re(() => {
		Ge?.({
			filters: M,
			sortings: S,
			visualization: w,
			grouping: b,
			search: v,
			navigationFilters: g,
			settings: K,
			...P ? { visualizationFilters: vt } : {}
		});
	}, [
		M,
		v,
		g,
		S,
		w,
		b,
		K,
		vt
	]);
	let Kn = o(() => {
		let e = x ? Object.keys(x.groupBy).length + +!!x.mandatory : 0, t = Object.values(f).find((e) => e.type === "table"), n = !!t && (!!t.options?.allowColumnHiding || !!t.options?.allowColumnReordering);
		return e > 0 && !x?.hideSelector || pt && Object.keys(pt).length > 0 || n;
	}, [
		f,
		x,
		pt
	]), qn = o(() => _n || Rt || Kn || _ && _.enabled, [
		_n,
		Rt,
		Kn,
		_
	]), Q = o(() => Sn ? j ? "top" : "bottom" : !1, [j, Sn]), $ = o(() => it ? qn ? "top" : "bottom" : !1, [it, qn]), Jn = o(() => Q === "top" || $ === "top", [Q, $]), Yn = o(() => j || qn || $ === "bottom" || Q === "bottom", [
		j,
		qn,
		$,
		Q
	]);
	return /* @__PURE__ */ u("div", {
		className: e("flex flex-col gap-4", Vt === "standard" && "-mx-[23px]", m && "h-full flex-1"),
		style: { width: Vt === "standard" && !Xe ? "calc(100% + 46px)" : "100%" },
		children: [
			Jn && /* @__PURE__ */ u("div", {
				className: "border-f1-border-primary px-page flex gap-4",
				children: [Q === "top" && /* @__PURE__ */ l(ge, {
					isReady: !Gn,
					totalItemSummaryResult: Cn
				}), /* @__PURE__ */ l("div", {
					className: "flex flex-1 flex-shrink justify-end",
					children: $ === "top" && /* @__PURE__ */ l(fe, {
						navigationFilters: it,
						currentNavigationFilters: g,
						onChangeNavigationFilters: at
					})
				})]
			}),
			Yn && /* @__PURE__ */ u("div", {
				ref: en,
				className: e("flex flex-row gap-4 px-page", m && "max-h-full", Xe && "px-0"),
				children: [Q === "bottom" && /* @__PURE__ */ l("div", {
					ref: nn,
					className: "flex items-center",
					children: /* @__PURE__ */ l(ge, {
						isReady: !Gn,
						totalItemSummaryResult: Cn
					})
				}), /* @__PURE__ */ l("div", {
					className: "flex-1",
					children: /* @__PURE__ */ l(re, {
						filters: j,
						value: M,
						presets: q,
						presetsLoading: xn,
						onChange: (e) => N(e),
						resultCount: pn,
						selectedPresetId: T,
						onSelectPreset: jn,
						editablePresetIds: Rn,
						onEditPreset: zn,
						presetActionState: Nn,
						onPresetAction: Ln,
						children: /* @__PURE__ */ u("div", {
							ref: tn,
							className: "flex items-center gap-2",
							children: [
								st && /* @__PURE__ */ l(Le.div, {
									className: "flex h-8 w-8 items-center justify-center",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									children: /* @__PURE__ */ l(r, { size: "small" })
								}),
								_ && /* @__PURE__ */ l(me, {
									onChange: ot,
									value: v,
									results: A.results,
									resultsLoading: A.loading,
									onResultSelect: A.onSelect,
									hasMore: A.hasMore,
									loadingMore: A.loadingMore,
									onLoadMore: A.onLoadMore
								}),
								f && f.length > 1 && /* @__PURE__ */ l(Ne, {
									visualizations: f,
									currentVisualization: w,
									onVisualizationChange: mt,
									hideLabels: rn
								}),
								Kn && /* @__PURE__ */ l(je, {
									visualizations: f,
									currentVisualization: w,
									grouping: x,
									currentGrouping: b,
									onGroupingChange: ft,
									sortings: pt,
									currentSortings: S,
									defaultSortings: I.current,
									onSortingsChange: C
								}),
								Rt && /* @__PURE__ */ u(Ie, { children: [_n && /* @__PURE__ */ l("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ l(de, {
									primaryActions: jt,
									primaryActionsLabel: lt,
									secondaryActions: It,
									otherActions: Lt,
									upsellAction: Mt
								})] }),
								$ === "bottom" && /* @__PURE__ */ l(fe, {
									navigationFilters: it,
									currentNavigationFilters: g,
									onChangeNavigationFilters: at
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ l("div", {
				ref: bt,
				className: e(W && "hidden", m && "h-full min-h-0 flex-1"),
				children: (!F || Tt !== void 0) && /* @__PURE__ */ l(Te, {
					visualization: f[w],
					source: Dt,
					onSelectItems: fn,
					onLoadData: yn,
					onLoadError: bn,
					tmpFullWidth: Xe,
					searchSelectionNonce: A.selectionNonce
				})
			}),
			W ? /* @__PURE__ */ l("div", {
				className: "flex flex-1 flex-col items-center justify-center",
				children: /* @__PURE__ */ l(ie, {
					emoji: W.emoji,
					title: W.title,
					description: W.description,
					actions: W.actions
				})
			}) : /* @__PURE__ */ l(Ie, { children: R && /* @__PURE__ */ l(ue, {
				ref: $t,
				isOpen: Wt || on === "loading" || on === "success",
				status: on,
				selectedNumber: Kt,
				primaryActions: z && "primary" in z ? z.primary : [],
				secondaryActions: z && "secondary" in z ? z.secondary : [],
				warningMessage: "warningMessage" in R ? R.warningMessage : void 0,
				onUnselect: () => zt?.(),
				allPagesSelection: !!d.allPagesSelection,
				isAllItemsSelected: Jt,
				totalItems: pn
			}) }),
			/* @__PURE__ */ l(pe, {
				isOpen: O !== null,
				mode: O?.mode ?? "create",
				initialValues: Un ? {
					title: Un.label,
					description: Un.description
				} : O?.mode === "create" && O.shared ? {
					title: O.shared.label,
					description: O.shared.description
				} : void 0,
				onClose: () => k(null),
				onSubmit: O?.mode === "update" ? Fn : Pn,
				onDelete: O?.mode === "update" ? In : void 0,
				onShare: O?.mode === "update" ? () => Bn(O.presetId) : void 0,
				existingNames: q.filter((e) => O?.mode !== "update" || e.id !== O.presetId).map((e) => e.label)
			}),
			typeof document < "u" && Fe(/* @__PURE__ */ l("div", {
				style: {
					position: "relative",
					zIndex: 9999
				},
				children: /* @__PURE__ */ l(ee, {
					isOpen: Vn,
					variant: "light",
					status: "success",
					label: H.collections.presets.copiedToClipboard
				})
			}), document.getElementById("content") ?? document.body)
		]
	});
};
//#endregion
export { d as OneDataCollectionComp };
