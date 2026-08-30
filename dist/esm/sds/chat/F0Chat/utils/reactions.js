//#region src/sds/chat/F0Chat/utils/reactions.ts
var e = (e, t, n, r) => {
	let i = {
		messageId: t.id,
		emoji: n,
		source: r
	};
	t.reactions?.some((e) => e.emoji === n && e.reactedByMe) === !0 ? e.onReactionRemoved(i) : e.onReactionAdded(i);
};
//#endregion
export { e as emitReactionToggle };
