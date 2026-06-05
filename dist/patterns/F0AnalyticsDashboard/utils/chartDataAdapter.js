function m(e) {
  return typeof e == "number" ? e : e != null && typeof e == "object" && "value" in e ? e.value : 0;
}
function c(e) {
  const a = e.categories ?? [], r = e.series;
  if (r && !Array.isArray(r) && "data" in r) {
    const t = r;
    if (Array.isArray(t.data) && t.data.length > 0 && typeof t.data[0] == "object" && "name" in t.data[0])
      return {
        categories: t.data.map((s) => s.name),
        series: [{ name: t.name, data: t.data.map((s) => s.value) }]
      };
  }
  const n = Array.isArray(r) ? r : [];
  return {
    categories: a,
    series: n.map((t) => ({
      name: t.name,
      data: (t.data ?? []).map(
        m
      )
    }))
  };
}
function l(e) {
  if (Array.isArray(e.series))
    return c(e);
  const a = e.series;
  return a?.data ? {
    categories: a.data.map((r) => r.name),
    series: [{ name: a.name, data: a.data.map((r) => r.value) }]
  } : { categories: [], series: [] };
}
function f(e) {
  const a = e.series;
  return a?.data ? {
    categories: a.data.map((r) => r.name),
    series: [{ name: a.name, data: a.data.map((r) => r.value) }]
  } : { categories: [], series: [] };
}
function p(e) {
  const a = e.indicators ?? [], r = Array.isArray(e.series) ? e.series : [];
  return {
    categories: a.map(
      (n) => typeof n == "string" ? n : n.name
    ),
    series: r.map((n) => ({ name: n.name, data: [...n.data] }))
  };
}
function g(e) {
  const a = e.series;
  return {
    categories: [a?.name ?? "Value"],
    series: [{ name: "Value", data: [a?.value ?? 0] }]
  };
}
function y(e) {
  const a = e.xCategories ?? [], r = e.yCategories ?? [], n = e.data ?? [];
  if (a.length === 0 || r.length === 0)
    return { categories: [], series: [] };
  const t = /* @__PURE__ */ new Map();
  for (const [i, u, o] of n)
    t.set(`${i},${u}`, o);
  const s = r.map((i, u) => ({
    name: i,
    data: a.map((o, d) => t.get(`${d},${u}`) ?? 0)
  }));
  return { categories: a, series: s };
}
function h(e, a) {
  return e.xCategories?.length || e.yCategories?.length || e.data && Array.isArray(e.data) && e.data.length > 0 && Array.isArray(e.data[0]) ? "heatmap" : e.indicators?.length ? "radar" : e.series && !Array.isArray(e.series) && "value" in e.series && typeof e.series.value == "number" ? "gauge" : e.series && !Array.isArray(e.series) && "data" in e.series ? a === "pie" ? "pie" : "funnel" : "bar";
}
function w(e, a) {
  switch (a ?? h(e)) {
    case "bar":
    case "line":
      return c(e);
    case "funnel":
      return l(e);
    case "pie":
      return f(e);
    case "radar":
      return p(e);
    case "gauge":
      return g(e);
    case "heatmap":
      return y(e);
  }
}
function b(e) {
  return {
    categories: e.categories,
    series: e.series.map((a) => ({
      name: a.name,
      data: a.data
    }))
  };
}
function A(e) {
  const a = e.series[0];
  return {
    series: {
      name: a?.name ?? "Funnel",
      data: e.categories.map((r, n) => ({
        name: r,
        value: a?.data[n] ?? 0
      }))
    }
  };
}
function C(e) {
  const a = e.series[0];
  return {
    series: {
      name: a?.name ?? "Distribution",
      data: e.categories.map((r, n) => ({
        name: r,
        value: a?.data[n] ?? 0
      }))
    }
  };
}
function v(e) {
  const a = e.categories.map(
    (r, n) => Math.max(...e.series.map((t) => t.data[n] ?? 0), 1)
  );
  return {
    indicators: e.categories.map(
      (r, n) => ({
        name: r,
        max: Math.ceil(a[n] * 1.2)
        // 20% headroom
      })
    ),
    series: e.series.map(
      (r) => ({
        name: r.name,
        data: r.data
      })
    )
  };
}
function T(e) {
  return {
    series: {
      value: e.series[0]?.data[0] ?? 0,
      name: e.categories[0] ?? "Value"
    },
    categories: void 0
  };
}
function x(e, a) {
  switch (a) {
    case "bar":
    case "line":
      return b(e);
    case "funnel":
      return A(e);
    case "pie":
      return C(e);
    case "radar":
      return v(e);
    case "gauge":
      return T(e);
    case "heatmap":
      return { xCategories: [], yCategories: [], data: [] };
  }
}
function V(e) {
  const a = /* @__PURE__ */ new Set();
  switch (a.add("table"), a.add(e), e) {
    case "bar":
    case "line":
      a.add("bar"), a.add("line"), a.add("funnel"), a.add("radar"), a.add("pie");
      break;
    case "funnel":
    case "pie":
      a.add("bar"), a.add("line"), a.add("funnel"), a.add("pie"), a.add("radar");
      break;
    case "radar":
      a.add("bar"), a.add("line"), a.add("funnel"), a.add("pie");
      break;
    case "gauge":
      break;
    case "heatmap":
      a.add("bar"), a.add("line");
      break;
  }
  return a;
}
function S(e) {
  switch (e) {
    case "bar":
      return { type: "bar", orientation: "vertical" };
    case "line":
      return { type: "line", lineType: "linear", showArea: !0 };
    case "funnel":
      return { type: "funnel", showConversion: !0, colorScale: !0 };
    case "pie":
      return { type: "pie", innerRadius: 0, showLabels: !0 };
    case "radar":
      return { type: "radar", showArea: !0 };
    case "gauge":
      return { type: "gauge", showValue: !0 };
    case "heatmap":
      return { type: "heatmap" };
  }
}
export {
  V as compatibleTargetTypes,
  S as defaultChartConfig,
  h as detectDataShape,
  x as fromCanonical,
  w as toCanonical
};
