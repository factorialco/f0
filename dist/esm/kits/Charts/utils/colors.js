//#region src/kits/Charts/utils/colors.tsx
var e = (e, n) => {
	let r = [
		"categorical-1",
		"categorical-2",
		"categorical-3",
		"categorical-4",
		"categorical-5",
		"categorical-6",
		"categorical-7",
		"categorical-8"
	];
	return t(r[e % r.length], n);
}, t = (e, t) => {
	let n = t === void 0 ? "" : ` / ${t}`;
	return `hsl(var(--${`chart-${e}`})${n})`;
};
//#endregion
export { e as getCategoricalColor, t as getColor };
