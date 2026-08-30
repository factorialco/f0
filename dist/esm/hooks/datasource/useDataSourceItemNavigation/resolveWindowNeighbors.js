//#region src/hooks/datasource/useDataSourceItemNavigation/resolveWindowNeighbors.ts
function e({ records: e, activeItemId: t, idProvider: n }) {
	if (t == null) return {
		activeIndex: -1,
		activeItem: null,
		previousItem: null,
		nextItem: null,
		resolvedBy: "window"
	};
	let r = e.findIndex((e, r) => n(e, r) === t);
	return {
		activeIndex: r,
		activeItem: r >= 0 ? e[r] : null,
		previousItem: r > 0 ? e[r - 1] : null,
		nextItem: r >= 0 && r < e.length - 1 ? e[r + 1] : null,
		resolvedBy: "window"
	};
}
//#endregion
export { e as resolveWindowNeighbors };
