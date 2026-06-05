import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useState as a, useMemo as V, useEffect as G } from "react";
import { cn as x } from "../../lib/utils.js";
import { NavigationFilters as H } from "../OneDataCollection/components/NavigationFilters/NavigationFilters.js";
import { navigationFilterTypes as M } from "../OneDataCollection/navigationFilters/index.js";
import { DashboardGrid as O } from "./components/DashboardGrid/DashboardGrid.js";
import { ExportDropdown as q } from "./components/ExportDropdown/ExportDropdown.js";
import { FilterBar as z } from "./components/FilterBar/FilterBar.js";
import { FilterBarSkeleton as J } from "./components/FilterBar/FilterBarSkeleton.js";
import { useDashboardExport as K } from "./hooks/useDashboardExport.js";
import { useI18n as P } from "../../lib/providers/i18n/i18n-provider.js";
const Q = ({
  filters: s,
  presets: g,
  defaultFilters: v,
  items: t,
  editMode: N,
  onLayoutChange: F,
  enableExport: f,
  exportFilename: b,
  onExportReady: l,
  resetKey: C,
  onTransformChart: y,
  navigationFilters: r,
  filtersLoading: m
}) => {
  const D = P(), [i, I] = a(
    () => v ?? {}
  ), S = V(() => {
    if (!r)
      return {};
    const d = {};
    for (const [B, o] of Object.entries(r)) {
      const T = M[o.type];
      d[B] = T.valueConverter?.(o.defaultValue, o, D) ?? o.defaultValue;
    }
    return d;
  }, []), [p, j] = a(
    S
  ), { exportAsExcel: n, isExporting: k } = K({
    items: t,
    filters: i,
    filename: b
  }), u = t.length === 1 && t[0]?.type === "collection";
  G(() => {
    if (u) {
      l?.(void 0);
      return;
    }
    return l?.(n), () => l?.(void 0);
  }, [n, l, u]);
  const w = t.length === 1, [A, E] = a(!1), h = w || A;
  return /* @__PURE__ */ c(
    "div",
    {
      className: x("flex flex-col gap-5 pb-10", h && "h-full pb-0"),
      children: [
        (s || m || f || r) && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-4 px-5", children: [
          /* @__PURE__ */ e("div", { className: "w-full", children: s ? /* @__PURE__ */ e(
            z,
            {
              filters: s,
              value: i,
              presets: g,
              onChange: I
            }
          ) : m ? /* @__PURE__ */ e(J, {}) : null }),
          /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
            r && /* @__PURE__ */ e(
              H,
              {
                navigationFilters: r,
                currentNavigationFilters: p,
                onChangeNavigationFilters: j
              }
            ),
            f && /* @__PURE__ */ e(
              q,
              {
                onExportExcel: n,
                isExporting: k
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "px-5",
              h && "flex min-h-0 flex-1 flex-col pb-5"
            ),
            children: /* @__PURE__ */ e(
              O,
              {
                items: t,
                filters: {
                  ...i,
                  ...p
                },
                editMode: N,
                onLayoutChange: F,
                onTransformChart: y,
                resetKey: C,
                onFullscreenChange: E
              }
            )
          }
        )
      ]
    }
  );
};
Q.displayName = "F0AnalyticsDashboard";
export {
  Q as F0AnalyticsDashboard
};
