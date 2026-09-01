import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { F0Icon as r } from "../F0Icon/index.js";
import i from "../../icons/app/ChevronDown.js";
import a from "../../icons/app/Plus.js";
import { useI18n as o } from "../../lib/providers/i18n/i18n-provider.js";
import { TooltipInternal as s } from "../../experimental/Overlays/Tooltip/index.js";
import { F0Button as ee } from "../F0Button/F0Button.js";
import { textVariants as te } from "../../ui/Text/variants.js";
import { InputMessages as ne } from "../F0InputField/components/InputMessages.js";
import { Label as re } from "../F0InputField/components/Label.js";
import { F0InputField as ie } from "../F0InputField/F0InputField.js";
import { getDataSourcePaginationType as ae, useDataSource as oe } from "../../hooks/datasource/useDataSource.js";
import { useData as se } from "../../hooks/datasource/useData.js";
import { useGroups as ce } from "../../hooks/datasource/useGroups.js";
import { useSelectable as le } from "../../hooks/datasource/useSelectable/useSelectable.js";
import { toArray as c } from "../../lib/toArray.js";
import { F0DialogContext as ue } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
import { GroupHeader as de } from "../../ui/GroupHeader/GroupHeader.js";
import { Select as fe } from "../../ui/Select/components/Select.js";
import { SelectContent as pe } from "../../ui/Select/components/SelectContent.js";
import { SelectSeparator as me } from "../../ui/Select/components/SelectSeparator.js";
import { SelectTrigger as he } from "../../ui/Select/components/SelectTrigger.js";
import { Arrow as ge } from "./components/Arrow.js";
import { SelectAll as _e } from "./components/SelectAll.js";
import { SelectBottomActions as ve } from "./components/SelectBottomActions.js";
import { SelectedItems as ye } from "./components/SelectedItems.js";
import { SelectionPreview as be } from "./components/SelectionPreview.js";
import { SelectItem as xe } from "./components/SelectItem.js";
import { SelectTopActions as Se } from "./components/SelectTopActions.js";
import { selectSizes as Ce, selectVariants as l } from "./types.js";
import { forwardRef as u, useCallback as d, useContext as we, useEffect as f, useId as Te, useMemo as p, useRef as m, useState as Ee } from "react";
import { cva as h } from "cva";
import { Fragment as De, jsx as g, jsxs as _ } from "react/jsx-runtime";
import { useDeepCompareEffect as Oe } from "@reactuses/core";
import { useComposedRefs as ke } from "@radix-ui/react-compose-refs";
import { isEqual as Ae } from "lodash";
//#region src/components/F0Select/F0Select.tsx
var je = (e, t) => e.type === "separator" || !t || e.label.toLowerCase().includes(t.toLowerCase()), Me = (e) => {
	if (e.type !== "separator" && e.tag !== void 0 && typeof e.tag != "string") return e.tag.type;
}, Ne = h({
	base: "flex flex-col rounded-md border border-solid bg-f1-background max-h-full",
	variants: { status: {
		default: "border-f1-border-secondary",
		error: "border-f1-border-critical-bold",
		warning: "border-f1-border-warning-bold",
		info: "border-f1-border-info-bold"
	} },
	defaultVariants: { status: "default" }
}), v = t("group inline-flex h-8 w-fit max-w-full items-center gap-1 rounded border-0 bg-transparent pl-3 pr-2 shadow-none outline-none transition-colors enabled:cursor-pointer enabled:hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover disabled:cursor-not-allowed disabled:bg-f1-background-tertiary disabled:text-f1-foreground-disabled disabled:data-[state=open]:bg-f1-background-tertiary disabled:[&_*]:text-f1-foreground-disabled", te({ variant: "label" })), Pe = u(function({ label: e, placeholder: a, selection: o, hasValue: s }, ee) {
	return /* @__PURE__ */ _(he, {
		ref: ee,
		"aria-label": e,
		className: t(v, n()),
		children: [/* @__PURE__ */ g("span", {
			className: "flex min-w-0 max-w-full items-center",
			children: s ? /* @__PURE__ */ g(ye, {
				selection: o,
				totalSelectedCount: 1
			}) : /* @__PURE__ */ g("span", {
				className: "truncate text-f1-foreground-secondary",
				children: a ?? e
			})
		}), /* @__PURE__ */ g("span", {
			className: "flex size-4 shrink-0 items-center justify-center text-f1-icon",
			"aria-hidden": "true",
			children: /* @__PURE__ */ g(r, {
				icon: i,
				size: "sm"
			})
		})]
	});
});
Pe.displayName = "InlineSelectTrigger";
var y = u(function({ variant: n = "field", placeholder: r, onChange: i, withApplySelection: te = !1, applySelectionLabel: Ce, onChangeSelectedOption: l, value: u, options: h = [], mapOptions: v, children: y, disabled: b, open: Fe, hideLabel: Ie, onOpenChange: Le, showSearchBox: Re, onSearchChange: ze, searchBoxPlaceholder: Be, searchEmptyMessage: Ve, size: He, actions: Ue, onCreate: We, onFiltersChange: Ge, source: x, label: S, icon: Ke, labelIcon: qe, clearable: Je, loading: Ye, name: Xe, error: Ze, status: C, hint: Qe, required: $e, multiple: w, portalContainer: et, asList: T = !1, showPreview: tt = !1, preserveSelectionOnDatasetChange: nt = !0, fitContentWidth: rt, dataTestId: it, ...E }, at) {
	let ot = Te(), st = He ?? "sm", D = we(ue), ct = D.portalContainer && (D.position === "center" || D.position === "fullscreen"), lt = et === void 0 ? ct ? D.portalContainer : void 0 : et, ut = "onSelectItems" in E ? E.onSelectItems : void 0, O = "disableSelectAll" in E && E.disableSelectAll, [k, dt] = Ee(Fe), ft = m(null), pt = ke(at, ft), mt = m(k), ht = m(!1);
	f(() => {
		n === "inline" && mt.current && !k && ft.current?.focus({ preventScroll: !0 }), mt.current = k;
	}, [k, n]);
	let gt = p(() => c(E.defaultItem).filter((e) => e !== void 0), [E.defaultItem]), A = p(() => gt.map((e) => String(e.value)), [gt]), [j, M] = Ee(() => (c(u) ?? A ?? []).map(String)), N = n === "inline" && typeof u == "string" ? String(u) : void 0;
	f(() => {
		let e = (c(u) ?? []).map(String);
		if (!Ae(e, j ?? [])) {
			let e = c(u) ?? A ?? [];
			M(Array.from(new Set(e.map(String))));
		}
	}, [u]);
	let _t = p(() => {
		if (x && !["infinite-scroll", "no-pagination"].includes(ae(x.dataAdapter))) throw Error("Select component only supports `infinite-scroll` or `no-pagination` pagination types");
		return {
			...x,
			dataAdapter: x ? x.dataAdapter : { fetchData: ({ search: e }) => {
				let t = "searchFn" in E && E.searchFn ? E.searchFn : je;
				return { records: h.filter((n) => t(n, e) ?? !0) };
			} }
		};
	}, [
		h,
		x,
		"searchFn" in E && E.searchFn
	]), P = oe({
		..._t,
		selectable: (e) => {
			if (!e) return;
			let t = F(e);
			return t.type === "separator" ? void 0 : String(t.value);
		},
		search: Re ? {
			enabled: Re,
			sync: !x
		} : void 0
	}, [h]), F = d((e) => {
		if (x) {
			if (!v) throw Error("mapOptions is required when using a source");
			return v(e);
		}
		return e;
	}, [v, x]), { data: I, isInitialLoading: vt, loadMore: yt, isLoadingMore: bt, isLoading: xt, paginationInfo: St } = se(P), { currentSearch: L, setCurrentSearch: R } = P, z = m(/* @__PURE__ */ new Map()), B = p(() => {
		let e = [];
		for (let t of I.records) {
			let n = F(t);
			n.type !== "separator" && e.push([String(n.value), {
				item: t,
				option: n
			}]);
		}
		return Object.fromEntries(e);
	}, [I, F]), Ct = p(() => {
		let e = c(u) ?? A ?? [];
		if (e.length === 0) return;
		let t = /* @__PURE__ */ new Map(), n = Array.from(new Set(e));
		for (let e of n) {
			let n = B[String(e)];
			t.set(String(e), {
				id: String(e),
				checked: !0,
				item: n?.item
			});
		}
		return {
			allSelected: !1,
			items: t,
			groups: /* @__PURE__ */ new Map()
		};
	}, [
		u,
		A,
		B
	]), { handleSelectAllItems: wt, handleSelectItemChange: V, selectedState: H, clearSelection: U, selectionMeta: W } = le({
		data: I,
		paginationInfo: St,
		source: P,
		selectionMode: w ? "multi" : "single",
		onSelectItems: ut,
		selectedState: Ct,
		disableSelectAll: O,
		isSearchActive: !!L,
		allPagesSelection: !0,
		resetOnPageChange: !1,
		preserveSelectionOnDatasetChange: nt
	}), Tt = d((e) => ({
		allSelected: e.allSelected,
		items: new Map(e.items),
		groups: new Map(e.groups)
	}), []), Et = d((e) => {
		let t = Array.from(e.items.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), Dt = m(Ct ? Tt(Ct) : {
		allSelected: !1,
		items: /* @__PURE__ */ new Map(),
		groups: /* @__PURE__ */ new Map()
	}), G = p(() => {
		let e = [];
		for (let t of j) {
			let n = String(t), r = B[n];
			if (r) {
				z.current.set(n, r.option), e.push(r.option);
				continue;
			}
			let i = z.current.get(n);
			if (i) {
				e.push(i);
				continue;
			}
			let a = gt.find((e) => String(e.value) === n);
			a && (z.current.set(n, a), e.push(a));
		}
		return e;
	}, [
		j,
		B,
		gt
	]), Ot = p(() => I.records.some((e) => Me(F(e)) === "status") || G.some((e) => Me(e) === "status"), [
		I.records,
		F,
		G
	]) ? "md" : st, kt = rt ?? n === "inline", At = (e) => {
		R(e), ze?.(e);
	}, jt = w && !T, K = !!(te && jt), q = m(!1), Mt = m(!0), J = m(null), Nt = m(null), Pt = d((e, t) => {
		if (!w && !Je && !t && j[0] === e) return;
		q.current = !0, V(e, t);
		let n = B[String(e)];
		n && (t ? z.current.set(String(e), n.option) : z.current.delete(String(e)), K || l?.(n.option, t));
	}, [
		K,
		l,
		B,
		V,
		w,
		Je,
		j
	]), Ft = m(!1), It = d((e) => {
		q.current = !0, Ft.current = e, wt(e);
	}, [wt]), Y = d(() => {
		let e = Array.from(H.items.values() || []).filter((e) => e.checked), t = (e) => {
			if (e) return x ? e : e.item;
		}, n = e.map((e) => e.item).filter((e) => e !== void 0), r = n.map(t).filter((e) => e !== void 0), i = n.map((e) => F(e));
		return {
			values: e.map((e) => {
				if (e.item) {
					let t = F(e.item);
					return t.type === "separator" ? String(e.id) : t.value;
				}
				return String(e.id);
			}),
			originalItems: r,
			options: i
		};
	}, [
		F,
		H.items,
		x
	]);
	Oe(() => {
		if (!q.current) {
			Mt.current &&= !1;
			return;
		}
		!w && !k && !T && R(void 0);
		let e = (e) => {
			if (e) return x ? e : e.item;
		};
		if (w) {
			let { values: e, originalItems: t, options: n } = Y();
			M(Array.from(new Set(e.map(String))));
			let r = e.map(String).sort().join("\0");
			if (Nt.current === r) return;
			K || (Nt.current = r, i?.(e, t, n));
		} else {
			let t = Array.from(H.items.values() || []).filter((e) => e.checked)[0], n = t?.item, r = e(n), a = n ? F(n) : void 0, o = a ? a.value : t ? String(t.id) : void 0;
			M(o === void 0 ? [] : [String(o)]);
			let s = o === void 0 ? void 0 : String(o);
			if (J.current !== null && J.current.value === s) return;
			K || (J.current = { value: s }, i?.(o, r, a), N !== void 0 && s !== N && (q.current = !1, J.current = null, U(), V(N, !0), M([N])));
		}
	}, [
		N,
		Y,
		K,
		F,
		H,
		x
	]);
	let Lt = m(() => {});
	Lt.current = (e) => {
		Le?.(e), dt(e), e || (ht.current = !1);
	};
	let X = m(null), Rt = p(() => {
		let e = (e) => {
			X.current !== null && clearTimeout(X.current), X.current = setTimeout(() => {
				X.current = null, Lt.current(e);
			}, 100);
		};
		return e.cancel = () => {
			X.current !== null && (clearTimeout(X.current), X.current = null);
		}, e;
	}, []);
	f(() => () => {
		Rt.cancel();
	}, [Rt]);
	let zt = d(() => {
		let e = Dt.current;
		if (U(), e.allSelected) {
			It(!0);
			for (let t of e.items.values()) t.checked || V(t.item ?? t.id, !1);
			return;
		}
		let t = Array.from(e.items.values()).filter((e) => e.checked);
		for (let e of t) V(e.item ?? e.id, !0);
	}, [
		U,
		It,
		V
	]), Z = (e) => {
		!e && K && !ht.current && zt(), Rt(e);
	}, Bt = d(() => {
		Z(!1);
	}, [Z]), Vt = d(() => {
		if (K) {
			let e = Tt(H), { values: t, originalItems: n, options: r } = Y();
			Et(e) !== Et(Dt.current) && (Dt.current = e, i?.(t, n, r)), ht.current = !0;
		}
		Z(!1);
	}, [
		Tt,
		Et,
		Y,
		Z,
		K,
		i,
		H
	]), [Ht, Ut] = Ee(!1), Wt = m(null);
	f(() => {
		let e = JSON.stringify([
			P.currentFilters,
			P.currentSortings,
			P.debouncedCurrentSearch
		]);
		if (Wt.current === null) {
			Wt.current = e;
			return;
		}
		Wt.current !== e && (Wt.current = e, !O && (!nt || Ft.current) && (z.current.clear(), M([]), q.current = !0, Ft.current = !1));
	}, [
		P.currentFilters,
		P.currentSortings,
		P.debouncedCurrentSearch,
		O,
		nt
	]);
	let Q = P.grouping?.collapsible ?? !1, Gt = P.grouping?.defaultOpenGroups, { openGroups: Kt, setGroupOpen: qt } = ce(I?.type === "grouped" ? I.groups : [], Gt), Jt = d((e, t) => e.map((e, n) => {
		let r = F(e), i = Me(r);
		if (i !== void 0 && (t.add(i), t.size > 1)) throw Error(`[F0Select] All options must use the same tag type, but multiple were provided: ${Array.from(t).map((e) => `"${e}"`).join(", ")}.`);
		return r.type === "separator" ? {
			height: 1,
			key: `separator-${n}`,
			type: "separator",
			item: /* @__PURE__ */ g(me, { className: "mb-1 mt-2" }, `separator-${n}`)
		} : {
			height: r.description ? 64 : 32,
			key: `item-${r.value}`,
			type: "item",
			item: /* @__PURE__ */ g(xe, { item: r }, String(r.value)),
			value: String(r.value)
		};
	}), [F]), Yt = p(() => {
		let e = /* @__PURE__ */ new Set();
		if (I.type === "grouped") {
			let t = [];
			return I.groups.map((n) => {
				t.push({
					height: 36,
					key: `group-header-${n.key}`,
					type: "group-header",
					item: /* @__PURE__ */ g(de, {
						label: n.label,
						itemCount: n.itemCount,
						showOpenChange: Q,
						onOpenChange: (e) => qt(n.key, e),
						open: Kt[n.key],
						chevronPosition: "leading",
						closedRotation: -90,
						openRotation: 0,
						className: "relative cursor-pointer rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 [&_*]:z-10"
					})
				}), (!Q || Kt[n.key]) && t.push(...Jt(n.records, e).map((e) => ({
					...e,
					key: `${n.key}:${e.key}`,
					item: Q ? /* @__PURE__ */ g("div", {
						className: "pl-5",
						children: e.item
					}) : e.item
				})));
			}), t;
		}
		return Jt(I.records, e);
	}, [
		I.records,
		I.type,
		I.groups,
		Jt,
		Kt,
		qt,
		Q
	]), Xt = () => {
		yt();
	}, $ = o(), Zt = p(() => Array.from(H.items.values()).filter((e) => e.checked).map((e) => String(e.id)), [H.items]), Qt = {
		...E,
		onItemCheckChange: Pt,
		disabled: b,
		open: k,
		onOpenChange: Z
	}, $t = w ? {
		...Qt,
		value: Zt,
		multiple: !0,
		as: T ? "list" : void 0
	} : {
		...Qt,
		value: Zt[0] ?? "",
		multiple: !1,
		as: T ? "list" : void 0
	}, en = We ? (e) => {
		let t = We(e);
		t && typeof t.then == "function" ? t.then(() => {
			R(void 0);
		}, (e) => {
			console.warn("[F0Select] onCreate failed:", e);
		}) : R(void 0);
	} : void 0, tn = L ? $.t("select.createWithValue", { value: L }) : $.select.create, nn = en && L?.trim() ? /* @__PURE__ */ g("div", {
		className: "flex w-full",
		children: /* @__PURE__ */ g(ee, {
			type: "button",
			variant: "outline",
			onClick: () => en(L.trim()),
			icon: a,
			label: tn
		})
	}) : void 0, rn = /* @__PURE__ */ g(pe, {
		items: Yt,
		fitContentWidth: kt,
		taller: !!x?.filters,
		emptyMessage: Ve ?? (We && L?.trim() ? $.select.createEmptyMessage ?? $.select.noResults : $.select.noResults),
		emptyAction: nn,
		bottom: Ht ? null : /* @__PURE__ */ g(ve, {
			actions: Ue,
			showApplyButton: jt,
			applyLabel: Ce,
			onApply: Vt,
			onCancel: Bt,
			showCancelButton: K
		}),
		top: /* @__PURE__ */ _(De, { children: [/* @__PURE__ */ g(Se, {
			searchValue: L,
			onSearchChange: At,
			searchBoxPlaceholder: Be,
			showSearchBox: Re,
			grouping: P.grouping,
			currentGrouping: P.currentGrouping,
			onGroupingChange: P.setCurrentGrouping,
			filters: P.filters,
			currentFilters: P.currentFilters,
			onFiltersChange: (e) => {
				P.setCurrentFilters(e), Ge?.(e);
			},
			asList: T,
			onFiltersOpenChange: Ut,
			showPreview: tt
		}), w && !L && !Ht && /* @__PURE__ */ g(_e, {
			selectedCount: W.selectedItemsCount,
			indeterminate: H.allSelected === "indeterminate" || H.allSelected === !1 && W.selectedItemsCount > 0,
			value: !!H.allSelected,
			onChange: It,
			hideCheckbox: O,
			items: G,
			paddingTop: !Re && !P.filters
		})] }),
		right: w && !Ht && tt ? /* @__PURE__ */ g(be, {
			items: G,
			onDeselect: (e) => Pt(e, !1),
			allSelected: H.allSelected,
			onLoadMore: yt,
			isLoadingMore: bt
		}) : null,
		forceMinHeight: !!P.filters && tt,
		onScrollBottom: Xt,
		scrollMargin: 10,
		isLoadingMore: bt,
		isLoading: xt || Ye,
		showLoadingIndicator: !!y,
		portalContainer: lt
	}), an = G.map((e) => e.selectedLabel ?? e.label).filter(Boolean).join(", "), on = (e) => {
		let n = /* @__PURE__ */ g("div", {
			className: t("w-full min-w-0", !!y && "h-full"),
			children: e
		});
		return /* @__PURE__ */ g(s, {
			label: Ie ? S : void 0,
			description: an,
			children: n
		});
	};
	if (T) return /* @__PURE__ */ g(e, {
		dataTestId: it,
		children: /* @__PURE__ */ _("div", {
			className: t("flex w-full max-h-full flex-col gap-2", b && "cursor-not-allowed opacity-50"),
			children: [
				S && !Ie && /* @__PURE__ */ g(re, {
					label: S,
					required: $e,
					htmlFor: ot,
					icon: qe,
					disabled: b
				}),
				/* @__PURE__ */ g("div", {
					className: t("flex-1 min-h-0", Ne({ status: Ze ? "error" : C?.type ? C?.type : "default" })),
					children: /* @__PURE__ */ g(fe, {
						...$t,
						children: rn
					})
				}),
				/* @__PURE__ */ g(ne, { status: C })
			]
		})
	});
	let sn = /* @__PURE__ */ _(fe, {
		...$t,
		children: [n === "inline" ? /* @__PURE__ */ g(Pe, {
			ref: pt,
			label: S,
			placeholder: r,
			selection: G,
			hasValue: !!j[0]
		}) : /* @__PURE__ */ g(he, {
			ref: pt,
			asChild: !0,
			children: y ? /* @__PURE__ */ g("div", {
				className: "flex h-full w-full items-center justify-between",
				"aria-label": S || r,
				children: y
			}) : /* @__PURE__ */ g(ie, {
				label: S,
				error: Ze,
				required: $e,
				status: C,
				hint: Qe,
				icon: Ke,
				labelIcon: qe,
				hideLabel: Ie,
				value: w ? Math.max(j.length, W.selectedItemsCount).toString() : j[0] ?? void 0,
				isEmpty: (e) => w ? !e || +(e ?? 0) == 0 : !e,
				onClear: () => {
					q.current = !0, U(), z.current.clear(), l?.(void 0, !1);
				},
				placeholder: r || "",
				disabled: b,
				clearable: Je,
				size: Ot,
				loadingIndicator: {
					asOverlay: !0,
					offset: 34
				},
				loading: vt || Ye || xt,
				name: Xe,
				onClickContent: () => {
					Z(!k);
				},
				append: /* @__PURE__ */ g(ge, {
					open: k,
					disabled: b,
					size: Ot
				}),
				children: /* @__PURE__ */ g("button", {
					className: "flex w-full items-center justify-between",
					"aria-label": S || r,
					onClick: (e) => {
						e.preventDefault();
					},
					children: (w ? j.length > 0 || W.selectedItemsCount > 0 : !!j[0]) && /* @__PURE__ */ g(ye, {
						multiple: w,
						totalSelectedCount: w ? Math.max(j.length, W.selectedItemsCount) : +!!j[0],
						allSelected: H.allSelected,
						selection: G,
						hideItemIcon: !!Ke
					})
				})
			})
		}), k && rn]
	});
	return /* @__PURE__ */ g(e, {
		dataTestId: it,
		children: n === "inline" ? sn : on(sn)
	});
});
//#endregion
export { y as F0Select, Ce as selectSizes, l as selectVariants };
