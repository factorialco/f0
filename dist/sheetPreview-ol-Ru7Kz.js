import { n as e, t } from "./xlsx-xmyx_Olh.js";
//#region src/components/F0PdfViewer/sheetPreview.ts
var n = (n, { maxRows: r, maxCols: i }) => {
	let a = t(n, { type: "array" });
	return a.SheetNames.map((t) => {
		let n = a.Sheets[t], o = n?.["!ref"];
		if (!n || !o) return {
			name: t,
			rows: [],
			truncatedRows: !1
		};
		let s = e.decode_range(o), c = s.e.r - s.s.r + 1 > r;
		return s.e.r = Math.min(s.e.r, s.s.r + r - 1), s.e.c = Math.min(s.e.c, s.s.c + i - 1), {
			name: t,
			rows: e.sheet_to_json(n, {
				header: 1,
				raw: !1,
				defval: "",
				range: s
			}),
			truncatedRows: c
		};
	});
}, r = (t) => {
	let n = t.reduce((e, t) => Math.max(e, t.length), 0);
	return Array.from({ length: n }, (t, n) => e.encode_col(n));
}, i = async (e, { maxRows: t, maxCols: r, withCredentials: i = !0 }) => {
	let a = await fetch(e, { credentials: i ? "include" : "same-origin" });
	if (!a.ok) throw Error(`Failed to fetch sheet: ${a.status}`);
	return n(await a.arrayBuffer(), {
		maxRows: t,
		maxCols: r
	});
};
//#endregion
export { i as n, r as t };
