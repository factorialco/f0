function m(e) {
  return e == null ? null : typeof e == "number" ? e : typeof e == "object" && "value" in e ? e.value : null;
}
function V(e, r) {
  switch (e.type) {
    case "bar":
    case "line":
      return f(r);
    case "funnel":
      return g(r);
    case "pie":
      return p(r);
    case "radar":
      return w(r);
    case "gauge":
      return T(r);
    case "heatmap":
      return y(r);
  }
}
function f(e) {
  const r = e.categories ?? [], a = e.series, s = Array.isArray(a) ? a : [], t = ["Category", ...s.map((n) => n.name)], o = r.map((n, c) => {
    const i = { Category: n };
    for (const l of s)
      i[l.name] = m(
        l.data[c]
      );
    return i;
  });
  return { columns: t, rows: o };
}
function g(e) {
  if (Array.isArray(e.series)) {
    const u = e.series[0];
    if (!u) return { columns: ["Stage", "Value"], rows: [] };
    const o = (e.categories ?? []).map((n, c) => ({
      Stage: n,
      Value: u.data[c] ?? 0
    }));
    return { columns: ["Stage", "Value"], rows: o };
  }
  const a = (e.series?.data ?? []).map(
    (s) => ({
      Stage: s.name,
      Value: s.value
    })
  );
  return { columns: ["Stage", "Value"], rows: a };
}
function p(e) {
  const a = (e.series?.data ?? []).map(
    (s) => ({
      Name: s.name,
      Value: s.value
    })
  );
  return { columns: ["Name", "Value"], rows: a };
}
function w(e) {
  const r = e.indicators ?? [], a = e.series, s = Array.isArray(a) ? a : [], t = ["Indicator", ...s.map((n) => n.name)], o = r.map((n, c) => {
    const i = {
      Indicator: typeof n == "string" ? n : n.name
    };
    for (const l of s)
      i[l.name] = l.data[c] ?? null;
    return i;
  });
  return { columns: t, rows: o };
}
function T(e) {
  const r = e.series;
  return {
    columns: ["Name", "Value"],
    rows: [{ Name: r?.name ?? "Value", Value: r?.value ?? 0 }]
  };
}
function y(e) {
  const r = e.xCategories ?? [], a = e.yCategories ?? [], u = (e.data ?? []).map(([t, o, n]) => ({
    X: r[t] ?? t,
    Y: a[o] ?? o,
    Value: n
  }));
  return { columns: ["X", "Y", "Value"], rows: u };
}
export {
  V as chartDataToTabular
};
