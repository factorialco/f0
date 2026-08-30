//#region src/lib/fuzzyMatch.ts
var e = (e) => e.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""), t = (t, n) => {
	let r = e(t.trim());
	if (!r) return !0;
	let i = e(n), a = 0;
	for (let e of i) if (e === r[a] && a++, a === r.length) return !0;
	return a === r.length;
};
//#endregion
export { t as fuzzyMatch };
