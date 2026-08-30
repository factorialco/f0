import "../utils.js";
import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/components/F0VideoPlayer/hooks/useRestrictForwardSeek.ts
function i({ video: i, enabled: a, resetKey: o }) {
	let s = n(0), c = n(0), l = n(a);
	l.current = a;
	let [u, d] = r(0);
	return t(() => {
		s.current = 0, c.current = 0, d(0);
	}, [o]), t(() => {
		if (!i) return;
		let e = () => {
			l.current && i.currentTime > s.current + .25 && (i.currentTime = s.current);
		}, t = () => {
			d((e) => {
				let t = s.current;
				return t - e >= 1 ? t : e;
			});
		}, n = () => {
			d((e) => Math.max(e, s.current));
		}, r = () => {
			let n = i.currentTime - c.current;
			n >= 0 && n < 1 && i.currentTime > s.current && (s.current = i.currentTime, t()), e(), c.current = i.currentTime;
		}, a = () => {
			e(), n();
		};
		return i.addEventListener("timeupdate", r), i.addEventListener("seeking", a), i.addEventListener("seeked", a), i.addEventListener("pause", n), i.addEventListener("ended", n), () => {
			i.removeEventListener("timeupdate", r), i.removeEventListener("seeking", a), i.removeEventListener("seeked", a), i.removeEventListener("pause", n), i.removeEventListener("ended", n);
		};
	}, [i]), {
		maxWatchedTime: u,
		clampSeek: e((e) => l.current ? Math.min(e, s.current) : e, [])
	};
}
//#endregion
export { i as useRestrictForwardSeek };
