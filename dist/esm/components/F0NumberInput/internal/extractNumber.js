//#region src/components/F0NumberInput/internal/extractNumber.ts
var e = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function t(t, { maxDecimals: n }) {
	if (!t || t === "-") return {
		formattedValue: t ?? "",
		value: null
	};
	let r = t.match(e);
	if (!r) return null;
	let [i, a, o, s, c] = r;
	n && (c?.length ?? 0) > n ? c = c?.slice(0, n) : n === 0 && (c = ""), o = o?.replace(/^0+(\d)/, (e, t) => t) ?? "";
	let l = `${a}${o}${n === 0 ? "" : `${s ?? ""}${c ?? ""}`}`, u = parseFloat(l.replace(",", "."));
	return {
		formattedValue: l,
		value: Number.isNaN(u) ? null : u
	};
}
//#endregion
export { t as extractNumber };
