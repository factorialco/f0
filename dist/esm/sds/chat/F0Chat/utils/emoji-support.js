import { fontFamily as e } from "@factorialco/f0-core";
//#region src/sds/chat/F0Chat/utils/emoji-support.ts
var t = [
	{
		version: 1,
		emoji: "😀"
	},
	{
		version: 2,
		emoji: "🗨️"
	},
	{
		version: 3,
		emoji: "🤣"
	},
	{
		version: 4,
		emoji: "👱‍♀️"
	},
	{
		version: 5,
		emoji: "🤩"
	},
	{
		version: 11,
		emoji: "🥰"
	},
	{
		version: 12,
		emoji: "🥱"
	},
	{
		version: 12.1,
		emoji: "🧑‍🦰"
	},
	{
		version: 13,
		emoji: "🥲"
	},
	{
		version: 13.1,
		emoji: "😵‍💫"
	},
	{
		version: 14,
		emoji: "🫠"
	},
	{
		version: 15,
		emoji: "🫨"
	}
], n = t[t.length - 1].version, r = "￿", i = `32px ${e.emoji.join(",")}`, a = 36, o = 1.5, s = (e, t) => (e.clearRect(0, 0, a, a), e.fillText(t, 0, 0), e.getImageData(0, 0, a, a).data), c = (e) => {
	for (let t = 3; t < e.length; t += 4) if (e[t] !== 0) return !1;
	return !0;
}, l = (e, t) => {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
	return !0;
}, u = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.createElement("canvas");
		e.width = a, e.height = a;
		let n = e.getContext("2d", { willReadFrequently: !0 });
		if (!n) return null;
		n.font = i, n.textBaseline = "top";
		let o = s(n, r), l = n.measureText(t[0].emoji).width;
		return l === 0 || c(s(n, t[0].emoji)) ? null : {
			context: n,
			singleGlyphWidth: l,
			notdefPixels: o
		};
	} catch {
		return null;
	}
}, d = (e, t) => {
	let n = s(e.context, t);
	return c(n) || l(n, e.notdefPixels) ? !1 : e.context.measureText(t).width <= e.singleGlyphWidth * o;
}, f = null, p = () => {
	if (f !== null) return f;
	let e = u();
	if (!e) return f = n, f;
	let r = t[0].version;
	for (let { version: n, emoji: i } of t) {
		if (!d(e, i)) break;
		r = n;
	}
	return f = r, f;
};
//#endregion
export { n as MAX_EMOJI_VERSION, p as detectMaxEmojiVersion };
