import { useVttSource as e } from "./useVttSource.js";
import { useEffect as t, useMemo as n, useRef as r, useState as i } from "react";
//#region src/components/F0VideoPlayer/hooks/useAudioDescription.ts
var a = "descriptions";
function o(o, { enabled: s, describedSrc: c, descriptions: l }) {
	let u = c !== void 0, { trackSrc: d, needsCrossOrigin: f } = e(l), [p, m] = i(!1), h = u || l !== void 0 || p, [g, _] = i(), v = r(!1);
	return t(() => {
		if (!o) return;
		let e = o.textTracks, t = typeof window < "u" && "speechSynthesis" in window, n = s && !u && t, r = () => {
			v.current && (v.current = !1, o.play().catch(() => {}));
		}, i = (e) => {
			window.speechSynthesis.cancel();
			let t = new SpeechSynthesisUtterance(e);
			t.onend = r, t.onerror = r, window.speechSynthesis.speak(t);
		}, c = /* @__PURE__ */ new WeakSet(), d = [], f = (e) => {
			if (e.kind !== a || (e.mode = "hidden", c.has(e)) || typeof e.addEventListener != "function") return;
			c.add(e);
			let t = () => {
				let t = e.activeCues?.[0]?.text || void 0;
				_(t), n && t && (o.paused || (o.pause(), v.current = !0), i(t));
			};
			e.addEventListener("cuechange", t), d.push(() => e.removeEventListener("cuechange", t));
		}, p = () => {
			let t = !1;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r.kind === a && (l === void 0 && (t = !0), f(r));
			}
			m(t);
		};
		p();
		let h = typeof e.addEventListener == "function", g = () => p();
		return h && (e.addEventListener("addtrack", g), e.addEventListener("removetrack", g)), () => {
			h && (e.removeEventListener("addtrack", g), e.removeEventListener("removetrack", g)), d.forEach((e) => e()), t && window.speechSynthesis.cancel(), r();
		};
	}, [
		o,
		s,
		u,
		l,
		d
	]), n(() => ({
		trackSrc: d,
		needsCrossOrigin: f,
		available: h,
		activeCue: g
	}), [
		d,
		f,
		h,
		g
	]);
}
//#endregion
export { o as useAudioDescription };
