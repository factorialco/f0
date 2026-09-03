import { jsx as h } from "react/jsx-runtime";
import { useMemo as j, useEffect as a, useCallback as L, useState as I, useRef as s } from "react";
import { F as Q, a as U, R as P } from "./F0Map-CugIYJQ6.js";
import { u as V } from "./CoachmarkProvider-DTJIrOVB.js";
const tr = ({
  source: t,
  coordinates: x,
  label: A,
  marker: E,
  getRecordId: g,
  onSelect: u,
  revealRecordId: i,
  searchSelectionNonce: F,
  viewportInset: _,
  initialViewport: $,
  showControls: b,
  projection: z,
  markerLimit: J,
  ariaLabel: X,
  onLoadData: q,
  onLoadError: w
}) => {
  const R = Math.min(
    J ?? P,
    P
  ), B = j(() => t.dataAdapter.paginationType !== "pages" ? t.dataAdapter : { ...t.dataAdapter, perPage: R }, [t.dataAdapter, R]), { data: G, paginationInfo: C, isInitialLoading: D, isLoading: y } = V({ ...t, dataAdapter: B }, { onError: w }), n = G.records;
  a(() => {
    q({
      totalItems: C?.total || n.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: D,
      data: n
    });
  }, [C?.total, n]);
  const c = L(
    (r) => g ? g(r) : String(r.id),
    [g]
  ), o = j(() => {
    const r = [];
    for (const e of n) {
      const O = x(e);
      O && r.push({
        id: c(e),
        coordinates: O,
        label: A?.(e),
        ...E?.(e) ?? { variant: "default" }
      });
    }
    return r;
  }, [n, x, A, E, c]), [f, H] = I(null), S = L(
    (r) => {
      H(r), u && u(
        r ? n.find((e) => c(e) === r) ?? null : null
      );
    },
    [u, n, c]
  ), T = s(u);
  T.current = u, a(() => () => T.current?.(null), []);
  const l = s(null), p = o.map((r) => r.id).join(","), d = JSON.stringify(t.currentFilters ?? {}), m = s(null), M = s(null);
  a(() => {
    if (m.current === null) {
      m.current = d;
      return;
    }
    m.current !== d && (m.current = d, M.current = p);
  }, [d, p]), a(() => {
    M.current === null || y || M.current !== p && (M.current = null, l.current?.fitToMarkers());
  }, [y, p]);
  const v = s(null);
  a(() => {
    const r = v.current;
    v.current = f, r && !f && l.current?.fitToMarkers();
  }, [f]);
  const k = t.currentSearch, K = s(k);
  a(() => {
    const r = K.current;
    K.current = k, r && !k && l.current?.fitToMarkers();
  }, [k]);
  const N = s(null);
  return a(() => {
    if (!i) return;
    const r = `${i}:${F ?? 0}`;
    N.current !== r && o.some((e) => e.id === i) && (N.current = r, l.current?.focusMarker(i), S(i));
  }, [i, F, o, S]), D ? /* @__PURE__ */ h("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ h(Q, {}) }) : /* @__PURE__ */ h("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ h(
    U,
    {
      ref: l,
      markers: o,
      selectedMarkerId: f,
      onMarkerSelect: S,
      centerOnMarkerClick: !0,
      viewportInset: _,
      initialViewport: $,
      showControls: b,
      projection: z,
      ariaLabel: X,
      fullScreen: !0
    }
  ) });
};
export {
  tr as MapCollection
};
