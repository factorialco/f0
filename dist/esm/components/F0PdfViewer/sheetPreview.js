import * as e from "xlsx";
//#region src/components/F0PdfViewer/sheetPreview.ts
var t = (t, { maxRows: n, maxCols: r }) => {
	let i = e.read(t, { type: "array" });
	return i.SheetNames.map((t) => {
		let a = i.Sheets[t], o = a?.["!ref"];
		if (!a || !o) return {
			name: t,
			rows: [],
			truncatedRows: !1
		};
		let s = e.utils.decode_range(o), c = s.e.r - s.s.r + 1 > n;
		return s.e.r = Math.min(s.e.r, s.s.r + n - 1), s.e.c = Math.min(s.e.c, s.s.c + r - 1), {
			name: t,
			rows: e.utils.sheet_to_json(a, {
				header: 1,
				raw: !1,
				defval: "",
				range: s
			}),
			truncatedRows: c
		};
	});
}, n = (t) => {
	let n = t.reduce((e, t) => Math.max(e, t.length), 0);
	return Array.from({ length: n }, (t, n) => e.utils.encode_col(n));
}, r = async (e, { maxRows: n, maxCols: r, withCredentials: i = !0 }) => {
	let a = await fetch(e, { credentials: i ? "include" : "same-origin" });
	if (!a.ok) throw Error(`Failed to fetch sheet: ${a.status}`);
	return t(await a.arrayBuffer(), {
		maxRows: n,
		maxCols: r
	});
};
//#endregion
export { n as columnLetters, r as fetchWorkbook, t as parseWorkbook };
