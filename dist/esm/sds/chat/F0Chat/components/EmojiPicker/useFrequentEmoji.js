import { readFromLocalStorage as e, writeToLocalStorage as t } from "../../../../../lib/local-storage.js";
import { DEFAULT_EMOJI_IDS as n, findEmojiById as r } from "../../utils/emoji-index.js";
import { useCallback as i, useState as a } from "react";
//#region src/sds/chat/F0Chat/components/EmojiPicker/useFrequentEmoji.ts
var o = "f0.emoji-picker.frequent", s = 18, c = 64, l = () => {
	let t = e(o, null);
	return !t || typeof t != "object" || Array.isArray(t) ? {} : Object.fromEntries(Object.entries(t).flatMap(([e, t]) => typeof t == "number" && Number.isFinite(t) && t > 0 ? [[e, t]] : []));
}, u = (e) => {
	let t = Object.entries(e).sort(([e, t], [n, r]) => r - t || e.localeCompare(n)).flatMap(([e]) => {
		let t = r(e);
		return t ? [t] : [];
	});
	if (t.length >= s) return t.slice(0, s);
	let i = new Set(t.map((e) => e.id)), a = n.flatMap((e) => {
		if (i.has(e)) return [];
		let t = r(e);
		return t ? [t] : [];
	});
	return [...t, ...a].slice(0, s);
}, d = () => {
	let [e, n] = a(() => typeof window > "u" ? {} : l()), r = i((e) => {
		n((n) => {
			let r = {
				...n,
				[e.id]: Math.min((n[e.id] ?? 0) + 1, c)
			};
			return t(o, r), r;
		});
	}, []);
	return {
		frequent: u(e),
		recordUse: r
	};
};
//#endregion
export { d as useFrequentEmoji };
