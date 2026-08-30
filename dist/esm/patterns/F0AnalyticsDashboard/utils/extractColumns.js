//#region src/patterns/F0AnalyticsDashboard/utils/extractColumns.ts
function e(e) {
	if (e.length === 0) return [];
	let t = e[0];
	return Object.keys(t).filter((e) => typeof e == "string" && !e.startsWith("_"));
}
//#endregion
export { e as extractColumns };
