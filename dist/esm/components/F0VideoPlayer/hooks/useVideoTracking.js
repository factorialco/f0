import { TRACKING_INTERVAL_MS as e } from "../utils.js";
import { useEffect as t, useRef as n } from "react";
//#region src/components/F0VideoPlayer/hooks/useVideoTracking.ts
function r({ video: r, onTrackAction: i }) {
	let a = n(i);
	a.current = i;
	let o = !!i;
	t(() => {
		if (!r || !o) return;
		let t = null, n = () => {
			t &&= (clearInterval(t), null);
		}, i = () => {
			a.current?.(), n(), t = setInterval(() => {
				a.current?.();
			}, e);
		}, s = () => {
			a.current?.(), n();
		}, c = () => n();
		return r.addEventListener("play", i), r.addEventListener("pause", s), r.addEventListener("ended", c), () => {
			n(), r.removeEventListener("play", i), r.removeEventListener("pause", s), r.removeEventListener("ended", c);
		};
	}, [r, o]);
}
//#endregion
export { r as useVideoTracking };
