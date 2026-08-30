//#region src/kits/Charts/utils/muncher.ts
function e(e) {
	return e.map((e) => ({
		x: e.label,
		...e.values
	}));
}
//#endregion
export { e as prepareData };
