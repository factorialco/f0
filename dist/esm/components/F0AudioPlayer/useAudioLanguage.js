import { collectLanguages as e, defaultLocale as t, resolveLocalized as n } from "../../lib/localized.js";
import { useMemo as r, useState as i } from "react";
//#region src/components/F0AudioPlayer/useAudioLanguage.ts
function a(a, o) {
	let s = r(() => e(a), [a]), [c, l] = i(() => t(s, o)), u = s.some((e) => e.locale === c) ? c : t(s, o);
	return {
		languages: s,
		activeLocale: u,
		resolvedSrc: n(a, u) ?? "",
		setLocale: l
	};
}
function o(e) {
	if (!e) return;
	let t = e.currentTime, n = !e.paused, r = () => {
		e.currentTime = t, n && e.play().catch(() => {}), e.removeEventListener("loadedmetadata", r);
	};
	e.addEventListener("loadedmetadata", r);
}
//#endregion
export { o as preserveAudioPosition, a as useAudioLanguage };
