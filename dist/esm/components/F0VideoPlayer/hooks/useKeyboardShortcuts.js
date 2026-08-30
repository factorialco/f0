import { VOLUME_STEP as e } from "../utils.js";
import { useCallback as t } from "react";
//#region src/components/F0VideoPlayer/hooks/useKeyboardShortcuts.ts
function n({ videoRef: n, seek: r, togglePlay: i, toggleMute: a, toggleFullscreen: o, setVolume: s }) {
	return t((t) => {
		let c = t.target;
		if (c instanceof HTMLElement && (c.closest("button, a, input, textarea, select, [role=\"button\"], [contenteditable=\"true\"]") || c.closest("[role=\"menu\"], [role^=\"menuitem\"]") || c.getAttribute("role") === "slider")) return;
		let l = n.current;
		if (l) switch (t.key.length === 1 ? t.key.toLowerCase() : t.key) {
			case " ":
				t.preventDefault(), i();
				return;
			case "ArrowLeft":
				t.preventDefault(), r(Math.max(0, l.currentTime - 5));
				return;
			case "ArrowRight": {
				t.preventDefault();
				let e = l.duration || l.currentTime + 5;
				r(Math.min(e, l.currentTime + 5));
				return;
			}
			case "ArrowUp":
				t.preventDefault(), s(Math.min(1, l.volume + e));
				return;
			case "ArrowDown":
				t.preventDefault(), s(Math.max(0, l.volume - e));
				return;
			case "m":
				t.preventDefault(), a();
				return;
			case "f":
				t.preventDefault(), o();
				return;
			default: return;
		}
	}, [
		n,
		r,
		i,
		a,
		o,
		s
	]);
}
//#endregion
export { n as useKeyboardShortcuts };
