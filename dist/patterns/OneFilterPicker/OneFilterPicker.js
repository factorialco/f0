import { jsx as i, jsxs as h, Fragment as w } from "react/jsx-runtime";
import { useRef as E, useState as y, useEffect as v, useContext as O, useMemo as I } from "react";
import { useEventEmitter as R } from "../OneDataCollection/useEventEmitter.js";
import { DataTestIdWrapper as A } from "../../lib/data-testid/index.js";
import { cn as K } from "../../lib/utils.js";
import { collectNestedFilterKeys as $ } from "./filterTypes/InFilter/components/option-utils.js";
import { FiltersChipsList as D } from "./components/FiltersChipsList.js";
import { FiltersControls as J } from "./components/FiltersControls.js";
import { FiltersPresets as T } from "./components/FiltersPresets.js";
import { FiltersContext as C } from "./context.js";
import { isPresetSelected as _ } from "./internal/isPresetSelected.js";
const N = ({
  filters: t,
  value: s,
  children: e,
  presetsLoading: l = !1,
  mode: o = "default",
  onOpenChange: n,
  ...r
}) => {
  const c = E(s), { emitFilterChange: m, emitPresetClick: d } = R({
    defaultFilters: c.current
  }), [F, f] = y(!1);
  v(() => {
    n?.(F);
  }, [F, n]);
  const [p, P] = y(s);
  v(() => {
    P(s ?? {});
  }, [JSON.stringify(t), JSON.stringify(s)]);
  const b = (a) => {
    const u = { ...p };
    delete u[a];
    const g = t?.[a];
    g?.type === "in" && g.options && $(g.options).forEach((S) => {
      delete u[S];
    }), P(u), r.onChange(u);
  }, j = (a) => {
    P(a), r.onChange(a);
  };
  return /* @__PURE__ */ i(
    C.Provider,
    {
      value: {
        ...r,
        mode: o,
        presets: r.presets,
        presetsLoading: l,
        value: p,
        filters: t,
        removeFilterValue: b,
        setFiltersValue: (a) => j(a),
        isFiltersOpen: F,
        setIsFiltersOpen: f,
        emitFilterChange: m,
        emitPresetClick: d
      },
      children: e
    }
  );
};
N.displayName = "OneFilterPicker.Root";
const k = () => {
  const {
    value: t,
    filters: s,
    isFiltersOpen: e,
    setIsFiltersOpen: l,
    setFiltersValue: o,
    presets: n,
    emitFilterChange: r,
    mode: c,
    displayCounter: m
  } = O(C), d = s ? Object.fromEntries(
    Object.entries(s).filter(([f, p]) => !p.hideSelector)
  ) : void 0, F = (f) => {
    r(f), o(f);
  };
  return !d || Object.keys(d).length === 0 ? null : /* @__PURE__ */ h(w, { children: [
    /* @__PURE__ */ i(
      J,
      {
        filters: d,
        value: t,
        onChange: F,
        onOpenChange: l,
        isOpen: e,
        hideLabel: !!n || c === "simple",
        mode: c,
        displayCounter: m
      }
    ),
    !!n?.length && /* @__PURE__ */ i("div", { className: "flex items-center", children: /* @__PURE__ */ i("div", { className: "mx-2 h-4 w-px bg-f1-background-secondary-hover" }) })
  ] });
};
k.displayName = "OneFilterPicker.Controls";
const x = () => {
  const { presets: t, presetsLoading: s, value: e, setFiltersValue: l, emitPresetClick: o } = O(C);
  return t && /* @__PURE__ */ i(
    T,
    {
      presets: t,
      presetsLoading: s,
      value: e,
      onPresetsChange: (r) => {
        o(r), l(r);
      }
    }
  );
};
x.displayName = "Filters.Presets";
const V = () => {
  const {
    value: t,
    filters: s,
    setIsFiltersOpen: e,
    presets: l,
    removeFilterValue: o,
    setFiltersValue: n,
    resultCount: r
  } = O(C), c = I(() => l?.length ? l.some((m) => _(m, t)) : !1, [l, t]);
  return s && /* @__PURE__ */ i(
    D,
    {
      filters: s,
      value: t,
      onFilterSelect: () => e(!0),
      onFilterRemove: o,
      onClearAll: () => n({}),
      hideChips: c,
      resultCount: r
    }
  );
};
V.displayName = "OneFilterPicker.ChipsList";
const L = (t) => {
  const { dataTestId: s, ...e } = t;
  return /* @__PURE__ */ i(A, { dataTestId: s, children: /* @__PURE__ */ h(N, { ...e, children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: K(
          "flex items-center justify-between gap-4",
          !e.filters && "justify-end"
        ),
        children: [
          e.filters && /* @__PURE__ */ h("div", { className: "flex min-w-0 flex-1 gap-1", children: [
            /* @__PURE__ */ i(k, {}),
            /* @__PURE__ */ i(x, {})
          ] }),
          e.children && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: e.children })
        ]
      }
    ),
    (!e.mode || e.mode === "default") && /* @__PURE__ */ i(V, {})
  ] }) });
};
L.displayName = "OneFilterPicker";
const ee = L;
export {
  V as ChipsList,
  k as Controls,
  ee as OneFilterPicker,
  x as Presets,
  N as Root
};
