import { jsx as f } from "react/jsx-runtime";
import { useMemo as i, useState as v } from "react";
import { OneDataCollection as x } from "../../../OneDataCollection/index.js";
import { useCollectionDownloadActions as J } from "../../hooks/useCollectionDownloadActions.js";
import { DashboardItem as N } from "../DashboardItem/DashboardItem.js";
import { useDataCollectionSource as w } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
function L({
  item: t,
  filters: u,
  actions: s,
  editMode: g,
  handleDelete: b,
  isFullscreen: p,
  onFullscreenChange: m
}) {
  const r = t.useDashboardFilters !== !1 ? u : {}, l = JSON.stringify(r), S = i(
    () => t.createSource(r),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l]
  ), a = w(S, [
    l
  ]), [y, z] = v(), h = i(() => (t.visualizations?.find(
    (e) => e?.type === "table"
  )?.options?.columns ?? []).filter(
    (e) => typeof e?.id == "string" && typeof e?.label == "string"
  ).map((e) => ({ id: e.id, label: e.label, render: e.render })), [t]), c = J({
    source: a,
    title: t.title,
    columns: h,
    tableSettings: y
  }), O = i(
    () => [...s ?? [], ...c],
    [s, c]
  );
  return /* @__PURE__ */ f(
    N,
    {
      title: t.title,
      description: t.description,
      explanation: t.explanation,
      isLoading: !1,
      actions: O,
      editMode: g,
      handleDelete: b,
      itemId: t.id,
      isFullscreen: p,
      onFullscreenChange: m,
      children: /* @__PURE__ */ f(
        x,
        {
          fullHeight: !0,
          source: a,
          visualizations: t.visualizations,
          onStateChange: (d) => {
            const n = d.settings?.visualization?.table;
            z((o) => {
              const C = JSON.stringify(o?.hidden) === JSON.stringify(n?.hidden), D = JSON.stringify(o?.order) === JSON.stringify(n?.order);
              return C && D ? o : n;
            });
          }
        }
      )
    }
  );
}
export {
  L as CollectionItem
};
