import { chatPermission as e } from "./capabilities.js";
//#region src/sds/chat/F0Chat/utils/message-actions.ts
var t = ({ channelType: t, capabilities: n }) => e("canViewInfo", t, n), n = ({ channelType: t, capabilities: n }) => e("canCopy", t, n), r = ({ channelType: t, capabilities: n }) => e("canReact", t, n), i = ({ channelType: t, capabilities: n }) => e("canReply", t, n), a = ({ message: e, isMine: t, capabilities: n }) => n?.canDeleteMessage ? n.canDeleteMessage(e) : t, o = ({ message: e, isMine: t, capabilities: n, hasEditMessage: r, editWindowMs: i }) => {
	if (e.deleted || !r || (e.attachments ?? []).some((e) => e.kind === "voice" || e.kind === "card")) return !1;
	if (n?.canEditMessage) return n.canEditMessage(e);
	let a = i == null || Date.now() - new Date(e.createdAt).getTime() <= i;
	return t && a;
}, s = (e) => t(e) || n(e) || r(e) || i(e) || a(e) || o(e);
//#endregion
export { n as canCopyAction, a as canDeleteAction, o as canEditAction, r as canReactAction, i as canReplyAction, t as canViewInfoAction, s as hasAnyMessageAction };
