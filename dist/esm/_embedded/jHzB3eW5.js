import { require_dist as e } from "./DyCG63P1.js";
import { isSafari as t } from "./D6FkPvY_.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/count-events-for-safari.js
var n = e(), r = {
	isLeavingWindow: Symbol("leaving"),
	isEnteringWindow: Symbol("entering")
};
function i(e) {
	var n = e.dragLeave;
	return t() ? n.hasOwnProperty(r.isLeavingWindow) : !1;
}
(function() {
	if (typeof window > "u" || process.env.NODE_ENV === "test" || !t()) return;
	function e() {
		return {
			enterCount: 0,
			isOverWindow: !1
		};
	}
	var i = e();
	function a() {
		i = e();
	}
	(0, n.bindAll)(window, [
		{
			type: "dragstart",
			listener: function() {
				i.enterCount = 0, i.isOverWindow = !0;
			}
		},
		{
			type: "drop",
			listener: a
		},
		{
			type: "dragend",
			listener: a
		},
		{
			type: "dragenter",
			listener: function(e) {
				!i.isOverWindow && i.enterCount === 0 && (e[r.isEnteringWindow] = !0), i.isOverWindow = !0, i.enterCount++;
			}
		},
		{
			type: "dragleave",
			listener: function(e) {
				i.enterCount--, i.isOverWindow && i.enterCount === 0 && (e[r.isLeavingWindow] = !0, i.isOverWindow = !1);
			}
		}
	], { capture: !0 });
})();
//#endregion
export { i as isLeavingWindowInSafari };
