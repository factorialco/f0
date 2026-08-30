var e = (e) => Math.min(e * 35, 210) / 1e3, t = [
	.05,
	.7,
	.1,
	1
], n = (n) => ({
	duration: .14,
	ease: t,
	delay: e(n)
}), r = {
	duration: .16,
	ease: t
}, i = {
	duration: .12,
	ease: "easeIn"
}, a = {
	duration: .15,
	ease: t
};
//#endregion
export { t as EASE_OUT_SWIFT, e as entryStaggerDelay, a as layoutTransition, r as microEnterTransition, i as microExitTransition, n as rowEntryTransition };
