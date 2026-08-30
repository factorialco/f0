"use client";
import { createContext as e, useContext as t, useLayoutEffect as n, useMemo as r, useRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/providers/F0ChatProvider.tsx
var o = e(null), s = e(null), c = () => {}, l = e({
	onMessageCopied: c,
	onMessageInfoViewed: c,
	onReplyStarted: c,
	onReplyCancelled: c,
	onEditStarted: c,
	onEditCancelled: c,
	onReactionAdded: c,
	onReactionRemoved: c,
	onFileAttached: c,
	onAttachmentRemoved: c,
	onEmojiInserted: c,
	onMentionInserted: c,
	onVoiceRecordingStarted: c,
	onVoiceRecordingCancelled: c,
	onVoiceNotePlayed: c,
	onVoicePlaybackRateChanged: c,
	onImageOpened: c,
	onDocumentOpened: c,
	onAttachmentDownloaded: c,
	onLocationOpened: c,
	onLinkPreviewClicked: c,
	onCardActivated: c,
	onSearchOpened: c,
	onSearchResultNavigated: c,
	onJumpedToQuotedMessage: c,
	onJumpedToBottom: c
}), u = e({
	hasReported: () => !1,
	markReported: () => {}
}), d = (e) => {
	let t = i(e), n = t.current, r = n === e || n != null && e != null && n.canSend === e.canSend && n.canReply === e.canReply && n.canReact === e.canReact && n.canUpload === e.canUpload && n.canCopy === e.canCopy && n.canViewInfo === e.canViewInfo && n.canEditMessage === e.canEditMessage && n.canDeleteMessage === e.canDeleteMessage;
	return r || (t.current = e), r ? n : e;
}, f = ({ runtime: e, events: t, children: c }) => {
	let f = i(e);
	f.current = e;
	let p = i(t);
	n(function() {
		p.current = t;
	});
	let m = i(/* @__PURE__ */ new Set()), h = r(() => ({
		hasReported: (e) => m.current.has(e),
		markReported: (e) => m.current.add(e)
	}), []), g = i(/* @__PURE__ */ new Map()), _ = i(e.channel.id);
	_.current !== e.channel.id && (g.current.clear(), m.current.clear(), _.current = e.channel.id);
	let v = r(() => ({
		toggleReaction: (e, t) => void f.current.toggleReaction(e, t),
		loadReactionUsers: (e, t, n) => {
			let r = f.current;
			if (!r.loadReactionUsers) return Promise.resolve([]);
			let i = `${r.channel.id}\u0000${e}\u0000${t}\u0000`, a = `${i}${n}`, o = g.current.get(a);
			if (o) return o;
			for (let e of g.current.keys()) e.startsWith(i) && g.current.delete(e);
			let s = r.loadReactionUsers(e, t);
			return g.current.set(a, s), s.catch(() => {
				g.current.get(a) === s && g.current.delete(a);
			}), s;
		},
		retryMessage: (e) => void f.current.retryMessage(e),
		deleteMessage: (e) => void f.current.deleteMessage(e),
		deleteFailedMessage: (e) => void f.current.deleteFailedMessage?.(e),
		editMessage: (e, t) => void f.current.editMessage?.(e, t)
	}), []), y = r(() => {
		let e = (e) => {
			let t = p.current;
			if (t) try {
				e(t);
			} catch (e) {
				console.error("F0Chat: an `events` handler threw", e);
			}
		};
		return {
			onMessageCopied: (t) => e((e) => e.onMessageCopied?.(t)),
			onMessageInfoViewed: (t) => e((e) => e.onMessageInfoViewed?.(t)),
			onReplyStarted: (t) => e((e) => e.onReplyStarted?.(t)),
			onReplyCancelled: (t) => e((e) => e.onReplyCancelled?.(t)),
			onEditStarted: (t) => e((e) => e.onEditStarted?.(t)),
			onEditCancelled: (t) => e((e) => e.onEditCancelled?.(t)),
			onReactionAdded: (t) => e((e) => e.onReactionAdded?.(t)),
			onReactionRemoved: (t) => e((e) => e.onReactionRemoved?.(t)),
			onFileAttached: (t) => e((e) => e.onFileAttached?.(t)),
			onAttachmentRemoved: (t) => e((e) => e.onAttachmentRemoved?.(t)),
			onEmojiInserted: (t) => e((e) => e.onEmojiInserted?.(t)),
			onMentionInserted: (t) => e((e) => e.onMentionInserted?.(t)),
			onVoiceRecordingStarted: () => e((e) => e.onVoiceRecordingStarted?.()),
			onVoiceRecordingCancelled: () => e((e) => e.onVoiceRecordingCancelled?.()),
			onVoiceNotePlayed: (t) => e((e) => e.onVoiceNotePlayed?.(t)),
			onVoicePlaybackRateChanged: (t) => e((e) => e.onVoicePlaybackRateChanged?.(t)),
			onImageOpened: (t) => e((e) => e.onImageOpened?.(t)),
			onDocumentOpened: (t) => e((e) => e.onDocumentOpened?.(t)),
			onAttachmentDownloaded: (t) => e((e) => e.onAttachmentDownloaded?.(t)),
			onLocationOpened: () => e((e) => e.onLocationOpened?.()),
			onLinkPreviewClicked: () => e((e) => e.onLinkPreviewClicked?.()),
			onCardActivated: (t) => e((e) => e.onCardActivated?.(t)),
			onSearchOpened: () => e((e) => e.onSearchOpened?.()),
			onSearchResultNavigated: (t) => e((e) => e.onSearchResultNavigated?.(t)),
			onJumpedToQuotedMessage: () => e((e) => e.onJumpedToQuotedMessage?.()),
			onJumpedToBottom: () => e((e) => e.onJumpedToBottom?.())
		};
	}, []), b = d(e.capabilities), x = !!e.editMessage, S = !!e.deleteFailedMessage, C = !!e.loadReactionUsers, w = r(() => ({
		currentUserId: e.currentUserId,
		channelType: e.channel.type,
		capabilities: b,
		editWindowMs: e.editWindowMs,
		toggleReaction: v.toggleReaction,
		loadReactionUsers: C ? v.loadReactionUsers : void 0,
		retryMessage: v.retryMessage,
		deleteMessage: v.deleteMessage,
		deleteFailedMessage: S ? v.deleteFailedMessage : void 0,
		editMessage: x ? v.editMessage : void 0
	}), [
		e.currentUserId,
		e.channel.type,
		b,
		e.editWindowMs,
		x,
		S,
		C,
		v
	]);
	return /* @__PURE__ */ a(o.Provider, {
		value: e,
		children: /* @__PURE__ */ a(l.Provider, {
			value: y,
			children: /* @__PURE__ */ a(u.Provider, {
				value: h,
				children: /* @__PURE__ */ a(s.Provider, {
					value: w,
					children: c
				})
			})
		})
	});
};
function p() {
	let e = t(o);
	if (!e) throw Error("useF0Chat must be used within an F0ChatProvider");
	return e;
}
function m() {
	let e = t(s);
	if (!e) throw Error("useF0ChatStable must be used within an F0ChatProvider");
	return e;
}
function h() {
	return t(s)?.channelType ?? "dm";
}
function g() {
	return t(l);
}
function _() {
	return t(u);
}
//#endregion
export { f as F0ChatProvider, p as useF0Chat, h as useF0ChatChannelType, g as useF0ChatEmit, m as useF0ChatStable, _ as useF0ChatVoicePlayLog };
