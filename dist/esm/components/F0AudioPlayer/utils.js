//#region src/components/F0AudioPlayer/utils.ts
var e = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith("data-"))), t = (e) => {
	(!Number.isFinite(e) || e < 0) && (e = 0);
	let t = Math.floor(e), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = t % 60, a = (e) => String(e).padStart(2, "0");
	return n > 0 ? `${n}:${a(r)}:${a(i)}` : `${r}:${a(i)}`;
}, n = (e) => e.map((e, t) => ({
	start: e.startTime,
	cueIndex: t
})).filter((e) => typeof e.start == "number" && Number.isFinite(e.start)).sort((e, t) => e.start - t.start), r = (e, t) => {
	let n = 0, r = e.length - 1, i = -1;
	for (; n <= r;) {
		let a = n + r >> 1, o = e[a];
		if (o === void 0) break;
		o.start <= t ? (i = o.cueIndex, n = a + 1) : r = a - 1;
	}
	return i;
};
//#endregion
export { n as buildCueTimeline, r as findActiveCueIndex, t as formatPlaybackTime, e as getDataAttributes };
