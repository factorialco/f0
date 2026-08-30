import { useEffect as e, useState as t } from "react";
//#region src/lib/useTouchScreen.ts
function n() {
	let [n, r] = t(!1);
	return e(() => {
		r(window.matchMedia("(pointer: coarse)").matches);
	}, []), n;
}
//#endregion
export { n as useTouchScreen };
