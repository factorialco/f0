//#region src/kits/ai/F0AiChatTextArea/highlight-utils.ts
function e(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function t(e, t, n) {
	let r = n?.cursorPosition ?? e.length, i = n?.inlineCompletion ?? null, a = [];
	for (let n of t) {
		let t = `@${n.name}`, r = 0;
		for (;;) {
			let n = e.indexOf(t, r);
			if (n === -1) break;
			a.push({
				start: n,
				end: n + t.length
			}), r = n + t.length;
		}
	}
	a.sort((e, t) => e.start - t.start);
	let o = [], s = 0, c = !1, l = (t) => {
		if (!i || c || r < s || r > t) {
			t > s && o.push({
				type: "text",
				text: e.slice(s, t)
			}), s = t;
			return;
		}
		r > s && o.push({
			type: "text",
			text: e.slice(s, r)
		}), o.push({
			type: "ghost",
			text: i
		}), c = !0, r < t && o.push({
			type: "text",
			text: e.slice(r, t)
		}), s = t;
	};
	for (let t of a) l(t.start), o.push({
		type: "mention",
		text: e.slice(t.start, t.end)
	}), s = t.end;
	return l(e.length), !c && i && r >= s && o.push({
		type: "ghost",
		text: i
	}), o.length === 0 ? [{
		type: "text",
		text: e
	}] : o;
}
//#endregion
export { t as buildHighlightSegments, e as escapeXml };
