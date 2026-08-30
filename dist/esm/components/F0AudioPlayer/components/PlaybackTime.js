import { formatPlaybackTime as e } from "../utils.js";
import { cva as t } from "cva";
import { jsxs as n } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/PlaybackTime.tsx
var r = t({
	base: "shrink-0 font-medium tabular-nums text-f1-foreground-secondary",
	variants: { size: {
		sm: "text-xs",
		md: "text-sm"
	} }
}), i = ({ currentTime: t, duration: i, size: a = "md" }) => /* @__PURE__ */ n("span", {
	className: r({ size: a }),
	children: [
		e(t),
		" / ",
		e(i)
	]
});
//#endregion
export { i as PlaybackTime };
