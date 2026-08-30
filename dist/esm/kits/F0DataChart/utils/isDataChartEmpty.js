//#region src/kits/F0DataChart/utils/isDataChartEmpty.ts
function e(e) {
	switch (e.type) {
		case "bar":
		case "line": {
			let t = e.series;
			return !Array.isArray(t) || t.length === 0 || t.every((e) => !e || !Array.isArray(e.data) || e.data.length === 0);
		}
		case "funnel":
		case "pie": {
			let t = e.series;
			return !t || !Array.isArray(t.data) || t.data.length === 0;
		}
		case "radar": {
			let t = e.series;
			return !Array.isArray(t) || t.length === 0 || t.every((e) => !e || !Array.isArray(e.data) || e.data.length === 0);
		}
		case "gauge": return e.value == null;
		case "heatmap": {
			let t = e.data;
			return !Array.isArray(t) || t.length === 0;
		}
		case "scatter": {
			let t = e.series;
			return !Array.isArray(t) || t.length === 0 || t.every((e) => !e || !Array.isArray(e.data) || e.data.length === 0);
		}
		default: return !0;
	}
}
//#endregion
export { e as isDataChartEmpty };
