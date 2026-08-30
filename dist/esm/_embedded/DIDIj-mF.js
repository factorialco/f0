import { require_dist as e } from "./DyCG63P1.js";
import { honeyPotDataAttribute as t } from "./BxyqP70i.js";
import n from "./DjbvCfWF.js";
import { maxZIndex as r } from "./DWu2PEWn.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/make-honey-pot-fix.js
var i = e();
function a(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function o(e) {
	for (var t = 1; t < arguments.length; t++) {
		var r = arguments[t] == null ? {} : arguments[t];
		t % 2 ? a(Object(r), !0).forEach(function(t) {
			n(e, t, r[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
		});
	}
	return e;
}
var s = 2, c = s / 2;
function l(e) {
	return {
		x: Math.floor(e.x),
		y: Math.floor(e.y)
	};
}
function u(e) {
	return {
		x: e.x - c,
		y: e.y - c
	};
}
function d(e) {
	return {
		x: Math.max(e.x, 0),
		y: Math.max(e.y, 0)
	};
}
function f(e) {
	return {
		x: Math.min(e.x, window.innerWidth - s),
		y: Math.min(e.y, window.innerHeight - s)
	};
}
function p(e) {
	var t = e.client, n = f(d(u(l(t))));
	return DOMRect.fromRect({
		x: n.x,
		y: n.y,
		width: s,
		height: s
	});
}
function m(e) {
	var t = e.clientRect;
	return {
		left: `${t.left}px`,
		top: `${t.top}px`,
		width: `${t.width}px`,
		height: `${t.height}px`
	};
}
function h(e) {
	var t = e.client, n = e.clientRect;
	return t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height;
}
function g(e) {
	var n = e.initial, a = document.createElement("div");
	a.setAttribute(t, "true");
	var s = p({ client: n });
	Object.assign(a.style, o(o({
		backgroundColor: "transparent",
		position: "fixed",
		padding: 0,
		margin: 0,
		boxSizing: "border-box"
	}, m({ clientRect: s })), {}, {
		pointerEvents: "auto",
		zIndex: r
	})), document.body.appendChild(a);
	var c = (0, i.bind)(window, {
		type: "pointermove",
		listener: function(e) {
			s = p({ client: {
				x: e.clientX,
				y: e.clientY
			} }), Object.assign(a.style, m({ clientRect: s }));
		},
		options: { capture: !0 }
	});
	return function(e) {
		var t = e.current;
		if (c(), h({
			client: t,
			clientRect: s
		})) {
			a.remove();
			return;
		}
		function n() {
			r(), a.remove();
		}
		var r = (0, i.bindAll)(window, [
			{
				type: "pointerdown",
				listener: n
			},
			{
				type: "pointermove",
				listener: n
			},
			{
				type: "focusin",
				listener: n
			},
			{
				type: "focusout",
				listener: n
			},
			{
				type: "dragstart",
				listener: n
			},
			{
				type: "dragenter",
				listener: n
			},
			{
				type: "dragover",
				listener: n
			}
		], { capture: !0 });
	};
}
function _() {
	var e = null;
	function t() {
		return e = null, (0, i.bind)(window, {
			type: "pointermove",
			listener: function(t) {
				e = {
					x: t.clientX,
					y: t.clientY
				};
			},
			options: { capture: !0 }
		});
	}
	function n() {
		var t = null;
		return function(n) {
			var r = n.eventName, i = n.payload;
			if (r === "onDragStart") {
				var a = i.location.initial.input;
				t = g({ initial: e ?? {
					x: a.clientX,
					y: a.clientY
				} });
			}
			if (r === "onDrop") {
				var o, s = i.location.current.input;
				(o = t) == null || o({ current: {
					x: s.clientX,
					y: s.clientY
				} }), t = null, e = null;
			}
		};
	}
	return {
		bindEvents: t,
		getOnPostDispatch: n
	};
}
//#endregion
export { _ as makeHoneyPotFix };
