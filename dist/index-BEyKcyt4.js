import { jsx as g } from "react/jsx-runtime";
import { useMemo as L, useEffect as u, useCallback as P, useState as V, useRef as n } from "react";
import { F as W, a as Y, R as _ } from "./F0Map-D1A55jaw.js";
import { u as Z } from "./CoachmarkProvider-BONh1Gs9.js";
const ar = ({
  source: t,
  coordinates: E,
  label: F,
  marker: v,
  getRecordId: x,
  selectedRecordId: f,
  onSelect: l,
  revealRecordId: i,
  searchSelectionNonce: C,
  viewportInset: $,
  initialViewport: b,
  showControls: J,
  projection: X,
  markerLimit: q,
  ariaLabel: w,
  onLoadData: B,
  onLoadError: G
}) => {
  const D = Math.min(
    q ?? _,
    _
  ), H = L(() => t.dataAdapter.paginationType !== "pages" ? t.dataAdapter : { ...t.dataAdapter, perPage: D }, [t.dataAdapter, D]), { data: I, paginationInfo: y, isInitialLoading: R, isLoading: T } = Z({ ...t, dataAdapter: H }, { onError: G }), a = I.records;
  u(() => {
    B({
      totalItems: y?.total || a.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: R,
      data: a
    });
  }, [y?.total, a]);
  const o = P(
    (r) => x ? x(r) : String(r.id),
    [x]
  ), p = L(() => {
    const r = [];
    for (const e of a) {
      const z = E(e);
      z && r.push({
        id: o(e),
        coordinates: z,
        label: F?.(e),
        ...v?.(e) ?? { variant: "default" }
      });
    }
    return r;
  }, [a, E, F, v, o]), [Q, U] = V(
    null
  ), m = f !== void 0 ? f : Q, s = n(!1), A = P(
    (r) => {
      f === void 0 && U(r), s.current = !1, l && l(
        r ? a.find((e) => o(e) === r) ?? null : null
      );
    },
    [l, a, o, f]
  ), K = n(l);
  K.current = l, u(() => () => K.current?.(null), []);
  const c = n(null), d = p.map((r) => r.id).join(","), M = JSON.stringify(t.currentFilters ?? {}), k = n(null), h = n(null);
  u(() => {
    if (k.current === null) {
      k.current = M;
      return;
    }
    k.current !== M && (k.current = M, h.current = d);
  }, [M, d]), u(() => {
    h.current === null || T || h.current !== d && (h.current = null, c.current?.fitToMarkers());
  }, [T, d]);
  const N = n(null);
  u(() => {
    const r = N.current;
    N.current = m, !(!r || m) && (s.current && c.current?.fitToMarkers(), s.current = !1);
  }, [m]);
  const S = t.currentSearch, O = n(S);
  u(() => {
    const r = O.current;
    O.current = S, !(!r || S) && (s.current && c.current?.fitToMarkers(), s.current = !1);
  }, [S]);
  const j = n(null);
  return u(() => {
    if (!i) return;
    const r = `${i}:${C ?? 0}`;
    j.current !== r && p.some((e) => e.id === i) && (j.current = r, c.current?.focusMarker(i), A(i), s.current = !0);
  }, [i, C, p, A]), R ? /* @__PURE__ */ g("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ g(W, {}) }) : /* @__PURE__ */ g("div", { className: "flex h-full min-h-0 flex-1 flex-col", children: /* @__PURE__ */ g(
    Y,
    {
      ref: c,
      markers: p,
      selectedMarkerId: m,
      onMarkerSelect: A,
      centerOnMarkerClick: !0,
      viewportInset: $,
      initialViewport: b,
      showControls: J,
      projection: X,
      ariaLabel: w,
      fullScreen: !0
    }
  ) });
};
export {
  ar as MapCollection
};
