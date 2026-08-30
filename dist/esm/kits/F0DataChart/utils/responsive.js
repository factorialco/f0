function e(e) {
	return e === 0 ? "lg" : e < 220 ? "sm" : e < 520 ? "md" : "lg";
}
//#endregion
export { e as resolveChartSize };
