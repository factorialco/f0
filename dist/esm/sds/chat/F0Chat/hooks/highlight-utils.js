import "./useMentions.js";
//#region src/sds/chat/F0Chat/hooks/highlight-utils.ts
var e = (e, t) => e === "@everyone" ? "everyone" : t != null && e === t ? "self" : "other";
function t(t, n, r) {
	let i = r?.cursorPosition ?? t.length, a = r?.inlineCompletion ?? null, o = r?.currentUserId, s = [];
	for (let r of n) {
		let n = `@${r.name}`, i = e(r.id, o), a = 0;
		for (;;) {
			let e = t.indexOf(n, a);
			if (e === -1) break;
			s.push({
				start: e,
				end: e + n.length,
				tone: i
			}), a = e + n.length;
		}
	}
	s.sort((e, t) => e.start - t.start);
	let c = [], l = 0, u = !1, d = (e) => {
		if (!a || u || i < l || i > e) {
			e > l && c.push({
				type: "text",
				text: t.slice(l, e)
			}), l = e;
			return;
		}
		i > l && c.push({
			type: "text",
			text: t.slice(l, i)
		}), c.push({
			type: "ghost",
			text: a
		}), u = !0, i < e && c.push({
			type: "text",
			text: t.slice(i, e)
		}), l = e;
	};
	for (let e of s) d(e.start), c.push({
		type: "mention",
		text: t.slice(e.start, e.end),
		tone: e.tone
	}), l = e.end;
	return d(t.length), !u && a && i >= l && c.push({
		type: "ghost",
		text: a
	}), c.length === 0 ? [{
		type: "text",
		text: t
	}] : c;
}
//#endregion
export { t as buildHighlightSegments };
