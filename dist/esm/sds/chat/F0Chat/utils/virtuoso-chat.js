import { documentPreviewKind as e, isVideoFileAttachment as t } from "./attachments.js";
//#region src/sds/chat/F0Chat/utils/virtuoso-chat.ts
var n = 10 ** 7, r = (e) => ({
	firstId: e[0]?.id ?? null,
	lastId: e[e.length - 1]?.id ?? null,
	length: e.length
});
function i(e, t, n = !1) {
	if (e.length === 0 && t.length === 0) return "none";
	if (e.length === 0) return "initial";
	if (t.length === 0) return "replace";
	let r = t.firstId !== e.firstId, i = t.lastId !== e.lastId;
	return !r && !i ? "none" : r && !i ? "prepend" : !r && i ? "append" : n ? "grow" : "replace";
}
function a(e, t, r, i, a = 0) {
	return t === "initial" || t === "replace" ? n : t === "prepend" ? e - (i - r) : t === "grow" ? e - a : e;
}
var o = (e, t) => t == null ? 0 : e.get(t) ?? 0, s = ({ messages: e, rowCount: t, indexById: i }) => {
	let a = r(e);
	return {
		ends: a,
		headRowIndex: o(i, a.firstId),
		rowCount: t,
		firstItemIndex: n,
		epoch: 0
	};
};
function c(e, { messages: t, rowCount: n, indexById: s, hasMoreNewer: c }) {
	let l = e.ends, u = r(t), d = l.firstId == null ? void 0 : s.get(l.firstId), f = i(l, u, d != null || l.lastId != null && s.has(l.lastId));
	if (f === "none") return {
		state: e,
		change: f,
		ownGlide: !1
	};
	let p = d == null ? 0 : d - e.headRowIndex, m = a(e.firstItemIndex, f, e.rowCount, n, p), h = t[t.length - 1], g = (f === "append" || f === "grow") && !c && u.lastId !== l.lastId && !!h?.isMine;
	return {
		state: {
			ends: u,
			headRowIndex: o(s, u.firstId),
			rowCount: n,
			firstItemIndex: m,
			epoch: f === "replace" || f === "initial" ? e.epoch + 1 : e.epoch
		},
		change: f,
		ownGlide: g
	};
}
function l({ pendingIndex: e, dividerIndex: t, hasMoreNewer: n }) {
	return e == null ? n ? {
		index: 0,
		align: "start"
	} : t >= 0 ? {
		index: t,
		align: "start",
		offset: -88
	} : {
		index: "LAST",
		align: "end"
	} : {
		index: e,
		align: "center"
	};
}
var u = ({ prevHeight: e, height: t, prevCount: n, count: r, atBottom: i }) => i && r === n && t > e, d = (e, t = 3) => e.scrollTop <= e.clientHeight * t, f = 20, p = 0, m = 24, h = 22, g = 52, _ = 20, v = 46, y = 32, b = 96, x = 300, S = 220, C = 200, w = 58, T = 96, E = 120, D = 56, O = 40, k = 40, A = 36, j = 56, M = 24, N = (e) => {
	let t = e.trim();
	return t.length === 0 ? 0 : t.split("\n").reduce((e, t) => e + Math.max(1, Math.ceil(t.length / g)), 0) * h;
};
function P(n) {
	switch (n.type) {
		case "separator": return O;
		case "divider": return k;
		case "system": return A;
		case "typing": return j;
		case "footer": return M;
	}
	let { message: r } = n, i = n.isFirstOfRun ? f : p;
	if (r.deleted) return i + m;
	let a = r.attachments ?? [], o = !1, s = 0;
	for (let n of a) {
		if (o = !0, n.kind === "image") {
			s += 1;
			continue;
		}
		n.kind === "location" ? i += C : n.kind === "voice" ? i += w : n.kind === "card" ? i += E : t(n) ? i += S : e(n) ? i += T : i += D;
	}
	s > 0 && (i += x);
	let c = N(r.body);
	return (c > 0 || r.replyTo) && (i += m + c, r.replyTo && (i += v), n.isFirstOfRun && !o && (i += _), i += (r.linkPreviews?.length ?? 0) * b), (r.reactions?.length ?? 0) > 0 && (i += y), i;
}
var F = (e) => e.map(P), I = (e, t) => e ? t ? "auto" : "smooth" : !1;
//#endregion
export { n as PREPEND_OFFSET, c as advanceChatWindow, F as chatHeightEstimates, P as chatRowHeightEstimate, i as classifyWindowChange, l as entryLocation, I as followDecision, s as initialChatWindow, a as nextFirstItemIndex, d as shouldPrefetchOlder, u as shouldRepinOnGrowth, r as windowEnds };
