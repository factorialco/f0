import { useEffect as e, useState as t } from "react";
//#region src/components/F0AudioPlayer/useDerivedTranscription.ts
var n = /* @__PURE__ */ new Set([
	"captions",
	"subtitles",
	"descriptions",
	"metadata"
]), r = (e) => n.has(e), i = (e, t) => {
	let n = e.querySelectorAll("track");
	for (let e of Array.from(n)) if (e.track === t) return !1;
	return !0;
}, a = (e) => {
	let t = e.cues;
	if (!t || t.length === 0) return "";
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].text;
		typeof r == "string" && r.trim() && n.push(r.trim());
	}
	return n.join("\n");
}, o = (n, o, s) => {
	let [c, l] = t();
	return e(() => {
		if (!s) {
			l(void 0);
			return;
		}
		let e = n.current;
		if (!e) return;
		let t = e.textTracks, o = () => {
			let n = Array.from(t).filter((e) => r(e.kind));
			n.sort((t, n) => Number(i(e, n)) - Number(i(e, t)));
			for (let e of n) {
				e.mode === "disabled" && (e.mode = "hidden");
				let t = a(e);
				if (t) {
					l(t);
					return;
				}
			}
		};
		o();
		let c = [], u = (e) => {
			if (typeof e.addEventListener != "function") return;
			let t = () => o();
			e.addEventListener("cuechange", t), c.push(() => e.removeEventListener("cuechange", t));
		};
		Array.from(t).forEach(u);
		let d = (e) => {
			e.track && u(e.track), o();
		}, f = typeof t.addEventListener == "function";
		return f && t.addEventListener("addtrack", d), () => {
			f && t.removeEventListener("addtrack", d), c.forEach((e) => e());
		};
	}, [
		n,
		s,
		o
	]), c;
};
//#endregion
export { o as useDerivedTranscription };
