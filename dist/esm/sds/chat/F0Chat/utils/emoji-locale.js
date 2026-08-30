//#region src/sds/chat/F0Chat/utils/emoji-locale.ts
var e = {
	bn: () => import("emojibase-data/bn/compact.json"),
	da: () => import("emojibase-data/da/compact.json"),
	de: () => import("emojibase-data/de/compact.json"),
	"en-gb": () => import("emojibase-data/en-gb/compact.json"),
	es: () => import("emojibase-data/es/compact.json"),
	"es-mx": () => import("emojibase-data/es-mx/compact.json"),
	et: () => import("emojibase-data/et/compact.json"),
	fi: () => import("emojibase-data/fi/compact.json"),
	fr: () => import("emojibase-data/fr/compact.json"),
	hi: () => import("emojibase-data/hi/compact.json"),
	hu: () => import("emojibase-data/hu/compact.json"),
	it: () => import("emojibase-data/it/compact.json"),
	ja: () => import("emojibase-data/ja/compact.json"),
	ko: () => import("emojibase-data/ko/compact.json"),
	lt: () => import("emojibase-data/lt/compact.json"),
	ms: () => import("emojibase-data/ms/compact.json"),
	nb: () => import("emojibase-data/nb/compact.json"),
	nl: () => import("emojibase-data/nl/compact.json"),
	pl: () => import("emojibase-data/pl/compact.json"),
	pt: () => import("emojibase-data/pt/compact.json"),
	ru: () => import("emojibase-data/ru/compact.json"),
	sv: () => import("emojibase-data/sv/compact.json"),
	th: () => import("emojibase-data/th/compact.json"),
	uk: () => import("emojibase-data/uk/compact.json"),
	vi: () => import("emojibase-data/vi/compact.json"),
	zh: () => import("emojibase-data/zh/compact.json"),
	"zh-hant": () => import("emojibase-data/zh-hant/compact.json")
}, t = (t) => {
	if (!t) return null;
	let n = t.toLowerCase();
	if (n === "en" || n.startsWith("en-")) return n in e ? n : null;
	if (n in e) return n;
	let r = n.split("-")[0];
	return r in e ? r : null;
}, n = () => typeof navigator > "u" ? void 0 : navigator.language, r = /* @__PURE__ */ new Map(), i = (e) => {
	let t = /* @__PURE__ */ new Map(), n = (e, n, r) => {
		t.set(e.toLowerCase(), [n, ...r ?? []]);
	};
	for (let t of e) {
		n(t.hexcode, t.label, t.tags);
		for (let e of t.skins ?? []) n(e.hexcode, e.label ?? t.label, e.tags ?? t.tags);
	}
	return t;
}, a = (t) => {
	if (!t) return Promise.resolve(/* @__PURE__ */ new Map());
	let n = r.get(t);
	if (n) return n;
	let a = e[t];
	if (!a) return Promise.resolve(/* @__PURE__ */ new Map());
	let o = a().then((e) => i(e.default)).catch(() => /* @__PURE__ */ new Map());
	return r.set(t, o), o;
};
//#endregion
export { n as browserEmojiLocale, a as loadEmojiLocaleTerms, t as resolveEmojiLocale };
