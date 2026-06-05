import { useState as H, useRef as d, useLayoutEffect as w, useMemo as J, useCallback as T } from "react";
const M = (f) => typeof f == "object" && f !== null && !Array.isArray(f), K = (f) => String(f), E = (f, i, n) => {
  const o = i[f];
  if (o?.presets !== void 0) {
    const e = o.presets[0];
    return e ? e.filter : {};
  }
  const c = n?.[0];
  return c ? c.filter : {};
}, Q = (f, i, n) => {
  const o = i[f];
  return o?.filters ? new Set(Object.keys(o.filters)) : n ? new Set(Object.keys(n)) : null;
}, W = (f, i, n, o) => {
  if (!M(i)) return {};
  const c = Q(f, n, o);
  if (!c) return i;
  const e = {};
  for (const [v, y] of Object.entries(i))
    c.has(v) && (e[v] = y);
  return e;
}, Y = ({
  sourceFilters: f,
  sourcePresets: i,
  sourceCurrentFilters: n,
  sourceSetCurrentFilters: o,
  visualizations: c,
  currentVisualization: e,
  storageKey: v
}) => {
  const y = c.length > 1, x = c.some(
    (t) => t.filters !== void 0 || t.presets !== void 0
  ), [j, b] = H({}), h = d(e), S = d(!1), k = d(!1), u = d(null), A = d(n), m = d(c);
  m.current = c;
  const I = d(f);
  if (I.current = f, w(() => {
    S.current = !1, k.current = !1, u.current = null, h.current = e, A.current = n, b(
      (t) => Object.keys(t).length > 0 ? {} : t
    );
  }, [v]), y && k.current) {
    const t = K(h.current), r = K(e);
    if (t !== r) {
      const s = j[r];
      u.current = s ?? E(
        e,
        c,
        i
      );
    } else n !== A.current && (u.current = null);
  } else
    u.current = null;
  A.current = n, w(() => {
    if (!y || !S.current || k.current) return;
    const t = K(e), r = j[t];
    o(
      r ?? E(
        e,
        c,
        i
      )
    ), k.current = !0;
  }, [y, e, j]), w(() => {
    if (!y) return;
    if (S.current && !k.current) {
      h.current = e;
      return;
    }
    const t = K(h.current), r = K(e);
    if (t !== r) {
      b((l) => ({
        ...l,
        [t]: n
      }));
      const s = j[r];
      o(
        s ?? E(
          e,
          c,
          i
        )
      );
    }
    h.current = e;
  }, [e, y]);
  const R = J(() => {
    if (!x) return f;
    const t = c[e];
    return t?.filters ? t.filters : f;
  }, [x, f, c, e]), D = J(() => {
    if (!x) return i;
    const r = c[e]?.presets;
    if (r)
      return r;
    const s = R ? new Set(Object.keys(R)) : void 0;
    if (s && i) {
      const l = i.filter((g) => Object.keys(g.filter).every((p) => s.has(p)));
      return l.length > 0 ? l : void 0;
    }
    return i;
  }, [
    y,
    i,
    c,
    e,
    R,
    x
  ]), U = J(() => {
    if (!y) return {};
    const t = K(e);
    return t in j || h.current !== e ? j : { ...j, [t]: n };
  }, [
    y,
    j,
    e,
    n
  ]), F = d({
    viz: e,
    json: JSON.stringify(n)
  });
  w(() => {
    if (!y || !k.current) return;
    const t = F.current;
    if (t.viz !== e) {
      F.current = {
        viz: e,
        json: JSON.stringify(n)
      };
      return;
    }
    const r = JSON.stringify(n);
    if (r === t.json) return;
    t.json = r;
    const s = K(e);
    b((l) => {
      const g = l[s];
      return g === n || g !== void 0 && JSON.stringify(g) === r ? l : { ...l, [s]: n };
    });
  }, [y, e, n]);
  const q = T(
    (t) => {
      if (!y) {
        o(t);
        return;
      }
      const r = K(e);
      if (typeof t == "function") {
        const s = t;
        o((l) => {
          const g = s(l);
          return b((O) => O[r] === g ? O : { ...O, [r]: g }), g;
        });
      } else
        o(t), b((s) => s[r] === t ? s : { ...s, [r]: t });
    },
    [y, o, e]
  ), B = T(
    (t) => {
      if (S.current) return;
      S.current = !0;
      const r = m.current, s = I.current, l = M(t) ? t : {}, g = {};
      for (const [O, p] of Object.entries(l)) {
        const L = M(p) ? p : {}, N = Number(O);
        Number.isInteger(N) && N >= 0 && N < r.length ? g[O] = W(
          N,
          L,
          r,
          s
        ) : g[O] = L;
      }
      b(g);
    },
    []
  );
  if (!y)
    return {
      effectiveFilters: R,
      effectivePresets: D,
      currentFilters: n,
      setCurrentFilters: o,
      allVisualizationFilters: {},
      setAllVisualizationFilters: () => {
      },
      hasPerVisualizationFilters: !1
    };
  const G = u.current ?? n;
  return {
    effectiveFilters: R,
    effectivePresets: D,
    currentFilters: G,
    setCurrentFilters: q,
    allVisualizationFilters: U,
    setAllVisualizationFilters: B,
    hasPerVisualizationFilters: !0
  };
};
export {
  Y as usePerVisualizationFilters
};
