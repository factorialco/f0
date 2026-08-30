import { cn as e, focusRing as t } from "../../../lib/utils.js";
import n from "../../../icons/app/SolidPause.js";
import r from "../../../icons/app/SolidPlay.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/PlayPauseButton.tsx
var o = ({ isPlaying: o, disabled: s, size: c = "md", onToggle: l }) => {
	let u = i(), d = o ? n : r;
	return /* @__PURE__ */ a("button", {
		type: "button",
		"aria-label": o ? u.audioPlayer.pause : u.audioPlayer.play,
		disabled: s,
		onClick: l,
		className: e("flex shrink-0 items-center justify-center rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary text-f1-foreground-secondary transition-colors dark:bg-f1-background-tertiary", "hover:bg-f1-background-secondary disabled:cursor-not-allowed disabled:opacity-50", c === "sm" ? "size-8" : "size-10", t()),
		children: /* @__PURE__ */ a(d, { className: c === "sm" ? "size-5" : "size-6" })
	});
};
//#endregion
export { o as PlayPauseButton };
