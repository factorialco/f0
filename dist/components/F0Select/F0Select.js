import { jsx as i, jsxs as Se, Fragment as wt } from "react/jsx-runtime";
import { useDeepCompareEffect as Ft } from "../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { cva as At } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { l as kt } from "../../_virtual/lodash.js";
import { forwardRef as Mt, useId as xt, useContext as Ot, useState as he, useRef as y, useMemo as v, useEffect as ye, useCallback as S } from "react";
import { useDebounceCallback as $t } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import "../../icons/app/Menu.js";
import Dt from "../../icons/app/Plus.js";
import { DataTestIdWrapper as He } from "../../lib/data-testid/index.js";
import { toArray as L } from "../../lib/toArray.js";
import { cn as We } from "../../lib/utils.js";
import { GroupHeader as Rt } from "../../ui/GroupHeader/GroupHeader.js";
import { F0InputField as Vt } from "../F0InputField/F0InputField.js";
import { InputMessages as Et } from "../F0InputField/components/InputMessages.js";
import { Label as Gt } from "../F0InputField/components/Label.js";
import { Select as qe } from "../../ui/Select/components/Select.js";
import { SelectContent as Lt } from "../../ui/Select/components/SelectContent.js";
import { SelectSeparator as Nt } from "../../ui/Select/components/SelectSeparator.js";
import { SelectTrigger as jt } from "../../ui/Select/components/SelectTrigger.js";
import { Arrow as Pt } from "./components/Arrow.js";
import { SelectAll as Tt } from "./components/SelectAll.js";
import { SelectBottomActions as zt } from "./components/SelectBottomActions.js";
import { SelectedItems as Kt } from "./components/SelectedItems.js";
import { SelectionPreview as Bt } from "./components/SelectionPreview.js";
import { SelectItem as Ht } from "./components/SelectItem.js";
import { SelectTopActions as Wt } from "./components/SelectTopActions.js";
import { F0DialogContext as qt } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
import { getDataSourcePaginationType as Jt, useDataSource as Ut } from "../../hooks/datasource/useDataSource.js";
import { useSelectable as _t } from "../../hooks/datasource/useSelectable/useSelectable.js";
import { useGroups as Qt } from "../../hooks/datasource/useGroups.js";
import { useData as Xt } from "../../hooks/datasource/useData.js";
import { useI18n as Yt } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as Zt } from "../F0Button/F0Button.js";
const er = (C, w) => C.type === "separator" || !w || C.label.toLowerCase().includes(w.toLowerCase()), ve = (C) => {
  if (!(C.type === "separator" || C.tag === void 0 || typeof C.tag == "string"))
    return C.tag.type;
}, tr = At({
  base: "flex flex-col rounded-md border border-solid bg-f1-background max-h-full",
  variants: {
    status: {
      default: "border-f1-border-secondary",
      error: "border-f1-border-critical-bold",
      warning: "border-f1-border-warning-bold",
      info: "border-f1-border-info-bold"
    }
  },
  defaultVariants: {
    status: "default"
  }
}), rr = Mt(function({
  placeholder: w,
  onChange: N,
  withApplySelection: Je = !1,
  onChangeSelectedOption: _,
  value: F,
  options: Q = [],
  mapOptions: X,
  children: Y,
  disabled: x,
  open: Ue,
  hideLabel: Ce,
  onOpenChange: _e,
  showSearchBox: j,
  onSearchChange: Qe,
  searchBoxPlaceholder: Xe,
  searchEmptyMessage: Ye,
  size: Ze = "sm",
  actions: et,
  onCreate: Z,
  source: c,
  label: O,
  icon: tt,
  labelIcon: Ie,
  clearable: ee,
  loading: be,
  name: rt,
  error: we,
  status: P,
  hint: nt,
  required: Fe,
  multiple: u,
  portalContainer: Ae,
  asList: A = !1,
  showPreview: te = !1,
  preserveSelectionOnDatasetChange: re = !0,
  dataTestId: ke,
  ...d
}, ot) {
  const it = xt(), T = Ot(qt), st = T.portalContainer && (T.position === "center" || T.position === "fullscreen"), at = Ae !== void 0 ? Ae : st ? T.portalContainer : void 0, lt = "onSelectItems" in d ? d.onSelectItems : void 0, z = "disableSelectAll" in d ? d.disableSelectAll : !1, [$, ct] = he(Ue), ne = y(!1), K = v(
    () => L(d.defaultItem).filter(
      (e) => e !== void 0
    ),
    [d.defaultItem]
  ), B = v(
    // Convert to strings for consistent handling
    () => K.map((e) => String(e.value)),
    [K]
  ), [g, H] = he(() => (L(F) ?? B ?? []).map(String));
  ye(() => {
    const e = (L(F) ?? []).map(String);
    if (!kt.isEqual(e, g ?? [])) {
      const t = L(F) ?? B ?? [];
      H(Array.from(new Set(t.map(String))));
    }
  }, [F]);
  const ut = v(() => {
    if (c && !["infinite-scroll", "no-pagination"].includes(
      Jt(c.dataAdapter)
    ))
      throw new Error(
        "Select component only supports `infinite-scroll` or `no-pagination` pagination types"
      );
    return {
      ...c,
      dataAdapter: c ? c.dataAdapter : {
        fetchData: ({
          search: e
        }) => {
          const t = "searchFn" in d && d.searchFn ? d.searchFn : er;
          return {
            records: Q.filter(
              (r) => t(r, e) ?? !0
            )
          };
        }
      }
    };
  }, [Q, c, "searchFn" in d && d.searchFn]), l = Ut(
    {
      ...ut,
      // Return string IDs for consistent comparison across the selection system
      // This ensures numeric values like 1 match with string IDs like "1"
      selectable: (e) => {
        if (!e)
          return;
        const t = p(e);
        return t.type !== "separator" ? String(t.value) : void 0;
      },
      search: j ? {
        enabled: j,
        sync: !c
      } : void 0
    },
    [Q]
  ), p = S(
    (e) => {
      if (c) {
        if (!X)
          throw new Error("mapOptions is required when using a source");
        return X(e);
      }
      return e;
    },
    [X, c]
  ), {
    data: m,
    isInitialLoading: mt,
    loadMore: Me,
    isLoadingMore: xe,
    isLoading: Oe,
    paginationInfo: ft
  } = Xt(l), { currentSearch: I, setCurrentSearch: W } = l, b = y(/* @__PURE__ */ new Map()), k = v(() => {
    const e = [];
    for (const t of m.records) {
      const r = p(t);
      r.type !== "separator" && e.push([
        String(r.value),
        { item: t, option: r }
      ]);
    }
    return Object.fromEntries(e);
  }, [m, p]), oe = v(() => {
    const e = L(F) ?? B ?? [];
    if (e.length === 0)
      return;
    const t = /* @__PURE__ */ new Map(), r = Array.from(new Set(e));
    for (const o of r) {
      const s = k[String(o)];
      t.set(String(o), {
        id: String(o),
        checked: !0,
        item: s?.item
      });
    }
    return {
      allSelected: !1,
      items: t,
      groups: /* @__PURE__ */ new Map()
    };
  }, [F, B, k]), {
    handleSelectAllItems: $e,
    handleSelectItemChange: D,
    selectedState: f,
    clearSelection: ie,
    selectionMeta: R
  } = _t({
    data: m,
    paginationInfo: ft,
    source: l,
    selectionMode: u ? "multi" : "single",
    onSelectItems: lt,
    selectedState: oe,
    disableSelectAll: z,
    isSearchActive: !!I,
    allPagesSelection: !0,
    resetOnPageChange: !1,
    preserveSelectionOnDatasetChange: re
  }), se = S(
    (e) => ({
      allSelected: e.allSelected,
      items: new Map(e.items),
      groups: new Map(e.groups)
    }),
    []
  ), ae = S(
    (e) => {
      const r = Array.from(e.items.entries()).filter(
        ([, a]) => e.allSelected ? !0 : a.checked
      ).map(([a, n]) => `${a}:${n.checked}`).sort().join(","), s = Array.from(e.groups.entries()).filter(
        ([, a]) => e.allSelected ? !0 : a.checked
      ).map(([a, n]) => `${a}:${n.checked}`).sort().join(",");
      return `${e.allSelected}|${r}|${s}`;
    },
    []
  ), le = y(
    oe ? se(oe) : {
      allSelected: !1,
      items: /* @__PURE__ */ new Map(),
      groups: /* @__PURE__ */ new Map()
    }
  ), V = v(() => {
    const e = [];
    for (const t of g) {
      const r = String(t), o = k[r];
      if (o) {
        b.current.set(r, o.option), e.push(o.option);
        continue;
      }
      const s = b.current.get(r);
      if (s) {
        e.push(s);
        continue;
      }
      const a = K.find(
        (n) => String(n.value) === r
      );
      a && (b.current.set(r, a), e.push(a));
    }
    return e;
  }, [g, k, K]), De = v(() => m.records.some(
    (t) => ve(p(t)) === "status"
  ) || V.some((t) => ve(t) === "status"), [m.records, p, V]) ? "md" : Ze, dt = (e) => {
    W(e), Qe?.(e);
  }, Re = u && !A, h = !!(Je && Re), E = y(!1), Ve = y(!0), ce = y(
    null
  ), Ee = y(null), Ge = S(
    (e, t) => {
      if (!u && !ee && !t && g[0] === e)
        return;
      E.current = !0, D(e, t);
      const r = k[String(e)];
      r && (t ? b.current.set(String(e), r.option) : b.current.delete(String(e)), h || _?.(r.option, t));
    },
    [
      h,
      _,
      k,
      D,
      u,
      ee,
      g
    ]
  ), ue = S(
    (e) => {
      E.current = !0, $e(e);
    },
    [$e]
  ), q = S(() => {
    const e = Array.from(f.items.values() || []).filter(
      (n) => n.checked
    ), t = (n) => n ? c ? n : n.item : void 0, r = e.map((n) => n.item).filter(
      (n) => n !== void 0
    ), o = r.map(t).filter((n) => n !== void 0), s = r.map((n) => p(n));
    return {
      values: e.map((n) => {
        if (n.item) {
          const M = p(n.item);
          return M.type !== "separator" ? M.value : String(n.id);
        }
        return String(n.id);
      }),
      originalItems: o,
      options: s
    };
  }, [p, f.items, c]);
  Ft(() => {
    if (!E.current) {
      Ve.current && (Ve.current = !1);
      return;
    }
    !u && !$ && !A && W(void 0);
    const e = (t) => t ? c ? t : t.item : void 0;
    if (u) {
      const { values: t, originalItems: r, options: o } = q();
      H(Array.from(new Set(t.map(String))));
      const s = t.map(String).sort().join("\0");
      if (Ee.current === s)
        return;
      h || (Ee.current = s, N?.(t, r, o));
    } else {
      const r = Array.from(
        f.items.values() || []
      ).filter((bt) => bt.checked)[0], o = r?.item, s = e(o), a = o ? p(o) : void 0, n = a ? a.value : r ? String(r.id) : void 0;
      H(n !== void 0 ? [String(n)] : []);
      const M = n === void 0 ? void 0 : String(n);
      if (ce.current !== null && ce.current.value === M)
        return;
      h || (ce.current = { value: M }, N?.(n, s, a));
    }
  }, [
    q,
    h,
    p,
    f,
    c
  ]);
  const me = $t(
    (e) => {
      _e?.(e), ct(e), e || (ne.current = !1);
    },
    100
  ), Le = y(
    me
  );
  Le.current = me, ye(() => () => {
    Le.current.cancel();
  }, []);
  const fe = S(() => {
    const e = le.current;
    if (ie(), e.allSelected) {
      ue(!0);
      for (const r of e.items.values())
        r.checked || D(r.item ?? r.id, !1);
      return;
    }
    const t = Array.from(e.items.values()).filter(
      (r) => r.checked
    );
    for (const r of t)
      D(r.item ?? r.id, !0);
  }, [ie, ue, D]), J = (e) => {
    !e && h && !ne.current && fe(), me(e);
  }, pt = S(() => {
    fe();
  }, [fe]), gt = S(() => {
    if (h) {
      const e = se(f), { values: t, originalItems: r, options: o } = q();
      ae(e) !== ae(le.current) && (le.current = e, N?.(t, r, o)), ne.current = !0;
    }
    J(!1);
  }, [
    se,
    ae,
    q,
    J,
    h,
    N,
    f
  ]), [de, St] = he(!1), Ne = y(l.currentFilters);
  ye(() => {
    const e = JSON.stringify(Ne.current), t = JSON.stringify(l.currentFilters);
    e !== t && (Ne.current = l.currentFilters, !z && !re && (b.current.clear(), H([]), E.current = !0));
  }, [
    l.currentFilters,
    z,
    re
  ]);
  const U = l.grouping?.collapsible ?? !1, ht = l.grouping?.defaultOpenGroups, { openGroups: pe, setGroupOpen: je } = Qt(
    m?.type === "grouped" ? m.groups : [],
    ht
  ), ge = S(
    (e, t) => e.map((r, o) => {
      const s = p(r), a = ve(s);
      if (a !== void 0 && (t.add(a), t.size > 1))
        throw new Error(
          `[F0Select] All options must use the same tag type, but multiple were provided: ${Array.from(
            t
          ).map((n) => `"${n}"`).join(", ")}.`
        );
      return s.type === "separator" ? {
        height: 1,
        key: `separator-${o}`,
        type: "separator",
        item: /* @__PURE__ */ i(
          Nt,
          {
            className: "mb-1 mt-2"
          },
          `separator-${o}`
        )
      } : {
        height: s.description ? 64 : 32,
        key: `item-${s.value}`,
        type: "item",
        item: /* @__PURE__ */ i(
          Ht,
          {
            item: s
          },
          String(s.value)
        ),
        // Convert to string to ensure consistent comparison with selectedItemsValues
        // which also converts to strings (line 623)
        value: String(s.value)
      };
    }),
    [p]
  ), yt = v(() => {
    const e = /* @__PURE__ */ new Set();
    if (m.type === "grouped") {
      const t = [];
      return m.groups.map((r) => {
        t.push({
          height: 36,
          key: `group-header-${r.key}`,
          type: "group-header",
          item: /* @__PURE__ */ i(
            Rt,
            {
              label: r.label,
              itemCount: r.itemCount,
              showOpenChange: U,
              onOpenChange: (o) => je(r.key, o),
              open: pe[r.key],
              chevronPosition: "leading",
              closedRotation: -90,
              openRotation: 0,
              className: "relative cursor-pointer rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 [&_*]:z-10"
            }
          )
        }), (!U || pe[r.key]) && t.push(
          ...ge(r.records, e).map((o) => ({
            ...o,
            key: `${r.key}:${o.key}`,
            item: U ? /* @__PURE__ */ i("div", { className: "pl-5", children: o.item }) : o.item
          }))
        );
      }), t;
    }
    return ge(m.records, e);
  }, [
    m.records,
    m.type,
    m.groups,
    ge,
    pe,
    je,
    U
  ]), vt = () => {
    Me();
  }, G = Yt(), Pe = v(() => Array.from(f.items.values()).filter((e) => e.checked).map((e) => String(e.id)), [f.items]), Te = {
    ...d,
    onItemCheckChange: Ge,
    disabled: x,
    open: $,
    onOpenChange: J
  }, ze = u ? {
    ...Te,
    value: Pe,
    multiple: !0,
    as: A ? "list" : void 0
  } : {
    ...Te,
    // Use empty string instead of undefined to maintain controlled component state
    value: Pe[0] ?? "",
    multiple: !1,
    as: A ? "list" : void 0
  }, Ke = Z ? (e) => {
    const t = Z(e);
    t && typeof t.then == "function" ? t.then(
      () => {
        W(void 0);
      },
      (r) => {
        console.warn("[F0Select] onCreate failed:", r);
      }
    ) : W(void 0);
  } : void 0, Ct = I ? G.t("select.createWithValue", { value: I }) : G.select.create, It = Ke && I?.trim() ? /* @__PURE__ */ i("div", { className: "flex w-full", children: /* @__PURE__ */ i(
    Zt,
    {
      type: "button",
      variant: "outline",
      onClick: () => Ke(I.trim()),
      icon: Dt,
      label: Ct
    }
  ) }) : void 0, Be = /* @__PURE__ */ i(
    Lt,
    {
      items: yt,
      taller: !!c?.filters,
      emptyMessage: Ye ?? (Z && I?.trim() ? G.select.createEmptyMessage ?? G.select.noResults : G.select.noResults),
      emptyAction: It,
      bottom: de ? null : /* @__PURE__ */ i(
        zt,
        {
          actions: et,
          showApplyButton: Re,
          onApply: gt,
          onCancel: pt,
          showCancelButton: h
        }
      ),
      top: /* @__PURE__ */ Se(wt, { children: [
        /* @__PURE__ */ i(
          Wt,
          {
            searchValue: I,
            onSearchChange: dt,
            searchBoxPlaceholder: Xe,
            showSearchBox: j,
            grouping: l.grouping,
            currentGrouping: l.currentGrouping,
            onGroupingChange: l.setCurrentGrouping,
            filters: l.filters,
            currentFilters: l.currentFilters,
            onFiltersChange: l.setCurrentFilters,
            asList: A,
            onFiltersOpenChange: St,
            showPreview: te
          }
        ),
        u && !I && !de && /* @__PURE__ */ i(
          Tt,
          {
            selectedCount: R.selectedItemsCount,
            indeterminate: f.allSelected === "indeterminate" || f.allSelected === !1 && R.selectedItemsCount > 0,
            value: !!f.allSelected,
            onChange: ue,
            hideCheckbox: z,
            items: V,
            paddingTop: !j && !l.filters
          }
        )
      ] }),
      right: u && !de && te ? /* @__PURE__ */ i(
        Bt,
        {
          items: V,
          onDeselect: (e) => Ge(e, !1),
          allSelected: f.allSelected,
          onLoadMore: Me,
          isLoadingMore: xe
        }
      ) : null,
      forceMinHeight: !!l.filters && te,
      onScrollBottom: vt,
      scrollMargin: 10,
      isLoadingMore: xe,
      isLoading: Oe || be,
      showLoadingIndicator: !!Y,
      portalContainer: at
    }
  );
  return A ? /* @__PURE__ */ i(He, { dataTestId: ke, children: /* @__PURE__ */ Se(
    "div",
    {
      className: We(
        "flex w-full max-h-full flex-col gap-2",
        x && "cursor-not-allowed opacity-50"
      ),
      children: [
        O && !Ce && /* @__PURE__ */ i(
          Gt,
          {
            label: O,
            required: Fe,
            htmlFor: it,
            icon: Ie,
            disabled: x
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: We(
              "flex-1 min-h-0",
              tr({
                status: we ? "error" : P?.type ? P?.type : "default"
              })
            ),
            children: /* @__PURE__ */ i(qe, { ...ze, children: Be })
          }
        ),
        /* @__PURE__ */ i(Et, { status: P })
      ]
    }
  ) }) : /* @__PURE__ */ i(He, { dataTestId: ke, children: /* @__PURE__ */ Se(qe, { ...ze, children: [
    /* @__PURE__ */ i(jt, { ref: ot, asChild: !0, children: Y ? /* @__PURE__ */ i(
      "div",
      {
        className: "flex w-full items-center justify-between",
        "aria-label": O || w,
        children: Y
      }
    ) : /* @__PURE__ */ i(
      Vt,
      {
        label: O,
        error: we,
        required: Fe,
        status: P,
        hint: nt,
        icon: tt,
        labelIcon: Ie,
        hideLabel: Ce,
        value: u ? (
          // For multiple: use count of selected items
          Math.max(
            g.length,
            R.selectedItemsCount
          ).toString()
        ) : (
          // For single: use the selected value directly
          g[0] ?? void 0
        ),
        isEmpty: (e) => u ? !e || +(e ?? 0) == 0 : !e,
        onClear: () => {
          E.current = !0, ie(), b.current.clear(), _?.(void 0, !1);
        },
        placeholder: w || "",
        disabled: x,
        clearable: ee,
        size: De,
        loadingIndicator: {
          asOverlay: !0,
          offset: 34
        },
        loading: mt || be || Oe,
        name: rt,
        onClickContent: () => {
          J(!$);
        },
        append: /* @__PURE__ */ i(
          Pt,
          {
            open: $,
            disabled: x,
            size: De
          }
        ),
        children: /* @__PURE__ */ i(
          "button",
          {
            className: "flex w-full items-center justify-between",
            "aria-label": O || w,
            onClick: (e) => {
              e.preventDefault();
            },
            children: (u ? g.length > 0 || R.selectedItemsCount > 0 : !!g[0]) && /* @__PURE__ */ i(
              Kt,
              {
                multiple: u,
                totalSelectedCount: u ? Math.max(
                  g.length,
                  R.selectedItemsCount
                ) : g[0] ? 1 : 0,
                allSelected: f.allSelected,
                selection: V
              }
            )
          }
        )
      }
    ) }),
    $ && Be
  ] }) });
}), Nr = rr;
export {
  Nr as F0Select
};
