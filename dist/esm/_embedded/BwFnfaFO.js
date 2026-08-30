import { lifecycle as e } from "./D4NwFgfW.js";
import { register as t } from "./bMm-Atj-.js";
import { makeDropTarget as n } from "./CHDKGsf0.js";
import { makeMonitor as r } from "./NOfjVzyW.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-adapter.js
function i(i) {
	var a = i.typeKey, o = i.mount, s = i.dispatchEventToSource, c = i.onPostDispatch, l = i.defaultDropEffect, u = r(), d = n({
		typeKey: a,
		defaultDropEffect: l
	});
	function f(e) {
		s?.(e), d.dispatchEvent(e), u.dispatchEvent(e), c?.(e);
	}
	function p(t) {
		var n = t.event, r = t.dragType;
		e.start({
			event: n,
			dragType: r,
			getDropTargetsOver: d.getIsOver,
			dispatchEvent: f
		});
	}
	function m() {
		function n() {
			return o({
				canStart: e.canStart,
				start: p
			});
		}
		return t({
			typeKey: a,
			mount: n
		});
	}
	return {
		registerUsage: m,
		dropTarget: d.dropTargetForConsumers,
		monitor: u.monitorForConsumers
	};
}
//#endregion
export { i as makeAdapter };
