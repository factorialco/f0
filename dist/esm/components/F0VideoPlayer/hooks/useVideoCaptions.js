import { useVttSource as e } from "./useVttSource.js";
import { useEffect as t, useMemo as n, useState as r } from "react";
//#region src/components/F0VideoPlayer/hooks/useVideoCaptions.ts
var i = /* @__PURE__ */ new Set(["captions", "subtitles"]), a = 2, o = 3;
function s(s, c) {
	let { trackSrc: l, needsCrossOrigin: u } = e(c), [d, f] = r(!1), [p, m] = r(!1), [h, g] = r(!1), _ = p || c !== void 0 && !h;
	return t(() => {
		g(!1), m(!1);
	}, [l]), t(() => {
		if (!s) return;
		let e = s.textTracks, t = s.querySelector("track[kind=\"captions\"]"), n = () => {
			let n = !1;
			for (let t = 0; t < e.length; t++) {
				let r = e[t];
				i.has(r.kind) && (r.mode = d ? "showing" : "hidden", r.cues && r.cues.length > 0 && (n = !0));
			}
			if (m(n), t) {
				if (t.readyState === o) g(!0);
				else if (t.readyState === a) {
					let e = t.track?.cues;
					g(!e || e.length === 0);
				}
			}
		};
		n();
		let r = [];
		if (t) {
			let e = () => n(), i = () => g(!0);
			t.addEventListener("load", e), t.addEventListener("error", i), r.push(() => {
				t.removeEventListener("load", e), t.removeEventListener("error", i);
			});
		}
		for (let t = 0; t < e.length; t++) {
			let a = e[t];
			if (!i.has(a.kind) || typeof a.addEventListener != "function") continue;
			let o = () => n();
			a.addEventListener("cuechange", o), r.push(() => a.removeEventListener("cuechange", o));
		}
		let c = typeof e.addEventListener == "function", l = () => n();
		return c && (e.addEventListener("addtrack", l), e.addEventListener("removetrack", l)), s.addEventListener("loadedmetadata", n), () => {
			r.forEach((e) => e()), c && (e.removeEventListener("addtrack", l), e.removeEventListener("removetrack", l)), s.removeEventListener("loadedmetadata", n);
		};
	}, [
		s,
		c,
		d,
		l
	]), n(() => ({
		trackSrc: l,
		needsCrossOrigin: u,
		available: _,
		showing: d,
		toggle: () => f((e) => !e)
	}), [
		l,
		u,
		_,
		d
	]);
}
//#endregion
export { s as useVideoCaptions };
