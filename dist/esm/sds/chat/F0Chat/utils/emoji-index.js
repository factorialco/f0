import e from "@emoji-mart/data/sets/15/native.json";
//#region src/sds/chat/F0Chat/utils/emoji-index.ts
var t = [
	"people",
	"nature",
	"foods",
	"activity",
	"places",
	"objects",
	"symbols",
	"flags"
], n = (e) => e.toLowerCase().replace(/[_-]+/g, " ").trim(), r = /* @__PURE__ */ new Map();
for (let [t, n] of Object.entries(e.aliases)) {
	let e = r.get(n) ?? [];
	e.push(t), r.set(n, e);
}
var i = Object.values(e.emojis).flatMap((e, t) => {
	let i = e.skins[0]?.native;
	if (!i) return [];
	let a = r.get(e.id) ?? [], o = e.keywords ?? [];
	return [{
		id: e.id,
		name: e.name,
		native: i,
		version: e.version,
		hexcode: (e.skins[0]?.unified ?? "").toLowerCase(),
		aliases: a,
		keywords: o,
		normalizedName: n(e.name),
		normalizedShortcodes: [e.id, ...a].map(n),
		normalizedKeywords: o.map(n),
		order: t
	}];
}), a = new Map(i.map((e) => [e.id, e])), o = /* @__PURE__ */ new Map();
for (let e of i) {
	o.set(e.id.toLowerCase(), e);
	for (let t of e.aliases) o.set(t.toLowerCase(), e);
}
var s = e.categories.flatMap((e) => t.includes(e.id) ? [{
	id: e.id,
	emojis: e.emojis.flatMap((e) => {
		let t = a.get(e);
		return t ? [t] : [];
	})
}] : []), c = [
	"+1",
	"heart",
	"joy",
	"tada",
	"smile",
	"fire",
	"eyes",
	"white_check_mark"
], l = (e) => o.get(e.toLowerCase()) ?? null, u = (e) => a.get(e) ?? null, d = (e, t, n = []) => e.normalizedShortcodes.some((e) => e === t) || n.some((e) => e === t) ? 0 : e.normalizedShortcodes.some((e) => e.startsWith(t)) || n.some((e) => e.startsWith(t)) ? 10 : e.normalizedKeywords.some((e) => e === t) ? 20 : e.normalizedKeywords.some((e) => e.startsWith(t)) ? 30 : e.normalizedName.startsWith(t) ? 40 : e.normalizedShortcodes.some((e) => e.includes(t)) || e.normalizedKeywords.some((e) => e.includes(t)) || e.normalizedName.includes(t) || n.some((e) => e.includes(t)) ? 50 : null, f = (e, { limit: t, maxVersion: r, localizedTerms: o } = {}) => {
	let s = n(e), l = (e) => r === void 0 || e.version <= r;
	if (!s) {
		let e = c.flatMap((e) => {
			let t = a.get(e);
			return t && l(t) ? [t] : [];
		});
		return t === void 0 ? e : e.slice(0, t);
	}
	let u = i.flatMap((e) => {
		if (!l(e)) return [];
		let t = o?.get(e.hexcode)?.map(n), r = d(e, s, t);
		return r === null ? [] : [{
			emoji: e,
			score: r
		}];
	}).sort((e, t) => e.score - t.score || e.emoji.id.length - t.emoji.id.length || e.emoji.order - t.emoji.order);
	return (t === void 0 ? u : u.slice(0, t)).map(({ emoji: e }) => e);
};
//#endregion
export { c as DEFAULT_EMOJI_IDS, a as EMOJI_BY_ID, s as EMOJI_CATEGORIES, t as EMOJI_CATEGORY_IDS, i as EMOJI_INDEX, u as findEmojiById, l as findEmojiByShortcode, f as searchEmoji };
