import { useAudioPlayer as e } from "./useAudioPlayer.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
//#region src/components/F0AudioPlayer/usePlayerController.ts
var a = (a) => {
	let { src: o, duration: s, playing: c, onPlayingChange: l, playbackRates: u = [
		1,
		1.5,
		2
	], onPlay: d, onPause: f, onSeek: p, onTimeUpdate: m, onEnded: h, onError: g } = a, _ = typeof o == "function" ? o : void 0, v = typeof o == "function" ? void 0 : o, y = r(null), [b, x] = i(v), S = r(!1), C = r(!1), w = r(!1), T = t(async () => {
		if (!(!_ || S.current)) {
			S.current = !0;
			try {
				x(await _());
			} catch {
				C.current = !1, g?.(null);
			} finally {
				S.current = !1;
			}
		}
	}, [_, g]), E = t(() => {
		w.current = !1, d?.();
	}, [d]), D = t((e) => {
		g?.(e), !(!_ || w.current) && (w.current = !0, C.current = !0, x(void 0), T());
	}, [
		g,
		_,
		T
	]), O = e(y, {
		onPlay: E,
		onPause: f,
		onSeek: p,
		onTimeUpdate: m,
		onEnded: h,
		onError: D
	}, s ?? 0);
	n(() => {
		v !== void 0 && x(v);
	}, [v]), n(() => {
		!b || !C.current || (C.current = !1, O.play());
	}, [b, O]);
	let k = t(() => {
		if (!O.isPlaying && !b && _) {
			C.current = !0, T();
			return;
		}
		O.toggle();
	}, [
		O,
		b,
		_,
		T
	]);
	n(() => {
		c !== void 0 && (c && !O.isPlaying ? !b && _ ? (C.current = !0, T()) : O.play() : !c && O.isPlaying && O.pause());
	}, [
		c,
		O,
		b,
		_,
		T
	]);
	let A = r(O.isPlaying);
	return n(() => {
		A.current !== O.isPlaying && (A.current = O.isPlaying, l?.(O.isPlaying));
	}, [O.isPlaying, l]), {
		audioRef: y,
		currentSrc: b,
		isPlaying: O.isPlaying,
		currentTime: O.currentTime,
		duration: O.duration,
		buffered: O.buffered,
		playbackRate: O.playbackRate,
		isLoading: O.isLoading,
		error: O.error,
		toggle: k,
		seek: O.seek,
		setPlaybackRate: O.setPlaybackRate,
		playbackRates: u
	};
};
//#endregion
export { a as usePlayerController };
