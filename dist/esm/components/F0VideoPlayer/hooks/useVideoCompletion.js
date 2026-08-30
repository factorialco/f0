import { COMPLETION_TAIL_RATIO as e } from "../utils.js";
import { useEffect as t, useRef as n } from "react";
//#region src/components/F0VideoPlayer/hooks/useVideoCompletion.ts
function r(t) {
	return t - Math.min(10, t * e);
}
function i({ video: e, onComplete: i, resetKey: a }) {
	let o = n(i);
	o.current = i;
	let s = n(!1), c = !!i;
	t(() => {
		s.current = !1;
	}, [a]), t(() => {
		if (!e || !c) return;
		let t = () => {
			s.current || !e.duration || e.currentTime >= r(e.duration) && (s.current = !0, o.current?.(e));
		};
		return e.addEventListener("timeupdate", t), e.addEventListener("ended", t), () => {
			e.removeEventListener("timeupdate", t), e.removeEventListener("ended", t);
		};
	}, [e, c]);
}
//#endregion
export { r as completionThreshold, i as useVideoCompletion };
