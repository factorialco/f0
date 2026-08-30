//#region src/sds/Home/WidgetContainer/lockedCeiling.ts
var e = (e) => {
	let t = e.findIndex((e) => !e.locked);
	return e.slice(0, t < 0 ? e.length : t);
}, t = (t, n, r) => {
	let i = e(t).flatMap((e) => {
		let t = n?.querySelector(`[data-widget-id="${e.id}"]`)?.getBoundingClientRect();
		return t ? [t.bottom] : [];
	});
	return i.length > 0 ? Math.max(...i) + r : null;
}, n = (e) => ({ transform: t, draggingNodeRect: n, activeNodeRect: r }) => {
	let i = e(), a = (n ?? r)?.top;
	return i == null || a == null ? t : {
		...t,
		y: Math.max(t.y, i - a)
	};
};
//#endregion
export { t as lockedCeiling, n as noHigherThan, e as topPins };
