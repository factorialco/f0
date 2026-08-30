import { cn as e } from "../../lib/utils.js";
import { useI18n as t } from "../../lib/providers/i18n/i18n-provider.js";
import { getDataAttributes as n } from "./utils.js";
import { AudioScrubber as r } from "./components/AudioScrubber.js";
import { LanguageSelect as i } from "./components/LanguageSelect.js";
import { PlaybackTime as a } from "./components/PlaybackTime.js";
import { PlayPauseButton as o } from "./components/PlayPauseButton.js";
import { preserveAudioPosition as s, useAudioLanguage as c } from "./useAudioLanguage.js";
import { usePlayerController as l } from "./usePlayerController.js";
import { forwardRef as u } from "react";
import { cva as d } from "cva";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/F0AudioPlayer.tsx
var m = d({
	base: "flex w-full items-center",
	variants: { size: {
		sm: "gap-2",
		md: "gap-3"
	} }
}), h = u((u, d) => {
	let { src: h, preload: g, autoPlay: _ = !1, disabled: v = !1, ariaLabel: y, size: b = "md", defaultLanguage: x, className: S } = u, C = t(), w = c(h, x), T = l({
		...u,
		src: w.resolvedSrc
	}), E = n(u), D = (e) => {
		s(T.audioRef.current), w.setLocale(e);
	};
	return /* @__PURE__ */ p("div", {
		ref: d,
		role: "group",
		"aria-label": y ?? C.audioPlayer.label,
		className: e(m({ size: b }), S),
		...E,
		children: [
			/* @__PURE__ */ f("audio", {
				ref: T.audioRef,
				src: T.currentSrc,
				preload: g ?? (typeof w.resolvedSrc == "function" ? "none" : "metadata"),
				autoPlay: _
			}),
			/* @__PURE__ */ f(o, {
				isPlaying: T.isPlaying,
				disabled: v,
				size: b,
				onToggle: T.toggle
			}),
			/* @__PURE__ */ f(r, {
				currentTime: T.currentTime,
				duration: T.duration,
				buffered: T.buffered,
				disabled: v,
				onSeek: T.seek
			}),
			/* @__PURE__ */ f(a, {
				currentTime: T.currentTime,
				duration: T.duration,
				size: b
			}),
			w.languages.length > 1 && w.activeLocale && /* @__PURE__ */ f(i, {
				value: w.activeLocale,
				options: w.languages,
				onChange: D,
				kind: C.audioPlayer.audio
			})
		]
	});
});
h.displayName = "F0AudioPlayer";
//#endregion
export { h as F0AudioPlayerBase };
