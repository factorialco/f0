import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { F0Icon as r } from "../F0Icon/index.js";
import i from "../../icons/app/ChevronDown.js";
import a from "../../icons/app/Plus.js";
import { useI18n as o } from "../../lib/providers/i18n/i18n-provider.js";
import { TooltipInternal as s } from "../../experimental/Overlays/Tooltip/index.js";
import { F0Button as ee } from "../F0Button/F0Button.js";
import { InputMessages as te } from "../F0InputField/components/InputMessages.js";
import { Label as ne } from "../F0InputField/components/Label.js";
import { F0InputField as re } from "../F0InputField/F0InputField.js";
import { getDataSourcePaginationType as ie, useDataSource as ae } from "../../hooks/datasource/useDataSource.js";
import { useData as oe } from "../../hooks/datasource/useData.js";
import { useGroups as se } from "../../hooks/datasource/useGroups.js";
import { useSelectable as ce } from "../../hooks/datasource/useSelectable/useSelectable.js";
import { toArray as c } from "../../lib/toArray.js";
import { F0DialogContext as le } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
import { GroupHeader as ue } from "../../ui/GroupHeader/GroupHeader.js";
import { Select as de } from "../../ui/Select/components/Select.js";
import { SelectContent as fe } from "../../ui/Select/components/SelectContent.js";
import { SelectSeparator as pe } from "../../ui/Select/components/SelectSeparator.js";
import { SelectTrigger as me } from "../../ui/Select/components/SelectTrigger.js";
import { textVariants as he } from "../../ui/Text/variants.js";
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
import Ae from "lodash/isEqual.js";
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
}), v = t("group inline-flex h-8 w-fit max-w-full items-center gap-1 rounded border-0 bg-transparent pl-3 pr-2 shadow-none outline-none transition-colors enabled:cursor-pointer enabled:hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover disabled:cursor-not-allowed disabled:bg-f1-background-tertiary disabled:text-f1-foreground-disabled disabled:data-[state=open]:bg-f1-background-tertiary disabled:[&_*]:text-f1-foreground-disabled", he({ variant: "label" })), Pe = u(function({ label: e, placeholder: a, selection: o, hasValue: s }, ee) {
	return /* @__PURE__ */ _(me, {
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
var y = u(function({ variant: n = "field", placeholder: r, onChange: i, withApplySelection: he = !1, applySelectionLabel: Ce, onChangeSelectedOption: l, value: u, options: h = [], mapOptions: v, children: y, disabled: b, open: Ie, hideLabel: Le, onOpenChange: Re, showSearchBox: x, onSearchChange: ze, searchBoxPlaceholder: Be, searchEmptyMessage: Ve, size: He, actions: Ue, onCreate: We, onFiltersChange: Ge, source: S, label: C, icon: Ke, labelIcon: qe, clearable: Je, loading: Ye, name: Xe, error: Ze, status: Qe, hint: $e, required: et, multiple: w, portalContainer: tt, asList: T = !1, showPreview: nt = !1, preserveSelectionOnDatasetChange: rt = !0, fitContentWidth: it, dataTestId: at, OneFilterPickerComponent: ot, ActiveFiltersChipsComponent: st, ...E }, ct) {
	let lt = Te(), ut = He ?? "sm", D = we(le), dt = D.portalContainer && (D.position === "center" || D.position === "fullscreen"), ft = tt === void 0 ? dt ? D.portalContainer : void 0 : tt, pt = "onSelectItems" in E ? E.onSelectItems : void 0, O = "disableSelectAll" in E && E.disableSelectAll, [k, mt] = Ee(Ie), ht = m(null), gt = ke(ct, ht), _t = m(k), vt = m(!1);
	f(() => {
		n === "inline" && _t.current && !k && ht.current?.focus({ preventScroll: !0 }), _t.current = k;
	}, [k, n]);
	let A = p(() => c(E.defaultItem).filter((e) => e !== void 0), [E.defaultItem]), j = p(() => A.map((e) => String(e.value)), [A]), [M, N] = Ee(() => (c(u) ?? j ?? []).map(String)), P = n === "inline" && typeof u == "string" ? String(u) : void 0;
	f(() => {
		let e = (c(u) ?? []).map(String);
		if (!Ae(e, M ?? [])) {
			let e = c(u) ?? j ?? [];
			N(Array.from(new Set(e.map(String))));
		}
	}, [u]);
	let yt = p(() => {
		if (S && !["infinite-scroll", "no-pagination"].includes(ie(S.dataAdapter))) throw Error("Select component only supports `infinite-scroll` or `no-pagination` pagination types");
		return {
			...S,
			dataAdapter: S ? S.dataAdapter : { fetchData: ({ search: e }) => {
				let t = "searchFn" in E && E.searchFn ? E.searchFn : je;
				return { records: h.filter((n) => t(n, e) ?? !0) };
			} }
		};
	}, [
		h,
		S,
		"searchFn" in E && E.searchFn
	]), F = ae({
		...yt,
		selectable: (e) => {
			if (!e) return;
			let t = I(e);
			return t.type === "separator" ? void 0 : String(t.value);
		},
		search: x ? {
			enabled: x,
			sync: !S
		} : void 0
	}, [h]), I = d((e) => {
		if (S) {
			if (!v) throw Error("mapOptions is required when using a source");
			return v(e);
		}
		return e;
	}, [v, S]), { data: L, isInitialLoading: bt, loadMore: xt, isLoadingMore: St, isLoading: Ct, paginationInfo: wt } = oe(F), { currentSearch: R, setCurrentSearch: z } = F, B = m(/* @__PURE__ */ new Map()), V = p(() => {
		let e = [];
		for (let t of L.records) {
			let n = I(t);
			n.type !== "separator" && e.push([String(n.value), {
				item: t,
				option: n
			}]);
		}
		return Object.fromEntries(e);
	}, [L, I]), Tt = p(() => {
		let e = c(u) ?? j ?? [];
		if (e.length === 0) return;
		let t = /* @__PURE__ */ new Map(), n = Array.from(new Set(e));
		for (let e of n) {
			let n = V[String(e)];
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
		j,
		V
	]), { handleSelectAllItems: Et, handleSelectItemChange: H, selectedState: U, clearSelection: W, selectionMeta: G } = ce({
		data: L,
		paginationInfo: wt,
		source: F,
		selectionMode: w ? "multi" : "single",
		onSelectItems: pt,
		selectedState: Tt,
		disableSelectAll: O,
		isSearchActive: !!R,
		allPagesSelection: !0,
		resetOnPageChange: !1,
		preserveSelectionOnDatasetChange: rt
	}), Dt = d((e) => ({
		allSelected: e.allSelected,
		items: new Map(e.items),
		groups: new Map(e.groups)
	}), []), Ot = d((e) => {
		let t = Array.from(e.items.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups.entries()).filter(([, t]) => e.allSelected ? !0 : t.checked).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), kt = m(Tt ? Dt(Tt) : {
		allSelected: !1,
		items: /* @__PURE__ */ new Map(),
		groups: /* @__PURE__ */ new Map()
	}), K = p(() => {
		let e = [];
		for (let t of M) {
			let n = String(t), r = V[n];
			if (r) {
				B.current.set(n, r.option), e.push(r.option);
				continue;
			}
			let i = B.current.get(n);
			if (i) {
				e.push(i);
				continue;
			}
			let a = A.find((e) => String(e.value) === n);
			a && (B.current.set(n, a), e.push(a));
		}
		return e;
	}, [
		M,
		V,
		A
	]), At = p(() => L.records.some((e) => Me(I(e)) === "status") || K.some((e) => Me(e) === "status"), [
		L.records,
		I,
		K
	]) ? "md" : ut, jt = it ?? n === "inline", Mt = (e) => {
		z(e), ze?.(e);
	}, Nt = w && !T, q = !!(he && Nt), J = m(!1), Pt = m(!0), Y = m(null), Ft = m(null), It = d((e, t) => {
		if (!w && !Je && !t && M[0] === e) return;
		J.current = !0, H(e, t);
		let n = V[String(e)];
		n && (t ? B.current.set(String(e), n.option) : B.current.delete(String(e)), q || l?.(n.option, t));
	}, [
		q,
		l,
		V,
		H,
		w,
		Je,
		M
	]), Lt = m(!1), Rt = d((e) => {
		J.current = !0, Lt.current = e, Et(e);
	}, [Et]), X = d(() => {
		let e = Array.from(U.items.values() || []).filter((e) => e.checked), t = (e) => {
			if (e) return S ? e : e.item;
		}, n = e.map((e) => e.item).filter((e) => e !== void 0), r = n.map(t).filter((e) => e !== void 0), i = n.map((e) => I(e));
		return {
			values: e.map((e) => {
				if (e.item) {
					let t = I(e.item);
					return t.type === "separator" ? String(e.id) : t.value;
				}
				return String(e.id);
			}),
			originalItems: r,
			options: i
		};
	}, [
		I,
		U.items,
		S
	]);
	Oe(() => {
		if (!J.current) {
			Pt.current &&= !1;
			return;
		}
		!w && !k && !T && z(void 0);
		let e = (e) => {
			if (e) return S ? e : e.item;
		};
		if (w) {
			let { values: e, originalItems: t, options: n } = X();
			N(Array.from(new Set(e.map(String))));
			let r = e.map(String).sort().join("\0");
			if (Ft.current === r) return;
			q || (Ft.current = r, i?.(e, t, n));
		} else {
			let t = Array.from(U.items.values() || []).filter((e) => e.checked)[0], n = t?.item, r = e(n), a = n ? I(n) : void 0, o = a ? a.value : t ? String(t.id) : void 0;
			N(o === void 0 ? [] : [String(o)]);
			let s = o === void 0 ? void 0 : String(o);
			if (Y.current !== null && Y.current.value === s) return;
			q || (Y.current = { value: s }, i?.(o, r, a), P !== void 0 && s !== P && (J.current = !1, Y.current = null, W(), H(P, !0), N([P])));
		}
	}, [
		P,
		X,
		q,
		I,
		U,
		S
	]);
	let zt = m(() => {});
	zt.current = (e) => {
		Re?.(e), mt(e), e || (vt.current = !1);
	};
	let Z = m(null), Bt = p(() => {
		let e = (e) => {
			Z.current !== null && clearTimeout(Z.current), Z.current = setTimeout(() => {
				Z.current = null, zt.current(e);
			}, 100);
		};
		return e.cancel = () => {
			Z.current !== null && (clearTimeout(Z.current), Z.current = null);
		}, e;
	}, []);
	f(() => () => {
		Bt.cancel();
	}, [Bt]);
	let Vt = d(() => {
		let e = kt.current;
		if (W(), e.allSelected) {
			Rt(!0);
			for (let t of e.items.values()) t.checked || H(t.item ?? t.id, !1);
			return;
		}
		let t = Array.from(e.items.values()).filter((e) => e.checked);
		for (let e of t) H(e.item ?? e.id, !0);
	}, [
		W,
		Rt,
		H
	]), Q = (e) => {
		!e && q && !vt.current && Vt(), Bt(e);
	}, Ht = d(() => {
		Q(!1);
	}, [Q]), Ut = d(() => {
		if (q) {
			let e = Dt(U), { values: t, originalItems: n, options: r } = X();
			Ot(e) !== Ot(kt.current) && (kt.current = e, i?.(t, n, r)), vt.current = !0;
		}
		Q(!1);
	}, [
		Dt,
		Ot,
		X,
		Q,
		q,
		i,
		U
	]), [Wt, Gt] = Ee(!1), Kt = m(null);
	f(() => {
		let e = JSON.stringify([
			F.currentFilters,
			F.currentSortings,
			F.debouncedCurrentSearch
		]);
		if (Kt.current === null) {
			Kt.current = e;
			return;
		}
		Kt.current !== e && (Kt.current = e, !O && (!rt || Lt.current) && (B.current.clear(), N([]), J.current = !0, Lt.current = !1));
	}, [
		F.currentFilters,
		F.currentSortings,
		F.debouncedCurrentSearch,
		O,
		rt
	]);
	let qt = F.grouping?.collapsible ?? !1, Jt = F.grouping?.defaultOpenGroups, { openGroups: Yt, setGroupOpen: Xt } = se(L?.type === "grouped" ? L.groups : [], Jt), Zt = d((e, t) => e.map((e, n) => {
		let r = I(e), i = Me(r);
		if (i !== void 0 && (t.add(i), t.size > 1)) throw Error(`[F0Select] All options must use the same tag type, but multiple were provided: ${Array.from(t).map((e) => `"${e}"`).join(", ")}.`);
		return r.type === "separator" ? {
			height: 1,
			key: `separator-${n}`,
			type: "separator",
			item: /* @__PURE__ */ g(pe, { className: "mb-1 mt-2" }, `separator-${n}`)
		} : {
			height: r.description ? 64 : 32,
			key: `item-${r.value}`,
			type: "item",
			item: /* @__PURE__ */ g(xe, { item: r }, String(r.value)),
			value: String(r.value)
		};
	}), [I]), Qt = p(() => {
		let e = /* @__PURE__ */ new Set();
		if (L.type === "grouped") {
			let t = [];
			return L.groups.map((n) => {
				t.push({
					height: 36,
					key: `group-header-${n.key}`,
					type: "group-header",
					item: /* @__PURE__ */ g(ue, {
						label: n.label,
						itemCount: n.itemCount,
						showOpenChange: qt,
						onOpenChange: (e) => Xt(n.key, e),
						open: Yt[n.key],
						chevronPosition: "leading",
						closedRotation: -90,
						openRotation: 0,
						className: "relative cursor-pointer rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 [&_*]:z-10"
					})
				}), (!qt || Yt[n.key]) && t.push(...Zt(n.records, e).map((e) => ({
					...e,
					key: `${n.key}:${e.key}`,
					item: qt ? /* @__PURE__ */ g("div", {
						className: "pl-5",
						children: e.item
					}) : e.item
				})));
			}), t;
		}
		return Zt(L.records, e);
	}, [
		L.records,
		L.type,
		L.groups,
		Zt,
		Yt,
		Xt,
		qt
	]), $t = () => {
		xt();
	}, $ = o(), en = p(() => Array.from(U.items.values()).filter((e) => e.checked).map((e) => String(e.id)), [U.items]), tn = {
		...E,
		onItemCheckChange: It,
		disabled: b,
		open: k,
		onOpenChange: Q
	}, nn = w ? {
		...tn,
		value: en,
		multiple: !0,
		as: T ? "list" : void 0
	} : {
		...tn,
		value: en[0] ?? "",
		multiple: !1,
		as: T ? "list" : void 0
	}, rn = We ? (e) => {
		let t = We(e);
		t && typeof t.then == "function" ? t.then(() => {
			z(void 0);
		}, (e) => {
			console.warn("[F0Select] onCreate failed:", e);
		}) : z(void 0);
	} : void 0, an = R ? $.t("select.createWithValue", { value: R }) : $.select.create, on = rn && R?.trim() ? /* @__PURE__ */ g("div", {
		className: "flex w-full",
		children: /* @__PURE__ */ g(ee, {
			type: "button",
			variant: "outline",
			onClick: () => rn(R.trim()),
			icon: a,
			label: an
		})
	}) : void 0, sn = /* @__PURE__ */ g(fe, {
		items: Qt,
		fitContentWidth: jt,
		taller: !!S?.filters,
		emptyMessage: Ve ?? (We && R?.trim() ? $.select.createEmptyMessage ?? $.select.noResults : $.select.noResults),
		emptyAction: on,
		bottom: Wt ? null : /* @__PURE__ */ g(ve, {
			actions: Ue,
			showApplyButton: Nt,
			applyLabel: Ce,
			onApply: Ut,
			onCancel: Ht,
			showCancelButton: q
		}),
		top: /* @__PURE__ */ _(De, { children: [/* @__PURE__ */ g(Se, {
			SelectComponent: Fe,
			OneFilterPickerComponent: ot,
			ActiveFiltersChipsComponent: st,
			searchValue: R,
			onSearchChange: Mt,
			searchBoxPlaceholder: Be,
			showSearchBox: x,
			grouping: F.grouping,
			currentGrouping: F.currentGrouping,
			onGroupingChange: F.setCurrentGrouping,
			filters: F.filters,
			currentFilters: F.currentFilters,
			onFiltersChange: (e) => {
				F.setCurrentFilters(e), Ge?.(e);
			},
			asList: T,
			onFiltersOpenChange: Gt,
			showPreview: nt
		}), w && !R && !Wt && /* @__PURE__ */ g(_e, {
			selectedCount: G.selectedItemsCount,
			indeterminate: U.allSelected === "indeterminate" || U.allSelected === !1 && G.selectedItemsCount > 0,
			value: !!U.allSelected,
			onChange: Rt,
			hideCheckbox: O,
			items: K,
			paddingTop: !x && !F.filters
		})] }),
		right: w && !Wt && nt ? /* @__PURE__ */ g(be, {
			items: K,
			onDeselect: (e) => It(e, !1),
			allSelected: U.allSelected,
			onLoadMore: xt,
			isLoadingMore: St
		}) : null,
		forceMinHeight: !!F.filters && nt,
		onScrollBottom: $t,
		scrollMargin: 10,
		isLoadingMore: St,
		isLoading: Ct || Ye,
		showLoadingIndicator: !!y,
		portalContainer: ft
	}), cn = K.map((e) => e.selectedLabel ?? e.label).filter(Boolean).join(", "), ln = (e) => {
		let n = /* @__PURE__ */ g("div", {
			className: t("w-full min-w-0", !!y && "h-full"),
			children: e
		});
		return /* @__PURE__ */ g(s, {
			label: Le ? C : void 0,
			description: cn,
			children: n
		});
	};
	if (T) return /* @__PURE__ */ g(e, {
		dataTestId: at,
		children: /* @__PURE__ */ _("div", {
			className: t("flex w-full max-h-full flex-col gap-2", b && "cursor-not-allowed opacity-50"),
			children: [
				C && !Le && /* @__PURE__ */ g(ne, {
					label: C,
					required: et,
					htmlFor: lt,
					icon: qe,
					disabled: b
				}),
				/* @__PURE__ */ g("div", {
					className: t("flex-1 min-h-0", Ne({ status: Ze ? "error" : Qe?.type ? Qe?.type : "default" })),
					children: /* @__PURE__ */ g(de, {
						...nn,
						children: sn
					})
				}),
				/* @__PURE__ */ g(te, { status: Qe })
			]
		})
	});
	let un = /* @__PURE__ */ _(de, {
		...nn,
		children: [n === "inline" ? /* @__PURE__ */ g(Pe, {
			ref: gt,
			label: C,
			placeholder: r,
			selection: K,
			hasValue: !!M[0]
		}) : /* @__PURE__ */ g(me, {
			ref: gt,
			asChild: !0,
			children: y ? /* @__PURE__ */ g("div", {
				className: "flex h-full w-full items-center justify-between",
				"aria-label": C || r,
				children: y
			}) : /* @__PURE__ */ g(re, {
				label: C,
				error: Ze,
				required: et,
				status: Qe,
				hint: $e,
				icon: Ke,
				labelIcon: qe,
				hideLabel: Le,
				value: w ? Math.max(M.length, G.selectedItemsCount).toString() : M[0] ?? void 0,
				isEmpty: (e) => w ? !e || +(e ?? 0) == 0 : !e,
				onClear: () => {
					J.current = !0, W(), B.current.clear(), l?.(void 0, !1);
				},
				placeholder: r || "",
				disabled: b,
				clearable: Je,
				size: At,
				loadingIndicator: {
					asOverlay: !0,
					offset: 34
				},
				loading: bt || Ye || Ct,
				name: Xe,
				onClickContent: () => {
					Q(!k);
				},
				append: /* @__PURE__ */ g(ge, {
					open: k,
					disabled: b,
					size: At
				}),
				children: /* @__PURE__ */ g("button", {
					className: "flex w-full items-center justify-between",
					"aria-label": C || r,
					onClick: (e) => {
						e.preventDefault();
					},
					children: (w ? M.length > 0 || G.selectedItemsCount > 0 : !!M[0]) && /* @__PURE__ */ g(ye, {
						multiple: w,
						totalSelectedCount: w ? Math.max(M.length, G.selectedItemsCount) : +!!M[0],
						allSelected: U.allSelected,
						selection: K,
						hideItemIcon: !!Ke
					})
				})
			})
		}), k && sn]
	});
	return /* @__PURE__ */ g(e, {
		dataTestId: at,
		children: n === "inline" ? un : ln(un)
	});
}), b = y, Fe = y;
//#endregion
export { b as F0SelectInternal, Fe as F0SelectStatic, Ce as selectSizes, l as selectVariants };
