import { useState as H, useEffect as x, useMemo as I } from "react";
const t = (e) => e.id ?? e.label ?? "column", l = (e) => [...e].sort((n, r) => (n.order ?? e.length) - (r.order ?? e.length)).map((n) => t(n)), E = (e) => e.filter((n) => n.hidden && !n.noHiding).map((n) => t(n)), M = (e, n, r, i, c) => {
  const b = () => {
    if (!c || r?.hidden === void 0)
      return E(e);
    if (!r.order || r.order.length === 0)
      return r.hidden;
    const o = new Set(r.order), h = e.filter(
      (d) => d.hidden && !d.noHiding && !o.has(t(d))
    ).map(t);
    return [...r.hidden, ...h];
  }, [u, p] = H(b()), [s, v] = H(
    (i && r?.order !== void 0 ? r.order : void 0) ?? l(e)
  );
  x(() => {
    c && p(b());
  }, [JSON.stringify(r?.hidden), c]), x(() => {
    i && v(
      r?.order !== void 0 ? r.order : l(e)
    );
  }, [JSON.stringify(r?.order), i]);
  const a = I(() => {
    const o = [...e], h = n || 1;
    return [
      // Frozen columns can not be hidden even if the id is in status
      // The frist column is always visible and not sortable even if frozenColumns is 0
      ...o.slice(0, h).map((d, f) => ({
        column: {
          ...d,
          id: t(d)
        },
        canHide: !1,
        visible: !0,
        sortable: !1,
        order: f
      })),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...o.slice(h).sort((d, f) => {
        const O = s.indexOf(t(d)), m = s.indexOf(t(f)), y = O === -1 ? s.length : O, D = m === -1 ? s.length : m;
        return y - D;
      }).map((d, f) => ({
        column: {
          ...d,
          id: t(d)
        },
        canHide: c ? !(d.noHiding ?? !1) : !1,
        visible: !u.includes(t(d)),
        sortable: !!i,
        order: f + n
      }))
    ];
  }, [
    n,
    s,
    u,
    e,
    i,
    c
  ]);
  return {
    columns: I(() => a.filter((o) => o.visible).map((o) => o.column), [a]),
    columnsWithStatus: a,
    colsHidden: u,
    setColsHidden: p,
    colsOrder: s,
    setColsOrder: v
  };
};
export {
  E as getColsHiddenFromDefinition,
  l as getColsOrderFromDefinition,
  M as useColumns
};
