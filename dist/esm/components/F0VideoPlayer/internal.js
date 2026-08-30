import { cn as e, focusRing as t } from "../../lib/utils.js";
import { F0Icon as n } from "../F0Icon/index.js";
import r from "../../icons/app/SolidPlay.js";
import { useI18n as i } from "../../lib/providers/i18n/i18n-provider.js";
import { collectLanguages as a, defaultLocale as o, resolveLocalized as s } from "../../lib/localized.js";
import { Controls as ee } from "./components/Controls.js";
import { useAudioDescription as te } from "./hooks/useAudioDescription.js";
import { useFullscreen as ne } from "./hooks/useFullscreen.js";
import { useKeyboardShortcuts as re } from "./hooks/useKeyboardShortcuts.js";
import { useRestrictForwardSeek as ie } from "./hooks/useRestrictForwardSeek.js";
import { useVideoCaptions as ae } from "./hooks/useVideoCaptions.js";
import { useVideoCompletion as oe } from "./hooks/useVideoCompletion.js";
import { useVideoMilestones as se } from "./hooks/useVideoMilestones.js";
import { useVideoState as ce } from "./hooks/useVideoState.js";
import { useVideoTracking as le } from "./hooks/useVideoTracking.js";
import { useCallback as c, useEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/internal.tsx
function h({ src: h, poster: g, ariaLabel: ue, silent: _ = !1, persistControls: de = !1, content: v, defaultLanguage: y, autoPlay: b = !1, autoFocus: x = !1, download: S, restrictForwardSeek: C = !1, onTrackAction: w, onMilestone: fe, onComplete: pe, ...me }) {
	let { t: T } = i(), E = d(null), D = u(() => a(h), [h]), [O, he] = f(() => o(D, y)), k = D.some((e) => e.locale === O) ? O : o(D, y), A = s(h, k) ?? "", j = u(() => a(v?.captions), [v?.captions]), [M, N] = f(() => o(j, y)), P = j.some((e) => e.locale === M) ? M : o(j, y), F = s(v?.captions, P), I = u(() => a(v?.descriptions, v?.describedSrc), [v?.descriptions, v?.describedSrc]), [L, R] = f(() => o(I, y)), z = I.some((e) => e.locale === L) ? L : o(I, y), ge = s(v?.descriptions, z), B = s(v?.describedSrc, z), [V, H] = f(!1), U = V && B ? B : A, W = ce(U), G = ae(W.videoElement, F), K = te(W.videoElement, {
		enabled: V,
		describedSrc: B,
		descriptions: ge
	}), q = c(() => {
		let e = W.videoRef.current;
		if (!e) return;
		let t = e.currentTime, n = !e.paused, r = () => {
			e.currentTime = t, n && e.play().catch(() => {}), e.removeEventListener("loadedmetadata", r);
		};
		e.addEventListener("loadedmetadata", r);
	}, [W.videoRef]), _e = c((e) => {
		q(), he(e);
	}, [q]), ve = c(() => {
		B && q(), H((e) => !e);
	}, [B, q]), ye = c((e) => {
		N(e), G.showing || G.toggle();
	}, [G]), be = c(() => {
		G.showing && G.toggle();
	}, [G]), xe = c((e) => {
		B && q(), R(e), H(!0);
	}, [B, q]), Se = c(() => {
		B && q(), H(!1);
	}, [B, q]);
	le({
		video: W.videoElement,
		onTrackAction: w
	}), se({
		video: W.videoElement,
		onMilestone: fe,
		resetKey: A
	}), oe({
		video: W.videoElement,
		onComplete: pe,
		resetKey: A
	});
	let { maxWatchedTime: Ce, clampSeek: J } = ie({
		video: W.videoElement,
		enabled: C,
		resetKey: A
	}), Y = c((e) => W.seekTo(J(e)), [W, J]), { isFullscreen: X, toggleFullscreen: Z } = ne({ targetRef: E }), Q = c(() => {}, []), $ = !!(V && B);
	l(() => {
		let e = W.videoRef.current;
		_ && e && (e.muted = !$);
	}, [
		_,
		$,
		W.videoElement,
		W.videoRef
	]);
	let we = re({
		videoRef: W.videoRef,
		seek: Y,
		togglePlay: W.togglePlay,
		toggleMute: _ ? Q : W.toggleMute,
		toggleFullscreen: Z,
		setVolume: _ ? Q : W.setVolume
	});
	l(() => {
		x && E.current?.focus({ preventScroll: !0 });
	}, [x]);
	let Te = (e) => e.preventDefault();
	return /* @__PURE__ */ m("div", {
		ref: E,
		className: e("group relative h-full w-full overflow-hidden rounded-[inherit] bg-f1-foreground dark:bg-f1-background", "[&:fullscreen]:h-screen [&:fullscreen]:w-screen [&:fullscreen]:rounded-none", t()),
		role: "region",
		"aria-label": ue ?? T("videoPlayer.regionLabel"),
		tabIndex: 0,
		onKeyDown: we,
		"data-video-captions": _ ? "no-audio" : G.available ? "available" : "missing",
		...me,
		children: [
			/* @__PURE__ */ m("video", {
				ref: W.setVideoNode,
				autoPlay: b,
				playsInline: !0,
				disablePictureInPicture: !0,
				disableRemotePlayback: !0,
				draggable: !1,
				onContextMenu: Te,
				onClick: W.togglePlay,
				src: U,
				poster: g,
				crossOrigin: G.needsCrossOrigin || K.needsCrossOrigin ? "anonymous" : void 0,
				onLoadedData: () => W.setVideoLoaded(!0),
				className: e("block h-full w-full cursor-pointer rounded-[inherit] object-contain transition-opacity duration-300", "[&::-webkit-media-text-track-container]:![transform:translateY(-3.5rem)]"),
				style: { opacity: W.videoLoaded || g ? 1 : 0 },
				children: [G.trackSrc && /* @__PURE__ */ p("track", {
					kind: "captions",
					src: G.trackSrc,
					label: T("videoPlayer.captions"),
					default: !1
				}), K.trackSrc && /* @__PURE__ */ p("track", {
					kind: "descriptions",
					src: K.trackSrc,
					label: T("videoPlayer.audioDescription"),
					default: !1
				})]
			}),
			!W.isPlaying && /* @__PURE__ */ p("div", {
				"aria-hidden": !0,
				"data-video-play-overlay": !0,
				className: "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center",
				children: /* @__PURE__ */ p("button", {
					type: "button",
					tabIndex: -1,
					onClick: W.togglePlay,
					className: "pointer-events-auto flex size-14 items-center justify-center rounded-full bg-f1-foreground/70 pl-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:scale-105 motion-reduce:transition-none dark:bg-f1-background/70 [&_svg]:size-7",
					children: /* @__PURE__ */ p(n, {
						icon: r,
						size: "lg",
						color: "#fff"
					})
				})
			}),
			G.showing && K.activeCue && /* @__PURE__ */ p("div", {
				"aria-hidden": !0,
				className: "dark pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center p-3",
				children: /* @__PURE__ */ m("p", {
					className: "max-w-[90%] rounded-md bg-f1-background/70 px-2 py-1 text-center text-base italic text-f1-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]",
					children: [/* @__PURE__ */ m("span", {
						className: "pr-1 font-medium not-italic opacity-70",
						children: [
							"[",
							T("videoPlayer.audioDescription"),
							"]"
						]
					}), K.activeCue]
				})
			}),
			/* @__PURE__ */ p("span", {
				className: "sr-only",
				"aria-live": "polite",
				children: W.isPlaying ? T("videoPlayer.playing") : T("videoPlayer.paused")
			}),
			W.videoLoaded && /* @__PURE__ */ p(ee, {
				isPlaying: W.isPlaying,
				currentTime: W.currentTime,
				duration: W.duration,
				volume: W.volume,
				isMuted: W.isMuted,
				playbackRate: W.playbackRate,
				isFullscreen: X,
				markerTime: C ? Ce : void 0,
				blockSeekPastMarker: C,
				containerRef: E,
				captionsAvailable: G.available,
				captionsOn: G.showing,
				audioDescriptionAvailable: K.available,
				audioDescriptionOn: V,
				silent: _,
				persist: de,
				audioLanguages: D,
				audioLanguage: k,
				onAudioLanguageChange: _e,
				captionLanguages: j,
				captionLanguage: P,
				onCaptionLanguageChange: ye,
				onCaptionsOff: be,
				audioDescriptionLanguages: I,
				audioDescriptionLanguage: z,
				onAudioDescriptionLanguageChange: xe,
				onAudioDescriptionOff: Se,
				onTogglePlay: W.togglePlay,
				onToggleMute: W.toggleMute,
				onVolumeChange: W.setVolume,
				onPlaybackRateChange: W.setPlaybackRate,
				onToggleFullscreen: () => void Z(),
				onToggleCaptions: G.toggle,
				onToggleAudioDescription: ve,
				onSeek: Y,
				download: S
			})
		]
	});
}
//#endregion
export { h as F0VideoPlayerInternal };
