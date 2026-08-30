//#region src/components/F0PdfViewer/visiblePage.ts
var e = (e, t, n) => {
	let r = null, i = 0;
	return t.forEach((t, a) => {
		if (!t) return;
		let o = t.offsetHeight, s = t.offsetTop, c = s + o, l = e.offsetHeight - n, u = e.scrollTop + n, d = u + l;
		if (!(u < c && d > s)) return;
		let f;
		if (u <= s) f = d > c ? o : d - s;
		else {
			let e = u - s;
			d < c && (e += c - d), f = o - e;
		}
		f > i && (i = f, r = a + 1);
	}), r;
};
//#endregion
export { e as calculateVisiblePage };
