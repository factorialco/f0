import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { Slider as n, SliderThumb as r, SliderTrack as i } from "../../../ui/slider.js";
import { formatPlaybackTime as a } from "../utils.js";
import { useCallback as o, useEffect as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/F0AudioPlayer/components/AudioScrubber.tsx
var f = ({ currentTime: f, duration: p, buffered: m = 0, disabled: h, onSeek: g }) => {
	let _ = t(), [v, y] = l(null), b = p > 0 ? p : 0, x = v ?? f, S = b > 0 ? Math.min(Math.max(x, 0), b) / b * 100 : 0, C = b > 0 ? Math.min(m / b * 100, 100) : 0, w = h || b === 0, T = c(null), [E, D] = l(0);
	s(() => {
		let e = T.current;
		if (!e) return;
		let t = () => D(e.clientWidth);
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let O = E > 0 ? `${Math.round(E * S / 100)}px` : `${S}%`, k = o((e) => {
		let [t] = e;
		t !== void 0 && y(t);
	}, []), A = o((e) => {
		let [t] = e;
		y(null), t !== void 0 && g(t);
	}, [g]);
	return /* @__PURE__ */ d(n, {
		value: [x],
		onValueChange: k,
		onValueCommit: A,
		min: 0,
		max: b || 1,
		step: 1,
		disabled: w,
		className: e("group relative flex w-full touch-none select-none items-center py-2", h && "opacity-50"),
		children: [
			/* @__PURE__ */ d(i, {
				ref: T,
				className: "relative h-2 grow overflow-hidden rounded bg-f1-background-tertiary",
				children: [/* @__PURE__ */ u("span", {
					"aria-hidden": !0,
					className: "absolute h-full bg-f1-background-secondary",
					style: { width: `${C}%` }
				}), /* @__PURE__ */ u("span", {
					"aria-hidden": !0,
					className: "absolute h-full bg-f1-background-selected-bold",
					style: { width: `${S}%` }
				})]
			}),
			!w && /* @__PURE__ */ u("span", {
				"aria-hidden": !0,
				style: { left: O },
				className: e("pointer-events-none absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-f1-background-selected-bold opacity-0 transition-opacity", "group-hover:opacity-100 group-has-[:focus-visible]:opacity-100", "group-has-[:focus-visible]:ring-1 group-has-[:focus-visible]:ring-f1-special-ring group-has-[:focus-visible]:ring-offset-1")
			}),
			/* @__PURE__ */ u(r, {
				"aria-label": _.audioPlayer.seek,
				"aria-valuetext": _.t("audioPlayer.position", {
					current: a(x),
					total: a(b)
				}),
				className: "block size-3 opacity-0 focus-visible:outline-none"
			})
		]
	});
};
//#endregion
export { f as AudioScrubber };
