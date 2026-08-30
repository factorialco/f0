import { useEffect as e, useState as t } from "react";
//#region src/kits/F0DataChart/utils/useFontsReady.ts
function n() {
	let [n, r] = t(() => typeof document > "u" || document.fonts === void 0);
	return e(() => {
		if (n) return;
		let e = !1;
		return document.fonts.ready.then(() => {
			e || r(!0);
		}), () => {
			e = !0;
		};
	}, [n]), n;
}
//#endregion
export { n as useFontsReady };
