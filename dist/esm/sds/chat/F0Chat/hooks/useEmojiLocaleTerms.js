import { browserEmojiLocale as e, loadEmojiLocaleTerms as t, resolveEmojiLocale as n } from "../utils/emoji-locale.js";
import { useEffect as r, useMemo as i, useState as a } from "react";
//#region src/sds/chat/F0Chat/hooks/useEmojiLocaleTerms.ts
var o = (o) => {
	let [s, c] = a(), l = i(() => n(o ?? e()), [o]);
	return r(() => {
		if (!l) return;
		let e = !0;
		return t(l).then((t) => {
			e && c(t);
		}), () => {
			e = !1;
		};
	}, [l]), s;
};
//#endregion
export { o as useEmojiLocaleTerms };
