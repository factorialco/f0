var e = (e, t, n) => Math.min(n, Math.max(t, e)), t = (t, n) => t && n ? e(n / t, .6, 1.4) : 1, n = (e) => {
	if (e.length === 0) return [];
	if (e.length === 1) return [{
		index: 0,
		span: 2,
		aspectRatio: 1 / t(e[0]?.width, e[0]?.height),
		hiddenCount: 0
	}];
	if (e.length === 2) return e.map((e, t) => ({
		index: t,
		span: 1,
		aspectRatio: 1 / 1.3,
		hiddenCount: 0
	}));
	if (e.length === 3) return [
		{
			index: 0,
			span: 2,
			aspectRatio: 1 / .6,
			hiddenCount: 0
		},
		{
			index: 1,
			span: 1,
			aspectRatio: 1,
			hiddenCount: 0
		},
		{
			index: 2,
			span: 1,
			aspectRatio: 1,
			hiddenCount: 0
		}
	];
	let n = e.length - 4;
	return e.slice(0, 4).map((e, t) => ({
		index: t,
		span: 1,
		aspectRatio: 1,
		hiddenCount: t === 3 ? n : 0
	}));
};
//#endregion
export { n as albumCells, t as singlePhotoRatio };
