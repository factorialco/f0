import { jsx as M } from "react/jsx-runtime";
import { useMemo as P, useEffect as a, useCallback as y, useState as G, useRef as s } from "react";
import { F as H, a as I, R as _ } from "./F0Map-GuSFaG1z.js";
import { u as Q } from "./CoachmarkProvider-DMoe3bFt.js";
const Z = ({
  source: t,
  coordinates: S,
  label: x,
  marker: A,
  getRecordId: h,
  onSelect: u,
  revealRecordId: i,
  searchSelectionNonce: E,
  viewportInset: $,
  initialViewport: b,
  showControls: j,
  projection: z,
  markerLimit: J,
  ariaLabel: K,
  onLoadData: L,
  onLoadError: X
}) => {
  const F = Math.min(
    J ?? _,
    _
  ), q = P(() => t.dataAdapter.paginationType !== "pages" ? t.dataAdapter : { ...t.dataAdapter, perPage: F }, [t.dataAdapter, F]), { data: w, paginationInfo: R, isInitialLoading: C } = Q({ ...t, dataAdapter: q }, { onError: X }), n = w.records;
  a(() => {
    L({
      totalItems: R?.total || n.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: C,
      data: n
    });
  }, [R?.total, n]);
  const l = y(
    (r) => h ? h(r) : String(r.id),
    [h]
  ), f = P(() => {
    const r = [];
    for (const e of n) {
      const O = S(e);
      O && r.push({
        id: l(e),
        coordinates: O,
        label: x?.(e),
        ...A?.(e) ?? { variant: "default" }
      });
    }
    return r;
  }, [n, S, x, A, l]), [o, B] = G(null), k = y(
    (r) => {
      B(r), u && u(
        r ? n.find((e) => l(e) === r) ?? null : null
      );
    },
    [u, n, l]
  ), D = s(u);
  D.current = u, a(() => () => D.current?.(null), []);
  const c = s(null), p = JSON.stringify(t.currentFilters ?? {}), d = s(null), g = s(!1);
  a(() => {
    if (d.current === null) {
      d.current = p;
      return;
    }
    d.current !== p && (d.current = p, g.current = !0);
  }, [p]), a(() => {
    g.current && (g.current = !1, c.current?.fitToMarkers());
  }, [f]);
  const T = s(null);
  a(() => {
    const r = T.current;
    T.current = o, r && !o && c.current?.fitToMarkers();
  }, [o]);
  const m = t.currentSearch, v = s(m);
  a(() => {
    const r = v.current;
    v.current = m, r && !m && c.current?.fitToMarkers();
  }, [m]);
  const N = s(null);
  return a(() => {
    if (!i) return;
    const r = `${i}:${E ?? 0}`;
    N.current !== r && f.some((e) => e.id === i) && (N.current = r, c.current?.focusMarker(i), k(i));
  }, [i, E, f, k]), C ? /* @__PURE__ */ M("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ M(H, {}) }) : /* @__PURE__ */ M("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ M(
    I,
    {
      ref: c,
      markers: f,
      selectedMarkerId: o,
      onMarkerSelect: k,
      centerOnMarkerClick: !0,
      viewportInset: $,
      initialViewport: b,
      showControls: j,
      projection: z,
      ariaLabel: K,
      fullScreen: !0
    }
  ) });
};
export {
  Z as MapCollection
};
