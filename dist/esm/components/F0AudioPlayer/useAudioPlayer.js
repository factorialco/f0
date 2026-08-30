import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/components/F0AudioPlayer/useAudioPlayer.ts
var i = (i, a = {}, o = 0) => {
	let s = n(a);
	s.current = a;
	let c = n(o);
	c.current = o;
	let [l, u] = r(!1), [d, f] = r(0), [p, m] = r(o), [h, g] = r(0), [_, v] = r(1), [y, b] = r(!0), [x, S] = r(null);
	t(() => {
		let e = i.current;
		if (!e) return;
		let t = () => {
			m(Number.isFinite(e.duration) ? e.duration : c.current), b(!1);
		}, n = () => {
			f(e.currentTime), s.current.onTimeUpdate?.(e.currentTime);
		}, r = () => {
			u(!0), s.current.onPlay?.();
		}, a = () => {
			u(!1), s.current.onPause?.();
		}, o = () => {
			u(!1), s.current.onEnded?.();
		}, l = () => {
			e.buffered.length > 0 && g(e.buffered.end(e.buffered.length - 1));
		}, d = () => b(!0), p = () => b(!1), h = () => v(e.playbackRate), _ = () => {
			S(e.error), b(!1), s.current.onError?.(e.error);
		};
		return e.addEventListener("loadedmetadata", t), e.addEventListener("timeupdate", n), e.addEventListener("play", r), e.addEventListener("pause", a), e.addEventListener("ended", o), e.addEventListener("progress", l), e.addEventListener("waiting", d), e.addEventListener("canplay", p), e.addEventListener("ratechange", h), e.addEventListener("error", _), e.readyState >= 1 && t(), () => {
			e.removeEventListener("loadedmetadata", t), e.removeEventListener("timeupdate", n), e.removeEventListener("play", r), e.removeEventListener("pause", a), e.removeEventListener("ended", o), e.removeEventListener("progress", l), e.removeEventListener("waiting", d), e.removeEventListener("canplay", p), e.removeEventListener("ratechange", h), e.removeEventListener("error", _);
		};
	}, [i]);
	let C = e(() => {
		i.current?.play().catch(() => {});
	}, [i]), w = e(() => {
		i.current?.pause();
	}, [i]);
	return {
		isPlaying: l,
		currentTime: d,
		duration: p,
		buffered: h,
		playbackRate: _,
		isLoading: y,
		error: x,
		play: C,
		pause: w,
		toggle: e(() => {
			l ? w() : C();
		}, [
			l,
			C,
			w
		]),
		seek: e((e) => {
			let t = i.current;
			if (!t) return;
			let n = Number.isFinite(t.duration) ? t.duration : e, r = Math.min(Math.max(e, 0), n);
			t.currentTime = r, f(r), s.current.onSeek?.(r);
		}, [i]),
		setPlaybackRate: e((e) => {
			let t = i.current;
			t && (t.playbackRate = e, v(e));
		}, [i])
	};
};
//#endregion
export { i as useAudioPlayer };
