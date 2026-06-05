import { jsx as u, jsxs as x, Fragment as J } from "react/jsx-runtime";
import { useState as N, useMemo as c, useEffect as Q, useCallback as E } from "react";
import { useDataCollectionLanesData as W } from "../../../hooks/useDataCollectionData/useDataCollectionLanesData.js";
import { useSelectableLanes as X } from "../../../hooks/useSelectableLanes/useSelectableLanes.js";
import { createAtlaskitDriver as Y } from "../../../../../lib/dnd/atlaskitDriver.js";
import { DndProvider as Z } from "../../../../../lib/dnd/context.js";
import { useIsDev as _ } from "../../../../../lib/providers/user-platafform/UserPlatformProvider.js";
import { KanbanCard as tt } from "../../../../../ui/Kanban/components/KanbanCard.js";
import { Kanban as K } from "../../../../../ui/Kanban/Kanban.js";
const at = (o) => o.map(
  ({ icon: m, property: g }) => g.type === "file" ? { property: g } : { icon: m, property: g }
), et = (o) => !!(o && o.type === "infinite-scroll"), ft = ({
  lanes: o,
  title: m,
  description: g,
  avatar: h,
  metadata: v,
  onMove: p,
  onCreate: L,
  source: e,
  onSelectItems: U,
  onLoadError: F,
  onLoadData: B
}) => {
  const { lanesProvider: G, lanesHooks: i } = W(e, {
    onError: (t) => F(t)
  }), H = _();
  if (e.currentGrouping && H)
    throw new Error("Grouping is not supported in Kanban yet");
  const [S] = N(() => /* @__PURE__ */ Symbol("kanban-visualization")), l = e.idProvider, I = c(() => o.map((t) => ({
    ...t,
    items: i[t.id]?.data?.records || []
  })), [o, i]), b = e.currentSortings === null, { totalItemsAggregated: C, isInitialLoadingAggregated: y } = c(() => {
    const t = Object.values(i), a = t.length === o.length;
    if (t.length === 0 || !a)
      return {
        totalItemsAggregated: void 0,
        isInitialLoadingAggregated: !0
      };
    let n = 0, r = !1;
    for (const s of t) {
      const d = s.paginationInfo?.total ?? s.data.records.length;
      n += typeof d == "number" ? d : 0, s.isInitialLoading && (r = !0);
    }
    return {
      totalItemsAggregated: n,
      isInitialLoadingAggregated: r
    };
  }, [i, o.length]), D = c(
    () => Object.values(i).some((t) => t.isInitialLoading),
    [i]
  );
  Q(() => {
    B({
      totalItems: C,
      filters: e.currentFilters,
      search: e.currentSearch,
      isInitialLoading: y,
      data: Object.values(i).flatMap((t) => t.data.records)
    });
  }, [
    C,
    y,
    i,
    e.currentFilters,
    e.currentSearch
  ]);
  const w = c(() => {
    const t = /* @__PURE__ */ new Map();
    return I.forEach((a) => {
      const n = /* @__PURE__ */ new Map();
      a.items.forEach((r, s) => {
        const d = l ? l(r, s) : r?.id ?? s, f = String(d);
        n.set(f, s);
      }), t.set(a.id, n);
    }), t;
  }, [I, l]), R = c(() => o.map((t) => ({
    id: t.id,
    data: i[t.id]?.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: i[t.id]?.paginationInfo || null
  })), [o, i]), { lanesSelectProvider: z, lanesUseSelectable: k } = X(R, e, (t, a) => {
    U?.(t, a);
  }), A = c(
    () => I.map((t) => {
      const a = i[t.id], n = a?.paginationInfo?.total, r = et(a?.paginationInfo) && a?.paginationInfo?.hasMore;
      return {
        id: t.id,
        title: t.title,
        items: t.items,
        variant: t.variant,
        total: n,
        hasMore: r,
        loading: a?.isLoading || !1,
        loadingMore: a?.isLoadingMore || !1,
        fetchMore: r ? () => a.loadMore() : void 0
      };
    }),
    [I, i]
    // laneItems → items; lanesHooks → pagination/loading/fetchMore per lane
  ), M = E(
    (t, a) => {
      if (l) return String(l(t, a));
      const n = t?.id;
      return n != null ? String(n) : String(a);
    },
    [l]
  ), O = E(
    (t, a, n, r) => {
      const s = String(
        l ? l(t, a) : t?.id ?? a
      ), d = e.selectable ? e.selectable(t) : t.id, f = k && r ? k.get(r) : void 0, T = (typeof d == "string" || typeof d == "number") && f && f?.selectedItems.has(d), V = e.itemUrl ? e.itemUrl(t) : void 0, $ = e.itemOnClick ? e.itemOnClick(t) : void 0;
      return /* @__PURE__ */ u(
        tt,
        {
          drag: { id: s, type: "list-card", data: { ...t, laneId: r } },
          id: String(t.id),
          index: a,
          total: n,
          laneId: r,
          showIndicator: b,
          title: m ? m(t) : String(a),
          description: g ? g(t) : void 0,
          avatar: h ? h(t) : void 0,
          draggable: p !== void 0,
          metadata: v ? at(v(t)) : void 0,
          compact: !0,
          forceVerticalMetadata: !0,
          selectable: e.selectable !== void 0,
          selected: T,
          "data-testid": `kanban-card-${String(t.id)}`,
          onSelect: (q) => {
            f && f.handleSelectItemChange(t, q);
          },
          onClick: $,
          link: V
        },
        s
      );
    },
    [
      l,
      e.selectable,
      e.itemUrl,
      e.itemOnClick,
      k,
      b,
      m,
      g,
      h,
      p,
      v
    ]
  ), P = c(
    () => ({
      instanceId: S,
      getIndexById: (t, a) => {
        const n = w.get(t)?.get(a) ?? -1;
        return b ? n : -1;
      },
      onMove: p
    }),
    [S, w, b, p]
  ), j = c(
    () => ({
      lanes: A,
      loading: D,
      getKey: M,
      renderCard: O,
      onCreate: L,
      dnd: P
    }),
    [A, D, M, O, L, P]
  );
  return /* @__PURE__ */ x(J, { children: [
    G,
    z,
    p ? /* @__PURE__ */ u(Z, { driver: Y(S), children: /* @__PURE__ */ u(K, { ...j }) }) : /* @__PURE__ */ u(K, { ...j })
  ] });
};
export {
  ft as KanbanCollection
};
