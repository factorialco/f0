import { jsx as i } from "react/jsx-runtime";
import { useMemo as C, useEffect as c, useCallback as F, useState as X, useRef as p } from "react";
import { F as q, a as w, R as N } from "./F0Map-DcuJka_l.js";
import { u as B } from "./CoachmarkProvider-CQDzBdJf.js";
const Q = ({
  source: a,
  coordinates: m,
  label: d,
  marker: M,
  getRecordId: o,
  onSelect: s,
  revealRecordId: n,
  searchSelectionNonce: h,
  viewportInset: P,
  initialViewport: R,
  showControls: _,
  projection: $,
  markerLimit: b,
  ariaLabel: j,
  onLoadData: y,
  onLoadError: z
}) => {
  const x = Math.min(
    b ?? N,
    N
  ), K = C(() => a.dataAdapter.paginationType !== "pages" ? a.dataAdapter : { ...a.dataAdapter, perPage: x }, [a.dataAdapter, x]), { data: L, paginationInfo: A, isInitialLoading: g } = B({ ...a, dataAdapter: K }, { onError: z }), e = L.records;
  c(() => {
    y({
      totalItems: A?.total || e.length,
      filters: a.currentFilters,
      search: a.currentSearch,
      isInitialLoading: g,
      data: e
    });
  }, [A?.total, e]);
  const l = F(
    (t) => o ? o(t) : String(t.id),
    [o]
  ), f = C(() => {
    const t = [];
    for (const r of e) {
      const S = m(r);
      S && t.push({
        id: l(r),
        coordinates: S,
        label: d?.(r),
        ...M?.(r) ?? { variant: "default" }
      });
    }
    return t;
  }, [e, m, d, M, l]), [O, T] = X(null), u = F(
    (t) => {
      T(t), s && s(
        t ? e.find((r) => l(r) === t) ?? null : null
      );
    },
    [s, e, l]
  ), k = p(s);
  k.current = s, c(() => () => k.current?.(null), []);
  const E = p(null), D = p(null);
  return c(() => {
    if (!n) return;
    const t = `${n}:${h ?? 0}`;
    D.current !== t && f.some((r) => r.id === n) && (D.current = t, E.current?.focusMarker(n), u(n));
  }, [n, h, f, u]), g ? /* @__PURE__ */ i("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ i(q, {}) }) : /* @__PURE__ */ i("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ i(
    w,
    {
      ref: E,
      markers: f,
      selectedMarkerId: O,
      onMarkerSelect: u,
      viewportInset: P,
      initialViewport: R,
      showControls: _,
      projection: $,
      ariaLabel: j,
      fullScreen: !0
    }
  ) });
};
export {
  Q as MapCollection
};
