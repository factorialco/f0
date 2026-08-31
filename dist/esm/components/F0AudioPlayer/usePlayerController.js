import { useAudioPlayer as e } from "./useAudioPlayer.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
//#region src/components/F0AudioPlayer/usePlayerController.ts
var a = (a) => {
	let { src: o, duration: s, playing: c, onPlayingChange: l, playbackRates: u = [
		1,
		1.5,
		2
	], onPlay: d, onPause: f, onSeek: p, onTimeUpdate: m, onEnded: h, onError: g } = a, _ = typeof o == "function" ? o : void 0, v = typeof o == "function" ? void 0 : o, y = r(null), [b, x] = i(v), S = r(null), [C, w] = i(null), T = r(!1), E = r(!1), D = r(!1), O = t(async () => {
		if (!(!_ || T.current)) {
			T.current = !0;
			try {
				x(await _());
			} catch {
				E.current = !1, g?.(null);
			} finally {
				T.current = !1;
			}
		}
	}, [_, g]), k = t(() => {
		D.current = !1, d?.();
	}, [d]), A = t((e) => {
		g?.(e), !(!_ || D.current) && (D.current = !0, E.current = !0, x(void 0), O());
	}, [
		g,
		_,
		O
	]), j = e(y, {
		onPlay: k,
		onPause: f,
		onSeek: p,
		onTimeUpdate: m,
		onEnded: h,
		onError: A
	}, s ?? 0), M = j.seek, N = t((e) => {
		let t = y.current, n = Math.max(e, 0);
		if (t && b && t.readyState >= t.HAVE_METADATA) {
			M(n);
			return;
		}
		S.current = n, w(n);
	}, [M, b]);
	n(() => {
		let e = y.current;
		if (!e) return;
		let t = () => {
			let e = S.current;
			e !== null && (S.current = null, w(null), M(e));
		};
		return e.addEventListener("loadedmetadata", t), () => e.removeEventListener("loadedmetadata", t);
	}, [M]), n(() => {
		v !== void 0 && x(v);
	}, [v]), n(() => {
		!b || !E.current || (E.current = !1, j.play());
	}, [b, j]);
	let P = t(() => {
		if (!j.isPlaying && !b && _) {
			E.current = !0, O();
			return;
		}
		j.toggle();
	}, [
		j,
		b,
		_,
		O
	]);
	n(() => {
		c !== void 0 && (c && !j.isPlaying ? !b && _ ? (E.current = !0, O()) : j.play() : !c && j.isPlaying && j.pause());
	}, [
		c,
		j,
		b,
		_,
		O
	]);
	let F = r(j.isPlaying);
	n(() => {
		F.current !== j.isPlaying && (F.current = j.isPlaying, l?.(j.isPlaying));
	}, [j.isPlaying, l]);
	let I = C !== null && j.duration > 0 ? Math.min(C, j.duration) : null;
	return {
		audioRef: y,
		currentSrc: b,
		pendingTime: C,
		isPlaying: j.isPlaying,
		currentTime: I ?? j.currentTime,
		duration: j.duration,
		buffered: j.buffered,
		playbackRate: j.playbackRate,
		isLoading: j.isLoading,
		error: j.error,
		toggle: P,
		seek: N,
		setPlaybackRate: j.setPlaybackRate,
		playbackRates: u
	};
};
//#endregion
export { a as usePlayerController };
