import e from "./C0tUD91s.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/dispatch-consumer-event.js
var t = e(function(e) {
	return e();
}), n = function() {
	var e = null;
	function t(t) {
		e = {
			frameId: requestAnimationFrame(function() {
				e = null, t();
			}),
			fn: t
		};
	}
	function n() {
		e &&= (cancelAnimationFrame(e.frameId), e.fn(), null);
	}
	return {
		schedule: t,
		flush: n
	};
}();
function r(e) {
	var r = e.source, i = e.initial, a = e.dispatchEvent, o = { dropTargets: [] };
	function s(e) {
		a(e), o = { dropTargets: e.payload.location.current.dropTargets };
	}
	return {
		start: function(e) {
			var t = e.nativeSetDragImage, a = {
				current: i,
				previous: o,
				initial: i
			};
			s({
				eventName: "onGenerateDragPreview",
				payload: {
					source: r,
					location: a,
					nativeSetDragImage: t
				}
			}), n.schedule(function() {
				s({
					eventName: "onDragStart",
					payload: {
						source: r,
						location: a
					}
				});
			});
		},
		dragUpdate: function(e) {
			var a = e.current;
			n.flush(), t.cancel(), s({
				eventName: "onDropTargetChange",
				payload: {
					source: r,
					location: {
						initial: i,
						previous: o,
						current: a
					}
				}
			});
		},
		drag: function(e) {
			var a = e.current;
			t(function() {
				n.flush(), s({
					eventName: "onDrag",
					payload: {
						source: r,
						location: {
							initial: i,
							previous: o,
							current: a
						}
					}
				});
			});
		},
		drop: function(e) {
			var a = e.current, c = e.updatedSourcePayload;
			n.flush(), t.cancel(), s({
				eventName: "onDrop",
				payload: {
					source: c ?? r,
					location: {
						current: a,
						previous: o,
						initial: i
					}
				}
			});
		}
	};
}
//#endregion
export { r as makeDispatch };
