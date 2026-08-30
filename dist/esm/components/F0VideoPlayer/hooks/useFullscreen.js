import { useCallback as e, useEffect as t, useState as n } from "react";
//#region src/components/F0VideoPlayer/hooks/useFullscreen.ts
function r({ targetRef: r }) {
	let [i, a] = n(!1);
	return t(() => {
		let e = () => {
			a(document.fullscreenElement === r.current);
		};
		return document.addEventListener("fullscreenchange", e), () => {
			document.removeEventListener("fullscreenchange", e);
		};
	}, [r]), {
		isFullscreen: i,
		toggleFullscreen: e(async () => {
			let e = r.current;
			if (e) try {
				document.fullscreenElement ? await document.exitFullscreen() : await e.requestFullscreen();
			} catch {}
		}, [r])
	};
}
//#endregion
export { r as useFullscreen };
