import { getDataCollectionStorageKey as A } from "./dataCollectionStorageKey.js";
const h = "dc_", i = {
  search: "dc_search",
  sortings: "dc_sort",
  /** Active visualization type/key, e.g. `table` (omitted for the default one). */
  visualization: "dc_view",
  /** Current page (1-indexed; omitted for the first page). */
  page: "dc_page"
}, a = "..", l = "*", S = "none", p = "-", f = 25, w = (e) => `${h}${e}`, R = (e) => e instanceof URLSearchParams ? e : typeof e == "string" ? new URLSearchParams(e) : typeof window < "u" ? new URLSearchParams(window.location.search) : new URLSearchParams(), P = (e) => {
  new Set(
    [...e.keys()].filter(
      (n) => n.startsWith(h)
    )
  ).forEach((n) => e.delete(n));
}, U = (e) => {
  const t = e.trim();
  if (t === "" || t === S || t === "null")
    return null;
  const n = t.lastIndexOf(p), r = n === -1 ? "" : t.slice(n + 1);
  if (r === "asc" || r === "desc") {
    const o = t.slice(0, n);
    return o ? { field: o, order: r } : null;
  }
  return { field: t, order: "asc" };
}, _ = (e) => e ? `${String(e.field)}${p}${e.order}` : S, c = (e) => e.toISOString().slice(0, 10), y = (e) => {
  if (e == null) return [];
  if (Array.isArray(e))
    return e.filter((t) => t != null).map(String);
  if (typeof e == "string") return e === "" ? [] : [e];
  if (typeof e == "number") return [String(e)];
  if (e instanceof Date) return [c(e)];
  if (typeof e == "object") {
    const t = e;
    if (typeof t.value == "string" && "strict" in t)
      return t.value === "" ? [] : [t.value];
    if (t.mode === "single") {
      const n = t.value;
      return n == null ? [] : [String(n)];
    }
    if (t.mode === "range") {
      const n = t.from, r = t.to;
      if (n?.value == null && r?.value == null) return [];
      const o = (s) => s?.value == null ? "" : `${s.value}${s.closed === !1 ? l : ""}`;
      return [`${o(n)}${a}${o(r)}`];
    }
    if (t.from instanceof Date || t.to instanceof Date) {
      const n = t.from instanceof Date ? c(t.from) : "", r = t.to instanceof Date ? c(t.to) : "";
      return [`${n}${a}${r}`];
    }
  }
  return [];
}, g = (e) => {
  const t = e.endsWith(l), n = t ? e.slice(0, -l.length) : e;
  return {
    value: n === "" ? void 0 : Number(n),
    // No marker → inclusive (closed). `*` marker → exclusive (open).
    closed: !t
  };
}, L = (e) => {
  if (e.includes(a)) {
    const [n, r] = e.split(a);
    return {
      mode: "range",
      from: g(n ?? ""),
      to: g(r ?? "")
    };
  }
  const t = Number(e);
  return { mode: "single", value: Number.isNaN(t) ? void 0 : t };
}, N = (e) => {
  if (e.includes(a)) {
    const [t, n] = e.split(a);
    return t ? n ? { from: new Date(t), to: new Date(n) } : { from: new Date(t) } : void 0;
  }
  return e ? new Date(e) : void 0;
}, O = (e, t) => {
  switch (e) {
    case "in":
      return t;
    case "search":
      return t[0];
    case "number":
      return L(t[0] ?? "");
    case "date":
      return N(t[0] ?? "");
    default:
      return t.length > 1 ? t : t[0];
  }
}, I = (e, t) => {
  const n = R(e), r = {};
  if (n.has(i.search) && (r.search = n.get(i.search) ?? void 0), n.has(i.sortings) && (r.sortings = U(
    n.get(i.sortings) ?? ""
  )), n.has(i.visualization)) {
    const o = n.get(i.visualization);
    o && (r.visualization = o);
  }
  if (n.has(i.page)) {
    const o = Number(n.get(i.page));
    Number.isInteger(o) && o >= 1 && (r.page = o);
  }
  if (t) {
    const o = {};
    let s = !1;
    for (const [d, v] of Object.entries(t)) {
      const u = w(d);
      n.has(u) && (o[d] = O(
        v.type,
        n.getAll(u)
      ), s = !0);
    }
    s && (r.filters = o);
  }
  return r;
}, m = /* @__PURE__ */ new Set(), $ = (e, t) => {
  m.has(e) || (m.add(e), console.warn(
    `[OneDataCollection] Filter "${e}" has ${t} selected values, over the URL limit of ${f}; it will not be reflected in the URL (still applied in-memory and persisted via storage).`
  ));
}, b = (e) => {
  const t = y(e).length;
  return t > 0 && t <= f;
}, D = (e, t) => {
  if (t.filters)
    for (const [n, r] of Object.entries(t.filters)) {
      const o = y(r);
      if (o.length > f) {
        $(n, o.length);
        continue;
      }
      o.forEach((s) => e.append(w(n), s));
    }
  t.search && e.set(i.search, t.search), t.sortings && e.set(
    i.sortings,
    _(t.sortings)
  ), t.visualization && e.set(i.visualization, t.visualization), t.page && t.page > 1 && e.set(i.page, String(t.page));
}, C = (e) => !!e.search || !!e.sortings || !!e.visualization || e.page !== void 0 && e.page > 1 || !!e.filters && Object.values(e.filters).some(b), T = (e = {}) => {
  const t = new URLSearchParams();
  return D(t, e), t;
}, E = (e, t) => {
  const n = new URLSearchParams(R(e));
  return P(n), C(t) && D(n, t), n;
}, F = (e, t) => {
  if (typeof window > "u") return null;
  const r = E(window.location.search, e).toString(), o = r ? `${window.location.pathname}?${r}` : window.location.pathname, s = t?.history ?? "replace";
  return s === "push" ? window.history.pushState(null, "", o) : s === "replace" && window.history.replaceState(null, "", o), r;
}, j = (e, t) => {
  try {
    localStorage.setItem(
      A(e),
      JSON.stringify(t)
    );
  } catch {
  }
};
export {
  i as DATA_COLLECTION_URL_PARAMS,
  h as DATA_COLLECTION_URL_PARAM_PREFIX,
  f as MAX_URL_FILTER_VALUES,
  T as buildDataCollectionUrlParams,
  I as parseDataCollectionUrlParams,
  E as setDataCollectionUrlParams,
  F as syncDataCollectionUrlParams,
  j as writeDataCollectionStorage
};
