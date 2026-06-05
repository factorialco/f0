import { jsx as l, jsxs as p } from "react/jsx-runtime";
import { useMemo as x } from "react";
import { useDataCollectionSettings as S } from "../../../../Settings/SettingsProvider.js";
import { ScrollArea as A } from "../../../../../../ui/scrollarea.js";
import { useColumns as k } from "../hooks/useColums.js";
import { SortAndHideList as z } from "./SortAndHideList/SortAndHideList.js";
import { useI18n as j } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as u } from "../../../../../../components/F0Button/F0Button.js";
const L = ({
  columns: d,
  frozenColumns: f,
  allowSorting: n,
  allowHiding: t,
  visualizationKey: a = "table"
}) => {
  const r = j(), { settings: g, setVisualizationSettings: h } = S(), v = g.visualization[a], { columnsWithStatus: m } = k(
    d,
    f,
    v,
    n,
    t
  ), o = x(
    () => m.filter((e) => t || e.visible).map((e) => ({
      id: e.column.id,
      label: e.column.label,
      sortable: e.sortable,
      canHide: e.canHide,
      visible: e.visible
    })),
    [m, t]
  ), c = (e) => {
    h(a, (s) => ({
      ...s,
      order: e.map((i) => i.id),
      hidden: e.filter((i) => !i.visible).map((i) => i.id)
    }));
  }, b = (e) => {
    c(
      o.map((s) => ({
        ...s,
        visible: s.canHide ? e : s.visible
      }))
    );
  }, C = t && o.filter((e) => e.canHide).length > 1;
  return /* @__PURE__ */ l("div", { className: "relative -mr-2 flex h-[200px] flex-col gap-2", children: /* @__PURE__ */ p(A, { className: "h-[200px]", children: [
    /* @__PURE__ */ l(
      z,
      {
        items: o,
        onChange: c,
        allowSorting: n,
        allowHiding: t
      }
    ),
    C && /* @__PURE__ */ p("div", { className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm", children: [
      /* @__PURE__ */ l(
        u,
        {
          variant: "outline",
          size: "sm",
          label: r.collections.table.settings.showAllColumns,
          onClick: () => {
            b(!0);
          }
        }
      ),
      /* @__PURE__ */ l(
        u,
        {
          variant: "ghost",
          size: "sm",
          label: r.collections.table.settings.hideAllColumns,
          onClick: () => {
            b(!1);
          }
        }
      )
    ] })
  ] }) });
};
export {
  L as TableSettings
};
