function t(a) {
  switch (a.type) {
    case "bar":
    case "line": {
      const r = a.series;
      return !Array.isArray(r) || r.length === 0 ? !0 : r.every(
        (e) => !e || !Array.isArray(e.data) || e.data.length === 0
      );
    }
    case "funnel":
    case "pie": {
      const r = a.series;
      return !r || !Array.isArray(r.data) || r.data.length === 0;
    }
    case "radar": {
      const r = a.series;
      return !Array.isArray(r) || r.length === 0 ? !0 : r.every(
        (e) => !e || !Array.isArray(e.data) || e.data.length === 0
      );
    }
    case "gauge":
      return a.value == null;
    case "heatmap": {
      const r = a.data;
      return !Array.isArray(r) || r.length === 0;
    }
    default:
      return !0;
  }
}
export {
  t as isDataChartEmpty
};
