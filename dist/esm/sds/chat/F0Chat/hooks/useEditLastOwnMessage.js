import { useF0Chat as e } from "../providers/F0ChatProvider.js";
import { isUserMessage as t } from "../types.js";
import { useChatComposeActions as n } from "../providers/ChatUIProvider.js";
import { canEditChatMessage as r } from "../utils/message-permissions.js";
import { useCallback as i, useRef as a } from "react";
//#region src/sds/chat/F0Chat/hooks/useEditLastOwnMessage.ts
var o = (e, n) => {
	for (let i = e.length - 1; i >= 0; i--) {
		let a = e[i];
		if (!(!t(a) || !a.isMine)) return a.body.trim() === "" ? null : r(a, n) ? a : null;
	}
	return null;
}, s = () => {
	let { messages: t, hasMoreNewer: r, editMessage: s, capabilities: c, editWindowMs: l } = e(), { startEdit: u } = n(), d = a(null);
	return i(() => {
		if (!s || r === !0) return !1;
		let e = {
			hasEditMessage: !0,
			capabilities: c,
			editWindowMs: l
		}, n = d.current;
		if (n && n.messages === t && n.policy.capabilities === c && n.policy.editWindowMs === l) return !1;
		let i = o(t, e);
		return i ? (u(i), !0) : (d.current = {
			messages: t,
			policy: e
		}, !1);
	}, [
		t,
		r,
		s,
		c,
		l,
		u
	]);
};
//#endregion
export { o as findShortcutEditTarget, s as useEditLastOwnMessage };
