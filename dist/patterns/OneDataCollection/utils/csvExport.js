function u(r) {
  if (r == null)
    return "";
  const e = String(r);
  return e.includes(",") || e.includes(`
`) || e.includes('"') ? `"${e.replace(/"/g, '""')}"` : e;
}
function f(r) {
  if (r == null)
    return "";
  if (typeof r != "object")
    return String(r);
  if (r instanceof Date)
    return r.toISOString();
  if (Array.isArray(r))
    return r.map((t) => f(t)).filter(Boolean).join("; ");
  const e = r;
  return "type" in e && "value" in e && typeof e.type == "string" ? g(e.type, e.value) : "firstName" in e && "lastName" in e ? `${e.firstName} ${e.lastName}`.trim() : "label" in e && typeof e.label == "string" ? e.label : "text" in e && (typeof e.text == "string" || typeof e.text == "number") ? String(e.text) : "name" in e && typeof e.name == "string" ? e.name : "";
}
function g(r, e) {
  if (e == null)
    return "";
  const t = e;
  switch (r) {
    case "person":
      return `${t.firstName ?? ""} ${t.lastName ?? ""}`.trim();
    case "company":
    case "team":
    case "folder":
    case "file":
      return typeof t.name == "string" ? t.name : "";
    case "dotTag":
    case "status":
    case "statusTag":
    case "alertTag":
    case "tag":
      return typeof t.label == "string" ? t.label : "";
    case "tagList": {
      const n = t.tags;
      return Array.isArray(n) ? n.map(
        (i) => typeof i.label == "string" ? i.label : String(i)
      ).join("; ") : "";
    }
    case "number":
      return typeof e == "number" ? String(e) : t.number !== void 0 ? String(t.number) : "";
    case "amount":
      return typeof e == "number" ? String(e) : t.amount !== void 0 ? String(t.amount) : "";
    case "percentage":
      return typeof e == "number" ? String(e) : t.percentage !== void 0 ? `${t.percentage}%` : "";
    case "progressBar": {
      if (typeof e == "number") return String(e);
      const n = t.value !== void 0 ? t.value : "";
      return (typeof t.label == "string" ? t.label : "") || String(n);
    }
    case "text":
    case "longText":
      return typeof e == "string" || typeof e == "number" ? String(e) : t.text !== void 0 ? String(t.text) : "";
    case "date":
      return e instanceof Date ? e.toISOString() : t.date instanceof Date ? t.date.toISOString() : t.date !== void 0 ? String(t.date) : "";
    case "country":
      return typeof t.label == "string" ? t.label : typeof t.code == "string" ? t.code : "";
    case "avatarList": {
      const n = t.avatarList;
      return Array.isArray(n) ? n.map((i) => typeof i.firstName == "string" && typeof i.lastName == "string" ? `${i.firstName} ${i.lastName}`.trim() : typeof i.name == "string" ? i.name : "").filter(Boolean).join("; ") : "";
    }
    case "icon":
      return typeof t.label == "string" ? t.label : "";
    case "syncStatus":
      return typeof e == "string" ? e : "";
    default:
      return f(e);
  }
}
function m(r, e) {
  return e ? e.split(".").reduce((t, n) => t && typeof t == "object" && n in t ? t[n] : "", r) : r;
}
function b(r, e, t) {
  if (!r)
    return [];
  if (r.type === "table" || r.type === "editableTable") {
    const n = r.options.columns.filter((a) => {
      if (!e || e.size === 0) return !0;
      const o = a.id ?? a.label ?? "column";
      return !e.has(o);
    });
    return (t && t.length > 0 ? (() => {
      const a = new Set(t), o = n.filter(
        (c) => !a.has(c.id ?? c.label ?? "column")
      ), s = [...n].filter((c) => a.has(c.id ?? c.label ?? "column")).sort((c, l) => {
        const d = c.id ?? c.label ?? "column", p = l.id ?? l.label ?? "column";
        return t.indexOf(d) - t.indexOf(p);
      });
      return [...o, ...s];
    })() : [...n].sort(
      (a, o) => (a.order ?? n.length) - (o.order ?? n.length)
    )).map((a) => ({
      label: a.label,
      field: a.sorting || void 0,
      render: a.render ? (o) => {
        const s = a.render(o);
        return f(s);
      } : void 0
    }));
  }
  return [];
}
function y(r, e) {
  return r.map(
    (t) => e.map((n) => {
      if (n.render)
        return n.render(t);
      if (n.field) {
        const i = m(
          t,
          n.field
        );
        return f(i);
      }
      return f(t);
    })
  );
}
function S(r) {
  const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:-]/g, "");
  return `${r.replace(/[^a-zA-Z0-9-_]/g, "_")}_${e}.csv`;
}
function x(r, e, t) {
  if (!r || r.length === 0)
    throw new Error("No data available for export");
  let n = b(
    e,
    t?.hiddenColumnIds,
    t?.columnOrder
  );
  if (n.length === 0) {
    const o = r[0];
    n = Object.keys(o).map((s) => ({
      label: s.charAt(0).toUpperCase() + s.slice(1),
      field: s
    }));
  }
  const i = y(r, n), a = t?.includeHeaders !== !1 ? n.map((o) => o.label) : [];
  return [
    ...a.length > 0 ? [a.map((o) => u(o)).join(",")] : [],
    ...i.map(
      (o) => o.map((s) => u(s)).join(",")
    )
  ].join(`
`);
}
function h(r, e) {
  const t = new Blob(["\uFEFF" + r], {
    type: "text/csv;charset=utf-8"
  }), n = document.createElement("a"), i = URL.createObjectURL(t);
  n.href = i, n.download = e, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(i);
}
async function j(r, e, t) {
  const n = x(r, e, t), i = S(t?.filename || "data_collection");
  h(n, i);
}
export {
  j as downloadAsCSV,
  u as escapeCSVCell,
  b as extractColumns,
  f as extractDisplayValue,
  g as extractTypedCellValue,
  x as generateCSVContent
};
