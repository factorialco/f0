import { useEffect as e, useState as t } from "react";
//#region src/components/F0VideoPlayer/hooks/useVttSource.ts
var n = (e) => e.trimStart().startsWith("WEBVTT");
function r(r) {
	let i = r !== void 0 && n(r), [a, o] = t();
	return e(() => {
		if (r === void 0 || !n(r)) {
			o(void 0);
			return;
		}
		let e = URL.createObjectURL(new Blob([r], { type: "text/vtt" }));
		return o(e), () => URL.revokeObjectURL(e);
	}, [r]), {
		trackSrc: r === void 0 ? void 0 : i ? a : r,
		needsCrossOrigin: r !== void 0 && !i
	};
}
//#endregion
export { r as useVttSource };
