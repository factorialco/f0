//#region src/sds/chat/F0Chat/utils/message-permissions.ts
var e = (e, { hasEditMessage: t, capabilities: n, editWindowMs: r }) => {
	if (!t || e.deleted || e.status === "sending" || e.status === "failed" || (e.attachments ?? []).some((e) => e.kind === "voice")) return !1;
	if (n?.canEditMessage) return n.canEditMessage(e);
	let i = r == null || Date.now() - new Date(e.createdAt).getTime() <= r;
	return e.isMine && i;
};
//#endregion
export { e as canEditChatMessage };
