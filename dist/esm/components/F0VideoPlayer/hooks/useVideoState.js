import { isPlaybackRate as e } from "../utils.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
//#region src/components/F0VideoPlayer/hooks/useVideoState.ts
function a(a) {
	let o = r(null), [s, c] = i(null), l = r(0), u = t((e) => {
		o.current = e, c(e);
	}, []), [d, f] = i(!1), [p, m] = i(!1), [h, g] = i(0), [_, v] = i(0), [y, b] = i(1), [x, S] = i(!1), [C, w] = i(1);
	return n(() => {
		l.current = 0, o.current && (o.current.playbackRate = 1), f(!1), m(!1), g(0), v(0), w(1);
	}, [a]), n(() => {
		let t = s;
		if (!t) return;
		let n = () => m(!0), r = () => m(!1), i = () => m(!1), a = () => {
			b(t.volume), S(t.muted);
		}, o = () => v(t.duration || 0), c = () => {
			e(t.playbackRate) && w(t.playbackRate);
		}, u = () => {
			let e = performance.now();
			e - l.current >= 250 && (l.current = e, g(t.currentTime));
		};
		return t.addEventListener("play", n), t.addEventListener("pause", r), t.addEventListener("ended", i), t.addEventListener("volumechange", a), t.addEventListener("loadedmetadata", o), t.addEventListener("ratechange", c), t.addEventListener("timeupdate", u), t.readyState >= 1 && t.duration && v(t.duration), () => {
			t.removeEventListener("play", n), t.removeEventListener("pause", r), t.removeEventListener("ended", i), t.removeEventListener("volumechange", a), t.removeEventListener("loadedmetadata", o), t.removeEventListener("ratechange", c), t.removeEventListener("timeupdate", u);
		};
	}, [s]), {
		videoRef: o,
		videoElement: s,
		setVideoNode: u,
		videoLoaded: d,
		isPlaying: p,
		currentTime: h,
		duration: _,
		volume: y,
		isMuted: x,
		playbackRate: C,
		setVideoLoaded: f,
		togglePlay: t(() => {
			let e = o.current;
			e && (e.paused || e.ended ? e.play().catch(() => {}) : e.pause());
		}, []),
		toggleMute: t(() => {
			let e = o.current;
			e && (e.muted = !e.muted);
		}, []),
		setVolume: t((e) => {
			let t = o.current;
			if (!t) return;
			let n = Math.max(0, Math.min(1, e));
			t.volume = n, t.muted = n === 0;
		}, []),
		setPlaybackRate: t((e) => {
			let t = o.current;
			t && (t.playbackRate = e);
		}, []),
		seekTo: t((e) => {
			let t = o.current;
			if (!t) return;
			let n = Math.max(0, Math.min(e, t.duration || e));
			t.currentTime = n, g(n);
		}, [])
	};
}
//#endregion
export { a as useVideoState };
