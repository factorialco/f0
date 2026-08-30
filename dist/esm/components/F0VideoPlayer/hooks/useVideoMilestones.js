import { DEFAULT_MILESTONES as e } from "../utils.js";
import { useEffect as t, useRef as n } from "react";
//#region src/components/F0VideoPlayer/hooks/useVideoMilestones.ts
function r({ video: r, onMilestone: i, resetKey: a }) {
	let o = n(i);
	o.current = i;
	let s = n(/* @__PURE__ */ new Set()), c = !!i;
	t(() => {
		s.current.clear();
	}, [a]), t(() => {
		if (!r || !c) return;
		let t = () => {
			if (!r.duration) return;
			let t = Math.round(r.currentTime / r.duration * 100);
			for (let n of e) s.current.has(n) || t >= n && (s.current.add(n), o.current?.(n, r));
		};
		return r.addEventListener("timeupdate", t), () => {
			r.removeEventListener("timeupdate", t);
		};
	}, [r, c]);
}
//#endregion
export { r as useVideoMilestones };
