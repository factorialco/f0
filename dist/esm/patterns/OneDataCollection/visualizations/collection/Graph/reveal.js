//#region src/patterns/OneDataCollection/visualizations/collection/Graph/reveal.ts
function e({ isInitialLoading: e, initialConsumed: t, revealNodeId: n, lastRevealed: r, revealNonce: i, lastNonce: a }) {
	return e ? {
		revealId: null,
		consumeInitial: !1,
		lastRevealed: r,
		lastNonce: a
	} : t ? n && (n !== r || i !== a) ? {
		revealId: n,
		consumeInitial: !1,
		lastRevealed: n,
		lastNonce: i
	} : {
		revealId: null,
		consumeInitial: !1,
		lastRevealed: r,
		lastNonce: a
	} : {
		revealId: null,
		consumeInitial: !0,
		lastRevealed: n,
		lastNonce: i
	};
}
//#endregion
export { e as resolveGraphReveal };
