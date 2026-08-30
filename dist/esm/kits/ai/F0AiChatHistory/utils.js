import { format as e, isSameMonth as t, isSameYear as n, isToday as r, isYesterday as i } from "date-fns";
//#region src/kits/ai/F0AiChatHistory/utils.ts
function a(e) {
	let n = new Date(e), a = /* @__PURE__ */ new Date();
	return r(n) ? "today" : i(n) ? "yesterday" : t(n, a) ? "thisMonth" : "older";
}
function o(t, a, o) {
	let s = new Date(t), c = e(s, "p", { locale: o });
	if (r(s)) return `${a.today}, ${c}`;
	if (i(s)) return `${a.yesterday}, ${c}`;
	let l = !n(s, /* @__PURE__ */ new Date());
	return `${e(s, l ? "MMM d yyyy" : "MMM d", { locale: o })}, ${c}`;
}
function s(e) {
	let t = {
		today: [],
		yesterday: [],
		thisMonth: [],
		older: []
	};
	for (let n of e) t[a(n.updatedAt)].push(n);
	return [
		"today",
		"yesterday",
		"thisMonth",
		"older"
	].filter((e) => t[e].length > 0).map((e) => ({
		key: e,
		threads: t[e]
	}));
}
//#endregion
export { o as formatThreadDate, a as getDateGroup, s as groupThreadsByDate };
