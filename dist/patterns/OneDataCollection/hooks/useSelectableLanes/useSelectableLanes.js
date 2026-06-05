import { jsx as f } from "react/jsx-runtime";
import { useState as n, useCallback as b, useEffect as r, useMemo as k } from "react";
import { mergeLanesSelectItemsStatus as p } from "./utils.js";
import { useSelectable as C } from "../../../../hooks/datasource/useSelectable/useSelectable.js";
const g = (t) => {
  const s = C({
    data: t.data || { type: "flat", records: [], groups: [] },
    paginationInfo: t.paginationInfo,
    source: t.source,
    onSelectItems: t.onSelectItems,
    selectedState: t.source.defaultSelectedItems
  });
  return r(() => {
    t.onHookUpdate(s);
  }, [s]), null;
}, U = (t, s, u) => {
  const [m, S] = n(/* @__PURE__ */ new Map()), [a, i] = n({ selectItemsStatus: /* @__PURE__ */ new Map(), clearCallback: /* @__PURE__ */ new Map() }), d = b(() => {
    a.clearCallback.forEach((e) => e());
  }, [a.clearCallback]);
  r(() => {
    const e = Object.fromEntries(
      a.selectItemsStatus
    );
    u?.(
      {
        ...p(
          a.selectItemsStatus
        ),
        byLane: e
      },
      d
    );
  }, [a]);
  const I = k(() => (t || []).map((e) => /* @__PURE__ */ f(
    g,
    {
      source: s,
      data: e.data || { type: "flat", records: [], groups: [] },
      paginationInfo: e.paginationInfo,
      onHookUpdate: (l) => S((c) => new Map(c).set(e.id, l)),
      onSelectItems: (l, c) => {
        i((o) => ({
          selectItemsStatus: new Map(o.selectItemsStatus).set(
            e.id,
            l
          ),
          clearCallback: new Map(o.clearCallback).set(e.id, c)
        }));
      }
    },
    e.id
  )), [JSON.stringify(t)]);
  return {
    lanesUseSelectable: m,
    lanesSelectProvider: I
  };
};
export {
  U as useSelectableLanes
};
