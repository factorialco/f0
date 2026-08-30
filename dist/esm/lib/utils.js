import { clsx as e } from "clsx";
import { twMerge as t } from "tailwind-merge";
//#region src/lib/utils.ts
function n(...n) {
	return t(e(n));
}
function r(e) {
	return n("focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e);
}
//#endregion
export { n as cn, r as focusRing };
