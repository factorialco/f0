//#region src/components/F0VideoPlayer/utils.ts
var e = [
	.5,
	.75,
	1,
	1.25,
	1.5
], t = .25, n = .1, r = [
	25,
	50,
	75
], i = 3e5, a = .03;
function o(e) {
	return !Number.isFinite(e) || e < 0 ? "0:00" : `${Math.floor(e / 60)}:${Math.floor(e % 60).toString().padStart(2, "0")}`;
}
function s(e) {
	return `${e}x`;
}
function c(t) {
	return e.includes(t);
}
//#endregion
export { a as COMPLETION_TAIL_RATIO, r as DEFAULT_MILESTONES, t as SEEK_EPSILON, i as TRACKING_INTERVAL_MS, n as VOLUME_STEP, s as formatPlaybackRate, o as formatTime, c as isPlaybackRate, e as playbackRates };
