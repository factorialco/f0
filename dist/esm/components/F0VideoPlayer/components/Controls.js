import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Download.js";
import n from "../../../icons/app/Maximize.js";
import r from "../../../icons/app/Minimize.js";
import i from "../../../icons/app/SolidPause.js";
import a from "../../../icons/app/SolidPlay.js";
import { useI18n as o } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as s } from "../../F0Button/F0Button.js";
import { formatTime as c } from "../utils.js";
import { AudioDescriptionFilledIcon as l, AudioDescriptionLineIcon as u } from "./AudioDescriptionToggleIcons.js";
import { CaptionsFilledIcon as d, CaptionsLineIcon as f } from "./CaptionsToggleIcons.js";
import { PlaybackRateMenu as p } from "./PlaybackRateMenu.js";
import { SettingsMenu as m, hasSettingsMenu as h } from "./SettingsMenu.js";
import { Seekbar as ee } from "./Seekbar.js";
import { VolumeControl as te } from "./VolumeControl.js";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/F0VideoPlayer/components/Controls.tsx
function v({ isPlaying: v, currentTime: y, duration: b, volume: x, isMuted: S, playbackRate: C, isFullscreen: w, markerTime: T, blockSeekPastMarker: E, containerRef: D, captionsAvailable: O, captionsOn: k, audioDescriptionAvailable: A, audioDescriptionOn: j, silent: M, persist: N, audioLanguages: P, audioLanguage: ne, onAudioLanguageChange: F, captionLanguages: I, captionLanguage: L, onCaptionLanguageChange: R, onCaptionsOff: z, audioDescriptionLanguages: B, audioDescriptionLanguage: V, onAudioDescriptionLanguageChange: H, onAudioDescriptionOff: U, onTogglePlay: W, onToggleMute: G, onVolumeChange: K, onPlaybackRateChange: q, onToggleFullscreen: J, onToggleCaptions: Y, onToggleAudioDescription: X, onSeek: Z, download: Q }) {
	let { t: $ } = o(), re = O && I.length <= 1, ie = A && B.length <= 1, ae = h({
		audioLanguages: P.length,
		captionLanguages: I.length,
		audioDescriptionLanguages: B.length
	});
	return /* @__PURE__ */ _("div", {
		className: e("dark absolute inset-x-0 bottom-0 z-[2] flex select-none items-center gap-2", "rounded-b-[inherit] bg-gradient-to-t from-[#000000f2] via-[#000000b3] to-transparent px-3 py-3", "[text-shadow:0_1px_2px_rgba(0,0,0,0.55)] [&_svg]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]", "transition-opacity duration-200 motion-reduce:transition-none", !v || N ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"),
		children: [
			/* @__PURE__ */ g(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: v ? i : a,
				label: $(v ? "videoPlayer.pause" : "videoPlayer.play"),
				onClick: W
			}),
			/* @__PURE__ */ g(ee, {
				currentTime: y,
				duration: b,
				markerTime: T,
				blockSeekPastMarker: E,
				onSeek: Z
			}),
			/* @__PURE__ */ _("span", {
				className: "min-w-[80px] whitespace-nowrap text-center text-base font-medium tabular-nums text-f1-foreground",
				children: [
					c(y),
					" / ",
					c(b)
				]
			}),
			/* @__PURE__ */ g(te, {
				volume: x,
				isMuted: S,
				onToggleMute: G,
				onVolumeChange: K,
				silent: M
			}),
			/* @__PURE__ */ g(p, {
				value: C,
				onChange: q,
				containerRef: D
			}),
			re && /* @__PURE__ */ g(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: k ? d : f,
				label: $("videoPlayer.captions"),
				"aria-pressed": k,
				onClick: Y
			}),
			ie && /* @__PURE__ */ g(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: j ? l : u,
				label: $("videoPlayer.audioDescription"),
				"aria-pressed": j,
				onClick: X
			}),
			ae && /* @__PURE__ */ g(m, {
				containerRef: D,
				audioLanguages: P,
				audioLanguage: ne,
				onAudioLanguageChange: F,
				captionLanguages: I,
				captionLanguage: L,
				captionsOn: k,
				onCaptionLanguageChange: R,
				onCaptionsOff: z,
				audioDescriptionLanguages: B,
				audioDescriptionLanguage: V,
				audioDescriptionOn: j,
				onAudioDescriptionLanguageChange: H,
				onAudioDescriptionOff: U
			}),
			Q && /* @__PURE__ */ g(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: t,
				label: Q.label,
				onClick: Q.onClick
			}),
			/* @__PURE__ */ g(s, {
				variant: "ghost",
				size: "sm",
				hideLabel: !0,
				icon: w ? r : n,
				label: $(w ? "videoPlayer.exitFullscreen" : "videoPlayer.enterFullscreen"),
				onClick: J
			})
		]
	});
}
//#endregion
export { v as Controls };
