import { jsx as e, jsxs as b } from "react/jsx-runtime";
import { useState as F, useMemo as i } from "react";
import { ButtonInternal as P } from "../../../components/F0Button/internal.js";
import "../../../icons/app/Menu.js";
import D from "../../../icons/app/Reset.js";
import I from "../../../icons/app/Sliders.js";
import { Popover as M, PopoverTrigger as V, PopoverContent as $ } from "../../../ui/popover.js";
import { GroupingSelector as E } from "./components/GroupingSelector.js";
import { SortingSelector as H } from "./components/SortingSelector.js";
import { VisualizationSelector as L } from "./components/VisualizationSelector.js";
import { useDataCollectionSettings as q } from "./SettingsProvider.js";
import { VisualizationSettingsRenderer as A, hasVisualizacionSettings as K } from "./VisualizationSettingsRenderer.js";
import { useI18n as Q } from "../../../lib/providers/i18n/i18n-provider.js";
import { collectionVisualizations as h } from "../visualizations/collection/collectionViewRegistry.js";
import { F0Button as U } from "../../../components/F0Button/F0Button.js";
const me = ({
  visualizations: o,
  currentVisualization: n,
  onVisualizationChange: y,
  grouping: s,
  // summaries, // TODO: implement summaries selector
  currentGrouping: v,
  onGroupingChange: S,
  sortings: c,
  currentSortings: m,
  defaultSortings: d,
  onSortingsChange: u
}) => {
  const f = Q(), N = s ? Object.keys(s.groupBy).length + (s.mandatory ? 1 : 0) : 0, [r, p] = F(!1), C = (t) => {
    p(!1), y(t);
  }, O = (t) => {
    S(t);
  }, x = o && o.length > 1, z = s && N > 0, j = c && Object.keys(c).length > 0, a = i(
    () => o[n],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [n, o?.[n]]
  ), k = i(
    () => /* @__PURE__ */ e(
      A,
      {
        visualization: a
      },
      "visualization-settings"
    ),
    [a]
  ), B = i(
    () => K(a),
    [a]
  ), G = i(
    () => {
      const t = o[n]?.type;
      if (!t) return "-";
      const l = f.collections.visualizations[t] ?? "-";
      return f.collections.visualizations.settings.replace(
        "{{visualizationName}}",
        l
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [n]
  ), g = q(), J = i(() => {
    if (JSON.stringify(m) !== JSON.stringify(d))
      return !0;
    const t = o[n]?.type;
    if (!t || !(t in h))
      return !1;
    const l = t, T = g.settings.visualization[l], w = h[l]?.settings.default;
    return JSON.stringify(T) !== JSON.stringify(w);
  }, [
    g.settings.visualization,
    o,
    n,
    m,
    d
  ]), R = () => {
    Object.values(h).forEach((t) => {
      t.settings.resetHandler?.(g);
    }), u(d);
  };
  return /* @__PURE__ */ e("div", { className: "flex gap-2", children: /* @__PURE__ */ b(M, { open: r, onOpenChange: p, children: [
    /* @__PURE__ */ e(V, { asChild: !0, onClick: () => p(!r), children: /* @__PURE__ */ e(
      P,
      {
        variant: "outline",
        label: "Settings",
        icon: I,
        onClick: () => {
        },
        hideLabel: !0,
        compact: !0,
        pressed: r,
        "aria-controls": r ? "settings" : void 0
      }
    ) }),
    /* @__PURE__ */ e(
      $,
      {
        className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
        align: "end",
        sideOffset: 8,
        children: [
          x && /* @__PURE__ */ e(
            L,
            {
              visualizations: o,
              currentVisualization: n,
              onVisualizationChange: C
            },
            "visualization"
          ),
          z && !s?.hideSelector && !(s.mandatory && Object.entries(s.groupBy).length < 2) && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(
            E,
            {
              grouping: s,
              currentGrouping: v,
              onGroupingChange: O
            },
            "grouping"
          ) }),
          j && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(
            H,
            {
              currentSortings: m,
              onChange: u,
              sortings: c
            },
            "sorting"
          ) }),
          B && /* @__PURE__ */ b("section", { className: "p-3 pb-0", children: [
            /* @__PURE__ */ e("h3", { className: "mb-2 text-sm font-medium text-f1-foreground-secondary", children: G }),
            k
          ] }, "visualization-settings"),
          J && /* @__PURE__ */ e(
            "section",
            {
              className: "border-0 border-t border-solid border-t-f1-border p-3",
              children: /* @__PURE__ */ e(
                U,
                {
                  size: "sm",
                  variant: "ghost",
                  icon: D,
                  label: f.collections.visualizations.reset,
                  onClick: R
                }
              )
            },
            "reset"
          )
        ].filter(Boolean)
      }
    )
  ] }) });
};
export {
  me as Settings
};
