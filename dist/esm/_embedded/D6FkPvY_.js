import { once as e } from "./auabBO2e.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-safari.js
var t = e(function() {
	if (process.env.NODE_ENV === "test") return !1;
	var e = navigator.userAgent;
	return e.includes("AppleWebKit") && !e.includes("Chrome");
});
//#endregion
export { t as isSafari };
