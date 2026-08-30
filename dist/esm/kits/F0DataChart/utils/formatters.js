//#region src/kits/F0DataChart/utils/formatters.ts
function e(e, t) {
	if (t === 0) return "0%";
	let n = e / t * 100;
	return n === 100 ? "100%" : `${n.toFixed(1)}%`;
}
//#endregion
export { e as formatPercent };
