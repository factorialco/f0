import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { useEventEmitter as n } from "../OneDataCollection/useEventEmitter.js";
import { RenderErrorBoundary as r } from "../../lib/RenderErrorBoundary.js";
import { collectNestedFilterKeys as i } from "./filterTypes/InFilter/components/option-utils.js";
import { FiltersChipsList as a } from "./components/FiltersChipsList.js";
import { FiltersControls as o } from "./components/FiltersControls.js";
import { isPresetSelected as s } from "./internal/isPresetSelected.js";
import { FiltersPresets as c } from "./components/FiltersPresets.js";
import { FiltersContext as l } from "./context.js";
import { FilterPickerStateModeContext as u } from "./internal/stateMode.js";
import { useContext as d, useEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/OneFilterPicker.tsx
var y = ({ filters: e, value: t, children: r, presetsLoading: a = !1, mode: o = "default", onOpenChange: s, ...c }) => {
	let p = d(u), g = m(t), { emitFilterChange: v, emitPresetClick: y } = n({ defaultFilters: g.current }), [b, x] = h(!1);
	f(() => {
		s?.(b);
	}, [b, s]);
	let [S, C] = h(t);
	f(() => {
		C(t ?? {});
	}, [JSON.stringify(e), JSON.stringify(t)]);
	let w = p === "controlled" ? t : S, T = (t) => {
		let n = { ...w };
		delete n[t];
		let r = e?.[t];
		r?.type === "in" && r.options && i(r.options).forEach((e) => {
			delete n[e];
		}), p === "optimistic" && C(n), c.onChange(n);
	}, E = (e) => {
		p === "optimistic" && C(e), c.onChange(e);
	};
	return /* @__PURE__ */ _(l.Provider, {
		value: {
			...c,
			mode: o,
			presets: c.presets,
			presetsLoading: a,
			value: w,
			filters: e,
			removeFilterValue: T,
			setFiltersValue: (e) => E(e),
			isFiltersOpen: b,
			setIsFiltersOpen: x,
			emitFilterChange: v,
			emitPresetClick: y
		},
		children: r
	});
};
y.displayName = "OneFilterPicker.Root";
var b = () => {
	let { value: e, filters: t, isFiltersOpen: n, setIsFiltersOpen: r, setFiltersValue: i, presets: a, emitFilterChange: s, mode: c, displayCounter: u } = d(l), f = t ? Object.fromEntries(Object.entries(t).filter(([e, t]) => !t.hideSelector)) : void 0;
	return !f || Object.keys(f).length === 0 ? null : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(o, {
		filters: f,
		allFilters: t,
		value: e,
		onChange: (e) => {
			s(e), i(e);
		},
		onOpenChange: r,
		isOpen: n,
		hideLabel: !!a || c === "simple",
		mode: c,
		displayCounter: u
	}), !!a?.length && /* @__PURE__ */ _("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ _("div", { className: "mx-2 h-4 w-px bg-f1-background-secondary-hover" })
	})] });
};
b.displayName = "OneFilterPicker.Controls";
var x = () => {
	let { presets: e, presetsLoading: t, value: n, setFiltersValue: i, emitPresetClick: a, selectedPresetId: o, onSelectPreset: s, editablePresetIds: u, onEditPreset: f, presetActionState: p, onPresetAction: m } = d(l);
	return e && /* @__PURE__ */ _(r, {
		onError: (e) => console.error("[f0-react] FiltersPresets failed to render; hiding the presets row", e),
		children: /* @__PURE__ */ _(c, {
			presets: e,
			presetsLoading: t,
			value: n,
			onPresetsChange: (e) => {
				a(e), i(e);
			},
			selectedPresetId: o,
			onSelectPreset: s ? (t) => {
				let n = e?.find((e, n) => (e.id ?? `${e.label}-${n}`) === t);
				n && a(n.filter), s(t);
			} : void 0,
			editablePresetIds: u,
			onEditPreset: f,
			presetActionState: p,
			onPresetAction: m
		})
	});
};
x.displayName = "Filters.Presets";
var S = () => {
	let { value: e, filters: t, setIsFiltersOpen: n, presets: r, removeFilterValue: i, setFiltersValue: o, resultCount: c, onSelectPreset: u } = d(l), f = p(() => u || !r?.length ? !1 : r.some((t) => s(t, e)), [
		r,
		e,
		u
	]);
	return t && /* @__PURE__ */ _(a, {
		filters: t,
		value: e,
		onFilterSelect: () => n(!0),
		onFilterRemove: i,
		onClearAll: () => o({}),
		hideChips: f,
		resultCount: c
	});
};
S.displayName = "OneFilterPicker.ChipsList";
var C = (n) => {
	let { dataTestId: r, ...i } = n;
	return /* @__PURE__ */ _(e, {
		dataTestId: r,
		children: /* @__PURE__ */ v(y, {
			...i,
			children: [/* @__PURE__ */ v("div", {
				className: t("flex items-center justify-between gap-4", !i.filters && "justify-end"),
				children: [i.filters && /* @__PURE__ */ v("div", {
					className: "flex min-w-0 flex-1 gap-1",
					children: [/* @__PURE__ */ _(b, {}), /* @__PURE__ */ _(x, {})]
				}), i.children && /* @__PURE__ */ _("div", {
					className: "flex shrink-0 items-center gap-2",
					children: i.children
				})]
			}), (!i.mode || i.mode === "default") && /* @__PURE__ */ _(S, {})]
		})
	});
};
C.displayName = "OneFilterPicker";
var w = C;
//#endregion
export { S as ChipsList, b as Controls, w as OneFilterPicker, x as Presets, y as Root };
