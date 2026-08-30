import { isUserMessage as e } from "../types.js";
import { calendarDaysApart as t } from "./natural-time.js";
//#region src/sds/chat/F0Chat/utils/grouping.ts
var n = (e, n) => !n || t(new Date(n.createdAt), new Date(e.createdAt)) !== 0, r = (e, t) => e.type === t.type ? e.type === "separator" && t.type === "separator" ? e.at === t.at : e.type === "system" && t.type === "system" ? e.message === t.message : e.type === "message" && t.type === "message" ? e.message === t.message && e.isFirstOfRun === t.isFirstOfRun && e.isLastOfRun === t.isLastOfRun && e.isLastMessage === t.isLastMessage : e.type === "divider" : !1;
function i(t, i = {}) {
	let { dividerId: a = null, previousRows: o } = i, s = [], c = /* @__PURE__ */ new Map(), l = -1, u, d = -1;
	for (let n = t.length - 1; n >= 0; n--) if (e(t[n])) {
		d = n;
		break;
	}
	t.forEach((r, i) => {
		let o = n(r, t[i - 1]);
		o && s.push({
			type: "separator",
			key: `sep-${r.id}`,
			at: r.createdAt,
			forId: r.id
		});
		let f = a != null && r.id === a;
		if (f && s.push({
			type: "divider",
			key: "unread-divider"
		}), !e(r)) {
			s.push({
				type: "system",
				key: r.id,
				message: r
			}), c.set(r.id, s.length - 1), u = void 0;
			return;
		}
		let p = o || f || !u || u.author.id !== r.author.id;
		if (!p && l >= 0) {
			let e = s[l];
			e.type === "message" && (e.isLastOfRun = !1);
		}
		s.push({
			type: "message",
			key: r.id,
			message: r,
			isFirstOfRun: p,
			isLastOfRun: !0,
			isLastMessage: i === d
		}), l = s.length - 1, c.set(r.id, l), u = r;
	});
	let f = /* @__PURE__ */ new Map();
	for (let e = 0; e < s.length; e++) {
		let t = o?.get(s[e].key);
		t && r(t, s[e]) && (s[e] = t), f.set(s[e].key, s[e]);
	}
	return {
		rows: s,
		indexById: c,
		rowCache: f
	};
}
function a(e, t) {
	if (t === null) return [];
	let n = [];
	for (let r = e.length - 1; r >= 0; r--) {
		if (e[r].id === t) return n.reverse();
		n.push(e[r].id);
	}
	return [];
}
//#endregion
export { i as flattenChatRows, a as freshTailIds };
