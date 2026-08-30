function e(e, t) {
	let n = t.length;
	if (n <= 2) return n;
	let r = e - t[0] - 8, i = 0, a = 1;
	for (let e = n - 1; e > 0; e--) {
		let n = t[e];
		if (r < n) break;
		r -= n, i = e, a++;
	}
	if (a < n) for (r -= 50; r < 0 && a > 1;) r += t[i], i++, a--;
	return Math.max(2, a);
}
function t(e = []) {
	switch (e.length) {
		case 0: return;
		case 1: return e[0] + 8;
		default: return e[0] + 50 + e[e.length - 1] + 8;
	}
}
function n(e, t) {
	return 120 * e + (t ? 50 : 0) + 8;
}
function r(r, i, a = []) {
	if (!r) {
		let e = Math.min(i.length, 2);
		return {
			visibleCount: e,
			headItem: i[0] ?? null,
			tailItems: i.slice(i.length - 1),
			collapsedItems: i.slice(1, i.length - 1),
			isOnly: i.length === 1,
			minWidth: n(e, i.length > 2)
		};
	}
	let o = i.length <= 2, s = a.map((e) => e.clientWidth);
	if (o) return {
		visibleCount: i.length,
		headItem: i[0] ?? null,
		tailItems: i.slice(1),
		collapsedItems: [],
		isOnly: i.length === 1,
		minWidth: t(s)
	};
	let c = e(r, s);
	return {
		visibleCount: c,
		headItem: i[0] || null,
		tailItems: i.slice(Math.max(1, i.length - (c - 1))),
		collapsedItems: i.slice(1, i.length - (c - 1)),
		isOnly: i.length === 1,
		minWidth: t(s)
	};
}
//#endregion
export { r as calculateBreadcrumbState };
