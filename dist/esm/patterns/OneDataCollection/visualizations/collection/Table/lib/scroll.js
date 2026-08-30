//#region src/patterns/OneDataCollection/visualizations/collection/Table/lib/scroll.ts
var e = (e) => {
	let t = e.parentElement;
	for (; t;) {
		let { overflow: e, overflowY: n } = getComputedStyle(t);
		if (e === "auto" || e === "scroll" || n === "auto" || n === "scroll") return t;
		t = t.parentElement;
	}
	return null;
}, t = (t, n) => {
	let r = e(t);
	if (!r) return;
	let i, a = () => {
		i !== void 0 && cancelAnimationFrame(i), i = requestAnimationFrame(n);
	};
	return r.addEventListener("scroll", a, { passive: !0 }), () => {
		r.removeEventListener("scroll", a), i !== void 0 && cancelAnimationFrame(i);
	};
};
//#endregion
export { e as findScrollContainer, t as subscribeToScroll };
