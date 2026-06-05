import { useState as V, useRef as y, useMemo as I, useCallback as w, useEffect as G } from "react";
import { GROUP_ID_SYMBOL as $e } from "../useData.js";
import { parseSelectedState as ke, isGroupRecord as je, isRecordItem as Je } from "./utils.js";
function be({
  data: o,
  paginationInfo: S,
  source: d,
  selectionMode: ve = "multi",
  selectedState: D,
  onSelectItems: we,
  disableSelectAll: K = !1,
  isSearchActive: T = !1,
  allPagesSelection: Ce,
  resetOnPageChange: ie = !0,
  preserveSelectionOnDatasetChange: ue = !1
}) {
  const g = o.type === "grouped", m = ve === "multi", u = d.selectable, C = !(Ce ?? d.allPagesSelection ?? !1), [v, F] = V(ke(D)), [P, W] = V(/* @__PURE__ */ new Map()), [a, N] = V(!1), [X, R] = V(null), $ = y(!1), Z = y(""), fe = y(!1), de = y(!0), ee = y(d.currentFilters), te = y(d.currentSortings), x = d.debouncedCurrentSearch, re = y(x), ae = y(""), me = y(""), _ = y(!1), se = y(!1), O = y(
    void 0
  ), M = I(() => C ? o.records?.length || 0 : S ? S.total : o.records?.length, [S, o.records?.length, C]), z = I(() => S ? "type" in S && S.type === "pages" ? S.currentPage : "cursor" in S ? S.cursor : null : null, [S]), [b, U] = I(() => {
    const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    for (const [r, t] of v.items?.entries() || [])
      t.checked ? e.set(r, t.item) : s.set(r, t.item);
    return [e, s];
  }, [v.items]), k = b.size, B = U.size, pe = I(
    () => k === M && M > 0,
    [M, k]
  ), ne = I(() => K ? !1 : T ? a && k > 0 : (a || pe) && k > 0, [
    K,
    a,
    pe,
    k,
    T
  ]), A = I(() => K || T && !$.current || !a ? !1 : B === 0 ? !0 : "indeterminate", [K, a, B, T]), ce = A === "indeterminate", Me = I(() => {
    const e = /* @__PURE__ */ new Map();
    for (const [s, r] of P.entries())
      r.checked && e.set(s, r.group);
    return e;
  }, [P]), oe = I(() => {
    if (!g || o.type !== "grouped") return {};
    const e = {};
    for (const s of o.groups) {
      const r = s.records.map((f) => u?.(f)).filter((f) => f !== void 0);
      let t = 0, c = 0;
      for (const f of r)
        v.items?.get(f)?.checked ? t++ : c++;
      const i = r.length, n = t === i && i > 0, l = t > 0 && t < i;
      e[s.key] = {
        checked: n || l,
        indeterminate: l,
        selectedCount: t,
        unselectedCount: c
      };
    }
    return e;
  }, [g, o, v.items, u]), j = I(() => g ? Object.values(oe).reduce(
    (e, s) => e + (s.selectedCount || 0),
    0
  ) : a && X !== null ? X - B : k, [
    oe,
    X,
    B,
    k,
    g,
    a
  ]), { itemsStatus: Y, selectedIds: q } = I(() => {
    const e = v.items || /* @__PURE__ */ new Map(), s = C ? new Set(
      o.records.map((c) => u?.(c)).filter((c) => c !== void 0)
    ) : null, r = Array.from(e.values()).filter((c) => c.item === void 0 ? !1 : C && s ? s.has(c.id) : !0).map(({ item: c, checked: i }) => ({ item: c, checked: i })), t = Array.from(e.entries()).filter(([c, i]) => i.checked ? C && s ? s.has(c) : !0 : !1).map(([c]) => c);
    return { itemsStatus: r, selectedIds: t };
  }, [
    v.items,
    C,
    o.records,
    u
  ]), H = I(
    () => Object.fromEntries(
      Array.from(P.values()).map(({ group: e, checked: s }) => [
        e.key,
        !!s
      ])
    ),
    [P]
  ), Ae = I(() => ({
    allChecked: A,
    itemsStatus: Y,
    selectedIds: q,
    checkedItems: Array.from(b.values()),
    uncheckedItems: Array.from(U.values()),
    groupsStatus: H,
    filters: d.currentFilters || {},
    selectedCount: j,
    totalKnownItemsCount: M
  }), [
    A,
    Y,
    q,
    b,
    U,
    H,
    d.currentFilters,
    j,
    M
  ]), Ge = {
    checked: a || ce,
    indeterminate: ce,
    selectedCount: j,
    unselectedCount: B
  }, Se = w(
    (e) => v.items?.get(e)?.item ?? o.records.find((s) => {
      const r = u?.(s);
      return r !== void 0 && r === e;
    }),
    [v.items, o.records, u]
  ), ge = w(() => o.type === "grouped" ? o.groups.flatMap((e) => e.records) : o.records, [o]), he = w(
    (e) => {
      if (!e) return "";
      const s = Array.from(e.items?.entries() || []).map(([t, c]) => `${t}:${c.checked}`).sort().join(","), r = Array.from(e.groups?.entries() || []).map(([t, c]) => `${t}:${c.checked}`).sort().join(",");
      return `${e.allSelected}|${s}|${r}`;
    },
    []
  ), ye = w(
    (e) => {
      const s = ke(e);
      F((r) => {
        const t = /* @__PURE__ */ new Map(), c = new Set(s.items?.keys() || []);
        for (const [n, l] of r.items?.entries() || [])
          !m && !c.has(n) && l.checked ? t.set(n, { ...l, checked: !1 }) : t.set(n, l);
        for (const [
          n,
          l
        ] of s.items?.entries() || []) {
          const f = t.get(n), p = Se(n);
          f ? f.item === void 0 && p !== void 0 ? t.set(n, {
            ...f,
            item: p,
            // Single-select: external `checked` wins over stale local state.
            ...m ? {} : { checked: l.checked }
          }) : !m && f.checked !== l.checked && t.set(n, {
            ...f,
            checked: l.checked
          }) : t.set(n, {
            id: n,
            checked: l.checked,
            item: p
          });
        }
        for (const n of o.records) {
          const l = u?.(n);
          l && !t.has(l) && t.set(l, {
            id: l,
            checked: a,
            item: n
          });
        }
        const i = /* @__PURE__ */ new Map();
        for (const [
          n,
          l
        ] of s.groups?.entries() || [])
          i.set(String(n), {
            id: n,
            checked: l.checked
          });
        return {
          allSelected: r.allSelected,
          items: t,
          groups: i
        };
      });
    },
    [
      o.records,
      u,
      a,
      Se,
      m
    ]
  ), h = w(
    (e, s, r = !1, t) => {
      const c = (Array.isArray(e) ? e : [e]).slice(
        0,
        m ? void 0 : 1
      ), i = Array.isArray(t) ? t : t !== void 0 ? [t] : [];
      F((n) => {
        const l = !m && s ? /* @__PURE__ */ new Map() : new Map(n.items);
        let f = 0;
        for (const p of c) {
          if (r && l.has(p))
            continue;
          f++;
          const Q = n.items?.get(p)?.item, Pe = i.find((le) => {
            const L = u?.(le);
            return L !== void 0 && L === p;
          }), Re = Q ?? Pe ?? o.records.find((le) => {
            const L = u?.(le);
            return L !== void 0 && L === p;
          });
          l.set(p, { id: p, checked: s, item: Re });
        }
        return f === 0 ? n : {
          ...n,
          items: l
        };
      });
    },
    [m, o.records, u]
  ), E = w(
    (e, s) => {
      if (!g || o.type !== "grouped") return;
      const r = je(e) ? [e.key] : Array.isArray(e) ? [...e] : [e], t = o.groups.filter((i) => r.includes(i.key));
      if (t.length === 0) return;
      const c = t.flatMap(
        (i) => i.records.map((n) => u?.(n)).filter((n) => n !== void 0)
      );
      c.length > 0 && h(c, s), W((i) => {
        const n = new Map(i);
        for (const l of t)
          n.set(l.key, { group: l, checked: s });
        return n;
      });
    },
    [g, o, u, h]
  ), Fe = w(
    (e, s) => {
      if (Je(e, u !== void 0)) {
        const r = u?.(e);
        r !== void 0 && h(r, s, !1, e);
        return;
      }
      h(e, s);
    },
    [u, h]
  ), Ke = w(
    (e) => {
      if (!m) return;
      if (!e && a) {
        N(!1), $.current = !1, R(null), W(/* @__PURE__ */ new Map()), _.current = !1, F(() => ({
          allSelected: !1,
          items: /* @__PURE__ */ new Map(),
          groups: /* @__PURE__ */ new Map()
        }));
        return;
      }
      const s = o.records?.length || 0;
      if (e && R((r) => r !== null ? r : s), g && o.type === "grouped") {
        const r = o.groups.map((t) => t.key);
        r.length > 0 && E(r, e);
      } else {
        const r = o.records.map((t) => u?.(t)).filter((t) => t !== void 0);
        r.length > 0 && h(r, e);
      }
      e || (N(!1), $.current = !1, R(null));
    },
    [
      m,
      a,
      g,
      o,
      u,
      E,
      h
    ]
  ), Ie = w(
    (e) => {
      if (m)
        if (N(e), $.current = e, R(e ? M : null), g && o.type === "grouped") {
          const s = o.groups.map((r) => r.key);
          s.length > 0 && E(s, e);
        } else {
          const s = o.records.map((r) => u?.(r)).filter((r) => r !== void 0);
          s.length > 0 && h(s, e), F((r) => {
            const t = new Map(r.items);
            let c = !1;
            for (const [i, n] of t.entries())
              n.checked !== e && (t.set(i, { ...n, checked: e }), c = !0);
            return c ? {
              ...r,
              allSelected: !!e,
              items: t
            } : r;
          });
        }
    },
    [
      m,
      M,
      g,
      o,
      u,
      E,
      h
    ]
  ), J = w(() => {
    N(!1), $.current = !1, R(null), W(/* @__PURE__ */ new Map()), _.current = !1, F(() => ({
      allSelected: !1,
      items: /* @__PURE__ */ new Map(),
      groups: /* @__PURE__ */ new Map()
    }));
  }, []);
  return G(() => {
    F((e) => ({
      ...e,
      allSelected: A
    }));
  }, [A]), G(() => {
    const e = he(D);
    if (!fe.current) {
      fe.current = !0, Z.current = e;
      return;
    }
    e !== Z.current && (Z.current = e, ye(D));
  }, [D, he, ye]), G(() => {
    if (de.current) {
      de.current = !1, ee.current = d.currentFilters, te.current = d.currentSortings, re.current = x;
      return;
    }
    const e = JSON.stringify(d.currentFilters) !== JSON.stringify(ee.current), s = JSON.stringify(d.currentSortings) !== JSON.stringify(te.current), r = x !== re.current;
    (e || s || r) && (!K && !ue && (se.current = !0, J()), ee.current = d.currentFilters, te.current = d.currentSortings, re.current = x);
  }, [
    d.currentFilters,
    d.currentSortings,
    x,
    J,
    K,
    ue
  ]), G(() => {
    if (!ie) return;
    if (S?.type === "infinite-scroll") {
      O.current = z;
      return;
    }
    const e = O.current;
    if (e === void 0) {
      O.current = z;
      return;
    }
    z !== e && (a || J()), O.current = z;
  }, [
    z,
    a,
    J,
    ie,
    S?.type
  ]), G(() => {
    _.current = ne;
  }, [ne]), G(() => {
    const e = ge();
    if (e.length === 0) return;
    const s = e.map((t) => u?.(t)).filter((t) => t !== void 0), r = s.join(",");
    if (r !== ae.current) {
      if (ae.current = r, se.current) {
        se.current = !1;
        return;
      }
      if (g)
        for (const t of e) {
          const c = u?.(t);
          if (c === void 0) continue;
          const i = t[$e];
          i && P.get(i)?.checked && h(c, !0, !0);
        }
      else
        m && !C && h(
          s,
          _.current,
          !0
        );
      F((t) => {
        let c = !1;
        const i = new Map(t.items);
        for (const [n, l] of i.entries())
          if (l.item === void 0) {
            const f = e.find((p) => {
              const Q = u?.(p);
              return Q !== void 0 && Q === n;
            });
            f && (i.set(n, {
              ...l,
              item: f
            }), c = !0);
          }
        return c ? {
          ...t,
          items: i
        } : t;
      });
    }
  }, [
    o.records,
    o.groups,
    u,
    ge,
    g,
    P,
    m,
    h,
    C
  ]), G(() => {
    k === 0 && (N(!1), $.current = !1);
  }, [k]), G(() => {
    const e = JSON.stringify({
      allSelectedCheck: a,
      allSelectedState: A,
      itemsCount: v.items?.size ?? 0,
      checkedCount: k
    });
    e !== me.current && (me.current = e, we?.(
      {
        allSelected: A,
        itemsStatus: Y,
        selectedIds: q,
        groupsStatus: H,
        filters: d.currentFilters || {},
        selectedCount: j
      },
      J,
      Ie
    ));
  }, [
    a,
    A,
    Y,
    q,
    H,
    j,
    k
  ]), {
    isAllSelected: ne,
    isPartiallySelected: ce,
    selectedItems: b,
    selectedGroups: Me,
    allSelectedStatus: Ge,
    clearSelection: J,
    handleSelectItemChange: Fe,
    handleSelectAll: Ke,
    handleSelectAllItems: Ie,
    handleSelectGroupChange: E,
    selectionMeta: {
      selectedItemsCount: j,
      totalKnownItemsCount: M,
      checkedItems: Array.from(b.values()),
      uncheckedItems: Array.from(U.values())
    },
    groupAllSelectedStatus: oe,
    selectionStatus: Ae,
    selectedState: v
  };
}
export {
  be as useSelectable
};
