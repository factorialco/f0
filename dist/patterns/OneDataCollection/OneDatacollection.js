import { jsxs as P, jsx as s, Fragment as je } from "react/jsx-runtime";
import { useDeepCompareEffect as Ct } from "../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as a, useMemo as n, useRef as j, useEffect as K, useCallback as Re } from "react";
import { useLayout as At } from "../../layouts/LayoutProvider.js";
import { useDebounceBoolean as Le } from "../../lib/useDebounceBoolean.js";
import { cn as ce } from "../../lib/utils.js";
import { OneFilterPicker as bt } from "../OneFilterPicker/OneFilterPicker.js";
import { Spinner as Ft } from "../../ui/Spinner/index.js";
import { getPrimaryActions as xt, filterActions as wt, getSecondaryActions as It, MAX_EXPANDED_ACTIONS as Vt } from "./actions.js";
import { CollectionActions as kt } from "./components/CollectionActions/CollectionActions.js";
import { useDataCollectionStorage as Nt } from "./hooks/useDataColectionStorage/useDataCollectionStorage.js";
import { useEmptyState as Mt } from "./hooks/useEmptyState.js";
import { useExportAction as Tt } from "./hooks/useExportAction.js";
import { useDataCollectionUrlSync as Dt } from "./hooks/useDataCollectionUrlSync.js";
import { usePerVisualizationFilters as Pt } from "./hooks/usePerVisualizationFilters.js";
import { useDataCollectionSettings as jt } from "./Settings/SettingsProvider.js";
import { useEventEmitter as Rt } from "./useEventEmitter.js";
import { TotalItemsSummary as Oe } from "./components/TotalItemsSummary/TotalItemsSummary.js";
import { NavigationFilters as ze } from "./components/NavigationFilters/NavigationFilters.js";
import { motion as Lt } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { Search as Ot } from "./components/Search/Search.js";
import { Settings as zt } from "./Settings/Settings.js";
import { VisualizationRenderer as Et } from "./visualizations/collection/VisualizationRenderer.js";
import { OneDataCollectionActionBar as Bt } from "./components/ActionBar/OneDataCollectionActionBar.js";
import { useI18n as Gt } from "../../lib/providers/i18n/i18n-provider.js";
import { OneEmptyState as _t } from "../../components/OneEmptyState/OneEmptyState.js";
const Ut = 1500, hs = ({
  source: f,
  visualizations: i,
  onSelectItems: Ee,
  onBulkAction: Be,
  autoManageBulkActionStatus: Ge = !1,
  bulkActionStatus: l,
  onStateChange: _e,
  emptyStates: Ue,
  fullHeight: X,
  storage: H,
  id: R,
  disableUrlParams: $e,
  tmpFullWidth: q,
  csvExport: y
}) => {
  const {
    // Filters
    filters: ue,
    currentFilters: me,
    setCurrentFilters: fe,
    presets: Ke,
    presetsLoading: Xe,
    // Navigation filter
    currentNavigationFilters: h,
    navigationFilters: L,
    setCurrentNavigationFilters: J,
    // Search
    search: S,
    currentSearch: v,
    setCurrentSearch: O,
    //
    isLoading: He,
    // Actions
    primaryActions: pe,
    primaryActionsLabel: qe,
    secondaryActions: C,
    // Summary
    totalItemSummary: Q,
    currentGrouping: z,
    setCurrentGrouping: de,
    grouping: A,
    currentSortings: p,
    setCurrentSortings: Y,
    sortings: E
  } = f, [c, Z] = a(0), {
    effectiveFilters: k,
    effectivePresets: Je,
    currentFilters: d,
    setCurrentFilters: b,
    allVisualizationFilters: W,
    setAllVisualizationFilters: Qe,
    hasPerVisualizationFilters: N
  } = Pt({
    sourceFilters: ue,
    sourcePresets: Ke,
    sourceCurrentFilters: me,
    sourceSetCurrentFilters: fe,
    visualizations: i,
    currentVisualization: c,
    storageKey: R
  }), ge = n(() => N ? {
    ...f,
    currentFilters: d,
    setCurrentFilters: b
  } : f, [
    f,
    N,
    d,
    b
  ]), ye = j(p), { emitSortingChange: he } = Rt({
    defaultSorting: ye.current,
    currentVisualization: N ? c : void 0
  });
  K(() => {
    he(p);
  }, [he, p]);
  const Se = n(
    () => xt(pe),
    [pe]
  ), F = n(
    () => wt(It(C)),
    [C]
  ), Ye = y && typeof y == "object" ? y.filename : R ? `${R}_export` : void 0, B = Tt({
    source: ge,
    currentVisualization: i[c],
    filename: Ye,
    enabled: !!y
  }), G = n(
    () => Math.min(
      C && "expanded" in C && C.expanded || 0,
      Vt
    ),
    [C]
  ), Ze = n(
    () => F[0]?.items.slice(0, G) || [],
    [F, G]
  ), We = n(() => {
    const e = F[0] ?? { items: [] }, t = [
      {
        ...e,
        items: e.items?.slice(G) || []
      },
      ...F.slice(1)
    ];
    return y && t.push({ items: [B] }), t.filter((r) => r.items.length > 0);
  }, [
    F,
    G,
    y,
    B.loading,
    B.disabled,
    B.onClick
  ]), ee = Se?.length > 0 || F?.length > 0 || !!y, [te, et] = a(void 0), ve = At(), [u, Ce] = a(void 0), Ae = Re((e) => {
    if (!e)
      return [];
    const t = [];
    let r = [];
    for (const o of e)
      "type" in o && o.type === "separator" ? (t.push({ items: r }), r = []) : r.push(o);
    return r.length > 0 && t.push({ items: r }), t;
  }, []), x = n(() => {
    if (u)
      return "warningMessage" in u ? {
        warningMessage: u.warningMessage
      } : {
        primary: Ae(u.primary ?? []),
        secondary: (u?.secondary ?? []).filter(
          (e) => !("type" in e && e.type === "separator")
        )
      };
  }, [u, Ae]), [tt, be] = a(!1), [st, rt] = a(0), [nt, ot] = a(!1), [it, M] = a("idle"), [Fe, se] = a(!1), xe = j(null), m = j(null), we = (e) => l !== void 0 && l !== "idle" && !(l === "success" && e), re = we(
    Fe
  ) ? l : it, at = we(
    Fe
  ), Ie = j(!1);
  Ie.current = at;
  const lt = l !== void 0, ne = Re(
    (e, t = !0) => {
      m.current && clearTimeout(m.current), m.current = setTimeout(() => {
        t && be(!1), e(), m.current = null;
      }, Ut);
    },
    // setShowActionBar is a stable setState ref — safe to omit from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  K(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const Ve = j(void 0);
  K(() => {
    const e = Ve.current;
    Ve.current = l, l === "success" && e !== "success" ? (se(!1), ne(() => {
      te?.(), se(!0);
    })) : e === "success" && l !== "success" && (m.current && (clearTimeout(m.current), m.current = null), se(!1));
  }, [l, te, ne]);
  const ke = Gt(), _ = n(() => Q === !0 ? (e) => e !== void 0 ? `${e} ${ke.collections.itemsCount}` : null : Q || void 0, [Q, ke]), ct = (e, t, r) => {
    Ee?.(e, t, r), be(
      !!e.allSelected || e.itemsStatus.some((g) => g.checked)
    ), M((g) => g === "error" ? "idle" : g), rt(e.selectedCount), et(() => t), ot(e.allSelected === !0);
    const o = f.bulkActions ? f.bulkActions(e) : void 0, Pe = (g) => {
      if ("type" in g && g.type === "separator")
        return { type: "separator" };
      const D = g;
      return {
        ...D,
        onClick: () => {
          const le = Be?.(
            D.id,
            e,
            t
          );
          if (!(Ge && le !== void 0 && typeof le?.then == "function")) {
            !D.keepSelection && !lt && t();
            return;
          }
          Ie.current || (M("loading"), le.then(
            () => {
              M("success"), ne(() => {
                D.keepSelection || t(), M("idle");
              }, !D.keepSelection);
            },
            () => {
              M("error"), xe.current?.wiggle({ errorHighlight: !0 });
            }
          ));
        }
      };
    };
    o && ("primary" in o ? Ce({
      primary: (o?.primary || []).map(Pe),
      secondary: (o?.secondary || []).map(Pe)
    }) : "warningMessage" in o && Ce({ warningMessage: o.warningMessage }));
  }, [U, ut] = a(void 0), [mt, ft] = a(!0), oe = n(
    () => [S?.enabled, i.length > 1].some(Boolean),
    [S, i]
  ), { emptyState: w, setEmptyStateType: T } = Mt(Ue, {
    retry: () => {
      T(!1), b({ ...d });
    },
    clearFilters: () => {
      T(!1), b({}), O(void 0);
    }
  }), pt = (e, t, r) => e === 0 ? Object.keys(t).length > 0 || r ? "no-results" : "no-data" : !1, dt = ({
    totalItems: e,
    filters: t,
    isInitialLoading: r,
    search: o
  }) => {
    r || (ft(r), ut(e), T(pt(e, t, o)));
  }, gt = (e) => {
    T(
      "error",
      e.cause instanceof Error ? e.cause.message : e.message
    );
  }, yt = Le({
    value: !!Xe,
    delay: 100
  });
  K(() => {
    T(!1);
  }, [
    d,
    v,
    h,
    f.dataAdapter
  ]);
  const Ne = n(() => _ !== void 0, [_]), Me = _ === void 0 ? null : U !== void 0 ? _(U) : null, { settings: ie, setSettings: ht } = jt(), { storageReady: Te } = Nt(
    R,
    typeof H == "object" ? H?.features ?? ["*"] : ["*"],
    {
      settings: {
        value: ie,
        setValue: ht
      },
      sortings: {
        value: p,
        setValue: Y
      },
      grouping: {
        value: z,
        setValue: de
      },
      navigationFilters: {
        value: h,
        setValue: J
      },
      visualization: {
        value: c,
        setValue: Z
      },
      search: {
        value: v,
        setValue: O
      },
      filters: {
        value: me,
        setValue: fe
      },
      ...N ? {
        visualizationFilters: {
          value: W,
          setValue: Qe
        }
      } : {}
    },
    H === !1
  );
  Dt({
    disabled: !!$e,
    storageReady: Te,
    filtersDefinition: ue,
    filters: d,
    search: v,
    sortings: p,
    visualization: c,
    visualizationKeys: i.map((e) => e.type),
    setFilters: b,
    setSearch: O,
    setSortings: Y,
    setVisualization: Z
  });
  const De = Le({
    value: mt && Te,
    delay: 100
  });
  Ct(() => {
    _e?.({
      filters: d,
      sortings: p,
      visualization: c,
      grouping: z,
      search: v,
      navigationFilters: h,
      settings: ie,
      ...N ? { visualizationFilters: W } : {}
    });
  }, [
    d,
    v,
    h,
    p,
    c,
    z,
    ie,
    W
  ]);
  const ae = n(() => {
    const e = A ? Object.keys(A.groupBy).length + (A.mandatory ? 1 : 0) : 0, t = Object.values(i).find(
      (o) => o.type === "table"
    ), r = !!t && (!!t.options?.allowColumnHiding || !!t.options?.allowColumnReordering);
    return i && i.length > 1 || e > 0 && !A?.hideSelector || E && Object.keys(E).length > 0 || r;
  }, [i, A, E]), $ = n(() => oe || ee || ae || S && S.enabled, [oe, ee, ae, S]), I = n(() => Ne ? k ? "top" : "bottom" : !1, [k, Ne]), V = n(() => L ? $ ? "top" : "bottom" : !1, [L, $]), St = n(() => I === "top" || V === "top", [I, V]), vt = n(() => k || $ || V === "bottom" || I === "bottom", [
    k,
    $,
    V,
    I
  ]);
  return /* @__PURE__ */ P(
    "div",
    {
      className: ce(
        "flex flex-col gap-4",
        ve === "standard" && "-mx-[23px]",
        X && "h-full flex-1"
      ),
      style: {
        width: ve === "standard" && !q ? "calc(100% + 46px)" : "100%"
        // To counteract the -mx-[23px] from the layout,
      },
      children: [
        St && /* @__PURE__ */ P("div", { className: "border-f1-border-primary px-page flex gap-4", children: [
          I === "top" && /* @__PURE__ */ s(
            Oe,
            {
              isReady: !De,
              totalItemSummaryResult: Me
            }
          ),
          /* @__PURE__ */ s("div", { className: "flex flex-1 flex-shrink justify-end", children: V === "top" && /* @__PURE__ */ s(
            ze,
            {
              navigationFilters: L,
              currentNavigationFilters: h,
              onChangeNavigationFilters: J
            }
          ) })
        ] }),
        vt && /* @__PURE__ */ P(
          "div",
          {
            className: ce(
              "flex flex-row gap-4 px-page",
              X && "max-h-full",
              q && "px-0"
            ),
            children: [
              I === "bottom" && /* @__PURE__ */ s(
                Oe,
                {
                  isReady: !De,
                  totalItemSummaryResult: Me
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex-1", children: /* @__PURE__ */ P(
                bt,
                {
                  filters: k,
                  value: d,
                  presets: Je,
                  presetsLoading: yt,
                  onChange: (e) => b(e),
                  resultCount: U,
                  children: [
                    He && /* @__PURE__ */ s(
                      Lt.div,
                      {
                        className: "flex h-8 w-8 items-center justify-center",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: {
                          opacity: 0
                        },
                        children: /* @__PURE__ */ s(Ft, { size: "small" })
                      }
                    ),
                    S && /* @__PURE__ */ s(Ot, { onChange: O, value: v }),
                    ae && /* @__PURE__ */ s(
                      zt,
                      {
                        visualizations: i,
                        currentVisualization: c,
                        onVisualizationChange: Z,
                        grouping: A,
                        currentGrouping: z,
                        onGroupingChange: de,
                        sortings: E,
                        currentSortings: p,
                        defaultSortings: ye.current,
                        onSortingsChange: Y
                      }
                    ),
                    ee && /* @__PURE__ */ P(je, { children: [
                      oe && /* @__PURE__ */ s("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
                      /* @__PURE__ */ s(
                        kt,
                        {
                          primaryActions: Se,
                          primaryActionsLabel: qe,
                          secondaryActions: Ze,
                          otherActions: We
                        }
                      )
                    ] }),
                    V === "bottom" && /* @__PURE__ */ s(
                      ze,
                      {
                        navigationFilters: L,
                        currentNavigationFilters: h,
                        onChangeNavigationFilters: J
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: ce(
              w && "hidden",
              X && "h-full min-h-0 flex-1"
            ),
            children: /* @__PURE__ */ s(
              Et,
              {
                visualization: i[c],
                source: ge,
                onSelectItems: ct,
                onLoadData: dt,
                onLoadError: gt,
                tmpFullWidth: q
              }
            )
          }
        ),
        w ? /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ s(
          _t,
          {
            emoji: w.emoji,
            title: w.title,
            description: w.description,
            actions: w.actions
          }
        ) }) : /* @__PURE__ */ s(je, { children: u && /* @__PURE__ */ s(
          Bt,
          {
            ref: xe,
            isOpen: tt || re === "loading" || re === "success",
            status: re,
            selectedNumber: st,
            primaryActions: x && "primary" in x ? x.primary : [],
            secondaryActions: x && "secondary" in x ? x.secondary : [],
            warningMessage: "warningMessage" in u ? u.warningMessage : void 0,
            onUnselect: () => te?.(),
            allPagesSelection: !!f.allPagesSelection,
            isAllItemsSelected: nt,
            totalItems: U
          }
        ) })
      ]
    }
  );
};
export {
  hs as OneDataCollectionComp
};
