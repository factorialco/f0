import { jsx as l } from "react/jsx-runtime";
import { useMemo as E, useEffect as S, useCallback as D, useState as T, useRef as C } from "react";
import { F as X, a as q, R as F } from "./F0Map-CA5_291D.js";
import { u as w } from "./CoachmarkProvider-CJF3HdRG.js";
const J = ({
  source: e,
  coordinates: c,
  label: p,
  marker: m,
  getRecordId: i,
  onSelect: o,
  revealRecordId: n,
  searchSelectionNonce: d,
  viewportInset: N,
  initialViewport: P,
  showControls: _,
  projection: $,
  markerLimit: b,
  ariaLabel: j,
  onLoadData: y,
  onLoadError: z
}) => {
  const M = Math.min(
    b ?? F,
    F
  ), K = E(() => e.dataAdapter.paginationType !== "pages" ? e.dataAdapter : { ...e.dataAdapter, perPage: M }, [e.dataAdapter, M]), { data: L, paginationInfo: h, isInitialLoading: x } = w({ ...e, dataAdapter: K }, { onError: z }), r = L.records;
  S(() => {
    y({
      totalItems: h?.total || r.length,
      filters: e.currentFilters,
      search: e.currentSearch,
      isInitialLoading: x,
      data: r
    });
  }, [h?.total, r]);
  const s = D(
    (t) => i ? i(t) : String(t.id),
    [i]
  ), f = E(() => {
    const t = [];
    for (const a of r) {
      const k = c(a);
      k && t.push({
        id: s(a),
        coordinates: k,
        label: p?.(a),
        ...m?.(a) ?? { variant: "default" }
      });
    }
    return t;
  }, [r, c, p, m, s]), [O, R] = T(null), u = D(
    (t) => {
      R(t), o && o(
        t ? r.find((a) => s(a) === t) ?? null : null
      );
    },
    [o, r, s]
  ), A = C(null), g = C(null);
  return S(() => {
    if (!n) return;
    const t = `${n}:${d ?? 0}`;
    g.current !== t && f.some((a) => a.id === n) && (g.current = t, A.current?.focusMarker(n), u(n));
  }, [n, d, f, u]), x ? /* @__PURE__ */ l("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ l(X, {}) }) : /* @__PURE__ */ l("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ l(
    q,
    {
      ref: A,
      markers: f,
      selectedMarkerId: O,
      onMarkerSelect: u,
      viewportInset: N,
      initialViewport: P,
      showControls: _,
      projection: $,
      ariaLabel: j,
      fullScreen: !0
    }
  ) });
};
export {
  J as MapCollection
};
