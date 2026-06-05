import { useRef as m, useCallback as u } from "react";
import { useF0EventCatcher as b } from "../../lib/providers/events/event-catcher-provider.js";
const s = (t) => typeof t == "string" || typeof t == "number" || typeof t == "boolean" || Array.isArray(t), F = ({
  defaultFilters: t,
  defaultSorting: p,
  currentVisualization: r
}) => {
  const i = m(t), a = m(p), { onEvent: n } = b(), h = u(
    (e) => {
      if (!e) return;
      const c = Object.entries(e).find(
        ([d, l]) => i.current?.[d] !== l
      );
      if (!c) return;
      const [f, o] = c;
      s(o) && (i.current = e, n("datacollection.filter-change", {
        name: f,
        value: o,
        ...r !== void 0 && {
          visualization: r
        }
      }));
    },
    [n, r]
  ), v = u(
    (e) => {
      a?.current?.field === e?.field && a?.current?.order === e?.order || !e || typeof e.field != "string" || (a.current = e, n("datacollection.sorting-change", {
        name: e.field,
        value: e.order
      }));
    },
    [n]
  ), y = u(
    (e) => {
      if (!e) return;
      const c = Object.entries(e).find(
        ([d, l]) => i.current?.[d] !== l
      );
      if (!c) return;
      const [f, o] = c;
      s(o) && (i.current = e, n("datacollection.preset-click", {
        name: f,
        value: o,
        ...r !== void 0 && {
          visualization: r
        }
      }));
    },
    [n, r]
  );
  return {
    emitFilterChange: h,
    emitSortingChange: v,
    emitPresetClick: y
  };
};
export {
  F as useEventEmitter
};
