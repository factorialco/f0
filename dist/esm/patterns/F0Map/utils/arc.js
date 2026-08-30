//#region src/patterns/F0Map/utils/arc.ts
var e = (e, t, n = .3, r = 64) => {
	let [i, a] = e, [o, s] = t, c = (i + o) / 2, l = (a + s) / 2, u = c - (s - a) * n, d = l + (o - i) * n, f = [];
	for (let e = 0; e <= r; e++) {
		let t = e / r, n = 1 - t, c = n * n, l = 2 * n * t, p = t * t;
		f.push([c * i + l * u + p * o, c * a + l * d + p * s]);
	}
	return f;
};
//#endregion
export { e as arcLineString };
