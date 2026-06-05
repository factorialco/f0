import { utils as i, write as b } from "../../../node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.js";
function d(o) {
  return o == null ? "" : typeof o == "boolean" ? String(o) : o instanceof Date ? o.toISOString() : typeof o == "object" ? JSON.stringify(o) : String(o);
}
function m(o, n) {
  const e = document.createElement("a");
  e.href = URL.createObjectURL(o), e.download = n, e.click(), URL.revokeObjectURL(e.href);
}
function k(o, n, e, s) {
  const l = s ?? o, c = [
    o,
    ...n.map((p) => l.map((w) => d(p[w])))
  ], a = i.book_new(), f = i.aoa_to_sheet(c);
  i.book_append_sheet(a, f, "Data");
  const r = b(a, { type: "array", bookType: "xlsx" }), t = new Blob([r], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
  m(t, `${e}.xlsx`);
}
function h(o, n, e, s) {
  const l = s ?? o, c = (r) => {
    const t = d(r);
    return t.includes(",") || t.includes('"') || t.includes(`
`) ? `"${t.replace(/"/g, '""')}"` : t;
  }, a = [
    o.map(c).join(","),
    ...n.map((r) => l.map((t) => c(r[t])).join(","))
  ], f = new Blob([a.join(`
`)], {
    type: "text/csv;charset=utf-8;"
  });
  m(f, `${e}.csv`);
}
function y(o, n, e) {
  const s = document.createElement("a");
  s.href = o, s.download = `${n}.${e}`, s.click();
}
function x(o, n) {
  const e = i.book_new();
  for (const c of o) {
    const a = [
      c.columns,
      ...c.rows.map(
        (t) => c.columns.map((p) => d(t[p]))
      )
    ], f = i.aoa_to_sheet(a), r = c.name.slice(0, 31);
    i.book_append_sheet(e, f, r);
  }
  const s = b(e, { type: "array", bookType: "xlsx" }), l = new Blob([s], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
  m(l, `${n}.xlsx`);
}
export {
  h as downloadAsCsv,
  k as downloadAsExcel,
  y as downloadAsImage,
  x as downloadMultiSheetExcel
};
