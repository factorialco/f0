import * as e from "xlsx";
//#region src/patterns/F0AnalyticsDashboard/utils/downloadHelpers.ts
function t(e) {
	return e == null ? "" : typeof e == "boolean" ? String(e) : e instanceof Date ? e.toISOString() : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function n(e, t) {
	let n = document.createElement("a");
	n.href = URL.createObjectURL(e), n.download = t, n.click(), URL.revokeObjectURL(n.href);
}
function r(r, i, a, o) {
	let s = o ?? r, c = [r, ...i.map((e) => s.map((n) => t(e[n])))], l = e.utils.book_new(), u = e.utils.aoa_to_sheet(c);
	e.utils.book_append_sheet(l, u, "Data");
	let d = e.write(l, {
		type: "array",
		bookType: "xlsx"
	});
	n(new Blob([d], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), `${a}.xlsx`);
}
function i(e, r, i, a) {
	let o = a ?? e, s = (e) => {
		let n = t(e);
		return n.includes(",") || n.includes("\"") || n.includes("\n") ? `"${n.replace(/"/g, "\"\"")}"` : n;
	}, c = [e.map(s).join(","), ...r.map((e) => o.map((t) => s(e[t])).join(","))];
	n(new Blob([c.join("\n")], { type: "text/csv;charset=utf-8;" }), `${i}.csv`);
}
function a(e, t, n) {
	let r = document.createElement("a");
	r.href = e, r.download = `${t}.${n}`, r.click();
}
function o(r, i) {
	let a = e.utils.book_new();
	for (let n of r) {
		let r = n.keys ?? n.columns, i = [n.columns, ...n.rows.map((e) => r.map((n) => t(e[n])))], o = e.utils.aoa_to_sheet(i), s = n.name.slice(0, 31);
		e.utils.book_append_sheet(a, o, s);
	}
	let o = e.write(a, {
		type: "array",
		bookType: "xlsx"
	});
	n(new Blob([o], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), `${i}.xlsx`);
}
//#endregion
export { i as downloadAsCsv, r as downloadAsExcel, a as downloadAsImage, o as downloadMultiSheetExcel };
