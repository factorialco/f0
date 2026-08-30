import { isFirefox as e } from "./CjyrMVaI.js";
import { isSafari as t } from "./D6FkPvY_.js";
import { isLeavingWindowInSafari as n } from "./jHzB3eW5.js";
import { isFromAnotherWindow as r } from "./BjMpEeL-.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-leaving-window.js
function i(i) {
	var a = i.dragLeave, o = a.type, s = a.relatedTarget;
	return o === "dragleave" ? t() ? n({ dragLeave: a }) : s == null ? !0 : e() ? r(s) : s instanceof HTMLIFrameElement : !1;
}
//#endregion
export { i as isLeavingWindow };
