//#region src/components/F0AudioPlayer/utils.ts
var e = (e) => Object.fromEntries(Object.entries(e).filter(([e]) => e.startsWith("data-"))), t = (e) => {
	(!Number.isFinite(e) || e < 0) && (e = 0);
	let t = Math.floor(e), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = t % 60, a = (e) => String(e).padStart(2, "0");
	return n > 0 ? `${n}:${a(r)}:${a(i)}` : `${r}:${a(i)}`;
};
//#endregion
export { t as formatPlaybackTime, e as getDataAttributes };
