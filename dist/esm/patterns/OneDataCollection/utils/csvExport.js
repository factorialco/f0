//#region src/patterns/OneDataCollection/utils/csvExport.ts
function e(e) {
	if (e == null) return "";
	let t = String(e);
	return t.includes(",") || t.includes("\n") || t.includes("\"") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
function t(e) {
	if (e == null) return "";
	if (typeof e != "object") return String(e);
	if (e instanceof Date) return e.toISOString();
	if (Array.isArray(e)) return e.map((e) => t(e)).filter(Boolean).join("; ");
	let r = e;
	return "type" in r && "value" in r && typeof r.type == "string" ? n(r.type, r.value) : "firstName" in r && "lastName" in r ? `${r.firstName} ${r.lastName}`.trim() : "label" in r && typeof r.label == "string" ? r.label : "text" in r && (typeof r.text == "string" || typeof r.text == "number") ? String(r.text) : "name" in r && typeof r.name == "string" ? r.name : "";
}
function n(e, n) {
	if (n == null) return "";
	let r = n;
	switch (e) {
		case "person": return `${r.firstName ?? ""} ${r.lastName ?? ""}`.trim();
		case "company":
		case "team":
		case "folder":
		case "file": return typeof r.name == "string" ? r.name : "";
		case "dotTag":
		case "status":
		case "statusTag":
		case "alertTag":
		case "tag": return typeof r.label == "string" ? r.label : "";
		case "tagList": {
			let e = r.tags;
			return Array.isArray(e) ? e.map((e) => typeof e.label == "string" ? e.label : String(e)).join("; ") : "";
		}
		case "number": return typeof n == "number" ? String(n) : r.number === void 0 ? "" : String(r.number);
		case "amount": return typeof n == "number" ? String(n) : r.amount === void 0 ? "" : String(r.amount);
		case "percentage": return typeof n == "number" ? String(n) : r.percentage === void 0 ? "" : `${r.percentage}%`;
		case "progressBar": {
			if (typeof n == "number") return String(n);
			let e = r.value === void 0 ? "" : r.value;
			return (typeof r.label == "string" ? r.label : "") || String(e);
		}
		case "text":
		case "longText": return typeof n == "string" || typeof n == "number" ? String(n) : r.text === void 0 ? "" : String(r.text);
		case "date": return n instanceof Date ? n.toISOString() : r.date instanceof Date ? r.date.toISOString() : r.date === void 0 ? "" : String(r.date);
		case "country": return typeof r.label == "string" ? r.label : typeof r.code == "string" ? r.code : "";
		case "avatarList": {
			let e = r.avatarList;
			return Array.isArray(e) ? e.map((e) => typeof e.firstName == "string" && typeof e.lastName == "string" ? `${e.firstName} ${e.lastName}`.trim() : typeof e.name == "string" ? e.name : "").filter(Boolean).join("; ") : "";
		}
		case "icon": return typeof r.label == "string" ? r.label : "";
		case "syncStatus": return typeof n == "string" ? n : "";
		default: return t(n);
	}
}
function r(e, t) {
	return t ? t.split(".").reduce((e, t) => e && typeof e == "object" && t in e ? e[t] : "", e) : e;
}
function i(e, n, r) {
	if (!e) return [];
	if (e.type === "table" || e.type === "editableTable") {
		let i = e.options.columns.filter((e) => {
			if (!n || n.size === 0) return !0;
			let t = e.id ?? e.label ?? "column";
			return !n.has(t);
		});
		return (r && r.length > 0 ? (() => {
			let e = new Set(r), t = i.filter((t) => !e.has(t.id ?? t.label ?? "column")), n = [...i].filter((t) => e.has(t.id ?? t.label ?? "column")).sort((e, t) => {
				let n = e.id ?? e.label ?? "column", i = t.id ?? t.label ?? "column";
				return r.indexOf(n) - r.indexOf(i);
			});
			return [...t, ...n];
		})() : [...i].sort((e, t) => (e.order ?? i.length) - (t.order ?? i.length))).map((e) => ({
			label: e.label,
			field: e.sorting || void 0,
			render: e.render ? (n) => t(e.render(n)) : void 0
		}));
	}
	return [];
}
function a(e, n) {
	return e.map((e) => n.map((n) => n.render ? n.render(e) : n.field ? t(r(e, n.field)) : t(e)));
}
function o(e) {
	let t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:-]/g, "");
	return `${e ? e.replace(/[^a-zA-Z0-9-_]/g, "_") : "export"}_${t}.csv`;
}
function s(t, n, r) {
	if (!t || t.length === 0) throw Error("No data available for export");
	let o = i(n, r?.hiddenColumnIds, r?.columnOrder);
	if (o.length === 0) {
		let e = t[0];
		o = Object.keys(e).map((e) => ({
			label: e.charAt(0).toUpperCase() + e.slice(1),
			field: e
		}));
	}
	let s = a(t, o), c = r?.includeHeaders === !1 ? [] : o.map((e) => e.label);
	return [...c.length > 0 ? [c.map((t) => e(t)).join(",")] : [], ...s.map((t) => t.map((t) => e(t)).join(","))].join("\n");
}
function c(e, t) {
	let n = new Blob(["﻿" + e], { type: "text/csv;charset=utf-8" }), r = document.createElement("a"), i = URL.createObjectURL(n);
	r.href = i, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
}
async function l(e, t, n) {
	c(s(e, t, n), o(n?.filename || "data_collection"));
}
//#endregion
export { l as downloadAsCSV, e as escapeCSVCell, i as extractColumns, t as extractDisplayValue, n as extractTypedCellValue, s as generateCSVContent };
